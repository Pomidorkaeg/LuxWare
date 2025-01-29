document.addEventListener('DOMContentLoaded', () => {
    // Запуск анимации при загрузке страницы
    const bloodSpans = document.querySelectorAll('.blood');
    bloodSpans.forEach(bloodSpan => {
        setTimeout(() => {
            bloodSpan.style.animation = 'blood-drip 1s ease-out forwards';
        }, Math.random() * 2000); // Добавляем случайную задержку до 2 секунд
    });
});

document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
        }
    });
});