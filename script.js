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
