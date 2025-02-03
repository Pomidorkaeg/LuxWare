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
    const url = 'https://mega.nz/folder/0A4ABCCQ#GdJgtsYxE0Kpr8nIzVKgMQ'; // Прямая ссылка
    const link = document.createElement('a'); 
    link.href = url;
    link.setAttribute('download', 'LuxWar.rar');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

