<?php
header("Access-Control-Allow-Origin: http://localhost:3000");

$servername = "localhost";
$username = "u2617851_dobroe";
$password = "Pusht0talk1";
$dbname = "u2617851_default";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}

// SQL-запрос для создания таблицы users
$createTableSQL = "CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
)";

// Выполнение SQL-запроса для создания таблицы
if ($conn->query($createTableSQL) === TRUE) {
    echo "Таблица 'users' успешно создана или уже существует<br>";

    // Получение данных из POST-запроса
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Запрос для вставки данных в базу данных
    $insertDataSQL = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

    if ($conn->query($insertDataSQL) === TRUE) {
        echo "Пользователь успешно зарегистрирован";
    } else {
        echo "Ошибка при регистрации пользователя: " . $conn->error;
    }
} else {
    echo "Ошибка при создании таблицы: " . $conn->error;
}

$conn->close();
?>