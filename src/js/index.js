import showBody from './modules/show-body';
import changeColorSheme from './modules/change-color-sheme';
// import changeLang from './modules/change-lang';
import showCountdown from './modules/countdown';
import { langArr } from './modules/lang';

const btnLang = document.querySelector('.lang-btn');
let lang = 'ru';

function changeURLLanguageHandler() {
  if (!btnLang.classList.contains('lang-btn--active')) {
    btnLang.classList.add('lang-btn--active');
    lang = 'en';
  } else {
    btnLang.classList.remove('lang-btn--active');
    lang = 'ru';
  }

  showCountdown(lang);

  for (let key in langArr) {
    let elems = document.querySelectorAll(`.lng-${key}`);
    elems.forEach((elem) => {
      if (elem) {
        elem.innerHTML = langArr[key][lang];
      }
    });
  }
}


setTimeout(showBody, 0);
changeColorSheme();
// changeLang('page-main');
showCountdown(lang);

btnLang.addEventListener('click', changeURLLanguageHandler);
