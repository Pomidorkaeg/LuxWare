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
    const url = 'https://github.com/Pomidorkaeg/luxw/blob/main/LuxWar.rar'; // ссылка на файл
    const link = document.createElement('a'); // создаем элемент <a>
    link.href = url; // ссылка на файл
    link.download = 'LuxWar.rar'; // задаем имя файла для загрузки
    link.click(); // инициируем клик по ссылке для загрузки
});
