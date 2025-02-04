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
    const url = 'https://drive.google.com/uc?export=download&id=1lvwTbq5PAQuNhzl1_B-GCHp1OdGCF433'; // Прямая ссылка
    const link = document.createElement('a'); 
    link.href = url;
    link.setAttribute('download', 'LuxWar.rar');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Кнопка "Перейти на сайт"
document.getElementById('openSiteButton').addEventListener('click', function() {
    window.location.href = 'https://www.youtube.com/watch?v=JUY6zWSFEUE'; // Замени ссылку на нужную
});

// Всплывающее окно
document.getElementById('openModalButton').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
});

// Закрытие окна
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Закрытие окна при клике вне его
window.addEventListener('click', function(event) {
    let modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

