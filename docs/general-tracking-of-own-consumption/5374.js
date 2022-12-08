/*! For license information please see 5374.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_oss_general_tracking_of_own_consumption=self.webpackChunk_public_oss_general_tracking_of_own_consumption||[]).push([[5374],{5208:(e,r,t)=>{t.d(r,{a:()=>f,b:()=>g,c:()=>i,d:()=>c,e:()=>a,f:()=>u,u:()=>m});var n=t(9294);const o=new Set,a=e=>{!1===o.has(e)&&(o.add(e),n.L.info(e,{classifier:"✋a11y",overwriteStyle:"; background-color: #09f"}))},l=new Set,i=e=>{!1===l.has(e)&&(l.add(e),n.L.warn(e,{classifier:"🔥deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},s=new Set,c=e=>{!1===s.has(e)&&(s.add(e),n.L.debug(e,{classifier:"💻dev",overwriteStyle:"; background-color: #f09"}))},d=new Set,u=(e,r=!1)=>{!1===d.has(e)&&(d.add(e),e+=!0===r?" ✅":"",n.L.debug(e,{classifier:"🌟feature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns über jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const h=new Set,g=()=>{a('"Disabled" schränkt die Zugänglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},f=e=>{"string"==typeof e&&""!==e||a("Manche Strukturelemente, wie bspw. der nav-Tag, können mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden können, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},m=(e,r=8)=>{var t;r>7&&(t=`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Menüpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===h.has(t)&&(h.add(t),n.L.debug(t,{classifier:"📑ui/ux",overwriteStyle:"; background-color: #060;"})))}},9289:(e,r,t)=>{t.d(r,{c:()=>n});var n={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},2516:(e,r,t)=>{t.d(r,{c:()=>l});var n=t(9289),o=function(e){var r,t,o=[],l=1;if("string"==typeof e)if(n.c[e])o=n.c[e].slice(),t="rgb";else if("transparent"===e)l=0,t="rgb",o=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(e)){var i=e.slice(1);l=1,(d=i.length)<=4?(o=[parseInt(i[0]+i[0],16),parseInt(i[1]+i[1],16),parseInt(i[2]+i[2],16)],4===d&&(l=parseInt(i[3]+i[3],16)/255)):(o=[parseInt(i[0]+i[1],16),parseInt(i[2]+i[3],16),parseInt(i[4]+i[5],16)],8===d&&(l=parseInt(i[6]+i[7],16)/255)),o[0]||(o[0]=0),o[1]||(o[1]=0),o[2]||(o[2]=0),t="rgb"}else if(r=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(e)){var s=r[1],c="rgb"===s;t=i=s.replace(/a$/,"");var d="cmyk"===i?4:"gray"===i?1:3;o=r[2].trim().split(/\s*[,\/]\s*|\s+/).map((function(e,r){if(/%$/.test(e))return r===d?parseFloat(e)/100:"rgb"===i?255*parseFloat(e)/100:parseFloat(e);if("h"===i[r]){if(/deg$/.test(e))return parseFloat(e);if(void 0!==a[e])return a[e]}return parseFloat(e)})),s===i&&o.push(1),l=c||void 0===o[d]?1:o[d],o=o.slice(0,d)}else e.length>10&&/[0-9](?:\s|\/)/.test(e)&&(o=e.match(/([0-9]+)/g).map((function(e){return parseFloat(e)})),t=e.match(/([a-z])/gi).join("").toLowerCase());else isNaN(e)?Array.isArray(e)||e.length?(o=[e[0],e[1],e[2]],t="rgb",l=4===e.length?e[3]:1):e instanceof Object&&(null!=e.r||null!=e.red||null!=e.R?(t="rgb",o=[e.r||e.red||e.R||0,e.g||e.green||e.G||0,e.b||e.blue||e.B||0]):(t="hsl",o=[e.h||e.hue||e.H||0,e.s||e.saturation||e.S||0,e.l||e.lightness||e.L||e.b||e.brightness]),l=e.a||e.alpha||e.opacity||1,null!=e.opacity&&(l/=100)):(t="rgb",o=[e>>>16,(65280&e)>>>8,255&e]);return{space:t,values:o,alpha:l}},a={red:0,orange:60,yellow:120,green:180,blue:240,purple:300},l=function(e){var r;Array.isArray(e)&&e.raw&&(e=String.raw.apply(null,arguments));var t=o(e);if(!t.space)return[];var n=[0,0,0],a="h"===t.space[0]?[360,100,100]:[255,255,255];return(r=Array(3))[0]=Math.min(Math.max(t.values[0],n[0]),a[0]),r[1]=Math.min(Math.max(t.values[1],n[1]),a[1]),r[2]=Math.min(Math.max(t.values[2],n[2]),a[2]),"h"===t.space[0]&&(r=i(r)),r.push(Math.min(Math.max(t.alpha,0),1)),r};function i(e){var r,t,n,o,a,l=e[0]/360,i=e[1]/100,s=e[2]/100,c=0;if(0===i)return[a=255*s,a,a];for(r=2*s-(t=s<.5?s*(1+i):s+i-s*i),o=[0,0,0];c<3;)(n=l+1/3*-(c-1))<0?n++:n>1&&n--,a=6*n<1?r+6*(t-r)*n:2*n<1?t:3*n<2?r+(t-r)*(2/3-n)*6:r,o[c++]=255*a;return o}},128:(e,r,t)=>{t.d(r,{f:()=>s,s:()=>i});var n=1/12.92;function o(e){return Math.pow((e+.055)/1.055,2.4)}function a(e){var r=e[0]/255,t=e[1]/255,a=e[2]/255;return.2126*(r<=.03928?r*n:o(r))+.7152*(t<=.03928?t*n:o(t))+.0722*(a<=.03928?a*n:o(a))}function l(e){var r=255;8===(e=e.replace(/^#/,"")).length&&(r=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(r=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var t=parseInt(e,16);return[t>>16,t>>8&255,255&t,r]}function i(e,r){return function(e,r){return function(e,r){return(Math.max(e,r)+.05)/(Math.min(e,r)+.05)}(a(e),a(r))}(l(e),l(r))}function s(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}},7349:(e,r,t)=>{t.d(r,{K:()=>$,a:()=>S,b:()=>N,c:()=>M,d:()=>w,e:()=>E,f:()=>A,g:()=>I,h:()=>v,i:()=>R,j:()=>D,k:()=>O,l:()=>j,m:()=>H,n:()=>P,o:()=>y,p:()=>q,q:()=>L,r:()=>d,s:()=>k,w:()=>x});var n=t(128),o=t(5208),a=t(9294),l=t(9057);const i=(e,r)=>{r.forEach((r=>{!1===e.has(r)&&e.add(r)}))},s=(e,r=document)=>{if(r instanceof Document||r instanceof HTMLElement||r instanceof ShadowRoot){const t=new Set;i(t,r.querySelectorAll(e));const n=r.querySelectorAll('[class*="hydrated"]');for(let r=0;r<n.length;r++){const o=n[r].shadowRoot;i(t,s(e,"object"==typeof o&&null!==o?o:n[r]))}return Array.from(t)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},c=(e,r=document)=>{if(r instanceof Document||r instanceof HTMLElement||r instanceof ShadowRoot){let t=r.querySelector(e);if(null===t){const n=r.querySelectorAll('[class*="hydrated"]');for(let r=0;r<n.length;r++){const o=n[r].shadowRoot;if(t=c(e,"object"==typeof o&&null!==o?o:n[r]),null!==t)break}}return t}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var d=h,u=h;function h(e){var r=g(e);return 3==r.length?r.concat(255):(r[3]=Math.round(r[3]),r)}function g(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var r=e.replace(/^#/,""),t=r.length;if(3==t||4==t){var n=m(r[0]),o=m(r[1]),a=m(r[2]),l=3==t?255:m(r[3]);if(isNaN(n)||isNaN(o)||isNaN(a)||isNaN(l))return;return[n,o,a,l]}}(e)||function(e){var r=e.replace(/^#/,""),t=r.length;if(6==t||8==t){var n=m(r.slice(0,2)),o=m(r.slice(2,4)),a=m(r.slice(4,6)),l=6==t?255:m(r.slice(6,8));if(isNaN(n)||isNaN(o)||isNaN(a)||isNaN(l))return;return[n,o,a,l]}}(e)||function(e){if("rgb("==e.substr(0,4)){var r=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),t=p(r[0],!0),n=p(r[1],!0),o=p(r[2],!0);if(-1!=t&&-1!=n&&-1!=o)return[t,n,o,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var r=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),t=p(r[0],!0),n=p(r[1],!0),o=p(r[2],!0),a=p(255*r[3]);if(-1!=t&&-1!=n&&-1!=o&&-1!=a)return[t,n,o,a]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var r=p(null!=e.r?e.r:null!=e.red?e.red:0,!0),t=p(null!=e.g?e.g:null!=e.green?e.green:0,!0),n=p(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),o=p(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=r&&-1!=t&&-1!=n&&-1!=o)return[r,t,n,o]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var r=p(e[0],!0),t=p(e[1],!0),n=p(e[2],!0),o=p(null!=e[3]?e[3]:255,!0);if(-1!=r&&-1!=t&&-1!=n&&-1!=o)return[r,t,n,o]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function f(e){var r=e.toString(16);return 1==r.length?"0"+r:r}function m(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function p(e,r){return"number"!=typeof e||!0===r&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}d.arr=u,d.obj=function(e){var r=g(e);return{r:r[0],g:r[1],b:r[2],a:3==r.length?255:Math.round(r[3])}},d.css=function(e){var r=g(e);return 3==r.length&&r.push(255),255==r[3]?"rgb("+r[0]+", "+r[1]+", "+r[2]+")":0==r[3]?"rgba("+r[0]+", "+r[1]+", "+r[2]+", 0)":"rgba("+r[0]+", "+r[1]+", "+r[2]+", "+String(r[3]/255).substr(1)+")"},d.hex=function(e){3==(r=g(e)).length&&r.push(255);var r,t=255==r[3],n=f(r[0]),o=f(r[1]),a=f(r[2]),l=function(e,r,t,n){var o=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=o.indexOf(e)&&-1!=o.indexOf(r)&&-1!=o.indexOf(t)&&-1!=o.indexOf(n)}(n,o,a,r=f(Math.round(r[3])));return t?l?"#"+n.charAt(0)+o.charAt(0)+a.charAt(0):"#"+n+o+a:l?"#"+n.charAt(0)+o.charAt(0)+a.charAt(0)+r.charAt(0):"#"+n+o+a+r},d.num=function(e){var r=g(e);return 3==r.length?r.push(255):r[3]=Math.round(r[3]),(r[3]<<24>>>0|r[0]<<16|r[1]<<8|r[2])>>>0};const b=/\[object Object\]/,y=(e,r)=>{"string"==typeof e&&b.test(e)||r()},v=(e,r)=>{"string"==typeof e&&""===e||r()},w=(e,r)=>{Object.defineProperty(e,"target",{value:r,writable:!1})},k=(e,r,t,n={})=>{var o,a;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(r)!==t&&(e.nextHooks.get(r)instanceof Map==0&&e.nextHooks.set(r,new Map),"function"==typeof n.afterPatch&&(null===(o=e.nextHooks.get(r))||void 0===o||o.set("afterPatch",n.afterPatch)),"function"==typeof n.beforePatch&&(null===(a=e.nextHooks.get(r))||void 0===a||a.set("beforePatch",n.beforePatch)),e.nextState.set(r,t),(e=>{var r,t,n;null===(r=e.nextHooks)||void 0===r||r.forEach(((r,t)=>{var n;const o=r.get("beforePatch");"function"==typeof o&&o(null===(n=e.nextState)||void 0===n?void 0:n.get(t),e.nextState,e,t)})),(null===(t=e.nextState)||void 0===t?void 0:t.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(n=e.nextHooks)||void 0===n||n.forEach(((r,t)=>{const n=r.get("afterPatch");"function"==typeof n&&n(e.state[t],e.state,e,t)}))),delete e.nextHooks})(e))},S=(e,r,t,n,a,l={})=>{t(a)?k(e,r,a,null==l?void 0:l.hooks):void 0===a||null===a&&(void 0===(null==l?void 0:l.required)||!1===(null==l?void 0:l.required))?k(e,r,null==l?void 0:l.defaultValue,null==l?void 0:l.hooks):(void 0!==(null==l?void 0:l.required)&&!1!==(null==l?void 0:l.required)||n.add(null),((e,r,t,n)=>{(0,o.d)(`[${e.constructor.name}] Der Property-Wert (${t}) für '${r}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(n).join(", ")}`)})(e,r,a,n))},N=(e,r,t,n)=>{S(e,r,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),t,n)},x=(e,r,t,n={})=>{const o="number"==typeof n.minLength?null==n?void 0:n.minLength:0;S(e,r,(e=>"string"==typeof e&&e.length>=o),new Set([`String (Mindestlänge ${o})`]),t,n)},A=(e,r,t,n)=>{S(e,r,(e=>"number"==typeof e&&(void 0===(null==n?void 0:n.min)||"number"==typeof(null==n?void 0:n.min)&&e>=n.min)&&(void 0===(null==n?void 0:n.max)||"number"==typeof(null==n?void 0:n.max)&&e<=n.max)),new Set(["Number"]),t,n)},M=(e,r,t,n,a=(e=>e==e),l={})=>{v(n,(()=>{y(n,(()=>{void 0===n&&(n=[]);try{try{n=q(n)}catch(e){}if(Array.isArray(n)){const o=n.find((e=>!t(e)));void 0===o&&a(n)?k(e,r,n,l.hooks):y(o,(()=>{throw console.log(o),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}else y(n,(()=>{throw new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}catch(e){(0,o.d)("Known bug: Zeichenkettenliste (string[])")}}))}))},L=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(r){throw a.L.warn(["stringifyJson",e]),a.L.error("↑ Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},q=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(r){try{return JSON.parse(e.replace(/'/g,'"'))}catch(r){a.L.warn(["parseJson",e]),a.L.error("↑ Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anführungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},E=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,H=e=>"string"==typeof e?e:E(e),O=(e,r)=>c(e,r||(0,a.g)()),j=(e,r)=>s(e,r||(0,a.g)());let C=null;const T=()=>(C=C||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,a.g)().body,level:"Fail",score:1},C),_=/(\d+, ){3}0\)/,D=(e,r=T())=>{const t=getComputedStyle(e),o=_.test(t.backgroundColor)?r.backgroundColor:d.hex(t.backgroundColor),l=_.test(t.color)?r.color:d.hex(t.color),i=(0,n.s)(o,l),s={backgroundColor:o,color:l,domNode:e,level:(0,n.f)(i),score:i};return i<4.5&&a.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},P=(e,r=T())=>{r.domNode instanceof HTMLElement&&(r=D(r.domNode,r));const t=r.domNode.querySelector(e);if(null===t){const t=r.domNode.querySelectorAll('[class="hydrated"]');for(let n=0;n<t.length&&(r.domNode=t[n],null===(r=P(e,r)).domNode);n++);return r}return D(t,r)},z=(e,r=window)=>{e instanceof HTMLElement?(r.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,a.a)().pageYOffset-50}),e.focus()):(0,o.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},I=(e,r)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof r){(0,o.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const t=`${r}`;r=e,e=t}if("string"==typeof e){const t=O(e,r);t instanceof HTMLElement?z(t):(0,o.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,o.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class R{static queryHtmlElementColors(e,r,t=!1,n=!0){let o=null;if(!0===t||!1===R.executionLock)if(!1===t&&(R.cache.clear(),R.cache.set(r.domNode,r),R.executionLock=!0,!0===n&&a.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===r.domNode)o=r;else{const t=new Set;if(r.domNode.shadowRoot){const e=r.domNode.shadowRoot.children;for(let r=0;r<e.length;r++)t.add(e[r])}const n=r.domNode;if("function"==typeof n.assignedNodes){const e=n.assignedNodes();for(let r=0;r<e.length;r++)e[r]instanceof HTMLElement&&t.add(e[r])}const a=r.domNode.children;for(let e=0;e<a.length;e++)t.add(a[e]);const l=Array.from(t);for(let t=0;t<l.length;t++){let n=R.cache.get(l[t]);void 0===n&&(n=D(l[t],r)),R.cache.set(l[t],n);const a=R.queryHtmlElementColors(e,n,!0,!1);if(null!==a){o=a;break}}}else a.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===t&&(!0===n&&a.L.debug(`[KoliBriUtils] Color contrast analysis finished (${R.cache.size} DOM elements are analysed).`),R.executionLock=!1,R.cache.clear()),o}}R.executionLock=!1,R.cache=new Map;class ${}$.patchTheme=l.p,$.patchThemeTag=l.a,$.querySelector=O,$.querySelectorAll=j,$.scrollByHTMLElement=z,$.scrollBySelector=I,$.stringifyJson=L}}]);