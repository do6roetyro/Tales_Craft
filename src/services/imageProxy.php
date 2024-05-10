<?php
// Проверяем, получили ли мы URL изображения в запросе
if(isset($_GET['imageSrc'])) {
    // Получаем URL изображения из запроса
    $imageSrc = $_GET['imageSrc'];

    // Устанавливаем заголовки, чтобы разрешить доступ к изображению с любого источника
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET");

    // Запрашиваем изображение с удаленного сервера
    $image = file_get_contents($imageSrc);

    // Передаем изображение обратно клиенту
    header("Content-Type: image/png"); // Укажите правильный MIME-тип для вашего типа изображения
    echo $image;
} else {
    // Если URL изображения не был передан в запросе, возвращаем ошибку
    header("HTTP/1.1 400 Bad Request");
    echo "Error: Image source URL is missing.";
}
?>