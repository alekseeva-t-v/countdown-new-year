!function(){"use strict";const e={unit:{ru:"Новый Год - Обратный отсчет",en:"New Year - Countdown"},progect:{ru:"Проект",en:"Project"},mini:{ru:"мини",en:"mini"},portfolio:{ru:"Портфолио",en:"Portfolio"},skills:{ru:"Навыки",en:"Skills"},contacts:{ru:"Контакты",en:"Contacts"},title:{ru:"Контакты",en:"Contacts"},copy:{ru:"Алексеева Татьяна",en:"Alekseeva Tatyana"},days:{ru:"дней",en:"days"},hours:{ru:"часов",en:"hours"},minutes:{ru:"минут",en:"minutes"},seconds:{ru:"секунд",en:"seconds"}};const n=window.location.hash;(function(){let n="en";const t=["en","ru"],o=e,r=document.querySelector(".lang-btn"),a=document.querySelector("title");!function(){let e=window.location.hash;e=e.substr(1),t.includes(e)||(location.href=`${window.location.pathname}#en`,location.reload()),"ru"===e?r.classList.add("lang-btn--active"):r.classList.remove("lang-btn--active"),a.innerHTML=o.unit[e];for(let n in o){let t=document.querySelector(`.lng-${n}`);t&&(t.innerHTML=o[n][e])}}(),r.addEventListener("click",(function(){r.classList.contains("lang-btn--active")?(r.classList.remove("lang-btn--active"),n="en"):(r.classList.add("lang-btn--active"),n="ru"),location.href=`${window.location.pathname}#${n}`,location.reload()}))})(),function(e){const n=document.querySelector(".countdown__title"),t=document.querySelector("#year"),o=document.querySelector("#days"),r=document.querySelector("#hours"),a=document.querySelector("#minutes"),c=document.querySelector("#seconds"),i=document.querySelector("#countdown"),s=document.querySelector("#preloader"),l="#ru"===e?'до <span class="selection">Нового Года</span> осталось:':'before the <span class="selection">New Year</span> left:';n.innerHTML=l;const u=(new Date).getFullYear(),d=new Date(`January 01 ${u+1} 00:00:00`);t.innerText=u+1,setInterval((function(){const e=new Date,n=d-e,t=Math.floor(n/1e3/60/60/24),i=Math.floor(n/1e3/60/60)%24,s=Math.floor(n/1e3/60)%60,l=Math.floor(n/1e3)%60;o.innerText=t,r.innerText=String(i).padStart(2,"0"),a.innerText=String(s).padStart(2,"0"),c.innerText=String(l).padStart(2,"0")}),1e3),setTimeout((function(){s.remove(),i.style.display="flex"}),1e3)}(n)}();