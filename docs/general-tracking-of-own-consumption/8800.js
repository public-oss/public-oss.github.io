/*! For license information please see 8800.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_oss_general_tracking_of_own_consumption=self.webpackChunk_public_oss_general_tracking_of_own_consumption||[]).push([[8800],{5208:(e,t,o)=>{o.d(t,{a:()=>p,b:()=>f,c:()=>a,d:()=>c,e:()=>i,f:()=>h,u:()=>g});var n=o(9294);const r=new Set,i=e=>{!1===r.has(e)&&(r.add(e),n.L.info(e,{classifier:"✋a11y",overwriteStyle:"; background-color: #09f"}))},l=new Set,a=e=>{!1===l.has(e)&&(l.add(e),n.L.warn(e,{classifier:"🔥deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},s=new Set,c=e=>{!1===s.has(e)&&(s.add(e),n.L.debug(e,{classifier:"💻dev",overwriteStyle:"; background-color: #f09"}))},d=new Set,h=(e,t=!1)=>{!1===d.has(e)&&(d.add(e),e+=!0===t?" ✅":"",n.L.debug(e,{classifier:"🌟feature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns über jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const u=new Set,f=()=>{i('"Disabled" schränkt die Zugänglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},p=e=>{"string"==typeof e&&""!==e||i("Manche Strukturelemente, wie bspw. der nav-Tag, können mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden können, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},g=(e,t=8)=>{var o;t>7&&(o=`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Menüpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===u.has(o)&&(u.add(o),n.L.debug(o,{classifier:"📑ui/ux",overwriteStyle:"; background-color: #060;"})))}},9196:(e,t,o)=>{o.d(t,{w:()=>r});var n=o(7349);const r=(e,t,o)=>{(0,n.a)(e,t,(e=>"top"===e||"right"===e||"bottom"===e||"left"===e),new Set(["TooltipAlignment {top, right, buttom, left}"]),o,{defaultValue:"top"})}},128:(e,t,o)=>{o.d(t,{f:()=>s,s:()=>a});var n=1/12.92;function r(e){return Math.pow((e+.055)/1.055,2.4)}function i(e){var t=e[0]/255,o=e[1]/255,i=e[2]/255;return.2126*(t<=.03928?t*n:r(t))+.7152*(o<=.03928?o*n:r(o))+.0722*(i<=.03928?i*n:r(i))}function l(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var o=parseInt(e,16);return[o>>16,o>>8&255,255&o,t]}function a(e,t){return function(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(i(e),i(t))}(l(e),l(t))}function s(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}},8800:(e,t,o)=>{o.r(t),o.d(t,{kol_tooltip:()=>a});var n=o(2552),r=o(9196),i=o(9294),l=o(7349);const a=class{constructor(e){(0,n.r)(this,e),this.hydrated=!1,this.hostElement=null,this.childElements=[],this.alignTooltip=()=>{const e=this.childElements[0];{const t=e.getBoundingClientRect();if(this.tooltipElement instanceof HTMLElement){switch(this.state._align){case"top":case"bottom":this.tooltipElement.style.left=t.left+e.offsetWidth/2-this.tooltipElement.offsetWidth/2+"px";break;default:this.tooltipElement.style.top=t.top+t.height/2-this.tooltipElement.offsetHeight/2+"px"}switch(this.state._align){case"left":this.tooltipElement.style.left=`calc(${t.left-this.tooltipElement.offsetWidth}px - 0.5em)`;break;case"right":this.tooltipElement.style.left=`calc(${t.right}px + 0.5em)`;break;case"bottom":this.tooltipElement.style.top=`calc(${t.bottom}px + 0.5em)`;break;default:this.tooltipElement.style.top=`calc(${t.top-this.tooltipElement.offsetHeight}px - 0.5em)`}}}},this.showTooltip=()=>{this.tooltipElement instanceof HTMLElement&&(this.tooltipElement.style.setProperty("display","block"),(0,i.g)().body.addEventListener("keyup",this.hideTooltipByEscape),this.alignTooltip(),this.tooltipElement.style.setProperty("visibility","visible"),document.addEventListener("scroll",this.alignTooltip))},this.hideTooltip=()=>{this.tooltipElement instanceof HTMLElement&&(this.tooltipElement.style.setProperty("display","none"),this.tooltipElement.style.setProperty("visibility","hidden"),document.removeEventListener("scroll",this.alignTooltip))},this.hideTooltipByEscape=e=>{"Escape"===e.key&&((0,i.g)().body.removeEventListener("keyup",this.hideTooltipByEscape),this.hideTooltip())},this.catchHostElement=e=>{if(this.hostElement=e,this.hostElement instanceof HTMLElement){const e=this.hostElement.previousElementSibling;e instanceof HTMLElement&&(e.removeEventListener("mouseover",this.showTooltip),e.addEventListener("mouseover",this.showTooltip),e.removeEventListener("focus",this.showTooltip),e.addEventListener("focus",this.showTooltip),e.removeEventListener("mouseout",this.hideTooltip),e.addEventListener("mouseout",this.hideTooltip),e.removeEventListener("blur",this.hideTooltip),e.addEventListener("blur",this.hideTooltip),this.childElements.push(e))}},this.catchTooltipElement=e=>{this.tooltipElement=e},this._align="top",this._id=void 0,this._label=void 0,this.state={_align:"top",_id:(0,i.n)(),_label:""}}render(){const e=setTimeout((()=>{clearTimeout(e),this.alignTooltip()}),250);return(0,n.h)(n.H,{ref:this.catchHostElement,style:{maxWidth:"300px"}},""!==this.state._label&&(0,n.h)("kol-badge",{class:{"arrow-bottom":"top"===this.state._align,"arrow-left":"right"===this.state._align,"arrow-top":"bottom"===this.state._align,"arrow-right":"left"===this.state._align},id:this.state._id,ref:this.catchTooltipElement,_color:{backgroundColor:"#333",color:"#ddd"},_label:this.state._label}))}validateAlign(e){(0,r.w)(this,"_align",e)}validateId(e){(0,l.w)(this,"_id",e)}validateLabel(e){(0,l.w)(this,"_label",e)}componentWillLoad(){this.validateAlign(this._align),this.validateId(this._id),this.validateLabel(this._label),this.hydrated=!0}static get watchers(){return{_align:["validateAlign"],_id:["validateId"],_label:["validateLabel"]}}};a.style={default:'kol-badge,.tooltip{font-size:1rem;position:fixed;animation-name:fadeInOpacity;animation-iteration-count:1;animation-timing-function:ease-in;animation-duration:0.5s;display:none;z-index:1000;max-width:300px;box-shadow:0 0 0.15rem rgba(255, 255, 255, 0.8)}kol-badge::after,.tooltip::after{content:" ";position:absolute;border-style:solid;border-width:5px}kol-badge.arrow-left::after,.tooltip.arrow-left::after{margin-top:-5px;top:50%;right:100%;border-color:transparent black transparent transparent}kol-badge.arrow-right::after,.tooltip.arrow-right::after{margin-top:-5px;top:50%;left:100%;border-color:transparent transparent transparent black}kol-badge.arrow-top::after,.tooltip.arrow-top::after{margin-left:-5px;left:50%;bottom:100%;border-color:transparent transparent black transparent}kol-badge.arrow-bottom::after,.tooltip.arrow-bottom::after{margin-left:-5px;left:50%;top:100%;border-color:black transparent transparent transparent}@keyframes fadeInOpacity{0%{opacity:0}100%{opacity:1}}'}},7349:(e,t,o)=>{o.d(t,{K:()=>W,a:()=>E,b:()=>S,c:()=>T,d:()=>w,e:()=>A,f:()=>x,g:()=>B,h:()=>v,i:()=>R,j:()=>q,k:()=>H,l:()=>O,m:()=>M,n:()=>j,o:()=>y,p:()=>N,q:()=>_,r:()=>d,s:()=>k,w:()=>L});var n=o(128),r=o(5208),i=o(9294),l=o(9057);const a=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const o=new Set;a(o,t.querySelectorAll(e));const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const r=n[t].shadowRoot;a(o,s(e,"object"==typeof r&&null!==r?r:n[t]))}return Array.from(o)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},c=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let o=t.querySelector(e);if(null===o){const n=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<n.length;t++){const r=n[t].shadowRoot;if(o=c(e,"object"==typeof r&&null!==r?r:n[t]),null!==o)break}}return o}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var d=u,h=u;function u(e){var t=f(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function f(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),o=t.length;if(3==o||4==o){var n=g(t[0]),r=g(t[1]),i=g(t[2]),l=3==o?255:g(t[3]);if(isNaN(n)||isNaN(r)||isNaN(i)||isNaN(l))return;return[n,r,i,l]}}(e)||function(e){var t=e.replace(/^#/,""),o=t.length;if(6==o||8==o){var n=g(t.slice(0,2)),r=g(t.slice(2,4)),i=g(t.slice(4,6)),l=6==o?255:g(t.slice(6,8));if(isNaN(n)||isNaN(r)||isNaN(i)||isNaN(l))return;return[n,r,i,l]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=m(t[0],!0),n=m(t[1],!0),r=m(t[2],!0);if(-1!=o&&-1!=n&&-1!=r)return[o,n,r,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),o=m(t[0],!0),n=m(t[1],!0),r=m(t[2],!0),i=m(255*t[3]);if(-1!=o&&-1!=n&&-1!=r&&-1!=i)return[o,n,r,i]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=m(null!=e.r?e.r:null!=e.red?e.red:0,!0),o=m(null!=e.g?e.g:null!=e.green?e.green:0,!0),n=m(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),r=m(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=o&&-1!=n&&-1!=r)return[t,o,n,r]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=m(e[0],!0),o=m(e[1],!0),n=m(e[2],!0),r=m(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=o&&-1!=n&&-1!=r)return[t,o,n,r]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function p(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function g(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function m(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}d.arr=h,d.obj=function(e){var t=f(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},d.css=function(e){var t=f(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},d.hex=function(e){3==(t=f(e)).length&&t.push(255);var t,o=255==t[3],n=p(t[0]),r=p(t[1]),i=p(t[2]),l=function(e,t,o,n){var r=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=r.indexOf(e)&&-1!=r.indexOf(t)&&-1!=r.indexOf(o)&&-1!=r.indexOf(n)}(n,r,i,t=p(Math.round(t[3])));return o?l?"#"+n.charAt(0)+r.charAt(0)+i.charAt(0):"#"+n+r+i:l?"#"+n.charAt(0)+r.charAt(0)+i.charAt(0)+t.charAt(0):"#"+n+r+i+t},d.num=function(e){var t=f(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};const b=/\[object Object\]/,y=(e,t)=>{"string"==typeof e&&b.test(e)||t()},v=(e,t)=>{"string"==typeof e&&""===e||t()},w=(e,t)=>{Object.defineProperty(e,"target",{value:t,writable:!1})},k=(e,t,o,n={})=>{var r,i;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==o&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof n.afterPatch&&(null===(r=e.nextHooks.get(t))||void 0===r||r.set("afterPatch",n.afterPatch)),"function"==typeof n.beforePatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("beforePatch",n.beforePatch)),e.nextState.set(t,o),(e=>{var t,o,n;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,o)=>{var n;const r=t.get("beforePatch");"function"==typeof r&&r(null===(n=e.nextState)||void 0===n?void 0:n.get(o),e.nextState,e,o)})),(null===(o=e.nextState)||void 0===o?void 0:o.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(n=e.nextHooks)||void 0===n||n.forEach(((t,o)=>{const n=t.get("afterPatch");"function"==typeof n&&n(e.state[o],e.state,e,o)}))),delete e.nextHooks})(e))},E=(e,t,o,n,i,l={})=>{o(i)?k(e,t,i,null==l?void 0:l.hooks):void 0===i||null===i&&(void 0===(null==l?void 0:l.required)||!1===(null==l?void 0:l.required))?k(e,t,null==l?void 0:l.defaultValue,null==l?void 0:l.hooks):(void 0!==(null==l?void 0:l.required)&&!1!==(null==l?void 0:l.required)||n.add(null),((e,t,o,n)=>{(0,r.d)(`[${e.constructor.name}] Der Property-Wert (${o}) für '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(n).join(", ")}`)})(e,t,i,n))},S=(e,t,o,n)=>{E(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),o,n)},L=(e,t,o,n={})=>{const r="number"==typeof n.minLength?null==n?void 0:n.minLength:0;E(e,t,(e=>"string"==typeof e&&e.length>=r),new Set([`String (Mindestlänge ${r})`]),o,n)},x=(e,t,o,n)=>{E(e,t,(e=>"number"==typeof e&&(void 0===(null==n?void 0:n.min)||"number"==typeof(null==n?void 0:n.min)&&e>=n.min)&&(void 0===(null==n?void 0:n.max)||"number"==typeof(null==n?void 0:n.max)&&e<=n.max)),new Set(["Number"]),o,n)},T=(e,t,o,n,i=(e=>e==e),l={})=>{v(n,(()=>{y(n,(()=>{void 0===n&&(n=[]);try{try{n=N(n)}catch(e){}if(Array.isArray(n)){const r=n.find((e=>!o(e)));void 0===r&&i(n)?k(e,t,n,l.hooks):y(r,(()=>{throw console.log(r),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}else y(n,(()=>{throw new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}catch(e){(0,r.d)("Known bug: Zeichenkettenliste (string[])")}}))}))},_=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw i.L.warn(["stringifyJson",e]),i.L.error("↑ Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},N=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){i.L.warn(["parseJson",e]),i.L.error("↑ Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anführungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},A=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,M=e=>"string"==typeof e?e:A(e),H=(e,t)=>c(e,t||(0,i.g)()),O=(e,t)=>s(e,t||(0,i.g)());let C=null;const P=()=>(C=C||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,i.g)().body,level:"Fail",score:1},C),D=/(\d+, ){3}0\)/,q=(e,t=P())=>{const o=getComputedStyle(e),r=D.test(o.backgroundColor)?t.backgroundColor:d.hex(o.backgroundColor),l=D.test(o.color)?t.color:d.hex(o.color),a=(0,n.s)(r,l),s={backgroundColor:r,color:l,domNode:e,level:(0,n.f)(a),score:a};return a<4.5&&i.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},j=(e,t=P())=>{t.domNode instanceof HTMLElement&&(t=q(t.domNode,t));const o=t.domNode.querySelector(e);if(null===o){const o=t.domNode.querySelectorAll('[class="hydrated"]');for(let n=0;n<o.length&&(t.domNode=o[n],null===(t=j(e,t)).domNode);n++);return t}return q(o,t)},z=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,i.a)().pageYOffset-50}),e.focus()):(0,r.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},B=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,r.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const o=`${t}`;t=e,e=o}if("string"==typeof e){const o=H(e,t);o instanceof HTMLElement?z(o):(0,r.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,r.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class R{static queryHtmlElementColors(e,t,o=!1,n=!0){let r=null;if(!0===o||!1===R.executionLock)if(!1===o&&(R.cache.clear(),R.cache.set(t.domNode,t),R.executionLock=!0,!0===n&&i.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)r=t;else{const o=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)o.add(e[t])}const n=t.domNode;if("function"==typeof n.assignedNodes){const e=n.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&o.add(e[t])}const i=t.domNode.children;for(let e=0;e<i.length;e++)o.add(i[e]);const l=Array.from(o);for(let o=0;o<l.length;o++){let n=R.cache.get(l[o]);void 0===n&&(n=q(l[o],t)),R.cache.set(l[o],n);const i=R.queryHtmlElementColors(e,n,!0,!1);if(null!==i){r=i;break}}}else i.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===o&&(!0===n&&i.L.debug(`[KoliBriUtils] Color contrast analysis finished (${R.cache.size} DOM elements are analysed).`),R.executionLock=!1,R.cache.clear()),r}}R.executionLock=!1,R.cache=new Map;class W{}W.patchTheme=l.p,W.patchThemeTag=l.a,W.querySelector=H,W.querySelectorAll=O,W.scrollByHTMLElement=z,W.scrollBySelector=B,W.stringifyJson=_}}]);