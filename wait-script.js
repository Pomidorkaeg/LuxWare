let timeLeft = 180; // 3 минуты в секундах
let timerInterval;
let browserDownloaded = false; // Флаг, указывающий, скачал ли пользователь браузер

// Функция для запуска таймера
function startTimer() {
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      document.getElementById('timer').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    } else {
      // Останавливаем таймер, когда время достигло 00:00
      clearInterval(timerInterval);
      document.getElementById('timer').textContent = "00:00";

      // Если браузер скачан, разблокируем кнопку "Скачать лоадер"
      if (browserDownloaded) {
        document.getElementById('proceedButton').disabled = false;
      }
    }
  }, 1000);
}

// Запуск таймера при загрузке страницы
startTimer();

// Остановка таймера при переходе на другую страницу
window.addEventListener('beforeunload', () => {
  clearInterval(timerInterval);
});

// Обработка нажатия на кнопку "Скачать браузер"
document.getElementById('downloadBrowserButton').addEventListener('click', () => {
  // Блокируем кнопку на 5 секунд
  document.getElementById('downloadBrowserButton').disabled = true;
  document.getElementById('downloadBrowserButton').textContent = "Загрузка...";

  // Открываем новое окно с загрузкой Opera GX
  const downloadWindow = window.open(
    'https://gxopera.ru/index.php?key=tqxsg9i0mt4rby3ujez6&utm_campaign=116880120&ad_id=16728206159&region_name=Ростов-на-Дону&source=none&campaign_name=Opera%20GX%20NEW%202&group=5524109637&utm_term=opera%20gx%20download&yclid=5158529478020038655&yclid=5158529478020038655',
    'DownloadWindow',
    'width=500,height=300,left=100,top=100'
  );

  // Если окно не открылось (например, из-за блокировки всплывающих окон)
  if (!downloadWindow) {
    alert("Пожалуйста, разрешите всплывающие окна для скачивания браузера.");
    document.getElementById('downloadBrowserButton').disabled = false;
    document.getElementById('downloadBrowserButton').textContent = "Скачать браузер";
    return;
  }

  // Разблокируем кнопку через 5 секунд
  setTimeout(() => {
    document.getElementById('downloadBrowserButton').disabled = false;
    document.getElementById('downloadBrowserButton').textContent = "Скачать браузер";
    browserDownloaded = true; // Устанавливаем флаг, что браузер скачан

    // Если таймер уже на 00:00, разблокируем кнопку "Скачать лоадер"
    if (timeLeft <= 0) {
      document.getElementById('proceedButton').disabled = false;
    }
  }, 5000);
});

// Обработка нажатия на кнопку "Скачать лоадер"
document.getElementById('proceedButton').addEventListener('click', () => {
  window.location.href = 'https://drive.google.com/uc?export=download&id=1wbB-h7Cr7OE2zIUnkRIgUQZ1qfJupMfX';
});