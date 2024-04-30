import "dotenv/config";
import express, { Application } from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import db from "./database";

const app: Application = express();

// Базовая настройка middleware
app.use(cors());
app.use(express.json());

// Подключение роутов
app.use("/api/users", userRoutes);

// Проверка подключения к БД MySQL
db.query("SELECT 1")
  .then(() => {
    console.log("Connected to MySQL database successfully.");
  })
  .catch((err) => {
    console.error("Failed to connect to MySQL database:", err);
  });

const PORT: number = parseInt(process.env.PORT as string, 10) || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
