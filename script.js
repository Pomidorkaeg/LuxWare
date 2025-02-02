// Отключаем правый клик
document.addEventListener('contextmenu', function (e) {
    e.preventDefault(); // Останавливаем контекстное меню
});

// Отключаем возможность копирования
document.addEventListener('copy', function (e) {
    e.preventDefault(); // Останавливаем копирование
});

// Запрещаем выделение текста
document.addEventListener('selectstart', function (e) {
    e.preventDefault(); // Останавливаем выделение текста
});

document.getElementById('downloadButton').addEventListener('click', function() {
    const url = 'https://drive.google.com/file/d/1lvwTbq5PAQuNhzl1_B-GCHp1OdGCF433/view?usp=drive_link'; // Прямой путь к файлу
    const link = document.createElement('a'); // создаем элемент <a>
    link.href = url; // ссылка на файл
    link.download = 'LuxWar.rar'; // задаем имя файла для загрузки
    link.click(); // инициируем клик по ссылке для загрузки
});
