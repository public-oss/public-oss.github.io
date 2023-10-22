import{j as m,k as n,l as c,J as r,t as u,m as s,p as L,o as d}from"./index-294842fb.js";import{Z as a,V as p,K as f,R as h,X as b,W as y,F as g}from"./prop.validators-125a3282-9e7c3ce9.js";import"./a11y.tipps-583a2096-ea796d66.js";/*!
 * KoliBri - The accessible HTML-Standard
 */function e(o,t){try{Object.defineProperty(L,o,{get:function(){return t}})}catch{d.debug(`KoliBri property ${o} is already bind.`)}}const i=(o,t)=>d.debug(`${o} ${t?"":"not "}activated`),M=()=>{if(m(),n()){c(),e("a11yColorContrast",p),e("querySelector",f),e("querySelectorAll",h),e("querySelectorColors",b),e("utils",function(){return a}),e("parseJson",y),e("stringifyJson",g);const o=r().body,t=r().createElement("svg");if(t.setAttribute("aria-label","KoliBri-DevTools"),t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("role","toolbar"),t.setAttribute("style","position: fixed;color: black;font-size: 200%;bottom: 0.25rem;right: 0.25rem;"),t.innerHTML=`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="50"
  height="50"
  viewBox="0 0 600 600"
>
  <path d="M353 322L213 304V434L353 322Z" fill="#047" />
  <path d="M209 564V304L149 434L209 564Z" fill="#047" />
  <path d="M357 316L417 250L361 210L275 244L357 316Z" fill="#047" />
  <path d="M353 318L35 36L213 300L353 318Z" fill="#047" />
  <path d="M329 218L237 92L250 222L272 241L329 218Z" fill="#047" />
  <path d="M391 286L565 272L421 252L391 286Z" fill="#047" />
</svg>`,r().body.appendChild(t),i("Development mode",n()),i("Experimental mode",u()),i("Color contrast analysis",s()),s()){const l=setTimeout(()=>{clearTimeout(l),setInterval(()=>{a.queryHtmlElementColors(r().createElement("div"),p(o),!1,!1)},1e4)},2500)}}};export{M as initialize};
