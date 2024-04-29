"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = __importDefault(require("../models/User"));
const router = (0, express_1.Router)();
router.post("/register", async (req, res) => {
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
        let user = new User_1.default({
            username,
            email,
            password,
        });
        // Сохраняем пользователя в базе данных
        await user.save();
        res.status(201).json({ message: "Пользователь создан" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.default = router;
