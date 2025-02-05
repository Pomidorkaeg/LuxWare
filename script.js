// Переключение видимости секции "Почему мы?"
document.querySelector('.why-us-button').addEventListener('click', function() {
    const section = document.getElementById('why-us-section');
    const body = document.body;

    // Переключаем отображение секции "Почему мы?"
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        body.classList.remove('no-scroll'); // Разрешаем прокрутку
    } else {
        section.style.display = 'none';
        body.classList.add('no-scroll'); // Запрещаем прокрутку
    }

    // Прокрутка страницы до секции
    section.scrollIntoView({ behavior: 'smooth' });
});

// Остальной JavaScript для открытия модальных окон и других функций
document.getElementById('downloadButton').addEventListener('click', function() {
    const url = 'https://drive.google.com/uc?export=download&id=1lvwTbq5PAQuNhzl1_B-GCHp1OdGCF433'; // Прямая ссылка
    const link = document.createElement('a'); 
    link.href = url;
    link.setAttribute('download', 'LuxWar.rar');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

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

// Перемещение кнопки "Почему мы?"
let isDragging = false;
let offsetX, offsetY;

const whyUsButton = document.querySelector('.why-us-button');

whyUsButton.addEventListener('mousedown', function(e) {
    isDragging = true;
    offsetX = e.clientX - whyUsButton.getBoundingClientRect().left;
    offsetY = e.clientY - whyUsButton.getBoundingClientRect().top;
    document.addEventListener('mousemove', moveButton);
});

document.addEventListener('mouseup', function() {
    isDragging = false;
    document.removeEventListener('mousemove', moveButton);
});

function moveButton(e) {
    if (isDragging) {
        whyUsButton.style.left = `${e.clientX - offsetX}px`;
        whyUsButton.style.top = `${e.clientY - offsetY}px`;
    }
}
