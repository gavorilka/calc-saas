(()=>{var e={761:()=>{const e=document.querySelector(".calculator__display");document.querySelectorAll(".calculator__button").forEach((t=>{t.addEventListener("click",(()=>{t.classList.contains("calculator__clear")?e.value="":t.classList.contains("calculator__equals")?e.value=function(e){const t=["*","/","+","-"],r=e.split(new RegExp(`[${t.join("")}]`)),a=e.split("").filter((e=>t.includes(e)));let l=parseFloat(r[0]);for(let e=0;e<a.length;e++){const t=parseFloat(r[e+1]);switch(a[e]){case"*":l*=t;break;case"/":l/=t;break;case"+":l+=t;break;case"-":l-=t}}return l}(e.value):e.value+=t.innerText}))}))}},t={};function r(a){var l=t[a];if(void 0!==l)return l.exports;var c=t[a]={exports:{}};return e[a](c,c.exports,r),c.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(761)})()})();