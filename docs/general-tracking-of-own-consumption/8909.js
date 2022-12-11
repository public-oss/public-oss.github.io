/*! For license information please see 8909.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_oss_general_tracking_of_own_consumption=self.webpackChunk_public_oss_general_tracking_of_own_consumption||[]).push([[8909],{5208:(e,t,r)=>{r.d(t,{a:()=>g,b:()=>h,c:()=>l,d:()=>c,e:()=>a,f:()=>u,u:()=>b});var n=r(9294);const o=new Set,a=e=>{!1===o.has(e)&&(o.add(e),n.L.info(e,{classifier:"✋a11y",overwriteStyle:"; background-color: #09f"}))},i=new Set,l=e=>{!1===i.has(e)&&(i.add(e),n.L.warn(e,{classifier:"🔥deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},s=new Set,c=e=>{!1===s.has(e)&&(s.add(e),n.L.debug(e,{classifier:"💻dev",overwriteStyle:"; background-color: #f09"}))},d=new Set,u=(e,t=!1)=>{!1===d.has(e)&&(d.add(e),e+=!0===t?" ✅":"",n.L.debug(e,{classifier:"🌟feature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns über jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const f=new Set,h=()=>{a('"Disabled" schränkt die Zugänglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},g=e=>{"string"==typeof e&&""!==e||a("Manche Strukturelemente, wie bspw. der nav-Tag, können mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden können, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},b=(e,t=8)=>{var r;t>7&&(r=`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Menüpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===f.has(r)&&(f.add(r),n.L.debug(r,{classifier:"📑ui/ux",overwriteStyle:"; background-color: #060;"})))}},128:(e,t,r)=>{r.d(t,{f:()=>s,s:()=>l});var n=1/12.92;function o(e){return Math.pow((e+.055)/1.055,2.4)}function a(e){var t=e[0]/255,r=e[1]/255,a=e[2]/255;return.2126*(t<=.03928?t*n:o(t))+.7152*(r<=.03928?r*n:o(r))+.0722*(a<=.03928?a*n:o(a))}function i(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var r=parseInt(e,16);return[r>>16,r>>8&255,255&r,t]}function l(e,t){return function(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(a(e),a(t))}(i(e),i(t))}function s(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}},8909:(e,t,r)=>{r.r(t),r.d(t,{kol_symbol:()=>a});var n=r(2552),o=r(7349);const a=class{constructor(e){(0,n.r)(this,e),this._ariaLabel=void 0,this._symbol=void 0,this.state={_ariaLabel:"Warnung",_symbol:"⚠"}}render(){return(0,n.h)(n.H,null,(0,n.h)("span",{"aria-label":this.state._ariaLabel,role:"term"},this.state._symbol))}validateAriaLabel(e){(0,o.w)(this,"_ariaLabel",e,{required:!0})}validateSymbol(e){(0,o.w)(this,"_symbol",e,{required:!0})}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateSymbol(this._symbol)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_symbol:["validateSymbol"]}}}},7349:(e,t,r)=>{r.d(t,{K:()=>W,a:()=>k,b:()=>L,c:()=>x,d:()=>w,e:()=>E,f:()=>A,g:()=>R,h:()=>v,i:()=>B,j:()=>j,k:()=>O,l:()=>q,m:()=>H,n:()=>P,o:()=>y,p:()=>_,q:()=>M,r:()=>d,s:()=>S,w:()=>N});var n=r(128),o=r(5208),a=r(9294),i=r(9057);const l=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;l(r,t.querySelectorAll(e));const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const o=n[t].shadowRoot;l(r,s(e,"object"==typeof o&&null!==o?o:n[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},c=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const o=n[t].shadowRoot;if(r=c(e,"object"==typeof o&&null!==o?o:n[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var d=f,u=f;function f(e){var t=h(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function h(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var n=b(t[0]),o=b(t[1]),a=b(t[2]),i=3==r?255:b(t[3]);if(isNaN(n)||isNaN(o)||isNaN(a)||isNaN(i))return;return[n,o,a,i]}}(e)||function(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var n=b(t.slice(0,2)),o=b(t.slice(2,4)),a=b(t.slice(4,6)),i=6==r?255:b(t.slice(6,8));if(isNaN(n)||isNaN(o)||isNaN(a)||isNaN(i))return;return[n,o,a,i]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=m(t[0],!0),n=m(t[1],!0),o=m(t[2],!0);if(-1!=r&&-1!=n&&-1!=o)return[r,n,o,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=m(t[0],!0),n=m(t[1],!0),o=m(t[2],!0),a=m(255*t[3]);if(-1!=r&&-1!=n&&-1!=o&&-1!=a)return[r,n,o,a]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=m(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=m(null!=e.g?e.g:null!=e.green?e.green:0,!0),n=m(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),o=m(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=n&&-1!=o)return[t,r,n,o]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=m(e[0],!0),r=m(e[1],!0),n=m(e[2],!0),o=m(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=n&&-1!=o)return[t,r,n,o]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function g(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function b(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function m(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}d.arr=u,d.obj=function(e){var t=h(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},d.css=function(e){var t=h(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},d.hex=function(e){3==(t=h(e)).length&&t.push(255);var t,r=255==t[3],n=g(t[0]),o=g(t[1]),a=g(t[2]),i=function(e,t,r,n){var o=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=o.indexOf(e)&&-1!=o.indexOf(t)&&-1!=o.indexOf(r)&&-1!=o.indexOf(n)}(n,o,a,t=g(Math.round(t[3])));return r?i?"#"+n.charAt(0)+o.charAt(0)+a.charAt(0):"#"+n+o+a:i?"#"+n.charAt(0)+o.charAt(0)+a.charAt(0)+t.charAt(0):"#"+n+o+a+t},d.num=function(e){var t=h(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};const p=/\[object Object\]/,y=(e,t)=>{"string"==typeof e&&p.test(e)||t()},v=(e,t)=>{"string"==typeof e&&""===e||t()},w=(e,t)=>{Object.defineProperty(e,"target",{value:t,writable:!1})},S=(e,t,r,n={})=>{var o,a;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==r&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof n.afterPatch&&(null===(o=e.nextHooks.get(t))||void 0===o||o.set("afterPatch",n.afterPatch)),"function"==typeof n.beforePatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("beforePatch",n.beforePatch)),e.nextState.set(t,r),(e=>{var t,r,n;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var n;const o=t.get("beforePatch");"function"==typeof o&&o(null===(n=e.nextState)||void 0===n?void 0:n.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(n=e.nextHooks)||void 0===n||n.forEach(((t,r)=>{const n=t.get("afterPatch");"function"==typeof n&&n(e.state[r],e.state,e,r)}))),delete e.nextHooks})(e))},k=(e,t,r,n,a,i={})=>{r(a)?S(e,t,a,null==i?void 0:i.hooks):void 0===a||null===a&&(void 0===(null==i?void 0:i.required)||!1===(null==i?void 0:i.required))?S(e,t,null==i?void 0:i.defaultValue,null==i?void 0:i.hooks):(void 0!==(null==i?void 0:i.required)&&!1!==(null==i?void 0:i.required)||n.add(null),((e,t,r,n)=>{(0,o.d)(`[${e.constructor.name}] Der Property-Wert (${r}) für '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(n).join(", ")}`)})(e,t,a,n))},L=(e,t,r,n)=>{k(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,n)},N=(e,t,r,n={})=>{const o="number"==typeof n.minLength?null==n?void 0:n.minLength:0;k(e,t,(e=>"string"==typeof e&&e.length>=o),new Set([`String (Mindestlänge ${o})`]),r,n)},A=(e,t,r,n)=>{k(e,t,(e=>"number"==typeof e&&(void 0===(null==n?void 0:n.min)||"number"==typeof(null==n?void 0:n.min)&&e>=n.min)&&(void 0===(null==n?void 0:n.max)||"number"==typeof(null==n?void 0:n.max)&&e<=n.max)),new Set(["Number"]),r,n)},x=(e,t,r,n,a=(e=>e==e),i={})=>{v(n,(()=>{y(n,(()=>{void 0===n&&(n=[]);try{try{n=_(n)}catch(e){}if(Array.isArray(n)){const o=n.find((e=>!r(e)));void 0===o&&a(n)?S(e,t,n,i.hooks):y(o,(()=>{throw console.log(o),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}else y(n,(()=>{throw new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}catch(e){(0,o.d)("Known bug: Zeichenkettenliste (string[])")}}))}))},M=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw a.L.warn(["stringifyJson",e]),a.L.error("↑ Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},_=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){a.L.warn(["parseJson",e]),a.L.error("↑ Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anführungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},E=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,H=e=>"string"==typeof e?e:E(e),O=(e,t)=>c(e,t||(0,a.g)()),q=(e,t)=>s(e,t||(0,a.g)());let T=null;const C=()=>(T=T||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,a.g)().body,level:"Fail",score:1},T),D=/(\d+, ){3}0\)/,j=(e,t=C())=>{const r=getComputedStyle(e),o=D.test(r.backgroundColor)?t.backgroundColor:d.hex(r.backgroundColor),i=D.test(r.color)?t.color:d.hex(r.color),l=(0,n.s)(o,i),s={backgroundColor:o,color:i,domNode:e,level:(0,n.f)(l),score:l};return l<4.5&&a.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},P=(e,t=C())=>{t.domNode instanceof HTMLElement&&(t=j(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let n=0;n<r.length&&(t.domNode=r[n],null===(t=P(e,t)).domNode);n++);return t}return j(r,t)},z=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,a.a)().pageYOffset-50}),e.focus()):(0,o.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},R=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,o.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const r=`${t}`;t=e,e=r}if("string"==typeof e){const r=O(e,t);r instanceof HTMLElement?z(r):(0,o.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,o.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class B{static queryHtmlElementColors(e,t,r=!1,n=!0){let o=null;if(!0===r||!1===B.executionLock)if(!1===r&&(B.cache.clear(),B.cache.set(t.domNode,t),B.executionLock=!0,!0===n&&a.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)o=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const n=t.domNode;if("function"==typeof n.assignedNodes){const e=n.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const a=t.domNode.children;for(let e=0;e<a.length;e++)r.add(a[e]);const i=Array.from(r);for(let r=0;r<i.length;r++){let n=B.cache.get(i[r]);void 0===n&&(n=j(i[r],t)),B.cache.set(i[r],n);const a=B.queryHtmlElementColors(e,n,!0,!1);if(null!==a){o=a;break}}}else a.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===n&&a.L.debug(`[KoliBriUtils] Color contrast analysis finished (${B.cache.size} DOM elements are analysed).`),B.executionLock=!1,B.cache.clear()),o}}B.executionLock=!1,B.cache=new Map;class W{}W.patchTheme=i.p,W.patchThemeTag=i.a,W.querySelector=O,W.querySelectorAll=q,W.scrollByHTMLElement=z,W.scrollBySelector=R,W.stringifyJson=M}}]);