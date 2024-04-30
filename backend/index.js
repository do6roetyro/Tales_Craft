// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');

// const app = express();
// const port = 3000;

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'u2617851_dobroe',
//   password: 'Pusht0talk1',
//   database: 'u2617851_default'
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to MySQL');
// });

// app.use(bodyParser.json());

// app.post('/register', (req, res) => {
//   const { username, email, password } = req.body;

//   const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
//   db.query(sql, [username, email, password], (err, result) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Произошла ошибка при регистрации' });
//     } else {
//       res.status(200).json({ message: 'Пользователь успешно зарегистрирован' });
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });