/*! For license information please see 3163.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_oss_general_tracking_of_own_consumption=self.webpackChunk_public_oss_general_tracking_of_own_consumption||[]).push([[3163],{5208:(e,t,r)=>{r.d(t,{a:()=>g,b:()=>p,c:()=>l,d:()=>c,e:()=>i,f:()=>u,u:()=>f});var o=r(9294);const a=new Set,i=e=>{!1===a.has(e)&&(a.add(e),o.L.info(e,{classifier:"✋a11y",overwriteStyle:"; background-color: #09f"}))},n=new Set,l=e=>{!1===n.has(e)&&(n.add(e),o.L.warn(e,{classifier:"🔥deprecated",forceLog:!0,overwriteStyle:"; background-color: #f00"}))},s=new Set,c=e=>{!1===s.has(e)&&(s.add(e),o.L.debug(e,{classifier:"💻dev",overwriteStyle:"; background-color: #f09"}))},d=new Set,u=(e,t=!1)=>{!1===d.has(e)&&(d.add(e),e+=!0===t?" ✅":"",o.L.debug(e,{classifier:"🌟feature",overwriteStyle:"; background-color: #309"}))};c("Wir freuen uns über jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const h=new Set,p=()=>{i('"Disabled" schränkt die Zugänglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},g=e=>{"string"==typeof e&&""!==e||i("Manche Strukturelemente, wie bspw. der nav-Tag, können mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden können, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},f=(e,t=8)=>{var r;t>7&&(r=`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Menüpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`,!1===h.has(r)&&(h.add(r),o.L.debug(r,{classifier:"📑ui/ux",overwriteStyle:"; background-color: #060;"})))}},128:(e,t,r)=>{r.d(t,{f:()=>s,s:()=>l});var o=1/12.92;function a(e){return Math.pow((e+.055)/1.055,2.4)}function i(e){var t=e[0]/255,r=e[1]/255,i=e[2]/255;return.2126*(t<=.03928?t*o:a(t))+.7152*(r<=.03928?r*o:a(r))+.0722*(i<=.03928?i*o:a(i))}function n(e){var t=255;8===(e=e.replace(/^#/,"")).length&&(t=parseInt(e.slice(6,8),16),e=e.substring(0,6)),4===e.length&&(t=parseInt(e.slice(3,4).repeat(2),16),e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var r=parseInt(e,16);return[r>>16,r>>8&255,255&r,t]}function l(e,t){return function(e,t){return function(e,t){return(Math.max(e,t)+.05)/(Math.min(e,t)+.05)}(i(e),i(t))}(n(e),n(t))}function s(e){return e>=7?"AAA":e>=4.5?"AA":e>=3?"AA Large":"Fail"}},3163:(e,t,r)=>{r.r(t),r.d(t,{kol_input_date:()=>i});var o=r(2552),a=r(7349);const i=class{constructor(e){(0,o.r)(this,e),this._accessKey=void 0,this._alert=!0,this._autoComplete=void 0,this._disabled=void 0,this._error=void 0,this._hideLabel=void 0,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._max=void 0,this._min=void 0,this._name=void 0,this._on=void 0,this._readOnly=void 0,this._required=void 0,this._smartButton=void 0,this._step=void 0,this._tabIndex=void 0,this._touched=!1,this._type="date",this._value=void 0,this.state={}}render(){return(0,o.h)("kol-input-number",{_accessKey:this._accessKey,_alert:this._alert,_autoComplete:this._autoComplete,_disabled:this._disabled,_error:this._error,_hideLabel:this._hideLabel,_hint:this._hint,_icon:this._icon,_id:this._id,_list:this._list,_max:this.state._max,_min:this.state._min,_name:this._name,_on:this._on,_readOnly:this._readOnly,_required:this._required,_smartButton:this._smartButton,_step:this._step,_tabIndex:this._tabIndex,_touched:this._touched,_type:this._type,_value:this.state._value},(0,o.h)("slot",null))}valueAsIsoDate(e,t){const r=null!=e?e:t;if("string"==typeof r)return r;if("object"==typeof r&&r instanceof Date)switch(this._type){case"date":return`${r.getFullYear()}-${r.getMonth()+1}-${r.getDate()}`;case"datetime-local":return`${r.getFullYear()}-${r.getMonth()+1}-${r.getDate()}T${r.getHours()}:${r.getMinutes()}:${r.getSeconds()}`;case"month":return`${r.getFullYear()}-${r.getMonth()+1}`;case"time":return`${r.getHours()}:${r.getMinutes()}:${r.getSeconds()}`;case"week":throw new Error("Auto convert to week is not supported!")}}validateDateString(e){switch(this._type){case"date":return i.isoDateRegex.test(e);case"datetime-local":return i.isoLocalDateTimeRegex.test(e);case"month":return i.isoMonthRegex.test(e);case"time":return i.isoTimeRegex.test(e);case"week":return i.isoWeekRegex.test(e)}}validateMax(e){(0,a.a)(this,"_max",(e=>void 0===e||this.validateDateString(e)),new Set(["Iso8601","Date"]),this.valueAsIsoDate(e,"date"===this._type||"month"===this._type||"datetime-local"===this._type?i.DEFAULT_MAX_DATE:void 0))}validateMin(e){(0,a.a)(this,"_min",(e=>void 0===e||this.validateDateString(e)),new Set(["Iso8601","Date"]),this.valueAsIsoDate(e))}validateValue(e){(0,a.a)(this,"_value",(e=>void 0===e||this.validateDateString(e)),new Set(["Iso8601","Date"]),this.valueAsIsoDate(e))}componentWillLoad(){this.validateMax(this._max),this.validateMin(this._min),this.validateValue(this._value)}static get watchers(){return{_max:["validateMax"],_min:["validateMin"],_value:["validateValue"]}}};i.DEFAULT_MAX_DATE=new Date(9999,11,31,23,59,59),i.isoDateRegex=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])/,i.isoLocalDateTimeRegex=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])[T ][0-2]\d:[0-5]\d(:[0-5]\d(?:\.\d+)?)?/,i.isoMonthRegex=/^\d{4}-([0]\d|1[0-2])/,i.isoTimeRegex=/^[0-2]\d:[0-5]\d(:[0-5]\d(?:\.\d+)?)?/,i.isoWeekRegex=/^\d{4}-W(?:[0-4]\d|5[0-3])$/,i.style={default:'*,::before,::after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--kolibri-border-color)}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:var(--kolibri-color);--tw-ring-color:rgba(undefined, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}::moz-focus-inner{border-style:none;padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=\'search\']{-webkit-appearance:textfield;outline-offset:-2px}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}b{font-weight:bolder}button,select{text-transform:none}button,[type=\'button\'],[type=\'reset\'],[type=\'submit\']{-webkit-appearance:button}button{background-color:transparent;background-image:none}button,[role="button"]{cursor:pointer}code{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}fieldset{margin:0;padding:0}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}h1,p,h2,h3,h4,h5,h6{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}input,button,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;padding:0;line-height:inherit;color:inherit}input::placeholder{opacity:1;color:#9ca3af}input::webkit-input-placeholder{opacity:1;color:#9ca3af}input::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder{opacity:1;color:#9ca3af}input::-ms-input-placeholder{opacity:1;color:#9ca3af}legend{padding:0}progress{vertical-align:baseline}small{font-size:80%}svg{display:block;vertical-align:middle}table{text-indent:0;border-color:inherit;border-collapse:collapse}textarea{resize:vertical}textarea::placeholder{opacity:1;color:#9ca3af}textarea::webkit-input-placeholder{opacity:1;color:#9ca3af}textarea::-moz-placeholder{opacity:1;color:#9ca3af}textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}textarea::-ms-input-placeholder{opacity:1;color:#9ca3af}ul,ol{list-style:none;margin:0;padding:0}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.bg-normal{background-color:var(--kolibri-color-normal)}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.bg-spin-1{background-color:var(--kolibri-color-spin-1)}.bg-spin-2{background-color:var(--kolibri-color-spin-2)}.bg-spin-3{background-color:var(--kolibri-color-spin-3)}.rounded{border-radius:var(--kolibri-border-radius)}.border-1{border-width:1px}.cursor-pointer{cursor:pointer}.block{display:block}.inline-block{display:inline-block}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.inline-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex}.table{display:table}.grid{display:-ms-grid;display:grid}.hidden{display:none}.flex-wrap{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.items-center{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.content-center{-ms-flex-line-pack:center;-webkit-align-content:center;align-content:center}.float-left{float:left}.font-80{font-weight:80}.font-60{font-weight:60}.h-full{height:100%}.h-0{height:0px}.h-0\\.41c-2\\.42\\2c 0-4\\.82-1\\.57-4\\.82-3\\.58c0\\.05-0\\.98\\2c 0\\.43-1\\.91\\2c 1\\.07-2\\.65c0\\.3\\2c 0\\.05\\2c 0\\.61\\2c 0\\.09\\2c 0\\.92\\2c 0\\.09c1\\.1\\2c 0\\2c 1\\.69-0\\.58\\2c 1\\.74-1\\.16{height:0.29rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.leading-normal{line-height:1.5}.list-none{list-style-type:none}.list-disc{list-style-type:disc}.list-decimal{list-style-type:decimal}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:calc(1 * var(--kolibri-spacing))}.mr-2{margin-right:calc(2 * var(--kolibri-spacing))}.ml-2{margin-left:calc(2 * var(--kolibri-spacing))}.mt-2{margin-top:calc(2 * var(--kolibri-spacing))}.mt-4{margin-top:calc(4 * var(--kolibri-spacing))}.outline{outline-style:solid}.overflow-hidden{overflow:hidden}.overflow-y-visible{overflow-y:visible}.p-2{padding:calc(2 * var(--kolibri-spacing))}.p-4{padding:calc(4 * var(--kolibri-spacing))}.px{padding-left:1px;padding-right:1px}.py-2{padding-top:calc(2 * var(--kolibri-spacing));padding-bottom:calc(2 * var(--kolibri-spacing))}.pl-8{padding-left:2rem}.pb-2{padding-bottom:calc(2 * var(--kolibri-spacing))}.tab{-moz-tab-size:4;-o-tab-size:4;tab-size:4}.absolute{position:absolute}.text-center{text-align:center}.text-normal{color:var(--kolibri-color-normal)}.hover\\:text-primary:hover{color:var(--kolibri-color-primary)}.italic{font-style:italic}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.indent{text-indent:1.5rem}.visible{visibility:visible}.w-full{width:100%}.w-4\\/5{width:80%}.z-50{z-index:50}.gap-1{grid-gap:calc(1 * var(--kolibri-spacing));gap:calc(1 * var(--kolibri-spacing))}.gap-2{grid-gap:calc(2 * var(--kolibri-spacing));gap:calc(2 * var(--kolibri-spacing))}.grid-flow-col{grid-auto-flow:column}.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z))}.animate{-webkit-animation-iteration-count:1;animation-iteration-count:1}.filter{--tw-blur:var(--tw-empty, );--tw-brightness:var(--tw-empty, );--tw-contrast:var(--tw-empty, );--tw-grayscale:var(--tw-empty, );--tw-hue-rotate:var(--tw-empty, );--tw-invert:var(--tw-empty, );--tw-saturate:var(--tw-empty, );--tw-sepia:var(--tw-empty, );--tw-drop-shadow:var(--tw-empty, );-webkit-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}:host *{-ms-hyphens:var(--kolibri-hyphens);-webkit-hyphens:var(--kolibri-hyphens);hyphens:var(--kolibri-hyphens);font-family:var(--kolibri-font-family);line-height:var(--kolibri-line-height);word-break:break-word}.kol-required span::after{content:"*"}input,select,textarea{border-color:var(--kolibri-border-color);border-style:solid;border-width:1px}input.error,select.error,textarea.error{border-color:var(--kolibri-border-error)}input:focus,input:hover,select:focus,select:hover,textarea:focus,textarea:hover{border-color:#999}input:not([type=checkbox]),option,select,textarea{font-size:inherit;letter-spacing:inherit;word-spacing:inherit}.kol-disabled{opacity:0.5}.kol-cursor-not-allowed,.kol-cursor-not-allowed *{cursor:not-allowed}input[type=color],input[type=date],input[type=datetime-local],input[type=email],input[type=file],input[type=month],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=text],input[type=time],input[type=url],input[type=week],select,textarea{background-color:white;display:block;line-height:1em;padding:0.5em}input[type=color]{height:2.5em;padding:0.25em 0.5em}textarea{padding:0.5em}'}},7349:(e,t,r)=>{r.d(t,{K:()=>P,a:()=>x,b:()=>_,c:()=>z,d:()=>y,e:()=>L,f:()=>M,g:()=>q,h:()=>v,i:()=>I,j:()=>R,k:()=>E,l:()=>T,m:()=>D,n:()=>$,o:()=>m,p:()=>N,q:()=>A,r:()=>d,s:()=>k,w:()=>S});var o=r(128),a=r(5208),i=r(9294),n=r(9057);const l=(e,t)=>{t.forEach((t=>{!1===e.has(t)&&e.add(t)}))},s=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){const r=new Set;l(r,t.querySelectorAll(e));const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const a=o[t].shadowRoot;l(r,s(e,"object"==typeof a&&null!==a?a:o[t]))}return Array.from(r)}throw new Error("The parameter document for the method querySelectorAll is not type of Document, HTMLElement or ShadowRoot.")},c=(e,t=document)=>{if(t instanceof Document||t instanceof HTMLElement||t instanceof ShadowRoot){let r=t.querySelector(e);if(null===r){const o=t.querySelectorAll('[class*="hydrated"]');for(let t=0;t<o.length;t++){const a=o[t].shadowRoot;if(r=c(e,"object"==typeof a&&null!==a?a:o[t]),null!==r)break}}return r}throw new Error("The parameter document for the method querySelector is not type of Document, HTMLElement or ShadowRoot.")};var d=h,u=h;function h(e){var t=p(e);return 3==t.length?t.concat(255):(t[3]=Math.round(t[3]),t)}function p(e){return"string"==typeof e?function(e){return"red"==e?[255,0,0]:"green"==e?[0,255,0]:"blue"==e?[0,0,255]:"black"==e?[0,0,0]:"white"==e?[255,255,255]:"cyan"==e?[0,255,255]:"gray"==e||"grey"==e?[128,128,128]:"magenta"==e||"pink"==e?[255,0,255]:"yellow"==e?[255,255,0]:void 0}(e=e.toLowerCase())||function(e){var t=e.replace(/^#/,""),r=t.length;if(3==r||4==r){var o=f(t[0]),a=f(t[1]),i=f(t[2]),n=3==r?255:f(t[3]);if(isNaN(o)||isNaN(a)||isNaN(i)||isNaN(n))return;return[o,a,i,n]}}(e)||function(e){var t=e.replace(/^#/,""),r=t.length;if(6==r||8==r){var o=f(t.slice(0,2)),a=f(t.slice(2,4)),i=f(t.slice(4,6)),n=6==r?255:f(t.slice(6,8));if(isNaN(o)||isNaN(a)||isNaN(i)||isNaN(n))return;return[o,a,i,n]}}(e)||function(e){if("rgb("==e.substr(0,4)){var t=(e=e.match(/^rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=b(t[0],!0),o=b(t[1],!0),a=b(t[2],!0);if(-1!=r&&-1!=o&&-1!=a)return[r,o,a,255]}}(e)||function(e){if("rgba("==e.substr(0,5)){var t=(e=e.match(/^rgba\(([^)]+)\)/)[1]).split(/ *, */).map(Number),r=b(t[0],!0),o=b(t[1],!0),a=b(t[2],!0),i=b(255*t[3]);if(-1!=r&&-1!=o&&-1!=a&&-1!=i)return[r,o,a,i]}}(e)||[0,0,0,255]:function(e){if("[object Object]"===Object.prototype.toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})){var t=b(null!=e.r?e.r:null!=e.red?e.red:0,!0),r=b(null!=e.g?e.g:null!=e.green?e.green:0,!0),o=b(null!=e.b?e.b:null!=e.blue?e.blue:0,!0),a=b(null!=e.a?e.a:null!=e.alpha?e.alpha:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=a)return[t,r,o,a]}}(e)||function(e){if(Array.isArray(e)&&(3==e.length||4==e.length)){var t=b(e[0],!0),r=b(e[1],!0),o=b(e[2],!0),a=b(null!=e[3]?e[3]:255,!0);if(-1!=t&&-1!=r&&-1!=o&&-1!=a)return[t,r,o,a]}}(e)||function(e){if("number"==typeof e&&Math.floor(e)==e&&e<=4294967295&&e>=0)return[e>>16&255,e>>8&255,255&e,e>>24&255]}(e)||[0,0,0,255]}function g(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function f(e){return 1==e.length?parseInt(e+e,16):parseInt(e,16)}function b(e,t){return"number"!=typeof e||!0===t&&Math.floor(e)!==e?-1:e>=0&&e<=255?e:-1}d.arr=u,d.obj=function(e){var t=p(e);return{r:t[0],g:t[1],b:t[2],a:3==t.length?255:Math.round(t[3])}},d.css=function(e){var t=p(e);return 3==t.length&&t.push(255),255==t[3]?"rgb("+t[0]+", "+t[1]+", "+t[2]+")":0==t[3]?"rgba("+t[0]+", "+t[1]+", "+t[2]+", 0)":"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+String(t[3]/255).substr(1)+")"},d.hex=function(e){3==(t=p(e)).length&&t.push(255);var t,r=255==t[3],o=g(t[0]),a=g(t[1]),i=g(t[2]),n=function(e,t,r,o){var a=["ff","00","11","22","33","44","55","66","77","88","99","aa","bb","cc","dd","ee"];return-1!=a.indexOf(e)&&-1!=a.indexOf(t)&&-1!=a.indexOf(r)&&-1!=a.indexOf(o)}(o,a,i,t=g(Math.round(t[3])));return r?n?"#"+o.charAt(0)+a.charAt(0)+i.charAt(0):"#"+o+a+i:n?"#"+o.charAt(0)+a.charAt(0)+i.charAt(0)+t.charAt(0):"#"+o+a+i+t},d.num=function(e){var t=p(e);return 3==t.length?t.push(255):t[3]=Math.round(t[3]),(t[3]<<24>>>0|t[0]<<16|t[1]<<8|t[2])>>>0};const w=/\[object Object\]/,m=(e,t)=>{"string"==typeof e&&w.test(e)||t()},v=(e,t)=>{"string"==typeof e&&""===e||t()},y=(e,t)=>{Object.defineProperty(e,"target",{value:t,writable:!1})},k=(e,t,r,o={})=>{var a,i;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==r&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof o.afterPatch&&(null===(a=e.nextHooks.get(t))||void 0===a||a.set("afterPatch",o.afterPatch)),"function"==typeof o.beforePatch&&(null===(i=e.nextHooks.get(t))||void 0===i||i.set("beforePatch",o.beforePatch)),e.nextState.set(t,r),(e=>{var t,r,o;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,r)=>{var o;const a=t.get("beforePatch");"function"==typeof a&&a(null===(o=e.nextState)||void 0===o?void 0:o.get(r),e.nextState,e,r)})),(null===(r=e.nextState)||void 0===r?void 0:r.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(o=e.nextHooks)||void 0===o||o.forEach(((t,r)=>{const o=t.get("afterPatch");"function"==typeof o&&o(e.state[r],e.state,e,r)}))),delete e.nextHooks})(e))},x=(e,t,r,o,i,n={})=>{r(i)?k(e,t,i,null==n?void 0:n.hooks):void 0===i||null===i&&(void 0===(null==n?void 0:n.required)||!1===(null==n?void 0:n.required))?k(e,t,null==n?void 0:n.defaultValue,null==n?void 0:n.hooks):(void 0!==(null==n?void 0:n.required)&&!1!==(null==n?void 0:n.required)||o.add(null),((e,t,r,o)=>{(0,a.d)(`[${e.constructor.name}] Der Property-Wert (${r}) für '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(o).join(", ")}`)})(e,t,i,o))},_=(e,t,r,o)=>{x(e,t,(e=>"boolean"==typeof e),new Set(["Boolean {true, false}"]),r,o)},S=(e,t,r,o={})=>{const a="number"==typeof o.minLength?null==o?void 0:o.minLength:0;x(e,t,(e=>"string"==typeof e&&e.length>=a),new Set([`String (Mindestlänge ${a})`]),r,o)},M=(e,t,r,o)=>{x(e,t,(e=>"number"==typeof e&&(void 0===(null==o?void 0:o.min)||"number"==typeof(null==o?void 0:o.min)&&e>=o.min)&&(void 0===(null==o?void 0:o.max)||"number"==typeof(null==o?void 0:o.max)&&e<=o.max)),new Set(["Number"]),r,o)},z=(e,t,r,o,i=(e=>e==e),n={})=>{v(o,(()=>{m(o,(()=>{void 0===o&&(o=[]);try{try{o=N(o)}catch(e){}if(Array.isArray(o)){const a=o.find((e=>!r(e)));void 0===a&&i(o)?k(e,t,o,n.hooks):m(a,(()=>{throw console.log(a),new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}else m(o,(()=>{throw new Error("↑ Das Schema für das Property (_options) ist nicht valide. Der Wert wird nicht geändert.")}))}catch(e){(0,a.d)("Known bug: Zeichenkettenliste (string[])")}}))}))},A=e=>{try{return JSON.stringify(e).replace(/"/g,"'")}catch(t){throw i.L.warn(["stringifyJson",e]),i.L.error("↑ Das JSON konnte nicht in einen String umgewandelt werden. Es wird ein stringifizierbares JSON erwartet."),new Error}},N=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(t){try{return JSON.parse(e.replace(/'/g,'"'))}catch(t){i.L.warn(["parseJson",e]),i.L.error("↑ Der JSON-String konnte nicht geparsed werden. Achten Sie darauf, dass einfache Anführungszeichen im Text maskiert werden (&#8216;).")}}throw new Error},L=e=>"boolean"==typeof e?!0===e?"true":"false":void 0,D=e=>"string"==typeof e?e:L(e),E=(e,t)=>c(e,t||(0,i.g)()),T=(e,t)=>s(e,t||(0,i.g)());let C=null;const H=()=>(C=C||{backgroundColor:"#00000000",color:"#00000000",domNode:(0,i.g)().body,level:"Fail",score:1},C),O=/(\d+, ){3}0\)/,R=(e,t=H())=>{const r=getComputedStyle(e),a=O.test(r.backgroundColor)?t.backgroundColor:d.hex(r.backgroundColor),n=O.test(r.color)?t.color:d.hex(r.color),l=(0,o.s)(a,n),s={backgroundColor:a,color:n,domNode:e,level:(0,o.f)(l),score:l};return l<4.5&&i.L.error(["Color-Contrast-Error",{backgroundColor:s.backgroundColor,color:s.color,level:s.level,score:s.score},s.domNode]),s},$=(e,t=H())=>{t.domNode instanceof HTMLElement&&(t=R(t.domNode,t));const r=t.domNode.querySelector(e);if(null===r){const r=t.domNode.querySelectorAll('[class="hydrated"]');for(let o=0;o<r.length&&(t.domNode=r[o],null===(t=$(e,t)).domNode);o++);return t}return R(r,t)},j=(e,t=window)=>{e instanceof HTMLElement?(t.scrollTo({behavior:"smooth",top:e.getBoundingClientRect().top+(0,i.a)().pageYOffset-50}),e.focus()):(0,a.d)("Das HTMLElement ist nicht valide, zu dem gescrollt werden soll.")},q=(e,t)=>{if((e instanceof Document||e instanceof HTMLElement||e instanceof ShadowRoot)&&"string"==typeof t){(0,a.d)("Bei der Methode querySelectorAll wurden die Parameter document, selector in selector, document getauscht, da der Parameter selector nicht, allerdings der Parameter document optional sein kann.");const r=`${t}`;t=e,e=r}if("string"==typeof e){const r=E(e,t);r instanceof HTMLElement?j(r):(0,a.d)(`Es konnte kein HTMLElement mit dem Selector (${e}) gefunden werden, zu dem gescrollt werden soll.`)}else(0,a.d)("Der Selector ist nicht valide, zu dem gescrollt werden soll.")};class I{static queryHtmlElementColors(e,t,r=!1,o=!0){let a=null;if(!0===r||!1===I.executionLock)if(!1===r&&(I.cache.clear(),I.cache.set(t.domNode,t),I.executionLock=!0,!0===o&&i.L.debug("[KoliBriUtils] Color contrast analysis started...")),e===t.domNode)a=t;else{const r=new Set;if(t.domNode.shadowRoot){const e=t.domNode.shadowRoot.children;for(let t=0;t<e.length;t++)r.add(e[t])}const o=t.domNode;if("function"==typeof o.assignedNodes){const e=o.assignedNodes();for(let t=0;t<e.length;t++)e[t]instanceof HTMLElement&&r.add(e[t])}const i=t.domNode.children;for(let e=0;e<i.length;e++)r.add(i[e]);const n=Array.from(r);for(let r=0;r<n.length;r++){let o=I.cache.get(n[r]);void 0===o&&(o=R(n[r],t)),I.cache.set(n[r],o);const i=I.queryHtmlElementColors(e,o,!0,!1);if(null!==i){a=i;break}}}else i.L.debug("[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.");return!1===r&&(!0===o&&i.L.debug(`[KoliBriUtils] Color contrast analysis finished (${I.cache.size} DOM elements are analysed).`),I.executionLock=!1,I.cache.clear()),a}}I.executionLock=!1,I.cache=new Map;class P{}P.patchTheme=n.p,P.patchThemeTag=n.a,P.querySelector=E,P.querySelectorAll=T,P.scrollByHTMLElement=j,P.scrollBySelector=q,P.stringifyJson=A}}]);