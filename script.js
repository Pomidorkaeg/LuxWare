// Переключение видимости секции "Почему мы?"
document.querySelector('.why-us-button').addEventListener('click', function() {
    const section = document.getElementById('why-us-section');
    section.style.display = section.style.display === 'none' ? 'block' : 'none';
    section.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('downloadButton').addEventListener('click', function() {
    window.location.href = 'https://raw.githubusercontent.com/Pomidorkaeg/afriklanegtfd/main/LuxVar.zip';
});

document.getElementById('openSiteButton').addEventListener('click', function() {
    window.location.href = 'https://raw.githubusercontent.com/Pomidorkaeg/afriklanegtfd/main/LuxVar.zip';
});

// Функция для открытия модального окна
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const overlay = document.querySelector('.modal-overlay');

    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });

    modal.style.display = 'block';
    overlay.style.display = 'block';
}

// Функция для закрытия модального окна
function closeModal() {
    const overlay = document.querySelector('.modal-overlay');
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
    overlay.style.display = 'none';
}

// Открытие модального окна с инструкцией
document.querySelector('.instruction-button').addEventListener('click', function() {
    openModal('instructionModal');
});

// Открытие видео инструкции
document.getElementById('videoInstructionButton').addEventListener('click', function() {
    window.open('https://youtu.be/5NHAoFDQQJY', '_blank');
});

// Открытие модального окна "Соц.сети"
document.querySelector('.social-media-button').addEventListener('click', function() {
    openModal('socialMediaModal');
});

// Закрытие модального окна при клике на крестик
document.querySelectorAll('.close').forEach(button => {
    button.addEventListener('click', closeModal);
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal-overlay')) {
        closeModal();
    }
});