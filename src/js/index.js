import showBody from './modules/show-body';
import changeColorSheme from './modules/change-color-sheme';
import changeLang from './modules/change-lang';
import showCountdown from './modules/countdown';

const lang = window.location.hash;

setTimeout(showBody, 0);
changeColorSheme();
changeLang('page-main');
showCountdown(lang);
