import 'dotenv/config';
import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import { connect } from 'mongoose';

// Импорт роутеров
// const userRoutes = require('./routes/userRoutes');

const app = express();

// Базовая настройка middleware
app.use(cors());
app.use(json());

// Подключение роутов
// app.use('/api/users', userRoutes);

// Подключение к MongoDB
connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

  const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));