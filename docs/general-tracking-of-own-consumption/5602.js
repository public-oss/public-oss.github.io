/*! For license information please see 5602.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_oss_general_tracking_of_own_consumption=self.webpackChunk_public_oss_general_tracking_of_own_consumption||[]).push([[5602],{5208:(e,t,n)=>{n.d(t,{a:()=>g,b:()=>h,c:()=>a,d:()=>c,e:()=>i,f:()=>u,u:()=>m});var r=n(9294);const o=new Set,i=e=>{!1===o.has(e)&&(o.add(e),r.L.info(e,{classifier:"✋a11y",overwriteStyle:"; background-color: #09f"}))},l=new Set,a=e=>{!1===l.has(e)&&(l.add(e),r.L.warn(e,{classifier:"🔥deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},s=new Set,c=e=>{!1===s.has(e)&&(s.add(e),r.L.debug(e,{classifier:"💻dev",overwriteStyle:"; background-color: #f09"}))},d=new Set,u=(e,t=!1)=>{!1===d.has(e)&&(d.add(e),e+=!0===t?" ✅":"",r.L.debug(e,{classifier:"🌟feature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns über jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const f=new Set,h=()=>{i('"Disabled" schränkt die Zugänglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},g=e=>{"string"==typeof e&&""!==e||i("Manche Strukturelemente, wie bspw. der nav-Tag, können mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden können, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},m=(e,t=8)=>{var n;t>7&&(n=`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Menüpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===f.has(n)&&(f.add(n),r.L.debug(n,{classifier:"📑ui/ux",overwriteStyle:"; background-color: #060;"})))}},5602:(e,t,n)=>{n.r(t),n.d(t,{initialize:()=>l});var r=n(9294),o=n(7349);function i(e,t){try{Object.defineProperty(r.K,e,{get:function(){return t}})}catch(t){r.L.debug(`KoliBri property ${e} is already bind.`)}}const l=()=>{if((0,r.i)(),(0,r.d)()){(0,r.r)(),i("a11yColorContrast",o.j),i("querySelector",o.k),i("querySelectorAll",o.l),i("querySelectorColors",o.n),i("utils",(function(){return o.i})),i("parseJson",o.p),i("stringifyJson",o.q);const e=(0,r.g)().body,t=(0,r.g)().createElement("svg");if(t.setAttribute("aria-label","KoliBri-DevTools"),t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("role","toolbar"),t.setAttribute("style","position: fixed;color: black;font-size: 200%;bottom: 0.25rem;right: 0.25rem;"),t.innerHTML='<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="50"\n  height="50"\n  viewBox="0 0 600 600"\n>\n  <path d="M353 322L213 304V434L353 322Z" fill="#047" />\n  <path d="M209 564V304L149 434L209 564Z" fill="#047" />\n  <path d="M357 316L417 250L361 210L275 244L357 316Z" fill="#047" />\n  <path d="M353 318L35 36L213 300L353 318Z" fill="#047" />\n  <path d="M329 218L237 92L250 222L272 241L329 218Z" fill="#047" />\n  <path d="M391 286L565 272L421 252L391 286Z" fill="#047" />\n</svg>',(0,r.g)().body.appendChild(t),(0,r.e)()){r.L.debug("Color-Contrast-Analysis activated");const t=setTimeout((()=>{clearTimeout(t),setInterval((()=>{o.i.queryHtmlElementColors((0,r.g)().createElement("div"),(0,o.j)(e),!1,!1)}),1e4)}),2500)}else r.L.debug("Color-Contrast-Analysis not activated")}}},128:(e,t,n)=>{n.d(t,{f:()=>s,s:()=>a});var r=1/12.92;function o(e){return Math.pow((e+.055)/1.055,2.4)}function i(e){var t=e[0]/255,n=e[1]/255,i=e[2]/255;return.2126*(t<=.03928?t*r:o(t))+.7152*(n<=.03928?n*r:o(n))+.0722*(i<=.03928?i*r:o(i))}function l(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var n=parseInt(e,16);return[n>>16,n>>8&255,255&n,t]}function a(e,t){return function(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(i(e),i(t))}(l(e),l(t))}function s(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}},7349:(e,t,n)=>{n.d(t,{K:()=>J,a:()=>k,b:()=>L,c:()=>x,d:()=>w,e:()=>C,f:()=>A,g:()=>B,h:()=>v,i:()=>R,j:()=>_,k:()=>O,l:()=>T,m:()=>H,n:()=>P,o:()=>y,p:()=>E,q:()=>M,r:()=>d,s:()=>S,w:()=>N});var r=n(128),o=n(5208),i=n(9294),l=n(9057);const a=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const n=new Set;a(n,t.querySelectorAll(e));const r=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<r.length;t++){const o=r[t].shadowRoot;a(n,s(e,"object"==typeof o&&null!==o?o:r[t]))}return Array.from(n)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},c=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let n=t.querySelector(e);if(null===n){const r=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<r.length;t++){const o=r[t].shadowRoot;if(n=c(e,"object"==typeof o&&null!==o?o:r[t]),null!==n)break}}return n}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var d=f,u=f;function f(e){var t=h(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function h(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),n=t.length;if(3==n||4==n){var r=m(t[0]),o=m(t[1]),i=m(t[2]),l=3==n?255:m(t[3]);if(isNaN(r)||isNaN(o)||isNaN(i)||isNaN(l))return;return[r,o,i,l]}}(e)||function(e){var t=e.replace(/^#/,""),n=t.length;if(6==n||8==n){var r=m(t.slice(0,2)),o=m(t.slice(2,4)),i=m(t.slice(4,6)),l=6==n?255:m(t.slice(6,8));if(isNaN(r)||isNaN(o)||isNaN(i)||isNaN(l))return;return[r,o,i,l]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=b(t[0],!0),r=b(t[1],!0),o=b(t[2],!0);if(-1!=n&&-1!=r&&-1!=o)return[n,r,o,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),n=b(t[0],!0),r=b(t[1],!0),o=b(t[2],!0),i=b(255*t[3]);if(-1!=n&&-1!=r&&-1!=o&&-1!=i)return[n,r,o,i]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=b(null!=e.r?e.r:null!=e.red?e.red:0,!0),n=b(null!=e.g?e.g:null!=e.green?e.green:0,!0),r=b(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),o=b(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=n&&-1!=r&&-1!=o)return[t,n,r,o]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=b(e[0],!0),n=b(e[1],!0),r=b(e[2],!0),o=b(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=n&&-1!=r&&-1!=o)return[t,n,r,o]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function g(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function m(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function b(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}d.arr=u,d.obj=function(e){var t=h(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},d.css=function(e){var t=h(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},d.hex=function(e){3==(t=h(e)).length&&t.push(255);var t,n=255==t[3],r=g(t[0]),o=g(t[1]),i=g(t[2]),l=function(e,t,n,r){var o=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=o.indexOf(e)&&-1!=o.indexOf(t)&&-1!=o.indexOf(n)&&-1!=o.indexOf(r)}(r,o,i,t=g(Math.round(t[3])));return n?l?"#"+r.charAt(0)+o.charAt(0)+i.charAt(0):"#"+r+o+i:l?"#"+r.charAt(0)+o.charAt(0)+i.charAt(0)+t.charAt(0):"#"+r+o+i+t},d.num=function(e){var t=h(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};const p=/\[object Object\]/,y=(e,t)=>{"string"==typeof e&&p.test(e)||t()},v=(e,t)=>{"string"==typeof e&&""===e||t()},w=(e,t)=>{Object.defineProperty(e,"target",{value:t,writable:!1})},S=(e,t,n,r={})=>{var o,i;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==n&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof r.afterPatch&&(null===(o=e.nextHooks.get(t))||void 0===o||o.set("afterPatch",r.afterPatch)),"function"==typeof r.beforePatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("beforePatch",r.beforePatch)),e.nextState.set(t,n),(e=>{var t,n,r;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,n)=>{var r;const o=t.get("beforePatch");"function"==typeof o&&o(null===(r=e.nextState)||void 0===r?void 0:r.get(n),e.nextState,e,n)})),(null===(n=e.nextState)||void 0===n?void 0:n.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(r=e.nextHooks)||void 0===r||r.forEach(((t,n)=>{const r=t.get("afterPatch");"function"==typeof r&&r(e.state[n],e.state,e,n)}))),delete e.nextHooks})(e))},k=(e,t,n,r,i,l={})=>{n(i)?S(e,t,i,null==l?void 0:l.hooks):void 0===i||null===i&&(void 0===(null==l?void 0:l.required)||!1===(null==l?void 0:l.required))?S(e,t,null==l?void 0:l.defaultValue,null==l?void 0:l.hooks):(void 0!==(null==l?void 0:l.required)&&!1!==(null==l?void 0:l.required)||r.add(null),((e,t,n,r)=>{(0,o.d)(`[${e.constructor.name}] Der Property-Wert (${n}) für '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(r).join(", ")}`)})(e,t,i,r))},L=(e,t,n,r)=>{k(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),n,r)},N=(e,t,n,r={})=>{const o="number"==typeof r.minLength?null==r?void 0:r.minLength:0;k(e,t,(e=>"string"==typeof e&&e.length>=o),new Set([`String (Mindestlänge ${o})`]),n,r)},A=(e,t,n,r)=>{k(e,t,(e=>"number"==typeof e&&(void 0===(null==r?void 0:r.min)||"number"==typeof(null==r?void 0:r.min)&&e>=r.min)&&(void 0===(null==r?void 0:r.max)||"number"==typeof(null==r?void 0:r.max)&&e<=r.max)),new Set(["Number"]),n,r)},x=(e,t,n,r,i=(e=>e==e),l={})=>{v(r,(()=>{y(r,(()=>{void 0===r&&(r=[]);try{try{r=E(r)}catch(e){}if(Array.isArray(r)){const o=r.find((e=>!n(e)));void 0===o&&i(r)?S(e,t,r,l.hooks):y(o,(()=>{throw console.log(o),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}else y(r,(()=>{throw new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}catch(e){(0,o.d)("Known bug: Zeichenkettenliste (string[])")}}))}))},M=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw i.L.warn(["stringifyJson",e]),i.L.error("↑ Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},E=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){i.L.warn(["parseJson",e]),i.L.error("↑ Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anführungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},C=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,H=e=>"string"==typeof e?e:C(e),O=(e,t)=>c(e,t||(0,i.g)()),T=(e,t)=>s(e,t||(0,i.g)());let q=null;const j=()=>(q=q||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,i.g)().body,level:"Fail",score:1},q),D=/(\d+, ){3}0\)/,_=(e,t=j())=>{const n=getComputedStyle(e),o=D.test(n.backgroundColor)?t.backgroundColor:d.hex(n.backgroundColor),l=D.test(n.color)?t.color:d.hex(n.color),a=(0,r.s)(o,l),s={backgroundColor:o,color:l,domNode:e,level:(0,r.f)(a),score:a};return a<4.5&&i.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},P=(e,t=j())=>{t.domNode instanceof HTMLElement&&(t=_(t.domNode,t));const n=t.domNode.querySelector(e);if(null===n){const n=t.domNode.querySelectorAll('[class="hydrated"]');for(let r=0;r<n.length&&(t.domNode=n[r],null===(t=P(e,t)).domNode);r++);return t}return _(n,t)},z=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,i.a)().pageYOffset-50}),e.focus()):(0,o.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},B=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,o.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const n=`${t}`;t=e,e=n}if("string"==typeof e){const n=O(e,t);n instanceof HTMLElement?z(n):(0,o.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,o.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class R{static queryHtmlElementColors(e,t,n=!1,r=!0){let o=null;if(!0===n||!1===R.executionLock)if(!1===n&&(R.cache.clear(),R.cache.set(t.domNode,t),R.executionLock=!0,!0===r&&i.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)o=t;else{const n=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)n.add(e[t])}const r=t.domNode;if("function"==typeof r.assignedNodes){const e=r.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&n.add(e[t])}const i=t.domNode.children;for(let e=0;e<i.length;e++)n.add(i[e]);const l=Array.from(n);for(let n=0;n<l.length;n++){let r=R.cache.get(l[n]);void 0===r&&(r=_(l[n],t)),R.cache.set(l[n],r);const i=R.queryHtmlElementColors(e,r,!0,!1);if(null!==i){o=i;break}}}else i.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===n&&(!0===r&&i.L.debug(`[KoliBriUtils] Color contrast analysis finished (${R.cache.size} DOM elements are analysed).`),R.executionLock=!1,R.cache.clear()),o}}R.executionLock=!1,R.cache=new Map;class J{}J.patchTheme=l.p,J.patchThemeTag=l.a,J.querySelector=O,J.querySelectorAll=T,J.scrollByHTMLElement=z,J.scrollBySelector=B,J.stringifyJson=M}}]);