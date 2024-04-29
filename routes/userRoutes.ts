import { Router, Request, Response } from "express";
import User, { IUser } from "../models/User";

const router = Router();

router.post("/register", async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    // Проверяем, существует ли уже пользователь с таким email
    // let user = await User.findOne({ email });
    // if (user) {
    //   return res
    //     .status(400)
    //     .json({ message: "Пользователь уже существует" });
    // }

    // Создаем нового пользователя
    let user = new User({
      username,
      email,
      password,
    } as IUser);

    // Сохраняем пользователя в базе данных
    await user.save();

    res.status(201).json({ message: "Пользователь создан" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
