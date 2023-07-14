function showCountdown(lang) {
  const countdownTitle = document.querySelector('.countdown__title');
  const year = document.querySelector('#year');
  const days = document.querySelector('#days');
  const hours = document.querySelector('#hours');
  const minutes = document.querySelector('#minutes');
  const seconds = document.querySelector('#seconds');
  const countdown = document.querySelector('#countdown');
  const preloader = document.querySelector('#preloader');

  const titleHTMLelem =
    lang === '#ru'
      ? `до <span class="selection">Нового Года</span> осталось:`
      : `before the <span class="selection">New Year</span> left:`;

  countdownTitle.innerHTML = titleHTMLelem;

  const currentYear = new Date().getFullYear();
  const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

  year.innerText = currentYear + 1;

  function updateCounter() {
    const currentTime = new Date();
    const diff = nextYear - currentTime;

    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
    const secondsLeft = Math.floor(diff / 1000) % 60;

    days.innerText = daysLeft;
    hours.innerText = (String(hoursLeft)).padStart(2, '0')
    minutes.innerText = (String(minutesLeft)).padStart(2, '0')
    seconds.innerText = (String(secondsLeft)).padStart(2, '0')
  }

  setInterval(updateCounter, 1000);

  setTimeout(function () {
    preloader.remove();
    countdown.style.display = 'flex';
  }, 1000);
}

export default showCountdown;
