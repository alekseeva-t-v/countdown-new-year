import changeLang from './modules/change-lang';
import showCountdown from './modules/countdown';

const lang = window.location.hash;



changeLang();
showCountdown(lang);
