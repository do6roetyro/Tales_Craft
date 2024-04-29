
import 'dotenv/config';
import express, { Application } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes'; // Убедитесь, что userRoutes экспортируется как TypeScript модуль

const app: Application = express();

// Базовая настройка middleware
app.use(cors());
app.use(express.json());

// Подключение роутов
app.use('/api/users', userRoutes);

// Подключение к MongoDB
mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT: number = parseInt(process.env.PORT as string, 10) || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));