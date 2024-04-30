import { Router, Request, Response } from "express";
import { findUserByEmail, createUser } from "../models/UserModel";
import bcrypt from "bcryptjs";

const router = Router();

router.post("/register", async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    // Проверяем, существует ли уже пользователь с таким email
    let user = await findUserByEmail(email);
    if (user) {
      return res.status(400).json({ message: "Пользователь уже существует" });
    }

    // Хешируем пароль перед сохранением в базу данных
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Создаем нового пользователя
    await createUser({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Пользователь создан" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router
