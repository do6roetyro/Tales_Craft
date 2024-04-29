"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes")); // Убедитесь, что userRoutes экспортируется как TypeScript модуль
const app = (0, express_1.default)();
// Базовая настройка middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Подключение роутов
app.use('/api/users', userRoutes_1.default);
// Подключение к MongoDB
mongoose_1.default.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
const PORT = parseInt(process.env.PORT, 10) || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
