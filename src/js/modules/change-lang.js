import { langArr } from "./lang";

function changeLang() {
  let lang = 'en';
  const allLang = ['en', 'ru'];
  const langList = langArr;

  const btnLang = document.querySelector('.lang-btn');
  const title = document.querySelector('title');

  function changeURLLanguageHandler() {
    if (!btnLang.classList.contains('lang-btn--active')) {
      btnLang.classList.add('lang-btn--active');
      lang = 'ru';
    } else {
      btnLang.classList.remove('lang-btn--active');
      lang = 'en';
    }

    location.href = `${window.location.pathname}#${lang}`;
    location.reload();
  }

  function changeLanguage() {
    let hash = window.location.hash;
    hash = hash.substr(1);
    if (!allLang.includes(hash)) {
      location.href = `${window.location.pathname}#en`;
      location.reload();
    }

    if (hash === 'ru') {
      btnLang.classList.add('lang-btn--active');
    } else {
      btnLang.classList.remove('lang-btn--active');
    }

    title.innerHTML = langList['unit'][hash];
    for (let key in langList) {
      let elem = document.querySelector(`.lng-${key}`);
      if (elem) {
        elem.innerHTML = langList[key][hash];
      }
    }
  }

  changeLanguage();

  btnLang.addEventListener('click', changeURLLanguageHandler);
}

export default changeLang;
