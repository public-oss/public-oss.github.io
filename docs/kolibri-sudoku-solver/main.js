/*! For license information please see main.js.LICENSE.txt */
(()=>{var t,n,e,o,r={9104:(t,n,e)=>{var o={"./kol-abbr.entry.js":[8210,3043,8210],"./kol-accordion.entry.js":[4886,3043,4886],"./kol-alert-wc_3.entry.js":[9505,3043,9505],"./kol-alert.entry.js":[6959,6959],"./kol-avatar-wc.entry.js":[7991,3043,7991],"./kol-avatar.entry.js":[905,905],"./kol-badge.entry.js":[2222,3043,2222],"./kol-breadcrumb.entry.js":[3849,3043,3849],"./kol-button-group-wc.entry.js":[8460,8460],"./kol-button-group.entry.js":[7772,7772],"./kol-button-link-text-switch.entry.js":[9200,9200],"./kol-button-link.entry.js":[6287,6287],"./kol-button.entry.js":[7857,7857],"./kol-card.entry.js":[3190,3043,3190],"./kol-details.entry.js":[595,3043,595],"./kol-form.entry.js":[6921,3043,6921],"./kol-heading.entry.js":[709,709],"./kol-icon.entry.js":[4005,3043,4005],"./kol-image.entry.js":[5998,3043,5998],"./kol-indented-text.entry.js":[3084,3084],"./kol-input-checkbox.entry.js":[7315,3043,7315],"./kol-input-color.entry.js":[3445,3043,3445],"./kol-input-date.entry.js":[6282,3043,6282],"./kol-input-email.entry.js":[6947,3043,5497,6947],"./kol-input-file.entry.js":[2110,3043,2110],"./kol-input-number.entry.js":[2319,3043,2319],"./kol-input-password.entry.js":[3883,3043,5497,3883],"./kol-input-radio.entry.js":[2878,3043,2878],"./kol-input-range.entry.js":[7354,3043,7354],"./kol-input-text.entry.js":[1149,3043,5497,1149],"./kol-input.entry.js":[2246,2246],"./kol-kolibri.entry.js":[2956,3043,2956],"./kol-link-button.entry.js":[5190,5190],"./kol-link-group.entry.js":[8310,3043,8310],"./kol-link-wc.entry.js":[1730,3043,1730],"./kol-link.entry.js":[5721,5721],"./kol-logo.entry.js":[8477,3043,8477],"./kol-modal.entry.js":[9450,3043,9450],"./kol-nav.entry.js":[7834,3043,7834],"./kol-pagination.entry.js":[2874,3043,2874],"./kol-popover.entry.js":[3298,3043,4885,3298],"./kol-progress.entry.js":[9584,3043,9584],"./kol-quote.entry.js":[9226,3043,9226],"./kol-select.entry.js":[1890,3043,1890],"./kol-skip-nav.entry.js":[8821,3043,8821],"./kol-span-wc_2.entry.js":[7683,3043,4885,7683],"./kol-span.entry.js":[4323,4323],"./kol-spin.entry.js":[125,3043,125],"./kol-split-button.entry.js":[8491,8491],"./kol-symbol.entry.js":[7670,3043,7670],"./kol-table.entry.js":[5346,3043,5346],"./kol-tabs.entry.js":[5506,3043,5506],"./kol-textarea.entry.js":[8939,3043,8939],"./kol-toast-container.entry.js":[3184,3184],"./kol-toast.entry.js":[2887,3043,2887],"./kol-version.entry.js":[4629,3043,4629]};function r(t){if(!e.o(o,t))return Promise.resolve().then((()=>{var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[t],r=n[0];return Promise.all(n.slice(1).map(e.e)).then((()=>e(r)))}r.keys=()=>Object.keys(o),r.id=9104,t.exports=r},379:(t,n,e)=>{"use strict";e.d(n,{K:()=>H,L:()=>V,S:()=>f,a:()=>F,b:()=>D,d:()=>Y,e:()=>a,f:()=>B,g:()=>g,h:()=>W,i:()=>X,j:()=>M,n:()=>G,p:()=>d,r:()=>v,s:()=>q});var o=e(4477),r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e.g?e.g:"undefined"!=typeof self?self:{};function a(t,n,e){return t(e={path:n,exports:{},require:function(t,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},e.exports),e.exports}var i=a((function(t){var n,e;n=r,e=function(){var t=function(){},n="undefined",e=typeof window!==n&&typeof window.navigator!==n&&/Trident\/|MSIE /.test(window.navigator.userAgent),o=["trace","debug","info","warn","error"];function r(t,n){var e=t[n];if("function"==typeof e.bind)return e.bind(t);try{return Function.prototype.bind.call(e,t)}catch(n){return function(){return Function.prototype.apply.apply(e,[t,arguments])}}}function a(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function i(n,e){for(var r=0;r<o.length;r++){var a=o[r];this[a]=r<n?t:this.methodFactory(a,n,e)}this.log=this.debug}function f(t,e,o){return function(){typeof console!==n&&(i.call(this,e,o),this[t].apply(this,arguments))}}function c(o,i,c){return"debug"===(l=o)&&(l="log"),typeof console!==n&&("trace"===l&&e?a:void 0!==console[l]?r(console,l):void 0!==console.log?r(console,"log"):t)||f.apply(this,arguments);var l}function l(t,e,r){var a,f=this;e=null==e?"WARN":e;var l="loglevel";function s(){var t;if(typeof window!==n&&l){try{t=window.localStorage[l]}catch(t){}if(typeof t===n)try{var e=window.document.cookie,o=e.indexOf(encodeURIComponent(l)+"=");-1!==o&&(t=/^([^;]+)/.exec(e.slice(o))[1])}catch(t){}return void 0===f.levels[t]&&(t=void 0),t}}"string"==typeof t?l+=":"+t:"symbol"==typeof t&&(l=void 0),f.name=t,f.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},f.methodFactory=r||c,f.getLevel=function(){return a},f.setLevel=function(e,r){if("string"==typeof e&&void 0!==f.levels[e.toUpperCase()]&&(e=f.levels[e.toUpperCase()]),!("number"==typeof e&&e>=0&&e<=f.levels.SILENT))throw"log.setLevel() called with invalid level: "+e;if(a=e,!1!==r&&function(t){var e=(o[t]||"silent").toUpperCase();if(typeof window!==n&&l){try{return void(window.localStorage[l]=e)}catch(t){}try{window.document.cookie=encodeURIComponent(l)+"="+e+";"}catch(t){}}}(e),i.call(f,e,t),typeof console===n&&e<f.levels.SILENT)return"No console available for logging"},f.setDefaultLevel=function(t){e=t,s()||f.setLevel(t,!1)},f.resetLevel=function(){f.setLevel(e,!1),function(){if(typeof window!==n&&l){try{return void window.localStorage.removeItem(l)}catch(t){}try{window.document.cookie=encodeURIComponent(l)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(t){}}}()},f.enableAll=function(t){f.setLevel(f.levels.TRACE,t)},f.disableAll=function(t){f.setLevel(f.levels.SILENT,t)};var b=s();null==b&&(b=e),f.setLevel(b,!1)}var s=new l,b={};s.getLogger=function(t){if("symbol"!=typeof t&&"string"!=typeof t||""===t)throw new TypeError("You must supply a name when creating a logger.");var n=b[t];return n||(n=b[t]=new l(t,s.getLevel(),s.methodFactory)),n};var d=typeof window!==n?window.log:void 0;return s.noConflict=function(){return typeof window!==n&&window.log===s&&(window.log=d),s},s.getLoggers=function(){return b},s.default=s,s},t.exports?t.exports=e():n.log=e()}));const f="object"==typeof window?window:"object"==typeof e.g?e.g:"object"==typeof self?self:{};let c=!0,l=!1;const s=/^[a-z][a-z0-9]{1,}(-[a-z0-9]+)?$/,b=t=>{if(!1===(t=>"string"==typeof t&&s.test(t))(t))throw new Error(`[Theming] The theme identifier "${"string"==typeof t?t:""}" (Type: ${typeof t}) is not valid. Please use only follow this pattern: /^[a-z][a-z0-9]{1,}(-[a-z0-9]+)?$/`)},d=(t,n)=>(b(t),"object"==typeof n&&null!==n&&Object.getOwnPropertyNames(n).forEach((e=>{const o=n[e];"string"==typeof o&&o.length>0&&((t,n,e)=>{b(t),!0===c&&!1===l&&(l=!0,i.warn(`[Theming] The theme process is locked. This means that the theme "${t}" should not be patched.\n\nimport { register } from '@a11y-ui/core';\nimport { defineCustomElements } from '...';\nimport { THEME } from '...';\n\nregister(THEME, defineCustomElements)\n\t.then(() => {\n\t\tconst htmlDivElement: HTMLElement | null = document.querySelector<HTMLElement>('#my-app');\n    if (htmlDivElement instanceof HTMLElement) {\n      const root = createRoot(htmlDivElement);\n      root.render(<App />);\n    }\n  })\n  .catch(console.warn);`)),"object"==typeof f.A11yUi&&null!==f.A11yUi||(f.A11yUi={}),"object"!=typeof f.A11yUi||null===f.A11yUi||"object"==typeof f.A11yUi.Themes&&null!==f.A11yUi.Themes||(f.A11yUi.Themes={}),"object"!=typeof f.A11yUi||null===f.A11yUi||"object"!=typeof f.A11yUi.Themes||null===f.A11yUi.Themes||"object"==typeof f.A11yUi.Themes[t]&&null!==f.A11yUi.Themes[t]||(f.A11yUi.Themes[t]={}),"object"==typeof f.A11yUi&&null!==f.A11yUi&&"object"==typeof f.A11yUi.Themes&&null!==f.A11yUi.Themes&&"object"==typeof f.A11yUi.Themes[t]&&null!==f.A11yUi.Themes[t]&&(f.A11yUi.Themes[t][n]=e)})(t,e,o)})),t),u=t=>{if(t instanceof HTMLElement){if("string"==typeof t.dataset.theme)return t;{let n=t.parentNode;for(;n instanceof ShadowRoot;)n=n.host;return u(n)}}return null},p=(t={})=>"false"!==t.themeEncroachCss&&"true"!==t.themeReset&&{mode:"after"===t.themeEncroachCssMode||"before"===t.themeEncroachCssMode?t.themeEncroachCssMode:"before"},h=()=>"object"==typeof f.A11yUi&&null!==f.A11yUi&&"object"==typeof f.A11yUi.Theme&&null!==f.A11yUi.Theme&&"boolean"==typeof f.A11yUi.Theme.cache&&"object"==typeof f.A11yUi.Theme.encroachCss&&null!==typeof f.A11yUi.Theme.encroachCss&&"string"==typeof f.A11yUi.Theme.encroachCss.mode&&"string"==typeof f.A11yUi.Theme.name,g=t=>{if(h())return f.A11yUi.Theme;{const n={cache:!0,encroachCss:p(),loglevel:"silent",name:null},e=u(t);return e instanceof HTMLElement&&(n.cache="false"!==e.dataset.themeCache,n.encroachCss=p(e.dataset),n.loglevel="debug"===e.dataset.themeLoglevel?e.dataset.themeLoglevel:"silent",n.name=e.dataset.theme||null),n}};let m=!1;const v=(t,n,e={})=>{!1===m&&(m=!0,c=!1),"function"==typeof t?t=new Set([t]):Array.isArray(t)&&(t=new Set(t)),t instanceof Set&&t.forEach((t=>{var n,o,r,a;"function"==typeof t&&1===t.length?((t,n)=>{!1!==h()||0!=("object"==typeof f.A11yUi&&null!==f.A11yUi)&&0!=("object"==typeof f.A11yUi.Theme&&null!==f.A11yUi.Theme)&&"default"===f.A11yUi.Theme.name||"object"==typeof n&&null!==n&&("fixed"===(n=((t,n)=>({cache:!1!==n.cache,detect:"auto"===n.detect?"auto":"fixed",encroachCss:!1!==n.encroachCss&&("object"!=typeof n.encroachCss||null==n.encroachCss||"after"!==n.encroachCss.mode&&"before"!==n.encroachCss.mode?{mode:"before"}:n.encroachCss),loglevel:"debug"===n.loglevel?n.loglevel:"silent",name:"string"==typeof n.name?n.name:t}))(t,n)).detect?(null===n.name&&"string"==typeof t&&(n.name=t),t===n.name&&("object"==typeof f.A11yUi&&null!==f.A11yUi||(f.A11yUi={}),f.A11yUi.Theme=n,i.info(`[Theming] Theme "${t}" was set as default theme.`))):i.warn("[Theming] The presetting of theme options is only relevant by using 'fixed' detection mode."))})(t(d),{cache:null==(n=e.theme)?void 0:n.cache,detect:null==(o=e.theme)?void 0:o.detect,encroachCss:null==(r=e.theme)?void 0:r.encroachCss,name:null==(a=e.theme)?void 0:a.name}):i.error("[Theming] Es wurde versucht eine nicht kompatibles Theme zu laden.")})),c=!0,"function"==typeof n?n=new Set([n]):Array.isArray(n)&&(n=new Set(n));const o=[];return n.forEach((t=>o.push(t()))),Promise.all(o)},k=new Map,w=[],y=new Set,x=new Map,_=/--[^;]+/g,z=/:/;"object"==typeof f.A11yUi&&null!==f.A11yUi||(f.A11yUi={CSS_STYLE_CACHE:x,HYDRATED_HISTORY:w,STYLING_TASK_QUEUE:k});const L=(t,n)=>"object"==typeof f.A11yUi&&null!==f.A11yUi&&"object"==typeof f.A11yUi.Themes&&null!==f.A11yUi.Themes&&"object"==typeof f.A11yUi.Themes[t]&&null!==f.A11yUi.Themes[t]&&"string"==typeof f.A11yUi.Themes[t][n]?f.A11yUi.Themes[t][n].replace(/\r?\n/g,""):"",S=(t,n,e)=>{var o,r,a;const i=n.name||"default";let f;try{if(null===t.shadowRoot)throw new Error("ShadowRoot is null");f=t.shadowRoot}catch(n){f=t}if(null==(o=x.get(i))?void 0:o.has(t.tagName))O(t,f,null==(r=x.get(i))?void 0:r.get(t.tagName),e);else{const o=L(i,"PROPERTIES"),r=L(i,"GLOBAL"),c=L(i,t.tagName);!1===y.has(i)&&((t,n)=>{var e;let o=n.match(_);if(Array.isArray(o)){o=o.filter((t=>z.test(t)));const n=document.createElement("style");n.innerHTML=`.${t} {${o.join(";")}}`,null==(e=document.querySelector("head"))||e.appendChild(n)}y.add(t)})(i,r);const l=[o,r,c];((t,n,e)=>{if(!1!==e){const o=[...Array.from(t.childNodes).filter((t=>t instanceof HTMLStyleElement&&"STYLE"===t.tagName))];let r;try{r=[...Array.from(t.adoptedStyleSheets)]}catch(t){r=[]}"before"===(null==e?void 0:e.mode)?(o.reverse().forEach((t=>n.unshift(t.innerHTML))),r.reverse().forEach((t=>n.unshift(Array.from(t.cssRules).map((t=>t.cssText)).join(""))))):"after"===(null==e?void 0:e.mode)&&(o.forEach((t=>n.push(t.innerHTML))),r.forEach((t=>n.push(Array.from(t.cssRules).map((t=>t.cssText)).join("")))))}})(f,l,n.encroachCss),"debug"===n.loglevel&&console.log(t.tagName,l),!0===n.cache&&(!1===x.has(i)&&x.set(i,new Map),null==(a=x.get(i))||a.set(t.tagName,l)),O(t,f,l,e)}},O=(t,n,e,o)=>{(t=>{for(const n of Array.from(t.childNodes)){if(!(n instanceof HTMLStyleElement&&"STYLE"===n.tagName))break;t.removeChild(n)}})(n),((t,n)=>{try{const e=[];n.forEach((t=>{const n=new CSSStyleSheet;n.replaceSync(t),e.push(n)})),t.adoptedStyleSheets=e}catch(e){n.reverse().forEach((n=>{const e=document.createElement("style");e.innerHTML=n,t.insertBefore(e,t.firstChild)}))}})(n,e),t.style.display=o},T=t=>{"debug"===t.loglevel&&w.push({timestamp:Date.now(),numberOfTasks:k.size})},E=(t,n)=>{(t=>{k.delete(t)})(t),T(n)},$=t=>{const n=setTimeout((()=>{if(clearTimeout(n),k.has(t)&&t.classList.contains("hydrated")){const{styleDisplay:n,themeDetails:e}=k.get(t);S(t,e,n),E(t,e)}else $(t)}),25)},N=t=>{for(const n of t)if(k.has(n.target)&&n.target.classList.contains("hydrated")){const{styleDisplay:t,themeDetails:e}=k.get(n.target);S(n.target,e,t),E(n.target,e)}},A={attributes:!0,attributeFilter:["class"],childList:!1,subtree:!1};let C;try{C=new MutationObserver(N)}catch(t){C=null}const q=(t,n)=>{((t,n)=>{((t,n)=>{k.set(t,{styleDisplay:t.style.display?`${t.style.display}`:null,themeDetails:n})})(t,n),T(n)})(t,n),C?C.observe(t,A):$(t),t.style.display="none"};class I{constructor(){this.lockedElements=new Map,this.modalStack=new Map}lockElement(t){const n=t.getAttribute("tabindex");(t instanceof HTMLAnchorElement||t instanceof HTMLButtonElement||t instanceof HTMLInputElement||t instanceof HTMLSelectElement||t instanceof HTMLTextAreaElement||"string"==typeof n||void 0!==t.dataset.kolModal)&&("string"==typeof n?this.lockedElements.set(t,{tabIndex:n}):this.lockedElements.set(t,{}),t.setAttribute("tabindex","-1"),t.setAttribute("aria-hidden","true"),t.style.userSelect="none")}unlockElement(t,n){"string"==typeof t.tabIndex?n.setAttribute("tabindex",t.tabIndex):n.removeAttribute("tabindex"),n.removeAttribute("aria-hidden"),n.style.userSelect="unset",this.lockedElements.delete(n)}unlockLockedElements(t){t.forEach(this.unlockElement.bind(this))}lockFocus(t,n){if(t!==n&&(t instanceof HTMLElement||t instanceof ShadowRoot)){t instanceof HTMLElement&&(this.lockElement(t),this.lockFocus(t.shadowRoot,n));for(let e=0;e<t.children.length;e++)this.lockFocus(t.children[e],n)}}renderModalIfExists(t){if(t instanceof HTMLElement){this.lockedElements.has(t)&&this.unlockElement(this.lockedElements.get(t),t);const n=setTimeout((()=>{clearTimeout(n),t.focus()}),500)}if(this.unlockLockedElements(this.lockedElements),this.modalStack.size>0){const t=Array.from(this.modalStack.keys()),n=t[t.length-1];this.modalStack.forEach(((t,e)=>{e.style.display=n===e?"inline":"none"})),F().body.style.maxHeight="100vh",F().body.style.overflow="hidden",this.lockFocus(F().body,n)}else F().body.style.maxHeight="unset",F().body.style.overflow="unset"}openModal(t,n){t instanceof HTMLElement==0?V.warn("[KolModalService] Die DOM-Referenz des Modals ist nicht valide."):(this.modalStack.set(t,{activeElement:n}),this.renderModalIfExists())}closeModal(t){var n;if(t instanceof HTMLElement==0)V.warn("[KolModalService] Die DOM-Referenz des Modals ist nicht valide.");else{const e=null===(n=this.modalStack.get(t))||void 0===n?void 0:n.activeElement;this.modalStack.delete(t),this.renderModalIfExists(e)}}}const j=()=>"undefined"==typeof window?null:window,F=()=>void 0===j().document?null:j().document;let P=null,R=null,K=null,U=null;const B=()=>!0===R,D=()=>!0===K,M=()=>!0===U;class V{static mapToArray(t){return Array.isArray(t)?t:[t]}static handleClassifier(t){return"string"==typeof t&&t.length>0?`${V.shield.label} | ${t}`:V.shield.label}static getShield(t){return[V.handleClassifier(null==t?void 0:t.classifier),`${V.shield.style};${(null==t?void 0:t.overwriteStyle)||""}`]}static debug(t,n){(R||!0===(null==n?void 0:n.forceLog))&&console.debug(...V.getShield(n),...V.mapToArray(t))}static info(t,n){(R||!0===(null==n?void 0:n.forceLog))&&console.info(...V.getShield(n),...V.mapToArray(t))}static trace(t,n){(R||!0===(null==n?void 0:n.forceLog))&&console.trace(...V.getShield(n),...V.mapToArray(t))}static warn(t,n){(R||!0===(null==n?void 0:n.forceLog))&&console.warn(...V.getShield(n),...V.mapToArray(t))}static error(t,n){(R||!0===(null==n?void 0:n.forceLog))&&console.error(...V.getShield(n),...V.mapToArray(t))}static throw(t,n){if(R||!0===(null==n?void 0:n.forceLog))throw new Error(...V.getShield(n),...V.mapToArray(t))}}V.shield={label:"%cKoliBri",style:"color: white; background: #666; font-weight: bold; padding: .25em .5em; border-radius: 3px; border: 1px solid #000"};let H=null;const Y=()=>H||{},X=()=>{if(null===H){H=j().KoliBri||{};const t=new I;Object.defineProperty(H,"Modal",{get:function(){return t}}),(()=>{if(null===R&&null===K&&null===U){const t=F().querySelector('meta[name="kolibri"]');t&&t.hasAttribute("content")&&(P=t.getAttribute("content"),"string"==typeof P&&(R=P.includes("dev-mode=true"),K=P.includes("experimental-mode=true"),U=P.includes("color-contrast-analysis=true")))}else console.warn("You can only initialize DEV_MODE and COLOR_CONTRAST_ANALYSIS once.")})(),V.debug("\n\t,--. ,--.         ,--. ,--. ,-----.           ,--.\n\t|  .'   /  ,---.  |  | `--' |  |) /_  ,--.--. `--'\n\t|  .   '  | .-. | |  | ,--. |  .-.  \\ |  .--' ,--.\n\t|  |\\   \\ | '-' | |  | |  | |  '--' / |  |    |  |\n\t`--' `--´  `---´  `--' `--' `------´  `--'    `--'\n\t🚹 The accessible HTML-Standard | 👉 https://public-ui.github.io | 2.0.0-rc.1\n\t\t",{forceLog:!0})}else console.warn("You can only initialize KoliBri once.")},W=()=>{void 0===j().KoliBri&&Object.defineProperty(window,"KoliBri",{get:function(){return H}}),!0!==Y().adviceShown&&(Object.defineProperty(H,"adviceShown",{get:function(){return!0}}),V.debug("\nYou are using the KoliBri component library. If you have any suggestions for improvement or find a problem, please contact us:\n\nTicket: https://github.com/public-ui/kolibri/issues/new/choose (for privacy reasons, please use email)\nEmail: kolibri@itzbund.de\n"))};let G=()=>Math.floor(16777215*Math.random()).toString(16);"test"===o.p&&(G=()=>"nonce")},7352:(t,n,e)=>{"use strict";e.d(n,{g:()=>tt,r:()=>Z});var o=e(379),r=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(t,n,e)=>n in t?r(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,b=(t,n)=>{for(var e in n||(n={}))c.call(n,e)&&s(t,e,n[e]);if(f)for(var e of f(n))l.call(n,e)&&s(t,e,n[e]);return t},d=(t,n)=>a(t,i(n)),u=(t,n,e)=>new Promise(((o,r)=>{var a=t=>{try{f(e.next(t))}catch(t){r(t)}},i=t=>{try{f(e.throw(t))}catch(t){r(t)}},f=t=>t.done?o(t.value):Promise.resolve(t.value).then(a,i);f((e=e.apply(t,n)).next())}));const p={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,n){console&&console[t]&&console[t].apply(console,n)}};class h{constructor(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.init(t,n)}init(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=t||p,this.options=n,this.debug=n.debug}log(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return this.forward(n,"log","",!0)}warn(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return this.forward(n,"warn","",!0)}error(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return this.forward(n,"error","")}deprecate(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(t,n,e,o){return o&&!this.debug?null:("string"==typeof t[0]&&(t[0]=`${e}${this.prefix} ${t[0]}`),this.logger[n](t))}create(t){return new h(this.logger,b({prefix:`${this.prefix}:${t}:`},this.options))}clone(t){return(t=t||this.options).prefix=t.prefix||this.prefix,new h(this.logger,t)}}var g=new h;class m{constructor(){this.observers={}}on(t,n){return t.split(" ").forEach((t=>{this.observers[t]=this.observers[t]||[],this.observers[t].push(n)})),this}off(t,n){this.observers[t]&&(n?this.observers[t]=this.observers[t].filter((t=>t!==n)):delete this.observers[t])}emit(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),o=1;o<n;o++)e[o-1]=arguments[o];this.observers[t]&&[].concat(this.observers[t]).forEach((t=>{t(...e)})),this.observers["*"]&&[].concat(this.observers["*"]).forEach((n=>{n.apply(n,[t,...e])}))}}function v(){let t,n;const e=new Promise(((e,o)=>{t=e,n=o}));return e.resolve=t,e.reject=n,e}function k(t){return null==t?"":""+t}function w(t,n,e){function o(t){return t&&t.indexOf("###")>-1?t.replace(/###/g,"."):t}function r(){return!t||"string"==typeof t}const a="string"!=typeof n?[].concat(n):n.split(".");for(;a.length>1;){if(r())return{};const n=o(a.shift());!t[n]&&e&&(t[n]=new e),t=Object.prototype.hasOwnProperty.call(t,n)?t[n]:{}}return r()?{}:{obj:t,k:o(a.shift())}}function y(t,n,e){const{obj:o,k:r}=w(t,n,Object);o[r]=e}function x(t,n){const{obj:e,k:o}=w(t,n);if(e)return e[o]}function _(t,n,e){for(const o in n)"__proto__"!==o&&"constructor"!==o&&(o in t?"string"==typeof t[o]||t[o]instanceof String||"string"==typeof n[o]||n[o]instanceof String?e&&(t[o]=n[o]):_(t[o],n[o],e):t[o]=n[o]);return t}function z(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var L={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function S(t){return"string"==typeof t?t.replace(/[&<>"'\/]/g,(t=>L[t])):t}const O=[" ",",","?","!",";"];function T(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";if(!t)return;if(t[n])return t[n];const o=n.split(e);let r=t;for(let t=0;t<o.length;++t){if(!r)return;if("string"==typeof r[o[t]]&&t+1<o.length)return;if(void 0===r[o[t]]){let a=2,i=o.slice(t,t+a).join(e),f=r[i];for(;void 0===f&&o.length>t+a;)a++,i=o.slice(t,t+a).join(e),f=r[i];if(void 0===f)return;if(null===f)return null;if(n.endsWith(i)){if("string"==typeof f)return f;if(i&&"string"==typeof f[i])return f[i]}const c=o.slice(t+a).join(e);return c?T(f,c,e):void 0}r=r[o[t]]}return r}function E(t){return t&&t.indexOf("_")>0?t.replace("_","-"):t}class $ extends m{constructor(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=n,void 0===this.options.keySeparator&&(this.options.keySeparator="."),void 0===this.options.ignoreJSONStructure&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const n=this.options.ns.indexOf(t);n>-1&&this.options.ns.splice(n,1)}getResource(t,n,e){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const r=void 0!==o.keySeparator?o.keySeparator:this.options.keySeparator,a=void 0!==o.ignoreJSONStructure?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let i=[t,n];e&&"string"!=typeof e&&(i=i.concat(e)),e&&"string"==typeof e&&(i=i.concat(r?e.split(r):e)),t.indexOf(".")>-1&&(i=t.split("."));const f=x(this.data,i);return f||!a||"string"!=typeof e?f:T(this.data&&this.data[t]&&this.data[t][n],e,r)}addResource(t,n,e,o){let r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1};const a=void 0!==r.keySeparator?r.keySeparator:this.options.keySeparator;let i=[t,n];e&&(i=i.concat(a?e.split(a):e)),t.indexOf(".")>-1&&(i=t.split("."),o=n,n=i[1]),this.addNamespaces(n),y(this.data,i,o),r.silent||this.emit("added",t,n,e,o)}addResources(t,n,e){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(const o in e)"string"!=typeof e[o]&&"[object Array]"!==Object.prototype.toString.apply(e[o])||this.addResource(t,n,o,e[o],{silent:!0});o.silent||this.emit("added",t,n,e)}addResourceBundle(t,n,e,o,r){let a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1},i=[t,n];t.indexOf(".")>-1&&(i=t.split("."),o=e,e=n,n=i[1]),this.addNamespaces(n);let f=x(this.data,i)||{};o?_(f,e,r):f=b(b({},f),e),y(this.data,i,f),a.silent||this.emit("added",t,n,e)}removeResourceBundle(t,n){this.hasResourceBundle(t,n)&&delete this.data[t][n],this.removeNamespaces(n),this.emit("removed",t,n)}hasResourceBundle(t,n){return void 0!==this.getResource(t,n)}getResourceBundle(t,n){return n||(n=this.options.defaultNS),"v1"===this.options.compatibilityAPI?b({},this.getResource(t,n)):this.getResource(t,n)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const n=this.getDataByLanguage(t);return!!(n&&Object.keys(n)||[]).find((t=>n[t]&&Object.keys(n[t]).length>0))}toJSON(){return this.data}}var N={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,n,e,o,r){return t.forEach((t=>{this.processors[t]&&(n=this.processors[t].process(n,e,o,r))})),n}};const A={};class C extends m{constructor(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(),function(t,n,e){["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"].forEach((t=>{n[t]&&(e[t]=n[t])}))}(0,t,this),this.options=n,void 0===this.options.keySeparator&&(this.options.keySeparator="."),this.logger=g.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};if(null==t)return!1;const e=this.resolve(t,n);return e&&void 0!==e.res}extractFromKey(t,n){let e=void 0!==n.nsSeparator?n.nsSeparator:this.options.nsSeparator;void 0===e&&(e=":");const o=void 0!==n.keySeparator?n.keySeparator:this.options.keySeparator;let r=n.ns||this.options.defaultNS||[];const a=e&&t.indexOf(e)>-1,i=!(this.options.userDefinedKeySeparator||n.keySeparator||this.options.userDefinedNsSeparator||n.nsSeparator||function(t,n,e){n=n||"",e=e||"";const o=O.filter((t=>n.indexOf(t)<0&&e.indexOf(t)<0));if(0===o.length)return!0;const r=new RegExp(`(${o.map((t=>"?"===t?"\\?":t)).join("|")})`);let a=!r.test(t);if(!a){const n=t.indexOf(e);n>0&&!r.test(t.substring(0,n))&&(a=!0)}return a}(t,e,o));if(a&&!i){const n=t.match(this.interpolator.nestingRegexp);if(n&&n.length>0)return{key:t,namespaces:r};const a=t.split(e);(e!==o||e===o&&this.options.ns.indexOf(a[0])>-1)&&(r=a.shift()),t=a.join(o)}return"string"==typeof r&&(r=[r]),{key:t,namespaces:r}}translate(t,n,e){if("object"!=typeof n&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),"object"==typeof n&&(n=b({},n)),n||(n={}),null==t)return"";Array.isArray(t)||(t=[String(t)]);const o=void 0!==n.returnDetails?n.returnDetails:this.options.returnDetails,r=void 0!==n.keySeparator?n.keySeparator:this.options.keySeparator,{key:a,namespaces:i}=this.extractFromKey(t[t.length-1],n),f=i[i.length-1],c=n.lng||this.language,l=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&"cimode"===c.toLowerCase()){if(l){const t=n.nsSeparator||this.options.nsSeparator;return o?{res:`${f}${t}${a}`,usedKey:a,exactUsedKey:a,usedLng:c,usedNS:f,usedParams:this.getUsedParamsDetails(n)}:`${f}${t}${a}`}return o?{res:a,usedKey:a,exactUsedKey:a,usedLng:c,usedNS:f,usedParams:this.getUsedParamsDetails(n)}:a}const s=this.resolve(t,n);let u=s&&s.res;const p=s&&s.usedKey||a,h=s&&s.exactUsedKey||a,g=Object.prototype.toString.apply(u),m=void 0!==n.joinArrays?n.joinArrays:this.options.joinArrays,v=!this.i18nFormat||this.i18nFormat.handleAsObject;if(v&&u&&"string"!=typeof u&&"boolean"!=typeof u&&"number"!=typeof u&&["[object Number]","[object Function]","[object RegExp]"].indexOf(g)<0&&("string"!=typeof m||"[object Array]"!==g)){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const t=this.options.returnedObjectHandler?this.options.returnedObjectHandler(p,u,d(b({},n),{ns:i})):`key '${a} (${this.language})' returned an object instead of string.`;return o?(s.res=t,s.usedParams=this.getUsedParamsDetails(n),s):t}if(r){const t="[object Array]"===g,e=t?[]:{},o=t?h:p;for(const t in u)if(Object.prototype.hasOwnProperty.call(u,t)){const a=`${o}${r}${t}`;e[t]=this.translate(a,d(b({},n),{joinArrays:!1,ns:i})),e[t]===a&&(e[t]=u[t])}u=e}}else if(v&&"string"==typeof m&&"[object Array]"===g)u=u.join(m),u&&(u=this.extendTranslation(u,t,n,e));else{let o=!1,i=!1;const l=void 0!==n.count&&"string"!=typeof n.count,p=C.hasDefaultValue(n),h=l?this.pluralResolver.getSuffix(c,n.count,n):"",g=n.ordinal&&l?this.pluralResolver.getSuffix(c,n.count,{ordinal:!1}):"",m=n[`defaultValue${h}`]||n[`defaultValue${g}`]||n.defaultValue;!this.isValidLookup(u)&&p&&(o=!0,u=m),this.isValidLookup(u)||(i=!0,u=a);const v=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&i?void 0:u,k=p&&m!==u&&this.options.updateMissing;if(i||o||k){if(this.logger.log(k?"updateKey":"missingKey",c,f,a,k?m:u),r){const t=this.resolve(a,d(b({},n),{keySeparator:!1}));t&&t.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let t=[];const e=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if("fallback"===this.options.saveMissingTo&&e&&e[0])for(let n=0;n<e.length;n++)t.push(e[n]);else"all"===this.options.saveMissingTo?t=this.languageUtils.toResolveHierarchy(n.lng||this.language):t.push(n.lng||this.language);const o=(t,e,o)=>{const r=p&&o!==u?o:v;this.options.missingKeyHandler?this.options.missingKeyHandler(t,f,e,r,k,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(t,f,e,r,k,n),this.emit("missingKey",t,f,e,u)};this.options.saveMissing&&(this.options.saveMissingPlurals&&l?t.forEach((t=>{this.pluralResolver.getSuffixes(t,n).forEach((e=>{o([t],a+e,n[`defaultValue${e}`]||m)}))})):o(t,a,m))}u=this.extendTranslation(u,t,n,s,e),i&&u===a&&this.options.appendNamespaceToMissingKey&&(u=`${f}:${a}`),(i||o)&&this.options.parseMissingKeyHandler&&(u="v1"!==this.options.compatibilityAPI?this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${f}:${a}`:a,o?u:void 0):this.options.parseMissingKeyHandler(u))}return o?(s.res=u,s.usedParams=this.getUsedParamsDetails(n),s):u}extendTranslation(t,n,e,o,r){var a=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,b(b({},this.options.interpolation.defaultVariables),e),e.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!e.skipInterpolation){e.interpolation&&this.interpolator.init(d(b({},e),{interpolation:b(b({},this.options.interpolation),e.interpolation)}));const i="string"==typeof t&&(e&&e.interpolation&&void 0!==e.interpolation.skipOnVariables?e.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let f;if(i){const n=t.match(this.interpolator.nestingRegexp);f=n&&n.length}let c=e.replace&&"string"!=typeof e.replace?e.replace:e;if(this.options.interpolation.defaultVariables&&(c=b(b({},this.options.interpolation.defaultVariables),c)),t=this.interpolator.interpolate(t,c,e.lng||this.language,e),i){const n=t.match(this.interpolator.nestingRegexp);f<(n&&n.length)&&(e.nest=!1)}!e.lng&&"v1"!==this.options.compatibilityAPI&&o&&o.res&&(e.lng=o.usedLng),!1!==e.nest&&(t=this.interpolator.nest(t,(function(){for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return r&&r[0]===o[0]&&!e.context?(a.logger.warn(`It seems you are nesting recursively key: ${o[0]} in key: ${n[0]}`),null):a.translate(...o,n)}),e)),e.interpolation&&this.interpolator.reset()}const i=e.postProcess||this.options.postProcess,f="string"==typeof i?[i]:i;return null!=t&&f&&f.length&&!1!==e.applyPostProcessor&&(t=N.handle(f,t,n,this.options&&this.options.postProcessPassResolved?b({i18nResolved:o},e):e,this)),t}resolve(t){let n,e,o,r,a,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof t&&(t=[t]),t.forEach((t=>{if(this.isValidLookup(n))return;const f=this.extractFromKey(t,i),c=f.key;e=c;let l=f.namespaces;this.options.fallbackNS&&(l=l.concat(this.options.fallbackNS));const s=void 0!==i.count&&"string"!=typeof i.count,b=s&&!i.ordinal&&0===i.count&&this.pluralResolver.shouldUseIntlApi(),d=void 0!==i.context&&("string"==typeof i.context||"number"==typeof i.context)&&""!==i.context,u=i.lngs?i.lngs:this.languageUtils.toResolveHierarchy(i.lng||this.language,i.fallbackLng);l.forEach((t=>{this.isValidLookup(n)||(a=t,!A[`${u[0]}-${t}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(A[`${u[0]}-${t}`]=!0,this.logger.warn(`key "${e}" for languages "${u.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),u.forEach((e=>{if(this.isValidLookup(n))return;r=e;const a=[c];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(a,c,e,t,i);else{let t;s&&(t=this.pluralResolver.getSuffix(e,i.count,i));const n=`${this.options.pluralSeparator}zero`,o=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(s&&(a.push(c+t),i.ordinal&&0===t.indexOf(o)&&a.push(c+t.replace(o,this.options.pluralSeparator)),b&&a.push(c+n)),d){const e=`${c}${this.options.contextSeparator}${i.context}`;a.push(e),s&&(a.push(e+t),i.ordinal&&0===t.indexOf(o)&&a.push(e+t.replace(o,this.options.pluralSeparator)),b&&a.push(e+n))}}let f;for(;f=a.pop();)this.isValidLookup(n)||(o=f,n=this.getResource(e,t,f,i))})))}))})),{res:n,usedKey:e,exactUsedKey:o,usedLng:r,usedNS:a}}isValidLookup(t){return!(void 0===t||!this.options.returnNull&&null===t||!this.options.returnEmptyString&&""===t)}getResource(t,n,e){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,n,e,o):this.resourceStore.getResource(t,n,e,o)}getUsedParamsDetails(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],e=t.replace&&"string"!=typeof t.replace;let o=e?t.replace:t;if(e&&void 0!==t.count&&(o.count=t.count),this.options.interpolation.defaultVariables&&(o=b(b({},this.options.interpolation.defaultVariables),o)),!e){o=b({},o);for(const t of n)delete o[t]}return o}static hasDefaultValue(t){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&"defaultValue"===n.substring(0,12)&&void 0!==t[n])return!0;return!1}}function q(t){return t.charAt(0).toUpperCase()+t.slice(1)}class I{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=g.create("languageUtils")}getScriptPartFromCode(t){if(!(t=E(t))||t.indexOf("-")<0)return null;const n=t.split("-");return 2===n.length?null:(n.pop(),"x"===n[n.length-1].toLowerCase()?null:this.formatLanguageCode(n.join("-")))}getLanguagePartFromCode(t){if(!(t=E(t))||t.indexOf("-")<0)return t;const n=t.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(t){if("string"==typeof t&&t.indexOf("-")>-1){const n=["hans","hant","latn","cyrl","cans","mong","arab"];let e=t.split("-");return this.options.lowerCaseLng?e=e.map((t=>t.toLowerCase())):2===e.length?(e[0]=e[0].toLowerCase(),e[1]=e[1].toUpperCase(),n.indexOf(e[1].toLowerCase())>-1&&(e[1]=q(e[1].toLowerCase()))):3===e.length&&(e[0]=e[0].toLowerCase(),2===e[1].length&&(e[1]=e[1].toUpperCase()),"sgn"!==e[0]&&2===e[2].length&&(e[2]=e[2].toUpperCase()),n.indexOf(e[1].toLowerCase())>-1&&(e[1]=q(e[1].toLowerCase())),n.indexOf(e[2].toLowerCase())>-1&&(e[2]=q(e[2].toLowerCase()))),e.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let n;return t.forEach((t=>{if(n)return;const e=this.formatLanguageCode(t);this.options.supportedLngs&&!this.isSupportedCode(e)||(n=e)})),!n&&this.options.supportedLngs&&t.forEach((t=>{if(n)return;const e=this.getLanguagePartFromCode(t);if(this.isSupportedCode(e))return n=e;n=this.options.supportedLngs.find((t=>t===e?t:t.indexOf("-")<0&&e.indexOf("-")<0?void 0:0===t.indexOf(e)?t:void 0))})),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(t,n){if(!t)return[];if("function"==typeof t&&(t=t(n)),"string"==typeof t&&(t=[t]),"[object Array]"===Object.prototype.toString.apply(t))return t;if(!n)return t.default||[];let e=t[n];return e||(e=t[this.getScriptPartFromCode(n)]),e||(e=t[this.formatLanguageCode(n)]),e||(e=t[this.getLanguagePartFromCode(n)]),e||(e=t.default),e||[]}toResolveHierarchy(t,n){const e=this.getFallbackCodes(n||this.options.fallbackLng||[],t),o=[],r=t=>{t&&(this.isSupportedCode(t)?o.push(t):this.logger.warn(`rejecting language code not found in supportedLngs: ${t}`))};return"string"==typeof t&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?("languageOnly"!==this.options.load&&r(this.formatLanguageCode(t)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&r(this.getScriptPartFromCode(t)),"currentOnly"!==this.options.load&&r(this.getLanguagePartFromCode(t))):"string"==typeof t&&r(this.formatLanguageCode(t)),e.forEach((t=>{o.indexOf(t)<0&&r(this.formatLanguageCode(t))})),o}}let j=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],F={1:function(t){return Number(t>1)},2:function(t){return Number(1!=t)},3:function(t){return 0},4:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},5:function(t){return Number(0==t?0:1==t?1:2==t?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5)},6:function(t){return Number(1==t?0:t>=2&&t<=4?1:2)},7:function(t){return Number(1==t?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},8:function(t){return Number(1==t?0:2==t?1:8!=t&&11!=t?2:3)},9:function(t){return Number(t>=2)},10:function(t){return Number(1==t?0:2==t?1:t<7?2:t<11?3:4)},11:function(t){return Number(1==t||11==t?0:2==t||12==t?1:t>2&&t<20?2:3)},12:function(t){return Number(t%10!=1||t%100==11)},13:function(t){return Number(0!==t)},14:function(t){return Number(1==t?0:2==t?1:3==t?2:3)},15:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2)},16:function(t){return Number(t%10==1&&t%100!=11?0:0!==t?1:2)},17:function(t){return Number(1==t||t%10==1&&t%100!=11?0:1)},18:function(t){return Number(0==t?0:1==t?1:2)},19:function(t){return Number(1==t?0:0==t||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3)},20:function(t){return Number(1==t?0:0==t||t%100>0&&t%100<20?1:2)},21:function(t){return Number(t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0)},22:function(t){return Number(1==t?0:2==t?1:(t<0||t>10)&&t%10==0?2:3)}};const P=["v1","v2","v3"],R=["v4"],K={zero:0,one:1,two:2,few:3,many:4,other:5};class U{constructor(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.languageUtils=t,this.options=n,this.logger=g.create("pluralResolver"),this.options.compatibilityJSON&&!R.includes(this.options.compatibilityJSON)||"undefined"!=typeof Intl&&Intl.PluralRules||(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=function(){const t={};return j.forEach((n=>{n.lngs.forEach((e=>{t[e]={numbers:n.nr,plurals:F[n.fc]}}))})),t}()}addRule(t,n){this.rules[t]=n}getRule(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(E(t),{type:n.ordinal?"ordinal":"cardinal"})}catch(t){return}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const e=this.getRule(t,n);return this.shouldUseIntlApi()?e&&e.resolvedOptions().pluralCategories.length>1:e&&e.numbers.length>1}getPluralFormsOfKey(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.getSuffixes(t,e).map((t=>`${n}${t}`))}getSuffixes(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const e=this.getRule(t,n);return e?this.shouldUseIntlApi()?e.resolvedOptions().pluralCategories.sort(((t,n)=>K[t]-K[n])).map((t=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${t}`)):e.numbers.map((e=>this.getSuffix(t,e,n))):[]}getSuffix(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o=this.getRule(t,e);return o?this.shouldUseIntlApi()?`${this.options.prepend}${e.ordinal?`ordinal${this.options.prepend}`:""}${o.select(n)}`:this.getSuffixRetroCompatible(o,n):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,n){const e=t.noAbs?t.plurals(n):t.plurals(Math.abs(n));let o=t.numbers[e];this.options.simplifyPluralSuffix&&2===t.numbers.length&&1===t.numbers[0]&&(2===o?o="plural":1===o&&(o=""));const r=()=>this.options.prepend&&o.toString()?this.options.prepend+o.toString():o.toString();return"v1"===this.options.compatibilityJSON?1===o?"":"number"==typeof o?`_plural_${o.toString()}`:r():"v2"===this.options.compatibilityJSON||this.options.simplifyPluralSuffix&&2===t.numbers.length&&1===t.numbers[0]?r():this.options.prepend&&e.toString()?this.options.prepend+e.toString():e.toString()}shouldUseIntlApi(){return!P.includes(this.options.compatibilityJSON)}}function B(t,n,e){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".",r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],a=function(t,n,e){const o=x(t,e);return void 0!==o?o:x(n,e)}(t,n,e);return!a&&r&&"string"==typeof e&&(a=T(t,e,o),void 0===a&&(a=T(n,e,o))),a}class D{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=g.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(t=>t),this.init(t)}init(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const n=t.interpolation;this.escape=void 0!==n.escape?n.escape:S,this.escapeValue=void 0===n.escapeValue||n.escapeValue,this.useRawValueToEscape=void 0!==n.useRawValueToEscape&&n.useRawValueToEscape,this.prefix=n.prefix?z(n.prefix):n.prefixEscaped||"{{",this.suffix=n.suffix?z(n.suffix):n.suffixEscaped||"}}",this.formatSeparator=n.formatSeparator?n.formatSeparator:n.formatSeparator||",",this.unescapePrefix=n.unescapeSuffix?"":n.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":n.unescapeSuffix||"",this.nestingPrefix=n.nestingPrefix?z(n.nestingPrefix):n.nestingPrefixEscaped||z("$t("),this.nestingSuffix=n.nestingSuffix?z(n.nestingSuffix):n.nestingSuffixEscaped||z(")"),this.nestingOptionsSeparator=n.nestingOptionsSeparator?n.nestingOptionsSeparator:n.nestingOptionsSeparator||",",this.maxReplaces=n.maxReplaces?n.maxReplaces:1e3,this.alwaysFormat=void 0!==n.alwaysFormat&&n.alwaysFormat,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=`${this.prefix}(.+?)${this.suffix}`;this.regexp=new RegExp(t,"g");const n=`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`;this.regexpUnescape=new RegExp(n,"g");const e=`${this.nestingPrefix}(.+?)${this.nestingSuffix}`;this.nestingRegexp=new RegExp(e,"g")}interpolate(t,n,e,o){let r,a,i;const f=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function c(t){return t.replace(/\$/g,"$$$$")}const l=t=>{if(t.indexOf(this.formatSeparator)<0){const r=B(n,f,t,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(r,void 0,e,d(b(b({},o),n),{interpolationkey:t})):r}const r=t.split(this.formatSeparator),a=r.shift().trim(),i=r.join(this.formatSeparator).trim();return this.format(B(n,f,a,this.options.keySeparator,this.options.ignoreJSONStructure),i,e,d(b(b({},o),n),{interpolationkey:a}))};this.resetRegExp();const s=o&&o.missingInterpolationHandler||this.options.missingInterpolationHandler,u=o&&o.interpolation&&void 0!==o.interpolation.skipOnVariables?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:t=>c(t)},{regex:this.regexp,safeValue:t=>this.escapeValue?c(this.escape(t)):c(t)}].forEach((n=>{for(i=0;r=n.regex.exec(t);){const e=r[1].trim();if(a=l(e),void 0===a)if("function"==typeof s){const n=s(t,r,o);a="string"==typeof n?n:""}else if(o&&Object.prototype.hasOwnProperty.call(o,e))a="";else{if(u){a=r[0];continue}this.logger.warn(`missed to pass in variable ${e} for interpolating ${t}`),a=""}else"string"==typeof a||this.useRawValueToEscape||(a=k(a));const f=n.safeValue(a);if(t=t.replace(r[0],f),u?(n.regex.lastIndex+=a.length,n.regex.lastIndex-=r[0].length):n.regex.lastIndex=0,i++,i>=this.maxReplaces)break}})),t}nest(t,n){let e,o,r,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};function i(t,n){const e=this.nestingOptionsSeparator;if(t.indexOf(e)<0)return t;const o=t.split(new RegExp(`${e}[ ]*{`));let a=`{${o[1]}`;t=o[0],a=this.interpolate(a,r);const i=a.match(/'/g),f=a.match(/"/g);(i&&i.length%2==0&&!f||f.length%2!=0)&&(a=a.replace(/'/g,'"'));try{r=JSON.parse(a),n&&(r=b(b({},n),r))}catch(n){return this.logger.warn(`failed parsing options string in nesting for key ${t}`,n),`${t}${e}${a}`}return delete r.defaultValue,t}for(;e=this.nestingRegexp.exec(t);){let f=[];r=b({},a),r=r.replace&&"string"!=typeof r.replace?r.replace:r,r.applyPostProcessor=!1,delete r.defaultValue;let c=!1;if(-1!==e[0].indexOf(this.formatSeparator)&&!/{.*}/.test(e[1])){const t=e[1].split(this.formatSeparator).map((t=>t.trim()));e[1]=t.shift(),f=t,c=!0}if(o=n(i.call(this,e[1].trim(),r),r),o&&e[0]===t&&"string"!=typeof o)return o;"string"!=typeof o&&(o=k(o)),o||(this.logger.warn(`missed to resolve ${e[1]} for nesting ${t}`),o=""),c&&(o=f.reduce(((t,n)=>this.format(t,n,a.lng,d(b({},a),{interpolationkey:e[1].trim()}))),o.trim())),t=t.replace(e[0],o),this.regexp.lastIndex=0}return t}}function M(t){const n={};return function(e,o,r){const a=o+JSON.stringify(r);let i=n[a];return i||(i=t(E(o),r),n[a]=i),i(e)}}class V{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=g.create("formatter"),this.options=t,this.formats={number:M(((t,n)=>{const e=new Intl.NumberFormat(t,b({},n));return t=>e.format(t)})),currency:M(((t,n)=>{const e=new Intl.NumberFormat(t,d(b({},n),{style:"currency"}));return t=>e.format(t)})),datetime:M(((t,n)=>{const e=new Intl.DateTimeFormat(t,b({},n));return t=>e.format(t)})),relativetime:M(((t,n)=>{const e=new Intl.RelativeTimeFormat(t,b({},n));return t=>e.format(t,n.range||"day")})),list:M(((t,n)=>{const e=new Intl.ListFormat(t,b({},n));return t=>e.format(t)}))},this.init(t)}init(t){const n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=n.formatSeparator?n.formatSeparator:n.formatSeparator||","}add(t,n){this.formats[t.toLowerCase().trim()]=n}addCached(t,n){this.formats[t.toLowerCase().trim()]=M(n)}format(t,n,e){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return n.split(this.formatSeparator).reduce(((t,n)=>{const{formatName:r,formatOptions:a}=function(t){let n=t.toLowerCase().trim();const e={};if(t.indexOf("(")>-1){const o=t.split("(");n=o[0].toLowerCase().trim();const r=o[1].substring(0,o[1].length-1);"currency"===n&&r.indexOf(":")<0?e.currency||(e.currency=r.trim()):"relativetime"===n&&r.indexOf(":")<0?e.range||(e.range=r.trim()):r.split(";").forEach((t=>{if(!t)return;const[n,...o]=t.split(":"),r=o.join(":").trim().replace(/^'+|'+$/g,"");e[n.trim()]||(e[n.trim()]=r),"false"===r&&(e[n.trim()]=!1),"true"===r&&(e[n.trim()]=!0),isNaN(r)||(e[n.trim()]=parseInt(r,10))}))}return{formatName:n,formatOptions:e}}(n);if(this.formats[r]){let n=t;try{const i=o&&o.formatParams&&o.formatParams[o.interpolationkey]||{},f=i.locale||i.lng||o.locale||o.lng||e;n=this.formats[r](t,f,b(b(b({},a),o),i))}catch(t){this.logger.warn(t)}return n}return this.logger.warn(`there was no format function for ${r}`),t}),t)}}class H extends m{constructor(t,n,e){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};super(),this.backend=t,this.store=n,this.services=e,this.languageUtils=e.languageUtils,this.options=o,this.logger=g.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(e,o.backend,o)}queueLoad(t,n,e,o){const r={},a={},i={},f={};return t.forEach((t=>{let o=!0;n.forEach((n=>{const i=`${t}|${n}`;!e.reload&&this.store.hasResourceBundle(t,n)?this.state[i]=2:this.state[i]<0||(1===this.state[i]?void 0===a[i]&&(a[i]=!0):(this.state[i]=1,o=!1,void 0===a[i]&&(a[i]=!0),void 0===r[i]&&(r[i]=!0),void 0===f[n]&&(f[n]=!0)))})),o||(i[t]=!0)})),(Object.keys(r).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(r),pending:Object.keys(a),toLoadLanguages:Object.keys(i),toLoadNamespaces:Object.keys(f)}}loaded(t,n,e){const o=t.split("|"),r=o[0],a=o[1];n&&this.emit("failedLoading",r,a,n),e&&this.store.addResourceBundle(r,a,e),this.state[t]=n?-1:2;const i={};this.queue.forEach((e=>{(function(t,n,e,o){const{obj:r,k:a}=w(t,n,Object);r[a]=r[a]||[],r[a].push(e)})(e.loaded,[r],a),function(t,n){void 0!==t.pending[n]&&(delete t.pending[n],t.pendingCount--)}(e,t),n&&e.errors.push(n),0!==e.pendingCount||e.done||(Object.keys(e.loaded).forEach((t=>{i[t]||(i[t]={});const n=e.loaded[t];n.length&&n.forEach((n=>{void 0===i[t][n]&&(i[t][n]=!0)}))})),e.done=!0,e.errors.length?e.callback(e.errors):e.callback())})),this.emit("loaded",i),this.queue=this.queue.filter((t=>!t.done))}read(t,n,e){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.retryTimeout,a=arguments.length>5?arguments[5]:void 0;if(!t.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads)return void this.waitingReads.push({lng:t,ns:n,fcName:e,tried:o,wait:r,callback:a});this.readingCalls++;const i=(i,f)=>{if(this.readingCalls--,this.waitingReads.length>0){const t=this.waitingReads.shift();this.read(t.lng,t.ns,t.fcName,t.tried,t.wait,t.callback)}i&&f&&o<this.maxRetries?setTimeout((()=>{this.read.call(this,t,n,e,o+1,2*r,a)}),r):a(i,f)},f=this.backend[e].bind(this.backend);if(2!==f.length)return f(t,n,i);try{const e=f(t,n);e&&"function"==typeof e.then?e.then((t=>i(null,t))).catch(i):i(null,e)}catch(t){i(t)}}prepareLoading(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();"string"==typeof t&&(t=this.languageUtils.toResolveHierarchy(t)),"string"==typeof n&&(n=[n]);const r=this.queueLoad(t,n,e,o);if(!r.toLoad.length)return r.pending.length||o(),null;r.toLoad.forEach((t=>{this.loadOne(t)}))}load(t,n,e){this.prepareLoading(t,n,{},e)}reload(t,n,e){this.prepareLoading(t,n,{reload:!0},e)}loadOne(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const e=t.split("|"),o=e[0],r=e[1];this.read(o,r,"read",void 0,void 0,((e,a)=>{e&&this.logger.warn(`${n}loading namespace ${r} for language ${o} failed`,e),!e&&a&&this.logger.log(`${n}loaded namespace ${r} for language ${o}`,a),this.loaded(t,e,a)}))}saveMissing(t,n,e,o,r){let a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n))this.logger.warn(`did not save key "${e}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");else if(null!=e&&""!==e){if(this.backend&&this.backend.create){const f=d(b({},a),{isUpdate:r}),c=this.backend.create.bind(this.backend);if(c.length<6)try{let r;r=5===c.length?c(t,n,e,o,f):c(t,n,e,o),r&&"function"==typeof r.then?r.then((t=>i(null,t))).catch(i):i(null,r)}catch(t){i(t)}else c(t,n,e,o,i,f)}t&&t[0]&&this.store.addResource(t[0],n,e,o)}}}function Y(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){let n={};if("object"==typeof t[1]&&(n=t[1]),"string"==typeof t[1]&&(n.defaultValue=t[1]),"string"==typeof t[2]&&(n.tDescription=t[2]),"object"==typeof t[2]||"object"==typeof t[3]){const e=t[3]||t[2];Object.keys(e).forEach((t=>{n[t]=e[t]}))}return n},interpolation:{escapeValue:!0,format:(t,n,e,o)=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function X(t){return"string"==typeof t.ns&&(t.ns=[t.ns]),"string"==typeof t.fallbackLng&&(t.fallbackLng=[t.fallbackLng]),"string"==typeof t.fallbackNS&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t}function W(){}class G extends m{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=X(t),this.services={},this.logger=g,this.modules={external:[]},function(t){Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach((n=>{"function"==typeof t[n]&&(t[n]=t[n].bind(t))}))}(this),n&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,n),this;setTimeout((()=>{this.init(t,n)}),0)}}init(){var t=this;let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;"function"==typeof n&&(e=n,n={}),!n.defaultNS&&!1!==n.defaultNS&&n.ns&&("string"==typeof n.ns?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const o=Y();function r(t){return t?"function"==typeof t?new t:t:null}if(this.options=b(b(b({},o),this.options),X(n)),"v1"!==this.options.compatibilityAPI&&(this.options.interpolation=b(b({},o.interpolation),this.options.interpolation)),void 0!==n.keySeparator&&(this.options.userDefinedKeySeparator=n.keySeparator),void 0!==n.nsSeparator&&(this.options.userDefinedNsSeparator=n.nsSeparator),!this.options.isClone){let n;this.modules.logger?g.init(r(this.modules.logger),this.options):g.init(null,this.options),this.modules.formatter?n=this.modules.formatter:"undefined"!=typeof Intl&&(n=V);const e=new I(this.options);this.store=new $(this.options.resources,this.options);const a=this.services;a.logger=g,a.resourceStore=this.store,a.languageUtils=e,a.pluralResolver=new U(e,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),!n||this.options.interpolation.format&&this.options.interpolation.format!==o.interpolation.format||(a.formatter=r(n),a.formatter.init(a,this.options),this.options.interpolation.format=a.formatter.format.bind(a.formatter)),a.interpolator=new D(this.options),a.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},a.backendConnector=new H(r(this.modules.backend),a.resourceStore,a,this.options),a.backendConnector.on("*",(function(n){for(var e=arguments.length,o=new Array(e>1?e-1:0),r=1;r<e;r++)o[r-1]=arguments[r];t.emit(n,...o)})),this.modules.languageDetector&&(a.languageDetector=r(this.modules.languageDetector),a.languageDetector.init&&a.languageDetector.init(a,this.options.detection,this.options)),this.modules.i18nFormat&&(a.i18nFormat=r(this.modules.i18nFormat),a.i18nFormat.init&&a.i18nFormat.init(this)),this.translator=new C(this.services,this.options),this.translator.on("*",(function(n){for(var e=arguments.length,o=new Array(e>1?e-1:0),r=1;r<e;r++)o[r-1]=arguments[r];t.emit(n,...o)})),this.modules.external.forEach((t=>{t.init&&t.init(this)}))}if(this.format=this.options.interpolation.format,e||(e=W),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const t=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);t.length>0&&"dev"!==t[0]&&(this.options.lng=t[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach((n=>{this[n]=function(){return t.store[n](...arguments)}})),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach((n=>{this[n]=function(){return t.store[n](...arguments),t}}));const a=v(),i=()=>{const t=(t,n)=>{this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),a.resolve(n),e(t,n)};if(this.languages&&"v1"!==this.options.compatibilityAPI&&!this.isInitialized)return t(null,this.t.bind(this));this.changeLanguage(this.options.lng,t)};return this.options.resources||!this.options.initImmediate?i():setTimeout(i,0),a}loadResources(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:W;const e="string"==typeof t?t:this.language;if("function"==typeof t&&(n=t),!this.options.resources||this.options.partialBundledLanguages){if(e&&"cimode"===e.toLowerCase()&&(!this.options.preload||0===this.options.preload.length))return n();const t=[],o=n=>{n&&"cimode"!==n&&this.services.languageUtils.toResolveHierarchy(n).forEach((n=>{"cimode"!==n&&t.indexOf(n)<0&&t.push(n)}))};e?o(e):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((t=>o(t))),this.options.preload&&this.options.preload.forEach((t=>o(t))),this.services.backendConnector.load(t,this.options.ns,(t=>{t||this.resolvedLanguage||!this.language||this.setResolvedLanguage(this.language),n(t)}))}else n(null)}reloadResources(t,n,e){const o=v();return t||(t=this.languages),n||(n=this.options.ns),e||(e=W),this.services.backendConnector.reload(t,n,(t=>{o.resolve(),e(t)})),o}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===t.type&&(this.modules.backend=t),("logger"===t.type||t.log&&t.warn&&t.error)&&(this.modules.logger=t),"languageDetector"===t.type&&(this.modules.languageDetector=t),"i18nFormat"===t.type&&(this.modules.i18nFormat=t),"postProcessor"===t.type&&N.addPostProcessor(t),"formatter"===t.type&&(this.modules.formatter=t),"3rdParty"===t.type&&this.modules.external.push(t),this}setResolvedLanguage(t){if(t&&this.languages&&!(["cimode","dev"].indexOf(t)>-1))for(let t=0;t<this.languages.length;t++){const n=this.languages[t];if(!(["cimode","dev"].indexOf(n)>-1)&&this.store.hasLanguageSomeTranslations(n)){this.resolvedLanguage=n;break}}}changeLanguage(t,n){var e=this;this.isLanguageChangingTo=t;const o=v();this.emit("languageChanging",t);const r=t=>{this.language=t,this.languages=this.services.languageUtils.toResolveHierarchy(t),this.resolvedLanguage=void 0,this.setResolvedLanguage(t)},a=(t,a)=>{a?(r(a),this.translator.changeLanguage(a),this.isLanguageChangingTo=void 0,this.emit("languageChanged",a),this.logger.log("languageChanged",a)):this.isLanguageChangingTo=void 0,o.resolve((function(){return e.t(...arguments)})),n&&n(t,(function(){return e.t(...arguments)}))},i=n=>{t||n||!this.services.languageDetector||(n=[]);const e="string"==typeof n?n:this.services.languageUtils.getBestMatchFromCodes(n);e&&(this.language||r(e),this.translator.language||this.translator.changeLanguage(e),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(e)),this.loadResources(e,(t=>{a(t,e)}))};return t||!this.services.languageDetector||this.services.languageDetector.async?!t&&this.services.languageDetector&&this.services.languageDetector.async?0===this.services.languageDetector.detect.length?this.services.languageDetector.detect().then(i):this.services.languageDetector.detect(i):i(t):i(this.services.languageDetector.detect()),o}getFixedT(t,n,e){var o=this;const r=function(t,n){let a;if("object"!=typeof n){for(var i=arguments.length,f=new Array(i>2?i-2:0),c=2;c<i;c++)f[c-2]=arguments[c];a=o.options.overloadTranslationOptionHandler([t,n].concat(f))}else a=b({},n);a.lng=a.lng||r.lng,a.lngs=a.lngs||r.lngs,a.ns=a.ns||r.ns,a.keyPrefix=a.keyPrefix||e||r.keyPrefix;const l=o.options.keySeparator||".";let s;return s=a.keyPrefix&&Array.isArray(t)?t.map((t=>`${a.keyPrefix}${l}${t}`)):a.keyPrefix?`${a.keyPrefix}${l}${t}`:t,o.t(s,a)};return"string"==typeof t?r.lng=t:r.lngs=t,r.ns=n,r.keyPrefix=e,r}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const e=n.lng||this.resolvedLanguage||this.languages[0],o=!!this.options&&this.options.fallbackLng,r=this.languages[this.languages.length-1];if("cimode"===e.toLowerCase())return!0;const a=(t,n)=>{const e=this.services.backendConnector.state[`${t}|${n}`];return-1===e||2===e};if(n.precheck){const t=n.precheck(this,a);if(void 0!==t)return t}return!(!this.hasResourceBundle(e,t)&&this.services.backendConnector.backend&&(!this.options.resources||this.options.partialBundledLanguages)&&(!a(e,t)||o&&!a(r,t)))}loadNamespaces(t,n){const e=v();return this.options.ns?("string"==typeof t&&(t=[t]),t.forEach((t=>{this.options.ns.indexOf(t)<0&&this.options.ns.push(t)})),this.loadResources((t=>{e.resolve(),n&&n(t)})),e):(n&&n(),Promise.resolve())}loadLanguages(t,n){const e=v();"string"==typeof t&&(t=[t]);const o=this.options.preload||[],r=t.filter((t=>o.indexOf(t)<0));return r.length?(this.options.preload=o.concat(r),this.loadResources((t=>{e.resolve(),n&&n(t)})),e):(n&&n(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const n=this.services&&this.services.languageUtils||new I(Y());return["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].indexOf(n.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){return new G(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1?arguments[1]:void 0)}cloneInstance(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:W;const e=t.forkResourceStore;e&&delete t.forkResourceStore;const o=d(b(b({},this.options),t),{isClone:!0}),r=new G(o);return void 0===t.debug&&void 0===t.prefix||(r.logger=r.logger.clone(t)),["store","services","language"].forEach((t=>{r[t]=this[t]})),r.services=b({},this.services),r.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},e&&(r.store=new $(this.store.data,o),r.services.resourceStore=r.store),r.translator=new C(r.services,o),r.translator.on("*",(function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),o=1;o<n;o++)e[o-1]=arguments[o];r.emit(t,...e)})),r.init(o,n),r.translator.options=o,r.translator.backendConnector.services.utils={hasLoadedNamespace:r.hasLoadedNamespace.bind(r)},r}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Q=G.createInstance();Q.createInstance=G.createInstance;class J{constructor(){}static getInstance(t,n){return u(this,null,(function*(){return Array.isArray(n)?n=new Set(n):"function"==typeof n&&(n=new Set([n])),J.instance=new J,yield Q.init({lng:t}),void 0!==n&&n.forEach((t=>t(((t,n)=>(J.instance.addResourceBundle(t,n),t))))),this.instance}))}static addResourceBundle(t,n){Q.addResourceBundle(t,"translation",n,!0)}addResourceBundle(t,n){J.addResourceBundle(t,n)}translate(t,n){return Q.t(t,Object.assign({count:null==n?void 0:n.count},null==n?void 0:n.placeholders))}}const Z=(t,n,e)=>u(void 0,null,(function*(){var r,a;if(void 0===o.S.I18n){const t=yield J.getInstance(null!==(a=null===(r=null==e?void 0:e.translation)||void 0===r?void 0:r.name)&&void 0!==a?a:"de",null==e?void 0:e.translations);Object.defineProperty(o.S,"I18n",{value:t,writable:!1})}return yield(0,o.r)(t,n,e)})),tt=()=>null==o.S?void 0:o.S.I18n},2323:(t,n,e)=>{"use strict";e.d(n,{F:()=>st,H:()=>m,a:()=>_,b:()=>lt,g:()=>z,h:()=>h,r:()=>ut});var o=(t,n,e)=>new Promise(((o,r)=>{var a=t=>{try{f(e.next(t))}catch(t){r(t)}},i=t=>{try{f(e.throw(t))}catch(t){r(t)}},f=t=>t.done?o(t.value):Promise.resolve(t.value).then(a,i);f((e=e.apply(t,n)).next())}));let r,a,i,f=!1,c=!1,l=!1,s=!1;const b="http://www.w3.org/1999/xlink",d={},u=t=>"object"==(t=typeof t)||"function"===t;function p(t){var n,e,o;return null!==(o=null===(e=null===(n=t.head)||void 0===n?void 0:n.querySelector('meta[name="csp-nonce"]'))||void 0===e?void 0:e.getAttribute("content"))&&void 0!==o?o:void 0}const h=(t,n,...e)=>{let o=null,r=null,a=null,i=!1,f=!1;const c=[],l=n=>{for(let e=0;e<n.length;e++)o=n[e],Array.isArray(o)?l(o):null!=o&&"boolean"!=typeof o&&((i="function"!=typeof t&&!u(o))&&(o=String(o)),i&&f?c[c.length-1].$text$+=o:c.push(i?g(null,o):o),f=i)};if(l(e),n){n.key&&(r=n.key),n.name&&(a=n.name);{const t=n.className||n.class;t&&(n.class="object"!=typeof t?t:Object.keys(t).filter((n=>t[n])).join(" "))}}if("function"==typeof t)return t(null===n?{}:n,c,v);const s=g(t,null);return s.$attrs$=n,c.length>0&&(s.$children$=c),s.$key$=r,s.$name$=a,s},g=(t,n)=>({$flags$:0,$tag$:t,$text$:n,$elm$:null,$children$:null,$attrs$:null,$key$:null,$name$:null}),m={},v={forEach:(t,n)=>t.map(k).forEach(n),map:(t,n)=>t.map(k).map(n).map(w)},k=t=>({vattrs:t.$attrs$,vchildren:t.$children$,vkey:t.$key$,vname:t.$name$,vtag:t.$tag$,vtext:t.$text$}),w=t=>{if("function"==typeof t.vtag){const n=Object.assign({},t.vattrs);return t.vkey&&(n.key=t.vkey),t.vname&&(n.name=t.vname),h(t.vtag,n,...t.vchildren||[])}const n=g(t.vtag,t.vtext);return n.$attrs$=t.vattrs,n.$children$=t.vchildren,n.$key$=t.vkey,n.$name$=t.vname,n},y=(t,n,e,o,r,a,i)=>{let f,c,l,s;if(1===a.nodeType){for(f=a.getAttribute("c-id"),f&&(c=f.split("."),c[0]!==i&&"0"!==c[0]||(l={$flags$:0,$hostId$:c[0],$nodeId$:c[1],$depth$:c[2],$index$:c[3],$tag$:a.tagName.toLowerCase(),$elm$:a,$attrs$:null,$children$:null,$key$:null,$name$:null,$text$:null},n.push(l),a.removeAttribute("c-id"),t.$children$||(t.$children$=[]),t.$children$[l.$index$]=l,t=l,o&&"0"===l.$depth$&&(o[l.$index$]=l.$elm$))),s=a.childNodes.length-1;s>=0;s--)y(t,n,e,o,r,a.childNodes[s],i);if(a.shadowRoot)for(s=a.shadowRoot.childNodes.length-1;s>=0;s--)y(t,n,e,o,r,a.shadowRoot.childNodes[s],i)}else if(8===a.nodeType)c=a.nodeValue.split("."),c[1]!==i&&"0"!==c[1]||(f=c[0],l={$flags$:0,$hostId$:c[1],$nodeId$:c[2],$depth$:c[3],$index$:c[4],$elm$:a,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null},"t"===f?(l.$elm$=a.nextSibling,l.$elm$&&3===l.$elm$.nodeType&&(l.$text$=l.$elm$.textContent,n.push(l),a.remove(),t.$children$||(t.$children$=[]),t.$children$[l.$index$]=l,o&&"0"===l.$depth$&&(o[l.$index$]=l.$elm$))):l.$hostId$===i&&("s"===f?(l.$tag$="slot",c[5]?a["s-sn"]=l.$name$=c[5]:a["s-sn"]="",a["s-sr"]=!0,o&&(l.$elm$=xt.createElement(l.$tag$),l.$name$&&l.$elm$.setAttribute("name",l.$name$),a.parentNode.insertBefore(l.$elm$,a),a.remove(),"0"===l.$depth$&&(o[l.$index$]=l.$elm$)),e.push(l),t.$children$||(t.$children$=[]),t.$children$[l.$index$]=l):"r"===f&&(o?a.remove():(r["s-cr"]=a,a["s-cn"]=!0))));else if(t&&"style"===t.$tag$){const n=g(null,a.textContent);n.$elm$=a,n.$index$="0",t.$children$=[n]}},x=(t,n)=>{if(1===t.nodeType){let e=0;for(;e<t.childNodes.length;e++)x(t.childNodes[e],n);if(t.shadowRoot)for(e=0;e<t.shadowRoot.childNodes.length;e++)x(t.shadowRoot.childNodes[e],n)}else if(8===t.nodeType){const e=t.nodeValue.split(".");"o"===e[0]&&(n.set(e[1]+"."+e[2],t),t.nodeValue="",t["s-en"]=e[3])}},_=t=>wt.push(t),z=t=>dt(t).$hostElement$,L=new WeakMap,S=(t,n,e)=>{let o=kt.get(t);Lt&&e?(o=o||new CSSStyleSheet,"string"==typeof o?o=n:o.replaceSync(n)):o=n,kt.set(t,o)},O=(t,n,e)=>{var o;const r=T(n,e),a=kt.get(r);if(t=11===t.nodeType?t:xt,a)if("string"==typeof a){t=t.head||t;let n,e=L.get(t);if(e||L.set(t,e=new Set),!e.has(r)){if(t.host&&(n=t.querySelector(`[sty-id="${r}"]`)))n.innerHTML=a;else{n=xt.createElement("style"),n.innerHTML=a;const e=null!==(o=_t.$nonce$)&&void 0!==o?o:p(xt);null!=e&&n.setAttribute("nonce",e),t.insertBefore(n,t.querySelector("link"))}e&&e.add(r)}}else t.adoptedStyleSheets.includes(a)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,a]);return r},T=(t,n)=>"sc-"+(n&&32&t.$flags$?t.$tagName$+"-"+n:t.$tagName$),E=t=>t.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{"),$=(t,n,e,o,r,a)=>{if(e!==o){let i=ht(t,n),f=n.toLowerCase();if("class"===n){const n=t.classList,r=A(e),a=A(o);n.remove(...r.filter((t=>t&&!a.includes(t)))),n.add(...a.filter((t=>t&&!r.includes(t))))}else if("style"===n){for(const n in e)o&&null!=o[n]||(n.includes("-")?t.style.removeProperty(n):t.style[n]="");for(const n in o)e&&o[n]===e[n]||(n.includes("-")?t.style.setProperty(n,o[n]):t.style[n]=o[n])}else if("key"===n);else if("ref"===n)o&&o(t);else if(i||"o"!==n[0]||"n"!==n[1]){const c=u(o);if((i||c&&null!==o)&&!r)try{if(t.tagName.includes("-"))t[n]=o;else{const r=null==o?"":o;"list"===n?i=!1:null!=e&&t[n]==r||(t[n]=r)}}catch(t){}let l=!1;f!==(f=f.replace(/^xlink\:?/,""))&&(n=f,l=!0),null==o||!1===o?!1===o&&""!==t.getAttribute(n)||(l?t.removeAttributeNS(b,n):t.removeAttribute(n)):(!i||4&a||r)&&!c&&(o=!0===o?"":o,l?t.setAttributeNS(b,n,o):t.setAttribute(n,o))}else n="-"===n[2]?n.slice(3):ht(yt,f)?f.slice(2):f[2]+n.slice(3),e&&_t.rel(t,n,e,!1),o&&_t.ael(t,n,o,!1)}},N=/\s/,A=t=>t?t.split(N):[],C=(t,n,e,o)=>{const r=11===n.$elm$.nodeType&&n.$elm$.host?n.$elm$.host:n.$elm$,a=t&&t.$attrs$||d,i=n.$attrs$||d;for(o in a)o in i||$(r,o,a[o],void 0,e,n.$flags$);for(o in i)$(r,o,a[o],i[o],e,n.$flags$)},q=(t,n,e,o)=>{const c=n.$children$[e];let b,d,u,p=0;if(f||(l=!0,"slot"===c.$tag$&&(r&&o.classList.add(r+"-s"),c.$flags$|=c.$children$?2:1)),null!==c.$text$)b=c.$elm$=xt.createTextNode(c.$text$);else if(1&c.$flags$)b=c.$elm$=xt.createTextNode("");else{if(s||(s="svg"===c.$tag$),b=c.$elm$=xt.createElementNS(s?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&c.$flags$?"slot-fb":c.$tag$),s&&"foreignObject"===c.$tag$&&(s=!1),C(null,c,s),(t=>null!=t)(r)&&b["s-si"]!==r&&b.classList.add(b["s-si"]=r),c.$children$)for(p=0;p<c.$children$.length;++p)d=q(t,c,p,b),d&&b.appendChild(d);"svg"===c.$tag$?s=!1:"foreignObject"===b.tagName&&(s=!0)}return b["s-hn"]=i,3&c.$flags$&&(b["s-sr"]=!0,b["s-cr"]=a,b["s-sn"]=c.$name$||"",u=t&&t.$children$&&t.$children$[e],u&&u.$tag$===c.$tag$&&t.$elm$&&I(t.$elm$,!1)),b},I=(t,n)=>{_t.$flags$|=1;const e=t.childNodes;for(let t=e.length-1;t>=0;t--){const o=e[t];o["s-hn"]!==i&&o["s-ol"]&&(K(o).insertBefore(o,R(o)),o["s-ol"].remove(),o["s-ol"]=void 0,l=!0),n&&I(o,n)}_t.$flags$&=-2},j=(t,n,e,o,r,a)=>{let f,c=t["s-cr"]&&t["s-cr"].parentNode||t;for(c.shadowRoot&&c.tagName===i&&(c=c.shadowRoot);r<=a;++r)o[r]&&(f=q(null,e,r,t),f&&(o[r].$elm$=f,c.insertBefore(f,R(n))))},F=(t,n,e)=>{for(let o=n;o<=e;++o){const n=t[o];if(n){const t=n.$elm$;H(n),t&&(c=!0,t["s-ol"]?t["s-ol"].remove():I(t,!0),t.remove())}}},P=(t,n)=>t.$tag$===n.$tag$&&("slot"===t.$tag$?t.$name$===n.$name$:t.$key$===n.$key$),R=t=>t&&t["s-ol"]||t,K=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,U=(t,n)=>{const e=n.$elm$=t.$elm$,o=t.$children$,r=n.$children$,a=n.$tag$,i=n.$text$;let f;null===i?(s="svg"===a||"foreignObject"!==a&&s,"slot"===a||C(t,n,s),null!==o&&null!==r?((t,n,e,o)=>{let r,a,i=0,f=0,c=0,l=0,s=n.length-1,b=n[0],d=n[s],u=o.length-1,p=o[0],h=o[u];for(;i<=s&&f<=u;)if(null==b)b=n[++i];else if(null==d)d=n[--s];else if(null==p)p=o[++f];else if(null==h)h=o[--u];else if(P(b,p))U(b,p),b=n[++i],p=o[++f];else if(P(d,h))U(d,h),d=n[--s],h=o[--u];else if(P(b,h))"slot"!==b.$tag$&&"slot"!==h.$tag$||I(b.$elm$.parentNode,!1),U(b,h),t.insertBefore(b.$elm$,d.$elm$.nextSibling),b=n[++i],h=o[--u];else if(P(d,p))"slot"!==b.$tag$&&"slot"!==h.$tag$||I(d.$elm$.parentNode,!1),U(d,p),t.insertBefore(d.$elm$,b.$elm$),d=n[--s],p=o[++f];else{for(c=-1,l=i;l<=s;++l)if(n[l]&&null!==n[l].$key$&&n[l].$key$===p.$key$){c=l;break}c>=0?(a=n[c],a.$tag$!==p.$tag$?r=q(n&&n[f],e,c,t):(U(a,p),n[c]=void 0,r=a.$elm$),p=o[++f]):(r=q(n&&n[f],e,f,t),p=o[++f]),r&&K(b.$elm$).insertBefore(r,R(b.$elm$))}i>s?j(t,null==o[u+1]?null:o[u+1].$elm$,e,o,f,u):f>u&&F(n,i,s)})(e,o,n,r):null!==r?(null!==t.$text$&&(e.textContent=""),j(e,null,n,r,0,r.length-1)):null!==o&&F(o,0,o.length-1),s&&"svg"===a&&(s=!1)):(f=e["s-cr"])?f.parentNode.textContent=i:t.$text$!==i&&(e.data=i)},B=t=>{const n=t.childNodes;for(const t of n)if(1===t.nodeType){if(t["s-sr"]){const e=t["s-sn"];t.hidden=!1;for(const o of n)if(o["s-hn"]!==t["s-hn"]||""!==e){if(1===o.nodeType&&e===o.getAttribute("slot")){t.hidden=!0;break}}else if(1===o.nodeType||3===o.nodeType&&""!==o.textContent.trim()){t.hidden=!0;break}}B(t)}},D=[],M=t=>{let n,e,o;for(const r of t.childNodes){if(r["s-sr"]&&(n=r["s-cr"])&&n.parentNode){e=n.parentNode.childNodes;const t=r["s-sn"];for(o=e.length-1;o>=0;o--)if(n=e[o],!n["s-cn"]&&!n["s-nr"]&&n["s-hn"]!==r["s-hn"])if(V(n,t)){let e=D.find((t=>t.$nodeToRelocate$===n));c=!0,n["s-sn"]=n["s-sn"]||t,e?e.$slotRefNode$=r:D.push({$slotRefNode$:r,$nodeToRelocate$:n}),n["s-sr"]&&D.map((t=>{V(t.$nodeToRelocate$,n["s-sn"])&&(e=D.find((t=>t.$nodeToRelocate$===n)),e&&!t.$slotRefNode$&&(t.$slotRefNode$=e.$slotRefNode$))}))}else D.some((t=>t.$nodeToRelocate$===n))||D.push({$nodeToRelocate$:n})}1===r.nodeType&&M(r)}},V=(t,n)=>1===t.nodeType?null===t.getAttribute("slot")&&""===n||t.getAttribute("slot")===n:t["s-sn"]===n||""===n,H=t=>{t.$attrs$&&t.$attrs$.ref&&t.$attrs$.ref(null),t.$children$&&t.$children$.map(H)},Y=(t,n)=>{n&&!t.$onRenderResolve$&&n["s-p"]&&n["s-p"].push(new Promise((n=>t.$onRenderResolve$=n)))},X=(t,n)=>{if(!(4&t.$flags$))return Y(t,t.$ancestorComponent$),W(t,n);t.$flags$|=512},W=(t,n)=>{const e=(t.$cmpMeta$.$tagName$,()=>{}),o=t.$lazyInstance$;let r;return n&&(r=et(o,"componentWillLoad")),r=G(r,(()=>et(o,"componentWillRender"))),e(),G(r,(()=>J(t,o,n)))},G=(t,n)=>Q(t)?t.then(n):n(),Q=t=>t instanceof Promise||t&&t.then&&"function"==typeof t.then,J=(t,n,e)=>o(void 0,null,(function*(){var o;const r=t.$hostElement$,a=(t.$cmpMeta$.$tagName$,()=>{}),i=r["s-rc"];e&&(t=>{const n=t.$cmpMeta$,e=t.$hostElement$,o=n.$flags$,r=(n.$tagName$,()=>{}),a=O(e.shadowRoot?e.shadowRoot:e.getRootNode(),n,t.$modeName$);10&o&&(e["s-sc"]=a,e.classList.add(a+"-h")),r()})(t);const f=(t.$cmpMeta$.$tagName$,()=>{});Z(t,n,r,e),i&&(i.map((t=>t())),r["s-rc"]=void 0),f(),a();{const n=null!==(o=r["s-p"])&&void 0!==o?o:[],e=()=>tt(t);0===n.length?e():(Promise.all(n).then(e),t.$flags$|=4,n.length=0)}})),Z=(t,n,e,o)=>{try{n=n.render(),t.$flags$|=2,((t,n,e=!1)=>{const o=t.$hostElement$,s=t.$cmpMeta$,b=t.$vnode$||g(null,null),d=(t=>t&&t.$tag$===m)(n)?n:h(null,null,n);if(i=o.tagName,s.$attrsToReflect$&&(d.$attrs$=d.$attrs$||{},s.$attrsToReflect$.map((([t,n])=>d.$attrs$[n]=o[t]))),e&&d.$attrs$)for(const t of Object.keys(d.$attrs$))o.hasAttribute(t)&&!["key","ref","style","class"].includes(t)&&(d.$attrs$[t]=o[t]);if(d.$tag$=null,d.$flags$|=4,t.$vnode$=d,d.$elm$=b.$elm$=o.shadowRoot||o,r=o["s-sc"],a=o["s-cr"],f=0!=(1&s.$flags$),c=!1,U(b,d),_t.$flags$|=1,l){let t,n,e,o,r,a;M(d.$elm$);let i=0;for(;i<D.length;i++)t=D[i],n=t.$nodeToRelocate$,n["s-ol"]||(e=xt.createTextNode(""),e["s-nr"]=n,n.parentNode.insertBefore(n["s-ol"]=e,n));for(i=0;i<D.length;i++)if(t=D[i],n=t.$nodeToRelocate$,t.$slotRefNode$){for(o=t.$slotRefNode$.parentNode,r=t.$slotRefNode$.nextSibling,e=n["s-ol"];e=e.previousSibling;)if(a=e["s-nr"],a&&a["s-sn"]===n["s-sn"]&&o===a.parentNode&&(a=a.nextSibling,!a||!a["s-nr"])){r=a;break}(!r&&o!==n.parentNode||n.nextSibling!==r)&&n!==r&&(!n["s-hn"]&&n["s-ol"]&&(n["s-hn"]=n["s-ol"].parentNode.nodeName),o.insertBefore(n,r))}else 1===n.nodeType&&(n.hidden=!0)}c&&B(d.$elm$),_t.$flags$&=-2,D.length=0})(t,n,o)}catch(n){gt(n,t.$hostElement$)}return null},tt=t=>{t.$cmpMeta$.$tagName$;const n=t.$hostElement$,e=t.$lazyInstance$,o=t.$ancestorComponent$;et(e,"componentDidRender"),64&t.$flags$||(t.$flags$|=64,ot(n),et(e,"componentDidLoad"),t.$onReadyResolve$(n),o||nt()),t.$onInstanceResolve$(n),t.$onRenderResolve$&&(t.$onRenderResolve$(),t.$onRenderResolve$=void 0),512&t.$flags$&&St((()=>X(t,!1))),t.$flags$&=-517},nt=t=>{ot(xt.documentElement),St((()=>((t,n,e)=>{const o=_t.ce("appload",{detail:{namespace:"kolibri"}});return t.dispatchEvent(o),o})(yt)))},et=(t,n,e)=>{if(t&&t[n])try{return t[n](e)}catch(t){gt(t)}},ot=t=>t.classList.add("hydrated"),rt=(t,n,e)=>{var o;if(n.$members$){t.watchers&&(n.$watchers$=t.watchers);const r=Object.entries(n.$members$),a=t.prototype;if(r.map((([t,[o]])=>{31&o||2&e&&32&o?Object.defineProperty(a,t,{get(){return((t,n)=>dt(this).$instanceValues$.get(n))(0,t)},set(e){((t,n,e,o)=>{const r=dt(t),a=r.$hostElement$,i=r.$instanceValues$.get(n),f=r.$flags$,c=r.$lazyInstance$;e=((t,n)=>null==t||u(t)?t:4&n?"false"!==t&&(""===t||!!t):2&n?parseFloat(t):1&n?String(t):t)(e,o.$members$[n][0]);const l=Number.isNaN(i)&&Number.isNaN(e);if((!(8&f)||void 0===i)&&e!==i&&!l&&(r.$instanceValues$.set(n,e),c)){if(o.$watchers$&&128&f){const t=o.$watchers$[n];t&&t.map((t=>{try{c[t](e,i,n)}catch(t){gt(t,a)}}))}2==(18&f)&&X(r,!1)}})(this,t,e,n)},configurable:!0,enumerable:!0}):1&e&&64&o&&Object.defineProperty(a,t,{value(...n){const e=dt(this);return e.$onInstancePromise$.then((()=>e.$lazyInstance$[t](...n)))}})})),1&e){const e=new Map;a.attributeChangedCallback=function(t,o,r){_t.jmp((()=>{const i=e.get(t);if(this.hasOwnProperty(i))r=this[i],delete this[i];else{if(a.hasOwnProperty(i)&&"number"==typeof this[i]&&this[i]==r)return;if(null==i){const e=dt(this),a=null==e?void 0:e.$flags$;if(!(8&a)&&128&a&&r!==o){const a=e.$lazyInstance$,i=n.$watchers$[t];null==i||i.forEach((n=>{null!=a[n]&&a[n].call(a,r,o,t)}))}return}}this[i]=(null!==r||"boolean"!=typeof this[i])&&r}))},t.observedAttributes=Array.from(new Set([...Object.keys(null!==(o=n.$watchers$)&&void 0!==o?o:{}),...r.filter((([t,n])=>15&n[0])).map((([t,o])=>{const r=o[1]||t;return e.set(r,t),512&o[0]&&n.$attrsToReflect$.push([t,r]),r}))]))}}return t},at=t=>{et(t,"connectedCallback")},it=t=>{if(0==(1&_t.$flags$)){const n=dt(t),e=n.$cmpMeta$,r=(e.$tagName$,()=>{});if(1&n.$flags$)(null==n?void 0:n.$lazyInstance$)?at(n.$lazyInstance$):(null==n?void 0:n.$onReadyPromise$)&&n.$onReadyPromise$.then((()=>at(n.$lazyInstance$)));else{let r;if(n.$flags$|=1,r=t.getAttribute("s-id"),r){if(1&e.$flags$){const n=O(t.shadowRoot,e,t.getAttribute("s-mode"));t.classList.remove(n+"-h",n+"-s")}((t,n,e,o)=>{const r=t.shadowRoot,a=[],i=r?[]:null,f=o.$vnode$=g(n,null);_t.$orgLocNodes$||x(xt.body,_t.$orgLocNodes$=new Map),t["s-id"]=e,t.removeAttribute("s-id"),y(f,a,[],i,t,t,e),a.map((t=>{const e=t.$hostId$+"."+t.$nodeId$,o=_t.$orgLocNodes$.get(e),a=t.$elm$;o&&zt&&""===o["s-en"]&&o.parentNode.insertBefore(a,o.nextSibling),r||(a["s-hn"]=n,o&&(a["s-ol"]=o,a["s-ol"]["s-nr"]=a)),_t.$orgLocNodes$.delete(e)})),r&&i.map((t=>{t&&r.appendChild(t)}))})(t,e.$tagName$,r,n)}r||12&e.$flags$&&ft(t);{let e=t;for(;e=e.parentNode||e.host;)if(1===e.nodeType&&e.hasAttribute("s-id")&&e["s-p"]||e["s-p"]){Y(n,n.$ancestorComponent$=e);break}}e.$members$&&Object.entries(e.$members$).map((([n,[e]])=>{if(31&e&&t.hasOwnProperty(n)){const e=t[n];delete t[n],t[n]=e}})),((t,n,e,r)=>{o(void 0,null,(function*(){let o;if(0==(32&n.$flags$)){n.$flags$|=32;{if(o=vt(e),o.then){const t=()=>{};o=yield o,t()}o.isProxied||(e.$watchers$=o.watchers,rt(o,e,2),o.isProxied=!0);const t=(e.$tagName$,()=>{});n.$flags$|=8;try{new o(n)}catch(t){gt(t)}n.$flags$&=-9,n.$flags$|=128,t(),at(n.$lazyInstance$)}if(o.style){let r=o.style;"string"!=typeof r&&(r=r[n.$modeName$=(t=>wt.map((n=>n(t))).find((t=>!!t)))(t)]);const a=T(e,n.$modeName$);if(!kt.has(a)){const t=(e.$tagName$,()=>{});S(a,r,!!(1&e.$flags$)),t()}}}const r=n.$ancestorComponent$,a=()=>X(n,!0);r&&r["s-rc"]?r["s-rc"].push(a):a()}))})(t,n,e)}r()}},ft=t=>{const n=t["s-cr"]=xt.createComment("");n["s-cn"]=!0,t.insertBefore(n,t.firstChild)},ct=t=>{et(t,"disconnectedCallback")},lt=(t,n={})=>{var e;const r=[],a=n.exclude||[],i=yt.customElements,f=xt.head,c=f.querySelector("meta[charset]"),l=xt.createElement("style"),s=[],b=xt.querySelectorAll("[sty-id]");let d,u=!0,h=0;for(Object.assign(_t,n),_t.$resourcesUrl$=new URL(n.resourcesUrl||"./",xt.baseURI).href,_t.$flags$|=2;h<b.length;h++)S(b[h].getAttribute("sty-id"),E(b[h].innerHTML),!0);t.map((t=>{t[1].map((n=>{var e;const f={$flags$:n[0],$tagName$:n[1],$members$:n[2],$listeners$:n[3]};f.$members$=n[2],f.$attrsToReflect$=[],f.$watchers$=null!==(e=n[4])&&void 0!==e?e:{};const c=f.$tagName$,l=class extends HTMLElement{constructor(t){super(t),pt(t=this,f),1&f.$flags$&&t.attachShadow({mode:"open"})}connectedCallback(){d&&(clearTimeout(d),d=null),u?s.push(this):_t.jmp((()=>it(this)))}disconnectedCallback(){_t.jmp((()=>(t=>o(void 0,null,(function*(){if(0==(1&_t.$flags$)){const n=dt(t);(null==n?void 0:n.$lazyInstance$)?ct(n.$lazyInstance$):(null==n?void 0:n.$onReadyPromise$)&&n.$onReadyPromise$.then((()=>ct(n.$lazyInstance$)))}})))(this)))}componentOnReady(){return dt(this).$onReadyPromise$}};f.$lazyBundleId$=t[0],a.includes(c)||i.get(c)||(r.push(c),i.define(c,rt(l,f,1)))}))}));{l.innerHTML=r+"{visibility:hidden}.hydrated{visibility:inherit}",l.setAttribute("data-styles","");const t=null!==(e=_t.$nonce$)&&void 0!==e?e:p(xt);null!=t&&l.setAttribute("nonce",t),f.insertBefore(l,c?c.nextSibling:f.firstChild)}u=!1,s.length?s.map((t=>t.connectedCallback())):_t.jmp((()=>d=setTimeout(nt,30)))},st=(t,n)=>n,bt=new WeakMap,dt=t=>bt.get(t),ut=(t,n)=>bt.set(n.$lazyInstance$=t,n),pt=(t,n)=>{const e={$flags$:0,$hostElement$:t,$cmpMeta$:n,$instanceValues$:new Map};return e.$onInstancePromise$=new Promise((t=>e.$onInstanceResolve$=t)),e.$onReadyPromise$=new Promise((t=>e.$onReadyResolve$=t)),t["s-p"]=[],t["s-rc"]=[],bt.set(t,e)},ht=(t,n)=>n in t,gt=(t,n)=>(0,console.error)(t,n),mt=new Map,vt=(t,n,o)=>{const r=t.$tagName$.replace(/-/g,"_"),a=t.$lazyBundleId$,i=mt.get(a);return i?i[r]:e(9104)(`./${a}.entry.js`).then((t=>(mt.set(a,t),t[r])),gt)},kt=new Map,wt=[],yt="undefined"!=typeof window?window:{},xt=yt.document||{head:{}},_t={$flags$:0,$resourcesUrl$:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,n,e,o)=>t.addEventListener(n,e,o),rel:(t,n,e,o)=>t.removeEventListener(n,e,o),ce:(t,n)=>new CustomEvent(t,n)},zt=!0,Lt=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(t){}return!1})(),St=t=>Promise.resolve(void 0).then(t)},4477:(t,n,e)=>{"use strict";e.d(n,{S:()=>i,a:()=>f,b:()=>a,c:()=>o,h:()=>l,i:()=>r,p:()=>c,s:()=>s});const o=t=>"object"==typeof t&&null!==t,r=(t,n=0)=>"string"==typeof t&&t.length>=n,a=t=>{if("object"!=typeof t||null===t)return r(t,1);for(const n in t)if(!1===r(n,1))return!1;return!0},i=new Event("StateChange"),f=(t,n)=>{o(t)&&t&&(t.focus=t=>null==n?void 0:n.focus(t))};let c="development";try{c="production"}catch(t){c="production"}const l=(t,n,e)=>{if(t&&n&&"string"==typeof e){const o=t.querySelector(`[slot="${e}"]`);o&&n.appendChild(o)}},s=t=>""===t},2256:(t,n,e)=>{"use strict";var o=e(8427),r=e(160);function a(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,e=1;e<arguments.length;e++)n+="&args[]="+encodeURIComponent(arguments[e]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,f={};function c(t,n){l(t,n),l(t+"Capture",n)}function l(t,n){for(f[t]=n,t=0;t<n.length;t++)i.add(n[t])}var s=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),b=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,u={},p={};function h(t,n,e,o,r,a,i){this.acceptsBooleans=2===n||3===n||4===n,this.attributeName=o,this.attributeNamespace=r,this.mustUseProperty=e,this.propertyName=t,this.type=n,this.sanitizeURL=a,this.removeEmptyString=i}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(t){g[t]=new h(t,0,!1,t,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(t){var n=t[0];g[n]=new h(n,1,!1,t[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(t){g[t]=new h(t,2,!1,t.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(t){g[t]=new h(t,2,!1,t,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(t){g[t]=new h(t,3,!1,t.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(t){g[t]=new h(t,3,!0,t,null,!1,!1)})),["capture","download"].forEach((function(t){g[t]=new h(t,4,!1,t,null,!1,!1)})),["cols","rows","size","span"].forEach((function(t){g[t]=new h(t,6,!1,t,null,!1,!1)})),["rowSpan","start"].forEach((function(t){g[t]=new h(t,5,!1,t.toLowerCase(),null,!1,!1)}));var m=/[\-:]([a-z])/g;function v(t){return t[1].toUpperCase()}function k(t,n,e,o){var r=g.hasOwnProperty(n)?g[n]:null;(null!==r?0!==r.type:o||!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&(function(t,n,e,o){if(null==n||function(t,n,e,o){if(null!==e&&0===e.type)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return!o&&(null!==e?!e.acceptsBooleans:"data-"!==(t=t.toLowerCase().slice(0,5))&&"aria-"!==t);default:return!1}}(t,n,e,o))return!0;if(o)return!1;if(null!==e)switch(e.type){case 3:return!n;case 4:return!1===n;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}(n,e,r,o)&&(e=null),o||null===r?function(t){return!!b.call(p,t)||!b.call(u,t)&&(d.test(t)?p[t]=!0:(u[t]=!0,!1))}(n)&&(null===e?t.removeAttribute(n):t.setAttribute(n,""+e)):r.mustUseProperty?t[r.propertyName]=null===e?3!==r.type&&"":e:(n=r.attributeName,o=r.attributeNamespace,null===e?t.removeAttribute(n):(e=3===(r=r.type)||4===r&&!0===e?"":""+e,o?t.setAttributeNS(o,n,e):t.setAttribute(n,e))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(t){var n=t.replace(m,v);g[n]=new h(n,1,!1,t,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(t){var n=t.replace(m,v);g[n]=new h(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(t){var n=t.replace(m,v);g[n]=new h(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(t){g[t]=new h(t,1,!1,t.toLowerCase(),null,!1,!1)})),g.xlinkHref=new h("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(t){g[t]=new h(t,1,!1,t.toLowerCase(),null,!0,!0)}));var w=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,y=Symbol.for("react.element"),x=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),O=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),E=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),A=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var C=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var q=Symbol.iterator;function I(t){return null===t||"object"!=typeof t?null:"function"==typeof(t=q&&t[q]||t["@@iterator"])?t:null}var j,F=Object.assign;function P(t){if(void 0===j)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);j=n&&n[1]||""}return"\n"+j+t}var R=!1;function K(t,n){if(!t||R)return"";R=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(t){var o=t}Reflect.construct(t,[],n)}else{try{n.call()}catch(t){o=t}t.call(n.prototype)}else{try{throw Error()}catch(t){o=t}t()}}catch(n){if(n&&o&&"string"==typeof n.stack){for(var r=n.stack.split("\n"),a=o.stack.split("\n"),i=r.length-1,f=a.length-1;1<=i&&0<=f&&r[i]!==a[f];)f--;for(;1<=i&&0<=f;i--,f--)if(r[i]!==a[f]){if(1!==i||1!==f)do{if(i--,0>--f||r[i]!==a[f]){var c="\n"+r[i].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}}while(1<=i&&0<=f);break}}}finally{R=!1,Error.prepareStackTrace=e}return(t=t?t.displayName||t.name:"")?P(t):""}function U(t){switch(t.tag){case 5:return P(t.type);case 16:return P("Lazy");case 13:return P("Suspense");case 19:return P("SuspenseList");case 0:case 2:case 15:return K(t.type,!1);case 11:return K(t.type.render,!1);case 1:return K(t.type,!0);default:return""}}function B(t){if(null==t)return null;if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t;switch(t){case _:return"Fragment";case x:return"Portal";case L:return"Profiler";case z:return"StrictMode";case E:return"Suspense";case $:return"SuspenseList"}if("object"==typeof t)switch(t.$$typeof){case O:return(t.displayName||"Context")+".Consumer";case S:return(t._context.displayName||"Context")+".Provider";case T:var n=t.render;return(t=t.displayName)||(t=""!==(t=n.displayName||n.name||"")?"ForwardRef("+t+")":"ForwardRef"),t;case N:return null!==(n=t.displayName||null)?n:B(t.type)||"Memo";case A:n=t._payload,t=t._init;try{return B(t(n))}catch(t){}}return null}function D(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=(t=n.render).displayName||t.name||"",n.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return B(n);case 8:return n===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof n)return n.displayName||n.name||null;if("string"==typeof n)return n}return null}function M(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":case"object":return t;default:return""}}function V(t){var n=t.type;return(t=t.nodeName)&&"input"===t.toLowerCase()&&("checkbox"===n||"radio"===n)}function H(t){t._valueTracker||(t._valueTracker=function(t){var n=V(t)?"checked":"value",e=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&void 0!==e&&"function"==typeof e.get&&"function"==typeof e.set){var r=e.get,a=e.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return r.call(this)},set:function(t){o=""+t,a.call(this,t)}}),Object.defineProperty(t,n,{enumerable:e.enumerable}),{getValue:function(){return o},setValue:function(t){o=""+t},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}(t))}function Y(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var e=n.getValue(),o="";return t&&(o=V(t)?t.checked?"true":"false":t.value),(t=o)!==e&&(n.setValue(t),!0)}function X(t){if(void 0===(t=t||("undefined"!=typeof document?document:void 0)))return null;try{return t.activeElement||t.body}catch(n){return t.body}}function W(t,n){var e=n.checked;return F({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=e?e:t._wrapperState.initialChecked})}function G(t,n){var e=null==n.defaultValue?"":n.defaultValue,o=null!=n.checked?n.checked:n.defaultChecked;e=M(null!=n.value?n.value:e),t._wrapperState={initialChecked:o,initialValue:e,controlled:"checkbox"===n.type||"radio"===n.type?null!=n.checked:null!=n.value}}function Q(t,n){null!=(n=n.checked)&&k(t,"checked",n,!1)}function J(t,n){Q(t,n);var e=M(n.value),o=n.type;if(null!=e)"number"===o?(0===e&&""===t.value||t.value!=e)&&(t.value=""+e):t.value!==""+e&&(t.value=""+e);else if("submit"===o||"reset"===o)return void t.removeAttribute("value");n.hasOwnProperty("value")?tt(t,n.type,e):n.hasOwnProperty("defaultValue")&&tt(t,n.type,M(n.defaultValue)),null==n.checked&&null!=n.defaultChecked&&(t.defaultChecked=!!n.defaultChecked)}function Z(t,n,e){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var o=n.type;if(!("submit"!==o&&"reset"!==o||void 0!==n.value&&null!==n.value))return;n=""+t._wrapperState.initialValue,e||n===t.value||(t.value=n),t.defaultValue=n}""!==(e=t.name)&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,""!==e&&(t.name=e)}function tt(t,n,e){"number"===n&&X(t.ownerDocument)===t||(null==e?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+e&&(t.defaultValue=""+e))}var nt=Array.isArray;function et(t,n,e,o){if(t=t.options,n){n={};for(var r=0;r<e.length;r++)n["$"+e[r]]=!0;for(e=0;e<t.length;e++)r=n.hasOwnProperty("$"+t[e].value),t[e].selected!==r&&(t[e].selected=r),r&&o&&(t[e].defaultSelected=!0)}else{for(e=""+M(e),n=null,r=0;r<t.length;r++){if(t[r].value===e)return t[r].selected=!0,void(o&&(t[r].defaultSelected=!0));null!==n||t[r].disabled||(n=t[r])}null!==n&&(n.selected=!0)}}function ot(t,n){if(null!=n.dangerouslySetInnerHTML)throw Error(a(91));return F({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rt(t,n){var e=n.value;if(null==e){if(e=n.children,n=n.defaultValue,null!=e){if(null!=n)throw Error(a(92));if(nt(e)){if(1<e.length)throw Error(a(93));e=e[0]}n=e}null==n&&(n=""),e=n}t._wrapperState={initialValue:M(e)}}function at(t,n){var e=M(n.value),o=M(n.defaultValue);null!=e&&((e=""+e)!==t.value&&(t.value=e),null==n.defaultValue&&t.defaultValue!==e&&(t.defaultValue=e)),null!=o&&(t.defaultValue=""+o)}function it(t){var n=t.textContent;n===t._wrapperState.initialValue&&""!==n&&null!==n&&(t.value=n)}function ft(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ct(t,n){return null==t||"http://www.w3.org/1999/xhtml"===t?ft(n):"http://www.w3.org/2000/svg"===t&&"foreignObject"===n?"http://www.w3.org/1999/xhtml":t}var lt,st,bt=(st=function(t,n){if("http://www.w3.org/2000/svg"!==t.namespaceURI||"innerHTML"in t)t.innerHTML=n;else{for((lt=lt||document.createElement("div")).innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=lt.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,e,o){MSApp.execUnsafeLocalFunction((function(){return st(t,n)}))}:st);function dt(t,n){if(n){var e=t.firstChild;if(e&&e===t.lastChild&&3===e.nodeType)return void(e.nodeValue=n)}t.textContent=n}var ut={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pt=["Webkit","ms","Moz","O"];function ht(t,n,e){return null==n||"boolean"==typeof n||""===n?"":e||"number"!=typeof n||0===n||ut.hasOwnProperty(t)&&ut[t]?(""+n).trim():n+"px"}function gt(t,n){for(var e in t=t.style,n)if(n.hasOwnProperty(e)){var o=0===e.indexOf("--"),r=ht(e,n[e],o);"float"===e&&(e="cssFloat"),o?t.setProperty(e,r):t[e]=r}}Object.keys(ut).forEach((function(t){pt.forEach((function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),ut[n]=ut[t]}))}));var mt=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vt(t,n){if(n){if(mt[t]&&(null!=n.children||null!=n.dangerouslySetInnerHTML))throw Error(a(137,t));if(null!=n.dangerouslySetInnerHTML){if(null!=n.children)throw Error(a(60));if("object"!=typeof n.dangerouslySetInnerHTML||!("__html"in n.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=n.style&&"object"!=typeof n.style)throw Error(a(62))}}function kt(t,n){if(-1===t.indexOf("-"))return"string"==typeof n.is;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wt=null;function yt(t){return(t=t.target||t.srcElement||window).correspondingUseElement&&(t=t.correspondingUseElement),3===t.nodeType?t.parentNode:t}var xt=null,_t=null,zt=null;function Lt(t){if(t=wr(t)){if("function"!=typeof xt)throw Error(a(280));var n=t.stateNode;n&&(n=xr(n),xt(t.stateNode,t.type,n))}}function St(t){_t?zt?zt.push(t):zt=[t]:_t=t}function Ot(){if(_t){var t=_t,n=zt;if(zt=_t=null,Lt(t),n)for(t=0;t<n.length;t++)Lt(n[t])}}function Tt(t,n){return t(n)}function Et(){}var $t=!1;function Nt(t,n,e){if($t)return t(n,e);$t=!0;try{return Tt(t,n,e)}finally{$t=!1,(null!==_t||null!==zt)&&(Et(),Ot())}}function At(t,n){var e=t.stateNode;if(null===e)return null;var o=xr(e);if(null===o)return null;e=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(o=!("button"===(t=t.type)||"input"===t||"select"===t||"textarea"===t)),t=!o;break t;default:t=!1}if(t)return null;if(e&&"function"!=typeof e)throw Error(a(231,n,typeof e));return e}var Ct=!1;if(s)try{var qt={};Object.defineProperty(qt,"passive",{get:function(){Ct=!0}}),window.addEventListener("test",qt,qt),window.removeEventListener("test",qt,qt)}catch(st){Ct=!1}function It(t,n,e,o,r,a,i,f,c){var l=Array.prototype.slice.call(arguments,3);try{n.apply(e,l)}catch(t){this.onError(t)}}var jt=!1,Ft=null,Pt=!1,Rt=null,Kt={onError:function(t){jt=!0,Ft=t}};function Ut(t,n,e,o,r,a,i,f,c){jt=!1,Ft=null,It.apply(Kt,arguments)}function Bt(t){var n=t,e=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do{0!=(4098&(n=t).flags)&&(e=n.return),t=n.return}while(t)}return 3===n.tag?e:null}function Dt(t){if(13===t.tag){var n=t.memoizedState;if(null===n&&null!==(t=t.alternate)&&(n=t.memoizedState),null!==n)return n.dehydrated}return null}function Mt(t){if(Bt(t)!==t)throw Error(a(188))}function Vt(t){return null!==(t=function(t){var n=t.alternate;if(!n){if(null===(n=Bt(t)))throw Error(a(188));return n!==t?null:t}for(var e=t,o=n;;){var r=e.return;if(null===r)break;var i=r.alternate;if(null===i){if(null!==(o=r.return)){e=o;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===e)return Mt(r),t;if(i===o)return Mt(r),n;i=i.sibling}throw Error(a(188))}if(e.return!==o.return)e=r,o=i;else{for(var f=!1,c=r.child;c;){if(c===e){f=!0,e=r,o=i;break}if(c===o){f=!0,o=r,e=i;break}c=c.sibling}if(!f){for(c=i.child;c;){if(c===e){f=!0,e=i,o=r;break}if(c===o){f=!0,o=i,e=r;break}c=c.sibling}if(!f)throw Error(a(189))}}if(e.alternate!==o)throw Error(a(190))}if(3!==e.tag)throw Error(a(188));return e.stateNode.current===e?t:n}(t))?Ht(t):null}function Ht(t){if(5===t.tag||6===t.tag)return t;for(t=t.child;null!==t;){var n=Ht(t);if(null!==n)return n;t=t.sibling}return null}var Yt=r.unstable_scheduleCallback,Xt=r.unstable_cancelCallback,Wt=r.unstable_shouldYield,Gt=r.unstable_requestPaint,Qt=r.unstable_now,Jt=r.unstable_getCurrentPriorityLevel,Zt=r.unstable_ImmediatePriority,tn=r.unstable_UserBlockingPriority,nn=r.unstable_NormalPriority,en=r.unstable_LowPriority,on=r.unstable_IdlePriority,rn=null,an=null,fn=Math.clz32?Math.clz32:function(t){return 0===(t>>>=0)?32:31-(cn(t)/ln|0)|0},cn=Math.log,ln=Math.LN2,sn=64,bn=4194304;function dn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&t;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&t;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function un(t,n){var e=t.pendingLanes;if(0===e)return 0;var o=0,r=t.suspendedLanes,a=t.pingedLanes,i=268435455&e;if(0!==i){var f=i&~r;0!==f?o=dn(f):0!=(a&=i)&&(o=dn(a))}else 0!=(i=e&~r)?o=dn(i):0!==a&&(o=dn(a));if(0===o)return 0;if(0!==n&&n!==o&&0==(n&r)&&((r=o&-o)>=(a=n&-n)||16===r&&0!=(4194240&a)))return n;if(0!=(4&o)&&(o|=16&e),0!==(n=t.entangledLanes))for(t=t.entanglements,n&=o;0<n;)r=1<<(e=31-fn(n)),o|=t[e],n&=~r;return o}function pn(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;default:return-1}}function hn(t){return 0!=(t=-1073741825&t.pendingLanes)?t:1073741824&t?1073741824:0}function gn(){var t=sn;return 0==(4194240&(sn<<=1))&&(sn=64),t}function mn(t){for(var n=[],e=0;31>e;e++)n.push(t);return n}function vn(t,n,e){t.pendingLanes|=n,536870912!==n&&(t.suspendedLanes=0,t.pingedLanes=0),(t=t.eventTimes)[n=31-fn(n)]=e}function kn(t,n){var e=t.entangledLanes|=n;for(t=t.entanglements;e;){var o=31-fn(e),r=1<<o;r&n|t[o]&n&&(t[o]|=n),e&=~r}}var wn=0;function yn(t){return 1<(t&=-t)?4<t?0!=(268435455&t)?16:536870912:4:1}var xn,_n,zn,Ln,Sn,On=!1,Tn=[],En=null,$n=null,Nn=null,An=new Map,Cn=new Map,qn=[],In="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jn(t,n){switch(t){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":An.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cn.delete(n.pointerId)}}function Fn(t,n,e,o,r,a){return null===t||t.nativeEvent!==a?(t={blockedOn:n,domEventName:e,eventSystemFlags:o,nativeEvent:a,targetContainers:[r]},null!==n&&null!==(n=wr(n))&&_n(n),t):(t.eventSystemFlags|=o,n=t.targetContainers,null!==r&&-1===n.indexOf(r)&&n.push(r),t)}function Pn(t){var n=kr(t.target);if(null!==n){var e=Bt(n);if(null!==e)if(13===(n=e.tag)){if(null!==(n=Dt(e)))return t.blockedOn=n,void Sn(t.priority,(function(){zn(e)}))}else if(3===n&&e.stateNode.current.memoizedState.isDehydrated)return void(t.blockedOn=3===e.tag?e.stateNode.containerInfo:null)}t.blockedOn=null}function Rn(t){if(null!==t.blockedOn)return!1;for(var n=t.targetContainers;0<n.length;){var e=Gn(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(null!==e)return null!==(n=wr(e))&&_n(n),t.blockedOn=e,!1;var o=new(e=t.nativeEvent).constructor(e.type,e);wt=o,e.target.dispatchEvent(o),wt=null,n.shift()}return!0}function Kn(t,n,e){Rn(t)&&e.delete(n)}function Un(){On=!1,null!==En&&Rn(En)&&(En=null),null!==$n&&Rn($n)&&($n=null),null!==Nn&&Rn(Nn)&&(Nn=null),An.forEach(Kn),Cn.forEach(Kn)}function Bn(t,n){t.blockedOn===n&&(t.blockedOn=null,On||(On=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Un)))}function Dn(t){function n(n){return Bn(n,t)}if(0<Tn.length){Bn(Tn[0],t);for(var e=1;e<Tn.length;e++){var o=Tn[e];o.blockedOn===t&&(o.blockedOn=null)}}for(null!==En&&Bn(En,t),null!==$n&&Bn($n,t),null!==Nn&&Bn(Nn,t),An.forEach(n),Cn.forEach(n),e=0;e<qn.length;e++)(o=qn[e]).blockedOn===t&&(o.blockedOn=null);for(;0<qn.length&&null===(e=qn[0]).blockedOn;)Pn(e),null===e.blockedOn&&qn.shift()}var Mn=w.ReactCurrentBatchConfig,Vn=!0;function Hn(t,n,e,o){var r=wn,a=Mn.transition;Mn.transition=null;try{wn=1,Xn(t,n,e,o)}finally{wn=r,Mn.transition=a}}function Yn(t,n,e,o){var r=wn,a=Mn.transition;Mn.transition=null;try{wn=4,Xn(t,n,e,o)}finally{wn=r,Mn.transition=a}}function Xn(t,n,e,o){if(Vn){var r=Gn(t,n,e,o);if(null===r)Vo(t,n,o,Wn,e),jn(t,o);else if(function(t,n,e,o,r){switch(n){case"focusin":return En=Fn(En,t,n,e,o,r),!0;case"dragenter":return $n=Fn($n,t,n,e,o,r),!0;case"mouseover":return Nn=Fn(Nn,t,n,e,o,r),!0;case"pointerover":var a=r.pointerId;return An.set(a,Fn(An.get(a)||null,t,n,e,o,r)),!0;case"gotpointercapture":return a=r.pointerId,Cn.set(a,Fn(Cn.get(a)||null,t,n,e,o,r)),!0}return!1}(r,t,n,e,o))o.stopPropagation();else if(jn(t,o),4&n&&-1<In.indexOf(t)){for(;null!==r;){var a=wr(r);if(null!==a&&xn(a),null===(a=Gn(t,n,e,o))&&Vo(t,n,o,Wn,e),a===r)break;r=a}null!==r&&o.stopPropagation()}else Vo(t,n,o,null,e)}}var Wn=null;function Gn(t,n,e,o){if(Wn=null,null!==(t=kr(t=yt(o))))if(null===(n=Bt(t)))t=null;else if(13===(e=n.tag)){if(null!==(t=Dt(n)))return t;t=null}else if(3===e){if(n.stateNode.current.memoizedState.isDehydrated)return 3===n.tag?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return Wn=t,null}function Qn(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jt()){case Zt:return 1;case tn:return 4;case nn:case en:return 16;case on:return 536870912;default:return 16}default:return 16}}var Jn=null,Zn=null,te=null;function ne(){if(te)return te;var t,n,e=Zn,o=e.length,r="value"in Jn?Jn.value:Jn.textContent,a=r.length;for(t=0;t<o&&e[t]===r[t];t++);var i=o-t;for(n=1;n<=i&&e[o-n]===r[a-n];n++);return te=r.slice(t,1<n?1-n:void 0)}function ee(t){var n=t.keyCode;return"charCode"in t?0===(t=t.charCode)&&13===n&&(t=13):t=n,10===t&&(t=13),32<=t||13===t?t:0}function oe(){return!0}function re(){return!1}function ae(t){function n(n,e,o,r,a){for(var i in this._reactName=n,this._targetInst=o,this.type=e,this.nativeEvent=r,this.target=a,this.currentTarget=null,t)t.hasOwnProperty(i)&&(n=t[i],this[i]=n?n(r):r[i]);return this.isDefaultPrevented=(null!=r.defaultPrevented?r.defaultPrevented:!1===r.returnValue)?oe:re,this.isPropagationStopped=re,this}return F(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():"unknown"!=typeof t.returnValue&&(t.returnValue=!1),this.isDefaultPrevented=oe)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():"unknown"!=typeof t.cancelBubble&&(t.cancelBubble=!0),this.isPropagationStopped=oe)},persist:function(){},isPersistent:oe}),n}var ie,fe,ce,le={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},se=ae(le),be=F({},le,{view:0,detail:0}),de=ae(be),ue=F({},be,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Le,button:0,buttons:0,relatedTarget:function(t){return void 0===t.relatedTarget?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ce&&(ce&&"mousemove"===t.type?(ie=t.screenX-ce.screenX,fe=t.screenY-ce.screenY):fe=ie=0,ce=t),ie)},movementY:function(t){return"movementY"in t?t.movementY:fe}}),pe=ae(ue),he=ae(F({},ue,{dataTransfer:0})),ge=ae(F({},be,{relatedTarget:0})),me=ae(F({},le,{animationName:0,elapsedTime:0,pseudoElement:0})),ve=F({},le,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ke=ae(ve),we=ae(F({},le,{data:0})),ye={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xe={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_e={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ze(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):!!(t=_e[t])&&!!n[t]}function Le(){return ze}var Se=F({},be,{key:function(t){if(t.key){var n=ye[t.key]||t.key;if("Unidentified"!==n)return n}return"keypress"===t.type?13===(t=ee(t))?"Enter":String.fromCharCode(t):"keydown"===t.type||"keyup"===t.type?xe[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Le,charCode:function(t){return"keypress"===t.type?ee(t):0},keyCode:function(t){return"keydown"===t.type||"keyup"===t.type?t.keyCode:0},which:function(t){return"keypress"===t.type?ee(t):"keydown"===t.type||"keyup"===t.type?t.keyCode:0}}),Oe=ae(Se),Te=ae(F({},ue,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Ee=ae(F({},be,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Le})),$e=ae(F({},le,{propertyName:0,elapsedTime:0,pseudoElement:0})),Ne=F({},ue,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ae=ae(Ne),Ce=[9,13,27,32],qe=s&&"CompositionEvent"in window,Ie=null;s&&"documentMode"in document&&(Ie=document.documentMode);var je=s&&"TextEvent"in window&&!Ie,Fe=s&&(!qe||Ie&&8<Ie&&11>=Ie),Pe=String.fromCharCode(32),Re=!1;function Ke(t,n){switch(t){case"keyup":return-1!==Ce.indexOf(n.keyCode);case"keydown":return 229!==n.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ue(t){return"object"==typeof(t=t.detail)&&"data"in t?t.data:null}var Be=!1,De={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Me(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return"input"===n?!!De[t.type]:"textarea"===n}function Ve(t,n,e,o){St(o),0<(n=Yo(n,"onChange")).length&&(e=new se("onChange","change",null,e,o),t.push({event:e,listeners:n}))}var He=null,Ye=null;function Xe(t){Ro(t,0)}function We(t){if(Y(yr(t)))return t}function Ge(t,n){if("change"===t)return n}var Qe=!1;if(s){var Je;if(s){var Ze="oninput"in document;if(!Ze){var to=document.createElement("div");to.setAttribute("oninput","return;"),Ze="function"==typeof to.oninput}Je=Ze}else Je=!1;Qe=Je&&(!document.documentMode||9<document.documentMode)}function no(){He&&(He.detachEvent("onpropertychange",eo),Ye=He=null)}function eo(t){if("value"===t.propertyName&&We(Ye)){var n=[];Ve(n,Ye,t,yt(t)),Nt(Xe,n)}}function oo(t,n,e){"focusin"===t?(no(),Ye=e,(He=n).attachEvent("onpropertychange",eo)):"focusout"===t&&no()}function ro(t){if("selectionchange"===t||"keyup"===t||"keydown"===t)return We(Ye)}function ao(t,n){if("click"===t)return We(n)}function io(t,n){if("input"===t||"change"===t)return We(n)}var fo="function"==typeof Object.is?Object.is:function(t,n){return t===n&&(0!==t||1/t==1/n)||t!=t&&n!=n};function co(t,n){if(fo(t,n))return!0;if("object"!=typeof t||null===t||"object"!=typeof n||null===n)return!1;var e=Object.keys(t),o=Object.keys(n);if(e.length!==o.length)return!1;for(o=0;o<e.length;o++){var r=e[o];if(!b.call(n,r)||!fo(t[r],n[r]))return!1}return!0}function lo(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function so(t,n){var e,o=lo(t);for(t=0;o;){if(3===o.nodeType){if(e=t+o.textContent.length,t<=n&&e>=n)return{node:o,offset:n-t};t=e}t:{for(;o;){if(o.nextSibling){o=o.nextSibling;break t}o=o.parentNode}o=void 0}o=lo(o)}}function bo(t,n){return!(!t||!n)&&(t===n||(!t||3!==t.nodeType)&&(n&&3===n.nodeType?bo(t,n.parentNode):"contains"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))}function uo(){for(var t=window,n=X();n instanceof t.HTMLIFrameElement;){try{var e="string"==typeof n.contentWindow.location.href}catch(t){e=!1}if(!e)break;n=X((t=n.contentWindow).document)}return n}function po(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&("input"===n&&("text"===t.type||"search"===t.type||"tel"===t.type||"url"===t.type||"password"===t.type)||"textarea"===n||"true"===t.contentEditable)}function ho(t){var n=uo(),e=t.focusedElem,o=t.selectionRange;if(n!==e&&e&&e.ownerDocument&&bo(e.ownerDocument.documentElement,e)){if(null!==o&&po(e))if(n=o.start,void 0===(t=o.end)&&(t=n),"selectionStart"in e)e.selectionStart=n,e.selectionEnd=Math.min(t,e.value.length);else if((t=(n=e.ownerDocument||document)&&n.defaultView||window).getSelection){t=t.getSelection();var r=e.textContent.length,a=Math.min(o.start,r);o=void 0===o.end?a:Math.min(o.end,r),!t.extend&&a>o&&(r=o,o=a,a=r),r=so(e,a);var i=so(e,o);r&&i&&(1!==t.rangeCount||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==i.node||t.focusOffset!==i.offset)&&((n=n.createRange()).setStart(r.node,r.offset),t.removeAllRanges(),a>o?(t.addRange(n),t.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),t.addRange(n)))}for(n=[],t=e;t=t.parentNode;)1===t.nodeType&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for("function"==typeof e.focus&&e.focus(),e=0;e<n.length;e++)(t=n[e]).element.scrollLeft=t.left,t.element.scrollTop=t.top}}var go=s&&"documentMode"in document&&11>=document.documentMode,mo=null,vo=null,ko=null,wo=!1;function yo(t,n,e){var o=e.window===e?e.document:9===e.nodeType?e:e.ownerDocument;wo||null==mo||mo!==X(o)||(o="selectionStart"in(o=mo)&&po(o)?{start:o.selectionStart,end:o.selectionEnd}:{anchorNode:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset},ko&&co(ko,o)||(ko=o,0<(o=Yo(vo,"onSelect")).length&&(n=new se("onSelect","select",null,n,e),t.push({event:n,listeners:o}),n.target=mo)))}function xo(t,n){var e={};return e[t.toLowerCase()]=n.toLowerCase(),e["Webkit"+t]="webkit"+n,e["Moz"+t]="moz"+n,e}var _o={animationend:xo("Animation","AnimationEnd"),animationiteration:xo("Animation","AnimationIteration"),animationstart:xo("Animation","AnimationStart"),transitionend:xo("Transition","TransitionEnd")},zo={},Lo={};function So(t){if(zo[t])return zo[t];if(!_o[t])return t;var n,e=_o[t];for(n in e)if(e.hasOwnProperty(n)&&n in Lo)return zo[t]=e[n];return t}s&&(Lo=document.createElement("div").style,"AnimationEvent"in window||(delete _o.animationend.animation,delete _o.animationiteration.animation,delete _o.animationstart.animation),"TransitionEvent"in window||delete _o.transitionend.transition);var Oo=So("animationend"),To=So("animationiteration"),Eo=So("animationstart"),$o=So("transitionend"),No=new Map,Ao="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Co(t,n){No.set(t,n),c(n,[t])}for(var qo=0;qo<Ao.length;qo++){var Io=Ao[qo];Co(Io.toLowerCase(),"on"+(Io[0].toUpperCase()+Io.slice(1)))}Co(Oo,"onAnimationEnd"),Co(To,"onAnimationIteration"),Co(Eo,"onAnimationStart"),Co("dblclick","onDoubleClick"),Co("focusin","onFocus"),Co("focusout","onBlur"),Co($o,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fo=new Set("cancel close invalid load scroll toggle".split(" ").concat(jo));function Po(t,n,e){var o=t.type||"unknown-event";t.currentTarget=e,function(t,n,e,o,r,i,f,c,l){if(Ut.apply(this,arguments),jt){if(!jt)throw Error(a(198));var s=Ft;jt=!1,Ft=null,Pt||(Pt=!0,Rt=s)}}(o,n,void 0,t),t.currentTarget=null}function Ro(t,n){n=0!=(4&n);for(var e=0;e<t.length;e++){var o=t[e],r=o.event;o=o.listeners;t:{var a=void 0;if(n)for(var i=o.length-1;0<=i;i--){var f=o[i],c=f.instance,l=f.currentTarget;if(f=f.listener,c!==a&&r.isPropagationStopped())break t;Po(r,f,l),a=c}else for(i=0;i<o.length;i++){if(c=(f=o[i]).instance,l=f.currentTarget,f=f.listener,c!==a&&r.isPropagationStopped())break t;Po(r,f,l),a=c}}}if(Pt)throw t=Rt,Pt=!1,Rt=null,t}function Ko(t,n){var e=n[gr];void 0===e&&(e=n[gr]=new Set);var o=t+"__bubble";e.has(o)||(Mo(n,t,2,!1),e.add(o))}function Uo(t,n,e){var o=0;n&&(o|=4),Mo(e,t,o,n)}var Bo="_reactListening"+Math.random().toString(36).slice(2);function Do(t){if(!t[Bo]){t[Bo]=!0,i.forEach((function(n){"selectionchange"!==n&&(Fo.has(n)||Uo(n,!1,t),Uo(n,!0,t))}));var n=9===t.nodeType?t:t.ownerDocument;null===n||n[Bo]||(n[Bo]=!0,Uo("selectionchange",!1,n))}}function Mo(t,n,e,o){switch(Qn(n)){case 1:var r=Hn;break;case 4:r=Yn;break;default:r=Xn}e=r.bind(null,n,e,t),r=void 0,!Ct||"touchstart"!==n&&"touchmove"!==n&&"wheel"!==n||(r=!0),o?void 0!==r?t.addEventListener(n,e,{capture:!0,passive:r}):t.addEventListener(n,e,!0):void 0!==r?t.addEventListener(n,e,{passive:r}):t.addEventListener(n,e,!1)}function Vo(t,n,e,o,r){var a=o;if(0==(1&n)&&0==(2&n)&&null!==o)t:for(;;){if(null===o)return;var i=o.tag;if(3===i||4===i){var f=o.stateNode.containerInfo;if(f===r||8===f.nodeType&&f.parentNode===r)break;if(4===i)for(i=o.return;null!==i;){var c=i.tag;if((3===c||4===c)&&((c=i.stateNode.containerInfo)===r||8===c.nodeType&&c.parentNode===r))return;i=i.return}for(;null!==f;){if(null===(i=kr(f)))return;if(5===(c=i.tag)||6===c){o=a=i;continue t}f=f.parentNode}}o=o.return}Nt((function(){var o=a,r=yt(e),i=[];t:{var f=No.get(t);if(void 0!==f){var c=se,l=t;switch(t){case"keypress":if(0===ee(e))break t;case"keydown":case"keyup":c=Oe;break;case"focusin":l="focus",c=ge;break;case"focusout":l="blur",c=ge;break;case"beforeblur":case"afterblur":c=ge;break;case"click":if(2===e.button)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=pe;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=he;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=Ee;break;case Oo:case To:case Eo:c=me;break;case $o:c=$e;break;case"scroll":c=de;break;case"wheel":c=Ae;break;case"copy":case"cut":case"paste":c=ke;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=Te}var s=0!=(4&n),b=!s&&"scroll"===t,d=s?null!==f?f+"Capture":null:f;s=[];for(var u,p=o;null!==p;){var h=(u=p).stateNode;if(5===u.tag&&null!==h&&(u=h,null!==d&&null!=(h=At(p,d))&&s.push(Ho(p,h,u))),b)break;p=p.return}0<s.length&&(f=new c(f,l,null,e,r),i.push({event:f,listeners:s}))}}if(0==(7&n)){if(c="mouseout"===t||"pointerout"===t,(!(f="mouseover"===t||"pointerover"===t)||e===wt||!(l=e.relatedTarget||e.fromElement)||!kr(l)&&!l[hr])&&(c||f)&&(f=r.window===r?r:(f=r.ownerDocument)?f.defaultView||f.parentWindow:window,c?(c=o,null!==(l=(l=e.relatedTarget||e.toElement)?kr(l):null)&&(l!==(b=Bt(l))||5!==l.tag&&6!==l.tag)&&(l=null)):(c=null,l=o),c!==l)){if(s=pe,h="onMouseLeave",d="onMouseEnter",p="mouse","pointerout"!==t&&"pointerover"!==t||(s=Te,h="onPointerLeave",d="onPointerEnter",p="pointer"),b=null==c?f:yr(c),u=null==l?f:yr(l),(f=new s(h,p+"leave",c,e,r)).target=b,f.relatedTarget=u,h=null,kr(r)===o&&((s=new s(d,p+"enter",l,e,r)).target=u,s.relatedTarget=b,h=s),b=h,c&&l)t:{for(d=l,p=0,u=s=c;u;u=Xo(u))p++;for(u=0,h=d;h;h=Xo(h))u++;for(;0<p-u;)s=Xo(s),p--;for(;0<u-p;)d=Xo(d),u--;for(;p--;){if(s===d||null!==d&&s===d.alternate)break t;s=Xo(s),d=Xo(d)}s=null}else s=null;null!==c&&Wo(i,f,c,s,!1),null!==l&&null!==b&&Wo(i,b,l,s,!0)}if("select"===(c=(f=o?yr(o):window).nodeName&&f.nodeName.toLowerCase())||"input"===c&&"file"===f.type)var g=Ge;else if(Me(f))if(Qe)g=io;else{g=ro;var m=oo}else(c=f.nodeName)&&"input"===c.toLowerCase()&&("checkbox"===f.type||"radio"===f.type)&&(g=ao);switch(g&&(g=g(t,o))?Ve(i,g,e,r):(m&&m(t,f,o),"focusout"===t&&(m=f._wrapperState)&&m.controlled&&"number"===f.type&&tt(f,"number",f.value)),m=o?yr(o):window,t){case"focusin":(Me(m)||"true"===m.contentEditable)&&(mo=m,vo=o,ko=null);break;case"focusout":ko=vo=mo=null;break;case"mousedown":wo=!0;break;case"contextmenu":case"mouseup":case"dragend":wo=!1,yo(i,e,r);break;case"selectionchange":if(go)break;case"keydown":case"keyup":yo(i,e,r)}var v;if(qe)t:{switch(t){case"compositionstart":var k="onCompositionStart";break t;case"compositionend":k="onCompositionEnd";break t;case"compositionupdate":k="onCompositionUpdate";break t}k=void 0}else Be?Ke(t,e)&&(k="onCompositionEnd"):"keydown"===t&&229===e.keyCode&&(k="onCompositionStart");k&&(Fe&&"ko"!==e.locale&&(Be||"onCompositionStart"!==k?"onCompositionEnd"===k&&Be&&(v=ne()):(Zn="value"in(Jn=r)?Jn.value:Jn.textContent,Be=!0)),0<(m=Yo(o,k)).length&&(k=new we(k,t,null,e,r),i.push({event:k,listeners:m}),(v||null!==(v=Ue(e)))&&(k.data=v))),(v=je?function(t,n){switch(t){case"compositionend":return Ue(n);case"keypress":return 32!==n.which?null:(Re=!0,Pe);case"textInput":return(t=n.data)===Pe&&Re?null:t;default:return null}}(t,e):function(t,n){if(Be)return"compositionend"===t||!qe&&Ke(t,n)?(t=ne(),te=Zn=Jn=null,Be=!1,t):null;switch(t){case"paste":default:return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Fe&&"ko"!==n.locale?null:n.data}}(t,e))&&0<(o=Yo(o,"onBeforeInput")).length&&(r=new we("onBeforeInput","beforeinput",null,e,r),i.push({event:r,listeners:o}),r.data=v)}Ro(i,n)}))}function Ho(t,n,e){return{instance:t,listener:n,currentTarget:e}}function Yo(t,n){for(var e=n+"Capture",o=[];null!==t;){var r=t,a=r.stateNode;5===r.tag&&null!==a&&(r=a,null!=(a=At(t,e))&&o.unshift(Ho(t,a,r)),null!=(a=At(t,n))&&o.push(Ho(t,a,r))),t=t.return}return o}function Xo(t){if(null===t)return null;do{t=t.return}while(t&&5!==t.tag);return t||null}function Wo(t,n,e,o,r){for(var a=n._reactName,i=[];null!==e&&e!==o;){var f=e,c=f.alternate,l=f.stateNode;if(null!==c&&c===o)break;5===f.tag&&null!==l&&(f=l,r?null!=(c=At(e,a))&&i.unshift(Ho(e,c,f)):r||null!=(c=At(e,a))&&i.push(Ho(e,c,f))),e=e.return}0!==i.length&&t.push({event:n,listeners:i})}var Go=/\r\n?/g,Qo=/\u0000|\uFFFD/g;function Jo(t){return("string"==typeof t?t:""+t).replace(Go,"\n").replace(Qo,"")}function Zo(t,n,e){if(n=Jo(n),Jo(t)!==n&&e)throw Error(a(425))}function tr(){}var nr=null,er=null;function or(t,n){return"textarea"===t||"noscript"===t||"string"==typeof n.children||"number"==typeof n.children||"object"==typeof n.dangerouslySetInnerHTML&&null!==n.dangerouslySetInnerHTML&&null!=n.dangerouslySetInnerHTML.__html}var rr="function"==typeof setTimeout?setTimeout:void 0,ar="function"==typeof clearTimeout?clearTimeout:void 0,ir="function"==typeof Promise?Promise:void 0,fr="function"==typeof queueMicrotask?queueMicrotask:void 0!==ir?function(t){return ir.resolve(null).then(t).catch(cr)}:rr;function cr(t){setTimeout((function(){throw t}))}function lr(t,n){var e=n,o=0;do{var r=e.nextSibling;if(t.removeChild(e),r&&8===r.nodeType)if("/$"===(e=r.data)){if(0===o)return t.removeChild(r),void Dn(n);o--}else"$"!==e&&"$?"!==e&&"$!"!==e||o++;e=r}while(e);Dn(n)}function sr(t){for(;null!=t;t=t.nextSibling){var n=t.nodeType;if(1===n||3===n)break;if(8===n){if("$"===(n=t.data)||"$!"===n||"$?"===n)break;if("/$"===n)return null}}return t}function br(t){t=t.previousSibling;for(var n=0;t;){if(8===t.nodeType){var e=t.data;if("$"===e||"$!"===e||"$?"===e){if(0===n)return t;n--}else"/$"===e&&n++}t=t.previousSibling}return null}var dr=Math.random().toString(36).slice(2),ur="__reactFiber$"+dr,pr="__reactProps$"+dr,hr="__reactContainer$"+dr,gr="__reactEvents$"+dr,mr="__reactListeners$"+dr,vr="__reactHandles$"+dr;function kr(t){var n=t[ur];if(n)return n;for(var e=t.parentNode;e;){if(n=e[hr]||e[ur]){if(e=n.alternate,null!==n.child||null!==e&&null!==e.child)for(t=br(t);null!==t;){if(e=t[ur])return e;t=br(t)}return n}e=(t=e).parentNode}return null}function wr(t){return!(t=t[ur]||t[hr])||5!==t.tag&&6!==t.tag&&13!==t.tag&&3!==t.tag?null:t}function yr(t){if(5===t.tag||6===t.tag)return t.stateNode;throw Error(a(33))}function xr(t){return t[pr]||null}var _r=[],zr=-1;function Lr(t){return{current:t}}function Sr(t){0>zr||(t.current=_r[zr],_r[zr]=null,zr--)}function Or(t,n){zr++,_r[zr]=t.current,t.current=n}var Tr={},Er=Lr(Tr),$r=Lr(!1),Nr=Tr;function Ar(t,n){var e=t.type.contextTypes;if(!e)return Tr;var o=t.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===n)return o.__reactInternalMemoizedMaskedChildContext;var r,a={};for(r in e)a[r]=n[r];return o&&((t=t.stateNode).__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=a),a}function Cr(t){return null!=t.childContextTypes}function qr(){Sr($r),Sr(Er)}function Ir(t,n,e){if(Er.current!==Tr)throw Error(a(168));Or(Er,n),Or($r,e)}function jr(t,n,e){var o=t.stateNode;if(n=n.childContextTypes,"function"!=typeof o.getChildContext)return e;for(var r in o=o.getChildContext())if(!(r in n))throw Error(a(108,D(t)||"Unknown",r));return F({},e,o)}function Fr(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,Nr=Er.current,Or(Er,t),Or($r,$r.current),!0}function Pr(t,n,e){var o=t.stateNode;if(!o)throw Error(a(169));e?(t=jr(t,n,Nr),o.__reactInternalMemoizedMergedChildContext=t,Sr($r),Sr(Er),Or(Er,t)):Sr($r),Or($r,e)}var Rr=null,Kr=!1,Ur=!1;function Br(t){null===Rr?Rr=[t]:Rr.push(t)}function Dr(){if(!Ur&&null!==Rr){Ur=!0;var t=0,n=wn;try{var e=Rr;for(wn=1;t<e.length;t++){var o=e[t];do{o=o(!0)}while(null!==o)}Rr=null,Kr=!1}catch(n){throw null!==Rr&&(Rr=Rr.slice(t+1)),Yt(Zt,Dr),n}finally{wn=n,Ur=!1}}return null}var Mr=[],Vr=0,Hr=null,Yr=0,Xr=[],Wr=0,Gr=null,Qr=1,Jr="";function Zr(t,n){Mr[Vr++]=Yr,Mr[Vr++]=Hr,Hr=t,Yr=n}function ta(t,n,e){Xr[Wr++]=Qr,Xr[Wr++]=Jr,Xr[Wr++]=Gr,Gr=t;var o=Qr;t=Jr;var r=32-fn(o)-1;o&=~(1<<r),e+=1;var a=32-fn(n)+r;if(30<a){var i=r-r%5;a=(o&(1<<i)-1).toString(32),o>>=i,r-=i,Qr=1<<32-fn(n)+r|e<<r|o,Jr=a+t}else Qr=1<<a|e<<r|o,Jr=t}function na(t){null!==t.return&&(Zr(t,1),ta(t,1,0))}function ea(t){for(;t===Hr;)Hr=Mr[--Vr],Mr[Vr]=null,Yr=Mr[--Vr],Mr[Vr]=null;for(;t===Gr;)Gr=Xr[--Wr],Xr[Wr]=null,Jr=Xr[--Wr],Xr[Wr]=null,Qr=Xr[--Wr],Xr[Wr]=null}var oa=null,ra=null,aa=!1,ia=null;function fa(t,n){var e=Cl(5,null,null,0);e.elementType="DELETED",e.stateNode=n,e.return=t,null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)}function ca(t,n){switch(t.tag){case 5:var e=t.type;return null!==(n=1!==n.nodeType||e.toLowerCase()!==n.nodeName.toLowerCase()?null:n)&&(t.stateNode=n,oa=t,ra=sr(n.firstChild),!0);case 6:return null!==(n=""===t.pendingProps||3!==n.nodeType?null:n)&&(t.stateNode=n,oa=t,ra=null,!0);case 13:return null!==(n=8!==n.nodeType?null:n)&&(e=null!==Gr?{id:Qr,overflow:Jr}:null,t.memoizedState={dehydrated:n,treeContext:e,retryLane:1073741824},(e=Cl(18,null,null,0)).stateNode=n,e.return=t,t.child=e,oa=t,ra=null,!0);default:return!1}}function la(t){return 0!=(1&t.mode)&&0==(128&t.flags)}function sa(t){if(aa){var n=ra;if(n){var e=n;if(!ca(t,n)){if(la(t))throw Error(a(418));n=sr(e.nextSibling);var o=oa;n&&ca(t,n)?fa(o,e):(t.flags=-4097&t.flags|2,aa=!1,oa=t)}}else{if(la(t))throw Error(a(418));t.flags=-4097&t.flags|2,aa=!1,oa=t}}}function ba(t){for(t=t.return;null!==t&&5!==t.tag&&3!==t.tag&&13!==t.tag;)t=t.return;oa=t}function da(t){if(t!==oa)return!1;if(!aa)return ba(t),aa=!0,!1;var n;if((n=3!==t.tag)&&!(n=5!==t.tag)&&(n="head"!==(n=t.type)&&"body"!==n&&!or(t.type,t.memoizedProps)),n&&(n=ra)){if(la(t))throw ua(),Error(a(418));for(;n;)fa(t,n),n=sr(n.nextSibling)}if(ba(t),13===t.tag){if(!(t=null!==(t=t.memoizedState)?t.dehydrated:null))throw Error(a(317));t:{for(t=t.nextSibling,n=0;t;){if(8===t.nodeType){var e=t.data;if("/$"===e){if(0===n){ra=sr(t.nextSibling);break t}n--}else"$"!==e&&"$!"!==e&&"$?"!==e||n++}t=t.nextSibling}ra=null}}else ra=oa?sr(t.stateNode.nextSibling):null;return!0}function ua(){for(var t=ra;t;)t=sr(t.nextSibling)}function pa(){ra=oa=null,aa=!1}function ha(t){null===ia?ia=[t]:ia.push(t)}var ga=w.ReactCurrentBatchConfig;function ma(t,n){if(t&&t.defaultProps){for(var e in n=F({},n),t=t.defaultProps)void 0===n[e]&&(n[e]=t[e]);return n}return n}var va=Lr(null),ka=null,wa=null,ya=null;function xa(){ya=wa=ka=null}function _a(t){var n=va.current;Sr(va),t._currentValue=n}function za(t,n,e){for(;null!==t;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,null!==o&&(o.childLanes|=n)):null!==o&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===e)break;t=t.return}}function La(t,n){ka=t,ya=wa=null,null!==(t=t.dependencies)&&null!==t.firstContext&&(0!=(t.lanes&n)&&(yf=!0),t.firstContext=null)}function Sa(t){var n=t._currentValue;if(ya!==t)if(t={context:t,memoizedValue:n,next:null},null===wa){if(null===ka)throw Error(a(308));wa=t,ka.dependencies={lanes:0,firstContext:t}}else wa=wa.next=t;return n}var Oa=null;function Ta(t){null===Oa?Oa=[t]:Oa.push(t)}function Ea(t,n,e,o){var r=n.interleaved;return null===r?(e.next=e,Ta(n)):(e.next=r.next,r.next=e),n.interleaved=e,$a(t,o)}function $a(t,n){t.lanes|=n;var e=t.alternate;for(null!==e&&(e.lanes|=n),e=t,t=t.return;null!==t;)t.childLanes|=n,null!==(e=t.alternate)&&(e.childLanes|=n),e=t,t=t.return;return 3===e.tag?e.stateNode:null}var Na=!1;function Aa(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ca(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function qa(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function Ia(t,n,e){var o=t.updateQueue;if(null===o)return null;if(o=o.shared,0!=(2&$c)){var r=o.pending;return null===r?n.next=n:(n.next=r.next,r.next=n),o.pending=n,$a(t,e)}return null===(r=o.interleaved)?(n.next=n,Ta(o)):(n.next=r.next,r.next=n),o.interleaved=n,$a(t,e)}function ja(t,n,e){if(null!==(n=n.updateQueue)&&(n=n.shared,0!=(4194240&e))){var o=n.lanes;e|=o&=t.pendingLanes,n.lanes=e,kn(t,e)}}function Fa(t,n){var e=t.updateQueue,o=t.alternate;if(null!==o&&e===(o=o.updateQueue)){var r=null,a=null;if(null!==(e=e.firstBaseUpdate)){do{var i={eventTime:e.eventTime,lane:e.lane,tag:e.tag,payload:e.payload,callback:e.callback,next:null};null===a?r=a=i:a=a.next=i,e=e.next}while(null!==e);null===a?r=a=n:a=a.next=n}else r=a=n;return e={baseState:o.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:o.shared,effects:o.effects},void(t.updateQueue=e)}null===(t=e.lastBaseUpdate)?e.firstBaseUpdate=n:t.next=n,e.lastBaseUpdate=n}function Pa(t,n,e,o){var r=t.updateQueue;Na=!1;var a=r.firstBaseUpdate,i=r.lastBaseUpdate,f=r.shared.pending;if(null!==f){r.shared.pending=null;var c=f,l=c.next;c.next=null,null===i?a=l:i.next=l,i=c;var s=t.alternate;null!==s&&(f=(s=s.updateQueue).lastBaseUpdate)!==i&&(null===f?s.firstBaseUpdate=l:f.next=l,s.lastBaseUpdate=c)}if(null!==a){var b=r.baseState;for(i=0,s=l=c=null,f=a;;){var d=f.lane,u=f.eventTime;if((o&d)===d){null!==s&&(s=s.next={eventTime:u,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});t:{var p=t,h=f;switch(d=n,u=e,h.tag){case 1:if("function"==typeof(p=h.payload)){b=p.call(u,b,d);break t}b=p;break t;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(d="function"==typeof(p=h.payload)?p.call(u,b,d):p))break t;b=F({},b,d);break t;case 2:Na=!0}}null!==f.callback&&0!==f.lane&&(t.flags|=64,null===(d=r.effects)?r.effects=[f]:d.push(f))}else u={eventTime:u,lane:d,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===s?(l=s=u,c=b):s=s.next=u,i|=d;if(null===(f=f.next)){if(null===(f=r.shared.pending))break;f=(d=f).next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}if(null===s&&(c=b),r.baseState=c,r.firstBaseUpdate=l,r.lastBaseUpdate=s,null!==(n=r.shared.interleaved)){r=n;do{i|=r.lane,r=r.next}while(r!==n)}else null===a&&(r.shared.lanes=0);Pc|=i,t.lanes=i,t.memoizedState=b}}function Ra(t,n,e){if(t=n.effects,n.effects=null,null!==t)for(n=0;n<t.length;n++){var o=t[n],r=o.callback;if(null!==r){if(o.callback=null,o=e,"function"!=typeof r)throw Error(a(191,r));r.call(o)}}}var Ka=(new o.Component).refs;function Ua(t,n,e,o){e=null==(e=e(o,n=t.memoizedState))?n:F({},n,e),t.memoizedState=e,0===t.lanes&&(t.updateQueue.baseState=e)}var Ba={isMounted:function(t){return!!(t=t._reactInternals)&&Bt(t)===t},enqueueSetState:function(t,n,e){t=t._reactInternals;var o=el(),r=ol(t),a=qa(o,r);a.payload=n,null!=e&&(a.callback=e),null!==(n=Ia(t,a,r))&&(rl(n,t,r,o),ja(n,t,r))},enqueueReplaceState:function(t,n,e){t=t._reactInternals;var o=el(),r=ol(t),a=qa(o,r);a.tag=1,a.payload=n,null!=e&&(a.callback=e),null!==(n=Ia(t,a,r))&&(rl(n,t,r,o),ja(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var e=el(),o=ol(t),r=qa(e,o);r.tag=2,null!=n&&(r.callback=n),null!==(n=Ia(t,r,o))&&(rl(n,t,o,e),ja(n,t,o))}};function Da(t,n,e,o,r,a,i){return"function"==typeof(t=t.stateNode).shouldComponentUpdate?t.shouldComponentUpdate(o,a,i):!(n.prototype&&n.prototype.isPureReactComponent&&co(e,o)&&co(r,a))}function Ma(t,n,e){var o=!1,r=Tr,a=n.contextType;return"object"==typeof a&&null!==a?a=Sa(a):(r=Cr(n)?Nr:Er.current,a=(o=null!=(o=n.contextTypes))?Ar(t,r):Tr),n=new n(e,a),t.memoizedState=null!==n.state&&void 0!==n.state?n.state:null,n.updater=Ba,t.stateNode=n,n._reactInternals=t,o&&((t=t.stateNode).__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=a),n}function Va(t,n,e,o){t=n.state,"function"==typeof n.componentWillReceiveProps&&n.componentWillReceiveProps(e,o),"function"==typeof n.UNSAFE_componentWillReceiveProps&&n.UNSAFE_componentWillReceiveProps(e,o),n.state!==t&&Ba.enqueueReplaceState(n,n.state,null)}function Ha(t,n,e,o){var r=t.stateNode;r.props=e,r.state=t.memoizedState,r.refs=Ka,Aa(t);var a=n.contextType;"object"==typeof a&&null!==a?r.context=Sa(a):(a=Cr(n)?Nr:Er.current,r.context=Ar(t,a)),r.state=t.memoizedState,"function"==typeof(a=n.getDerivedStateFromProps)&&(Ua(t,n,a,e),r.state=t.memoizedState),"function"==typeof n.getDerivedStateFromProps||"function"==typeof r.getSnapshotBeforeUpdate||"function"!=typeof r.UNSAFE_componentWillMount&&"function"!=typeof r.componentWillMount||(n=r.state,"function"==typeof r.componentWillMount&&r.componentWillMount(),"function"==typeof r.UNSAFE_componentWillMount&&r.UNSAFE_componentWillMount(),n!==r.state&&Ba.enqueueReplaceState(r,r.state,null),Pa(t,e,r,o),r.state=t.memoizedState),"function"==typeof r.componentDidMount&&(t.flags|=4194308)}function Ya(t,n,e){if(null!==(t=e.ref)&&"function"!=typeof t&&"object"!=typeof t){if(e._owner){if(e=e._owner){if(1!==e.tag)throw Error(a(309));var o=e.stateNode}if(!o)throw Error(a(147,t));var r=o,i=""+t;return null!==n&&null!==n.ref&&"function"==typeof n.ref&&n.ref._stringRef===i?n.ref:((n=function(t){var n=r.refs;n===Ka&&(n=r.refs={}),null===t?delete n[i]:n[i]=t})._stringRef=i,n)}if("string"!=typeof t)throw Error(a(284));if(!e._owner)throw Error(a(290,t))}return t}function Xa(t,n){throw t=Object.prototype.toString.call(n),Error(a(31,"[object Object]"===t?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function Wa(t){return(0,t._init)(t._payload)}function Ga(t){function n(n,e){if(t){var o=n.deletions;null===o?(n.deletions=[e],n.flags|=16):o.push(e)}}function e(e,o){if(!t)return null;for(;null!==o;)n(e,o),o=o.sibling;return null}function o(t,n){for(t=new Map;null!==n;)null!==n.key?t.set(n.key,n):t.set(n.index,n),n=n.sibling;return t}function r(t,n){return(t=Il(t,n)).index=0,t.sibling=null,t}function i(n,e,o){return n.index=o,t?null!==(o=n.alternate)?(o=o.index)<e?(n.flags|=2,e):o:(n.flags|=2,e):(n.flags|=1048576,e)}function f(n){return t&&null===n.alternate&&(n.flags|=2),n}function c(t,n,e,o){return null===n||6!==n.tag?((n=Rl(e,t.mode,o)).return=t,n):((n=r(n,e)).return=t,n)}function l(t,n,e,o){var a=e.type;return a===_?b(t,n,e.props.children,o,e.key):null!==n&&(n.elementType===a||"object"==typeof a&&null!==a&&a.$$typeof===A&&Wa(a)===n.type)?((o=r(n,e.props)).ref=Ya(t,n,e),o.return=t,o):((o=jl(e.type,e.key,e.props,null,t.mode,o)).ref=Ya(t,n,e),o.return=t,o)}function s(t,n,e,o){return null===n||4!==n.tag||n.stateNode.containerInfo!==e.containerInfo||n.stateNode.implementation!==e.implementation?((n=Kl(e,t.mode,o)).return=t,n):((n=r(n,e.children||[])).return=t,n)}function b(t,n,e,o,a){return null===n||7!==n.tag?((n=Fl(e,t.mode,o,a)).return=t,n):((n=r(n,e)).return=t,n)}function d(t,n,e){if("string"==typeof n&&""!==n||"number"==typeof n)return(n=Rl(""+n,t.mode,e)).return=t,n;if("object"==typeof n&&null!==n){switch(n.$$typeof){case y:return(e=jl(n.type,n.key,n.props,null,t.mode,e)).ref=Ya(t,null,n),e.return=t,e;case x:return(n=Kl(n,t.mode,e)).return=t,n;case A:return d(t,(0,n._init)(n._payload),e)}if(nt(n)||I(n))return(n=Fl(n,t.mode,e,null)).return=t,n;Xa(t,n)}return null}function u(t,n,e,o){var r=null!==n?n.key:null;if("string"==typeof e&&""!==e||"number"==typeof e)return null!==r?null:c(t,n,""+e,o);if("object"==typeof e&&null!==e){switch(e.$$typeof){case y:return e.key===r?l(t,n,e,o):null;case x:return e.key===r?s(t,n,e,o):null;case A:return u(t,n,(r=e._init)(e._payload),o)}if(nt(e)||I(e))return null!==r?null:b(t,n,e,o,null);Xa(t,e)}return null}function p(t,n,e,o,r){if("string"==typeof o&&""!==o||"number"==typeof o)return c(n,t=t.get(e)||null,""+o,r);if("object"==typeof o&&null!==o){switch(o.$$typeof){case y:return l(n,t=t.get(null===o.key?e:o.key)||null,o,r);case x:return s(n,t=t.get(null===o.key?e:o.key)||null,o,r);case A:return p(t,n,e,(0,o._init)(o._payload),r)}if(nt(o)||I(o))return b(n,t=t.get(e)||null,o,r,null);Xa(n,o)}return null}return function c(l,s,b,h){if("object"==typeof b&&null!==b&&b.type===_&&null===b.key&&(b=b.props.children),"object"==typeof b&&null!==b){switch(b.$$typeof){case y:t:{for(var g=b.key,m=s;null!==m;){if(m.key===g){if((g=b.type)===_){if(7===m.tag){e(l,m.sibling),(s=r(m,b.props.children)).return=l,l=s;break t}}else if(m.elementType===g||"object"==typeof g&&null!==g&&g.$$typeof===A&&Wa(g)===m.type){e(l,m.sibling),(s=r(m,b.props)).ref=Ya(l,m,b),s.return=l,l=s;break t}e(l,m);break}n(l,m),m=m.sibling}b.type===_?((s=Fl(b.props.children,l.mode,h,b.key)).return=l,l=s):((h=jl(b.type,b.key,b.props,null,l.mode,h)).ref=Ya(l,s,b),h.return=l,l=h)}return f(l);case x:t:{for(m=b.key;null!==s;){if(s.key===m){if(4===s.tag&&s.stateNode.containerInfo===b.containerInfo&&s.stateNode.implementation===b.implementation){e(l,s.sibling),(s=r(s,b.children||[])).return=l,l=s;break t}e(l,s);break}n(l,s),s=s.sibling}(s=Kl(b,l.mode,h)).return=l,l=s}return f(l);case A:return c(l,s,(m=b._init)(b._payload),h)}if(nt(b))return function(r,a,f,c){for(var l=null,s=null,b=a,h=a=0,g=null;null!==b&&h<f.length;h++){b.index>h?(g=b,b=null):g=b.sibling;var m=u(r,b,f[h],c);if(null===m){null===b&&(b=g);break}t&&b&&null===m.alternate&&n(r,b),a=i(m,a,h),null===s?l=m:s.sibling=m,s=m,b=g}if(h===f.length)return e(r,b),aa&&Zr(r,h),l;if(null===b){for(;h<f.length;h++)null!==(b=d(r,f[h],c))&&(a=i(b,a,h),null===s?l=b:s.sibling=b,s=b);return aa&&Zr(r,h),l}for(b=o(r,b);h<f.length;h++)null!==(g=p(b,r,h,f[h],c))&&(t&&null!==g.alternate&&b.delete(null===g.key?h:g.key),a=i(g,a,h),null===s?l=g:s.sibling=g,s=g);return t&&b.forEach((function(t){return n(r,t)})),aa&&Zr(r,h),l}(l,s,b,h);if(I(b))return function(r,f,c,l){var s=I(c);if("function"!=typeof s)throw Error(a(150));if(null==(c=s.call(c)))throw Error(a(151));for(var b=s=null,h=f,g=f=0,m=null,v=c.next();null!==h&&!v.done;g++,v=c.next()){h.index>g?(m=h,h=null):m=h.sibling;var k=u(r,h,v.value,l);if(null===k){null===h&&(h=m);break}t&&h&&null===k.alternate&&n(r,h),f=i(k,f,g),null===b?s=k:b.sibling=k,b=k,h=m}if(v.done)return e(r,h),aa&&Zr(r,g),s;if(null===h){for(;!v.done;g++,v=c.next())null!==(v=d(r,v.value,l))&&(f=i(v,f,g),null===b?s=v:b.sibling=v,b=v);return aa&&Zr(r,g),s}for(h=o(r,h);!v.done;g++,v=c.next())null!==(v=p(h,r,g,v.value,l))&&(t&&null!==v.alternate&&h.delete(null===v.key?g:v.key),f=i(v,f,g),null===b?s=v:b.sibling=v,b=v);return t&&h.forEach((function(t){return n(r,t)})),aa&&Zr(r,g),s}(l,s,b,h);Xa(l,b)}return"string"==typeof b&&""!==b||"number"==typeof b?(b=""+b,null!==s&&6===s.tag?(e(l,s.sibling),(s=r(s,b)).return=l,l=s):(e(l,s),(s=Rl(b,l.mode,h)).return=l,l=s),f(l)):e(l,s)}}var Qa=Ga(!0),Ja=Ga(!1),Za={},ti=Lr(Za),ni=Lr(Za),ei=Lr(Za);function oi(t){if(t===Za)throw Error(a(174));return t}function ri(t,n){switch(Or(ei,n),Or(ni,t),Or(ti,Za),t=n.nodeType){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ct(null,"");break;default:n=ct(n=(t=8===t?n.parentNode:n).namespaceURI||null,t=t.tagName)}Sr(ti),Or(ti,n)}function ai(){Sr(ti),Sr(ni),Sr(ei)}function ii(t){oi(ei.current);var n=oi(ti.current),e=ct(n,t.type);n!==e&&(Or(ni,t),Or(ti,e))}function fi(t){ni.current===t&&(Sr(ti),Sr(ni))}var ci=Lr(0);function li(t){for(var n=t;null!==n;){if(13===n.tag){var e=n.memoizedState;if(null!==e&&(null===(e=e.dehydrated)||"$?"===e.data||"$!"===e.data))return n}else if(19===n.tag&&void 0!==n.memoizedProps.revealOrder){if(0!=(128&n.flags))return n}else if(null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var si=[];function bi(){for(var t=0;t<si.length;t++)si[t]._workInProgressVersionPrimary=null;si.length=0}var di=w.ReactCurrentDispatcher,ui=w.ReactCurrentBatchConfig,pi=0,hi=null,gi=null,mi=null,vi=!1,ki=!1,wi=0,yi=0;function xi(){throw Error(a(321))}function _i(t,n){if(null===n)return!1;for(var e=0;e<n.length&&e<t.length;e++)if(!fo(t[e],n[e]))return!1;return!0}function zi(t,n,e,o,r,i){if(pi=i,hi=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,di.current=null===t||null===t.memoizedState?cf:lf,t=e(o,r),ki){i=0;do{if(ki=!1,wi=0,25<=i)throw Error(a(301));i+=1,mi=gi=null,n.updateQueue=null,di.current=sf,t=e(o,r)}while(ki)}if(di.current=ff,n=null!==gi&&null!==gi.next,pi=0,mi=gi=hi=null,vi=!1,n)throw Error(a(300));return t}function Li(){var t=0!==wi;return wi=0,t}function Si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===mi?hi.memoizedState=mi=t:mi=mi.next=t,mi}function Oi(){if(null===gi){var t=hi.alternate;t=null!==t?t.memoizedState:null}else t=gi.next;var n=null===mi?hi.memoizedState:mi.next;if(null!==n)mi=n,gi=t;else{if(null===t)throw Error(a(310));t={memoizedState:(gi=t).memoizedState,baseState:gi.baseState,baseQueue:gi.baseQueue,queue:gi.queue,next:null},null===mi?hi.memoizedState=mi=t:mi=mi.next=t}return mi}function Ti(t,n){return"function"==typeof n?n(t):n}function Ei(t){var n=Oi(),e=n.queue;if(null===e)throw Error(a(311));e.lastRenderedReducer=t;var o=gi,r=o.baseQueue,i=e.pending;if(null!==i){if(null!==r){var f=r.next;r.next=i.next,i.next=f}o.baseQueue=r=i,e.pending=null}if(null!==r){i=r.next,o=o.baseState;var c=f=null,l=null,s=i;do{var b=s.lane;if((pi&b)===b)null!==l&&(l=l.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),o=s.hasEagerState?s.eagerState:t(o,s.action);else{var d={lane:b,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};null===l?(c=l=d,f=o):l=l.next=d,hi.lanes|=b,Pc|=b}s=s.next}while(null!==s&&s!==i);null===l?f=o:l.next=c,fo(o,n.memoizedState)||(yf=!0),n.memoizedState=o,n.baseState=f,n.baseQueue=l,e.lastRenderedState=o}if(null!==(t=e.interleaved)){r=t;do{i=r.lane,hi.lanes|=i,Pc|=i,r=r.next}while(r!==t)}else null===r&&(e.lanes=0);return[n.memoizedState,e.dispatch]}function $i(t){var n=Oi(),e=n.queue;if(null===e)throw Error(a(311));e.lastRenderedReducer=t;var o=e.dispatch,r=e.pending,i=n.memoizedState;if(null!==r){e.pending=null;var f=r=r.next;do{i=t(i,f.action),f=f.next}while(f!==r);fo(i,n.memoizedState)||(yf=!0),n.memoizedState=i,null===n.baseQueue&&(n.baseState=i),e.lastRenderedState=i}return[i,o]}function Ni(){}function Ai(t,n){var e=hi,o=Oi(),r=n(),i=!fo(o.memoizedState,r);if(i&&(o.memoizedState=r,yf=!0),o=o.queue,Mi(Ii.bind(null,e,o,t),[t]),o.getSnapshot!==n||i||null!==mi&&1&mi.memoizedState.tag){if(e.flags|=2048,Ri(9,qi.bind(null,e,o,r,n),void 0,null),null===Nc)throw Error(a(349));0!=(30&pi)||Ci(e,n,r)}return r}function Ci(t,n,e){t.flags|=16384,t={getSnapshot:n,value:e},null===(n=hi.updateQueue)?(n={lastEffect:null,stores:null},hi.updateQueue=n,n.stores=[t]):null===(e=n.stores)?n.stores=[t]:e.push(t)}function qi(t,n,e,o){n.value=e,n.getSnapshot=o,ji(n)&&Fi(t)}function Ii(t,n,e){return e((function(){ji(n)&&Fi(t)}))}function ji(t){var n=t.getSnapshot;t=t.value;try{var e=n();return!fo(t,e)}catch(t){return!0}}function Fi(t){var n=$a(t,1);null!==n&&rl(n,t,1,-1)}function Pi(t){var n=Si();return"function"==typeof t&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ti,lastRenderedState:t},n.queue=t,t=t.dispatch=ef.bind(null,hi,t),[n.memoizedState,t]}function Ri(t,n,e,o){return t={tag:t,create:n,destroy:e,deps:o,next:null},null===(n=hi.updateQueue)?(n={lastEffect:null,stores:null},hi.updateQueue=n,n.lastEffect=t.next=t):null===(e=n.lastEffect)?n.lastEffect=t.next=t:(o=e.next,e.next=t,t.next=o,n.lastEffect=t),t}function Ki(){return Oi().memoizedState}function Ui(t,n,e,o){var r=Si();hi.flags|=t,r.memoizedState=Ri(1|n,e,void 0,void 0===o?null:o)}function Bi(t,n,e,o){var r=Oi();o=void 0===o?null:o;var a=void 0;if(null!==gi){var i=gi.memoizedState;if(a=i.destroy,null!==o&&_i(o,i.deps))return void(r.memoizedState=Ri(n,e,a,o))}hi.flags|=t,r.memoizedState=Ri(1|n,e,a,o)}function Di(t,n){return Ui(8390656,8,t,n)}function Mi(t,n){return Bi(2048,8,t,n)}function Vi(t,n){return Bi(4,2,t,n)}function Hi(t,n){return Bi(4,4,t,n)}function Yi(t,n){return"function"==typeof n?(t=t(),n(t),function(){n(null)}):null!=n?(t=t(),n.current=t,function(){n.current=null}):void 0}function Xi(t,n,e){return e=null!=e?e.concat([t]):null,Bi(4,4,Yi.bind(null,n,t),e)}function Wi(){}function Gi(t,n){var e=Oi();n=void 0===n?null:n;var o=e.memoizedState;return null!==o&&null!==n&&_i(n,o[1])?o[0]:(e.memoizedState=[t,n],t)}function Qi(t,n){var e=Oi();n=void 0===n?null:n;var o=e.memoizedState;return null!==o&&null!==n&&_i(n,o[1])?o[0]:(t=t(),e.memoizedState=[t,n],t)}function Ji(t,n,e){return 0==(21&pi)?(t.baseState&&(t.baseState=!1,yf=!0),t.memoizedState=e):(fo(e,n)||(e=gn(),hi.lanes|=e,Pc|=e,t.baseState=!0),n)}function Zi(t,n){var e=wn;wn=0!==e&&4>e?e:4,t(!0);var o=ui.transition;ui.transition={};try{t(!1),n()}finally{wn=e,ui.transition=o}}function tf(){return Oi().memoizedState}function nf(t,n,e){var o=ol(t);e={lane:o,action:e,hasEagerState:!1,eagerState:null,next:null},of(t)?rf(n,e):null!==(e=Ea(t,n,e,o))&&(rl(e,t,o,el()),af(e,n,o))}function ef(t,n,e){var o=ol(t),r={lane:o,action:e,hasEagerState:!1,eagerState:null,next:null};if(of(t))rf(n,r);else{var a=t.alternate;if(0===t.lanes&&(null===a||0===a.lanes)&&null!==(a=n.lastRenderedReducer))try{var i=n.lastRenderedState,f=a(i,e);if(r.hasEagerState=!0,r.eagerState=f,fo(f,i)){var c=n.interleaved;return null===c?(r.next=r,Ta(n)):(r.next=c.next,c.next=r),void(n.interleaved=r)}}catch(t){}null!==(e=Ea(t,n,r,o))&&(rl(e,t,o,r=el()),af(e,n,o))}}function of(t){var n=t.alternate;return t===hi||null!==n&&n===hi}function rf(t,n){ki=vi=!0;var e=t.pending;null===e?n.next=n:(n.next=e.next,e.next=n),t.pending=n}function af(t,n,e){if(0!=(4194240&e)){var o=n.lanes;e|=o&=t.pendingLanes,n.lanes=e,kn(t,e)}}var ff={readContext:Sa,useCallback:xi,useContext:xi,useEffect:xi,useImperativeHandle:xi,useInsertionEffect:xi,useLayoutEffect:xi,useMemo:xi,useReducer:xi,useRef:xi,useState:xi,useDebugValue:xi,useDeferredValue:xi,useTransition:xi,useMutableSource:xi,useSyncExternalStore:xi,useId:xi,unstable_isNewReconciler:!1},cf={readContext:Sa,useCallback:function(t,n){return Si().memoizedState=[t,void 0===n?null:n],t},useContext:Sa,useEffect:Di,useImperativeHandle:function(t,n,e){return e=null!=e?e.concat([t]):null,Ui(4194308,4,Yi.bind(null,n,t),e)},useLayoutEffect:function(t,n){return Ui(4194308,4,t,n)},useInsertionEffect:function(t,n){return Ui(4,2,t,n)},useMemo:function(t,n){var e=Si();return n=void 0===n?null:n,t=t(),e.memoizedState=[t,n],t},useReducer:function(t,n,e){var o=Si();return n=void 0!==e?e(n):n,o.memoizedState=o.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},o.queue=t,t=t.dispatch=nf.bind(null,hi,t),[o.memoizedState,t]},useRef:function(t){return t={current:t},Si().memoizedState=t},useState:Pi,useDebugValue:Wi,useDeferredValue:function(t){return Si().memoizedState=t},useTransition:function(){var t=Pi(!1),n=t[0];return t=Zi.bind(null,t[1]),Si().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,e){var o=hi,r=Si();if(aa){if(void 0===e)throw Error(a(407));e=e()}else{if(e=n(),null===Nc)throw Error(a(349));0!=(30&pi)||Ci(o,n,e)}r.memoizedState=e;var i={value:e,getSnapshot:n};return r.queue=i,Di(Ii.bind(null,o,i,t),[t]),o.flags|=2048,Ri(9,qi.bind(null,o,i,e,n),void 0,null),e},useId:function(){var t=Si(),n=Nc.identifierPrefix;if(aa){var e=Jr;n=":"+n+"R"+(e=(Qr&~(1<<32-fn(Qr)-1)).toString(32)+e),0<(e=wi++)&&(n+="H"+e.toString(32)),n+=":"}else n=":"+n+"r"+(e=yi++).toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},lf={readContext:Sa,useCallback:Gi,useContext:Sa,useEffect:Mi,useImperativeHandle:Xi,useInsertionEffect:Vi,useLayoutEffect:Hi,useMemo:Qi,useReducer:Ei,useRef:Ki,useState:function(){return Ei(Ti)},useDebugValue:Wi,useDeferredValue:function(t){return Ji(Oi(),gi.memoizedState,t)},useTransition:function(){return[Ei(Ti)[0],Oi().memoizedState]},useMutableSource:Ni,useSyncExternalStore:Ai,useId:tf,unstable_isNewReconciler:!1},sf={readContext:Sa,useCallback:Gi,useContext:Sa,useEffect:Mi,useImperativeHandle:Xi,useInsertionEffect:Vi,useLayoutEffect:Hi,useMemo:Qi,useReducer:$i,useRef:Ki,useState:function(){return $i(Ti)},useDebugValue:Wi,useDeferredValue:function(t){var n=Oi();return null===gi?n.memoizedState=t:Ji(n,gi.memoizedState,t)},useTransition:function(){return[$i(Ti)[0],Oi().memoizedState]},useMutableSource:Ni,useSyncExternalStore:Ai,useId:tf,unstable_isNewReconciler:!1};function bf(t,n){try{var e="",o=n;do{e+=U(o),o=o.return}while(o);var r=e}catch(t){r="\nError generating stack: "+t.message+"\n"+t.stack}return{value:t,source:n,stack:r,digest:null}}function df(t,n,e){return{value:t,source:null,stack:null!=e?e:null,digest:null!=n?n:null}}function uf(t,n){try{console.error(n.value)}catch(t){setTimeout((function(){throw t}))}}var pf="function"==typeof WeakMap?WeakMap:Map;function hf(t,n,e){(e=qa(-1,e)).tag=3,e.payload={element:null};var o=n.value;return e.callback=function(){Hc||(Hc=!0,Yc=o),uf(0,n)},e}function gf(t,n,e){(e=qa(-1,e)).tag=3;var o=t.type.getDerivedStateFromError;if("function"==typeof o){var r=n.value;e.payload=function(){return o(r)},e.callback=function(){uf(0,n)}}var a=t.stateNode;return null!==a&&"function"==typeof a.componentDidCatch&&(e.callback=function(){uf(0,n),"function"!=typeof o&&(null===Xc?Xc=new Set([this]):Xc.add(this));var t=n.stack;this.componentDidCatch(n.value,{componentStack:null!==t?t:""})}),e}function mf(t,n,e){var o=t.pingCache;if(null===o){o=t.pingCache=new pf;var r=new Set;o.set(n,r)}else void 0===(r=o.get(n))&&(r=new Set,o.set(n,r));r.has(e)||(r.add(e),t=Ol.bind(null,t,n,e),n.then(t,t))}function vf(t){do{var n;if((n=13===t.tag)&&(n=null===(n=t.memoizedState)||null!==n.dehydrated),n)return t;t=t.return}while(null!==t);return null}function kf(t,n,e,o,r){return 0==(1&t.mode)?(t===n?t.flags|=65536:(t.flags|=128,e.flags|=131072,e.flags&=-52805,1===e.tag&&(null===e.alternate?e.tag=17:((n=qa(-1,1)).tag=2,Ia(e,n,1))),e.lanes|=1),t):(t.flags|=65536,t.lanes=r,t)}var wf=w.ReactCurrentOwner,yf=!1;function xf(t,n,e,o){n.child=null===t?Ja(n,null,e,o):Qa(n,t.child,e,o)}function _f(t,n,e,o,r){e=e.render;var a=n.ref;return La(n,r),o=zi(t,n,e,o,a,r),e=Li(),null===t||yf?(aa&&e&&na(n),n.flags|=1,xf(t,n,o,r),n.child):(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r,Hf(t,n,r))}function zf(t,n,e,o,r){if(null===t){var a=e.type;return"function"!=typeof a||ql(a)||void 0!==a.defaultProps||null!==e.compare||void 0!==e.defaultProps?((t=jl(e.type,null,o,n,n.mode,r)).ref=n.ref,t.return=n,n.child=t):(n.tag=15,n.type=a,Lf(t,n,a,o,r))}if(a=t.child,0==(t.lanes&r)){var i=a.memoizedProps;if((e=null!==(e=e.compare)?e:co)(i,o)&&t.ref===n.ref)return Hf(t,n,r)}return n.flags|=1,(t=Il(a,o)).ref=n.ref,t.return=n,n.child=t}function Lf(t,n,e,o,r){if(null!==t){var a=t.memoizedProps;if(co(a,o)&&t.ref===n.ref){if(yf=!1,n.pendingProps=o=a,0==(t.lanes&r))return n.lanes=t.lanes,Hf(t,n,r);0!=(131072&t.flags)&&(yf=!0)}}return Tf(t,n,e,o,r)}function Sf(t,n,e){var o=n.pendingProps,r=o.children,a=null!==t?t.memoizedState:null;if("hidden"===o.mode)if(0==(1&n.mode))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Or(Ic,qc),qc|=e;else{if(0==(1073741824&e))return t=null!==a?a.baseLanes|e:e,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,Or(Ic,qc),qc|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=null!==a?a.baseLanes:e,Or(Ic,qc),qc|=o}else null!==a?(o=a.baseLanes|e,n.memoizedState=null):o=e,Or(Ic,qc),qc|=o;return xf(t,n,r,e),n.child}function Of(t,n){var e=n.ref;(null===t&&null!==e||null!==t&&t.ref!==e)&&(n.flags|=512,n.flags|=2097152)}function Tf(t,n,e,o,r){var a=Cr(e)?Nr:Er.current;return a=Ar(n,a),La(n,r),e=zi(t,n,e,o,a,r),o=Li(),null===t||yf?(aa&&o&&na(n),n.flags|=1,xf(t,n,e,r),n.child):(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r,Hf(t,n,r))}function Ef(t,n,e,o,r){if(Cr(e)){var a=!0;Fr(n)}else a=!1;if(La(n,r),null===n.stateNode)Vf(t,n),Ma(n,e,o),Ha(n,e,o,r),o=!0;else if(null===t){var i=n.stateNode,f=n.memoizedProps;i.props=f;var c=i.context,l=e.contextType;l="object"==typeof l&&null!==l?Sa(l):Ar(n,l=Cr(e)?Nr:Er.current);var s=e.getDerivedStateFromProps,b="function"==typeof s||"function"==typeof i.getSnapshotBeforeUpdate;b||"function"!=typeof i.UNSAFE_componentWillReceiveProps&&"function"!=typeof i.componentWillReceiveProps||(f!==o||c!==l)&&Va(n,i,o,l),Na=!1;var d=n.memoizedState;i.state=d,Pa(n,o,i,r),c=n.memoizedState,f!==o||d!==c||$r.current||Na?("function"==typeof s&&(Ua(n,e,s,o),c=n.memoizedState),(f=Na||Da(n,e,f,o,d,c,l))?(b||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||("function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"==typeof i.componentDidMount&&(n.flags|=4194308)):("function"==typeof i.componentDidMount&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=c),i.props=o,i.state=c,i.context=l,o=f):("function"==typeof i.componentDidMount&&(n.flags|=4194308),o=!1)}else{i=n.stateNode,Ca(t,n),f=n.memoizedProps,l=n.type===n.elementType?f:ma(n.type,f),i.props=l,b=n.pendingProps,d=i.context,c="object"==typeof(c=e.contextType)&&null!==c?Sa(c):Ar(n,c=Cr(e)?Nr:Er.current);var u=e.getDerivedStateFromProps;(s="function"==typeof u||"function"==typeof i.getSnapshotBeforeUpdate)||"function"!=typeof i.UNSAFE_componentWillReceiveProps&&"function"!=typeof i.componentWillReceiveProps||(f!==b||d!==c)&&Va(n,i,o,c),Na=!1,d=n.memoizedState,i.state=d,Pa(n,o,i,r);var p=n.memoizedState;f!==b||d!==p||$r.current||Na?("function"==typeof u&&(Ua(n,e,u,o),p=n.memoizedState),(l=Na||Da(n,e,l,o,d,p,c)||!1)?(s||"function"!=typeof i.UNSAFE_componentWillUpdate&&"function"!=typeof i.componentWillUpdate||("function"==typeof i.componentWillUpdate&&i.componentWillUpdate(o,p,c),"function"==typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(o,p,c)),"function"==typeof i.componentDidUpdate&&(n.flags|=4),"function"==typeof i.getSnapshotBeforeUpdate&&(n.flags|=1024)):("function"!=typeof i.componentDidUpdate||f===t.memoizedProps&&d===t.memoizedState||(n.flags|=4),"function"!=typeof i.getSnapshotBeforeUpdate||f===t.memoizedProps&&d===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=p),i.props=o,i.state=p,i.context=c,o=l):("function"!=typeof i.componentDidUpdate||f===t.memoizedProps&&d===t.memoizedState||(n.flags|=4),"function"!=typeof i.getSnapshotBeforeUpdate||f===t.memoizedProps&&d===t.memoizedState||(n.flags|=1024),o=!1)}return $f(t,n,e,o,a,r)}function $f(t,n,e,o,r,a){Of(t,n);var i=0!=(128&n.flags);if(!o&&!i)return r&&Pr(n,e,!1),Hf(t,n,a);o=n.stateNode,wf.current=n;var f=i&&"function"!=typeof e.getDerivedStateFromError?null:o.render();return n.flags|=1,null!==t&&i?(n.child=Qa(n,t.child,null,a),n.child=Qa(n,null,f,a)):xf(t,n,f,a),n.memoizedState=o.state,r&&Pr(n,e,!0),n.child}function Nf(t){var n=t.stateNode;n.pendingContext?Ir(0,n.pendingContext,n.pendingContext!==n.context):n.context&&Ir(0,n.context,!1),ri(t,n.containerInfo)}function Af(t,n,e,o,r){return pa(),ha(r),n.flags|=256,xf(t,n,e,o),n.child}var Cf,qf,If,jf,Ff={dehydrated:null,treeContext:null,retryLane:0};function Pf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Rf(t,n,e){var o,r=n.pendingProps,i=ci.current,f=!1,c=0!=(128&n.flags);if((o=c)||(o=(null===t||null!==t.memoizedState)&&0!=(2&i)),o?(f=!0,n.flags&=-129):null!==t&&null===t.memoizedState||(i|=1),Or(ci,1&i),null===t)return sa(n),null!==(t=n.memoizedState)&&null!==(t=t.dehydrated)?(0==(1&n.mode)?n.lanes=1:"$!"===t.data?n.lanes=8:n.lanes=1073741824,null):(c=r.children,t=r.fallback,f?(r=n.mode,f=n.child,c={mode:"hidden",children:c},0==(1&r)&&null!==f?(f.childLanes=0,f.pendingProps=c):f=Pl(c,r,0,null),t=Fl(t,r,e,null),f.return=n,t.return=n,f.sibling=t,n.child=f,n.child.memoizedState=Pf(e),n.memoizedState=Ff,t):Kf(n,c));if(null!==(i=t.memoizedState)&&null!==(o=i.dehydrated))return function(t,n,e,o,r,i,f){if(e)return 256&n.flags?(n.flags&=-257,Uf(t,n,f,o=df(Error(a(422))))):null!==n.memoizedState?(n.child=t.child,n.flags|=128,null):(i=o.fallback,r=n.mode,o=Pl({mode:"visible",children:o.children},r,0,null),(i=Fl(i,r,f,null)).flags|=2,o.return=n,i.return=n,o.sibling=i,n.child=o,0!=(1&n.mode)&&Qa(n,t.child,null,f),n.child.memoizedState=Pf(f),n.memoizedState=Ff,i);if(0==(1&n.mode))return Uf(t,n,f,null);if("$!"===r.data){if(o=r.nextSibling&&r.nextSibling.dataset)var c=o.dgst;return o=c,Uf(t,n,f,o=df(i=Error(a(419)),o,void 0))}if(c=0!=(f&t.childLanes),yf||c){if(null!==(o=Nc)){switch(f&-f){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}0!==(r=0!=(r&(o.suspendedLanes|f))?0:r)&&r!==i.retryLane&&(i.retryLane=r,$a(t,r),rl(o,t,r,-1))}return ml(),Uf(t,n,f,o=df(Error(a(421))))}return"$?"===r.data?(n.flags|=128,n.child=t.child,n=El.bind(null,t),r._reactRetry=n,null):(t=i.treeContext,ra=sr(r.nextSibling),oa=n,aa=!0,ia=null,null!==t&&(Xr[Wr++]=Qr,Xr[Wr++]=Jr,Xr[Wr++]=Gr,Qr=t.id,Jr=t.overflow,Gr=n),(n=Kf(n,o.children)).flags|=4096,n)}(t,n,c,r,o,i,e);if(f){f=r.fallback,c=n.mode,o=(i=t.child).sibling;var l={mode:"hidden",children:r.children};return 0==(1&c)&&n.child!==i?((r=n.child).childLanes=0,r.pendingProps=l,n.deletions=null):(r=Il(i,l)).subtreeFlags=14680064&i.subtreeFlags,null!==o?f=Il(o,f):(f=Fl(f,c,e,null)).flags|=2,f.return=n,r.return=n,r.sibling=f,n.child=r,r=f,f=n.child,c=null===(c=t.child.memoizedState)?Pf(e):{baseLanes:c.baseLanes|e,cachePool:null,transitions:c.transitions},f.memoizedState=c,f.childLanes=t.childLanes&~e,n.memoizedState=Ff,r}return t=(f=t.child).sibling,r=Il(f,{mode:"visible",children:r.children}),0==(1&n.mode)&&(r.lanes=e),r.return=n,r.sibling=null,null!==t&&(null===(e=n.deletions)?(n.deletions=[t],n.flags|=16):e.push(t)),n.child=r,n.memoizedState=null,r}function Kf(t,n){return(n=Pl({mode:"visible",children:n},t.mode,0,null)).return=t,t.child=n}function Uf(t,n,e,o){return null!==o&&ha(o),Qa(n,t.child,null,e),(t=Kf(n,n.pendingProps.children)).flags|=2,n.memoizedState=null,t}function Bf(t,n,e){t.lanes|=n;var o=t.alternate;null!==o&&(o.lanes|=n),za(t.return,n,e)}function Df(t,n,e,o,r){var a=t.memoizedState;null===a?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:e,tailMode:r}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=e,a.tailMode=r)}function Mf(t,n,e){var o=n.pendingProps,r=o.revealOrder,a=o.tail;if(xf(t,n,o.children,e),0!=(2&(o=ci.current)))o=1&o|2,n.flags|=128;else{if(null!==t&&0!=(128&t.flags))t:for(t=n.child;null!==t;){if(13===t.tag)null!==t.memoizedState&&Bf(t,e,n);else if(19===t.tag)Bf(t,e,n);else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;null===t.sibling;){if(null===t.return||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}if(Or(ci,o),0==(1&n.mode))n.memoizedState=null;else switch(r){case"forwards":for(e=n.child,r=null;null!==e;)null!==(t=e.alternate)&&null===li(t)&&(r=e),e=e.sibling;null===(e=r)?(r=n.child,n.child=null):(r=e.sibling,e.sibling=null),Df(n,!1,r,e,a);break;case"backwards":for(e=null,r=n.child,n.child=null;null!==r;){if(null!==(t=r.alternate)&&null===li(t)){n.child=r;break}t=r.sibling,r.sibling=e,e=r,r=t}Df(n,!0,e,null,a);break;case"together":Df(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Vf(t,n){0==(1&n.mode)&&null!==t&&(t.alternate=null,n.alternate=null,n.flags|=2)}function Hf(t,n,e){if(null!==t&&(n.dependencies=t.dependencies),Pc|=n.lanes,0==(e&n.childLanes))return null;if(null!==t&&n.child!==t.child)throw Error(a(153));if(null!==n.child){for(e=Il(t=n.child,t.pendingProps),n.child=e,e.return=n;null!==t.sibling;)t=t.sibling,(e=e.sibling=Il(t,t.pendingProps)).return=n;e.sibling=null}return n.child}function Yf(t,n){if(!aa)switch(t.tailMode){case"hidden":n=t.tail;for(var e=null;null!==n;)null!==n.alternate&&(e=n),n=n.sibling;null===e?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var o=null;null!==e;)null!==e.alternate&&(o=e),e=e.sibling;null===o?n||null===t.tail?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Xf(t){var n=null!==t.alternate&&t.alternate.child===t.child,e=0,o=0;if(n)for(var r=t.child;null!==r;)e|=r.lanes|r.childLanes,o|=14680064&r.subtreeFlags,o|=14680064&r.flags,r.return=t,r=r.sibling;else for(r=t.child;null!==r;)e|=r.lanes|r.childLanes,o|=r.subtreeFlags,o|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=o,t.childLanes=e,n}function Wf(t,n,e){var o=n.pendingProps;switch(ea(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xf(n),null;case 1:case 17:return Cr(n.type)&&qr(),Xf(n),null;case 3:return o=n.stateNode,ai(),Sr($r),Sr(Er),bi(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),null!==t&&null!==t.child||(da(n)?n.flags|=4:null===t||t.memoizedState.isDehydrated&&0==(256&n.flags)||(n.flags|=1024,null!==ia&&(cl(ia),ia=null))),qf(t,n),Xf(n),null;case 5:fi(n);var r=oi(ei.current);if(e=n.type,null!==t&&null!=n.stateNode)If(t,n,e,o,r),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!o){if(null===n.stateNode)throw Error(a(166));return Xf(n),null}if(t=oi(ti.current),da(n)){o=n.stateNode,e=n.type;var i=n.memoizedProps;switch(o[ur]=n,o[pr]=i,t=0!=(1&n.mode),e){case"dialog":Ko("cancel",o),Ko("close",o);break;case"iframe":case"object":case"embed":Ko("load",o);break;case"video":case"audio":for(r=0;r<jo.length;r++)Ko(jo[r],o);break;case"source":Ko("error",o);break;case"img":case"image":case"link":Ko("error",o),Ko("load",o);break;case"details":Ko("toggle",o);break;case"input":G(o,i),Ko("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!i.multiple},Ko("invalid",o);break;case"textarea":rt(o,i),Ko("invalid",o)}for(var c in vt(e,i),r=null,i)if(i.hasOwnProperty(c)){var l=i[c];"children"===c?"string"==typeof l?o.textContent!==l&&(!0!==i.suppressHydrationWarning&&Zo(o.textContent,l,t),r=["children",l]):"number"==typeof l&&o.textContent!==""+l&&(!0!==i.suppressHydrationWarning&&Zo(o.textContent,l,t),r=["children",""+l]):f.hasOwnProperty(c)&&null!=l&&"onScroll"===c&&Ko("scroll",o)}switch(e){case"input":H(o),Z(o,i,!0);break;case"textarea":H(o),it(o);break;case"select":case"option":break;default:"function"==typeof i.onClick&&(o.onclick=tr)}o=r,n.updateQueue=o,null!==o&&(n.flags|=4)}else{c=9===r.nodeType?r:r.ownerDocument,"http://www.w3.org/1999/xhtml"===t&&(t=ft(e)),"http://www.w3.org/1999/xhtml"===t?"script"===e?((t=c.createElement("div")).innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):"string"==typeof o.is?t=c.createElement(e,{is:o.is}):(t=c.createElement(e),"select"===e&&(c=t,o.multiple?c.multiple=!0:o.size&&(c.size=o.size))):t=c.createElementNS(t,e),t[ur]=n,t[pr]=o,Cf(t,n,!1,!1),n.stateNode=t;t:{switch(c=kt(e,o),e){case"dialog":Ko("cancel",t),Ko("close",t),r=o;break;case"iframe":case"object":case"embed":Ko("load",t),r=o;break;case"video":case"audio":for(r=0;r<jo.length;r++)Ko(jo[r],t);r=o;break;case"source":Ko("error",t),r=o;break;case"img":case"image":case"link":Ko("error",t),Ko("load",t),r=o;break;case"details":Ko("toggle",t),r=o;break;case"input":G(t,o),r=W(t,o),Ko("invalid",t);break;case"option":default:r=o;break;case"select":t._wrapperState={wasMultiple:!!o.multiple},r=F({},o,{value:void 0}),Ko("invalid",t);break;case"textarea":rt(t,o),r=ot(t,o),Ko("invalid",t)}for(i in vt(e,r),l=r)if(l.hasOwnProperty(i)){var s=l[i];"style"===i?gt(t,s):"dangerouslySetInnerHTML"===i?null!=(s=s?s.__html:void 0)&&bt(t,s):"children"===i?"string"==typeof s?("textarea"!==e||""!==s)&&dt(t,s):"number"==typeof s&&dt(t,""+s):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(f.hasOwnProperty(i)?null!=s&&"onScroll"===i&&Ko("scroll",t):null!=s&&k(t,i,s,c))}switch(e){case"input":H(t),Z(t,o,!1);break;case"textarea":H(t),it(t);break;case"option":null!=o.value&&t.setAttribute("value",""+M(o.value));break;case"select":t.multiple=!!o.multiple,null!=(i=o.value)?et(t,!!o.multiple,i,!1):null!=o.defaultValue&&et(t,!!o.multiple,o.defaultValue,!0);break;default:"function"==typeof r.onClick&&(t.onclick=tr)}switch(e){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}}o&&(n.flags|=4)}null!==n.ref&&(n.flags|=512,n.flags|=2097152)}return Xf(n),null;case 6:if(t&&null!=n.stateNode)jf(t,n,t.memoizedProps,o);else{if("string"!=typeof o&&null===n.stateNode)throw Error(a(166));if(e=oi(ei.current),oi(ti.current),da(n)){if(o=n.stateNode,e=n.memoizedProps,o[ur]=n,(i=o.nodeValue!==e)&&null!==(t=oa))switch(t.tag){case 3:Zo(o.nodeValue,e,0!=(1&t.mode));break;case 5:!0!==t.memoizedProps.suppressHydrationWarning&&Zo(o.nodeValue,e,0!=(1&t.mode))}i&&(n.flags|=4)}else(o=(9===e.nodeType?e:e.ownerDocument).createTextNode(o))[ur]=n,n.stateNode=o}return Xf(n),null;case 13:if(Sr(ci),o=n.memoizedState,null===t||null!==t.memoizedState&&null!==t.memoizedState.dehydrated){if(aa&&null!==ra&&0!=(1&n.mode)&&0==(128&n.flags))ua(),pa(),n.flags|=98560,i=!1;else if(i=da(n),null!==o&&null!==o.dehydrated){if(null===t){if(!i)throw Error(a(318));if(!(i=null!==(i=n.memoizedState)?i.dehydrated:null))throw Error(a(317));i[ur]=n}else pa(),0==(128&n.flags)&&(n.memoizedState=null),n.flags|=4;Xf(n),i=!1}else null!==ia&&(cl(ia),ia=null),i=!0;if(!i)return 65536&n.flags?n:null}return 0!=(128&n.flags)?(n.lanes=e,n):((o=null!==o)!=(null!==t&&null!==t.memoizedState)&&o&&(n.child.flags|=8192,0!=(1&n.mode)&&(null===t||0!=(1&ci.current)?0===jc&&(jc=3):ml())),null!==n.updateQueue&&(n.flags|=4),Xf(n),null);case 4:return ai(),qf(t,n),null===t&&Do(n.stateNode.containerInfo),Xf(n),null;case 10:return _a(n.type._context),Xf(n),null;case 19:if(Sr(ci),null===(i=n.memoizedState))return Xf(n),null;if(o=0!=(128&n.flags),null===(c=i.rendering))if(o)Yf(i,!1);else{if(0!==jc||null!==t&&0!=(128&t.flags))for(t=n.child;null!==t;){if(null!==(c=li(t))){for(n.flags|=128,Yf(i,!1),null!==(o=c.updateQueue)&&(n.updateQueue=o,n.flags|=4),n.subtreeFlags=0,o=e,e=n.child;null!==e;)t=o,(i=e).flags&=14680066,null===(c=i.alternate)?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=c.childLanes,i.lanes=c.lanes,i.child=c.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=c.memoizedProps,i.memoizedState=c.memoizedState,i.updateQueue=c.updateQueue,i.type=c.type,t=c.dependencies,i.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e=e.sibling;return Or(ci,1&ci.current|2),n.child}t=t.sibling}null!==i.tail&&Qt()>Mc&&(n.flags|=128,o=!0,Yf(i,!1),n.lanes=4194304)}else{if(!o)if(null!==(t=li(c))){if(n.flags|=128,o=!0,null!==(e=t.updateQueue)&&(n.updateQueue=e,n.flags|=4),Yf(i,!0),null===i.tail&&"hidden"===i.tailMode&&!c.alternate&&!aa)return Xf(n),null}else 2*Qt()-i.renderingStartTime>Mc&&1073741824!==e&&(n.flags|=128,o=!0,Yf(i,!1),n.lanes=4194304);i.isBackwards?(c.sibling=n.child,n.child=c):(null!==(e=i.last)?e.sibling=c:n.child=c,i.last=c)}return null!==i.tail?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Qt(),n.sibling=null,e=ci.current,Or(ci,o?1&e|2:1&e),n):(Xf(n),null);case 22:case 23:return ul(),o=null!==n.memoizedState,null!==t&&null!==t.memoizedState!==o&&(n.flags|=8192),o&&0!=(1&n.mode)?0!=(1073741824&qc)&&(Xf(n),6&n.subtreeFlags&&(n.flags|=8192)):Xf(n),null;case 24:case 25:return null}throw Error(a(156,n.tag))}function Gf(t,n){switch(ea(n),n.tag){case 1:return Cr(n.type)&&qr(),65536&(t=n.flags)?(n.flags=-65537&t|128,n):null;case 3:return ai(),Sr($r),Sr(Er),bi(),0!=(65536&(t=n.flags))&&0==(128&t)?(n.flags=-65537&t|128,n):null;case 5:return fi(n),null;case 13:if(Sr(ci),null!==(t=n.memoizedState)&&null!==t.dehydrated){if(null===n.alternate)throw Error(a(340));pa()}return 65536&(t=n.flags)?(n.flags=-65537&t|128,n):null;case 19:return Sr(ci),null;case 4:return ai(),null;case 10:return _a(n.type._context),null;case 22:case 23:return ul(),null;default:return null}}Cf=function(t,n){for(var e=n.child;null!==e;){if(5===e.tag||6===e.tag)t.appendChild(e.stateNode);else if(4!==e.tag&&null!==e.child){e.child.return=e,e=e.child;continue}if(e===n)break;for(;null===e.sibling;){if(null===e.return||e.return===n)return;e=e.return}e.sibling.return=e.return,e=e.sibling}},qf=function(){},If=function(t,n,e,o){var r=t.memoizedProps;if(r!==o){t=n.stateNode,oi(ti.current);var a,i=null;switch(e){case"input":r=W(t,r),o=W(t,o),i=[];break;case"select":r=F({},r,{value:void 0}),o=F({},o,{value:void 0}),i=[];break;case"textarea":r=ot(t,r),o=ot(t,o),i=[];break;default:"function"!=typeof r.onClick&&"function"==typeof o.onClick&&(t.onclick=tr)}for(s in vt(e,o),e=null,r)if(!o.hasOwnProperty(s)&&r.hasOwnProperty(s)&&null!=r[s])if("style"===s){var c=r[s];for(a in c)c.hasOwnProperty(a)&&(e||(e={}),e[a]="")}else"dangerouslySetInnerHTML"!==s&&"children"!==s&&"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(f.hasOwnProperty(s)?i||(i=[]):(i=i||[]).push(s,null));for(s in o){var l=o[s];if(c=null!=r?r[s]:void 0,o.hasOwnProperty(s)&&l!==c&&(null!=l||null!=c))if("style"===s)if(c){for(a in c)!c.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(e||(e={}),e[a]="");for(a in l)l.hasOwnProperty(a)&&c[a]!==l[a]&&(e||(e={}),e[a]=l[a])}else e||(i||(i=[]),i.push(s,e)),e=l;else"dangerouslySetInnerHTML"===s?(l=l?l.__html:void 0,c=c?c.__html:void 0,null!=l&&c!==l&&(i=i||[]).push(s,l)):"children"===s?"string"!=typeof l&&"number"!=typeof l||(i=i||[]).push(s,""+l):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&(f.hasOwnProperty(s)?(null!=l&&"onScroll"===s&&Ko("scroll",t),i||c===l||(i=[])):(i=i||[]).push(s,l))}e&&(i=i||[]).push("style",e);var s=i;(n.updateQueue=s)&&(n.flags|=4)}},jf=function(t,n,e,o){e!==o&&(n.flags|=4)};var Qf=!1,Jf=!1,Zf="function"==typeof WeakSet?WeakSet:Set,tc=null;function nc(t,n){var e=t.ref;if(null!==e)if("function"==typeof e)try{e(null)}catch(e){Sl(t,n,e)}else e.current=null}function ec(t,n,e){try{e()}catch(e){Sl(t,n,e)}}var oc=!1;function rc(t,n,e){var o=n.updateQueue;if(null!==(o=null!==o?o.lastEffect:null)){var r=o=o.next;do{if((r.tag&t)===t){var a=r.destroy;r.destroy=void 0,void 0!==a&&ec(n,e,a)}r=r.next}while(r!==o)}}function ac(t,n){if(null!==(n=null!==(n=n.updateQueue)?n.lastEffect:null)){var e=n=n.next;do{if((e.tag&t)===t){var o=e.create;e.destroy=o()}e=e.next}while(e!==n)}}function ic(t){var n=t.ref;if(null!==n){var e=t.stateNode;t.tag,t=e,"function"==typeof n?n(t):n.current=t}}function fc(t){var n=t.alternate;null!==n&&(t.alternate=null,fc(n)),t.child=null,t.deletions=null,t.sibling=null,5===t.tag&&null!==(n=t.stateNode)&&(delete n[ur],delete n[pr],delete n[gr],delete n[mr],delete n[vr]),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cc(t){return 5===t.tag||3===t.tag||4===t.tag}function lc(t){t:for(;;){for(;null===t.sibling;){if(null===t.return||cc(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;5!==t.tag&&6!==t.tag&&18!==t.tag;){if(2&t.flags)continue t;if(null===t.child||4===t.tag)continue t;t.child.return=t,t=t.child}if(!(2&t.flags))return t.stateNode}}function sc(t,n,e){var o=t.tag;if(5===o||6===o)t=t.stateNode,n?8===e.nodeType?e.parentNode.insertBefore(t,n):e.insertBefore(t,n):(8===e.nodeType?(n=e.parentNode).insertBefore(t,e):(n=e).appendChild(t),null!=(e=e._reactRootContainer)||null!==n.onclick||(n.onclick=tr));else if(4!==o&&null!==(t=t.child))for(sc(t,n,e),t=t.sibling;null!==t;)sc(t,n,e),t=t.sibling}function bc(t,n,e){var o=t.tag;if(5===o||6===o)t=t.stateNode,n?e.insertBefore(t,n):e.appendChild(t);else if(4!==o&&null!==(t=t.child))for(bc(t,n,e),t=t.sibling;null!==t;)bc(t,n,e),t=t.sibling}var dc=null,uc=!1;function pc(t,n,e){for(e=e.child;null!==e;)hc(t,n,e),e=e.sibling}function hc(t,n,e){if(an&&"function"==typeof an.onCommitFiberUnmount)try{an.onCommitFiberUnmount(rn,e)}catch(t){}switch(e.tag){case 5:Jf||nc(e,n);case 6:var o=dc,r=uc;dc=null,pc(t,n,e),uc=r,null!==(dc=o)&&(uc?(t=dc,e=e.stateNode,8===t.nodeType?t.parentNode.removeChild(e):t.removeChild(e)):dc.removeChild(e.stateNode));break;case 18:null!==dc&&(uc?(t=dc,e=e.stateNode,8===t.nodeType?lr(t.parentNode,e):1===t.nodeType&&lr(t,e),Dn(t)):lr(dc,e.stateNode));break;case 4:o=dc,r=uc,dc=e.stateNode.containerInfo,uc=!0,pc(t,n,e),dc=o,uc=r;break;case 0:case 11:case 14:case 15:if(!Jf&&null!==(o=e.updateQueue)&&null!==(o=o.lastEffect)){r=o=o.next;do{var a=r,i=a.destroy;a=a.tag,void 0!==i&&(0!=(2&a)||0!=(4&a))&&ec(e,n,i),r=r.next}while(r!==o)}pc(t,n,e);break;case 1:if(!Jf&&(nc(e,n),"function"==typeof(o=e.stateNode).componentWillUnmount))try{o.props=e.memoizedProps,o.state=e.memoizedState,o.componentWillUnmount()}catch(t){Sl(e,n,t)}pc(t,n,e);break;case 21:pc(t,n,e);break;case 22:1&e.mode?(Jf=(o=Jf)||null!==e.memoizedState,pc(t,n,e),Jf=o):pc(t,n,e);break;default:pc(t,n,e)}}function gc(t){var n=t.updateQueue;if(null!==n){t.updateQueue=null;var e=t.stateNode;null===e&&(e=t.stateNode=new Zf),n.forEach((function(n){var o=$l.bind(null,t,n);e.has(n)||(e.add(n),n.then(o,o))}))}}function mc(t,n){var e=n.deletions;if(null!==e)for(var o=0;o<e.length;o++){var r=e[o];try{var i=t,f=n,c=f;t:for(;null!==c;){switch(c.tag){case 5:dc=c.stateNode,uc=!1;break t;case 3:case 4:dc=c.stateNode.containerInfo,uc=!0;break t}c=c.return}if(null===dc)throw Error(a(160));hc(i,f,r),dc=null,uc=!1;var l=r.alternate;null!==l&&(l.return=null),r.return=null}catch(t){Sl(r,n,t)}}if(12854&n.subtreeFlags)for(n=n.child;null!==n;)vc(n,t),n=n.sibling}function vc(t,n){var e=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(mc(n,t),kc(t),4&o){try{rc(3,t,t.return),ac(3,t)}catch(n){Sl(t,t.return,n)}try{rc(5,t,t.return)}catch(n){Sl(t,t.return,n)}}break;case 1:mc(n,t),kc(t),512&o&&null!==e&&nc(e,e.return);break;case 5:if(mc(n,t),kc(t),512&o&&null!==e&&nc(e,e.return),32&t.flags){var r=t.stateNode;try{dt(r,"")}catch(n){Sl(t,t.return,n)}}if(4&o&&null!=(r=t.stateNode)){var i=t.memoizedProps,f=null!==e?e.memoizedProps:i,c=t.type,l=t.updateQueue;if(t.updateQueue=null,null!==l)try{"input"===c&&"radio"===i.type&&null!=i.name&&Q(r,i),kt(c,f);var s=kt(c,i);for(f=0;f<l.length;f+=2){var b=l[f],d=l[f+1];"style"===b?gt(r,d):"dangerouslySetInnerHTML"===b?bt(r,d):"children"===b?dt(r,d):k(r,b,d,s)}switch(c){case"input":J(r,i);break;case"textarea":at(r,i);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var p=i.value;null!=p?et(r,!!i.multiple,p,!1):u!==!!i.multiple&&(null!=i.defaultValue?et(r,!!i.multiple,i.defaultValue,!0):et(r,!!i.multiple,i.multiple?[]:"",!1))}r[pr]=i}catch(n){Sl(t,t.return,n)}}break;case 6:if(mc(n,t),kc(t),4&o){if(null===t.stateNode)throw Error(a(162));r=t.stateNode,i=t.memoizedProps;try{r.nodeValue=i}catch(n){Sl(t,t.return,n)}}break;case 3:if(mc(n,t),kc(t),4&o&&null!==e&&e.memoizedState.isDehydrated)try{Dn(n.containerInfo)}catch(n){Sl(t,t.return,n)}break;case 4:default:mc(n,t),kc(t);break;case 13:mc(n,t),kc(t),8192&(r=t.child).flags&&(i=null!==r.memoizedState,r.stateNode.isHidden=i,!i||null!==r.alternate&&null!==r.alternate.memoizedState||(Dc=Qt())),4&o&&gc(t);break;case 22:if(b=null!==e&&null!==e.memoizedState,1&t.mode?(Jf=(s=Jf)||b,mc(n,t),Jf=s):mc(n,t),kc(t),8192&o){if(s=null!==t.memoizedState,(t.stateNode.isHidden=s)&&!b&&0!=(1&t.mode))for(tc=t,b=t.child;null!==b;){for(d=tc=b;null!==tc;){switch(p=(u=tc).child,u.tag){case 0:case 11:case 14:case 15:rc(4,u,u.return);break;case 1:nc(u,u.return);var h=u.stateNode;if("function"==typeof h.componentWillUnmount){o=u,e=u.return;try{n=o,h.props=n.memoizedProps,h.state=n.memoizedState,h.componentWillUnmount()}catch(t){Sl(o,e,t)}}break;case 5:nc(u,u.return);break;case 22:if(null!==u.memoizedState){_c(d);continue}}null!==p?(p.return=u,tc=p):_c(d)}b=b.sibling}t:for(b=null,d=t;;){if(5===d.tag){if(null===b){b=d;try{r=d.stateNode,s?"function"==typeof(i=r.style).setProperty?i.setProperty("display","none","important"):i.display="none":(c=d.stateNode,f=null!=(l=d.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,c.style.display=ht("display",f))}catch(n){Sl(t,t.return,n)}}}else if(6===d.tag){if(null===b)try{d.stateNode.nodeValue=s?"":d.memoizedProps}catch(n){Sl(t,t.return,n)}}else if((22!==d.tag&&23!==d.tag||null===d.memoizedState||d===t)&&null!==d.child){d.child.return=d,d=d.child;continue}if(d===t)break t;for(;null===d.sibling;){if(null===d.return||d.return===t)break t;b===d&&(b=null),d=d.return}b===d&&(b=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:mc(n,t),kc(t),4&o&&gc(t);case 21:}}function kc(t){var n=t.flags;if(2&n){try{t:{for(var e=t.return;null!==e;){if(cc(e)){var o=e;break t}e=e.return}throw Error(a(160))}switch(o.tag){case 5:var r=o.stateNode;32&o.flags&&(dt(r,""),o.flags&=-33),bc(t,lc(t),r);break;case 3:case 4:var i=o.stateNode.containerInfo;sc(t,lc(t),i);break;default:throw Error(a(161))}}catch(n){Sl(t,t.return,n)}t.flags&=-3}4096&n&&(t.flags&=-4097)}function wc(t,n,e){tc=t,yc(t,n,e)}function yc(t,n,e){for(var o=0!=(1&t.mode);null!==tc;){var r=tc,a=r.child;if(22===r.tag&&o){var i=null!==r.memoizedState||Qf;if(!i){var f=r.alternate,c=null!==f&&null!==f.memoizedState||Jf;f=Qf;var l=Jf;if(Qf=i,(Jf=c)&&!l)for(tc=r;null!==tc;)c=(i=tc).child,22===i.tag&&null!==i.memoizedState?zc(r):null!==c?(c.return=i,tc=c):zc(r);for(;null!==a;)tc=a,yc(a,n,e),a=a.sibling;tc=r,Qf=f,Jf=l}xc(t)}else 0!=(8772&r.subtreeFlags)&&null!==a?(a.return=r,tc=a):xc(t)}}function xc(t){for(;null!==tc;){var n=tc;if(0!=(8772&n.flags)){var e=n.alternate;try{if(0!=(8772&n.flags))switch(n.tag){case 0:case 11:case 15:Jf||ac(5,n);break;case 1:var o=n.stateNode;if(4&n.flags&&!Jf)if(null===e)o.componentDidMount();else{var r=n.elementType===n.type?e.memoizedProps:ma(n.type,e.memoizedProps);o.componentDidUpdate(r,e.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;null!==i&&Ra(n,i,o);break;case 3:var f=n.updateQueue;if(null!==f){if(e=null,null!==n.child)switch(n.child.tag){case 5:case 1:e=n.child.stateNode}Ra(n,f,e)}break;case 5:var c=n.stateNode;if(null===e&&4&n.flags){e=c;var l=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&e.focus();break;case"img":l.src&&(e.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===n.memoizedState){var s=n.alternate;if(null!==s){var b=s.memoizedState;if(null!==b){var d=b.dehydrated;null!==d&&Dn(d)}}}break;default:throw Error(a(163))}Jf||512&n.flags&&ic(n)}catch(t){Sl(n,n.return,t)}}if(n===t){tc=null;break}if(null!==(e=n.sibling)){e.return=n.return,tc=e;break}tc=n.return}}function _c(t){for(;null!==tc;){var n=tc;if(n===t){tc=null;break}var e=n.sibling;if(null!==e){e.return=n.return,tc=e;break}tc=n.return}}function zc(t){for(;null!==tc;){var n=tc;try{switch(n.tag){case 0:case 11:case 15:var e=n.return;try{ac(4,n)}catch(t){Sl(n,e,t)}break;case 1:var o=n.stateNode;if("function"==typeof o.componentDidMount){var r=n.return;try{o.componentDidMount()}catch(t){Sl(n,r,t)}}var a=n.return;try{ic(n)}catch(t){Sl(n,a,t)}break;case 5:var i=n.return;try{ic(n)}catch(t){Sl(n,i,t)}}}catch(t){Sl(n,n.return,t)}if(n===t){tc=null;break}var f=n.sibling;if(null!==f){f.return=n.return,tc=f;break}tc=n.return}}var Lc,Sc=Math.ceil,Oc=w.ReactCurrentDispatcher,Tc=w.ReactCurrentOwner,Ec=w.ReactCurrentBatchConfig,$c=0,Nc=null,Ac=null,Cc=0,qc=0,Ic=Lr(0),jc=0,Fc=null,Pc=0,Rc=0,Kc=0,Uc=null,Bc=null,Dc=0,Mc=1/0,Vc=null,Hc=!1,Yc=null,Xc=null,Wc=!1,Gc=null,Qc=0,Jc=0,Zc=null,tl=-1,nl=0;function el(){return 0!=(6&$c)?Qt():-1!==tl?tl:tl=Qt()}function ol(t){return 0==(1&t.mode)?1:0!=(2&$c)&&0!==Cc?Cc&-Cc:null!==ga.transition?(0===nl&&(nl=gn()),nl):0!==(t=wn)?t:t=void 0===(t=window.event)?16:Qn(t.type)}function rl(t,n,e,o){if(50<Jc)throw Jc=0,Zc=null,Error(a(185));vn(t,e,o),0!=(2&$c)&&t===Nc||(t===Nc&&(0==(2&$c)&&(Rc|=e),4===jc&&ll(t,Cc)),al(t,o),1===e&&0===$c&&0==(1&n.mode)&&(Mc=Qt()+500,Kr&&Dr()))}function al(t,n){var e=t.callbackNode;!function(t,n){for(var e=t.suspendedLanes,o=t.pingedLanes,r=t.expirationTimes,a=t.pendingLanes;0<a;){var i=31-fn(a),f=1<<i,c=r[i];-1===c?0!=(f&e)&&0==(f&o)||(r[i]=pn(f,n)):c<=n&&(t.expiredLanes|=f),a&=~f}}(t,n);var o=un(t,t===Nc?Cc:0);if(0===o)null!==e&&Xt(e),t.callbackNode=null,t.callbackPriority=0;else if(n=o&-o,t.callbackPriority!==n){if(null!=e&&Xt(e),1===n)0===t.tag?function(t){Kr=!0,Br(t)}(sl.bind(null,t)):Br(sl.bind(null,t)),fr((function(){0==(6&$c)&&Dr()})),e=null;else{switch(yn(o)){case 1:e=Zt;break;case 4:e=tn;break;case 16:default:e=nn;break;case 536870912:e=on}e=Nl(e,il.bind(null,t))}t.callbackPriority=n,t.callbackNode=e}}function il(t,n){if(tl=-1,nl=0,0!=(6&$c))throw Error(a(327));var e=t.callbackNode;if(zl()&&t.callbackNode!==e)return null;var o=un(t,t===Nc?Cc:0);if(0===o)return null;if(0!=(30&o)||0!=(o&t.expiredLanes)||n)n=vl(t,o);else{n=o;var r=$c;$c|=2;var i=gl();for(Nc===t&&Cc===n||(Vc=null,Mc=Qt()+500,pl(t,n));;)try{wl();break}catch(n){hl(t,n)}xa(),Oc.current=i,$c=r,null!==Ac?n=0:(Nc=null,Cc=0,n=jc)}if(0!==n){if(2===n&&0!==(r=hn(t))&&(o=r,n=fl(t,r)),1===n)throw e=Fc,pl(t,0),ll(t,o),al(t,Qt()),e;if(6===n)ll(t,o);else{if(r=t.current.alternate,0==(30&o)&&!function(t){for(var n=t;;){if(16384&n.flags){var e=n.updateQueue;if(null!==e&&null!==(e=e.stores))for(var o=0;o<e.length;o++){var r=e[o],a=r.getSnapshot;r=r.value;try{if(!fo(a(),r))return!1}catch(t){return!1}}}if(e=n.child,16384&n.subtreeFlags&&null!==e)e.return=n,n=e;else{if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}(r)&&(2===(n=vl(t,o))&&0!==(i=hn(t))&&(o=i,n=fl(t,i)),1===n))throw e=Fc,pl(t,0),ll(t,o),al(t,Qt()),e;switch(t.finishedWork=r,t.finishedLanes=o,n){case 0:case 1:throw Error(a(345));case 2:case 5:_l(t,Bc,Vc);break;case 3:if(ll(t,o),(130023424&o)===o&&10<(n=Dc+500-Qt())){if(0!==un(t,0))break;if(((r=t.suspendedLanes)&o)!==o){el(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=rr(_l.bind(null,t,Bc,Vc),n);break}_l(t,Bc,Vc);break;case 4:if(ll(t,o),(4194240&o)===o)break;for(n=t.eventTimes,r=-1;0<o;){var f=31-fn(o);i=1<<f,(f=n[f])>r&&(r=f),o&=~i}if(o=r,10<(o=(120>(o=Qt()-o)?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Sc(o/1960))-o)){t.timeoutHandle=rr(_l.bind(null,t,Bc,Vc),o);break}_l(t,Bc,Vc);break;default:throw Error(a(329))}}}return al(t,Qt()),t.callbackNode===e?il.bind(null,t):null}function fl(t,n){var e=Uc;return t.current.memoizedState.isDehydrated&&(pl(t,n).flags|=256),2!==(t=vl(t,n))&&(n=Bc,Bc=e,null!==n&&cl(n)),t}function cl(t){null===Bc?Bc=t:Bc.push.apply(Bc,t)}function ll(t,n){for(n&=~Kc,n&=~Rc,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var e=31-fn(n),o=1<<e;t[e]=-1,n&=~o}}function sl(t){if(0!=(6&$c))throw Error(a(327));zl();var n=un(t,0);if(0==(1&n))return al(t,Qt()),null;var e=vl(t,n);if(0!==t.tag&&2===e){var o=hn(t);0!==o&&(n=o,e=fl(t,o))}if(1===e)throw e=Fc,pl(t,0),ll(t,n),al(t,Qt()),e;if(6===e)throw Error(a(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,_l(t,Bc,Vc),al(t,Qt()),null}function bl(t,n){var e=$c;$c|=1;try{return t(n)}finally{0===($c=e)&&(Mc=Qt()+500,Kr&&Dr())}}function dl(t){null!==Gc&&0===Gc.tag&&0==(6&$c)&&zl();var n=$c;$c|=1;var e=Ec.transition,o=wn;try{if(Ec.transition=null,wn=1,t)return t()}finally{wn=o,Ec.transition=e,0==(6&($c=n))&&Dr()}}function ul(){qc=Ic.current,Sr(Ic)}function pl(t,n){t.finishedWork=null,t.finishedLanes=0;var e=t.timeoutHandle;if(-1!==e&&(t.timeoutHandle=-1,ar(e)),null!==Ac)for(e=Ac.return;null!==e;){var o=e;switch(ea(o),o.tag){case 1:null!=(o=o.type.childContextTypes)&&qr();break;case 3:ai(),Sr($r),Sr(Er),bi();break;case 5:fi(o);break;case 4:ai();break;case 13:case 19:Sr(ci);break;case 10:_a(o.type._context);break;case 22:case 23:ul()}e=e.return}if(Nc=t,Ac=t=Il(t.current,null),Cc=qc=n,jc=0,Fc=null,Kc=Rc=Pc=0,Bc=Uc=null,null!==Oa){for(n=0;n<Oa.length;n++)if(null!==(o=(e=Oa[n]).interleaved)){e.interleaved=null;var r=o.next,a=e.pending;if(null!==a){var i=a.next;a.next=r,o.next=i}e.pending=o}Oa=null}return t}function hl(t,n){for(;;){var e=Ac;try{if(xa(),di.current=ff,vi){for(var o=hi.memoizedState;null!==o;){var r=o.queue;null!==r&&(r.pending=null),o=o.next}vi=!1}if(pi=0,mi=gi=hi=null,ki=!1,wi=0,Tc.current=null,null===e||null===e.return){jc=1,Fc=n,Ac=null;break}t:{var i=t,f=e.return,c=e,l=n;if(n=Cc,c.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var s=l,b=c,d=b.tag;if(0==(1&b.mode)&&(0===d||11===d||15===d)){var u=b.alternate;u?(b.updateQueue=u.updateQueue,b.memoizedState=u.memoizedState,b.lanes=u.lanes):(b.updateQueue=null,b.memoizedState=null)}var p=vf(f);if(null!==p){p.flags&=-257,kf(p,f,c,0,n),1&p.mode&&mf(i,s,n),l=s;var h=(n=p).updateQueue;if(null===h){var g=new Set;g.add(l),n.updateQueue=g}else h.add(l);break t}if(0==(1&n)){mf(i,s,n),ml();break t}l=Error(a(426))}else if(aa&&1&c.mode){var m=vf(f);if(null!==m){0==(65536&m.flags)&&(m.flags|=256),kf(m,f,c,0,n),ha(bf(l,c));break t}}i=l=bf(l,c),4!==jc&&(jc=2),null===Uc?Uc=[i]:Uc.push(i),i=f;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n,Fa(i,hf(0,l,n));break t;case 1:c=l;var v=i.type,k=i.stateNode;if(0==(128&i.flags)&&("function"==typeof v.getDerivedStateFromError||null!==k&&"function"==typeof k.componentDidCatch&&(null===Xc||!Xc.has(k)))){i.flags|=65536,n&=-n,i.lanes|=n,Fa(i,gf(i,c,n));break t}}i=i.return}while(null!==i)}xl(e)}catch(t){n=t,Ac===e&&null!==e&&(Ac=e=e.return);continue}break}}function gl(){var t=Oc.current;return Oc.current=ff,null===t?ff:t}function ml(){0!==jc&&3!==jc&&2!==jc||(jc=4),null===Nc||0==(268435455&Pc)&&0==(268435455&Rc)||ll(Nc,Cc)}function vl(t,n){var e=$c;$c|=2;var o=gl();for(Nc===t&&Cc===n||(Vc=null,pl(t,n));;)try{kl();break}catch(n){hl(t,n)}if(xa(),$c=e,Oc.current=o,null!==Ac)throw Error(a(261));return Nc=null,Cc=0,jc}function kl(){for(;null!==Ac;)yl(Ac)}function wl(){for(;null!==Ac&&!Wt();)yl(Ac)}function yl(t){var n=Lc(t.alternate,t,qc);t.memoizedProps=t.pendingProps,null===n?xl(t):Ac=n,Tc.current=null}function xl(t){var n=t;do{var e=n.alternate;if(t=n.return,0==(32768&n.flags)){if(null!==(e=Wf(e,n,qc)))return void(Ac=e)}else{if(null!==(e=Gf(e,n)))return e.flags&=32767,void(Ac=e);if(null===t)return jc=6,void(Ac=null);t.flags|=32768,t.subtreeFlags=0,t.deletions=null}if(null!==(n=n.sibling))return void(Ac=n);Ac=n=t}while(null!==n);0===jc&&(jc=5)}function _l(t,n,e){var o=wn,r=Ec.transition;try{Ec.transition=null,wn=1,function(t,n,e,o){do{zl()}while(null!==Gc);if(0!=(6&$c))throw Error(a(327));e=t.finishedWork;var r=t.finishedLanes;if(null===e)return null;if(t.finishedWork=null,t.finishedLanes=0,e===t.current)throw Error(a(177));t.callbackNode=null,t.callbackPriority=0;var i=e.lanes|e.childLanes;if(function(t,n){var e=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var o=t.eventTimes;for(t=t.expirationTimes;0<e;){var r=31-fn(e),a=1<<r;n[r]=0,o[r]=-1,t[r]=-1,e&=~a}}(t,i),t===Nc&&(Ac=Nc=null,Cc=0),0==(2064&e.subtreeFlags)&&0==(2064&e.flags)||Wc||(Wc=!0,Nl(nn,(function(){return zl(),null}))),i=0!=(15990&e.flags),0!=(15990&e.subtreeFlags)||i){i=Ec.transition,Ec.transition=null;var f=wn;wn=1;var c=$c;$c|=4,Tc.current=null,function(t,n){if(nr=Vn,po(t=uo())){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{var o=(e=(e=t.ownerDocument)&&e.defaultView||window).getSelection&&e.getSelection();if(o&&0!==o.rangeCount){e=o.anchorNode;var r=o.anchorOffset,i=o.focusNode;o=o.focusOffset;try{e.nodeType,i.nodeType}catch(t){e=null;break t}var f=0,c=-1,l=-1,s=0,b=0,d=t,u=null;n:for(;;){for(var p;d!==e||0!==r&&3!==d.nodeType||(c=f+r),d!==i||0!==o&&3!==d.nodeType||(l=f+o),3===d.nodeType&&(f+=d.nodeValue.length),null!==(p=d.firstChild);)u=d,d=p;for(;;){if(d===t)break n;if(u===e&&++s===r&&(c=f),u===i&&++b===o&&(l=f),null!==(p=d.nextSibling))break;u=(d=u).parentNode}d=p}e=-1===c||-1===l?null:{start:c,end:l}}else e=null}e=e||{start:0,end:0}}else e=null;for(er={focusedElem:t,selectionRange:e},Vn=!1,tc=n;null!==tc;)if(t=(n=tc).child,0!=(1028&n.subtreeFlags)&&null!==t)t.return=n,tc=t;else for(;null!==tc;){n=tc;try{var h=n.alternate;if(0!=(1024&n.flags))switch(n.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==h){var g=h.memoizedProps,m=h.memoizedState,v=n.stateNode,k=v.getSnapshotBeforeUpdate(n.elementType===n.type?g:ma(n.type,g),m);v.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var w=n.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(a(163))}}catch(t){Sl(n,n.return,t)}if(null!==(t=n.sibling)){t.return=n.return,tc=t;break}tc=n.return}h=oc,oc=!1}(t,e),vc(e,t),ho(er),Vn=!!nr,er=nr=null,t.current=e,wc(e,t,r),Gt(),$c=c,wn=f,Ec.transition=i}else t.current=e;if(Wc&&(Wc=!1,Gc=t,Qc=r),0===(i=t.pendingLanes)&&(Xc=null),function(t){if(an&&"function"==typeof an.onCommitFiberRoot)try{an.onCommitFiberRoot(rn,t,void 0,128==(128&t.current.flags))}catch(t){}}(e.stateNode),al(t,Qt()),null!==n)for(o=t.onRecoverableError,e=0;e<n.length;e++)o((r=n[e]).value,{componentStack:r.stack,digest:r.digest});if(Hc)throw Hc=!1,t=Yc,Yc=null,t;0!=(1&Qc)&&0!==t.tag&&zl(),0!=(1&(i=t.pendingLanes))?t===Zc?Jc++:(Jc=0,Zc=t):Jc=0,Dr()}(t,n,e,o)}finally{Ec.transition=r,wn=o}return null}function zl(){if(null!==Gc){var t=yn(Qc),n=Ec.transition,e=wn;try{if(Ec.transition=null,wn=16>t?16:t,null===Gc)var o=!1;else{if(t=Gc,Gc=null,Qc=0,0!=(6&$c))throw Error(a(331));var r=$c;for($c|=4,tc=t.current;null!==tc;){var i=tc,f=i.child;if(0!=(16&tc.flags)){var c=i.deletions;if(null!==c){for(var l=0;l<c.length;l++){var s=c[l];for(tc=s;null!==tc;){var b=tc;switch(b.tag){case 0:case 11:case 15:rc(8,b,i)}var d=b.child;if(null!==d)d.return=b,tc=d;else for(;null!==tc;){var u=(b=tc).sibling,p=b.return;if(fc(b),b===s){tc=null;break}if(null!==u){u.return=p,tc=u;break}tc=p}}}var h=i.alternate;if(null!==h){var g=h.child;if(null!==g){h.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(null!==g)}}tc=i}}if(0!=(2064&i.subtreeFlags)&&null!==f)f.return=i,tc=f;else t:for(;null!==tc;){if(0!=(2048&(i=tc).flags))switch(i.tag){case 0:case 11:case 15:rc(9,i,i.return)}var v=i.sibling;if(null!==v){v.return=i.return,tc=v;break t}tc=i.return}}var k=t.current;for(tc=k;null!==tc;){var w=(f=tc).child;if(0!=(2064&f.subtreeFlags)&&null!==w)w.return=f,tc=w;else t:for(f=k;null!==tc;){if(0!=(2048&(c=tc).flags))try{switch(c.tag){case 0:case 11:case 15:ac(9,c)}}catch(t){Sl(c,c.return,t)}if(c===f){tc=null;break t}var y=c.sibling;if(null!==y){y.return=c.return,tc=y;break t}tc=c.return}}if($c=r,Dr(),an&&"function"==typeof an.onPostCommitFiberRoot)try{an.onPostCommitFiberRoot(rn,t)}catch(t){}o=!0}return o}finally{wn=e,Ec.transition=n}}return!1}function Ll(t,n,e){t=Ia(t,n=hf(0,n=bf(e,n),1),1),n=el(),null!==t&&(vn(t,1,n),al(t,n))}function Sl(t,n,e){if(3===t.tag)Ll(t,t,e);else for(;null!==n;){if(3===n.tag){Ll(n,t,e);break}if(1===n.tag){var o=n.stateNode;if("function"==typeof n.type.getDerivedStateFromError||"function"==typeof o.componentDidCatch&&(null===Xc||!Xc.has(o))){n=Ia(n,t=gf(n,t=bf(e,t),1),1),t=el(),null!==n&&(vn(n,1,t),al(n,t));break}}n=n.return}}function Ol(t,n,e){var o=t.pingCache;null!==o&&o.delete(n),n=el(),t.pingedLanes|=t.suspendedLanes&e,Nc===t&&(Cc&e)===e&&(4===jc||3===jc&&(130023424&Cc)===Cc&&500>Qt()-Dc?pl(t,0):Kc|=e),al(t,n)}function Tl(t,n){0===n&&(0==(1&t.mode)?n=1:(n=bn,0==(130023424&(bn<<=1))&&(bn=4194304)));var e=el();null!==(t=$a(t,n))&&(vn(t,n,e),al(t,e))}function El(t){var n=t.memoizedState,e=0;null!==n&&(e=n.retryLane),Tl(t,e)}function $l(t,n){var e=0;switch(t.tag){case 13:var o=t.stateNode,r=t.memoizedState;null!==r&&(e=r.retryLane);break;case 19:o=t.stateNode;break;default:throw Error(a(314))}null!==o&&o.delete(n),Tl(t,e)}function Nl(t,n){return Yt(t,n)}function Al(t,n,e,o){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cl(t,n,e,o){return new Al(t,n,e,o)}function ql(t){return!(!(t=t.prototype)||!t.isReactComponent)}function Il(t,n){var e=t.alternate;return null===e?((e=Cl(t.tag,n,t.key,t.mode)).elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=n,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=14680064&t.flags,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,n=t.dependencies,e.dependencies=null===n?null:{lanes:n.lanes,firstContext:n.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e}function jl(t,n,e,o,r,i){var f=2;if(o=t,"function"==typeof t)ql(t)&&(f=1);else if("string"==typeof t)f=5;else t:switch(t){case _:return Fl(e.children,r,i,n);case z:f=8,r|=8;break;case L:return(t=Cl(12,e,n,2|r)).elementType=L,t.lanes=i,t;case E:return(t=Cl(13,e,n,r)).elementType=E,t.lanes=i,t;case $:return(t=Cl(19,e,n,r)).elementType=$,t.lanes=i,t;case C:return Pl(e,r,i,n);default:if("object"==typeof t&&null!==t)switch(t.$$typeof){case S:f=10;break t;case O:f=9;break t;case T:f=11;break t;case N:f=14;break t;case A:f=16,o=null;break t}throw Error(a(130,null==t?t:typeof t,""))}return(n=Cl(f,e,n,r)).elementType=t,n.type=o,n.lanes=i,n}function Fl(t,n,e,o){return(t=Cl(7,t,o,n)).lanes=e,t}function Pl(t,n,e,o){return(t=Cl(22,t,o,n)).elementType=C,t.lanes=e,t.stateNode={isHidden:!1},t}function Rl(t,n,e){return(t=Cl(6,t,null,n)).lanes=e,t}function Kl(t,n,e){return(n=Cl(4,null!==t.children?t.children:[],t.key,n)).lanes=e,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function Ul(t,n,e,o,r){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mn(0),this.expirationTimes=mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mn(0),this.identifierPrefix=o,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Bl(t,n,e,o,r,a,i,f,c){return t=new Ul(t,n,e,f,c),1===n?(n=1,!0===a&&(n|=8)):n=0,a=Cl(3,null,null,n),t.current=a,a.stateNode=t,a.memoizedState={element:o,isDehydrated:e,cache:null,transitions:null,pendingSuspenseBoundaries:null},Aa(a),t}function Dl(t){if(!t)return Tr;t:{if(Bt(t=t._reactInternals)!==t||1!==t.tag)throw Error(a(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break t;case 1:if(Cr(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break t}}n=n.return}while(null!==n);throw Error(a(171))}if(1===t.tag){var e=t.type;if(Cr(e))return jr(t,e,n)}return n}function Ml(t,n,e,o,r,a,i,f,c){return(t=Bl(e,o,!0,t,0,a,0,f,c)).context=Dl(null),e=t.current,(a=qa(o=el(),r=ol(e))).callback=null!=n?n:null,Ia(e,a,r),t.current.lanes=r,vn(t,r,o),al(t,o),t}function Vl(t,n,e,o){var r=n.current,a=el(),i=ol(r);return e=Dl(e),null===n.context?n.context=e:n.pendingContext=e,(n=qa(a,i)).payload={element:t},null!==(o=void 0===o?null:o)&&(n.callback=o),null!==(t=Ia(r,n,i))&&(rl(t,r,i,a),ja(t,r,i)),i}function Hl(t){return(t=t.current).child?(t.child.tag,t.child.stateNode):null}function Yl(t,n){if(null!==(t=t.memoizedState)&&null!==t.dehydrated){var e=t.retryLane;t.retryLane=0!==e&&e<n?e:n}}function Xl(t,n){Yl(t,n),(t=t.alternate)&&Yl(t,n)}Lc=function(t,n,e){if(null!==t)if(t.memoizedProps!==n.pendingProps||$r.current)yf=!0;else{if(0==(t.lanes&e)&&0==(128&n.flags))return yf=!1,function(t,n,e){switch(n.tag){case 3:Nf(n),pa();break;case 5:ii(n);break;case 1:Cr(n.type)&&Fr(n);break;case 4:ri(n,n.stateNode.containerInfo);break;case 10:var o=n.type._context,r=n.memoizedProps.value;Or(va,o._currentValue),o._currentValue=r;break;case 13:if(null!==(o=n.memoizedState))return null!==o.dehydrated?(Or(ci,1&ci.current),n.flags|=128,null):0!=(e&n.child.childLanes)?Rf(t,n,e):(Or(ci,1&ci.current),null!==(t=Hf(t,n,e))?t.sibling:null);Or(ci,1&ci.current);break;case 19:if(o=0!=(e&n.childLanes),0!=(128&t.flags)){if(o)return Mf(t,n,e);n.flags|=128}if(null!==(r=n.memoizedState)&&(r.rendering=null,r.tail=null,r.lastEffect=null),Or(ci,ci.current),o)break;return null;case 22:case 23:return n.lanes=0,Sf(t,n,e)}return Hf(t,n,e)}(t,n,e);yf=0!=(131072&t.flags)}else yf=!1,aa&&0!=(1048576&n.flags)&&ta(n,Yr,n.index);switch(n.lanes=0,n.tag){case 2:var o=n.type;Vf(t,n),t=n.pendingProps;var r=Ar(n,Er.current);La(n,e),r=zi(null,n,o,t,r,e);var i=Li();return n.flags|=1,"object"==typeof r&&null!==r&&"function"==typeof r.render&&void 0===r.$$typeof?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Cr(o)?(i=!0,Fr(n)):i=!1,n.memoizedState=null!==r.state&&void 0!==r.state?r.state:null,Aa(n),r.updater=Ba,n.stateNode=r,r._reactInternals=n,Ha(n,o,t,e),n=$f(null,n,o,!0,i,e)):(n.tag=0,aa&&i&&na(n),xf(null,n,r,e),n=n.child),n;case 16:o=n.elementType;t:{switch(Vf(t,n),t=n.pendingProps,o=(r=o._init)(o._payload),n.type=o,r=n.tag=function(t){if("function"==typeof t)return ql(t)?1:0;if(null!=t){if((t=t.$$typeof)===T)return 11;if(t===N)return 14}return 2}(o),t=ma(o,t),r){case 0:n=Tf(null,n,o,t,e);break t;case 1:n=Ef(null,n,o,t,e);break t;case 11:n=_f(null,n,o,t,e);break t;case 14:n=zf(null,n,o,ma(o.type,t),e);break t}throw Error(a(306,o,""))}return n;case 0:return o=n.type,r=n.pendingProps,Tf(t,n,o,r=n.elementType===o?r:ma(o,r),e);case 1:return o=n.type,r=n.pendingProps,Ef(t,n,o,r=n.elementType===o?r:ma(o,r),e);case 3:t:{if(Nf(n),null===t)throw Error(a(387));o=n.pendingProps,r=(i=n.memoizedState).element,Ca(t,n),Pa(n,o,null,e);var f=n.memoizedState;if(o=f.element,i.isDehydrated){if(i={element:o,isDehydrated:!1,cache:f.cache,pendingSuspenseBoundaries:f.pendingSuspenseBoundaries,transitions:f.transitions},n.updateQueue.baseState=i,n.memoizedState=i,256&n.flags){n=Af(t,n,o,e,r=bf(Error(a(423)),n));break t}if(o!==r){n=Af(t,n,o,e,r=bf(Error(a(424)),n));break t}for(ra=sr(n.stateNode.containerInfo.firstChild),oa=n,aa=!0,ia=null,e=Ja(n,null,o,e),n.child=e;e;)e.flags=-3&e.flags|4096,e=e.sibling}else{if(pa(),o===r){n=Hf(t,n,e);break t}xf(t,n,o,e)}n=n.child}return n;case 5:return ii(n),null===t&&sa(n),o=n.type,r=n.pendingProps,i=null!==t?t.memoizedProps:null,f=r.children,or(o,r)?f=null:null!==i&&or(o,i)&&(n.flags|=32),Of(t,n),xf(t,n,f,e),n.child;case 6:return null===t&&sa(n),null;case 13:return Rf(t,n,e);case 4:return ri(n,n.stateNode.containerInfo),o=n.pendingProps,null===t?n.child=Qa(n,null,o,e):xf(t,n,o,e),n.child;case 11:return o=n.type,r=n.pendingProps,_f(t,n,o,r=n.elementType===o?r:ma(o,r),e);case 7:return xf(t,n,n.pendingProps,e),n.child;case 8:case 12:return xf(t,n,n.pendingProps.children,e),n.child;case 10:t:{if(o=n.type._context,r=n.pendingProps,i=n.memoizedProps,f=r.value,Or(va,o._currentValue),o._currentValue=f,null!==i)if(fo(i.value,f)){if(i.children===r.children&&!$r.current){n=Hf(t,n,e);break t}}else for(null!==(i=n.child)&&(i.return=n);null!==i;){var c=i.dependencies;if(null!==c){f=i.child;for(var l=c.firstContext;null!==l;){if(l.context===o){if(1===i.tag){(l=qa(-1,e&-e)).tag=2;var s=i.updateQueue;if(null!==s){var b=(s=s.shared).pending;null===b?l.next=l:(l.next=b.next,b.next=l),s.pending=l}}i.lanes|=e,null!==(l=i.alternate)&&(l.lanes|=e),za(i.return,e,n),c.lanes|=e;break}l=l.next}}else if(10===i.tag)f=i.type===n.type?null:i.child;else if(18===i.tag){if(null===(f=i.return))throw Error(a(341));f.lanes|=e,null!==(c=f.alternate)&&(c.lanes|=e),za(f,e,n),f=i.sibling}else f=i.child;if(null!==f)f.return=i;else for(f=i;null!==f;){if(f===n){f=null;break}if(null!==(i=f.sibling)){i.return=f.return,f=i;break}f=f.return}i=f}xf(t,n,r.children,e),n=n.child}return n;case 9:return r=n.type,o=n.pendingProps.children,La(n,e),o=o(r=Sa(r)),n.flags|=1,xf(t,n,o,e),n.child;case 14:return r=ma(o=n.type,n.pendingProps),zf(t,n,o,r=ma(o.type,r),e);case 15:return Lf(t,n,n.type,n.pendingProps,e);case 17:return o=n.type,r=n.pendingProps,r=n.elementType===o?r:ma(o,r),Vf(t,n),n.tag=1,Cr(o)?(t=!0,Fr(n)):t=!1,La(n,e),Ma(n,o,r),Ha(n,o,r,e),$f(null,n,o,!0,t,e);case 19:return Mf(t,n,e);case 22:return Sf(t,n,e)}throw Error(a(156,n.tag))};var Wl="function"==typeof reportError?reportError:function(t){console.error(t)};function Gl(t){this._internalRoot=t}function Ql(t){this._internalRoot=t}function Jl(t){return!(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)}function Zl(t){return!(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType&&(8!==t.nodeType||" react-mount-point-unstable "!==t.nodeValue))}function ts(){}function ns(t,n,e,o,r){var a=e._reactRootContainer;if(a){var i=a;if("function"==typeof r){var f=r;r=function(){var t=Hl(i);f.call(t)}}Vl(n,i,t,r)}else i=function(t,n,e,o,r){if(r){if("function"==typeof o){var a=o;o=function(){var t=Hl(i);a.call(t)}}var i=Ml(n,o,t,0,null,!1,0,"",ts);return t._reactRootContainer=i,t[hr]=i.current,Do(8===t.nodeType?t.parentNode:t),dl(),i}for(;r=t.lastChild;)t.removeChild(r);if("function"==typeof o){var f=o;o=function(){var t=Hl(c);f.call(t)}}var c=Bl(t,0,!1,null,0,!1,0,"",ts);return t._reactRootContainer=c,t[hr]=c.current,Do(8===t.nodeType?t.parentNode:t),dl((function(){Vl(n,c,e,o)})),c}(e,n,t,r,o);return Hl(i)}Ql.prototype.render=Gl.prototype.render=function(t){var n=this._internalRoot;if(null===n)throw Error(a(409));Vl(t,n,null,null)},Ql.prototype.unmount=Gl.prototype.unmount=function(){var t=this._internalRoot;if(null!==t){this._internalRoot=null;var n=t.containerInfo;dl((function(){Vl(null,t,null,null)})),n[hr]=null}},Ql.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ln();t={blockedOn:null,target:t,priority:n};for(var e=0;e<qn.length&&0!==n&&n<qn[e].priority;e++);qn.splice(e,0,t),0===e&&Pn(t)}},xn=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var e=dn(n.pendingLanes);0!==e&&(kn(n,1|e),al(n,Qt()),0==(6&$c)&&(Mc=Qt()+500,Dr()))}break;case 13:dl((function(){var n=$a(t,1);if(null!==n){var e=el();rl(n,t,1,e)}})),Xl(t,1)}},_n=function(t){if(13===t.tag){var n=$a(t,134217728);null!==n&&rl(n,t,134217728,el()),Xl(t,134217728)}},zn=function(t){if(13===t.tag){var n=ol(t),e=$a(t,n);null!==e&&rl(e,t,n,el()),Xl(t,n)}},Ln=function(){return wn},Sn=function(t,n){var e=wn;try{return wn=t,n()}finally{wn=e}},xt=function(t,n,e){switch(n){case"input":if(J(t,e),n=e.name,"radio"===e.type&&null!=n){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<e.length;n++){var o=e[n];if(o!==t&&o.form===t.form){var r=xr(o);if(!r)throw Error(a(90));Y(o),J(o,r)}}}break;case"textarea":at(t,e);break;case"select":null!=(n=e.value)&&et(t,!!e.multiple,n,!1)}},Tt=bl,Et=dl;var es={usingClientEntryPoint:!1,Events:[wr,yr,xr,St,Ot,bl]},os={findFiberByHostInstance:kr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},rs={bundleType:os.bundleType,version:os.version,rendererPackageName:os.rendererPackageName,rendererConfig:os.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return null===(t=Vt(t))?null:t.stateNode},findFiberByHostInstance:os.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var as=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!as.isDisabled&&as.supportsFiber)try{rn=as.inject(rs),an=as}catch(st){}}n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=es,n.createPortal=function(t,n){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Jl(n))throw Error(a(200));return function(t,n,e){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:x,key:null==o?null:""+o,children:t,containerInfo:n,implementation:e}}(t,n,null,e)},n.createRoot=function(t,n){if(!Jl(t))throw Error(a(299));var e=!1,o="",r=Wl;return null!=n&&(!0===n.unstable_strictMode&&(e=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(r=n.onRecoverableError)),n=Bl(t,1,!1,null,0,e,0,o,r),t[hr]=n.current,Do(8===t.nodeType?t.parentNode:t),new Gl(n)},n.findDOMNode=function(t){if(null==t)return null;if(1===t.nodeType)return t;var n=t._reactInternals;if(void 0===n){if("function"==typeof t.render)throw Error(a(188));throw t=Object.keys(t).join(","),Error(a(268,t))}return null===(t=Vt(n))?null:t.stateNode},n.flushSync=function(t){return dl(t)},n.hydrate=function(t,n,e){if(!Zl(n))throw Error(a(200));return ns(null,t,n,!0,e)},n.hydrateRoot=function(t,n,e){if(!Jl(t))throw Error(a(405));var o=null!=e&&e.hydratedSources||null,r=!1,i="",f=Wl;if(null!=e&&(!0===e.unstable_strictMode&&(r=!0),void 0!==e.identifierPrefix&&(i=e.identifierPrefix),void 0!==e.onRecoverableError&&(f=e.onRecoverableError)),n=Ml(n,null,t,1,null!=e?e:null,r,0,i,f),t[hr]=n.current,Do(t),o)for(t=0;t<o.length;t++)r=(r=(e=o[t])._getVersion)(e._source),null==n.mutableSourceEagerHydrationData?n.mutableSourceEagerHydrationData=[e,r]:n.mutableSourceEagerHydrationData.push(e,r);return new Ql(n)},n.render=function(t,n,e){if(!Zl(n))throw Error(a(200));return ns(null,t,n,!1,e)},n.unmountComponentAtNode=function(t){if(!Zl(t))throw Error(a(40));return!!t._reactRootContainer&&(dl((function(){ns(null,null,t,!1,(function(){t._reactRootContainer=null,t[hr]=null}))})),!0)},n.unstable_batchedUpdates=bl,n.unstable_renderSubtreeIntoContainer=function(t,n,e,o){if(!Zl(e))throw Error(a(200));if(null==t||void 0===t._reactInternals)throw Error(a(38));return ns(t,n,e,!1,o)},n.version="18.2.0-next-9e3b772b8-20220608"},9543:(t,n,e)=>{"use strict";var o=e(527);n.s=o.createRoot,o.hydrateRoot},527:(t,n,e)=>{"use strict";!function t(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(t){console.error(t)}}(),t.exports=e(2256)},2093:(t,n,e)=>{"use strict";var o=e(8427),r=Symbol.for("react.element"),a=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function c(t,n,e){var o,c={},l=null,s=null;for(o in void 0!==e&&(l=""+e),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(s=n.ref),n)a.call(n,o)&&!f.hasOwnProperty(o)&&(c[o]=n[o]);if(t&&t.defaultProps)for(o in n=t.defaultProps)void 0===c[o]&&(c[o]=n[o]);return{$$typeof:r,type:t,key:l,ref:s,props:c,_owner:i.current}}n.jsx=c,n.jsxs=c},4884:(t,n)=>{"use strict";var e=Symbol.for("react.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),u=Symbol.iterator,p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function m(t,n,e){this.props=t,this.context=n,this.refs=g,this.updater=e||p}function v(){}function k(t,n,e){this.props=t,this.context=n,this.refs=g,this.updater=e||p}m.prototype.isReactComponent={},m.prototype.setState=function(t,n){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,n,"setState")},m.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},v.prototype=m.prototype;var w=k.prototype=new v;w.constructor=k,h(w,m.prototype),w.isPureReactComponent=!0;var y=Array.isArray,x=Object.prototype.hasOwnProperty,_={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function L(t,n,o){var r,a={},i=null,f=null;if(null!=n)for(r in void 0!==n.ref&&(f=n.ref),void 0!==n.key&&(i=""+n.key),n)x.call(n,r)&&!z.hasOwnProperty(r)&&(a[r]=n[r]);var c=arguments.length-2;if(1===c)a.children=o;else if(1<c){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+2];a.children=l}if(t&&t.defaultProps)for(r in c=t.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:e,type:t,key:i,ref:f,props:a,_owner:_.current}}function S(t){return"object"==typeof t&&null!==t&&t.$$typeof===e}var O=/\/+/g;function T(t,n){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var n={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return n[t]}))}(""+t.key):n.toString(36)}function E(t,n,r,a,i){var f=typeof t;"undefined"!==f&&"boolean"!==f||(t=null);var c=!1;if(null===t)c=!0;else switch(f){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case e:case o:c=!0}}if(c)return i=i(c=t),t=""===a?"."+T(c,0):a,y(i)?(r="",null!=t&&(r=t.replace(O,"$&/")+"/"),E(i,n,r,"",(function(t){return t}))):null!=i&&(S(i)&&(i=function(t,n){return{$$typeof:e,type:t.type,key:n,ref:t.ref,props:t.props,_owner:t._owner}}(i,r+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(O,"$&/")+"/")+t)),n.push(i)),1;if(c=0,a=""===a?".":a+":",y(t))for(var l=0;l<t.length;l++){var s=a+T(f=t[l],l);c+=E(f,n,r,s,i)}else if(s=function(t){return null===t||"object"!=typeof t?null:"function"==typeof(t=u&&t[u]||t["@@iterator"])?t:null}(t),"function"==typeof s)for(t=s.call(t),l=0;!(f=t.next()).done;)c+=E(f=f.value,n,r,s=a+T(f,l++),i);else if("object"===f)throw n=String(t),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}function $(t,n,e){if(null==t)return t;var o=[],r=0;return E(t,o,"","",(function(t){return n.call(e,t,r++)})),o}function N(t){if(-1===t._status){var n=t._result;(n=n()).then((function(n){0!==t._status&&-1!==t._status||(t._status=1,t._result=n)}),(function(n){0!==t._status&&-1!==t._status||(t._status=2,t._result=n)})),-1===t._status&&(t._status=0,t._result=n)}if(1===t._status)return t._result.default;throw t._result}var A={current:null},C={transition:null},q={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:C,ReactCurrentOwner:_};n.Children={map:$,forEach:function(t,n,e){$(t,(function(){n.apply(this,arguments)}),e)},count:function(t){var n=0;return $(t,(function(){n++})),n},toArray:function(t){return $(t,(function(t){return t}))||[]},only:function(t){if(!S(t))throw Error("React.Children.only expected to receive a single React element child.");return t}},n.Component=m,n.Fragment=r,n.Profiler=i,n.PureComponent=k,n.StrictMode=a,n.Suspense=s,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,n.cloneElement=function(t,n,o){if(null==t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=h({},t.props),a=t.key,i=t.ref,f=t._owner;if(null!=n){if(void 0!==n.ref&&(i=n.ref,f=_.current),void 0!==n.key&&(a=""+n.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(l in n)x.call(n,l)&&!z.hasOwnProperty(l)&&(r[l]=void 0===n[l]&&void 0!==c?c[l]:n[l])}var l=arguments.length-2;if(1===l)r.children=o;else if(1<l){c=Array(l);for(var s=0;s<l;s++)c[s]=arguments[s+2];r.children=c}return{$$typeof:e,type:t.type,key:a,ref:i,props:r,_owner:f}},n.createContext=function(t){return(t={$$typeof:c,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:f,_context:t},t.Consumer=t},n.createElement=L,n.createFactory=function(t){var n=L.bind(null,t);return n.type=t,n},n.createRef=function(){return{current:null}},n.forwardRef=function(t){return{$$typeof:l,render:t}},n.isValidElement=S,n.lazy=function(t){return{$$typeof:d,_payload:{_status:-1,_result:t},_init:N}},n.memo=function(t,n){return{$$typeof:b,type:t,compare:void 0===n?null:n}},n.startTransition=function(t){var n=C.transition;C.transition={};try{t()}finally{C.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(t,n){return A.current.useCallback(t,n)},n.useContext=function(t){return A.current.useContext(t)},n.useDebugValue=function(){},n.useDeferredValue=function(t){return A.current.useDeferredValue(t)},n.useEffect=function(t,n){return A.current.useEffect(t,n)},n.useId=function(){return A.current.useId()},n.useImperativeHandle=function(t,n,e){return A.current.useImperativeHandle(t,n,e)},n.useInsertionEffect=function(t,n){return A.current.useInsertionEffect(t,n)},n.useLayoutEffect=function(t,n){return A.current.useLayoutEffect(t,n)},n.useMemo=function(t,n){return A.current.useMemo(t,n)},n.useReducer=function(t,n,e){return A.current.useReducer(t,n,e)},n.useRef=function(t){return A.current.useRef(t)},n.useState=function(t){return A.current.useState(t)},n.useSyncExternalStore=function(t,n,e){return A.current.useSyncExternalStore(t,n,e)},n.useTransition=function(){return A.current.useTransition()},n.version="18.2.0"},8427:(t,n,e)=>{"use strict";t.exports=e(4884)},9706:(t,n,e)=>{"use strict";t.exports=e(2093)},9411:(t,n)=>{"use strict";function e(t,n){var e=t.length;t.push(n);t:for(;0<e;){var o=e-1>>>1,r=t[o];if(!(0<a(r,n)))break t;t[o]=n,t[e]=r,e=o}}function o(t){return 0===t.length?null:t[0]}function r(t){if(0===t.length)return null;var n=t[0],e=t.pop();if(e!==n){t[0]=e;t:for(var o=0,r=t.length,i=r>>>1;o<i;){var f=2*(o+1)-1,c=t[f],l=f+1,s=t[l];if(0>a(c,e))l<r&&0>a(s,c)?(t[o]=s,t[l]=e,o=l):(t[o]=c,t[f]=e,o=f);else{if(!(l<r&&0>a(s,e)))break t;t[o]=s,t[l]=e,o=l}}}return n}function a(t,n){var e=t.sortIndex-n.sortIndex;return 0!==e?e:t.id-n.id}if("object"==typeof performance&&"function"==typeof performance.now){var i=performance;n.unstable_now=function(){return i.now()}}else{var f=Date,c=f.now();n.unstable_now=function(){return f.now()-c}}var l=[],s=[],b=1,d=null,u=3,p=!1,h=!1,g=!1,m="function"==typeof setTimeout?setTimeout:null,v="function"==typeof clearTimeout?clearTimeout:null,k="undefined"!=typeof setImmediate?setImmediate:null;function w(t){for(var n=o(s);null!==n;){if(null===n.callback)r(s);else{if(!(n.startTime<=t))break;r(s),n.sortIndex=n.expirationTime,e(l,n)}n=o(s)}}function y(t){if(g=!1,w(t),!h)if(null!==o(l))h=!0,C(x);else{var n=o(s);null!==n&&q(y,n.startTime-t)}}function x(t,e){h=!1,g&&(g=!1,v(S),S=-1),p=!0;var a=u;try{for(w(e),d=o(l);null!==d&&(!(d.expirationTime>e)||t&&!E());){var i=d.callback;if("function"==typeof i){d.callback=null,u=d.priorityLevel;var f=i(d.expirationTime<=e);e=n.unstable_now(),"function"==typeof f?d.callback=f:d===o(l)&&r(l),w(e)}else r(l);d=o(l)}if(null!==d)var c=!0;else{var b=o(s);null!==b&&q(y,b.startTime-e),c=!1}return c}finally{d=null,u=a,p=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var _,z=!1,L=null,S=-1,O=5,T=-1;function E(){return!(n.unstable_now()-T<O)}function $(){if(null!==L){var t=n.unstable_now();T=t;var e=!0;try{e=L(!0,t)}finally{e?_():(z=!1,L=null)}}else z=!1}if("function"==typeof k)_=function(){k($)};else if("undefined"!=typeof MessageChannel){var N=new MessageChannel,A=N.port2;N.port1.onmessage=$,_=function(){A.postMessage(null)}}else _=function(){m($,0)};function C(t){L=t,z||(z=!0,_())}function q(t,e){S=m((function(){t(n.unstable_now())}),e)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(t){t.callback=null},n.unstable_continueExecution=function(){h||p||(h=!0,C(x))},n.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<t?Math.floor(1e3/t):5},n.unstable_getCurrentPriorityLevel=function(){return u},n.unstable_getFirstCallbackNode=function(){return o(l)},n.unstable_next=function(t){switch(u){case 1:case 2:case 3:var n=3;break;default:n=u}var e=u;u=n;try{return t()}finally{u=e}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(t,n){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var e=u;u=t;try{return n()}finally{u=e}},n.unstable_scheduleCallback=function(t,r,a){var i=n.unstable_now();switch(a="object"==typeof a&&null!==a&&"number"==typeof(a=a.delay)&&0<a?i+a:i,t){case 1:var f=-1;break;case 2:f=250;break;case 5:f=1073741823;break;case 4:f=1e4;break;default:f=5e3}return t={id:b++,callback:r,priorityLevel:t,startTime:a,expirationTime:f=a+f,sortIndex:-1},a>i?(t.sortIndex=a,e(s,t),null===o(l)&&t===o(s)&&(g?(v(S),S=-1):g=!0,q(y,a-i))):(t.sortIndex=f,e(l,t),h||p||(h=!0,C(x))),t},n.unstable_shouldYield=E,n.unstable_wrapCallback=function(t){var n=u;return function(){var e=u;u=n;try{return t.apply(this,arguments)}finally{u=e}}}},160:(t,n,e)=>{"use strict";t.exports=e(9411)}},a={};function i(t){var n=a[t];if(void 0!==n)return n.exports;var e=a[t]={exports:{}};return r[t](e,e.exports,i),e.exports}i.m=r,n=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,i.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var r=Object.create(null);i.r(r);var a={};t=t||[null,n({}),n([]),n(n)];for(var f=2&o&&e;"object"==typeof f&&!~t.indexOf(f);f=n(f))Object.getOwnPropertyNames(f).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,i.d(r,a),r},i.d=(t,n)=>{for(var e in n)i.o(n,e)&&!i.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},i.f={},i.e=t=>Promise.all(Object.keys(i.f).reduce(((n,e)=>(i.f[e](t,n),n)),[])),i.u=t=>t+".js",i.miniCssF=t=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e={},o="@public-oss/kolibri-sudoku-solver:",i.l=(t,n,r,a)=>{if(e[t])e[t].push(n);else{var f,c;if(void 0!==r)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var b=l[s];if(b.getAttribute("src")==t||b.getAttribute("data-webpack")==o+r){f=b;break}}f||(c=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.setAttribute("data-webpack",o+r),f.src=t),e[t]=[n];var d=(n,o)=>{f.onerror=f.onload=null,clearTimeout(u);var r=e[t];if(delete e[t],f.parentNode&&f.parentNode.removeChild(f),r&&r.forEach((t=>t(o))),n)return n(o)},u=setTimeout(d.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=d.bind(null,f.onerror),f.onload=d.bind(null,f.onload),c&&document.head.appendChild(f)}},i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;i.g.importScripts&&(t=i.g.location+"");var n=i.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var e=n.getElementsByTagName("script");if(e.length)for(var o=e.length-1;o>-1&&!t;)t=e[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t})(),(()=>{var t={179:0};i.f.j=(n,e)=>{var o=i.o(t,n)?t[n]:void 0;if(0!==o)if(o)e.push(o[2]);else{var r=new Promise(((e,r)=>o=t[n]=[e,r]));e.push(o[2]=r);var a=i.p+i.u(n),f=new Error;i.l(a,(e=>{if(i.o(t,n)&&(0!==(o=t[n])&&(t[n]=void 0),o)){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+n+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,o[1](f)}}),"chunk-"+n,n)}};var n=(n,e)=>{var o,r,[a,f,c]=e,l=0;if(a.some((n=>0!==t[n]))){for(o in f)i.o(f,o)&&(i.m[o]=f[o]);c&&c(i)}for(n&&n(e);l<a.length;l++)r=a[l],i.o(t,r)&&t[r]&&t[r][0](),t[r]=0},e=self.webpackChunk_public_oss_kolibri_sudoku_solver=self.webpackChunk_public_oss_kolibri_sudoku_solver||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))})(),(()=>{"use strict";var t=i(9706),n=i(7352),e=i(2323),o=i(379),r=i(4477);var a,f,c;!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var t=HTMLElement;window.HTMLElement=function(){return Reflect.construct(t,[],this.constructor)},HTMLElement.prototype=t.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,t)}}(),f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},c=function(){var t=function(){},n="undefined",e=typeof window!==n&&typeof window.navigator!==n&&/Trident\/|MSIE /.test(window.navigator.userAgent),o=["trace","debug","info","warn","error"];function r(t,n){var e=t[n];if("function"==typeof e.bind)return e.bind(t);try{return Function.prototype.bind.call(e,t)}catch(n){return function(){return Function.prototype.apply.apply(e,[t,arguments])}}}function a(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function i(n,e){for(var r=0;r<o.length;r++){var a=o[r];this[a]=r<n?t:this.methodFactory(a,n,e)}this.log=this.debug}function f(t,e,o){return function(){typeof console!==n&&(i.call(this,e,o),this[t].apply(this,arguments))}}function c(o,i,c){return function(o){return"debug"===o&&(o="log"),typeof console!==n&&("trace"===o&&e?a:void 0!==console[o]?r(console,o):void 0!==console.log?r(console,"log"):t)}(o)||f.apply(this,arguments)}function l(t,e,r){var a,f=this;e=null==e?"WARN":e;var l="loglevel";function s(){var t;if(typeof window!==n&&l){try{t=window.localStorage[l]}catch(t){}if(typeof t===n)try{var e=window.document.cookie,o=e.indexOf(encodeURIComponent(l)+"=");-1!==o&&(t=/^([^;]+)/.exec(e.slice(o))[1])}catch(t){}return void 0===f.levels[t]&&(t=void 0),t}}"string"==typeof t?l+=":"+t:"symbol"==typeof t&&(l=void 0),f.name=t,f.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},f.methodFactory=r||c,f.getLevel=function(){return a},f.setLevel=function(e,r){if("string"==typeof e&&void 0!==f.levels[e.toUpperCase()]&&(e=f.levels[e.toUpperCase()]),!("number"==typeof e&&e>=0&&e<=f.levels.SILENT))throw"log.setLevel() called with invalid level: "+e;if(a=e,!1!==r&&function(t){var e=(o[t]||"silent").toUpperCase();if(typeof window!==n&&l){try{return void(window.localStorage[l]=e)}catch(t){}try{window.document.cookie=encodeURIComponent(l)+"="+e+";"}catch(t){}}}(e),i.call(f,e,t),typeof console===n&&e<f.levels.SILENT)return"No console available for logging"},f.setDefaultLevel=function(t){e=t,s()||f.setLevel(t,!1)},f.resetLevel=function(){f.setLevel(e,!1),function(){if(typeof window!==n&&l){try{return void window.localStorage.removeItem(l)}catch(t){}try{window.document.cookie=encodeURIComponent(l)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(t){}}}()},f.enableAll=function(t){f.setLevel(f.levels.TRACE,t)},f.disableAll=function(t){f.setLevel(f.levels.SILENT,t)};var b=s();null==b&&(b=e),f.setLevel(b,!1)}var s=new l,b={};s.getLogger=function(t){if("symbol"!=typeof t&&"string"!=typeof t||""===t)throw new TypeError("You must supply a name when creating a logger.");var n=b[t];return n||(n=b[t]=new l(t,s.getLevel(),s.methodFactory)),n};var d=typeof window!==n?window.log:void 0;return s.noConflict=function(){return typeof window!==n&&window.log===s&&(window.log=d),s},s.getLoggers=function(){return b},s.default=s,s},(a={exports:{}}).exports?a.exports=c():f.log=c();const l="object"==typeof window?window:"object"==typeof global?global:"object"==typeof self?self:{},s=new Map,b=[],d=new Set,u=new Map,p=/--[^;]+/g,h=/:/;"object"==typeof l.A11yUi&&null!==l.A11yUi||(l.A11yUi={CSS_STYLE_CACHE:u,HYDRATED_HISTORY:b,STYLING_TASK_QUEUE:s});const g=(t,n)=>"object"==typeof l.A11yUi&&null!==l.A11yUi&&"object"==typeof l.A11yUi.Themes&&null!==l.A11yUi.Themes&&"object"==typeof l.A11yUi.Themes[t]&&null!==l.A11yUi.Themes[t]&&"string"==typeof l.A11yUi.Themes[t][n]?l.A11yUi.Themes[t][n].replace(/\r?\n/g,""):"",m=(t,n,e)=>{const o=n.name||"default";let r;try{if(null===t.shadowRoot)throw new Error("ShadowRoot is null");r=t.shadowRoot}catch(n){r=t}if(u.get(o)?.has(t.tagName))v(t,r,u.get(o)?.get(t.tagName),e);else{const a=g(o,"PROPERTIES"),i=g(o,"GLOBAL"),f=g(o,t.tagName);!1===d.has(o)&&((t,n)=>{let e=n.match(p);if(Array.isArray(e)){e=e.filter((t=>h.test(t)));const n=document.createElement("style");n.innerHTML=`.${t} {${e.join(";")}}`,document.querySelector("head")?.appendChild(n)}d.add(t)})(o,i);const c=[a,i,f];((t,n,e)=>{if(!1!==e){const o=[...Array.from(t.childNodes).filter((t=>t instanceof HTMLStyleElement&&"STYLE"===t.tagName))];let r;try{r=[...Array.from(t.adoptedStyleSheets)]}catch(t){r=[]}"before"===e?.mode?(o.reverse().forEach((t=>n.unshift(t.innerHTML))),r.reverse().forEach((t=>n.unshift(Array.from(t.cssRules).map((t=>t.cssText)).join(""))))):"after"===e?.mode&&(o.forEach((t=>n.push(t.innerHTML))),r.forEach((t=>n.push(Array.from(t.cssRules).map((t=>t.cssText)).join("")))))}})(r,c,n.encroachCss),"debug"===n.loglevel&&console.log(t.tagName,c),!0===n.cache&&(!1===u.has(o)&&u.set(o,new Map),u.get(o)?.set(t.tagName,c)),v(t,r,c,e)}},v=(t,n,e,o)=>{(t=>{for(const n of Array.from(t.childNodes)){if(!(n instanceof HTMLStyleElement&&"STYLE"===n.tagName))break;t.removeChild(n)}})(n),((t,n)=>{try{const e=[];n.forEach((t=>{const n=new CSSStyleSheet;n.replaceSync(t),e.push(n)})),t.adoptedStyleSheets=e}catch(e){n.reverse().forEach((n=>{const e=document.createElement("style");e.innerHTML=n,t.insertBefore(e,t.firstChild)}))}})(n,e),t.style.display=o},k=(t,n)=>{(t=>{s.delete(t)})(t),(t=>{"debug"===t.loglevel&&b.push({timestamp:Date.now(),numberOfTasks:s.size})})(n)},w=t=>{for(const n of t)if(s.has(n.target)&&n.target.classList.contains("hydrated")){const{styleDisplay:t,themeDetails:e}=s.get(n.target);m(n.target,e,t),k(n.target,e)}};let y;try{y=new MutationObserver(w)}catch(t){y=null}var x=(t=>(t[t.error=0]="error",t[t.warning=1]="warning",t[t.info=2]="info",t[t.success=3]="success",t[t.message=4]="message",t[t.close=5]="close",t[t["form-description"]=6]="form-description",t[t.of=7]="of",t[t.characters=8]="characters",t[t.new=9]="new",t[t["no-entries"]=10]="no-entries",t[t["change-order"]=11]="change-order",t[t["action-running"]=12]="action-running",t[t["action-done"]=13]="action-done",t[t["page-first"]=14]="page-first",t[t["page-back"]=15]="page-back",t[t["page-next"]=16]="page-next",t[t["page-last"]=17]="page-last",t[t["entries-per-site"]=18]="entries-per-site",t[t["page-current"]=19]="page-current",t[t["page-selected"]=20]="page-selected",t[t["page-per-site"]=21]="page-per-site",t[t["logo-description"]=22]="logo-description",t[t["open-link-in-tab"]=23]="open-link-in-tab",t[t["kolibri-logo"]=24]="kolibri-logo",t))(x||{}),_=(t=>(t[t.abbr=0]="abbr",t[t.accordion=1]="accordion",t[t["accordion-group"]=2]="accordion-group",t[t.alert=3]="alert",t[t.avatar=4]="avatar",t[t.badge=5]="badge",t[t.breadcrumb=6]="breadcrumb",t[t.button=7]="button",t[t["button-group"]=8]="button-group",t[t["button-link"]=9]="button-link",t[t.card=10]="card",t[t.details=11]="details",t[t.form=12]="form",t[t.heading=13]="heading",t[t.icon=14]="icon",t[t.image=15]="image",t[t["indented-text"]=16]="indented-text",t[t["input-checkbox"]=17]="input-checkbox",t[t["input-color"]=18]="input-color",t[t["input-date"]=19]="input-date",t[t["input-email"]=20]="input-email",t[t["input-file"]=21]="input-file",t[t["input-number"]=22]="input-number",t[t["input-password"]=23]="input-password",t[t["input-radio"]=24]="input-radio",t[t["input-range"]=25]="input-range",t[t["input-text"]=26]="input-text",t[t.link=27]="link",t[t["link-button"]=28]="link-button",t[t["link-group"]=29]="link-group",t[t.modal=30]="modal",t[t.nav=31]="nav",t[t.pagination=32]="pagination",t[t.popover=33]="popover",t[t.progress=34]="progress",t[t.select=35]="select",t[t.separator=36]="separator",t[t["skip-nav"]=37]="skip-nav",t[t.spin=38]="spin",t[t["split-button"]=39]="split-button",t[t.symbol=40]="symbol",t[t.table=41]="table",t[t.tabs=42]="tabs",t[t.textarea=43]="textarea",t[t.toast=44]="toast",t[t["toast-container"]=45]="toast-container",t[t.toolbar=46]="toolbar",t[t.tooltip=47]="tooltip",t))(_||{});const z=new class{constructor(t,n,e){this.createTheme=(t,n)=>((t,n)=>e=>e(t,n))(t,n),this.createTranslation=(t,n)=>((t,n)=>e=>e(t,n))(t,n),this.Prefix=t,this.Key=Object.getOwnPropertyNames(n),this.Tag=Object.getOwnPropertyNames(e)}}("kol",x,_),L=(z.createTheme("bamf",{}),z.createTheme("desy-v1",{GLOBAL:":host {\n\t\t--color-primary: #326cae;\n\t\t--color-primary-10: #1e538f;\n\t\t--color-primary-20: #08335e;\n\t\t--color-yellow-neutral: #ef9e48;\n\t\t--color-dark-yellow-neutral: #a8672c;\n\t\t--color-warning: #a94442;\n\t\t--color-success: #5cb85c;\n\t\t--color-background: #edf4f7;\n\t\t--color-black: #000000;\n\t\t--color-gray-10: #333333;\n\t\t--color-gray-20: #666666;\n\t\t--color-gray-30: #737373;\n\t\t--color-gray-40: #999999;\n\t\t--color-gray-50: #b3b3b3;\n\t\t--color-gray-60: #dddddd;\n\t\t--color-gray-70: #f2f2f2;\n\t\t--color-white: #ffffff;\n\t\t--font-family: BundesSans Web, Calibri, Verdana, Arial, Helvetica, sans-serif;\n\t\t--font-size: 14px;\n\t\t--spacing: 0.25em;\n\t}\n\t:host {\n\t\tcolor: var(--color-black);\n\t}\n\t:host * {\n\t\tbox-sizing: border-box;\n\t\tfont-family: var(--font-family);\n\t}\n\t:host h1,\n\t:host h2,\n\t:host h3,\n\t:host h4,\n\t:host h5,\n\t:host h6 {\n\t\tmargin: 0;\n\t\tfont-family: var(--font-family);\n\t}\n\ta,\n\tbutton {\n\t\talign-items: center;\n\t\tbackground-color: transparent;\n\t\tborder: 0;\n\t\tcolor: black;\n\t\tcursor: pointer;\n\t\tdisplay: inline-flex;\n\t\tgap: 0.25rem;\n\t\tjustify-items: center;\n\t}\n\tinput,\n\toption,\n\tselect,\n\tsummary,\n\ttextarea {\n\t\tdisplay: inline-block;\n\t}\n\ta,\n\tbutton,\n\tinput,\n\toption,\n\tselect,\n\tsummary,\n\ttextarea {\n\t\t-ms-hyphens: auto;\n\t\t-webkit-hyphens: auto;\n\t\thyphens: auto;\n\t\tletter-spacing: inherit;\n\t\tword-break: break-word;\n\t}\n\t*[tabindex]:focus,\n\ta:focus,\n\tbutton:focus,\n\tinput:focus,\n\tselect:focus,\n\tsummary:focus,\n\ttextarea:focus {\n\t\tcursor: pointer;\n\t\toutline-color: var(--color-ocean);\n\t\toutline-offset: 2px;\n\t\toutline-style: solid;\n\t\toutline-width: 0;\n\t\ttransition: outline-offset 0.2s linear;\n\t}\n\t@keyframes spin {\n\t\t0% {\n\t\t\ttransform: rotate(0deg);\n\t\t}\n\t\t100% {\n\t\t\ttransform: rotate(360deg);\n\t\t}\n\t}\n\tkol-heading-wc {\n\t\tfont-weight: 700;\n\t}","KOL-BUTTON":"a,\n\tbutton {\n\t\tbackground-color: transparent;\n\t\tborder: 0;\n\t\tcursor: pointer;\n\t\tdisplay: inline-block;\n\t}\n\tbutton {\n\t\tbackground-color: transparent;\n\t\tborder: 0;\n\t\tcursor: pointer;\n\t\tmin-width: 44px;\n\t\tmin-height: 44px;\n\t\tpadding: 0;\n\t\ttext-decoration: none !important;\n\t}\n\tbutton > kol-span-wc {\n\t\tdisplay: grid;\n\t\tgap: 0.25em;\n\t\tline-height: 1.5rem;\n\t\tfont-family: Roboto;\n\t\tfont-weight: 700;\n\t\tcursor: pointer;\n\t\tfont-size: 1rem;\n\t\talign-items: center;\n\t\tpadding: 6px 8px;\n\t\tjustify-content: center;\n\t\tfont-style: normal;\n\t\ttext-align: center;\n\t\toutline: none;\n\t\tborder-style: solid;\n\t\tborder-width: 2px;\n\t}\n\tbutton:active > kol-span-wc {\n\t\ttransform: translateY(1px);\n\t}\n\tbutton.primary:disabled > kol-span-wc,\n\tbutton.danger:disabled > kol-span-wc,\n\tbutton.normal:disabled > kol-span-wc {\n\t\tcursor: not-allowed;\n\t\tcolor: var(--color-white);\n\t\tbackground-color: var(--color-gray-40);\n\t\tborder-color: var(--color-gray-40);\n\t}\n\tbutton.ghost:disabled > kol-span-wc,\n\tbutton.loading:disabled > kol-span-wc,\n\tbutton.help:disabled > kol-span-wc,\n\tbutton.secondary:disabled > kol-span-wc {\n\t\tcursor: not-allowed;\n\t\tcolor: var(--color-gray-40);\n\t\tbackground-color: var(--color-white);\n\t\tborder-color: var(--color-white);\n\t}\n\tbutton.primary > kol-span-wc,\n\tbutton.primary:hover > kol-span-wc,\n\tbutton.normal > kol-span-wc,\n\tbutton.normal:hover > kol-span-wc {\n\t\tbackground-color: var(--color-primary);\n\t\tborder-color: var(--color-primary);\n\t\tcolor: var(--color-white);\n\t}\n\tbutton.loading > kol-span-wc,\n\tbutton.loading:hover > kol-span-wc,\n\tbutton.help > kol-span-wc,\n\tbutton.help:hover > kol-span-wc,\n\tbutton.secondary > kol-span-wc,\n\tbutton.secondary:hover > kol-span-wc {\n\t\tbackground-color: var(--color-white);\n\t\tborder-color: var(--color-primary);\n\t\tcolor: var(--color-primary);\n\t}\n\tbutton.danger > kol-span-wc,\n\tbutton.danger:hover > kol-span-wc {\n\t\tbackground-color: var(--color-warning);\n\t\tborder-color: var(--color-warning);\n\t\tcolor: var(--color-white);\n\t}\n\tbutton.ghost,\n\tbutton.ghost:hover > kol-span-wc {\n\t\tbackground-color: transparent;\n\t\tborder-color: transparent;\n\t\tcolor: var(--color-primary);\n\t}\n\tbutton.primary:active > kol-span-wc,\n\tbutton.primary:focus > kol-span-wc,\n\tbutton.primary:hover > kol-span-wc,\n\tbutton.loading:active > kol-span-wc,\n\tbutton.loading:focus > kol-span-wc,\n\tbutton.loading:hover > kol-span-wc,\n\tbutton.help:active > kol-span-wc,\n\tbutton.help:focus > kol-span-wc,\n\tbutton.help:hover > kol-span-wc,\n\tbutton.secondary:active > kol-span-wc,\n\tbutton.secondary:focus > kol-span-wc,\n\tbutton.secondary:hover > kol-span-wc,\n\tbutton.normal:active > kol-span-wc,\n\tbutton.normal:focus > kol-span-wc,\n\tbutton.normal:hover > kol-span-wc {\n\t\tbackground-color: var(--color-primary-20);\n\t\tborder-color: var(--color-primary-20);\n\t\tcolor: var(--color-white);\n\t\toutline: none;\n\t}\n\tbutton.loading:active > kol-span-wc,\n\tbutton.loading:focus > kol-span-wc,\n\tbutton.loading:hover > kol-span-wc,\n\tbutton.help:active > kol-span-wc,\n\tbutton.help:focus > kol-span-wc,\n\tbutton.help:hover > kol-span-wc,\n\tbutton.secondary:active > kol-span-wc,\n\tbutton.secondary:focus > kol-span-wc,\n\tbutton.secondary:hover > kol-span-wc {\n\t\tborder-color: var(--color-primary-20);\n\t}\n\tbutton.danger:active > kol-span-wc,\n\tbutton.danger:hover > kol-span-wc {\n\t\tbackground-color: var(--color-dark-yellow-neutral);\n\t\tborder-color: var(--color-dark-yellow-neutral);\n\t\tcolor: var(--color-white);\n\t\toutline: none;\n\t}\n\tbutton.ghost:active > kol-span-wc,\n\tbutton.ghost:hover > kol-span-wc {\n\t\tcolor: var(--color-primary);\n\t\toutline: none;\n\t}\n\tbutton > kol-span-wc > span {\n\t\tdisplay: flex;\n\t\tgap: 0.5em;\n\t\tmargin: auto;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tletter-spacing: 0.75px;\n\t}\n\tbutton.hide-label > kol-span-wc {\n\t\tpadding: 8px;\n\t}\n\tbutton.hide-label > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n\tbutton.hide-label > kol-span-wc kol-icon {\n\t\tdisplay: inline-block;\n\t\twidth: 1.5em;\n\t\theight: 1.5em;\n\t}\n\tbutton.loading > kol-span-wc kol-icon {\n\t\tanimation: spin 5s infinite linear;\n\t}\n\tbutton.loading > kol-span-wc,\n\tbutton.help > kol-span-wc {\n\t\tdisplay: inline-block;\n\t\tpadding: 0;\n\t}","KOL-BADGE":":host {\n\t\tdisplay: inline-block;\n\t}\n\tkol-span-wc {\n\t\talign-items: center;\n\t\tborder-radius: 0.3125rem;\n\t\tdisplay: grid;\n\t\tgap: 0.5rem;\n\t\tline-height: 1.25rem;\n\t\tpadding: 0.25rem 0.75rem;\n\t}\n\tkol-span-wc span {\n\t\tdisplay: flex;\n\t\tgap: 0.25rem;\n\t}","KOL-HEADING":"h1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6 {\n\t\tcolor: inherit;\n\t\tfont-style: normal;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\th1,\n\th2,\n\th3 {\n\t\tfont-weight: 700;\n\t}\n\th1 {\n\t\tfont-size: 1.5rem;\n\t\tline-height: 3.25rem;\n\t}\n\th2 {\n\t\tfont-size: 1.25rem;\n\t\tline-height: 1.75rem;\n\t}\n\th3 {\n\t\tfont-size: 1.125rem;\n\t\tline-height: 1.5rem;\n\t}","KOL-ACCORDION":':host > div {\n\t\tfont-family: var(--font-family);\n\t\tfont-size: var(--font-size);\n\t\tpadding: 0 0.5rem 0 0;\n\t}\n\t:host > div > kol-heading-wc {\n\t\tbackground-color: var(--color-background);\n\t\tcolor: var(--color-gray-10);\n\t\tline-height: 1.75rem;\n\t\tpadding: 16px;\n\t}\n\t:host > div > kol-heading-wc:focus-within,\n\t:host > div > kol-heading-wc:hover {\n\t\tbox-shadow: 0px 0px 0px 2px var(--color-primary) inset;\n\t\toutline: none;\n\t}\n\t:host > div > kol-heading-wc button {\n\t\tcursor: pointer;\n\t\twidth: 100%;\n\t\tmargin: 0;\n\t\tdisplay: flex;\n\t\tflex-direction: row-reverse;\n\t\tjustify-content: flex-end;\n\t\tgap: 2em;\n\t\tborder: 0;\n\t\talign-items: center;\n\t\toverflow: hidden;\n\t\tfont-size: inherit;\n\t\tfont-weight: normal;\n\t\tline-height: 1.75em;\n\t\tbackground-color: transparent;\n\t\tpadding: 0;\n\t\toutline: none;\n\t}\n\t:host > div[part*="open"] > kol-heading-wc button {\n\t\tpadding-bottom: 0;\n\t}\n\t:host > div > kol-heading-wc button kol-icon::part(icon) {\n\t\tfont-weight: 900;\n\t\tfont-size: 26px;\n\t\tcolor: var(--color-black);\n\t}\n\t:host > div > kol-heading-wc button kol-icon::part(close)::before {\n\t\tfont-family: "Font Awesome 6 Free";\n\t\tfont-size: 14px;\n\t\tcontent: "\f077";\n\t}\n\t:host > div > kol-heading-wc button kol-icon::part(open)::before {\n\t\tfont-family: "Font Awesome 6 Free";\n\t\tfont-size: 14px;\n\t\tcontent: "\f078";\n\t}\n\t:host > div {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tdisplay: grid;\n\t}\n\t:host > div div[part="content"] {\n\t\ttransition: height 200ms;\n\t}\n\t:host > div div[part="header"],\n\t:host > div[part*="open"] div[part="content"] {\n\t\tmargin: 0;\n\t\tbackground-color: var(--color-white);\n\t}\n\t:host > div div[part="header"] {\n\t\tpadding: 0 1em;\n\t}\n\t:host > div[part*="open"] div[part="content"] {\n\t\tpadding: 1em;\n\t}\n\tbutton {\n\t\tfont-weight: inherit;\n\t\tfont-size: inherit;\n\t\tline-height: inherit;\n\t}\n\t:host > div {\n\t\tbackground: var(--color-white);\n\t}\n\t:host > div[part*="open"] {\n\t\tpadding-bottom: 1em;\n\t}',"KOL-ALERT":':host > div {background-color: white;// border-width: 2px;// border-style: solid;display: flex;overflow: unset;}:host > div.default {border-color: var(--color-gray-30);}:host > div.default > .icon {background-color: var(--color-gray-30);}:host > div.error {border-color: var(--color-warning);}:host > div.error > .icon {background-color: var(--color-warning);}:host > div.info {border-color: var(--color-primary);}:host > div.info > .icon {background-color: var(--color-primary);}:host > div.success {border-color: var(--color-success);}:host > div.success > .icon {background-color: var(--color-success);}:host > div.warning {border-color: var(--color-yellow-neutral);}:host > div.warning > .icon {background-color: var(--color-yellow-neutral);}:host > div.msg > .icon {color: white;padding: 0.5em;align-items: center;display: inline-flex;}:host > div.card {border-width: 2px;border-style: solid;}:host > div.card.default .heading .icon {background-color: var(--color-gray-30);}:host > div.card.error .heading .icon {background-color: var(--color-warning);}:host > div.card.info .heading .icon {background-color: var(--color-primary);}:host > div.card.success .heading .icon {background-color: var(--color-success);}:host > div.card.warning .heading .icon {background-color: var(--color-yellow-neutral);}:host > div.card .heading .icon {color: white;padding: 0.5em;align-items: center;display: inline-flex;}:host > div kol-heading-wc .icon {margin-right: 0.5em;}:host > div.card .heading .icon {border-radius: 0 0 0.25rem 0;}:host > div.msg > div {padding: 0.25em;}:host > div.msg > div > .heading {padding: 0.25em;display: inline-block;}:host > div .content {padding: 0.25em;}:host > div > div {display: grid;grid-template-columns: 1fr auto;}:host > div > div > .content {grid-row: 2;grid-column: 1;}:host > div > div > .close {grid-row: 1 / span 2;}:host > div.card > div > .heading {width: 100%;}.close > button {min-width: 44px;min-height: 44px;display: grid;gap: 0.25em;line-height: 1.5rem;font-family: var(--font-family);font-weight: 700;cursor: pointer;border-radius: 1.5em;border-style: solid;border-width: 2px;font-size: 1rem;align-items: center;padding: 8px 14px;justify-content: center;font-style: normal;text-align: center;text-transform: uppercase;width: inherit;transition-duration: 0.5s;transition-property: background-color, color, border-color;background-color: rgba(0, 0, 0, 0);border-color: rgba(0, 0, 0, 0);}.close > button.hide-label {padding: 8px;}.close > button.hide-label kol-icon {display: inline-block;width: 1.5em;height: 1.5em;}.close > button:active {box-shadow: none;outline: none;}.close kol-icon::part(icon)::before {content: "x";color: var(--color-primary);font-family: "Font Awesome 6 Free";}',"KOL-CARD":"/* https://www.figma.com/file/56JbmrssCRpjpfxoAFeHqT/Design-System-EPLF-(in-progress)?node-id=8225%3A5945 */\n\t:host > div {\n\t\tdisplay: grid;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tbackground-color: var(--color-background);\n\t\tgrid-template-rows: min-content 2fr min-content;\n\t\tbox-shadow: 0 0 0.25rem var(--color-grey);\n\t\tpadding: 8px;\n\t}\n\t:host kol-heading-wc {\n\t\tdisplay: inline-flex;\n\t\tfont-style: normal;\n\t\tfont-weight: 700;\n\t\tfont-size: 1.25rem;\n\t\tline-height: 1.75rem;\n\t}\n\t:host div.content {\n\t\tpadding-top: 1em;\n\t}\n\t:host div.footer {\n\t\tpadding-top: 1em;\n\t}","KOL-INDENTED-TEXT":":host > div {\n\t\tpadding: 0.25em 0.5em;\n\t\twidth: 100%;\n\t}\n\t:host > div {\n\t\tbackground: var(--color-white);\n\t\tborder: 0;\n\t\tbox-shadow: -4px 0px 0px var(--color-primary);\n\t}","KOL-DETAILS":":host details > kol-indented-text {\n\t\tmargin: 0.25em 0 0 0.5em;\n\t}","KOL-LINK-GROUP":"ul {\n\t\tlist-style: none;\n\t\tmargin: 0px;\n\t\tpadding: 0px;\n\t}\n\tnav.horizontal ul {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t}\n\tnav.horizontal li {\n\t\tmargin-left: 1.25rem;\n\t\tmargin-right: 0.25rem;\n\t}\n\tnav.horizontal li:first-child {\n\t\tmargin-left: 0;\n\t}\n\tnav.horizontal li:last-child {\n\t\tmargin-right: 0;\n\t}\n\tnav.vertical li {\n\t\tmargin-left: 1.75rem;\n\t\tmargin-right: 0.5rem;\n\t}\n\tli.list-none {\n\t\tlist-style-type: none !important;\n\t\tmargin-left: 0;\n\t}","KOL-PROGRESS":":host progress,\n\t:host span {\n\t\tdisplay: block;\n\t\theight: 0px;\n\t\toverflow: hidden;\n\t\twidth: 0px;\n\t}\n\tsvg line:first-child,\n\tsvg circle:first-child {\n\t\tfill: transparent;\n\t\tstroke: var(--color-gray-60);\n\t}\n\tsvg line:last-child,\n\tsvg circle:last-child {\n\t\tstroke: var(--color-primary);\n\t\tfill: transparent;\n\t}\n\tprogress {\n\t\tdisplay: none;\n\t}","KOL-SPIN":".spin {\n\t\tdisplay: inline-block;\n\t\theight: 1rem;\n\t\tposition: relative;\n\t\twidth: 3rem;\n\t}\n\t.spin span {\n\t\tanimation-timing-function: cubic-bezier(0, 1, 1, 0);\n\t\tborder: 0.1rem solid rgb(255, 255, 255);\n\t\tborder-radius: 50%;\n\t\theight: 0.8rem;\n\t\twidth: 0.8rem;\n\t\ttop: 0.1rem;\n\t\tposition: absolute;\n\t}\n\t.spin span:nth-child(1) {\n\t\tbackground-color: #fc0;\n\t\tz-index: 0;\n\t\tanimation: 2s ease 0s infinite normal none running spin1;\n\t\tleft: 0.1rem;\n\t}\n\t.spin span:nth-child(2) {\n\t\tbackground-color: #f00;\n\t\tz-index: 1;\n\t\tanimation: 2s ease 0s infinite normal none running spin2;\n\t\tleft: 0.1rem;\n\t}\n\t.spin span:nth-child(3) {\n\t\tbackground-color: #000;\n\t\tz-index: 1;\n\t\tanimation: 2s ease 0s infinite normal none running spin2;\n\t\tleft: 1.1rem;\n\t}\n\t.spin span:nth-child(4) {\n\t\tbackground-color: #666;\n\t\tz-index: 0;\n\t\tanimation: 2s ease 0s infinite normal none running spin3;\n\t\tleft: 2.1rem;\n\t}\n\t@keyframes spin1 {\n\t\t0% {\n\t\t\ttransform: scale(0);\n\t\t}\n\t\t100% {\n\t\t\ttransform: scale(1);\n\t\t}\n\t}\n\t@keyframes spin2 {\n\t\t0% {\n\t\t\ttransform: translate(0px, 0px);\n\t\t}\n\t\t100% {\n\t\t\ttransform: translate(1rem, 0px);\n\t\t}\n\t}\n\t@keyframes spin3 {\n\t\t0% {\n\t\t\ttransform: scale(1);\n\t\t}\n\t\t100% {\n\t\t\ttransform: scale(0);\n\t\t}\n\t}","KOL-TABLE":":host * {\n\t\thyphens: var(--kolibri-hyphens);\n\t\tfont-family: var(--kolibri-font-family);\n\t\tline-height: var(--kolibri-line-height);\n\t\tword-break: break-word;\n\t}\n\t:host > div {\n\t\toverflow-x: auto;\n\t\toverflow-y: hidden;\n\t}\n\ttable {\n\t\twidth: 100%;\n\t\tborder-spacing: 0;\n\t\tborder-collapse: collapse;\n\t}\n\tth,\n\ttd {\n\t\tpadding: 0.25em 0.5em;\n\t}\n\tth {\n\t\tbackground-color: var(--color-gray-70);\n\t}\n\tth > div {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr auto;\n\t\talign-items: center;\n\t\tgap: 0.25em;\n\t}\n\t:host > div:last-child {\n\t\tpadding: 0.5em;\n\t}\n\ttbody > tr:nth-child(even) {\n\t\tbackground-color: var(--color-gray-70);\n\t}\n\t:host > div:last-child,\n\t:host > div:last-child > div:last-child {\n\t\tdisplay: grid;\n\t\talign-items: center;\n\t\tjustify-items: center;\n\t\tgap: 0.5em;\n\t}\n\t@media (min-width: 1024px) {\n\t\t:host > div:last-child,\n\t\t:host > div:last-child > div:last-child {\n\t\t\tgrid-auto-flow: column;\n\t\t}\n\t\t:host > div:last-child kol-pagination {\n\t\t\tdisplay: flex;\n\t\t\tgap: 1rem;\n\t\t}\n\t}","KOL-TABS":'button:disabled {\n\t\topacity: 0.5;\n\t\tcursor: not-allowed;\n\t}\n\tkol-button-group > div {\n\t\tmargin: 0 1rem;\n\t}\n\tkol-button-group > div:first-child {\n\t\tmargin-left: 0;\n\t}\n\tkol-button-group > div:last-child {\n\t\tmargin-right: 0;\n\t}\n\tkol-button-group > div {\n\t\tmargin: 0;\n\t}\n\tbutton {\n\t\tbackground-color: transparent;\n\t\tborder: 0;\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 18px;\n\t\tline-height: 22px;\n\t\tcolor: var(--color-primary);\n\t\tpadding: 0.3em 1em;\n\t\tbox-shadow: inset 0px -3px 0 0 var(--color-gray-70);\n\t}\n\tbutton:enabled {\n\t\tbox-shadow: inset 0px -3px 0 0 var(--color-primary-10);\n\t}\n\tbutton:hover {\n\t\tcolor: var(--color-midnight);\n\t}\n\tbutton.primary {\n\t\ttext-underline-offset: 5px;\n\t\ttext-decoration-thickness: 0.25em;\n\t\tfont-weight: bold;\n\t\tcolor: var(--color-gray-10);\n\t\tbox-shadow: inset 0px -3px 0 0 var(--color-gray-70),\n\t\t\tinset 0px -6px 0 0 var(--color-primary-10);\n\t}\n\tbutton:hover,\n\tbutton:focus {\n\t\tcolor: var(--color-gray-10);\n\t\tbox-shadow: inset 0px -6px 0 0 var(--color-primary-10);\n\t\toutline: none;\n\t}\n\tbutton:not(.primary) {\n\t\tcursor: pointer;\n\t}\n\t:host > div > div {\n\t\tpadding: 0.25em 0;\n\t}\n\t.close-button {\n\t\tdisplay: none;\n\t\tfont-size: 25%;\n\t\theight: fit-content;\n\t\twidth: 0;\n\t}\n\t.close-button button {\n\t\twidth: 1rem;\n\t\tposition: relative;\n\t\theight: 1rem;\n\t\tleft: -4.25em;\n\t\ttop: 0.25em;\n\t}\n\tdiv[role="tabpanel"] {\n\t\theight: 100%;\n\t}\n\tdiv.grid {\n\t\theight: 100%;\n\t}\n\tdiv.grid {\n\t\theight: 100%;\n\t}\n\t:host > .tabs-align-right {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr auto;\n\t}\n\t:host > .tabs-align-right kol-button-group-wc {\n\t\tdisplay: grid;\n\t\torder: 2;\n\t}\n\t:host > .tabs-align-left {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: auto 1fr;\n\t}\n\t:host > .tabs-align-left kol-button-group-wc {\n\t\tdisplay: grid;\n\t\torder: 0;\n\t}\n\t:host > .tabs-align-bottom {\n\t\tdisplay: grid;\n\t\tgrid-template-rows: 1fr auto;\n\t}\n\t:host > .tabs-align-bottom kol-button-group-wc {\n\t\torder: 2;\n\t}\n\t:host > .tabs-align-bottom kol-button-group-wc > div {\n\t\tdisplay: flex;\n\t}\n\t:host > .tabs-align-bottom > kol-button-group-wc > div > div:first-child {\n\t\tmargin: 0px 1em 0px 0px;\n\t}\n\t:host > .tabs-align-bottom > kol-button-group-wc > div > div {\n\t\tmargin: 0px 1em;\n\t}\n\t:host > .tabs-align-top {\n\t\tdisplay: grid;\n\t\tgrid-template-rows: auto 1fr;\n\t}\n\t:host > .tabs-align-top kol-button-group-wc {\n\t\torder: 0;\n\t}\n\t:host > .tabs-align-top kol-button-group-wc > div {\n\t\tdisplay: flex;\n\t}\n\t:host > .tabs-align-top > kol-button-group-wc > div > div:first-child {\n\t\tmargin: 0px 1em 0px 0px;\n\t}\n\t:host > .tabs-align-top > kol-button-group-wc > div > div {\n\t\tmargin: 0px 1em;\n\t}\n\t:host > div {\n\t\tdisplay: grid;\n\t}\n\t:host > div.tabs-align-left {\n\t\tgrid-template-columns: auto 1fr;\n\t}\n\t:host > div.tabs-align-right {\n\t\tgrid-template-columns: 1fr auto;\n\t}\n\t:host > .tabs-align-left kol-button-group-wc,\n\t:host > .tabs-align-top kol-button-group-wc {\n\t\torder: 0;\n\t}\n\t:host > .tabs-align-bottom kol-button-group-wc,\n\t:host > .tabs-align-right kol-button-group-wc {\n\t\torder: 1;\n\t}\n\t:host > div.tabs-align-left kol-button-group-wc > div,\n\t:host > div.tabs-align-left kol-button-group-wc > div > div,\n\t:host > div.tabs-align-right kol-button-group-wc > div,\n\t:host > div.tabs-align-right kol-button-group-wc > div > div {\n\t\tdisplay: grid;\n\t}\n\t:host > div.tabs-align-left kol-button-group-wc > div > div kol-button-wc,\n\t:host > div.tabs-align-right kol-button-group-wc > div > div kol-button-wc {\n\t\twidth: 100%;\n\t}\n\t:host > div.tabs-align-bottom kol-button-group-wc div,\n\t:host > div.tabs-align-top kol-button-group-wc div {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t}',"KOL-PAGINATION":":host {\n\t\tdisplay: grid;\n\t\tgap: 1rem;\n\t}\n\t:host .navigation-list {\n\t\tdisplay: inline-flex;\n\t\tflex-wrap: wrap;\n\t\talign-items: center;\n\t\tgap: 0.5em;\n\t}\n\t:host kol-button-wc.selected button {\n\t\tmin-width: 44px;\n\t\tmin-height: 44px;\n\t\tdisplay: grid;\n\t\tgap: 0.25em;\n\t\tline-height: 1.5rem;\n\t\tfont-weight: 700;\n\t\tcursor: default;\n\t\tfont-size: 1rem;\n\t\talign-items: center;\n\t\tpadding: 0px 7px;\n\t\tjustify-content: center;\n\t\tfont-style: normal;\n\t\ttext-align: center;\n\t\toutline: none;\n\t\tcolor: var(--color-white);\n\t\tborder: unset;\n\t\tbackground-color: var(--color-primary);\n\t}\n\t:host kol-button-wc.selected button:focus,\n\t:host kol-button-wc.selected button:hover {\n\t\tbackground-color: var(--color-primary-20);\n\t}","KOL-LINK":"a,\n\tbutton {\n\t\tbackground-color: transparent;\n\t\tborder: 0;\n\t\tcursor: pointer;\n\t\tdisplay: inline-block;\n\t}\n\tkol-link-wc,\n\tkol-link-button-wc {\n\t\tdisplay: inline-block;\n\t}\n\ta,\n\tbutton {\n\t\tcolor: var(--color-primary);\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\tdisplay: inline-flex;\n\t\tline-height: 1.5em;\n\t\ttext-decoration-line: none !important;\n\t\toutline: none !important;\n\t}\n\ta:focus-within,\n\ta:hover,\n\tbutton:focus-within,\n\tbutton:hover {\n\t\tbox-shadow: inset 0 -1px 0 0 var(--color-primary);\n\t}\n\tkol-icon {\n\t\tpadding: 0 0.25em;\n\t\tdisplay: inline-block;\n\t}\n\t.hidden {\n\t\tdisplay: none;\n\t\tvisibility: hidden;\n\t}\n\t.skip {\n\t\tleft: -99999px;\n\t\toverflow: hidden;\n\t\tposition: absolute;\n\t\tz-index: 9999999;\n\t\tline-height: 1em;\n\t}\n\t.skip:focus {\n\t\tbackground: white;\n\t\tleft: unset;\n\t\tposition: unset;\n\t}","KOL-INPUT-TEXT":'kol-input {\n\t\tdisplay: grid;\n\t}\n\tkol-input label {\n\t\torder: 1;\n\t\tpadding: 0.125rem 0 0.4rem;\n\t\tvertical-align: text-top;\n\t\tline-height: 1.2;\n\t}\n\tkol-input div.input {\n\t\tbox-sizing: border-box;\n\t\torder: 2;\n\t\tbackground-color: white;\n\t\tborder-radius: 0.3125rem;\n\t}\n\tkol-input kol-alert.error {\n\t\tmargin-bottom: 0.4em;\n\t\tmargin-top: 0.2em;\n\t\torder: 3;\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tfont-family: var(--font-family);\n\t\tbackground-color: transparent;\n\t\tbox-sizing: border-box;\n\t\tfont-size: 1rem;\n\t\tdisplay: inline-flex;\n\t\tborder-color: var(--color-grey);\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\toverflow: hidden;\n\t\twidth: 100%;\n\t\tline-height: normal;\n\t\tpadding: 0.4rem 8px;\n\t}\n\tinput:hover,\n\tselect:hover,\n\ttextarea:hover {\n\t\tborder-color: #2d6f9e;\n\t\tbox-shadow: 0 0 0 1px #2d6f9e inset;\n\t}\n\tinput:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\tborder-color: var(--color-primary-20);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-primary-20);\n\t\toutline: none;\n\t}\n\tinput,\n\tselect:not([multiple]) {\n\t\theight: 2.75em;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\tinput:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tinput:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {\n\t\tcursor: not-allowed;\n\t\tborder-color: var(--border-default);\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\t.icons {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\theight: 0;\n\t}\n\t.icons > * {\n\t\tmargin: 0.75em;\n\t}\n\t.icon-left input,\n\t.icon-left select {\n\t\tpadding-left: 2em;\n\t}\n\t.icon-right input,\n\t.icon-right select {\n\t\tpadding-right: 2em;\n\t}\n\tkol-input.error input:focus,\n\tkol-input.error select:focus,\n\tkol-input.error textarea:focus {\n\t\tborder-color: var(--color-warning);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-warning);\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-warning);\n\t}\n\tkol-button-wc {\n\t\tposition: relative;\n\t\tfloat: right;\n\t\tz-index: 1000;\n\t\tmargin-top: -2.7em;\n\t}\n\tkol-button-wc button {\n\t\tborder: 0;\n\t\theight: 2.7em;\n\t\tbox-sizing: border-box;\n\t\tbackground-color: transparent;\n\t\tcursor: pointer;\n\t}\n\tkol-button-wc button:focus,\n\tkol-button-wc button:hover {\n\t\tbackground-color: var(--color-primary);\n\t\tcolor: var(--color-white);\n\t}\n\t.icon-right kol-button-wc {\n\t\tmargin-right: 2.5em;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\tselect[multiple],\n\ttextarea {\n\t\toverflow: auto;\n\t}\n\ttextarea {\n\t\tdisplay: block;\n\t}\n\tselect option {\n\t\tmargin: 1px 0;\n\t\tpadding: 0.5em;\n\t\tborder-radius: 0.25em;\n\t\tcursor: pointer;\n\t}\n\tselect option:disabled {\n\t\tcursor: not-allowed;\n\t}\n\toption:active:not(:disabled),\n\toption:checked:not(:disabled),\n\toption:focus:not(:disabled),\n\toption:hover:not(:disabled) {\n\t\tbackground: var(--color-primary);\n\t\tcolor: white;\n\t}',"KOL-INPUT-CHECKBOX":'/* INPUT */\n\tkol-input {\n\t\tdisplay: grid;\n\t\talign-items: center;\n\t\tjustify-items: left;\n\t\twidth: 100%;\n\t\tmin-height: 44px;\n\t}\n\tkol-input.default {\n\t\tgrid-template-columns: 2rem auto;\n\t}\n\tkol-input.switch {\n\t\tgrid-template-columns: 4rem auto;\n\t}\n\tkol-input > div.input {\n\t\tdisplay: inline-flex;\n\t\torder: 1;\n\t}\n\tkol-input > div.input input {\n\t\tmargin: 0px;\n\t}\n\tkol-input > label {\n\t\tcursor: pointer;\n\t\torder: 2;\n\t}\n\tkol-input > kol-alert.error {\n\t\torder: 3;\n\t\tpadding-top: 0.25em;\n\t\tmargin-bottom: 0.4em;\n\t\tmargin-top: 0.2em;\n\t\tgrid-column: span 2 / auto;\n\t}\n\tkol-input.error input:focus,\n\tkol-input.error select:focus,\n\tkol-input.error textarea:focus {\n\t\tborder-color: var(--color-warning) !important;\n\t\tbox-shadow: 0 0 0 1px var(--color-warning) inset;\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-warning);\n\t}\n\tinput {\n\t\tcursor: pointer;\n\t\torder: 1;\n\t\twidth: 100%;\n\t\tborder-color: var(--color-gray-30);\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\tline-height: 24px;\n\t\tfont-size: 1rem;\n\t}\n\tinput:focus,\n\tinput:hover {\n\t\tborder-color: #2d6f9e;\n\t\tbox-shadow: 0 0 0 1px #2d6f9e inset;\n\t}\n\tinput:focus:hover {\n\t\tbox-shadow: none;\n\t}\n\tinput:active {\n\t\tbox-shadow: none;\n\t}\n\tkol-alert {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t} /* CHECKBOX */\n\tkol-input label span {\n\t\tmargin-top: 0.125rem;\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\tkol-input input[type="checkbox"] {\n\t\tappearance: none;\n\t\tbackground-color: white;\n\t\tcursor: pointer;\n\t\ttransition: 0.5s;\n\t}\n\tkol-input input[type="checkbox"].kol-disabled:before {\n\t\tcursor: not-allowed;\n\t}\n\tkol-input input[type="checkbox"]:before {\n\t\tcontent: "";\n\t\tcursor: pointer;\n\t}\n\tkol-input input[type="checkbox"]:checked {\n\t\tbackground-color: var(--color-primary-20);\n\t\tborder-color: var(--color-primary-20);\n\t}\n\tkol-input.default input[type="checkbox"] {\n\t\twidth: 1rem;\n\t\theight: 1rem;\n\t}\n\tkol-input.default input[type="checkbox"]:before {\n\t\tbackground-color: transparent;\n\t\tdisplay: block;\n\t\theight: calc(2 * var(--spacing));\n\t\tposition: relative;\n\t\twidth: calc(2 * var(--spacing));\n\t}\n\tkol-input.default input[type="checkbox"]:checked:before {\n\t\tborder-right-width: 1px;\n\t\tborder-bottom-width: 1px;\n\t\tleft: calc(1.2 * var(--spacing) - 2px);\n\t\ttop: calc(2.2 * var(--spacing) - 2px);\n\t\ttransform: rotate(40deg) translate(-50%, -50%);\n\t\tbackground-color: transparent;\n\t\tborder-width: 0px 3px 3px 0px;\n\t\tborder-color: white;\n\t\tborder-radius: 1px;\n\t\tborder-style: solid;\n\t\theight: calc(2 * var(--spacing));\n\t\twidth: calc(1 * var(--spacing));\n\t}\n\tkol-input.default input[type="checkbox"]:indeterminate {\n\t\t--tw-bg-opacity: 1;\n\t\tbackground-color: white;\n\t}\n\tkol-input.default input[type="checkbox"]:indeterminate:before {\n\t\tbackground-color: var(--color-gray-30);\n\t\theight: 0.2rem;\n\t\ttop: 0.35rem;\n\t\tleft: 0.15rem;\n\t\twidth: calc(2.5 * var(--spacing));\n\t}\n\tkol-input.switch input[type="checkbox"] {\n\t\tmin-width: 3.5em;\n\t\twidth: 3.5em;\n\t\tbackground-color: var(--color-gray-30);\n\t\tborder-width: 0;\n\t\theight: 1.5em;\n\t\tborder-radius: 1.25em;\n\t\tdisplay: inline-block;\n\t\tposition: relative;\n\t}\n\tkol-input.switch input[type="checkbox"]:before {\n\t\t-webkit-transition: 0.5s;\n\t\t-moz-transition: 0.5s;\n\t\t-ms-transition: 0.5s;\n\t\ttransition: 0.5;\n\t\twidth: 1.25em;\n\t\theight: 1.25em;\n\t\tleft: calc(0.25em - 2px);\n\t\ttop: calc(0.25em - 2px);\n\t\tborder-radius: 1.25em;\n\t\tbackground-color: white;\n\t\tposition: absolute;\n\t}\n\tkol-input.switch input[type="checkbox"]:checked {\n\t\tbackground-color: var(--color-primary-20);\n\t}\n\tkol-input.switch input[type="checkbox"]:checked:before {\n\t\t-webkit-transform: translateX(2em);\n\t\t-moz-transform: translateX(2em);\n\t\t-ms-transform: translateX(2em);\n\t\ttransform: translateX(2em);\n\t\t--tw-bg-opacity: 1;\n\t}\n\tkol-input.switch input[type="checkbox"]:indeterminate {\n\t\t--tw-bg-opacity: 1;\n\t}\n\tkol-input.switch input[type="checkbox"]:indeterminate:before {\n\t\t-webkit-transform: translateX(1em);\n\t\t-moz-transform: translateX(1em);\n\t\t-ms-transform: translateX(1em);\n\t\ttransform: translateX(1em);\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}',"KOL-INPUT-RADIO":'/* INPUT */\n\tlabel {\n\t\tcursor: pointer;\n\t\tdisplay: grid;\n\t\tline-height: 20px;\n\t\tgap: 8px;\n\t\twidth: 100%;\n\t}\n\tinput {\n\t\tcursor: pointer;\n\t\twidth: 100%;\n\t\tborder-color: var(--color-grey-20);\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\tborder-radius: 5px; /* padding: 10px 14px; */\n\t\tline-height: 24px;\n\t\tfont-size: 16px;\n\t}\n\t:host fieldset div input[type="radio"]:hover {\n\t\tborder-color: var(--color-midnight);\n\t\tbox-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);\n\t}\n\t:host fieldset div input[type="radio"]:focus:hover {\n\t\tbox-shadow: none;\n\t}\n\t:host fieldset div input[type="radio"]:active {\n\t\tbox-shadow: none;\n\t}\n\tkol-alert {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tmargin-bottom: 0.4em;\n\t}\n\t.required legend > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t} /* RADIO */\n\t:host fieldset {\n\t\tborder: 0px;\n\t\tmargin: 0px;\n\t\tpadding: 0px;\n\t\tdisplay: grid;\n\t\tgap: 0.25em;\n\t}\n\t:host fieldset div {\n\t\tcursor: pointer;\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\talign-items: center;\n\t\tposition: relative;\n\t\tmin-height: 44px;\n\t}\n\t:host fieldset div label {\n\t\tcursor: pointer;\n\t\tdisplay: flex;\n\t\tpadding-left: 0.25em;\n\t\twidth: 100%;\n\t}\n\t:host fieldset div label span {\n\t\tmargin-top: 0.125em;\n\t}\n\t:host fieldset div input[type="radio"] {\n\t\tappearance: none;\n\t\ttransition: 0.5s;\n\t\tborder-radius: 100%;\n\t\theight: 1rem;\n\t\tmin-width: 1rem;\n\t\twidth: 1rem;\n\t}\n\t:host fieldset div input[type="radio"]:before {\n\t\tcontent: "";\n\t\tcursor: pointer;\n\t\tleft: calc(1 * var(--spacing) - 1px);\n\t\ttop: calc(1 * var(--spacing) - 1px);\n\t\tposition: relative;\n\t\tborder-radius: 100%;\n\t\tdisplay: block;\n\t\theight: calc(2 * var(--spacing));\n\t\twidth: calc(2 * var(--spacing));\n\t}\n\t:host fieldset div input[type="radio"]:checked:before {\n\t\tbackground-color: var(--color-primary-20);\n\t}\n\t:host fieldset div input[type="radio"]:disabled {\n\t\tcursor: not-allowed;\n\t\tborder-color: var(--border-default);\n\t\tbackground-color: var(--background-light-grey);\n\t}\n\t:host fieldset #error {\n\t\torder: 3;\n\t}\n\t:host fieldset legend {\n\t\torder: 1;\n\t\tdisplay: contents;\n\t}\n\t:host fieldset kol-input {\n\t\torder: 2;\n\t}\n\t:host fieldset kol-alert#error {\n\t\tpadding-left: 0.5em;\n\t\tcolor: var(--color-warning);\n\t}\n\tfieldset.error input:focus,\n\tfieldset.error select:focus,\n\tfieldset.error textarea:focus {\n\t\tborder-color: var(--color-warning) !important;\n\t\tbox-shadow: 0 0 0 1px var(--color-warning) inset;\n\t}\n\t:host fieldset.error kol-alert.error {\n\t\tmargin-left: -0.25em;\n\t\tcolor: var(--color-warning);\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\t:host fieldset.horizontal {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t}\n\t:host fieldset.horizontal legend {\n\t\tdisplay: inline-block;\n\t\tmargin-bottom: 0.25em;\n\t}',"KOL-SELECT":'kol-input {\n\t\tdisplay: grid;\n\t}\n\tkol-input label {\n\t\torder: 1;\n\t\tpadding: 0.125rem 0 0.4rem;\n\t\tvertical-align: text-top;\n\t\tline-height: 1.2;\n\t}\n\tkol-input div.input {\n\t\tbox-sizing: border-box;\n\t\torder: 2;\n\t\tbackground-color: white;\n\t\tborder-radius: 0.3125rem;\n\t}\n\tkol-input kol-alert.error {\n\t\tmargin-bottom: 0.4em;\n\t\tmargin-top: 0.2em;\n\t\torder: 3;\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tfont-family: var(--font-family);\n\t\tbackground-color: transparent;\n\t\tbox-sizing: border-box;\n\t\tfont-size: 1rem;\n\t\tdisplay: inline-flex;\n\t\tborder-color: var(--color-grey);\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\toverflow: hidden;\n\t\twidth: 100%;\n\t\tline-height: normal;\n\t\tpadding: 0.4rem 8px;\n\t}\n\tinput:hover,\n\tselect:hover,\n\ttextarea:hover {\n\t\tborder-color: #2d6f9e;\n\t\tbox-shadow: 0 0 0 1px #2d6f9e inset;\n\t}\n\tinput:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\tborder-color: var(--color-primary-20);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-primary-20);\n\t\toutline: none;\n\t}\n\tinput,\n\tselect:not([multiple]) {\n\t\theight: 2.75em;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\tinput:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tinput:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {\n\t\tcursor: not-allowed;\n\t\tborder-color: var(--border-default);\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\t.icons {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\theight: 0;\n\t}\n\t.icons > * {\n\t\tmargin: 0.75em;\n\t}\n\t.icon-left input,\n\t.icon-left select {\n\t\tpadding-left: 2em;\n\t}\n\t.icon-right input,\n\t.icon-right select {\n\t\tpadding-right: 2em;\n\t}\n\tkol-input.error input:focus,\n\tkol-input.error select:focus,\n\tkol-input.error textarea:focus {\n\t\tborder-color: var(--color-warning);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-warning);\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-warning);\n\t}\n\tkol-button-wc {\n\t\tposition: relative;\n\t\tfloat: right;\n\t\tz-index: 1000;\n\t\tmargin-top: -2.7em;\n\t}\n\tkol-button-wc button {\n\t\tborder: 0;\n\t\theight: 2.7em;\n\t\tbox-sizing: border-box;\n\t\tbackground-color: transparent;\n\t\tcursor: pointer;\n\t}\n\tkol-button-wc button:focus,\n\tkol-button-wc button:hover {\n\t\tbackground-color: var(--color-primary);\n\t\tcolor: var(--color-white);\n\t}\n\t.icon-right kol-button-wc {\n\t\tmargin-right: 2.5em;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\tselect[multiple],\n\ttextarea {\n\t\toverflow: auto;\n\t}\n\ttextarea {\n\t\tdisplay: block;\n\t}\n\tselect option {\n\t\tmargin: 1px 0;\n\t\tpadding: 0.5em;\n\t\tborder-radius: 0.25em;\n\t\tcursor: pointer;\n\t}\n\tselect option:disabled {\n\t\tcursor: not-allowed;\n\t}\n\toption:active:not(:disabled),\n\toption:checked:not(:disabled),\n\toption:focus:not(:disabled),\n\toption:hover:not(:disabled) {\n\t\tbackground: var(--color-primary);\n\t\tcolor: white;\n\t}',"KOL-TEXTAREA":'kol-input {\n\t\tdisplay: grid;\n\t}\n\tkol-input label {\n\t\torder: 1;\n\t\tpadding: 0.125rem 0 0.4rem;\n\t\tvertical-align: text-top;\n\t\tline-height: 1.2;\n\t}\n\tkol-input div.input {\n\t\tbox-sizing: border-box;\n\t\torder: 2;\n\t\tbackground-color: white;\n\t\tborder-radius: 0.3125rem;\n\t}\n\tkol-input kol-alert.error {\n\t\tmargin-bottom: 0.4em;\n\t\tmargin-top: 0.2em;\n\t\torder: 3;\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tfont-family: var(--font-family);\n\t\tbackground-color: transparent;\n\t\tbox-sizing: border-box;\n\t\tfont-size: 1rem;\n\t\tdisplay: inline-flex;\n\t\tborder-color: var(--color-grey);\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\toverflow: hidden;\n\t\twidth: 100%;\n\t\tline-height: normal;\n\t\tpadding: 0.4rem 8px;\n\t}\n\tinput:hover,\n\tselect:hover,\n\ttextarea:hover {\n\t\tborder-color: #2d6f9e;\n\t\tbox-shadow: 0 0 0 1px #2d6f9e inset;\n\t}\n\tinput:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\tborder-color: var(--color-primary-20);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-primary-20);\n\t\toutline: none;\n\t}\n\tinput,\n\tselect:not([multiple]) {\n\t\theight: 2.75em;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\tinput:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tinput:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {\n\t\tcursor: not-allowed;\n\t\tborder-color: var(--border-default);\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\t.icons {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\theight: 0;\n\t}\n\t.icons > * {\n\t\tmargin: 0.75em;\n\t}\n\t.icon-left input,\n\t.icon-left select {\n\t\tpadding-left: 2em;\n\t}\n\t.icon-right input,\n\t.icon-right select {\n\t\tpadding-right: 2em;\n\t}\n\tkol-input.error input:focus,\n\tkol-input.error select:focus,\n\tkol-input.error textarea:focus {\n\t\tborder-color: var(--color-warning);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-warning);\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-warning);\n\t}\n\tkol-button-wc {\n\t\tposition: relative;\n\t\tfloat: right;\n\t\tz-index: 1000;\n\t\tmargin-top: -2.7em;\n\t}\n\tkol-button-wc button {\n\t\tborder: 0;\n\t\theight: 2.7em;\n\t\tbox-sizing: border-box;\n\t\tbackground-color: transparent;\n\t\tcursor: pointer;\n\t}\n\tkol-button-wc button:focus,\n\tkol-button-wc button:hover {\n\t\tbackground-color: var(--color-primary);\n\t\tcolor: var(--color-white);\n\t}\n\t.icon-right kol-button-wc {\n\t\tmargin-right: 2.5em;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\tselect[multiple],\n\ttextarea {\n\t\toverflow: auto;\n\t}\n\ttextarea {\n\t\tdisplay: block;\n\t}\n\tselect option {\n\t\tmargin: 1px 0;\n\t\tpadding: 0.5em;\n\t\tborder-radius: 0.25em;\n\t\tcursor: pointer;\n\t}\n\tselect option:disabled {\n\t\tcursor: not-allowed;\n\t}\n\toption:active:not(:disabled),\n\toption:checked:not(:disabled),\n\toption:focus:not(:disabled),\n\toption:hover:not(:disabled) {\n\t\tbackground: var(--color-primary);\n\t\tcolor: white;\n\t}',"KOL-INPUT-PASSWORD":'kol-input {\n\t\tdisplay: grid;\n\t}\n\tkol-input label {\n\t\torder: 1;\n\t\tpadding: 0.125rem 0 0.4rem;\n\t\tvertical-align: text-top;\n\t\tline-height: 1.2;\n\t}\n\tkol-input div.input {\n\t\tbox-sizing: border-box;\n\t\torder: 2;\n\t\tbackground-color: white;\n\t\tborder-radius: 0.3125rem;\n\t}\n\tkol-input kol-alert.error {\n\t\tmargin-bottom: 0.4em;\n\t\tmargin-top: 0.2em;\n\t\torder: 3;\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tfont-family: var(--font-family);\n\t\tbackground-color: transparent;\n\t\tbox-sizing: border-box;\n\t\tfont-size: 1rem;\n\t\tdisplay: inline-flex;\n\t\tborder-color: var(--color-grey);\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\toverflow: hidden;\n\t\twidth: 100%;\n\t\tline-height: normal;\n\t\tpadding: 0.4rem 8px;\n\t}\n\tinput:hover,\n\tselect:hover,\n\ttextarea:hover {\n\t\tborder-color: #2d6f9e;\n\t\tbox-shadow: 0 0 0 1px #2d6f9e inset;\n\t}\n\tinput:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\tborder-color: var(--color-primary-20);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-primary-20);\n\t\toutline: none;\n\t}\n\tinput,\n\tselect:not([multiple]) {\n\t\theight: 2.75em;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\tinput:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tinput:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {\n\t\tcursor: not-allowed;\n\t\tborder-color: var(--border-default);\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\t.icons {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\theight: 0;\n\t}\n\t.icons > * {\n\t\tmargin: 0.75em;\n\t}\n\t.icon-left input,\n\t.icon-left select {\n\t\tpadding-left: 2em;\n\t}\n\t.icon-right input,\n\t.icon-right select {\n\t\tpadding-right: 2em;\n\t}\n\tkol-input.error input:focus,\n\tkol-input.error select:focus,\n\tkol-input.error textarea:focus {\n\t\tborder-color: var(--color-warning);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-warning);\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-warning);\n\t}\n\tkol-button-wc {\n\t\tposition: relative;\n\t\tfloat: right;\n\t\tz-index: 1000;\n\t\tmargin-top: -2.7em;\n\t}\n\tkol-button-wc button {\n\t\tborder: 0;\n\t\theight: 2.7em;\n\t\tbox-sizing: border-box;\n\t\tbackground-color: transparent;\n\t\tcursor: pointer;\n\t}\n\tkol-button-wc button:focus,\n\tkol-button-wc button:hover {\n\t\tbackground-color: var(--color-primary);\n\t\tcolor: var(--color-white);\n\t}\n\t.icon-right kol-button-wc {\n\t\tmargin-right: 2.5em;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\tselect[multiple],\n\ttextarea {\n\t\toverflow: auto;\n\t}\n\ttextarea {\n\t\tdisplay: block;\n\t}\n\tselect option {\n\t\tmargin: 1px 0;\n\t\tpadding: 0.5em;\n\t\tborder-radius: 0.25em;\n\t\tcursor: pointer;\n\t}\n\tselect option:disabled {\n\t\tcursor: not-allowed;\n\t}\n\toption:active:not(:disabled),\n\toption:checked:not(:disabled),\n\toption:focus:not(:disabled),\n\toption:hover:not(:disabled) {\n\t\tbackground: var(--color-primary);\n\t\tcolor: white;\n\t}',"KOL-INPUT-NUMBER":'kol-input {\n\t\tdisplay: grid;\n\t}\n\tkol-input label {\n\t\torder: 1;\n\t\tpadding: 0.125rem 0 0.4rem;\n\t\tvertical-align: text-top;\n\t\tline-height: 1.2;\n\t}\n\tkol-input div.input {\n\t\tbox-sizing: border-box;\n\t\torder: 2;\n\t\tbackground-color: white;\n\t\tborder-radius: 0.3125rem;\n\t}\n\tkol-input kol-alert.error {\n\t\tmargin-bottom: 0.4em;\n\t\tmargin-top: 0.2em;\n\t\torder: 3;\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tfont-family: var(--font-family);\n\t\tbackground-color: transparent;\n\t\tbox-sizing: border-box;\n\t\tfont-size: 1rem;\n\t\tdisplay: inline-flex;\n\t\tborder-color: var(--color-grey);\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\toverflow: hidden;\n\t\twidth: 100%;\n\t\tline-height: normal;\n\t\tpadding: 0.4rem 8px;\n\t}\n\tinput:hover,\n\tselect:hover,\n\ttextarea:hover {\n\t\tborder-color: #2d6f9e;\n\t\tbox-shadow: 0 0 0 1px #2d6f9e inset;\n\t}\n\tinput:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\tborder-color: var(--color-primary-20);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-primary-20);\n\t\toutline: none;\n\t}\n\tinput,\n\tselect:not([multiple]) {\n\t\theight: 2.75em;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\tinput:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tinput:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {\n\t\tcursor: not-allowed;\n\t\tborder-color: var(--border-default);\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\t.icons {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\theight: 0;\n\t}\n\t.icons > * {\n\t\tmargin: 0.75em;\n\t}\n\t.icon-left input,\n\t.icon-left select {\n\t\tpadding-left: 2em;\n\t}\n\t.icon-right input,\n\t.icon-right select {\n\t\tpadding-right: 2em;\n\t}\n\tkol-input.error input:focus,\n\tkol-input.error select:focus,\n\tkol-input.error textarea:focus {\n\t\tborder-color: var(--color-warning);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-warning);\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-warning);\n\t}\n\tkol-button-wc {\n\t\tposition: relative;\n\t\tfloat: right;\n\t\tz-index: 1000;\n\t\tmargin-top: -2.7em;\n\t}\n\tkol-button-wc button {\n\t\tborder: 0;\n\t\theight: 2.7em;\n\t\tbox-sizing: border-box;\n\t\tbackground-color: transparent;\n\t\tcursor: pointer;\n\t}\n\tkol-button-wc button:focus,\n\tkol-button-wc button:hover {\n\t\tbackground-color: var(--color-primary);\n\t\tcolor: var(--color-white);\n\t}\n\t.icon-right kol-button-wc {\n\t\tmargin-right: 2.5em;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\tselect[multiple],\n\ttextarea {\n\t\toverflow: auto;\n\t}\n\ttextarea {\n\t\tdisplay: block;\n\t}\n\tselect option {\n\t\tmargin: 1px 0;\n\t\tpadding: 0.5em;\n\t\tborder-radius: 0.25em;\n\t\tcursor: pointer;\n\t}\n\tselect option:disabled {\n\t\tcursor: not-allowed;\n\t}\n\toption:active:not(:disabled),\n\toption:checked:not(:disabled),\n\toption:focus:not(:disabled),\n\toption:hover:not(:disabled) {\n\t\tbackground: var(--color-primary);\n\t\tcolor: white;\n\t}',"KOL-INPUT-DATE":'kol-input {\n\t\tdisplay: grid;\n\t}\n\tkol-input label {\n\t\torder: 1;\n\t\tpadding: 0.125rem 0 0.4rem;\n\t\tvertical-align: text-top;\n\t\tline-height: 1.2;\n\t}\n\tkol-input div.input {\n\t\tbox-sizing: border-box;\n\t\torder: 2;\n\t\tbackground-color: white;\n\t\tborder-radius: 0.3125rem;\n\t}\n\tkol-input kol-alert.error {\n\t\tmargin-bottom: 0.4em;\n\t\tmargin-top: 0.2em;\n\t\torder: 3;\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tfont-family: var(--font-family);\n\t\tbackground-color: transparent;\n\t\tbox-sizing: border-box;\n\t\tfont-size: 1rem;\n\t\tdisplay: inline-flex;\n\t\tborder-color: var(--color-grey);\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\toverflow: hidden;\n\t\twidth: 100%;\n\t\tline-height: normal;\n\t\tpadding: 0.4rem 8px;\n\t}\n\tinput:hover,\n\tselect:hover,\n\ttextarea:hover {\n\t\tborder-color: #2d6f9e;\n\t\tbox-shadow: 0 0 0 1px #2d6f9e inset;\n\t}\n\tinput:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\tborder-color: var(--color-primary-20);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-primary-20);\n\t\toutline: none;\n\t}\n\tinput,\n\tselect:not([multiple]) {\n\t\theight: 2.75em;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\tinput:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tinput:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {\n\t\tcursor: not-allowed;\n\t\tborder-color: var(--border-default);\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\t.icons {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\theight: 0;\n\t}\n\t.icons > * {\n\t\tmargin: 0.75em;\n\t}\n\t.icon-left input,\n\t.icon-left select {\n\t\tpadding-left: 2em;\n\t}\n\t.icon-right input,\n\t.icon-right select {\n\t\tpadding-right: 2em;\n\t}\n\tkol-input.error input:focus,\n\tkol-input.error select:focus,\n\tkol-input.error textarea:focus {\n\t\tborder-color: var(--color-warning);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-warning);\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-warning);\n\t}\n\tkol-button-wc {\n\t\tposition: relative;\n\t\tfloat: right;\n\t\tz-index: 1000;\n\t\tmargin-top: -2.7em;\n\t}\n\tkol-button-wc button {\n\t\tborder: 0;\n\t\theight: 2.7em;\n\t\tbox-sizing: border-box;\n\t\tbackground-color: transparent;\n\t\tcursor: pointer;\n\t}\n\tkol-button-wc button:focus,\n\tkol-button-wc button:hover {\n\t\tbackground-color: var(--color-primary);\n\t\tcolor: var(--color-white);\n\t}\n\t.icon-right kol-button-wc {\n\t\tmargin-right: 2.5em;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\tselect[multiple],\n\ttextarea {\n\t\toverflow: auto;\n\t}\n\ttextarea {\n\t\tdisplay: block;\n\t}\n\tselect option {\n\t\tmargin: 1px 0;\n\t\tpadding: 0.5em;\n\t\tborder-radius: 0.25em;\n\t\tcursor: pointer;\n\t}\n\tselect option:disabled {\n\t\tcursor: not-allowed;\n\t}\n\toption:active:not(:disabled),\n\toption:checked:not(:disabled),\n\toption:focus:not(:disabled),\n\toption:hover:not(:disabled) {\n\t\tbackground: var(--color-primary);\n\t\tcolor: white;\n\t}',"KOL-INPUT-EMAIL":'kol-input {\n\t\tdisplay: grid;\n\t}\n\tkol-input label {\n\t\torder: 1;\n\t\tpadding: 0.125rem 0 0.4rem;\n\t\tvertical-align: text-top;\n\t\tline-height: 1.2;\n\t}\n\tkol-input div.input {\n\t\tbox-sizing: border-box;\n\t\torder: 2;\n\t\tbackground-color: white;\n\t\tborder-radius: 0.3125rem;\n\t}\n\tkol-input kol-alert.error {\n\t\tmargin-bottom: 0.4em;\n\t\tmargin-top: 0.2em;\n\t\torder: 3;\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tfont-family: var(--font-family);\n\t\tbackground-color: transparent;\n\t\tbox-sizing: border-box;\n\t\tfont-size: 1rem;\n\t\tdisplay: inline-flex;\n\t\tborder-color: var(--color-grey);\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\toverflow: hidden;\n\t\twidth: 100%;\n\t\tline-height: normal;\n\t\tpadding: 0.4rem 8px;\n\t}\n\tinput:hover,\n\tselect:hover,\n\ttextarea:hover {\n\t\tborder-color: #2d6f9e;\n\t\tbox-shadow: 0 0 0 1px #2d6f9e inset;\n\t}\n\tinput:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\tborder-color: var(--color-primary-20);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-primary-20);\n\t\toutline: none;\n\t}\n\tinput,\n\tselect:not([multiple]) {\n\t\theight: 2.75em;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\tinput:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tinput:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {\n\t\tcursor: not-allowed;\n\t\tborder-color: var(--border-default);\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\t.icons {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\theight: 0;\n\t}\n\t.icons > * {\n\t\tmargin: 0.75em;\n\t}\n\t.icon-left input,\n\t.icon-left select {\n\t\tpadding-left: 2em;\n\t}\n\t.icon-right input,\n\t.icon-right select {\n\t\tpadding-right: 2em;\n\t}\n\tkol-input.error input:focus,\n\tkol-input.error select:focus,\n\tkol-input.error textarea:focus {\n\t\tborder-color: var(--color-warning);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-warning);\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-warning);\n\t}\n\tkol-button-wc {\n\t\tposition: relative;\n\t\tfloat: right;\n\t\tz-index: 1000;\n\t\tmargin-top: -2.7em;\n\t}\n\tkol-button-wc button {\n\t\tborder: 0;\n\t\theight: 2.7em;\n\t\tbox-sizing: border-box;\n\t\tbackground-color: transparent;\n\t\tcursor: pointer;\n\t}\n\tkol-button-wc button:focus,\n\tkol-button-wc button:hover {\n\t\tbackground-color: var(--color-primary);\n\t\tcolor: var(--color-white);\n\t}\n\t.icon-right kol-button-wc {\n\t\tmargin-right: 2.5em;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\tselect[multiple],\n\ttextarea {\n\t\toverflow: auto;\n\t}\n\ttextarea {\n\t\tdisplay: block;\n\t}\n\tselect option {\n\t\tmargin: 1px 0;\n\t\tpadding: 0.5em;\n\t\tborder-radius: 0.25em;\n\t\tcursor: pointer;\n\t}\n\tselect option:disabled {\n\t\tcursor: not-allowed;\n\t}\n\toption:active:not(:disabled),\n\toption:checked:not(:disabled),\n\toption:focus:not(:disabled),\n\toption:hover:not(:disabled) {\n\t\tbackground: var(--color-primary);\n\t\tcolor: white;\n\t}',"KOL-INPUT-FILE":'kol-input {\n\t\tdisplay: grid;\n\t}\n\tkol-input label {\n\t\torder: 1;\n\t\tpadding: 0.125rem 0 0.4rem;\n\t\tvertical-align: text-top;\n\t\tline-height: 1.2;\n\t}\n\tkol-input div.input {\n\t\tbox-sizing: border-box;\n\t\torder: 2;\n\t\tbackground-color: white;\n\t\tborder-radius: 0.3125rem;\n\t}\n\tkol-input kol-alert.error {\n\t\tmargin-bottom: 0.4em;\n\t\tmargin-top: 0.2em;\n\t\torder: 3;\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tfont-family: var(--font-family);\n\t\tbackground-color: transparent;\n\t\tbox-sizing: border-box;\n\t\tfont-size: 1rem;\n\t\tdisplay: inline-flex;\n\t\tborder-color: var(--color-grey);\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\toverflow: hidden;\n\t\twidth: 100%;\n\t\tline-height: normal;\n\t\tpadding: 0.4rem 8px;\n\t}\n\tinput:hover,\n\tselect:hover,\n\ttextarea:hover {\n\t\tborder-color: #2d6f9e;\n\t\tbox-shadow: 0 0 0 1px #2d6f9e inset;\n\t}\n\tinput:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\tborder-color: var(--color-primary-20);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-primary-20);\n\t\toutline: none;\n\t}\n\tinput,\n\tselect:not([multiple]) {\n\t\theight: 2.75em;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\tinput:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tinput:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {\n\t\tcursor: not-allowed;\n\t\tborder-color: var(--border-default);\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\t.icons {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\theight: 0;\n\t}\n\t.icons > * {\n\t\tmargin: 0.75em;\n\t}\n\t.icon-left input,\n\t.icon-left select {\n\t\tpadding-left: 2em;\n\t}\n\t.icon-right input,\n\t.icon-right select {\n\t\tpadding-right: 2em;\n\t}\n\tkol-input.error input:focus,\n\tkol-input.error select:focus,\n\tkol-input.error textarea:focus {\n\t\tborder-color: var(--color-warning);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-warning);\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-warning);\n\t}\n\tkol-button-wc {\n\t\tposition: relative;\n\t\tfloat: right;\n\t\tz-index: 1000;\n\t\tmargin-top: -2.7em;\n\t}\n\tkol-button-wc button {\n\t\tborder: 0;\n\t\theight: 2.7em;\n\t\tbox-sizing: border-box;\n\t\tbackground-color: transparent;\n\t\tcursor: pointer;\n\t}\n\tkol-button-wc button:focus,\n\tkol-button-wc button:hover {\n\t\tbackground-color: var(--color-primary);\n\t\tcolor: var(--color-white);\n\t}\n\t.icon-right kol-button-wc {\n\t\tmargin-right: 2.5em;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\tselect[multiple],\n\ttextarea {\n\t\toverflow: auto;\n\t}\n\ttextarea {\n\t\tdisplay: block;\n\t}\n\tselect option {\n\t\tmargin: 1px 0;\n\t\tpadding: 0.5em;\n\t\tborder-radius: 0.25em;\n\t\tcursor: pointer;\n\t}\n\tselect option:disabled {\n\t\tcursor: not-allowed;\n\t}\n\toption:active:not(:disabled),\n\toption:checked:not(:disabled),\n\toption:focus:not(:disabled),\n\toption:hover:not(:disabled) {\n\t\tbackground: var(--color-primary);\n\t\tcolor: white;\n\t}',"KOL-INPUT-COLOR":'kol-input {\n\t\tdisplay: grid;\n\t}\n\tkol-input label {\n\t\torder: 1;\n\t\tpadding: 0.125rem 0 0.4rem;\n\t\tvertical-align: text-top;\n\t\tline-height: 1.2;\n\t}\n\tkol-input div.input {\n\t\tbox-sizing: border-box;\n\t\torder: 2;\n\t\tbackground-color: white;\n\t\tborder-radius: 0.3125rem;\n\t}\n\tkol-input kol-alert.error {\n\t\tmargin-bottom: 0.4em;\n\t\tmargin-top: 0.2em;\n\t\torder: 3;\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tfont-family: var(--font-family);\n\t\tbackground-color: transparent;\n\t\tbox-sizing: border-box;\n\t\tfont-size: 1rem;\n\t\tdisplay: inline-flex;\n\t\tborder-color: var(--color-grey);\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\toverflow: hidden;\n\t\twidth: 100%;\n\t\tline-height: normal;\n\t\tpadding: 0.4rem 8px;\n\t}\n\tinput:hover,\n\tselect:hover,\n\ttextarea:hover {\n\t\tborder-color: #2d6f9e;\n\t\tbox-shadow: 0 0 0 1px #2d6f9e inset;\n\t}\n\tinput:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\tborder-color: var(--color-primary-20);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-primary-20);\n\t\toutline: none;\n\t}\n\tinput,\n\tselect:not([multiple]) {\n\t\theight: 2.75em;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\tinput:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tinput:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {\n\t\tcursor: not-allowed;\n\t\tborder-color: var(--border-default);\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\t.icons {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\theight: 0;\n\t}\n\t.icons > * {\n\t\tmargin: 0.75em;\n\t}\n\t.icon-left input,\n\t.icon-left select {\n\t\tpadding-left: 2em;\n\t}\n\t.icon-right input,\n\t.icon-right select {\n\t\tpadding-right: 2em;\n\t}\n\tkol-input.error input:focus,\n\tkol-input.error select:focus,\n\tkol-input.error textarea:focus {\n\t\tborder-color: var(--color-warning);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-warning);\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-warning);\n\t}\n\tkol-button-wc {\n\t\tposition: relative;\n\t\tfloat: right;\n\t\tz-index: 1000;\n\t\tmargin-top: -2.7em;\n\t}\n\tkol-button-wc button {\n\t\tborder: 0;\n\t\theight: 2.7em;\n\t\tbox-sizing: border-box;\n\t\tbackground-color: transparent;\n\t\tcursor: pointer;\n\t}\n\tkol-button-wc button:focus,\n\tkol-button-wc button:hover {\n\t\tbackground-color: var(--color-primary);\n\t\tcolor: var(--color-white);\n\t}\n\t.icon-right kol-button-wc {\n\t\tmargin-right: 2.5em;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\tselect[multiple],\n\ttextarea {\n\t\toverflow: auto;\n\t}\n\ttextarea {\n\t\tdisplay: block;\n\t}\n\tselect option {\n\t\tmargin: 1px 0;\n\t\tpadding: 0.5em;\n\t\tborder-radius: 0.25em;\n\t\tcursor: pointer;\n\t}\n\tselect option:disabled {\n\t\tcursor: not-allowed;\n\t}\n\toption:active:not(:disabled),\n\toption:checked:not(:disabled),\n\toption:focus:not(:disabled),\n\toption:hover:not(:disabled) {\n\t\tbackground: var(--color-primary);\n\t\tcolor: white;\n\t}',"KOL-INPUT-RANGE":'kol-input {\n\t\tdisplay: grid;\n\t}\n\tkol-input label {\n\t\torder: 1;\n\t\tpadding: 0.125rem 0 0.4rem;\n\t\tvertical-align: text-top;\n\t\tline-height: 1.2;\n\t}\n\tkol-input div.input {\n\t\tbox-sizing: border-box;\n\t\torder: 2;\n\t\tbackground-color: white;\n\t\tborder-radius: 0.3125rem;\n\t}\n\tkol-input kol-alert.error {\n\t\tmargin-bottom: 0.4em;\n\t\tmargin-top: 0.2em;\n\t\torder: 3;\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tfont-family: var(--font-family);\n\t\tbackground-color: transparent;\n\t\tbox-sizing: border-box;\n\t\tfont-size: 1rem;\n\t\tdisplay: inline-flex;\n\t\tborder-color: var(--color-grey);\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\toverflow: hidden;\n\t\twidth: 100%;\n\t\tline-height: normal;\n\t\tpadding: 0.4rem 8px;\n\t}\n\tinput:hover,\n\tselect:hover,\n\ttextarea:hover {\n\t\tborder-color: #2d6f9e;\n\t\tbox-shadow: 0 0 0 1px #2d6f9e inset;\n\t}\n\tinput:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\tborder-color: var(--color-primary-20);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-primary-20);\n\t\toutline: none;\n\t}\n\tinput,\n\tselect:not([multiple]) {\n\t\theight: 2.75em;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\tinput:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tinput:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {\n\t\tcursor: not-allowed;\n\t\tborder-color: var(--border-default);\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\t.icons {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\theight: 0;\n\t}\n\t.icons > * {\n\t\tmargin: 0.75em;\n\t}\n\t.icon-left input,\n\t.icon-left select {\n\t\tpadding-left: 2em;\n\t}\n\t.icon-right input,\n\t.icon-right select {\n\t\tpadding-right: 2em;\n\t}\n\tkol-input.error input:focus,\n\tkol-input.error select:focus,\n\tkol-input.error textarea:focus {\n\t\tborder-color: var(--color-warning);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-warning);\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-warning);\n\t}\n\tkol-button-wc {\n\t\tposition: relative;\n\t\tfloat: right;\n\t\tz-index: 1000;\n\t\tmargin-top: -2.7em;\n\t}\n\tkol-button-wc button {\n\t\tborder: 0;\n\t\theight: 2.7em;\n\t\tbox-sizing: border-box;\n\t\tbackground-color: transparent;\n\t\tcursor: pointer;\n\t}\n\tkol-button-wc button:focus,\n\tkol-button-wc button:hover {\n\t\tbackground-color: var(--color-primary);\n\t\tcolor: var(--color-white);\n\t}\n\t.icon-right kol-button-wc {\n\t\tmargin-right: 2.5em;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\tselect[multiple],\n\ttextarea {\n\t\toverflow: auto;\n\t}\n\ttextarea {\n\t\tdisplay: block;\n\t}\n\tselect option {\n\t\tmargin: 1px 0;\n\t\tpadding: 0.5em;\n\t\tborder-radius: 0.25em;\n\t\tcursor: pointer;\n\t}\n\tselect option:disabled {\n\t\tcursor: not-allowed;\n\t}\n\toption:active:not(:disabled),\n\toption:checked:not(:disabled),\n\toption:focus:not(:disabled),\n\toption:hover:not(:disabled) {\n\t\tbackground: var(--color-primary);\n\t\tcolor: white;\n\t}',"KOL-NAV":'/* :host * {hyphens: var(--hyphens);font-family: var(--font-family);line-height: var(--line-height);word-break: break-word;} */\n\t:host .hidden {\n\t\tdisplay: none;\n\t}\n\t:host > div > nav ul {\n\t\tlist-style: none;\n\t\tmargin: 0px;\n\t\tpadding: 0px;\n\t\tborder-radius: var(--border-radius);\n\t\tbackground-color: var(--color-primary);\n\t}\n\t:host > div > nav ul > li {\n\t\tborder-radius: var(--border-radius);\n\t\toverflow: hidden;\n\t\tpadding: 0.125em;\n\t}\n\t:host > div > nav ul > li[part*="vertical"] + li {\n\t\tborder-radius: 0;\n\t\tborder-top: 0.1em dotted white;\n\t}\n\t:host > div > nav ul > li[part*="vertical selected"] {\n\t\tborder-right: 0.375em solid var(--color-yellow-neutral);\n\t}\n\t:host > div > nav ul > li[part*="horizontal"] + li {\n\t\tborder-radius: 0;\n\t\tborder-left: 0.1em dotted white;\n\t}\n\t:host > div > nav ul > li[part*="horizontal selected"] {\n\t\tborder-bottom: 0.375em solid var(--color-yellow-neutral);\n\t}\n\t:host > div > nav ul > li > div {\n\t\theight: 100%;\n\t}\n\t:host > div > nav kol-link-wc {\n\t\twidth: 100%; /*height: 100%;font-weight: 600;*/\n\t\tdisplay: block;\n\t}\n\t:host > div > nav kol-link-wc a {\n\t\tborder-radius: var(--border-radius);\n\t\tbackground-color: var(--color-primary);\n\t\tborder: 1px solid transparent;\n\t\tgrid: flex;\n\t\tline-height: 2em;\n\t\tpadding: 0.5em;\n\t\tcolor: white;\n\t\theight: 100%;\n\t\t-webkit-box-align: center;\n\t\talign-items: center;\n\t\tdisplay: flex;\n\t\tcursor: pointer;\n\t\ttext-decoration: inherit;\n\t}\n\t:host > div > nav kol-link-wc[exportparts*="selected"] a {\n\t\tbackground-color: var(--color-primary-20);\n\t\tfont-weight: 700;\n\t}\n\t:host > div > nav kol-link-wc a kol-icon.mr-2 {\n\t\tmargin-right: calc(2 * var(--spacing));\n\t}\n\t:host > div > nav kol-link-wc a kol-icon.ml-2 {\n\t\tmargin-left: calc(2 * var(--spacing));\n\t}\n\t:host > div > nav kol-link-wc a:focus,\n\t:host > div > nav kol-link-wc a:hover {\n\t\tborder: 1px solid white;\n\t\tbackground-color: var(--kolibri-color-focus);\n\t} /* compact button */\n\t:host > div > div:last-child {\n\t\tmargin-top: 0.5em;\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n\t:host > div > nav kol-link-wc a.text-center {\n\t\tdisplay: grid;\n\t\talign-items: center;\n\t\tjustify-items: center;\n\t} /* horizontal */\n\tul.flex {\n\t\tdisplay: flex;\n\t}\n\tli > div > div.absolute {\n\t\tposition: absolute;\n\t}\n\tkol-span-wc {\n\t\tjustify-items: baseline;\n\t}',"KOL-BREADCRUMB":'nav {\n\t\twidth: 100%;\n\t}\n\tul {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tlist-style: none;\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\talign-items: center;\n\t}\n\tkol-link {\n\t\tdisplay: inline;\n\t}\n\t:host kol-icon[exportparts*="separator"] {\n\t\tpadding: 0 0.5rem;\n\t}\n\t:host kol-icon::part(icon separator) {\n\t\tfont-weight: 900;\n\t\tfont-size: 0.875rem;\n\t}\n\t:host kol-icon::part(icon separator)::before {\n\t\tcolor: black;\n\t\tcontent: "\f054";\n\t\tfont-family: "Font Awesome 6 Free";\n\t}\n\t:host li > kol-link > kol-link-wc > a {\n\t\tcolor: red !important;\n\t}',"KOL-TOAST":":host > div {\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 0;\n\t\tz-index: 200;\n\t}\n\t:host > div > kol-alert {\n\t\tdisplay: block;\n\t\tmargin: auto;\n\t\tpadding: 1rem;\n\t\tmax-width: 750px;\n\t}\n\t:host > div > kol-button-wc {\n\t\ttop: 0;\n\t\tposition: relative;\n\t\tdisplay: block;\n\t\tmargin: auto;\n\t\twidth: 1em;\n\t}","KOL-LINK-BUTTON":"a {\n\t\tmin-width: 44px;\n\t\tmin-height: 44px;\n\t\tbackground-color: transparent;\n\t\tborder: 0;\n\t\tcursor: pointer;\n\t\tpadding: 0;\n\t\tdisplay: flex;\n\t\tgap: 0.25rem;\n\t\tjustify-items: center;\n\t\talign-items: center;\n\t\ttext-decoration: none !important;\n\t}\n\ta > kol-span-wc {\n\t\tdisplay: grid;\n\t\tmin-width: 44px;\n\t\tmin-height: 44px;\n\t\tgap: 0.25em;\n\t\tline-height: 1.5rem;\n\t\tfont-family: Roboto;\n\t\tfont-weight: 700;\n\t\tcursor: pointer;\n\t\tfont-size: 1rem;\n\t\talign-items: center;\n\t\tpadding: 0px 7px;\n\t\tjustify-content: center;\n\t\tfont-style: normal;\n\t\ttext-align: center;\n\t\tborder: none;\n\t\toutline: none;\n\t}\n\ta:active > kol-span-wc {\n\t\ttransform: translateY(1px);\n\t}\n\t.primary a:disabled > kol-span-wc,\n\t.danger a:disabled > kol-span-wc,\n\t.normal a:disabled > kol-span-wc {\n\t\tcursor: not-allowed;\n\t\tcolor: var(--color-white);\n\t\tbackground-color: var(--color-gray-40);\n\t}\n\t.ghost a:disabled > kol-span-wc,\n\t.loading a:disabled > kol-span-wc,\n\t.secondary a:disabled > kol-span-wc {\n\t\tcursor: not-allowed;\n\t\tcolor: var(--color-gray-40);\n\t\tbackground-color: var(--color-white);\n\t\tborder: var(--color-gray-40) solid 3px;\n\t}\n\t.primary a > kol-span-wc,\n\t.primary a:hover > kol-span-wc,\n\t.normal a > kol-span-wc,\n\t.normal a:hover > kol-span-wc {\n\t\tbackground-color: var(--color-primary);\n\t\tcolor: var(--color-white);\n\t}\n\t.loading a > kol-span-wc,\n\t.loading a:hover > kol-span-wc,\n\t.secondary a > kol-span-wc,\n\t.secondary a:hover > kol-span-wc {\n\t\tbackground-color: var(--color-white);\n\t\tcolor: var(--color-primary);\n\t\tborder: 2px solid var(--color-primary);\n\t}\n\t.danger a > kol-span-wc,\n\t.danger a:hover > kol-span-wc {\n\t\tbackground-color: var(--color-warning);\n\t\tborder-color: var(--color-warning);\n\t\tcolor: var(--color-white);\n\t\tbox-shadow: unset;\n\t}\n\t.ghost a,\n\t.ghost a:hover > kol-span-wc {\n\t\tbackground-color: unset;\n\t\tcolor: var(--color-primary);\n\t\tbox-shadow: unset;\n\t}\n\t.primary a:active > kol-span-wc,\n\t.primary a:focus > kol-span-wc,\n\t.primary a:hover > kol-span-wc,\n\t.loading a:active > kol-span-wc,\n\t.loading a:focus > kol-span-wc,\n\t.loading a:hover > kol-span-wc,\n\t.secondary a:active > kol-span-wc,\n\t.secondary a:focus > kol-span-wc,\n\t.secondary a:hover > kol-span-wc,\n\t.normal a:active > kol-span-wc,\n\t.normal a:focus > kol-span-wc,\n\t.normal a:hover > kol-span-wc {\n\t\tbackground-color: var(--color-primary-20);\n\t\tcolor: var(--color-white);\n\t\toutline: none;\n\t}\n\t.loading a:active > kol-span-wc,\n\t.loading a:focus > kol-span-wc,\n\t.loading a:hover > kol-span-wc,\n\t.secondary a:active > kol-span-wc,\n\t.secondary a:focus > kol-span-wc,\n\t.secondary a:hover > kol-span-wc {\n\t\tborder: 2px solid var(--color-primary-20);\n\t}\n\t.danger a:active > kol-span-wc,\n\t.danger a:hover > kol-span-wc {\n\t\tcolor: var(--color-white);\n\t\tbackground-color: var(--color-dark-yellow-neutral);\n\t\toutline: none;\n\t}\n\t.ghost a:active > kol-span-wc,\n\t.ghost a:hover > kol-span-wc {\n\t\tcolor: var(--color-primary);\n\t\tbox-shadow: inset 0 0 0 2px var(--color-primary);\n\t\toutline: none;\n\t}\n\ta > kol-span-wc > span {\n\t\tdisplay: flex;\n\t\tgap: 0.5em;\n\t\tmargin: auto;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tletter-spacing: 0.75px;\n\t}\n\ta.hide-label > kol-span-wc {\n\t\tpadding: 8px;\n\t}\n\ta.hide-label > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n\ta.hide-label > kol-span-wc kol-icon {\n\t\tdisplay: inline-block;\n\t\twidth: 1.5em;\n\t\theight: 1.5em;\n\t}\n\t.loading a > kol-span-wc kol-icon {\n\t\tanimation: spin 5s infinite linear;\n\t}\n\t.loading a > kol-span-wc {\n\t\tmin-height: unset !important;\n\t\tmin-width: unset !important;\n\t}","KOL-BUTTON-LINK":"a,\n\tbutton {\n\t\tbackground-color: transparent;\n\t\tborder: 0;\n\t\tcursor: pointer;\n\t\tdisplay: inline-block;\n\t}\n\tkol-link-wc,\n\tkol-link-button-wc {\n\t\tdisplay: inline-block;\n\t}\n\ta,\n\tbutton {\n\t\tcolor: var(--color-primary);\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\tdisplay: inline-flex;\n\t\tline-height: 1.5em;\n\t\ttext-decoration-line: none !important;\n\t\toutline: none !important;\n\t}\n\ta:focus-within,\n\ta:hover,\n\tbutton:focus-within,\n\tbutton:hover {\n\t\tbox-shadow: inset 0 -1px 0 0 var(--color-primary);\n\t}\n\tkol-icon {\n\t\tpadding: 0 0.25em;\n\t\tdisplay: inline-block;\n\t}\n\t.hidden {\n\t\tdisplay: none;\n\t\tvisibility: hidden;\n\t}\n\t.skip {\n\t\tleft: -99999px;\n\t\toverflow: hidden;\n\t\tposition: absolute;\n\t\tz-index: 9999999;\n\t\tline-height: 1em;\n\t}\n\t.skip:focus {\n\t\tbackground: white;\n\t\tleft: unset;\n\t\tposition: unset;\n\t}","KOL-SKIP-NAV":"kol-link-wc > a > kol-span-wc {\n\t\tborder-radius: 2px;\n\t\tborder-style: solid;\n\t\tborder-width: 2px;\n\t\tgap: 0.5rem;\n\t\tline-height: 1rem;\n\t\tpadding: 0.75rem 1rem;\n\t\tbackground-color: var(--color-primary);\n\t\tborder-color: var(--color-primary-10);\n\t\tcolor: white;\n\t\tcursor: pointer;\n\t}"}),z.createTheme("desy-v2",{GLOBAL:"\n\tkol-tooltip-wc .tooltip-area {\n\t\tbackground-color:#f2f2f2;\n\t}\n\tkol-tooltip-wc .tooltip-arrow {\n\t\tbackground-color: #626262;\n\t}\n\tkol-tooltip-wc .tooltip-content {\n\t\tpadding: 0.25rem 0.5rem;\n\t\tfont-size: 0.875rem;\n\t\tline-height: 1.25rem;\n\t\tborder-radius: 2px;\n\t\tborder: 1px solid #626262;\n\t}\n\t:host {\n\t\t--color-primary: #326cae;\n\t\t--color-primary-10: #1e538f;\n\t\t--color-primary-20: #08335e;\n\t\t--color-yellow-neutral: #ef9e48;\n\t\t--color-dark-yellow-neutral: #a8672c;\n\t\t--color-warning: #a94442;\n\t\t--color-success: #5cb85c;\n\t\t--color-background: #edf4f7;\n\t\t--color-black: #000000;\n\t\t--color-gray-10: #333333;\n\t\t--color-gray-20: #666666;\n\t\t--color-gray-30: #737373;\n\t\t--color-gray-40: #999999;\n\t\t--color-gray-50: #b3b3b3;\n\t\t--color-gray-60: #dddddd;\n\t\t--color-gray-70: #f2f2f2;\n\t\t--color-white: #ffffff;\n\t\t--font-family: BundesSans Web, Calibri, Verdana, Arial, Helvetica, sans-serif;\n\t\t--font-size: 14px;\n\t\t--spacing: 0.25em;\n\t}\n\t:host {\n\t\tcolor: var(--color-black);\n\t}\n\t:host * {\n\t\tbox-sizing: border-box;\n\t\tfont-family: var(--font-family);\n\t}\n\t:host h1,\n\t:host h2,\n\t:host h3,\n\t:host h4,\n\t:host h5,\n\t:host h6 {\n\t\tmargin: 0;\n\t\tfont-family: var(--font-family);\n\t}\n\ta,\n\tbutton {\n\t\talign-items: center;\n\t\tbackground-color: transparent;\n\t\tborder: 0;\n\t\tcolor: black;\n\t\tcursor: pointer;\n\t\tdisplay: inline-flex;\n\t\tgap: 0.25rem;\n\t\tjustify-items: center;\n\t}\n\tinput,\n\toption,\n\tselect,\n\tsummary,\n\ttextarea {\n\t\tdisplay: inline-block;\n\t}\n\ta,\n\tbutton,\n\tinput,\n\toption,\n\tselect,\n\tsummary,\n\ttextarea {\n\t\t-ms-hyphens: auto;\n\t\t-webkit-hyphens: auto;\n\t\thyphens: auto;\n\t\tletter-spacing: inherit;\n\t\tword-break: break-word;\n\t}\n\t*[tabindex]:focus,\n\ta:focus,\n\tbutton:focus,\n\tinput:focus,\n\tselect:focus,\n\tsummary:focus,\n\ttextarea:focus {\n\t\tcursor: pointer;\n\t\toutline-color: var(--color-ocean);\n\t\toutline-offset: 2px;\n\t\toutline-style: solid;\n\t\toutline-width: 0;\n\t\ttransition: outline-offset 0.2s linear;\n\t}\n\t@keyframes spin {\n\t\t0% {\n\t\t\ttransform: rotate(0deg);\n\t\t}\n\t\t100% {\n\t\t\ttransform: rotate(360deg);\n\t\t}\n\t}\n\tkol-heading-wc {\n\t\tfont-weight: 700;\n\t}","KOL-BUTTON":"a,\n\tbutton {\n\t\tbackground-color: transparent;\n\t\tborder: 0;\n\t\tcursor: pointer;\n\t\tdisplay: inline-block;\n\t}\n\tbutton {\n\t\tbackground-color: transparent;\n\t\tborder: 0;\n\t\tcursor: pointer;\n\t\tmin-width: 44px;\n\t\tmin-height: 44px;\n\t\tpadding: 0;\n\t\ttext-decoration: none !important;\n\t}\n\tbutton > kol-span-wc {\n\t\tdisplay: grid;\n\t\tgap: 0.25em;\n\t\tline-height: 1.5rem;\n\t\tfont-family: Roboto;\n\t\tfont-weight: 700;\n\t\tcursor: pointer;\n\t\tfont-size: 1rem;\n\t\talign-items: center;\n\t\tpadding: 6px 8px;\n\t\tjustify-content: center;\n\t\tfont-style: normal;\n\t\ttext-align: center;\n\t\toutline: none;\n\t\tborder-style: solid;\n\t\tborder-width: 2px;\n\t}\n\tbutton:active > kol-span-wc {\n\t\ttransform: translateY(1px);\n\t}\n\tbutton.primary:disabled > kol-span-wc,\n\tbutton.danger:disabled > kol-span-wc,\n\tbutton.normal:disabled > kol-span-wc {\n\t\tcursor: not-allowed;\n\t\tcolor: var(--color-white);\n\t\tbackground-color: var(--color-gray-40);\n\t\tborder-color: var(--color-gray-40);\n\t}\n\tbutton.ghost:disabled > kol-span-wc,\n\tbutton.loading:disabled > kol-span-wc,\n\tbutton.help:disabled > kol-span-wc,\n\tbutton.secondary:disabled > kol-span-wc {\n\t\tcursor: not-allowed;\n\t\tcolor: var(--color-gray-40);\n\t\tbackground-color: var(--color-white);\n\t\tborder-color: var(--color-white);\n\t}\n\tbutton.primary > kol-span-wc,\n\tbutton.primary:hover > kol-span-wc,\n\tbutton.normal > kol-span-wc,\n\tbutton.normal:hover > kol-span-wc {\n\t\tbackground-color: var(--color-primary);\n\t\tborder-color: var(--color-primary);\n\t\tcolor: var(--color-white);\n\t}\n\tbutton.loading > kol-span-wc,\n\tbutton.loading:hover > kol-span-wc,\n\tbutton.help > kol-span-wc,\n\tbutton.help:hover > kol-span-wc,\n\tbutton.secondary > kol-span-wc,\n\tbutton.secondary:hover > kol-span-wc {\n\t\tbackground-color: var(--color-white);\n\t\tborder-color: var(--color-primary);\n\t\tcolor: var(--color-primary);\n\t}\n\tbutton.danger > kol-span-wc,\n\tbutton.danger:hover > kol-span-wc {\n\t\tbackground-color: var(--color-warning);\n\t\tborder-color: var(--color-warning);\n\t\tcolor: var(--color-white);\n\t}\n\tbutton.ghost,\n\tbutton.ghost:hover > kol-span-wc {\n\t\tbackground-color: transparent;\n\t\tborder-color: transparent;\n\t\tcolor: var(--color-primary);\n\t}\n\tbutton.primary:active > kol-span-wc,\n\tbutton.primary:focus > kol-span-wc,\n\tbutton.primary:hover > kol-span-wc,\n\tbutton.loading:active > kol-span-wc,\n\tbutton.loading:focus > kol-span-wc,\n\tbutton.loading:hover > kol-span-wc,\n\tbutton.help:active > kol-span-wc,\n\tbutton.help:focus > kol-span-wc,\n\tbutton.help:hover > kol-span-wc,\n\tbutton.secondary:active > kol-span-wc,\n\tbutton.secondary:focus > kol-span-wc,\n\tbutton.secondary:hover > kol-span-wc,\n\tbutton.normal:active > kol-span-wc,\n\tbutton.normal:focus > kol-span-wc,\n\tbutton.normal:hover > kol-span-wc {\n\t\tbackground-color: var(--color-primary-20);\n\t\tborder-color: var(--color-primary-20);\n\t\tcolor: var(--color-white);\n\t\toutline: none;\n\t}\n\tbutton.loading:active > kol-span-wc,\n\tbutton.loading:focus > kol-span-wc,\n\tbutton.loading:hover > kol-span-wc,\n\tbutton.help:active > kol-span-wc,\n\tbutton.help:focus > kol-span-wc,\n\tbutton.help:hover > kol-span-wc,\n\tbutton.secondary:active > kol-span-wc,\n\tbutton.secondary:focus > kol-span-wc,\n\tbutton.secondary:hover > kol-span-wc {\n\t\tborder-color: var(--color-primary-20);\n\t}\n\tbutton.danger:active > kol-span-wc,\n\tbutton.danger:hover > kol-span-wc {\n\t\tbackground-color: var(--color-dark-yellow-neutral);\n\t\tborder-color: var(--color-dark-yellow-neutral);\n\t\tcolor: var(--color-white);\n\t\toutline: none;\n\t}\n\tbutton.ghost:active > kol-span-wc,\n\tbutton.ghost:hover > kol-span-wc {\n\t\tcolor: var(--color-primary);\n\t\toutline: none;\n\t}\n\tbutton > kol-span-wc > span {\n\t\tdisplay: flex;\n\t\tgap: 0.5em;\n\t\tmargin: auto;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tletter-spacing: 0.75px;\n\t}\n\tbutton.hide-label > kol-span-wc {\n\t\tpadding: 8px;\n\t}\n\tbutton.hide-label > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n\tbutton.hide-label > kol-span-wc kol-icon {\n\t\tdisplay: inline-block;\n\t\twidth: 1.5em;\n\t\theight: 1.5em;\n\t}\n\tbutton.loading > kol-span-wc kol-icon {\n\t\tanimation: spin 5s infinite linear;\n\t}\n\tbutton.loading > kol-span-wc,\n\tbutton.help > kol-span-wc {\n\t\tdisplay: inline-block;\n\t\tpadding: 0;\n\t}","KOL-BADGE":":host {\n\t\tdisplay: inline-block;\n\t}\n\tkol-span-wc {\n\t\talign-items: center;\n\t\tborder-radius: 0.3125rem;\n\t\tdisplay: grid;\n\t\tgap: 0.5rem;\n\t\tline-height: 1.25rem;\n\t\tpadding: 0.25rem 0.75rem;\n\t}\n\tkol-span-wc span {\n\t\tdisplay: flex;\n\t\tgap: 0.25rem;\n\t}","KOL-HEADING":"h1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6 {\n\t\tcolor: inherit;\n\t\tfont-style: normal;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\th1,\n\th2,\n\th3 {\n\t\tfont-weight: 700;\n\t}\n\th1 {\n\t\tfont-size: 1.5rem;\n\t\tline-height: 3.25rem;\n\t}\n\th2 {\n\t\tfont-size: 1.25rem;\n\t\tline-height: 1.75rem;\n\t}\n\th3 {\n\t\tfont-size: 1.125rem;\n\t\tline-height: 1.5rem;\n\t}","KOL-ACCORDION":':host > div {\n\t\tfont-family: var(--font-family);\n\t\tfont-size: var(--font-size);\n\t\tpadding: 0 0.5rem 0 0;\n\t}\n\t:host > div > kol-heading-wc {\n\t\tbackground-color: var(--color-background);\n\t\tcolor: var(--color-gray-10);\n\t\tline-height: 1.75rem;\n\t\tpadding: 16px;\n\t}\n\t:host > div > kol-heading-wc:focus-within,\n\t:host > div > kol-heading-wc:hover {\n\t\tbox-shadow: 0px 0px 0px 2px var(--color-primary) inset;\n\t\toutline: none;\n\t}\n\t:host > div > kol-heading-wc button {\n\t\tcursor: pointer;\n\t\twidth: 100%;\n\t\tmargin: 0;\n\t\tdisplay: flex;\n\t\tflex-direction: row-reverse;\n\t\tjustify-content: flex-end;\n\t\tgap: 2em;\n\t\tborder: 0;\n\t\talign-items: center;\n\t\toverflow: hidden;\n\t\tfont-size: inherit;\n\t\tfont-weight: normal;\n\t\tline-height: 1.75em;\n\t\tbackground-color: transparent;\n\t\tpadding: 0;\n\t\toutline: none;\n\t}\n\t:host > div[part*="open"] > kol-heading-wc button {\n\t\tpadding-bottom: 0;\n\t}\n\t:host > div > kol-heading-wc button kol-icon::part(icon) {\n\t\tfont-weight: 900;\n\t\tfont-size: 26px;\n\t\tcolor: var(--color-black);\n\t}\n\t:host > div > kol-heading-wc button kol-icon::part(close)::before {\n\t\tfont-family: "Font Awesome 6 Free";\n\t\tfont-size: 14px;\n\t\tcontent: "\f077";\n\t}\n\t:host > div > kol-heading-wc button kol-icon::part(open)::before {\n\t\tfont-family: "Font Awesome 6 Free";\n\t\tfont-size: 14px;\n\t\tcontent: "\f078";\n\t}\n\t:host > div {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tdisplay: grid;\n\t}\n\t:host > div div[part="content"] {\n\t\ttransition: height 200ms;\n\t}\n\t:host > div div[part="header"],\n\t:host > div[part*="open"] div[part="content"] {\n\t\tmargin: 0;\n\t\tbackground-color: var(--color-white);\n\t}\n\t:host > div div[part="header"] {\n\t\tpadding: 0 1em;\n\t}\n\t:host > div[part*="open"] div[part="content"] {\n\t\tpadding: 1em;\n\t}\n\tbutton {\n\t\tfont-weight: inherit;\n\t\tfont-size: inherit;\n\t\tline-height: inherit;\n\t}\n\t:host > div {\n\t\tbackground: var(--color-white);\n\t}\n\t:host > div[part*="open"] {\n\t\tpadding-bottom: 1em;\n\t}',"KOL-ALERT":':host > div {background-color: white;// border-width: 2px;// border-style: solid;display: flex;overflow: unset;}:host > div.default {border-color: var(--color-gray-30);}:host > div.default > .icon {background-color: var(--color-gray-30);}:host > div.error {border-color: var(--color-warning);}:host > div.error > .icon {background-color: var(--color-warning);}:host > div.info {border-color: var(--color-primary);}:host > div.info > .icon {background-color: var(--color-primary);}:host > div.success {border-color: var(--color-success);}:host > div.success > .icon {background-color: var(--color-success);}:host > div.warning {border-color: var(--color-yellow-neutral);}:host > div.warning > .icon {background-color: var(--color-yellow-neutral);}:host > div.msg > .icon {color: white;padding: 0.5em;align-items: center;display: inline-flex;}:host > div.card {border-width: 2px;border-style: solid;}:host > div.card.default .heading .icon {background-color: var(--color-gray-30);}:host > div.card.error .heading .icon {background-color: var(--color-warning);}:host > div.card.info .heading .icon {background-color: var(--color-primary);}:host > div.card.success .heading .icon {background-color: var(--color-success);}:host > div.card.warning .heading .icon {background-color: var(--color-yellow-neutral);}:host > div.card .heading .icon {color: white;padding: 0.5em;align-items: center;display: inline-flex;}:host > div kol-heading-wc .icon {margin-right: 0.5em;}:host > div.card .heading .icon {border-radius: 0 0 0.25rem 0;}:host > div.msg > div {padding: 0.25em;}:host > div.msg > div > .heading {padding: 0.25em;display: inline-block;}:host > div .content {padding: 0.25em;}:host > div > div {display: grid;grid-template-columns: 1fr auto;}:host > div > div > .content {grid-row: 2;grid-column: 1;}:host > div > div > .close {grid-row: 1 / span 2;}:host > div.card > div > .heading {width: 100%;}.close > button {min-width: 44px;min-height: 44px;display: grid;gap: 0.25em;line-height: 1.5rem;font-family: var(--font-family);font-weight: 700;cursor: pointer;border-radius: 1.5em;border-style: solid;border-width: 2px;font-size: 1rem;align-items: center;padding: 8px 14px;justify-content: center;font-style: normal;text-align: center;text-transform: uppercase;width: inherit;transition-duration: 0.5s;transition-property: background-color, color, border-color;background-color: rgba(0, 0, 0, 0);border-color: rgba(0, 0, 0, 0);}.close > button.hide-label {padding: 8px;}.close > button.hide-label kol-icon {display: inline-block;width: 1.5em;height: 1.5em;}.close > button:active {box-shadow: none;outline: none;}.close kol-icon::part(icon)::before {content: "x";color: var(--color-primary);font-family: "Font Awesome 6 Free";}',"KOL-CARD":"/* https://www.figma.com/file/56JbmrssCRpjpfxoAFeHqT/Design-System-EPLF-(in-progress)?node-id=8225%3A5945 */\n\t:host > div {\n\t\tdisplay: grid;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tbackground-color: var(--color-background);\n\t\tgrid-template-rows: min-content 2fr min-content;\n\t\tbox-shadow: 0 0 0.25rem var(--color-grey);\n\t\tpadding: 8px;\n\t}\n\t:host kol-heading-wc {\n\t\tdisplay: inline-flex;\n\t\tfont-style: normal;\n\t\tfont-weight: 700;\n\t\tfont-size: 1.25rem;\n\t\tline-height: 1.75rem;\n\t}\n\t:host div.content {\n\t\tpadding-top: 1em;\n\t}\n\t:host div.footer {\n\t\tpadding-top: 1em;\n\t}","KOL-INDENTED-TEXT":":host > div {\n\t\tpadding: 0.25em 0.5em;\n\t\twidth: 100%;\n\t}\n\t:host > div {\n\t\tbackground: var(--color-white);\n\t\tborder: 0;\n\t\tbox-shadow: -4px 0px 0px var(--color-primary);\n\t}","KOL-DETAILS":":host details > kol-indented-text {\n\t\tmargin: 0.25em 0 0 0.5em;\n\t}","KOL-LINK-GROUP":"ul {\n\t\tlist-style: none;\n\t\tmargin: 0px;\n\t\tpadding: 0px;\n\t}\n\tnav.horizontal ul {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t}\n\tnav.horizontal li {\n\t\tmargin-left: 1.25rem;\n\t\tmargin-right: 0.25rem;\n\t}\n\tnav.horizontal li:first-child {\n\t\tmargin-left: 0;\n\t}\n\tnav.horizontal li:last-child {\n\t\tmargin-right: 0;\n\t}\n\tnav.vertical li {\n\t\tmargin-left: 1.75rem;\n\t\tmargin-right: 0.5rem;\n\t}\n\tli.list-none {\n\t\tlist-style-type: none !important;\n\t\tmargin-left: 0;\n\t}","KOL-PROGRESS":":host progress,\n\t:host span {\n\t\tdisplay: block;\n\t\theight: 0px;\n\t\toverflow: hidden;\n\t\twidth: 0px;\n\t}\n\tsvg line:first-child,\n\tsvg circle:first-child {\n\t\tfill: transparent;\n\t\tstroke: var(--color-gray-60);\n\t}\n\tsvg line:last-child,\n\tsvg circle:last-child {\n\t\tstroke: var(--color-primary);\n\t\tfill: transparent;\n\t}\n\tprogress {\n\t\tdisplay: none;\n\t}","KOL-SPIN":".spin {\n\t\tdisplay: inline-block;\n\t\theight: 1rem;\n\t\tposition: relative;\n\t\twidth: 3rem;\n\t}\n\t.spin span {\n\t\tanimation-timing-function: cubic-bezier(0, 1, 1, 0);\n\t\tborder: 0.1rem solid rgb(255, 255, 255);\n\t\tborder-radius: 50%;\n\t\theight: 0.8rem;\n\t\twidth: 0.8rem;\n\t\ttop: 0.1rem;\n\t\tposition: absolute;\n\t}\n\t.spin span:nth-child(1) {\n\t\tbackground-color: #fc0;\n\t\tz-index: 0;\n\t\tanimation: 2s ease 0s infinite normal none running spin1;\n\t\tleft: 0.1rem;\n\t}\n\t.spin span:nth-child(2) {\n\t\tbackground-color: #f00;\n\t\tz-index: 1;\n\t\tanimation: 2s ease 0s infinite normal none running spin2;\n\t\tleft: 0.1rem;\n\t}\n\t.spin span:nth-child(3) {\n\t\tbackground-color: #000;\n\t\tz-index: 1;\n\t\tanimation: 2s ease 0s infinite normal none running spin2;\n\t\tleft: 1.1rem;\n\t}\n\t.spin span:nth-child(4) {\n\t\tbackground-color: #666;\n\t\tz-index: 0;\n\t\tanimation: 2s ease 0s infinite normal none running spin3;\n\t\tleft: 2.1rem;\n\t}\n\t@keyframes spin1 {\n\t\t0% {\n\t\t\ttransform: scale(0);\n\t\t}\n\t\t100% {\n\t\t\ttransform: scale(1);\n\t\t}\n\t}\n\t@keyframes spin2 {\n\t\t0% {\n\t\t\ttransform: translate(0px, 0px);\n\t\t}\n\t\t100% {\n\t\t\ttransform: translate(1rem, 0px);\n\t\t}\n\t}\n\t@keyframes spin3 {\n\t\t0% {\n\t\t\ttransform: scale(1);\n\t\t}\n\t\t100% {\n\t\t\ttransform: scale(0);\n\t\t}\n\t}","KOL-TABLE":":host * {\n\t\thyphens: var(--kolibri-hyphens);\n\t\tfont-family: var(--kolibri-font-family);\n\t\tline-height: var(--kolibri-line-height);\n\t\tword-break: break-word;\n\t}\n\t:host > div {\n\t\toverflow-x: auto;\n\t\toverflow-y: hidden;\n\t}\n\ttable {\n\t\twidth: 100%;\n\t\tborder-spacing: 0;\n\t\tborder-collapse: collapse;\n\t}\n\tth,\n\ttd {\n\t\tpadding: 0.25em 0.5em;\n\t}\n\tth {\n\t\tbackground-color: var(--color-gray-70);\n\t}\n\tth > div {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr auto;\n\t\talign-items: center;\n\t\tgap: 0.25em;\n\t}\n\t:host > div:last-child {\n\t\tpadding: 0.5em;\n\t}\n\ttbody > tr:nth-child(even) {\n\t\tbackground-color: var(--color-gray-70);\n\t}\n\t:host > div:last-child,\n\t:host > div:last-child > div:last-child {\n\t\tdisplay: grid;\n\t\talign-items: center;\n\t\tjustify-items: center;\n\t\tgap: 0.5em;\n\t}\n\t@media (min-width: 1024px) {\n\t\t:host > div:last-child,\n\t\t:host > div:last-child > div:last-child {\n\t\t\tgrid-auto-flow: column;\n\t\t}\n\t\t:host > div:last-child kol-pagination {\n\t\t\tdisplay: flex;\n\t\t\tgap: 1rem;\n\t\t}\n\t}","KOL-TABS":'button:disabled {\n\t\topacity: 0.5;\n\t\tcursor: not-allowed;\n\t}\n\tkol-button-group > div {\n\t\tmargin: 0 1rem;\n\t}\n\tkol-button-group > div:first-child {\n\t\tmargin-left: 0;\n\t}\n\tkol-button-group > div:last-child {\n\t\tmargin-right: 0;\n\t}\n\tkol-button-group > div {\n\t\tmargin: 0;\n\t}\n\tbutton {\n\t\tbackground-color: transparent;\n\t\tborder: 0;\n\t\tfont-style: normal;\n\t\tfont-weight: normal;\n\t\tfont-size: 18px;\n\t\tline-height: 22px;\n\t\tcolor: var(--color-primary);\n\t\tpadding: 0.3em 1em;\n\t\tbox-shadow: inset 0px -3px 0 0 var(--color-gray-70);\n\t}\n\tbutton:enabled {\n\t\tbox-shadow: inset 0px -3px 0 0 var(--color-primary-10);\n\t}\n\tbutton:hover {\n\t\tcolor: var(--color-midnight);\n\t}\n\tbutton.primary {\n\t\ttext-underline-offset: 5px;\n\t\ttext-decoration-thickness: 0.25em;\n\t\tfont-weight: bold;\n\t\tcolor: var(--color-gray-10);\n\t\tbox-shadow: inset 0px -3px 0 0 var(--color-gray-70),\n\t\t\tinset 0px -6px 0 0 var(--color-primary-10);\n\t}\n\tbutton:hover,\n\tbutton:focus {\n\t\tcolor: var(--color-gray-10);\n\t\tbox-shadow: inset 0px -6px 0 0 var(--color-primary-10);\n\t\toutline: none;\n\t}\n\tbutton:not(.primary) {\n\t\tcursor: pointer;\n\t}\n\t:host > div > div {\n\t\tpadding: 0.25em 0;\n\t}\n\t.close-button {\n\t\tdisplay: none;\n\t\tfont-size: 25%;\n\t\theight: fit-content;\n\t\twidth: 0;\n\t}\n\t.close-button button {\n\t\twidth: 1rem;\n\t\tposition: relative;\n\t\theight: 1rem;\n\t\tleft: -4.25em;\n\t\ttop: 0.25em;\n\t}\n\tdiv[role="tabpanel"] {\n\t\theight: 100%;\n\t}\n\tdiv.grid {\n\t\theight: 100%;\n\t}\n\tdiv.grid {\n\t\theight: 100%;\n\t}\n\t:host > .tabs-align-right {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr auto;\n\t}\n\t:host > .tabs-align-right kol-button-group-wc {\n\t\tdisplay: grid;\n\t\torder: 2;\n\t}\n\t:host > .tabs-align-left {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: auto 1fr;\n\t}\n\t:host > .tabs-align-left kol-button-group-wc {\n\t\tdisplay: grid;\n\t\torder: 0;\n\t}\n\t:host > .tabs-align-bottom {\n\t\tdisplay: grid;\n\t\tgrid-template-rows: 1fr auto;\n\t}\n\t:host > .tabs-align-bottom kol-button-group-wc {\n\t\torder: 2;\n\t}\n\t:host > .tabs-align-bottom kol-button-group-wc > div {\n\t\tdisplay: flex;\n\t}\n\t:host > .tabs-align-bottom > kol-button-group-wc > div > div:first-child {\n\t\tmargin: 0px 1em 0px 0px;\n\t}\n\t:host > .tabs-align-bottom > kol-button-group-wc > div > div {\n\t\tmargin: 0px 1em;\n\t}\n\t:host > .tabs-align-top {\n\t\tdisplay: grid;\n\t\tgrid-template-rows: auto 1fr;\n\t}\n\t:host > .tabs-align-top kol-button-group-wc {\n\t\torder: 0;\n\t}\n\t:host > .tabs-align-top kol-button-group-wc > div {\n\t\tdisplay: flex;\n\t}\n\t:host > .tabs-align-top > kol-button-group-wc > div > div:first-child {\n\t\tmargin: 0px 1em 0px 0px;\n\t}\n\t:host > .tabs-align-top > kol-button-group-wc > div > div {\n\t\tmargin: 0px 1em;\n\t}\n\t:host > div {\n\t\tdisplay: grid;\n\t}\n\t:host > div.tabs-align-left {\n\t\tgrid-template-columns: auto 1fr;\n\t}\n\t:host > div.tabs-align-right {\n\t\tgrid-template-columns: 1fr auto;\n\t}\n\t:host > .tabs-align-left kol-button-group-wc,\n\t:host > .tabs-align-top kol-button-group-wc {\n\t\torder: 0;\n\t}\n\t:host > .tabs-align-bottom kol-button-group-wc,\n\t:host > .tabs-align-right kol-button-group-wc {\n\t\torder: 1;\n\t}\n\t:host > div.tabs-align-left kol-button-group-wc > div,\n\t:host > div.tabs-align-left kol-button-group-wc > div > div,\n\t:host > div.tabs-align-right kol-button-group-wc > div,\n\t:host > div.tabs-align-right kol-button-group-wc > div > div {\n\t\tdisplay: grid;\n\t}\n\t:host > div.tabs-align-left kol-button-group-wc > div > div kol-button-wc,\n\t:host > div.tabs-align-right kol-button-group-wc > div > div kol-button-wc {\n\t\twidth: 100%;\n\t}\n\t:host > div.tabs-align-bottom kol-button-group-wc div,\n\t:host > div.tabs-align-top kol-button-group-wc div {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t}',"KOL-PAGINATION":":host {\n\t\tdisplay: grid;\n\t\tgap: 1rem;\n\t}\n\t:host .navigation-list {\n\t\tdisplay: inline-flex;\n\t\tflex-wrap: wrap;\n\t\talign-items: center;\n\t\tgap: 0.5em;\n\t}\n\t:host kol-button-wc.selected button {\n\t\tmin-width: 44px;\n\t\tmin-height: 44px;\n\t\tdisplay: grid;\n\t\tgap: 0.25em;\n\t\tline-height: 1.5rem;\n\t\tfont-weight: 700;\n\t\tcursor: default;\n\t\tfont-size: 1rem;\n\t\talign-items: center;\n\t\tpadding: 0px 7px;\n\t\tjustify-content: center;\n\t\tfont-style: normal;\n\t\ttext-align: center;\n\t\toutline: none;\n\t\tcolor: var(--color-white);\n\t\tborder: unset;\n\t\tbackground-color: var(--color-primary);\n\t}\n\t:host kol-button-wc.selected button:focus,\n\t:host kol-button-wc.selected button:hover {\n\t\tbackground-color: var(--color-primary-20);\n\t}","KOL-LINK":"a,\n\tbutton {\n\t\tbackground-color: transparent;\n\t\tborder: 0;\n\t\tcursor: pointer;\n\t\tdisplay: inline-block;\n\t}\n\tkol-link-wc,\n\tkol-link-button-wc {\n\t\tdisplay: inline-block;\n\t}\n\ta,\n\tbutton {\n\t\tcolor: var(--color-primary);\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\tdisplay: inline-flex;\n\t\tline-height: 1.5em;\n\t\ttext-decoration-line: none !important;\n\t\toutline: none !important;\n\t}\n\ta:focus-within,\n\ta:hover,\n\tbutton:focus-within,\n\tbutton:hover {\n\t\tbox-shadow: inset 0 -1px 0 0 var(--color-primary);\n\t}\n\tkol-icon {\n\t\tpadding: 0 0.25em;\n\t\tdisplay: inline-block;\n\t}\n\t.hidden {\n\t\tdisplay: none;\n\t\tvisibility: hidden;\n\t}\n\t.skip {\n\t\tleft: -99999px;\n\t\toverflow: hidden;\n\t\tposition: absolute;\n\t\tz-index: 9999999;\n\t\tline-height: 1em;\n\t}\n\t.skip:focus {\n\t\tbackground: white;\n\t\tleft: unset;\n\t\tposition: unset;\n\t}","KOL-INPUT-TEXT":'kol-input {\n\t\tdisplay: grid;\n\t}\n\tkol-input label {\n\t\torder: 1;\n\t\tpadding: 0.125rem 0 0.4rem;\n\t\tvertical-align: text-top;\n\t\tline-height: 1.2;\n\t}\n\tkol-input div.input {\n\t\tbox-sizing: border-box;\n\t\torder: 2;\n\t\tbackground-color: white;\n\t\tborder-radius: 0.3125rem;\n\t}\n\tkol-input kol-alert.error {\n\t\tmargin-bottom: 0.4em;\n\t\tmargin-top: 0.2em;\n\t\torder: 3;\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tfont-family: var(--font-family);\n\t\tbackground-color: transparent;\n\t\tbox-sizing: border-box;\n\t\tfont-size: 1rem;\n\t\tdisplay: inline-flex;\n\t\tborder-color: var(--color-grey);\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\toverflow: hidden;\n\t\twidth: 100%;\n\t\tline-height: normal;\n\t\tpadding: 0.4rem 8px;\n\t}\n\tinput:hover,\n\tselect:hover,\n\ttextarea:hover {\n\t\tborder-color: #2d6f9e;\n\t\tbox-shadow: 0 0 0 1px #2d6f9e inset;\n\t}\n\tinput:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\tborder-color: var(--color-primary-20);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-primary-20);\n\t\toutline: none;\n\t}\n\tinput,\n\tselect:not([multiple]) {\n\t\theight: 2.75em;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\tinput:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tinput:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {\n\t\tcursor: not-allowed;\n\t\tborder-color: var(--border-default);\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\t.icons {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\theight: 0;\n\t}\n\t.icons > * {\n\t\tmargin: 0.75em;\n\t}\n\t.icon-left input,\n\t.icon-left select {\n\t\tpadding-left: 2em;\n\t}\n\t.icon-right input,\n\t.icon-right select {\n\t\tpadding-right: 2em;\n\t}\n\tkol-input.error input:focus,\n\tkol-input.error select:focus,\n\tkol-input.error textarea:focus {\n\t\tborder-color: var(--color-warning);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-warning);\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-warning);\n\t}\n\tkol-button-wc {\n\t\tposition: relative;\n\t\tfloat: right;\n\t\tz-index: 1000;\n\t\tmargin-top: -2.7em;\n\t}\n\tkol-button-wc button {\n\t\tborder: 0;\n\t\theight: 2.7em;\n\t\tbox-sizing: border-box;\n\t\tbackground-color: transparent;\n\t\tcursor: pointer;\n\t}\n\tkol-button-wc button:focus,\n\tkol-button-wc button:hover {\n\t\tbackground-color: var(--color-primary);\n\t\tcolor: var(--color-white);\n\t}\n\t.icon-right kol-button-wc {\n\t\tmargin-right: 2.5em;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\tselect[multiple],\n\ttextarea {\n\t\toverflow: auto;\n\t}\n\ttextarea {\n\t\tdisplay: block;\n\t}\n\tselect option {\n\t\tmargin: 1px 0;\n\t\tpadding: 0.5em;\n\t\tborder-radius: 0.25em;\n\t\tcursor: pointer;\n\t}\n\tselect option:disabled {\n\t\tcursor: not-allowed;\n\t}\n\toption:active:not(:disabled),\n\toption:checked:not(:disabled),\n\toption:focus:not(:disabled),\n\toption:hover:not(:disabled) {\n\t\tbackground: var(--color-primary);\n\t\tcolor: white;\n\t}',"KOL-INPUT-CHECKBOX":'/* INPUT */\n\tkol-input {\n\t\tdisplay: grid;\n\t\talign-items: center;\n\t\tjustify-items: left;\n\t\twidth: 100%;\n\t\tmin-height: 44px;\n\t}\n\tkol-input.default {\n\t\tgrid-template-columns: 2rem auto;\n\t}\n\tkol-input.switch {\n\t\tgrid-template-columns: 4rem auto;\n\t}\n\tkol-input > div.input {\n\t\tdisplay: inline-flex;\n\t\torder: 1;\n\t}\n\tkol-input > div.input input {\n\t\tmargin: 0px;\n\t}\n\tkol-input > label {\n\t\tcursor: pointer;\n\t\torder: 2;\n\t}\n\tkol-input > kol-alert.error {\n\t\torder: 3;\n\t\tpadding-top: 0.25em;\n\t\tmargin-bottom: 0.4em;\n\t\tmargin-top: 0.2em;\n\t\tgrid-column: span 2 / auto;\n\t}\n\tkol-input.error input:focus,\n\tkol-input.error select:focus,\n\tkol-input.error textarea:focus {\n\t\tborder-color: var(--color-warning) !important;\n\t\tbox-shadow: 0 0 0 1px var(--color-warning) inset;\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-warning);\n\t}\n\tinput {\n\t\tcursor: pointer;\n\t\torder: 1;\n\t\twidth: 100%;\n\t\tborder-color: var(--color-gray-30);\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\tline-height: 24px;\n\t\tfont-size: 1rem;\n\t}\n\tinput:focus,\n\tinput:hover {\n\t\tborder-color: #2d6f9e;\n\t\tbox-shadow: 0 0 0 1px #2d6f9e inset;\n\t}\n\tinput:focus:hover {\n\t\tbox-shadow: none;\n\t}\n\tinput:active {\n\t\tbox-shadow: none;\n\t}\n\tkol-alert {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t} /* CHECKBOX */\n\tkol-input label span {\n\t\tmargin-top: 0.125rem;\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\tkol-input input[type="checkbox"] {\n\t\tappearance: none;\n\t\tbackground-color: white;\n\t\tcursor: pointer;\n\t\ttransition: 0.5s;\n\t}\n\tkol-input input[type="checkbox"].kol-disabled:before {\n\t\tcursor: not-allowed;\n\t}\n\tkol-input input[type="checkbox"]:before {\n\t\tcontent: "";\n\t\tcursor: pointer;\n\t}\n\tkol-input input[type="checkbox"]:checked {\n\t\tbackground-color: var(--color-primary-20);\n\t\tborder-color: var(--color-primary-20);\n\t}\n\tkol-input.default input[type="checkbox"] {\n\t\twidth: 1rem;\n\t\theight: 1rem;\n\t}\n\tkol-input.default input[type="checkbox"]:before {\n\t\tbackground-color: transparent;\n\t\tdisplay: block;\n\t\theight: calc(2 * var(--spacing));\n\t\tposition: relative;\n\t\twidth: calc(2 * var(--spacing));\n\t}\n\tkol-input.default input[type="checkbox"]:checked:before {\n\t\tborder-right-width: 1px;\n\t\tborder-bottom-width: 1px;\n\t\tleft: calc(1.2 * var(--spacing) - 2px);\n\t\ttop: calc(2.2 * var(--spacing) - 2px);\n\t\ttransform: rotate(40deg) translate(-50%, -50%);\n\t\tbackground-color: transparent;\n\t\tborder-width: 0px 3px 3px 0px;\n\t\tborder-color: white;\n\t\tborder-radius: 1px;\n\t\tborder-style: solid;\n\t\theight: calc(2 * var(--spacing));\n\t\twidth: calc(1 * var(--spacing));\n\t}\n\tkol-input.default input[type="checkbox"]:indeterminate {\n\t\t--tw-bg-opacity: 1;\n\t\tbackground-color: white;\n\t}\n\tkol-input.default input[type="checkbox"]:indeterminate:before {\n\t\tbackground-color: var(--color-gray-30);\n\t\theight: 0.2rem;\n\t\ttop: 0.35rem;\n\t\tleft: 0.15rem;\n\t\twidth: calc(2.5 * var(--spacing));\n\t}\n\tkol-input.switch input[type="checkbox"] {\n\t\tmin-width: 3.5em;\n\t\twidth: 3.5em;\n\t\tbackground-color: var(--color-gray-30);\n\t\tborder-width: 0;\n\t\theight: 1.5em;\n\t\tborder-radius: 1.25em;\n\t\tdisplay: inline-block;\n\t\tposition: relative;\n\t}\n\tkol-input.switch input[type="checkbox"]:before {\n\t\t-webkit-transition: 0.5s;\n\t\t-moz-transition: 0.5s;\n\t\t-ms-transition: 0.5s;\n\t\ttransition: 0.5;\n\t\twidth: 1.25em;\n\t\theight: 1.25em;\n\t\tleft: calc(0.25em - 2px);\n\t\ttop: calc(0.25em - 2px);\n\t\tborder-radius: 1.25em;\n\t\tbackground-color: white;\n\t\tposition: absolute;\n\t}\n\tkol-input.switch input[type="checkbox"]:checked {\n\t\tbackground-color: var(--color-primary-20);\n\t}\n\tkol-input.switch input[type="checkbox"]:checked:before {\n\t\t-webkit-transform: translateX(2em);\n\t\t-moz-transform: translateX(2em);\n\t\t-ms-transform: translateX(2em);\n\t\ttransform: translateX(2em);\n\t\t--tw-bg-opacity: 1;\n\t}\n\tkol-input.switch input[type="checkbox"]:indeterminate {\n\t\t--tw-bg-opacity: 1;\n\t}\n\tkol-input.switch input[type="checkbox"]:indeterminate:before {\n\t\t-webkit-transform: translateX(1em);\n\t\t-moz-transform: translateX(1em);\n\t\t-ms-transform: translateX(1em);\n\t\ttransform: translateX(1em);\n\t}\n\t.switch {\n\t\t& .icon {\n\t\t\twidth: 1.25em;\n\t\t\theight: 1.25em;\n\t\t\tleft: 2px;\n\t\t}\n\t\t&:has(input:checked) .icon {\n\t\t\ttransform: translate(2em, -50%);\n\t\t}\n\t\t&:has(input:indeterminate) .icon {\n\t\t\ttransform: translate(1em, -50%);\n\t\t}\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}',"KOL-INPUT-RADIO":'/* INPUT */\n\tlabel {\n\t\tcursor: pointer;\n\t\tdisplay: grid;\n\t\tline-height: 20px;\n\t\tgap: 8px;\n\t\twidth: 100%;\n\t}\n\tinput {\n\t\tcursor: pointer;\n\t\twidth: 100%;\n\t\tborder-color: var(--color-grey-20);\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\tborder-radius: 5px; /* padding: 10px 14px; */\n\t\tline-height: 24px;\n\t\tfont-size: 16px;\n\t}\n\t:host fieldset div input[type="radio"]:hover {\n\t\tborder-color: var(--color-midnight);\n\t\tbox-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);\n\t}\n\t:host fieldset div input[type="radio"]:focus:hover {\n\t\tbox-shadow: none;\n\t}\n\t:host fieldset div input[type="radio"]:active {\n\t\tbox-shadow: none;\n\t}\n\tkol-alert {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tmargin-bottom: 0.4em;\n\t}\n\t.required legend > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t} /* RADIO */\n\t:host fieldset {\n\t\tborder: 0px;\n\t\tmargin: 0px;\n\t\tpadding: 0px;\n\t\tdisplay: grid;\n\t\tgap: 0.25em;\n\t}\n\t:host fieldset div {\n\t\tcursor: pointer;\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\talign-items: center;\n\t\tposition: relative;\n\t\tmin-height: 44px;\n\t}\n\t:host fieldset div label {\n\t\tcursor: pointer;\n\t\tdisplay: flex;\n\t\tpadding-left: 0.25em;\n\t\twidth: 100%;\n\t}\n\t:host fieldset div label span {\n\t\tmargin-top: 0.125em;\n\t}\n\t:host fieldset div input[type="radio"] {\n\t\tappearance: none;\n\t\ttransition: 0.5s;\n\t\tborder-radius: 100%;\n\t\theight: 1rem;\n\t\tmin-width: 1rem;\n\t\twidth: 1rem;\n\t}\n\t:host fieldset div input[type="radio"]:before {\n\t\tcontent: "";\n\t\tcursor: pointer;\n\t\tleft: calc(1 * var(--spacing) - 1px);\n\t\ttop: calc(1 * var(--spacing) - 1px);\n\t\tposition: relative;\n\t\tborder-radius: 100%;\n\t\tdisplay: block;\n\t\theight: calc(2 * var(--spacing));\n\t\twidth: calc(2 * var(--spacing));\n\t}\n\t:host fieldset div input[type="radio"]:checked:before {\n\t\tbackground-color: var(--color-primary-20);\n\t}\n\t:host fieldset div input[type="radio"]:disabled {\n\t\tcursor: not-allowed;\n\t\tborder-color: var(--border-default);\n\t\tbackground-color: var(--background-light-grey);\n\t}\n\t:host fieldset #error {\n\t\torder: 3;\n\t}\n\t:host fieldset legend {\n\t\torder: 1;\n\t\tdisplay: contents;\n\t}\n\t:host fieldset kol-input {\n\t\torder: 2;\n\t}\n\t:host fieldset kol-alert#error {\n\t\tpadding-left: 0.5em;\n\t\tcolor: var(--color-warning);\n\t}\n\tfieldset.error input:focus,\n\tfieldset.error select:focus,\n\tfieldset.error textarea:focus {\n\t\tborder-color: var(--color-warning) !important;\n\t\tbox-shadow: 0 0 0 1px var(--color-warning) inset;\n\t}\n\t:host fieldset.error kol-alert.error {\n\t\tmargin-left: -0.25em;\n\t\tcolor: var(--color-warning);\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\t:host fieldset.horizontal {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t}\n\t:host fieldset.horizontal legend {\n\t\tdisplay: inline-block;\n\t\tmargin-bottom: 0.25em;\n\t}',"KOL-SELECT":'kol-input {\n\t\tdisplay: grid;\n\t}\n\tkol-input label {\n\t\torder: 1;\n\t\tpadding: 0.125rem 0 0.4rem;\n\t\tvertical-align: text-top;\n\t\tline-height: 1.2;\n\t}\n\tkol-input div.input {\n\t\tbox-sizing: border-box;\n\t\torder: 2;\n\t\tbackground-color: white;\n\t\tborder-radius: 0.3125rem;\n\t}\n\tkol-input kol-alert.error {\n\t\tmargin-bottom: 0.4em;\n\t\tmargin-top: 0.2em;\n\t\torder: 3;\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tfont-family: var(--font-family);\n\t\tbackground-color: transparent;\n\t\tbox-sizing: border-box;\n\t\tfont-size: 1rem;\n\t\tdisplay: inline-flex;\n\t\tborder-color: var(--color-grey);\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\toverflow: hidden;\n\t\twidth: 100%;\n\t\tline-height: normal;\n\t\tpadding: 0.4rem 8px;\n\t}\n\tinput:hover,\n\tselect:hover,\n\ttextarea:hover {\n\t\tborder-color: #2d6f9e;\n\t\tbox-shadow: 0 0 0 1px #2d6f9e inset;\n\t}\n\tinput:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\tborder-color: var(--color-primary-20);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-primary-20);\n\t\toutline: none;\n\t}\n\tinput,\n\tselect:not([multiple]) {\n\t\theight: 2.75em;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\tinput:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tinput:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {\n\t\tcursor: not-allowed;\n\t\tborder-color: var(--border-default);\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\t.icons {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\theight: 0;\n\t}\n\t.icons > * {\n\t\tmargin: 0.75em;\n\t}\n\t.icon-left input,\n\t.icon-left select {\n\t\tpadding-left: 2em;\n\t}\n\t.icon-right input,\n\t.icon-right select {\n\t\tpadding-right: 2em;\n\t}\n\tkol-input.error input:focus,\n\tkol-input.error select:focus,\n\tkol-input.error textarea:focus {\n\t\tborder-color: var(--color-warning);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-warning);\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-warning);\n\t}\n\tkol-button-wc {\n\t\tposition: relative;\n\t\tfloat: right;\n\t\tz-index: 1000;\n\t\tmargin-top: -2.7em;\n\t}\n\tkol-button-wc button {\n\t\tborder: 0;\n\t\theight: 2.7em;\n\t\tbox-sizing: border-box;\n\t\tbackground-color: transparent;\n\t\tcursor: pointer;\n\t}\n\tkol-button-wc button:focus,\n\tkol-button-wc button:hover {\n\t\tbackground-color: var(--color-primary);\n\t\tcolor: var(--color-white);\n\t}\n\t.icon-right kol-button-wc {\n\t\tmargin-right: 2.5em;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\tselect[multiple],\n\ttextarea {\n\t\toverflow: auto;\n\t}\n\ttextarea {\n\t\tdisplay: block;\n\t}\n\tselect option {\n\t\tmargin: 1px 0;\n\t\tpadding: 0.5em;\n\t\tborder-radius: 0.25em;\n\t\tcursor: pointer;\n\t}\n\tselect option:disabled {\n\t\tcursor: not-allowed;\n\t}\n\toption:active:not(:disabled),\n\toption:checked:not(:disabled),\n\toption:focus:not(:disabled),\n\toption:hover:not(:disabled) {\n\t\tbackground: var(--color-primary);\n\t\tcolor: white;\n\t}',"KOL-TEXTAREA":'kol-input {\n\t\tdisplay: grid;\n\t}\n\tkol-input label {\n\t\torder: 1;\n\t\tpadding: 0.125rem 0 0.4rem;\n\t\tvertical-align: text-top;\n\t\tline-height: 1.2;\n\t}\n\tkol-input div.input {\n\t\tbox-sizing: border-box;\n\t\torder: 2;\n\t\tbackground-color: white;\n\t\tborder-radius: 0.3125rem;\n\t}\n\tkol-input .counter {\n\t\torder: 3;\n\t}\n\tkol-input kol-alert.error {\n\t\tmargin-bottom: 0.4em;\n\t\tmargin-top: 0.2em;\n\t\torder: 4;\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tfont-family: var(--font-family);\n\t\tbackground-color: transparent;\n\t\tbox-sizing: border-box;\n\t\tfont-size: 1rem;\n\t\tdisplay: inline-flex;\n\t\tborder-color: var(--color-grey);\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\toverflow: hidden;\n\t\twidth: 100%;\n\t\tline-height: normal;\n\t\tpadding: 0.4rem 8px;\n\t}\n\tinput:hover,\n\tselect:hover,\n\ttextarea:hover {\n\t\tborder-color: #2d6f9e;\n\t\tbox-shadow: 0 0 0 1px #2d6f9e inset;\n\t}\n\tinput:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\tborder-color: var(--color-primary-20);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-primary-20);\n\t\toutline: none;\n\t}\n\tinput,\n\tselect:not([multiple]) {\n\t\theight: 2.75em;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\tinput:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tinput:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {\n\t\tcursor: not-allowed;\n\t\tborder-color: var(--border-default);\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\t.icons {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\theight: 0;\n\t}\n\t.icons > * {\n\t\tmargin: 0.75em;\n\t}\n\t.icon-left input,\n\t.icon-left select {\n\t\tpadding-left: 2em;\n\t}\n\t.icon-right input,\n\t.icon-right select {\n\t\tpadding-right: 2em;\n\t}\n\tkol-input.error input:focus,\n\tkol-input.error select:focus,\n\tkol-input.error textarea:focus {\n\t\tborder-color: var(--color-warning);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-warning);\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-warning);\n\t}\n\tkol-button-wc {\n\t\tposition: relative;\n\t\tfloat: right;\n\t\tz-index: 1000;\n\t\tmargin-top: -2.7em;\n\t}\n\tkol-button-wc button {\n\t\tborder: 0;\n\t\theight: 2.7em;\n\t\tbox-sizing: border-box;\n\t\tbackground-color: transparent;\n\t\tcursor: pointer;\n\t}\n\tkol-button-wc button:focus,\n\tkol-button-wc button:hover {\n\t\tbackground-color: var(--color-primary);\n\t\tcolor: var(--color-white);\n\t}\n\t.icon-right kol-button-wc {\n\t\tmargin-right: 2.5em;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\tselect[multiple],\n\ttextarea {\n\t\toverflow: auto;\n\t}\n\ttextarea {\n\t\tdisplay: block;\n\t}\n\tselect option {\n\t\tmargin: 1px 0;\n\t\tpadding: 0.5em;\n\t\tborder-radius: 0.25em;\n\t\tcursor: pointer;\n\t}\n\tselect option:disabled {\n\t\tcursor: not-allowed;\n\t}\n\toption:active:not(:disabled),\n\toption:checked:not(:disabled),\n\toption:focus:not(:disabled),\n\toption:hover:not(:disabled) {\n\t\tbackground: var(--color-primary);\n\t\tcolor: white;\n\t}',"KOL-INPUT-PASSWORD":'kol-input {\n\t\tdisplay: grid;\n\t}\n\tkol-input label {\n\t\torder: 1;\n\t\tpadding: 0.125rem 0 0.4rem;\n\t\tvertical-align: text-top;\n\t\tline-height: 1.2;\n\t}\n\tkol-input div.input {\n\t\tbox-sizing: border-box;\n\t\torder: 2;\n\t\tbackground-color: white;\n\t\tborder-radius: 0.3125rem;\n\t}\n\tkol-input kol-alert.error {\n\t\tmargin-bottom: 0.4em;\n\t\tmargin-top: 0.2em;\n\t\torder: 3;\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tfont-family: var(--font-family);\n\t\tbackground-color: transparent;\n\t\tbox-sizing: border-box;\n\t\tfont-size: 1rem;\n\t\tdisplay: inline-flex;\n\t\tborder-color: var(--color-grey);\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\toverflow: hidden;\n\t\twidth: 100%;\n\t\tline-height: normal;\n\t\tpadding: 0.4rem 8px;\n\t}\n\tinput:hover,\n\tselect:hover,\n\ttextarea:hover {\n\t\tborder-color: #2d6f9e;\n\t\tbox-shadow: 0 0 0 1px #2d6f9e inset;\n\t}\n\tinput:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\tborder-color: var(--color-primary-20);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-primary-20);\n\t\toutline: none;\n\t}\n\tinput,\n\tselect:not([multiple]) {\n\t\theight: 2.75em;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\tinput:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tinput:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {\n\t\tcursor: not-allowed;\n\t\tborder-color: var(--border-default);\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\t.icons {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\theight: 0;\n\t}\n\t.icons > * {\n\t\tmargin: 0.75em;\n\t}\n\t.icon-left input,\n\t.icon-left select {\n\t\tpadding-left: 2em;\n\t}\n\t.icon-right input,\n\t.icon-right select {\n\t\tpadding-right: 2em;\n\t}\n\tkol-input.error input:focus,\n\tkol-input.error select:focus,\n\tkol-input.error textarea:focus {\n\t\tborder-color: var(--color-warning);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-warning);\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-warning);\n\t}\n\tkol-button-wc {\n\t\tposition: relative;\n\t\tfloat: right;\n\t\tz-index: 1000;\n\t\tmargin-top: -2.7em;\n\t}\n\tkol-button-wc button {\n\t\tborder: 0;\n\t\theight: 2.7em;\n\t\tbox-sizing: border-box;\n\t\tbackground-color: transparent;\n\t\tcursor: pointer;\n\t}\n\tkol-button-wc button:focus,\n\tkol-button-wc button:hover {\n\t\tbackground-color: var(--color-primary);\n\t\tcolor: var(--color-white);\n\t}\n\t.icon-right kol-button-wc {\n\t\tmargin-right: 2.5em;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\tselect[multiple],\n\ttextarea {\n\t\toverflow: auto;\n\t}\n\ttextarea {\n\t\tdisplay: block;\n\t}\n\tselect option {\n\t\tmargin: 1px 0;\n\t\tpadding: 0.5em;\n\t\tborder-radius: 0.25em;\n\t\tcursor: pointer;\n\t}\n\tselect option:disabled {\n\t\tcursor: not-allowed;\n\t}\n\toption:active:not(:disabled),\n\toption:checked:not(:disabled),\n\toption:focus:not(:disabled),\n\toption:hover:not(:disabled) {\n\t\tbackground: var(--color-primary);\n\t\tcolor: white;\n\t}',"KOL-INPUT-NUMBER":'kol-input {\n\t\tdisplay: grid;\n\t}\n\tkol-input label {\n\t\torder: 1;\n\t\tpadding: 0.125rem 0 0.4rem;\n\t\tvertical-align: text-top;\n\t\tline-height: 1.2;\n\t}\n\tkol-input div.input {\n\t\tbox-sizing: border-box;\n\t\torder: 2;\n\t\tbackground-color: white;\n\t\tborder-radius: 0.3125rem;\n\t}\n\tkol-input kol-alert.error {\n\t\tmargin-bottom: 0.4em;\n\t\tmargin-top: 0.2em;\n\t\torder: 3;\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tfont-family: var(--font-family);\n\t\tbackground-color: transparent;\n\t\tbox-sizing: border-box;\n\t\tfont-size: 1rem;\n\t\tdisplay: inline-flex;\n\t\tborder-color: var(--color-grey);\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\toverflow: hidden;\n\t\twidth: 100%;\n\t\tline-height: normal;\n\t\tpadding: 0.4rem 8px;\n\t}\n\tinput:hover,\n\tselect:hover,\n\ttextarea:hover {\n\t\tborder-color: #2d6f9e;\n\t\tbox-shadow: 0 0 0 1px #2d6f9e inset;\n\t}\n\tinput:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\tborder-color: var(--color-primary-20);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-primary-20);\n\t\toutline: none;\n\t}\n\tinput,\n\tselect:not([multiple]) {\n\t\theight: 2.75em;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\tinput:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tinput:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {\n\t\tcursor: not-allowed;\n\t\tborder-color: var(--border-default);\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\t.icons {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\theight: 0;\n\t}\n\t.icons > * {\n\t\tmargin: 0.75em;\n\t}\n\t.icon-left input,\n\t.icon-left select {\n\t\tpadding-left: 2em;\n\t}\n\t.icon-right input,\n\t.icon-right select {\n\t\tpadding-right: 2em;\n\t}\n\tkol-input.error input:focus,\n\tkol-input.error select:focus,\n\tkol-input.error textarea:focus {\n\t\tborder-color: var(--color-warning);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-warning);\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-warning);\n\t}\n\tkol-button-wc {\n\t\tposition: relative;\n\t\tfloat: right;\n\t\tz-index: 1000;\n\t\tmargin-top: -2.7em;\n\t}\n\tkol-button-wc button {\n\t\tborder: 0;\n\t\theight: 2.7em;\n\t\tbox-sizing: border-box;\n\t\tbackground-color: transparent;\n\t\tcursor: pointer;\n\t}\n\tkol-button-wc button:focus,\n\tkol-button-wc button:hover {\n\t\tbackground-color: var(--color-primary);\n\t\tcolor: var(--color-white);\n\t}\n\t.icon-right kol-button-wc {\n\t\tmargin-right: 2.5em;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\tselect[multiple],\n\ttextarea {\n\t\toverflow: auto;\n\t}\n\ttextarea {\n\t\tdisplay: block;\n\t}\n\tselect option {\n\t\tmargin: 1px 0;\n\t\tpadding: 0.5em;\n\t\tborder-radius: 0.25em;\n\t\tcursor: pointer;\n\t}\n\tselect option:disabled {\n\t\tcursor: not-allowed;\n\t}\n\toption:active:not(:disabled),\n\toption:checked:not(:disabled),\n\toption:focus:not(:disabled),\n\toption:hover:not(:disabled) {\n\t\tbackground: var(--color-primary);\n\t\tcolor: white;\n\t}',"KOL-INPUT-DATE":'kol-input {\n\t\tdisplay: grid;\n\t}\n\tkol-input label {\n\t\torder: 1;\n\t\tpadding: 0.125rem 0 0.4rem;\n\t\tvertical-align: text-top;\n\t\tline-height: 1.2;\n\t}\n\tkol-input div.input {\n\t\tbox-sizing: border-box;\n\t\torder: 2;\n\t\tbackground-color: white;\n\t\tborder-radius: 0.3125rem;\n\t}\n\tkol-input kol-alert.error {\n\t\tmargin-bottom: 0.4em;\n\t\tmargin-top: 0.2em;\n\t\torder: 3;\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tfont-family: var(--font-family);\n\t\tbackground-color: transparent;\n\t\tbox-sizing: border-box;\n\t\tfont-size: 1rem;\n\t\tdisplay: inline-flex;\n\t\tborder-color: var(--color-grey);\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\toverflow: hidden;\n\t\twidth: 100%;\n\t\tline-height: normal;\n\t\tpadding: 0.4rem 8px;\n\t}\n\tinput:hover,\n\tselect:hover,\n\ttextarea:hover {\n\t\tborder-color: #2d6f9e;\n\t\tbox-shadow: 0 0 0 1px #2d6f9e inset;\n\t}\n\tinput:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\tborder-color: var(--color-primary-20);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-primary-20);\n\t\toutline: none;\n\t}\n\tinput,\n\tselect:not([multiple]) {\n\t\theight: 2.75em;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\tinput:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tinput:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {\n\t\tcursor: not-allowed;\n\t\tborder-color: var(--border-default);\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\t.icons {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\theight: 0;\n\t}\n\t.icons > * {\n\t\tmargin: 0.75em;\n\t}\n\t.icon-left input,\n\t.icon-left select {\n\t\tpadding-left: 2em;\n\t}\n\t.icon-right input,\n\t.icon-right select {\n\t\tpadding-right: 2em;\n\t}\n\tkol-input.error input:focus,\n\tkol-input.error select:focus,\n\tkol-input.error textarea:focus {\n\t\tborder-color: var(--color-warning);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-warning);\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-warning);\n\t}\n\tkol-button-wc {\n\t\tposition: relative;\n\t\tfloat: right;\n\t\tz-index: 1000;\n\t\tmargin-top: -2.7em;\n\t}\n\tkol-button-wc button {\n\t\tborder: 0;\n\t\theight: 2.7em;\n\t\tbox-sizing: border-box;\n\t\tbackground-color: transparent;\n\t\tcursor: pointer;\n\t}\n\tkol-button-wc button:focus,\n\tkol-button-wc button:hover {\n\t\tbackground-color: var(--color-primary);\n\t\tcolor: var(--color-white);\n\t}\n\t.icon-right kol-button-wc {\n\t\tmargin-right: 2.5em;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\tselect[multiple],\n\ttextarea {\n\t\toverflow: auto;\n\t}\n\ttextarea {\n\t\tdisplay: block;\n\t}\n\tselect option {\n\t\tmargin: 1px 0;\n\t\tpadding: 0.5em;\n\t\tborder-radius: 0.25em;\n\t\tcursor: pointer;\n\t}\n\tselect option:disabled {\n\t\tcursor: not-allowed;\n\t}\n\toption:active:not(:disabled),\n\toption:checked:not(:disabled),\n\toption:focus:not(:disabled),\n\toption:hover:not(:disabled) {\n\t\tbackground: var(--color-primary);\n\t\tcolor: white;\n\t}',"KOL-INPUT-EMAIL":'kol-input {\n\t\tdisplay: grid;\n\t}\n\tkol-input label {\n\t\torder: 1;\n\t\tpadding: 0.125rem 0 0.4rem;\n\t\tvertical-align: text-top;\n\t\tline-height: 1.2;\n\t}\n\tkol-input div.input {\n\t\tbox-sizing: border-box;\n\t\torder: 2;\n\t\tbackground-color: white;\n\t\tborder-radius: 0.3125rem;\n\t}\n\tkol-input kol-alert.error {\n\t\tmargin-bottom: 0.4em;\n\t\tmargin-top: 0.2em;\n\t\torder: 3;\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tfont-family: var(--font-family);\n\t\tbackground-color: transparent;\n\t\tbox-sizing: border-box;\n\t\tfont-size: 1rem;\n\t\tdisplay: inline-flex;\n\t\tborder-color: var(--color-grey);\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\toverflow: hidden;\n\t\twidth: 100%;\n\t\tline-height: normal;\n\t\tpadding: 0.4rem 8px;\n\t}\n\tinput:hover,\n\tselect:hover,\n\ttextarea:hover {\n\t\tborder-color: #2d6f9e;\n\t\tbox-shadow: 0 0 0 1px #2d6f9e inset;\n\t}\n\tinput:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\tborder-color: var(--color-primary-20);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-primary-20);\n\t\toutline: none;\n\t}\n\tinput,\n\tselect:not([multiple]) {\n\t\theight: 2.75em;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\tinput:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tinput:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {\n\t\tcursor: not-allowed;\n\t\tborder-color: var(--border-default);\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\t.icons {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\theight: 0;\n\t}\n\t.icons > * {\n\t\tmargin: 0.75em;\n\t}\n\t.icon-left input,\n\t.icon-left select {\n\t\tpadding-left: 2em;\n\t}\n\t.icon-right input,\n\t.icon-right select {\n\t\tpadding-right: 2em;\n\t}\n\tkol-input.error input:focus,\n\tkol-input.error select:focus,\n\tkol-input.error textarea:focus {\n\t\tborder-color: var(--color-warning);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-warning);\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-warning);\n\t}\n\tkol-button-wc {\n\t\tposition: relative;\n\t\tfloat: right;\n\t\tz-index: 1000;\n\t\tmargin-top: -2.7em;\n\t}\n\tkol-button-wc button {\n\t\tborder: 0;\n\t\theight: 2.7em;\n\t\tbox-sizing: border-box;\n\t\tbackground-color: transparent;\n\t\tcursor: pointer;\n\t}\n\tkol-button-wc button:focus,\n\tkol-button-wc button:hover {\n\t\tbackground-color: var(--color-primary);\n\t\tcolor: var(--color-white);\n\t}\n\t.icon-right kol-button-wc {\n\t\tmargin-right: 2.5em;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\tselect[multiple],\n\ttextarea {\n\t\toverflow: auto;\n\t}\n\ttextarea {\n\t\tdisplay: block;\n\t}\n\tselect option {\n\t\tmargin: 1px 0;\n\t\tpadding: 0.5em;\n\t\tborder-radius: 0.25em;\n\t\tcursor: pointer;\n\t}\n\tselect option:disabled {\n\t\tcursor: not-allowed;\n\t}\n\toption:active:not(:disabled),\n\toption:checked:not(:disabled),\n\toption:focus:not(:disabled),\n\toption:hover:not(:disabled) {\n\t\tbackground: var(--color-primary);\n\t\tcolor: white;\n\t}',"KOL-INPUT-FILE":'kol-input {\n\t\tdisplay: grid;\n\t}\n\tkol-input label {\n\t\torder: 1;\n\t\tpadding: 0.125rem 0 0.4rem;\n\t\tvertical-align: text-top;\n\t\tline-height: 1.2;\n\t}\n\tkol-input div.input {\n\t\tbox-sizing: border-box;\n\t\torder: 2;\n\t\tbackground-color: white;\n\t\tborder-radius: 0.3125rem;\n\t}\n\tkol-input kol-alert.error {\n\t\tmargin-bottom: 0.4em;\n\t\tmargin-top: 0.2em;\n\t\torder: 3;\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tfont-family: var(--font-family);\n\t\tbackground-color: transparent;\n\t\tbox-sizing: border-box;\n\t\tfont-size: 1rem;\n\t\tdisplay: inline-flex;\n\t\tborder-color: var(--color-grey);\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\toverflow: hidden;\n\t\twidth: 100%;\n\t\tline-height: normal;\n\t\tpadding: 0.4rem 8px;\n\t}\n\tinput:hover,\n\tselect:hover,\n\ttextarea:hover {\n\t\tborder-color: #2d6f9e;\n\t\tbox-shadow: 0 0 0 1px #2d6f9e inset;\n\t}\n\tinput:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\tborder-color: var(--color-primary-20);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-primary-20);\n\t\toutline: none;\n\t}\n\tinput,\n\tselect:not([multiple]) {\n\t\theight: 2.75em;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\tinput:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tinput:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {\n\t\tcursor: not-allowed;\n\t\tborder-color: var(--border-default);\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\t.icons {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\theight: 0;\n\t}\n\t.icons > * {\n\t\tmargin: 0.75em;\n\t}\n\t.icon-left input,\n\t.icon-left select {\n\t\tpadding-left: 2em;\n\t}\n\t.icon-right input,\n\t.icon-right select {\n\t\tpadding-right: 2em;\n\t}\n\tkol-input.error input:focus,\n\tkol-input.error select:focus,\n\tkol-input.error textarea:focus {\n\t\tborder-color: var(--color-warning);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-warning);\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-warning);\n\t}\n\tkol-button-wc {\n\t\tposition: relative;\n\t\tfloat: right;\n\t\tz-index: 1000;\n\t\tmargin-top: -2.7em;\n\t}\n\tkol-button-wc button {\n\t\tborder: 0;\n\t\theight: 2.7em;\n\t\tbox-sizing: border-box;\n\t\tbackground-color: transparent;\n\t\tcursor: pointer;\n\t}\n\tkol-button-wc button:focus,\n\tkol-button-wc button:hover {\n\t\tbackground-color: var(--color-primary);\n\t\tcolor: var(--color-white);\n\t}\n\t.icon-right kol-button-wc {\n\t\tmargin-right: 2.5em;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\tselect[multiple],\n\ttextarea {\n\t\toverflow: auto;\n\t}\n\ttextarea {\n\t\tdisplay: block;\n\t}\n\tselect option {\n\t\tmargin: 1px 0;\n\t\tpadding: 0.5em;\n\t\tborder-radius: 0.25em;\n\t\tcursor: pointer;\n\t}\n\tselect option:disabled {\n\t\tcursor: not-allowed;\n\t}\n\toption:active:not(:disabled),\n\toption:checked:not(:disabled),\n\toption:focus:not(:disabled),\n\toption:hover:not(:disabled) {\n\t\tbackground: var(--color-primary);\n\t\tcolor: white;\n\t}',"KOL-INPUT-COLOR":'kol-input {\n\t\tdisplay: grid;\n\t}\n\tkol-input label {\n\t\torder: 1;\n\t\tpadding: 0.125rem 0 0.4rem;\n\t\tvertical-align: text-top;\n\t\tline-height: 1.2;\n\t}\n\tkol-input div.input {\n\t\tbox-sizing: border-box;\n\t\torder: 2;\n\t\tbackground-color: white;\n\t\tborder-radius: 0.3125rem;\n\t}\n\tkol-input kol-alert.error {\n\t\tmargin-bottom: 0.4em;\n\t\tmargin-top: 0.2em;\n\t\torder: 3;\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tfont-family: var(--font-family);\n\t\tbackground-color: transparent;\n\t\tbox-sizing: border-box;\n\t\tfont-size: 1rem;\n\t\tdisplay: inline-flex;\n\t\tborder-color: var(--color-grey);\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\toverflow: hidden;\n\t\twidth: 100%;\n\t\tline-height: normal;\n\t\tpadding: 0.4rem 8px;\n\t}\n\tinput:hover,\n\tselect:hover,\n\ttextarea:hover {\n\t\tborder-color: #2d6f9e;\n\t\tbox-shadow: 0 0 0 1px #2d6f9e inset;\n\t}\n\tinput:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\tborder-color: var(--color-primary-20);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-primary-20);\n\t\toutline: none;\n\t}\n\tinput,\n\tselect:not([multiple]) {\n\t\theight: 2.75em;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\tinput:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tinput:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {\n\t\tcursor: not-allowed;\n\t\tborder-color: var(--border-default);\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\t.icons {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\theight: 0;\n\t}\n\t.icons > * {\n\t\tmargin: 0.75em;\n\t}\n\t.icon-left input,\n\t.icon-left select {\n\t\tpadding-left: 2em;\n\t}\n\t.icon-right input,\n\t.icon-right select {\n\t\tpadding-right: 2em;\n\t}\n\tkol-input.error input:focus,\n\tkol-input.error select:focus,\n\tkol-input.error textarea:focus {\n\t\tborder-color: var(--color-warning);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-warning);\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-warning);\n\t}\n\tkol-button-wc {\n\t\tposition: relative;\n\t\tfloat: right;\n\t\tz-index: 1000;\n\t\tmargin-top: -2.7em;\n\t}\n\tkol-button-wc button {\n\t\tborder: 0;\n\t\theight: 2.7em;\n\t\tbox-sizing: border-box;\n\t\tbackground-color: transparent;\n\t\tcursor: pointer;\n\t}\n\tkol-button-wc button:focus,\n\tkol-button-wc button:hover {\n\t\tbackground-color: var(--color-primary);\n\t\tcolor: var(--color-white);\n\t}\n\t.icon-right kol-button-wc {\n\t\tmargin-right: 2.5em;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\tselect[multiple],\n\ttextarea {\n\t\toverflow: auto;\n\t}\n\ttextarea {\n\t\tdisplay: block;\n\t}\n\tselect option {\n\t\tmargin: 1px 0;\n\t\tpadding: 0.5em;\n\t\tborder-radius: 0.25em;\n\t\tcursor: pointer;\n\t}\n\tselect option:disabled {\n\t\tcursor: not-allowed;\n\t}\n\toption:active:not(:disabled),\n\toption:checked:not(:disabled),\n\toption:focus:not(:disabled),\n\toption:hover:not(:disabled) {\n\t\tbackground: var(--color-primary);\n\t\tcolor: white;\n\t}',"KOL-INPUT-RANGE":'kol-input {\n\t\tdisplay: grid;\n\t}\n\tkol-input label {\n\t\torder: 1;\n\t\tpadding: 0.125rem 0 0.4rem;\n\t\tvertical-align: text-top;\n\t\tline-height: 1.2;\n\t}\n\tkol-input div.input {\n\t\tbox-sizing: border-box;\n\t\torder: 2;\n\t\tbackground-color: white;\n\t\tborder-radius: 0.3125rem;\n\t}\n\tkol-input kol-alert.error {\n\t\tmargin-bottom: 0.4em;\n\t\tmargin-top: 0.2em;\n\t\torder: 3;\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tfont-family: var(--font-family);\n\t\tbackground-color: transparent;\n\t\tbox-sizing: border-box;\n\t\tfont-size: 1rem;\n\t\tdisplay: inline-flex;\n\t\tborder-color: var(--color-grey);\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\toverflow: hidden;\n\t\twidth: 100%;\n\t\tline-height: normal;\n\t\tpadding: 0.4rem 8px;\n\t}\n\tinput:hover,\n\tselect:hover,\n\ttextarea:hover {\n\t\tborder-color: #2d6f9e;\n\t\tbox-shadow: 0 0 0 1px #2d6f9e inset;\n\t}\n\tinput:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\tborder-color: var(--color-primary-20);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-primary-20);\n\t\toutline: none;\n\t}\n\tinput,\n\tselect:not([multiple]) {\n\t\theight: 2.75em;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\tinput:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tinput:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {\n\t\tcursor: not-allowed;\n\t\tborder-color: var(--border-default);\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\t.icons {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\theight: 0;\n\t}\n\t.icons > * {\n\t\tmargin: 0.75em;\n\t}\n\t.icon-left input,\n\t.icon-left select {\n\t\tpadding-left: 2em;\n\t}\n\t.icon-right input,\n\t.icon-right select {\n\t\tpadding-right: 2em;\n\t}\n\tkol-input.error input:focus,\n\tkol-input.error select:focus,\n\tkol-input.error textarea:focus {\n\t\tborder-color: var(--color-warning);\n\t\tbox-shadow: inset 0 0 0 1px var(--color-warning);\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-warning);\n\t}\n\tkol-button-wc {\n\t\tposition: relative;\n\t\tfloat: right;\n\t\tz-index: 1000;\n\t\tmargin-top: -2.7em;\n\t}\n\tkol-button-wc button {\n\t\tborder: 0;\n\t\theight: 2.7em;\n\t\tbox-sizing: border-box;\n\t\tbackground-color: transparent;\n\t\tcursor: pointer;\n\t}\n\tkol-button-wc button:focus,\n\tkol-button-wc button:hover {\n\t\tbackground-color: var(--color-primary);\n\t\tcolor: var(--color-white);\n\t}\n\t.icon-right kol-button-wc {\n\t\tmargin-right: 2.5em;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\tselect[multiple],\n\ttextarea {\n\t\toverflow: auto;\n\t}\n\ttextarea {\n\t\tdisplay: block;\n\t}\n\tselect option {\n\t\tmargin: 1px 0;\n\t\tpadding: 0.5em;\n\t\tborder-radius: 0.25em;\n\t\tcursor: pointer;\n\t}\n\tselect option:disabled {\n\t\tcursor: not-allowed;\n\t}\n\toption:active:not(:disabled),\n\toption:checked:not(:disabled),\n\toption:focus:not(:disabled),\n\toption:hover:not(:disabled) {\n\t\tbackground: var(--color-primary);\n\t\tcolor: white;\n\t}',"KOL-NAV":'/* :host * {hyphens: var(--hyphens);font-family: var(--font-family);line-height: var(--line-height);word-break: break-word;} */\n\t:host .hidden {\n\t\tdisplay: none;\n\t}\n\t:host > div > nav ul {\n\t\tlist-style: none;\n\t\tmargin: 0px;\n\t\tpadding: 0px;\n\t\tborder-radius: var(--border-radius);\n\t\tbackground-color: var(--color-primary);\n\t}\n\t:host > div > nav ul > li {\n\t\tborder-radius: var(--border-radius);\n\t\toverflow: hidden;\n\t\tpadding: 0.125em;\n\t}\n\t:host > div > nav ul > li[part*="vertical"] + li {\n\t\tborder-radius: 0;\n\t\tborder-top: 0.1em dotted white;\n\t}\n\t:host > div > nav ul > li[part*="vertical selected"] {\n\t\tborder-right: 0.375em solid var(--color-yellow-neutral);\n\t}\n\t:host > div > nav ul > li[part*="horizontal"] + li {\n\t\tborder-radius: 0;\n\t\tborder-left: 0.1em dotted white;\n\t}\n\t:host > div > nav ul > li[part*="horizontal selected"] {\n\t\tborder-bottom: 0.375em solid var(--color-yellow-neutral);\n\t}\n\t:host > div > nav ul > li > div {\n\t\theight: 100%;\n\t}\n\t:host > div > nav kol-link-wc {\n\t\twidth: 100%; /*height: 100%;font-weight: 600;*/\n\t\tdisplay: block;\n\t}\n\t:host > div > nav kol-link-wc a {\n\t\tborder-radius: var(--border-radius);\n\t\tbackground-color: var(--color-primary);\n\t\tborder: 1px solid transparent;\n\t\tgrid: flex;\n\t\tline-height: 2em;\n\t\tpadding: 0.5em;\n\t\tcolor: white;\n\t\theight: 100%;\n\t\t-webkit-box-align: center;\n\t\talign-items: center;\n\t\tdisplay: flex;\n\t\tcursor: pointer;\n\t\ttext-decoration: inherit;\n\t}\n\t:host > div > nav kol-link-wc[exportparts*="selected"] a {\n\t\tbackground-color: var(--color-primary-20);\n\t\tfont-weight: 700;\n\t}\n\t:host > div > nav kol-link-wc a kol-icon.mr-2 {\n\t\tmargin-right: calc(2 * var(--spacing));\n\t}\n\t:host > div > nav kol-link-wc a kol-icon.ml-2 {\n\t\tmargin-left: calc(2 * var(--spacing));\n\t}\n\t:host > div > nav kol-link-wc a:focus,\n\t:host > div > nav kol-link-wc a:hover {\n\t\tborder: 1px solid white;\n\t\tbackground-color: var(--kolibri-color-focus);\n\t} /* compact button */\n\t:host > div > div:last-child {\n\t\tmargin-top: 0.5em;\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n\t:host > div > nav kol-link-wc a.text-center {\n\t\tdisplay: grid;\n\t\talign-items: center;\n\t\tjustify-items: center;\n\t} /* horizontal */\n\tul.flex {\n\t\tdisplay: flex;\n\t}\n\tli > div > div.absolute {\n\t\tposition: absolute;\n\t}\n\tkol-span-wc {\n\t\tjustify-items: baseline;\n\t}',"KOL-BREADCRUMB":'nav {\n\t\twidth: 100%;\n\t}\n\tul {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tlist-style: none;\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\talign-items: center;\n\t}\n\tkol-link {\n\t\tdisplay: inline;\n\t}\n\t:host kol-icon[exportparts*="separator"] {\n\t\tpadding: 0 0.5rem;\n\t}\n\t:host kol-icon::part(icon separator) {\n\t\tfont-weight: 900;\n\t\tfont-size: 0.875rem;\n\t}\n\t:host kol-icon::part(icon separator)::before {\n\t\tcolor: black;\n\t\tcontent: "\f054";\n\t\tfont-family: "Font Awesome 6 Free";\n\t}\n\t:host li > kol-link > kol-link-wc > a {\n\t\tcolor: red !important;\n\t}',"KOL-TOAST":":host > div {\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 0;\n\t\tz-index: 200;\n\t}\n\t:host > div > kol-alert {\n\t\tdisplay: block;\n\t\tmargin: auto;\n\t\tpadding: 1rem;\n\t\tmax-width: 750px;\n\t}\n\t:host > div > kol-button-wc {\n\t\ttop: 0;\n\t\tposition: relative;\n\t\tdisplay: block;\n\t\tmargin: auto;\n\t\twidth: 1em;\n\t}","KOL-LINK-BUTTON":"a {\n\t\tmin-width: 44px;\n\t\tmin-height: 44px;\n\t\tbackground-color: transparent;\n\t\tborder: 0;\n\t\tcursor: pointer;\n\t\tpadding: 0;\n\t\tdisplay: flex;\n\t\tgap: 0.25rem;\n\t\tjustify-items: center;\n\t\talign-items: center;\n\t\ttext-decoration: none !important;\n\t}\n\ta > kol-span-wc {\n\t\tdisplay: grid;\n\t\tmin-width: 44px;\n\t\tmin-height: 44px;\n\t\tgap: 0.25em;\n\t\tline-height: 1.5rem;\n\t\tfont-family: Roboto;\n\t\tfont-weight: 700;\n\t\tcursor: pointer;\n\t\tfont-size: 1rem;\n\t\talign-items: center;\n\t\tpadding: 0px 7px;\n\t\tjustify-content: center;\n\t\tfont-style: normal;\n\t\ttext-align: center;\n\t\tborder: none;\n\t\toutline: none;\n\t}\n\ta:active > kol-span-wc {\n\t\ttransform: translateY(1px);\n\t}\n\t.primary a:disabled > kol-span-wc,\n\t.danger a:disabled > kol-span-wc,\n\t.normal a:disabled > kol-span-wc {\n\t\tcursor: not-allowed;\n\t\tcolor: var(--color-white);\n\t\tbackground-color: var(--color-gray-40);\n\t}\n\t.ghost a:disabled > kol-span-wc,\n\t.loading a:disabled > kol-span-wc,\n\t.secondary a:disabled > kol-span-wc {\n\t\tcursor: not-allowed;\n\t\tcolor: var(--color-gray-40);\n\t\tbackground-color: var(--color-white);\n\t\tborder: var(--color-gray-40) solid 3px;\n\t}\n\t.primary a > kol-span-wc,\n\t.primary a:hover > kol-span-wc,\n\t.normal a > kol-span-wc,\n\t.normal a:hover > kol-span-wc {\n\t\tbackground-color: var(--color-primary);\n\t\tcolor: var(--color-white);\n\t}\n\t.loading a > kol-span-wc,\n\t.loading a:hover > kol-span-wc,\n\t.secondary a > kol-span-wc,\n\t.secondary a:hover > kol-span-wc {\n\t\tbackground-color: var(--color-white);\n\t\tcolor: var(--color-primary);\n\t\tborder: 2px solid var(--color-primary);\n\t}\n\t.danger a > kol-span-wc,\n\t.danger a:hover > kol-span-wc {\n\t\tbackground-color: var(--color-warning);\n\t\tborder-color: var(--color-warning);\n\t\tcolor: var(--color-white);\n\t\tbox-shadow: unset;\n\t}\n\t.ghost a,\n\t.ghost a:hover > kol-span-wc {\n\t\tbackground-color: unset;\n\t\tcolor: var(--color-primary);\n\t\tbox-shadow: unset;\n\t}\n\t.primary a:active > kol-span-wc,\n\t.primary a:focus > kol-span-wc,\n\t.primary a:hover > kol-span-wc,\n\t.loading a:active > kol-span-wc,\n\t.loading a:focus > kol-span-wc,\n\t.loading a:hover > kol-span-wc,\n\t.secondary a:active > kol-span-wc,\n\t.secondary a:focus > kol-span-wc,\n\t.secondary a:hover > kol-span-wc,\n\t.normal a:active > kol-span-wc,\n\t.normal a:focus > kol-span-wc,\n\t.normal a:hover > kol-span-wc {\n\t\tbackground-color: var(--color-primary-20);\n\t\tcolor: var(--color-white);\n\t\toutline: none;\n\t}\n\t.loading a:active > kol-span-wc,\n\t.loading a:focus > kol-span-wc,\n\t.loading a:hover > kol-span-wc,\n\t.secondary a:active > kol-span-wc,\n\t.secondary a:focus > kol-span-wc,\n\t.secondary a:hover > kol-span-wc {\n\t\tborder: 2px solid var(--color-primary-20);\n\t}\n\t.danger a:active > kol-span-wc,\n\t.danger a:hover > kol-span-wc {\n\t\tcolor: var(--color-white);\n\t\tbackground-color: var(--color-dark-yellow-neutral);\n\t\toutline: none;\n\t}\n\t.ghost a:active > kol-span-wc,\n\t.ghost a:hover > kol-span-wc {\n\t\tcolor: var(--color-primary);\n\t\tbox-shadow: inset 0 0 0 2px var(--color-primary);\n\t\toutline: none;\n\t}\n\ta > kol-span-wc > span {\n\t\tdisplay: flex;\n\t\tgap: 0.5em;\n\t\tmargin: auto;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tletter-spacing: 0.75px;\n\t}\n\ta.hide-label > kol-span-wc {\n\t\tpadding: 8px;\n\t}\n\ta.hide-label > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n\ta.hide-label > kol-span-wc kol-icon {\n\t\tdisplay: inline-block;\n\t\twidth: 1.5em;\n\t\theight: 1.5em;\n\t}\n\t.loading a > kol-span-wc kol-icon {\n\t\tanimation: spin 5s infinite linear;\n\t}\n\t.loading a > kol-span-wc {\n\t\tmin-height: unset !important;\n\t\tmin-width: unset !important;\n\t}","KOL-BUTTON-LINK":"a,\n\tbutton {\n\t\tbackground-color: transparent;\n\t\tborder: 0;\n\t\tcursor: pointer;\n\t\tdisplay: inline-block;\n\t}\n\tkol-link-wc,\n\tkol-link-button-wc {\n\t\tdisplay: inline-block;\n\t}\n\ta,\n\tbutton {\n\t\tcolor: var(--color-primary);\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\tdisplay: inline-flex;\n\t\tline-height: 1.5em;\n\t\ttext-decoration-line: none !important;\n\t\toutline: none !important;\n\t}\n\ta:focus-within,\n\ta:hover,\n\tbutton:focus-within,\n\tbutton:hover {\n\t\tbox-shadow: inset 0 -1px 0 0 var(--color-primary);\n\t}\n\tkol-icon {\n\t\tpadding: 0 0.25em;\n\t\tdisplay: inline-block;\n\t}\n\t.hidden {\n\t\tdisplay: none;\n\t\tvisibility: hidden;\n\t}\n\t.skip {\n\t\tleft: -99999px;\n\t\toverflow: hidden;\n\t\tposition: absolute;\n\t\tz-index: 9999999;\n\t\tline-height: 1em;\n\t}\n\t.skip:focus {\n\t\tbackground: white;\n\t\tleft: unset;\n\t\tposition: unset;\n\t}","KOL-SKIP-NAV":"kol-link-wc > a > kol-span-wc {\n\t\tborder-radius: 2px;\n\t\tborder-style: solid;\n\t\tborder-width: 2px;\n\t\tgap: 0.5rem;\n\t\tline-height: 1rem;\n\t\tpadding: 0.75rem 1rem;\n\t\tbackground-color: var(--color-primary);\n\t\tborder-color: var(--color-primary-10);\n\t\tcolor: white;\n\t\tcursor: pointer;\n\t}"}),z.createTheme("bzst",{GLOBAL:'/* NOTE: Alle \':root\' CSS properties sollten in KoliBri zu \':host\' kopiert werden und umgekehrt. Damit vereinheitlicht man alle Variablen auf beiden Seiten und kann diese dann individuell nutzen.*/ /* colors */\n\t:root,\n\t:host {\n\t\t/* token */\n\t\t--color-bleached-silk: #f2f2f2;\n\t\t--color-carbon: #333;\n\t\t--color-chilled-lemonade: #ffe695;\n\t\t--color-green: #4d7f6f;\n\t\t--color-green-light: #a7c0b8;\n\t\t--color-green-dark: #23614e;\n\t\t--color-heroic-blue: #126dff;\n\t\t--color-mercury: #ebebeb;\n\t\t--color-red-epiphyllum: #d00000;\n\t\t--color-speedwell: #595f73;\n\t\t--color-tropic-sea: #007194;\n\t\t--color-white: #fff; /* template */ /* general */\n\t\t--colorDark: var(--color-carbon);\n\t\t--colorLight: var(--color-white); /* primary color */\n\t\t--colorPrimary: var(--color-green-dark);\n\t\t--colorPrimaryFront: var(--color-white);\n\t\t--colorPrimarySuccess: var(--color-green);\n\t\t--colorPrimarySuccessFront: var(--color-white);\n\t\t--colorPrimaryActive: var(--color-green-light);\n\t\t--colorPrimaryActiveFront: var(--color-carbon); /* secondary color */\n\t\t--colorSecondary: var(--color-white);\n\t\t--colorSecondaryFront: var(--color-carbon);\n\t\t--colorSecondarySuccess: var(--color-bleached-silk);\n\t\t--colorSecondarySuccessFront: var(--color-carbon);\n\t\t--colorSecondaryActive: var(--color-mercury);\n\t\t--colorSecondaryActiveFront: var(--color-carbon); /* text */\n\t\t--colorText: var(--color-carbon);\n\t\t--colorTextBg: var(--color-white);\n\t\t--colorTextLight: var(--color-white);\n\t\t--colorTextLightBg: var(--color-carbon);\n\t\t--colorTextDisabled: var(--color-speedwell);\n\t\t--colorTextDisabledBg: var(--color-mercury);\n\t\t--colorTextActive: var(--color-green-dark);\n\t\t--colorTextActiveBg: var(--color-white); /* signal */\n\t\t--colorSignal: var(--color-tropic-sea);\n\t\t--colorSignalFront: var(\n\t\t--color-white\n\t\t); /* colorSignalFocus hat keine Frontfarbe */\n\t\t--colorSignalFocus: var(--color-heroic-blue);\n\t\t--colorSignalSuccess: var(--color-green);\n\t\t--colorSignalSuccessFront: var(--color-white);\n\t\t--colorSignalWarn: var(--color-chilled-lemonade);\n\t\t--colorSignalWarnFront: var(--color-carbon);\n\t\t--colorSignalError: var(--color-red-epiphyllum);\n\t\t--colorSignalErrorFront: var(--color-white); /* disabled */\n\t\t--colorDisabled: var(--color-mercury);\n\t} /* font, headline, text */\n\t:root,\n\t:host {\n\t\t/* token */\n\t\t--font-family: "BundesSans Web", system-ui, -apple-system, BlinkMacSystemFont,\n\t\t"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",\n\t\tsans-serif; /* Basis-Größe: html, rem */\n\t\t--font-size: 100%;\n\t\t--line-height: 1.6875rem; /* template */ /* h1 */\n\t\t--headline1FontSize: 2.5rem;\n\t\t--headline1LineHeight: 2.8125rem; /* h2 */\n\t\t--headline2FontSize: 2rem;\n\t\t--headline2LineHeight: 2.5rem; /* h3 */\n\t\t--headline3FontSize: 1.3125rem;\n\t\t--headline3LineHeight: 1.6875rem; /* h4 */\n\t\t--headline4FontSize: 1rem;\n\t\t--headline4LineHeight: 1.6875rem; /* text */\n\t\t--textFont: var(--font-family);\n\t\t--textFontColor: var(--colorText);\n\t\t--textFontSerif: "BundesSerif Web", var(--textFont);\n\t\t--textFontSize: 1rem;\n\t\t--textFontLineHeight: 1.6875rem;\n\t\t--textFontWeight: normal;\n\t} /* Abstände */\n\t:root,\n\t:host {\n\t\t/* template */\n\t\t--gap: 2rem;\n\t\t--gapDouble: calc(var(--gap) * 2);\n\t\t--gapSmall: 1.25rem; /* TODO: benötigt nur außerhalb KoliBri Komponenten? */\n\t\t--gapSmallest: 0.625rem;\n\t\t--gapLarge: 2.5rem;\n\t} /* formular */\n\t:root,\n\t:host {\n\t\t/* template */\n\t\t--formBorderWidthAndStyle: 1px solid; /* TODO: eigentlich --color-green sein, aber im Styleguide ist der Wert: #23614E */\n\t\t--formBorder: var(--formBorderWidthAndStyle) var(--colorPrimarySuccess);\n\t\t--formBorderHover: var(--formBorderWidthAndStyle) var(--colorPrimaryActive);\n\t\t--formBorderDisabled: var(--formBorderWidthAndStyle) var(--colorDisabled);\n\t\t--formBorderInvalid: var(--formBorderWidthAndStyle) var(--colorSignalError);\n\t\t--focusOutline: var(--colorSignalFocus) solid 2px;\n\t\t--formFieldBackground: var(--colorLight); /*Select option */\n\t\t--formFieldBackgroundHover: var(--colorPrimary); /* Select options */\n\t\t--formFieldBackgroundEven: var(--formFieldBackground); /* Select options */\n\t\t--formFieldBackgroundOdd: var(--colorSecondaryActive);\n\t\t--formFieldBackgroundDisabled: var(--colorSecondarySuccess);\n\t\t--formFieldTextColorDisabled: var(--colorTextDisabled);\n\t} /* ********************************* */ /* ********************************* */ /* ********************************* */ /* ********************************* */\n\t:host {\n\t\t/* Primärfarbe und Abstufungen */\n\t\t--color-gruen-dunkel: var(--colorPrimary);\n\t\t--color-gruen: var(--colorPrimarySuccess);\n\t\t--color-gruen-hell: var(--colorPrimaryActive); /* Sekundärfarben */\n\t\t--color-weiss: var(--colorSecondary);\n\t\t--color-grau-dunkel: var(--colorSecondaryFront);\n\t\t--color-grau-hell: var(--colorSecondaryActive);\n\t\t--color-grau-weiss: var(--colorSecondarySuccess); /* Textfarben */\n\t\t--color-graublau: var(--colorTextDisabled); /* Signalfarben */\n\t\t--color-blau: var(--colorSignalFocus);\n\t\t--color-blau-dunkel: var(--colorSignal);\n\t\t--color-gelb: var(--colorSignalWarn);\n\t\t--color-rot: var(--colorSignalError);\n\t\t--color-disabled: var(--colorTextDisabled);\n\t\t--text-size: var(--textFontSize);\n\t\t--color-focus: var(--color-blau);\n\t\t--spacing: 4px;\n\t\t--color-text: var(--color-grau-dunkel);\n\t}\n\t:host {\n\t\tcolor: var(--color-black);\n\t\tfont-family: var(--font-family);\n\t}\n\t:host * {\n\t\tbox-sizing: border-box;\n\t}\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6 {\n\t\tfont-family: var(--textFontSerif);\n\t}\n\th1,\n\th2 {\n\t\tfont-weight: var(--textFontWeight);\n\t}\n\th1 {\n\t\tfont-size: var(--headline1FontSize);\n\t\tline-height: var(--headline1LineHeight);\n\t}\n\th2 {\n\t\tfont-size: var(--headline2FontSize);\n\t\tline-height: var(--headline2LineHeight);\n\t}\n\th3 {\n\t\tfont-size: var(--headline3FontSize);\n\t\tline-height: var(--headline3LineHeight);\n\t}\n\th4,\n\th5,\n\th6 {\n\t\tfont-size: var(--headline4FontSize);\n\t\tline-height: var(--headline4LineHeight);\n\t}\n\ta,\n\tbutton,\n\tinput,\n\toption,\n\tselect,\n\tsummary,\n\ttextarea {\n\t\t-ms-hyphens: auto;\n\t\t-webkit-hyphens: auto;\n\t\thyphens: auto;\n\t\tletter-spacing: inherit;\n\t\tdisplay: block;\n\t} /* a,button,caption,input,option,select,summary,table,textarea {font-size: 1rem;} */\n\t*[tabindex]:focus,\n\tkol-input:not(.checkbox, .radio) .input:focus-within,\n\tkol-input:is(.checkbox, .radio) input:focus,\n\tsummary:focus {\n\t\toutline: var(--focusOutline);\n\t\toutline-offset: 2px;\n\t\ttransition: outline-offset 0.2s linear;\n\t}\n\t@keyframes spin {\n\t\t0% {\n\t\ttransform: rotate(0deg);\n\t\t}\n\t\t100% {\n\t\ttransform: rotate(360deg);\n\t\t}\n\t}\n\tkol-tooltip .area {\n\t\tbackground-color: var(--colorDark);\n\t\tcolor: var(--colorLight);\n\t}\n\tkol-tooltip kol-span-wc {\n\t\tline-height: 1.5em;\n\t\tpadding: 0.5rem 0.75rem;\n\t}\n\tkol-span-wc,\n\tkol-span-wc > span {\n\t\tgap: 0.5em;\n\t}\n\tkol-span-wc,\n\tkol-span-wc > span {\n\t\tgap: 0.3em;\n\t}',"KOL-BUTTON":":host {\n\t\t--background-color: var(--color-gruen-dunkel);\n\t\t--border-color: var(--color-gruen-dunkel);\n\t\t--border-size: 1px;\n\t\t--min-size: 2.75rem;\n\t\tdisplay: inline-block;\n\t}\n\tbutton {\n\t\tborder-width: var(--border-size);\n\t\tborder-style: solid;\n\t\tmin-width: var(--min-size);\n\t\tmin-height: var(--min-size);\n\t\tdisplay: grid;\n\t\tgap: 0.25em;\n\t\tline-height: 1.5;\n\t\tfont-family: var(--font-family);\n\t\tcursor: pointer;\n\t\tfont-size: var(--text-size);\n\t\talign-items: center;\n\t\tpadding: 0.5rem 0.875rem !important;\n\t\tjustify-content: center;\n\t\tfont-style: normal;\n\t\ttext-align: center;\n\t\ttext-transform: uppercase;\n\t\twidth: inherit;\n\t\ttransition-duration: 0.5s;\n\t\ttransition-property: background-color, color, border-color;\n\t}\n\tbutton:hover:enabled {\n\t\ttext-decoration: underline;\n\t}\n\tbutton:focus {\n\t\toutline: var(--color-focus) solid 2px;\n\t}\n\tbutton.primary,\n\tbutton.primary:active,\n\tbutton.primary:hover {\n\t\tbackground-color: var(--background-color);\n\t\tborder-color: var(--border-color);\n\t\tcolor: var(--color-weiss);\n\t}\n\tbutton.secondary,\n\tbutton.danger,\n\tbutton.normal,\n\tbutton.ghost {\n\t\tbackground-color: var(--color-weiss);\n\t\tborder-color: var(--color-gruen-hell);\n\t\tcolor: var(--color-grau-dunkel);\n\t}\n\tbutton.ghost {\n\t\tbackground-color: transparent;\n\t\tcolor: inherit;\n\t\tborder: calc(var(--border-size) * 2) solid transparent;\n\t}\n\tbutton.secondary:active,\n\tbutton.secondary:hover {\n\t\tbackground-color: var(--background-color);\n\t\tborder-color: var(--background-color);\n\t\tborder-width: var(--border-size);\n\t\tcolor: var(--color-weiss);\n\t}\n\tbutton:disabled,\n\tbutton:disabled:hover {\n\t\tbackground-color: var(--color-weiss);\n\t\tborder-color: var(--color-grau-hell);\n\t\tcolor: var(--color-disabled);\n\t\tcursor: not-allowed;\n\t}\n\tbutton > span {\n\t\tdisplay: flex;\n\t\tgap: 0.5em;\n\t\tmargin: auto;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t}\n\tbutton.icon-only {\n\t\tpadding: 0.5rem;\n\t}\n\tbutton.icon-only kol-icon {\n\t\tdisplay: inline-block;\n\t\twidth: 1.5em;\n\t\theight: 1.5em;\n\t}\n\tbutton.loading kol-icon {\n\t\tanimation: spin 5s infinite linear;\n\t}","KOL-INPUT-TEXT":'kol-input {\n\t\tgap: 0.4em;\n\t}\n\tkol-input .error {\n\t\torder: 3;\n\t}\n\tkol-input label {\n\t\tfont-weight: 700;\n\t\torder: 1;\n\t}\n\tkol-input .input {\n\t\torder: 2;\n\t}\n\tkol-input .hint {\n\t\torder: 4;\n\t\tfont-size: 0.875em;\n\t\tfont-style: italic;\n\t}\n\tinput {\n\t\tborder: none;\n\t}\n\t.input {\n\t\tborder-color: var(--color-grey);\n\t\tborder-style: solid;\n\t\tborder-width: 1px;\n\t\tpadding: 0 0.5em;\n\t}\n\t.input > kol-icon {\n\t\twidth: 1.5em;\n\t}\n\t.input > input:first-child {\n\t\tpadding-left: 0.375em;\n\t}\n\t.input > input:last-child {\n\t\tpadding-right: 0.375em;\n\t}\n\t.input:hover {\n\t\tborder-color: var(--color-gruen-hell);\n\t}\n\tinput:not([type="color"]):read-only,\n\tinput:disabled {\n\t\tcursor: not-allowed;\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\tkol-input.error {\n\t\tborder-left: 3px solid var(--color-rot);\n\t\tpadding-left: 1em;\n\t}\n\tkol-input.error .input:focus-within {\n\t\toutline-color: var(--color-rot) !important;\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-rot);\n\t\tfont-weight: 700;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\tlabel {\n\t\tcolor: var(--color-text);\n\t\tline-height: 1.5;\n\t}\n\t.input {\n\t\tfont-size: var(--text-size);\n\t\tline-height: 1.5;\n\t\tcolor: var(--colorText);\n\t\tborder-color: var(--color-gruen);\n\t\tborder-style: solid;\n\t\twidth: 100%;\n\t}\n\tinput:not([type="range"]) {\n\t\theight: 2.75em;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grau-dunkel);\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}',"KOL-INPUT-PASSWORD":'kol-input {\n\t\tdisplay: grid;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t}\n\tinput:focus,\n\tinput:hover,\n\tselect:focus,\n\tselect:hover,\n\ttextarea:focus,\n\ttextarea:hover {\n\t\tborder-color: black;\n\t}\n\tkol-input > label {\n\t\torder: 1;\n\t\tmargin-bottom: 0.25em;\n\t}\n\tkol-input > label > span {\n\t\tcolor: black;\n\t\tfont-size: 0.875rem;\n\t\tline-height: 1.5rem;\n\t}\n\tkol-input > div.input {\n\t\tbackground-color: white;\n\t\tdisplay: block;\n\t\torder: 2;\n\t}\n\tkol-input > kol-alert.error {\n\t\tmargin-top: 0.25em;\n\t\torder: 3;\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tfont-family: var(--font-family);\n\t\tbackground-color: transparent;\n\t\tbox-sizing: border-box;\n\t\tfont-size: 1rem;\n\t\tdisplay: inline-flex;\n\t\tline-height: 1.5em;\n\t\tcolor: black;\n\t\tborder-color: var(--color-grau-dunkel);\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\tpadding: 0.5em 0.75em;\n\t\toverflow: hidden;\n\t\twidth: 100%;\n\t}\n\tinput:not([type="range"]),\n\tselect:not([multiple]) {\n\t\theight: 2.75em;\n\t}\n\ttextarea {\n\t\tdisplay: inherit;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grau-dunkel);\n\t}\n\tinput:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {\n\t\tcursor: not-allowed;\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\t.icons {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\theight: 0;\n\t}\n\t.icons > * {\n\t\tmargin: 0.75em;\n\t}\n\t.icon-left input,\n\t.icon-left select {\n\t\tpadding-left: 2em;\n\t}\n\t.icon-right input,\n\t.icon-right select {\n\t\tpadding-right: 2em;\n\t}\n\tkol-button-wc {\n\t\tposition: relative;\n\t\tfloat: right;\n\t\tz-index: 1000;\n\t\tmargin-top: -33px;\n\t}\n\tkol-button-wc button {\n\t\tborder: 1px solid var(--color-grau-dunkel);\n\t\tbox-sizing: border-box;\n\t\tbackground-color: transparent;\n\t\tcursor: pointer;\n\t}\n\t.icon-right kol-button-wc {\n\t\tmargin-right: 2.5em;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\tselect[multiple],\n\ttextarea {\n\t\toverflow: auto;\n\t}\n\ttextarea {\n\t\tdisplay: block;\n\t}\n\tselect option {\n\t\tmargin: 1px 0;\n\t\tpadding: 0.5em;\n\t\tcursor: pointer;\n\t}\n\tselect option:disabled {\n\t\tcursor: not-allowed;\n\t}\n\toption:active:not(:disabled),\n\toption:checked:not(:disabled),\n\toption:focus:not(:disabled),\n\toption:hover:not(:disabled) {\n\t\tcolor: white;\n\t}',"KOL-INPUT-NUMBER":'kol-input {\n\t\tdisplay: grid;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t}\n\tinput:focus,\n\tinput:hover,\n\tselect:focus,\n\tselect:hover,\n\ttextarea:focus,\n\ttextarea:hover {\n\t\tborder-color: black;\n\t}\n\tinput:focus-within,\n\tselect:focus-within,\n\ttextarea:focus-within {\n\t\toutline: var(--color-focus) solid 2px;\n\t}\n\tkol-input label {\n\t\tfont-weight: 700;\n\t\torder: 1;\n\t\tmargin-bottom: var(--gapSmallest);\n\t}\n\tkol-input label > span {\n\t\tcolor: black;\n\t\tfont-size: 0.875rem;\n\t\tline-height: 1.5rem;\n\t}\n\tkol-input > div.input {\n\t\tbackground-color: white;\n\t\tdisplay: block;\n\t\torder: 2;\n\t}\n\tkol-input > kol-alert.error {\n\t\tmargin-top: 0.25em;\n\t\torder: 3;\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tfont-family: var(--textFont);\n\t\tbackground-color: transparent;\n\t\tbox-sizing: border-box;\n\t\tfont-size: var(--textFontSize);\n\t\tdisplay: inline-flex;\n\t\tline-height: 1.5;\n\t\tcolor: black;\n\t\tborder-color: var(--color-gruen);\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\tpadding: 0.5em;\n\t\toverflow: hidden;\n\t\twidth: 100%;\n\t}\n\tinput:not([type="range"]),\n\tselect:not([multiple]) {\n\t\theight: 2.75em;\n\t}\n\ttextarea {\n\t\tdisplay: inherit;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grau-dunkel);\n\t}\n\tinput:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {\n\t\tcursor: not-allowed;\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\t.icons {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\theight: 0;\n\t}\n\t.icons > * {\n\t\tmargin: 0.75em;\n\t}\n\t.icon-left input,\n\t.icon-left select {\n\t\tpadding-left: 2em;\n\t}\n\t.icon-right input,\n\t.icon-right select {\n\t\tpadding-right: 2em;\n\t}\n\tkol-button-wc {\n\t\tposition: relative;\n\t\tfloat: right;\n\t\tz-index: 1;\n\t\tmargin-top: -33px;\n\t}\n\tkol-button-wc button {\n\t\tborder: 1px solid var(--color-grau-dunkel);\n\t\tbox-sizing: border-box;\n\t\tbackground-color: transparent;\n\t\tcursor: pointer;\n\t}\n\t.icon-right kol-button-wc {\n\t\tmargin-right: 2.5em;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\tselect[multiple],\n\ttextarea {\n\t\toverflow: auto;\n\t}\n\ttextarea {\n\t\tdisplay: block;\n\t}\n\tselect option {\n\t\tmargin: 1px 0;\n\t\tpadding: 0.5em;\n\t\tcursor: pointer;\n\t}\n\tselect option:disabled {\n\t\tcursor: not-allowed;\n\t}\n\toption:active:not(:disabled),\n\toption:checked:not(:disabled),\n\toption:focus:not(:disabled),\n\toption:hover:not(:disabled) {\n\t\tbackground: var(--color-ocean);\n\t\tcolor: white;\n\t}',"KOL-INPUT-DATE":"kol-input label {\n\t\tfont-weight: 700;\n\t\tmargin-bottom: var(--gapSmallest);\n\t}\n\tinput {\n\t\tborder: var(--formBorder);\n\t}\n\tinput:hover {\n\t\tborder: var(--formBorderHover);\n\t}","KOL-INPUT-EMAIL":'kol-input {\n\t\tdisplay: grid;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t}\n\tinput:focus,\n\tinput:hover,\n\tselect:focus,\n\tselect:hover,\n\ttextarea:focus,\n\ttextarea:hover {\n\t\tborder-color: black;\n\t}\n\tkol-input > label {\n\t\torder: 1;\n\t\tmargin-bottom: 0.25em;\n\t}\n\tkol-input > label > span {\n\t\tcolor: black;\n\t\tfont-size: 0.875rem;\n\t\tline-height: 1.5rem;\n\t}\n\tkol-input > div.input {\n\t\tbackground-color: white;\n\t\tdisplay: block;\n\t\torder: 2;\n\t}\n\tkol-input > kol-alert.error {\n\t\tmargin-top: 0.25em;\n\t\torder: 3;\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tfont-family: var(--font-family);\n\t\tbackground-color: transparent;\n\t\tbox-sizing: border-box;\n\t\tfont-size: 1rem;\n\t\tdisplay: inline-flex;\n\t\tline-height: 1.5em;\n\t\tcolor: black;\n\t\tborder-color: var(--color-grau-dunkel);\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\tpadding: 0.5em 0.75em;\n\t\toverflow: hidden;\n\t\twidth: 100%;\n\t}\n\tinput:not([type="range"]),\n\tselect:not([multiple]) {\n\t\theight: 2.75em;\n\t}\n\ttextarea {\n\t\tdisplay: inherit;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grau-dunkel);\n\t}\n\tinput:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {\n\t\tcursor: not-allowed;\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\t.icons {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\theight: 0;\n\t}\n\t.icons > * {\n\t\tmargin: 0.75em;\n\t}\n\t.icon-left input,\n\t.icon-left select {\n\t\tpadding-left: 2em;\n\t}\n\t.icon-right input,\n\t.icon-right select {\n\t\tpadding-right: 2em;\n\t}\n\tkol-button-wc {\n\t\tposition: relative;\n\t\tfloat: right;\n\t\tz-index: 1000;\n\t\tmargin-top: -33px;\n\t}\n\tkol-button-wc button {\n\t\tborder: 1px solid var(--color-grau-dunkel);\n\t\tbox-sizing: border-box;\n\t\tbackground-color: transparent;\n\t\tcursor: pointer;\n\t}\n\t.icon-right kol-button-wc {\n\t\tmargin-right: 2.5em;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\tselect[multiple],\n\ttextarea {\n\t\toverflow: auto;\n\t}\n\ttextarea {\n\t\tdisplay: block;\n\t}\n\tselect option {\n\t\tmargin: 1px 0;\n\t\tpadding: 0.5em;\n\t\tcursor: pointer;\n\t}\n\tselect option:disabled {\n\t\tcursor: not-allowed;\n\t}\n\toption:active:not(:disabled),\n\toption:checked:not(:disabled),\n\toption:focus:not(:disabled),\n\toption:hover:not(:disabled) {\n\t\tcolor: white;\n\t}',"KOL-INPUT-FILE":'kol-input {\n\t\tdisplay: grid;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t}\n\tinput:focus,\n\tinput:hover,\n\tselect:focus,\n\tselect:hover,\n\ttextarea:focus,\n\ttextarea:hover {\n\t\tborder-color: black;\n\t}\n\tkol-input > label {\n\t\torder: 1;\n\t\tmargin-bottom: 0.25em;\n\t}\n\tkol-input > label > span {\n\t\tcolor: black;\n\t\tfont-size: 0.875rem;\n\t\tline-height: 1.5rem;\n\t}\n\tkol-input > div.input {\n\t\tbackground-color: white;\n\t\tdisplay: block;\n\t\torder: 2;\n\t}\n\tkol-input > kol-alert.error {\n\t\tmargin-top: 0.25em;\n\t\torder: 3;\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tfont-family: var(--font-family);\n\t\tbackground-color: transparent;\n\t\tbox-sizing: border-box;\n\t\tfont-size: 1rem;\n\t\tdisplay: inline-flex;\n\t\tline-height: 1.5em;\n\t\tcolor: black;\n\t\tborder-color: var(--color-grau-dunkel);\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\tpadding: 0.5em 0.75em;\n\t\toverflow: hidden;\n\t\twidth: 100%;\n\t}\n\tinput:not([type="range"]),\n\tselect:not([multiple]) {\n\t\theight: 2.75em;\n\t}\n\ttextarea {\n\t\tdisplay: inherit;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grau-dunkel);\n\t}\n\tinput:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {\n\t\tcursor: not-allowed;\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\t.icons {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\theight: 0;\n\t}\n\t.icons > * {\n\t\tmargin: 0.75em;\n\t}\n\t.icon-left input,\n\t.icon-left select {\n\t\tpadding-left: 2em;\n\t}\n\t.icon-right input,\n\t.icon-right select {\n\t\tpadding-right: 2em;\n\t}\n\tkol-button-wc {\n\t\tposition: relative;\n\t\tfloat: right;\n\t\tz-index: 1000;\n\t\tmargin-top: -33px;\n\t}\n\tkol-button-wc button {\n\t\tborder: 1px solid var(--color-grau-dunkel);\n\t\tbox-sizing: border-box;\n\t\tbackground-color: transparent;\n\t\tcursor: pointer;\n\t}\n\t.icon-right kol-button-wc {\n\t\tmargin-right: 2.5em;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\tselect[multiple],\n\ttextarea {\n\t\toverflow: auto;\n\t}\n\ttextarea {\n\t\tdisplay: block;\n\t}\n\tselect option {\n\t\tmargin: 1px 0;\n\t\tpadding: 0.5em;\n\t\tcursor: pointer;\n\t}\n\tselect option:disabled {\n\t\tcursor: not-allowed;\n\t}\n\toption:active:not(:disabled),\n\toption:checked:not(:disabled),\n\toption:focus:not(:disabled),\n\toption:hover:not(:disabled) {\n\t\tcolor: white;\n\t}',"KOL-TEXTAREA":'kol-input {\n\t\tgap: 0.4em;\n\t}\n\tkol-input .error {\n\t\torder: 3;\n\t}\n\tkol-input label {\n\t\tfont-weight: 700;\n\t\torder: 1;\n\t}\n\tkol-input .input {\n\t\torder: 2;\n\t}\n\tkol-input .hint {\n\t\torder: 4;\n\t\tfont-size: 0.875em;\n\t\tfont-style: italic;\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tborder: none;\n\t}\n\t.input {\n\t\tcolor: var(--colorText);\n\t\tborder: var(--formBorder);\n\t\tfont-size: var(--textFontSize);\n\t\tline-height: 1.5;\n\t\tpadding: 0 0.5em;\n\t\twidth: 100%;\n\t}\n\t.input > kol-icon {\n\t\twidth: 1.5em;\n\t}\n\t.input > input:first-child {\n\t\tpadding-left: 0.375em;\n\t}\n\t.input > input:last-child {\n\t\tpadding-right: 0.375em;\n\t}\n\t.input:hover {\n\t\tborder-color: var(--color-gruen-hell);\n\t}\n\tinput:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {\n\t\tcursor: not-allowed;\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\tkol-input.error {\n\t\tborder-left: 3px solid var(--color-rot);\n\t\tpadding-left: 1em;\n\t}\n\tkol-input.error .input:focus-within {\n\t\toutline-color: var(--color-rot) !important;\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-rot);\n\t\tfont-weight: 700;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\tlabel {\n\t\tcolor: var(--color-text);\n\t\tline-height: 1.5;\n\t}\n\t.input {\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}',"KOL-ALERT":':host > div {\n\t\tbackground-color: white;\n\t\tborder-width: 2px;\n\t\tborder-style: solid;\n\t\tborder-radius: 0.25rem;\n\t\tdisplay: flex;\n\t\toverflow: unset;\n\t}\n\t:host > div.default {\n\t\tborder-color: var(--color-grau-dunkel);\n\t}\n\t:host > div.default > .icon {\n\t\tbackground-color: var(--color-grau-dunkel);\n\t}\n\t:host > div.error {\n\t\tborder-color: var(--color-rot);\n\t}\n\t:host > div.error > .icon {\n\t\tbackground-color: var(--color-rot);\n\t}\n\t:host > div.info {\n\t\tborder-color: var(--color-blau);\n\t}\n\t:host > div.info > .icon {\n\t\tbackground-color: var(--color-blau);\n\t}\n\t:host > div.success {\n\t\tborder-color: var(--color-gruen);\n\t}\n\t:host > div.success > .icon {\n\t\tbackground-color: var(--color-gruen);\n\t}\n\t:host > div.warning {\n\t\tborder-color: var(--color-gelb);\n\t}\n\t:host > div.warning > .icon {\n\t\tbackground-color: var(--color-gelb);\n\t}\n\t:host > div.msg > .icon {\n\t\tcolor: white;\n\t\tpadding: 0.5em;\n\t\talign-items: center;\n\t\tdisplay: inline-flex;\n\t}\n\t:host > div.msg.warning > .icon {\n\t\tcolor: black;\n\t}\n\t:host > div.card.default .heading .icon {\n\t\tbackground-color: var(--color-grau-dunkel);\n\t}\n\t:host > div.card.error .heading .icon {\n\t\tbackground-color: var(--color-rot);\n\t}\n\t:host > div.card.info .heading .icon {\n\t\tbackground-color: var(--color-blau);\n\t}\n\t:host > div.card.success .heading .icon {\n\t\tbackground-color: var(--color-gruen);\n\t}\n\t:host > div.card.warning .heading .icon {\n\t\tbackground-color: var(--color-gelb);\n\t}\n\t:host > div.card .heading .icon {\n\t\tcolor: white;\n\t\tpadding: 0.5em;\n\t\talign-items: center;\n\t\tdisplay: inline-flex;\n\t}\n\t:host > div.card.warning .heading .icon {\n\t\tcolor: black;\n\t}\n\t:host > div kol-heading-wc .icon {\n\t\tmargin-right: 0.5em;\n\t}\n\t:host > div.card .heading .icon {\n\t\tborder-radius: 0 0 0.25rem 0;\n\t}\n\t:host > div.msg > div {\n\t\tpadding: 0.25em;\n\t}\n\t:host > div.msg > div > .heading {\n\t\tpadding: 0.25em;\n\t\tdisplay: inline-block;\n\t}\n\t:host > div .content {\n\t\tpadding: 0.25em;\n\t}\n\t:host > div > div {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr auto;\n\t}\n\t:host > div > div > .content {\n\t\tgrid-row: 2;\n\t\tgrid-column: 1;\n\t}\n\t:host > div > div > .close {\n\t\tgrid-row: 1 / span 2;\n\t\tdisplay: flex;\n\t}\n\t:host > div.msg > div > .close > * {\n\t\tmargin: auto;\n\t}\n\t:host > div.msg.default .close .icon {\n\t\tcolor: var(--color-grau-dunkel);\n\t}\n\t:host > div.msg.error .close .icon {\n\t\tcolor: var(--color-rot);\n\t}\n\t:host > div.msg.info .close .icon {\n\t\tcolor: var(--color-blau);\n\t}\n\t:host > div.msg.success .close .icon {\n\t\tcolor: var(--color-gruen);\n\t}\n\t:host > div.msg.warning .close .icon {\n\t\tcolor: var(--color-gelb);\n\t}\n\t:host > div.card > div > .heading {\n\t\twidth: 100%;\n\t}\n\t.close > button {\n\t\tmin-width: 44px;\n\t\tmin-height: 44px;\n\t\tdisplay: grid;\n\t\tgap: 0.25em;\n\t\tline-height: 1.5rem;\n\t\tfont-family: var(--font-family);\n\t\tfont-weight: 700;\n\t\tcursor: pointer;\n\t\tborder-radius: 1.5em;\n\t\tborder-style: solid;\n\t\tborder-width: 2px;\n\t\tfont-size: 1rem;\n\t\talign-items: center;\n\t\tpadding: 8px 14px;\n\t\tjustify-content: center;\n\t\tfont-style: normal;\n\t\ttext-align: center;\n\t\ttext-transform: uppercase;\n\t\twidth: inherit;\n\t\ttransition-duration: 0.5s;\n\t\ttransition-property: background-color, color, border-color;\n\t\tbackground-color: rgba(0, 0, 0, 0);\n\t\tborder-color: rgba(0, 0, 0, 0);\n\t}\n\t.close > button.icon-only {\n\t\tpadding: 8px;\n\t}\n\t.close > button.icon-only kol-icon {\n\t\tdisplay: inline-block;\n\t\twidth: 1.5em;\n\t\theight: 1.5em;\n\t}\n\t.close > button:active {\n\t\tbox-shadow: none;\n\t\toutline: none;\n\t}\n\t.close kol-icon::part(icon)::before {\n\t\tcontent: "\\f00d";\n\t}',"KOL-HEADING":".headline {\n\t\tmargin-top: 0;\n\t}","KOL-BADGE":":host {\n\t\tdisplay: inline-block;\n\t}\n\tkol-span-wc {\n\t\talign-items: center;\n\t\tborder-radius: 0.3125rem;\n\t\tdisplay: grid;\n\t\tgap: 0.5rem;\n\t\tline-height: 1.25rem;\n\t\tpadding: 0.25rem 0.75rem;\n\t}\n\tkol-span-wc span {\n\t\tdisplay: flex;\n\t\tgap: 0.25rem;\n\t}","KOL-BUTTON-GROUP":"div {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tgap: 0.5em;\n\t}","KOL-INDENTED-TEXT":":host > div {\n\t\twidth: 100%;\n\t\tpadding: 15px;\n\t\tbackground: var(--color-grau-weiss);\n\t\tbox-shadow: -4px 0px 0px var(--color-gruen);\n\t}","KOL-LINK":":is(a, button) {\n\t\t/* color: var(--color-midnight); */\n\t\tcolor: var(--external-link-color, var(--color-gruen));\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\tpadding: var(--external-link-padding, 0);\n\t\ttext-decoration-line: none;\n\t}\n\t:is(a, button):focus {\n\t\t/* outline: var(--color-focus) solid 2px; */\n\t\toutline: none;\n\t}\n\t:is(a, button):hover {\n\t\t/* text-decoration-thickness: 0.25em; */\n\t\tbox-shadow: inset 0 -1px 0 0 var(--external-link-color, var(--color-gruen));\n\t}\n\t.hidden {\n\t\tdisplay: none;\n\t\tvisibility: hidden;\n\t} /*************************/ /* kol-link-wc {display: inline-block;} */ /* kol-icon {padding: 0 0.25rem;} */\n\t.hidden {\n\t\tdisplay: none;\n\t\tvisibility: hidden;\n\t}\n\t.skip {\n\t\tleft: -99999px;\n\t\toverflow: hidden;\n\t\tposition: absolute;\n\t\tz-index: 9999999;\n\t\tline-height: 1em;\n\t}\n\t.skip:focus {\n\t\tbackground: white;\n\t\tleft: unset;\n\t\tposition: unset;\n\t}\n\t.icon-only {\n\t\tpadding-bottom: 0.2rem;\n\t}\n\t:is(a) kol-span-wc > span {\n\t\tgap: var(--gapSmallest);\n\t}","KOL-DETAILS":"details {\n\t\tdisplay: grid;\n\t\twidth: 100%;\n\t}\n\tsummary {\n\t\tcursor: pointer;\n\t\tdisplay: flow-root;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\tsummary span {\n\t\tmargin-left: 0.25rem;\n\t\ttext-decoration: underline;\n\t}\n\tsummary span:hover {\n\t\ttext-decoration-thickness: 0.25em;\n\t}\n\tdetails > kol-indented-text {\n\t\tmargin: 0.25em 0 0 0.6em;\n\t}","KOL-SPIN":".spin {\n\t\tdisplay: inline-block;\n\t\theight: 1rem;\n\t\tposition: relative;\n\t\twidth: 3rem;\n\t}\n\t.spin span {\n\t\tanimation-timing-function: cubic-bezier(0, 1, 1, 0);\n\t\tborder: 0.1rem solid rgb(255, 255, 255);\n\t\tborder-radius: 50%;\n\t\theight: 0.8rem;\n\t\twidth: 0.8rem;\n\t\ttop: 0.1rem;\n\t\tposition: absolute;\n\t}\n\t.spin span:nth-child(1) {\n\t\tbackground-color: #fc0;\n\t\tz-index: 0;\n\t\tanimation: 2s ease 0s infinite normal none running spin1;\n\t\tleft: 0.1rem;\n\t}\n\t.spin span:nth-child(2) {\n\t\tbackground-color: #f00;\n\t\tz-index: 1;\n\t\tanimation: 2s ease 0s infinite normal none running spin2;\n\t\tleft: 0.1rem;\n\t}\n\t.spin span:nth-child(3) {\n\t\tbackground-color: #000;\n\t\tz-index: 1;\n\t\tanimation: 2s ease 0s infinite normal none running spin2;\n\t\tleft: 1.1rem;\n\t}\n\t.spin span:nth-child(4) {\n\t\tbackground-color: #666;\n\t\tz-index: 0;\n\t\tanimation: 2s ease 0s infinite normal none running spin3;\n\t\tleft: 2.1rem;\n\t}\n\t@keyframes spin1 {\n\t\t0% {\n\t\ttransform: scale(0);\n\t\t}\n\t\t100% {\n\t\ttransform: scale(1);\n\t\t}\n\t}\n\t@keyframes spin2 {\n\t\t0% {\n\t\ttransform: translate(0px, 0px);\n\t\t}\n\t\t100% {\n\t\ttransform: translate(1rem, 0px);\n\t\t}\n\t}\n\t@keyframes spin3 {\n\t\t0% {\n\t\ttransform: scale(1);\n\t\t}\n\t\t100% {\n\t\ttransform: scale(0);\n\t\t}\n\t}","KOL-PROGRESS":":host progress,\n\t:host span {\n\t\tdisplay: block;\n\t\theight: 0px;\n\t\toverflow: hidden;\n\t\twidth: 0px;\n\t}\n\tsvg line:first-child,\n\tsvg circle:first-child {\n\t\tfill: transparent;\n\t\tstroke: var(--color-ice);\n\t}\n\tsvg line:last-child,\n\tsvg circle:last-child {\n\t\tstroke: var(--color-midnight);\n\t\tfill: transparent;\n\t}\n\tprogress {\n\t\tdisplay: none;\n\t}","KOL-SELECT":':host {\n\t\t--color: var(--colorText); /* --color: blue; */\n\t}\n\tkol-input {\n\t\tcolor: var(--color);\n\t\tfont-size: var(--textFontSize);\n\t\tgap: var(--gapSmallest);\n\t}\n\tlabel {\n\t\tfont-weight: 700;\n\t\torder: 1;\n\t}\n\t.input {\n\t\torder: 2;\n\t}\n\tkol-alert.error {\n\t\tcolor: var(--colorSignalError);\n\t\torder: 3;\n\t}\n\tselect {\n\t\tbackground-color: var(--colorLight);\n\t\tline-height: 1.5;\n\t\tcolor: var(--color);\n\t\tborder: var(--formBorder);\n\t\tpadding: 0.5em 0.75em;\n\t}\n\tselect:hover,\n\tselect:focus {\n\t\tborder-color: var(--colorPrimaryActive);\n\t}\n\tselect:disabled {\n\t\tcursor: not-allowed;\n\t}\n\tselect[multiple] {\n\t\toverflow: auto;\n\t}\n\tselect option {\n\t\tmargin: 1px 0;\n\t\tpadding: 0.5em;\n\t\tcursor: pointer;\n\t}\n\tselect option:disabled {\n\t\tcursor: not-allowed;\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t} /* kol-input.error select:invalid { */\n\tkol-input.error select {\n\t\tborder-color: var(--colorSignalError);\n\t} /* option:active:not(:disabled),option:focus:not(:disabled),option:hover:not(:disabled) {color: white;} */',"KOL-INPUT-COLOR":'kol-input {\n\t\tdisplay: grid;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t}\n\tinput:focus,\n\tinput:hover,\n\tselect:focus,\n\tselect:hover,\n\ttextarea:focus,\n\ttextarea:hover {\n\t\tborder-color: black;\n\t}\n\tkol-input > label {\n\t\torder: 1;\n\t\tmargin-bottom: 0.25em;\n\t}\n\tkol-input > label > span {\n\t\tcolor: black;\n\t\tfont-size: 0.875rem;\n\t\tline-height: 1.5rem;\n\t}\n\tkol-input > div.input {\n\t\tbackground-color: white;\n\t\tdisplay: block;\n\t\torder: 2;\n\t}\n\tkol-input > kol-alert.error {\n\t\tmargin-top: 0.25em;\n\t\torder: 3;\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tfont-family: var(--font-family);\n\t\tbackground-color: transparent;\n\t\tbox-sizing: border-box;\n\t\tfont-size: 1rem;\n\t\tdisplay: inline-flex;\n\t\tline-height: 1.5em;\n\t\tcolor: black;\n\t\tborder-color: var(--color-grau-dunkel);\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\tpadding: 0.5em 0.75em;\n\t\toverflow: hidden;\n\t\twidth: 100%;\n\t}\n\tinput:not([type="range"]),\n\tselect:not([multiple]) {\n\t\theight: 2.75em;\n\t}\n\ttextarea {\n\t\tdisplay: inherit;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grau-dunkel);\n\t}\n\tinput:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {\n\t\tcursor: not-allowed;\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\t.icons {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\theight: 0;\n\t}\n\t.icons > * {\n\t\tmargin: 0.75em;\n\t}\n\t.icon-left input,\n\t.icon-left select {\n\t\tpadding-left: 2em;\n\t}\n\t.icon-right input,\n\t.icon-right select {\n\t\tpadding-right: 2em;\n\t}\n\tkol-button-wc {\n\t\tposition: relative;\n\t\tfloat: right;\n\t\tz-index: 1000;\n\t\tmargin-top: -33px;\n\t}\n\tkol-button-wc button {\n\t\tborder: 1px solid var(--color-grau-dunkel);\n\t\tbox-sizing: border-box;\n\t\tbackground-color: transparent;\n\t\tcursor: pointer;\n\t}\n\t.icon-right kol-button-wc {\n\t\tmargin-right: 2.5em;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\tselect[multiple],\n\ttextarea {\n\t\toverflow: auto;\n\t}\n\ttextarea {\n\t\tdisplay: block;\n\t}\n\tselect option {\n\t\tmargin: 1px 0;\n\t\tpadding: 0.5em;\n\t\tcursor: pointer;\n\t}\n\tselect option:disabled {\n\t\tcursor: not-allowed;\n\t}\n\toption:active:not(:disabled),\n\toption:checked:not(:disabled),\n\toption:focus:not(:disabled),\n\toption:hover:not(:disabled) {\n\t\tcolor: white;\n\t}',"KOL-ACCORDION":':host > div {\n\t\tfont-family: var(--font-family);\n\t\tpadding: 0 0.5rem 0 0;\n\t}\n\t:host > div > kol-heading-wc {\n\t\tfont-weight: 700;\n\t\tfont-size: 1.25rem;\n\t\tline-height: 1.75rem;\n\t}\n\t:host > div > kol-heading-wc button {\n\t\tcursor: pointer;\n\t\twidth: 100%;\n\t\tmargin: 0;\n\t\tdisplay: flex;\n\t\tgap: 0.5em;\n\t\tborder: 0;\n\t\talign-items: center;\n\t\toverflow: hidden;\n\t\tfont-size: inherit;\n\t\tline-height: 1.5em;\n\t\tbackground-color: transparent;\n\t\tpadding: 0.5em;\n\t\tpadding-left: 0;\n\t}\n\t:host > div[part*="open"] > kol-heading-wc button {\n\t\tpadding: 0.5em;\n\t\tpadding-left: 0;\n\t}\n\t:host > div > kol-heading-wc button kol-icon::part(icon) {\n\t\tfont-family: "Font Awesome 6 Free";\n\t\tfont-weight: 900;\n\t\tcolor: var(--color-midnight);\n\t}\n\t.accordion > kol-heading-wc button kol-icon::part(icon)::before {\n\t\tcontent: "\\2b";\n\t}\n\t.accordion.open > kol-heading-wc button kol-icon::part(icon)::before {\n\t\tcontent: "\\f068";\n\t}\n\t.accordion {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tdisplay: grid;\n\t}\n\t.accordion[part*="open"] div[part="header"] {\n\t\tpadding-left: 2em;\n\t}\n\t.accordion[part*="open"] div[part="content"] {\n\t\tpadding-top: 1rem;\n\t}\n\tbutton {\n\t\tfont-weight: inherit;\n\t\tfont-size: inherit;\n\t\tline-height: inherit;\n\t}\n\t.accordion {\n\t\tbackground: var(--color-white);\n\t}\n\t.accordion[part*="open"] {\n\t\tpadding-bottom: 1em;\n\t} /* .accordion > [part="header"] {height: 0;} */\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6 {\n\t\tmargin: 0;\n\t}',"KOL-TABLE":':host * {\n\t\thyphens: var(--hyphens);\n\t\tline-height: var(--textFontLineHeight);\n\t}\n\t:host > div:first-child {\n\t\toverflow-x: auto;\n\t\toverflow-y: hidden;\n\t}\n\ttable {\n\t\tborder-collapse: collapse;\n\t}\n\tcaption {\n\t\theight: auto;\n\t\ttext-align: left;\n\t} /* visuell verstecken */\n\tcaption {\n\t\tclip: rect(1px, 1px, 1px, 1px);\n\t\tclip-path: inset(50%);\n\t\theight: 1px;\n\t\twidth: 1px;\n\t\tmargin: -1px;\n\t\toverflow: hidden;\n\t\tpadding: 0;\n\t\tposition: absolute;\n\t}\n\ttable,\n\ttr,\n\tth,\n\ttd {\n\t\tborder: 0 solid var(--color-weiss);\n\t}\n\ttr {\n\t\tborder-top-width: 2px;\n\t}\n\tth {\n\t\tbackground-color: var(--color-gruen);\n\t\tcolor: var(--color-weiss);\n\t\tfont-weight: normal;\n\t}\n\ttbody > tr:nth-child(odd) {\n\t\tbackground-color: #f2f2f2;\n\t}\n\ttbody > tr:hover {\n\t\tbackground-color: var(--color-gruen-dunkel);\n\t\tcolor: var(--color-weiss);\n\t}\n\tth,\n\ttd {\n\t\tborder-right-width: 2px;\n\t\tpadding: 0.25em 0.5em;\n\t}\n\tth > div {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr auto;\n\t\talign-items: center;\n\t\tgap: 0.25em;\n\t}\n\t.pagination {\n\t\tpadding: 0.5em;\n\t\tfont-size: var(--textFontSize);\n\t\tgap: 1rem;\n\t}\n\tth kol-button button {\n\t\tpadding: 0.5rem;\n\t} /* default: [aria-sort="none"] */\n\t[data-sort] kol-button::part(icon)::before {\n\t\tfont-family: "Font Awesome 6 Free";\n\t\tfont-weight: 900;\n\t\tcontent: "\\f0dc";\n\t}\n\t[data-sort="sort-ASC"] kol-button::part(icon)::before {\n\t\tcontent: "\\f0de";\n\t}\n\t[data-sort="sort-DESC"] kol-button::part(icon)::before {\n\t\tcontent: "\\f0dd";\n\t}',"KOL-NAV":'ul {\n\t\tlist-style: none;\n\t}\n\ta {\n\t\tcolor: var(--colorText);\n\t\tdisplay: block;\n\t\tpadding: 0.3rem 0.5rem;\n\t\ttext-decoration: none;\n\t\ttransition-duration: 0.5s;\n\t\ttransition-property: background-color, color, border-color;\n\t}\n\ta:hover {\n\t\tbackground-color: var(--colorPrimarySuccess);\n\t\tcolor: var(--colorLight);\n\t}\n\ta:focus,\n\tbutton:focus {\n\t\toutline: var(--focusOutline);\n\t\toutline-offset: 2px;\n\t\ttransition: outline-offset 0.2s linear;\n\t}\n\t.list[data-deep="0"] {\n\t\tfont-family: var(--textFontSerif);\n\t}\n\t.horizontal {\n\t\tgap: var(--gap);\n\t}',"KOL-CARD":":host > div {\n\t\t--card-padding: var(--gap);\n\t\tborder-color: var(--color-gruen);\n\t\tborder-style: solid;\n\t\tborder-width: 1px;\n\t\tborder-radius: 0.25rem;\n\t\tbox-shadow: 0px 0px 1.875rem 0px rgba(0, 0, 0, 0.3);\n\t\tdisplay: grid;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tbackground-color: white;\n\t\tgrid-template-rows: min-content 2fr min-content;\n\t\tpadding-bottom: var(--gapLarge);\n\t}\n\t:host kol-heading-wc {\n\t\tdisplay: inline-flex;\n\t\tfont-style: normal;\n\t}\n\t:host kol-heading-wc h1,\n\t:host kol-heading-wc h2 {\n\t\tfont-family: var(--textFontSerif);\n\t\tfont-weight: var(--textFontWeight);\n\t\tmargin: 0;\n\t}\n\t:host kol-heading-wc h1 {\n\t\tfont-size: var(--headline1FontSize);\n\t\tline-height: var(--headline1LineHeight);\n\t}\n\t:host kol-heading-wc h2 {\n\t\tfont-size: var(--headline2FontSize);\n\t\tline-height: var(--headline2LineHeight);\n\t}\n\t:host kol-heading-wc h3 {\n\t\tfont-size: var(--headline3FontSize);\n\t\tline-height: var(--headline3LineHeight);\n\t}\n\t:host kol-heading-wc h4 {\n\t\tfont-size: var(--headline4FontSize);\n\t\tline-height: var(--headline4LineHeight);\n\t}\n\t:host div.header {\n\t\tborder-bottom: 1px solid var(--color-gruen);\n\t\tpadding: var(--card-padding);\n\t\talign-items: flex-start;\n\t\tdisplay: flex;\n\t\tgap: 0 var(--gapSmall);\n\t\tjustify-content: space-between;\n\t}\n\t:host div.content {\n\t\tpadding: var(--card-padding) var(--card-padding) 0;\n\t}\n\t:host div.footer {\n\t\tmargin-top: 3rem;\n\t\tpadding: 0 var(--card-padding);\n\t}","KOL-INPUT-CHECKBOX":':host {\n\t\t--border-width: 1px;\n\t\t--spacing: 0.25rem;\n\t}\n\tlabel {\n\t\tcursor: pointer;\n\t}\n\tinput {\n\t\tcolor: black;\n\t\tborder-color: var(--color-grau-dunkel);\n\t\tborder-width: var(--border-width);\n\t\tborder-style: solid;\n\t\tline-height: 24px;\n\t\tfont-size: 16px;\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\tinput:hover {\n\t\tborder-color: var(--color-blau);\n\t} /* NEU */\n\tkol-input {\n\t\tdisplay: grid;\n\t\talign-items: center;\n\t\tjustify-items: left;\n\t\twidth: 100%;\n\t}\n\tkol-input.checkbox {\n\t\tgrid-template-columns: calc(6 * var(--spacing)) auto;\n\t}\n\tkol-input.switch {\n\t\tgrid-template-columns: calc(13 * var(--spacing)) auto;\n\t}\n\tkol-input > div.input {\n\t\tdisplay: inline-flex;\n\t\torder: 1;\n\t}\n\tkol-input > div.input input {\n\t\tmargin: 0px;\n\t}\n\tkol-input > label {\n\t\torder: 2;\n\t\tpadding-left: calc(2 * var(--spacing));\n\t}\n\tkol-input > kol-alert.error {\n\t\torder: 3;\n\t\tpadding-top: 0.25em;\n\t\tgrid-column: span 2 / auto;\n\t} /* CHECKBOX */\n\tinput[type="checkbox"] {\n\t\tappearance: none;\n\t\tbackground-color: white;\n\t\tcursor: pointer;\n\t\ttransition: 0.5s;\n\t}\n\tinput[type="checkbox"].kol-disabled:before {\n\t\tcursor: not-allowed;\n\t}\n\tinput[type="checkbox"]:before {\n\t\tcontent: "";\n\t\tcursor: pointer;\n\t}\n\tinput[type="checkbox"]:checked {\n\t\tbackground-color: var(--color-blau);\n\t\tborder-color: var(--color-blau);\n\t}\n\t.checkbox input[type="checkbox"] {\n\t\theight: calc(6 * var(--spacing));\n\t\tmin-width: calc(6 * var(--spacing));\n\t\twidth: calc(6 * var(--spacing));\n\t}\n\t.checkbox input[type="checkbox"]:before {\n\t\tbackground-color: transparent;\n\t\tdisplay: block;\n\t\theight: calc(6 * var(--spacing));\n\t\tposition: relative;\n\t\twidth: calc(6 * var(--spacing));\n\t}\n\t.checkbox input[type="checkbox"]:checked:before {\n\t\tborder-right-width: 3px;\n\t\tborder-bottom-width: 3px;\n\t\tleft: calc(1.5 * var(--spacing) - var(--border-width));\n\t\ttop: calc(2.85 * var(--spacing) - var(--border-width));\n\t\ttransform: rotate(40deg) translate(-50%, -50%);\n\t\tbackground-color: transparent;\n\t\tborder-width: 0px 3px 3px 0px;\n\t\tborder-color: white;\n\t\tborder-style: solid;\n\t\theight: calc(3 * var(--spacing));\n\t\twidth: calc(1.5 * var(--spacing));\n\t}\n\t.checkbox input[type="checkbox"]:indeterminate:before {\n\t\tbackground-color: var(--color-grau-dunkel);\n\t\theight: 0.375rem;\n\t\ttop: 0.5rem;\n\t\tleft: 0.2rem;\n\t\twidth: calc(4 * var(--spacing));\n\t}\n\t.switch input[type="checkbox"] {\n\t\tmin-width: 3.2em;\n\t\twidth: 3.2em;\n\t\theight: 1.7em;\n\t\tdisplay: inline-block;\n\t\tposition: relative;\n\t}\n\t.switch input[type="checkbox"]:before {\n\t\t-webkit-transition: 0.5s;\n\t\t-moz-transition: 0.5s;\n\t\t-ms-transition: 0.5s;\n\t\ttransition: 0.5;\n\t\twidth: 1.2em;\n\t\theight: 1.2em;\n\t\tleft: calc(0.25em - var(--border-width));\n\t\ttop: calc(0.25em - var(--border-width));\n\t\tbackground-color: black;\n\t\tposition: absolute;\n\t}\n\t.switch input[type="checkbox"]:checked:before {\n\t\t-webkit-transform: translateX(1.5em);\n\t\t-moz-transform: translateX(1.5em);\n\t\t-ms-transform: translateX(1.5em);\n\t\ttransform: translateX(1.5em);\n\t\tbackground-color: white;\n\t}\n\t.switch input[type="checkbox"]:indeterminate:before {\n\t\t-webkit-transform: translateX(0.75em);\n\t\t-moz-transform: translateX(0.75em);\n\t\t-ms-transform: translateX(0.75em);\n\t\ttransform: translateX(0.75em);\n\t\tbackground-color: var(--color-blau);\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}',"KOL-INPUT-RADIO":':host {\n\t\t--border-width: 1px;\n\t\t--input-color: var(--color-gruen-dunkel);\n\t\t--input-inner-position: calc(var(--spacing) + var(--border-width));\n\t\t--input-inner-size: calc(var(--spacing) * 3);\n\t\t--input-outer-size: calc(var(--spacing) * 6);\n\t}\n\tdiv[slot="input"] {\n\t\talign-items: center;\n\t\tdisplay: flex;\n\t\tgap: calc(var(--spacing) * 2);\n\t}\n\tfieldset {\n\t\tborder: 0;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\tfieldset.horizontal {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\talign-items: center;\n\t\tgap: 0.5rem 32px;\n\t}\n\tinput {\n\t\tcursor: pointer;\n\t\tdisplay: grid;\n\t\talign-self: center;\n\t\tborder: var(--border-width) solid var(--input-color);\n\t\tappearance: none;\n\t\tborder-radius: 100%;\n\t\theight: var(--input-outer-size);\n\t\twidth: var(--input-outer-size);\n\t\tmargin: 0;\n\t}\n\tinput:hover {\n\t\t--border-width: 2px;\n\t}\n\tinput:focus:hover {\n\t\tbox-shadow: none;\n\t}\n\tinput:disabled {\n\t\t--input-color: var(--color-disabled);\n\t}\n\tinput:disabled:hover {\n\t\t--border-width: 1px;\n\t}\n\tinput:disabled + label {\n\t\tcolor: var(--color-disabled);\n\t}\n\tinput::before {\n\t\tcontent: "";\n\t\tcursor: pointer; /* left: var(--input-inner-position);top: var(--input-inner-position); */\n\t\tposition: relative;\n\t\tborder-radius: 100%;\n\t\tdisplay: inline-block;\n\t\theight: var(--input-inner-size);\n\t\twidth: var(--input-inner-size);\n\t}\n\tinput:hover::before {\n\t\t--input-inner-position: var(--spacing);\n\t}\n\tinput:checked::before {\n\t\tbackground-color: var(--input-color);\n\t}\n\tkol-input {\n\t\tdisplay: grid;\n\t}\n\tkol-input {\n\t\tmargin-bottom: 1rem;\n\t}\n\tkol-input.error input {\n\t\tborder-color: var(--color-rot);\n\t\tpadding-left: 1em;\n\t}\n\tkol-input.error input:focus,\n\tkol-input.error select:focus,\n\tkol-input.error textarea:focus {\n\t\toutline: var(--color-focus) solid 2px !important;\n\t}\n\tkol-input kol-alert.error {\n\t\tmargin-bottom: 0.4em;\n\t\torder: 1;\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-rot);\n\t\tfont-weight: 700;\n\t}\n\tlabel {\n\t\tcolor: var(--color-text);\n\t\tcursor: pointer;\n\t\tdisplay: grid;\n\t\tfont-size: var(--text-size); /* order: 2; */\n\t\tfont-weight: 700;\n\t}\n\tlegend {\n\t\tfont-size: var(--text-size);\n\t\tmargin-bottom: var(--text-size);\n\t}\n\t.icons {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\theight: 0;\n\t}\n\t.icons > * {\n\t\tmargin: 0.75em;\n\t}\n\t.icon-left input,\n\t.icon-left select {\n\t\tpadding-left: 2em;\n\t}\n\t.icon-right input,\n\t.icon-right select {\n\t\tpadding-right: 2em;\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}',"KOL-TOAST":":host > div {\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 0;\n\t\tz-index: 200;\n\t}\n\t:host > div > kol-alert {\n\t\tdisplay: block;\n\t\tmargin: auto;\n\t\tpadding: 1rem;\n\t\tmax-width: 750px;\n\t}\n\t:host > div > kol-button-wc {\n\t\ttop: 0;\n\t\tposition: relative;\n\t\tdisplay: block;\n\t\tmargin: auto;\n\t\twidth: 1em;\n\t}","KOL-TABS":'button:disabled {\n\t\topacity: 0.5;\n\t\tcursor: not-allowed;\n\t}\n\t:host {\n\t\tfont-family: var(--font-family);\n\t}\n\t:host > div {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t}\n\t:host kol-button-group-wc {\n\t\tdisplay: inline-block;\n\t\tborder-radius: 0.25rem 0.25rem 0 0;\n\t\tbackground-color: var(--kolibri-color-normal);\n\t}\n\t:host kol-button-group-wc > div {\n\t\tdisplay: inline-flex;\n\t}\n\t:host kol-button-group-wc > div + div {\n\t\tmargin-left: 0.25em;\n\t}\n\t:host > div > div {\n\t\tpadding: 0.25em;\n\t\tborder: 1px solid var(--kolibri-border-color);\n\t\tborder-radius: 0 0 0.25rem 0.25rem;\n\t}\n\tbutton {\n\t\tbox-sizing: border-box;\n\t\tfont-size: inherit;\n\t\tline-height: 1.25em;\n\t\tcursor: pointer;\n\t\tborder-width: 2px;\n\t\tbox-shadow: 0 0 0.25em gray;\n\t\tfont-family: var(--kolibri-font-family);\n\t\twidth: inherit;\n\t\tborder-radius: var(--kolibri-border-radius);\n\t\tborder-style: solid;\n\t\tpadding: calc(2 * var(--kolibri-spacing));\n\t\tdisplay: grid;\n\t\tgap: 0.25em;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\ttext-align: center;\n\t\ttransition-duration: 0.5s;\n\t\ttransition-property: background-color, color, border-color;\n\t}\n\tkol-button-wc[aria-selected="true"] button {\n\t\tborder-bottom-width: 0.25em !important;\n\t\tborder-bottom-style: solid;\n\t\tborder-bottom-color: var(--kolibri-color-accent) !important;\n\t}\n\tbutton > kol-span-wc span {\n\t\tdisplay: flex;\n\t\tgap: 0.25em;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t}\n\tbutton:disabled {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n\t}\n\tbutton.primary,\n\tbutton.primary:disabled:hover {\n\t\tbackground-color: var(--kolibri-color-primary);\n\t\tborder-color: var(--kolibri-color-primary);\n\t\tcolor: white;\n\t}\n\tbutton.primary:hover,\n\tbutton.primary:focus {\n\t\tcolor: var(--kolibri-color-primary);\n\t}\n\tbutton.secondary,\n\tbutton.secondary:disabled:hover {\n\t\tbackground-color: var(--kolibri-color-secondary);\n\t\tborder-color: var(--kolibri-color-secondary);\n\t\tcolor: white;\n\t}\n\tbutton.secondary:hover,\n\tbutton.secondary:focus {\n\t\tcolor: var(--kolibri-color-secondary);\n\t}\n\tbutton.normal,\n\tbutton.normal:disabled:hover {\n\t\tbackground-color: var(--kolibri-color-normal);\n\t\tborder-color: var(--kolibri-color-normal);\n\t\tcolor: white;\n\t}\n\tbutton.normal:hover,\n\tbutton.normal:focus {\n\t\tcolor: var(--kolibri-color-normal);\n\t}\n\tbutton.danger,\n\tbutton.danger:disabled:hover {\n\t\tbackground-color: var(--kolibri-color-danger);\n\t\tborder-color: var(--kolibri-color-danger);\n\t\tcolor: white;\n\t}\n\tbutton.danger:hover,\n\tbutton.danger:focus {\n\t\tcolor: var(--kolibri-color-danger);\n\t}\n\tbutton.ghost,\n\tbutton.ghost:disabled:hover {\n\t\tbackground-color: white;\n\t\tborder-color: var(--kolibri-color-ghost);\n\t\tcolor: var(--kolibri-color-ghost);\n\t}\n\tbutton.ghost:hover,\n\tbutton.ghost:focus {\n\t\tbackground-color: var(--kolibri-color-ghost);\n\t\tcolor: white;\n\t}\n\tbutton:hover,\n\tbutton:focus {\n\t\tbackground-color: white;\n\t\tbox-shadow: 0 0 0.25em black;\n\t}\n\tbutton:active {\n\t\toutline: 0 !important;\n\t\tbox-shadow: none !important;\n\t}\n\t.close-button {\n\t\tfont-size: 25%;\n\t\theight: fit-content;\n\t\twidth: 0;\n\t}\n\t.close-button button {\n\t\twidth: 1rem;\n\t\tposition: relative;\n\t\theight: 1rem;\n\t\tleft: -4.25em;\n\t\ttop: 0.25em;\n\t}\n\t:host > div {\n\t\tdisplay: grid;\n\t}\n\t:host > div.tabs-align-left {\n\t\tgrid-template-columns: auto 1fr;\n\t}\n\t:host > div.tabs-align-right {\n\t\tgrid-template-columns: 1fr auto;\n\t}\n\t:host > .tabs-align-left kol-button-group-wc,\n\t:host > .tabs-align-top kol-button-group-wc {\n\t\torder: 0;\n\t}\n\t:host > .tabs-align-bottom kol-button-group-wc,\n\t:host > .tabs-align-right kol-button-group-wc {\n\t\torder: 1;\n\t}\n\t:host > div.tabs-align-left kol-button-group-wc > div,\n\t:host > div.tabs-align-left kol-button-group-wc > div > div,\n\t:host > div.tabs-align-right kol-button-group-wc > div,\n\t:host > div.tabs-align-right kol-button-group-wc > div > div {\n\t\tdisplay: grid;\n\t}\n\t:host > div.tabs-align-left kol-button-group-wc > div > div kol-button-wc,\n\t:host > div.tabs-align-right kol-button-group-wc > div > div kol-button-wc {\n\t\twidth: 100%;\n\t}\n\t:host > div.tabs-align-bottom kol-button-group-wc div,\n\t:host > div.tabs-align-top kol-button-group-wc div {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t}\n\t:host > div.tabs-align-bottom > kol-button-group-wc {\n\t\tborder-radius: 0 0 0.25rem 0.25rem;\n\t}\n\t:host > div.tabs-align-bottom > div {\n\t\tborder-radius: 0.25rem 0.25rem 0 0;\n\t}\n\t:host > div.tabs-align-top > kol-button-group-wc {\n\t\tborder-radius: 0.25rem 0.25rem 0 0;\n\t}\n\t:host > div.tabs-align-top > div {\n\t\tborder-radius: 0 0 0.25rem 0.25rem;\n\t}\n\t:host > div.tabs-align-left > kol-button-group-wc {\n\t\tborder-radius: 0.25rem 0 0 0.25rem;\n\t}\n\t:host > div.tabs-align-left > div {\n\t\tborder-radius: 0 0.25rem 0.25rem 0;\n\t}\n\t:host > div.tabs-align-right > kol-button-group-wc {\n\t\tborder-radius: 0 0.25rem 0.25rem 0;\n\t}\n\t:host > div.tabs-align-right > div {\n\t\tborder-radius: 0.25rem 0 0 0.25rem;\n\t}',"KOL-PAGINATION":':host {\n\t\talign-items: center;\n\t\tdisplay: flex;\n\t\tgap: 1rem;\n\t}\n\t.navigation-list {\n\t\talign-items: center;\n\t\tdisplay: inline-flex;\n\t\tflex-wrap: wrap;\n\t\tgap: 0.5rem;\n\t\tjustify-content: center;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\t.navigation-list > li {\n\t\tmin-width: var(--a11y-min-size);\n\t\ttext-align: center;\n\t}\n\t.selected button {\n\t\tcursor: not-allowed;\n\t\tfont-weight: 700;\n\t\tborder-radius: 1.5em;\n\t\tborder: none;\n\t\ttransition-duration: 0.5s;\n\t\ttransition-property: background-color, color, border-color;\n\t\tcolor: var(--color-midnight);\n\t}\n\tkol-button::part(icon)::before {\n\t\tfont-family: "Font Awesome 6 Free";\n\t\tfont-weight: 900;\n\t}\n\tkol-button.first::part(icon)::before {\n\t\tcontent: "\\f100";\n\t}\n\tkol-button.previous::part(icon)::before {\n\t\tcontent: "\\f104";\n\t}\n\tkol-button.next::part(icon)::before {\n\t\tcontent: "\\f105";\n\t}\n\tkol-button.last::part(icon)::before {\n\t\tcontent: "\\f101";\n\t}',"KOL-INPUT-RANGE":'/* https://www.cssportal.com/style-input-range/ */\n\tkol-input {\n\t\tdisplay: grid;\n\t}\n\tkol-input label {\n\t\tdisplay: grid;\n\t\torder: 2;\n\t\tmargin-bottom: 0.4em;\n\t}\n\tkol-input div.input {\n\t\tbox-sizing: border-box;\n\t\torder: 3;\n\t\tbackground-color: white;\n\t\tborder-radius: 0.3125rem;\n\t}\n\tkol-input kol-alert.error {\n\t\tmargin-bottom: 0.4em;\n\t\torder: 1;\n\t}\n\tinput,\n\tselect,\n\ttextarea {\n\t\tfont-family: var(--font-family);\n\t\tbackground-color: transparent;\n\t\tbox-sizing: border-box;\n\t\tfont-size: 1rem;\n\t\tdisplay: inline-flex;\n\t\tline-height: 1.5em;\n\t\tborder-color: var(--color-grey);\n\t\tborder-width: 2px;\n\t\tborder-style: solid;\n\t\tpadding: 0.625em 0.875em;\n\t\tborder-radius: 0.3125rem;\n\t\toverflow: hidden;\n\t\twidth: calc(100% - 4em);\n\t}\n\tinput,\n\tselect:not([multiple]) {\n\t\theight: 2.75em;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\tinput:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tinput:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {\n\t\tcursor: not-allowed;\n\t\tborder-color: var(--border-default);\n\t}\n\t.required #label::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\t.icons {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\theight: 0;\n\t}\n\t.icons > * {\n\t\tmargin: 0.725em 0.875em;\n\t\tbox-sizing: border-box;\n\t\tborder-color: transparent;\n\t\tborder-width: 2px;\n\t\tborder-style: solid;\n\t}\n\t.icon-left input,\n\t.icon-left select {\n\t\tpadding-left: calc(0.875em + 1em + 0.5em);\n\t}\n\t.icon-right input,\n\t.icon-right select {\n\t\tpadding-right: calc(0.875em + 1em + 0.5em);\n\t}\n\tkol-input.error {\n\t\tborder-left: 3px solid var(--color-red);\n\t\tpadding-left: 1em;\n\t}\n\tkol-input.error input:focus,\n\tkol-input.error select:focus,\n\tkol-input.error textarea:focus {\n\t\toutline-color: var(--color-red) !important;\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-red);\n\t\tfont-weight: 700;\n\t}\n\tkol-button-wc {\n\t\tposition: relative;\n\t\tfloat: right;\n\t\tz-index: 1000;\n\t\tmargin-top: -33px;\n\t}\n\tkol-button-wc button {\n\t\tborder: 1px solid var(--color-grey);\n\t\tborder-radius: 0.25rem;\n\t\tbox-sizing: border-box;\n\t\tbackground-color: transparent;\n\t\tcursor: pointer;\n\t}\n\t.icon-right kol-button-wc {\n\t\tmargin-right: 2.5em;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\t.icon-left input,\n\t.icon-left select {\n\t\tmargin-left: 2em;\n\t}\n\t.icon-right input,\n\t.icon-right select {\n\t\tmargin-right: 2em;\n\t}\n\tinput[type="range"] {\n\t\tappearance: none;\n\t\t-webkit-appearance: none;\n\t\t-moz-appearance: none;\n\t}\n\tinput[type="range"] {\n\t\toverflow: visible;\n\t\tbackground-color: var(--color-ice);\n\t\tborder: 0;\n\t\theight: 0.5rem;\n\t\tpadding: 0;\n\t\tpadding-bottom: 0;\n\t\tmargin-bottom: 0;\n\t}\n\tinput[type="range"]::-webkit-slider-thumb {\n\t\tbox-sizing: border-box;\n\t\tbackground-color: var(--color-midnight);\n\t\theight: 20px;\n\t\twidth: 20px;\n\t\tborder-radius: 20px;\n\t\tcursor: pointer;\n\t\t-webkit-appearance: none;\n\t}',"KOL-LINK-BUTTON":":host {\n\t\tdisplay: inline-block;\n\t} /*-----------*/\n\ta {\n\t\tborder-width: 1px;\n\t\tborder-style: solid;\n\t\tmin-width: 44px;\n\t\tmin-height: 44px;\n\t\tdisplay: grid;\n\t\tgap: 0.25em;\n\t\tline-height: 1.5rem;\n\t\tfont-family: var(--font-family);\n\t\tfont-weight: 700;\n\t\tcursor: pointer;\n\t\talign-items: center;\n\t\tpadding: 8px 14px;\n\t\tjustify-content: center;\n\t\tfont-style: normal;\n\t\ttext-align: center;\n\t\ttext-transform: uppercase;\n\t\twidth: inherit;\n\t\ttransition-duration: 0.5s;\n\t\ttransition-property: background-color, color, border-color;\n\t}\n\ta:hover:enabled {\n\t\ttext-decoration: underline;\n\t}\n\t.primary a,\n\t.primary a:active,\n\t.primary a:hover {\n\t\tbackground-color: var(--color-gruen-dunkel);\n\t\tborder-color: var(--color-gruen-dunkel);\n\t\tcolor: var(--color-weiss);\n\t}\n\t.secondary a,\n\t.danger a,\n\t.normal a,\n\t.ghost a {\n\t\tbackground-color: var(--color-weiss);\n\t\tborder-color: var(--color-gruen-hell);\n\t\tcolor: var(--color-grau-dunkel);\n\t}\n\t.secondary a:active,\n\t.secondary a:hover {\n\t\tbackground-color: var(--color-gruen-dunkel);\n\t\tborder-color: var(--color-gruen-dunkel);\n\t\tborder-width: 1px;\n\t\tcolor: var(--color-weiss);\n\t}\n\ta:disabled,\n\ta:disabled:hover {\n\t\tbackground-color: var(--color-weiss);\n\t\tborder-color: var(--color-grau-hell);\n\t\tcolor: var(--color-graublau);\n\t\tcursor: not-allowed;\n\t}\n\ta > span {\n\t\tdisplay: flex;\n\t\tgap: 0.5em;\n\t\tmargin: auto;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t}\n\ta.icon-only {\n\t\tpadding: 8px;\n\t}\n\ta.icon-only kol-icon {\n\t\tdisplay: inline-block;\n\t\twidth: 1.5em;\n\t\theight: 1.5em;\n\t}\n\ta.loading kol-icon {\n\t\tanimation: spin 5s infinite linear;\n\t}","KOL-BUTTON-LINK":"button {\n\t\tbackground-color: transparent;\n\t\tborder: 0;\n\t\tcursor: pointer;\n\t}\n\tkol-link-button-wc {\n\t\tdisplay: inline-block;\n\t}\n\tbutton {\n\t\tcolor: var(--textFontColorblau);\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\tdisplay: inline-flex;\n\t\tline-height: 1.5em;\n\t\ttext-decoration-line: none !important;\n\t\toutline: none !important;\n\t}\n\tbutton:focus-within,\n\tbutton:hover {\n\t\tbox-shadow: inset 0 -1px 0 0 currentColor;\n\t}\n\tkol-icon {\n\t\tpadding: 0 0.25em;\n\t\tdisplay: inline-block;\n\t}","KOL-ABBR":"abbr {\n\t\ttext-decoration: none;\n\t\tborder-bottom: dotted var(--color-metal) 1px;\n\t}","KOL-BREADCRUMB":'nav {\n\t\twidth: 100%;\n\t}\n\tul {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tlist-style: none;\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\talign-items: center;\n\t}\n\tkol-link {\n\t\tdisplay: inline;\n\t}\n\t:host kol-icon[exportparts*="separator"] {\n\t\tpadding: 0 0.5rem;\n\t}\n\t:host kol-icon::part(icon) {\n\t\tfont-family: "Font Awesome 6 Free";\n\t\tfont-weight: 900;\n\t\tfont-size: 0.875rem !important;\n\t}\n\t:host kol-icon::part(icon)::before {\n\t\tcolor: currentColor;\n\t\tfont-family: "Font Awesome 6 Free";\n\t}\n\t:host ul > li:not(:first-child) kol-icon::part(icon)::before {\n\t\tcontent: "\\f105";\n\t}\n\t:host li > kol-link > kol-link-wc > a {\n\t\tcolor: red !important;\n\t}',"KOL-MODAL":":host .overlay .modal {\n\t\tmax-height: calc(100% - 32px);\n\t}","KOL-ICON":':host {\n\t\tcolor: inherit;\n\t} /*! * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) * Copyright 2022 Fonticons, Inc. */\n\t.fa {\n\t\tfont-family: var(--fa-style-family, "Font Awesome 6 Free");\n\t\tfont-weight: var(--fa-style, 900);\n\t}\n\t.fa,\n\t.fas,\n\t.fa-solid,\n\t.far,\n\t.fa-regular,\n\t.fal,\n\t.fa-light,\n\t.fat,\n\t.fa-thin,\n\t.fad,\n\t.fa-duotone,\n\t.fab,\n\t.fa-brands {\n\t\t-moz-osx-font-smoothing: grayscale;\n\t\t-webkit-font-smoothing: antialiased;\n\t\tdisplay: var(--fa-display, inline-block);\n\t\tfont-style: normal;\n\t\tfont-variant: normal;\n\t\tline-height: 1;\n\t\ttext-rendering: auto;\n\t}\n\t[class*="fa-"] {\n\t\tfont-style: 0.8rem;\n\t} /************************************************************/\n\t.fa-arrow-right::before {\n\t\tcontent: "\\f061";\n\t}\n\t.fa-arrow-right-from-bracket::before {\n\t\tcontent: "\\f08b";\n\t}\n\t.fa-clock::before {\n\t\tcontent: "\\f017";\n\t}\n\t.fa-home::before {\n\t\tcontent: "\\f015";\n\t}\n\t.fa-times-circle::before {\n\t\tcontent: "\\f057";\n\t}\n\t.fa-exclamation-triangle::before {\n\t\tcontent: "\\f071";\n\t} /************************************************************/\n\t.fa-chevron-left::before {\n\t\tcontent: "\\f053";\n\t}\n\t.fa-chevron-right::before {\n\t\tcontent: "\\f054";\n\t}\n\t.fa-download::before {\n\t\tcontent: "\\f019";\n\t}\n\tfa-exclamation-triangle::before {\n\t\tcontent: "\\f071";\n\t}\n\t.fa-file::before {\n\t\tcontent: "\\f15b";\n\t}\n\t.fa-house::before {\n\t\tcontent: "\\f015";\n\t}\n\t.fa-link::before {\n\t\tcontent: "\\f0c1";\n\t}\n\t.fa-plus::before {\n\t\tcontent: "\\2b";\n\t}\n\t.fa-search::before {\n\t\tcontent: "\\f002";\n\t}\n\t.fa-times-circle::before {\n\t\tcontent: "\\f057";\n\t}\n\t.fa-arrow-up-right-from-square::before {\n\t\tcontent: "\\f08e";\n\t}\n\t.fa-user::before {\n\t\tcontent: "\\f007";\n\t}\n\t.fa-xmark::before {\n\t\tcontent: "\\f00d";\n\t} /************************************************************/\n\t:root,\n\t:host {\n\t\t--fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";\n\t}\n\t@font-face {\n\t\tfont-family: "Font Awesome 6 Free";\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\tfont-display: block;\n\t\tsrc: url("../webfonts/fa-regular-400.woff2") format("woff2"),\n\t\turl("../webfonts/fa-regular-400.ttf") format("truetype");\n\t}\n\t.far,\n\t.fa-regular {\n\t\tfont-family: "Font Awesome 6 Free";\n\t\tfont-weight: 400;\n\t}\n\t:root,\n\t:host {\n\t\t--fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";\n\t}\n\t@font-face {\n\t\tfont-family: "Font Awesome 6 Free";\n\t\tfont-style: normal;\n\t\tfont-weight: 900;\n\t\tfont-display: block;\n\t\tsrc: url("../webfonts/fa-solid-900.woff2") format("woff2"),\n\t\turl("../webfonts/fa-solid-900.ttf") format("truetype");\n\t}\n\t.fas,\n\t.fa-solid {\n\t\tfont-family: "Font Awesome 6 Free";\n\t\tfont-weight: 900;\n\t}\n\t@font-face {\n\t\tfont-family: "Font Awesome 5 Brands";\n\t\tfont-display: block;\n\t\tfont-weight: 400;\n\t\tsrc: url("../webfonts/fa-brands-400.woff2") format("woff2"),\n\t\turl("../webfonts/fa-brands-400.ttf") format("truetype");\n\t}\n\t@font-face {\n\t\tfont-family: "Font Awesome 5 Free";\n\t\tfont-display: block;\n\t\tfont-weight: 900;\n\t\tsrc: url("../webfonts/fa-solid-900.woff2") format("woff2"),\n\t\turl("../webfonts/fa-solid-900.ttf") format("truetype");\n\t}\n\t@font-face {\n\t\tfont-family: "Font Awesome 5 Free";\n\t\tfont-display: block;\n\t\tfont-weight: 400;\n\t\tsrc: url("../webfonts/fa-regular-400.woff2") format("woff2"),\n\t\turl("../webfonts/fa-regular-400.ttf") format("truetype");\n\t}\n\t@font-face {\n\t\tfont-family: "FontAwesome";\n\t\tfont-display: block;\n\t\tsrc: url("../webfonts/fa-solid-900.woff2") format("woff2"),\n\t\turl("../webfonts/fa-solid-900.ttf") format("truetype");\n\t}\n\t@font-face {\n\t\tfont-family: "FontAwesome";\n\t\tfont-display: block;\n\t\tsrc: url("../webfonts/fa-brands-400.woff2") format("woff2"),\n\t\turl("../webfonts/fa-brands-400.ttf") format("truetype");\n\t}\n\t@font-face {\n\t\tfont-family: "FontAwesome";\n\t\tfont-display: block;\n\t\tsrc: url("../webfonts/fa-regular-400.woff2") format("woff2"),\n\t\turl("../webfonts/fa-regular-400.ttf") format("truetype");\n\t\tunicode-range: U+F003, U+F006, U+F014, U+F016-F017, U+F01A-F01B, U+F01D,\n\t\tU+F022, U+F03E, U+F044, U+F046, U+F05C-F05D, U+F06E, U+F070, U+F087-F088,\n\t\tU+F08A, U+F094, U+F096-F097, U+F09D, U+F0A0, U+F0A2, U+F0A4-F0A7, U+F0C5,\n\t\tU+F0C7, U+F0E5-F0E6, U+F0EB, U+F0F6-F0F8, U+F10C, U+F114-F115, U+F118-F11A,\n\t\tU+F11C-F11D, U+F133, U+F147, U+F14E, U+F150-F152, U+F185-F186, U+F18E,\n\t\tU+F190-F192, U+F196, U+F1C1-F1C9, U+F1D9, U+F1DB, U+F1E3, U+F1EA, U+F1F7,\n\t\tU+F1F9, U+F20A, U+F247-F248, U+F24A, U+F24D, U+F255-F25B, U+F25D,\n\t\tU+F271-F274, U+F278, U+F27B, U+F28C, U+F28E, U+F29C, U+F2B5, U+F2B7, U+F2BA,\n\t\tU+F2BC, U+F2BE, U+F2C0-F2C1, U+F2C3, U+F2D0, U+F2D2, U+F2D4, U+F2DC;\n\t}\n\t@font-face {\n\t\tfont-family: "FontAwesome";\n\t\tfont-display: block;\n\t\tsrc: url("../webfonts/fa-v4compatibility.woff2") format("woff2"),\n\t\turl("../webfonts/fa-v4compatibility.ttf") format("truetype");\n\t\tunicode-range: U+F041, U+F047, U+F065-F066, U+F07D-F07E, U+F080, U+F08B,\n\t\tU+F08E, U+F090, U+F09A, U+F0AC, U+F0AE, U+F0B2, U+F0D0, U+F0D6, U+F0E4,\n\t\tU+F0EC, U+F10A-F10B, U+F123, U+F13E, U+F148-F149, U+F14C, U+F156, U+F15E,\n\t\tU+F160-F161, U+F163, U+F175-F178, U+F195, U+F1F8, U+F219, U+F250, U+F252,\n\t\tU+F27A;\n\t}',"KOL-SKIP-NAV":"kol-link-wc > a > kol-span-wc {\n\t\tborder-radius: var(--a11y-min-size);\n\t\tborder-style: solid;\n\t\tborder-width: 2px;\n\t\tgap: 0.5rem;\n\t\tline-height: 1rem;\n\t\tpadding: 8px 14px;\n\t\tbackground-color: var(--color-ocean);\n\t\tborder-color: var(--color-ocean);\n\t\tcolor: var(--color-white);\n\t\tcursor: pointer;\n\t}","KOL-LINK-GROUP":"ul {\n\t\tlist-style: none;\n\t\tmargin: 0px;\n\t\tpadding: 0px;\n\t}\n\tnav.horizontal ul {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t}\n\tnav.horizontal li {\n\t\tlist-style: none;\n\t\tmargin-left: 1.25rem;\n\t\tmargin-right: 0.25rem;\n\t}\n\tnav.horizontal li:first-child {\n\t\tmargin-left: 0;\n\t}\n\tnav.horizontal li:last-child {\n\t\tmargin-right: 0;\n\t}\n\tnav.vertical li {\n\t\tmargin-left: 1.75rem;\n\t\tmargin-right: 0.5rem;\n\t}\n\tli.list-none {\n\t\tlist-style-type: none !important;\n\t\tmargin-left: 0;\n\t}","KOL-TOOLTIP":":host {\n\t\t--kolibri-font-size: var(--textFontSize);\n\t}"}),z.createTheme("bmf",{GLOBAL:"/* Design Tokens */\n\t:host {\n\t\t--border-radius: 5px;\n\t\t--color-midnight: #004b76;\n\t\t--color-ocean: #0077b6;\n\t\t--color-sky: #99c9e2;\n\t\t--color-ice: #cce4f0;\n\t\t--color-crystal: #f0f7fb;\n\t\t--color-crimson: #780f2d;\n\t\t--color-red: #c0003c;\n\t\t--color-pink: #f2ccd8;\n\t\t--color-blossom: #fbf0f3;\n\t\t--color-olive: #004d38;\n\t\t--color-green: #005c45;\n\t\t--color-jungle: #00854a;\n\t\t--color-lime: #c1ca31;\n\t\t--color-mint: #ccdeda;\n\t\t--color-haze: #f0f5f4;\n\t\t--color-fire: #7a2e1f;\n\t\t--color-orange: #c44931;\n\t\t--color-coral: #f5dcd7;\n\t\t--color-peach: #fdf6f5;\n\t\t--color-bronze: #6a4a06;\n\t\t--color-yellow: #f9e03a;\n\t\t--color-ivory: #fdf3b0;\n\t\t--color-wine: #3f1d4a;\n\t\t--color-purple: #6b4479;\n\t\t--color-lavender: #dfd6de;\n\t\t--color-black: #202020;\n\t\t--color-metal: #454d4f;\n\t\t--color-grey: #576164;\n\t\t--color-granite: #bec5c9;\n\t\t--color-silver: #e5e8e9;\n\t\t--color-smoke: #f2f3f4;\n\t\t--color-cloud: #f6f7f7;\n\t\t--color-white: #ffffff;\n\t\t--font-family: BundesSans Web, Calibri, Verdana, Arial, Helvetica, sans-serif;\n\t\t--font-size: 16px;\n\t\t--spacing: 0.25em;\n\t}\n\t:host {\n\t\tfont-family: var(--font-family); /* font-size: var(--font-size); */\n\t}\n\t* {\n\t\tbox-sizing: border-box;\n\t}\n\t*:not(i) {\n\t\tfont-family: var(--font-family);\n\t}\n\th1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6 {\n\t\tfont-family: var(--font-family);\n\t\tfont-size: var(--font-size);\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\t*[tabindex]:focus,\n\tkol-input:not(.checkbox, .radio) .input:focus-within,\n\tkol-input:is(.checkbox, .radio) input:focus,\n\tsummary:focus {\n\t\tcursor: pointer;\n\t\toutline-color: var(--color-ocean);\n\t\toutline-offset: 2px;\n\t\toutline-style: solid;\n\t\toutline-width: 3px;\n\t\ttransition: outline-offset 0.2s linear;\n\t}\n\t@keyframes spin {\n\t\t0% {\n\t\t\ttransform: rotate(0deg);\n\t\t}\n\t\t100% {\n\t\t\ttransform: rotate(360deg);\n\t\t}\n\t}\n\tkol-heading-wc {\n\t\tfont-weight: 700;\n\t}\n\tkol-tooltip-wc .tooltip-floating {\n\t\tborder: 1px solid var(--color-metal);\n\t\tborder-radius: var(--border-radius);\n\t}\n\tkol-tooltip-wc .tooltip-arrow {\n\t\tborder: 1px solid var(--color-metal);\n\t}\n\tkol-tooltip-wc .tooltip-area {\n\t\tbackground-color: var(--color-white);\n\t\tcolor: var(--color-metal);\n\t}\n\tkol-tooltip-wc .tooltip-content {\n\t\tborder-radius: var(--border-radius);\n\t\tline-height: 1.5em;\n\t\tpadding: 0.5rem 0.75rem;\n\t}\n\tkol-span-wc,\n\tkol-span-wc > span {\n\t\tgap: 0.5em;\n\t}","KOL-BUTTON":":is(a, button):focus {\n\t\toutline: none;\n\t}\n\t:is(a, button):focus kol-span-wc {\n\t\toutline-color: var(--color-ocean);\n\t\toutline-offset: 2px;\n\t\toutline-style: solid;\n\t\toutline-width: 3px;\n\t\ttransition: outline-offset 0.2s linear;\n\t}\n\t:is(a, button) > kol-span-wc {\n\t\tfont-weight: 700;\n\t\tborder-radius: var(--a11y-min-size);\n\t\tborder-style: solid;\n\t\tborder-width: 2px;\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t\tpadding: 8px 14px;\n\t\ttext-align: center;\n\t\ttransition-duration: 0.5s;\n\t\ttransition-property: background-color, color, border-color;\n\t}\n\t:is(a, button):disabled > kol-span-wc {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n\t}\n\t.primary :is(a, button) > kol-span-wc,\n\t.primary :is(a, button):disabled:hover > kol-span-wc {\n\t\tbackground-color: var(--color-midnight);\n\t\tborder-color: var(--color-midnight);\n\t\tcolor: var(--color-white);\n\t}\n\t.secondary :is(a, button) > kol-span-wc,\n\t.secondary :is(a, button):disabled:hover > kol-span-wc,\n\t.normal :is(a, button) > kol-span-wc,\n\t.normal :is(a, button):disabled:hover > kol-span-wc {\n\t\tbackground-color: var(--color-white);\n\t\tborder-color: var(--color-midnight);\n\t\tcolor: var(--color-midnight);\n\t}\n\t.danger :is(a, button) > kol-span-wc,\n\t.danger :is(a, button):disabled:hover > kol-span-wc {\n\t\tbackground-color: var(--color-red);\n\t\tborder-color: var(--color-red);\n\t\tcolor: var(--color-white);\n\t}\n\t.ghost :is(a, button) > kol-span-wc,\n\t.ghost :is(a, button):disabled:hover > kol-span-wc {\n\t\tborder-color: var(--color-white);\n\t\tbackground-color: var(--color-white);\n\t\tbox-shadow: none;\n\t\tcolor: var(--color-midnight);\n\t} /*-----------*/\n\t.primary :is(a, button):active > kol-span-wc,\n\t.primary :is(a, button):hover > kol-span-wc,\n\t.secondary :is(a, button):active > kol-span-wc,\n\t.secondary :is(a, button):hover > kol-span-wc,\n\t.normal :is(a, button):active > kol-span-wc,\n\t.normal :is(a, button):hover > kol-span-wc,\n\t.danger :is(a, button):active > kol-span-wc,\n\t.danger :is(a, button):hover > kol-span-wc,\n\t.ghost :is(a, button):active > kol-span-wc,\n\t.ghost :is(a, button):hover > kol-span-wc {\n\t\tbackground-color: var(--color-ocean);\n\t\tborder-color: var(--color-ocean);\n\t\tbox-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);\n\t\tcolor: var(--color-white);\n\t}\n\t.danger :is(a, button):active > kol-span-wc,\n\t.danger :is(a, button):hover > kol-span-wc {\n\t\tbackground-color: var(--color-crimson);\n\t\tborder-color: var(--color-crimson);\n\t}\n\t:is(a, button):disabled:hover > kol-span-wc,\n\t:is(a, button):focus:hover > kol-span-wc {\n\t\tbox-shadow: none;\n\t}\n\t.primary :is(a, button):active > kol-span-wc,\n\t.secondary :is(a, button):active > kol-span-wc,\n\t.normal :is(a, button):active > kol-span-wc,\n\t.danger :is(a, button):active > kol-span-wc,\n\t.ghost :is(a, button):active > kol-span-wc {\n\t\tborder-color: var(--color-white);\n\t\tbox-shadow: none;\n\t\toutline: none;\n\t}\n\t:is(a, button).hide-label > kol-span-wc {\n\t\tpadding: 8px;\n\t\twidth: unset;\n\t}\n\t:is(a, button).hide-label > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n\t:is(a, button).loading > kol-span-wc kol-icon {\n\t\tanimation: spin 5s infinite linear;\n\t}\n  /** button with inline focus */\n\t:is(a, button).focus-inline:focus > kol-span-wc {\n\t\toutline-offset: -2px;\n\t}\n\t/** :is(a,button) with transparent background */\n\t:is(a, button).transparent > kol-span-wc > span,\n\t.ghost :is(a, button).transparent > kol-span-wc > span,\n\t:is(a, button).transparent > kol-span-wc {\n\t\tbackground-color: transparent;\n\t\tborder-color: transparent;\n\t}","KOL-INPUT-TEXT":'kol-input {\n\t\tgap: 0.25em;\n\t}\n\tkol-input .error {\n\t\torder: 1;\n\t}\n\tkol-input label {\n\t\torder: 2;\n\t}\n\tkol-input .input {\n\t\torder: 3;\n\t}\n\tkol-input .hint {\n\t\torder: 4;\n\t\tfont-size: 0.875em;\n\t\tfont-style: italic;\n\t}\n\tinput {\n\t\tborder: none;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\t.input {\n\t\tbackground-color: var(--color-white);\n\t\tborder-color: var(--color-grey);\n\t\tborder-radius: var(--border-radius);\n\t\tborder-style: solid;\n\t\tborder-width: 2px;\n\t\tpadding: 0 0.5em;\n\t}\n\t.input > kol-icon {\n\t\twidth: 1em;\n\t}\n\t.input:is(.icon-left, .icon-right) {\n\t\tpadding-left: 1em;\n\t\tpadding-right: 1em;\n\t}\n\t.input:is(.icon-left, .icon-right) input {\n\t\tpadding-left: 0.5em;\n\t\tpadding-right: 0.5em;\n\t}\n\t.input > input:first-child {\n\t\tpadding-left: 0.375em;\n\t}\n\t.input > input:last-child {\n\t\tpadding-right: 0.375em;\n\t}\n\t.input:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tinput:read-only,\n\tinput:disabled {\n\t\tcursor: not-allowed;\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\tkol-input.error {\n\t\tborder-left: 3px solid var(--color-red);\n\t\tpadding-left: 1em;\n\t}\n\tkol-input.error .input:focus-within {\n\t\toutline-color: var(--color-red) !important;\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-red);\n\t\tfont-weight: 700;\n\t}\n\tkol-input.disabled :is(input, label) {\n\t\topacity: 1;\n\t}\n\tkol-input.disabled :is(input, .input) {\n\t\tbackground-color: var(--color-smoke);\n\t\tborder-color: var(--color-granite);\n\t}',"KOL-INPUT-PASSWORD":'kol-input {\n\t\tgap: 0.25em;\n\t}\n\tkol-input .error {\n\t\torder: 1;\n\t}\n\tkol-input label {\n\t\torder: 2;\n\t}\n\tkol-input .input {\n\t\torder: 3;\n\t}\n\tkol-input .hint {\n\t\torder: 4;\n\t\tfont-size: 0.875em;\n\t\tfont-style: italic;\n\t}\n\tinput {\n\t\tborder: none;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\t.input {\n\t\tbackground-color: var(--color-white);\n\t\tborder-color: var(--color-grey);\n\t\tborder-radius: var(--border-radius);\n\t\tborder-style: solid;\n\t\tborder-width: 2px;\n\t\tpadding: 0 0.5em;\n\t}\n\t.input > kol-icon {\n\t\twidth: 1em;\n\t}\n\t.input:is(.icon-left, .icon-right) {\n\t\tpadding-left: 1em;\n\t\tpadding-right: 1em;\n\t}\n\t.input:is(.icon-left, .icon-right) input {\n\t\tpadding-left: 0.5em;\n\t\tpadding-right: 0.5em;\n\t}\n\t.input > input:first-child {\n\t\tpadding-left: 0.375em;\n\t}\n\t.input > input:last-child {\n\t\tpadding-right: 0.375em;\n\t}\n\t.input:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tinput:read-only,\n\tinput:disabled {\n\t\tcursor: not-allowed;\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\tkol-input.error {\n\t\tborder-left: 3px solid var(--color-red);\n\t\tpadding-left: 1em;\n\t}\n\tkol-input.error .input:focus-within {\n\t\toutline-color: var(--color-red) !important;\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-red);\n\t\tfont-weight: 700;\n\t}\n\tkol-input.disabled :is(button, input, label, option, select, textarea) {\n\t\topacity: 1;\n\t}\n\tkol-input.disabled :is(input, select, textarea, .input) {\n\t\tbackground-color: var(--color-smoke);\n\t\tborder-color: var(--color-granite);\n\t\tcolor: var(--color-black);\n\t}',"KOL-INPUT-NUMBER":'kol-input {\n\t\tgap: 0.25em;\n\t}\n\tkol-input .error {\n\t\torder: 1;\n\t}\n\tkol-input label {\n\t\torder: 2;\n\t}\n\tkol-input .input {\n\t\torder: 3;\n\t}\n\tkol-input .hint {\n\t\torder: 4;\n\t\tfont-size: 0.875em;\n\t\tfont-style: italic;\n\t}\n\tinput {\n\t\tborder: none;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\t.input {\n\t\tbackground-color: var(--color-white);\n\t\tborder-color: var(--color-grey);\n\t\tborder-radius: var(--border-radius);\n\t\tborder-style: solid;\n\t\tborder-width: 2px;\n\t\tpadding: 0 0.5em;\n\t}\n\t.input > kol-icon {\n\t\twidth: 1em;\n\t}\n\t.input:is(.icon-left, .icon-right) {\n\t\tpadding-left: 1em;\n\t\tpadding-right: 1em;\n\t}\n\t.input:is(.icon-left, .icon-right) input {\n\t\tpadding-left: 0.5em;\n\t\tpadding-right: 0.5em;\n\t}\n\t.input > input:first-child {\n\t\tpadding-left: 0.375em;\n\t}\n\t.input > input:last-child {\n\t\tpadding-right: 0.375em;\n\t}\n\t.input:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tinput:disabled {\n\t\tcursor: not-allowed;\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\tkol-input.error {\n\t\tborder-left: 3px solid var(--color-red);\n\t\tpadding-left: 1em;\n\t}\n\tkol-input.error .input:focus-within {\n\t\toutline-color: var(--color-red) !important;\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-red);\n\t\tfont-weight: 700;\n\t}\n\tkol-input.disabled :is(input, label) {\n\t\topacity: 1;\n\t}\n\tkol-input.disabled :is(input, .input) {\n\t\tbackground-color: var(--color-smoke);\n\t\tborder-color: var(--color-granite);\n\t\tcolor: var(--color-black);\n\t}',"KOL-INPUT-DATE":'kol-input {\n\t\tgap: 0.25em;\n\t}\n\tkol-input .error {\n\t\torder: 1;\n\t}\n\tkol-input label {\n\t\torder: 2;\n\t}\n\tkol-input .input {\n\t\torder: 3;\n\t}\n\tkol-input .hint {\n\t\torder: 4;\n\t\tfont-size: 0.875em;\n\t\tfont-style: italic;\n\t}\n\tinput {\n\t\tborder: none;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\t.input {\n\t\tbackground-color: var(--color-white);\n\t\tborder-color: var(--color-grey);\n\t\tborder-radius: var(--border-radius);\n\t\tborder-style: solid;\n\t\tborder-width: 2px;\n\t\tpadding: 0 0.5em;\n\t}\n\t.input > kol-icon {\n\t\twidth: 1em;\n\t}\n\t.input:is(.icon-left, .icon-right) {\n\t\tpadding-left: 1em;\n\t\tpadding-right: 1em;\n\t}\n\t.input:is(.icon-left, .icon-right) input {\n\t\tpadding-left: 0.5em;\n\t\tpadding-right: 0.5em;\n\t}\n\t.input > input:first-child {\n\t\tpadding-left: 0.375em;\n\t}\n\t.input > input:last-child {\n\t\tpadding-right: 0.375em;\n\t}\n\t.input:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tinput:disabled {\n\t\tcursor: not-allowed;\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\tkol-input.error {\n\t\tborder-left: 3px solid var(--color-red);\n\t\tpadding-left: 1em;\n\t}\n\tkol-input.error .input:focus-within {\n\t\toutline-color: var(--color-red) !important;\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-red);\n\t\tfont-weight: 700;\n\t}\n\tkol-input.disabled :is(input, label) {\n\t\topacity: 1;\n\t}\n\tkol-input.disabled :is(input, .input) {\n\t\tbackground-color: var(--color-smoke);\n\t\tborder-color: var(--color-granite);\n\t\tcolor: var(--color-black);\n\t}',"KOL-INPUT-EMAIL":'kol-input {\n\t\tgap: 0.25em;\n\t}\n\tkol-input .error {\n\t\torder: 1;\n\t}\n\tkol-input label {\n\t\torder: 2;\n\t}\n\tkol-input .input {\n\t\torder: 3;\n\t}\n\tkol-input .hint {\n\t\torder: 4;\n\t\tfont-size: 0.875em;\n\t\tfont-style: italic;\n\t}\n\tinput {\n\t\tborder: none;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\t.input {\n\t\tbackground-color: var(--color-white);\n\t\tborder-color: var(--color-grey);\n\t\tborder-radius: var(--border-radius);\n\t\tborder-style: solid;\n\t\tborder-width: 2px;\n\t\tpadding: 0 0.5em;\n\t}\n\t.input > kol-icon {\n\t\twidth: 1em;\n\t}\n\t.input:is(.icon-left, .icon-right) {\n\t\tpadding-left: 1em;\n\t\tpadding-right: 1em;\n\t}\n\t.input:is(.icon-left, .icon-right) input {\n\t\tpadding-left: 0.5em;\n\t\tpadding-right: 0.5em;\n\t}\n\t.input > input:first-child {\n\t\tpadding-left: 0.375em;\n\t}\n\t.input > input:last-child {\n\t\tpadding-right: 0.375em;\n\t}\n\t.input:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tinput:read-only,\n\tinput:disabled {\n\t\tcursor: not-allowed;\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\tkol-input.error {\n\t\tborder-left: 3px solid var(--color-red);\n\t\tpadding-left: 1em;\n\t}\n\tkol-input.error .input:focus-within {\n\t\toutline-color: var(--color-red) !important;\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-red);\n\t\tfont-weight: 700;\n\t}\n\tkol-input.disabled :is(input, label) {\n\t\topacity: 1;\n\t}\n\tkol-input.disabled :is(input, .input) {\n\t\tbackground-color: var(--color-smoke);\n\t\tborder-color: var(--color-granite);\n\t\tcolor: var(--color-black);\n\t}',"KOL-INPUT-FILE":'kol-input {\n\t\tgap: 0.25em;\n\t}\n\tkol-input .error {\n\t\torder: 1;\n\t}\n\tkol-input label {\n\t\torder: 2;\n\t}\n\tkol-input .input {\n\t\torder: 3;\n\t}\n\tkol-input .hint {\n\t\torder: 4;\n\t\tfont-size: 0.875em;\n\t\tfont-style: italic;\n\t}\n\tkol-input .input input[type="file"] {\n\t\tpadding-top: calc(0.5em + 2px);\n\t}\n\tinput {\n\t\tborder: none;\n\t}\n\tinput[type="file"] {\n\t\tbackground-color: transparent;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\t.input {\n\t\tbackground-color: var(--color-white);\n\t\tborder-color: var(--color-grey);\n\t\tborder-radius: var(--border-radius);\n\t\tborder-style: solid;\n\t\tborder-width: 2px;\n\t\tpadding: 0 0.5em;\n\t}\n\t.input > kol-icon {\n\t\twidth: 1em;\n\t}\n\t.input:is(.icon-left, .icon-right) {\n\t\tpadding-left: 1em;\n\t\tpadding-right: 1em;\n\t}\n\t.input:is(.icon-left, .icon-right) input {\n\t\tpadding-left: 0.5em;\n\t\tpadding-right: 0.5em;\n\t}\n\t.input > input:first-child {\n\t\tpadding-left: 0.375em;\n\t}\n\t.input > input:last-child {\n\t\tpadding-right: 0.375em;\n\t}\n\t.input:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tinput:read-only,\n\tinput:disabled {\n\t\tcursor: not-allowed;\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\tkol-input.error {\n\t\tborder-left: 3px solid var(--color-red);\n\t\tpadding-left: 1em;\n\t}\n\tkol-input.error .input:focus-within {\n\t\toutline-color: var(--color-red) !important;\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-red);\n\t\tfont-weight: 700;\n\t}\n\tkol-input.disabled :is(button, input, label, option, select, textarea) {\n\t\topacity: 1;\n\t}\n\tkol-input.disabled :is(input, select, textarea, .input) {\n\t\tbackground-color: var(--color-smoke);\n\t\tborder-color: var(--color-granite);\n\t\tcolor: var(--color-black);\n\t}',"KOL-TEXTAREA":'kol-input {\n\t\tgap: 0.25em;\n\t\tdisplay: grid;\n\t\tgrid-template-areas: "error error" "label counter" "input input" "hint hint";\n\t\tgrid-template-columns: 1fr 115px;\n\t}\n\tkol-input .error {\n\t\torder: 1;\n\t\tgrid-area: error;\n\t}\n\tkol-input label {\n\t\torder: 2;\n\t\tgrid-area: label;\n\t}\n\tkol-input .counter {\n\t\torder: 2;\n\t\tgrid-area: counter;\n\t\tjustify-self: end;\n\t}\n\tkol-input .input {\n\t\torder: 3;\n\t\tgrid-area: input;\n\t}\n\tkol-input .hint {\n\t\torder: 4;\n\t\tfont-size: 0.875em;\n\t\tfont-style: italic;\n\t\tgrid-area: hint;\n\t}\n\ttextarea {\n\t\tborder: none;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\t.input {\n\t\tbackground-color: var(--color-white);\n\t\tborder-color: var(--color-grey);\n\t\tborder-radius: var(--border-radius);\n\t\tborder-style: solid;\n\t\tborder-width: 2px;\n\t\tpadding: 0 0.5em;\n\t}\n\t.input > kol-icon {\n\t\twidth: 1em;\n\t}\n\t.input:is(.icon-left, .icon-right) {\n\t\tpadding-left: 1em;\n\t\tpadding-right: 1em;\n\t}\n\t.input:is(.icon-left, .icon-right) input {\n\t\tpadding-left: 0.5em;\n\t\tpadding-right: 0.5em;\n\t}\n\t.input > input:first-child {\n\t\tpadding-left: 0.375em;\n\t}\n\t.input > input:last-child {\n\t\tpadding-right: 0.375em;\n\t}\n\t.input:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\ttextarea:read-only,\n\ttextarea:disabled {\n\t\tcursor: not-allowed;\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\tkol-input.error {\n\t\tborder-left: 3px solid var(--color-red);\n\t\tpadding-left: 1em;\n\t}\n\tkol-input.error .input:focus-within {\n\t\toutline-color: var(--color-red) !important;\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-red);\n\t\tfont-weight: 700;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\tselect[multiple],\n\ttextarea {\n\t\toverflow: auto;\n\t}\n\ttextarea {\n\t\tdisplay: block;\n\t}\n\t.input {\n\t\tposition: relative;\n\t}\n\t.input textarea ~ span {\n\t\tposition: absolute;\n\t\ttop: -1.5rem;\n\t\tright: 0;\n\t\tcolor: var(--color-grey);\n\t}',"KOL-ALERT":'.msg,\n\t.msg {\n\t\tborder-width: 0;\n\t}\n\tkol-alert-wc {\n\t\tborder-width: 2px;\n\t\tborder-style: solid;\n\t\tborder-radius: 5px;\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\toverflow: unset;\n\t\tborder-color: transparent;\n\t\tbackground-color: white;\n\t}\n\tkol-alert-wc > .heading {\n\t\tdisplay: flex;\n\t\tgap: 0.5em;\n\t\tplace-items: center;\n\t}\n\tkol-alert-wc > .heading > div {\n\t\tdisplay: grid;\n\t\tgap: var(--kolibri-spacing);\n\t}\n\t.msg {\n\t\tbackground-color: transparent;\n\t}\n\t.msg > .heading {\n\t\tplace-items: flex-start;\n\t}\n\t.msg > .heading > kol-icon {\n\t\tplace-self: baseline;\n\t}\n\tkol-alert-wc > .heading > div {\n\t\tdisplay: grid;\n\t\tgap: var(--spacing);\n\t}\n\tkol-alert-wc > .heading > kol-button-wc.close {\n\t\tplace-self: center;\n\t}\n\t.msg {\n\t\talign-items: start;\n\t}\n\t.default {\n\t\tborder-color: var(--color-grey);\n\t}\n\t.default.msg .heading-icon {\n\t\tcolor: var(--color-grey);\n\t}\n\t.error {\n\t\tborder-color: var(--color-red);\n\t}\n\t.error.msg .heading-icon {\n\t\tcolor: var(--color-red);\n\t}\n\t.info {\n\t\tborder-color: var(--color-midnight);\n\t}\n\t.info.msg .heading-icon {\n\t\tcolor: var(--color-midnight);\n\t}\n\t.success {\n\t\tborder-color: var(--color-green);\n\t}\n\t.success.msg .heading-icon {\n\t\tcolor: var(--color-green);\n\t}\n\t.warning {\n\t\tborder-color: var(--color-orange);\n\t}\n\t.warning.msg .heading-icon {\n\t\tcolor: var(--color-orange);\n\t}\n\t.heading-icon {\n\t\tcolor: white;\n\t}\n\tkol-alert-wc .heading .heading-icon {\n\t\tpadding: 0;\n\t}\n\t.msg > .heading > .heading-icon {\n\t\tpadding-top: 0;\n\t\tplace-items: baseline;\n\t}\n\t.msg > .heading > .heading-icon::part(icon) {\n\t\tline-height: 1.375rem;\n\t}\n\t.msg > .heading > div > kol-heading-wc {\n\t\tline-height: 20px;\n\t\tpadding-top: 0.125rem;\n\t}\n\t.msg.default .heading > div > kol-heading-wc {\n\t\tcolor: var(--color-grey);\n\t}\n\t.msg.error .heading > div > kol-heading-wc {\n\t\tcolor: var(--color-red);\n\t}\n\t.msg.info .heading > div > kol-heading-wc {\n\t\tcolor: var(--color-midnight);\n\t}\n\t.msg.success .heading > div > kol-heading-wc {\n\t\tcolor: var(--color-green);\n\t}\n\t.msg.warning .heading > div > kol-heading-wc {\n\t\tcolor: var(--color-orange);\n\t} /*.msg > .heading > div {display: grid;grid-template-columns: 1fr auto;}.msg > .heading > div > .content {grid-row: 2;grid-column: 1;}.msg > div > .close {display: flex;}*/\n\t.msg.default .close .icon {\n\t\tcolor: var(--color-grey);\n\t}\n\t.msg.error .close .icon {\n\t\tcolor: var(--color-red);\n\t}\n\t.msg.info .close .icon {\n\t\tcolor: var(--color-midnight);\n\t}\n\t.msg.success .close .icon {\n\t\tcolor: var(--color-green);\n\t}\n\t.msg.warning .close .icon {\n\t\tcolor: var(--color-orange);\n\t}\n\t.card {\n\t\tborder-width: 2px;\n\t\tborder-style: solid;\n\t\tfilter: drop-shadow(0px 2px 4px rgba(8, 35, 48, 0.24));\n\t\tflex-direction: column;\n\t}\n\t.card > .heading {\n\t\tpadding: 0.5rem 1rem;\n\t}\n\t.card.hasCloser > .heading {\n\t\tpadding-top: 0;\n\t\tpadding-bottom: 0;\n\t\tpadding-right: 0;\n\t}\n\t.card > .heading > div {\n\t\twidth: 100%;\n\t\tmin-height: 1.25rem;\n\t}\n\t.card > .heading .heading-icon {\n\t\tjustify-self: right;\n\t\tmargin-top: -4px;\n\t}\n\t.card > .heading kol-heading-wc {\n\t\twidth: 100%;\n\t\tcolor: white;\n\t\tdisplay: flex;\n\t\tfont-size: 1.25rem;\n\t\tline-height: 1.25rem;\n\t}\n\t.card > .heading kol-heading-wc > * {\n\t\tmargin: auto 0;\n\t}\n\t.card > .heading kol-button-wc button:focus {\n\t\toutline-color: var(--color-white);\n\t\toutline-offset: -3px;\n\t\toutline-style: solid;\n\t\toutline-width: 3px;\n\t\ttransition: outline 0.1s linear;\n\t}\n\t.card > .heading kol-button-wc button:hover {\n\t\tbackground-color: rgba(32, 32, 32, 0.2);\n\t}\n\t.card > .heading kol-button-wc button:active {\n\t\tbackground-color: rgba(32, 32, 32, 0.4);\n\t}\n\t.card > .heading kol-button-wc button:hover:focus {\n\t\tbackground-color: rgba(32, 32, 32, 0.1);\n\t}\n\t.card > .content {\n\t\tpadding: 1rem;\n\t\tmax-height: 9.5rem;\n  \t\toverflow-y: auto;\n\t}\n\t.card.default > .heading {\n\t\tbackground-color: var(--color-grey);\n\t\tborder-bottom: 2px solid var(--color-grey);\n\t}\n\t.card.error > .heading {\n\t\tbackground-color: var(--color-red);\n\t\tborder-bottom: 2px solid var(--color-red);\n\t}\n\t.card.info > .heading {\n\t\tbackground-color: var(--color-midnight);\n\t\tborder-bottom: 2px solid var(--color-midnight);\n\t}\n\t.card.success > .heading {\n\t\tbackground-color: var(--color-green);\n\t\tborder-bottom: 2px solid var(--color-green);\n\t}\n\t.card.warning > .heading {\n\t\tbackground-color: var(--color-orange);\n\t\tborder-bottom: 2px solid var(--color-orange);\n\t}\n\t:is(.error, .info, .success, .warning) .heading-icon::part(icon) {\n\t\tfont-family: "Font Awesome 6 Free" !important;\n\t\tfont-weight: 900;\n\t\theight: 1.25rem;\n\t\twidth: 1.25rem;\n\t}\n\t:is(.error, .info, .success, .warning) .heading-icon {\n\t\tfont-size: 1.25rem !important;\n\t}\n\t.error .heading-icon::part(icon)::before {\n\t\tcontent: "\\f06a";\n\t}\n\t.info .heading-icon::part(icon)::before {\n\t\tcontent: "\\f05a";\n\t}\n\t.success .heading-icon::part(icon)::before {\n\t\tcontent: "\\f058";\n\t}\n\t.warning .heading-icon::part(icon)::before {\n\t\tcontent: "\\f071";\n\t}\n\t.card > div > .content {\n\t\tgrid-row: 2;\n\t\tgrid-column: 1 / span 2;\n\t}\n\t.card.default .close {\n\t\tbackground-color: var(--color-grey);\n\t}\n\t.card.error .close {\n\t\tbackground-color: var(--color-red);\n\t}\n\t.card.info .close {\n\t\tbackground-color: var(--color-midnight);\n\t}\n\t.card.success .close {\n\t\tbackground-color: var(--color-green);\n\t}\n\t.card.warning .close {\n\t\tbackground-color: var(--color-orange);\n\t}\n\t.close > button {\n\t\tmin-width: 44px;\n\t\tcolor: var(--color-white);\n\t\tmin-height: 44px;\n\t\tdisplay: grid;\n\t\tgap: 0.25em;\n\t\tline-height: 1.5rem;\n\t\tfont-family: var(--font-family);\n\t\tfont-weight: 700;\n\t\tcursor: pointer;\n\t\tborder-radius: 1.5em;\n\t\tborder-style: solid;\n\t\tborder-width: 2px;\n\t\tfont-size: 1rem;\n\t\talign-items: center;\n\t\tpadding: 8px 14px;\n\t\tjustify-content: center;\n\t\tfont-style: normal;\n\t\ttext-align: center;\n\t\twidth: inherit;\n\t\ttransition-duration: 0.5s;\n\t\ttransition-property: background-color, color, border-color;\n\t\tbackground-color: rgba(0, 0, 0, 0);\n\t\tborder-color: rgba(0, 0, 0, 0);\n\t}\n\t.close > button {\n\t\tpadding: 8px;\n\t}\n\t.close > button kol-icon {\n\t\tdisplay: flex;\n\t\twidth: 1em;\n\t\theight: 1em;\n\t\tfont-size: 1rem;\n\t}\n\t.close > button kol-icon::part(icon) {\n\t\tfont-family: "Font Awesome 6 Free";\n\t\tfont-weight: 900;\n\t}\n\t.close > button kol-icon::part(icon)::before {\n\t\tcontent: "\\f00d";\n\t}\n\t.close > button:active {\n\t\tbox-shadow: none;\n\t\toutline: none;\n\t}',"KOL-HEADING":"h1,\n\th2,\n\th3,\n\th4,\n\th5,\n\th6 {\n\t\tcolor: inherit;\n\t\tfont-style: normal;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\th1,\n\th2,\n\th3 {\n\t\tfont-weight: 700;\n\t}\n\th1 {\n\t\tfont-size: 1.5rem;\n\t\tline-height: 1.75rem;\n\t}\n\th2 {\n\t\tfont-size: 1.25rem;\n\t\tline-height: 1.75rem;\n\t}\n\th3 {\n\t\tfont-size: 1.125rem;\n\t\tline-height: 1.5rem;\n\t}","KOL-BADGE":":host {\n\t\tdisplay: inline-block;\n\t}\n\t:host > span {\n\t\tborder-radius: 0.3125rem;\n\t\tdisplay: inline-flex;\n\t\tfont-style: normal;\n\t}\n\t:host > span.smart-button {\n\t\talign-items: center;\n\t}\n\t:host > span kol-button-wc:hover > button {\n\t\tbackground-color: var(--color-ocean);\n\t\tcolor: var(--color-white);\n\t}\n\t:host > span kol-button-wc > button {\n\t\tcolor: inherit;\n\t\tfont-size: 1rem;\n\t\tborder-top-right-radius: 0.3125rem;\n\t\tborder-bottom-right-radius: 0.3125rem;\n\t\tpadding: 2px;\n\t}\n\t:host > span kol-span-wc {\n\t\tpadding: 0.25rem 0.75rem;\n\t}\n\t:host > span > kol-span-wc {\n\t\talign-items: center;\n\t\tfont-style: normal;\n\t\tgap: 0.5rem;\n\t}\n\t:host > span > kol-span-wc > span {\n\t\tdisplay: flex;\n\t\tgap: 0.25rem;\n\t}","KOL-BUTTON-GROUP":":host > kol-button-group-wc {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tgap: 0.5em;\n\t}","KOL-INDENTED-TEXT":":host > div {\n\t\tbackground-color: var(--color-white);\n\t\tborder-left: none;\n\t\tbox-shadow: -2px 0px 0px var(--color-ocean);\n\t\tpadding: 0 0.5em;\n\t\twidth: 100%;\n\t}","KOL-LINK":":is(a, button) {\n\t\tcolor: var(--color-midnight);\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\ttext-decoration-line: underline;\n\t}\n\t:is(a, button):focus {\n\t\toutline: none;\n\t}\n\t:is(a, button):focus kol-span-wc {\n\t\tborder-radius: var(--border-radius);\n\t\toutline: 2px solid;\n\t}\n\t:is(a, button):hover {\n\t\ttext-decoration-thickness: 0.25em;\n\t}\n\t:is(a, button):visited {\n\t\tcolor: var(--visited);\n\t}\n\t.hidden {\n\t\tdisplay: none;\n\t\tvisibility: hidden;\n\t}\n\t.skip {\n\t\tleft: -99999px;\n\t\toverflow: hidden;\n\t\tposition: absolute;\n\t\tz-index: 9999999;\n\t\tline-height: 1em;\n\t}\n\t.skip:focus {\n\t\tbackground: white;\n\t\tleft: unset;\n\t\tposition: unset;\n\t}","KOL-DETAILS":'details > summary {\n\t\tborder-radius: var(--border-radius);\n\t}\n\tdetails kol-indented-text {\n\t\tmargin: 0.25em 0px 0px 0.65em;\n\t}\n\tkol-icon::part(icon) {\n\t\tfont-family: "Font Awesome 6 Free";\n\t\tfont-weight: 900;\n\t\tmargin-right: 0.5rem;\n\t}\n\tdetails[open] kol-icon::part(icon):before {\n\t\tcontent: "\\f078";\n\t}\n\tdetails:not([open]) kol-icon::part(icon):before {\n\t\tcontent: "\\f054";\n\t}',"KOL-SPIN":".spin {\n\t\tdisplay: inline-block;\n\t\theight: 1rem;\n\t\tposition: relative;\n\t\twidth: 3rem;\n\t}\n\t.spin span {\n\t\tanimation-timing-function: cubic-bezier(0, 1, 1, 0);\n\t\tborder: 0.1rem solid rgb(255, 255, 255);\n\t\tborder-radius: 50%;\n\t\theight: 0.8rem;\n\t\twidth: 0.8rem;\n\t\ttop: 0.1rem;\n\t\tposition: absolute;\n\t}\n\t.spin span:nth-child(1) {\n\t\tbackground-color: #fc0;\n\t\tz-index: 0;\n\t\tanimation: 2s ease 0s infinite normal none running spin1;\n\t\tleft: 0.1rem;\n\t}\n\t.spin span:nth-child(2) {\n\t\tbackground-color: #f00;\n\t\tz-index: 1;\n\t\tanimation: 2s ease 0s infinite normal none running spin2;\n\t\tleft: 0.1rem;\n\t}\n\t.spin span:nth-child(3) {\n\t\tbackground-color: #000;\n\t\tz-index: 1;\n\t\tanimation: 2s ease 0s infinite normal none running spin2;\n\t\tleft: 1.1rem;\n\t}\n\t.spin span:nth-child(4) {\n\t\tbackground-color: #666;\n\t\tz-index: 0;\n\t\tanimation: 2s ease 0s infinite normal none running spin3;\n\t\tleft: 2.1rem;\n\t}\n\t@keyframes spin1 {\n\t\t0% {\n\t\t\ttransform: scale(0);\n\t\t}\n\t\t100% {\n\t\t\ttransform: scale(1);\n\t\t}\n\t}\n\t@keyframes spin2 {\n\t\t0% {\n\t\t\ttransform: translate(0px, 0px);\n\t\t}\n\t\t100% {\n\t\t\ttransform: translate(1rem, 0px);\n\t\t}\n\t}\n\t@keyframes spin3 {\n\t\t0% {\n\t\t\ttransform: scale(1);\n\t\t}\n\t\t100% {\n\t\t\ttransform: scale(0);\n\t\t}\n\t}","KOL-PROGRESS":".bar > div {\n\t\tflex-direction: column;\n\t\tgap: 0.5rem !important;\n\t\twidth: 100px;\n\t}\n\t.bar > div text {\n\t\tcolor: var(--color-black);\n\t\talign-self: flex-end;\n\t}\n\t.bar svg {\n\t\theight: 1rem;\n\t}\n\t.bar .background {\n\t\tfill: var(--color-ice);\n\t\tstroke: var(--color-ice);\n\t\tstroke-width: 1px;\n\t}\n\t.bar .progress {\n\t\tfill: var(--color-midnight);\n\t\tstroke: var(--color-midnight);\n\t}\n\t.bar .border {\n\t\tdisplay: none;\n\t}\n\t.cycle {\n\t\toverflow: visible;\n\t}\n\t.cycle .whitespace,\n\t.cycle .border {\n\t\tstroke: transparent;\n\t}\n\t.cycle .background {\n\t\tstroke: var(--color-ice);\n\t\tstroke-width: 1rem;\n\t}\n\t.cycle .progress {\n\t\tstroke: var(--color-midnight);\n\t\tstroke-width: 1rem;\n\t}\n\t.cycle text:first-of-type {\n\t\tcolor: var(--color-grey);\n\t\tline-height: 1.25rem;\n\t\talignment-baseline: after-edge;\n\t}\n\t.cycle text:last-of-type {\n\t\tcolor: var(--color-black);\n\t\tfont-size: 1.75rem;\n\t\tfont-weight: 700;\n\t\tline-height: 1.5rem;\n\t\talignment-baseline: central;\n\t}","KOL-SELECT":'kol-input {\n\t\tgap: 0.25em;\n\t}\n\tkol-input .error {\n\t\torder: 1;\n\t}\n\tkol-input label {\n\t\torder: 2;\n\t}\n\tkol-input .input {\n\t\torder: 3;\n\t}\n\tkol-input .hint {\n\t\torder: 4;\n\t\tfont-size: 0.875em;\n\t\tfont-style: italic;\n\t}\n\tselect {\n\t\tborder: none;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\t.input {\n\t\tbackground-color: var(--color-white);\n\t\tborder-color: var(--color-grey);\n\t\tborder-radius: var(--border-radius);\n\t\tborder-style: solid;\n\t\tborder-width: 2px;\n\t\tpadding: 0 0.5em;\n\t}\n\t.input > kol-icon {\n\t\twidth: 1em;\n\t}\n\t.input:is(.icon-left, .icon-right) {\n\t\tpadding-left: 1em;\n\t\tpadding-right: 1em;\n\t}\n\t.input.icon-left kol-icon:first-child {\n\t\tmargin-right: 0.5em;\n\t}\n\t.input.icon-right kol-icon:last-child {\n\t\tmargin-left: 0.5em;\n\t}\n\t.input > input:first-child {\n\t\tpadding-left: 0.375em;\n\t}\n\t.input > input:last-child {\n\t\tpadding-right: 0.375em;\n\t}\n\t.input:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tselect:disabled {\n\t\tcursor: not-allowed;\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\tkol-input.error {\n\t\tborder-left: 3px solid var(--color-red);\n\t\tpadding-left: 1em;\n\t}\n\tkol-input.error .input:focus-within {\n\t\toutline-color: var(--color-red) !important;\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-red);\n\t\tfont-weight: 700;\n\t}\n\tkol-input.disabled :is(select, label, option) {\n\t\topacity: 1;\n\t}\n\tkol-input.disabled :is(select, .input) {\n\t\tbackground-color: var(--color-smoke);\n\t\tborder-color: var(--color-granite);\n\t}\n\tselect[multiple] {\n\t\toverflow: auto;\n\t}\n\tselect option {\n\t\tmargin: 1px 0;\n\t\tpadding: 0.5em;\n\t\tborder-radius: 0.25em;\n\t\tcursor: pointer;\n\t}\n\tselect option:disabled {\n\t\tcursor: not-allowed;\n\t}\n\toption:active:not(:disabled),\n\toption:checked:not(:disabled),\n\toption:focus:not(:disabled),\n\toption:hover:not(:disabled) {\n\t\tbackground: var(--color-ocean);\n\t\tcolor: white;\n\t}',"KOL-INPUT-COLOR":'kol-input {\n\t\tgap: 0.25em;\n\t}\n\tkol-input .error {\n\t\torder: 1;\n\t}\n\tkol-input label {\n\t\torder: 2;\n\t}\n\tkol-input .input {\n\t\torder: 3;\n\t}\n\tkol-input .hint {\n\t\torder: 4;\n\t\tfont-size: 0.875em;\n\t\tfont-style: italic;\n\t}\n\tinput {\n\t\tborder: none;\n\t}\n\tinput[type="color"] {\n\t\tborder: none;\n\t\tmin-height: 40px !important;\n\t}\n\tinput[type="color"] {\n\t\tbackground-color: transparent;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\t.input {\n\t\tbackground-color: var(--color-white);\n\t\tborder-color: var(--color-grey);\n\t\tborder-radius: var(--border-radius);\n\t\tborder-style: solid;\n\t\tborder-width: 2px;\n\t\tpadding: 0 0.5em;\n\t}\n\t.input > kol-icon {\n\t\twidth: 1em;\n\t}\n\t.input:is(.icon-left, .icon-right) {\n\t\tpadding-left: 1em;\n\t\tpadding-right: 1em;\n\t}\n\t.input:is(.icon-left, .icon-right) input {\n\t\tpadding-left: 0.5em;\n\t\tpadding-right: 0.5em;\n\t}\n\t.input > input:first-child {\n\t\tpadding-left: 0.375em;\n\t}\n\t.input > input:last-child {\n\t\tpadding-right: 0.375em;\n\t}\n\t.input:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tinput:not([type="color"]):read-only,\n\tinput:disabled {\n\t\tcursor: not-allowed;\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\tkol-input.error {\n\t\tborder-left: 3px solid var(--color-red);\n\t\tpadding-left: 1em;\n\t}\n\tkol-input.error .input:focus-within {\n\t\toutline-color: var(--color-red) !important;\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-red);\n\t\tfont-weight: 700;\n\t}\n\tkol-input.disabled :is(input, label) {\n\t\topacity: 1;\n\t}\n\tkol-input.disabled :is(input, .input) {\n\t\tbackground-color: var(--color-smoke);\n\t\tborder-color: var(--color-granite);\n\t\tcolor: var(--color-black);\n\t}',"KOL-ACCORDION":'kol-span-wc > span {\n\t\tdisplay: flex;\n\t\tplace-items: baseline center;\n\t\ttext-align: left;\n\t}\n\t:host > div > kol-heading-wc button {\n\t\tborder-radius: var(--border-radius);\n\t\tmin-height: 22px;\n\t\tpadding: 12px 8px;\n\t}\n\t:host > div > kol-heading-wc button kol-span-wc {\n\t\tfont-weight: 700;\n\t\tfont-size: 1.125rem;\n\t\tline-height: 20px;\n\t\tgap: 0.5rem;\n\t}\n\t:host > div > kol-heading-wc button kol-span-wc > span {\n\t\tgap: 0.5em;\n\t}\n\t:host > div > kol-heading-wc button kol-icon::part(icon) {\n\t\tfont-family: "Font Awesome 6 Free";\n\t\tfont-weight: 900;\n\t\tcolor: var(--color-midnight);\n\t}\n\t:host > div.open > kol-heading-wc button kol-icon::part(icon)::before {\n\t\tcontent: "\\f078";\n\t}\n\t:host > div:not(.open) > kol-heading-wc button kol-icon::part(icon)::before {\n\t\tcontent: "\\f054";\n\t}\n\t:host > div {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tdisplay: grid;\n\t}\n\t:host > div div[class="header"],\n\t:host > div[class*="open"] div[class="content"] {\n\t\tmargin: 0;\n\t}\n\t:host > div div[class="content"] {\n\t\tpadding-left: 2.25em;\n\t\tpadding-bottom: 12px;\n\t\tpadding-right: 8px;\n\t}\n\tbutton:focus {\n\t\toutline: none;\n\t}\n\t:host > .accordion:focus-within {\n\t\tborder-radius: var(--border-radius);\n\t\tcursor: pointer;\n\t\toutline-color: var(--color-ocean);\n\t\toutline-offset: 2px;\n\t\toutline-style: solid;\n\t\toutline-width: 3px;\n\t\ttransition: outline-offset 0.2s linear;\n\t}',"KOL-TABLE":':host * {\n\t\thyphens: var(--kolibri-hyphens);\n\t\tfont-family: var(--kolibri-font-family);\n\t\tline-height: var(--kolibri-line-height);\n\t\tword-break: break-word;\n\t}\n\t:host > div {\n\t\toverflow-x: auto;\n\t\toverflow-y: hidden;\n\t}\n\tcaption {\n\t\tposition: absolute;\n\t\twidth: 1px;\n\t\theight: 1px;\n\t\tpadding: 0;\n\t\tmargin: -1px;\n\t\toverflow: hidden;\n\t\tclip: rect(0, 0, 0, 0);\n\t\twhite-space: nowrap;\n\t\tborder-width: 0;\n\t}\n\ttable {\n\t\twidth: 100%;\n\t\tborder-spacing: 0;\n\t}\n\ttbody tr:last-child th,\n\ttr:last-child td {\n\t\tborder-bottom-width: 0;\n\t}\n\tth {\n\t\tpadding: 0.75em 0;\n\t\tfont-weight: 700;\n\t\tcolor: var(--color-black);\n\t}\n\tth div {\n\t\twidth: 100%;\n\t\tdisplay: flex;\n\t\tgap: 0.5em;\n\t\tgrid-template-columns: 1fr auto;\n\t\talign-items: center;\n\t}\n\tth div.center {\n\t\tjustify-content: center;\n\t}\n\tth div.right {\n\t\tjustify-content: end;\n\t}\n\tth,\n\ttd {\n\t\tvertical-align: top;\n\t\tborder-bottom: 1px solid var(--color-granite);\n\t\theight: 1.25rem;\n\t}\n\ttbody th {\n\t\ttext-align: left;\n\t}\n\ttbody th,\n\ttd {\n\t\tpadding: 1em 0;\n\t}\n\tth kol-button,\n\ttd kol-button {\n\t\tmargin-top: -0.75rem;\n\t\tmargin-bottom: -0.75rem;\n\t}\n\ttd.center > div {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t}\n\ttd.right > div {\n\t\tdisplay: flex;\n\t\tjustify-content: end;\n\t}\n\tth[aria-sort="ascending"],\n\tth[aria-sort="descending"] {\n\t\tfont-weight: 700;\n\t}\n\t:host > div:last-child,\n\t:host > div:last-child > div:last-child {\n\t\tdisplay: grid;\n\t\talign-items: center;\n\t\tjustify-items: center;\n\t\tgap: 1em;\n\t}\n\t.pagination {\n\t\talign-items: center;\n\t\tjustify-content: start;\n\t\tgrid-template-columns: auto 1fr;\n\t}\n\t@media (min-width: 1024px) {\n\t\t:host > div:last-child,\n\t\t:host > div:last-child > div:last-child {\n\t\t\tgrid-auto-flow: column;\n\t\t}\n\t\t:host > div:last-child kol-pagination {\n\t\t\tdisplay: flex;\n\t\t\tgap: 1rem;\n\t\t}\n\t}',"KOL-NAV":'* {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\tnav {\n\t\tfont-family: var(--font-family);\n\t\tfont-size: var(--font-size);\n\t\twidth: 100%;\n\t}\n\tul {\n\t\tlist-style: none;\n\t}\n\tkol-link-wc,\n\ta {\n\t\theight: 100%;\n\t\tmin-height: 44px;\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t}\n\t.entry > kol-button-link-text-switch {\n\t\twidth: 100%;\n\t}\n\t.entry\n\t\t> kol-button-link-text-switch\n\t\t> :is(kol-button-wc, kol-link-wc, kol-span-wc):first-child {\n\t\tbackground-color: var(--color-white);\n\t\ttext-decoration: none;\n\t\tcolor: var(--color-midnight);\n\t\twidth: 100%;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tfont-style: normal;\n\t\tline-height: 1.5rem;\n\t\tmin-height: 44px;\n\t\tmin-width: 44px;\n\t\ttransition-duration: 0.5s;\n\t\ttransition-property: background-color, color, border-color;\n\t\tletter-spacing: 0.175px;\n\t}\n\t.entry\n\t\t> kol-button-link-text-switch\n\t\t> :is(kol-link-wc, kol-button-wc):first-child:is(a, button) {\n\t\tcolor: var(--color-midnight);\n\t\ttext-decoration: none;\n\t}\n\t.entry\n\t\t> kol-button-link-text-switch\n\t\t> :is(kol-button-wc, kol-link-wc, kol-span-wc):first-child:hover {\n\t\tborder-left-color: var(--color-ocean);\n\t\tbackground-color: var(--color-ocean);\n\t\tletter-spacing: unset;\n\t}\n\t.entry\n\t\t> kol-button-link-text-switch\n\t\t> :is(kol-link-wc, kol-button-wc, kol-span-wc):first-child:hover\n\t\t> :is(a, button, span) {\n\t\tcolor: var(--color-white);\n\t\tbackground-color: var(--color-ocean);\n\t\tfont-weight: 700;\n\t\tletter-spacing: unset;\n\t}\n\t:is(.active, .selected).list.entry\n\t\t> kol-button-link-text-switch\n\t\t> :is(kol-button-wc, kol-link-wc, kol-span-wc):first-child {\n\t\tbackground-color: var(--color-smoke);\n\t}\n\t:is(.active, .selected)\n\t\t> .entry\n\t\t> kol-button-link-text-switch\n\t\t> :is(kol-button-wc, kol-link-wc, kol-span-wc):first-child {\n\t\tbackground-color: var(--color-ice);\n\t\tcolor: var(--color-midnight);\n\t\tfont-weight: 700;\n\t}\n\t:is(.active, .selected)\n\t\t> .entry\n\t\t> kol-button-link-text-switch\n\t\t> :is(kol-link-wc, kol-button-wc, kol-span-wc):first-child\n\t\t> :is(a, button, span) {\n\t\tfont-weight: 700;\n\t}\n\t:is(.active, .selected)\n\t\t> .entry\n\t\t> kol-button-link-text-switch\n\t\t> :is(kol-button-wc, kol-link-wc, kol-span-wc):first-child:hover {\n\t\tcolor: var(--color-white);\n\t\tletter-spacing: unset;\n\t}\n\t.entry > kol-button-link-text-switch > kol-span-wc > span,\n\t.entry :is(a, button) {\n\t\tborder-left-color: transparent;\n\t\tborder-left-style: solid;\n\t\tborder-left-width: 0.5rem;\n\t\tpadding: 0.75rem 0.5rem 0.75rem 0.25rem;\n\t}\n\t:is(.active, .selected) kol-button-link-text-switch :is(a, button),\n\t[exportparts*="selected"] a {\n\t\tborder-left-color: var(--color-midnight);\n\t}\n\t:is(kol-button-wc button, kol-link-wc a) {\n\t\tcolor: var(--color-midnight);\n\t}\n\tkol-link-wc a {\n\t\ttext-decoration: none;\n\t}\n\tkol-link-wc kol-icon {\n\t\tdisplay: none;\n\t}\n\t/** Compact mode */\n\t.entry.hide-label :is(kol-button-wc, kol-link-wc, kol-span-wc):first-child {\n\t\tplace-items: center;\n\t}\n\t.entry.hide-label :is(a, button) {\n\t\tpadding: 0;\n\t\tborder-left: 0;\n\t}',"KOL-CARD":"/* https://www.figma.com/file/56JbmrssCRpjpfxoAFeHqT/Design-System-EPLF-(in-progress)?node-id=8225%3A5945 */\n\t:host > div {\n\t\tdisplay: grid;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tbackground-color: white;\n\t\tgrid-template-rows: min-content 2fr min-content;\n\t\tbox-shadow: 0 0 0.25rem var(--color-grey);\n\t\tborder-radius: 0.25rem;\n\t}\n\t:host kol-heading-wc {\n\t\tline-height: 1.75rem;\n\t}\n\t:host div.header {\n\t\tpadding: 1rem 1rem 0.5rem 1rem;\n\t}\n\t:host div.content {\n\t\tpadding: 0.5rem 1rem 1rem;\n\t\toverflow: hidden;\n\t}\n\t:host div.footer {\n\t\tpadding: 0.5rem 1rem;\n\t}\n\t:host > div > div.content + div.footer {\n\t\tborder-top: 2px solid var(--color-ice);\n\t}","KOL-INPUT-CHECKBOX":'/* INPUT */\n\t:host kol-input {\n\t\tdisplay: grid;\n\t\talign-items: center;\n\t\tjustify-items: left;\n\t\twidth: 100%;\n\t\tmin-height: 44px;\n\t}\n\t:host kol-input.default {\n\t\tgrid-template-columns: 1.5rem auto;\n\t\tgap: 0.4em;\n\t}\n\t:host kol-input.switch {\n\t\tgrid-template-columns: 3.5rem auto;\n\t\tgap: 0.4em;\n\t}\n\t:host kol-input > div.input {\n\t\tdisplay: inherit;\n\t\tmin-height: 44px;\n\t\torder: 2;\n\t}\n\t:host kol-input > div.input input {\n\t\tmargin: 0px;\n\t}\n\t:host kol-input:not(.disabled) :is(.input, label) {\n\t\tcursor: pointer;\n\t}\n\t:host kol-input.disabled :is(.input, label) {\n\t\tcursor: not-allowed;\n\t}\n\t:host kol-input > label {\n\t\torder: 3;\n\t}\n\t:host kol-input > kol-alert.error {\n\t\torder: 1;\n\t\tpadding-top: 0.25em;\n\t\tgrid-column: span 2 / auto;\n\t}\n\t:host kol-input.error {\n\t\tborder-left: 3px solid var(--color-red);\n\t\tpadding-left: 1em;\n\t}\n\t:host kol-input.error input:focus,\n\tkol-input.error select:focus,\n\tkol-input.error textarea:focus {\n\t\toutline-color: var(--color-red) !important;\n\t}\n\t:host kol-input.error kol-alert.error {\n\t\tcolor: var(--color-red);\n\t\tfont-weight: 700;\n\t}\n\t:host input {\n\t\torder: 1;\n\t\twidth: 100%;\n\t\tborder-color: var(--color-grey);\n\t\tborder-width: 2px;\n\t\tborder-style: solid;\n\t\tborder-radius: 5px; /* padding: 10px 14px; */\n\t\tline-height: 24px;\n\t\tfont-size: 1rem;\n\t}\n\t:host input:hover {\n\t\tborder-color: var(--color-midnight);\n\t\tbox-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);\n\t}\n\t:host input:focus:hover {\n\t\tbox-shadow: none;\n\t}\n\t:host input:active {\n\t\tbox-shadow: none;\n\t}\n\t:host kol-alert {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t} /* CHECKBOX */\n\t:host kol-input label span {\n\t\tmargin-top: 0.125rem;\n\t}\n\t:host .required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\t:host kol-input input[type="checkbox"] {\n\t\tappearance: none;\n\t\tbackground-color: white;\n\t\ttransition: 0.5s;\n\t}\n\t:host kol-input input[type="checkbox"]:before {\n\t\tcontent: "";\n\t}\n\t:host kol-input input[type="checkbox"]:checked {\n\t\tbackground-color: var(--color-midnight);\n\t\tborder-color: var(--color-midnight);\n\t}\n\t:host kol-input.default input[type="checkbox"] {\n\t\tborder-radius: var(--border-radius);\n\t\theight: calc(6 * var(--spacing));\n\t\tmin-width: calc(6 * var(--spacing));\n\t\twidth: calc(6 * var(--spacing));\n\t}\n\t:host kol-input.default input[type="checkbox"]:before {\n\t\tborder-radius: 1.5em;\n\t\tbackground-color: transparent;\n\t\tdisplay: block;\n\t\theight: calc(6 * var(--spacing));\n\t\tposition: relative;\n\t\twidth: calc(6 * var(--spacing));\n\t}\n\t:host kol-input.default input[type="checkbox"]:checked:before {\n\t\tborder-right-width: 3px;\n\t\tborder-bottom-width: 3px;\n\t\tleft: calc(1.5 * var(--spacing) - 2px);\n\t\ttop: calc(2.85 * var(--spacing) - 2px);\n\t\ttransform: rotate(40deg) translate(-50%, -50%);\n\t\tbackground-color: transparent;\n\t\tborder-width: 0px 3px 3px 0px;\n\t\tborder-color: white;\n\t\tborder-radius: 1px;\n\t\tborder-style: solid;\n\t\theight: calc(3 * var(--spacing));\n\t\twidth: calc(1.5 * var(--spacing));\n\t}\n\t:host kol-input.default input[type="checkbox"]:indeterminate {\n\t\t--tw-bg-opacity: 1;\n\t\tbackground-color: var(--color-midnight);\n\t}\n\t:host kol-input.default input[type="checkbox"]:indeterminate:before {\n\t\tbackground-color: var(--color-white);\n\t\theight: 0.125rem;\n\t\ttop: 0.6rem;\n\t\tleft: 0.25rem;\n\t\twidth: calc(3 * var(--spacing));\n\t\ttransform: inherit;\n\t}\n\t:host kol-input.default input[type="checkbox"]:checked:indeterminate:before {\n\t\tborder-width: 0px 1px 1px 0px;\n\t}\n\t:host kol-input.switch input[type="checkbox"] {\n\t\tmin-width: 3.5em;\n\t\twidth: 3.5em;\n\t\tbackground-color: var(--color-grey);\n\t\tborder-width: 0;\n\t\theight: 1.5em;\n\t\tborder-radius: 1.25em;\n\t\tdisplay: inline-block;\n\t\tposition: relative;\n\t}\n\t:host kol-input.switch input[type="checkbox"]:before {\n\t\t-webkit-transition: 0.5s;\n\t\t-moz-transition: 0.5s;\n\t\t-ms-transition: 0.5s;\n\t\ttransition: 0.5;\n\t\twidth: 1.25em;\n\t\theight: 1.25em;\n\t\tleft: calc(0.25em - 2px);\n\t\ttop: calc(0.25em - 2px);\n\t\tborder-radius: 1.25em;\n\t\tbackground-color: white;\n\t\tposition: absolute;\n\t}\n\t:host kol-input.switch input[type="checkbox"]:checked {\n\t\tbackground-color: var(--color-midnight);\n\t}\n\t:host kol-input.switch input[type="checkbox"]:checked:before {\n\t\t-webkit-transform: translateX(2em);\n\t\t-moz-transform: translateX(2em);\n\t\t-ms-transform: translateX(2em);\n\t\ttransform: translateX(2em);\n\t\t--tw-bg-opacity: 1;\n\t}\n\t:host kol-input.switch input[type="checkbox"]:indeterminate {\n\t\t--tw-bg-opacity: 1;\n\t}\n\t:host kol-input.switch input[type="checkbox"]:indeterminate:before {\n\t\t-webkit-transform: translateX(1em);\n\t\t-moz-transform: translateX(1em);\n\t\t-ms-transform: translateX(1em);\n\t\ttransform: translateX(1em);\n\t}\n\t.switch {\n\t\t& .icon {\n\t\t\twidth: 1.25em;\n\t\t\theight: 1.25em;\n\t\t\tleft: 2px;\n\t\t\tcolor: #000;\n\t\t\t&::part(icon) {\n\t\t\t\tfont-family: "Font Awesome 6 Free";\n\t\t\t\tfont-weight: 900;\n\t\t\t}\n\t\t\t&::part(icon)::before {\n\t\t\t\tcontent: "\\2b";\n\t\t\t}\n\t\t}\n\t\t&:has(input:checked) .icon {\n\t\t\ttransform: translate(2em, -50%);\n\t\t\t&::part(icon)::before {\n\t\t\t\tcontent: "\\f00c";\n\t\t\t}\n\t\t}\n\t\t&:has(input:indeterminate) .icon {\n\t\t\ttransform: translate(1em, -50%);\n\t\t\t&::part(icon)::before {\n\t\t\t\tcontent: "\\f068";\n\t\t\t}\n\t\t}\n\t}\n\t:host .disabled {\n\t\topacity: 0.33;\n\t}\n\t:host kol-input.button {\n\t\trow-gap: 0.5rem;\n\t}\n\t:host kol-input.button.checked > .input,\n\t:host kol-input.button.checked > label {\n\t\tbackground-color: var(--color-ice);\n\t}\n\t:host kol-input.button > label {\n\t\tbackground-color: var(--color-silver);\n\t\tborder-top-right-radius: var(--border-radius);\n\t\tborder-bottom-right-radius: var(--border-radius);\n\t\tmin-height: 32px;\n\t\talign-items: center;\n\t\tdisplay: flex;\n\t\tpadding-right: 12px;\n\t\twidth: 100%;\n\t}\n\t:host kol-input.button > .input {\n\t\tbackground-color: var(--color-silver);\n\t\tborder-top-left-radius: var(--border-radius);\n\t\tborder-bottom-left-radius: var(--border-radius);\n\t\tmin-height: 32px;\n\t\tmin-width: 32px;\n\t\tplace-content: center;\n\t}\n\t:host kol-input.button > .input > div {\n\t\tdisplay: flex;\n\t}\n\t:host kol-input.button .icon {\n\t\theight: auto;\n\t}',"KOL-INPUT-RADIO":'/* INPUT */\n\tkol-input {\n\t\tdisplay: grid;\n\t\tgap: 0.4em;\n\t}\n\tlabel {\n\t\tcursor: pointer;\n\t\tdisplay: grid;\n\t\tline-height: 20px;\n\t\tgap: 8px;\n\t\twidth: 100%;\n\t}\n\tinput {\n\t\tcursor: pointer;\n\t\twidth: 100%;\n\t\tborder-color: var(--color-grey);\n\t\tborder-width: 2px;\n\t\tborder-style: solid;\n\t\tborder-radius: 5px; /* padding: 10px 14px; */\n\t\tline-height: 24px;\n\t\tfont-size: 16px;\n\t}\n\tinput:hover {\n\t\tborder-color: var(--color-midnight);\n\t\tbox-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);\n\t}\n\tinput:focus:hover {\n\t\tbox-shadow: none;\n\t}\n\tinput:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tkol-alert {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t}\n\t.required legend > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t} /* RADIO */\n\tfieldset {\n\t\tborder: 0px;\n\t\tmargin: 0px;\n\t\tpadding: 0px;\n\t\tdisplay: grid;\n\t\tgap: 0.25em;\n\t}\n\tfieldset div {\n\t\tcursor: pointer;\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\talign-items: center;\n\t\tposition: relative;\n\t\tmin-height: 44px;\n\t\tmargin: 0;\n\t\tgap: 0.5rem;\n\t}\n\tfieldset div label {\n\t\tcursor: pointer;\n\t\tdisplay: flex;\n\t\tpadding-left: 0.25em;\n\t\twidth: 100%;\n\t}\n\tfieldset div label span {\n\t\tmargin-top: 0.125em;\n\t}\n\tfieldset div input[type="radio"] {\n\t\tappearance: none;\n\t\ttransition: 0.5s;\n\t\tborder-radius: 100%;\n\t\theight: calc(6 * var(--spacing));\n\t\tmin-width: calc(6 * var(--spacing));\n\t\twidth: calc(6 * var(--spacing));\n\t}\n\tfieldset div input[type="radio"]:before {\n\t\tcontent: "";\n\t\tcursor: pointer;\n\t\tborder-radius: 100%;\n\t\tdisplay: block;\n\t}\n\tfieldset div input[type="radio"]:checked:before {\n\t\tbackground-color: var(--color-midnight);\n\t}\n\tfieldset div input[type="radio"]:disabled {\n\t\tcursor: not-allowed;\n\t\tborder-color: var(--border-default);\n\t\tbackground-color: var(--background-light-grey);\n\t}\n\tfieldset #error {\n\t\torder: 1;\n\t}\n\tfieldset legend {\n\t\torder: 2;\n\t\tdisplay: contents;\n\t}\n\tfieldset kol-input {\n\t\torder: 3;\n\t}\n\tfieldset.error {\n\t\tpadding-left: 1em;\n\t\tborder-left: 3px solid var(--color-red);\n\t}\n\tfieldset kol-alert#error {\n\t\tcolor: var(--color-red);\n\t\tfont-weight: 700;\n\t}\n\tfieldset.error input:focus,\n\tfieldset.error select:focus,\n\tfieldset.error textarea:focus {\n\t\toutline-color: var(--color-red) !important;\n\t}\n\tfieldset.error kol-alert.error {\n\t\tmargin-left: -0.25em;\n\t\tcolor: var(--color-red);\n\t\tfont-weight: 700;\n\t}\n\t.disabled {\n\t\topacity: 0.33;\n\t}\n\tfieldset.horizontal {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tgap: 0.5rem 1rem;\n\t}\n\tfieldset.horizontal legend {\n\t\tdisplay: inline-block;\n\t\tmargin-bottom: 0.25em;\n\t}\n\tfieldset .input-slot {\n\t\tgap: 0.5rem;\n\t}\n\tfieldset div label {\n\t\tpadding-left: 0;\n\t}',"KOL-TOAST-CONTAINER":":host {\n\t\ttop: 1rem;\n\t\tright: 1rem;\n\t\twidth: 440px;\n\t}","KOL-TOAST":".toast {\n\t\tmargin-top: 1rem;\n\t}","KOL-TABS":'button:disabled {\n\t\topacity: 0.5;\n\t\tcursor: not-allowed;\n\t}\n\t:host kol-button-group-wc {\n\t\tdisplay: inline-flex;\n\t\tgap: 2rem;\n\t\tflex-wrap: wrap;\n\t}\n\tbutton {\n\t\tbox-sizing: border-box;\n\t\tbackground-color: transparent;\n\t\tborder: 0;\n\t\tborder-radius: 0.25rem;\n\t\tfont-style: normal;\n\t\tfont-weight: 700;\n\t\tfont-size: 18px;\n\t\tline-height: 22px;\n\t\tmin-height: 44px;\n\t\tmin-width: 44px;\n\t\tcolor: var(--color-grey);\n\t\tpadding: 0;\n\t}\n\tbutton:hover {\n\t\tcolor: var(--color-midnight);\n\t}\n\tbutton.primary,\n\tbutton.selected {\n\t\t/* border-bottom: 0.025rem solid var(--color-midnight); */\n\t\tcolor: var(--color-midnight);\n\t}\n\tbutton kol-span-wc > span {\n\t\tborder-bottom: 0.25em solid;\n\t}\n\tbutton kol-span-wc > span {\n\t\tgap: 0.5rem;\n\t}\n\t:host > div > div {\n\t\tpadding: 0.25em 0;\n\t}\n\t.close-button {\n\t\tdisplay: none;\n\t\tfont-size: 25%;\n\t\theight: fit-content;\n\t\twidth: 0;\n\t}\n\t.close-button button {\n\t\twidth: 1rem;\n\t\tposition: relative;\n\t\theight: 1rem;\n\t\tleft: -4.25em;\n\t\ttop: 0.25em;\n\t}\n\tdiv[role="tabpanel"] {\n\t\theight: 100%;\n\t}\n\tdiv.grid {\n\t\theight: 100%;\n\t}\n\t:host > .tabs-align-right {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr auto;\n\t}\n\t:host > .tabs-align-right kol-button-group-wc {\n\t\tdisplay: grid;\n\t\torder: 2;\n\t}\n\t:host > .tabs-align-left {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: auto 1fr;\n\t}\n\t:host > .tabs-align-left kol-button-group-wc {\n\t\tdisplay: grid;\n\t\torder: 0;\n\t}\n\t:host > .tabs-align-bottom {\n\t\tdisplay: grid;\n\t\tgrid-template-rows: 1fr auto;\n\t}\n\t:host > .tabs-align-bottom kol-button-group-wc {\n\t\torder: 2;\n\t}\n\t:host > .tabs-align-bottom kol-button-group-wc > div {\n\t\tdisplay: flex;\n\t}\n\t:host > .tabs-align-bottom > kol-button-group-wc > div > div:first-child {\n\t\tmargin: 0px 1em 0px 0px;\n\t}\n\t:host > .tabs-align-bottom > kol-button-group-wc > div > div {\n\t\tmargin: 0px 1em;\n\t}\n\t:host > .tabs-align-top {\n\t\tdisplay: grid;\n\t\tgrid-template-rows: auto 1fr;\n\t}\n\t:host > .tabs-align-top kol-button-group-wc {\n\t\torder: 0;\n\t}\n\t:host > .tabs-align-top kol-button-group-wc > div {\n\t\tdisplay: flex;\n\t}\n\t:host > .tabs-align-top > kol-button-group-wc > div > div:first-child {\n\t\tmargin: 0px 1em 0px 0px;\n\t}\n\t:host > .tabs-align-top > kol-button-group-wc > div > div {\n\t\tmargin: 0px 1em;\n\t}\n\t:host > div {\n\t\tdisplay: grid;\n\t}\n\t:host > div.tabs-align-left {\n\t\tgrid-template-columns: auto 1fr;\n\t}\n\t:host > div.tabs-align-right {\n\t\tgrid-template-columns: 1fr auto;\n\t}\n\t:host > .tabs-align-left kol-button-group-wc,\n\t:host > .tabs-align-top kol-button-group-wc {\n\t\torder: 0;\n\t}\n\t:host > .tabs-align-bottom kol-button-group-wc,\n\t:host > .tabs-align-right kol-button-group-wc {\n\t\torder: 1;\n\t}\n\t:host > .tabs-align-left kol-button-group-wc,\n\t:host > .tabs-align-right kol-button-group-wc {\n\t\tgap: inherit;\n\t}\n\t:host > div.tabs-align-left kol-button-group-wc > div,\n\t:host > div.tabs-align-left kol-button-group-wc > div > div,\n\t:host > div.tabs-align-right kol-button-group-wc > div,\n\t:host > div.tabs-align-right kol-button-group-wc > div > div {\n\t\tdisplay: grid;\n\t}\n\t:host > div.tabs-align-left kol-button-group-wc > div > div kol-button-wc,\n\t:host > div.tabs-align-right kol-button-group-wc > div > div kol-button-wc {\n\t\twidth: 100%;\n\t}\n\t:host > div.tabs-align-bottom kol-button-group-wc div,\n\t:host > div.tabs-align-top kol-button-group-wc div {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t}\n\t:host kol-button-group-wc button {\n\t\tborder: none;\n\t}',"KOL-PAGINATION":':host {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr auto;\n\t\tgap: 1rem;\n\t\talign-items: center;\n\t}\n\t:host .navigation-list {\n\t\tdisplay: inline-flex;\n\t\tflex-wrap: wrap;\n\t\talign-items: center;\n\t\tgap: 0.5em;\n\t}\n\t:host .selected button {\n\t\tmin-width: 44px;\n\t\tmin-height: 44px;\n\t\tdisplay: grid;\n\t\tline-height: 1.5rem;\n\t\tfont-family: var(--font-family);\n\t\tcursor: not-allowed;\n\t\tfont-weight: 700;\n\t\tpadding: 10px 12px;\n\t\tborder-radius: 1.5em;\n\t\tborder: none;\n\t\tfont-size: 16px;\n\t\tfont-style: normal;\n\t\ttext-align: center;\n\t\twidth: inherit;\n\t\ttransition-duration: 0.5s;\n\t\ttransition-property: background-color, color, border-color;\n\t\tcolor: var(--color-midnight);\n\t\tbackground-color: var(--color-ice);\n\t\tborder-color: var(--color-ice);\n\t}\n\t:host > div > span {\n\t\talign-self: flex-end;\n\t\tpadding-bottom: 0.5rem;\n\t\tcolor: var(--color-midnight);\n\t}\n\tkol-button::part(icon) {\n\t\tfont-family: "Font Awesome 6 Free";\n\t\tfont-weight: 900;\n\t}\n\tkol-button.first::part(icon):before {\n\t\tcontent: "\\f100";\n\t}\n\tkol-button.previous::part(icon):before {\n\t\tcontent: "\\f104";\n\t}\n\tkol-button.next::part(icon):before {\n\t\tcontent: "\\f105";\n\t}\n\tkol-button.last::part(icon):before {\n\t\tcontent: "\\f101";\n\t}',"KOL-INPUT-RANGE":'kol-input {\n\t\tgap: 0.25em;\n\t}\n\tkol-input .error {\n\t\torder: 1;\n\t}\n\tkol-input label {\n\t\torder: 2;\n\t}\n\tkol-input .input {\n\t\torder: 3;\n\t}\n\tkol-input .hint {\n\t\torder: 4;\n\t\tfont-size: 0.875em;\n\t\tfont-style: italic;\n\t}\n\t.inputs-wrapper {\n\t\tgap: 1em;\n\t}\n\tinput::placeholder {\n\t\tcolor: var(--color-grey);\n\t}\n\t.input {\n\t\tbackground-color: var(--color-white);\n\t\tborder-color: var(--color-grey);\n\t\tborder-radius: var(--border-radius);\n\t\tborder-style: solid;\n\t\tborder-width: 2px;\n\t\tpadding: 0 1em;\n\t}\n\t.input > kol-icon {\n\t\twidth: 1em;\n\t}\n\t.input.icon-left > kol-icon:first-child {\n\t\tmargin-right: 0.5em;\n\t}\n\t.input.icon-right > kol-icon:last-child {\n\t\tmargin-left: 0.5em;\n\t}\n\t.input:is(.icon-left, .icon-right) {\n\t\tpadding-left: 1em;\n\t\tpadding-right: 1em;\n\t}\n\t.input:hover {\n\t\tborder-color: var(--color-midnight);\n\t}\n\tinput:read-only,\n\tinput:disabled {\n\t\tcursor: not-allowed;\n\t}\n\t.required label > span::after {\n\t\tcontent: "*";\n\t\tpadding-left: 0.125em;\n\t}\n\tkol-input.error {\n\t\tborder-left: 3px solid var(--color-red);\n\t\tpadding-left: 1em;\n\t}\n\tkol-input.error .input:focus-within {\n\t\toutline-color: var(--color-red) !important;\n\t}\n\tkol-input.error kol-alert.error {\n\t\tcolor: var(--color-red);\n\t\tfont-weight: 700;\n\t}\n\tkol-input.disabled :is(input, label) {\n\t\topacity: 1;\n\t}\n\tkol-input.disabled :is(.input) {\n\t\tbackground-color: var(--color-smoke);\n\t\tborder-color: var(--color-granite);\n\t\tcolor: var(--color-black);\n\t}',"KOL-LINK-BUTTON":":is(a, button):focus {\n\t\toutline: none;\n\t}\n\t:is(a, button):focus kol-span-wc {\n\t\toutline-color: var(--color-ocean);\n\t\toutline-offset: 2px;\n\t\toutline-style: solid;\n\t\toutline-width: 3px;\n\t\ttransition: outline-offset 0.2s linear;\n\t}\n\t:is(a, button) > kol-span-wc {\n\t\tfont-weight: 700;\n\t\tborder-radius: var(--a11y-min-size);\n\t\tborder-style: solid;\n\t\tborder-width: 2px;\n\t\tmin-height: var(--a11y-min-size);\n\t\tmin-width: var(--a11y-min-size);\n\t\tpadding: 8px 14px;\n\t\ttext-align: center;\n\t\ttransition-duration: 0.5s;\n\t\ttransition-property: background-color, color, border-color;\n\t}\n\t:is(a, button):disabled > kol-span-wc {\n\t\tcursor: not-allowed;\n\t\topacity: 0.5;\n\t}\n\t.primary :is(a, button) > kol-span-wc,\n\t.primary :is(a, button):disabled:hover > kol-span-wc {\n\t\tbackground-color: var(--color-midnight);\n\t\tborder-color: var(--color-midnight);\n\t\tcolor: var(--color-white);\n\t}\n\t.secondary :is(a, button) > kol-span-wc,\n\t.secondary :is(a, button):disabled:hover > kol-span-wc,\n\t.normal :is(a, button) > kol-span-wc,\n\t.normal :is(a, button):disabled:hover > kol-span-wc {\n\t\tbackground-color: var(--color-white);\n\t\tborder-color: var(--color-midnight);\n\t\tcolor: var(--color-midnight);\n\t}\n\t.danger :is(a, button) > kol-span-wc,\n\t.danger :is(a, button):disabled:hover > kol-span-wc {\n\t\tbackground-color: var(--color-red);\n\t\tborder-color: var(--color-red);\n\t\tcolor: var(--color-white);\n\t}\n\t.ghost :is(a, button) > kol-span-wc,\n\t.ghost :is(a, button):disabled:hover > kol-span-wc {\n\t\tborder-color: var(--color-white);\n\t\tbackground-color: var(--color-white);\n\t\tbox-shadow: none;\n\t\tcolor: var(--color-midnight);\n\t} /*-----------*/\n\t.primary :is(a, button):active > kol-span-wc,\n\t.primary :is(a, button):hover > kol-span-wc,\n\t.secondary :is(a, button):active > kol-span-wc,\n\t.secondary :is(a, button):hover > kol-span-wc,\n\t.normal :is(a, button):active > kol-span-wc,\n\t.normal :is(a, button):hover > kol-span-wc,\n\t.danger :is(a, button):active > kol-span-wc,\n\t.danger :is(a, button):hover > kol-span-wc,\n\t.ghost :is(a, button):active > kol-span-wc,\n\t.ghost :is(a, button):hover > kol-span-wc {\n\t\tbackground-color: var(--color-ocean);\n\t\tborder-color: var(--color-ocean);\n\t\tbox-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);\n\t\tcolor: var(--color-white);\n\t}\n\t.danger :is(a, button):active > kol-span-wc,\n\t.danger :is(a, button):hover > kol-span-wc {\n\t\tbackground-color: var(--color-crimson);\n\t\tborder-color: var(--color-crimson);\n\t}\n\t:is(a, button):disabled:hover > kol-span-wc,\n\t:is(a, button):focus:hover > kol-span-wc {\n\t\tbox-shadow: none;\n\t}\n\t.primary :is(a, button):active > kol-span-wc,\n\t.secondary :is(a, button):active > kol-span-wc,\n\t.normal :is(a, button):active > kol-span-wc,\n\t.danger :is(a, button):active > kol-span-wc,\n\t.ghost :is(a, button):active > kol-span-wc {\n\t\tborder-color: var(--color-white);\n\t\tbox-shadow: none;\n\t\toutline: none;\n\t}\n\t:is(a, button).hide-label > kol-span-wc {\n\t\tpadding: 8px;\n\t\twidth: unset;\n\t}\n\t:is(a, button).hide-label > kol-span-wc > span > span {\n\t\tdisplay: none;\n\t}\n\t:is(a, button).loading > kol-span-wc kol-icon {\n\t\tanimation: spin 5s infinite linear;\n\t}\n\t/** small ghost button */\n\t.ghost :is(a, button).small > kol-span-wc {\n\t\tborder: none;\n\t\tbackground-color: transparent;\n\t\tbox-shadow: none;\n\t}\n\t.ghost :is(a, button).small > kol-span-wc > span {\n\t\tborder-radius: 1.5em;\n\t\tborder-style: solid;\n\t\tborder-width: 2px;\n\t\tborder-color: var(--color-white);\n\t\tbackground-color: var(--color-white);\n\t}\n\t.ghost :is(a, button).small:active > kol-span-wc > span,\n\t.ghost :is(a, button).small:hover > kol-span-wc > span,\n\t.ghost :is(a, button).small.transparent:active > kol-span-wc > span,\n\t.ghost :is(a, button).small.transparent:hover > kol-span-wc > span {\n\t\tbackground-color: var(--color-ocean);\n\t\tborder-color: var(--color-ocean);\n\t\tbox-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);\n\t\tcolor: var(--color-white);\n\t} /** :is(a,button) with transparent background */\n\t:is(a, button).transparent > kol-span-wc > span,\n\t.ghost :is(a, button).small.transparent > kol-span-wc > span,\n\t:is(a, button).transparent > kol-span-wc {\n\t\tbackground-color: transparent;\n\t\tborder-color: transparent;\n\t}","KOL-BUTTON-LINK":":is(a, button) {\n\t\tcolor: var(--color-midnight);\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\ttext-decoration-line: underline;\n\t\tfont-size: inherit;\n\t}\n\t:is(a, button):focus {\n\t\toutline: none;\n\t}\n\t:is(a, button):focus kol-span-wc {\n\t\tborder-radius: var(--border-radius);\n\t\toutline: 2px solid;\n\t}\n\t:is(a, button):hover {\n\t\ttext-decoration-thickness: 0.25em;\n\t}\n\t:is(a, button):visited {\n\t\tcolor: var(--visited);\n\t}\n\t.hidden {\n\t\tdisplay: none;\n\t\tvisibility: hidden;\n\t}\n\t.skip {\n\t\tleft: -99999px;\n\t\toverflow: hidden;\n\t\tposition: absolute;\n\t\tz-index: 9999999;\n\t}\n\t.skip:focus {\n\t\tbackground: white;\n\t\tleft: unset;\n\t\tposition: unset;\n\t}","KOL-ABBR":"abbr {\n\t\tborder-bottom: dashed var(--color-black) 1px;\n\t\ttext-decoration: none !important;\n\t}","KOL-BREADCRUMB":'li:has(:is(kol-icon + kol-link, kol-icon + span)) kol-icon {\n\t\tfont-size: 0.75rem;\n\t}\n\tli:has(:is(kol-icon + kol-link, kol-icon + span)) kol-icon::part(icon) {\n\t\tfont-family: "Font Awesome 6 Free";\n\t\tfont-weight: 900;\n\t\tcolor: var(--color-grey);\n\t}\n\tli:has(:is(kol-icon + kol-link, kol-icon + span)) kol-icon::part(icon)::before {\n\t\tcontent: "\\f054";\n\t}\n\tkol-link::part(icon) {\n\t\tfont-size: 1.25rem;\n\t}\n\tul li > :is(span, kol-link) {\n\t\tline-height: 1.25rem;\n\t\theight: 20px;\n\t}\n\tul li:last-child > span {\n\t\tcolor: var(--color-grey);\n\t}',"KOL-MODAL":":host .overlay .modal {\n\t\tmax-height: calc(100% - 32px);\n\t}","KOL-ICON":':host {\n\t\twidth: 1em;\n\t\theight: 1em;\n\t}\n\t:host > i {\n\t\twidth: 1em;\n\t\theight: 1em;\n\t}\n\t@font-face {\n\t\tfont-family: "Material Icons";\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\tfont-display: block;\n\t\tsrc: url("./material-icons.woff2") format("woff2"),\n\t\t\turl("./material-icons.woff") format("woff");\n\t}\n\t.material-icons {\n\t\tfont-family: "Material Icons";\n\t\tfont-weight: normal;\n\t\tfont-style: normal;\n\t\tfont-size: 24px;\n\t\tline-height: 1;\n\t\tletter-spacing: normal;\n\t\ttext-transform: none;\n\t\tdisplay: inline-block;\n\t\twhite-space: nowrap;\n\t\tword-wrap: normal;\n\t\tdirection: ltr;\n\t\t-webkit-font-smoothing: antialiased;\n\t\t-moz-osx-font-smoothing: grayscale;\n\t\ttext-rendering: optimizeLegibility;\n\t\tfont-feature-settings: "liga";\n\t}\n\t@font-face {\n\t\tfont-family: "Material Icons Outlined";\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\tfont-display: block;\n\t\tsrc: url("./material-icons-outlined.woff2") format("woff2"),\n\t\t\turl("./material-icons-outlined.woff") format("woff");\n\t}\n\t.material-icons-outlined {\n\t\tfont-family: "Material Icons Outlined";\n\t\tfont-weight: normal;\n\t\tfont-style: normal;\n\t\tfont-size: 24px;\n\t\tline-height: 1;\n\t\tletter-spacing: normal;\n\t\ttext-transform: none;\n\t\tdisplay: inline-block;\n\t\twhite-space: nowrap;\n\t\tword-wrap: normal;\n\t\tdirection: ltr;\n\t\t-webkit-font-smoothing: antialiased;\n\t\t-moz-osx-font-smoothing: grayscale;\n\t\ttext-rendering: optimizeLegibility;\n\t\tfont-feature-settings: "liga";\n\t}\n\t@font-face {\n\t\tfont-family: "Material Icons Round";\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\tfont-display: block;\n\t\tsrc: url("./material-icons-round.woff2") format("woff2"),\n\t\t\turl("./material-icons-round.woff") format("woff");\n\t}\n\t.material-icons-round {\n\t\tfont-family: "Material Icons Round";\n\t\tfont-weight: normal;\n\t\tfont-style: normal;\n\t\tfont-size: 24px;\n\t\tline-height: 1;\n\t\tletter-spacing: normal;\n\t\ttext-transform: none;\n\t\tdisplay: inline-block;\n\t\twhite-space: nowrap;\n\t\tword-wrap: normal;\n\t\tdirection: ltr;\n\t\t-webkit-font-smoothing: antialiased;\n\t\t-moz-osx-font-smoothing: grayscale;\n\t\ttext-rendering: optimizeLegibility;\n\t\tfont-feature-settings: "liga";\n\t}\n\t@font-face {\n\t\tfont-family: "Material Icons Sharp";\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\tfont-display: block;\n\t\tsrc: url("./material-icons-sharp.woff2") format("woff2"),\n\t\t\turl("./material-icons-sharp.woff") format("woff");\n\t}\n\t.material-icons-sharp {\n\t\tfont-family: "Material Icons Sharp";\n\t\tfont-weight: normal;\n\t\tfont-style: normal;\n\t\tfont-size: 24px;\n\t\tline-height: 1;\n\t\tletter-spacing: normal;\n\t\ttext-transform: none;\n\t\tdisplay: inline-block;\n\t\twhite-space: nowrap;\n\t\tword-wrap: normal;\n\t\tdirection: ltr;\n\t\t-webkit-font-smoothing: antialiased;\n\t\t-moz-osx-font-smoothing: grayscale;\n\t\ttext-rendering: optimizeLegibility;\n\t\tfont-feature-settings: "liga";\n\t}\n\t@font-face {\n\t\tfont-family: "Material Icons Two Tone";\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\tfont-display: block;\n\t\tsrc: url("./material-icons-two-tone.woff2") format("woff2"),\n\t\t\turl("./material-icons-two-tone.woff") format("woff");\n\t}\n\t.material-icons-two-tone {\n\t\tfont-family: "Material Icons Two Tone";\n\t\tfont-weight: normal;\n\t\tfont-style: normal;\n\t\tfont-size: 24px;\n\t\tline-height: 1;\n\t\tletter-spacing: normal;\n\t\ttext-transform: none;\n\t\tdisplay: inline-block;\n\t\twhite-space: nowrap;\n\t\tword-wrap: normal;\n\t\tdirection: ltr;\n\t\t-webkit-font-smoothing: antialiased;\n\t\t-moz-osx-font-smoothing: grayscale;\n\t\ttext-rendering: optimizeLegibility;\n\t\tfont-feature-settings: "liga";\n\t}\n\t@font-face {\n\t\tfont-family: "Material Symbols Outlined";\n\t\tfont-style: normal;\n\t\tfont-weight: 100 700;\n\t\tfont-display: block;\n\t\tsrc: url("./material-symbols-outlined.woff2") format("woff2");\n\t}\n\t.material-symbols-outlined {\n\t\tfont-family: "Material Symbols Outlined";\n\t\tfont-weight: normal;\n\t\tfont-style: normal;\n\t\tfont-size: 24px;\n\t\tline-height: 1;\n\t\tletter-spacing: normal;\n\t\ttext-transform: none;\n\t\tdisplay: inline-block;\n\t\twhite-space: nowrap;\n\t\tword-wrap: normal;\n\t\tdirection: ltr;\n\t\t-webkit-font-smoothing: antialiased;\n\t\t-moz-osx-font-smoothing: grayscale;\n\t\ttext-rendering: optimizeLegibility;\n\t\tfont-feature-settings: "liga";\n\t}\n\t@font-face {\n\t\tfont-family: "Material Symbols Rounded";\n\t\tfont-style: normal;\n\t\tfont-weight: 100 700;\n\t\tfont-display: block;\n\t\tsrc: url("./material-symbols-rounded.woff2") format("woff2");\n\t}\n\t.material-symbols-rounded {\n\t\tfont-family: "Material Symbols Rounded";\n\t\tfont-weight: normal;\n\t\tfont-style: normal;\n\t\tfont-size: 24px;\n\t\tline-height: 1;\n\t\tletter-spacing: normal;\n\t\ttext-transform: none;\n\t\tdisplay: inline-block;\n\t\twhite-space: nowrap;\n\t\tword-wrap: normal;\n\t\tdirection: ltr;\n\t\t-webkit-font-smoothing: antialiased;\n\t\t-moz-osx-font-smoothing: grayscale;\n\t\ttext-rendering: optimizeLegibility;\n\t\tfont-feature-settings: "liga";\n\t}\n\t@font-face {\n\t\tfont-family: "Material Symbols Sharp";\n\t\tfont-style: normal;\n\t\tfont-weight: 100 700;\n\t\tfont-display: block;\n\t\tsrc: url("./material-symbols-sharp.woff2") format("woff2");\n\t}\n\t.material-symbols-sharp {\n\t\tfont-family: "Material Symbols Sharp";\n\t\tfont-weight: normal;\n\t\tfont-style: normal;\n\t\tfont-size: 24px;\n\t\tline-height: 1;\n\t\tletter-spacing: normal;\n\t\ttext-transform: none;\n\t\tdisplay: inline-block;\n\t\twhite-space: nowrap;\n\t\tword-wrap: normal;\n\t\tdirection: ltr;\n\t\t-webkit-font-smoothing: antialiased;\n\t\t-moz-osx-font-smoothing: grayscale;\n\t\ttext-rendering: optimizeLegibility;\n\t\tfont-feature-settings: "liga";\n\t}\n\t[class*="material-icons"].home:after {\n\t\tcontent: "home";\n\t}\n\t[class*="material-icons"].east:after {\n\t\tcontent: "east";\n\t}\n\t[class*="material-symbols"].home:after {\n\t\tcontent: "home";\n\t}\n\t[class*="material-symbols"].arrow_right_alt:after {\n\t\tcontent: "arrow_right_alt";\n\t} /*! * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) * Copyright 2022 Fonticons, Inc. */\n\t.fa {\n\t\tfont-family: var(--fa-style-family, "Font Awesome 6 Free");\n\t\tfont-weight: var(--fa-style, 900);\n\t}\n\t.fa,\n\t.fa-brands,\n\t.fa-duotone,\n\t.fa-light,\n\t.fa-regular,\n\t.fa-solid,\n\t.fa-thin,\n\t.fab,\n\t.fad,\n\t.fal,\n\t.far,\n\t.fas,\n\t.fat {\n\t\t-moz-osx-font-smoothing: grayscale;\n\t\t-webkit-font-smoothing: antialiased;\n\t\tdisplay: var(--fa-display, inline-block);\n\t\tfont-style: normal;\n\t\tfont-variant: normal;\n\t\tline-height: 1;\n\t\ttext-rendering: auto;\n\t}\n\t.fa-1x {\n\t\tfont-size: 1em;\n\t}\n\t.fa-2x {\n\t\tfont-size: 2em;\n\t}\n\t.fa-3x {\n\t\tfont-size: 3em;\n\t}\n\t.fa-4x {\n\t\tfont-size: 4em;\n\t}\n\t.fa-5x {\n\t\tfont-size: 5em;\n\t}\n\t.fa-6x {\n\t\tfont-size: 6em;\n\t}\n\t.fa-7x {\n\t\tfont-size: 7em;\n\t}\n\t.fa-8x {\n\t\tfont-size: 8em;\n\t}\n\t.fa-9x {\n\t\tfont-size: 9em;\n\t}\n\t.fa-10x {\n\t\tfont-size: 10em;\n\t}\n\t.fa-2xs {\n\t\tfont-size: 0.625em;\n\t\tline-height: 0.1em;\n\t\tvertical-align: 0.225em;\n\t}\n\t.fa-xs {\n\t\tfont-size: 0.75em;\n\t\tline-height: 0.08333em;\n\t\tvertical-align: 0.125em;\n\t}\n\t.fa-sm {\n\t\tfont-size: 0.875em;\n\t\tline-height: 0.07143em;\n\t\tvertical-align: 0.05357em;\n\t}\n\t.fa-lg {\n\t\tfont-size: 1.25em;\n\t\tline-height: 0.05em;\n\t\tvertical-align: -0.075em;\n\t}\n\t.fa-xl {\n\t\tfont-size: 1.5em;\n\t\tline-height: 0.04167em;\n\t\tvertical-align: -0.125em;\n\t}\n\t.fa-2xl {\n\t\tfont-size: 2em;\n\t\tline-height: 0.03125em;\n\t\tvertical-align: -0.1875em;\n\t}\n\t.fa-fw {\n\t\ttext-align: center;\n\t\twidth: 1.25em;\n\t}\n\t.fa-ul {\n\t\tlist-style-type: none;\n\t\tmargin-left: var(--fa-li-margin, 2.5em);\n\t\tpadding-left: 0;\n\t}\n\t.fa-ul > li {\n\t\tposition: relative;\n\t}\n\t.fa-li {\n\t\tleft: calc(var(--fa-li-width, 2em) * -1);\n\t\tposition: absolute;\n\t\ttext-align: center;\n\t\twidth: var(--fa-li-width, 2em);\n\t\tline-height: inherit;\n\t}\n\t.fa-border {\n\t\tborder-radius: var(--fa-border-radius, 0.1em);\n\t\tborder: var(--fa-border-width, 0.08em) var(--fa-border-style, solid)\n\t\t\tvar(--fa-border-color, #eee);\n\t\tpadding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n\t}\n\t.fa-pull-left {\n\t\tfloat: left;\n\t\tmargin-right: var(--fa-pull-margin, 0.3em);\n\t}\n\t.fa-pull-right {\n\t\tfloat: right;\n\t\tmargin-left: var(--fa-pull-margin, 0.3em);\n\t}\n\t.fa-beat {\n\t\t-webkit-animation-name: fa-beat;\n\t\tanimation-name: fa-beat;\n\t\t-webkit-animation-delay: var(--fa-animation-delay, 0);\n\t\tanimation-delay: var(--fa-animation-delay, 0);\n\t\t-webkit-animation-direction: var(--fa-animation-direction, normal);\n\t\tanimation-direction: var(--fa-animation-direction, normal);\n\t\t-webkit-animation-duration: var(--fa-animation-duration, 1s);\n\t\tanimation-duration: var(--fa-animation-duration, 1s);\n\t\t-webkit-animation-iteration-count: var(\n\t\t\t--fa-animation-iteration-count,\n\t\t\tinfinite\n\t\t);\n\t\tanimation-iteration-count: var(--fa-animation-iteration-count, infinite);\n\t\t-webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n\t\tanimation-timing-function: var(--fa-animation-timing, ease-in-out);\n\t}\n\t.fa-bounce {\n\t\t-webkit-animation-name: fa-bounce;\n\t\tanimation-name: fa-bounce;\n\t\t-webkit-animation-delay: var(--fa-animation-delay, 0);\n\t\tanimation-delay: var(--fa-animation-delay, 0);\n\t\t-webkit-animation-direction: var(--fa-animation-direction, normal);\n\t\tanimation-direction: var(--fa-animation-direction, normal);\n\t\t-webkit-animation-duration: var(--fa-animation-duration, 1s);\n\t\tanimation-duration: var(--fa-animation-duration, 1s);\n\t\t-webkit-animation-iteration-count: var(\n\t\t\t--fa-animation-iteration-count,\n\t\t\tinfinite\n\t\t);\n\t\tanimation-iteration-count: var(--fa-animation-iteration-count, infinite);\n\t\t-webkit-animation-timing-function: var(\n\t\t\t--fa-animation-timing,\n\t\t\tcubic-bezier(0.28, 0.84, 0.42, 1)\n\t\t);\n\t\tanimation-timing-function: var(\n\t\t\t--fa-animation-timing,\n\t\t\tcubic-bezier(0.28, 0.84, 0.42, 1)\n\t\t);\n\t}\n\t.fa-fade {\n\t\t-webkit-animation-name: fa-fade;\n\t\tanimation-name: fa-fade;\n\t\t-webkit-animation-iteration-count: var(\n\t\t\t--fa-animation-iteration-count,\n\t\t\tinfinite\n\t\t);\n\t\tanimation-iteration-count: var(--fa-animation-iteration-count, infinite);\n\t\t-webkit-animation-timing-function: var(\n\t\t\t--fa-animation-timing,\n\t\t\tcubic-bezier(0.4, 0, 0.6, 1)\n\t\t);\n\t\tanimation-timing-function: var(\n\t\t\t--fa-animation-timing,\n\t\t\tcubic-bezier(0.4, 0, 0.6, 1)\n\t\t);\n\t}\n\t.fa-beat-fade,\n\t.fa-fade {\n\t\t-webkit-animation-delay: var(--fa-animation-delay, 0);\n\t\tanimation-delay: var(--fa-animation-delay, 0);\n\t\t-webkit-animation-direction: var(--fa-animation-direction, normal);\n\t\tanimation-direction: var(--fa-animation-direction, normal);\n\t\t-webkit-animation-duration: var(--fa-animation-duration, 1s);\n\t\tanimation-duration: var(--fa-animation-duration, 1s);\n\t}\n\t.fa-beat-fade {\n\t\t-webkit-animation-name: fa-beat-fade;\n\t\tanimation-name: fa-beat-fade;\n\t\t-webkit-animation-iteration-count: var(\n\t\t\t--fa-animation-iteration-count,\n\t\t\tinfinite\n\t\t);\n\t\tanimation-iteration-count: var(--fa-animation-iteration-count, infinite);\n\t\t-webkit-animation-timing-function: var(\n\t\t\t--fa-animation-timing,\n\t\t\tcubic-bezier(0.4, 0, 0.6, 1)\n\t\t);\n\t\tanimation-timing-function: var(\n\t\t\t--fa-animation-timing,\n\t\t\tcubic-bezier(0.4, 0, 0.6, 1)\n\t\t);\n\t}\n\t.fa-flip {\n\t\t-webkit-animation-name: fa-flip;\n\t\tanimation-name: fa-flip;\n\t\t-webkit-animation-delay: var(--fa-animation-delay, 0);\n\t\tanimation-delay: var(--fa-animation-delay, 0);\n\t\t-webkit-animation-direction: var(--fa-animation-direction, normal);\n\t\tanimation-direction: var(--fa-animation-direction, normal);\n\t\t-webkit-animation-duration: var(--fa-animation-duration, 1s);\n\t\tanimation-duration: var(--fa-animation-duration, 1s);\n\t\t-webkit-animation-iteration-count: var(\n\t\t\t--fa-animation-iteration-count,\n\t\t\tinfinite\n\t\t);\n\t\tanimation-iteration-count: var(--fa-animation-iteration-count, infinite);\n\t\t-webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);\n\t\tanimation-timing-function: var(--fa-animation-timing, ease-in-out);\n\t}\n\t.fa-shake {\n\t\t-webkit-animation-name: fa-shake;\n\t\tanimation-name: fa-shake;\n\t\t-webkit-animation-duration: var(--fa-animation-duration, 1s);\n\t\tanimation-duration: var(--fa-animation-duration, 1s);\n\t\t-webkit-animation-iteration-count: var(\n\t\t\t--fa-animation-iteration-count,\n\t\t\tinfinite\n\t\t);\n\t\tanimation-iteration-count: var(--fa-animation-iteration-count, infinite);\n\t\t-webkit-animation-timing-function: var(--fa-animation-timing, linear);\n\t\tanimation-timing-function: var(--fa-animation-timing, linear);\n\t}\n\t.fa-shake,\n\t.fa-spin {\n\t\t-webkit-animation-delay: var(--fa-animation-delay, 0);\n\t\tanimation-delay: var(--fa-animation-delay, 0);\n\t\t-webkit-animation-direction: var(--fa-animation-direction, normal);\n\t\tanimation-direction: var(--fa-animation-direction, normal);\n\t}\n\t.fa-spin {\n\t\t-webkit-animation-name: fa-spin;\n\t\tanimation-name: fa-spin;\n\t\t-webkit-animation-duration: var(--fa-animation-duration, 2s);\n\t\tanimation-duration: var(--fa-animation-duration, 2s);\n\t\t-webkit-animation-iteration-count: var(\n\t\t\t--fa-animation-iteration-count,\n\t\t\tinfinite\n\t\t);\n\t\tanimation-iteration-count: var(--fa-animation-iteration-count, infinite);\n\t\t-webkit-animation-timing-function: var(--fa-animation-timing, linear);\n\t\tanimation-timing-function: var(--fa-animation-timing, linear);\n\t}\n\t.fa-spin-reverse {\n\t\t--fa-animation-direction: reverse;\n\t}\n\t.fa-pulse,\n\t.fa-spin-pulse {\n\t\t-webkit-animation-name: fa-spin;\n\t\tanimation-name: fa-spin;\n\t\t-webkit-animation-direction: var(--fa-animation-direction, normal);\n\t\tanimation-direction: var(--fa-animation-direction, normal);\n\t\t-webkit-animation-duration: var(--fa-animation-duration, 1s);\n\t\tanimation-duration: var(--fa-animation-duration, 1s);\n\t\t-webkit-animation-iteration-count: var(\n\t\t\t--fa-animation-iteration-count,\n\t\t\tinfinite\n\t\t);\n\t\tanimation-iteration-count: var(--fa-animation-iteration-count, infinite);\n\t\t-webkit-animation-timing-function: var(--fa-animation-timing, steps(8));\n\t\tanimation-timing-function: var(--fa-animation-timing, steps(8));\n\t}\n\t@media (prefers-reduced-motion: reduce) {\n\t\t.fa-beat,\n\t\t.fa-beat-fade,\n\t\t.fa-bounce,\n\t\t.fa-fade,\n\t\t.fa-flip,\n\t\t.fa-pulse,\n\t\t.fa-shake,\n\t\t.fa-spin,\n\t\t.fa-spin-pulse {\n\t\t\t-webkit-animation-delay: -1ms;\n\t\t\tanimation-delay: -1ms;\n\t\t\t-webkit-animation-duration: 1ms;\n\t\t\tanimation-duration: 1ms;\n\t\t\t-webkit-animation-iteration-count: 1;\n\t\t\tanimation-iteration-count: 1;\n\t\t\ttransition-delay: 0s;\n\t\t\ttransition-duration: 0s;\n\t\t}\n\t}\n\t@-webkit-keyframes fa-beat {\n\t\t0%,\n\t\t90% {\n\t\t\t-webkit-transform: scale(1);\n\t\t\ttransform: scale(1);\n\t\t}\n\t\t45% {\n\t\t\t-webkit-transform: scale(var(--fa-beat-scale, 1.25));\n\t\t\ttransform: scale(var(--fa-beat-scale, 1.25));\n\t\t}\n\t}\n\t@keyframes fa-beat {\n\t\t0%,\n\t\t90% {\n\t\t\t-webkit-transform: scale(1);\n\t\t\ttransform: scale(1);\n\t\t}\n\t\t45% {\n\t\t\t-webkit-transform: scale(var(--fa-beat-scale, 1.25));\n\t\t\ttransform: scale(var(--fa-beat-scale, 1.25));\n\t\t}\n\t}\n\t@-webkit-keyframes fa-bounce {\n\t\t0% {\n\t\t\t-webkit-transform: scale(1) translateY(0);\n\t\t\ttransform: scale(1) translateY(0);\n\t\t}\n\t\t10% {\n\t\t\t-webkit-transform: scale(\n\t\t\t\t\tvar(--fa-bounce-start-scale-x, 1.1),\n\t\t\t\t\tvar(--fa-bounce-start-scale-y, 0.9)\n\t\t\t\t)\n\t\t\t\ttranslateY(0);\n\t\t\ttransform: scale(\n\t\t\t\t\tvar(--fa-bounce-start-scale-x, 1.1),\n\t\t\t\t\tvar(--fa-bounce-start-scale-y, 0.9)\n\t\t\t\t)\n\t\t\t\ttranslateY(0);\n\t\t}\n\t\t30% {\n\t\t\t-webkit-transform: scale(\n\t\t\t\t\tvar(--fa-bounce-jump-scale-x, 0.9),\n\t\t\t\t\tvar(--fa-bounce-jump-scale-y, 1.1)\n\t\t\t\t)\n\t\t\t\ttranslateY(var(--fa-bounce-height, -0.5em));\n\t\t\ttransform: scale(\n\t\t\t\t\tvar(--fa-bounce-jump-scale-x, 0.9),\n\t\t\t\t\tvar(--fa-bounce-jump-scale-y, 1.1)\n\t\t\t\t)\n\t\t\t\ttranslateY(var(--fa-bounce-height, -0.5em));\n\t\t}\n\t\t50% {\n\t\t\t-webkit-transform: scale(\n\t\t\t\t\tvar(--fa-bounce-land-scale-x, 1.05),\n\t\t\t\t\tvar(--fa-bounce-land-scale-y, 0.95)\n\t\t\t\t)\n\t\t\t\ttranslateY(0);\n\t\t\ttransform: scale(\n\t\t\t\t\tvar(--fa-bounce-land-scale-x, 1.05),\n\t\t\t\t\tvar(--fa-bounce-land-scale-y, 0.95)\n\t\t\t\t)\n\t\t\t\ttranslateY(0);\n\t\t}\n\t\t57% {\n\t\t\t-webkit-transform: scale(1) translateY(var(--fa-bounce-rebound, -0.125em));\n\t\t\ttransform: scale(1) translateY(var(--fa-bounce-rebound, -0.125em));\n\t\t}\n\t\t64% {\n\t\t\t-webkit-transform: scale(1) translateY(0);\n\t\t\ttransform: scale(1) translateY(0);\n\t\t}\n\t\tto {\n\t\t\t-webkit-transform: scale(1) translateY(0);\n\t\t\ttransform: scale(1) translateY(0);\n\t\t}\n\t}\n\t@keyframes fa-bounce {\n\t\t0% {\n\t\t\t-webkit-transform: scale(1) translateY(0);\n\t\t\ttransform: scale(1) translateY(0);\n\t\t}\n\t\t10% {\n\t\t\t-webkit-transform: scale(\n\t\t\t\t\tvar(--fa-bounce-start-scale-x, 1.1),\n\t\t\t\t\tvar(--fa-bounce-start-scale-y, 0.9)\n\t\t\t\t)\n\t\t\t\ttranslateY(0);\n\t\t\ttransform: scale(\n\t\t\t\t\tvar(--fa-bounce-start-scale-x, 1.1),\n\t\t\t\t\tvar(--fa-bounce-start-scale-y, 0.9)\n\t\t\t\t)\n\t\t\t\ttranslateY(0);\n\t\t}\n\t\t30% {\n\t\t\t-webkit-transform: scale(\n\t\t\t\t\tvar(--fa-bounce-jump-scale-x, 0.9),\n\t\t\t\t\tvar(--fa-bounce-jump-scale-y, 1.1)\n\t\t\t\t)\n\t\t\t\ttranslateY(var(--fa-bounce-height, -0.5em));\n\t\t\ttransform: scale(\n\t\t\t\t\tvar(--fa-bounce-jump-scale-x, 0.9),\n\t\t\t\t\tvar(--fa-bounce-jump-scale-y, 1.1)\n\t\t\t\t)\n\t\t\t\ttranslateY(var(--fa-bounce-height, -0.5em));\n\t\t}\n\t\t50% {\n\t\t\t-webkit-transform: scale(\n\t\t\t\t\tvar(--fa-bounce-land-scale-x, 1.05),\n\t\t\t\t\tvar(--fa-bounce-land-scale-y, 0.95)\n\t\t\t\t)\n\t\t\t\ttranslateY(0);\n\t\t\ttransform: scale(\n\t\t\t\t\tvar(--fa-bounce-land-scale-x, 1.05),\n\t\t\t\t\tvar(--fa-bounce-land-scale-y, 0.95)\n\t\t\t\t)\n\t\t\t\ttranslateY(0);\n\t\t}\n\t\t57% {\n\t\t\t-webkit-transform: scale(1) translateY(var(--fa-bounce-rebound, -0.125em));\n\t\t\ttransform: scale(1) translateY(var(--fa-bounce-rebound, -0.125em));\n\t\t}\n\t\t64% {\n\t\t\t-webkit-transform: scale(1) translateY(0);\n\t\t\ttransform: scale(1) translateY(0);\n\t\t}\n\t\tto {\n\t\t\t-webkit-transform: scale(1) translateY(0);\n\t\t\ttransform: scale(1) translateY(0);\n\t\t}\n\t}\n\t@-webkit-keyframes fa-fade {\n\t\t50% {\n\t\t\topacity: var(--fa-fade-opacity, 0.4);\n\t\t}\n\t}\n\t@keyframes fa-fade {\n\t\t50% {\n\t\t\topacity: var(--fa-fade-opacity, 0.4);\n\t\t}\n\t}\n\t@-webkit-keyframes fa-beat-fade {\n\t\t0%,\n\t\tto {\n\t\t\topacity: var(--fa-beat-fade-opacity, 0.4);\n\t\t\t-webkit-transform: scale(1);\n\t\t\ttransform: scale(1);\n\t\t}\n\t\t50% {\n\t\t\topacity: 1;\n\t\t\t-webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n\t\t\ttransform: scale(var(--fa-beat-fade-scale, 1.125));\n\t\t}\n\t}\n\t@keyframes fa-beat-fade {\n\t\t0%,\n\t\tto {\n\t\t\topacity: var(--fa-beat-fade-opacity, 0.4);\n\t\t\t-webkit-transform: scale(1);\n\t\t\ttransform: scale(1);\n\t\t}\n\t\t50% {\n\t\t\topacity: 1;\n\t\t\t-webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));\n\t\t\ttransform: scale(var(--fa-beat-fade-scale, 1.125));\n\t\t}\n\t}\n\t@-webkit-keyframes fa-flip {\n\t\t50% {\n\t\t\t-webkit-transform: rotate3d(\n\t\t\t\tvar(--fa-flip-x, 0),\n\t\t\t\tvar(--fa-flip-y, 1),\n\t\t\t\tvar(--fa-flip-z, 0),\n\t\t\t\tvar(--fa-flip-angle, -180deg)\n\t\t\t);\n\t\t\ttransform: rotate3d(\n\t\t\t\tvar(--fa-flip-x, 0),\n\t\t\t\tvar(--fa-flip-y, 1),\n\t\t\t\tvar(--fa-flip-z, 0),\n\t\t\t\tvar(--fa-flip-angle, -180deg)\n\t\t\t);\n\t\t}\n\t}\n\t@keyframes fa-flip {\n\t\t50% {\n\t\t\t-webkit-transform: rotate3d(\n\t\t\t\tvar(--fa-flip-x, 0),\n\t\t\t\tvar(--fa-flip-y, 1),\n\t\t\t\tvar(--fa-flip-z, 0),\n\t\t\t\tvar(--fa-flip-angle, -180deg)\n\t\t\t);\n\t\t\ttransform: rotate3d(\n\t\t\t\tvar(--fa-flip-x, 0),\n\t\t\t\tvar(--fa-flip-y, 1),\n\t\t\t\tvar(--fa-flip-z, 0),\n\t\t\t\tvar(--fa-flip-angle, -180deg)\n\t\t\t);\n\t\t}\n\t}\n\t@-webkit-keyframes fa-shake {\n\t\t0% {\n\t\t\t-webkit-transform: rotate(-15deg);\n\t\t\ttransform: rotate(-15deg);\n\t\t}\n\t\t4% {\n\t\t\t-webkit-transform: rotate(15deg);\n\t\t\ttransform: rotate(15deg);\n\t\t}\n\t\t8%,\n\t\t24% {\n\t\t\t-webkit-transform: rotate(-18deg);\n\t\t\ttransform: rotate(-18deg);\n\t\t}\n\t\t12%,\n\t\t28% {\n\t\t\t-webkit-transform: rotate(18deg);\n\t\t\ttransform: rotate(18deg);\n\t\t}\n\t\t16% {\n\t\t\t-webkit-transform: rotate(-22deg);\n\t\t\ttransform: rotate(-22deg);\n\t\t}\n\t\t20% {\n\t\t\t-webkit-transform: rotate(22deg);\n\t\t\ttransform: rotate(22deg);\n\t\t}\n\t\t32% {\n\t\t\t-webkit-transform: rotate(-12deg);\n\t\t\ttransform: rotate(-12deg);\n\t\t}\n\t\t36% {\n\t\t\t-webkit-transform: rotate(12deg);\n\t\t\ttransform: rotate(12deg);\n\t\t}\n\t\t40%,\n\t\tto {\n\t\t\t-webkit-transform: rotate(0deg);\n\t\t\ttransform: rotate(0deg);\n\t\t}\n\t}\n\t@keyframes fa-shake {\n\t\t0% {\n\t\t\t-webkit-transform: rotate(-15deg);\n\t\t\ttransform: rotate(-15deg);\n\t\t}\n\t\t4% {\n\t\t\t-webkit-transform: rotate(15deg);\n\t\t\ttransform: rotate(15deg);\n\t\t}\n\t\t8%,\n\t\t24% {\n\t\t\t-webkit-transform: rotate(-18deg);\n\t\t\ttransform: rotate(-18deg);\n\t\t}\n\t\t12%,\n\t\t28% {\n\t\t\t-webkit-transform: rotate(18deg);\n\t\t\ttransform: rotate(18deg);\n\t\t}\n\t\t16% {\n\t\t\t-webkit-transform: rotate(-22deg);\n\t\t\ttransform: rotate(-22deg);\n\t\t}\n\t\t20% {\n\t\t\t-webkit-transform: rotate(22deg);\n\t\t\ttransform: rotate(22deg);\n\t\t}\n\t\t32% {\n\t\t\t-webkit-transform: rotate(-12deg);\n\t\t\ttransform: rotate(-12deg);\n\t\t}\n\t\t36% {\n\t\t\t-webkit-transform: rotate(12deg);\n\t\t\ttransform: rotate(12deg);\n\t\t}\n\t\t40%,\n\t\tto {\n\t\t\t-webkit-transform: rotate(0deg);\n\t\t\ttransform: rotate(0deg);\n\t\t}\n\t}\n\t@-webkit-keyframes fa-spin {\n\t\t0% {\n\t\t\t-webkit-transform: rotate(0deg);\n\t\t\ttransform: rotate(0deg);\n\t\t}\n\t\tto {\n\t\t\t-webkit-transform: rotate(1turn);\n\t\t\ttransform: rotate(1turn);\n\t\t}\n\t}\n\t@keyframes fa-spin {\n\t\t0% {\n\t\t\t-webkit-transform: rotate(0deg);\n\t\t\ttransform: rotate(0deg);\n\t\t}\n\t\tto {\n\t\t\t-webkit-transform: rotate(1turn);\n\t\t\ttransform: rotate(1turn);\n\t\t}\n\t}\n\t.fa-rotate-90 {\n\t\t-webkit-transform: rotate(90deg);\n\t\ttransform: rotate(90deg);\n\t}\n\t.fa-rotate-180 {\n\t\t-webkit-transform: rotate(180deg);\n\t\ttransform: rotate(180deg);\n\t}\n\t.fa-rotate-270 {\n\t\t-webkit-transform: rotate(270deg);\n\t\ttransform: rotate(270deg);\n\t}\n\t.fa-flip-horizontal {\n\t\t-webkit-transform: scaleX(-1);\n\t\ttransform: scaleX(-1);\n\t}\n\t.fa-flip-vertical {\n\t\t-webkit-transform: scaleY(-1);\n\t\ttransform: scaleY(-1);\n\t}\n\t.fa-flip-both,\n\t.fa-flip-horizontal.fa-flip-vertical {\n\t\t-webkit-transform: scale(-1);\n\t\ttransform: scale(-1);\n\t}\n\t.fa-rotate-by {\n\t\t-webkit-transform: rotate(var(--fa-rotate-angle, none));\n\t\ttransform: rotate(var(--fa-rotate-angle, none));\n\t}\n\t.fa-stack {\n\t\tdisplay: inline-block;\n\t\theight: 2em;\n\t\tline-height: 2em;\n\t\tposition: relative;\n\t\tvertical-align: middle;\n\t\twidth: 2.5em;\n\t}\n\t.fa-stack-1x,\n\t.fa-stack-2x {\n\t\tleft: 0;\n\t\tposition: absolute;\n\t\ttext-align: center;\n\t\twidth: 100%;\n\t\tz-index: var(--fa-stack-z-index, auto);\n\t}\n\t.fa-stack-1x {\n\t\tline-height: inherit;\n\t}\n\t.fa-stack-2x {\n\t\tfont-size: 2em;\n\t}\n\t.fa-inverse {\n\t\tcolor: var(--fa-inverse, #fff);\n\t}\n\t.fa-0:before {\n\t\tcontent: "\\30";\n\t}\n\t.fa-1:before {\n\t\tcontent: "\\31";\n\t}\n\t.fa-2:before {\n\t\tcontent: "\\32";\n\t}\n\t.fa-3:before {\n\t\tcontent: "\\33";\n\t}\n\t.fa-4:before {\n\t\tcontent: "\\34";\n\t}\n\t.fa-5:before {\n\t\tcontent: "\\35";\n\t}\n\t.fa-6:before {\n\t\tcontent: "\\36";\n\t}\n\t.fa-7:before {\n\t\tcontent: "\\37";\n\t}\n\t.fa-8:before {\n\t\tcontent: "\\38";\n\t}\n\t.fa-9:before {\n\t\tcontent: "\\39";\n\t}\n\t.fa-a:before {\n\t\tcontent: "\\41";\n\t}\n\t.fa-address-book:before,\n\t.fa-contact-book:before {\n\t\tcontent: "\\f2b9";\n\t}\n\t.fa-address-card:before,\n\t.fa-contact-card:before,\n\t.fa-vcard:before {\n\t\tcontent: "\\f2bb";\n\t}\n\t.fa-align-center:before {\n\t\tcontent: "\\f037";\n\t}\n\t.fa-align-justify:before {\n\t\tcontent: "\\f039";\n\t}\n\t.fa-align-left:before {\n\t\tcontent: "\\f036";\n\t}\n\t.fa-align-right:before {\n\t\tcontent: "\\f038";\n\t}\n\t.fa-anchor:before {\n\t\tcontent: "\\f13d";\n\t}\n\t.fa-anchor-circle-check:before {\n\t\tcontent: "\\e4aa";\n\t}\n\t.fa-anchor-circle-exclamation:before {\n\t\tcontent: "\\e4ab";\n\t}\n\t.fa-anchor-circle-xmark:before {\n\t\tcontent: "\\e4ac";\n\t}\n\t.fa-anchor-lock:before {\n\t\tcontent: "\\e4ad";\n\t}\n\t.fa-angle-down:before {\n\t\tcontent: "\\f107";\n\t}\n\t.fa-angle-left:before {\n\t\tcontent: "\\f104";\n\t}\n\t.fa-angle-right:before {\n\t\tcontent: "\\f105";\n\t}\n\t.fa-angle-up:before {\n\t\tcontent: "\\f106";\n\t}\n\t.fa-angle-double-down:before,\n\t.fa-angles-down:before {\n\t\tcontent: "\\f103";\n\t}\n\t.fa-angle-double-left:before,\n\t.fa-angles-left:before {\n\t\tcontent: "\\f100";\n\t}\n\t.fa-angle-double-right:before,\n\t.fa-angles-right:before {\n\t\tcontent: "\\f101";\n\t}\n\t.fa-angle-double-up:before,\n\t.fa-angles-up:before {\n\t\tcontent: "\\f102";\n\t}\n\t.fa-ankh:before {\n\t\tcontent: "\\f644";\n\t}\n\t.fa-apple-alt:before,\n\t.fa-apple-whole:before {\n\t\tcontent: "\\f5d1";\n\t}\n\t.fa-archway:before {\n\t\tcontent: "\\f557";\n\t}\n\t.fa-arrow-down:before {\n\t\tcontent: "\\f063";\n\t}\n\t.fa-arrow-down-1-9:before,\n\t.fa-sort-numeric-asc:before,\n\t.fa-sort-numeric-down:before {\n\t\tcontent: "\\f162";\n\t}\n\t.fa-arrow-down-9-1:before,\n\t.fa-sort-numeric-desc:before,\n\t.fa-sort-numeric-down-alt:before {\n\t\tcontent: "\\f886";\n\t}\n\t.fa-arrow-down-a-z:before,\n\t.fa-sort-alpha-asc:before,\n\t.fa-sort-alpha-down:before {\n\t\tcontent: "\\f15d";\n\t}\n\t.fa-arrow-down-long:before,\n\t.fa-long-arrow-down:before {\n\t\tcontent: "\\f175";\n\t}\n\t.fa-arrow-down-short-wide:before,\n\t.fa-sort-amount-desc:before,\n\t.fa-sort-amount-down-alt:before {\n\t\tcontent: "\\f884";\n\t}\n\t.fa-arrow-down-up-across-line:before {\n\t\tcontent: "\\e4af";\n\t}\n\t.fa-arrow-down-up-lock:before {\n\t\tcontent: "\\e4b0";\n\t}\n\t.fa-arrow-down-wide-short:before,\n\t.fa-sort-amount-asc:before,\n\t.fa-sort-amount-down:before {\n\t\tcontent: "\\f160";\n\t}\n\t.fa-arrow-down-z-a:before,\n\t.fa-sort-alpha-desc:before,\n\t.fa-sort-alpha-down-alt:before {\n\t\tcontent: "\\f881";\n\t}\n\t.fa-arrow-left:before {\n\t\tcontent: "\\f060";\n\t}\n\t.fa-arrow-left-long:before,\n\t.fa-long-arrow-left:before {\n\t\tcontent: "\\f177";\n\t}\n\t.fa-arrow-pointer:before,\n\t.fa-mouse-pointer:before {\n\t\tcontent: "\\f245";\n\t}\n\t.fa-arrow-right:before {\n\t\tcontent: "\\f061";\n\t}\n\t.fa-arrow-right-arrow-left:before,\n\t.fa-exchange:before {\n\t\tcontent: "\\f0ec";\n\t}\n\t.fa-arrow-right-from-bracket:before,\n\t.fa-sign-out:before {\n\t\tcontent: "\\f08b";\n\t}\n\t.fa-arrow-right-long:before,\n\t.fa-long-arrow-right:before {\n\t\tcontent: "\\f178";\n\t}\n\t.fa-arrow-right-to-bracket:before,\n\t.fa-sign-in:before {\n\t\tcontent: "\\f090";\n\t}\n\t.fa-arrow-right-to-city:before {\n\t\tcontent: "\\e4b3";\n\t}\n\t.fa-arrow-left-rotate:before,\n\t.fa-arrow-rotate-back:before,\n\t.fa-arrow-rotate-backward:before,\n\t.fa-arrow-rotate-left:before,\n\t.fa-undo:before {\n\t\tcontent: "\\f0e2";\n\t}\n\t.fa-arrow-right-rotate:before,\n\t.fa-arrow-rotate-forward:before,\n\t.fa-arrow-rotate-right:before,\n\t.fa-redo:before {\n\t\tcontent: "\\f01e";\n\t}\n\t.fa-arrow-trend-down:before {\n\t\tcontent: "\\e097";\n\t}\n\t.fa-arrow-trend-up:before {\n\t\tcontent: "\\e098";\n\t}\n\t.fa-arrow-turn-down:before,\n\t.fa-level-down:before {\n\t\tcontent: "\\f149";\n\t}\n\t.fa-arrow-turn-up:before,\n\t.fa-level-up:before {\n\t\tcontent: "\\f148";\n\t}\n\t.fa-arrow-up:before {\n\t\tcontent: "\\f062";\n\t}\n\t.fa-arrow-up-1-9:before,\n\t.fa-sort-numeric-up:before {\n\t\tcontent: "\\f163";\n\t}\n\t.fa-arrow-up-9-1:before,\n\t.fa-sort-numeric-up-alt:before {\n\t\tcontent: "\\f887";\n\t}\n\t.fa-arrow-up-a-z:before,\n\t.fa-sort-alpha-up:before {\n\t\tcontent: "\\f15e";\n\t}\n\t.fa-arrow-up-from-bracket:before {\n\t\tcontent: "\\e09a";\n\t}\n\t.fa-arrow-up-from-ground-water:before {\n\t\tcontent: "\\e4b5";\n\t}\n\t.fa-arrow-up-from-water-pump:before {\n\t\tcontent: "\\e4b6";\n\t}\n\t.fa-arrow-up-long:before,\n\t.fa-long-arrow-up:before {\n\t\tcontent: "\\f176";\n\t}\n\t.fa-arrow-up-right-dots:before {\n\t\tcontent: "\\e4b7";\n\t}\n\t.fa-arrow-up-right-from-square:before,\n\t.fa-external-link:before {\n\t\tcontent: "\\f08e";\n\t}\n\t.fa-arrow-up-short-wide:before,\n\t.fa-sort-amount-up-alt:before {\n\t\tcontent: "\\f885";\n\t}\n\t.fa-arrow-up-wide-short:before,\n\t.fa-sort-amount-up:before {\n\t\tcontent: "\\f161";\n\t}\n\t.fa-arrow-up-z-a:before,\n\t.fa-sort-alpha-up-alt:before {\n\t\tcontent: "\\f882";\n\t}\n\t.fa-arrows-down-to-line:before {\n\t\tcontent: "\\e4b8";\n\t}\n\t.fa-arrows-down-to-people:before {\n\t\tcontent: "\\e4b9";\n\t}\n\t.fa-arrows-h:before,\n\t.fa-arrows-left-right:before {\n\t\tcontent: "\\f07e";\n\t}\n\t.fa-arrows-left-right-to-line:before {\n\t\tcontent: "\\e4ba";\n\t}\n\t.fa-arrows-rotate:before,\n\t.fa-refresh:before,\n\t.fa-sync:before {\n\t\tcontent: "\\f021";\n\t}\n\t.fa-arrows-spin:before {\n\t\tcontent: "\\e4bb";\n\t}\n\t.fa-arrows-split-up-and-left:before {\n\t\tcontent: "\\e4bc";\n\t}\n\t.fa-arrows-to-circle:before {\n\t\tcontent: "\\e4bd";\n\t}\n\t.fa-arrows-to-dot:before {\n\t\tcontent: "\\e4be";\n\t}\n\t.fa-arrows-to-eye:before {\n\t\tcontent: "\\e4bf";\n\t}\n\t.fa-arrows-turn-right:before {\n\t\tcontent: "\\e4c0";\n\t}\n\t.fa-arrows-turn-to-dots:before {\n\t\tcontent: "\\e4c1";\n\t}\n\t.fa-arrows-up-down:before,\n\t.fa-arrows-v:before {\n\t\tcontent: "\\f07d";\n\t}\n\t.fa-arrows-up-down-left-right:before,\n\t.fa-arrows:before {\n\t\tcontent: "\\f047";\n\t}\n\t.fa-arrows-up-to-line:before {\n\t\tcontent: "\\e4c2";\n\t}\n\t.fa-asterisk:before {\n\t\tcontent: "\\2a";\n\t}\n\t.fa-at:before {\n\t\tcontent: "\\40";\n\t}\n\t.fa-atom:before {\n\t\tcontent: "\\f5d2";\n\t}\n\t.fa-audio-description:before {\n\t\tcontent: "\\f29e";\n\t}\n\t.fa-austral-sign:before {\n\t\tcontent: "\\e0a9";\n\t}\n\t.fa-award:before {\n\t\tcontent: "\\f559";\n\t}\n\t.fa-b:before {\n\t\tcontent: "\\42";\n\t}\n\t.fa-baby:before {\n\t\tcontent: "\\f77c";\n\t}\n\t.fa-baby-carriage:before,\n\t.fa-carriage-baby:before {\n\t\tcontent: "\\f77d";\n\t}\n\t.fa-backward:before {\n\t\tcontent: "\\f04a";\n\t}\n\t.fa-backward-fast:before,\n\t.fa-fast-backward:before {\n\t\tcontent: "\\f049";\n\t}\n\t.fa-backward-step:before,\n\t.fa-step-backward:before {\n\t\tcontent: "\\f048";\n\t}\n\t.fa-bacon:before {\n\t\tcontent: "\\f7e5";\n\t}\n\t.fa-bacteria:before {\n\t\tcontent: "\\e059";\n\t}\n\t.fa-bacterium:before {\n\t\tcontent: "\\e05a";\n\t}\n\t.fa-bag-shopping:before,\n\t.fa-shopping-bag:before {\n\t\tcontent: "\\f290";\n\t}\n\t.fa-bahai:before {\n\t\tcontent: "\\f666";\n\t}\n\t.fa-baht-sign:before {\n\t\tcontent: "\\e0ac";\n\t}\n\t.fa-ban:before,\n\t.fa-cancel:before {\n\t\tcontent: "\\f05e";\n\t}\n\t.fa-ban-smoking:before,\n\t.fa-smoking-ban:before {\n\t\tcontent: "\\f54d";\n\t}\n\t.fa-band-aid:before,\n\t.fa-bandage:before {\n\t\tcontent: "\\f462";\n\t}\n\t.fa-barcode:before {\n\t\tcontent: "\\f02a";\n\t}\n\t.fa-bars:before,\n\t.fa-navicon:before {\n\t\tcontent: "\\f0c9";\n\t}\n\t.fa-bars-progress:before,\n\t.fa-tasks-alt:before {\n\t\tcontent: "\\f828";\n\t}\n\t.fa-bars-staggered:before,\n\t.fa-reorder:before,\n\t.fa-stream:before {\n\t\tcontent: "\\f550";\n\t}\n\t.fa-baseball-ball:before,\n\t.fa-baseball:before {\n\t\tcontent: "\\f433";\n\t}\n\t.fa-baseball-bat-ball:before {\n\t\tcontent: "\\f432";\n\t}\n\t.fa-basket-shopping:before,\n\t.fa-shopping-basket:before {\n\t\tcontent: "\\f291";\n\t}\n\t.fa-basketball-ball:before,\n\t.fa-basketball:before {\n\t\tcontent: "\\f434";\n\t}\n\t.fa-bath:before,\n\t.fa-bathtub:before {\n\t\tcontent: "\\f2cd";\n\t}\n\t.fa-battery-0:before,\n\t.fa-battery-empty:before {\n\t\tcontent: "\\f244";\n\t}\n\t.fa-battery-5:before,\n\t.fa-battery-full:before,\n\t.fa-battery:before {\n\t\tcontent: "\\f240";\n\t}\n\t.fa-battery-3:before,\n\t.fa-battery-half:before {\n\t\tcontent: "\\f242";\n\t}\n\t.fa-battery-2:before,\n\t.fa-battery-quarter:before {\n\t\tcontent: "\\f243";\n\t}\n\t.fa-battery-4:before,\n\t.fa-battery-three-quarters:before {\n\t\tcontent: "\\f241";\n\t}\n\t.fa-bed:before {\n\t\tcontent: "\\f236";\n\t}\n\t.fa-bed-pulse:before,\n\t.fa-procedures:before {\n\t\tcontent: "\\f487";\n\t}\n\t.fa-beer-mug-empty:before,\n\t.fa-beer:before {\n\t\tcontent: "\\f0fc";\n\t}\n\t.fa-bell:before {\n\t\tcontent: "\\f0f3";\n\t}\n\t.fa-bell-concierge:before,\n\t.fa-concierge-bell:before {\n\t\tcontent: "\\f562";\n\t}\n\t.fa-bell-slash:before {\n\t\tcontent: "\\f1f6";\n\t}\n\t.fa-bezier-curve:before {\n\t\tcontent: "\\f55b";\n\t}\n\t.fa-bicycle:before {\n\t\tcontent: "\\f206";\n\t}\n\t.fa-binoculars:before {\n\t\tcontent: "\\f1e5";\n\t}\n\t.fa-biohazard:before {\n\t\tcontent: "\\f780";\n\t}\n\t.fa-bitcoin-sign:before {\n\t\tcontent: "\\e0b4";\n\t}\n\t.fa-blender:before {\n\t\tcontent: "\\f517";\n\t}\n\t.fa-blender-phone:before {\n\t\tcontent: "\\f6b6";\n\t}\n\t.fa-blog:before {\n\t\tcontent: "\\f781";\n\t}\n\t.fa-bold:before {\n\t\tcontent: "\\f032";\n\t}\n\t.fa-bolt:before,\n\t.fa-zap:before {\n\t\tcontent: "\\f0e7";\n\t}\n\t.fa-bolt-lightning:before {\n\t\tcontent: "\\e0b7";\n\t}\n\t.fa-bomb:before {\n\t\tcontent: "\\f1e2";\n\t}\n\t.fa-bone:before {\n\t\tcontent: "\\f5d7";\n\t}\n\t.fa-bong:before {\n\t\tcontent: "\\f55c";\n\t}\n\t.fa-book:before {\n\t\tcontent: "\\f02d";\n\t}\n\t.fa-atlas:before,\n\t.fa-book-atlas:before {\n\t\tcontent: "\\f558";\n\t}\n\t.fa-bible:before,\n\t.fa-book-bible:before {\n\t\tcontent: "\\f647";\n\t}\n\t.fa-book-bookmark:before {\n\t\tcontent: "\\e0bb";\n\t}\n\t.fa-book-journal-whills:before,\n\t.fa-journal-whills:before {\n\t\tcontent: "\\f66a";\n\t}\n\t.fa-book-medical:before {\n\t\tcontent: "\\f7e6";\n\t}\n\t.fa-book-open:before {\n\t\tcontent: "\\f518";\n\t}\n\t.fa-book-open-reader:before,\n\t.fa-book-reader:before {\n\t\tcontent: "\\f5da";\n\t}\n\t.fa-book-quran:before,\n\t.fa-quran:before {\n\t\tcontent: "\\f687";\n\t}\n\t.fa-book-dead:before,\n\t.fa-book-skull:before {\n\t\tcontent: "\\f6b7";\n\t}\n\t.fa-bookmark:before {\n\t\tcontent: "\\f02e";\n\t}\n\t.fa-border-all:before {\n\t\tcontent: "\\f84c";\n\t}\n\t.fa-border-none:before {\n\t\tcontent: "\\f850";\n\t}\n\t.fa-border-style:before,\n\t.fa-border-top-left:before {\n\t\tcontent: "\\f853";\n\t}\n\t.fa-bore-hole:before {\n\t\tcontent: "\\e4c3";\n\t}\n\t.fa-bottle-droplet:before {\n\t\tcontent: "\\e4c4";\n\t}\n\t.fa-bottle-water:before {\n\t\tcontent: "\\e4c5";\n\t}\n\t.fa-bowl-food:before {\n\t\tcontent: "\\e4c6";\n\t}\n\t.fa-bowl-rice:before {\n\t\tcontent: "\\e2eb";\n\t}\n\t.fa-bowling-ball:before {\n\t\tcontent: "\\f436";\n\t}\n\t.fa-box:before {\n\t\tcontent: "\\f466";\n\t}\n\t.fa-archive:before,\n\t.fa-box-archive:before {\n\t\tcontent: "\\f187";\n\t}\n\t.fa-box-open:before {\n\t\tcontent: "\\f49e";\n\t}\n\t.fa-box-tissue:before {\n\t\tcontent: "\\e05b";\n\t}\n\t.fa-boxes-packing:before {\n\t\tcontent: "\\e4c7";\n\t}\n\t.fa-boxes-alt:before,\n\t.fa-boxes-stacked:before,\n\t.fa-boxes:before {\n\t\tcontent: "\\f468";\n\t}\n\t.fa-braille:before {\n\t\tcontent: "\\f2a1";\n\t}\n\t.fa-brain:before {\n\t\tcontent: "\\f5dc";\n\t}\n\t.fa-brazilian-real-sign:before {\n\t\tcontent: "\\e46c";\n\t}\n\t.fa-bread-slice:before {\n\t\tcontent: "\\f7ec";\n\t}\n\t.fa-bridge:before {\n\t\tcontent: "\\e4c8";\n\t}\n\t.fa-bridge-circle-check:before {\n\t\tcontent: "\\e4c9";\n\t}\n\t.fa-bridge-circle-exclamation:before {\n\t\tcontent: "\\e4ca";\n\t}\n\t.fa-bridge-circle-xmark:before {\n\t\tcontent: "\\e4cb";\n\t}\n\t.fa-bridge-lock:before {\n\t\tcontent: "\\e4cc";\n\t}\n\t.fa-bridge-water:before {\n\t\tcontent: "\\e4ce";\n\t}\n\t.fa-briefcase:before {\n\t\tcontent: "\\f0b1";\n\t}\n\t.fa-briefcase-medical:before {\n\t\tcontent: "\\f469";\n\t}\n\t.fa-broom:before {\n\t\tcontent: "\\f51a";\n\t}\n\t.fa-broom-ball:before,\n\t.fa-quidditch-broom-ball:before,\n\t.fa-quidditch:before {\n\t\tcontent: "\\f458";\n\t}\n\t.fa-brush:before {\n\t\tcontent: "\\f55d";\n\t}\n\t.fa-bucket:before {\n\t\tcontent: "\\e4cf";\n\t}\n\t.fa-bug:before {\n\t\tcontent: "\\f188";\n\t}\n\t.fa-bug-slash:before {\n\t\tcontent: "\\e490";\n\t}\n\t.fa-bugs:before {\n\t\tcontent: "\\e4d0";\n\t}\n\t.fa-building:before {\n\t\tcontent: "\\f1ad";\n\t}\n\t.fa-building-circle-arrow-right:before {\n\t\tcontent: "\\e4d1";\n\t}\n\t.fa-building-circle-check:before {\n\t\tcontent: "\\e4d2";\n\t}\n\t.fa-building-circle-exclamation:before {\n\t\tcontent: "\\e4d3";\n\t}\n\t.fa-building-circle-xmark:before {\n\t\tcontent: "\\e4d4";\n\t}\n\t.fa-bank:before,\n\t.fa-building-columns:before,\n\t.fa-institution:before,\n\t.fa-museum:before,\n\t.fa-university:before {\n\t\tcontent: "\\f19c";\n\t}\n\t.fa-building-flag:before {\n\t\tcontent: "\\e4d5";\n\t}\n\t.fa-building-lock:before {\n\t\tcontent: "\\e4d6";\n\t}\n\t.fa-building-ngo:before {\n\t\tcontent: "\\e4d7";\n\t}\n\t.fa-building-shield:before {\n\t\tcontent: "\\e4d8";\n\t}\n\t.fa-building-un:before {\n\t\tcontent: "\\e4d9";\n\t}\n\t.fa-building-user:before {\n\t\tcontent: "\\e4da";\n\t}\n\t.fa-building-wheat:before {\n\t\tcontent: "\\e4db";\n\t}\n\t.fa-bullhorn:before {\n\t\tcontent: "\\f0a1";\n\t}\n\t.fa-bullseye:before {\n\t\tcontent: "\\f140";\n\t}\n\t.fa-burger:before,\n\t.fa-hamburger:before {\n\t\tcontent: "\\f805";\n\t}\n\t.fa-burst:before {\n\t\tcontent: "\\e4dc";\n\t}\n\t.fa-bus:before {\n\t\tcontent: "\\f207";\n\t}\n\t.fa-bus-alt:before,\n\t.fa-bus-simple:before {\n\t\tcontent: "\\f55e";\n\t}\n\t.fa-briefcase-clock:before,\n\t.fa-business-time:before {\n\t\tcontent: "\\f64a";\n\t}\n\t.fa-c:before {\n\t\tcontent: "\\43";\n\t}\n\t.fa-birthday-cake:before,\n\t.fa-cake-candles:before,\n\t.fa-cake:before {\n\t\tcontent: "\\f1fd";\n\t}\n\t.fa-calculator:before {\n\t\tcontent: "\\f1ec";\n\t}\n\t.fa-calendar:before {\n\t\tcontent: "\\f133";\n\t}\n\t.fa-calendar-check:before {\n\t\tcontent: "\\f274";\n\t}\n\t.fa-calendar-day:before {\n\t\tcontent: "\\f783";\n\t}\n\t.fa-calendar-alt:before,\n\t.fa-calendar-days:before {\n\t\tcontent: "\\f073";\n\t}\n\t.fa-calendar-minus:before {\n\t\tcontent: "\\f272";\n\t}\n\t.fa-calendar-plus:before {\n\t\tcontent: "\\f271";\n\t}\n\t.fa-calendar-week:before {\n\t\tcontent: "\\f784";\n\t}\n\t.fa-calendar-times:before,\n\t.fa-calendar-xmark:before {\n\t\tcontent: "\\f273";\n\t}\n\t.fa-camera-alt:before,\n\t.fa-camera:before {\n\t\tcontent: "\\f030";\n\t}\n\t.fa-camera-retro:before {\n\t\tcontent: "\\f083";\n\t}\n\t.fa-camera-rotate:before {\n\t\tcontent: "\\e0d8";\n\t}\n\t.fa-campground:before {\n\t\tcontent: "\\f6bb";\n\t}\n\t.fa-candy-cane:before {\n\t\tcontent: "\\f786";\n\t}\n\t.fa-cannabis:before {\n\t\tcontent: "\\f55f";\n\t}\n\t.fa-capsules:before {\n\t\tcontent: "\\f46b";\n\t}\n\t.fa-automobile:before,\n\t.fa-car:before {\n\t\tcontent: "\\f1b9";\n\t}\n\t.fa-battery-car:before,\n\t.fa-car-battery:before {\n\t\tcontent: "\\f5df";\n\t}\n\t.fa-car-burst:before,\n\t.fa-car-crash:before {\n\t\tcontent: "\\f5e1";\n\t}\n\t.fa-car-on:before {\n\t\tcontent: "\\e4dd";\n\t}\n\t.fa-car-alt:before,\n\t.fa-car-rear:before {\n\t\tcontent: "\\f5de";\n\t}\n\t.fa-car-side:before {\n\t\tcontent: "\\f5e4";\n\t}\n\t.fa-car-tunnel:before {\n\t\tcontent: "\\e4de";\n\t}\n\t.fa-caravan:before {\n\t\tcontent: "\\f8ff";\n\t}\n\t.fa-caret-down:before {\n\t\tcontent: "\\f0d7";\n\t}\n\t.fa-caret-left:before {\n\t\tcontent: "\\f0d9";\n\t}\n\t.fa-caret-right:before {\n\t\tcontent: "\\f0da";\n\t}\n\t.fa-caret-up:before {\n\t\tcontent: "\\f0d8";\n\t}\n\t.fa-carrot:before {\n\t\tcontent: "\\f787";\n\t}\n\t.fa-cart-arrow-down:before {\n\t\tcontent: "\\f218";\n\t}\n\t.fa-cart-flatbed:before,\n\t.fa-dolly-flatbed:before {\n\t\tcontent: "\\f474";\n\t}\n\t.fa-cart-flatbed-suitcase:before,\n\t.fa-luggage-cart:before {\n\t\tcontent: "\\f59d";\n\t}\n\t.fa-cart-plus:before {\n\t\tcontent: "\\f217";\n\t}\n\t.fa-cart-shopping:before,\n\t.fa-shopping-cart:before {\n\t\tcontent: "\\f07a";\n\t}\n\t.fa-cash-register:before {\n\t\tcontent: "\\f788";\n\t}\n\t.fa-cat:before {\n\t\tcontent: "\\f6be";\n\t}\n\t.fa-cedi-sign:before {\n\t\tcontent: "\\e0df";\n\t}\n\t.fa-cent-sign:before {\n\t\tcontent: "\\e3f5";\n\t}\n\t.fa-certificate:before {\n\t\tcontent: "\\f0a3";\n\t}\n\t.fa-chair:before {\n\t\tcontent: "\\f6c0";\n\t}\n\t.fa-blackboard:before,\n\t.fa-chalkboard:before {\n\t\tcontent: "\\f51b";\n\t}\n\t.fa-chalkboard-teacher:before,\n\t.fa-chalkboard-user:before {\n\t\tcontent: "\\f51c";\n\t}\n\t.fa-champagne-glasses:before,\n\t.fa-glass-cheers:before {\n\t\tcontent: "\\f79f";\n\t}\n\t.fa-charging-station:before {\n\t\tcontent: "\\f5e7";\n\t}\n\t.fa-area-chart:before,\n\t.fa-chart-area:before {\n\t\tcontent: "\\f1fe";\n\t}\n\t.fa-bar-chart:before,\n\t.fa-chart-bar:before {\n\t\tcontent: "\\f080";\n\t}\n\t.fa-chart-column:before {\n\t\tcontent: "\\e0e3";\n\t}\n\t.fa-chart-gantt:before {\n\t\tcontent: "\\e0e4";\n\t}\n\t.fa-chart-line:before,\n\t.fa-line-chart:before {\n\t\tcontent: "\\f201";\n\t}\n\t.fa-chart-pie:before,\n\t.fa-pie-chart:before {\n\t\tcontent: "\\f200";\n\t}\n\t.fa-chart-simple:before {\n\t\tcontent: "\\e473";\n\t}\n\t.fa-check:before {\n\t\tcontent: "\\f00c";\n\t}\n\t.fa-check-double:before {\n\t\tcontent: "\\f560";\n\t}\n\t.fa-check-to-slot:before,\n\t.fa-vote-yea:before {\n\t\tcontent: "\\f772";\n\t}\n\t.fa-cheese:before {\n\t\tcontent: "\\f7ef";\n\t}\n\t.fa-chess:before {\n\t\tcontent: "\\f439";\n\t}\n\t.fa-chess-bishop:before {\n\t\tcontent: "\\f43a";\n\t}\n\t.fa-chess-board:before {\n\t\tcontent: "\\f43c";\n\t}\n\t.fa-chess-king:before {\n\t\tcontent: "\\f43f";\n\t}\n\t.fa-chess-knight:before {\n\t\tcontent: "\\f441";\n\t}\n\t.fa-chess-pawn:before {\n\t\tcontent: "\\f443";\n\t}\n\t.fa-chess-queen:before {\n\t\tcontent: "\\f445";\n\t}\n\t.fa-chess-rook:before {\n\t\tcontent: "\\f447";\n\t}\n\t.fa-chevron-down:before {\n\t\tcontent: "\\f078";\n\t}\n\t.fa-chevron-left:before {\n\t\tcontent: "\\f053";\n\t}\n\t.fa-chevron-right:before {\n\t\tcontent: "\\f054";\n\t}\n\t.fa-chevron-up:before {\n\t\tcontent: "\\f077";\n\t}\n\t.fa-child:before {\n\t\tcontent: "\\f1ae";\n\t}\n\t.fa-child-dress:before {\n\t\tcontent: "\\e59c";\n\t}\n\t.fa-child-reaching:before {\n\t\tcontent: "\\e59d";\n\t}\n\t.fa-child-rifle:before {\n\t\tcontent: "\\e4e0";\n\t}\n\t.fa-children:before {\n\t\tcontent: "\\e4e1";\n\t}\n\t.fa-church:before {\n\t\tcontent: "\\f51d";\n\t}\n\t.fa-circle:before {\n\t\tcontent: "\\f111";\n\t}\n\t.fa-arrow-circle-down:before,\n\t.fa-circle-arrow-down:before {\n\t\tcontent: "\\f0ab";\n\t}\n\t.fa-arrow-circle-left:before,\n\t.fa-circle-arrow-left:before {\n\t\tcontent: "\\f0a8";\n\t}\n\t.fa-arrow-circle-right:before,\n\t.fa-circle-arrow-right:before {\n\t\tcontent: "\\f0a9";\n\t}\n\t.fa-arrow-circle-up:before,\n\t.fa-circle-arrow-up:before {\n\t\tcontent: "\\f0aa";\n\t}\n\t.fa-check-circle:before,\n\t.fa-circle-check:before {\n\t\tcontent: "\\f058";\n\t}\n\t.fa-chevron-circle-down:before,\n\t.fa-circle-chevron-down:before {\n\t\tcontent: "\\f13a";\n\t}\n\t.fa-chevron-circle-left:before,\n\t.fa-circle-chevron-left:before {\n\t\tcontent: "\\f137";\n\t}\n\t.fa-chevron-circle-right:before,\n\t.fa-circle-chevron-right:before {\n\t\tcontent: "\\f138";\n\t}\n\t.fa-chevron-circle-up:before,\n\t.fa-circle-chevron-up:before {\n\t\tcontent: "\\f139";\n\t}\n\t.fa-circle-dollar-to-slot:before,\n\t.fa-donate:before {\n\t\tcontent: "\\f4b9";\n\t}\n\t.fa-circle-dot:before,\n\t.fa-dot-circle:before {\n\t\tcontent: "\\f192";\n\t}\n\t.fa-arrow-alt-circle-down:before,\n\t.fa-circle-down:before {\n\t\tcontent: "\\f358";\n\t}\n\t.fa-circle-exclamation:before,\n\t.fa-exclamation-circle:before {\n\t\tcontent: "\\f06a";\n\t}\n\t.fa-circle-h:before,\n\t.fa-hospital-symbol:before {\n\t\tcontent: "\\f47e";\n\t}\n\t.fa-adjust:before,\n\t.fa-circle-half-stroke:before {\n\t\tcontent: "\\f042";\n\t}\n\t.fa-circle-info:before,\n\t.fa-info-circle:before {\n\t\tcontent: "\\f05a";\n\t}\n\t.fa-arrow-alt-circle-left:before,\n\t.fa-circle-left:before {\n\t\tcontent: "\\f359";\n\t}\n\t.fa-circle-minus:before,\n\t.fa-minus-circle:before {\n\t\tcontent: "\\f056";\n\t}\n\t.fa-circle-nodes:before {\n\t\tcontent: "\\e4e2";\n\t}\n\t.fa-circle-notch:before {\n\t\tcontent: "\\f1ce";\n\t}\n\t.fa-circle-pause:before,\n\t.fa-pause-circle:before {\n\t\tcontent: "\\f28b";\n\t}\n\t.fa-circle-play:before,\n\t.fa-play-circle:before {\n\t\tcontent: "\\f144";\n\t}\n\t.fa-circle-plus:before,\n\t.fa-plus-circle:before {\n\t\tcontent: "\\f055";\n\t}\n\t.fa-circle-question:before,\n\t.fa-question-circle:before {\n\t\tcontent: "\\f059";\n\t}\n\t.fa-circle-radiation:before,\n\t.fa-radiation-alt:before {\n\t\tcontent: "\\f7ba";\n\t}\n\t.fa-arrow-alt-circle-right:before,\n\t.fa-circle-right:before {\n\t\tcontent: "\\f35a";\n\t}\n\t.fa-circle-stop:before,\n\t.fa-stop-circle:before {\n\t\tcontent: "\\f28d";\n\t}\n\t.fa-arrow-alt-circle-up:before,\n\t.fa-circle-up:before {\n\t\tcontent: "\\f35b";\n\t}\n\t.fa-circle-user:before,\n\t.fa-user-circle:before {\n\t\tcontent: "\\f2bd";\n\t}\n\t.fa-circle-xmark:before,\n\t.fa-times-circle:before,\n\t.fa-xmark-circle:before {\n\t\tcontent: "\\f057";\n\t}\n\t.fa-city:before {\n\t\tcontent: "\\f64f";\n\t}\n\t.fa-clapperboard:before {\n\t\tcontent: "\\e131";\n\t}\n\t.fa-clipboard:before {\n\t\tcontent: "\\f328";\n\t}\n\t.fa-clipboard-check:before {\n\t\tcontent: "\\f46c";\n\t}\n\t.fa-clipboard-list:before {\n\t\tcontent: "\\f46d";\n\t}\n\t.fa-clipboard-question:before {\n\t\tcontent: "\\e4e3";\n\t}\n\t.fa-clipboard-user:before {\n\t\tcontent: "\\f7f3";\n\t}\n\t.fa-clock-four:before,\n\t.fa-clock:before {\n\t\tcontent: "\\f017";\n\t}\n\t.fa-clock-rotate-left:before,\n\t.fa-history:before {\n\t\tcontent: "\\f1da";\n\t}\n\t.fa-clone:before {\n\t\tcontent: "\\f24d";\n\t}\n\t.fa-closed-captioning:before {\n\t\tcontent: "\\f20a";\n\t}\n\t.fa-cloud:before {\n\t\tcontent: "\\f0c2";\n\t}\n\t.fa-cloud-arrow-down:before,\n\t.fa-cloud-download-alt:before,\n\t.fa-cloud-download:before {\n\t\tcontent: "\\f0ed";\n\t}\n\t.fa-cloud-arrow-up:before,\n\t.fa-cloud-upload-alt:before,\n\t.fa-cloud-upload:before {\n\t\tcontent: "\\f0ee";\n\t}\n\t.fa-cloud-bolt:before,\n\t.fa-thunderstorm:before {\n\t\tcontent: "\\f76c";\n\t}\n\t.fa-cloud-meatball:before {\n\t\tcontent: "\\f73b";\n\t}\n\t.fa-cloud-moon:before {\n\t\tcontent: "\\f6c3";\n\t}\n\t.fa-cloud-moon-rain:before {\n\t\tcontent: "\\f73c";\n\t}\n\t.fa-cloud-rain:before {\n\t\tcontent: "\\f73d";\n\t}\n\t.fa-cloud-showers-heavy:before {\n\t\tcontent: "\\f740";\n\t}\n\t.fa-cloud-showers-water:before {\n\t\tcontent: "\\e4e4";\n\t}\n\t.fa-cloud-sun:before {\n\t\tcontent: "\\f6c4";\n\t}\n\t.fa-cloud-sun-rain:before {\n\t\tcontent: "\\f743";\n\t}\n\t.fa-clover:before {\n\t\tcontent: "\\e139";\n\t}\n\t.fa-code:before {\n\t\tcontent: "\\f121";\n\t}\n\t.fa-code-branch:before {\n\t\tcontent: "\\f126";\n\t}\n\t.fa-code-commit:before {\n\t\tcontent: "\\f386";\n\t}\n\t.fa-code-compare:before {\n\t\tcontent: "\\e13a";\n\t}\n\t.fa-code-fork:before {\n\t\tcontent: "\\e13b";\n\t}\n\t.fa-code-merge:before {\n\t\tcontent: "\\f387";\n\t}\n\t.fa-code-pull-request:before {\n\t\tcontent: "\\e13c";\n\t}\n\t.fa-coins:before {\n\t\tcontent: "\\f51e";\n\t}\n\t.fa-colon-sign:before {\n\t\tcontent: "\\e140";\n\t}\n\t.fa-comment:before {\n\t\tcontent: "\\f075";\n\t}\n\t.fa-comment-dollar:before {\n\t\tcontent: "\\f651";\n\t}\n\t.fa-comment-dots:before,\n\t.fa-commenting:before {\n\t\tcontent: "\\f4ad";\n\t}\n\t.fa-comment-medical:before {\n\t\tcontent: "\\f7f5";\n\t}\n\t.fa-comment-slash:before {\n\t\tcontent: "\\f4b3";\n\t}\n\t.fa-comment-sms:before,\n\t.fa-sms:before {\n\t\tcontent: "\\f7cd";\n\t}\n\t.fa-comments:before {\n\t\tcontent: "\\f086";\n\t}\n\t.fa-comments-dollar:before {\n\t\tcontent: "\\f653";\n\t}\n\t.fa-compact-disc:before {\n\t\tcontent: "\\f51f";\n\t}\n\t.fa-compass:before {\n\t\tcontent: "\\f14e";\n\t}\n\t.fa-compass-drafting:before,\n\t.fa-drafting-compass:before {\n\t\tcontent: "\\f568";\n\t}\n\t.fa-compress:before {\n\t\tcontent: "\\f066";\n\t}\n\t.fa-computer:before {\n\t\tcontent: "\\e4e5";\n\t}\n\t.fa-computer-mouse:before,\n\t.fa-mouse:before {\n\t\tcontent: "\\f8cc";\n\t}\n\t.fa-cookie:before {\n\t\tcontent: "\\f563";\n\t}\n\t.fa-cookie-bite:before {\n\t\tcontent: "\\f564";\n\t}\n\t.fa-copy:before {\n\t\tcontent: "\\f0c5";\n\t}\n\t.fa-copyright:before {\n\t\tcontent: "\\f1f9";\n\t}\n\t.fa-couch:before {\n\t\tcontent: "\\f4b8";\n\t}\n\t.fa-cow:before {\n\t\tcontent: "\\f6c8";\n\t}\n\t.fa-credit-card-alt:before,\n\t.fa-credit-card:before {\n\t\tcontent: "\\f09d";\n\t}\n\t.fa-crop:before {\n\t\tcontent: "\\f125";\n\t}\n\t.fa-crop-alt:before,\n\t.fa-crop-simple:before {\n\t\tcontent: "\\f565";\n\t}\n\t.fa-cross:before {\n\t\tcontent: "\\f654";\n\t}\n\t.fa-crosshairs:before {\n\t\tcontent: "\\f05b";\n\t}\n\t.fa-crow:before {\n\t\tcontent: "\\f520";\n\t}\n\t.fa-crown:before {\n\t\tcontent: "\\f521";\n\t}\n\t.fa-crutch:before {\n\t\tcontent: "\\f7f7";\n\t}\n\t.fa-cruzeiro-sign:before {\n\t\tcontent: "\\e152";\n\t}\n\t.fa-cube:before {\n\t\tcontent: "\\f1b2";\n\t}\n\t.fa-cubes:before {\n\t\tcontent: "\\f1b3";\n\t}\n\t.fa-cubes-stacked:before {\n\t\tcontent: "\\e4e6";\n\t}\n\t.fa-d:before {\n\t\tcontent: "\\44";\n\t}\n\t.fa-database:before {\n\t\tcontent: "\\f1c0";\n\t}\n\t.fa-backspace:before,\n\t.fa-delete-left:before {\n\t\tcontent: "\\f55a";\n\t}\n\t.fa-democrat:before {\n\t\tcontent: "\\f747";\n\t}\n\t.fa-desktop-alt:before,\n\t.fa-desktop:before {\n\t\tcontent: "\\f390";\n\t}\n\t.fa-dharmachakra:before {\n\t\tcontent: "\\f655";\n\t}\n\t.fa-diagram-next:before {\n\t\tcontent: "\\e476";\n\t}\n\t.fa-diagram-predecessor:before {\n\t\tcontent: "\\e477";\n\t}\n\t.fa-diagram-project:before,\n\t.fa-project-diagram:before {\n\t\tcontent: "\\f542";\n\t}\n\t.fa-diagram-successor:before {\n\t\tcontent: "\\e47a";\n\t}\n\t.fa-diamond:before {\n\t\tcontent: "\\f219";\n\t}\n\t.fa-diamond-turn-right:before,\n\t.fa-directions:before {\n\t\tcontent: "\\f5eb";\n\t}\n\t.fa-dice:before {\n\t\tcontent: "\\f522";\n\t}\n\t.fa-dice-d20:before {\n\t\tcontent: "\\f6cf";\n\t}\n\t.fa-dice-d6:before {\n\t\tcontent: "\\f6d1";\n\t}\n\t.fa-dice-five:before {\n\t\tcontent: "\\f523";\n\t}\n\t.fa-dice-four:before {\n\t\tcontent: "\\f524";\n\t}\n\t.fa-dice-one:before {\n\t\tcontent: "\\f525";\n\t}\n\t.fa-dice-six:before {\n\t\tcontent: "\\f526";\n\t}\n\t.fa-dice-three:before {\n\t\tcontent: "\\f527";\n\t}\n\t.fa-dice-two:before {\n\t\tcontent: "\\f528";\n\t}\n\t.fa-disease:before {\n\t\tcontent: "\\f7fa";\n\t}\n\t.fa-display:before {\n\t\tcontent: "\\e163";\n\t}\n\t.fa-divide:before {\n\t\tcontent: "\\f529";\n\t}\n\t.fa-dna:before {\n\t\tcontent: "\\f471";\n\t}\n\t.fa-dog:before {\n\t\tcontent: "\\f6d3";\n\t}\n\t.fa-dollar-sign:before,\n\t.fa-dollar:before,\n\t.fa-usd:before {\n\t\tcontent: "\\24";\n\t}\n\t.fa-dolly-box:before,\n\t.fa-dolly:before {\n\t\tcontent: "\\f472";\n\t}\n\t.fa-dong-sign:before {\n\t\tcontent: "\\e169";\n\t}\n\t.fa-door-closed:before {\n\t\tcontent: "\\f52a";\n\t}\n\t.fa-door-open:before {\n\t\tcontent: "\\f52b";\n\t}\n\t.fa-dove:before {\n\t\tcontent: "\\f4ba";\n\t}\n\t.fa-compress-alt:before,\n\t.fa-down-left-and-up-right-to-center:before {\n\t\tcontent: "\\f422";\n\t}\n\t.fa-down-long:before,\n\t.fa-long-arrow-alt-down:before {\n\t\tcontent: "\\f309";\n\t}\n\t.fa-download:before {\n\t\tcontent: "\\f019";\n\t}\n\t.fa-dragon:before {\n\t\tcontent: "\\f6d5";\n\t}\n\t.fa-draw-polygon:before {\n\t\tcontent: "\\f5ee";\n\t}\n\t.fa-droplet:before,\n\t.fa-tint:before {\n\t\tcontent: "\\f043";\n\t}\n\t.fa-droplet-slash:before,\n\t.fa-tint-slash:before {\n\t\tcontent: "\\f5c7";\n\t}\n\t.fa-drum:before {\n\t\tcontent: "\\f569";\n\t}\n\t.fa-drum-steelpan:before {\n\t\tcontent: "\\f56a";\n\t}\n\t.fa-drumstick-bite:before {\n\t\tcontent: "\\f6d7";\n\t}\n\t.fa-dumbbell:before {\n\t\tcontent: "\\f44b";\n\t}\n\t.fa-dumpster:before {\n\t\tcontent: "\\f793";\n\t}\n\t.fa-dumpster-fire:before {\n\t\tcontent: "\\f794";\n\t}\n\t.fa-dungeon:before {\n\t\tcontent: "\\f6d9";\n\t}\n\t.fa-e:before {\n\t\tcontent: "\\45";\n\t}\n\t.fa-deaf:before,\n\t.fa-deafness:before,\n\t.fa-ear-deaf:before,\n\t.fa-hard-of-hearing:before {\n\t\tcontent: "\\f2a4";\n\t}\n\t.fa-assistive-listening-systems:before,\n\t.fa-ear-listen:before {\n\t\tcontent: "\\f2a2";\n\t}\n\t.fa-earth-africa:before,\n\t.fa-globe-africa:before {\n\t\tcontent: "\\f57c";\n\t}\n\t.fa-earth-america:before,\n\t.fa-earth-americas:before,\n\t.fa-earth:before,\n\t.fa-globe-americas:before {\n\t\tcontent: "\\f57d";\n\t}\n\t.fa-earth-asia:before,\n\t.fa-globe-asia:before {\n\t\tcontent: "\\f57e";\n\t}\n\t.fa-earth-europe:before,\n\t.fa-globe-europe:before {\n\t\tcontent: "\\f7a2";\n\t}\n\t.fa-earth-oceania:before,\n\t.fa-globe-oceania:before {\n\t\tcontent: "\\e47b";\n\t}\n\t.fa-egg:before {\n\t\tcontent: "\\f7fb";\n\t}\n\t.fa-eject:before {\n\t\tcontent: "\\f052";\n\t}\n\t.fa-elevator:before {\n\t\tcontent: "\\e16d";\n\t}\n\t.fa-ellipsis-h:before,\n\t.fa-ellipsis:before {\n\t\tcontent: "\\f141";\n\t}\n\t.fa-ellipsis-v:before,\n\t.fa-ellipsis-vertical:before {\n\t\tcontent: "\\f142";\n\t}\n\t.fa-envelope:before {\n\t\tcontent: "\\f0e0";\n\t}\n\t.fa-envelope-circle-check:before {\n\t\tcontent: "\\e4e8";\n\t}\n\t.fa-envelope-open:before {\n\t\tcontent: "\\f2b6";\n\t}\n\t.fa-envelope-open-text:before {\n\t\tcontent: "\\f658";\n\t}\n\t.fa-envelopes-bulk:before,\n\t.fa-mail-bulk:before {\n\t\tcontent: "\\f674";\n\t}\n\t.fa-equals:before {\n\t\tcontent: "\\3d";\n\t}\n\t.fa-eraser:before {\n\t\tcontent: "\\f12d";\n\t}\n\t.fa-ethernet:before {\n\t\tcontent: "\\f796";\n\t}\n\t.fa-eur:before,\n\t.fa-euro-sign:before,\n\t.fa-euro:before {\n\t\tcontent: "\\f153";\n\t}\n\t.fa-exclamation:before {\n\t\tcontent: "\\21";\n\t}\n\t.fa-expand:before {\n\t\tcontent: "\\f065";\n\t}\n\t.fa-explosion:before {\n\t\tcontent: "\\e4e9";\n\t}\n\t.fa-eye:before {\n\t\tcontent: "\\f06e";\n\t}\n\t.fa-eye-dropper-empty:before,\n\t.fa-eye-dropper:before,\n\t.fa-eyedropper:before {\n\t\tcontent: "\\f1fb";\n\t}\n\t.fa-eye-low-vision:before,\n\t.fa-low-vision:before {\n\t\tcontent: "\\f2a8";\n\t}\n\t.fa-eye-slash:before {\n\t\tcontent: "\\f070";\n\t}\n\t.fa-f:before {\n\t\tcontent: "\\46";\n\t}\n\t.fa-angry:before,\n\t.fa-face-angry:before {\n\t\tcontent: "\\f556";\n\t}\n\t.fa-dizzy:before,\n\t.fa-face-dizzy:before {\n\t\tcontent: "\\f567";\n\t}\n\t.fa-face-flushed:before,\n\t.fa-flushed:before {\n\t\tcontent: "\\f579";\n\t}\n\t.fa-face-frown:before,\n\t.fa-frown:before {\n\t\tcontent: "\\f119";\n\t}\n\t.fa-face-frown-open:before,\n\t.fa-frown-open:before {\n\t\tcontent: "\\f57a";\n\t}\n\t.fa-face-grimace:before,\n\t.fa-grimace:before {\n\t\tcontent: "\\f57f";\n\t}\n\t.fa-face-grin:before,\n\t.fa-grin:before {\n\t\tcontent: "\\f580";\n\t}\n\t.fa-face-grin-beam:before,\n\t.fa-grin-beam:before {\n\t\tcontent: "\\f582";\n\t}\n\t.fa-face-grin-beam-sweat:before,\n\t.fa-grin-beam-sweat:before {\n\t\tcontent: "\\f583";\n\t}\n\t.fa-face-grin-hearts:before,\n\t.fa-grin-hearts:before {\n\t\tcontent: "\\f584";\n\t}\n\t.fa-face-grin-squint:before,\n\t.fa-grin-squint:before {\n\t\tcontent: "\\f585";\n\t}\n\t.fa-face-grin-squint-tears:before,\n\t.fa-grin-squint-tears:before {\n\t\tcontent: "\\f586";\n\t}\n\t.fa-face-grin-stars:before,\n\t.fa-grin-stars:before {\n\t\tcontent: "\\f587";\n\t}\n\t.fa-face-grin-tears:before,\n\t.fa-grin-tears:before {\n\t\tcontent: "\\f588";\n\t}\n\t.fa-face-grin-tongue:before,\n\t.fa-grin-tongue:before {\n\t\tcontent: "\\f589";\n\t}\n\t.fa-face-grin-tongue-squint:before,\n\t.fa-grin-tongue-squint:before {\n\t\tcontent: "\\f58a";\n\t}\n\t.fa-face-grin-tongue-wink:before,\n\t.fa-grin-tongue-wink:before {\n\t\tcontent: "\\f58b";\n\t}\n\t.fa-face-grin-wide:before,\n\t.fa-grin-alt:before {\n\t\tcontent: "\\f581";\n\t}\n\t.fa-face-grin-wink:before,\n\t.fa-grin-wink:before {\n\t\tcontent: "\\f58c";\n\t}\n\t.fa-face-kiss:before,\n\t.fa-kiss:before {\n\t\tcontent: "\\f596";\n\t}\n\t.fa-face-kiss-beam:before,\n\t.fa-kiss-beam:before {\n\t\tcontent: "\\f597";\n\t}\n\t.fa-face-kiss-wink-heart:before,\n\t.fa-kiss-wink-heart:before {\n\t\tcontent: "\\f598";\n\t}\n\t.fa-face-laugh:before,\n\t.fa-laugh:before {\n\t\tcontent: "\\f599";\n\t}\n\t.fa-face-laugh-beam:before,\n\t.fa-laugh-beam:before {\n\t\tcontent: "\\f59a";\n\t}\n\t.fa-face-laugh-squint:before,\n\t.fa-laugh-squint:before {\n\t\tcontent: "\\f59b";\n\t}\n\t.fa-face-laugh-wink:before,\n\t.fa-laugh-wink:before {\n\t\tcontent: "\\f59c";\n\t}\n\t.fa-face-meh:before,\n\t.fa-meh:before {\n\t\tcontent: "\\f11a";\n\t}\n\t.fa-face-meh-blank:before,\n\t.fa-meh-blank:before {\n\t\tcontent: "\\f5a4";\n\t}\n\t.fa-face-rolling-eyes:before,\n\t.fa-meh-rolling-eyes:before {\n\t\tcontent: "\\f5a5";\n\t}\n\t.fa-face-sad-cry:before,\n\t.fa-sad-cry:before {\n\t\tcontent: "\\f5b3";\n\t}\n\t.fa-face-sad-tear:before,\n\t.fa-sad-tear:before {\n\t\tcontent: "\\f5b4";\n\t}\n\t.fa-face-smile:before,\n\t.fa-smile:before {\n\t\tcontent: "\\f118";\n\t}\n\t.fa-face-smile-beam:before,\n\t.fa-smile-beam:before {\n\t\tcontent: "\\f5b8";\n\t}\n\t.fa-face-smile-wink:before,\n\t.fa-smile-wink:before {\n\t\tcontent: "\\f4da";\n\t}\n\t.fa-face-surprise:before,\n\t.fa-surprise:before {\n\t\tcontent: "\\f5c2";\n\t}\n\t.fa-face-tired:before,\n\t.fa-tired:before {\n\t\tcontent: "\\f5c8";\n\t}\n\t.fa-fan:before {\n\t\tcontent: "\\f863";\n\t}\n\t.fa-faucet:before {\n\t\tcontent: "\\e005";\n\t}\n\t.fa-faucet-drip:before {\n\t\tcontent: "\\e006";\n\t}\n\t.fa-fax:before {\n\t\tcontent: "\\f1ac";\n\t}\n\t.fa-feather:before {\n\t\tcontent: "\\f52d";\n\t}\n\t.fa-feather-alt:before,\n\t.fa-feather-pointed:before {\n\t\tcontent: "\\f56b";\n\t}\n\t.fa-ferry:before {\n\t\tcontent: "\\e4ea";\n\t}\n\t.fa-file:before {\n\t\tcontent: "\\f15b";\n\t}\n\t.fa-file-arrow-down:before,\n\t.fa-file-download:before {\n\t\tcontent: "\\f56d";\n\t}\n\t.fa-file-arrow-up:before,\n\t.fa-file-upload:before {\n\t\tcontent: "\\f574";\n\t}\n\t.fa-file-audio:before {\n\t\tcontent: "\\f1c7";\n\t}\n\t.fa-file-circle-check:before {\n\t\tcontent: "\\e493";\n\t}\n\t.fa-file-circle-exclamation:before {\n\t\tcontent: "\\e4eb";\n\t}\n\t.fa-file-circle-minus:before {\n\t\tcontent: "\\e4ed";\n\t}\n\t.fa-file-circle-plus:before {\n\t\tcontent: "\\e4ee";\n\t}\n\t.fa-file-circle-question:before {\n\t\tcontent: "\\e4ef";\n\t}\n\t.fa-file-circle-xmark:before {\n\t\tcontent: "\\e494";\n\t}\n\t.fa-file-code:before {\n\t\tcontent: "\\f1c9";\n\t}\n\t.fa-file-contract:before {\n\t\tcontent: "\\f56c";\n\t}\n\t.fa-file-csv:before {\n\t\tcontent: "\\f6dd";\n\t}\n\t.fa-file-excel:before {\n\t\tcontent: "\\f1c3";\n\t}\n\t.fa-arrow-right-from-file:before,\n\t.fa-file-export:before {\n\t\tcontent: "\\f56e";\n\t}\n\t.fa-file-image:before {\n\t\tcontent: "\\f1c5";\n\t}\n\t.fa-arrow-right-to-file:before,\n\t.fa-file-import:before {\n\t\tcontent: "\\f56f";\n\t}\n\t.fa-file-invoice:before {\n\t\tcontent: "\\f570";\n\t}\n\t.fa-file-invoice-dollar:before {\n\t\tcontent: "\\f571";\n\t}\n\t.fa-file-alt:before,\n\t.fa-file-lines:before,\n\t.fa-file-text:before {\n\t\tcontent: "\\f15c";\n\t}\n\t.fa-file-medical:before {\n\t\tcontent: "\\f477";\n\t}\n\t.fa-file-pdf:before {\n\t\tcontent: "\\f1c1";\n\t}\n\t.fa-file-edit:before,\n\t.fa-file-pen:before {\n\t\tcontent: "\\f31c";\n\t}\n\t.fa-file-powerpoint:before {\n\t\tcontent: "\\f1c4";\n\t}\n\t.fa-file-prescription:before {\n\t\tcontent: "\\f572";\n\t}\n\t.fa-file-shield:before {\n\t\tcontent: "\\e4f0";\n\t}\n\t.fa-file-signature:before {\n\t\tcontent: "\\f573";\n\t}\n\t.fa-file-video:before {\n\t\tcontent: "\\f1c8";\n\t}\n\t.fa-file-medical-alt:before,\n\t.fa-file-waveform:before {\n\t\tcontent: "\\f478";\n\t}\n\t.fa-file-word:before {\n\t\tcontent: "\\f1c2";\n\t}\n\t.fa-file-archive:before,\n\t.fa-file-zipper:before {\n\t\tcontent: "\\f1c6";\n\t}\n\t.fa-fill:before {\n\t\tcontent: "\\f575";\n\t}\n\t.fa-fill-drip:before {\n\t\tcontent: "\\f576";\n\t}\n\t.fa-film:before {\n\t\tcontent: "\\f008";\n\t}\n\t.fa-filter:before {\n\t\tcontent: "\\f0b0";\n\t}\n\t.fa-filter-circle-dollar:before,\n\t.fa-funnel-dollar:before {\n\t\tcontent: "\\f662";\n\t}\n\t.fa-filter-circle-xmark:before {\n\t\tcontent: "\\e17b";\n\t}\n\t.fa-fingerprint:before {\n\t\tcontent: "\\f577";\n\t}\n\t.fa-fire:before {\n\t\tcontent: "\\f06d";\n\t}\n\t.fa-fire-burner:before {\n\t\tcontent: "\\e4f1";\n\t}\n\t.fa-fire-extinguisher:before {\n\t\tcontent: "\\f134";\n\t}\n\t.fa-fire-alt:before,\n\t.fa-fire-flame-curved:before {\n\t\tcontent: "\\f7e4";\n\t}\n\t.fa-burn:before,\n\t.fa-fire-flame-simple:before {\n\t\tcontent: "\\f46a";\n\t}\n\t.fa-fish:before {\n\t\tcontent: "\\f578";\n\t}\n\t.fa-fish-fins:before {\n\t\tcontent: "\\e4f2";\n\t}\n\t.fa-flag:before {\n\t\tcontent: "\\f024";\n\t}\n\t.fa-flag-checkered:before {\n\t\tcontent: "\\f11e";\n\t}\n\t.fa-flag-usa:before {\n\t\tcontent: "\\f74d";\n\t}\n\t.fa-flask:before {\n\t\tcontent: "\\f0c3";\n\t}\n\t.fa-flask-vial:before {\n\t\tcontent: "\\e4f3";\n\t}\n\t.fa-floppy-disk:before,\n\t.fa-save:before {\n\t\tcontent: "\\f0c7";\n\t}\n\t.fa-florin-sign:before {\n\t\tcontent: "\\e184";\n\t}\n\t.fa-folder-blank:before,\n\t.fa-folder:before {\n\t\tcontent: "\\f07b";\n\t}\n\t.fa-folder-closed:before {\n\t\tcontent: "\\e185";\n\t}\n\t.fa-folder-minus:before {\n\t\tcontent: "\\f65d";\n\t}\n\t.fa-folder-open:before {\n\t\tcontent: "\\f07c";\n\t}\n\t.fa-folder-plus:before {\n\t\tcontent: "\\f65e";\n\t}\n\t.fa-folder-tree:before {\n\t\tcontent: "\\f802";\n\t}\n\t.fa-font:before {\n\t\tcontent: "\\f031";\n\t}\n\t.fa-football-ball:before,\n\t.fa-football:before {\n\t\tcontent: "\\f44e";\n\t}\n\t.fa-forward:before {\n\t\tcontent: "\\f04e";\n\t}\n\t.fa-fast-forward:before,\n\t.fa-forward-fast:before {\n\t\tcontent: "\\f050";\n\t}\n\t.fa-forward-step:before,\n\t.fa-step-forward:before {\n\t\tcontent: "\\f051";\n\t}\n\t.fa-franc-sign:before {\n\t\tcontent: "\\e18f";\n\t}\n\t.fa-frog:before {\n\t\tcontent: "\\f52e";\n\t}\n\t.fa-futbol-ball:before,\n\t.fa-futbol:before,\n\t.fa-soccer-ball:before {\n\t\tcontent: "\\f1e3";\n\t}\n\t.fa-g:before {\n\t\tcontent: "\\47";\n\t}\n\t.fa-gamepad:before {\n\t\tcontent: "\\f11b";\n\t}\n\t.fa-gas-pump:before {\n\t\tcontent: "\\f52f";\n\t}\n\t.fa-dashboard:before,\n\t.fa-gauge-med:before,\n\t.fa-gauge:before,\n\t.fa-tachometer-alt-average:before {\n\t\tcontent: "\\f624";\n\t}\n\t.fa-gauge-high:before,\n\t.fa-tachometer-alt-fast:before,\n\t.fa-tachometer-alt:before {\n\t\tcontent: "\\f625";\n\t}\n\t.fa-gauge-simple-med:before,\n\t.fa-gauge-simple:before,\n\t.fa-tachometer-average:before {\n\t\tcontent: "\\f629";\n\t}\n\t.fa-gauge-simple-high:before,\n\t.fa-tachometer-fast:before,\n\t.fa-tachometer:before {\n\t\tcontent: "\\f62a";\n\t}\n\t.fa-gavel:before,\n\t.fa-legal:before {\n\t\tcontent: "\\f0e3";\n\t}\n\t.fa-cog:before,\n\t.fa-gear:before {\n\t\tcontent: "\\f013";\n\t}\n\t.fa-cogs:before,\n\t.fa-gears:before {\n\t\tcontent: "\\f085";\n\t}\n\t.fa-gem:before {\n\t\tcontent: "\\f3a5";\n\t}\n\t.fa-genderless:before {\n\t\tcontent: "\\f22d";\n\t}\n\t.fa-ghost:before {\n\t\tcontent: "\\f6e2";\n\t}\n\t.fa-gift:before {\n\t\tcontent: "\\f06b";\n\t}\n\t.fa-gifts:before {\n\t\tcontent: "\\f79c";\n\t}\n\t.fa-glass-water:before {\n\t\tcontent: "\\e4f4";\n\t}\n\t.fa-glass-water-droplet:before {\n\t\tcontent: "\\e4f5";\n\t}\n\t.fa-glasses:before {\n\t\tcontent: "\\f530";\n\t}\n\t.fa-globe:before {\n\t\tcontent: "\\f0ac";\n\t}\n\t.fa-golf-ball-tee:before,\n\t.fa-golf-ball:before {\n\t\tcontent: "\\f450";\n\t}\n\t.fa-gopuram:before {\n\t\tcontent: "\\f664";\n\t}\n\t.fa-graduation-cap:before,\n\t.fa-mortar-board:before {\n\t\tcontent: "\\f19d";\n\t}\n\t.fa-greater-than:before {\n\t\tcontent: "\\3e";\n\t}\n\t.fa-greater-than-equal:before {\n\t\tcontent: "\\f532";\n\t}\n\t.fa-grip-horizontal:before,\n\t.fa-grip:before {\n\t\tcontent: "\\f58d";\n\t}\n\t.fa-grip-lines:before {\n\t\tcontent: "\\f7a4";\n\t}\n\t.fa-grip-lines-vertical:before {\n\t\tcontent: "\\f7a5";\n\t}\n\t.fa-grip-vertical:before {\n\t\tcontent: "\\f58e";\n\t}\n\t.fa-group-arrows-rotate:before {\n\t\tcontent: "\\e4f6";\n\t}\n\t.fa-guarani-sign:before {\n\t\tcontent: "\\e19a";\n\t}\n\t.fa-guitar:before {\n\t\tcontent: "\\f7a6";\n\t}\n\t.fa-gun:before {\n\t\tcontent: "\\e19b";\n\t}\n\t.fa-h:before {\n\t\tcontent: "\\48";\n\t}\n\t.fa-hammer:before {\n\t\tcontent: "\\f6e3";\n\t}\n\t.fa-hamsa:before {\n\t\tcontent: "\\f665";\n\t}\n\t.fa-hand-paper:before,\n\t.fa-hand:before {\n\t\tcontent: "\\f256";\n\t}\n\t.fa-hand-back-fist:before,\n\t.fa-hand-rock:before {\n\t\tcontent: "\\f255";\n\t}\n\t.fa-allergies:before,\n\t.fa-hand-dots:before {\n\t\tcontent: "\\f461";\n\t}\n\t.fa-fist-raised:before,\n\t.fa-hand-fist:before {\n\t\tcontent: "\\f6de";\n\t}\n\t.fa-hand-holding:before {\n\t\tcontent: "\\f4bd";\n\t}\n\t.fa-hand-holding-dollar:before,\n\t.fa-hand-holding-usd:before {\n\t\tcontent: "\\f4c0";\n\t}\n\t.fa-hand-holding-droplet:before,\n\t.fa-hand-holding-water:before {\n\t\tcontent: "\\f4c1";\n\t}\n\t.fa-hand-holding-hand:before {\n\t\tcontent: "\\e4f7";\n\t}\n\t.fa-hand-holding-heart:before {\n\t\tcontent: "\\f4be";\n\t}\n\t.fa-hand-holding-medical:before {\n\t\tcontent: "\\e05c";\n\t}\n\t.fa-hand-lizard:before {\n\t\tcontent: "\\f258";\n\t}\n\t.fa-hand-middle-finger:before {\n\t\tcontent: "\\f806";\n\t}\n\t.fa-hand-peace:before {\n\t\tcontent: "\\f25b";\n\t}\n\t.fa-hand-point-down:before {\n\t\tcontent: "\\f0a7";\n\t}\n\t.fa-hand-point-left:before {\n\t\tcontent: "\\f0a5";\n\t}\n\t.fa-hand-point-right:before {\n\t\tcontent: "\\f0a4";\n\t}\n\t.fa-hand-point-up:before {\n\t\tcontent: "\\f0a6";\n\t}\n\t.fa-hand-pointer:before {\n\t\tcontent: "\\f25a";\n\t}\n\t.fa-hand-scissors:before {\n\t\tcontent: "\\f257";\n\t}\n\t.fa-hand-sparkles:before {\n\t\tcontent: "\\e05d";\n\t}\n\t.fa-hand-spock:before {\n\t\tcontent: "\\f259";\n\t}\n\t.fa-handcuffs:before {\n\t\tcontent: "\\e4f8";\n\t}\n\t.fa-hands:before,\n\t.fa-sign-language:before,\n\t.fa-signing:before {\n\t\tcontent: "\\f2a7";\n\t}\n\t.fa-american-sign-language-interpreting:before,\n\t.fa-asl-interpreting:before,\n\t.fa-hands-american-sign-language-interpreting:before,\n\t.fa-hands-asl-interpreting:before {\n\t\tcontent: "\\f2a3";\n\t}\n\t.fa-hands-bound:before {\n\t\tcontent: "\\e4f9";\n\t}\n\t.fa-hands-bubbles:before,\n\t.fa-hands-wash:before {\n\t\tcontent: "\\e05e";\n\t}\n\t.fa-hands-clapping:before {\n\t\tcontent: "\\e1a8";\n\t}\n\t.fa-hands-holding:before {\n\t\tcontent: "\\f4c2";\n\t}\n\t.fa-hands-holding-child:before {\n\t\tcontent: "\\e4fa";\n\t}\n\t.fa-hands-holding-circle:before {\n\t\tcontent: "\\e4fb";\n\t}\n\t.fa-hands-praying:before,\n\t.fa-praying-hands:before {\n\t\tcontent: "\\f684";\n\t}\n\t.fa-handshake:before {\n\t\tcontent: "\\f2b5";\n\t}\n\t.fa-hands-helping:before,\n\t.fa-handshake-angle:before {\n\t\tcontent: "\\f4c4";\n\t}\n\t.fa-handshake-alt:before,\n\t.fa-handshake-simple:before {\n\t\tcontent: "\\f4c6";\n\t}\n\t.fa-handshake-alt-slash:before,\n\t.fa-handshake-simple-slash:before {\n\t\tcontent: "\\e05f";\n\t}\n\t.fa-handshake-slash:before {\n\t\tcontent: "\\e060";\n\t}\n\t.fa-hanukiah:before {\n\t\tcontent: "\\f6e6";\n\t}\n\t.fa-hard-drive:before,\n\t.fa-hdd:before {\n\t\tcontent: "\\f0a0";\n\t}\n\t.fa-hashtag:before {\n\t\tcontent: "\\23";\n\t}\n\t.fa-hat-cowboy:before {\n\t\tcontent: "\\f8c0";\n\t}\n\t.fa-hat-cowboy-side:before {\n\t\tcontent: "\\f8c1";\n\t}\n\t.fa-hat-wizard:before {\n\t\tcontent: "\\f6e8";\n\t}\n\t.fa-head-side-cough:before {\n\t\tcontent: "\\e061";\n\t}\n\t.fa-head-side-cough-slash:before {\n\t\tcontent: "\\e062";\n\t}\n\t.fa-head-side-mask:before {\n\t\tcontent: "\\e063";\n\t}\n\t.fa-head-side-virus:before {\n\t\tcontent: "\\e064";\n\t}\n\t.fa-header:before,\n\t.fa-heading:before {\n\t\tcontent: "\\f1dc";\n\t}\n\t.fa-headphones:before {\n\t\tcontent: "\\f025";\n\t}\n\t.fa-headphones-alt:before,\n\t.fa-headphones-simple:before {\n\t\tcontent: "\\f58f";\n\t}\n\t.fa-headset:before {\n\t\tcontent: "\\f590";\n\t}\n\t.fa-heart:before {\n\t\tcontent: "\\f004";\n\t}\n\t.fa-heart-circle-bolt:before {\n\t\tcontent: "\\e4fc";\n\t}\n\t.fa-heart-circle-check:before {\n\t\tcontent: "\\e4fd";\n\t}\n\t.fa-heart-circle-exclamation:before {\n\t\tcontent: "\\e4fe";\n\t}\n\t.fa-heart-circle-minus:before {\n\t\tcontent: "\\e4ff";\n\t}\n\t.fa-heart-circle-plus:before {\n\t\tcontent: "\\e500";\n\t}\n\t.fa-heart-circle-xmark:before {\n\t\tcontent: "\\e501";\n\t}\n\t.fa-heart-broken:before,\n\t.fa-heart-crack:before {\n\t\tcontent: "\\f7a9";\n\t}\n\t.fa-heart-pulse:before,\n\t.fa-heartbeat:before {\n\t\tcontent: "\\f21e";\n\t}\n\t.fa-helicopter:before {\n\t\tcontent: "\\f533";\n\t}\n\t.fa-helicopter-symbol:before {\n\t\tcontent: "\\e502";\n\t}\n\t.fa-hard-hat:before,\n\t.fa-hat-hard:before,\n\t.fa-helmet-safety:before {\n\t\tcontent: "\\f807";\n\t}\n\t.fa-helmet-un:before {\n\t\tcontent: "\\e503";\n\t}\n\t.fa-highlighter:before {\n\t\tcontent: "\\f591";\n\t}\n\t.fa-hill-avalanche:before {\n\t\tcontent: "\\e507";\n\t}\n\t.fa-hill-rockslide:before {\n\t\tcontent: "\\e508";\n\t}\n\t.fa-hippo:before {\n\t\tcontent: "\\f6ed";\n\t}\n\t.fa-hockey-puck:before {\n\t\tcontent: "\\f453";\n\t}\n\t.fa-holly-berry:before {\n\t\tcontent: "\\f7aa";\n\t}\n\t.fa-horse:before {\n\t\tcontent: "\\f6f0";\n\t}\n\t.fa-horse-head:before {\n\t\tcontent: "\\f7ab";\n\t}\n\t.fa-hospital-alt:before,\n\t.fa-hospital-wide:before,\n\t.fa-hospital:before {\n\t\tcontent: "\\f0f8";\n\t}\n\t.fa-hospital-user:before {\n\t\tcontent: "\\f80d";\n\t}\n\t.fa-hot-tub-person:before,\n\t.fa-hot-tub:before {\n\t\tcontent: "\\f593";\n\t}\n\t.fa-hotdog:before {\n\t\tcontent: "\\f80f";\n\t}\n\t.fa-hotel:before {\n\t\tcontent: "\\f594";\n\t}\n\t.fa-hourglass-2:before,\n\t.fa-hourglass-half:before,\n\t.fa-hourglass:before {\n\t\tcontent: "\\f254";\n\t}\n\t.fa-hourglass-empty:before {\n\t\tcontent: "\\f252";\n\t}\n\t.fa-hourglass-3:before,\n\t.fa-hourglass-end:before {\n\t\tcontent: "\\f253";\n\t}\n\t.fa-hourglass-1:before,\n\t.fa-hourglass-start:before {\n\t\tcontent: "\\f251";\n\t}\n\t.fa-home-alt:before,\n\t.fa-home-lg-alt:before,\n\t.fa-home:before,\n\t.fa-house:before {\n\t\tcontent: "\\f015";\n\t}\n\t.fa-home-lg:before,\n\t.fa-house-chimney:before {\n\t\tcontent: "\\e3af";\n\t}\n\t.fa-house-chimney-crack:before,\n\t.fa-house-damage:before {\n\t\tcontent: "\\f6f1";\n\t}\n\t.fa-clinic-medical:before,\n\t.fa-house-chimney-medical:before {\n\t\tcontent: "\\f7f2";\n\t}\n\t.fa-house-chimney-user:before {\n\t\tcontent: "\\e065";\n\t}\n\t.fa-house-chimney-window:before {\n\t\tcontent: "\\e00d";\n\t}\n\t.fa-house-circle-check:before {\n\t\tcontent: "\\e509";\n\t}\n\t.fa-house-circle-exclamation:before {\n\t\tcontent: "\\e50a";\n\t}\n\t.fa-house-circle-xmark:before {\n\t\tcontent: "\\e50b";\n\t}\n\t.fa-house-crack:before {\n\t\tcontent: "\\e3b1";\n\t}\n\t.fa-house-fire:before {\n\t\tcontent: "\\e50c";\n\t}\n\t.fa-house-flag:before {\n\t\tcontent: "\\e50d";\n\t}\n\t.fa-house-flood-water:before {\n\t\tcontent: "\\e50e";\n\t}\n\t.fa-house-flood-water-circle-arrow-right:before {\n\t\tcontent: "\\e50f";\n\t}\n\t.fa-house-laptop:before,\n\t.fa-laptop-house:before {\n\t\tcontent: "\\e066";\n\t}\n\t.fa-house-lock:before {\n\t\tcontent: "\\e510";\n\t}\n\t.fa-house-medical:before {\n\t\tcontent: "\\e3b2";\n\t}\n\t.fa-house-medical-circle-check:before {\n\t\tcontent: "\\e511";\n\t}\n\t.fa-house-medical-circle-exclamation:before {\n\t\tcontent: "\\e512";\n\t}\n\t.fa-house-medical-circle-xmark:before {\n\t\tcontent: "\\e513";\n\t}\n\t.fa-house-medical-flag:before {\n\t\tcontent: "\\e514";\n\t}\n\t.fa-house-signal:before {\n\t\tcontent: "\\e012";\n\t}\n\t.fa-house-tsunami:before {\n\t\tcontent: "\\e515";\n\t}\n\t.fa-home-user:before,\n\t.fa-house-user:before {\n\t\tcontent: "\\e1b0";\n\t}\n\t.fa-hryvnia-sign:before,\n\t.fa-hryvnia:before {\n\t\tcontent: "\\f6f2";\n\t}\n\t.fa-hurricane:before {\n\t\tcontent: "\\f751";\n\t}\n\t.fa-i:before {\n\t\tcontent: "\\49";\n\t}\n\t.fa-i-cursor:before {\n\t\tcontent: "\\f246";\n\t}\n\t.fa-ice-cream:before {\n\t\tcontent: "\\f810";\n\t}\n\t.fa-icicles:before {\n\t\tcontent: "\\f7ad";\n\t}\n\t.fa-heart-music-camera-bolt:before,\n\t.fa-icons:before {\n\t\tcontent: "\\f86d";\n\t}\n\t.fa-id-badge:before {\n\t\tcontent: "\\f2c1";\n\t}\n\t.fa-drivers-license:before,\n\t.fa-id-card:before {\n\t\tcontent: "\\f2c2";\n\t}\n\t.fa-id-card-alt:before,\n\t.fa-id-card-clip:before {\n\t\tcontent: "\\f47f";\n\t}\n\t.fa-igloo:before {\n\t\tcontent: "\\f7ae";\n\t}\n\t.fa-image:before {\n\t\tcontent: "\\f03e";\n\t}\n\t.fa-image-portrait:before,\n\t.fa-portrait:before {\n\t\tcontent: "\\f3e0";\n\t}\n\t.fa-images:before {\n\t\tcontent: "\\f302";\n\t}\n\t.fa-inbox:before {\n\t\tcontent: "\\f01c";\n\t}\n\t.fa-indent:before {\n\t\tcontent: "\\f03c";\n\t}\n\t.fa-indian-rupee-sign:before,\n\t.fa-indian-rupee:before,\n\t.fa-inr:before {\n\t\tcontent: "\\e1bc";\n\t}\n\t.fa-industry:before {\n\t\tcontent: "\\f275";\n\t}\n\t.fa-infinity:before {\n\t\tcontent: "\\f534";\n\t}\n\t.fa-info:before {\n\t\tcontent: "\\f129";\n\t}\n\t.fa-italic:before {\n\t\tcontent: "\\f033";\n\t}\n\t.fa-j:before {\n\t\tcontent: "\\4a";\n\t}\n\t.fa-jar:before {\n\t\tcontent: "\\e516";\n\t}\n\t.fa-jar-wheat:before {\n\t\tcontent: "\\e517";\n\t}\n\t.fa-jedi:before {\n\t\tcontent: "\\f669";\n\t}\n\t.fa-fighter-jet:before,\n\t.fa-jet-fighter:before {\n\t\tcontent: "\\f0fb";\n\t}\n\t.fa-jet-fighter-up:before {\n\t\tcontent: "\\e518";\n\t}\n\t.fa-joint:before {\n\t\tcontent: "\\f595";\n\t}\n\t.fa-jug-detergent:before {\n\t\tcontent: "\\e519";\n\t}\n\t.fa-k:before {\n\t\tcontent: "\\4b";\n\t}\n\t.fa-kaaba:before {\n\t\tcontent: "\\f66b";\n\t}\n\t.fa-key:before {\n\t\tcontent: "\\f084";\n\t}\n\t.fa-keyboard:before {\n\t\tcontent: "\\f11c";\n\t}\n\t.fa-khanda:before {\n\t\tcontent: "\\f66d";\n\t}\n\t.fa-kip-sign:before {\n\t\tcontent: "\\e1c4";\n\t}\n\t.fa-first-aid:before,\n\t.fa-kit-medical:before {\n\t\tcontent: "\\f479";\n\t}\n\t.fa-kitchen-set:before {\n\t\tcontent: "\\e51a";\n\t}\n\t.fa-kiwi-bird:before {\n\t\tcontent: "\\f535";\n\t}\n\t.fa-l:before {\n\t\tcontent: "\\4c";\n\t}\n\t.fa-land-mine-on:before {\n\t\tcontent: "\\e51b";\n\t}\n\t.fa-landmark:before {\n\t\tcontent: "\\f66f";\n\t}\n\t.fa-landmark-alt:before,\n\t.fa-landmark-dome:before {\n\t\tcontent: "\\f752";\n\t}\n\t.fa-landmark-flag:before {\n\t\tcontent: "\\e51c";\n\t}\n\t.fa-language:before {\n\t\tcontent: "\\f1ab";\n\t}\n\t.fa-laptop:before {\n\t\tcontent: "\\f109";\n\t}\n\t.fa-laptop-code:before {\n\t\tcontent: "\\f5fc";\n\t}\n\t.fa-laptop-file:before {\n\t\tcontent: "\\e51d";\n\t}\n\t.fa-laptop-medical:before {\n\t\tcontent: "\\f812";\n\t}\n\t.fa-lari-sign:before {\n\t\tcontent: "\\e1c8";\n\t}\n\t.fa-layer-group:before {\n\t\tcontent: "\\f5fd";\n\t}\n\t.fa-leaf:before {\n\t\tcontent: "\\f06c";\n\t}\n\t.fa-left-long:before,\n\t.fa-long-arrow-alt-left:before {\n\t\tcontent: "\\f30a";\n\t}\n\t.fa-arrows-alt-h:before,\n\t.fa-left-right:before {\n\t\tcontent: "\\f337";\n\t}\n\t.fa-lemon:before {\n\t\tcontent: "\\f094";\n\t}\n\t.fa-less-than:before {\n\t\tcontent: "\\3c";\n\t}\n\t.fa-less-than-equal:before {\n\t\tcontent: "\\f537";\n\t}\n\t.fa-life-ring:before {\n\t\tcontent: "\\f1cd";\n\t}\n\t.fa-lightbulb:before {\n\t\tcontent: "\\f0eb";\n\t}\n\t.fa-lines-leaning:before {\n\t\tcontent: "\\e51e";\n\t}\n\t.fa-chain:before,\n\t.fa-link:before {\n\t\tcontent: "\\f0c1";\n\t}\n\t.fa-chain-broken:before,\n\t.fa-chain-slash:before,\n\t.fa-link-slash:before,\n\t.fa-unlink:before {\n\t\tcontent: "\\f127";\n\t}\n\t.fa-lira-sign:before {\n\t\tcontent: "\\f195";\n\t}\n\t.fa-list-squares:before,\n\t.fa-list:before {\n\t\tcontent: "\\f03a";\n\t}\n\t.fa-list-check:before,\n\t.fa-tasks:before {\n\t\tcontent: "\\f0ae";\n\t}\n\t.fa-list-1-2:before,\n\t.fa-list-numeric:before,\n\t.fa-list-ol:before {\n\t\tcontent: "\\f0cb";\n\t}\n\t.fa-list-dots:before,\n\t.fa-list-ul:before {\n\t\tcontent: "\\f0ca";\n\t}\n\t.fa-litecoin-sign:before {\n\t\tcontent: "\\e1d3";\n\t}\n\t.fa-location-arrow:before {\n\t\tcontent: "\\f124";\n\t}\n\t.fa-location-crosshairs:before,\n\t.fa-location:before {\n\t\tcontent: "\\f601";\n\t}\n\t.fa-location-dot:before,\n\t.fa-map-marker-alt:before {\n\t\tcontent: "\\f3c5";\n\t}\n\t.fa-location-pin:before,\n\t.fa-map-marker:before {\n\t\tcontent: "\\f041";\n\t}\n\t.fa-location-pin-lock:before {\n\t\tcontent: "\\e51f";\n\t}\n\t.fa-lock:before {\n\t\tcontent: "\\f023";\n\t}\n\t.fa-lock-open:before {\n\t\tcontent: "\\f3c1";\n\t}\n\t.fa-locust:before {\n\t\tcontent: "\\e520";\n\t}\n\t.fa-lungs:before {\n\t\tcontent: "\\f604";\n\t}\n\t.fa-lungs-virus:before {\n\t\tcontent: "\\e067";\n\t}\n\t.fa-m:before {\n\t\tcontent: "\\4d";\n\t}\n\t.fa-magnet:before {\n\t\tcontent: "\\f076";\n\t}\n\t.fa-magnifying-glass:before,\n\t.fa-search:before {\n\t\tcontent: "\\f002";\n\t}\n\t.fa-magnifying-glass-arrow-right:before {\n\t\tcontent: "\\e521";\n\t}\n\t.fa-magnifying-glass-chart:before {\n\t\tcontent: "\\e522";\n\t}\n\t.fa-magnifying-glass-dollar:before,\n\t.fa-search-dollar:before {\n\t\tcontent: "\\f688";\n\t}\n\t.fa-magnifying-glass-location:before,\n\t.fa-search-location:before {\n\t\tcontent: "\\f689";\n\t}\n\t.fa-magnifying-glass-minus:before,\n\t.fa-search-minus:before {\n\t\tcontent: "\\f010";\n\t}\n\t.fa-magnifying-glass-plus:before,\n\t.fa-search-plus:before {\n\t\tcontent: "\\f00e";\n\t}\n\t.fa-manat-sign:before {\n\t\tcontent: "\\e1d5";\n\t}\n\t.fa-map:before {\n\t\tcontent: "\\f279";\n\t}\n\t.fa-map-location:before,\n\t.fa-map-marked:before {\n\t\tcontent: "\\f59f";\n\t}\n\t.fa-map-location-dot:before,\n\t.fa-map-marked-alt:before {\n\t\tcontent: "\\f5a0";\n\t}\n\t.fa-map-pin:before {\n\t\tcontent: "\\f276";\n\t}\n\t.fa-marker:before {\n\t\tcontent: "\\f5a1";\n\t}\n\t.fa-mars:before {\n\t\tcontent: "\\f222";\n\t}\n\t.fa-mars-and-venus:before {\n\t\tcontent: "\\f224";\n\t}\n\t.fa-mars-and-venus-burst:before {\n\t\tcontent: "\\e523";\n\t}\n\t.fa-mars-double:before {\n\t\tcontent: "\\f227";\n\t}\n\t.fa-mars-stroke:before {\n\t\tcontent: "\\f229";\n\t}\n\t.fa-mars-stroke-h:before,\n\t.fa-mars-stroke-right:before {\n\t\tcontent: "\\f22b";\n\t}\n\t.fa-mars-stroke-up:before,\n\t.fa-mars-stroke-v:before {\n\t\tcontent: "\\f22a";\n\t}\n\t.fa-glass-martini-alt:before,\n\t.fa-martini-glass:before {\n\t\tcontent: "\\f57b";\n\t}\n\t.fa-cocktail:before,\n\t.fa-martini-glass-citrus:before {\n\t\tcontent: "\\f561";\n\t}\n\t.fa-glass-martini:before,\n\t.fa-martini-glass-empty:before {\n\t\tcontent: "\\f000";\n\t}\n\t.fa-mask:before {\n\t\tcontent: "\\f6fa";\n\t}\n\t.fa-mask-face:before {\n\t\tcontent: "\\e1d7";\n\t}\n\t.fa-mask-ventilator:before {\n\t\tcontent: "\\e524";\n\t}\n\t.fa-masks-theater:before,\n\t.fa-theater-masks:before {\n\t\tcontent: "\\f630";\n\t}\n\t.fa-mattress-pillow:before {\n\t\tcontent: "\\e525";\n\t}\n\t.fa-expand-arrows-alt:before,\n\t.fa-maximize:before {\n\t\tcontent: "\\f31e";\n\t}\n\t.fa-medal:before {\n\t\tcontent: "\\f5a2";\n\t}\n\t.fa-memory:before {\n\t\tcontent: "\\f538";\n\t}\n\t.fa-menorah:before {\n\t\tcontent: "\\f676";\n\t}\n\t.fa-mercury:before {\n\t\tcontent: "\\f223";\n\t}\n\t.fa-comment-alt:before,\n\t.fa-message:before {\n\t\tcontent: "\\f27a";\n\t}\n\t.fa-meteor:before {\n\t\tcontent: "\\f753";\n\t}\n\t.fa-microchip:before {\n\t\tcontent: "\\f2db";\n\t}\n\t.fa-microphone:before {\n\t\tcontent: "\\f130";\n\t}\n\t.fa-microphone-alt:before,\n\t.fa-microphone-lines:before {\n\t\tcontent: "\\f3c9";\n\t}\n\t.fa-microphone-alt-slash:before,\n\t.fa-microphone-lines-slash:before {\n\t\tcontent: "\\f539";\n\t}\n\t.fa-microphone-slash:before {\n\t\tcontent: "\\f131";\n\t}\n\t.fa-microscope:before {\n\t\tcontent: "\\f610";\n\t}\n\t.fa-mill-sign:before {\n\t\tcontent: "\\e1ed";\n\t}\n\t.fa-compress-arrows-alt:before,\n\t.fa-minimize:before {\n\t\tcontent: "\\f78c";\n\t}\n\t.fa-minus:before,\n\t.fa-subtract:before {\n\t\tcontent: "\\f068";\n\t}\n\t.fa-mitten:before {\n\t\tcontent: "\\f7b5";\n\t}\n\t.fa-mobile-android:before,\n\t.fa-mobile-phone:before,\n\t.fa-mobile:before {\n\t\tcontent: "\\f3ce";\n\t}\n\t.fa-mobile-button:before {\n\t\tcontent: "\\f10b";\n\t}\n\t.fa-mobile-retro:before {\n\t\tcontent: "\\e527";\n\t}\n\t.fa-mobile-android-alt:before,\n\t.fa-mobile-screen:before {\n\t\tcontent: "\\f3cf";\n\t}\n\t.fa-mobile-alt:before,\n\t.fa-mobile-screen-button:before {\n\t\tcontent: "\\f3cd";\n\t}\n\t.fa-money-bill:before {\n\t\tcontent: "\\f0d6";\n\t}\n\t.fa-money-bill-1:before,\n\t.fa-money-bill-alt:before {\n\t\tcontent: "\\f3d1";\n\t}\n\t.fa-money-bill-1-wave:before,\n\t.fa-money-bill-wave-alt:before {\n\t\tcontent: "\\f53b";\n\t}\n\t.fa-money-bill-transfer:before {\n\t\tcontent: "\\e528";\n\t}\n\t.fa-money-bill-trend-up:before {\n\t\tcontent: "\\e529";\n\t}\n\t.fa-money-bill-wave:before {\n\t\tcontent: "\\f53a";\n\t}\n\t.fa-money-bill-wheat:before {\n\t\tcontent: "\\e52a";\n\t}\n\t.fa-money-bills:before {\n\t\tcontent: "\\e1f3";\n\t}\n\t.fa-money-check:before {\n\t\tcontent: "\\f53c";\n\t}\n\t.fa-money-check-alt:before,\n\t.fa-money-check-dollar:before {\n\t\tcontent: "\\f53d";\n\t}\n\t.fa-monument:before {\n\t\tcontent: "\\f5a6";\n\t}\n\t.fa-moon:before {\n\t\tcontent: "\\f186";\n\t}\n\t.fa-mortar-pestle:before {\n\t\tcontent: "\\f5a7";\n\t}\n\t.fa-mosque:before {\n\t\tcontent: "\\f678";\n\t}\n\t.fa-mosquito:before {\n\t\tcontent: "\\e52b";\n\t}\n\t.fa-mosquito-net:before {\n\t\tcontent: "\\e52c";\n\t}\n\t.fa-motorcycle:before {\n\t\tcontent: "\\f21c";\n\t}\n\t.fa-mound:before {\n\t\tcontent: "\\e52d";\n\t}\n\t.fa-mountain:before {\n\t\tcontent: "\\f6fc";\n\t}\n\t.fa-mountain-city:before {\n\t\tcontent: "\\e52e";\n\t}\n\t.fa-mountain-sun:before {\n\t\tcontent: "\\e52f";\n\t}\n\t.fa-mug-hot:before {\n\t\tcontent: "\\f7b6";\n\t}\n\t.fa-coffee:before,\n\t.fa-mug-saucer:before {\n\t\tcontent: "\\f0f4";\n\t}\n\t.fa-music:before {\n\t\tcontent: "\\f001";\n\t}\n\t.fa-n:before {\n\t\tcontent: "\\4e";\n\t}\n\t.fa-naira-sign:before {\n\t\tcontent: "\\e1f6";\n\t}\n\t.fa-network-wired:before {\n\t\tcontent: "\\f6ff";\n\t}\n\t.fa-neuter:before {\n\t\tcontent: "\\f22c";\n\t}\n\t.fa-newspaper:before {\n\t\tcontent: "\\f1ea";\n\t}\n\t.fa-not-equal:before {\n\t\tcontent: "\\f53e";\n\t}\n\t.fa-note-sticky:before,\n\t.fa-sticky-note:before {\n\t\tcontent: "\\f249";\n\t}\n\t.fa-notes-medical:before {\n\t\tcontent: "\\f481";\n\t}\n\t.fa-o:before {\n\t\tcontent: "\\4f";\n\t}\n\t.fa-object-group:before {\n\t\tcontent: "\\f247";\n\t}\n\t.fa-object-ungroup:before {\n\t\tcontent: "\\f248";\n\t}\n\t.fa-oil-can:before {\n\t\tcontent: "\\f613";\n\t}\n\t.fa-oil-well:before {\n\t\tcontent: "\\e532";\n\t}\n\t.fa-om:before {\n\t\tcontent: "\\f679";\n\t}\n\t.fa-otter:before {\n\t\tcontent: "\\f700";\n\t}\n\t.fa-dedent:before,\n\t.fa-outdent:before {\n\t\tcontent: "\\f03b";\n\t}\n\t.fa-p:before {\n\t\tcontent: "\\50";\n\t}\n\t.fa-pager:before {\n\t\tcontent: "\\f815";\n\t}\n\t.fa-paint-roller:before {\n\t\tcontent: "\\f5aa";\n\t}\n\t.fa-paint-brush:before,\n\t.fa-paintbrush:before {\n\t\tcontent: "\\f1fc";\n\t}\n\t.fa-palette:before {\n\t\tcontent: "\\f53f";\n\t}\n\t.fa-pallet:before {\n\t\tcontent: "\\f482";\n\t}\n\t.fa-panorama:before {\n\t\tcontent: "\\e209";\n\t}\n\t.fa-paper-plane:before {\n\t\tcontent: "\\f1d8";\n\t}\n\t.fa-paperclip:before {\n\t\tcontent: "\\f0c6";\n\t}\n\t.fa-parachute-box:before {\n\t\tcontent: "\\f4cd";\n\t}\n\t.fa-paragraph:before {\n\t\tcontent: "\\f1dd";\n\t}\n\t.fa-passport:before {\n\t\tcontent: "\\f5ab";\n\t}\n\t.fa-file-clipboard:before,\n\t.fa-paste:before {\n\t\tcontent: "\\f0ea";\n\t}\n\t.fa-pause:before {\n\t\tcontent: "\\f04c";\n\t}\n\t.fa-paw:before {\n\t\tcontent: "\\f1b0";\n\t}\n\t.fa-peace:before {\n\t\tcontent: "\\f67c";\n\t}\n\t.fa-pen:before {\n\t\tcontent: "\\f304";\n\t}\n\t.fa-pen-alt:before,\n\t.fa-pen-clip:before {\n\t\tcontent: "\\f305";\n\t}\n\t.fa-pen-fancy:before {\n\t\tcontent: "\\f5ac";\n\t}\n\t.fa-pen-nib:before {\n\t\tcontent: "\\f5ad";\n\t}\n\t.fa-pen-ruler:before,\n\t.fa-pencil-ruler:before {\n\t\tcontent: "\\f5ae";\n\t}\n\t.fa-edit:before,\n\t.fa-pen-to-square:before {\n\t\tcontent: "\\f044";\n\t}\n\t.fa-pencil-alt:before,\n\t.fa-pencil:before {\n\t\tcontent: "\\f303";\n\t}\n\t.fa-people-arrows-left-right:before,\n\t.fa-people-arrows:before {\n\t\tcontent: "\\e068";\n\t}\n\t.fa-people-carry-box:before,\n\t.fa-people-carry:before {\n\t\tcontent: "\\f4ce";\n\t}\n\t.fa-people-group:before {\n\t\tcontent: "\\e533";\n\t}\n\t.fa-people-line:before {\n\t\tcontent: "\\e534";\n\t}\n\t.fa-people-pulling:before {\n\t\tcontent: "\\e535";\n\t}\n\t.fa-people-robbery:before {\n\t\tcontent: "\\e536";\n\t}\n\t.fa-people-roof:before {\n\t\tcontent: "\\e537";\n\t}\n\t.fa-pepper-hot:before {\n\t\tcontent: "\\f816";\n\t}\n\t.fa-percent:before,\n\t.fa-percentage:before {\n\t\tcontent: "\\25";\n\t}\n\t.fa-male:before,\n\t.fa-person:before {\n\t\tcontent: "\\f183";\n\t}\n\t.fa-person-arrow-down-to-line:before {\n\t\tcontent: "\\e538";\n\t}\n\t.fa-person-arrow-up-from-line:before {\n\t\tcontent: "\\e539";\n\t}\n\t.fa-biking:before,\n\t.fa-person-biking:before {\n\t\tcontent: "\\f84a";\n\t}\n\t.fa-person-booth:before {\n\t\tcontent: "\\f756";\n\t}\n\t.fa-person-breastfeeding:before {\n\t\tcontent: "\\e53a";\n\t}\n\t.fa-person-burst:before {\n\t\tcontent: "\\e53b";\n\t}\n\t.fa-person-cane:before {\n\t\tcontent: "\\e53c";\n\t}\n\t.fa-person-chalkboard:before {\n\t\tcontent: "\\e53d";\n\t}\n\t.fa-person-circle-check:before {\n\t\tcontent: "\\e53e";\n\t}\n\t.fa-person-circle-exclamation:before {\n\t\tcontent: "\\e53f";\n\t}\n\t.fa-person-circle-minus:before {\n\t\tcontent: "\\e540";\n\t}\n\t.fa-person-circle-plus:before {\n\t\tcontent: "\\e541";\n\t}\n\t.fa-person-circle-question:before {\n\t\tcontent: "\\e542";\n\t}\n\t.fa-person-circle-xmark:before {\n\t\tcontent: "\\e543";\n\t}\n\t.fa-digging:before,\n\t.fa-person-digging:before {\n\t\tcontent: "\\f85e";\n\t}\n\t.fa-diagnoses:before,\n\t.fa-person-dots-from-line:before {\n\t\tcontent: "\\f470";\n\t}\n\t.fa-female:before,\n\t.fa-person-dress:before {\n\t\tcontent: "\\f182";\n\t}\n\t.fa-person-dress-burst:before {\n\t\tcontent: "\\e544";\n\t}\n\t.fa-person-drowning:before {\n\t\tcontent: "\\e545";\n\t}\n\t.fa-person-falling:before {\n\t\tcontent: "\\e546";\n\t}\n\t.fa-person-falling-burst:before {\n\t\tcontent: "\\e547";\n\t}\n\t.fa-person-half-dress:before {\n\t\tcontent: "\\e548";\n\t}\n\t.fa-person-harassing:before {\n\t\tcontent: "\\e549";\n\t}\n\t.fa-hiking:before,\n\t.fa-person-hiking:before {\n\t\tcontent: "\\f6ec";\n\t}\n\t.fa-person-military-pointing:before {\n\t\tcontent: "\\e54a";\n\t}\n\t.fa-person-military-rifle:before {\n\t\tcontent: "\\e54b";\n\t}\n\t.fa-person-military-to-person:before {\n\t\tcontent: "\\e54c";\n\t}\n\t.fa-person-praying:before,\n\t.fa-pray:before {\n\t\tcontent: "\\f683";\n\t}\n\t.fa-person-pregnant:before {\n\t\tcontent: "\\e31e";\n\t}\n\t.fa-person-rays:before {\n\t\tcontent: "\\e54d";\n\t}\n\t.fa-person-rifle:before {\n\t\tcontent: "\\e54e";\n\t}\n\t.fa-person-running:before,\n\t.fa-running:before {\n\t\tcontent: "\\f70c";\n\t}\n\t.fa-person-shelter:before {\n\t\tcontent: "\\e54f";\n\t}\n\t.fa-person-skating:before,\n\t.fa-skating:before {\n\t\tcontent: "\\f7c5";\n\t}\n\t.fa-person-skiing:before,\n\t.fa-skiing:before {\n\t\tcontent: "\\f7c9";\n\t}\n\t.fa-person-skiing-nordic:before,\n\t.fa-skiing-nordic:before {\n\t\tcontent: "\\f7ca";\n\t}\n\t.fa-person-snowboarding:before,\n\t.fa-snowboarding:before {\n\t\tcontent: "\\f7ce";\n\t}\n\t.fa-person-swimming:before,\n\t.fa-swimmer:before {\n\t\tcontent: "\\f5c4";\n\t}\n\t.fa-person-through-window:before {\n\t\tcontent: "\\e433";\n\t}\n\t.fa-person-walking:before,\n\t.fa-walking:before {\n\t\tcontent: "\\f554";\n\t}\n\t.fa-person-walking-arrow-loop-left:before {\n\t\tcontent: "\\e551";\n\t}\n\t.fa-person-walking-arrow-right:before {\n\t\tcontent: "\\e552";\n\t}\n\t.fa-person-walking-dashed-line-arrow-right:before {\n\t\tcontent: "\\e553";\n\t}\n\t.fa-person-walking-luggage:before {\n\t\tcontent: "\\e554";\n\t}\n\t.fa-blind:before,\n\t.fa-person-walking-with-cane:before {\n\t\tcontent: "\\f29d";\n\t}\n\t.fa-peseta-sign:before {\n\t\tcontent: "\\e221";\n\t}\n\t.fa-peso-sign:before {\n\t\tcontent: "\\e222";\n\t}\n\t.fa-phone:before {\n\t\tcontent: "\\f095";\n\t}\n\t.fa-phone-alt:before,\n\t.fa-phone-flip:before {\n\t\tcontent: "\\f879";\n\t}\n\t.fa-phone-slash:before {\n\t\tcontent: "\\f3dd";\n\t}\n\t.fa-phone-volume:before,\n\t.fa-volume-control-phone:before {\n\t\tcontent: "\\f2a0";\n\t}\n\t.fa-photo-film:before,\n\t.fa-photo-video:before {\n\t\tcontent: "\\f87c";\n\t}\n\t.fa-piggy-bank:before {\n\t\tcontent: "\\f4d3";\n\t}\n\t.fa-pills:before {\n\t\tcontent: "\\f484";\n\t}\n\t.fa-pizza-slice:before {\n\t\tcontent: "\\f818";\n\t}\n\t.fa-place-of-worship:before {\n\t\tcontent: "\\f67f";\n\t}\n\t.fa-plane:before {\n\t\tcontent: "\\f072";\n\t}\n\t.fa-plane-arrival:before {\n\t\tcontent: "\\f5af";\n\t}\n\t.fa-plane-circle-check:before {\n\t\tcontent: "\\e555";\n\t}\n\t.fa-plane-circle-exclamation:before {\n\t\tcontent: "\\e556";\n\t}\n\t.fa-plane-circle-xmark:before {\n\t\tcontent: "\\e557";\n\t}\n\t.fa-plane-departure:before {\n\t\tcontent: "\\f5b0";\n\t}\n\t.fa-plane-lock:before {\n\t\tcontent: "\\e558";\n\t}\n\t.fa-plane-slash:before {\n\t\tcontent: "\\e069";\n\t}\n\t.fa-plane-up:before {\n\t\tcontent: "\\e22d";\n\t}\n\t.fa-plant-wilt:before {\n\t\tcontent: "\\e43b";\n\t}\n\t.fa-plate-wheat:before {\n\t\tcontent: "\\e55a";\n\t}\n\t.fa-play:before {\n\t\tcontent: "\\f04b";\n\t}\n\t.fa-plug:before {\n\t\tcontent: "\\f1e6";\n\t}\n\t.fa-plug-circle-bolt:before {\n\t\tcontent: "\\e55b";\n\t}\n\t.fa-plug-circle-check:before {\n\t\tcontent: "\\e55c";\n\t}\n\t.fa-plug-circle-exclamation:before {\n\t\tcontent: "\\e55d";\n\t}\n\t.fa-plug-circle-minus:before {\n\t\tcontent: "\\e55e";\n\t}\n\t.fa-plug-circle-plus:before {\n\t\tcontent: "\\e55f";\n\t}\n\t.fa-plug-circle-xmark:before {\n\t\tcontent: "\\e560";\n\t}\n\t.fa-add:before,\n\t.fa-plus:before {\n\t\tcontent: "\\2b";\n\t}\n\t.fa-plus-minus:before {\n\t\tcontent: "\\e43c";\n\t}\n\t.fa-podcast:before {\n\t\tcontent: "\\f2ce";\n\t}\n\t.fa-poo:before {\n\t\tcontent: "\\f2fe";\n\t}\n\t.fa-poo-bolt:before,\n\t.fa-poo-storm:before {\n\t\tcontent: "\\f75a";\n\t}\n\t.fa-poop:before {\n\t\tcontent: "\\f619";\n\t}\n\t.fa-power-off:before {\n\t\tcontent: "\\f011";\n\t}\n\t.fa-prescription:before {\n\t\tcontent: "\\f5b1";\n\t}\n\t.fa-prescription-bottle:before {\n\t\tcontent: "\\f485";\n\t}\n\t.fa-prescription-bottle-alt:before,\n\t.fa-prescription-bottle-medical:before {\n\t\tcontent: "\\f486";\n\t}\n\t.fa-print:before {\n\t\tcontent: "\\f02f";\n\t}\n\t.fa-pump-medical:before {\n\t\tcontent: "\\e06a";\n\t}\n\t.fa-pump-soap:before {\n\t\tcontent: "\\e06b";\n\t}\n\t.fa-puzzle-piece:before {\n\t\tcontent: "\\f12e";\n\t}\n\t.fa-q:before {\n\t\tcontent: "\\51";\n\t}\n\t.fa-qrcode:before {\n\t\tcontent: "\\f029";\n\t}\n\t.fa-question:before {\n\t\tcontent: "\\3f";\n\t}\n\t.fa-quote-left-alt:before,\n\t.fa-quote-left:before {\n\t\tcontent: "\\f10d";\n\t}\n\t.fa-quote-right-alt:before,\n\t.fa-quote-right:before {\n\t\tcontent: "\\f10e";\n\t}\n\t.fa-r:before {\n\t\tcontent: "\\52";\n\t}\n\t.fa-radiation:before {\n\t\tcontent: "\\f7b9";\n\t}\n\t.fa-radio:before {\n\t\tcontent: "\\f8d7";\n\t}\n\t.fa-rainbow:before {\n\t\tcontent: "\\f75b";\n\t}\n\t.fa-ranking-star:before {\n\t\tcontent: "\\e561";\n\t}\n\t.fa-receipt:before {\n\t\tcontent: "\\f543";\n\t}\n\t.fa-record-vinyl:before {\n\t\tcontent: "\\f8d9";\n\t}\n\t.fa-ad:before,\n\t.fa-rectangle-ad:before {\n\t\tcontent: "\\f641";\n\t}\n\t.fa-list-alt:before,\n\t.fa-rectangle-list:before {\n\t\tcontent: "\\f022";\n\t}\n\t.fa-rectangle-times:before,\n\t.fa-rectangle-xmark:before,\n\t.fa-times-rectangle:before,\n\t.fa-window-close:before {\n\t\tcontent: "\\f410";\n\t}\n\t.fa-recycle:before {\n\t\tcontent: "\\f1b8";\n\t}\n\t.fa-registered:before {\n\t\tcontent: "\\f25d";\n\t}\n\t.fa-repeat:before {\n\t\tcontent: "\\f363";\n\t}\n\t.fa-mail-reply:before,\n\t.fa-reply:before {\n\t\tcontent: "\\f3e5";\n\t}\n\t.fa-mail-reply-all:before,\n\t.fa-reply-all:before {\n\t\tcontent: "\\f122";\n\t}\n\t.fa-republican:before {\n\t\tcontent: "\\f75e";\n\t}\n\t.fa-restroom:before {\n\t\tcontent: "\\f7bd";\n\t}\n\t.fa-retweet:before {\n\t\tcontent: "\\f079";\n\t}\n\t.fa-ribbon:before {\n\t\tcontent: "\\f4d6";\n\t}\n\t.fa-right-from-bracket:before,\n\t.fa-sign-out-alt:before {\n\t\tcontent: "\\f2f5";\n\t}\n\t.fa-exchange-alt:before,\n\t.fa-right-left:before {\n\t\tcontent: "\\f362";\n\t}\n\t.fa-long-arrow-alt-right:before,\n\t.fa-right-long:before {\n\t\tcontent: "\\f30b";\n\t}\n\t.fa-right-to-bracket:before,\n\t.fa-sign-in-alt:before {\n\t\tcontent: "\\f2f6";\n\t}\n\t.fa-ring:before {\n\t\tcontent: "\\f70b";\n\t}\n\t.fa-road:before {\n\t\tcontent: "\\f018";\n\t}\n\t.fa-road-barrier:before {\n\t\tcontent: "\\e562";\n\t}\n\t.fa-road-bridge:before {\n\t\tcontent: "\\e563";\n\t}\n\t.fa-road-circle-check:before {\n\t\tcontent: "\\e564";\n\t}\n\t.fa-road-circle-exclamation:before {\n\t\tcontent: "\\e565";\n\t}\n\t.fa-road-circle-xmark:before {\n\t\tcontent: "\\e566";\n\t}\n\t.fa-road-lock:before {\n\t\tcontent: "\\e567";\n\t}\n\t.fa-road-spikes:before {\n\t\tcontent: "\\e568";\n\t}\n\t.fa-robot:before {\n\t\tcontent: "\\f544";\n\t}\n\t.fa-rocket:before {\n\t\tcontent: "\\f135";\n\t}\n\t.fa-rotate:before,\n\t.fa-sync-alt:before {\n\t\tcontent: "\\f2f1";\n\t}\n\t.fa-rotate-back:before,\n\t.fa-rotate-backward:before,\n\t.fa-rotate-left:before,\n\t.fa-undo-alt:before {\n\t\tcontent: "\\f2ea";\n\t}\n\t.fa-redo-alt:before,\n\t.fa-rotate-forward:before,\n\t.fa-rotate-right:before {\n\t\tcontent: "\\f2f9";\n\t}\n\t.fa-route:before {\n\t\tcontent: "\\f4d7";\n\t}\n\t.fa-feed:before,\n\t.fa-rss:before {\n\t\tcontent: "\\f09e";\n\t}\n\t.fa-rouble:before,\n\t.fa-rub:before,\n\t.fa-ruble-sign:before,\n\t.fa-ruble:before {\n\t\tcontent: "\\f158";\n\t}\n\t.fa-rug:before {\n\t\tcontent: "\\e569";\n\t}\n\t.fa-ruler:before {\n\t\tcontent: "\\f545";\n\t}\n\t.fa-ruler-combined:before {\n\t\tcontent: "\\f546";\n\t}\n\t.fa-ruler-horizontal:before {\n\t\tcontent: "\\f547";\n\t}\n\t.fa-ruler-vertical:before {\n\t\tcontent: "\\f548";\n\t}\n\t.fa-rupee-sign:before,\n\t.fa-rupee:before {\n\t\tcontent: "\\f156";\n\t}\n\t.fa-rupiah-sign:before {\n\t\tcontent: "\\e23d";\n\t}\n\t.fa-s:before {\n\t\tcontent: "\\53";\n\t}\n\t.fa-sack-dollar:before {\n\t\tcontent: "\\f81d";\n\t}\n\t.fa-sack-xmark:before {\n\t\tcontent: "\\e56a";\n\t}\n\t.fa-sailboat:before {\n\t\tcontent: "\\e445";\n\t}\n\t.fa-satellite:before {\n\t\tcontent: "\\f7bf";\n\t}\n\t.fa-satellite-dish:before {\n\t\tcontent: "\\f7c0";\n\t}\n\t.fa-balance-scale:before,\n\t.fa-scale-balanced:before {\n\t\tcontent: "\\f24e";\n\t}\n\t.fa-balance-scale-left:before,\n\t.fa-scale-unbalanced:before {\n\t\tcontent: "\\f515";\n\t}\n\t.fa-balance-scale-right:before,\n\t.fa-scale-unbalanced-flip:before {\n\t\tcontent: "\\f516";\n\t}\n\t.fa-school:before {\n\t\tcontent: "\\f549";\n\t}\n\t.fa-school-circle-check:before {\n\t\tcontent: "\\e56b";\n\t}\n\t.fa-school-circle-exclamation:before {\n\t\tcontent: "\\e56c";\n\t}\n\t.fa-school-circle-xmark:before {\n\t\tcontent: "\\e56d";\n\t}\n\t.fa-school-flag:before {\n\t\tcontent: "\\e56e";\n\t}\n\t.fa-school-lock:before {\n\t\tcontent: "\\e56f";\n\t}\n\t.fa-cut:before,\n\t.fa-scissors:before {\n\t\tcontent: "\\f0c4";\n\t}\n\t.fa-screwdriver:before {\n\t\tcontent: "\\f54a";\n\t}\n\t.fa-screwdriver-wrench:before,\n\t.fa-tools:before {\n\t\tcontent: "\\f7d9";\n\t}\n\t.fa-scroll:before {\n\t\tcontent: "\\f70e";\n\t}\n\t.fa-scroll-torah:before,\n\t.fa-torah:before {\n\t\tcontent: "\\f6a0";\n\t}\n\t.fa-sd-card:before {\n\t\tcontent: "\\f7c2";\n\t}\n\t.fa-section:before {\n\t\tcontent: "\\e447";\n\t}\n\t.fa-seedling:before,\n\t.fa-sprout:before {\n\t\tcontent: "\\f4d8";\n\t}\n\t.fa-server:before {\n\t\tcontent: "\\f233";\n\t}\n\t.fa-shapes:before,\n\t.fa-triangle-circle-square:before {\n\t\tcontent: "\\f61f";\n\t}\n\t.fa-arrow-turn-right:before,\n\t.fa-mail-forward:before,\n\t.fa-share:before {\n\t\tcontent: "\\f064";\n\t}\n\t.fa-share-from-square:before,\n\t.fa-share-square:before {\n\t\tcontent: "\\f14d";\n\t}\n\t.fa-share-alt:before,\n\t.fa-share-nodes:before {\n\t\tcontent: "\\f1e0";\n\t}\n\t.fa-sheet-plastic:before {\n\t\tcontent: "\\e571";\n\t}\n\t.fa-ils:before,\n\t.fa-shekel-sign:before,\n\t.fa-shekel:before,\n\t.fa-sheqel-sign:before,\n\t.fa-sheqel:before {\n\t\tcontent: "\\f20b";\n\t}\n\t.fa-shield-blank:before,\n\t.fa-shield:before {\n\t\tcontent: "\\f132";\n\t}\n\t.fa-shield-cat:before {\n\t\tcontent: "\\e572";\n\t}\n\t.fa-shield-dog:before {\n\t\tcontent: "\\e573";\n\t}\n\t.fa-shield-alt:before,\n\t.fa-shield-halved:before {\n\t\tcontent: "\\f3ed";\n\t}\n\t.fa-shield-heart:before {\n\t\tcontent: "\\e574";\n\t}\n\t.fa-shield-virus:before {\n\t\tcontent: "\\e06c";\n\t}\n\t.fa-ship:before {\n\t\tcontent: "\\f21a";\n\t}\n\t.fa-shirt:before,\n\t.fa-t-shirt:before,\n\t.fa-tshirt:before {\n\t\tcontent: "\\f553";\n\t}\n\t.fa-shoe-prints:before {\n\t\tcontent: "\\f54b";\n\t}\n\t.fa-shop:before,\n\t.fa-store-alt:before {\n\t\tcontent: "\\f54f";\n\t}\n\t.fa-shop-lock:before {\n\t\tcontent: "\\e4a5";\n\t}\n\t.fa-shop-slash:before,\n\t.fa-store-alt-slash:before {\n\t\tcontent: "\\e070";\n\t}\n\t.fa-shower:before {\n\t\tcontent: "\\f2cc";\n\t}\n\t.fa-shrimp:before {\n\t\tcontent: "\\e448";\n\t}\n\t.fa-random:before,\n\t.fa-shuffle:before {\n\t\tcontent: "\\f074";\n\t}\n\t.fa-shuttle-space:before,\n\t.fa-space-shuttle:before {\n\t\tcontent: "\\f197";\n\t}\n\t.fa-sign-hanging:before,\n\t.fa-sign:before {\n\t\tcontent: "\\f4d9";\n\t}\n\t.fa-signal-5:before,\n\t.fa-signal-perfect:before,\n\t.fa-signal:before {\n\t\tcontent: "\\f012";\n\t}\n\t.fa-signature:before {\n\t\tcontent: "\\f5b7";\n\t}\n\t.fa-map-signs:before,\n\t.fa-signs-post:before {\n\t\tcontent: "\\f277";\n\t}\n\t.fa-sim-card:before {\n\t\tcontent: "\\f7c4";\n\t}\n\t.fa-sink:before {\n\t\tcontent: "\\e06d";\n\t}\n\t.fa-sitemap:before {\n\t\tcontent: "\\f0e8";\n\t}\n\t.fa-skull:before {\n\t\tcontent: "\\f54c";\n\t}\n\t.fa-skull-crossbones:before {\n\t\tcontent: "\\f714";\n\t}\n\t.fa-slash:before {\n\t\tcontent: "\\f715";\n\t}\n\t.fa-sleigh:before {\n\t\tcontent: "\\f7cc";\n\t}\n\t.fa-sliders-h:before,\n\t.fa-sliders:before {\n\t\tcontent: "\\f1de";\n\t}\n\t.fa-smog:before {\n\t\tcontent: "\\f75f";\n\t}\n\t.fa-smoking:before {\n\t\tcontent: "\\f48d";\n\t}\n\t.fa-snowflake:before {\n\t\tcontent: "\\f2dc";\n\t}\n\t.fa-snowman:before {\n\t\tcontent: "\\f7d0";\n\t}\n\t.fa-snowplow:before {\n\t\tcontent: "\\f7d2";\n\t}\n\t.fa-soap:before {\n\t\tcontent: "\\e06e";\n\t}\n\t.fa-socks:before {\n\t\tcontent: "\\f696";\n\t}\n\t.fa-solar-panel:before {\n\t\tcontent: "\\f5ba";\n\t}\n\t.fa-sort:before,\n\t.fa-unsorted:before {\n\t\tcontent: "\\f0dc";\n\t}\n\t.fa-sort-desc:before,\n\t.fa-sort-down:before {\n\t\tcontent: "\\f0dd";\n\t}\n\t.fa-sort-asc:before,\n\t.fa-sort-up:before {\n\t\tcontent: "\\f0de";\n\t}\n\t.fa-spa:before {\n\t\tcontent: "\\f5bb";\n\t}\n\t.fa-pastafarianism:before,\n\t.fa-spaghetti-monster-flying:before {\n\t\tcontent: "\\f67b";\n\t}\n\t.fa-spell-check:before {\n\t\tcontent: "\\f891";\n\t}\n\t.fa-spider:before {\n\t\tcontent: "\\f717";\n\t}\n\t.fa-spinner:before {\n\t\tcontent: "\\f110";\n\t}\n\t.fa-splotch:before {\n\t\tcontent: "\\f5bc";\n\t}\n\t.fa-spoon:before,\n\t.fa-utensil-spoon:before {\n\t\tcontent: "\\f2e5";\n\t}\n\t.fa-spray-can:before {\n\t\tcontent: "\\f5bd";\n\t}\n\t.fa-air-freshener:before,\n\t.fa-spray-can-sparkles:before {\n\t\tcontent: "\\f5d0";\n\t}\n\t.fa-square:before {\n\t\tcontent: "\\f0c8";\n\t}\n\t.fa-external-link-square:before,\n\t.fa-square-arrow-up-right:before {\n\t\tcontent: "\\f14c";\n\t}\n\t.fa-caret-square-down:before,\n\t.fa-square-caret-down:before {\n\t\tcontent: "\\f150";\n\t}\n\t.fa-caret-square-left:before,\n\t.fa-square-caret-left:before {\n\t\tcontent: "\\f191";\n\t}\n\t.fa-caret-square-right:before,\n\t.fa-square-caret-right:before {\n\t\tcontent: "\\f152";\n\t}\n\t.fa-caret-square-up:before,\n\t.fa-square-caret-up:before {\n\t\tcontent: "\\f151";\n\t}\n\t.fa-check-square:before,\n\t.fa-square-check:before {\n\t\tcontent: "\\f14a";\n\t}\n\t.fa-envelope-square:before,\n\t.fa-square-envelope:before {\n\t\tcontent: "\\f199";\n\t}\n\t.fa-square-full:before {\n\t\tcontent: "\\f45c";\n\t}\n\t.fa-h-square:before,\n\t.fa-square-h:before {\n\t\tcontent: "\\f0fd";\n\t}\n\t.fa-minus-square:before,\n\t.fa-square-minus:before {\n\t\tcontent: "\\f146";\n\t}\n\t.fa-square-nfi:before {\n\t\tcontent: "\\e576";\n\t}\n\t.fa-parking:before,\n\t.fa-square-parking:before {\n\t\tcontent: "\\f540";\n\t}\n\t.fa-pen-square:before,\n\t.fa-pencil-square:before,\n\t.fa-square-pen:before {\n\t\tcontent: "\\f14b";\n\t}\n\t.fa-square-person-confined:before {\n\t\tcontent: "\\e577";\n\t}\n\t.fa-phone-square:before,\n\t.fa-square-phone:before {\n\t\tcontent: "\\f098";\n\t}\n\t.fa-phone-square-alt:before,\n\t.fa-square-phone-flip:before {\n\t\tcontent: "\\f87b";\n\t}\n\t.fa-plus-square:before,\n\t.fa-square-plus:before {\n\t\tcontent: "\\f0fe";\n\t}\n\t.fa-poll-h:before,\n\t.fa-square-poll-horizontal:before {\n\t\tcontent: "\\f682";\n\t}\n\t.fa-poll:before,\n\t.fa-square-poll-vertical:before {\n\t\tcontent: "\\f681";\n\t}\n\t.fa-square-root-alt:before,\n\t.fa-square-root-variable:before {\n\t\tcontent: "\\f698";\n\t}\n\t.fa-rss-square:before,\n\t.fa-square-rss:before {\n\t\tcontent: "\\f143";\n\t}\n\t.fa-share-alt-square:before,\n\t.fa-square-share-nodes:before {\n\t\tcontent: "\\f1e1";\n\t}\n\t.fa-external-link-square-alt:before,\n\t.fa-square-up-right:before {\n\t\tcontent: "\\f360";\n\t}\n\t.fa-square-virus:before {\n\t\tcontent: "\\e578";\n\t}\n\t.fa-square-xmark:before,\n\t.fa-times-square:before,\n\t.fa-xmark-square:before {\n\t\tcontent: "\\f2d3";\n\t}\n\t.fa-rod-asclepius:before,\n\t.fa-rod-snake:before,\n\t.fa-staff-aesculapius:before,\n\t.fa-staff-snake:before {\n\t\tcontent: "\\e579";\n\t}\n\t.fa-stairs:before {\n\t\tcontent: "\\e289";\n\t}\n\t.fa-stamp:before {\n\t\tcontent: "\\f5bf";\n\t}\n\t.fa-star:before {\n\t\tcontent: "\\f005";\n\t}\n\t.fa-star-and-crescent:before {\n\t\tcontent: "\\f699";\n\t}\n\t.fa-star-half:before {\n\t\tcontent: "\\f089";\n\t}\n\t.fa-star-half-alt:before,\n\t.fa-star-half-stroke:before {\n\t\tcontent: "\\f5c0";\n\t}\n\t.fa-star-of-david:before {\n\t\tcontent: "\\f69a";\n\t}\n\t.fa-star-of-life:before {\n\t\tcontent: "\\f621";\n\t}\n\t.fa-gbp:before,\n\t.fa-pound-sign:before,\n\t.fa-sterling-sign:before {\n\t\tcontent: "\\f154";\n\t}\n\t.fa-stethoscope:before {\n\t\tcontent: "\\f0f1";\n\t}\n\t.fa-stop:before {\n\t\tcontent: "\\f04d";\n\t}\n\t.fa-stopwatch:before {\n\t\tcontent: "\\f2f2";\n\t}\n\t.fa-stopwatch-20:before {\n\t\tcontent: "\\e06f";\n\t}\n\t.fa-store:before {\n\t\tcontent: "\\f54e";\n\t}\n\t.fa-store-slash:before {\n\t\tcontent: "\\e071";\n\t}\n\t.fa-street-view:before {\n\t\tcontent: "\\f21d";\n\t}\n\t.fa-strikethrough:before {\n\t\tcontent: "\\f0cc";\n\t}\n\t.fa-stroopwafel:before {\n\t\tcontent: "\\f551";\n\t}\n\t.fa-subscript:before {\n\t\tcontent: "\\f12c";\n\t}\n\t.fa-suitcase:before {\n\t\tcontent: "\\f0f2";\n\t}\n\t.fa-medkit:before,\n\t.fa-suitcase-medical:before {\n\t\tcontent: "\\f0fa";\n\t}\n\t.fa-suitcase-rolling:before {\n\t\tcontent: "\\f5c1";\n\t}\n\t.fa-sun:before {\n\t\tcontent: "\\f185";\n\t}\n\t.fa-sun-plant-wilt:before {\n\t\tcontent: "\\e57a";\n\t}\n\t.fa-superscript:before {\n\t\tcontent: "\\f12b";\n\t}\n\t.fa-swatchbook:before {\n\t\tcontent: "\\f5c3";\n\t}\n\t.fa-synagogue:before {\n\t\tcontent: "\\f69b";\n\t}\n\t.fa-syringe:before {\n\t\tcontent: "\\f48e";\n\t}\n\t.fa-t:before {\n\t\tcontent: "\\54";\n\t}\n\t.fa-table:before {\n\t\tcontent: "\\f0ce";\n\t}\n\t.fa-table-cells:before,\n\t.fa-th:before {\n\t\tcontent: "\\f00a";\n\t}\n\t.fa-table-cells-large:before,\n\t.fa-th-large:before {\n\t\tcontent: "\\f009";\n\t}\n\t.fa-columns:before,\n\t.fa-table-columns:before {\n\t\tcontent: "\\f0db";\n\t}\n\t.fa-table-list:before,\n\t.fa-th-list:before {\n\t\tcontent: "\\f00b";\n\t}\n\t.fa-ping-pong-paddle-ball:before,\n\t.fa-table-tennis-paddle-ball:before,\n\t.fa-table-tennis:before {\n\t\tcontent: "\\f45d";\n\t}\n\t.fa-tablet-android:before,\n\t.fa-tablet:before {\n\t\tcontent: "\\f3fb";\n\t}\n\t.fa-tablet-button:before {\n\t\tcontent: "\\f10a";\n\t}\n\t.fa-tablet-alt:before,\n\t.fa-tablet-screen-button:before {\n\t\tcontent: "\\f3fa";\n\t}\n\t.fa-tablets:before {\n\t\tcontent: "\\f490";\n\t}\n\t.fa-digital-tachograph:before,\n\t.fa-tachograph-digital:before {\n\t\tcontent: "\\f566";\n\t}\n\t.fa-tag:before {\n\t\tcontent: "\\f02b";\n\t}\n\t.fa-tags:before {\n\t\tcontent: "\\f02c";\n\t}\n\t.fa-tape:before {\n\t\tcontent: "\\f4db";\n\t}\n\t.fa-tarp:before {\n\t\tcontent: "\\e57b";\n\t}\n\t.fa-tarp-droplet:before {\n\t\tcontent: "\\e57c";\n\t}\n\t.fa-cab:before,\n\t.fa-taxi:before {\n\t\tcontent: "\\f1ba";\n\t}\n\t.fa-teeth:before {\n\t\tcontent: "\\f62e";\n\t}\n\t.fa-teeth-open:before {\n\t\tcontent: "\\f62f";\n\t}\n\t.fa-temperature-arrow-down:before,\n\t.fa-temperature-down:before {\n\t\tcontent: "\\e03f";\n\t}\n\t.fa-temperature-arrow-up:before,\n\t.fa-temperature-up:before {\n\t\tcontent: "\\e040";\n\t}\n\t.fa-temperature-0:before,\n\t.fa-temperature-empty:before,\n\t.fa-thermometer-0:before,\n\t.fa-thermometer-empty:before {\n\t\tcontent: "\\f2cb";\n\t}\n\t.fa-temperature-4:before,\n\t.fa-temperature-full:before,\n\t.fa-thermometer-4:before,\n\t.fa-thermometer-full:before {\n\t\tcontent: "\\f2c7";\n\t}\n\t.fa-temperature-2:before,\n\t.fa-temperature-half:before,\n\t.fa-thermometer-2:before,\n\t.fa-thermometer-half:before {\n\t\tcontent: "\\f2c9";\n\t}\n\t.fa-temperature-high:before {\n\t\tcontent: "\\f769";\n\t}\n\t.fa-temperature-low:before {\n\t\tcontent: "\\f76b";\n\t}\n\t.fa-temperature-1:before,\n\t.fa-temperature-quarter:before,\n\t.fa-thermometer-1:before,\n\t.fa-thermometer-quarter:before {\n\t\tcontent: "\\f2ca";\n\t}\n\t.fa-temperature-3:before,\n\t.fa-temperature-three-quarters:before,\n\t.fa-thermometer-3:before,\n\t.fa-thermometer-three-quarters:before {\n\t\tcontent: "\\f2c8";\n\t}\n\t.fa-tenge-sign:before,\n\t.fa-tenge:before {\n\t\tcontent: "\\f7d7";\n\t}\n\t.fa-tent:before {\n\t\tcontent: "\\e57d";\n\t}\n\t.fa-tent-arrow-down-to-line:before {\n\t\tcontent: "\\e57e";\n\t}\n\t.fa-tent-arrow-left-right:before {\n\t\tcontent: "\\e57f";\n\t}\n\t.fa-tent-arrow-turn-left:before {\n\t\tcontent: "\\e580";\n\t}\n\t.fa-tent-arrows-down:before {\n\t\tcontent: "\\e581";\n\t}\n\t.fa-tents:before {\n\t\tcontent: "\\e582";\n\t}\n\t.fa-terminal:before {\n\t\tcontent: "\\f120";\n\t}\n\t.fa-text-height:before {\n\t\tcontent: "\\f034";\n\t}\n\t.fa-remove-format:before,\n\t.fa-text-slash:before {\n\t\tcontent: "\\f87d";\n\t}\n\t.fa-text-width:before {\n\t\tcontent: "\\f035";\n\t}\n\t.fa-thermometer:before {\n\t\tcontent: "\\f491";\n\t}\n\t.fa-thumbs-down:before {\n\t\tcontent: "\\f165";\n\t}\n\t.fa-thumbs-up:before {\n\t\tcontent: "\\f164";\n\t}\n\t.fa-thumb-tack:before,\n\t.fa-thumbtack:before {\n\t\tcontent: "\\f08d";\n\t}\n\t.fa-ticket:before {\n\t\tcontent: "\\f145";\n\t}\n\t.fa-ticket-alt:before,\n\t.fa-ticket-simple:before {\n\t\tcontent: "\\f3ff";\n\t}\n\t.fa-timeline:before {\n\t\tcontent: "\\e29c";\n\t}\n\t.fa-toggle-off:before {\n\t\tcontent: "\\f204";\n\t}\n\t.fa-toggle-on:before {\n\t\tcontent: "\\f205";\n\t}\n\t.fa-toilet:before {\n\t\tcontent: "\\f7d8";\n\t}\n\t.fa-toilet-paper:before {\n\t\tcontent: "\\f71e";\n\t}\n\t.fa-toilet-paper-slash:before {\n\t\tcontent: "\\e072";\n\t}\n\t.fa-toilet-portable:before {\n\t\tcontent: "\\e583";\n\t}\n\t.fa-toilets-portable:before {\n\t\tcontent: "\\e584";\n\t}\n\t.fa-toolbox:before {\n\t\tcontent: "\\f552";\n\t}\n\t.fa-tooth:before {\n\t\tcontent: "\\f5c9";\n\t}\n\t.fa-torii-gate:before {\n\t\tcontent: "\\f6a1";\n\t}\n\t.fa-tornado:before {\n\t\tcontent: "\\f76f";\n\t}\n\t.fa-broadcast-tower:before,\n\t.fa-tower-broadcast:before {\n\t\tcontent: "\\f519";\n\t}\n\t.fa-tower-cell:before {\n\t\tcontent: "\\e585";\n\t}\n\t.fa-tower-observation:before {\n\t\tcontent: "\\e586";\n\t}\n\t.fa-tractor:before {\n\t\tcontent: "\\f722";\n\t}\n\t.fa-trademark:before {\n\t\tcontent: "\\f25c";\n\t}\n\t.fa-traffic-light:before {\n\t\tcontent: "\\f637";\n\t}\n\t.fa-trailer:before {\n\t\tcontent: "\\e041";\n\t}\n\t.fa-train:before {\n\t\tcontent: "\\f238";\n\t}\n\t.fa-subway:before,\n\t.fa-train-subway:before {\n\t\tcontent: "\\f239";\n\t}\n\t.fa-train-tram:before,\n\t.fa-tram:before {\n\t\tcontent: "\\f7da";\n\t}\n\t.fa-transgender-alt:before,\n\t.fa-transgender:before {\n\t\tcontent: "\\f225";\n\t}\n\t.fa-trash:before {\n\t\tcontent: "\\f1f8";\n\t}\n\t.fa-trash-arrow-up:before,\n\t.fa-trash-restore:before {\n\t\tcontent: "\\f829";\n\t}\n\t.fa-trash-alt:before,\n\t.fa-trash-can:before {\n\t\tcontent: "\\f2ed";\n\t}\n\t.fa-trash-can-arrow-up:before,\n\t.fa-trash-restore-alt:before {\n\t\tcontent: "\\f82a";\n\t}\n\t.fa-tree:before {\n\t\tcontent: "\\f1bb";\n\t}\n\t.fa-tree-city:before {\n\t\tcontent: "\\e587";\n\t}\n\t.fa-exclamation-triangle:before,\n\t.fa-triangle-exclamation:before,\n\t.fa-warning:before {\n\t\tcontent: "\\f071";\n\t}\n\t.fa-trophy:before {\n\t\tcontent: "\\f091";\n\t}\n\t.fa-trowel:before {\n\t\tcontent: "\\e589";\n\t}\n\t.fa-trowel-bricks:before {\n\t\tcontent: "\\e58a";\n\t}\n\t.fa-truck:before {\n\t\tcontent: "\\f0d1";\n\t}\n\t.fa-truck-arrow-right:before {\n\t\tcontent: "\\e58b";\n\t}\n\t.fa-truck-droplet:before {\n\t\tcontent: "\\e58c";\n\t}\n\t.fa-shipping-fast:before,\n\t.fa-truck-fast:before {\n\t\tcontent: "\\f48b";\n\t}\n\t.fa-truck-field:before {\n\t\tcontent: "\\e58d";\n\t}\n\t.fa-truck-field-un:before {\n\t\tcontent: "\\e58e";\n\t}\n\t.fa-truck-front:before {\n\t\tcontent: "\\e2b7";\n\t}\n\t.fa-ambulance:before,\n\t.fa-truck-medical:before {\n\t\tcontent: "\\f0f9";\n\t}\n\t.fa-truck-monster:before {\n\t\tcontent: "\\f63b";\n\t}\n\t.fa-truck-moving:before {\n\t\tcontent: "\\f4df";\n\t}\n\t.fa-truck-pickup:before {\n\t\tcontent: "\\f63c";\n\t}\n\t.fa-truck-plane:before {\n\t\tcontent: "\\e58f";\n\t}\n\t.fa-truck-loading:before,\n\t.fa-truck-ramp-box:before {\n\t\tcontent: "\\f4de";\n\t}\n\t.fa-teletype:before,\n\t.fa-tty:before {\n\t\tcontent: "\\f1e4";\n\t}\n\t.fa-try:before,\n\t.fa-turkish-lira-sign:before,\n\t.fa-turkish-lira:before {\n\t\tcontent: "\\e2bb";\n\t}\n\t.fa-level-down-alt:before,\n\t.fa-turn-down:before {\n\t\tcontent: "\\f3be";\n\t}\n\t.fa-level-up-alt:before,\n\t.fa-turn-up:before {\n\t\tcontent: "\\f3bf";\n\t}\n\t.fa-television:before,\n\t.fa-tv-alt:before,\n\t.fa-tv:before {\n\t\tcontent: "\\f26c";\n\t}\n\t.fa-u:before {\n\t\tcontent: "\\55";\n\t}\n\t.fa-umbrella:before {\n\t\tcontent: "\\f0e9";\n\t}\n\t.fa-umbrella-beach:before {\n\t\tcontent: "\\f5ca";\n\t}\n\t.fa-underline:before {\n\t\tcontent: "\\f0cd";\n\t}\n\t.fa-universal-access:before {\n\t\tcontent: "\\f29a";\n\t}\n\t.fa-unlock:before {\n\t\tcontent: "\\f09c";\n\t}\n\t.fa-unlock-alt:before,\n\t.fa-unlock-keyhole:before {\n\t\tcontent: "\\f13e";\n\t}\n\t.fa-arrows-alt-v:before,\n\t.fa-up-down:before {\n\t\tcontent: "\\f338";\n\t}\n\t.fa-arrows-alt:before,\n\t.fa-up-down-left-right:before {\n\t\tcontent: "\\f0b2";\n\t}\n\t.fa-long-arrow-alt-up:before,\n\t.fa-up-long:before {\n\t\tcontent: "\\f30c";\n\t}\n\t.fa-expand-alt:before,\n\t.fa-up-right-and-down-left-from-center:before {\n\t\tcontent: "\\f424";\n\t}\n\t.fa-external-link-alt:before,\n\t.fa-up-right-from-square:before {\n\t\tcontent: "\\f35d";\n\t}\n\t.fa-upload:before {\n\t\tcontent: "\\f093";\n\t}\n\t.fa-user:before {\n\t\tcontent: "\\f007";\n\t}\n\t.fa-user-astronaut:before {\n\t\tcontent: "\\f4fb";\n\t}\n\t.fa-user-check:before {\n\t\tcontent: "\\f4fc";\n\t}\n\t.fa-user-clock:before {\n\t\tcontent: "\\f4fd";\n\t}\n\t.fa-user-doctor:before,\n\t.fa-user-md:before {\n\t\tcontent: "\\f0f0";\n\t}\n\t.fa-user-cog:before,\n\t.fa-user-gear:before {\n\t\tcontent: "\\f4fe";\n\t}\n\t.fa-user-graduate:before {\n\t\tcontent: "\\f501";\n\t}\n\t.fa-user-friends:before,\n\t.fa-user-group:before {\n\t\tcontent: "\\f500";\n\t}\n\t.fa-user-injured:before {\n\t\tcontent: "\\f728";\n\t}\n\t.fa-user-alt:before,\n\t.fa-user-large:before {\n\t\tcontent: "\\f406";\n\t}\n\t.fa-user-alt-slash:before,\n\t.fa-user-large-slash:before {\n\t\tcontent: "\\f4fa";\n\t}\n\t.fa-user-lock:before {\n\t\tcontent: "\\f502";\n\t}\n\t.fa-user-minus:before {\n\t\tcontent: "\\f503";\n\t}\n\t.fa-user-ninja:before {\n\t\tcontent: "\\f504";\n\t}\n\t.fa-user-nurse:before {\n\t\tcontent: "\\f82f";\n\t}\n\t.fa-user-edit:before,\n\t.fa-user-pen:before {\n\t\tcontent: "\\f4ff";\n\t}\n\t.fa-user-plus:before {\n\t\tcontent: "\\f234";\n\t}\n\t.fa-user-secret:before {\n\t\tcontent: "\\f21b";\n\t}\n\t.fa-user-shield:before {\n\t\tcontent: "\\f505";\n\t}\n\t.fa-user-slash:before {\n\t\tcontent: "\\f506";\n\t}\n\t.fa-user-tag:before {\n\t\tcontent: "\\f507";\n\t}\n\t.fa-user-tie:before {\n\t\tcontent: "\\f508";\n\t}\n\t.fa-user-times:before,\n\t.fa-user-xmark:before {\n\t\tcontent: "\\f235";\n\t}\n\t.fa-users:before {\n\t\tcontent: "\\f0c0";\n\t}\n\t.fa-users-between-lines:before {\n\t\tcontent: "\\e591";\n\t}\n\t.fa-users-cog:before,\n\t.fa-users-gear:before {\n\t\tcontent: "\\f509";\n\t}\n\t.fa-users-line:before {\n\t\tcontent: "\\e592";\n\t}\n\t.fa-users-rays:before {\n\t\tcontent: "\\e593";\n\t}\n\t.fa-users-rectangle:before {\n\t\tcontent: "\\e594";\n\t}\n\t.fa-users-slash:before {\n\t\tcontent: "\\e073";\n\t}\n\t.fa-users-viewfinder:before {\n\t\tcontent: "\\e595";\n\t}\n\t.fa-cutlery:before,\n\t.fa-utensils:before {\n\t\tcontent: "\\f2e7";\n\t}\n\t.fa-v:before {\n\t\tcontent: "\\56";\n\t}\n\t.fa-shuttle-van:before,\n\t.fa-van-shuttle:before {\n\t\tcontent: "\\f5b6";\n\t}\n\t.fa-vault:before {\n\t\tcontent: "\\e2c5";\n\t}\n\t.fa-vector-square:before {\n\t\tcontent: "\\f5cb";\n\t}\n\t.fa-venus:before {\n\t\tcontent: "\\f221";\n\t}\n\t.fa-venus-double:before {\n\t\tcontent: "\\f226";\n\t}\n\t.fa-venus-mars:before {\n\t\tcontent: "\\f228";\n\t}\n\t.fa-vest:before {\n\t\tcontent: "\\e085";\n\t}\n\t.fa-vest-patches:before {\n\t\tcontent: "\\e086";\n\t}\n\t.fa-vial:before {\n\t\tcontent: "\\f492";\n\t}\n\t.fa-vial-circle-check:before {\n\t\tcontent: "\\e596";\n\t}\n\t.fa-vial-virus:before {\n\t\tcontent: "\\e597";\n\t}\n\t.fa-vials:before {\n\t\tcontent: "\\f493";\n\t}\n\t.fa-video-camera:before,\n\t.fa-video:before {\n\t\tcontent: "\\f03d";\n\t}\n\t.fa-video-slash:before {\n\t\tcontent: "\\f4e2";\n\t}\n\t.fa-vihara:before {\n\t\tcontent: "\\f6a7";\n\t}\n\t.fa-virus:before {\n\t\tcontent: "\\e074";\n\t}\n\t.fa-virus-covid:before {\n\t\tcontent: "\\e4a8";\n\t}\n\t.fa-virus-covid-slash:before {\n\t\tcontent: "\\e4a9";\n\t}\n\t.fa-virus-slash:before {\n\t\tcontent: "\\e075";\n\t}\n\t.fa-viruses:before {\n\t\tcontent: "\\e076";\n\t}\n\t.fa-voicemail:before {\n\t\tcontent: "\\f897";\n\t}\n\t.fa-volcano:before {\n\t\tcontent: "\\f770";\n\t}\n\t.fa-volleyball-ball:before,\n\t.fa-volleyball:before {\n\t\tcontent: "\\f45f";\n\t}\n\t.fa-volume-high:before,\n\t.fa-volume-up:before {\n\t\tcontent: "\\f028";\n\t}\n\t.fa-volume-down:before,\n\t.fa-volume-low:before {\n\t\tcontent: "\\f027";\n\t}\n\t.fa-volume-off:before {\n\t\tcontent: "\\f026";\n\t}\n\t.fa-volume-mute:before,\n\t.fa-volume-times:before,\n\t.fa-volume-xmark:before {\n\t\tcontent: "\\f6a9";\n\t}\n\t.fa-vr-cardboard:before {\n\t\tcontent: "\\f729";\n\t}\n\t.fa-w:before {\n\t\tcontent: "\\57";\n\t}\n\t.fa-walkie-talkie:before {\n\t\tcontent: "\\f8ef";\n\t}\n\t.fa-wallet:before {\n\t\tcontent: "\\f555";\n\t}\n\t.fa-magic:before,\n\t.fa-wand-magic:before {\n\t\tcontent: "\\f0d0";\n\t}\n\t.fa-magic-wand-sparkles:before,\n\t.fa-wand-magic-sparkles:before {\n\t\tcontent: "\\e2ca";\n\t}\n\t.fa-wand-sparkles:before {\n\t\tcontent: "\\f72b";\n\t}\n\t.fa-warehouse:before {\n\t\tcontent: "\\f494";\n\t}\n\t.fa-water:before {\n\t\tcontent: "\\f773";\n\t}\n\t.fa-ladder-water:before,\n\t.fa-swimming-pool:before,\n\t.fa-water-ladder:before {\n\t\tcontent: "\\f5c5";\n\t}\n\t.fa-wave-square:before {\n\t\tcontent: "\\f83e";\n\t}\n\t.fa-weight-hanging:before {\n\t\tcontent: "\\f5cd";\n\t}\n\t.fa-weight-scale:before,\n\t.fa-weight:before {\n\t\tcontent: "\\f496";\n\t}\n\t.fa-wheat-alt:before,\n\t.fa-wheat-awn:before {\n\t\tcontent: "\\e2cd";\n\t}\n\t.fa-wheat-awn-circle-exclamation:before {\n\t\tcontent: "\\e598";\n\t}\n\t.fa-wheelchair:before {\n\t\tcontent: "\\f193";\n\t}\n\t.fa-wheelchair-alt:before,\n\t.fa-wheelchair-move:before {\n\t\tcontent: "\\e2ce";\n\t}\n\t.fa-glass-whiskey:before,\n\t.fa-whiskey-glass:before {\n\t\tcontent: "\\f7a0";\n\t}\n\t.fa-wifi-3:before,\n\t.fa-wifi-strong:before,\n\t.fa-wifi:before {\n\t\tcontent: "\\f1eb";\n\t}\n\t.fa-wind:before {\n\t\tcontent: "\\f72e";\n\t}\n\t.fa-window-maximize:before {\n\t\tcontent: "\\f2d0";\n\t}\n\t.fa-window-minimize:before {\n\t\tcontent: "\\f2d1";\n\t}\n\t.fa-window-restore:before {\n\t\tcontent: "\\f2d2";\n\t}\n\t.fa-wine-bottle:before {\n\t\tcontent: "\\f72f";\n\t}\n\t.fa-wine-glass:before {\n\t\tcontent: "\\f4e3";\n\t}\n\t.fa-wine-glass-alt:before,\n\t.fa-wine-glass-empty:before {\n\t\tcontent: "\\f5ce";\n\t}\n\t.fa-krw:before,\n\t.fa-won-sign:before,\n\t.fa-won:before {\n\t\tcontent: "\\f159";\n\t}\n\t.fa-worm:before {\n\t\tcontent: "\\e599";\n\t}\n\t.fa-wrench:before {\n\t\tcontent: "\\f0ad";\n\t}\n\t.fa-x:before {\n\t\tcontent: "\\58";\n\t}\n\t.fa-x-ray:before {\n\t\tcontent: "\\f497";\n\t}\n\t.fa-close:before,\n\t.fa-multiply:before,\n\t.fa-remove:before,\n\t.fa-times:before,\n\t.fa-xmark:before {\n\t\tcontent: "\\f00d";\n\t}\n\t.fa-xmarks-lines:before {\n\t\tcontent: "\\e59a";\n\t}\n\t.fa-y:before {\n\t\tcontent: "\\59";\n\t}\n\t.fa-cny:before,\n\t.fa-jpy:before,\n\t.fa-rmb:before,\n\t.fa-yen-sign:before,\n\t.fa-yen:before {\n\t\tcontent: "\\f157";\n\t}\n\t.fa-yin-yang:before {\n\t\tcontent: "\\f6ad";\n\t}\n\t.fa-z:before {\n\t\tcontent: "\\5a";\n\t}\n\t.fa-sr-only,\n\t.fa-sr-only-focusable:not(:focus),\n\t.sr-only,\n\t.sr-only-focusable:not(:focus) {\n\t\tposition: absolute;\n\t\twidth: 1px;\n\t\theight: 1px;\n\t\tpadding: 0;\n\t\tmargin: -1px;\n\t\toverflow: hidden;\n\t\tclip: rect(0, 0, 0, 0);\n\t\twhite-space: nowrap;\n\t\tborder-width: 0;\n\t}\n\t:host,\n\t:root {\n\t\t--fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n\t}\n\t@font-face {\n\t\tfont-family: "Font Awesome 6 Brands";\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\tfont-display: block;\n\t\tsrc: url(../webfonts/fa-brands-400.woff2) format("woff2"),\n\t\t\turl(../webfonts/fa-brands-400.ttf) format("truetype");\n\t}\n\t.fa-brands,\n\t.fab {\n\t\tfont-family: "Font Awesome 6 Brands";\n\t\tfont-weight: 400;\n\t}\n\t.fa-42-group:before,\n\t.fa-innosoft:before {\n\t\tcontent: "\\e080";\n\t}\n\t.fa-500px:before {\n\t\tcontent: "\\f26e";\n\t}\n\t.fa-accessible-icon:before {\n\t\tcontent: "\\f368";\n\t}\n\t.fa-accusoft:before {\n\t\tcontent: "\\f369";\n\t}\n\t.fa-adn:before {\n\t\tcontent: "\\f170";\n\t}\n\t.fa-adversal:before {\n\t\tcontent: "\\f36a";\n\t}\n\t.fa-affiliatetheme:before {\n\t\tcontent: "\\f36b";\n\t}\n\t.fa-airbnb:before {\n\t\tcontent: "\\f834";\n\t}\n\t.fa-algolia:before {\n\t\tcontent: "\\f36c";\n\t}\n\t.fa-alipay:before {\n\t\tcontent: "\\f642";\n\t}\n\t.fa-amazon:before {\n\t\tcontent: "\\f270";\n\t}\n\t.fa-amazon-pay:before {\n\t\tcontent: "\\f42c";\n\t}\n\t.fa-amilia:before {\n\t\tcontent: "\\f36d";\n\t}\n\t.fa-android:before {\n\t\tcontent: "\\f17b";\n\t}\n\t.fa-angellist:before {\n\t\tcontent: "\\f209";\n\t}\n\t.fa-angrycreative:before {\n\t\tcontent: "\\f36e";\n\t}\n\t.fa-angular:before {\n\t\tcontent: "\\f420";\n\t}\n\t.fa-app-store:before {\n\t\tcontent: "\\f36f";\n\t}\n\t.fa-app-store-ios:before {\n\t\tcontent: "\\f370";\n\t}\n\t.fa-apper:before {\n\t\tcontent: "\\f371";\n\t}\n\t.fa-apple:before {\n\t\tcontent: "\\f179";\n\t}\n\t.fa-apple-pay:before {\n\t\tcontent: "\\f415";\n\t}\n\t.fa-artstation:before {\n\t\tcontent: "\\f77a";\n\t}\n\t.fa-asymmetrik:before {\n\t\tcontent: "\\f372";\n\t}\n\t.fa-atlassian:before {\n\t\tcontent: "\\f77b";\n\t}\n\t.fa-audible:before {\n\t\tcontent: "\\f373";\n\t}\n\t.fa-autoprefixer:before {\n\t\tcontent: "\\f41c";\n\t}\n\t.fa-avianex:before {\n\t\tcontent: "\\f374";\n\t}\n\t.fa-aviato:before {\n\t\tcontent: "\\f421";\n\t}\n\t.fa-aws:before {\n\t\tcontent: "\\f375";\n\t}\n\t.fa-bandcamp:before {\n\t\tcontent: "\\f2d5";\n\t}\n\t.fa-battle-net:before {\n\t\tcontent: "\\f835";\n\t}\n\t.fa-behance:before {\n\t\tcontent: "\\f1b4";\n\t}\n\t.fa-behance-square:before {\n\t\tcontent: "\\f1b5";\n\t}\n\t.fa-bilibili:before {\n\t\tcontent: "\\e3d9";\n\t}\n\t.fa-bimobject:before {\n\t\tcontent: "\\f378";\n\t}\n\t.fa-bitbucket:before {\n\t\tcontent: "\\f171";\n\t}\n\t.fa-bitcoin:before {\n\t\tcontent: "\\f379";\n\t}\n\t.fa-bity:before {\n\t\tcontent: "\\f37a";\n\t}\n\t.fa-black-tie:before {\n\t\tcontent: "\\f27e";\n\t}\n\t.fa-blackberry:before {\n\t\tcontent: "\\f37b";\n\t}\n\t.fa-blogger:before {\n\t\tcontent: "\\f37c";\n\t}\n\t.fa-blogger-b:before {\n\t\tcontent: "\\f37d";\n\t}\n\t.fa-bluetooth:before {\n\t\tcontent: "\\f293";\n\t}\n\t.fa-bluetooth-b:before {\n\t\tcontent: "\\f294";\n\t}\n\t.fa-bootstrap:before {\n\t\tcontent: "\\f836";\n\t}\n\t.fa-bots:before {\n\t\tcontent: "\\e340";\n\t}\n\t.fa-btc:before {\n\t\tcontent: "\\f15a";\n\t}\n\t.fa-buffer:before {\n\t\tcontent: "\\f837";\n\t}\n\t.fa-buromobelexperte:before {\n\t\tcontent: "\\f37f";\n\t}\n\t.fa-buy-n-large:before {\n\t\tcontent: "\\f8a6";\n\t}\n\t.fa-buysellads:before {\n\t\tcontent: "\\f20d";\n\t}\n\t.fa-canadian-maple-leaf:before {\n\t\tcontent: "\\f785";\n\t}\n\t.fa-cc-amazon-pay:before {\n\t\tcontent: "\\f42d";\n\t}\n\t.fa-cc-amex:before {\n\t\tcontent: "\\f1f3";\n\t}\n\t.fa-cc-apple-pay:before {\n\t\tcontent: "\\f416";\n\t}\n\t.fa-cc-diners-club:before {\n\t\tcontent: "\\f24c";\n\t}\n\t.fa-cc-discover:before {\n\t\tcontent: "\\f1f2";\n\t}\n\t.fa-cc-jcb:before {\n\t\tcontent: "\\f24b";\n\t}\n\t.fa-cc-mastercard:before {\n\t\tcontent: "\\f1f1";\n\t}\n\t.fa-cc-paypal:before {\n\t\tcontent: "\\f1f4";\n\t}\n\t.fa-cc-stripe:before {\n\t\tcontent: "\\f1f5";\n\t}\n\t.fa-cc-visa:before {\n\t\tcontent: "\\f1f0";\n\t}\n\t.fa-centercode:before {\n\t\tcontent: "\\f380";\n\t}\n\t.fa-centos:before {\n\t\tcontent: "\\f789";\n\t}\n\t.fa-chrome:before {\n\t\tcontent: "\\f268";\n\t}\n\t.fa-chromecast:before {\n\t\tcontent: "\\f838";\n\t}\n\t.fa-cloudflare:before {\n\t\tcontent: "\\e07d";\n\t}\n\t.fa-cloudscale:before {\n\t\tcontent: "\\f383";\n\t}\n\t.fa-cloudsmith:before {\n\t\tcontent: "\\f384";\n\t}\n\t.fa-cloudversify:before {\n\t\tcontent: "\\f385";\n\t}\n\t.fa-cmplid:before {\n\t\tcontent: "\\e360";\n\t}\n\t.fa-codepen:before {\n\t\tcontent: "\\f1cb";\n\t}\n\t.fa-codiepie:before {\n\t\tcontent: "\\f284";\n\t}\n\t.fa-confluence:before {\n\t\tcontent: "\\f78d";\n\t}\n\t.fa-connectdevelop:before {\n\t\tcontent: "\\f20e";\n\t}\n\t.fa-contao:before {\n\t\tcontent: "\\f26d";\n\t}\n\t.fa-cotton-bureau:before {\n\t\tcontent: "\\f89e";\n\t}\n\t.fa-cpanel:before {\n\t\tcontent: "\\f388";\n\t}\n\t.fa-creative-commons:before {\n\t\tcontent: "\\f25e";\n\t}\n\t.fa-creative-commons-by:before {\n\t\tcontent: "\\f4e7";\n\t}\n\t.fa-creative-commons-nc:before {\n\t\tcontent: "\\f4e8";\n\t}\n\t.fa-creative-commons-nc-eu:before {\n\t\tcontent: "\\f4e9";\n\t}\n\t.fa-creative-commons-nc-jp:before {\n\t\tcontent: "\\f4ea";\n\t}\n\t.fa-creative-commons-nd:before {\n\t\tcontent: "\\f4eb";\n\t}\n\t.fa-creative-commons-pd:before {\n\t\tcontent: "\\f4ec";\n\t}\n\t.fa-creative-commons-pd-alt:before {\n\t\tcontent: "\\f4ed";\n\t}\n\t.fa-creative-commons-remix:before {\n\t\tcontent: "\\f4ee";\n\t}\n\t.fa-creative-commons-sa:before {\n\t\tcontent: "\\f4ef";\n\t}\n\t.fa-creative-commons-sampling:before {\n\t\tcontent: "\\f4f0";\n\t}\n\t.fa-creative-commons-sampling-plus:before {\n\t\tcontent: "\\f4f1";\n\t}\n\t.fa-creative-commons-share:before {\n\t\tcontent: "\\f4f2";\n\t}\n\t.fa-creative-commons-zero:before {\n\t\tcontent: "\\f4f3";\n\t}\n\t.fa-critical-role:before {\n\t\tcontent: "\\f6c9";\n\t}\n\t.fa-css3:before {\n\t\tcontent: "\\f13c";\n\t}\n\t.fa-css3-alt:before {\n\t\tcontent: "\\f38b";\n\t}\n\t.fa-cuttlefish:before {\n\t\tcontent: "\\f38c";\n\t}\n\t.fa-d-and-d:before {\n\t\tcontent: "\\f38d";\n\t}\n\t.fa-d-and-d-beyond:before {\n\t\tcontent: "\\f6ca";\n\t}\n\t.fa-dailymotion:before {\n\t\tcontent: "\\e052";\n\t}\n\t.fa-dashcube:before {\n\t\tcontent: "\\f210";\n\t}\n\t.fa-deezer:before {\n\t\tcontent: "\\e077";\n\t}\n\t.fa-delicious:before {\n\t\tcontent: "\\f1a5";\n\t}\n\t.fa-deploydog:before {\n\t\tcontent: "\\f38e";\n\t}\n\t.fa-deskpro:before {\n\t\tcontent: "\\f38f";\n\t}\n\t.fa-dev:before {\n\t\tcontent: "\\f6cc";\n\t}\n\t.fa-deviantart:before {\n\t\tcontent: "\\f1bd";\n\t}\n\t.fa-dhl:before {\n\t\tcontent: "\\f790";\n\t}\n\t.fa-diaspora:before {\n\t\tcontent: "\\f791";\n\t}\n\t.fa-digg:before {\n\t\tcontent: "\\f1a6";\n\t}\n\t.fa-digital-ocean:before {\n\t\tcontent: "\\f391";\n\t}\n\t.fa-discord:before {\n\t\tcontent: "\\f392";\n\t}\n\t.fa-discourse:before {\n\t\tcontent: "\\f393";\n\t}\n\t.fa-dochub:before {\n\t\tcontent: "\\f394";\n\t}\n\t.fa-docker:before {\n\t\tcontent: "\\f395";\n\t}\n\t.fa-draft2digital:before {\n\t\tcontent: "\\f396";\n\t}\n\t.fa-dribbble:before {\n\t\tcontent: "\\f17d";\n\t}\n\t.fa-dribbble-square:before {\n\t\tcontent: "\\f397";\n\t}\n\t.fa-dropbox:before {\n\t\tcontent: "\\f16b";\n\t}\n\t.fa-drupal:before {\n\t\tcontent: "\\f1a9";\n\t}\n\t.fa-dyalog:before {\n\t\tcontent: "\\f399";\n\t}\n\t.fa-earlybirds:before {\n\t\tcontent: "\\f39a";\n\t}\n\t.fa-ebay:before {\n\t\tcontent: "\\f4f4";\n\t}\n\t.fa-edge:before {\n\t\tcontent: "\\f282";\n\t}\n\t.fa-edge-legacy:before {\n\t\tcontent: "\\e078";\n\t}\n\t.fa-elementor:before {\n\t\tcontent: "\\f430";\n\t}\n\t.fa-ello:before {\n\t\tcontent: "\\f5f1";\n\t}\n\t.fa-ember:before {\n\t\tcontent: "\\f423";\n\t}\n\t.fa-empire:before {\n\t\tcontent: "\\f1d1";\n\t}\n\t.fa-envira:before {\n\t\tcontent: "\\f299";\n\t}\n\t.fa-erlang:before {\n\t\tcontent: "\\f39d";\n\t}\n\t.fa-ethereum:before {\n\t\tcontent: "\\f42e";\n\t}\n\t.fa-etsy:before {\n\t\tcontent: "\\f2d7";\n\t}\n\t.fa-evernote:before {\n\t\tcontent: "\\f839";\n\t}\n\t.fa-expeditedssl:before {\n\t\tcontent: "\\f23e";\n\t}\n\t.fa-facebook:before {\n\t\tcontent: "\\f09a";\n\t}\n\t.fa-facebook-f:before {\n\t\tcontent: "\\f39e";\n\t}\n\t.fa-facebook-messenger:before {\n\t\tcontent: "\\f39f";\n\t}\n\t.fa-facebook-square:before {\n\t\tcontent: "\\f082";\n\t}\n\t.fa-fantasy-flight-games:before {\n\t\tcontent: "\\f6dc";\n\t}\n\t.fa-fedex:before {\n\t\tcontent: "\\f797";\n\t}\n\t.fa-fedora:before {\n\t\tcontent: "\\f798";\n\t}\n\t.fa-figma:before {\n\t\tcontent: "\\f799";\n\t}\n\t.fa-firefox:before {\n\t\tcontent: "\\f269";\n\t}\n\t.fa-firefox-browser:before {\n\t\tcontent: "\\e007";\n\t}\n\t.fa-first-order:before {\n\t\tcontent: "\\f2b0";\n\t}\n\t.fa-first-order-alt:before {\n\t\tcontent: "\\f50a";\n\t}\n\t.fa-firstdraft:before {\n\t\tcontent: "\\f3a1";\n\t}\n\t.fa-flickr:before {\n\t\tcontent: "\\f16e";\n\t}\n\t.fa-flipboard:before {\n\t\tcontent: "\\f44d";\n\t}\n\t.fa-fly:before {\n\t\tcontent: "\\f417";\n\t}\n\t.fa-font-awesome-flag:before,\n\t.fa-font-awesome-logo-full:before,\n\t.fa-font-awesome:before {\n\t\tcontent: "\\f2b4";\n\t}\n\t.fa-fonticons:before {\n\t\tcontent: "\\f280";\n\t}\n\t.fa-fonticons-fi:before {\n\t\tcontent: "\\f3a2";\n\t}\n\t.fa-fort-awesome:before {\n\t\tcontent: "\\f286";\n\t}\n\t.fa-fort-awesome-alt:before {\n\t\tcontent: "\\f3a3";\n\t}\n\t.fa-forumbee:before {\n\t\tcontent: "\\f211";\n\t}\n\t.fa-foursquare:before {\n\t\tcontent: "\\f180";\n\t}\n\t.fa-free-code-camp:before {\n\t\tcontent: "\\f2c5";\n\t}\n\t.fa-freebsd:before {\n\t\tcontent: "\\f3a4";\n\t}\n\t.fa-fulcrum:before {\n\t\tcontent: "\\f50b";\n\t}\n\t.fa-galactic-republic:before {\n\t\tcontent: "\\f50c";\n\t}\n\t.fa-galactic-senate:before {\n\t\tcontent: "\\f50d";\n\t}\n\t.fa-get-pocket:before {\n\t\tcontent: "\\f265";\n\t}\n\t.fa-gg:before {\n\t\tcontent: "\\f260";\n\t}\n\t.fa-gg-circle:before {\n\t\tcontent: "\\f261";\n\t}\n\t.fa-git:before {\n\t\tcontent: "\\f1d3";\n\t}\n\t.fa-git-alt:before {\n\t\tcontent: "\\f841";\n\t}\n\t.fa-git-square:before {\n\t\tcontent: "\\f1d2";\n\t}\n\t.fa-github:before {\n\t\tcontent: "\\f09b";\n\t}\n\t.fa-github-alt:before {\n\t\tcontent: "\\f113";\n\t}\n\t.fa-github-square:before {\n\t\tcontent: "\\f092";\n\t}\n\t.fa-gitkraken:before {\n\t\tcontent: "\\f3a6";\n\t}\n\t.fa-gitlab:before {\n\t\tcontent: "\\f296";\n\t}\n\t.fa-gitter:before {\n\t\tcontent: "\\f426";\n\t}\n\t.fa-glide:before {\n\t\tcontent: "\\f2a5";\n\t}\n\t.fa-glide-g:before {\n\t\tcontent: "\\f2a6";\n\t}\n\t.fa-gofore:before {\n\t\tcontent: "\\f3a7";\n\t}\n\t.fa-golang:before {\n\t\tcontent: "\\e40f";\n\t}\n\t.fa-goodreads:before {\n\t\tcontent: "\\f3a8";\n\t}\n\t.fa-goodreads-g:before {\n\t\tcontent: "\\f3a9";\n\t}\n\t.fa-google:before {\n\t\tcontent: "\\f1a0";\n\t}\n\t.fa-google-drive:before {\n\t\tcontent: "\\f3aa";\n\t}\n\t.fa-google-pay:before {\n\t\tcontent: "\\e079";\n\t}\n\t.fa-google-play:before {\n\t\tcontent: "\\f3ab";\n\t}\n\t.fa-google-plus:before {\n\t\tcontent: "\\f2b3";\n\t}\n\t.fa-google-plus-g:before {\n\t\tcontent: "\\f0d5";\n\t}\n\t.fa-google-plus-square:before {\n\t\tcontent: "\\f0d4";\n\t}\n\t.fa-google-wallet:before {\n\t\tcontent: "\\f1ee";\n\t}\n\t.fa-gratipay:before {\n\t\tcontent: "\\f184";\n\t}\n\t.fa-grav:before {\n\t\tcontent: "\\f2d6";\n\t}\n\t.fa-gripfire:before {\n\t\tcontent: "\\f3ac";\n\t}\n\t.fa-grunt:before {\n\t\tcontent: "\\f3ad";\n\t}\n\t.fa-guilded:before {\n\t\tcontent: "\\e07e";\n\t}\n\t.fa-gulp:before {\n\t\tcontent: "\\f3ae";\n\t}\n\t.fa-hacker-news:before {\n\t\tcontent: "\\f1d4";\n\t}\n\t.fa-hacker-news-square:before {\n\t\tcontent: "\\f3af";\n\t}\n\t.fa-hackerrank:before {\n\t\tcontent: "\\f5f7";\n\t}\n\t.fa-hashnode:before {\n\t\tcontent: "\\e499";\n\t}\n\t.fa-hips:before {\n\t\tcontent: "\\f452";\n\t}\n\t.fa-hire-a-helper:before {\n\t\tcontent: "\\f3b0";\n\t}\n\t.fa-hive:before {\n\t\tcontent: "\\e07f";\n\t}\n\t.fa-hooli:before {\n\t\tcontent: "\\f427";\n\t}\n\t.fa-hornbill:before {\n\t\tcontent: "\\f592";\n\t}\n\t.fa-hotjar:before {\n\t\tcontent: "\\f3b1";\n\t}\n\t.fa-houzz:before {\n\t\tcontent: "\\f27c";\n\t}\n\t.fa-html5:before {\n\t\tcontent: "\\f13b";\n\t}\n\t.fa-hubspot:before {\n\t\tcontent: "\\f3b2";\n\t}\n\t.fa-ideal:before {\n\t\tcontent: "\\e013";\n\t}\n\t.fa-imdb:before {\n\t\tcontent: "\\f2d8";\n\t}\n\t.fa-instagram:before {\n\t\tcontent: "\\f16d";\n\t}\n\t.fa-instagram-square:before {\n\t\tcontent: "\\e055";\n\t}\n\t.fa-instalod:before {\n\t\tcontent: "\\e081";\n\t}\n\t.fa-intercom:before {\n\t\tcontent: "\\f7af";\n\t}\n\t.fa-internet-explorer:before {\n\t\tcontent: "\\f26b";\n\t}\n\t.fa-invision:before {\n\t\tcontent: "\\f7b0";\n\t}\n\t.fa-ioxhost:before {\n\t\tcontent: "\\f208";\n\t}\n\t.fa-itch-io:before {\n\t\tcontent: "\\f83a";\n\t}\n\t.fa-itunes:before {\n\t\tcontent: "\\f3b4";\n\t}\n\t.fa-itunes-note:before {\n\t\tcontent: "\\f3b5";\n\t}\n\t.fa-java:before {\n\t\tcontent: "\\f4e4";\n\t}\n\t.fa-jedi-order:before {\n\t\tcontent: "\\f50e";\n\t}\n\t.fa-jenkins:before {\n\t\tcontent: "\\f3b6";\n\t}\n\t.fa-jira:before {\n\t\tcontent: "\\f7b1";\n\t}\n\t.fa-joget:before {\n\t\tcontent: "\\f3b7";\n\t}\n\t.fa-joomla:before {\n\t\tcontent: "\\f1aa";\n\t}\n\t.fa-js:before {\n\t\tcontent: "\\f3b8";\n\t}\n\t.fa-js-square:before {\n\t\tcontent: "\\f3b9";\n\t}\n\t.fa-jsfiddle:before {\n\t\tcontent: "\\f1cc";\n\t}\n\t.fa-kaggle:before {\n\t\tcontent: "\\f5fa";\n\t}\n\t.fa-keybase:before {\n\t\tcontent: "\\f4f5";\n\t}\n\t.fa-keycdn:before {\n\t\tcontent: "\\f3ba";\n\t}\n\t.fa-kickstarter:before {\n\t\tcontent: "\\f3bb";\n\t}\n\t.fa-kickstarter-k:before {\n\t\tcontent: "\\f3bc";\n\t}\n\t.fa-korvue:before {\n\t\tcontent: "\\f42f";\n\t}\n\t.fa-laravel:before {\n\t\tcontent: "\\f3bd";\n\t}\n\t.fa-lastfm:before {\n\t\tcontent: "\\f202";\n\t}\n\t.fa-lastfm-square:before {\n\t\tcontent: "\\f203";\n\t}\n\t.fa-leanpub:before {\n\t\tcontent: "\\f212";\n\t}\n\t.fa-less:before {\n\t\tcontent: "\\f41d";\n\t}\n\t.fa-line:before {\n\t\tcontent: "\\f3c0";\n\t}\n\t.fa-linkedin:before {\n\t\tcontent: "\\f08c";\n\t}\n\t.fa-linkedin-in:before {\n\t\tcontent: "\\f0e1";\n\t}\n\t.fa-linode:before {\n\t\tcontent: "\\f2b8";\n\t}\n\t.fa-linux:before {\n\t\tcontent: "\\f17c";\n\t}\n\t.fa-lyft:before {\n\t\tcontent: "\\f3c3";\n\t}\n\t.fa-magento:before {\n\t\tcontent: "\\f3c4";\n\t}\n\t.fa-mailchimp:before {\n\t\tcontent: "\\f59e";\n\t}\n\t.fa-mandalorian:before {\n\t\tcontent: "\\f50f";\n\t}\n\t.fa-markdown:before {\n\t\tcontent: "\\f60f";\n\t}\n\t.fa-mastodon:before {\n\t\tcontent: "\\f4f6";\n\t}\n\t.fa-maxcdn:before {\n\t\tcontent: "\\f136";\n\t}\n\t.fa-mdb:before {\n\t\tcontent: "\\f8ca";\n\t}\n\t.fa-medapps:before {\n\t\tcontent: "\\f3c6";\n\t}\n\t.fa-medium-m:before,\n\t.fa-medium:before {\n\t\tcontent: "\\f23a";\n\t}\n\t.fa-medrt:before {\n\t\tcontent: "\\f3c8";\n\t}\n\t.fa-meetup:before {\n\t\tcontent: "\\f2e0";\n\t}\n\t.fa-megaport:before {\n\t\tcontent: "\\f5a3";\n\t}\n\t.fa-mendeley:before {\n\t\tcontent: "\\f7b3";\n\t}\n\t.fa-microblog:before {\n\t\tcontent: "\\e01a";\n\t}\n\t.fa-microsoft:before {\n\t\tcontent: "\\f3ca";\n\t}\n\t.fa-mix:before {\n\t\tcontent: "\\f3cb";\n\t}\n\t.fa-mixcloud:before {\n\t\tcontent: "\\f289";\n\t}\n\t.fa-mixer:before {\n\t\tcontent: "\\e056";\n\t}\n\t.fa-mizuni:before {\n\t\tcontent: "\\f3cc";\n\t}\n\t.fa-modx:before {\n\t\tcontent: "\\f285";\n\t}\n\t.fa-monero:before {\n\t\tcontent: "\\f3d0";\n\t}\n\t.fa-napster:before {\n\t\tcontent: "\\f3d2";\n\t}\n\t.fa-neos:before {\n\t\tcontent: "\\f612";\n\t}\n\t.fa-nfc-directional:before {\n\t\tcontent: "\\e530";\n\t}\n\t.fa-nfc-symbol:before {\n\t\tcontent: "\\e531";\n\t}\n\t.fa-nimblr:before {\n\t\tcontent: "\\f5a8";\n\t}\n\t.fa-node:before {\n\t\tcontent: "\\f419";\n\t}\n\t.fa-node-js:before {\n\t\tcontent: "\\f3d3";\n\t}\n\t.fa-npm:before {\n\t\tcontent: "\\f3d4";\n\t}\n\t.fa-ns8:before {\n\t\tcontent: "\\f3d5";\n\t}\n\t.fa-nutritionix:before {\n\t\tcontent: "\\f3d6";\n\t}\n\t.fa-octopus-deploy:before {\n\t\tcontent: "\\e082";\n\t}\n\t.fa-odnoklassniki:before {\n\t\tcontent: "\\f263";\n\t}\n\t.fa-odnoklassniki-square:before {\n\t\tcontent: "\\f264";\n\t}\n\t.fa-old-republic:before {\n\t\tcontent: "\\f510";\n\t}\n\t.fa-opencart:before {\n\t\tcontent: "\\f23d";\n\t}\n\t.fa-openid:before {\n\t\tcontent: "\\f19b";\n\t}\n\t.fa-opera:before {\n\t\tcontent: "\\f26a";\n\t}\n\t.fa-optin-monster:before {\n\t\tcontent: "\\f23c";\n\t}\n\t.fa-orcid:before {\n\t\tcontent: "\\f8d2";\n\t}\n\t.fa-osi:before {\n\t\tcontent: "\\f41a";\n\t}\n\t.fa-padlet:before {\n\t\tcontent: "\\e4a0";\n\t}\n\t.fa-page4:before {\n\t\tcontent: "\\f3d7";\n\t}\n\t.fa-pagelines:before {\n\t\tcontent: "\\f18c";\n\t}\n\t.fa-palfed:before {\n\t\tcontent: "\\f3d8";\n\t}\n\t.fa-patreon:before {\n\t\tcontent: "\\f3d9";\n\t}\n\t.fa-paypal:before {\n\t\tcontent: "\\f1ed";\n\t}\n\t.fa-perbyte:before {\n\t\tcontent: "\\e083";\n\t}\n\t.fa-periscope:before {\n\t\tcontent: "\\f3da";\n\t}\n\t.fa-phabricator:before {\n\t\tcontent: "\\f3db";\n\t}\n\t.fa-phoenix-framework:before {\n\t\tcontent: "\\f3dc";\n\t}\n\t.fa-phoenix-squadron:before {\n\t\tcontent: "\\f511";\n\t}\n\t.fa-php:before {\n\t\tcontent: "\\f457";\n\t}\n\t.fa-pied-piper:before {\n\t\tcontent: "\\f2ae";\n\t}\n\t.fa-pied-piper-alt:before {\n\t\tcontent: "\\f1a8";\n\t}\n\t.fa-pied-piper-hat:before {\n\t\tcontent: "\\f4e5";\n\t}\n\t.fa-pied-piper-pp:before {\n\t\tcontent: "\\f1a7";\n\t}\n\t.fa-pied-piper-square:before {\n\t\tcontent: "\\e01e";\n\t}\n\t.fa-pinterest:before {\n\t\tcontent: "\\f0d2";\n\t}\n\t.fa-pinterest-p:before {\n\t\tcontent: "\\f231";\n\t}\n\t.fa-pinterest-square:before {\n\t\tcontent: "\\f0d3";\n\t}\n\t.fa-pix:before {\n\t\tcontent: "\\e43a";\n\t}\n\t.fa-playstation:before {\n\t\tcontent: "\\f3df";\n\t}\n\t.fa-product-hunt:before {\n\t\tcontent: "\\f288";\n\t}\n\t.fa-pushed:before {\n\t\tcontent: "\\f3e1";\n\t}\n\t.fa-python:before {\n\t\tcontent: "\\f3e2";\n\t}\n\t.fa-qq:before {\n\t\tcontent: "\\f1d6";\n\t}\n\t.fa-quinscape:before {\n\t\tcontent: "\\f459";\n\t}\n\t.fa-quora:before {\n\t\tcontent: "\\f2c4";\n\t}\n\t.fa-r-project:before {\n\t\tcontent: "\\f4f7";\n\t}\n\t.fa-raspberry-pi:before {\n\t\tcontent: "\\f7bb";\n\t}\n\t.fa-ravelry:before {\n\t\tcontent: "\\f2d9";\n\t}\n\t.fa-react:before {\n\t\tcontent: "\\f41b";\n\t}\n\t.fa-reacteurope:before {\n\t\tcontent: "\\f75d";\n\t}\n\t.fa-readme:before {\n\t\tcontent: "\\f4d5";\n\t}\n\t.fa-rebel:before {\n\t\tcontent: "\\f1d0";\n\t}\n\t.fa-red-river:before {\n\t\tcontent: "\\f3e3";\n\t}\n\t.fa-reddit:before {\n\t\tcontent: "\\f1a1";\n\t}\n\t.fa-reddit-alien:before {\n\t\tcontent: "\\f281";\n\t}\n\t.fa-reddit-square:before {\n\t\tcontent: "\\f1a2";\n\t}\n\t.fa-redhat:before {\n\t\tcontent: "\\f7bc";\n\t}\n\t.fa-renren:before {\n\t\tcontent: "\\f18b";\n\t}\n\t.fa-replyd:before {\n\t\tcontent: "\\f3e6";\n\t}\n\t.fa-researchgate:before {\n\t\tcontent: "\\f4f8";\n\t}\n\t.fa-resolving:before {\n\t\tcontent: "\\f3e7";\n\t}\n\t.fa-rev:before {\n\t\tcontent: "\\f5b2";\n\t}\n\t.fa-rocketchat:before {\n\t\tcontent: "\\f3e8";\n\t}\n\t.fa-rockrms:before {\n\t\tcontent: "\\f3e9";\n\t}\n\t.fa-rust:before {\n\t\tcontent: "\\e07a";\n\t}\n\t.fa-safari:before {\n\t\tcontent: "\\f267";\n\t}\n\t.fa-salesforce:before {\n\t\tcontent: "\\f83b";\n\t}\n\t.fa-sass:before {\n\t\tcontent: "\\f41e";\n\t}\n\t.fa-schlix:before {\n\t\tcontent: "\\f3ea";\n\t}\n\t.fa-screenpal:before {\n\t\tcontent: "\\e570";\n\t}\n\t.fa-scribd:before {\n\t\tcontent: "\\f28a";\n\t}\n\t.fa-searchengin:before {\n\t\tcontent: "\\f3eb";\n\t}\n\t.fa-sellcast:before {\n\t\tcontent: "\\f2da";\n\t}\n\t.fa-sellsy:before {\n\t\tcontent: "\\f213";\n\t}\n\t.fa-servicestack:before {\n\t\tcontent: "\\f3ec";\n\t}\n\t.fa-shirtsinbulk:before {\n\t\tcontent: "\\f214";\n\t}\n\t.fa-shopify:before {\n\t\tcontent: "\\e057";\n\t}\n\t.fa-shopware:before {\n\t\tcontent: "\\f5b5";\n\t}\n\t.fa-simplybuilt:before {\n\t\tcontent: "\\f215";\n\t}\n\t.fa-sistrix:before {\n\t\tcontent: "\\f3ee";\n\t}\n\t.fa-sith:before {\n\t\tcontent: "\\f512";\n\t}\n\t.fa-sitrox:before {\n\t\tcontent: "\\e44a";\n\t}\n\t.fa-sketch:before {\n\t\tcontent: "\\f7c6";\n\t}\n\t.fa-skyatlas:before {\n\t\tcontent: "\\f216";\n\t}\n\t.fa-skype:before {\n\t\tcontent: "\\f17e";\n\t}\n\t.fa-slack-hash:before,\n\t.fa-slack:before {\n\t\tcontent: "\\f198";\n\t}\n\t.fa-slideshare:before {\n\t\tcontent: "\\f1e7";\n\t}\n\t.fa-snapchat-ghost:before,\n\t.fa-snapchat:before {\n\t\tcontent: "\\f2ab";\n\t}\n\t.fa-snapchat-square:before {\n\t\tcontent: "\\f2ad";\n\t}\n\t.fa-soundcloud:before {\n\t\tcontent: "\\f1be";\n\t}\n\t.fa-sourcetree:before {\n\t\tcontent: "\\f7d3";\n\t}\n\t.fa-speakap:before {\n\t\tcontent: "\\f3f3";\n\t}\n\t.fa-speaker-deck:before {\n\t\tcontent: "\\f83c";\n\t}\n\t.fa-spotify:before {\n\t\tcontent: "\\f1bc";\n\t}\n\t.fa-square-font-awesome:before {\n\t\tcontent: "\\f425";\n\t}\n\t.fa-font-awesome-alt:before,\n\t.fa-square-font-awesome-stroke:before {\n\t\tcontent: "\\f35c";\n\t}\n\t.fa-squarespace:before {\n\t\tcontent: "\\f5be";\n\t}\n\t.fa-stack-exchange:before {\n\t\tcontent: "\\f18d";\n\t}\n\t.fa-stack-overflow:before {\n\t\tcontent: "\\f16c";\n\t}\n\t.fa-stackpath:before {\n\t\tcontent: "\\f842";\n\t}\n\t.fa-staylinked:before {\n\t\tcontent: "\\f3f5";\n\t}\n\t.fa-steam:before {\n\t\tcontent: "\\f1b6";\n\t}\n\t.fa-steam-square:before {\n\t\tcontent: "\\f1b7";\n\t}\n\t.fa-steam-symbol:before {\n\t\tcontent: "\\f3f6";\n\t}\n\t.fa-sticker-mule:before {\n\t\tcontent: "\\f3f7";\n\t}\n\t.fa-strava:before {\n\t\tcontent: "\\f428";\n\t}\n\t.fa-stripe:before {\n\t\tcontent: "\\f429";\n\t}\n\t.fa-stripe-s:before {\n\t\tcontent: "\\f42a";\n\t}\n\t.fa-studiovinari:before {\n\t\tcontent: "\\f3f8";\n\t}\n\t.fa-stumbleupon:before {\n\t\tcontent: "\\f1a4";\n\t}\n\t.fa-stumbleupon-circle:before {\n\t\tcontent: "\\f1a3";\n\t}\n\t.fa-superpowers:before {\n\t\tcontent: "\\f2dd";\n\t}\n\t.fa-supple:before {\n\t\tcontent: "\\f3f9";\n\t}\n\t.fa-suse:before {\n\t\tcontent: "\\f7d6";\n\t}\n\t.fa-swift:before {\n\t\tcontent: "\\f8e1";\n\t}\n\t.fa-symfony:before {\n\t\tcontent: "\\f83d";\n\t}\n\t.fa-teamspeak:before {\n\t\tcontent: "\\f4f9";\n\t}\n\t.fa-telegram-plane:before,\n\t.fa-telegram:before {\n\t\tcontent: "\\f2c6";\n\t}\n\t.fa-tencent-weibo:before {\n\t\tcontent: "\\f1d5";\n\t}\n\t.fa-the-red-yeti:before {\n\t\tcontent: "\\f69d";\n\t}\n\t.fa-themeco:before {\n\t\tcontent: "\\f5c6";\n\t}\n\t.fa-themeisle:before {\n\t\tcontent: "\\f2b2";\n\t}\n\t.fa-think-peaks:before {\n\t\tcontent: "\\f731";\n\t}\n\t.fa-tiktok:before {\n\t\tcontent: "\\e07b";\n\t}\n\t.fa-trade-federation:before {\n\t\tcontent: "\\f513";\n\t}\n\t.fa-trello:before {\n\t\tcontent: "\\f181";\n\t}\n\t.fa-tumblr:before {\n\t\tcontent: "\\f173";\n\t}\n\t.fa-tumblr-square:before {\n\t\tcontent: "\\f174";\n\t}\n\t.fa-twitch:before {\n\t\tcontent: "\\f1e8";\n\t}\n\t.fa-twitter:before {\n\t\tcontent: "\\f099";\n\t}\n\t.fa-twitter-square:before {\n\t\tcontent: "\\f081";\n\t}\n\t.fa-typo3:before {\n\t\tcontent: "\\f42b";\n\t}\n\t.fa-uber:before {\n\t\tcontent: "\\f402";\n\t}\n\t.fa-ubuntu:before {\n\t\tcontent: "\\f7df";\n\t}\n\t.fa-uikit:before {\n\t\tcontent: "\\f403";\n\t}\n\t.fa-umbraco:before {\n\t\tcontent: "\\f8e8";\n\t}\n\t.fa-uncharted:before {\n\t\tcontent: "\\e084";\n\t}\n\t.fa-uniregistry:before {\n\t\tcontent: "\\f404";\n\t}\n\t.fa-unity:before {\n\t\tcontent: "\\e049";\n\t}\n\t.fa-unsplash:before {\n\t\tcontent: "\\e07c";\n\t}\n\t.fa-untappd:before {\n\t\tcontent: "\\f405";\n\t}\n\t.fa-ups:before {\n\t\tcontent: "\\f7e0";\n\t}\n\t.fa-usb:before {\n\t\tcontent: "\\f287";\n\t}\n\t.fa-usps:before {\n\t\tcontent: "\\f7e1";\n\t}\n\t.fa-ussunnah:before {\n\t\tcontent: "\\f407";\n\t}\n\t.fa-vaadin:before {\n\t\tcontent: "\\f408";\n\t}\n\t.fa-viacoin:before {\n\t\tcontent: "\\f237";\n\t}\n\t.fa-viadeo:before {\n\t\tcontent: "\\f2a9";\n\t}\n\t.fa-viadeo-square:before {\n\t\tcontent: "\\f2aa";\n\t}\n\t.fa-viber:before {\n\t\tcontent: "\\f409";\n\t}\n\t.fa-vimeo:before {\n\t\tcontent: "\\f40a";\n\t}\n\t.fa-vimeo-square:before {\n\t\tcontent: "\\f194";\n\t}\n\t.fa-vimeo-v:before {\n\t\tcontent: "\\f27d";\n\t}\n\t.fa-vine:before {\n\t\tcontent: "\\f1ca";\n\t}\n\t.fa-vk:before {\n\t\tcontent: "\\f189";\n\t}\n\t.fa-vnv:before {\n\t\tcontent: "\\f40b";\n\t}\n\t.fa-vuejs:before {\n\t\tcontent: "\\f41f";\n\t}\n\t.fa-watchman-monitoring:before {\n\t\tcontent: "\\e087";\n\t}\n\t.fa-waze:before {\n\t\tcontent: "\\f83f";\n\t}\n\t.fa-weebly:before {\n\t\tcontent: "\\f5cc";\n\t}\n\t.fa-weibo:before {\n\t\tcontent: "\\f18a";\n\t}\n\t.fa-weixin:before {\n\t\tcontent: "\\f1d7";\n\t}\n\t.fa-whatsapp:before {\n\t\tcontent: "\\f232";\n\t}\n\t.fa-whatsapp-square:before {\n\t\tcontent: "\\f40c";\n\t}\n\t.fa-whmcs:before {\n\t\tcontent: "\\f40d";\n\t}\n\t.fa-wikipedia-w:before {\n\t\tcontent: "\\f266";\n\t}\n\t.fa-windows:before {\n\t\tcontent: "\\f17a";\n\t}\n\t.fa-wirsindhandwerk:before,\n\t.fa-wsh:before {\n\t\tcontent: "\\e2d0";\n\t}\n\t.fa-wix:before {\n\t\tcontent: "\\f5cf";\n\t}\n\t.fa-wizards-of-the-coast:before {\n\t\tcontent: "\\f730";\n\t}\n\t.fa-wodu:before {\n\t\tcontent: "\\e088";\n\t}\n\t.fa-wolf-pack-battalion:before {\n\t\tcontent: "\\f514";\n\t}\n\t.fa-wordpress:before {\n\t\tcontent: "\\f19a";\n\t}\n\t.fa-wordpress-simple:before {\n\t\tcontent: "\\f411";\n\t}\n\t.fa-wpbeginner:before {\n\t\tcontent: "\\f297";\n\t}\n\t.fa-wpexplorer:before {\n\t\tcontent: "\\f2de";\n\t}\n\t.fa-wpforms:before {\n\t\tcontent: "\\f298";\n\t}\n\t.fa-wpressr:before {\n\t\tcontent: "\\f3e4";\n\t}\n\t.fa-xbox:before {\n\t\tcontent: "\\f412";\n\t}\n\t.fa-xing:before {\n\t\tcontent: "\\f168";\n\t}\n\t.fa-xing-square:before {\n\t\tcontent: "\\f169";\n\t}\n\t.fa-y-combinator:before {\n\t\tcontent: "\\f23b";\n\t}\n\t.fa-yahoo:before {\n\t\tcontent: "\\f19e";\n\t}\n\t.fa-yammer:before {\n\t\tcontent: "\\f840";\n\t}\n\t.fa-yandex:before {\n\t\tcontent: "\\f413";\n\t}\n\t.fa-yandex-international:before {\n\t\tcontent: "\\f414";\n\t}\n\t.fa-yarn:before {\n\t\tcontent: "\\f7e3";\n\t}\n\t.fa-yelp:before {\n\t\tcontent: "\\f1e9";\n\t}\n\t.fa-yoast:before {\n\t\tcontent: "\\f2b1";\n\t}\n\t.fa-youtube:before {\n\t\tcontent: "\\f167";\n\t}\n\t.fa-youtube-square:before {\n\t\tcontent: "\\f431";\n\t}\n\t.fa-zhihu:before {\n\t\tcontent: "\\f63f";\n\t}\n\t:host,\n\t:root {\n\t\t--fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";\n\t}\n\t@font-face {\n\t\tfont-family: "Font Awesome 6 Free";\n\t\tfont-style: normal;\n\t\tfont-weight: 400;\n\t\tfont-display: block;\n\t\tsrc: url(../webfonts/fa-regular-400.woff2) format("woff2"),\n\t\t\turl(../webfonts/fa-regular-400.ttf) format("truetype");\n\t}\n\t.fa-regular,\n\t.far {\n\t\tfont-family: "Font Awesome 6 Free";\n\t\tfont-weight: 400;\n\t}\n\t:host,\n\t:root {\n\t\t--fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";\n\t}\n\t@font-face {\n\t\tfont-family: "Font Awesome 6 Free";\n\t\tfont-style: normal;\n\t\tfont-weight: 900;\n\t\tfont-display: block;\n\t\tsrc: url(../webfonts/fa-solid-900.woff2) format("woff2"),\n\t\t\turl(../webfonts/fa-solid-900.ttf) format("truetype");\n\t}\n\t.fa-solid,\n\t.fas {\n\t\tfont-family: "Font Awesome 6 Free";\n\t\tfont-weight: 900;\n\t}\n\t@font-face {\n\t\tfont-family: "Font Awesome 5 Brands";\n\t\tfont-display: block;\n\t\tfont-weight: 400;\n\t\tsrc: url(../webfonts/fa-brands-400.woff2) format("woff2"),\n\t\t\turl(../webfonts/fa-brands-400.ttf) format("truetype");\n\t}\n\t@font-face {\n\t\tfont-family: "Font Awesome 5 Free";\n\t\tfont-display: block;\n\t\tfont-weight: 900;\n\t\tsrc: url(../webfonts/fa-solid-900.woff2) format("woff2"),\n\t\t\turl(../webfonts/fa-solid-900.ttf) format("truetype");\n\t}\n\t@font-face {\n\t\tfont-family: "Font Awesome 5 Free";\n\t\tfont-display: block;\n\t\tfont-weight: 400;\n\t\tsrc: url(../webfonts/fa-regular-400.woff2) format("woff2"),\n\t\t\turl(../webfonts/fa-regular-400.ttf) format("truetype");\n\t}\n\t@font-face {\n\t\tfont-family: "FontAwesome";\n\t\tfont-display: block;\n\t\tsrc: url(../webfonts/fa-solid-900.woff2) format("woff2"),\n\t\t\turl(../webfonts/fa-solid-900.ttf) format("truetype");\n\t}\n\t@font-face {\n\t\tfont-family: "FontAwesome";\n\t\tfont-display: block;\n\t\tsrc: url(../webfonts/fa-brands-400.woff2) format("woff2"),\n\t\t\turl(../webfonts/fa-brands-400.ttf) format("truetype");\n\t}\n\t@font-face {\n\t\tfont-family: "FontAwesome";\n\t\tfont-display: block;\n\t\tsrc: url(../webfonts/fa-regular-400.woff2) format("woff2"),\n\t\t\turl(../webfonts/fa-regular-400.ttf) format("truetype");\n\t\tunicode-range: u+f003, u+f006, u+f014, u+f016-f017, u+f01a-f01b, u+f01d,\n\t\t\tu+f022, u+f03e, u+f044, u+f046, u+f05c-f05d, u+f06e, u+f070, u+f087-f088,\n\t\t\tu+f08a, u+f094, u+f096-f097, u+f09d, u+f0a0, u+f0a2, u+f0a4-f0a7, u+f0c5,\n\t\t\tu+f0c7, u+f0e5-f0e6, u+f0eb, u+f0f6-f0f8, u+f10c, u+f114-f115, u+f118-f11a,\n\t\t\tu+f11c-f11d, u+f133, u+f147, u+f14e, u+f150-f152, u+f185-f186, u+f18e,\n\t\t\tu+f190-f192, u+f196, u+f1c1-f1c9, u+f1d9, u+f1db, u+f1e3, u+f1ea, u+f1f7,\n\t\t\tu+f1f9, u+f20a, u+f247-f248, u+f24a, u+f24d, u+f255-f25b, u+f25d,\n\t\t\tu+f271-f274, u+f278, u+f27b, u+f28c, u+f28e, u+f29c, u+f2b5, u+f2b7, u+f2ba,\n\t\t\tu+f2bc, u+f2be, u+f2c0-f2c1, u+f2c3, u+f2d0, u+f2d2, u+f2d4, u+f2dc;\n\t}\n\t@font-face {\n\t\tfont-family: "FontAwesome";\n\t\tfont-display: block;\n\t\tsrc: url(../webfonts/fa-v4compatibility.woff2) format("woff2"),\n\t\t\turl(../webfonts/fa-v4compatibility.ttf) format("truetype");\n\t\tunicode-range: u+f041, u+f047, u+f065-f066, u+f07d-f07e, u+f080, u+f08b,\n\t\t\tu+f08e, u+f090, u+f09a, u+f0ac, u+f0ae, u+f0b2, u+f0d0, u+f0d6, u+f0e4,\n\t\t\tu+f0ec, u+f10a-f10b, u+f123, u+f13e, u+f148-f149, u+f14c, u+f156, u+f15e,\n\t\t\tu+f160-f161, u+f163, u+f175-f178, u+f195, u+f1f8, u+f219, u+f250, u+f252,\n\t\t\tu+f27a;\n\t}',"KOL-SKIP-NAV":"kol-link-wc > a > kol-span-wc {\n\t\tborder-radius: var(--a11y-min-size);\n\t\tborder-style: solid;\n\t\tborder-width: 2px;\n\t\tgap: 0.5rem;\n\t\tline-height: 1rem;\n\t\tpadding: 8px 14px;\n\t\tbackground-color: var(--color-ocean);\n\t\tborder-color: var(--color-ocean);\n\t\tcolor: var(--color-white);\n\t\tcursor: pointer;\n\t}","KOL-SPLIT-BUTTON":".popover {\n\t\tbackground: #fff;\n\t}"}),t=>t.join("")),S=z.createTheme("default",{GLOBAL:L`
		:host {
			--border-radius: var(--kolibri-border-radius, 5px);
			--font-family: var(--kolibri-font-family, BundesSans Web, Calibri, Verdana, Arial, Helvetica, sans-serif);
			--font-size: var(--kolibri-font-size, 16px);
			--spacing: var(--kolibri-spacing, 0.25rem);
			--border-width: var(--kolibri-border-width, 1px);
			--color-primary: var(--kolibri-color-primary, #004b76);
			--color-primary-variant: var(--kolibri-color-primary-variant, #0077b6);
			--color-danger: var(--kolibri-color-danger, #c0003c);
			--color-warning: var(--kolibri-color-warning, #c44931);
			--color-success: var(--kolibri-color-success, #005c45);
			--color-subtle: var(--kolibri-color-subtle, #576164);
			--color-light: var(--kolibri-color-light, #ffffff);
			--color-text: var(--kolibri-color-text, #202020);
			--color-mute: var(--kolibri-color-mute, #f2f3f4);
			--color-mute-variant: var(--kolibri-color-mute-variant, #bec5c9);
		}
		:host {
			font-family: var(--font-family);
			font-size: var(--font-size);
		}
		* {
			box-sizing: border-box;
		}
		*:not(i) {
			font-family: var(--font-family);
		}
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			margin: 0;
			padding: 0;
		}
		*[tabindex]:focus,
		kol-input:not(.checkbox, .radio) .input:focus-within,
		kol-input:is(.checkbox, .radio) input:focus,
		summary:focus {
			cursor: pointer;
			outline-color: var(--color-primary-variant);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 3px;
			transition: outline-offset 0.2s linear;
		}
		kol-heading-wc {
			font-weight: 700;
		}
		kol-tooltip-wc .tooltip-floating {
			border: var(--border-width) solid var(--color-subtle);
			border-radius: var(--border-radius);
		}
		kol-tooltip-wc .tooltip-arrow {
			border: var(--border-width) solid var(--color-subtle);
		}
		kol-tooltip-wc .tooltip-area {
			background-color: var(--color-light);
		}
		kol-tooltip-wc .tooltip-content {
			border-radius: var(--border-radius);
			line-height: 1.5;
			padding: 0.5rem 0.75rem;
		}
		kol-span-wc,
		kol-span-wc > span {
			gap: 0.5rem;
		}

		@keyframes spin {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
	`,"KOL-BUTTON":L`
		:is(a, button):focus {
			outline: none;
		}
		:is(a, button):focus kol-span-wc {
			outline-color: var(--color-primary-variant);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: calc(var(--border-width) * 2);
			transition: outline-offset 0.2s linear;
		}
		:is(a, button) > kol-span-wc {
			font-weight: 700;
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: var(--border-width);
			min-height: var(--a11y-min-size);
			min-width: var(--a11y-min-size);
			padding: 8px 14px;
			text-align: center;
			transition-duration: 0.5s;
			transition-property: background-color, color, border-color;
		}
		:is(a, button):disabled > kol-span-wc {
			cursor: not-allowed;
			opacity: 0.5;
		}
		.primary :is(a, button) > kol-span-wc,
		.primary :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-primary);
			border-color: var(--color-primary);
			color: var(--color-light);
		}
		.secondary :is(a, button) > kol-span-wc,
		.secondary :is(a, button):disabled:hover > kol-span-wc,
		.normal :is(a, button) > kol-span-wc,
		.normal :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-light);
			border-color: var(--color-primary);
			color: var(--color-primary);
		}
		.danger :is(a, button) > kol-span-wc,
		.danger :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-danger);
			border-color: var(--color-danger);
			color: var(--color-light);
		}
		.ghost :is(a, button) > kol-span-wc,
		.ghost :is(a, button):disabled:hover > kol-span-wc {
			border-color: var(--color-light);
			background-color: var(--color-light);
			box-shadow: none;
			color: var(--color-primary);
		} /*-----------*/
		.primary :is(a, button):active > kol-span-wc,
		.primary :is(a, button):hover > kol-span-wc,
		.secondary :is(a, button):active > kol-span-wc,
		.secondary :is(a, button):hover > kol-span-wc,
		.normal :is(a, button):active > kol-span-wc,
		.normal :is(a, button):hover > kol-span-wc,
		.danger :is(a, button):active > kol-span-wc,
		.danger :is(a, button):hover > kol-span-wc,
		.ghost :is(a, button):active > kol-span-wc,
		.ghost :is(a, button):hover > kol-span-wc {
			background-color: var(--color-primary-variant);
			border-color: var(--color-primary-variant);
			box-shadow: 0 2px 8px 2px rgba(8, 35, 48, 0.24);
			color: var(--color-light);
		}
		.danger :is(a, button):active > kol-span-wc,
		.danger :is(a, button):hover > kol-span-wc {
			background-color: var(--color-danger);
			border-color: var(--color-danger);
		}
		:is(a, button):disabled:hover > kol-span-wc,
		:is(a, button):focus:hover > kol-span-wc {
			box-shadow: none;
		}
		.primary :is(a, button):active > kol-span-wc,
		.secondary :is(a, button):active > kol-span-wc,
		.normal :is(a, button):active > kol-span-wc,
		.danger :is(a, button):active > kol-span-wc,
		.ghost :is(a, button):active > kol-span-wc {
			border-color: var(--color-light);
			box-shadow: none;
			outline: none;
		}
		:is(a, button).hide-label > kol-span-wc {
			padding: 0.8rem;
			width: unset;
		}
		:is(a, button).hide-label > kol-span-wc > span > span {
			display: none;
		}
		:is(a, button).loading > kol-span-wc kol-icon {
			animation: spin 5s infinite linear;
		}
		/** small ghost button */
		.ghost :is(a, button).small > kol-span-wc {
			border: none;
			background-color: transparent;
			box-shadow: none;
		}
		.ghost :is(a, button).small > kol-span-wc > span {
			border-radius: 1.5em;
			border-style: solid;
			border-width: var(--border-width);
			border-color: var(--color-light);
			background-color: var(--color-light);
		}
		.ghost :is(a, button).small:active > kol-span-wc > span,
		.ghost :is(a, button).small:hover > kol-span-wc > span,
		.ghost :is(a, button).small.transparent:active > kol-span-wc > span,
		.ghost :is(a, button).small.transparent:hover > kol-span-wc > span {
			background-color: var(--color-primary-variant);
			border-color: var(--color-primary-variant);
			box-shadow: 0 2px 8px 2px rgba(8, 35, 48, 0.24);
			color: var(--color-light);
		} /** :is(a,button) with transparent background */
		:is(a, button).transparent > kol-span-wc > span,
		.ghost :is(a, button).small.transparent > kol-span-wc > span,
		:is(a, button).transparent > kol-span-wc {
			background-color: transparent;
			border-color: transparent;
		}
	`,"KOL-INPUT-TEXT":L`
		kol-input {
			gap: 0.25rem;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.9rem;
			font-style: italic;
		}
		input {
			border: none;
		}
		input::placeholder {
			color: var(--color-subtle);
		}
		.input {
			background-color: var(--color-light);
			border-color: var(--color-subtle);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5rem;
		}
		.input > kol-icon {
			width: 1rem;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1rem;
			padding-right: 1rem;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5rem;
			padding-right: 0.5rem;
		}
		.input > input:first-child {
			padding-left: var(--spacing);
		}
		.input > input:last-child {
			padding-right: var(--spacing);
		}
		.input:hover {
			border-color: var(--color-primary);
		}
		input:read-only,
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error {
			border-left: 3px solid var(--color-danger);
			padding-left: 1rem;
		}
		kol-input.error .input:focus-within {
			outline-color: var(--color-danger) !important;
		}
		kol-input.error kol-alert.error {
			color: var(--color-danger);
			font-weight: 700;
		}
		kol-input.disabled :is(input, label) {
			opacity: 1;
		}
		kol-input.disabled :is(input, .input) {
			background-color: var(--color-mute);
			border-color: var(--color-mute-variant);
		}
	`,"KOL-INPUT-PASSWORD":L`
		kol-input {
			gap: 0.25rem;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.9rem;
			font-style: italic;
		}
		input {
			border: none;
		}
		input::placeholder {
			color: var(--color-subtle);
		}
		.input {
			background-color: var(--color-light);
			border-color: var(--color-subtle);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5rem;
		}
		.input > kol-icon {
			width: 1rem;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1rem;
			padding-right: 1rem;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5rem;
			padding-right: 0.5rem;
		}
		.input > input:first-child {
			padding-left: var(--spacing);
		}
		.input > input:last-child {
			padding-right: var(--spacing);
		}
		.input:hover {
			border-color: var(--color-primary);
		}
		input:read-only,
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error {
			border-left: 3px solid var(--color-danger);
			padding-left: 1rem;
		}
		kol-input.error .input:focus-within {
			outline-color: var(--color-danger) !important;
		}
		kol-input.error kol-alert.error {
			color: var(--color-danger);
			font-weight: 700;
		}
		kol-input.disabled :is(button, input, label, option, select, textarea) {
			opacity: 1;
		}
		kol-input.disabled :is(input, select, textarea, .input) {
			background-color: var(--color-mute);
			border-color: var(--color-mute-variant);
			color: var(--color-text);
		}
	`,"KOL-INPUT-NUMBER":L`
		kol-input {
			gap: 0.25rem;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.9rem;
			font-style: italic;
		}
		input {
			border: none;
		}
		input::placeholder {
			color: var(--color-subtle);
		}
		.input {
			background-color: var(--color-light);
			border-color: var(--color-subtle);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5rem;
		}
		.input > kol-icon {
			width: 1rem;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1rem;
			padding-right: 1rem;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5rem;
			padding-right: 0.5rem;
		}
		.input > input:first-child {
			padding-left: var(--spacing);
		}
		.input > input:last-child {
			padding-right: var(--spacing);
		}
		.input:hover {
			border-color: var(--color-primary);
		}
		input:read-only,
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error {
			border-left: 3px solid var(--color-danger);
			padding-left: 1rem;
		}
		kol-input.error .input:focus-within {
			outline-color: var(--color-danger) !important;
		}
		kol-input.error kol-alert.error {
			color: var(--color-danger);
			font-weight: 700;
		}
		kol-input.disabled :is(input, label) {
			opacity: 1;
		}
		kol-input.disabled :is(input, .input) {
			background-color: var(--color-mute);
			border-color: var(--color-mute-variant);
			color: var(--color-text);
		}
	`,"KOL-INPUT-DATE":L`
		kol-input {
			gap: 0.25rem;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.9rem;
			font-style: italic;
		}
		input {
			border: none;
		}
		input::placeholder {
			color: var(--color-subtle);
		}
		.input {
			background-color: var(--color-light);
			border-color: var(--color-subtle);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5rem;
		}
		.input > kol-icon {
			width: 1rem;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1rem;
			padding-right: 1rem;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5rem;
			padding-right: 0.5rem;
		}
		.input > input:first-child {
			padding-left: var(--spacing);
		}
		.input > input:last-child {
			padding-right: var(--spacing);
		}
		.input:hover {
			border-color: var(--color-primary);
		}
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error {
			border-left: 3px solid var(--color-danger);
			padding-left: 1rem;
		}
		kol-input.error .input:focus-within {
			outline-color: var(--color-danger) !important;
		}
		kol-input.error kol-alert.error {
			color: var(--color-danger);
			font-weight: 700;
		}
		kol-input.disabled :is(input, label) {
			opacity: 1;
		}
		kol-input.disabled :is(input, .input) {
			background-color: var(--color-mute);
			border-color: var(--color-mute-variant);
			color: var(--color-text);
		}
	`,"KOL-INPUT-EMAIL":L`
		kol-input {
			gap: 0.25rem;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.9rem;
			font-style: italic;
		}
		input {
			border: none;
		}
		input::placeholder {
			color: var(--color-subtle);
		}
		.input {
			background-color: var(--color-light);
			border-color: var(--color-subtle);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5rem;
		}
		.input > kol-icon {
			width: 1rem;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1rem;
			padding-right: 1rem;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5rem;
			padding-right: 0.5rem;
		}
		.input > input:first-child {
			padding-left: var(--spacing);
		}
		.input > input:last-child {
			padding-right: var(--spacing);
		}
		.input:hover {
			border-color: var(--color-primary);
		}
		input:read-only,
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error {
			border-left: 3px solid var(--color-danger);
			padding-left: 1rem;
		}
		kol-input.error .input:focus-within {
			outline-color: var(--color-danger) !important;
		}
		kol-input.error kol-alert.error {
			color: var(--color-danger);
			font-weight: 700;
		}
		kol-input.disabled :is(input, label) {
			opacity: 1;
		}
		kol-input.disabled :is(input, .input) {
			background-color: var(--color-mute);
			border-color: var(--color-mute-variant);
			color: var(--color-text);
		}
	`,"KOL-INPUT-FILE":L`
		kol-input {
			gap: 0.25rem;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.9rem;
			font-style: italic;
		}
		kol-input .input input[type='file'] {
			padding-top: calc(0.5em + 2px);
		}
		input {
			border: none;
		}
		input[type='file'] {
			background-color: transparent;
		}
		input::placeholder {
			color: var(--color-subtle);
		}
		.input {
			background-color: var(--color-light);
			border-color: var(--color-subtle);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5rem;
		}
		.input > kol-icon {
			width: 1rem;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1rem;
			padding-right: 1rem;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5rem;
			padding-right: 0.5rem;
		}
		.input > input:first-child {
			padding-left: var(--spacing);
		}
		.input > input:last-child {
			padding-right: var(--spacing);
		}
		.input:hover {
			border-color: var(--color-primary);
		}
		input:read-only,
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error {
			border-left: 3px solid var(--color-danger);
			padding-left: 1rem;
		}
		kol-input.error .input:focus-within {
			outline-color: var(--color-danger) !important;
		}
		kol-input.error kol-alert.error {
			color: var(--color-danger);
			font-weight: 700;
		}
		kol-input.disabled :is(button, input, label, option, select, textarea) {
			opacity: 1;
		}
		kol-input.disabled :is(input, select, textarea, .input) {
			background-color: var(--color-mute);
			border-color: var(--color-mute-variant);
			color: var(--color-text);
		}
	`,"KOL-TEXTAREA":L`
		kol-input {
			gap: 0.25rem;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .counter {
			order: 4;
		}
		kol-input .hint {
			order: 5;
			font-size: 0.9rem;
			font-style: italic;
		}
		textarea {
			border: none;
		}
		input::placeholder {
			color: var(--color-subtle);
		}
		.input {
			background-color: var(--color-light);
			border-color: var(--color-subtle);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5rem;
		}
		.input > kol-icon {
			width: 1rem;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1rem;
			padding-right: 1rem;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5rem;
			padding-right: 0.5rem;
		}
		.input > input:first-child {
			padding-left: var(--spacing);
		}
		.input > input:last-child {
			padding-right: var(--spacing);
		}
		.input:hover {
			border-color: var(--color-primary);
		}
		textarea:read-only,
		textarea:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error {
			border-left: 3px solid var(--color-danger);
			padding-left: 1rem;
		}
		kol-input.error .input:focus-within {
			outline-color: var(--color-danger) !important;
		}
		kol-input.error kol-alert.error {
			color: var(--color-danger);
			font-weight: 700;
		}
		.disabled {
			opacity: 0.33;
		}
		select[multiple],
		textarea {
			overflow: auto;
		}
		textarea {
			display: block;
		}
		.input {
			position: relative;
		}
	`,"KOL-ALERT":L`
		.msg {
			border-width: 0;
		}
		kol-alert-wc {
			border-width: var(--border-width);
			border-style: solid;
			border-radius: var(--border-radius);
			display: flex;
			width: 100%;
			overflow: unset;
			border-color: transparent;
			background-color: var(--color-light);
		}
		kol-alert-wc > .heading {
			display: flex;
			gap: 0.5em;
			place-items: center;
		}
		kol-alert-wc > .heading > div {
			display: grid;
			gap: 0.25rem;
		}
		.msg > .heading > kol-icon {
			place-self: baseline;
		}
		kol-alert-wc > .heading > kol-button-wc.close {
			place-self: center;
		}
		.msg {
			align-items: start;
		}
		.default {
			border-color: var(--color-subtle);
		}
		.default.msg .heading-icon {
			color: var(--color-subtle);
		}
		.error {
			border-color: var(--color-danger);
		}
		.error.msg .heading-icon {
			color: var(--color-danger);
		}
		.info {
			border-color: var(--color-primary);
		}
		.info.msg .heading-icon {
			color: var(--color-primary);
		}
		.success {
			border-color: var(--color-success);
		}
		.success.msg .heading-icon {
			color: var(--color-success);
		}
		.warning {
			border-color: var(--color-warning);
		}
		.warning.msg .heading-icon {
			color: var(--color-warning);
		}
		.heading-icon {
			color: var(--color-light);
		}
		kol-alert-wc .heading .heading-icon {
			padding: 0;
		}
		.msg > .heading > .heading-icon {
			padding-top: 0;
			place-items: baseline;
		}
		.msg > .heading > div > kol-heading-wc {
			padding-top: calc(--var-spacing / 2);
		}
		.msg.default .heading > div > kol-heading-wc {
			color: var(--color-subtle);
		}
		.msg.error .heading > div > kol-heading-wc {
			color: var(--color-danger);
		}
		.msg.info .heading > div > kol-heading-wc {
			color: var(--color-primary);
		}
		.msg.success .heading > div > kol-heading-wc {
			color: var(--color-success);
		}
		.msg.warning .heading > div > kol-heading-wc {
			color: var(--color-warning);
		}
		.msg.default .close .icon {
			color: var(--color-subtle);
		}
		.msg.error .close .icon {
			color: var(--color-danger);
		}
		.msg.info .close .icon {
			color: var(--color-primary);
		}
		.msg.success .close .icon {
			color: var(--color-success);
		}
		.msg.warning .close .icon {
			color: var(--color-warning);
		}
		.card {
			border-width: var(--border-width);
			border-style: solid;
			filter: drop-shadow(0px 2px 4px rgba(8, 35, 48, 0.24));
			flex-direction: column;
		}
		.card > .heading {
			padding: 0.5rem 1rem;
		}
		.card[_has-closer] > .heading {
			padding-top: 0;
			padding-bottom: 0;
			padding-right: 0;
		}
		.card > .heading > div {
			width: 100%;
			min-height: 1.25rem;
		}
		.card > .heading .heading-icon {
			justify-self: right;
			margin-top: -4px;
		}
		.card > .heading kol-heading-wc {
			width: 100%;
			color: var(--color-light);
			display: flex;
			font-size: 1.25rem;
			line-height: 1.25rem;
		}
		.card > .heading kol-heading-wc > * {
			margin: auto 0;
		}
		.card > .content {
			padding: 1rem;
		}
		.card.default > .heading {
			background-color: var(--color-subtle);
		}
		.card.error > .heading {
			background-color: var(--color-danger);
		}
		.card.info > .heading {
			background-color: var(--color-primary);
		}
		.card.success > .heading {
			background-color: var(--color-success);
		}
		.card.warning > .heading {
			background-color: var(--color-warning);
		}
		:is(.error, .info, .success, .warning) .heading-icon {
			font-size: 1.25rem;
		}
		.card > div > .content {
			grid-row: 2;
			grid-column: 1 / span 2;
		}
		.card.default .close {
			background-color: var(--color-subtle);
		}
		.card.error .close {
			background-color: var(--color-danger);
		}
		.card.info .close {
			background-color: var(--color-primary);
		}
		.card.success .close {
			background-color: var(--color-success);
		}
		.card.warning .close {
			background-color: var(--color-warning);
		}
		.close > button {
			border-radius: 50%; /* visible on focus */
			color: var(--color-light);
			cursor: pointer;
			height: var(--a11y-min-size);
			width: var(--a11y-min-size);
		}
		.close > button.hide-label kol-icon {
			display: flex;
			width: 1em;
			height: 1em;
			font-size: 1.2rem;
		}
		.close > button:active {
			box-shadow: none;
			outline: none;
		}
	`,"KOL-HEADING":L`
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			color: inherit;
			font-style: normal;
		}
		h1,
		h2,
		h3 {
			font-weight: 700;
		}
		h1 {
			font-size: 1.5rem;
			line-height: 1.75rem;
		}
		h2 {
			font-size: 1.25rem;
			line-height: 1.75rem;
		}
		h3 {
			font-size: 1.125rem;
			line-height: 1.5rem;
		}
	`,"KOL-BADGE":L`
		:host {
			display: inline-block;
			font-size: inherit;
		}
		:host > span {
			border-radius: var(--border-radius);
			display: inline-flex;
			font-style: normal;
		}
		:host > span.smart-button {
			align-items: center;
		}
		:host > span kol-button-wc:hover > button {
			background-color: var(--color-primary-variant);
			color: var(--color-light);
		}
		:host > span kol-button-wc > button {
			color: inherit;
			border-top-right-radius: var(--border-radius);
			border-bottom-right-radius: var(--border-radius);
			padding: 0.2rem;
		}
		:host > span kol-span-wc {
			padding: 0.25rem 0.75rem;
		}
		:host > span > kol-span-wc {
			align-items: center;
			font-style: normal;
			gap: 0.5rem;
		}
		:host > span > kol-span-wc > span {
			display: flex;
			gap: 0.25rem;
		}
	`,"KOL-BUTTON-GROUP":L`
		:host > kol-button-group-wc {
			display: flex;
			flex-wrap: wrap;
			gap: var(--spacing);
		}
	`,"KOL-INDENTED-TEXT":L`
		:host > div {
			background-color: var(--color-light);
			border-left: none;
			box-shadow: -2px 0px 0px var(--color-primary-variant);
			padding: 0 0.5rem;
			width: 100%;
		}
	`,"KOL-LINK":L`
		:is(a, button) {
			color: var(--color-primary);
			font-style: normal;
			font-weight: 400;
			text-decoration-line: underline;
		}
		:is(a, button):focus {
			outline: none;
		}
		:is(a, button):focus kol-span-wc {
			border-radius: var(--border-radius);
			outline: var(--border-width) solid;
		}
		:is(a, button):hover {
			text-decoration-thickness: 0.25em;
		}
		:is(a, button):visited {
			color: var(--visited);
		}
		.hidden {
			display: none;
			visibility: hidden;
		}
		.skip {
			left: -99999px;
			overflow: hidden;
			position: absolute;
			z-index: 9999999;
			line-height: 1em;
		}
		.skip:focus {
			background: white;
			left: unset;
			position: unset;
		}
	`,"KOL-DETAILS":L`
		details > summary {
			border-radius: var(--border-radius);
		}
		details kol-indented-text {
			margin: 0.25rem 0 0 0.65rem;
		}
		kol-icon {
			font-size: 1.2rem;
		}
	`,"KOL-SPIN":L`
		.spin {
			display: inline-block;
			height: 1rem;
			position: relative;
			width: 3rem;
		}
		.spin span {
			animation-timing-function: cubic-bezier(0, 1, 1, 0);
			border: 0.1rem solid rgb(255, 255, 255);
			border-radius: 50%;
			height: 0.8rem;
			width: 0.8rem;
			top: 0.1rem;
			position: absolute;
		}
		.spin span:nth-child(1) {
			background-color: #fc0;
			z-index: 0;
			animation: 2s ease 0s infinite normal none running spin1;
			left: 0.1rem;
		}
		.spin span:nth-child(2) {
			background-color: #f00;
			z-index: 1;
			animation: 2s ease 0s infinite normal none running spin2;
			left: 0.1rem;
		}
		.spin span:nth-child(3) {
			background-color: #000;
			z-index: 1;
			animation: 2s ease 0s infinite normal none running spin2;
			left: 1.1rem;
		}
		.spin span:nth-child(4) {
			background-color: #666;
			z-index: 0;
			animation: 2s ease 0s infinite normal none running spin3;
			left: 2.1rem;
		}
		@keyframes spin1 {
			0% {
				transform: scale(0);
			}
			100% {
				transform: scale(1);
			}
		}
		@keyframes spin2 {
			0% {
				transform: translate(0px, 0px);
			}
			100% {
				transform: translate(1rem, 0px);
			}
		}
		@keyframes spin3 {
			0% {
				transform: scale(1);
			}
			100% {
				transform: scale(0);
			}
		}
	`,"KOL-PROGRESS":L`
		:host progress,
		:host span {
			display: block;
			height: 0px;
			overflow: hidden;
			width: 0px;
		}
		:host svg line:first-child,
		:host svg circle:first-child {
			fill: transparent;
			stroke: var(--color-mute-variant);
		}
		:host svg line:last-child,
		:host svg circle:last-child {
			fill: transparent;
			stroke: var(--color-primary);
		}

		.cycle .progress {
			stroke: var(--color-primary-variant);
		}
	`,"KOL-SELECT":L`
		kol-input {
			gap: 0.25rem;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.9rem;
			font-style: italic;
		}
		select {
			border: none;
		}
		input::placeholder {
			color: var(--color-subtle);
		}
		.input {
			background-color: var(--color-light);
			border-color: var(--color-subtle);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5rem;
		}
		.input > kol-icon {
			width: 2rem;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1rem;
			padding-right: 1rem;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5rem;
			padding-right: 0.5rem;
		}
		.input > input:first-child {
			padding-left: var(--spacing);
		}
		.input > input:last-child {
			padding-right: var(--spacing);
		}
		.input:hover {
			border-color: var(--color-primary);
		}
		select:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error {
			border-left: 3px solid var(--color-danger);
			padding-left: 1rem;
		}
		kol-input.error .input:focus-within {
			outline-color: var(--color-danger) !important;
		}
		kol-input.error kol-alert.error {
			color: var(--color-danger);
			font-weight: 700;
		}
		kol-input.disabled :is(select, label, option) {
			opacity: 1;
		}
		kol-input.disabled :is(select, .input) {
			background-color: var(--color-mute);
			border-color: var(--color-mute-variant);
		}
		select[multiple] {
			overflow: auto;
		}
		select option {
			margin: 1px 0;
			padding: 0.5em;
			border-radius: var(--border-radius);
			cursor: pointer;
		}
		select option:disabled {
			cursor: not-allowed;
		}
		option:active:not(:disabled),
		option:checked:not(:disabled),
		option:focus:not(:disabled),
		option:hover:not(:disabled) {
			background: var(--color-primary-variant);
			color: var(--color-light);
		}
	`,"KOL-INPUT-COLOR":L`
		kol-input {
			gap: 0.25rem;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.9rem;
			font-style: italic;
		}
		input {
			border: none;
		}
		input[type='color'] {
			border: none;
			min-height: 40px !important;
		}
		input[type='color'] {
			background-color: transparent;
		}
		input::placeholder {
			color: var(--color-subtle);
		}
		.input {
			background-color: var(--color-light);
			border-color: var(--color-subtle);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5rem;
		}
		.input > kol-icon {
			width: 1rem;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1rem;
			padding-right: 1rem;
		}
		.input:is(.icon-left, .icon-right) input {
			padding-left: 0.5rem;
			padding-right: 0.5rem;
		}
		.input > input:first-child {
			padding-left: var(--spacing);
		}
		.input > input:last-child {
			padding-right: var(--spacing);
		}
		.input:hover {
			border-color: var(--color-primary);
		}
		input:read-only,
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error {
			border-left: 3px solid var(--color-danger);
			padding-left: 1rem;
		}
		kol-input.error .input:focus-within {
			outline-color: var(--color-danger) !important;
		}
		kol-input.error kol-alert.error {
			color: var(--color-danger);
			font-weight: 700;
		}
		kol-input.disabled :is(input, label) {
			opacity: 1;
		}
		kol-input.disabled :is(input, .input) {
			background-color: var(--color-mute);
			border-color: var(--color-mute-variant);
			color: var(--color-text);
		}
	`,"KOL-ACCORDION":L`
		kol-span-wc > span {
			display: flex;
			place-items: baseline center;
			text-align: left;
		}
		:host > div > kol-heading-wc button {
			border-radius: var(--border-radius);
			min-height: 2.2rem;
			padding: 12px 8px;
		}
		:host > div > kol-heading-wc button kol-span-wc {
			font-weight: 700;
			font-size: 1.125rem;
			line-height: 20px;
			gap: 0.5rem;
		}
		:host > div > kol-heading-wc button kol-span-wc > span {
			gap: 0.5em;
		}
		:host > div > kol-heading-wc button kol-icon {
			color: var(--color-primary);
		}
		:host > div {
			width: 100%;
			height: 100%;
			display: grid;
		}
		:host > div div[class='header'],
		:host > div[class*='open'] div[class='content'] {
			margin: 0;
		}
		:host > div div[class='content'] {
			padding-left: 2.25em;
			padding-bottom: 12px;
			padding-right: 8px;
		}
		button:focus {
			outline: none;
		}
		:host > .accordion:focus-within {
			border-radius: var(--border-radius);
			cursor: pointer;
			outline-color: var(--color-primary-variant);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: 3px;
			transition: outline-offset 0.2s linear;
		}
	`,"KOL-TABLE":L`
		:host * {
			hyphens: var(--hyphens);
			font-family: var(--font-family);
			line-height: var(--line-height);
			word-break: break-word;
		}
		:host > div {
			overflow-x: auto;
			overflow-y: hidden;
		}
		caption {
			padding: 0.5rem;
		}
		th {
			font-weight: normal;
			color: var(--color-primary);
		}
		:host table thead tr:first-child th,
		:host table thead tr:first-child td {
			border-width: 0;
			border-top-width: calc(var(--border-width) * 2);
			border-style: solid;
			border-color: var(--color-primary-variant);
		}
		table {
			width: 100%;
			border-spacing: 0;
		}
		table,
		:host table thead tr:last-child th,
		:host table thead tr:last-child td {
			border-width: 0;
			border-bottom-width: calc(var(--border-width) * 2);
			border-style: solid;
			border-color: var(--color-primary-variant);
		}
		th {
			background-color: var(--color-light);
		}
		th div {
			width: 100%;
			display: flex;
			gap: 0.5rem;
			grid-template-columns: 1fr auto;
			align-items: center;
		}
		th div.center {
			justify-content: center;
		}
		th div.right {
			justify-content: end;
		}
		tr:nth-child(even) {
			background-color: var(--color-mute);
		}
		th,
		td {
			padding: 0.5rem;
		}
		td.center > div {
			display: flex;
			justify-content: center;
		}
		td.right > div {
			display: flex;
			justify-content: end;
		}
		th[aria-sort='ascending'],
		th[aria-sort='descending'] {
			font-weight: 700;
		}
		:host > div:last-child {
			padding: 0.5rem;
		}
		:host > div:last-child,
		:host > div:last-child > div:last-child {
			display: grid;
			align-items: center;
			justify-items: center;
			gap: 1rem;
		}

		@media (min-width: 1024px) {
			div.pagination kol-pagination {
				display: flex;
				align-items: center;
			}
		}
	`,"KOL-NAV":L`
		* {
			margin: 0;
			padding: 0;
		}
		nav {
			font-family: var(--font-family);
			font-size: var(--font-size);
			background-color: var(--color-mute);
			width: 100%;
		}
		ul {
			list-style: none;
		}
		kol-link-wc,
		a {
			height: 100%;
			min-height: var(--a11y-min-size);
			display: flex;
			place-items: center;
		}
		.entry > kol-span-wc > span {
			width: 100%;
		}
		.entry > :is(kol-button-wc, kol-link-wc, kol-span-wc):first-child {
			background-color: var(--color-light);
			text-decoration: none;
			color: var(--color-primary);
			width: 100%;
			display: flex;
			align-items: center;
			font-style: normal;
			line-height: 1.5rem;
			min-height: var(--a11y-min-size);
			min-width: var(--a11y-min-size);
			transition-duration: 0.5s;
			transition-property: background-color, color, border-color;
			letter-spacing: 0.175px;
		}
		.entry > :is(kol-link-wc, kol-button-wc):first-child :is(a, button) {
			color: var(--color-primary);
			text-decoration: none;
		}
		.entry > :is(kol-button-wc, kol-link-wc, kol-span-wc):first-child:hover {
			border-left-color: var(--color-primary-variant);
			background-color: var(--color-primary-variant);
		}
		.entry > :is(kol-link-wc, kol-button-wc, kol-span-wc):first-child:hover > :is(a, button, span) {
			color: var(--color-primary-variant);
			font-weight: 700;
			letter-spacing: unset;
		}
		.selected > :is(kol-button-wc, kol-link-wc, kol-span-wc):first-child {
			background-color: var(--color-primary-variant);
			color: var(--color-primary);
			font-weight: 700;
		}
		.selected > :is(kol-link-wc, kol-button-wc, kol-span-wc):first-child > :is(a, button, span) {
			font-weight: 700;
		}
		.selected :is(kol-button-wc, kol-link-wc, kol-span-wc):first-child:hover {
			color: var(--color-primary-variant);
			letter-spacing: unset;
		}
		.entry > kol-span-wc > span,
		.entry :is(a, button) {
			border-left-color: transparent;
			border-left-style: solid;
			border-left-width: 0.5rem;
			padding: 0.75rem 0.5rem 0.75rem 0.25rem;
		}
		.selected :is(a, button),
		[exportparts*='selected'] a {
			border-left-color: var(--color-primary);
		} /** Compact mode */
		.entry.compact :is(kol-button-wc, kol-link-wc, kol-span-wc):first-child {
			place-items: center;
		}
		.entry.compact > kol-span-wc > span {
			flex-direction: column;
		}
		.entry.compact > kol-span-wc > span,
		.entry.compact :is(a, button) {
			padding-left: 0;
		}
	`,"KOL-CARD":L`
		/* https://www.figma.com/file/56JbmrssCRpjpfxoAFeHqT/Design-System-EPLF-(in-progress)?node-id=8225%3A5945 */
		:host > div {
			display: grid;
			width: 100%;
			height: 100%;
			background-color: var(--color-light);
			grid-template-rows: min-content 2fr min-content;
			box-shadow: 0 0 0.25rem var(--color-subtle);
			border-radius: var(--border-radius);
		}
		:host kol-heading-wc {
			line-height: 1.75rem;
		}
		:host div.header {
			padding: 1rem 1rem 0.5rem 1rem;
		}
		:host div.content {
			padding: 0.5rem 1rem 1rem;
			overflow: hidden;
		}
		:host div.footer {
			padding: 0.5rem 1rem;
		}
	`,"KOL-INPUT-CHECKBOX":L`
		:host kol-input {
			display: grid;
			align-items: center;
			justify-items: left;
			width: 100%;
			min-height: var(--a11y-min-size);
			gap: 0.4rem;
		}
		:host kol-input.default {
			grid-template-columns: 1.5rem auto;
		}
		:host kol-input.switch {
			grid-template-columns: 3.5rem auto;
		}
		:host kol-input.button {
			gap: 0.4rem 0;
		}
		:host kol-input > div.input {
			display: inherit;
			min-height: var(--a11y-min-size);
			order: 2;
		}
		:host kol-input > div.input input {
			margin: 0px;
		}
		:host kol-input > label {
			cursor: pointer;
			order: 3;
		}
		:host kol-input > kol-alert.error {
			order: 1;
			padding-top: calc(var(--spacing) / 2);
			grid-column: span 2 / auto;
		}
		:host kol-input.error {
			border-left: 3px solid var(--color-danger);
			padding-left: 1rem;
		}
		:host kol-input.error input:focus,
		kol-input.error select:focus,
		kol-input.error textarea:focus {
			outline-color: var(--color-danger) !important;
		}
		:host kol-input.error kol-alert.error {
			color: var(--color-danger);
			font-weight: 700;
		}
		:host input {
			cursor: pointer;
			order: 1;
			width: 100%;
			border-color: var(--color-subtle);
			border-width: 2px;
			border-style: solid;
			border-radius: var(--border-radius);
			line-height: 24px;
			font-size: 1rem;
		}
		:host input:hover {
			border-color: var(--color-primary);
			box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
		}
		:host input:focus:hover {
			box-shadow: none;
		}
		:host input:active {
			box-shadow: none;
		}
		:host kol-alert {
			display: block;
			width: 100%;
		} /* CHECKBOX */
		:host kol-input label span {
			margin-top: 0.125rem;
		}
		:host .required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		:host kol-input input[type='checkbox'] {
			appearance: none;
			background-color: white;
			cursor: pointer;
			transition: 0.5s;
		}
		:host kol-input input[type='checkbox'].kol-disabled:before {
			cursor: not-allowed;
		}
		:host kol-input input[type='checkbox']:before {
			content: '';
			cursor: pointer;
		}
		:host kol-input input[type='checkbox']:checked {
			background-color: var(--color-primary);
			border-color: var(--color-primary);
		}
		:host kol-input.default input[type='checkbox'] {
			border-radius: var(--border-radius);
			height: calc(6 * 0.25rem);
			min-width: calc(6 * 0.25rem);
			width: calc(6 * 0.25rem);
		}
		:host kol-input.default input[type='checkbox']:before {
			border-radius: 1.5em;
			background-color: transparent;
			display: block;
			height: calc(6 * 0.25rem);
			position: relative;
			width: calc(6 * 0.25rem);
		}
		:host kol-input.default input[type='checkbox']:checked:before {
			border-right-width: 3px;
			border-bottom-width: 3px;
			left: calc(1.5 * 0.25rem - 2px);
			top: calc(2.85 * 0.25rem - 2px);
			transform: rotate(40deg) translate(-50%, -50%);
			background-color: transparent;
			border-width: 0px 3px 3px 0px;
			border-color: white;
			border-radius: 1px;
			border-style: solid;
			height: calc(3 * 0.25rem);
			width: calc(1.5 * 0.25rem);
		}
		:host kol-input.default input[type='checkbox']:indeterminate {
			background-color: var(--color-primary);
		}
		:host kol-input.default input[type='checkbox']:indeterminate:before {
			background-color: var(--color-light);
			height: 0.125rem;
			top: 0.6rem;
			left: 0.25rem;
			width: calc(3 * 0.25rem);
			transform: inherit;
		}
		:host kol-input.default input[type='checkbox']:checked:indeterminate:before {
			border-width: 0px 1px 1px 0px;
		}
		:host kol-input.switch input[type='checkbox'] {
			min-width: 3.5em;
			width: 3.5em;
			background-color: var(--color-subtle);
			border-width: 0;
			height: 1.5em;
			border-radius: 1.25em;
			display: inline-block;
			position: relative;
		}
		:host kol-input.switch input[type='checkbox']:before {
			width: 1.25em;
			height: 1.25em;
			left: calc(0.25em - 2px);
			top: calc(0.25em - 2px);
			border-radius: 1.25em;
			background-color: white;
			position: absolute;
		}
		:host kol-input.switch input[type='checkbox']:checked {
			background-color: var(--color-primary);
		}
		:host kol-input.switch input[type='checkbox']:checked:before {
			transform: translateX(2em);
		}
		:host kol-input.switch input[type='checkbox']:indeterminate:before {
			transform: translateX(1em);
		}
		.switch {
			& .icon {
				width: 1.25em;
				height: 1.25em;
				left: 2px;
			}

			&:has(input:checked) .icon {
				transform: translate(2em, -50%);
			}

			&:has(input:indeterminate) .icon {
				transform: translate(1em, -50%);
			}
		}
		:host .disabled {
			opacity: 0.33;
		}
	`,"KOL-INPUT-RADIO":L`
		label {
			cursor: pointer;
			display: grid;
			line-height: 20px;
			gap: calc(var(--spacing) * 2);
			width: 100%;
		}
		input {
			cursor: pointer;
			width: 100%;
			border-color: var(--color-subtle);
			border-width: 2px;
			border-style: solid;
			border-radius: 5px;
			line-height: 24px;
		}
		input:hover {
			border-color: var(--color-primary);
			box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
		}
		input:focus:hover {
			box-shadow: none;
		}
		input:hover {
			border-color: var(--color-primary);
		}
		kol-alert {
			display: block;
			width: 100%;
		}
		.required legend > span::after {
			content: '*';
			padding-left: 0.125em;
		} /* RADIO */
		fieldset {
			border: 0px;
			margin: 0px;
			padding: 0px;
			display: grid;
			gap: 0.25em;
		}
		fieldset div {
			align-items: center;
			cursor: pointer;
			display: flex;
			flex-direction: row;
			gap: 0.5rem;
			margin: 0;
			min-height: var(--a11y-min-size);
			position: relative;
		}
		fieldset div label {
			cursor: pointer;
			display: flex;
			padding-left: calc(var(--spacing) / 2);
			width: 100%;
		}
		fieldset div label span {
			margin-top: 0.125em;
		}
		fieldset div input[type='radio'] {
			appearance: none;
			transition: 0.5s;
			border-radius: 100%;
			height: calc(6 * 0.25rem);
			min-width: calc(6 * 0.25rem);
			width: calc(6 * 0.25rem);
		}
		fieldset div input[type='radio']:before {
			content: '';
			cursor: pointer;
			border-radius: 100%;
			display: block;
		}
		fieldset div input[type='radio']:checked:before {
			background-color: var(--color-primary);
		}
		fieldset div input[type='radio']:disabled {
			cursor: not-allowed;
			background-color: var(--color-mute-variant);
		}
		fieldset #error {
			order: 1;
		}
		fieldset legend {
			order: 2;
			display: contents;
		}
		fieldset kol-input {
			order: 3;
		}
		fieldset.error {
			padding-left: 1rem;
			border-left: 3px solid var(--color-danger);
		}
		fieldset kol-alert#error {
			color: var(--color-danger);
			font-weight: 700;
		}
		fieldset.error input:focus,
		fieldset.error select:focus,
		fieldset.error textarea:focus {
			outline-color: var(--color-danger) !important;
		}
		fieldset.error kol-alert.error {
			margin-left: -0.25em;
			color: var(--color-danger);
			font-weight: 700;
		}
		.disabled {
			opacity: 0.33;
		}
		fieldset.horizontal {
			display: flex;
			flex-wrap: wrap;
			gap: var(--spacing) calc(var(--spacing) * 2);
		}
		fieldset.horizontal legend {
			display: inline-block;
			margin-bottom: calc(var(--spacing) / 2);
		}
		fieldset .input-slot {
			gap: var(--spacing);
		}
		fieldset div label {
			padding-left: 0;
		}
	`,"KOL-TOAST-CONTAINER":L`
		:host {
			top: 1rem;
			right: 1rem;
			width: 440px;
		}
	`,"KOL-TOAST":L`
		.toast {
			margin-top: 1rem;
		}
	`,"KOL-TABS":L`
		button:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}
		:host kol-button-group-wc {
			display: inline-flex;
			gap: 2rem;
			flex-wrap: wrap;
		}
		button {
			box-sizing: border-box;
			background-color: transparent;
			border: 0;
			border-radius: var(--border-radius);
			font-style: normal;
			font-weight: 700;
			font-size: 18px;
			line-height: 22px;
			min-height: var(--a11y-min-size);
			min-width: var(--a11y-min-size);
			color: var(--color-subtle);
			padding: 0;
		}
		button:hover {
			color: var(--color-primary);
		}
		button.primary,
		button.selected {
			color: var(--color-primary);
		}
		button kol-span-wc > span {
			border-bottom: 0.25em solid;
		}
		button kol-span-wc > span {
			gap: 0.5rem;
		}
		:host > div > div {
			padding: 0.25em 0;
		}
		div[role='tabpanel'] {
			height: 100%;
		}
		div.grid {
			height: 100%;
		}
		:host > .tabs-align-right {
			display: grid;
			grid-template-columns: 1fr auto;
		}
		:host > .tabs-align-right kol-button-group-wc {
			display: grid;
			order: 2;
		}
		:host > .tabs-align-left {
			display: grid;
			grid-template-columns: auto 1fr;
		}
		:host > .tabs-align-left kol-button-group-wc {
			display: grid;
			order: 0;
		}
		:host > .tabs-align-bottom {
			display: grid;
			grid-template-rows: 1fr auto;
		}
		:host > .tabs-align-bottom kol-button-group-wc {
			order: 2;
		}
		:host > .tabs-align-bottom kol-button-group-wc > div {
			display: flex;
		}
		:host > .tabs-align-bottom > kol-button-group-wc > div > div:first-child {
			margin: 0px 1rem 0px 0px;
		}
		:host > .tabs-align-bottom > kol-button-group-wc > div > div {
			margin: 0px 1rem;
		}
		:host > .tabs-align-top {
			display: grid;
			grid-template-rows: auto 1fr;
		}
		:host > .tabs-align-top kol-button-group-wc {
			order: 0;
		}
		:host > .tabs-align-top kol-button-group-wc > div {
			display: flex;
		}
		:host > .tabs-align-top > kol-button-group-wc > div > div:first-child {
			margin: 0px 1rem 0px 0px;
		}
		:host > .tabs-align-top > kol-button-group-wc > div > div {
			margin: 0px 1rem;
		}
		:host > div {
			display: grid;
		}
		:host > div.tabs-align-left {
			grid-template-columns: auto 1fr;
		}
		:host > div.tabs-align-right {
			grid-template-columns: 1fr auto;
		}
		:host > .tabs-align-left kol-button-group-wc,
		:host > .tabs-align-top kol-button-group-wc {
			order: 0;
		}
		:host > .tabs-align-bottom kol-button-group-wc,
		:host > .tabs-align-right kol-button-group-wc {
			order: 1;
		}
		:host > .tabs-align-left kol-button-group-wc,
		:host > .tabs-align-right kol-button-group-wc {
			gap: inherit;
		}
		:host > div.tabs-align-left kol-button-group-wc > div,
		:host > div.tabs-align-left kol-button-group-wc > div > div,
		:host > div.tabs-align-right kol-button-group-wc > div,
		:host > div.tabs-align-right kol-button-group-wc > div > div {
			display: grid;
		}
		:host > div.tabs-align-left kol-button-group-wc > div > div kol-button-wc,
		:host > div.tabs-align-right kol-button-group-wc > div > div kol-button-wc {
			width: 100%;
		}
		:host > div.tabs-align-bottom kol-button-group-wc div,
		:host > div.tabs-align-top kol-button-group-wc div {
			display: flex;
			flex-wrap: wrap;
		}
		:host kol-button-group-wc button {
			border: none;
		}
	`,"KOL-PAGINATION":L`
		:host {
			display: grid;
			gap: 1rem;
		}
		:host .navigation-list {
			display: inline-flex;
			flex-wrap: wrap;
			align-items: center;
			gap: 0.5rem;
		}
		:host .selected button {
			min-width: var(--a11y-min-size);
			min-height: var(--a11y-min-size);
			display: grid;
			place-items: center;
			font-family: var(--font-family);
			cursor: not-allowed;
			font-weight: 700;
			border-radius: 50%;
			border: none;
			font-style: normal;
			text-align: center;
			width: inherit;
			transition-duration: 0.5s;
			transition-property: background-color, color, border-color;
			color: var(--color-primary);
			background-color: var(--color-mute-variant);
		}
		:host > div > span {
			align-self: flex-end;
			padding-bottom: 0.5rem;
			color: var(--color-primary);
		}
	`,"KOL-INPUT-RANGE":L`
		.inputs-wrapper {
			gap: 1rem;
		}
		kol-input {
			gap: 0.25rem;
		}
		kol-input .error {
			order: 1;
		}
		kol-input label {
			order: 2;
		}
		kol-input .input {
			order: 3;
		}
		kol-input .hint {
			order: 4;
			font-size: 0.9rem;
			font-style: italic;
		}
		input::placeholder {
			color: var(--color-subtle);
		}
		.input {
			background-color: var(--color-light);
			border-color: var(--color-subtle);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			padding: 0 0.5rem;
		}
		.input > kol-icon {
			width: 1rem;
		}
		.input.icon-left > kol-icon:first-child {
			margin-right: 0.5rem;
		}
		.input.icon-right > kol-icon:last-child {
			margin-left: 0.5rem;
		}
		.input:is(.icon-left, .icon-right) {
			padding-left: 1rem;
			padding-right: 1rem;
		}
		.input:hover {
			border-color: var(--color-primary);
		}
		input:read-only,
		input:disabled {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		kol-input.error {
			border-left: 3px solid var(--color-danger);
			padding-left: 1rem;
		}
		kol-input.error .input:focus-within {
			outline-color: var(--color-danger) !important;
		}
		kol-input.error kol-alert.error {
			color: var(--color-danger);
			font-weight: 700;
		}
		kol-input.disabled :is(input, label) {
			opacity: 1;
		}
		kol-input.disabled :is(.input) {
			background-color: var(--color-mute);
			border-color: var(--color-mute-variant);
			color: var(--color-text);
		}
	`,"KOL-LINK-BUTTON":L`
		:is(a, button):focus {
			outline: none;
		}
		:is(a, button):focus kol-span-wc {
			outline-color: var(--color-primary-variant);
			outline-offset: 2px;
			outline-style: solid;
			outline-width: calc(var(--border-width) * 2);
			transition: outline-offset 0.2s linear;
		}
		:is(a, button) > kol-span-wc {
			font-weight: 700;
			border-radius: var(--a11y-min-size);
			border-style: solid;
			outline-width: calc(var(--border-width) * 2);
			min-height: var(--a11y-min-size);
			min-width: var(--a11y-min-size);
			padding: 8px 14px;
			text-align: center;
			transition-duration: 0.5s;
			transition-property: background-color, color, border-color;
		}
		:is(a, button):disabled > kol-span-wc {
			cursor: not-allowed;
			opacity: 0.5;
		}
		.primary :is(a, button) > kol-span-wc,
		.primary :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-primary);
			border-color: var(--color-primary);
			color: var(--color-light);
		}
		.secondary :is(a, button) > kol-span-wc,
		.secondary :is(a, button):disabled:hover > kol-span-wc,
		.normal :is(a, button) > kol-span-wc,
		.normal :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-light);
			border-color: var(--color-primary);
			color: var(--color-primary);
		}
		.danger :is(a, button) > kol-span-wc,
		.danger :is(a, button):disabled:hover > kol-span-wc {
			background-color: var(--color-danger);
			border-color: var(--color-danger);
			color: var(--color-light);
		}
		.ghost :is(a, button) > kol-span-wc,
		.ghost :is(a, button):disabled:hover > kol-span-wc {
			border-color: var(--color-light);
			background-color: var(--color-light);
			box-shadow: none;
			color: var(--color-primary);
		} /*-----------*/
		.primary :is(a, button):active > kol-span-wc,
		.primary :is(a, button):hover > kol-span-wc,
		.secondary :is(a, button):active > kol-span-wc,
		.secondary :is(a, button):hover > kol-span-wc,
		.normal :is(a, button):active > kol-span-wc,
		.normal :is(a, button):hover > kol-span-wc,
		.danger :is(a, button):active > kol-span-wc,
		.danger :is(a, button):hover > kol-span-wc,
		.ghost :is(a, button):active > kol-span-wc,
		.ghost :is(a, button):hover > kol-span-wc {
			background-color: var(--color-primary-variant);
			border-color: var(--color-primary-variant);
			box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
			color: var(--color-light);
		}
		.danger :is(a, button):active > kol-span-wc,
		.danger :is(a, button):hover > kol-span-wc {
			background-color: var(--color-danger);
			border-color: var(--color-danger);
		}
		:is(a, button):disabled:hover > kol-span-wc,
		:is(a, button):focus:hover > kol-span-wc {
			box-shadow: none;
		}
		.primary :is(a, button):active > kol-span-wc,
		.secondary :is(a, button):active > kol-span-wc,
		.normal :is(a, button):active > kol-span-wc,
		.danger :is(a, button):active > kol-span-wc,
		.ghost :is(a, button):active > kol-span-wc {
			border-color: var(--color-light);
			box-shadow: none;
			outline: none;
		}
		:is(a, button).hide-label > kol-span-wc {
			padding: 0.8rem;
			width: unset;
		}
		:is(a, button).hide-label > kol-span-wc > span > span {
			display: none;
		}
		:is(a, button).loading > kol-span-wc kol-icon {
			animation: spin 5s infinite linear;
		}
		/** small ghost button */
		.ghost :is(a, button).small > kol-span-wc {
			border: none;
			background-color: transparent;
			box-shadow: none;
		}
		.ghost :is(a, button).small > kol-span-wc > span {
			border-radius: 1.5em;
			border-style: solid;
			border-width: var(--border-width);
			border-color: var(--color-light);
			background-color: var(--color-light);
		}
		.ghost :is(a, button).small:active > kol-span-wc > span,
		.ghost :is(a, button).small:hover > kol-span-wc > span,
		.ghost :is(a, button).small.transparent:active > kol-span-wc > span,
		.ghost :is(a, button).small.transparent:hover > kol-span-wc > span {
			background-color: var(--color-primary-variant);
			border-color: var(--color-primary-variant);
			box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);
			color: var(--color-light);
		} /** :is(a,button) with transparent background */
		:is(a, button).transparent > kol-span-wc > span,
		.ghost :is(a, button).small.transparent > kol-span-wc > span,
		:is(a, button).transparent > kol-span-wc {
			background-color: transparent;
			border-color: transparent;
		}
	`,"KOL-BUTTON-LINK":L`
		:is(a, button) {
			color: var(--color-primary);
			font-style: normal;
			font-weight: 400;
			text-decoration-line: underline;
			font-size: inherit;
		}
		:is(a, button):focus {
			outline: none;
		}
		:is(a, button):focus kol-span-wc {
			border-radius: var(--border-radius);
			outline: calc(var(--border-width) * 2) solid;
		}
		:is(a, button):hover {
			text-decoration-thickness: 0.25em;
		}
		:is(a, button):visited {
			color: var(--visited);
		}
		.hidden {
			display: none;
			visibility: hidden;
		}
		.skip {
			left: -99999px;
			overflow: hidden;
			position: absolute;
			z-index: 9999999;
		}
		.skip:focus {
			background: white;
			left: unset;
			position: unset;
		}
	`,"KOL-ABBR":L`
		abbr {
			border-bottom: dashed var(--color-text) 1px;
			text-decoration: none !important;
		}
	`,"KOL-BREADCRUMB":L`
		li:has(:is(kol-icon + kol-link, kol-icon + span)) kol-icon {
			font-size: 0.75rem;
			color: var(--color-subtle);
		}
		kol-link::part(icon) {
			font-size: 1.25rem;
		}
		ul li > :is(span, kol-link) {
			line-height: 1.25rem;
			height: 20px;
		}
		ul li:last-child > span {
			color: var(--color-subtle);
		}
	`,"KOL-MODAL":L`
		:host .overlay .modal {
			max-height: calc(100% - 32px);
		}
	`,"KOL-ICON":L`
		:host {
			width: 1em;
			height: 1em;
		}
		:host > i {
			width: 1em;
			height: 1em;
		}
	`,"KOL-SKIP-NAV":L`
		kol-link-wc > a > kol-span-wc {
			border-radius: var(--a11y-min-size);
			border-style: solid;
			border-width: var(--border-width);
			gap: calc(var(--spacing) * 2);
			line-height: 1rem;
			padding: 8px 14px;
			background-color: var(--color-primary-variant);
			border-color: var(--color-primary-variant);
			color: var(--color-light);
			cursor: pointer;
		}
		:host {
			--border-color: var(--color-neutral);
			--border-radius: 0.25rem;
			--box-shadow: rgba(0, 0, 0, 0.12) 0 12px 12px -4px, rgba(0, 0, 0, 0.04) 0 4px 4px -4px;
			--color-blau: #264f8e;
			--color-blau-dark: #08335e;
			--color-blau-light: #326cae;
			--color-akzent: #ef9e48;
			--color-akzent-dark: #da793c;
			--color-akzent-light: #f5ba6c;
			--color-neutral: #e3e3e3;
			--color-neutral-dark: #646464;
			--color-neutral-dark-correct: #333333;
			--color-neutral-light: #f7f7f7;
			--color-rot: #ce3033;
			--color-gelb: #f6cd35;
			--color-gruen: #008549;
			--color-grau-100: hsl(0 0% 0%);
			--color-grau-90: hsl(0 0% 10%);
			--color-grau-80: hsl(0 0% 20%);
			--color-grau-70: hsl(0 0% 30%);
			--color-grau-60: hsl(0 0% 40%);
			--color-grau-50: hsl(0 0% 50%);
			--color-grau-40: hsl(0 0% 60%);
			--color-grau-30: hsl(0 0% 70%);
			--color-grau-20: hsl(0 0% 80%);
			--color-grau-10: hsl(0 0% 90%);
			--color-grau-0: hsl(0 0% 100%);
			--gap: 0.25rem;
			--spacing: 0.25rem;
			--font-family: Roboto, Kreon, Georgia, Times New Roman, sans-serif;
			--font-size: 16px;
			--font-weight-bold: 700;
			--line-height-bold: 1.2em; /* em! */
			--line-height-regular: 1.5em; /* em! */
		}
		*[tabindex]:focus,
		a:focus,
		button:focus,
		summary:focus,
		kol-input:not(.checkbox, .radio) .input:focus-within,
		kol-input:is(.checkbox, .radio) input:focus {
			outline-color: var(--color-blau-dark);
			outline-offset: 0.125rem;
			outline-style: solid;
			outline-width: 0.125rem;
			transition: outline-offset 0.25s linear;
			border-radius: var(--border-radius);
		}
		*:not(i) {
			font-family: var(--font-family);
		}
		a,
		button {
			font-size: var(--font-size);
			outline: none;
		}
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-weight: var(--font-weight-bold);
			line-height: var(--line-height-heading);
			margin: 0;
			padding: 0;
		}
		p {
			font-weight: var(--font-weight);
		}
		kol-span-wc,
		kol-span-wc > span {
			gap: 0.5em;
		}
		.required label span::after,
		.required legend span::after {
			color: var(--color-red);
			padding-left: 0.25em;
		}
		kol-tooltip-wc .tooltip-area {
			background-color: #f2f2f2;
		}
		kol-tooltip-wc .tooltip-arrow {
			background-color: #626262;
		}
		kol-tooltip-wc .tooltip-content {
			padding: 0.25rem 0.5rem;
			font-size: 0.875rem;
			line-height: 1.25rem;
			border-radius: 2px;
			border: 1px solid #626262;
		}
	`,"KOL-BADGE":O`
		:host {
			display: inline-block;
		}
		:host > span {
			border-radius: 0.3125rem;
			display: inline-flex;
		}
		:host > span kol-span-wc {
			padding: 0.25rem 0.5rem;
		}
		:host > span > kol-span-wc {
			align-items: center;
			font-style: normal;
			gap: 0.5rem;
		}
		:host > span > kol-span-wc > span {
			display: flex;
			gap: 0.25rem;
		}
		:host button {
			border-radius: 0 var(--spacing) var(--spacing) 0;
		}
	`,"KOL-HEADING":O`
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-weight: var(--font-weight-bold);
			margin: 0;
			padding: 1rem 0;
			text-align: left;
		}
		h1 {
			font-size: 2.5rem;
			line-height: 1.2;
			padding: 0 0 1rem 0;
		}
		h2 {
			font-size: 2rem;
			line-height: 1.25;
		}
		h3 {
			font-size: 1.75rem;
			line-height: 1.29;
		}
		h4 {
			font-size: 1.5rem;
			line-height: 1.33;
		}
		h5 {
			font-size: 1.25rem;
			line-height: 1.4;
		}
		h6 {
			font-size: 1rem;
			line-height: 1.5;
		}
	`,"KOL-LINK":O`
		:is(a, button) {
			align-items: baseline;
			color: var(--color-blau);
			gap: 0.25em;
			text-decoration-line: none;
		}
		a:active,
		a:focus,
		a:hover,
		button:active,
		button:focus,
		button:hover {
			color: var(--color-blau-dark);
			outline-width: 0;
			text-decoration-line: underline;
			text-decoration-thickness: 0.1rem !important;
		}
		:is(a, button) > kol-span-wc {
			order: 1;
			gap: 0.25em;
		}
		:is(a, button) > kol-span-wc > span {
			align-items: baseline;
			gap: 0.25em;
		}
		.hidden {
			display: none;
			visibility: hidden;
		}
		.skip {
			left: -99999px;
			overflow: hidden;
			position: absolute;
			z-index: 9999999;
			line-height: 1em;
		}
		.skip:focus {
			background: white;
			left: unset;
			position: unset;
		}
	`,"KOL-BUTTON-LINK":O`
		:is(a, button) {
			align-items: baseline;
			color: var(--color-blau);
			gap: 0.25em;
			text-decoration-line: none;
		}
		a:active,
		a:focus,
		a:hover,
		button:active,
		button:focus,
		button:hover {
			color: var(--color-blau-dark);
			outline-width: 0;
			text-decoration-line: underline;
			text-decoration-thickness: 0.1rem !important;
		}
		:is(a, button) > kol-span-wc {
			order: 1;
			gap: 0.25em;
		}
		:is(a, button) > kol-span-wc > span {
			align-items: baseline;
			gap: 0.25em;
		}
		.hidden {
			display: none;
			visibility: hidden;
		}
		.skip {
			left: -99999px;
			overflow: hidden;
			position: absolute;
			z-index: 9999999;
			line-height: 1em;
		}
		.skip:focus {
			background: white;
			left: unset;
			position: unset;
		}
	`,"KOL-SPIN":O`
		.spin {
			display: inline-block;
			height: 1rem;
			position: relative;
			width: 3rem;
		}
		.spin span {
			animation-timing-function: cubic-bezier(0, 1, 1, 0);
			border: 0.1rem solid rgb(255, 255, 255);
			border-radius: 50%;
			height: 0.8rem;
			width: 0.8rem;
			top: 0.1rem;
			position: absolute;
		}
		.spin span:nth-child(1) {
			background-color: #fc0;
			z-index: 0;
			animation: 2s ease 0s infinite normal none running spin1;
			left: 0.1rem;
		}
		.spin span:nth-child(2) {
			background-color: #f00;
			z-index: 1;
			animation: 2s ease 0s infinite normal none running spin2;
			left: 0.1rem;
		}
		.spin span:nth-child(3) {
			background-color: #000;
			z-index: 1;
			animation: 2s ease 0s infinite normal none running spin2;
			left: 1.1rem;
		}
		.spin span:nth-child(4) {
			background-color: #666;
			z-index: 0;
			animation: 2s ease 0s infinite normal none running spin3;
			left: 2.1rem;
		}
		@keyframes spin1 {
			0% {
				transform: scale(0);
			}
			100% {
				transform: scale(1);
			}
		}
		@keyframes spin2 {
			0% {
				transform: translate(0px, 0px);
			}
			100% {
				transform: translate(1rem, 0px);
			}
		}
		@keyframes spin3 {
			0% {
				transform: scale(1);
			}
			100% {
				transform: scale(0);
			}
		}
	`,"KOL-TABLE":O`
		caption {
			caption-side: TOP;
			font-size: 1.1rem; /* 1.75rem */ /* line-height: 3rem; */
			font-weight: var(--font-weight-bold);
			margin-bottom: 0.25rem;
			padding: 0.75rem;
			text-align: left;
		}
		table {
			border-spacing: 0;
			border-color: var(--color-neutral);
			border-style: solid;
			border-width: 0;
			border-top-width: 1px;
		}
		th {
			background-color: var(--color-neutral);
		}
		td,
		th {
			color: var(--color-neutral-dark-correct);
			border-color: var(--color-neutral);
			border-style: solid;
			border-width: 0;
			border-bottom-width: 1px;
			padding: 0.5rem;
		}
		th[data-sort] kol-button::part(icon)::before {
			font-family: 'FontAwesome';
			color: var(--color-neutral-dark);
		}
		th[data-sort='sort-NOS'] kol-button::part(icon)::before,
		th[data-sort='sort-undefined'] kol-button::part(icon)::before {
			content: '\\f0dc';
		}
		th[data-sort='sort-ASC'] kol-button::part(icon)::before {
			content: '\\f0de';
		}
		th[data-sort='sort-DESC'] kol-button::part(icon)::before {
			content: '\\f0dd';
		}
	`,"KOL-ACCORDION":O`
		:host > div {
			border-color: var(--border-color);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 1px;
		}
		:host > div > kol-heading-wc > * {
			display: grid;
			margin: -1px;
		}
		:host > div > kol-heading-wc button > kol-span-wc {
			background-color: var(--color-neutral-light);
			border-color: var(--border-color);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			color: var(--color-blau);
			font-weight: var(--font-weight-bold);
			text-align: left;
			padding: 1.5rem;
		}
		:host > div > kol-heading-wc button:hover > kol-span-wc {
			border-color: var(--color-blau-dark);
		}
		:host > div > kol-heading-wc button > kol-span-wc > span {
			gap: 0.5em;
		}
		.content,
		[part*='content'] {
			padding: 1.5rem 1.5rem 2rem 1.5rem;
		}
		:host > div > kol-heading-wc button kol-icon::part(icon) {
			font-family: 'Font Awesome 6 Free';
			font-weight: 900;
		}
		:host > div.open > kol-heading-wc button kol-icon::part(icon)::before {
			content: '\\f077';
		}
		:host > div:not(.open) > kol-heading-wc button kol-icon::part(icon)::before {
			content: '\\f078';
		}
	`,"KOL-ALERT":O`
		kol-alert-wc {
			border-width: 2px;
			border-style: solid;
			border-radius: 0.25rem;
			color: var(--color-neutral-dark);
		}
		kol-alert-wc .content {
			font-size: 0.8rem;
		}
		.card {
			display: grid;
			gap: 0.625rem;
			padding: 1.5rem 1.5rem 2rem 1.5rem;
		}
		.card .heading .heading-icon {
			align-items: center;
			display: inline-flex;
			font-size: 2rem;
			margin-right: 1.5rem;
			padding: 0;
		}
		.default {
			border-color: var(--color-neutral-dark);
		}
		.card.default .heading {
			color: var(--color-neutral-dark);
		}
		.info {
			border-color: var(--color-blau-light);
		}
		.card.info .heading {
			color: var(--color-blau-light);
		}
		.warning {
			background-color: var(--color-gelb);
			border-color: var(--color-gelb);
			color: var(--color-neutral-dark-correct);
		}
		.card.warning .heading {
		}
		.error {
			border-color: var(--color-rot);
		}
		.card.error .heading {
			color: var(--color-rot);
		}
		.success {
			border-color: var(--color-gruen);
		}
		.card.success .heading {
			color: var(--color-gruen);
		}
		.card .content {
			line-height: 1.5rem;
			padding-left: 3.5rem;
		}
		.msg {
			border-width: 0;
			display: flex;
			gap: calc(2 * var(--gap));
			padding: var(--gap);
		}
		.msg .heading {
			display: flex;
			gap: var(--spacing);
			flex-grow: 1;
			align-items: center;
		}
		.msg .heading > div {
			display: flex;
			flex-direction: column;
			flex-grow: 1;
		}
		.info .heading kol-icon.heading-icon {
			display: grid;
			place-items: center;
			background-color: var(--color-blau-light);
			border-radius: 100%;
			min-width: 2em;
			min-height: 2em;
		}
		.card.info .heading kol-icon.heading-icon {
			font-size: 1em;
		}
		.msg.info .heading kol-icon.heading-icon {
			font-size: 0.5em;
		}
		.info .heading kol-icon.heading-icon::part(icon) {
			color: white;
		}
		.msg.default {
			color: var(--color-neutral-dark);
		}
		.msg.error {
			color: var(--color-rot);
		}
		.msg.info {
			color: var(--color-blau-light);
		}
		.msg.warning {
			color: var(--color-neutral-dark-correct);
		}
		.msg.success {
			color: var(--color-gruen);
		}
		div > div > kol-heading-wc {
			grid-column: 1 / span 3;
		}
		.close button {
			border-radius: var(--border-radius);
			min-height: 44px;
			min-width: 44px;
			background-color: var(--color-neutral);
			padding: 0.75rem;
			color: var(--color-blau-light);
		}
		.card .close button {
			transform: translateX(1.5rem) translateY(-1.5rem);
		}
		kol-icon::part(icon) {
			font-family: 'Font Awesome 6 Free';
			font-weight: 900;
		}
		.default kol-icon::part(icon)::before {
			content: '\\f05a';
		}
		.error kol-icon::part(icon)::before {
			content: '\\f06a';
		}
		.info kol-icon::part(icon)::before {
			content: '\\f0eb';
		}
		.success kol-icon::part(icon)::before {
			content: '\\f058';
		}
		.warning kol-icon::part(icon)::before {
			content: '\\f071';
		}
		.close button kol-icon::part(icon)::before {
			content: '\\f00d';
		}
	`,"KOL-CARD":O`
		:host > div {
			border-color: var(--border-color);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 1px;
			background: #fff;
		}
		:host > div .header,
		.content,
		.footer {
			padding: 1.5rem;
		}
	`,"KOL-BUTTON":O`
		:host > kol-button-wc > button {
			border-radius: var(--border-radius);
		}

		:host > kol-button-wc > button > kol-span-wc,
		:host > kol-link-wc > a > kol-span-wc {
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			gap: 0.5rem;
			line-height: 1rem;
		}
		:host > kol-button-wc > button > kol-span-wc:not(.hide-label),
		:host > kol-link-wc > a > kol-span-wc:not(.hide-label) {
			padding: 0.75rem 1rem;
		}
		:host > kol-button-wc > button > kol-span-wc.hide-label,
		:host > kol-link-wc > a > kol-span-wc.hide-label {
			padding: 0.75rem;
		}
		:host > kol-button-wc > button > kol-span-wc span,
		:host > kol-link-wc > a > kol-span-wc span {
			gap: 0.5rem;
		}
		:host > kol-button-wc.primary > button > kol-span-wc,
		:host > kol-link-wc.primary > a > kol-span-wc {
			background-color: var(--color-akzent);
			border-color: var(--color-akzent);
			color: var(--color-neutral-dark-correct);
		}
		:host > kol-button-wc.primary > button:not(:disabled):focus > kol-span-wc,
		:host > kol-button-wc.primary > button:not(:disabled):hover > kol-span-wc,
		:host > kol-link-wc.primary > a:focus > kol-span-wc,
		:host > kol-link-wc.primary > a:hover > kol-span-wc {
			background-color: var(--color-akzent-dark);
		}
		:host > kol-button-wc.secondary > button > kol-span-wc,
		:host > kol-link-wc.secondary > a > kol-span-wc {
			background-color: white;
			border-color: var(--color-blau);
			color: var(--color-blau);
		}
		:host > kol-button-wc.secondary > button:not(:disabled):focus > kol-span-wc,
		:host > kol-button-wc.secondary > button:not(:disabled):hover > kol-span-wc,
		:host > kol-link-wc.secondary > a:focus > kol-span-wc,
		:host > kol-link-wc.secondary > a:hover > kol-span-wc {
			border-color: var(--color-blau-dark);
			color: var(--color-blau-dark);
		}
		:host > kol-button-wc.normal > button > kol-span-wc,
		:host > kol-link-wc.normal > a > kol-span-wc {
			background-color: var(--color-blau);
			border-color: var(--color-blau);
			color: white;
		}
		:host > kol-button-wc.normal > button:not(:disabled):focus > kol-span-wc,
		:host > kol-button-wc.normal > button:not(:disabled):hover > kol-span-wc,
		:host > kol-link-wc.normal > a:focus > kol-span-wc,
		:host > kol-link-wc.normal > a:hover > kol-span-wc {
			background-color: var(--color-blau-dark);
		}
		:host > kol-button-wc.danger > button > kol-span-wc,
		:host > kol-link-wc.danger > a > kol-span-wc {
			background-color: var(--color-rot);
			border-color: var(--color-rot);
			color: white;
		}
		:host > kol-button-wc.danger > button:not(:disabled):focus > kol-span-wc,
		:host > kol-button-wc.danger > button:not(:disabled):hover > kol-span-wc,
		:host > kol-link-wc.danger > a:focus > kol-span-wc,
		:host > kol-link-wc.danger > a:hover > kol-span-wc {
			background-color: var(--color-rot);
		}
		:host > kol-button-wc.ghost > button > kol-span-wc,
		:host > kol-link-wc.ghost > a > kol-span-wc {
			background-color: transparent;
			border-color: transparent;
			color: var(--color-blau);
		}
		:host > kol-button-wc.ghost > button:not(:disabled):focus > kol-span-wc,
		:host > kol-button-wc.ghost > button:not(:disabled):hover > kol-span-wc,
		:host > kol-link-wc.ghost > a:focus > kol-span-wc,
		:host > kol-link-wc.ghost > a:hover > kol-span-wc {
			color: var(--color-blau-dark);
		}
		:host > kol-button-wc > button:not(:disabled):hover,
		:host > kol-link-wc > a:hover {
			outline-color: var(--color-blau-dark);
			outline-offset: 0.125rem;
			outline-style: solid;
			outline-width: 0.125rem;
			transition: outline-offset 0.2s linear;
		}
		a:focus,
		button:not(:disabled):focus {
			cursor: pointer;
			outline-color: var(--color-blau-dark);
			outline-offset: 0.125rem;
			outline-style: solid;
			outline-width: 0.125rem;
			transition: outline-offset 0.2s linear;
		}
	`,"KOL-LINK-BUTTON":O`
		:host > kol-button-wc > button > kol-span-wc,
		:host > kol-link-wc > a > kol-span-wc {
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			gap: 0.5rem;
			line-height: 1rem;
		}
		:host > kol-link-wc > a {
			border-radius: var(--border-radius);
		}
		:host > kol-button-wc > button > kol-span-wc:not(.hide-label),
		:host > kol-link-wc > a > kol-span-wc:not(.hide-label) {
			padding: 0.75rem 1rem;
		}
		:host > kol-button-wc > button > kol-span-wc.hide-label,
		:host > kol-link-wc > a > kol-span-wc.hide-label {
			padding: 0.75rem;
		}
		:host > kol-button-wc > button > kol-span-wc span,
		:host > kol-link-wc > a > kol-span-wc span {
			gap: 0.5rem;
		}
		:host > kol-button-wc.primary > button > kol-span-wc,
		:host > kol-link-wc.primary > a > kol-span-wc {
			background-color: var(--color-akzent);
			border-color: var(--color-akzent);
			color: var(--color-neutral-dark-correct);
		}
		:host > kol-button-wc.primary > button:not(:disabled):focus > kol-span-wc,
		:host > kol-button-wc.primary > button:not(:disabled):hover > kol-span-wc,
		:host > kol-link-wc.primary > a:focus > kol-span-wc,
		:host > kol-link-wc.primary > a:hover > kol-span-wc {
			background-color: var(--color-akzent-dark);
		}
		:host > kol-button-wc.secondary > button > kol-span-wc,
		:host > kol-link-wc.secondary > a > kol-span-wc {
			background-color: white;
			border-color: var(--color-blau);
			color: var(--color-blau);
		}
		:host > kol-button-wc.secondary > button:not(:disabled):focus > kol-span-wc,
		:host > kol-button-wc.secondary > button:not(:disabled):hover > kol-span-wc,
		:host > kol-link-wc.secondary > a:focus > kol-span-wc,
		:host > kol-link-wc.secondary > a:hover > kol-span-wc {
			border-color: var(--color-blau-dark);
			color: var(--color-blau-dark);
		}
		:host > kol-button-wc.normal > button > kol-span-wc,
		:host > kol-link-wc.normal > a > kol-span-wc {
			background-color: var(--color-blau);
			border-color: var(--color-blau);
			color: white;
		}
		:host > kol-button-wc.normal > button:not(:disabled):focus > kol-span-wc,
		:host > kol-button-wc.normal > button:not(:disabled):hover > kol-span-wc,
		:host > kol-link-wc.normal > a:focus > kol-span-wc,
		:host > kol-link-wc.normal > a:hover > kol-span-wc {
			background-color: var(--color-blau-dark);
		}
		:host > kol-button-wc.danger > button > kol-span-wc,
		:host > kol-link-wc.danger > a > kol-span-wc {
			background-color: var(--color-rot);
			border-color: var(--color-rot);
			color: white;
		}
		:host > kol-button-wc.danger > button:not(:disabled):focus > kol-span-wc,
		:host > kol-button-wc.danger > button:not(:disabled):hover > kol-span-wc,
		:host > kol-link-wc.danger > a:focus > kol-span-wc,
		:host > kol-link-wc.danger > a:hover > kol-span-wc {
			background-color: var(--color-rot);
		}
		:host > kol-button-wc.ghost > button > kol-span-wc,
		:host > kol-link-wc.ghost > a > kol-span-wc {
			background-color: transparent;
			border-color: transparent;
			color: var(--color-blau);
		}
		:host > kol-button-wc.ghost > button:not(:disabled):focus > kol-span-wc,
		:host > kol-button-wc.ghost > button:not(:disabled):hover > kol-span-wc,
		:host > kol-link-wc.ghost > a:focus > kol-span-wc,
		:host > kol-link-wc.ghost > a:hover > kol-span-wc {
			color: var(--color-blau-dark);
		}
		:host > kol-button-wc > button:not(:disabled):hover,
		:host > kol-link-wc > a:hover {
			outline-color: var(--color-blau-dark);
			outline-offset: 0.125rem;
			outline-style: solid;
			outline-width: 0.125rem;
			transition: outline-offset 0.2s linear;
		}
		a:focus,
		button:not(:disabled):focus {
			cursor: pointer;
			outline-color: var(--color-blau-dark);
			outline-offset: 0.125rem;
			outline-style: solid;
			outline-width: 0.125rem;
			transition: outline-offset 0.2s linear;
		}
	`,"KOL-BUTTON-GROUP":O`
		:host > kol-button-group-wc {
			background-color: var(--color-neutral);
			border-radius: var(--border-radius);
			gap: var(--gap);
		}
	`,"KOL-PAGINATION":O`
		:host {
			display: grid;
			gap: 1rem;
		}
		:host .navigation-list {
			display: inline-flex;
			flex-wrap: wrap;
			align-items: center;
			gap: 0.5em;
		}
		:host .selected button > kol-span-wc {
			background-color: var(--color-akzent);
			border-color: var(--color-akzent-dark);
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			color: white;
			cursor: not-allowed;
			font-weight: 700;
			line-height: 1rem;
			padding: 0.75rem 1rem;
			text-decoration: underline;
		}
	`,"KOL-TOAST-CONTAINER":O`
		:host {
			top: 1rem;
			width: 750px;
			left: 50%;
			transform: translateX(-50%);
		}
	`,"KOL-TOAST":O`
		.toast {
			background: #fff;
			margin-top: 1rem;
		}
	`,"KOL-PROGRESS":O`
		svg line:first-child,
		svg circle:first-child {
			stroke: var(--color-neutral);
		}
		svg line:last-child,
		svg circle:last-child {
			stroke: var(--color-blau);
		}
	`,"KOL-INPUT-CHECKBOX":O`
		:host {
			--spacing: 0.25rem;
		}
		input {
			border-color: var(--color-neutral-dark);
			border-width: 2px;
			border-style: solid;
		}
		label {
			padding-left: 0.75rem;
		}
		kol-input:not(.disabled):hover label,
		kol-input:not(.disabled):focus-within label {
			text-decoration: underline;
		}
		kol-input:not(.disabled):hover input {
			border-color: var(--color-neutral-dark-correct);
		}
		:host kol-input:not(.disabled) :is(.input, label) {
			cursor: pointer;
		}
		:host kol-input.disabled :is(.input, label),
		:host kol-input.disabled input[type='checkbox']::before {
			cursor: not-allowed;
		}
		.required label > span::after {
			content: '*';
			padding-left: 0.125em;
		} /* NEU */
		kol-input {
			display: grid;
			align-items: center;
			justify-items: left;
			width: 100%;
		}
		kol-input.default {
			grid-template-columns: calc(6 * var(--spacing)) auto;
		}
		kol-input.switch {
			grid-template-columns: calc(13 * var(--spacing)) auto;
		}
		.button {
			grid-template-areas:
				'input label'
				'hint hint'
				'error error';
			gap: 0.5rem 0;
		}
		kol-input > div.input {
			display: inline-flex;
			order: 1;
		}
		kol-input > div.input input {
			margin: 0px;
		}
		kol-input > label {
			order: 2;
		}
		kol-input > kol-alert.error {
			order: 3;
			padding-top: 0.25em;
			grid-column: span 2 / auto;
		} /* CHECKBOX */
		input[type='checkbox'] {
			appearance: none;
			background-color: white;
			transition: 0.5s;
		}
		input[type='checkbox']:before {
			content: '';
		}
		input[type='checkbox']:checked,
		input[type='checkbox']:indeterminate {
			background-color: var(--color-blau);
			border-color: var(--color-blau);
		}
		.default input[type='checkbox'] {
			border-radius: 0.25em;
			height: calc(6 * var(--spacing));
			min-width: calc(6 * var(--spacing));
			width: calc(6 * var(--spacing));
		}
		.default input[type='checkbox']:before {
			border-radius: 0.25em;
			background-color: transparent;
			display: block;
			height: calc(6 * var(--spacing));
			position: relative;
			width: calc(6 * var(--spacing));
		}
		.default input[type='checkbox']:checked:before {
			border-right-width: 3px;
			border-bottom-width: 3px;
			left: calc(1.5 * var(--spacing) - 2px);
			top: calc(2.85 * var(--spacing) - 2px);
			transform: rotate(40deg) translate(-50%, -50%);
			background-color: transparent;
			border-width: 0px 3px 3px 0px;
			border-color: white;
			border-radius: 1px;
			border-style: solid;
			height: calc(3 * var(--spacing));
			width: calc(1.5 * var(--spacing));
		}
		.default input[type='checkbox']:indeterminate {
			background-color: var(--color-blau);
		}
		.default input[type='checkbox']:indeterminate:before {
			background-color: white;
			height: 0.25rem;
			top: 0.5rem;
			left: 0.25rem;
			width: 0.75rem;
		}
		.switch input[type='checkbox'] {
			min-width: 3.2em;
			width: 3.2em;
			height: 1.7em;
			border-radius: 0.25em;
			display: inline-block;
			position: relative;
		}
		.switch input[type='checkbox']:before {
			-webkit-transition: 0.5s;
			-moz-transition: 0.5s;
			-ms-transition: 0.5s;
			transition: 0.5;
			width: 1.2em;
			height: 1.2em;
			left: calc(0.25em - 2px);
			top: calc(0.25em - 2px);
			border-radius: 0.25em;
			background-color: black;
			position: absolute;
		}
		.switch input[type='checkbox']:checked:before {
			-webkit-transform: translateX(1.5em);
			-moz-transform: translateX(1.5em);
			-ms-transform: translateX(1.5em);
			transform: translateX(1.5em);
			background-color: white;
		}
		.switch input[type='checkbox']:indeterminate {
			background-color: var(--color-blau);
		}
		.switch input[type='checkbox']:indeterminate:before {
			-webkit-transform: translateX(0.75em);
			-moz-transform: translateX(0.75em);
			-ms-transform: translateX(0.75em);
			transform: translateX(0.75em);
			background-color: white;
		}
		.switch:has(input:not(:checked, :indeterminate)) .icon {
			color: #fff;
		}
		.disabled {
			opacity: 0.33;
		}
	`,"KOL-INPUT-RADIO":O`
		/* ALL INPUT, SELECT, TEXTAREA */
		:host {
			--spacing: 0.25rem;
		}
		legend {
			font-weight: var(--font-weight-bold);
			margin-bottom: 0.5rem;
		}
		input {
			border-color: var(--color-neutral-dark);
			border-width: 2px;
			border-style: solid;
		}
		kol-input:has(input:disabled) input,
		kol-input:has(input:disabled) label {
			cursor: not-allowed !important;
			opacity: 0.5;
		}
		kol-input:hover:has(input:not(:disabled)) label,
		kol-input:focus-within {
			text-decoration: underline;
		}
		.required legend > span::after {
			content: '*';
			padding-left: 0.125em;
		}
		input {
			width: 100%;
			border-color: var(--color-neutral-dark);
			border-width: 2px;
			border-style: solid;
		}
		input:hover {
			border-color: var(--color-blau);
		}
		kol-alert {
			display: block;
			width: 100%;
			margin-bottom: 0.4em;
		} /* RADIO */
		fieldset {
			border: 0;
			margin: 0;
			padding: 1.5rem;
			display: flex;
			flex-direction: column;
		}
		fieldset div.input {
			display: flex;
		}
		fieldset div.input > div {
			margin: auto 0;
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 0.75rem;
		}
		fieldset div input[type='radio'] {
			appearance: none;
			transition: 0.5s;
			border-radius: 100%;
			height: calc(6 * var(--spacing));
			min-width: calc(6 * var(--spacing));
			width: calc(6 * var(--spacing));
			border-color: var(--color-grau-30);
		}
		kol-input:not(.disabled):hover input[type='radio'] {
			border-color: var(--color-neutral-dark);
		}
		fieldset div input[type='radio']:checked:before {
			box-shadow: 0 0 0.1rem black;
			background-color: var(--color-blau);
		}
		fieldset #error {
			margin: 0.4em 0;
			order: 3;
		}
		fieldset legend {
			order: 1;
			display: contents;
		}
		fieldset kol-input {
			order: 2;
		}
		.radio-input-wrapper {
			display: flex;
			align-items: center;
		}
		.radio-label {
			padding-left: 0.5rem;
		}
		.disabled {
			opacity: 0.33;
		}
		fieldset.horizontal {
			flex-direction: row;
			flex-wrap: wrap;
			gap: 0.5rem 1rem;
		}
		fieldset.horizontal legend {
			display: inline-block;
			margin-bottom: 0.25em;
		}
	`,"KOL-INPUT-COLOR":O`
		kol-input {
			gap: var(--gap);
		}
		kol-input .input {
			border-color: var(--color-grau-30);
			border-width: 2px;
			border-style: solid;
			padding: 0px 0.75em;
			gap: var(--gap);
			overflow: hidden;
		}
		.error .input {
			border-color: var(--color-rot);
		}
		kol-input:not(.disabled) .input:focus-within,
		kol-input:not(.disabled) .input:hover {
			border-color: var(--color-grau-60);
		}
		kol-input:not(.select, .textarea) .input {
			height: calc(var(--a11y-min-size) - 4px);
		}
		kol-input:not(.range) .input :is(input, select, textarea) {
			background-color: white;
			border: 0;
		}
		kol-input .input input[type='file'] {
			padding-top: calc(0.5em + 2px);
		}
		kol-input > label {
			font-weight: var(--font-weight-bold);
			order: 1;
			margin-bottom: 0.25rem;
		}
		kol-input > label > span {
			color: var(--default-letter);
		}
		kol-input > div.input {
			border-radius: 0.25rem;
			order: 2;
		}
		kol-input > span.hint {
			color: var(--color-grau-60);
			font-style: italic;
			order: 4;
			font-size: 0.8rem;
		}
		kol-input > kol-alert.error {
			order: 3;
		}
	`,"KOL-INPUT-FILE":O`
		kol-input {
			gap: var(--gap);
		}
		kol-input .input {
			border-color: var(--color-grau-30);
			border-width: 2px;
			border-style: solid;
			padding: 0px 0.75em;
			gap: var(--gap);
			overflow: hidden;
		}
		.error .input {
			border-color: var(--color-rot);
		}
		kol-input:not(.disabled) .input:focus-within,
		kol-input:not(.disabled) .input:hover {
			border-color: var(--color-grau-60);
		}
		kol-input:not(.select, .textarea) .input {
			height: calc(var(--a11y-min-size) - 4px);
		}
		kol-input:not(.range) .input :is(input, select, textarea) {
			background-color: white;
			border: 0;
		}
		kol-input .input input[type='file'] {
			padding-top: calc(0.5em + 2px);
		}
		kol-input > label {
			font-weight: var(--font-weight-bold);
			order: 1;
			margin-bottom: 0.25rem;
		}
		kol-input > label > span {
			color: var(--default-letter);
		}
		kol-input > div.input {
			border-radius: 0.25rem;
			order: 2;
		}
		kol-input > span.hint {
			color: var(--color-grau-60);
			font-style: italic;
			order: 4;
			font-size: 0.8rem;
		}
		kol-input > kol-alert.error {
			order: 3;
		}
	`,"KOL-INPUT-EMAIL":O`
		kol-input {
			gap: var(--gap);
		}
		kol-input .input {
			border-color: var(--color-grau-30);
			border-width: 2px;
			border-style: solid;
			padding: 0px 0.75em;
			gap: var(--gap);
			overflow: hidden;
		}
		.error .input {
			border-color: var(--color-rot);
		}
		kol-input:not(.disabled) .input:focus-within,
		kol-input:not(.disabled) .input:hover {
			border-color: var(--color-grau-60);
		}
		kol-input:not(.select, .textarea) .input {
			height: calc(var(--a11y-min-size) - 4px);
		}
		kol-input:not(.range) .input :is(input, select, textarea) {
			background-color: white;
			border: 0;
		}
		kol-input .input input[type='file'] {
			padding-top: calc(0.5em + 2px);
		}
		kol-input > label {
			font-weight: var(--font-weight-bold);
			order: 1;
			margin-bottom: 0.25rem;
		}
		kol-input > label > span {
			color: var(--default-letter);
		}
		kol-input > div.input {
			border-radius: 0.25rem;
			order: 2;
		}
		kol-input > span.hint {
			color: var(--color-grau-60);
			font-style: italic;
			order: 4;
			font-size: 0.8rem;
		}
		kol-input > kol-alert.error {
			order: 3;
		}
	`,"KOL-INPUT-NUMBER":O`
		kol-input {
			gap: var(--gap);
		}
		kol-input .input {
			border-color: var(--color-grau-30);
			border-width: 2px;
			border-style: solid;
			padding: 0px 0.75em;
			gap: var(--gap);
			overflow: hidden;
		}
		.error .input {
			border-color: var(--color-rot);
		}
		kol-input:not(.disabled) .input:focus-within,
		kol-input:not(.disabled) .input:hover {
			border-color: var(--color-grau-60);
		}
		kol-input:not(.select, .textarea) .input {
			height: calc(var(--a11y-min-size) - 4px);
		}
		kol-input:not(.range) .input :is(input, select, textarea) {
			background-color: white;
			border: 0;
		}
		kol-input .input input[type='file'] {
			padding-top: calc(0.5em + 2px);
		}
		kol-input > label {
			font-weight: var(--font-weight-bold);
			order: 1;
			margin-bottom: 0.25rem;
		}
		kol-input > label > span {
			color: var(--default-letter);
		}
		kol-input > div.input {
			border-radius: 0.25rem;
			order: 2;
		}
		kol-input > span.hint {
			color: var(--color-grau-60);
			font-style: italic;
			order: 4;
			font-size: 0.8rem;
		}
		kol-input > kol-alert.error {
			order: 3;
		}
	`,"KOL-INPUT-DATE":O`
		kol-input {
			gap: var(--gap);
		}
		kol-input .input {
			border-color: var(--color-grau-30);
			border-width: 2px;
			border-style: solid;
			padding: 0px 0.75em;
			gap: var(--gap);
			overflow: hidden;
		}
		.error .input {
			border-color: var(--color-rot);
		}
		kol-input:not(.disabled) .input:focus-within,
		kol-input:not(.disabled) .input:hover {
			border-color: var(--color-grau-60);
		}
		kol-input:not(.select, .textarea) .input {
			height: calc(var(--a11y-min-size) - 4px);
		}
		kol-input:not(.range) .input :is(input, select, textarea) {
			background-color: white;
			border: 0;
		}
		kol-input .input input[type='file'] {
			padding-top: calc(0.5em + 2px);
		}
		kol-input > label {
			font-weight: var(--font-weight-bold);
			order: 1;
			margin-bottom: 0.25rem;
		}
		kol-input > label > span {
			color: var(--default-letter);
		}
		kol-input > div.input {
			border-radius: 0.25rem;
			order: 2;
		}
		kol-input > span.hint {
			color: var(--color-grau-60);
			font-style: italic;
			order: 4;
			font-size: 0.8rem;
		}
		kol-input > kol-alert.error {
			order: 3;
		}
	`,"KOL-INPUT-TEXT":O`
		kol-input {
			gap: var(--gap);
		}
		kol-input .input {
			border-color: var(--color-grau-30);
			border-width: 2px;
			border-style: solid;
			padding: 0px 0.75em;
			gap: var(--gap);
			overflow: hidden;
		}
		.error .input {
			border-color: var(--color-rot);
		}
		kol-input:not(.disabled) .input:focus-within,
		kol-input:not(.disabled) .input:hover {
			border-color: var(--color-grau-60);
		}
		kol-input:not(.select, .textarea) .input {
			height: calc(var(--a11y-min-size) - 4px);
		}
		kol-input:not(.range) .input :is(input, select, textarea) {
			background-color: white;
			border: 0;
		}
		kol-input .input input[type='file'] {
			padding-top: calc(0.5em + 2px);
		}
		kol-input > label {
			font-weight: var(--font-weight-bold);
			order: 1;
			margin-bottom: 0.25rem;
		}
		kol-input > label > span {
			color: var(--default-letter);
		}
		kol-input > div.input {
			border-radius: 0.25rem;
			order: 2;
		}
		kol-input > span.hint {
			color: var(--color-grau-60);
			font-style: italic;
			order: 4;
			font-size: 0.8rem;
		}
		kol-input > kol-alert.error {
			order: 3;
		}
	`,"KOL-SELECT":O`
		kol-input {
			gap: var(--gap);
		}
		kol-input .input {
			border-color: var(--color-grau-50);
			border-style: solid;
			border-width: 2px;
			gap: var(--gap);
			overflow: hidden;
			padding: 0 0.75em;
		}
		.error .input {
			border-color: var(--color-rot);
		}
		select:not([multiple]) {
			appearance: none;
			background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%2308335e' viewBox='0 0 512 512'%3E%3Cpath d='M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z'/%3E%3C/svg%3E");
			background-position: right center;
			background-repeat: no-repeat;
			background-size: 14px auto;
		}
		kol-input:not(.disabled) .input:focus-within,
		kol-input:not(.disabled) .input:hover {
			border-color: var(--color-neutral-dark-correct);
		}
		kol-input:not(.select, .textarea) .input {
			height: calc(var(--a11y-min-size) - 4px);
		}
		kol-input:not(.range) .input :is(input, select, textarea) {
			background-color: white;
			border: 0;
		}
		kol-input .input input[type='file'] {
			padding-top: calc(0.5em + 2px);
		}
		kol-input > label {
			font-weight: var(--font-weight-bold);
			order: 1;
			margin-bottom: 0.25rem;
		}
		kol-input > label > span {
			color: var(--default-letter);
		}
		kol-input > div.input {
			border-radius: 0.25rem;
			order: 2;
		}
		kol-input > span.hint {
			color: var(--color-grau-60);
			font-style: italic;
			order: 4;
			font-size: 0.8rem;
		}
		kol-input > kol-alert.error {
			order: 3;
		}
	`,"KOL-TEXTAREA":O`
		kol-input {
			gap: var(--gap);
		}
		kol-input .input {
			border-color: var(--color-grau-30);
			border-width: 2px;
			border-style: solid;
			padding: 0px 0.75em;
			gap: var(--gap);
			overflow: hidden;
		}
		.error .input {
			border-color: var(--color-rot);
		}
		kol-input:not(.disabled) .input:focus-within,
		kol-input:not(.disabled) .input:hover {
			border-color: var(--color-grau-60);
		}
		kol-input:not(.select, .textarea) .input {
			height: calc(var(--a11y-min-size) - 4px);
		}
		kol-input:not(.range) .input :is(input, select, textarea) {
			background-color: white;
			border: 0;
		}
		kol-input .input input[type='file'] {
			padding-top: calc(0.5em + 2px);
		}
		kol-input > label {
			font-weight: var(--font-weight-bold);
			order: 1;
			margin-bottom: 0.25rem;
		}
		kol-input > label > span {
			color: var(--default-letter);
		}
		kol-input > div.input {
			border-radius: 0.25rem;
			order: 2;
		}
		kol-input .counter {
			order: 3;
		}
		kol-input > kol-alert.error {
			order: 4;
		}
		kol-input > span.hint {
			color: var(--color-grau-60);
			font-style: italic;
			order: 5;
			font-size: 0.8rem;
		}
	`,"KOL-INDENTED-TEXT":O`
		:host > div {
			background: white;
			border-left: none;
			box-shadow: calc(-1 * var(--gap)) 0px 0px var(--color-blau);
			padding: var(--gap) calc(2 * var(--gap));
			width: 100%;
		}
	`,"KOL-DETAILS":O`
		:host details > kol-indented-text {
			margin: 0.25em 0 0 0.65em;
		}
	`,"KOL-NAV":O`
		:host > div {
			gap: var(--gap);
		}
		.entry kol-span-wc {
			color: black;
		}
		nav {
			background-color: #f2f2f2;
		}
		.expand-button button {
			margin: auto;
			height: 100%;
		}
		:is(a, button):focus {
			outline: none;
		}
		kol-span-wc {
			border-color: transparent;
			border-style: solid;
			border-width: 2px;
			color: var(--color-white);
			font-size: 18px;
			justify-items: start;
			padding: 1rem;
			height: 100%;
		}
		a {
			text-decoration: none;
		}
		:is(kol-button-wc, kol-link-wc):focus-within kol-span-wc {
			border-color: var(--color-white);
		}
		:is(kol-button-wc, kol-link-wc):focus-within kol-span-wc,
		:is(kol-button-wc, kol-link-wc):hover kol-span-wc {
			text-decoration: underline;
		}
		div > .expand-button kol-icon::part(icon)::before {
			content: '\\eab6';
		}
		.expanded > div > .expand-button kol-icon::part(icon)::before {
			content: '\\eab4';
		}
	`,"KOL-TABS":O`
		:host > div {
			display: block;
			width: 100%;
		}
		:host kol-button-group-wc {
			border-radius: 0.25rem 0.25rem 0 0;
			background-color: var(--color-blau-light);
		}
		:host kol-button-group-wc > div {
			display: inline-flex;
		}
		:host kol-button-group-wc > div + div {
			margin-left: 0.25em;
		}
		:host kol-button-group-wc button {
			width: 100%;
		}
		:host > div > div {
			padding: 0.25em;
			border: 1px solid var(--border-color);
			border-radius: 0 0 0.25rem 0.25rem;
		}
		button {
			box-sizing: border-box;
			font-size: inherit;
			line-height: 1.25em;
			cursor: pointer;
			border-width: 2px;
			box-shadow: 0 0 0.25em gray;
			font-family: var(--font-family);
			width: inherit;
			border-radius: var(--border-radius);
			border-style: solid;
			padding: calc(2 * var(--spacing));
			display: grid;
			gap: 0.25em;
			align-items: center;
			justify-content: center;
			text-align: center;
			transition-duration: 0.5s;
			transition-property: background-color, color, border-color;
		}
		kol-button-wc button.selected,
		kol-button-wc[aria-selected='true'] button {
			background-color: white;
			border-bottom-width: 0.25em !important;
			border-bottom-style: solid;
			border-bottom-color: var(--color-akzent) !important;
		}
		button > kol-span-wc span {
			display: flex;
			gap: 0.25em;
			align-items: center;
			justify-content: center;
		}
		button:disabled {
			cursor: not-allowed;
			opacity: 0.5;
		}
		button.primary,
		button.primary:disabled:hover {
			background-color: var(--color-primary);
			border-color: var(--color-primary);
			color: white;
		}
		button.primary:hover,
		button.primary:focus {
			color: var(--color-primary);
		}
		button.secondary,
		button.secondary:disabled:hover {
			background-color: var(--color-secondary);
			border-color: var(--color-secondary);
			color: white;
		}
		button.secondary:hover,
		button.secondary:focus {
			color: var(--color-secondary);
		}
		button.normal,
		button.normal:disabled:hover {
			background-color: var(--color-normal);
			border-color: var(--color-normal);
			color: white;
		}
		button.normal:hover,
		button.normal:focus {
			color: var(--color-normal);
		}
		button.danger,
		button.danger:disabled:hover {
			background-color: var(--color-danger);
			border-color: var(--color-danger);
			color: white;
		}
		button.danger:hover,
		button.danger:focus {
			color: var(--color-danger);
		}
		button.ghost,
		button.ghost:disabled:hover {
			background-color: white;
			border-color: var(--color-ghost);
			color: var(--color-ghost);
		}
		button.ghost:hover,
		button.ghost:focus {
			background-color: var(--color-ghost);
			color: white;
		}
		button:hover,
		button:focus {
			background-color: white;
			box-shadow: 0 0 0.25em black;
		}
		button:active {
			outline: 0 !important;
			box-shadow: none !important;
		}
		.close-button {
			font-size: 25%;
			height: fit-content;
			width: 0;
		}
		.close-button button {
			width: 1rem;
			position: relative;
			height: 1rem;
			left: -4.25em;
			top: 0.25em;
		}
		:host > div {
			display: grid;
		}
		:host > div.tabs-align-left {
			grid-template-columns: auto 1fr;
		}
		:host > div.tabs-align-right {
			grid-template-columns: 1fr auto;
		}
		:host > .tabs-align-left kol-button-group-wc,
		:host > .tabs-align-top kol-button-group-wc {
			order: 0;
		}
		:host > .tabs-align-bottom kol-button-group-wc,
		:host > .tabs-align-right kol-button-group-wc {
			order: 1;
		}
		:host > div.tabs-align-left kol-button-group-wc > div,
		:host > div.tabs-align-left kol-button-group-wc > div > div,
		:host > div.tabs-align-right kol-button-group-wc > div,
		:host > div.tabs-align-right kol-button-group-wc > div > div {
			display: grid;
		}
		:host > div.tabs-align-left kol-button-group-wc > div > div kol-button-wc,
		:host > div.tabs-align-right kol-button-group-wc > div > div kol-button-wc {
			width: 100%;
		}
		:host > div.tabs-align-bottom kol-button-group-wc div,
		:host > div.tabs-align-top kol-button-group-wc div {
			display: flex;
			flex-wrap: wrap;
		}
		:host > div.tabs-align-bottom > kol-button-group-wc {
			border-radius: 0 0 0.25rem 0.25rem;
		}
		:host > div.tabs-align-bottom > div {
			border-radius: 0.25rem 0.25rem 0 0;
		}
		:host > div.tabs-align-top > kol-button-group-wc {
			border-radius: 0.25rem 0.25rem 0 0;
		}
		:host > div.tabs-align-top > div {
			border-radius: 0 0 0.25rem 0.25rem;
		}
		:host > div.tabs-align-left > kol-button-group-wc {
			border-radius: 0.25rem 0 0 0.25rem;
		}
		:host > div.tabs-align-left > div {
			border-radius: 0 0.25rem 0.25rem 0;
		}
		:host > div.tabs-align-right > kol-button-group-wc {
			border-radius: 0 0.25rem 0.25rem 0;
		}
		:host > div.tabs-align-right > div {
			border-radius: 0.25rem 0 0 0.25rem;
		}
	`,"KOL-BREADCRUMB":O`
		ul,
		li {
			gap: 0px;
			place-items: baseline;
		}
		kol-icon {
			text-align: center;
		}
		kol-icon::part(icon):before {
			content: '/';
			text-align: center;
		}
	`,"KOL-INPUT-PASSWORD":O`
		kol-input {
			gap: var(--gap);
		}
		kol-input .input {
			border-color: var(--color-grau-30);
			border-width: 2px;
			border-style: solid;
			padding: 0px 0.75em;
			gap: var(--gap);
			overflow: hidden;
		}
		.error .input {
			border-color: var(--color-rot);
		}
		kol-input:not(.disabled) .input:focus-within,
		kol-input:not(.disabled) .input:hover {
			border-color: var(--color-grau-60);
		}
		kol-input:not(.select, .textarea) .input {
			height: calc(var(--a11y-min-size) - 4px);
		}
		kol-input:not(.range) .input :is(input, select, textarea) {
			background-color: white;
			border: 0;
		}
		kol-input .input input[type='file'] {
			padding-top: calc(0.5em + 2px);
		}
		kol-input > label {
			font-weight: var(--font-weight-bold);
			order: 1;
			margin-bottom: 0.25rem;
		}
		kol-input > label > span {
			color: var(--default-letter);
		}
		kol-input > div.input {
			border-radius: 0.25rem;
			order: 2;
		}
		kol-input > span.hint {
			color: var(--color-grau-60);
			font-style: italic;
			order: 4;
			font-size: 0.8rem;
		}
		kol-input > kol-alert.error {
			order: 3;
		}
	`,"KOL-INPUT-RANGE":O`
		kol-input {
			gap: var(--gap);
		}
		kol-input .input {
			border-color: var(--color-grau-30);
			border-width: 2px;
			border-style: solid;
			padding: 0px 0.75em;
			gap: var(--gap);
			overflow: hidden;
		}
		.error .input {
			border-color: var(--color-rot);
		}
		kol-input:not(.disabled) .input:focus-within,
		kol-input:not(.disabled) .input:hover {
			border-color: var(--color-grau-60);
		}
		kol-input:not(.select, .textarea) .input {
			height: calc(var(--a11y-min-size) - 4px);
		}
		kol-input:not(.range) .input :is(input, select, textarea) {
			background-color: white;
			border: 0;
		}
		kol-input .input input[type='file'] {
			padding-top: calc(0.5em + 2px);
		}
		kol-input > label {
			font-weight: var(--font-weight-bold);
			order: 1;
			margin-bottom: 0.25rem;
		}
		kol-input > label > span {
			color: var(--default-letter);
		}
		kol-input > div.input {
			border-radius: 0.25rem;
			order: 2;
		}
		kol-input > span.hint {
			color: var(--color-grau-60);
			font-style: italic;
			order: 4;
			font-size: 0.8rem;
		}
		kol-input > kol-alert.error {
			order: 3;
		}
		.inputs-wrapper {
			gap: 1em;
		}
	`,"KOL-ICON":O`
		/*! * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) * Copyright 2022 Fonticons, Inc. */
		.fa {
			font-family: var(--fa-style-family, 'Font Awesome 6 Free');
			font-weight: var(--fa-style, 900);
		}
		.fa,
		.fa-brands,
		.fa-duotone,
		.fa-light,
		.fa-regular,
		.fa-solid,
		.fa-thin,
		.fab,
		.fad,
		.fal,
		.far,
		.fas,
		.fat {
			-moz-osx-font-smoothing: grayscale;
			-webkit-font-smoothing: antialiased;
			display: var(--fa-display, inline-block);
			font-style: normal;
			font-variant: normal;
			line-height: 1;
			text-rendering: auto;
		}
		.fa-1x {
			font-size: 1em;
		}
		.fa-2x {
			font-size: 2em;
		}
		.fa-3x {
			font-size: 3em;
		}
		.fa-4x {
			font-size: 4em;
		}
		.fa-5x {
			font-size: 5em;
		}
		.fa-6x {
			font-size: 6em;
		}
		.fa-7x {
			font-size: 7em;
		}
		.fa-8x {
			font-size: 8em;
		}
		.fa-9x {
			font-size: 9em;
		}
		.fa-10x {
			font-size: 10em;
		}
		.fa-2xs {
			font-size: 0.625em;
			line-height: 0.1em;
			vertical-align: 0.225em;
		}
		.fa-xs {
			font-size: 0.75em;
			line-height: 0.08333em;
			vertical-align: 0.125em;
		}
		.fa-sm {
			font-size: 0.875em;
			line-height: 0.07143em;
			vertical-align: 0.05357em;
		}
		.fa-lg {
			font-size: 1.25em;
			line-height: 0.05em;
			vertical-align: -0.075em;
		}
		.fa-xl {
			font-size: 1.5em;
			line-height: 0.04167em;
			vertical-align: -0.125em;
		}
		.fa-2xl {
			font-size: 2em;
			line-height: 0.03125em;
			vertical-align: -0.1875em;
		}
		.fa-fw {
			text-align: center;
			width: 1.25em;
		}
		.fa-ul {
			list-style-type: none;
			margin-left: var(--fa-li-margin, 2.5em);
			padding-left: 0;
		}
		.fa-ul > li {
			position: relative;
		}
		.fa-li {
			left: calc(var(--fa-li-width, 2em) * -1);
			position: absolute;
			text-align: center;
			width: var(--fa-li-width, 2em);
			line-height: inherit;
		}
		.fa-border {
			border-radius: var(--fa-border-radius, 0.1em);
			border: var(--fa-border-width, 0.08em) var(--fa-border-style, solid) var(--fa-border-color, #eee);
			padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
		}
		.fa-pull-left {
			float: left;
			margin-right: var(--fa-pull-margin, 0.3em);
		}
		.fa-pull-right {
			float: right;
			margin-left: var(--fa-pull-margin, 0.3em);
		}
		.fa-beat {
			-webkit-animation-name: fa-beat;
			animation-name: fa-beat;
			-webkit-animation-delay: var(--fa-animation-delay, 0);
			animation-delay: var(--fa-animation-delay, 0);
			-webkit-animation-direction: var(--fa-animation-direction, normal);
			animation-direction: var(--fa-animation-direction, normal);
			-webkit-animation-duration: var(--fa-animation-duration, 1s);
			animation-duration: var(--fa-animation-duration, 1s);
			-webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			-webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
			animation-timing-function: var(--fa-animation-timing, ease-in-out);
		}
		.fa-bounce {
			-webkit-animation-name: fa-bounce;
			animation-name: fa-bounce;
			-webkit-animation-delay: var(--fa-animation-delay, 0);
			animation-delay: var(--fa-animation-delay, 0);
			-webkit-animation-direction: var(--fa-animation-direction, normal);
			animation-direction: var(--fa-animation-direction, normal);
			-webkit-animation-duration: var(--fa-animation-duration, 1s);
			animation-duration: var(--fa-animation-duration, 1s);
			-webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			-webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
			animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
		}
		.fa-fade {
			-webkit-animation-name: fa-fade;
			animation-name: fa-fade;
			-webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			-webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
			animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
		}
		.fa-beat-fade,
		.fa-fade {
			-webkit-animation-delay: var(--fa-animation-delay, 0);
			animation-delay: var(--fa-animation-delay, 0);
			-webkit-animation-direction: var(--fa-animation-direction, normal);
			animation-direction: var(--fa-animation-direction, normal);
			-webkit-animation-duration: var(--fa-animation-duration, 1s);
			animation-duration: var(--fa-animation-duration, 1s);
		}
		.fa-beat-fade {
			-webkit-animation-name: fa-beat-fade;
			animation-name: fa-beat-fade;
			-webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			-webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
			animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
		}
		.fa-flip {
			-webkit-animation-name: fa-flip;
			animation-name: fa-flip;
			-webkit-animation-delay: var(--fa-animation-delay, 0);
			animation-delay: var(--fa-animation-delay, 0);
			-webkit-animation-direction: var(--fa-animation-direction, normal);
			animation-direction: var(--fa-animation-direction, normal);
			-webkit-animation-duration: var(--fa-animation-duration, 1s);
			animation-duration: var(--fa-animation-duration, 1s);
			-webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			-webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
			animation-timing-function: var(--fa-animation-timing, ease-in-out);
		}
		.fa-shake {
			-webkit-animation-name: fa-shake;
			animation-name: fa-shake;
			-webkit-animation-duration: var(--fa-animation-duration, 1s);
			animation-duration: var(--fa-animation-duration, 1s);
			-webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			-webkit-animation-timing-function: var(--fa-animation-timing, linear);
			animation-timing-function: var(--fa-animation-timing, linear);
		}
		.fa-shake,
		.fa-spin {
			-webkit-animation-delay: var(--fa-animation-delay, 0);
			animation-delay: var(--fa-animation-delay, 0);
			-webkit-animation-direction: var(--fa-animation-direction, normal);
			animation-direction: var(--fa-animation-direction, normal);
		}
		.fa-spin {
			-webkit-animation-name: fa-spin;
			animation-name: fa-spin;
			-webkit-animation-duration: var(--fa-animation-duration, 2s);
			animation-duration: var(--fa-animation-duration, 2s);
			-webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			-webkit-animation-timing-function: var(--fa-animation-timing, linear);
			animation-timing-function: var(--fa-animation-timing, linear);
		}
		.fa-spin-reverse {
			--fa-animation-direction: reverse;
		}
		.fa-pulse,
		.fa-spin-pulse {
			-webkit-animation-name: fa-spin;
			animation-name: fa-spin;
			-webkit-animation-direction: var(--fa-animation-direction, normal);
			animation-direction: var(--fa-animation-direction, normal);
			-webkit-animation-duration: var(--fa-animation-duration, 1s);
			animation-duration: var(--fa-animation-duration, 1s);
			-webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			animation-iteration-count: var(--fa-animation-iteration-count, infinite);
			-webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
			animation-timing-function: var(--fa-animation-timing, steps(8));
		}
		@media (prefers-reduced-motion: reduce) {
			.fa-beat,
			.fa-beat-fade,
			.fa-bounce,
			.fa-fade,
			.fa-flip,
			.fa-pulse,
			.fa-shake,
			.fa-spin,
			.fa-spin-pulse {
				-webkit-animation-delay: -1ms;
				animation-delay: -1ms;
				-webkit-animation-duration: 1ms;
				animation-duration: 1ms;
				-webkit-animation-iteration-count: 1;
				animation-iteration-count: 1;
				transition-delay: 0s;
				transition-duration: 0s;
			}
		}
		@-webkit-keyframes fa-beat {
			0%,
			90% {
				-webkit-transform: scale(1);
				transform: scale(1);
			}
			45% {
				-webkit-transform: scale(var(--fa-beat-scale, 1.25));
				transform: scale(var(--fa-beat-scale, 1.25));
			}
		}
		@keyframes fa-beat {
			0%,
			90% {
				-webkit-transform: scale(1);
				transform: scale(1);
			}
			45% {
				-webkit-transform: scale(var(--fa-beat-scale, 1.25));
				transform: scale(var(--fa-beat-scale, 1.25));
			}
		}
		@-webkit-keyframes fa-bounce {
			0% {
				-webkit-transform: scale(1) translateY(0);
				transform: scale(1) translateY(0);
			}
			10% {
				-webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
				transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
			}
			30% {
				-webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
				transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
			}
			50% {
				-webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
				transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
			}
			57% {
				-webkit-transform: scale(1) translateY(var(--fa-bounce-rebound, -0.125em));
				transform: scale(1) translateY(var(--fa-bounce-rebound, -0.125em));
			}
			64% {
				-webkit-transform: scale(1) translateY(0);
				transform: scale(1) translateY(0);
			}
			to {
				-webkit-transform: scale(1) translateY(0);
				transform: scale(1) translateY(0);
			}
		}
		@keyframes fa-bounce {
			0% {
				-webkit-transform: scale(1) translateY(0);
				transform: scale(1) translateY(0);
			}
			10% {
				-webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
				transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
			}
			30% {
				-webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
				transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
			}
			50% {
				-webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
				transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
			}
			57% {
				-webkit-transform: scale(1) translateY(var(--fa-bounce-rebound, -0.125em));
				transform: scale(1) translateY(var(--fa-bounce-rebound, -0.125em));
			}
			64% {
				-webkit-transform: scale(1) translateY(0);
				transform: scale(1) translateY(0);
			}
			to {
				-webkit-transform: scale(1) translateY(0);
				transform: scale(1) translateY(0);
			}
		}
		@-webkit-keyframes fa-fade {
			50% {
				opacity: var(--fa-fade-opacity, 0.4);
			}
		}
		@keyframes fa-fade {
			50% {
				opacity: var(--fa-fade-opacity, 0.4);
			}
		}
		@-webkit-keyframes fa-beat-fade {
			0%,
			to {
				opacity: var(--fa-beat-fade-opacity, 0.4);
				-webkit-transform: scale(1);
				transform: scale(1);
			}
			50% {
				opacity: 1;
				-webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
				transform: scale(var(--fa-beat-fade-scale, 1.125));
			}
		}
		@keyframes fa-beat-fade {
			0%,
			to {
				opacity: var(--fa-beat-fade-opacity, 0.4);
				-webkit-transform: scale(1);
				transform: scale(1);
			}
			50% {
				opacity: 1;
				-webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
				transform: scale(var(--fa-beat-fade-scale, 1.125));
			}
		}
		@-webkit-keyframes fa-flip {
			50% {
				-webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
				transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
			}
		}
		@keyframes fa-flip {
			50% {
				-webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
				transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
			}
		}
		@-webkit-keyframes fa-shake {
			0% {
				-webkit-transform: rotate(-15deg);
				transform: rotate(-15deg);
			}
			4% {
				-webkit-transform: rotate(15deg);
				transform: rotate(15deg);
			}
			8%,
			24% {
				-webkit-transform: rotate(-18deg);
				transform: rotate(-18deg);
			}
			12%,
			28% {
				-webkit-transform: rotate(18deg);
				transform: rotate(18deg);
			}
			16% {
				-webkit-transform: rotate(-22deg);
				transform: rotate(-22deg);
			}
			20% {
				-webkit-transform: rotate(22deg);
				transform: rotate(22deg);
			}
			32% {
				-webkit-transform: rotate(-12deg);
				transform: rotate(-12deg);
			}
			36% {
				-webkit-transform: rotate(12deg);
				transform: rotate(12deg);
			}
			40%,
			to {
				-webkit-transform: rotate(0deg);
				transform: rotate(0deg);
			}
		}
		@keyframes fa-shake {
			0% {
				-webkit-transform: rotate(-15deg);
				transform: rotate(-15deg);
			}
			4% {
				-webkit-transform: rotate(15deg);
				transform: rotate(15deg);
			}
			8%,
			24% {
				-webkit-transform: rotate(-18deg);
				transform: rotate(-18deg);
			}
			12%,
			28% {
				-webkit-transform: rotate(18deg);
				transform: rotate(18deg);
			}
			16% {
				-webkit-transform: rotate(-22deg);
				transform: rotate(-22deg);
			}
			20% {
				-webkit-transform: rotate(22deg);
				transform: rotate(22deg);
			}
			32% {
				-webkit-transform: rotate(-12deg);
				transform: rotate(-12deg);
			}
			36% {
				-webkit-transform: rotate(12deg);
				transform: rotate(12deg);
			}
			40%,
			to {
				-webkit-transform: rotate(0deg);
				transform: rotate(0deg);
			}
		}
		@-webkit-keyframes fa-spin {
			0% {
				-webkit-transform: rotate(0deg);
				transform: rotate(0deg);
			}
			to {
				-webkit-transform: rotate(1turn);
				transform: rotate(1turn);
			}
		}
		@keyframes fa-spin {
			0% {
				-webkit-transform: rotate(0deg);
				transform: rotate(0deg);
			}
			to {
				-webkit-transform: rotate(1turn);
				transform: rotate(1turn);
			}
		}
		.fa-rotate-90 {
			-webkit-transform: rotate(90deg);
			transform: rotate(90deg);
		}
		.fa-rotate-180 {
			-webkit-transform: rotate(180deg);
			transform: rotate(180deg);
		}
		.fa-rotate-270 {
			-webkit-transform: rotate(270deg);
			transform: rotate(270deg);
		}
		.fa-flip-horizontal {
			-webkit-transform: scaleX(-1);
			transform: scaleX(-1);
		}
		.fa-flip-vertical {
			-webkit-transform: scaleY(-1);
			transform: scaleY(-1);
		}
		.fa-flip-both,
		.fa-flip-horizontal.fa-flip-vertical {
			-webkit-transform: scale(-1);
			transform: scale(-1);
		}
		.fa-rotate-by {
			-webkit-transform: rotate(var(--fa-rotate-angle, none));
			transform: rotate(var(--fa-rotate-angle, none));
		}
		.fa-stack {
			display: inline-block;
			height: 2em;
			line-height: 2em;
			position: relative;
			vertical-align: middle;
			width: 2.5em;
		}
		.fa-stack-1x,
		.fa-stack-2x {
			left: 0;
			position: absolute;
			text-align: center;
			width: 100%;
			z-index: var(--fa-stack-z-index, auto);
		}
		.fa-stack-1x {
			line-height: inherit;
		}
		.fa-stack-2x {
			font-size: 2em;
		}
		.fa-inverse {
			color: var(--fa-inverse, #fff);
		}
		.fa-0:before {
			content: '\\30';
		}
		.fa-1:before {
			content: '\\31';
		}
		.fa-2:before {
			content: '\\32';
		}
		.fa-3:before {
			content: '\\33';
		}
		.fa-4:before {
			content: '\\34';
		}
		.fa-5:before {
			content: '\\35';
		}
		.fa-6:before {
			content: '\\36';
		}
		.fa-7:before {
			content: '\\37';
		}
		.fa-8:before {
			content: '\\38';
		}
		.fa-9:before {
			content: '\\39';
		}
		.fa-a:before {
			content: '\\41';
		}
		.fa-address-book:before,
		.fa-contact-book:before {
			content: '\\f2b9';
		}
		.fa-address-card:before,
		.fa-contact-card:before,
		.fa-vcard:before {
			content: '\\f2bb';
		}
		.fa-align-center:before {
			content: '\\f037';
		}
		.fa-align-justify:before {
			content: '\\f039';
		}
		.fa-align-left:before {
			content: '\\f036';
		}
		.fa-align-right:before {
			content: '\\f038';
		}
		.fa-anchor:before {
			content: '\\f13d';
		}
		.fa-anchor-circle-check:before {
			content: '\\e4aa';
		}
		.fa-anchor-circle-exclamation:before {
			content: '\\e4ab';
		}
		.fa-anchor-circle-xmark:before {
			content: '\\e4ac';
		}
		.fa-anchor-lock:before {
			content: '\\e4ad';
		}
		.fa-angle-down:before {
			content: '\\f107';
		}
		.fa-angle-left:before {
			content: '\\f104';
		}
		.fa-angle-right:before {
			content: '\\f105';
		}
		.fa-angle-up:before {
			content: '\\f106';
		}
		.fa-angle-double-down:before,
		.fa-angles-down:before {
			content: '\\f103';
		}
		.fa-angle-double-left:before,
		.fa-angles-left:before {
			content: '\\f100';
		}
		.fa-angle-double-right:before,
		.fa-angles-right:before {
			content: '\\f101';
		}
		.fa-angle-double-up:before,
		.fa-angles-up:before {
			content: '\\f102';
		}
		.fa-ankh:before {
			content: '\\f644';
		}
		.fa-apple-alt:before,
		.fa-apple-whole:before {
			content: '\\f5d1';
		}
		.fa-archway:before {
			content: '\\f557';
		}
		.fa-arrow-down:before {
			content: '\\f063';
		}
		.fa-arrow-down-1-9:before,
		.fa-sort-numeric-asc:before,
		.fa-sort-numeric-down:before {
			content: '\\f162';
		}
		.fa-arrow-down-9-1:before,
		.fa-sort-numeric-desc:before,
		.fa-sort-numeric-down-alt:before {
			content: '\\f886';
		}
		.fa-arrow-down-a-z:before,
		.fa-sort-alpha-asc:before,
		.fa-sort-alpha-down:before {
			content: '\\f15d';
		}
		.fa-arrow-down-long:before,
		.fa-long-arrow-down:before {
			content: '\\f175';
		}
		.fa-arrow-down-short-wide:before,
		.fa-sort-amount-desc:before,
		.fa-sort-amount-down-alt:before {
			content: '\\f884';
		}
		.fa-arrow-down-up-across-line:before {
			content: '\\e4af';
		}
		.fa-arrow-down-up-lock:before {
			content: '\\e4b0';
		}
		.fa-arrow-down-wide-short:before,
		.fa-sort-amount-asc:before,
		.fa-sort-amount-down:before {
			content: '\\f160';
		}
		.fa-arrow-down-z-a:before,
		.fa-sort-alpha-desc:before,
		.fa-sort-alpha-down-alt:before {
			content: '\\f881';
		}
		.fa-arrow-left:before {
			content: '\\f060';
		}
		.fa-arrow-left-long:before,
		.fa-long-arrow-left:before {
			content: '\\f177';
		}
		.fa-arrow-pointer:before,
		.fa-mouse-pointer:before {
			content: '\\f245';
		}
		.fa-arrow-right:before {
			content: '\\f061';
		}
		.fa-arrow-right-arrow-left:before,
		.fa-exchange:before {
			content: '\\f0ec';
		}
		.fa-arrow-right-from-bracket:before,
		.fa-sign-out:before {
			content: '\\f08b';
		}
		.fa-arrow-right-long:before,
		.fa-long-arrow-right:before {
			content: '\\f178';
		}
		.fa-arrow-right-to-bracket:before,
		.fa-sign-in:before {
			content: '\\f090';
		}
		.fa-arrow-right-to-city:before {
			content: '\\e4b3';
		}
		.fa-arrow-left-rotate:before,
		.fa-arrow-rotate-back:before,
		.fa-arrow-rotate-backward:before,
		.fa-arrow-rotate-left:before,
		.fa-undo:before {
			content: '\\f0e2';
		}
		.fa-arrow-right-rotate:before,
		.fa-arrow-rotate-forward:before,
		.fa-arrow-rotate-right:before,
		.fa-redo:before {
			content: '\\f01e';
		}
		.fa-arrow-trend-down:before {
			content: '\\e097';
		}
		.fa-arrow-trend-up:before {
			content: '\\e098';
		}
		.fa-arrow-turn-down:before,
		.fa-level-down:before {
			content: '\\f149';
		}
		.fa-arrow-turn-up:before,
		.fa-level-up:before {
			content: '\\f148';
		}
		.fa-arrow-up:before {
			content: '\\f062';
		}
		.fa-arrow-up-1-9:before,
		.fa-sort-numeric-up:before {
			content: '\\f163';
		}
		.fa-arrow-up-9-1:before,
		.fa-sort-numeric-up-alt:before {
			content: '\\f887';
		}
		.fa-arrow-up-a-z:before,
		.fa-sort-alpha-up:before {
			content: '\\f15e';
		}
		.fa-arrow-up-from-bracket:before {
			content: '\\e09a';
		}
		.fa-arrow-up-from-ground-water:before {
			content: '\\e4b5';
		}
		.fa-arrow-up-from-water-pump:before {
			content: '\\e4b6';
		}
		.fa-arrow-up-long:before,
		.fa-long-arrow-up:before {
			content: '\\f176';
		}
		.fa-arrow-up-right-dots:before {
			content: '\\e4b7';
		}
		.fa-arrow-up-right-from-square:before,
		.fa-external-link:before {
			content: '\\f08e';
		}
		.fa-arrow-up-short-wide:before,
		.fa-sort-amount-up-alt:before {
			content: '\\f885';
		}
		.fa-arrow-up-wide-short:before,
		.fa-sort-amount-up:before {
			content: '\\f161';
		}
		.fa-arrow-up-z-a:before,
		.fa-sort-alpha-up-alt:before {
			content: '\\f882';
		}
		.fa-arrows-down-to-line:before {
			content: '\\e4b8';
		}
		.fa-arrows-down-to-people:before {
			content: '\\e4b9';
		}
		.fa-arrows-h:before,
		.fa-arrows-left-right:before {
			content: '\\f07e';
		}
		.fa-arrows-left-right-to-line:before {
			content: '\\e4ba';
		}
		.fa-arrows-rotate:before,
		.fa-refresh:before,
		.fa-sync:before {
			content: '\\f021';
		}
		.fa-arrows-spin:before {
			content: '\\e4bb';
		}
		.fa-arrows-split-up-and-left:before {
			content: '\\e4bc';
		}
		.fa-arrows-to-circle:before {
			content: '\\e4bd';
		}
		.fa-arrows-to-dot:before {
			content: '\\e4be';
		}
		.fa-arrows-to-eye:before {
			content: '\\e4bf';
		}
		.fa-arrows-turn-right:before {
			content: '\\e4c0';
		}
		.fa-arrows-turn-to-dots:before {
			content: '\\e4c1';
		}
		.fa-arrows-up-down:before,
		.fa-arrows-v:before {
			content: '\\f07d';
		}
		.fa-arrows-up-down-left-right:before,
		.fa-arrows:before {
			content: '\\f047';
		}
		.fa-arrows-up-to-line:before {
			content: '\\e4c2';
		}
		.fa-asterisk:before {
			content: '\\2a';
		}
		.fa-at:before {
			content: '\\40';
		}
		.fa-atom:before {
			content: '\\f5d2';
		}
		.fa-audio-description:before {
			content: '\\f29e';
		}
		.fa-austral-sign:before {
			content: '\\e0a9';
		}
		.fa-award:before {
			content: '\\f559';
		}
		.fa-b:before {
			content: '\\42';
		}
		.fa-baby:before {
			content: '\\f77c';
		}
		.fa-baby-carriage:before,
		.fa-carriage-baby:before {
			content: '\\f77d';
		}
		.fa-backward:before {
			content: '\\f04a';
		}
		.fa-backward-fast:before,
		.fa-fast-backward:before {
			content: '\\f049';
		}
		.fa-backward-step:before,
		.fa-step-backward:before {
			content: '\\f048';
		}
		.fa-bacon:before {
			content: '\\f7e5';
		}
		.fa-bacteria:before {
			content: '\\e059';
		}
		.fa-bacterium:before {
			content: '\\e05a';
		}
		.fa-bag-shopping:before,
		.fa-shopping-bag:before {
			content: '\\f290';
		}
		.fa-bahai:before {
			content: '\\f666';
		}
		.fa-baht-sign:before {
			content: '\\e0ac';
		}
		.fa-ban:before,
		.fa-cancel:before {
			content: '\\f05e';
		}
		.fa-ban-smoking:before,
		.fa-smoking-ban:before {
			content: '\\f54d';
		}
		.fa-band-aid:before,
		.fa-bandage:before {
			content: '\\f462';
		}
		.fa-barcode:before {
			content: '\\f02a';
		}
		.fa-bars:before,
		.fa-navicon:before {
			content: '\\f0c9';
		}
		.fa-bars-progress:before,
		.fa-tasks-alt:before {
			content: '\\f828';
		}
		.fa-bars-staggered:before,
		.fa-reorder:before,
		.fa-stream:before {
			content: '\\f550';
		}
		.fa-baseball-ball:before,
		.fa-baseball:before {
			content: '\\f433';
		}
		.fa-baseball-bat-ball:before {
			content: '\\f432';
		}
		.fa-basket-shopping:before,
		.fa-shopping-basket:before {
			content: '\\f291';
		}
		.fa-basketball-ball:before,
		.fa-basketball:before {
			content: '\\f434';
		}
		.fa-bath:before,
		.fa-bathtub:before {
			content: '\\f2cd';
		}
		.fa-battery-0:before,
		.fa-battery-empty:before {
			content: '\\f244';
		}
		.fa-battery-5:before,
		.fa-battery-full:before,
		.fa-battery:before {
			content: '\\f240';
		}
		.fa-battery-3:before,
		.fa-battery-half:before {
			content: '\\f242';
		}
		.fa-battery-2:before,
		.fa-battery-quarter:before {
			content: '\\f243';
		}
		.fa-battery-4:before,
		.fa-battery-three-quarters:before {
			content: '\\f241';
		}
		.fa-bed:before {
			content: '\\f236';
		}
		.fa-bed-pulse:before,
		.fa-procedures:before {
			content: '\\f487';
		}
		.fa-beer-mug-empty:before,
		.fa-beer:before {
			content: '\\f0fc';
		}
		.fa-bell:before {
			content: '\\f0f3';
		}
		.fa-bell-concierge:before,
		.fa-concierge-bell:before {
			content: '\\f562';
		}
		.fa-bell-slash:before {
			content: '\\f1f6';
		}
		.fa-bezier-curve:before {
			content: '\\f55b';
		}
		.fa-bicycle:before {
			content: '\\f206';
		}
		.fa-binoculars:before {
			content: '\\f1e5';
		}
		.fa-biohazard:before {
			content: '\\f780';
		}
		.fa-bitcoin-sign:before {
			content: '\\e0b4';
		}
		.fa-blender:before {
			content: '\\f517';
		}
		.fa-blender-phone:before {
			content: '\\f6b6';
		}
		.fa-blog:before {
			content: '\\f781';
		}
		.fa-bold:before {
			content: '\\f032';
		}
		.fa-bolt:before,
		.fa-zap:before {
			content: '\\f0e7';
		}
		.fa-bolt-lightning:before {
			content: '\\e0b7';
		}
		.fa-bomb:before {
			content: '\\f1e2';
		}
		.fa-bone:before {
			content: '\\f5d7';
		}
		.fa-bong:before {
			content: '\\f55c';
		}
		.fa-book:before {
			content: '\\f02d';
		}
		.fa-atlas:before,
		.fa-book-atlas:before {
			content: '\\f558';
		}
		.fa-bible:before,
		.fa-book-bible:before {
			content: '\\f647';
		}
		.fa-book-bookmark:before {
			content: '\\e0bb';
		}
		.fa-book-journal-whills:before,
		.fa-journal-whills:before {
			content: '\\f66a';
		}
		.fa-book-medical:before {
			content: '\\f7e6';
		}
		.fa-book-open:before {
			content: '\\f518';
		}
		.fa-book-open-reader:before,
		.fa-book-reader:before {
			content: '\\f5da';
		}
		.fa-book-quran:before,
		.fa-quran:before {
			content: '\\f687';
		}
		.fa-book-dead:before,
		.fa-book-skull:before {
			content: '\\f6b7';
		}
		.fa-bookmark:before {
			content: '\\f02e';
		}
		.fa-border-all:before {
			content: '\\f84c';
		}
		.fa-border-none:before {
			content: '\\f850';
		}
		.fa-border-style:before,
		.fa-border-top-left:before {
			content: '\\f853';
		}
		.fa-bore-hole:before {
			content: '\\e4c3';
		}
		.fa-bottle-droplet:before {
			content: '\\e4c4';
		}
		.fa-bottle-water:before {
			content: '\\e4c5';
		}
		.fa-bowl-food:before {
			content: '\\e4c6';
		}
		.fa-bowl-rice:before {
			content: '\\e2eb';
		}
		.fa-bowling-ball:before {
			content: '\\f436';
		}
		.fa-box:before {
			content: '\\f466';
		}
		.fa-archive:before,
		.fa-box-archive:before {
			content: '\\f187';
		}
		.fa-box-open:before {
			content: '\\f49e';
		}
		.fa-box-tissue:before {
			content: '\\e05b';
		}
		.fa-boxes-packing:before {
			content: '\\e4c7';
		}
		.fa-boxes-alt:before,
		.fa-boxes-stacked:before,
		.fa-boxes:before {
			content: '\\f468';
		}
		.fa-braille:before {
			content: '\\f2a1';
		}
		.fa-brain:before {
			content: '\\f5dc';
		}
		.fa-brazilian-real-sign:before {
			content: '\\e46c';
		}
		.fa-bread-slice:before {
			content: '\\f7ec';
		}
		.fa-bridge:before {
			content: '\\e4c8';
		}
		.fa-bridge-circle-check:before {
			content: '\\e4c9';
		}
		.fa-bridge-circle-exclamation:before {
			content: '\\e4ca';
		}
		.fa-bridge-circle-xmark:before {
			content: '\\e4cb';
		}
		.fa-bridge-lock:before {
			content: '\\e4cc';
		}
		.fa-bridge-water:before {
			content: '\\e4ce';
		}
		.fa-briefcase:before {
			content: '\\f0b1';
		}
		.fa-briefcase-medical:before {
			content: '\\f469';
		}
		.fa-broom:before {
			content: '\\f51a';
		}
		.fa-broom-ball:before,
		.fa-quidditch-broom-ball:before,
		.fa-quidditch:before {
			content: '\\f458';
		}
		.fa-brush:before {
			content: '\\f55d';
		}
		.fa-bucket:before {
			content: '\\e4cf';
		}
		.fa-bug:before {
			content: '\\f188';
		}
		.fa-bug-slash:before {
			content: '\\e490';
		}
		.fa-bugs:before {
			content: '\\e4d0';
		}
		.fa-building:before {
			content: '\\f1ad';
		}
		.fa-building-circle-arrow-right:before {
			content: '\\e4d1';
		}
		.fa-building-circle-check:before {
			content: '\\e4d2';
		}
		.fa-building-circle-exclamation:before {
			content: '\\e4d3';
		}
		.fa-building-circle-xmark:before {
			content: '\\e4d4';
		}
		.fa-bank:before,
		.fa-building-columns:before,
		.fa-institution:before,
		.fa-museum:before,
		.fa-university:before {
			content: '\\f19c';
		}
		.fa-building-flag:before {
			content: '\\e4d5';
		}
		.fa-building-lock:before {
			content: '\\e4d6';
		}
		.fa-building-ngo:before {
			content: '\\e4d7';
		}
		.fa-building-shield:before {
			content: '\\e4d8';
		}
		.fa-building-un:before {
			content: '\\e4d9';
		}
		.fa-building-user:before {
			content: '\\e4da';
		}
		.fa-building-wheat:before {
			content: '\\e4db';
		}
		.fa-bullhorn:before {
			content: '\\f0a1';
		}
		.fa-bullseye:before {
			content: '\\f140';
		}
		.fa-burger:before,
		.fa-hamburger:before {
			content: '\\f805';
		}
		.fa-burst:before {
			content: '\\e4dc';
		}
		.fa-bus:before {
			content: '\\f207';
		}
		.fa-bus-alt:before,
		.fa-bus-simple:before {
			content: '\\f55e';
		}
		.fa-briefcase-clock:before,
		.fa-business-time:before {
			content: '\\f64a';
		}
		.fa-c:before {
			content: '\\43';
		}
		.fa-birthday-cake:before,
		.fa-cake-candles:before,
		.fa-cake:before {
			content: '\\f1fd';
		}
		.fa-calculator:before {
			content: '\\f1ec';
		}
		.fa-calendar:before {
			content: '\\f133';
		}
		.fa-calendar-check:before {
			content: '\\f274';
		}
		.fa-calendar-day:before {
			content: '\\f783';
		}
		.fa-calendar-alt:before,
		.fa-calendar-days:before {
			content: '\\f073';
		}
		.fa-calendar-minus:before {
			content: '\\f272';
		}
		.fa-calendar-plus:before {
			content: '\\f271';
		}
		.fa-calendar-week:before {
			content: '\\f784';
		}
		.fa-calendar-times:before,
		.fa-calendar-xmark:before {
			content: '\\f273';
		}
		.fa-camera-alt:before,
		.fa-camera:before {
			content: '\\f030';
		}
		.fa-camera-retro:before {
			content: '\\f083';
		}
		.fa-camera-rotate:before {
			content: '\\e0d8';
		}
		.fa-campground:before {
			content: '\\f6bb';
		}
		.fa-candy-cane:before {
			content: '\\f786';
		}
		.fa-cannabis:before {
			content: '\\f55f';
		}
		.fa-capsules:before {
			content: '\\f46b';
		}
		.fa-automobile:before,
		.fa-car:before {
			content: '\\f1b9';
		}
		.fa-battery-car:before,
		.fa-car-battery:before {
			content: '\\f5df';
		}
		.fa-car-burst:before,
		.fa-car-crash:before {
			content: '\\f5e1';
		}
		.fa-car-on:before {
			content: '\\e4dd';
		}
		.fa-car-alt:before,
		.fa-car-rear:before {
			content: '\\f5de';
		}
		.fa-car-side:before {
			content: '\\f5e4';
		}
		.fa-car-tunnel:before {
			content: '\\e4de';
		}
		.fa-caravan:before {
			content: '\\f8ff';
		}
		.fa-caret-down:before {
			content: '\\f0d7';
		}
		.fa-caret-left:before {
			content: '\\f0d9';
		}
		.fa-caret-right:before {
			content: '\\f0da';
		}
		.fa-caret-up:before {
			content: '\\f0d8';
		}
		.fa-carrot:before {
			content: '\\f787';
		}
		.fa-cart-arrow-down:before {
			content: '\\f218';
		}
		.fa-cart-flatbed:before,
		.fa-dolly-flatbed:before {
			content: '\\f474';
		}
		.fa-cart-flatbed-suitcase:before,
		.fa-luggage-cart:before {
			content: '\\f59d';
		}
		.fa-cart-plus:before {
			content: '\\f217';
		}
		.fa-cart-shopping:before,
		.fa-shopping-cart:before {
			content: '\\f07a';
		}
		.fa-cash-register:before {
			content: '\\f788';
		}
		.fa-cat:before {
			content: '\\f6be';
		}
		.fa-cedi-sign:before {
			content: '\\e0df';
		}
		.fa-cent-sign:before {
			content: '\\e3f5';
		}
		.fa-certificate:before {
			content: '\\f0a3';
		}
		.fa-chair:before {
			content: '\\f6c0';
		}
		.fa-blackboard:before,
		.fa-chalkboard:before {
			content: '\\f51b';
		}
		.fa-chalkboard-teacher:before,
		.fa-chalkboard-user:before {
			content: '\\f51c';
		}
		.fa-champagne-glasses:before,
		.fa-glass-cheers:before {
			content: '\\f79f';
		}
		.fa-charging-station:before {
			content: '\\f5e7';
		}
		.fa-area-chart:before,
		.fa-chart-area:before {
			content: '\\f1fe';
		}
		.fa-bar-chart:before,
		.fa-chart-bar:before {
			content: '\\f080';
		}
		.fa-chart-column:before {
			content: '\\e0e3';
		}
		.fa-chart-gantt:before {
			content: '\\e0e4';
		}
		.fa-chart-line:before,
		.fa-line-chart:before {
			content: '\\f201';
		}
		.fa-chart-pie:before,
		.fa-pie-chart:before {
			content: '\\f200';
		}
		.fa-chart-simple:before {
			content: '\\e473';
		}
		.fa-check:before {
			content: '\\f00c';
		}
		.fa-check-double:before {
			content: '\\f560';
		}
		.fa-check-to-slot:before,
		.fa-vote-yea:before {
			content: '\\f772';
		}
		.fa-cheese:before {
			content: '\\f7ef';
		}
		.fa-chess:before {
			content: '\\f439';
		}
		.fa-chess-bishop:before {
			content: '\\f43a';
		}
		.fa-chess-board:before {
			content: '\\f43c';
		}
		.fa-chess-king:before {
			content: '\\f43f';
		}
		.fa-chess-knight:before {
			content: '\\f441';
		}
		.fa-chess-pawn:before {
			content: '\\f443';
		}
		.fa-chess-queen:before {
			content: '\\f445';
		}
		.fa-chess-rook:before {
			content: '\\f447';
		}
		.fa-chevron-down:before {
			content: '\\f078';
		}
		.fa-chevron-left:before {
			content: '\\f053';
		}
		.fa-chevron-right:before {
			content: '\\f054';
		}
		.fa-chevron-up:before {
			content: '\\f077';
		}
		.fa-child:before {
			content: '\\f1ae';
		}
		.fa-child-dress:before {
			content: '\\e59c';
		}
		.fa-child-reaching:before {
			content: '\\e59d';
		}
		.fa-child-rifle:before {
			content: '\\e4e0';
		}
		.fa-children:before {
			content: '\\e4e1';
		}
		.fa-church:before {
			content: '\\f51d';
		}
		.fa-circle:before {
			content: '\\f111';
		}
		.fa-arrow-circle-down:before,
		.fa-circle-arrow-down:before {
			content: '\\f0ab';
		}
		.fa-arrow-circle-left:before,
		.fa-circle-arrow-left:before {
			content: '\\f0a8';
		}
		.fa-arrow-circle-right:before,
		.fa-circle-arrow-right:before {
			content: '\\f0a9';
		}
		.fa-arrow-circle-up:before,
		.fa-circle-arrow-up:before {
			content: '\\f0aa';
		}
		.fa-check-circle:before,
		.fa-circle-check:before {
			content: '\\f058';
		}
		.fa-chevron-circle-down:before,
		.fa-circle-chevron-down:before {
			content: '\\f13a';
		}
		.fa-chevron-circle-left:before,
		.fa-circle-chevron-left:before {
			content: '\\f137';
		}
		.fa-chevron-circle-right:before,
		.fa-circle-chevron-right:before {
			content: '\\f138';
		}
		.fa-chevron-circle-up:before,
		.fa-circle-chevron-up:before {
			content: '\\f139';
		}
		.fa-circle-dollar-to-slot:before,
		.fa-donate:before {
			content: '\\f4b9';
		}
		.fa-circle-dot:before,
		.fa-dot-circle:before {
			content: '\\f192';
		}
		.fa-arrow-alt-circle-down:before,
		.fa-circle-down:before {
			content: '\\f358';
		}
		.fa-circle-exclamation:before,
		.fa-exclamation-circle:before {
			content: '\\f06a';
		}
		.fa-circle-h:before,
		.fa-hospital-symbol:before {
			content: '\\f47e';
		}
		.fa-adjust:before,
		.fa-circle-half-stroke:before {
			content: '\\f042';
		}
		.fa-circle-info:before,
		.fa-info-circle:before {
			content: '\\f05a';
		}
		.fa-arrow-alt-circle-left:before,
		.fa-circle-left:before {
			content: '\\f359';
		}
		.fa-circle-minus:before,
		.fa-minus-circle:before {
			content: '\\f056';
		}
		.fa-circle-nodes:before {
			content: '\\e4e2';
		}
		.fa-circle-notch:before {
			content: '\\f1ce';
		}
		.fa-circle-pause:before,
		.fa-pause-circle:before {
			content: '\\f28b';
		}
		.fa-circle-play:before,
		.fa-play-circle:before {
			content: '\\f144';
		}
		.fa-circle-plus:before,
		.fa-plus-circle:before {
			content: '\\f055';
		}
		.fa-circle-question:before,
		.fa-question-circle:before {
			content: '\\f059';
		}
		.fa-circle-radiation:before,
		.fa-radiation-alt:before {
			content: '\\f7ba';
		}
		.fa-arrow-alt-circle-right:before,
		.fa-circle-right:before {
			content: '\\f35a';
		}
		.fa-circle-stop:before,
		.fa-stop-circle:before {
			content: '\\f28d';
		}
		.fa-arrow-alt-circle-up:before,
		.fa-circle-up:before {
			content: '\\f35b';
		}
		.fa-circle-user:before,
		.fa-user-circle:before {
			content: '\\f2bd';
		}
		.fa-circle-xmark:before,
		.fa-times-circle:before,
		.fa-xmark-circle:before {
			content: '\\f057';
		}
		.fa-city:before {
			content: '\\f64f';
		}
		.fa-clapperboard:before {
			content: '\\e131';
		}
		.fa-clipboard:before {
			content: '\\f328';
		}
		.fa-clipboard-check:before {
			content: '\\f46c';
		}
		.fa-clipboard-list:before {
			content: '\\f46d';
		}
		.fa-clipboard-question:before {
			content: '\\e4e3';
		}
		.fa-clipboard-user:before {
			content: '\\f7f3';
		}
		.fa-clock-four:before,
		.fa-clock:before {
			content: '\\f017';
		}
		.fa-clock-rotate-left:before,
		.fa-history:before {
			content: '\\f1da';
		}
		.fa-clone:before {
			content: '\\f24d';
		}
		.fa-closed-captioning:before {
			content: '\\f20a';
		}
		.fa-cloud:before {
			content: '\\f0c2';
		}
		.fa-cloud-arrow-down:before,
		.fa-cloud-download-alt:before,
		.fa-cloud-download:before {
			content: '\\f0ed';
		}
		.fa-cloud-arrow-up:before,
		.fa-cloud-upload-alt:before,
		.fa-cloud-upload:before {
			content: '\\f0ee';
		}
		.fa-cloud-bolt:before,
		.fa-thunderstorm:before {
			content: '\\f76c';
		}
		.fa-cloud-meatball:before {
			content: '\\f73b';
		}
		.fa-cloud-moon:before {
			content: '\\f6c3';
		}
		.fa-cloud-moon-rain:before {
			content: '\\f73c';
		}
		.fa-cloud-rain:before {
			content: '\\f73d';
		}
		.fa-cloud-showers-heavy:before {
			content: '\\f740';
		}
		.fa-cloud-showers-water:before {
			content: '\\e4e4';
		}
		.fa-cloud-sun:before {
			content: '\\f6c4';
		}
		.fa-cloud-sun-rain:before {
			content: '\\f743';
		}
		.fa-clover:before {
			content: '\\e139';
		}
		.fa-code:before {
			content: '\\f121';
		}
		.fa-code-branch:before {
			content: '\\f126';
		}
		.fa-code-commit:before {
			content: '\\f386';
		}
		.fa-code-compare:before {
			content: '\\e13a';
		}
		.fa-code-fork:before {
			content: '\\e13b';
		}
		.fa-code-merge:before {
			content: '\\f387';
		}
		.fa-code-pull-request:before {
			content: '\\e13c';
		}
		.fa-coins:before {
			content: '\\f51e';
		}
		.fa-colon-sign:before {
			content: '\\e140';
		}
		.fa-comment:before {
			content: '\\f075';
		}
		.fa-comment-dollar:before {
			content: '\\f651';
		}
		.fa-comment-dots:before,
		.fa-commenting:before {
			content: '\\f4ad';
		}
		.fa-comment-medical:before {
			content: '\\f7f5';
		}
		.fa-comment-slash:before {
			content: '\\f4b3';
		}
		.fa-comment-sms:before,
		.fa-sms:before {
			content: '\\f7cd';
		}
		.fa-comments:before {
			content: '\\f086';
		}
		.fa-comments-dollar:before {
			content: '\\f653';
		}
		.fa-compact-disc:before {
			content: '\\f51f';
		}
		.fa-compass:before {
			content: '\\f14e';
		}
		.fa-compass-drafting:before,
		.fa-drafting-compass:before {
			content: '\\f568';
		}
		.fa-compress:before {
			content: '\\f066';
		}
		.fa-computer:before {
			content: '\\e4e5';
		}
		.fa-computer-mouse:before,
		.fa-mouse:before {
			content: '\\f8cc';
		}
		.fa-cookie:before {
			content: '\\f563';
		}
		.fa-cookie-bite:before {
			content: '\\f564';
		}
		.fa-copy:before {
			content: '\\f0c5';
		}
		.fa-copyright:before {
			content: '\\f1f9';
		}
		.fa-couch:before {
			content: '\\f4b8';
		}
		.fa-cow:before {
			content: '\\f6c8';
		}
		.fa-credit-card-alt:before,
		.fa-credit-card:before {
			content: '\\f09d';
		}
		.fa-crop:before {
			content: '\\f125';
		}
		.fa-crop-alt:before,
		.fa-crop-simple:before {
			content: '\\f565';
		}
		.fa-cross:before {
			content: '\\f654';
		}
		.fa-crosshairs:before {
			content: '\\f05b';
		}
		.fa-crow:before {
			content: '\\f520';
		}
		.fa-crown:before {
			content: '\\f521';
		}
		.fa-crutch:before {
			content: '\\f7f7';
		}
		.fa-cruzeiro-sign:before {
			content: '\\e152';
		}
		.fa-cube:before {
			content: '\\f1b2';
		}
		.fa-cubes:before {
			content: '\\f1b3';
		}
		.fa-cubes-stacked:before {
			content: '\\e4e6';
		}
		.fa-d:before {
			content: '\\44';
		}
		.fa-database:before {
			content: '\\f1c0';
		}
		.fa-backspace:before,
		.fa-delete-left:before {
			content: '\\f55a';
		}
		.fa-democrat:before {
			content: '\\f747';
		}
		.fa-desktop-alt:before,
		.fa-desktop:before {
			content: '\\f390';
		}
		.fa-dharmachakra:before {
			content: '\\f655';
		}
		.fa-diagram-next:before {
			content: '\\e476';
		}
		.fa-diagram-predecessor:before {
			content: '\\e477';
		}
		.fa-diagram-project:before,
		.fa-project-diagram:before {
			content: '\\f542';
		}
		.fa-diagram-successor:before {
			content: '\\e47a';
		}
		.fa-diamond:before {
			content: '\\f219';
		}
		.fa-diamond-turn-right:before,
		.fa-directions:before {
			content: '\\f5eb';
		}
		.fa-dice:before {
			content: '\\f522';
		}
		.fa-dice-d20:before {
			content: '\\f6cf';
		}
		.fa-dice-d6:before {
			content: '\\f6d1';
		}
		.fa-dice-five:before {
			content: '\\f523';
		}
		.fa-dice-four:before {
			content: '\\f524';
		}
		.fa-dice-one:before {
			content: '\\f525';
		}
		.fa-dice-six:before {
			content: '\\f526';
		}
		.fa-dice-three:before {
			content: '\\f527';
		}
		.fa-dice-two:before {
			content: '\\f528';
		}
		.fa-disease:before {
			content: '\\f7fa';
		}
		.fa-display:before {
			content: '\\e163';
		}
		.fa-divide:before {
			content: '\\f529';
		}
		.fa-dna:before {
			content: '\\f471';
		}
		.fa-dog:before {
			content: '\\f6d3';
		}
		.fa-dollar-sign:before,
		.fa-dollar:before,
		.fa-usd:before {
			content: '\\24';
		}
		.fa-dolly-box:before,
		.fa-dolly:before {
			content: '\\f472';
		}
		.fa-dong-sign:before {
			content: '\\e169';
		}
		.fa-door-closed:before {
			content: '\\f52a';
		}
		.fa-door-open:before {
			content: '\\f52b';
		}
		.fa-dove:before {
			content: '\\f4ba';
		}
		.fa-compress-alt:before,
		.fa-down-left-and-up-right-to-center:before {
			content: '\\f422';
		}
		.fa-down-long:before,
		.fa-long-arrow-alt-down:before {
			content: '\\f309';
		}
		.fa-download:before {
			content: '\\f019';
		}
		.fa-dragon:before {
			content: '\\f6d5';
		}
		.fa-draw-polygon:before {
			content: '\\f5ee';
		}
		.fa-droplet:before,
		.fa-tint:before {
			content: '\\f043';
		}
		.fa-droplet-slash:before,
		.fa-tint-slash:before {
			content: '\\f5c7';
		}
		.fa-drum:before {
			content: '\\f569';
		}
		.fa-drum-steelpan:before {
			content: '\\f56a';
		}
		.fa-drumstick-bite:before {
			content: '\\f6d7';
		}
		.fa-dumbbell:before {
			content: '\\f44b';
		}
		.fa-dumpster:before {
			content: '\\f793';
		}
		.fa-dumpster-fire:before {
			content: '\\f794';
		}
		.fa-dungeon:before {
			content: '\\f6d9';
		}
		.fa-e:before {
			content: '\\45';
		}
		.fa-deaf:before,
		.fa-deafness:before,
		.fa-ear-deaf:before,
		.fa-hard-of-hearing:before {
			content: '\\f2a4';
		}
		.fa-assistive-listening-systems:before,
		.fa-ear-listen:before {
			content: '\\f2a2';
		}
		.fa-earth-africa:before,
		.fa-globe-africa:before {
			content: '\\f57c';
		}
		.fa-earth-america:before,
		.fa-earth-americas:before,
		.fa-earth:before,
		.fa-globe-americas:before {
			content: '\\f57d';
		}
		.fa-earth-asia:before,
		.fa-globe-asia:before {
			content: '\\f57e';
		}
		.fa-earth-europe:before,
		.fa-globe-europe:before {
			content: '\\f7a2';
		}
		.fa-earth-oceania:before,
		.fa-globe-oceania:before {
			content: '\\e47b';
		}
		.fa-egg:before {
			content: '\\f7fb';
		}
		.fa-eject:before {
			content: '\\f052';
		}
		.fa-elevator:before {
			content: '\\e16d';
		}
		.fa-ellipsis-h:before,
		.fa-ellipsis:before {
			content: '\\f141';
		}
		.fa-ellipsis-v:before,
		.fa-ellipsis-vertical:before {
			content: '\\f142';
		}
		.fa-envelope:before {
			content: '\\f0e0';
		}
		.fa-envelope-circle-check:before {
			content: '\\e4e8';
		}
		.fa-envelope-open:before {
			content: '\\f2b6';
		}
		.fa-envelope-open-text:before {
			content: '\\f658';
		}
		.fa-envelopes-bulk:before,
		.fa-mail-bulk:before {
			content: '\\f674';
		}
		.fa-equals:before {
			content: '\\3d';
		}
		.fa-eraser:before {
			content: '\\f12d';
		}
		.fa-ethernet:before {
			content: '\\f796';
		}
		.fa-eur:before,
		.fa-euro-sign:before,
		.fa-euro:before {
			content: '\\f153';
		}
		.fa-exclamation:before {
			content: '\\21';
		}
		.fa-expand:before {
			content: '\\f065';
		}
		.fa-explosion:before {
			content: '\\e4e9';
		}
		.fa-eye:before {
			content: '\\f06e';
		}
		.fa-eye-dropper-empty:before,
		.fa-eye-dropper:before,
		.fa-eyedropper:before {
			content: '\\f1fb';
		}
		.fa-eye-low-vision:before,
		.fa-low-vision:before {
			content: '\\f2a8';
		}
		.fa-eye-slash:before {
			content: '\\f070';
		}
		.fa-f:before {
			content: '\\46';
		}
		.fa-angry:before,
		.fa-face-angry:before {
			content: '\\f556';
		}
		.fa-dizzy:before,
		.fa-face-dizzy:before {
			content: '\\f567';
		}
		.fa-face-flushed:before,
		.fa-flushed:before {
			content: '\\f579';
		}
		.fa-face-frown:before,
		.fa-frown:before {
			content: '\\f119';
		}
		.fa-face-frown-open:before,
		.fa-frown-open:before {
			content: '\\f57a';
		}
		.fa-face-grimace:before,
		.fa-grimace:before {
			content: '\\f57f';
		}
		.fa-face-grin:before,
		.fa-grin:before {
			content: '\\f580';
		}
		.fa-face-grin-beam:before,
		.fa-grin-beam:before {
			content: '\\f582';
		}
		.fa-face-grin-beam-sweat:before,
		.fa-grin-beam-sweat:before {
			content: '\\f583';
		}
		.fa-face-grin-hearts:before,
		.fa-grin-hearts:before {
			content: '\\f584';
		}
		.fa-face-grin-squint:before,
		.fa-grin-squint:before {
			content: '\\f585';
		}
		.fa-face-grin-squint-tears:before,
		.fa-grin-squint-tears:before {
			content: '\\f586';
		}
		.fa-face-grin-stars:before,
		.fa-grin-stars:before {
			content: '\\f587';
		}
		.fa-face-grin-tears:before,
		.fa-grin-tears:before {
			content: '\\f588';
		}
		.fa-face-grin-tongue:before,
		.fa-grin-tongue:before {
			content: '\\f589';
		}
		.fa-face-grin-tongue-squint:before,
		.fa-grin-tongue-squint:before {
			content: '\\f58a';
		}
		.fa-face-grin-tongue-wink:before,
		.fa-grin-tongue-wink:before {
			content: '\\f58b';
		}
		.fa-face-grin-wide:before,
		.fa-grin-alt:before {
			content: '\\f581';
		}
		.fa-face-grin-wink:before,
		.fa-grin-wink:before {
			content: '\\f58c';
		}
		.fa-face-kiss:before,
		.fa-kiss:before {
			content: '\\f596';
		}
		.fa-face-kiss-beam:before,
		.fa-kiss-beam:before {
			content: '\\f597';
		}
		.fa-face-kiss-wink-heart:before,
		.fa-kiss-wink-heart:before {
			content: '\\f598';
		}
		.fa-face-laugh:before,
		.fa-laugh:before {
			content: '\\f599';
		}
		.fa-face-laugh-beam:before,
		.fa-laugh-beam:before {
			content: '\\f59a';
		}
		.fa-face-laugh-squint:before,
		.fa-laugh-squint:before {
			content: '\\f59b';
		}
		.fa-face-laugh-wink:before,
		.fa-laugh-wink:before {
			content: '\\f59c';
		}
		.fa-face-meh:before,
		.fa-meh:before {
			content: '\\f11a';
		}
		.fa-face-meh-blank:before,
		.fa-meh-blank:before {
			content: '\\f5a4';
		}
		.fa-face-rolling-eyes:before,
		.fa-meh-rolling-eyes:before {
			content: '\\f5a5';
		}
		.fa-face-sad-cry:before,
		.fa-sad-cry:before {
			content: '\\f5b3';
		}
		.fa-face-sad-tear:before,
		.fa-sad-tear:before {
			content: '\\f5b4';
		}
		.fa-face-smile:before,
		.fa-smile:before {
			content: '\\f118';
		}
		.fa-face-smile-beam:before,
		.fa-smile-beam:before {
			content: '\\f5b8';
		}
		.fa-face-smile-wink:before,
		.fa-smile-wink:before {
			content: '\\f4da';
		}
		.fa-face-surprise:before,
		.fa-surprise:before {
			content: '\\f5c2';
		}
		.fa-face-tired:before,
		.fa-tired:before {
			content: '\\f5c8';
		}
		.fa-fan:before {
			content: '\\f863';
		}
		.fa-faucet:before {
			content: '\\e005';
		}
		.fa-faucet-drip:before {
			content: '\\e006';
		}
		.fa-fax:before {
			content: '\\f1ac';
		}
		.fa-feather:before {
			content: '\\f52d';
		}
		.fa-feather-alt:before,
		.fa-feather-pointed:before {
			content: '\\f56b';
		}
		.fa-ferry:before {
			content: '\\e4ea';
		}
		.fa-file:before {
			content: '\\f15b';
		}
		.fa-file-arrow-down:before,
		.fa-file-download:before {
			content: '\\f56d';
		}
		.fa-file-arrow-up:before,
		.fa-file-upload:before {
			content: '\\f574';
		}
		.fa-file-audio:before {
			content: '\\f1c7';
		}
		.fa-file-circle-check:before {
			content: '\\e493';
		}
		.fa-file-circle-exclamation:before {
			content: '\\e4eb';
		}
		.fa-file-circle-minus:before {
			content: '\\e4ed';
		}
		.fa-file-circle-plus:before {
			content: '\\e4ee';
		}
		.fa-file-circle-question:before {
			content: '\\e4ef';
		}
		.fa-file-circle-xmark:before {
			content: '\\e494';
		}
		.fa-file-code:before {
			content: '\\f1c9';
		}
		.fa-file-contract:before {
			content: '\\f56c';
		}
		.fa-file-csv:before {
			content: '\\f6dd';
		}
		.fa-file-excel:before {
			content: '\\f1c3';
		}
		.fa-arrow-right-from-file:before,
		.fa-file-export:before {
			content: '\\f56e';
		}
		.fa-file-image:before {
			content: '\\f1c5';
		}
		.fa-arrow-right-to-file:before,
		.fa-file-import:before {
			content: '\\f56f';
		}
		.fa-file-invoice:before {
			content: '\\f570';
		}
		.fa-file-invoice-dollar:before {
			content: '\\f571';
		}
		.fa-file-alt:before,
		.fa-file-lines:before,
		.fa-file-text:before {
			content: '\\f15c';
		}
		.fa-file-medical:before {
			content: '\\f477';
		}
		.fa-file-pdf:before {
			content: '\\f1c1';
		}
		.fa-file-edit:before,
		.fa-file-pen:before {
			content: '\\f31c';
		}
		.fa-file-powerpoint:before {
			content: '\\f1c4';
		}
		.fa-file-prescription:before {
			content: '\\f572';
		}
		.fa-file-shield:before {
			content: '\\e4f0';
		}
		.fa-file-signature:before {
			content: '\\f573';
		}
		.fa-file-video:before {
			content: '\\f1c8';
		}
		.fa-file-medical-alt:before,
		.fa-file-waveform:before {
			content: '\\f478';
		}
		.fa-file-word:before {
			content: '\\f1c2';
		}
		.fa-file-archive:before,
		.fa-file-zipper:before {
			content: '\\f1c6';
		}
		.fa-fill:before {
			content: '\\f575';
		}
		.fa-fill-drip:before {
			content: '\\f576';
		}
		.fa-film:before {
			content: '\\f008';
		}
		.fa-filter:before {
			content: '\\f0b0';
		}
		.fa-filter-circle-dollar:before,
		.fa-funnel-dollar:before {
			content: '\\f662';
		}
		.fa-filter-circle-xmark:before {
			content: '\\e17b';
		}
		.fa-fingerprint:before {
			content: '\\f577';
		}
		.fa-fire:before {
			content: '\\f06d';
		}
		.fa-fire-burner:before {
			content: '\\e4f1';
		}
		.fa-fire-extinguisher:before {
			content: '\\f134';
		}
		.fa-fire-alt:before,
		.fa-fire-flame-curved:before {
			content: '\\f7e4';
		}
		.fa-burn:before,
		.fa-fire-flame-simple:before {
			content: '\\f46a';
		}
		.fa-fish:before {
			content: '\\f578';
		}
		.fa-fish-fins:before {
			content: '\\e4f2';
		}
		.fa-flag:before {
			content: '\\f024';
		}
		.fa-flag-checkered:before {
			content: '\\f11e';
		}
		.fa-flag-usa:before {
			content: '\\f74d';
		}
		.fa-flask:before {
			content: '\\f0c3';
		}
		.fa-flask-vial:before {
			content: '\\e4f3';
		}
		.fa-floppy-disk:before,
		.fa-save:before {
			content: '\\f0c7';
		}
		.fa-florin-sign:before {
			content: '\\e184';
		}
		.fa-folder-blank:before,
		.fa-folder:before {
			content: '\\f07b';
		}
		.fa-folder-closed:before {
			content: '\\e185';
		}
		.fa-folder-minus:before {
			content: '\\f65d';
		}
		.fa-folder-open:before {
			content: '\\f07c';
		}
		.fa-folder-plus:before {
			content: '\\f65e';
		}
		.fa-folder-tree:before {
			content: '\\f802';
		}
		.fa-font:before {
			content: '\\f031';
		}
		.fa-football-ball:before,
		.fa-football:before {
			content: '\\f44e';
		}
		.fa-forward:before {
			content: '\\f04e';
		}
		.fa-fast-forward:before,
		.fa-forward-fast:before {
			content: '\\f050';
		}
		.fa-forward-step:before,
		.fa-step-forward:before {
			content: '\\f051';
		}
		.fa-franc-sign:before {
			content: '\\e18f';
		}
		.fa-frog:before {
			content: '\\f52e';
		}
		.fa-futbol-ball:before,
		.fa-futbol:before,
		.fa-soccer-ball:before {
			content: '\\f1e3';
		}
		.fa-g:before {
			content: '\\47';
		}
		.fa-gamepad:before {
			content: '\\f11b';
		}
		.fa-gas-pump:before {
			content: '\\f52f';
		}
		.fa-dashboard:before,
		.fa-gauge-med:before,
		.fa-gauge:before,
		.fa-tachometer-alt-average:before {
			content: '\\f624';
		}
		.fa-gauge-high:before,
		.fa-tachometer-alt-fast:before,
		.fa-tachometer-alt:before {
			content: '\\f625';
		}
		.fa-gauge-simple-med:before,
		.fa-gauge-simple:before,
		.fa-tachometer-average:before {
			content: '\\f629';
		}
		.fa-gauge-simple-high:before,
		.fa-tachometer-fast:before,
		.fa-tachometer:before {
			content: '\\f62a';
		}
		.fa-gavel:before,
		.fa-legal:before {
			content: '\\f0e3';
		}
		.fa-cog:before,
		.fa-gear:before {
			content: '\\f013';
		}
		.fa-cogs:before,
		.fa-gears:before {
			content: '\\f085';
		}
		.fa-gem:before {
			content: '\\f3a5';
		}
		.fa-genderless:before {
			content: '\\f22d';
		}
		.fa-ghost:before {
			content: '\\f6e2';
		}
		.fa-gift:before {
			content: '\\f06b';
		}
		.fa-gifts:before {
			content: '\\f79c';
		}
		.fa-glass-water:before {
			content: '\\e4f4';
		}
		.fa-glass-water-droplet:before {
			content: '\\e4f5';
		}
		.fa-glasses:before {
			content: '\\f530';
		}
		.fa-globe:before {
			content: '\\f0ac';
		}
		.fa-golf-ball-tee:before,
		.fa-golf-ball:before {
			content: '\\f450';
		}
		.fa-gopuram:before {
			content: '\\f664';
		}
		.fa-graduation-cap:before,
		.fa-mortar-board:before {
			content: '\\f19d';
		}
		.fa-greater-than:before {
			content: '\\3e';
		}
		.fa-greater-than-equal:before {
			content: '\\f532';
		}
		.fa-grip-horizontal:before,
		.fa-grip:before {
			content: '\\f58d';
		}
		.fa-grip-lines:before {
			content: '\\f7a4';
		}
		.fa-grip-lines-vertical:before {
			content: '\\f7a5';
		}
		.fa-grip-vertical:before {
			content: '\\f58e';
		}
		.fa-group-arrows-rotate:before {
			content: '\\e4f6';
		}
		.fa-guarani-sign:before {
			content: '\\e19a';
		}
		.fa-guitar:before {
			content: '\\f7a6';
		}
		.fa-gun:before {
			content: '\\e19b';
		}
		.fa-h:before {
			content: '\\48';
		}
		.fa-hammer:before {
			content: '\\f6e3';
		}
		.fa-hamsa:before {
			content: '\\f665';
		}
		.fa-hand-paper:before,
		.fa-hand:before {
			content: '\\f256';
		}
		.fa-hand-back-fist:before,
		.fa-hand-rock:before {
			content: '\\f255';
		}
		.fa-allergies:before,
		.fa-hand-dots:before {
			content: '\\f461';
		}
		.fa-fist-raised:before,
		.fa-hand-fist:before {
			content: '\\f6de';
		}
		.fa-hand-holding:before {
			content: '\\f4bd';
		}
		.fa-hand-holding-dollar:before,
		.fa-hand-holding-usd:before {
			content: '\\f4c0';
		}
		.fa-hand-holding-droplet:before,
		.fa-hand-holding-water:before {
			content: '\\f4c1';
		}
		.fa-hand-holding-hand:before {
			content: '\\e4f7';
		}
		.fa-hand-holding-heart:before {
			content: '\\f4be';
		}
		.fa-hand-holding-medical:before {
			content: '\\e05c';
		}
		.fa-hand-lizard:before {
			content: '\\f258';
		}
		.fa-hand-middle-finger:before {
			content: '\\f806';
		}
		.fa-hand-peace:before {
			content: '\\f25b';
		}
		.fa-hand-point-down:before {
			content: '\\f0a7';
		}
		.fa-hand-point-left:before {
			content: '\\f0a5';
		}
		.fa-hand-point-right:before {
			content: '\\f0a4';
		}
		.fa-hand-point-up:before {
			content: '\\f0a6';
		}
		.fa-hand-pointer:before {
			content: '\\f25a';
		}
		.fa-hand-scissors:before {
			content: '\\f257';
		}
		.fa-hand-sparkles:before {
			content: '\\e05d';
		}
		.fa-hand-spock:before {
			content: '\\f259';
		}
		.fa-handcuffs:before {
			content: '\\e4f8';
		}
		.fa-hands:before,
		.fa-sign-language:before,
		.fa-signing:before {
			content: '\\f2a7';
		}
		.fa-american-sign-language-interpreting:before,
		.fa-asl-interpreting:before,
		.fa-hands-american-sign-language-interpreting:before,
		.fa-hands-asl-interpreting:before {
			content: '\\f2a3';
		}
		.fa-hands-bound:before {
			content: '\\e4f9';
		}
		.fa-hands-bubbles:before,
		.fa-hands-wash:before {
			content: '\\e05e';
		}
		.fa-hands-clapping:before {
			content: '\\e1a8';
		}
		.fa-hands-holding:before {
			content: '\\f4c2';
		}
		.fa-hands-holding-child:before {
			content: '\\e4fa';
		}
		.fa-hands-holding-circle:before {
			content: '\\e4fb';
		}
		.fa-hands-praying:before,
		.fa-praying-hands:before {
			content: '\\f684';
		}
		.fa-handshake:before {
			content: '\\f2b5';
		}
		.fa-hands-helping:before,
		.fa-handshake-angle:before {
			content: '\\f4c4';
		}
		.fa-handshake-alt:before,
		.fa-handshake-simple:before {
			content: '\\f4c6';
		}
		.fa-handshake-alt-slash:before,
		.fa-handshake-simple-slash:before {
			content: '\\e05f';
		}
		.fa-handshake-slash:before {
			content: '\\e060';
		}
		.fa-hanukiah:before {
			content: '\\f6e6';
		}
		.fa-hard-drive:before,
		.fa-hdd:before {
			content: '\\f0a0';
		}
		.fa-hashtag:before {
			content: '\\23';
		}
		.fa-hat-cowboy:before {
			content: '\\f8c0';
		}
		.fa-hat-cowboy-side:before {
			content: '\\f8c1';
		}
		.fa-hat-wizard:before {
			content: '\\f6e8';
		}
		.fa-head-side-cough:before {
			content: '\\e061';
		}
		.fa-head-side-cough-slash:before {
			content: '\\e062';
		}
		.fa-head-side-mask:before {
			content: '\\e063';
		}
		.fa-head-side-virus:before {
			content: '\\e064';
		}
		.fa-header:before,
		.fa-heading:before {
			content: '\\f1dc';
		}
		.fa-headphones:before {
			content: '\\f025';
		}
		.fa-headphones-alt:before,
		.fa-headphones-simple:before {
			content: '\\f58f';
		}
		.fa-headset:before {
			content: '\\f590';
		}
		.fa-heart:before {
			content: '\\f004';
		}
		.fa-heart-circle-bolt:before {
			content: '\\e4fc';
		}
		.fa-heart-circle-check:before {
			content: '\\e4fd';
		}
		.fa-heart-circle-exclamation:before {
			content: '\\e4fe';
		}
		.fa-heart-circle-minus:before {
			content: '\\e4ff';
		}
		.fa-heart-circle-plus:before {
			content: '\\e500';
		}
		.fa-heart-circle-xmark:before {
			content: '\\e501';
		}
		.fa-heart-broken:before,
		.fa-heart-crack:before {
			content: '\\f7a9';
		}
		.fa-heart-pulse:before,
		.fa-heartbeat:before {
			content: '\\f21e';
		}
		.fa-helicopter:before {
			content: '\\f533';
		}
		.fa-helicopter-symbol:before {
			content: '\\e502';
		}
		.fa-hard-hat:before,
		.fa-hat-hard:before,
		.fa-helmet-safety:before {
			content: '\\f807';
		}
		.fa-helmet-un:before {
			content: '\\e503';
		}
		.fa-highlighter:before {
			content: '\\f591';
		}
		.fa-hill-avalanche:before {
			content: '\\e507';
		}
		.fa-hill-rockslide:before {
			content: '\\e508';
		}
		.fa-hippo:before {
			content: '\\f6ed';
		}
		.fa-hockey-puck:before {
			content: '\\f453';
		}
		.fa-holly-berry:before {
			content: '\\f7aa';
		}
		.fa-horse:before {
			content: '\\f6f0';
		}
		.fa-horse-head:before {
			content: '\\f7ab';
		}
		.fa-hospital-alt:before,
		.fa-hospital-wide:before,
		.fa-hospital:before {
			content: '\\f0f8';
		}
		.fa-hospital-user:before {
			content: '\\f80d';
		}
		.fa-hot-tub-person:before,
		.fa-hot-tub:before {
			content: '\\f593';
		}
		.fa-hotdog:before {
			content: '\\f80f';
		}
		.fa-hotel:before {
			content: '\\f594';
		}
		.fa-hourglass-2:before,
		.fa-hourglass-half:before,
		.fa-hourglass:before {
			content: '\\f254';
		}
		.fa-hourglass-empty:before {
			content: '\\f252';
		}
		.fa-hourglass-3:before,
		.fa-hourglass-end:before {
			content: '\\f253';
		}
		.fa-hourglass-1:before,
		.fa-hourglass-start:before {
			content: '\\f251';
		}
		.fa-home-alt:before,
		.fa-home-lg-alt:before,
		.fa-home:before,
		.fa-house:before {
			content: '\\f015';
		}
		.fa-home-lg:before,
		.fa-house-chimney:before {
			content: '\\e3af';
		}
		.fa-house-chimney-crack:before,
		.fa-house-damage:before {
			content: '\\f6f1';
		}
		.fa-clinic-medical:before,
		.fa-house-chimney-medical:before {
			content: '\\f7f2';
		}
		.fa-house-chimney-user:before {
			content: '\\e065';
		}
		.fa-house-chimney-window:before {
			content: '\\e00d';
		}
		.fa-house-circle-check:before {
			content: '\\e509';
		}
		.fa-house-circle-exclamation:before {
			content: '\\e50a';
		}
		.fa-house-circle-xmark:before {
			content: '\\e50b';
		}
		.fa-house-crack:before {
			content: '\\e3b1';
		}
		.fa-house-fire:before {
			content: '\\e50c';
		}
		.fa-house-flag:before {
			content: '\\e50d';
		}
		.fa-house-flood-water:before {
			content: '\\e50e';
		}
		.fa-house-flood-water-circle-arrow-right:before {
			content: '\\e50f';
		}
		.fa-house-laptop:before,
		.fa-laptop-house:before {
			content: '\\e066';
		}
		.fa-house-lock:before {
			content: '\\e510';
		}
		.fa-house-medical:before {
			content: '\\e3b2';
		}
		.fa-house-medical-circle-check:before {
			content: '\\e511';
		}
		.fa-house-medical-circle-exclamation:before {
			content: '\\e512';
		}
		.fa-house-medical-circle-xmark:before {
			content: '\\e513';
		}
		.fa-house-medical-flag:before {
			content: '\\e514';
		}
		.fa-house-signal:before {
			content: '\\e012';
		}
		.fa-house-tsunami:before {
			content: '\\e515';
		}
		.fa-home-user:before,
		.fa-house-user:before {
			content: '\\e1b0';
		}
		.fa-hryvnia-sign:before,
		.fa-hryvnia:before {
			content: '\\f6f2';
		}
		.fa-hurricane:before {
			content: '\\f751';
		}
		.fa-i:before {
			content: '\\49';
		}
		.fa-i-cursor:before {
			content: '\\f246';
		}
		.fa-ice-cream:before {
			content: '\\f810';
		}
		.fa-icicles:before {
			content: '\\f7ad';
		}
		.fa-heart-music-camera-bolt:before,
		.fa-icons:before {
			content: '\\f86d';
		}
		.fa-id-badge:before {
			content: '\\f2c1';
		}
		.fa-drivers-license:before,
		.fa-id-card:before {
			content: '\\f2c2';
		}
		.fa-id-card-alt:before,
		.fa-id-card-clip:before {
			content: '\\f47f';
		}
		.fa-igloo:before {
			content: '\\f7ae';
		}
		.fa-image:before {
			content: '\\f03e';
		}
		.fa-image-portrait:before,
		.fa-portrait:before {
			content: '\\f3e0';
		}
		.fa-images:before {
			content: '\\f302';
		}
		.fa-inbox:before {
			content: '\\f01c';
		}
		.fa-indent:before {
			content: '\\f03c';
		}
		.fa-indian-rupee-sign:before,
		.fa-indian-rupee:before,
		.fa-inr:before {
			content: '\\e1bc';
		}
		.fa-industry:before {
			content: '\\f275';
		}
		.fa-infinity:before {
			content: '\\f534';
		}
		.fa-info:before {
			content: '\\f129';
		}
		.fa-italic:before {
			content: '\\f033';
		}
		.fa-j:before {
			content: '\\4a';
		}
		.fa-jar:before {
			content: '\\e516';
		}
		.fa-jar-wheat:before {
			content: '\\e517';
		}
		.fa-jedi:before {
			content: '\\f669';
		}
		.fa-fighter-jet:before,
		.fa-jet-fighter:before {
			content: '\\f0fb';
		}
		.fa-jet-fighter-up:before {
			content: '\\e518';
		}
		.fa-joint:before {
			content: '\\f595';
		}
		.fa-jug-detergent:before {
			content: '\\e519';
		}
		.fa-k:before {
			content: '\\4b';
		}
		.fa-kaaba:before {
			content: '\\f66b';
		}
		.fa-key:before {
			content: '\\f084';
		}
		.fa-keyboard:before {
			content: '\\f11c';
		}
		.fa-khanda:before {
			content: '\\f66d';
		}
		.fa-kip-sign:before {
			content: '\\e1c4';
		}
		.fa-first-aid:before,
		.fa-kit-medical:before {
			content: '\\f479';
		}
		.fa-kitchen-set:before {
			content: '\\e51a';
		}
		.fa-kiwi-bird:before {
			content: '\\f535';
		}
		.fa-l:before {
			content: '\\4c';
		}
		.fa-land-mine-on:before {
			content: '\\e51b';
		}
		.fa-landmark:before {
			content: '\\f66f';
		}
		.fa-landmark-alt:before,
		.fa-landmark-dome:before {
			content: '\\f752';
		}
		.fa-landmark-flag:before {
			content: '\\e51c';
		}
		.fa-language:before {
			content: '\\f1ab';
		}
		.fa-laptop:before {
			content: '\\f109';
		}
		.fa-laptop-code:before {
			content: '\\f5fc';
		}
		.fa-laptop-file:before {
			content: '\\e51d';
		}
		.fa-laptop-medical:before {
			content: '\\f812';
		}
		.fa-lari-sign:before {
			content: '\\e1c8';
		}
		.fa-layer-group:before {
			content: '\\f5fd';
		}
		.fa-leaf:before {
			content: '\\f06c';
		}
		.fa-left-long:before,
		.fa-long-arrow-alt-left:before {
			content: '\\f30a';
		}
		.fa-arrows-alt-h:before,
		.fa-left-right:before {
			content: '\\f337';
		}
		.fa-lemon:before {
			content: '\\f094';
		}
		.fa-less-than:before {
			content: '\\3c';
		}
		.fa-less-than-equal:before {
			content: '\\f537';
		}
		.fa-life-ring:before {
			content: '\\f1cd';
		}
		.fa-lightbulb:before {
			content: '\\f0eb';
		}
		.fa-lines-leaning:before {
			content: '\\e51e';
		}
		.fa-chain:before,
		.fa-link:before {
			content: '\\f0c1';
		}
		.fa-chain-broken:before,
		.fa-chain-slash:before,
		.fa-link-slash:before,
		.fa-unlink:before {
			content: '\\f127';
		}
		.fa-lira-sign:before {
			content: '\\f195';
		}
		.fa-list-squares:before,
		.fa-list:before {
			content: '\\f03a';
		}
		.fa-list-check:before,
		.fa-tasks:before {
			content: '\\f0ae';
		}
		.fa-list-1-2:before,
		.fa-list-numeric:before,
		.fa-list-ol:before {
			content: '\\f0cb';
		}
		.fa-list-dots:before,
		.fa-list-ul:before {
			content: '\\f0ca';
		}
		.fa-litecoin-sign:before {
			content: '\\e1d3';
		}
		.fa-location-arrow:before {
			content: '\\f124';
		}
		.fa-location-crosshairs:before,
		.fa-location:before {
			content: '\\f601';
		}
		.fa-location-dot:before,
		.fa-map-marker-alt:before {
			content: '\\f3c5';
		}
		.fa-location-pin:before,
		.fa-map-marker:before {
			content: '\\f041';
		}
		.fa-location-pin-lock:before {
			content: '\\e51f';
		}
		.fa-lock:before {
			content: '\\f023';
		}
		.fa-lock-open:before {
			content: '\\f3c1';
		}
		.fa-locust:before {
			content: '\\e520';
		}
		.fa-lungs:before {
			content: '\\f604';
		}
		.fa-lungs-virus:before {
			content: '\\e067';
		}
		.fa-m:before {
			content: '\\4d';
		}
		.fa-magnet:before {
			content: '\\f076';
		}
		.fa-magnifying-glass:before,
		.fa-search:before {
			content: '\\f002';
		}
		.fa-magnifying-glass-arrow-right:before {
			content: '\\e521';
		}
		.fa-magnifying-glass-chart:before {
			content: '\\e522';
		}
		.fa-magnifying-glass-dollar:before,
		.fa-search-dollar:before {
			content: '\\f688';
		}
		.fa-magnifying-glass-location:before,
		.fa-search-location:before {
			content: '\\f689';
		}
		.fa-magnifying-glass-minus:before,
		.fa-search-minus:before {
			content: '\\f010';
		}
		.fa-magnifying-glass-plus:before,
		.fa-search-plus:before {
			content: '\\f00e';
		}
		.fa-manat-sign:before {
			content: '\\e1d5';
		}
		.fa-map:before {
			content: '\\f279';
		}
		.fa-map-location:before,
		.fa-map-marked:before {
			content: '\\f59f';
		}
		.fa-map-location-dot:before,
		.fa-map-marked-alt:before {
			content: '\\f5a0';
		}
		.fa-map-pin:before {
			content: '\\f276';
		}
		.fa-marker:before {
			content: '\\f5a1';
		}
		.fa-mars:before {
			content: '\\f222';
		}
		.fa-mars-and-venus:before {
			content: '\\f224';
		}
		.fa-mars-and-venus-burst:before {
			content: '\\e523';
		}
		.fa-mars-double:before {
			content: '\\f227';
		}
		.fa-mars-stroke:before {
			content: '\\f229';
		}
		.fa-mars-stroke-h:before,
		.fa-mars-stroke-right:before {
			content: '\\f22b';
		}
		.fa-mars-stroke-up:before,
		.fa-mars-stroke-v:before {
			content: '\\f22a';
		}
		.fa-glass-martini-alt:before,
		.fa-martini-glass:before {
			content: '\\f57b';
		}
		.fa-cocktail:before,
		.fa-martini-glass-citrus:before {
			content: '\\f561';
		}
		.fa-glass-martini:before,
		.fa-martini-glass-empty:before {
			content: '\\f000';
		}
		.fa-mask:before {
			content: '\\f6fa';
		}
		.fa-mask-face:before {
			content: '\\e1d7';
		}
		.fa-mask-ventilator:before {
			content: '\\e524';
		}
		.fa-masks-theater:before,
		.fa-theater-masks:before {
			content: '\\f630';
		}
		.fa-mattress-pillow:before {
			content: '\\e525';
		}
		.fa-expand-arrows-alt:before,
		.fa-maximize:before {
			content: '\\f31e';
		}
		.fa-medal:before {
			content: '\\f5a2';
		}
		.fa-memory:before {
			content: '\\f538';
		}
		.fa-menorah:before {
			content: '\\f676';
		}
		.fa-mercury:before {
			content: '\\f223';
		}
		.fa-comment-alt:before,
		.fa-message:before {
			content: '\\f27a';
		}
		.fa-meteor:before {
			content: '\\f753';
		}
		.fa-microchip:before {
			content: '\\f2db';
		}
		.fa-microphone:before {
			content: '\\f130';
		}
		.fa-microphone-alt:before,
		.fa-microphone-lines:before {
			content: '\\f3c9';
		}
		.fa-microphone-alt-slash:before,
		.fa-microphone-lines-slash:before {
			content: '\\f539';
		}
		.fa-microphone-slash:before {
			content: '\\f131';
		}
		.fa-microscope:before {
			content: '\\f610';
		}
		.fa-mill-sign:before {
			content: '\\e1ed';
		}
		.fa-compress-arrows-alt:before,
		.fa-minimize:before {
			content: '\\f78c';
		}
		.fa-minus:before,
		.fa-subtract:before {
			content: '\\f068';
		}
		.fa-mitten:before {
			content: '\\f7b5';
		}
		.fa-mobile-android:before,
		.fa-mobile-phone:before,
		.fa-mobile:before {
			content: '\\f3ce';
		}
		.fa-mobile-button:before {
			content: '\\f10b';
		}
		.fa-mobile-retro:before {
			content: '\\e527';
		}
		.fa-mobile-android-alt:before,
		.fa-mobile-screen:before {
			content: '\\f3cf';
		}
		.fa-mobile-alt:before,
		.fa-mobile-screen-button:before {
			content: '\\f3cd';
		}
		.fa-money-bill:before {
			content: '\\f0d6';
		}
		.fa-money-bill-1:before,
		.fa-money-bill-alt:before {
			content: '\\f3d1';
		}
		.fa-money-bill-1-wave:before,
		.fa-money-bill-wave-alt:before {
			content: '\\f53b';
		}
		.fa-money-bill-transfer:before {
			content: '\\e528';
		}
		.fa-money-bill-trend-up:before {
			content: '\\e529';
		}
		.fa-money-bill-wave:before {
			content: '\\f53a';
		}
		.fa-money-bill-wheat:before {
			content: '\\e52a';
		}
		.fa-money-bills:before {
			content: '\\e1f3';
		}
		.fa-money-check:before {
			content: '\\f53c';
		}
		.fa-money-check-alt:before,
		.fa-money-check-dollar:before {
			content: '\\f53d';
		}
		.fa-monument:before {
			content: '\\f5a6';
		}
		.fa-moon:before {
			content: '\\f186';
		}
		.fa-mortar-pestle:before {
			content: '\\f5a7';
		}
		.fa-mosque:before {
			content: '\\f678';
		}
		.fa-mosquito:before {
			content: '\\e52b';
		}
		.fa-mosquito-net:before {
			content: '\\e52c';
		}
		.fa-motorcycle:before {
			content: '\\f21c';
		}
		.fa-mound:before {
			content: '\\e52d';
		}
		.fa-mountain:before {
			content: '\\f6fc';
		}
		.fa-mountain-city:before {
			content: '\\e52e';
		}
		.fa-mountain-sun:before {
			content: '\\e52f';
		}
		.fa-mug-hot:before {
			content: '\\f7b6';
		}
		.fa-coffee:before,
		.fa-mug-saucer:before {
			content: '\\f0f4';
		}
		.fa-music:before {
			content: '\\f001';
		}
		.fa-n:before {
			content: '\\4e';
		}
		.fa-naira-sign:before {
			content: '\\e1f6';
		}
		.fa-network-wired:before {
			content: '\\f6ff';
		}
		.fa-neuter:before {
			content: '\\f22c';
		}
		.fa-newspaper:before {
			content: '\\f1ea';
		}
		.fa-not-equal:before {
			content: '\\f53e';
		}
		.fa-note-sticky:before,
		.fa-sticky-note:before {
			content: '\\f249';
		}
		.fa-notes-medical:before {
			content: '\\f481';
		}
		.fa-o:before {
			content: '\\4f';
		}
		.fa-object-group:before {
			content: '\\f247';
		}
		.fa-object-ungroup:before {
			content: '\\f248';
		}
		.fa-oil-can:before {
			content: '\\f613';
		}
		.fa-oil-well:before {
			content: '\\e532';
		}
		.fa-om:before {
			content: '\\f679';
		}
		.fa-otter:before {
			content: '\\f700';
		}
		.fa-dedent:before,
		.fa-outdent:before {
			content: '\\f03b';
		}
		.fa-p:before {
			content: '\\50';
		}
		.fa-pager:before {
			content: '\\f815';
		}
		.fa-paint-roller:before {
			content: '\\f5aa';
		}
		.fa-paint-brush:before,
		.fa-paintbrush:before {
			content: '\\f1fc';
		}
		.fa-palette:before {
			content: '\\f53f';
		}
		.fa-pallet:before {
			content: '\\f482';
		}
		.fa-panorama:before {
			content: '\\e209';
		}
		.fa-paper-plane:before {
			content: '\\f1d8';
		}
		.fa-paperclip:before {
			content: '\\f0c6';
		}
		.fa-parachute-box:before {
			content: '\\f4cd';
		}
		.fa-paragraph:before {
			content: '\\f1dd';
		}
		.fa-passport:before {
			content: '\\f5ab';
		}
		.fa-file-clipboard:before,
		.fa-paste:before {
			content: '\\f0ea';
		}
		.fa-pause:before {
			content: '\\f04c';
		}
		.fa-paw:before {
			content: '\\f1b0';
		}
		.fa-peace:before {
			content: '\\f67c';
		}
		.fa-pen:before {
			content: '\\f304';
		}
		.fa-pen-alt:before,
		.fa-pen-clip:before {
			content: '\\f305';
		}
		.fa-pen-fancy:before {
			content: '\\f5ac';
		}
		.fa-pen-nib:before {
			content: '\\f5ad';
		}
		.fa-pen-ruler:before,
		.fa-pencil-ruler:before {
			content: '\\f5ae';
		}
		.fa-edit:before,
		.fa-pen-to-square:before {
			content: '\\f044';
		}
		.fa-pencil-alt:before,
		.fa-pencil:before {
			content: '\\f303';
		}
		.fa-people-arrows-left-right:before,
		.fa-people-arrows:before {
			content: '\\e068';
		}
		.fa-people-carry-box:before,
		.fa-people-carry:before {
			content: '\\f4ce';
		}
		.fa-people-group:before {
			content: '\\e533';
		}
		.fa-people-line:before {
			content: '\\e534';
		}
		.fa-people-pulling:before {
			content: '\\e535';
		}
		.fa-people-robbery:before {
			content: '\\e536';
		}
		.fa-people-roof:before {
			content: '\\e537';
		}
		.fa-pepper-hot:before {
			content: '\\f816';
		}
		.fa-percent:before,
		.fa-percentage:before {
			content: '\\25';
		}
		.fa-male:before,
		.fa-person:before {
			content: '\\f183';
		}
		.fa-person-arrow-down-to-line:before {
			content: '\\e538';
		}
		.fa-person-arrow-up-from-line:before {
			content: '\\e539';
		}
		.fa-biking:before,
		.fa-person-biking:before {
			content: '\\f84a';
		}
		.fa-person-booth:before {
			content: '\\f756';
		}
		.fa-person-breastfeeding:before {
			content: '\\e53a';
		}
		.fa-person-burst:before {
			content: '\\e53b';
		}
		.fa-person-cane:before {
			content: '\\e53c';
		}
		.fa-person-chalkboard:before {
			content: '\\e53d';
		}
		.fa-person-circle-check:before {
			content: '\\e53e';
		}
		.fa-person-circle-exclamation:before {
			content: '\\e53f';
		}
		.fa-person-circle-minus:before {
			content: '\\e540';
		}
		.fa-person-circle-plus:before {
			content: '\\e541';
		}
		.fa-person-circle-question:before {
			content: '\\e542';
		}
		.fa-person-circle-xmark:before {
			content: '\\e543';
		}
		.fa-digging:before,
		.fa-person-digging:before {
			content: '\\f85e';
		}
		.fa-diagnoses:before,
		.fa-person-dots-from-line:before {
			content: '\\f470';
		}
		.fa-female:before,
		.fa-person-dress:before {
			content: '\\f182';
		}
		.fa-person-dress-burst:before {
			content: '\\e544';
		}
		.fa-person-drowning:before {
			content: '\\e545';
		}
		.fa-person-falling:before {
			content: '\\e546';
		}
		.fa-person-falling-burst:before {
			content: '\\e547';
		}
		.fa-person-half-dress:before {
			content: '\\e548';
		}
		.fa-person-harassing:before {
			content: '\\e549';
		}
		.fa-hiking:before,
		.fa-person-hiking:before {
			content: '\\f6ec';
		}
		.fa-person-military-pointing:before {
			content: '\\e54a';
		}
		.fa-person-military-rifle:before {
			content: '\\e54b';
		}
		.fa-person-military-to-person:before {
			content: '\\e54c';
		}
		.fa-person-praying:before,
		.fa-pray:before {
			content: '\\f683';
		}
		.fa-person-pregnant:before {
			content: '\\e31e';
		}
		.fa-person-rays:before {
			content: '\\e54d';
		}
		.fa-person-rifle:before {
			content: '\\e54e';
		}
		.fa-person-running:before,
		.fa-running:before {
			content: '\\f70c';
		}
		.fa-person-shelter:before {
			content: '\\e54f';
		}
		.fa-person-skating:before,
		.fa-skating:before {
			content: '\\f7c5';
		}
		.fa-person-skiing:before,
		.fa-skiing:before {
			content: '\\f7c9';
		}
		.fa-person-skiing-nordic:before,
		.fa-skiing-nordic:before {
			content: '\\f7ca';
		}
		.fa-person-snowboarding:before,
		.fa-snowboarding:before {
			content: '\\f7ce';
		}
		.fa-person-swimming:before,
		.fa-swimmer:before {
			content: '\\f5c4';
		}
		.fa-person-through-window:before {
			content: '\\e433';
		}
		.fa-person-walking:before,
		.fa-walking:before {
			content: '\\f554';
		}
		.fa-person-walking-arrow-loop-left:before {
			content: '\\e551';
		}
		.fa-person-walking-arrow-right:before {
			content: '\\e552';
		}
		.fa-person-walking-dashed-line-arrow-right:before {
			content: '\\e553';
		}
		.fa-person-walking-luggage:before {
			content: '\\e554';
		}
		.fa-blind:before,
		.fa-person-walking-with-cane:before {
			content: '\\f29d';
		}
		.fa-peseta-sign:before {
			content: '\\e221';
		}
		.fa-peso-sign:before {
			content: '\\e222';
		}
		.fa-phone:before {
			content: '\\f095';
		}
		.fa-phone-alt:before,
		.fa-phone-flip:before {
			content: '\\f879';
		}
		.fa-phone-slash:before {
			content: '\\f3dd';
		}
		.fa-phone-volume:before,
		.fa-volume-control-phone:before {
			content: '\\f2a0';
		}
		.fa-photo-film:before,
		.fa-photo-video:before {
			content: '\\f87c';
		}
		.fa-piggy-bank:before {
			content: '\\f4d3';
		}
		.fa-pills:before {
			content: '\\f484';
		}
		.fa-pizza-slice:before {
			content: '\\f818';
		}
		.fa-place-of-worship:before {
			content: '\\f67f';
		}
		.fa-plane:before {
			content: '\\f072';
		}
		.fa-plane-arrival:before {
			content: '\\f5af';
		}
		.fa-plane-circle-check:before {
			content: '\\e555';
		}
		.fa-plane-circle-exclamation:before {
			content: '\\e556';
		}
		.fa-plane-circle-xmark:before {
			content: '\\e557';
		}
		.fa-plane-departure:before {
			content: '\\f5b0';
		}
		.fa-plane-lock:before {
			content: '\\e558';
		}
		.fa-plane-slash:before {
			content: '\\e069';
		}
		.fa-plane-up:before {
			content: '\\e22d';
		}
		.fa-plant-wilt:before {
			content: '\\e43b';
		}
		.fa-plate-wheat:before {
			content: '\\e55a';
		}
		.fa-play:before {
			content: '\\f04b';
		}
		.fa-plug:before {
			content: '\\f1e6';
		}
		.fa-plug-circle-bolt:before {
			content: '\\e55b';
		}
		.fa-plug-circle-check:before {
			content: '\\e55c';
		}
		.fa-plug-circle-exclamation:before {
			content: '\\e55d';
		}
		.fa-plug-circle-minus:before {
			content: '\\e55e';
		}
		.fa-plug-circle-plus:before {
			content: '\\e55f';
		}
		.fa-plug-circle-xmark:before {
			content: '\\e560';
		}
		.fa-add:before,
		.fa-plus:before {
			content: '\\2b';
		}
		.fa-plus-minus:before {
			content: '\\e43c';
		}
		.fa-podcast:before {
			content: '\\f2ce';
		}
		.fa-poo:before {
			content: '\\f2fe';
		}
		.fa-poo-bolt:before,
		.fa-poo-storm:before {
			content: '\\f75a';
		}
		.fa-poop:before {
			content: '\\f619';
		}
		.fa-power-off:before {
			content: '\\f011';
		}
		.fa-prescription:before {
			content: '\\f5b1';
		}
		.fa-prescription-bottle:before {
			content: '\\f485';
		}
		.fa-prescription-bottle-alt:before,
		.fa-prescription-bottle-medical:before {
			content: '\\f486';
		}
		.fa-print:before {
			content: '\\f02f';
		}
		.fa-pump-medical:before {
			content: '\\e06a';
		}
		.fa-pump-soap:before {
			content: '\\e06b';
		}
		.fa-puzzle-piece:before {
			content: '\\f12e';
		}
		.fa-q:before {
			content: '\\51';
		}
		.fa-qrcode:before {
			content: '\\f029';
		}
		.fa-question:before {
			content: '\\3f';
		}
		.fa-quote-left-alt:before,
		.fa-quote-left:before {
			content: '\\f10d';
		}
		.fa-quote-right-alt:before,
		.fa-quote-right:before {
			content: '\\f10e';
		}
		.fa-r:before {
			content: '\\52';
		}
		.fa-radiation:before {
			content: '\\f7b9';
		}
		.fa-radio:before {
			content: '\\f8d7';
		}
		.fa-rainbow:before {
			content: '\\f75b';
		}
		.fa-ranking-star:before {
			content: '\\e561';
		}
		.fa-receipt:before {
			content: '\\f543';
		}
		.fa-record-vinyl:before {
			content: '\\f8d9';
		}
		.fa-ad:before,
		.fa-rectangle-ad:before {
			content: '\\f641';
		}
		.fa-list-alt:before,
		.fa-rectangle-list:before {
			content: '\\f022';
		}
		.fa-rectangle-times:before,
		.fa-rectangle-xmark:before,
		.fa-times-rectangle:before,
		.fa-window-close:before {
			content: '\\f410';
		}
		.fa-recycle:before {
			content: '\\f1b8';
		}
		.fa-registered:before {
			content: '\\f25d';
		}
		.fa-repeat:before {
			content: '\\f363';
		}
		.fa-mail-reply:before,
		.fa-reply:before {
			content: '\\f3e5';
		}
		.fa-mail-reply-all:before,
		.fa-reply-all:before {
			content: '\\f122';
		}
		.fa-republican:before {
			content: '\\f75e';
		}
		.fa-restroom:before {
			content: '\\f7bd';
		}
		.fa-retweet:before {
			content: '\\f079';
		}
		.fa-ribbon:before {
			content: '\\f4d6';
		}
		.fa-right-from-bracket:before,
		.fa-sign-out-alt:before {
			content: '\\f2f5';
		}
		.fa-exchange-alt:before,
		.fa-right-left:before {
			content: '\\f362';
		}
		.fa-long-arrow-alt-right:before,
		.fa-right-long:before {
			content: '\\f30b';
		}
		.fa-right-to-bracket:before,
		.fa-sign-in-alt:before {
			content: '\\f2f6';
		}
		.fa-ring:before {
			content: '\\f70b';
		}
		.fa-road:before {
			content: '\\f018';
		}
		.fa-road-barrier:before {
			content: '\\e562';
		}
		.fa-road-bridge:before {
			content: '\\e563';
		}
		.fa-road-circle-check:before {
			content: '\\e564';
		}
		.fa-road-circle-exclamation:before {
			content: '\\e565';
		}
		.fa-road-circle-xmark:before {
			content: '\\e566';
		}
		.fa-road-lock:before {
			content: '\\e567';
		}
		.fa-road-spikes:before {
			content: '\\e568';
		}
		.fa-robot:before {
			content: '\\f544';
		}
		.fa-rocket:before {
			content: '\\f135';
		}
		.fa-rotate:before,
		.fa-sync-alt:before {
			content: '\\f2f1';
		}
		.fa-rotate-back:before,
		.fa-rotate-backward:before,
		.fa-rotate-left:before,
		.fa-undo-alt:before {
			content: '\\f2ea';
		}
		.fa-redo-alt:before,
		.fa-rotate-forward:before,
		.fa-rotate-right:before {
			content: '\\f2f9';
		}
		.fa-route:before {
			content: '\\f4d7';
		}
		.fa-feed:before,
		.fa-rss:before {
			content: '\\f09e';
		}
		.fa-rouble:before,
		.fa-rub:before,
		.fa-ruble-sign:before,
		.fa-ruble:before {
			content: '\\f158';
		}
		.fa-rug:before {
			content: '\\e569';
		}
		.fa-ruler:before {
			content: '\\f545';
		}
		.fa-ruler-combined:before {
			content: '\\f546';
		}
		.fa-ruler-horizontal:before {
			content: '\\f547';
		}
		.fa-ruler-vertical:before {
			content: '\\f548';
		}
		.fa-rupee-sign:before,
		.fa-rupee:before {
			content: '\\f156';
		}
		.fa-rupiah-sign:before {
			content: '\\e23d';
		}
		.fa-s:before {
			content: '\\53';
		}
		.fa-sack-dollar:before {
			content: '\\f81d';
		}
		.fa-sack-xmark:before {
			content: '\\e56a';
		}
		.fa-sailboat:before {
			content: '\\e445';
		}
		.fa-satellite:before {
			content: '\\f7bf';
		}
		.fa-satellite-dish:before {
			content: '\\f7c0';
		}
		.fa-balance-scale:before,
		.fa-scale-balanced:before {
			content: '\\f24e';
		}
		.fa-balance-scale-left:before,
		.fa-scale-unbalanced:before {
			content: '\\f515';
		}
		.fa-balance-scale-right:before,
		.fa-scale-unbalanced-flip:before {
			content: '\\f516';
		}
		.fa-school:before {
			content: '\\f549';
		}
		.fa-school-circle-check:before {
			content: '\\e56b';
		}
		.fa-school-circle-exclamation:before {
			content: '\\e56c';
		}
		.fa-school-circle-xmark:before {
			content: '\\e56d';
		}
		.fa-school-flag:before {
			content: '\\e56e';
		}
		.fa-school-lock:before {
			content: '\\e56f';
		}
		.fa-cut:before,
		.fa-scissors:before {
			content: '\\f0c4';
		}
		.fa-screwdriver:before {
			content: '\\f54a';
		}
		.fa-screwdriver-wrench:before,
		.fa-tools:before {
			content: '\\f7d9';
		}
		.fa-scroll:before {
			content: '\\f70e';
		}
		.fa-scroll-torah:before,
		.fa-torah:before {
			content: '\\f6a0';
		}
		.fa-sd-card:before {
			content: '\\f7c2';
		}
		.fa-section:before {
			content: '\\e447';
		}
		.fa-seedling:before,
		.fa-sprout:before {
			content: '\\f4d8';
		}
		.fa-server:before {
			content: '\\f233';
		}
		.fa-shapes:before,
		.fa-triangle-circle-square:before {
			content: '\\f61f';
		}
		.fa-arrow-turn-right:before,
		.fa-mail-forward:before,
		.fa-share:before {
			content: '\\f064';
		}
		.fa-share-from-square:before,
		.fa-share-square:before {
			content: '\\f14d';
		}
		.fa-share-alt:before,
		.fa-share-nodes:before {
			content: '\\f1e0';
		}
		.fa-sheet-plastic:before {
			content: '\\e571';
		}
		.fa-ils:before,
		.fa-shekel-sign:before,
		.fa-shekel:before,
		.fa-sheqel-sign:before,
		.fa-sheqel:before {
			content: '\\f20b';
		}
		.fa-shield-blank:before,
		.fa-shield:before {
			content: '\\f132';
		}
		.fa-shield-cat:before {
			content: '\\e572';
		}
		.fa-shield-dog:before {
			content: '\\e573';
		}
		.fa-shield-alt:before,
		.fa-shield-halved:before {
			content: '\\f3ed';
		}
		.fa-shield-heart:before {
			content: '\\e574';
		}
		.fa-shield-virus:before {
			content: '\\e06c';
		}
		.fa-ship:before {
			content: '\\f21a';
		}
		.fa-shirt:before,
		.fa-t-shirt:before,
		.fa-tshirt:before {
			content: '\\f553';
		}
		.fa-shoe-prints:before {
			content: '\\f54b';
		}
		.fa-shop:before,
		.fa-store-alt:before {
			content: '\\f54f';
		}
		.fa-shop-lock:before {
			content: '\\e4a5';
		}
		.fa-shop-slash:before,
		.fa-store-alt-slash:before {
			content: '\\e070';
		}
		.fa-shower:before {
			content: '\\f2cc';
		}
		.fa-shrimp:before {
			content: '\\e448';
		}
		.fa-random:before,
		.fa-shuffle:before {
			content: '\\f074';
		}
		.fa-shuttle-space:before,
		.fa-space-shuttle:before {
			content: '\\f197';
		}
		.fa-sign-hanging:before,
		.fa-sign:before {
			content: '\\f4d9';
		}
		.fa-signal-5:before,
		.fa-signal-perfect:before,
		.fa-signal:before {
			content: '\\f012';
		}
		.fa-signature:before {
			content: '\\f5b7';
		}
		.fa-map-signs:before,
		.fa-signs-post:before {
			content: '\\f277';
		}
		.fa-sim-card:before {
			content: '\\f7c4';
		}
		.fa-sink:before {
			content: '\\e06d';
		}
		.fa-sitemap:before {
			content: '\\f0e8';
		}
		.fa-skull:before {
			content: '\\f54c';
		}
		.fa-skull-crossbones:before {
			content: '\\f714';
		}
		.fa-slash:before {
			content: '\\f715';
		}
		.fa-sleigh:before {
			content: '\\f7cc';
		}
		.fa-sliders-h:before,
		.fa-sliders:before {
			content: '\\f1de';
		}
		.fa-smog:before {
			content: '\\f75f';
		}
		.fa-smoking:before {
			content: '\\f48d';
		}
		.fa-snowflake:before {
			content: '\\f2dc';
		}
		.fa-snowman:before {
			content: '\\f7d0';
		}
		.fa-snowplow:before {
			content: '\\f7d2';
		}
		.fa-soap:before {
			content: '\\e06e';
		}
		.fa-socks:before {
			content: '\\f696';
		}
		.fa-solar-panel:before {
			content: '\\f5ba';
		}
		.fa-sort:before,
		.fa-unsorted:before {
			content: '\\f0dc';
		}
		.fa-sort-desc:before,
		.fa-sort-down:before {
			content: '\\f0dd';
		}
		.fa-sort-asc:before,
		.fa-sort-up:before {
			content: '\\f0de';
		}
		.fa-spa:before {
			content: '\\f5bb';
		}
		.fa-pastafarianism:before,
		.fa-spaghetti-monster-flying:before {
			content: '\\f67b';
		}
		.fa-spell-check:before {
			content: '\\f891';
		}
		.fa-spider:before {
			content: '\\f717';
		}
		.fa-spinner:before {
			content: '\\f110';
		}
		.fa-splotch:before {
			content: '\\f5bc';
		}
		.fa-spoon:before,
		.fa-utensil-spoon:before {
			content: '\\f2e5';
		}
		.fa-spray-can:before {
			content: '\\f5bd';
		}
		.fa-air-freshener:before,
		.fa-spray-can-sparkles:before {
			content: '\\f5d0';
		}
		.fa-square:before {
			content: '\\f0c8';
		}
		.fa-external-link-square:before,
		.fa-square-arrow-up-right:before {
			content: '\\f14c';
		}
		.fa-caret-square-down:before,
		.fa-square-caret-down:before {
			content: '\\f150';
		}
		.fa-caret-square-left:before,
		.fa-square-caret-left:before {
			content: '\\f191';
		}
		.fa-caret-square-right:before,
		.fa-square-caret-right:before {
			content: '\\f152';
		}
		.fa-caret-square-up:before,
		.fa-square-caret-up:before {
			content: '\\f151';
		}
		.fa-check-square:before,
		.fa-square-check:before {
			content: '\\f14a';
		}
		.fa-envelope-square:before,
		.fa-square-envelope:before {
			content: '\\f199';
		}
		.fa-square-full:before {
			content: '\\f45c';
		}
		.fa-h-square:before,
		.fa-square-h:before {
			content: '\\f0fd';
		}
		.fa-minus-square:before,
		.fa-square-minus:before {
			content: '\\f146';
		}
		.fa-square-nfi:before {
			content: '\\e576';
		}
		.fa-parking:before,
		.fa-square-parking:before {
			content: '\\f540';
		}
		.fa-pen-square:before,
		.fa-pencil-square:before,
		.fa-square-pen:before {
			content: '\\f14b';
		}
		.fa-square-person-confined:before {
			content: '\\e577';
		}
		.fa-phone-square:before,
		.fa-square-phone:before {
			content: '\\f098';
		}
		.fa-phone-square-alt:before,
		.fa-square-phone-flip:before {
			content: '\\f87b';
		}
		.fa-plus-square:before,
		.fa-square-plus:before {
			content: '\\f0fe';
		}
		.fa-poll-h:before,
		.fa-square-poll-horizontal:before {
			content: '\\f682';
		}
		.fa-poll:before,
		.fa-square-poll-vertical:before {
			content: '\\f681';
		}
		.fa-square-root-alt:before,
		.fa-square-root-variable:before {
			content: '\\f698';
		}
		.fa-rss-square:before,
		.fa-square-rss:before {
			content: '\\f143';
		}
		.fa-share-alt-square:before,
		.fa-square-share-nodes:before {
			content: '\\f1e1';
		}
		.fa-external-link-square-alt:before,
		.fa-square-up-right:before {
			content: '\\f360';
		}
		.fa-square-virus:before {
			content: '\\e578';
		}
		.fa-square-xmark:before,
		.fa-times-square:before,
		.fa-xmark-square:before {
			content: '\\f2d3';
		}
		.fa-rod-asclepius:before,
		.fa-rod-snake:before,
		.fa-staff-aesculapius:before,
		.fa-staff-snake:before {
			content: '\\e579';
		}
		.fa-stairs:before {
			content: '\\e289';
		}
		.fa-stamp:before {
			content: '\\f5bf';
		}
		.fa-star:before {
			content: '\\f005';
		}
		.fa-star-and-crescent:before {
			content: '\\f699';
		}
		.fa-star-half:before {
			content: '\\f089';
		}
		.fa-star-half-alt:before,
		.fa-star-half-stroke:before {
			content: '\\f5c0';
		}
		.fa-star-of-david:before {
			content: '\\f69a';
		}
		.fa-star-of-life:before {
			content: '\\f621';
		}
		.fa-gbp:before,
		.fa-pound-sign:before,
		.fa-sterling-sign:before {
			content: '\\f154';
		}
		.fa-stethoscope:before {
			content: '\\f0f1';
		}
		.fa-stop:before {
			content: '\\f04d';
		}
		.fa-stopwatch:before {
			content: '\\f2f2';
		}
		.fa-stopwatch-20:before {
			content: '\\e06f';
		}
		.fa-store:before {
			content: '\\f54e';
		}
		.fa-store-slash:before {
			content: '\\e071';
		}
		.fa-street-view:before {
			content: '\\f21d';
		}
		.fa-strikethrough:before {
			content: '\\f0cc';
		}
		.fa-stroopwafel:before {
			content: '\\f551';
		}
		.fa-subscript:before {
			content: '\\f12c';
		}
		.fa-suitcase:before {
			content: '\\f0f2';
		}
		.fa-medkit:before,
		.fa-suitcase-medical:before {
			content: '\\f0fa';
		}
		.fa-suitcase-rolling:before {
			content: '\\f5c1';
		}
		.fa-sun:before {
			content: '\\f185';
		}
		.fa-sun-plant-wilt:before {
			content: '\\e57a';
		}
		.fa-superscript:before {
			content: '\\f12b';
		}
		.fa-swatchbook:before {
			content: '\\f5c3';
		}
		.fa-synagogue:before {
			content: '\\f69b';
		}
		.fa-syringe:before {
			content: '\\f48e';
		}
		.fa-t:before {
			content: '\\54';
		}
		.fa-table:before {
			content: '\\f0ce';
		}
		.fa-table-cells:before,
		.fa-th:before {
			content: '\\f00a';
		}
		.fa-table-cells-large:before,
		.fa-th-large:before {
			content: '\\f009';
		}
		.fa-columns:before,
		.fa-table-columns:before {
			content: '\\f0db';
		}
		.fa-table-list:before,
		.fa-th-list:before {
			content: '\\f00b';
		}
		.fa-ping-pong-paddle-ball:before,
		.fa-table-tennis-paddle-ball:before,
		.fa-table-tennis:before {
			content: '\\f45d';
		}
		.fa-tablet-android:before,
		.fa-tablet:before {
			content: '\\f3fb';
		}
		.fa-tablet-button:before {
			content: '\\f10a';
		}
		.fa-tablet-alt:before,
		.fa-tablet-screen-button:before {
			content: '\\f3fa';
		}
		.fa-tablets:before {
			content: '\\f490';
		}
		.fa-digital-tachograph:before,
		.fa-tachograph-digital:before {
			content: '\\f566';
		}
		.fa-tag:before {
			content: '\\f02b';
		}
		.fa-tags:before {
			content: '\\f02c';
		}
		.fa-tape:before {
			content: '\\f4db';
		}
		.fa-tarp:before {
			content: '\\e57b';
		}
		.fa-tarp-droplet:before {
			content: '\\e57c';
		}
		.fa-cab:before,
		.fa-taxi:before {
			content: '\\f1ba';
		}
		.fa-teeth:before {
			content: '\\f62e';
		}
		.fa-teeth-open:before {
			content: '\\f62f';
		}
		.fa-temperature-arrow-down:before,
		.fa-temperature-down:before {
			content: '\\e03f';
		}
		.fa-temperature-arrow-up:before,
		.fa-temperature-up:before {
			content: '\\e040';
		}
		.fa-temperature-0:before,
		.fa-temperature-empty:before,
		.fa-thermometer-0:before,
		.fa-thermometer-empty:before {
			content: '\\f2cb';
		}
		.fa-temperature-4:before,
		.fa-temperature-full:before,
		.fa-thermometer-4:before,
		.fa-thermometer-full:before {
			content: '\\f2c7';
		}
		.fa-temperature-2:before,
		.fa-temperature-half:before,
		.fa-thermometer-2:before,
		.fa-thermometer-half:before {
			content: '\\f2c9';
		}
		.fa-temperature-high:before {
			content: '\\f769';
		}
		.fa-temperature-low:before {
			content: '\\f76b';
		}
		.fa-temperature-1:before,
		.fa-temperature-quarter:before,
		.fa-thermometer-1:before,
		.fa-thermometer-quarter:before {
			content: '\\f2ca';
		}
		.fa-temperature-3:before,
		.fa-temperature-three-quarters:before,
		.fa-thermometer-3:before,
		.fa-thermometer-three-quarters:before {
			content: '\\f2c8';
		}
		.fa-tenge-sign:before,
		.fa-tenge:before {
			content: '\\f7d7';
		}
		.fa-tent:before {
			content: '\\e57d';
		}
		.fa-tent-arrow-down-to-line:before {
			content: '\\e57e';
		}
		.fa-tent-arrow-left-right:before {
			content: '\\e57f';
		}
		.fa-tent-arrow-turn-left:before {
			content: '\\e580';
		}
		.fa-tent-arrows-down:before {
			content: '\\e581';
		}
		.fa-tents:before {
			content: '\\e582';
		}
		.fa-terminal:before {
			content: '\\f120';
		}
		.fa-text-height:before {
			content: '\\f034';
		}
		.fa-remove-format:before,
		.fa-text-slash:before {
			content: '\\f87d';
		}
		.fa-text-width:before {
			content: '\\f035';
		}
		.fa-thermometer:before {
			content: '\\f491';
		}
		.fa-thumbs-down:before {
			content: '\\f165';
		}
		.fa-thumbs-up:before {
			content: '\\f164';
		}
		.fa-thumb-tack:before,
		.fa-thumbtack:before {
			content: '\\f08d';
		}
		.fa-ticket:before {
			content: '\\f145';
		}
		.fa-ticket-alt:before,
		.fa-ticket-simple:before {
			content: '\\f3ff';
		}
		.fa-timeline:before {
			content: '\\e29c';
		}
		.fa-toggle-off:before {
			content: '\\f204';
		}
		.fa-toggle-on:before {
			content: '\\f205';
		}
		.fa-toilet:before {
			content: '\\f7d8';
		}
		.fa-toilet-paper:before {
			content: '\\f71e';
		}
		.fa-toilet-paper-slash:before {
			content: '\\e072';
		}
		.fa-toilet-portable:before {
			content: '\\e583';
		}
		.fa-toilets-portable:before {
			content: '\\e584';
		}
		.fa-toolbox:before {
			content: '\\f552';
		}
		.fa-tooth:before {
			content: '\\f5c9';
		}
		.fa-torii-gate:before {
			content: '\\f6a1';
		}
		.fa-tornado:before {
			content: '\\f76f';
		}
		.fa-broadcast-tower:before,
		.fa-tower-broadcast:before {
			content: '\\f519';
		}
		.fa-tower-cell:before {
			content: '\\e585';
		}
		.fa-tower-observation:before {
			content: '\\e586';
		}
		.fa-tractor:before {
			content: '\\f722';
		}
		.fa-trademark:before {
			content: '\\f25c';
		}
		.fa-traffic-light:before {
			content: '\\f637';
		}
		.fa-trailer:before {
			content: '\\e041';
		}
		.fa-train:before {
			content: '\\f238';
		}
		.fa-subway:before,
		.fa-train-subway:before {
			content: '\\f239';
		}
		.fa-train-tram:before,
		.fa-tram:before {
			content: '\\f7da';
		}
		.fa-transgender-alt:before,
		.fa-transgender:before {
			content: '\\f225';
		}
		.fa-trash:before {
			content: '\\f1f8';
		}
		.fa-trash-arrow-up:before,
		.fa-trash-restore:before {
			content: '\\f829';
		}
		.fa-trash-alt:before,
		.fa-trash-can:before {
			content: '\\f2ed';
		}
		.fa-trash-can-arrow-up:before,
		.fa-trash-restore-alt:before {
			content: '\\f82a';
		}
		.fa-tree:before {
			content: '\\f1bb';
		}
		.fa-tree-city:before {
			content: '\\e587';
		}
		.fa-exclamation-triangle:before,
		.fa-triangle-exclamation:before,
		.fa-warning:before {
			content: '\\f071';
		}
		.fa-trophy:before {
			content: '\\f091';
		}
		.fa-trowel:before {
			content: '\\e589';
		}
		.fa-trowel-bricks:before {
			content: '\\e58a';
		}
		.fa-truck:before {
			content: '\\f0d1';
		}
		.fa-truck-arrow-right:before {
			content: '\\e58b';
		}
		.fa-truck-droplet:before {
			content: '\\e58c';
		}
		.fa-shipping-fast:before,
		.fa-truck-fast:before {
			content: '\\f48b';
		}
		.fa-truck-field:before {
			content: '\\e58d';
		}
		.fa-truck-field-un:before {
			content: '\\e58e';
		}
		.fa-truck-front:before {
			content: '\\e2b7';
		}
		.fa-ambulance:before,
		.fa-truck-medical:before {
			content: '\\f0f9';
		}
		.fa-truck-monster:before {
			content: '\\f63b';
		}
		.fa-truck-moving:before {
			content: '\\f4df';
		}
		.fa-truck-pickup:before {
			content: '\\f63c';
		}
		.fa-truck-plane:before {
			content: '\\e58f';
		}
		.fa-truck-loading:before,
		.fa-truck-ramp-box:before {
			content: '\\f4de';
		}
		.fa-teletype:before,
		.fa-tty:before {
			content: '\\f1e4';
		}
		.fa-try:before,
		.fa-turkish-lira-sign:before,
		.fa-turkish-lira:before {
			content: '\\e2bb';
		}
		.fa-level-down-alt:before,
		.fa-turn-down:before {
			content: '\\f3be';
		}
		.fa-level-up-alt:before,
		.fa-turn-up:before {
			content: '\\f3bf';
		}
		.fa-television:before,
		.fa-tv-alt:before,
		.fa-tv:before {
			content: '\\f26c';
		}
		.fa-u:before {
			content: '\\55';
		}
		.fa-umbrella:before {
			content: '\\f0e9';
		}
		.fa-umbrella-beach:before {
			content: '\\f5ca';
		}
		.fa-underline:before {
			content: '\\f0cd';
		}
		.fa-universal-access:before {
			content: '\\f29a';
		}
		.fa-unlock:before {
			content: '\\f09c';
		}
		.fa-unlock-alt:before,
		.fa-unlock-keyhole:before {
			content: '\\f13e';
		}
		.fa-arrows-alt-v:before,
		.fa-up-down:before {
			content: '\\f338';
		}
		.fa-arrows-alt:before,
		.fa-up-down-left-right:before {
			content: '\\f0b2';
		}
		.fa-long-arrow-alt-up:before,
		.fa-up-long:before {
			content: '\\f30c';
		}
		.fa-expand-alt:before,
		.fa-up-right-and-down-left-from-center:before {
			content: '\\f424';
		}
		.fa-external-link-alt:before,
		.fa-up-right-from-square:before {
			content: '\\f35d';
		}
		.fa-upload:before {
			content: '\\f093';
		}
		.fa-user:before {
			content: '\\f007';
		}
		.fa-user-astronaut:before {
			content: '\\f4fb';
		}
		.fa-user-check:before {
			content: '\\f4fc';
		}
		.fa-user-clock:before {
			content: '\\f4fd';
		}
		.fa-user-doctor:before,
		.fa-user-md:before {
			content: '\\f0f0';
		}
		.fa-user-cog:before,
		.fa-user-gear:before {
			content: '\\f4fe';
		}
		.fa-user-graduate:before {
			content: '\\f501';
		}
		.fa-user-friends:before,
		.fa-user-group:before {
			content: '\\f500';
		}
		.fa-user-injured:before {
			content: '\\f728';
		}
		.fa-user-alt:before,
		.fa-user-large:before {
			content: '\\f406';
		}
		.fa-user-alt-slash:before,
		.fa-user-large-slash:before {
			content: '\\f4fa';
		}
		.fa-user-lock:before {
			content: '\\f502';
		}
		.fa-user-minus:before {
			content: '\\f503';
		}
		.fa-user-ninja:before {
			content: '\\f504';
		}
		.fa-user-nurse:before {
			content: '\\f82f';
		}
		.fa-user-edit:before,
		.fa-user-pen:before {
			content: '\\f4ff';
		}
		.fa-user-plus:before {
			content: '\\f234';
		}
		.fa-user-secret:before {
			content: '\\f21b';
		}
		.fa-user-shield:before {
			content: '\\f505';
		}
		.fa-user-slash:before {
			content: '\\f506';
		}
		.fa-user-tag:before {
			content: '\\f507';
		}
		.fa-user-tie:before {
			content: '\\f508';
		}
		.fa-user-times:before,
		.fa-user-xmark:before {
			content: '\\f235';
		}
		.fa-users:before {
			content: '\\f0c0';
		}
		.fa-users-between-lines:before {
			content: '\\e591';
		}
		.fa-users-cog:before,
		.fa-users-gear:before {
			content: '\\f509';
		}
		.fa-users-line:before {
			content: '\\e592';
		}
		.fa-users-rays:before {
			content: '\\e593';
		}
		.fa-users-rectangle:before {
			content: '\\e594';
		}
		.fa-users-slash:before {
			content: '\\e073';
		}
		.fa-users-viewfinder:before {
			content: '\\e595';
		}
		.fa-cutlery:before,
		.fa-utensils:before {
			content: '\\f2e7';
		}
		.fa-v:before {
			content: '\\56';
		}
		.fa-shuttle-van:before,
		.fa-van-shuttle:before {
			content: '\\f5b6';
		}
		.fa-vault:before {
			content: '\\e2c5';
		}
		.fa-vector-square:before {
			content: '\\f5cb';
		}
		.fa-venus:before {
			content: '\\f221';
		}
		.fa-venus-double:before {
			content: '\\f226';
		}
		.fa-venus-mars:before {
			content: '\\f228';
		}
		.fa-vest:before {
			content: '\\e085';
		}
		.fa-vest-patches:before {
			content: '\\e086';
		}
		.fa-vial:before {
			content: '\\f492';
		}
		.fa-vial-circle-check:before {
			content: '\\e596';
		}
		.fa-vial-virus:before {
			content: '\\e597';
		}
		.fa-vials:before {
			content: '\\f493';
		}
		.fa-video-camera:before,
		.fa-video:before {
			content: '\\f03d';
		}
		.fa-video-slash:before {
			content: '\\f4e2';
		}
		.fa-vihara:before {
			content: '\\f6a7';
		}
		.fa-virus:before {
			content: '\\e074';
		}
		.fa-virus-covid:before {
			content: '\\e4a8';
		}
		.fa-virus-covid-slash:before {
			content: '\\e4a9';
		}
		.fa-virus-slash:before {
			content: '\\e075';
		}
		.fa-viruses:before {
			content: '\\e076';
		}
		.fa-voicemail:before {
			content: '\\f897';
		}
		.fa-volcano:before {
			content: '\\f770';
		}
		.fa-volleyball-ball:before,
		.fa-volleyball:before {
			content: '\\f45f';
		}
		.fa-volume-high:before,
		.fa-volume-up:before {
			content: '\\f028';
		}
		.fa-volume-down:before,
		.fa-volume-low:before {
			content: '\\f027';
		}
		.fa-volume-off:before {
			content: '\\f026';
		}
		.fa-volume-mute:before,
		.fa-volume-times:before,
		.fa-volume-xmark:before {
			content: '\\f6a9';
		}
		.fa-vr-cardboard:before {
			content: '\\f729';
		}
		.fa-w:before {
			content: '\\57';
		}
		.fa-walkie-talkie:before {
			content: '\\f8ef';
		}
		.fa-wallet:before {
			content: '\\f555';
		}
		.fa-magic:before,
		.fa-wand-magic:before {
			content: '\\f0d0';
		}
		.fa-magic-wand-sparkles:before,
		.fa-wand-magic-sparkles:before {
			content: '\\e2ca';
		}
		.fa-wand-sparkles:before {
			content: '\\f72b';
		}
		.fa-warehouse:before {
			content: '\\f494';
		}
		.fa-water:before {
			content: '\\f773';
		}
		.fa-ladder-water:before,
		.fa-swimming-pool:before,
		.fa-water-ladder:before {
			content: '\\f5c5';
		}
		.fa-wave-square:before {
			content: '\\f83e';
		}
		.fa-weight-hanging:before {
			content: '\\f5cd';
		}
		.fa-weight-scale:before,
		.fa-weight:before {
			content: '\\f496';
		}
		.fa-wheat-alt:before,
		.fa-wheat-awn:before {
			content: '\\e2cd';
		}
		.fa-wheat-awn-circle-exclamation:before {
			content: '\\e598';
		}
		.fa-wheelchair:before {
			content: '\\f193';
		}
		.fa-wheelchair-alt:before,
		.fa-wheelchair-move:before {
			content: '\\e2ce';
		}
		.fa-glass-whiskey:before,
		.fa-whiskey-glass:before {
			content: '\\f7a0';
		}
		.fa-wifi-3:before,
		.fa-wifi-strong:before,
		.fa-wifi:before {
			content: '\\f1eb';
		}
		.fa-wind:before {
			content: '\\f72e';
		}
		.fa-window-maximize:before {
			content: '\\f2d0';
		}
		.fa-window-minimize:before {
			content: '\\f2d1';
		}
		.fa-window-restore:before {
			content: '\\f2d2';
		}
		.fa-wine-bottle:before {
			content: '\\f72f';
		}
		.fa-wine-glass:before {
			content: '\\f4e3';
		}
		.fa-wine-glass-alt:before,
		.fa-wine-glass-empty:before {
			content: '\\f5ce';
		}
		.fa-krw:before,
		.fa-won-sign:before,
		.fa-won:before {
			content: '\\f159';
		}
		.fa-worm:before {
			content: '\\e599';
		}
		.fa-wrench:before {
			content: '\\f0ad';
		}
		.fa-x:before {
			content: '\\58';
		}
		.fa-x-ray:before {
			content: '\\f497';
		}
		.fa-close:before,
		.fa-multiply:before,
		.fa-remove:before,
		.fa-times:before,
		.fa-xmark:before {
			content: '\\f00d';
		}
		.fa-xmarks-lines:before {
			content: '\\e59a';
		}
		.fa-y:before {
			content: '\\59';
		}
		.fa-cny:before,
		.fa-jpy:before,
		.fa-rmb:before,
		.fa-yen-sign:before,
		.fa-yen:before {
			content: '\\f157';
		}
		.fa-yin-yang:before {
			content: '\\f6ad';
		}
		.fa-z:before {
			content: '\\5a';
		}
		.fa-sr-only,
		.fa-sr-only-focusable:not(:focus),
		.sr-only,
		.sr-only-focusable:not(:focus) {
			position: absolute;
			width: 1px;
			height: 1px;
			padding: 0;
			margin: -1px;
			overflow: hidden;
			clip: rect(0, 0, 0, 0);
			white-space: nowrap;
			border-width: 0;
		}
		:host,
		:root {
			--fa-font-brands: normal 400 1em/1 'Font Awesome 6 Brands';
		}
		@font-face {
			font-family: 'Font Awesome 6 Brands';
			font-style: normal;
			font-weight: 400;
			font-display: block;
			src:
				url(../webfonts/fa-brands-400.woff2) format('woff2'),
				url(../webfonts/fa-brands-400.ttf) format('truetype');
		}
		.fa-brands,
		.fab {
			font-family: 'Font Awesome 6 Brands';
			font-weight: 400;
		}
		.fa-42-group:before,
		.fa-innosoft:before {
			content: '\\e080';
		}
		.fa-500px:before {
			content: '\\f26e';
		}
		.fa-accessible-icon:before {
			content: '\\f368';
		}
		.fa-accusoft:before {
			content: '\\f369';
		}
		.fa-adn:before {
			content: '\\f170';
		}
		.fa-adversal:before {
			content: '\\f36a';
		}
		.fa-affiliatetheme:before {
			content: '\\f36b';
		}
		.fa-airbnb:before {
			content: '\\f834';
		}
		.fa-algolia:before {
			content: '\\f36c';
		}
		.fa-alipay:before {
			content: '\\f642';
		}
		.fa-amazon:before {
			content: '\\f270';
		}
		.fa-amazon-pay:before {
			content: '\\f42c';
		}
		.fa-amilia:before {
			content: '\\f36d';
		}
		.fa-android:before {
			content: '\\f17b';
		}
		.fa-angellist:before {
			content: '\\f209';
		}
		.fa-angrycreative:before {
			content: '\\f36e';
		}
		.fa-angular:before {
			content: '\\f420';
		}
		.fa-app-store:before {
			content: '\\f36f';
		}
		.fa-app-store-ios:before {
			content: '\\f370';
		}
		.fa-apper:before {
			content: '\\f371';
		}
		.fa-apple:before {
			content: '\\f179';
		}
		.fa-apple-pay:before {
			content: '\\f415';
		}
		.fa-artstation:before {
			content: '\\f77a';
		}
		.fa-asymmetrik:before {
			content: '\\f372';
		}
		.fa-atlassian:before {
			content: '\\f77b';
		}
		.fa-audible:before {
			content: '\\f373';
		}
		.fa-autoprefixer:before {
			content: '\\f41c';
		}
		.fa-avianex:before {
			content: '\\f374';
		}
		.fa-aviato:before {
			content: '\\f421';
		}
		.fa-aws:before {
			content: '\\f375';
		}
		.fa-bandcamp:before {
			content: '\\f2d5';
		}
		.fa-battle-net:before {
			content: '\\f835';
		}
		.fa-behance:before {
			content: '\\f1b4';
		}
		.fa-behance-square:before {
			content: '\\f1b5';
		}
		.fa-bilibili:before {
			content: '\\e3d9';
		}
		.fa-bimobject:before {
			content: '\\f378';
		}
		.fa-bitbucket:before {
			content: '\\f171';
		}
		.fa-bitcoin:before {
			content: '\\f379';
		}
		.fa-bity:before {
			content: '\\f37a';
		}
		.fa-black-tie:before {
			content: '\\f27e';
		}
		.fa-blackberry:before {
			content: '\\f37b';
		}
		.fa-blogger:before {
			content: '\\f37c';
		}
		.fa-blogger-b:before {
			content: '\\f37d';
		}
		.fa-bluetooth:before {
			content: '\\f293';
		}
		.fa-bluetooth-b:before {
			content: '\\f294';
		}
		.fa-bootstrap:before {
			content: '\\f836';
		}
		.fa-bots:before {
			content: '\\e340';
		}
		.fa-btc:before {
			content: '\\f15a';
		}
		.fa-buffer:before {
			content: '\\f837';
		}
		.fa-buromobelexperte:before {
			content: '\\f37f';
		}
		.fa-buy-n-large:before {
			content: '\\f8a6';
		}
		.fa-buysellads:before {
			content: '\\f20d';
		}
		.fa-canadian-maple-leaf:before {
			content: '\\f785';
		}
		.fa-cc-amazon-pay:before {
			content: '\\f42d';
		}
		.fa-cc-amex:before {
			content: '\\f1f3';
		}
		.fa-cc-apple-pay:before {
			content: '\\f416';
		}
		.fa-cc-diners-club:before {
			content: '\\f24c';
		}
		.fa-cc-discover:before {
			content: '\\f1f2';
		}
		.fa-cc-jcb:before {
			content: '\\f24b';
		}
		.fa-cc-mastercard:before {
			content: '\\f1f1';
		}
		.fa-cc-paypal:before {
			content: '\\f1f4';
		}
		.fa-cc-stripe:before {
			content: '\\f1f5';
		}
		.fa-cc-visa:before {
			content: '\\f1f0';
		}
		.fa-centercode:before {
			content: '\\f380';
		}
		.fa-centos:before {
			content: '\\f789';
		}
		.fa-chrome:before {
			content: '\\f268';
		}
		.fa-chromecast:before {
			content: '\\f838';
		}
		.fa-cloudflare:before {
			content: '\\e07d';
		}
		.fa-cloudscale:before {
			content: '\\f383';
		}
		.fa-cloudsmith:before {
			content: '\\f384';
		}
		.fa-cloudversify:before {
			content: '\\f385';
		}
		.fa-cmplid:before {
			content: '\\e360';
		}
		.fa-codepen:before {
			content: '\\f1cb';
		}
		.fa-codiepie:before {
			content: '\\f284';
		}
		.fa-confluence:before {
			content: '\\f78d';
		}
		.fa-connectdevelop:before {
			content: '\\f20e';
		}
		.fa-contao:before {
			content: '\\f26d';
		}
		.fa-cotton-bureau:before {
			content: '\\f89e';
		}
		.fa-cpanel:before {
			content: '\\f388';
		}
		.fa-creative-commons:before {
			content: '\\f25e';
		}
		.fa-creative-commons-by:before {
			content: '\\f4e7';
		}
		.fa-creative-commons-nc:before {
			content: '\\f4e8';
		}
		.fa-creative-commons-nc-eu:before {
			content: '\\f4e9';
		}
		.fa-creative-commons-nc-jp:before {
			content: '\\f4ea';
		}
		.fa-creative-commons-nd:before {
			content: '\\f4eb';
		}
		.fa-creative-commons-pd:before {
			content: '\\f4ec';
		}
		.fa-creative-commons-pd-alt:before {
			content: '\\f4ed';
		}
		.fa-creative-commons-remix:before {
			content: '\\f4ee';
		}
		.fa-creative-commons-sa:before {
			content: '\\f4ef';
		}
		.fa-creative-commons-sampling:before {
			content: '\\f4f0';
		}
		.fa-creative-commons-sampling-plus:before {
			content: '\\f4f1';
		}
		.fa-creative-commons-share:before {
			content: '\\f4f2';
		}
		.fa-creative-commons-zero:before {
			content: '\\f4f3';
		}
		.fa-critical-role:before {
			content: '\\f6c9';
		}
		.fa-css3:before {
			content: '\\f13c';
		}
		.fa-css3-alt:before {
			content: '\\f38b';
		}
		.fa-cuttlefish:before {
			content: '\\f38c';
		}
		.fa-d-and-d:before {
			content: '\\f38d';
		}
		.fa-d-and-d-beyond:before {
			content: '\\f6ca';
		}
		.fa-dailymotion:before {
			content: '\\e052';
		}
		.fa-dashcube:before {
			content: '\\f210';
		}
		.fa-deezer:before {
			content: '\\e077';
		}
		.fa-delicious:before {
			content: '\\f1a5';
		}
		.fa-deploydog:before {
			content: '\\f38e';
		}
		.fa-deskpro:before {
			content: '\\f38f';
		}
		.fa-dev:before {
			content: '\\f6cc';
		}
		.fa-deviantart:before {
			content: '\\f1bd';
		}
		.fa-dhl:before {
			content: '\\f790';
		}
		.fa-diaspora:before {
			content: '\\f791';
		}
		.fa-digg:before {
			content: '\\f1a6';
		}
		.fa-digital-ocean:before {
			content: '\\f391';
		}
		.fa-discord:before {
			content: '\\f392';
		}
		.fa-discourse:before {
			content: '\\f393';
		}
		.fa-dochub:before {
			content: '\\f394';
		}
		.fa-docker:before {
			content: '\\f395';
		}
		.fa-draft2digital:before {
			content: '\\f396';
		}
		.fa-dribbble:before {
			content: '\\f17d';
		}
		.fa-dribbble-square:before {
			content: '\\f397';
		}
		.fa-dropbox:before {
			content: '\\f16b';
		}
		.fa-drupal:before {
			content: '\\f1a9';
		}
		.fa-dyalog:before {
			content: '\\f399';
		}
		.fa-earlybirds:before {
			content: '\\f39a';
		}
		.fa-ebay:before {
			content: '\\f4f4';
		}
		.fa-edge:before {
			content: '\\f282';
		}
		.fa-edge-legacy:before {
			content: '\\e078';
		}
		.fa-elementor:before {
			content: '\\f430';
		}
		.fa-ello:before {
			content: '\\f5f1';
		}
		.fa-ember:before {
			content: '\\f423';
		}
		.fa-empire:before {
			content: '\\f1d1';
		}
		.fa-envira:before {
			content: '\\f299';
		}
		.fa-erlang:before {
			content: '\\f39d';
		}
		.fa-ethereum:before {
			content: '\\f42e';
		}
		.fa-etsy:before {
			content: '\\f2d7';
		}
		.fa-evernote:before {
			content: '\\f839';
		}
		.fa-expeditedssl:before {
			content: '\\f23e';
		}
		.fa-facebook:before {
			content: '\\f09a';
		}
		.fa-facebook-f:before {
			content: '\\f39e';
		}
		.fa-facebook-messenger:before {
			content: '\\f39f';
		}
		.fa-facebook-square:before {
			content: '\\f082';
		}
		.fa-fantasy-flight-games:before {
			content: '\\f6dc';
		}
		.fa-fedex:before {
			content: '\\f797';
		}
		.fa-fedora:before {
			content: '\\f798';
		}
		.fa-figma:before {
			content: '\\f799';
		}
		.fa-firefox:before {
			content: '\\f269';
		}
		.fa-firefox-browser:before {
			content: '\\e007';
		}
		.fa-first-order:before {
			content: '\\f2b0';
		}
		.fa-first-order-alt:before {
			content: '\\f50a';
		}
		.fa-firstdraft:before {
			content: '\\f3a1';
		}
		.fa-flickr:before {
			content: '\\f16e';
		}
		.fa-flipboard:before {
			content: '\\f44d';
		}
		.fa-fly:before {
			content: '\\f417';
		}
		.fa-font-awesome-flag:before,
		.fa-font-awesome-logo-full:before,
		.fa-font-awesome:before {
			content: '\\f2b4';
		}
		.fa-fonticons:before {
			content: '\\f280';
		}
		.fa-fonticons-fi:before {
			content: '\\f3a2';
		}
		.fa-fort-awesome:before {
			content: '\\f286';
		}
		.fa-fort-awesome-alt:before {
			content: '\\f3a3';
		}
		.fa-forumbee:before {
			content: '\\f211';
		}
		.fa-foursquare:before {
			content: '\\f180';
		}
		.fa-free-code-camp:before {
			content: '\\f2c5';
		}
		.fa-freebsd:before {
			content: '\\f3a4';
		}
		.fa-fulcrum:before {
			content: '\\f50b';
		}
		.fa-galactic-republic:before {
			content: '\\f50c';
		}
		.fa-galactic-senate:before {
			content: '\\f50d';
		}
		.fa-get-pocket:before {
			content: '\\f265';
		}
		.fa-gg:before {
			content: '\\f260';
		}
		.fa-gg-circle:before {
			content: '\\f261';
		}
		.fa-git:before {
			content: '\\f1d3';
		}
		.fa-git-alt:before {
			content: '\\f841';
		}
		.fa-git-square:before {
			content: '\\f1d2';
		}
		.fa-github:before {
			content: '\\f09b';
		}
		.fa-github-alt:before {
			content: '\\f113';
		}
		.fa-github-square:before {
			content: '\\f092';
		}
		.fa-gitkraken:before {
			content: '\\f3a6';
		}
		.fa-gitlab:before {
			content: '\\f296';
		}
		.fa-gitter:before {
			content: '\\f426';
		}
		.fa-glide:before {
			content: '\\f2a5';
		}
		.fa-glide-g:before {
			content: '\\f2a6';
		}
		.fa-gofore:before {
			content: '\\f3a7';
		}
		.fa-golang:before {
			content: '\\e40f';
		}
		.fa-goodreads:before {
			content: '\\f3a8';
		}
		.fa-goodreads-g:before {
			content: '\\f3a9';
		}
		.fa-google:before {
			content: '\\f1a0';
		}
		.fa-google-drive:before {
			content: '\\f3aa';
		}
		.fa-google-pay:before {
			content: '\\e079';
		}
		.fa-google-play:before {
			content: '\\f3ab';
		}
		.fa-google-plus:before {
			content: '\\f2b3';
		}
		.fa-google-plus-g:before {
			content: '\\f0d5';
		}
		.fa-google-plus-square:before {
			content: '\\f0d4';
		}
		.fa-google-wallet:before {
			content: '\\f1ee';
		}
		.fa-gratipay:before {
			content: '\\f184';
		}
		.fa-grav:before {
			content: '\\f2d6';
		}
		.fa-gripfire:before {
			content: '\\f3ac';
		}
		.fa-grunt:before {
			content: '\\f3ad';
		}
		.fa-guilded:before {
			content: '\\e07e';
		}
		.fa-gulp:before {
			content: '\\f3ae';
		}
		.fa-hacker-news:before {
			content: '\\f1d4';
		}
		.fa-hacker-news-square:before {
			content: '\\f3af';
		}
		.fa-hackerrank:before {
			content: '\\f5f7';
		}
		.fa-hashnode:before {
			content: '\\e499';
		}
		.fa-hips:before {
			content: '\\f452';
		}
		.fa-hire-a-helper:before {
			content: '\\f3b0';
		}
		.fa-hive:before {
			content: '\\e07f';
		}
		.fa-hooli:before {
			content: '\\f427';
		}
		.fa-hornbill:before {
			content: '\\f592';
		}
		.fa-hotjar:before {
			content: '\\f3b1';
		}
		.fa-houzz:before {
			content: '\\f27c';
		}
		.fa-html5:before {
			content: '\\f13b';
		}
		.fa-hubspot:before {
			content: '\\f3b2';
		}
		.fa-ideal:before {
			content: '\\e013';
		}
		.fa-imdb:before {
			content: '\\f2d8';
		}
		.fa-instagram:before {
			content: '\\f16d';
		}
		.fa-instagram-square:before {
			content: '\\e055';
		}
		.fa-instalod:before {
			content: '\\e081';
		}
		.fa-intercom:before {
			content: '\\f7af';
		}
		.fa-internet-explorer:before {
			content: '\\f26b';
		}
		.fa-invision:before {
			content: '\\f7b0';
		}
		.fa-ioxhost:before {
			content: '\\f208';
		}
		.fa-itch-io:before {
			content: '\\f83a';
		}
		.fa-itunes:before {
			content: '\\f3b4';
		}
		.fa-itunes-note:before {
			content: '\\f3b5';
		}
		.fa-java:before {
			content: '\\f4e4';
		}
		.fa-jedi-order:before {
			content: '\\f50e';
		}
		.fa-jenkins:before {
			content: '\\f3b6';
		}
		.fa-jira:before {
			content: '\\f7b1';
		}
		.fa-joget:before {
			content: '\\f3b7';
		}
		.fa-joomla:before {
			content: '\\f1aa';
		}
		.fa-js:before {
			content: '\\f3b8';
		}
		.fa-js-square:before {
			content: '\\f3b9';
		}
		.fa-jsfiddle:before {
			content: '\\f1cc';
		}
		.fa-kaggle:before {
			content: '\\f5fa';
		}
		.fa-keybase:before {
			content: '\\f4f5';
		}
		.fa-keycdn:before {
			content: '\\f3ba';
		}
		.fa-kickstarter:before {
			content: '\\f3bb';
		}
		.fa-kickstarter-k:before {
			content: '\\f3bc';
		}
		.fa-korvue:before {
			content: '\\f42f';
		}
		.fa-laravel:before {
			content: '\\f3bd';
		}
		.fa-lastfm:before {
			content: '\\f202';
		}
		.fa-lastfm-square:before {
			content: '\\f203';
		}
		.fa-leanpub:before {
			content: '\\f212';
		}
		.fa-less:before {
			content: '\\f41d';
		}
		.fa-line:before {
			content: '\\f3c0';
		}
		.fa-linkedin:before {
			content: '\\f08c';
		}
		.fa-linkedin-in:before {
			content: '\\f0e1';
		}
		.fa-linode:before {
			content: '\\f2b8';
		}
		.fa-linux:before {
			content: '\\f17c';
		}
		.fa-lyft:before {
			content: '\\f3c3';
		}
		.fa-magento:before {
			content: '\\f3c4';
		}
		.fa-mailchimp:before {
			content: '\\f59e';
		}
		.fa-mandalorian:before {
			content: '\\f50f';
		}
		.fa-markdown:before {
			content: '\\f60f';
		}
		.fa-mastodon:before {
			content: '\\f4f6';
		}
		.fa-maxcdn:before {
			content: '\\f136';
		}
		.fa-mdb:before {
			content: '\\f8ca';
		}
		.fa-medapps:before {
			content: '\\f3c6';
		}
		.fa-medium-m:before,
		.fa-medium:before {
			content: '\\f23a';
		}
		.fa-medrt:before {
			content: '\\f3c8';
		}
		.fa-meetup:before {
			content: '\\f2e0';
		}
		.fa-megaport:before {
			content: '\\f5a3';
		}
		.fa-mendeley:before {
			content: '\\f7b3';
		}
		.fa-microblog:before {
			content: '\\e01a';
		}
		.fa-microsoft:before {
			content: '\\f3ca';
		}
		.fa-mix:before {
			content: '\\f3cb';
		}
		.fa-mixcloud:before {
			content: '\\f289';
		}
		.fa-mixer:before {
			content: '\\e056';
		}
		.fa-mizuni:before {
			content: '\\f3cc';
		}
		.fa-modx:before {
			content: '\\f285';
		}
		.fa-monero:before {
			content: '\\f3d0';
		}
		.fa-napster:before {
			content: '\\f3d2';
		}
		.fa-neos:before {
			content: '\\f612';
		}
		.fa-nfc-directional:before {
			content: '\\e530';
		}
		.fa-nfc-symbol:before {
			content: '\\e531';
		}
		.fa-nimblr:before {
			content: '\\f5a8';
		}
		.fa-node:before {
			content: '\\f419';
		}
		.fa-node-js:before {
			content: '\\f3d3';
		}
		.fa-npm:before {
			content: '\\f3d4';
		}
		.fa-ns8:before {
			content: '\\f3d5';
		}
		.fa-nutritionix:before {
			content: '\\f3d6';
		}
		.fa-octopus-deploy:before {
			content: '\\e082';
		}
		.fa-odnoklassniki:before {
			content: '\\f263';
		}
		.fa-odnoklassniki-square:before {
			content: '\\f264';
		}
		.fa-old-republic:before {
			content: '\\f510';
		}
		.fa-opencart:before {
			content: '\\f23d';
		}
		.fa-openid:before {
			content: '\\f19b';
		}
		.fa-opera:before {
			content: '\\f26a';
		}
		.fa-optin-monster:before {
			content: '\\f23c';
		}
		.fa-orcid:before {
			content: '\\f8d2';
		}
		.fa-osi:before {
			content: '\\f41a';
		}
		.fa-padlet:before {
			content: '\\e4a0';
		}
		.fa-page4:before {
			content: '\\f3d7';
		}
		.fa-pagelines:before {
			content: '\\f18c';
		}
		.fa-palfed:before {
			content: '\\f3d8';
		}
		.fa-patreon:before {
			content: '\\f3d9';
		}
		.fa-paypal:before {
			content: '\\f1ed';
		}
		.fa-perbyte:before {
			content: '\\e083';
		}
		.fa-periscope:before {
			content: '\\f3da';
		}
		.fa-phabricator:before {
			content: '\\f3db';
		}
		.fa-phoenix-framework:before {
			content: '\\f3dc';
		}
		.fa-phoenix-squadron:before {
			content: '\\f511';
		}
		.fa-php:before {
			content: '\\f457';
		}
		.fa-pied-piper:before {
			content: '\\f2ae';
		}
		.fa-pied-piper-alt:before {
			content: '\\f1a8';
		}
		.fa-pied-piper-hat:before {
			content: '\\f4e5';
		}
		.fa-pied-piper-pp:before {
			content: '\\f1a7';
		}
		.fa-pied-piper-square:before {
			content: '\\e01e';
		}
		.fa-pinterest:before {
			content: '\\f0d2';
		}
		.fa-pinterest-p:before {
			content: '\\f231';
		}
		.fa-pinterest-square:before {
			content: '\\f0d3';
		}
		.fa-pix:before {
			content: '\\e43a';
		}
		.fa-playstation:before {
			content: '\\f3df';
		}
		.fa-product-hunt:before {
			content: '\\f288';
		}
		.fa-pushed:before {
			content: '\\f3e1';
		}
		.fa-python:before {
			content: '\\f3e2';
		}
		.fa-qq:before {
			content: '\\f1d6';
		}
		.fa-quinscape:before {
			content: '\\f459';
		}
		.fa-quora:before {
			content: '\\f2c4';
		}
		.fa-r-project:before {
			content: '\\f4f7';
		}
		.fa-raspberry-pi:before {
			content: '\\f7bb';
		}
		.fa-ravelry:before {
			content: '\\f2d9';
		}
		.fa-react:before {
			content: '\\f41b';
		}
		.fa-reacteurope:before {
			content: '\\f75d';
		}
		.fa-readme:before {
			content: '\\f4d5';
		}
		.fa-rebel:before {
			content: '\\f1d0';
		}
		.fa-red-river:before {
			content: '\\f3e3';
		}
		.fa-reddit:before {
			content: '\\f1a1';
		}
		.fa-reddit-alien:before {
			content: '\\f281';
		}
		.fa-reddit-square:before {
			content: '\\f1a2';
		}
		.fa-redhat:before {
			content: '\\f7bc';
		}
		.fa-renren:before {
			content: '\\f18b';
		}
		.fa-replyd:before {
			content: '\\f3e6';
		}
		.fa-researchgate:before {
			content: '\\f4f8';
		}
		.fa-resolving:before {
			content: '\\f3e7';
		}
		.fa-rev:before {
			content: '\\f5b2';
		}
		.fa-rocketchat:before {
			content: '\\f3e8';
		}
		.fa-rockrms:before {
			content: '\\f3e9';
		}
		.fa-rust:before {
			content: '\\e07a';
		}
		.fa-safari:before {
			content: '\\f267';
		}
		.fa-salesforce:before {
			content: '\\f83b';
		}
		.fa-sass:before {
			content: '\\f41e';
		}
		.fa-schlix:before {
			content: '\\f3ea';
		}
		.fa-screenpal:before {
			content: '\\e570';
		}
		.fa-scribd:before {
			content: '\\f28a';
		}
		.fa-searchengin:before {
			content: '\\f3eb';
		}
		.fa-sellcast:before {
			content: '\\f2da';
		}
		.fa-sellsy:before {
			content: '\\f213';
		}
		.fa-servicestack:before {
			content: '\\f3ec';
		}
		.fa-shirtsinbulk:before {
			content: '\\f214';
		}
		.fa-shopify:before {
			content: '\\e057';
		}
		.fa-shopware:before {
			content: '\\f5b5';
		}
		.fa-simplybuilt:before {
			content: '\\f215';
		}
		.fa-sistrix:before {
			content: '\\f3ee';
		}
		.fa-sith:before {
			content: '\\f512';
		}
		.fa-sitrox:before {
			content: '\\e44a';
		}
		.fa-sketch:before {
			content: '\\f7c6';
		}
		.fa-skyatlas:before {
			content: '\\f216';
		}
		.fa-skype:before {
			content: '\\f17e';
		}
		.fa-slack-hash:before,
		.fa-slack:before {
			content: '\\f198';
		}
		.fa-slideshare:before {
			content: '\\f1e7';
		}
		.fa-snapchat-ghost:before,
		.fa-snapchat:before {
			content: '\\f2ab';
		}
		.fa-snapchat-square:before {
			content: '\\f2ad';
		}
		.fa-soundcloud:before {
			content: '\\f1be';
		}
		.fa-sourcetree:before {
			content: '\\f7d3';
		}
		.fa-speakap:before {
			content: '\\f3f3';
		}
		.fa-speaker-deck:before {
			content: '\\f83c';
		}
		.fa-spotify:before {
			content: '\\f1bc';
		}
		.fa-square-font-awesome:before {
			content: '\\f425';
		}
		.fa-font-awesome-alt:before,
		.fa-square-font-awesome-stroke:before {
			content: '\\f35c';
		}
		.fa-squarespace:before {
			content: '\\f5be';
		}
		.fa-stack-exchange:before {
			content: '\\f18d';
		}
		.fa-stack-overflow:before {
			content: '\\f16c';
		}
		.fa-stackpath:before {
			content: '\\f842';
		}
		.fa-staylinked:before {
			content: '\\f3f5';
		}
		.fa-steam:before {
			content: '\\f1b6';
		}
		.fa-steam-square:before {
			content: '\\f1b7';
		}
		.fa-steam-symbol:before {
			content: '\\f3f6';
		}
		.fa-sticker-mule:before {
			content: '\\f3f7';
		}
		.fa-strava:before {
			content: '\\f428';
		}
		.fa-stripe:before {
			content: '\\f429';
		}
		.fa-stripe-s:before {
			content: '\\f42a';
		}
		.fa-studiovinari:before {
			content: '\\f3f8';
		}
		.fa-stumbleupon:before {
			content: '\\f1a4';
		}
		.fa-stumbleupon-circle:before {
			content: '\\f1a3';
		}
		.fa-superpowers:before {
			content: '\\f2dd';
		}
		.fa-supple:before {
			content: '\\f3f9';
		}
		.fa-suse:before {
			content: '\\f7d6';
		}
		.fa-swift:before {
			content: '\\f8e1';
		}
		.fa-symfony:before {
			content: '\\f83d';
		}
		.fa-teamspeak:before {
			content: '\\f4f9';
		}
		.fa-telegram-plane:before,
		.fa-telegram:before {
			content: '\\f2c6';
		}
		.fa-tencent-weibo:before {
			content: '\\f1d5';
		}
		.fa-the-red-yeti:before {
			content: '\\f69d';
		}
		.fa-themeco:before {
			content: '\\f5c6';
		}
		.fa-themeisle:before {
			content: '\\f2b2';
		}
		.fa-think-peaks:before {
			content: '\\f731';
		}
		.fa-tiktok:before {
			content: '\\e07b';
		}
		.fa-trade-federation:before {
			content: '\\f513';
		}
		.fa-trello:before {
			content: '\\f181';
		}
		.fa-tumblr:before {
			content: '\\f173';
		}
		.fa-tumblr-square:before {
			content: '\\f174';
		}
		.fa-twitch:before {
			content: '\\f1e8';
		}
		.fa-twitter:before {
			content: '\\f099';
		}
		.fa-twitter-square:before {
			content: '\\f081';
		}
		.fa-typo3:before {
			content: '\\f42b';
		}
		.fa-uber:before {
			content: '\\f402';
		}
		.fa-ubuntu:before {
			content: '\\f7df';
		}
		.fa-uikit:before {
			content: '\\f403';
		}
		.fa-umbraco:before {
			content: '\\f8e8';
		}
		.fa-uncharted:before {
			content: '\\e084';
		}
		.fa-uniregistry:before {
			content: '\\f404';
		}
		.fa-unity:before {
			content: '\\e049';
		}
		.fa-unsplash:before {
			content: '\\e07c';
		}
		.fa-untappd:before {
			content: '\\f405';
		}
		.fa-ups:before {
			content: '\\f7e0';
		}
		.fa-usb:before {
			content: '\\f287';
		}
		.fa-usps:before {
			content: '\\f7e1';
		}
		.fa-ussunnah:before {
			content: '\\f407';
		}
		.fa-vaadin:before {
			content: '\\f408';
		}
		.fa-viacoin:before {
			content: '\\f237';
		}
		.fa-viadeo:before {
			content: '\\f2a9';
		}
		.fa-viadeo-square:before {
			content: '\\f2aa';
		}
		.fa-viber:before {
			content: '\\f409';
		}
		.fa-vimeo:before {
			content: '\\f40a';
		}
		.fa-vimeo-square:before {
			content: '\\f194';
		}
		.fa-vimeo-v:before {
			content: '\\f27d';
		}
		.fa-vine:before {
			content: '\\f1ca';
		}
		.fa-vk:before {
			content: '\\f189';
		}
		.fa-vnv:before {
			content: '\\f40b';
		}
		.fa-vuejs:before {
			content: '\\f41f';
		}
		.fa-watchman-monitoring:before {
			content: '\\e087';
		}
		.fa-waze:before {
			content: '\\f83f';
		}
		.fa-weebly:before {
			content: '\\f5cc';
		}
		.fa-weibo:before {
			content: '\\f18a';
		}
		.fa-weixin:before {
			content: '\\f1d7';
		}
		.fa-whatsapp:before {
			content: '\\f232';
		}
		.fa-whatsapp-square:before {
			content: '\\f40c';
		}
		.fa-whmcs:before {
			content: '\\f40d';
		}
		.fa-wikipedia-w:before {
			content: '\\f266';
		}
		.fa-windows:before {
			content: '\\f17a';
		}
		.fa-wirsindhandwerk:before,
		.fa-wsh:before {
			content: '\\e2d0';
		}
		.fa-wix:before {
			content: '\\f5cf';
		}
		.fa-wizards-of-the-coast:before {
			content: '\\f730';
		}
		.fa-wodu:before {
			content: '\\e088';
		}
		.fa-wolf-pack-battalion:before {
			content: '\\f514';
		}
		.fa-wordpress:before {
			content: '\\f19a';
		}
		.fa-wordpress-simple:before {
			content: '\\f411';
		}
		.fa-wpbeginner:before {
			content: '\\f297';
		}
		.fa-wpexplorer:before {
			content: '\\f2de';
		}
		.fa-wpforms:before {
			content: '\\f298';
		}
		.fa-wpressr:before {
			content: '\\f3e4';
		}
		.fa-xbox:before {
			content: '\\f412';
		}
		.fa-xing:before {
			content: '\\f168';
		}
		.fa-xing-square:before {
			content: '\\f169';
		}
		.fa-y-combinator:before {
			content: '\\f23b';
		}
		.fa-yahoo:before {
			content: '\\f19e';
		}
		.fa-yammer:before {
			content: '\\f840';
		}
		.fa-yandex:before {
			content: '\\f413';
		}
		.fa-yandex-international:before {
			content: '\\f414';
		}
		.fa-yarn:before {
			content: '\\f7e3';
		}
		.fa-yelp:before {
			content: '\\f1e9';
		}
		.fa-yoast:before {
			content: '\\f2b1';
		}
		.fa-youtube:before {
			content: '\\f167';
		}
		.fa-youtube-square:before {
			content: '\\f431';
		}
		.fa-zhihu:before {
			content: '\\f63f';
		}
		:host,
		:root {
			--fa-font-regular: normal 400 1em/1 'Font Awesome 6 Free';
		}
		@font-face {
			font-family: 'Font Awesome 6 Free';
			font-style: normal;
			font-weight: 400;
			font-display: block;
			src:
				url(../webfonts/fa-regular-400.woff2) format('woff2'),
				url(../webfonts/fa-regular-400.ttf) format('truetype');
		}
		.fa-regular,
		.far {
			font-family: 'Font Awesome 6 Free';
			font-weight: 400;
		}
		:host,
		:root {
			--fa-font-solid: normal 900 1em/1 'Font Awesome 6 Free';
		}
		@font-face {
			font-family: 'Font Awesome 6 Free';
			font-style: normal;
			font-weight: 900;
			font-display: block;
			src:
				url(../webfonts/fa-solid-900.woff2) format('woff2'),
				url(../webfonts/fa-solid-900.ttf) format('truetype');
		}
		.fa-solid,
		.fas {
			font-family: 'Font Awesome 6 Free';
			font-weight: 900;
		}
		@font-face {
			font-family: 'Font Awesome 5 Brands';
			font-display: block;
			font-weight: 400;
			src:
				url(../webfonts/fa-brands-400.woff2) format('woff2'),
				url(../webfonts/fa-brands-400.ttf) format('truetype');
		}
		@font-face {
			font-family: 'Font Awesome 5 Free';
			font-display: block;
			font-weight: 900;
			src:
				url(../webfonts/fa-solid-900.woff2) format('woff2'),
				url(../webfonts/fa-solid-900.ttf) format('truetype');
		}
		@font-face {
			font-family: 'Font Awesome 5 Free';
			font-display: block;
			font-weight: 400;
			src:
				url(../webfonts/fa-regular-400.woff2) format('woff2'),
				url(../webfonts/fa-regular-400.ttf) format('truetype');
		}
		@font-face {
			font-family: 'FontAwesome';
			font-display: block;
			src:
				url(../webfonts/fa-solid-900.woff2) format('woff2'),
				url(../webfonts/fa-solid-900.ttf) format('truetype');
		}
		@font-face {
			font-family: 'FontAwesome';
			font-display: block;
			src:
				url(../webfonts/fa-brands-400.woff2) format('woff2'),
				url(../webfonts/fa-brands-400.ttf) format('truetype');
		}
		@font-face {
			font-family: 'FontAwesome';
			font-display: block;
			src:
				url(../webfonts/fa-regular-400.woff2) format('woff2'),
				url(../webfonts/fa-regular-400.ttf) format('truetype');
			unicode-range: u+f003, u+f006, u+f014, u+f016-f017, u+f01a-f01b, u+f01d, u+f022, u+f03e, u+f044, u+f046, u+f05c-f05d, u+f06e, u+f070, u+f087-f088, u+f08a,
				u+f094, u+f096-f097, u+f09d, u+f0a0, u+f0a2, u+f0a4-f0a7, u+f0c5, u+f0c7, u+f0e5-f0e6, u+f0eb, u+f0f6-f0f8, u+f10c, u+f114-f115, u+f118-f11a,
				u+f11c-f11d, u+f133, u+f147, u+f14e, u+f150-f152, u+f185-f186, u+f18e, u+f190-f192, u+f196, u+f1c1-f1c9, u+f1d9, u+f1db, u+f1e3, u+f1ea, u+f1f7, u+f1f9,
				u+f20a, u+f247-f248, u+f24a, u+f24d, u+f255-f25b, u+f25d, u+f271-f274, u+f278, u+f27b, u+f28c, u+f28e, u+f29c, u+f2b5, u+f2b7, u+f2ba, u+f2bc, u+f2be,
				u+f2c0-f2c1, u+f2c3, u+f2d0, u+f2d2, u+f2d4, u+f2dc;
		}
		@font-face {
			font-family: 'FontAwesome';
			font-display: block;
			src:
				url(../webfonts/fa-v4compatibility.woff2) format('woff2'),
				url(../webfonts/fa-v4compatibility.ttf) format('truetype');
			unicode-range: u+f041, u+f047, u+f065-f066, u+f07d-f07e, u+f080, u+f08b, u+f08e, u+f090, u+f09a, u+f0ac, u+f0ae, u+f0b2, u+f0d0, u+f0d6, u+f0e4, u+f0ec,
				u+f10a-f10b, u+f123, u+f13e, u+f148-f149, u+f14c, u+f156, u+f15e, u+f160-f161, u+f163, u+f175-f178, u+f195, u+f1f8, u+f219, u+f250, u+f252, u+f27a;
		}
	`,"KOL-SKIP-NAV":O`
		kol-link-wc > a > kol-span-wc {
			border-radius: var(--border-radius);
			border-style: solid;
			border-width: 2px;
			gap: 0.5rem;
			line-height: 1rem;
			padding: 0.75rem 1rem;
			background-color: var(--color-blau);
			border-color: var(--color-blau-dark);
			color: white;
			cursor: pointer;
		}
	`,"KOL-SPLIT-BUTTON":O`
		.popover {
			background: #fff;
		}
	`}),z.createTranslation("de",{}),z.createTranslation("en",{});var T=i(8427),E=i(9543);const $=t=>t.replace(/([A-Z])/g,(t=>`-${t[0].toLowerCase()}`)),N=t=>{if("undefined"==typeof document)return!0;{const n="on"+(t=>"doubleclick"===t?"dblclick":t)(t);let e=n in document;if(!e){const t=document.createElement("div");t.setAttribute(n,"return;"),e="function"==typeof t[n]}return e}},A=(t,n,e)=>{const o=t.__events||(t.__events={}),r=o[n];r&&t.removeEventListener(n,r),t.addEventListener(n,o[n]=function(t){e&&e.call(this,t)})},C=t=>{const n=new Map;return t.forEach((t=>n.set(t,t))),n},q=(...t)=>n=>{t.forEach((t=>{((t,n)=>{"function"==typeof t?t(n):null!=t&&(t.current=n)})(t,n)}))},I=((t,n,e,o)=>{void 0!==o&&o();const r=t.toLowerCase().split("-").map((t=>t.charAt(0).toUpperCase()+t.slice(1))).join(""),a=class extends T.Component{constructor(t){super(t),this.setComponentElRef=t=>{this.componentEl=t}}componentDidMount(){this.componentDidUpdate(this.props)}componentDidUpdate(t){((t,n,e={})=>{if(t instanceof Element){const o=((t,n,e)=>{const o=n.className||n.class,r=e.className||e.class,a=C(t),i=C(o?o.split(" "):[]),f=C(r?r.split(" "):[]),c=[];return a.forEach((t=>{i.has(t)?(c.push(t),i.delete(t)):f.has(t)||c.push(t)})),i.forEach((t=>c.push(t))),c.join(" ")})(t.classList,n,e);""!==o&&(t.className=o),Object.keys(n).forEach((e=>{if("children"!==e&&"style"!==e&&"ref"!==e&&"class"!==e&&"className"!==e&&"forwardedRef"!==e)if(0===e.indexOf("on")&&e[2]===e[2].toUpperCase()){const o=e.substring(2),r=o[0].toLowerCase()+o.substring(1);N(r)||A(t,r,n[e])}else t[e]=n[e],"string"==typeof n[e]&&t.setAttribute($(e),n[e])}))}})(this.componentEl,this.props,t)}render(){const{children:n,forwardedRef:o,style:r,className:a,ref:i,...f}=this.props;let c=Object.keys(f).reduce(((t,n)=>{const e=f[n];if(0===n.indexOf("on")&&n[2]===n[2].toUpperCase()){const o=n.substring(2).toLowerCase();"undefined"!=typeof document&&N(o)&&(t[n]=e)}else{const o=typeof e;"string"!==o&&"boolean"!==o&&"number"!==o||(t[$(n)]=e)}return t}),{});e&&(c=e(this.props,c));const l={...c,ref:q(o,this.setComponentElRef),style:r};return(0,T.createElement)(t,l,n)}static get displayName(){return r}};return n&&(a.contextType=n),((t,n)=>{const e=(n,e)=>T.createElement(t,{...n,forwardedRef:e});return e.displayName=n,T.forwardRef(e)})(a,r)})("kol-button"),j=[[[0,0,6,5,0,0,1,4,0],[4,0,0,0,0,1,0,0,0],[5,0,0,0,8,0,0,0,2],[0,1,3,0,0,7,2,0,0],[8,0,0,3,0,9,0,0,6],[0,0,2,8,0,0,7,3,0],[3,0,0,0,9,0,0,0,1],[0,0,0,2,0,0,0,0,7],[0,4,9,0,0,3,8,0,0]],[[2,6,0,0,7,0,4,8,3],[3,1,0,0,0,0,0,0,9],[5,7,0,3,4,0,0,0,2],[1,0,0,0,0,0,9,0,0],[0,8,0,0,9,0,0,3,0],[0,0,7,0,0,0,0,0,5],[7,0,0,0,5,2,0,9,4],[8,0,0,0,0,0,0,5,7],[9,5,6,0,3,0,0,2,1]],[[0,9,0,8,6,5,2,0,0],[0,0,5,0,1,2,0,6,8],[0,0,0,0,0,0,0,4,0],[0,0,0,0,0,8,0,5,6],[0,0,8,0,0,0,4,0,0],[4,5,0,9,0,0,0,0,0],[0,8,0,0,0,0,0,0,0],[2,4,0,1,7,0,5,0,0],[0,0,7,2,8,3,0,9,0]],[[0,0,0,0,0,4,6,7,8],[0,0,0,9,0,0,0,0,4],[0,0,7,0,0,6,1,9,0],[0,9,8,7,6,0,0,0,2],[0,0,0,0,0,0,0,0,0],[6,0,0,0,3,2,9,1,0],[0,8,2,6,0,0,7,0,0],[7,0,0,0,0,3,0,0,0],[9,5,6,4,0,0,0,0,0]],[[0,0,7,0,0,1,0,0,5],[0,0,5,4,0,0,3,7,1],[0,0,0,0,0,0,4,8,0],[0,0,0,7,9,0,8,0,2],[0,9,0,0,0,0,0,3,0],[2,0,3,0,8,5,0,0,0],[0,8,4,0,0,0,0,0,0],[7,5,2,0,0,4,6,0,0],[1,0,0,2,0,0,7,0,0]],[[0,9,5,0,0,0,0,0,0],[0,6,0,0,9,0,0,0,0],[1,8,0,7,2,3,5,0,0],[0,0,0,3,0,0,0,1,7],[0,1,3,0,0,0,8,4,0],[6,7,0,0,0,1,0,0,0],[0,0,6,9,5,8,0,7,1],[0,0,0,0,1,0,0,6,0],[0,0,0,0,0,0,9,5,0]],[[0,0,7,6,3,0,5,4,0],[0,0,0,0,2,1,8,0,9],[0,0,0,0,0,0,3,0,0],[0,2,5,0,0,4,6,0,7],[0,0,0,0,0,0,0,0,0],[8,0,4,5,0,0,9,1,0],[0,0,8,0,0,0,0,0,0],[1,0,3,7,4,0,0,0,0],[0,5,2,0,1,3,7,0,0]],[[0,0,3,0,9,0,0,0,0],[0,8,0,4,5,0,0,0,0],[9,6,0,1,0,0,0,4,8],[6,0,0,2,7,0,0,0,0],[8,2,0,0,4,0,0,3,6],[0,0,0,0,6,1,0,0,5],[7,9,0,0,0,4,0,1,2],[0,0,0,0,1,5,0,9,0],[0,0,0,0,2,0,8,0,0]],[[0,0,0,0,0,7,0,0,5],[0,0,0,0,0,1,7,0,0],[0,6,9,5,8,2,0,0,0],[0,0,3,7,0,6,0,5,0],[6,2,0,0,5,0,0,9,7],[0,5,0,1,0,9,8,0,0],[0,0,0,8,6,3,5,1,0],[0,0,2,9,0,0,0,0,0],[1,0,0,2,0,0,0,0,0]],[[0,0,0,0,5,0,6,0,9],[0,2,0,0,8,0,0,5,0],[0,0,6,7,0,0,0,0,0],[7,0,5,8,0,2,3,4,0],[0,0,2,0,0,0,9,0,0],[0,9,3,5,0,7,8,0,2],[0,0,0,0,0,8,1,0,0],[0,7,0,0,4,0,0,8,0],[3,0,8,0,7,0,0,0,0]],[[0,1,4,7,0,9,0,2,5],[0,0,0,0,0,0,4,0,0],[0,9,0,0,0,4,0,1,3],[0,0,5,0,4,0,0,7,0],[0,8,0,0,7,0,0,5,0],[0,4,0,0,5,0,9,0,0],[8,5,0,2,0,0,0,4,0],[0,0,1,0,0,0,0,0,0],[6,7,0,4,0,1,5,9,0]],[[7,0,8,0,0,5,6,0,3],[0,0,0,0,0,9,0,0,0],[6,0,1,7,4,0,0,0,8],[1,2,0,0,8,0,0,0,0],[0,0,6,0,0,0,8,0,0],[0,0,0,0,5,0,0,6,1],[3,0,0,0,9,8,1,0,4],[0,0,0,5,0,0,0,0,0],[9,0,7,3,0,0,5,0,2]],[[6,0,0,0,0,4,5,9,1],[5,0,0,1,6,0,0,7,0],[0,4,0,9,0,0,6,0,0],[0,0,0,5,0,0,8,0,0],[0,6,0,0,3,0,0,4,0],[0,0,5,0,0,2,0,0,0],[0,0,4,0,0,1,0,5,0],[0,1,0,0,9,5,0,0,3],[3,5,9,6,0,0,0,0,2]],[[5,8,0,0,3,7,0,0,1],[0,6,0,0,0,0,0,4,0],[0,9,4,0,0,0,8,5,0],[0,0,5,0,6,4,0,1,0],[0,0,0,0,0,0,0,0,0],[0,1,0,7,8,0,5,0,0],[0,4,6,0,0,0,2,8,0],[0,5,0,0,0,0,0,3,0],[8,0,0,5,4,0,0,9,6]],[[5,7,9,0,0,3,1,4,2],[0,0,0,0,0,2,8,0,0],[0,0,0,5,1,0,0,0,0],[0,9,5,0,0,0,0,0,3],[4,0,0,0,0,0,0,0,8],[8,0,0,0,0,0,4,9,0],[0,0,0,0,2,9,0,0,0],[0,0,8,3,0,0,0,0,0],[9,2,1,8,0,0,7,3,5]],[[5,0,0,9,0,0,0,6,2],[0,9,1,0,2,6,7,0,0],[0,0,0,1,0,0,0,0,0],[0,0,0,0,0,8,0,2,0],[1,0,6,2,0,4,9,0,7],[0,5,0,3,0,0,0,0,0],[0,0,0,0,0,2,0,0,0],[0,0,2,4,3,0,6,7,0],[4,6,0,0,0,9,0,0,8]],[[6,0,0,5,0,0,0,0,0],[0,1,0,0,0,0,0,0,5],[0,7,2,0,0,9,3,0,0],[7,8,0,4,0,3,0,0,0],[2,0,3,7,0,1,4,0,8],[0,0,0,6,0,8,0,3,7],[0,0,4,1,0,0,7,9,0],[1,0,0,0,0,0,0,5,0],[0,0,0,0,0,6,0,0,2]],[[5,0,0,9,4,2,3,0,0],[0,0,3,6,0,0,0,0,2],[0,0,4,7,0,8,0,0,0],[0,4,1,0,0,0,0,7,0],[3,0,0,0,0,0,0,0,6],[0,5,0,0,0,0,4,2,0],[0,0,0,1,0,3,7,0,0],[8,0,0,0,0,6,2,0,0],[0,0,2,4,8,7,0,0,9]],[[7,8,4,5,0,2,0,0,0],[0,0,0,0,4,0,0,0,0],[5,3,2,0,0,0,0,0,0],[8,0,0,1,0,0,0,5,0],[2,0,7,6,0,3,1,0,4],[0,5,0,0,0,8,0,0,7],[0,0,0,0,0,0,6,3,8],[0,0,0,0,3,0,0,0,0],[0,0,0,8,0,5,7,4,1]],[[0,3,0,5,8,0,0,9,0],[4,8,0,9,0,0,7,0,0],[0,0,0,0,0,4,0,0,8],[0,0,3,0,0,0,5,0,7],[0,0,8,1,5,7,3,0,0],[7,0,5,0,0,0,6,0,0],[2,0,0,8,0,0,0,0,0],[0,0,4,0,0,5,0,6,2],[0,5,0,0,4,1,0,7,0]],[[9,0,5,6,3,0,0,0,8],[0,4,0,8,9,0,0,0,0],[0,6,0,0,0,1,3,0,0],[4,1,0,0,0,0,0,0,0],[6,0,3,0,0,0,2,0,5],[0,0,0,0,0,0,0,8,1],[0,0,4,1,0,0,0,9,0],[0,0,0,0,4,9,0,2,0],[8,0,0,0,2,6,1,0,4]],[[2,0,4,0,7,9,5,0,0],[0,0,0,0,5,0,0,0,6],[0,6,0,0,2,3,1,0,0],[0,0,3,0,0,0,0,4,0],[6,0,5,0,0,0,9,0,1],[0,2,0,0,0,0,3,0,0],[0,0,6,5,9,0,0,1,0],[1,0,0,0,4,0,0,0,0],[0,0,8,3,1,0,2,0,7]],[[0,0,0,0,0,5,0,0,0],[3,8,9,7,0,0,0,0,2],[0,5,7,0,0,3,0,0,6],[8,0,2,0,0,4,5,0,0],[0,3,0,0,0,0,0,2,0],[0,0,5,9,0,0,6,0,3],[5,0,0,6,0,0,2,1,0],[6,0,0,0,0,7,9,4,5],[0,0,0,1,0,0,0,0,0]],[[5,0,0,1,0,0,6,0,0],[3,7,0,0,0,9,0,0,4],[9,1,0,0,0,4,0,5,0],[0,0,7,9,0,0,0,0,0],[0,0,9,7,0,6,8,0,0],[0,0,0,0,0,2,4,0,0],[0,2,0,8,0,0,0,4,5],[6,0,0,2,0,0,0,1,8],[0,0,1,0,0,5,0,0,2]],[[4,0,6,0,2,0,0,0,9],[0,5,2,1,0,0,0,0,0],[0,0,9,0,0,4,8,0,0],[0,4,0,9,8,7,0,0,0],[9,0,0,0,0,0,0,0,4],[0,0,0,5,4,2,0,6,0],[0,0,8,4,0,0,6,0,0],[0,0,0,0,0,9,1,2,0],[3,0,0,0,7,0,4,0,8]],[[8,0,5,4,2,1,0,0,0],[0,7,0,0,9,0,0,0,0],[0,9,0,0,3,0,0,0,5],[0,4,6,2,0,0,0,0,0],[0,5,9,0,0,0,2,6,0],[0,0,0,0,0,9,3,5,0],[5,0,0,0,8,0,0,7,0],[0,0,0,0,4,0,0,3,0],[0,0,0,9,1,5,4,0,6]],[[0,1,0,0,7,8,2,6,0],[0,0,6,0,0,0,0,3,5],[0,0,0,0,0,6,8,0,1],[6,0,0,0,0,5,0,0,0],[0,0,4,2,0,3,1,0,0],[0,0,0,7,0,0,0,0,2],[4,0,5,6,0,0,0,0,0],[3,6,0,0,0,0,9,0,0],[0,8,9,1,3,0,0,4,0]],[[0,0,9,2,0,0,6,0,0],[5,1,8,0,0,4,0,0,0],[0,0,0,0,3,0,0,0,5],[0,2,7,0,0,5,0,0,8],[0,8,5,0,1,0,9,4,0],[1,0,0,6,0,0,5,2,0],[4,0,0,0,9,0,0,0,0],[0,0,0,5,0,0,4,3,9],[0,0,3,0,0,6,7,0,0]],[[0,0,8,0,0,0,5,0,0],[6,0,0,7,0,5,0,0,3],[0,9,0,8,3,2,0,0,0],[0,0,4,0,1,0,0,0,0],[3,8,0,4,0,7,0,5,1],[0,0,0,0,8,0,2,0,0],[0,0,0,1,5,9,0,7,0],[8,0,0,3,0,4,0,0,5],[0,0,9,0,0,0,1,0,0]]];function F(t){const n=function(t){for(let n=0;n<9;n++)for(let e=0;e<9;e++)if(0===t[n][e])return[n,e];return null}(t);if(!n)return!0;const[e,o]=n;for(let n=1;n<=9;n++)if(P(t,e,o,n)){if(t[e][o]=n,F(t))return t;t[e][o]=0}return!1}function P(t,n,e,o){for(let e=0;e<9;e++)if(t[n][e]===o)return!1;for(let n=0;n<9;n++)if(t[n][e]===o)return!1;const r=3*Math.floor(n/3),a=3*Math.floor(e/3);for(let n=0;n<3;n++)for(let e=0;e<3;e++)if(t[r+n][a+e]===o)return!1;return!0}var R=Object.defineProperty,K=Object.defineProperties,U=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,V=(t,n,e)=>n in t?R(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,H=(t,n)=>{for(var e in n||(n={}))D.call(n,e)&&V(t,e,n[e]);if(B)for(var e of B(n))M.call(n,e)&&V(t,e,n[e]);return t},Y=(t,n)=>K(t,U(n));function X(t){let n=0;for(const e of t)Array.isArray(e)?n+=X(e):n++;return n}const W=[1,2,3,4,5,6,7,8,9];let G;const Q=t=>JSON.parse(JSON.stringify(t)),J=function(){const n={blockList:[],tryValue:null,values:j[Math.floor(Math.random()*j.length)]};try{if(9!==JSON.parse(localStorage.getItem("values")).values.length)throw new Error("Invalid Sudoku")}catch(t){localStorage.removeItem("values")}const[e,o]=(0,T.useState)(n),[r,a]=(0,T.useState)(Q(e)),[i,f]=(0,T.useState)(!1),c=(0,T.useMemo)((()=>((t,n)=>{const e=[];return t.forEach(((o,r)=>{t[r].forEach(((o,a)=>{var i;e[r]=null!=(i=e[r])?i:[],e[r][a]=((t,n,e)=>{const o=Q(W);t[n].forEach((t=>{o.includes(t)&&o.splice(o.indexOf(t),1)})),t[n].forEach(((n,r)=>{const a=t[r][e];o.includes(a)&&o.splice(o.indexOf(a),1)}));let r=0,a=0;n>=3&&n<6?r=3:n>=6&&(r=6),e>=3&&e<6?a=3:e>=6&&(a=6);const i=r+3,f=a+3;return t.forEach(((t,n)=>{n>=r&&n<i&&t.forEach(((t,n)=>{n>=a&&n<f&&o.includes(t)&&o.splice(o.indexOf(t),1)}))})),0!==t[n][e]&&o.push(t[n][e]),o})(t,r,a),n[r]&&n[r][a]&&n[r][a].forEach((t=>{e[r][a].includes(t)&&e[r][a].splice(e[r][a].indexOf(t),1)}))}))})),e})(e.values,e.blockList)),[e]),l=(0,T.useMemo)((()=>!0),[c]);return(0,T.useEffect)((()=>{clearTimeout(G),i&&(G=setTimeout((()=>{(()=>{var t,n,a;const i=[];for(let f=0;f<9;f++){const s=c[f];for(let c=0;c<9;c++){const b=s[c];if(1===b.length&&0===e.values[f][c])i.push({col:c,row:f,value:b[0]});else if(0===b.length&&l){if(null!==e.tryValue){const r=Q(e.blockList);if(r[e.tryValue.rowIndex]=null!=(t=r[e.tryValue.rowIndex])?t:[],r[e.tryValue.rowIndex][e.tryValue.colIndex]=null!=(n=r[e.tryValue.rowIndex][e.tryValue.colIndex])?n:[],f===e.tryValue.rowIndex&&c===e.tryValue.colIndex){if(r[e.tryValue.rowIndex][e.tryValue.colIndex]=[],null===e.tryValue.parent)throw new Error("No solution found");r[e.tryValue.parent.rowIndex][e.tryValue.parent.colIndex].push(e.tryValue.parent.value),o({blockList:r,tryValue:e.tryValue.parent,values:e.tryValue.values})}else r[e.tryValue.rowIndex][e.tryValue.colIndex].push(e.tryValue.value),o({blockList:r,tryValue:null!=(a=e.tryValue.parent)?a:null,values:e.tryValue.values})}else o(Y(H({},e),{tryValue:r.tryValue,values:r.values}));return void console.log("BlockList",e.blockList,X(e.blockList))}}}if(i.length>0){const t=Math.floor(Math.random()*i.length),n=Q(e.values);return n[i[t].row][i[t].col]=i[t].value,void o(Y(H({},e),{values:n}))}const s=[];for(let t=0;t<9;t++){const n=c[t];for(let o=0;o<9;o++){const r=n[o];r.length>=1&&0===e.values[t][o]&&s.push({col:o,row:t,possibleValues:r})}}if(s.length>0){const t=Math.floor(Math.random()*s.length),n=Math.floor(Math.random()*s[t].possibleValues.length),r=Q(e.values);return r[s[t].row][s[t].col]=s[t].possibleValues[n],void o(Y(H({},e),{tryValue:{rowIndex:s[t].row,colIndex:s[t].col,value:r[s[t].row][s[t].col],values:Q(e.values),parent:e.tryValue},values:r}))}f(!1)})()}),100))}),[i,e]),(0,t.jsx)("div",{className:"container mx-auto p-4 text-center",children:(0,t.jsxs)("div",{className:"inline-block",children:[(0,t.jsx)("div",{className:"p-1 rounded shadow-dark shadow border-gray",children:e.values.map(((n,a)=>(0,t.jsx)("div",{className:"flex flex-row",children:e.values[a].map(((n,i)=>(0,t.jsx)(I,{className:`p-.5 border-zinc ${a>0&&a%3==0?" border-t border-t-solid p-t-1":""}${(a+1)%3==0?" p-b-1":""}${i>0&&i%3==0?" border-l  border-l-solid p-l-1":""}${(i+1)%3==0?" p-r-1":""}`,title:c[a][i].join(", "),"data-value":e.values[a][i],"data-initial-value":r.values[a][i],_label:`${1===c[a][i].length?c[a][i][0]:0===e.values[a][i]?"":e.values[a][i]}`,_on:{onClick:()=>((t,n)=>{const r=Q(e.values),a=[0,...c[t][n]];let i=r[t][n];do{switch(i){case 0:i=1;break;case 1:i=2;break;case 2:i=3;break;case 3:i=4;break;case 4:i=5;break;case 5:i=6;break;case 6:i=7;break;case 7:i=8;break;case 8:i=9;break;default:i=0}}while(!a.includes(i));r[t][n]=i,o(Y(H({},e),{values:r}))})(a,i)},_variant:0===e.values[a][i]?1===c[a][i].length?"danger":"secondary":e.values[a][i]===r.values[a][i]?"primary":"secondary"},`${a}-${i}`)))},`${a}`)))}),(0,t.jsxs)("div",{className:"flex gap-4 mt-4 place-center",children:[(0,t.jsx)(I,{_label:i?"Stop":"Slove",_on:{onClick:()=>{f(!i)}},_variant:"primary"}),(0,t.jsx)(I,{_label:"Save",_on:{onClick:()=>{localStorage.setItem("values",JSON.stringify(e)),a(Q(e))}},_variant:"secondary"}),(0,t.jsx)(I,{_label:"Reset",_on:{onClick:()=>{o({blockList:r.blockList,tryValue:r.tryValue,values:r.values}),console.clear(),console.log(F(Q(r.values)))}},_variant:"ghost"}),(0,t.jsx)(I,{_label:"Neu",_on:{onClick:()=>{var t;(t=function*(){const t=yield fetch("https://sudoku-api.vercel.app/api/dosuku?query={newboard(limit:1){grids{difficulty,value}}}"),n=yield t.json();return console.log(n),n.newboard.grids[0].value},new Promise(((n,e)=>{var o=n=>{try{a(t.next(n))}catch(t){e(t)}},r=n=>{try{a(t.throw(n))}catch(t){e(t)}},a=t=>t.done?n(t.value):Promise.resolve(t.value).then(o,r);a((t=t.apply(void 0,null)).next())}))).then((t=>{o({values:t,blockList:[],tryValue:null}),a({values:Q(t),blockList:[],tryValue:null})})).catch(console.warn)}},_variant:"ghost"})]})]})})};(0,n.r)(S,[(t,a)=>{if("undefined"!=typeof window)return f=function*(){(0,e.a)((t=>(t.shadowRoot instanceof ShadowRoot&&(0,o.s)(t,(0,o.g)(t)),"default"))),yield(0,n.r)([],[]),Promise.all([i.e(3043),i.e(9340)]).then(i.bind(i,9340)).then((t=>{"object"==typeof t&&null!==t&&"function"==typeof t.initialize&&t.initialize()})).catch((t=>{o.L.error(t)})),r.p&&i.e(9023).then(i.t.bind(i,9023,23))},new Promise(((t,n)=>{var e=t=>{try{r(f.next(t))}catch(t){n(t)}},o=t=>{try{r(f.throw(t))}catch(t){n(t)}},r=n=>n.done?t(n.value):Promise.resolve(n.value).then(e,o);r((f=f.apply(void 0,null)).next())})),(0,e.b)(JSON.parse('[["kol-span-wc_2",[[0,"kol-tooltip-wc",{"_align":[1],"_id":[1],"_label":[1],"state":[32]},null,{"_align":["validateAlign"],"_id":["validateId"],"_label":["validateLabel"]}],[4,"kol-span-wc",{"_allowMarkdown":[4,"_allow-markdown"],"_hideLabel":[4,"_hide-label"],"_icons":[1],"_label":[1],"state":[32]},null,{"_allowMarkdown":["validateAllowMarkdown"],"_hideLabel":["validateHideLabel"],"_icons":["validateIcons"],"_label":["validateLabel"]}]]],["kol-table",[[33,"kol-table",{"_data":[1],"_dataFoot":[1,"_data-foot"],"_headers":[1],"_label":[1],"_minWidth":[1,"_min-width"],"_pagination":[8],"state":[32]},null,{"_data":["validateData"],"_dataFoot":["validateDataFoot"],"_headers":["validateHeaders"],"_label":["validateLabel"],"_minWidth":["validateMinWidth"],"_pagination":["validatePagination"]}]]],["kol-toast-container",[[33,"kol-toast-container",{"state":[32],"enqueue":[64]}]]],["kol-input-checkbox",[[33,"kol-input-checkbox",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_checked":[1540],"_hideError":[1540,"_hide-error"],"_disabled":[4],"_error":[1],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_indeterminate":[1540],"_label":[1],"_name":[1],"_on":[16],"_required":[4],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[8],"_variant":[1],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_checked":["validateChecked"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_indeterminate":["validateIndeterminate"],"_label":["validateLabel"],"_name":["validateName"],"_on":["validateOn"],"_required":["validateRequired"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"],"_variant":["validateVariant"]}]]],["kol-input-color",[[33,"kol-input-color",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_error":[1],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_name":[1],"_on":[16],"_smartButton":[1,"_smart-button"],"_suggestions":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_name":["validateName"],"_on":["validateOn"],"_smartButton":["validateSmartButton"],"_suggestions":["validateSuggestions"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-date",[[33,"kol-input-date",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_error":[1],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_max":[1],"_min":[1],"_name":[1],"_on":[16],"_readOnly":[4,"_read-only"],"_required":[4],"_smartButton":[1,"_smart-button"],"_suggestions":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_step":[2],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_type":[1],"_value":[1025],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_max":["validateMax"],"_min":["validateMin"],"_name":["validateName"],"_on":["validateOn"],"_readOnly":["validateReadOnly"],"_required":["validateRequired"],"_smartButton":["validateSmartButton"],"_suggestions":["validateSuggestions"],"_step":["validateStep"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_type":["validateType"],"_value":["validateValue"]}]]],["kol-input-email",[[33,"kol-input-email",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_error":[1],"_hasCounter":[4,"_has-counter"],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_maxLength":[2,"_max-length"],"_multiple":[4],"_name":[1],"_on":[16],"_pattern":[1],"_placeholder":[1],"_readOnly":[4,"_read-only"],"_required":[4],"_smartButton":[1,"_smart-button"],"_suggestions":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hasCounter":["validateHasCounter"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_maxLength":["validateMaxLength"],"_multiple":["validateMultiple"],"_name":["validateName"],"_on":["validateOn"],"_pattern":["validatePattern"],"_placeholder":["validatePlaceholder"],"_readOnly":["validateReadOnly"],"_required":["validateRequired"],"_suggestions":["validateSuggestions"],"_smartButton":["validateSmartButton"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-file",[[33,"kol-input-file",{"_accept":[1],"_accessKey":[1,"_access-key"],"_alert":[1540],"_disabled":[4],"_error":[1],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_multiple":[4],"_name":[1],"_on":[16],"_required":[4],"_smartButton":[1,"_smart-button"],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1],"state":[32]},null,{"_accept":["validateAccept"],"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_multiple":["validateMultiple"],"_name":["validateName"],"_on":["validateOn"],"_required":["validateRequired"],"_smartButton":["validateSmartButton"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-number",[[33,"kol-input-number",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_error":[1],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_max":[8],"_min":[8],"_name":[1],"_on":[16],"_placeholder":[1],"_readOnly":[4,"_read-only"],"_required":[4],"_smartButton":[1,"_smart-button"],"_suggestions":[1],"_step":[2],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1032],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_max":["validateMax"],"_min":["validateMin"],"_name":["validateName"],"_on":["validateOn"],"_placeholder":["validatePlaceholder"],"_readOnly":["validateReadOnly"],"_required":["validateRequired"],"_smartButton":["validateSmartButton"],"_suggestions":["validateSuggestions"],"_step":["validateStep"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-password",[[33,"kol-input-password",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_error":[1],"_hasCounter":[4,"_has-counter"],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_maxLength":[2,"_max-length"],"_name":[1],"_on":[16],"_pattern":[1],"_placeholder":[1],"_readOnly":[4,"_read-only"],"_required":[4],"_smartButton":[1,"_smart-button"],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hasCounter":["validateHasCounter"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_maxLength":["validateMaxLength"],"_name":["validateName"],"_on":["validateOn"],"_pattern":["validatePattern"],"_placeholder":["validatePlaceholder"],"_readOnly":["validateReadOnly"],"_required":["validateRequired"],"_smartButton":["validateSmartButton"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-radio",[[33,"kol-input-radio",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_disabled":[4],"_error":[1],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_id":[1],"_label":[1],"_name":[1],"_on":[16],"_options":[1],"_orientation":[1],"_required":[4],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[8],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideLabel":["validateHideLabel"],"_hideError":["validateHideError"],"_hint":["validateHint"],"_id":["validateId"],"_label":["validateLabel"],"_name":["validateName"],"_on":["validateOn"],"_options":["validateOptions"],"_orientation":["validateOrientation"],"_required":["validateRequired"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-range",[[33,"kol-input-range",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_error":[1],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_max":[2],"_min":[2],"_name":[1],"_on":[16],"_step":[2],"_suggestions":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[2],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_max":["validateMax"],"_min":["validateMin"],"_name":["validateName"],"_on":["validateOn"],"_step":["validateStep"],"_suggestions":["validateSuggestions"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-input-text",[[33,"kol-input-text",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_autoComplete":[1,"_auto-complete"],"_disabled":[4],"_error":[1],"_hasCounter":[4,"_has-counter"],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_maxLength":[2,"_max-length"],"_name":[1],"_on":[16],"_pattern":[1],"_placeholder":[1],"_readOnly":[4,"_read-only"],"_required":[4],"_suggestions":[1],"_smartButton":[1,"_smart-button"],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_type":[1],"_value":[1025],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_autoComplete":["validateAutoComplete"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hasCounter":["validateHasCounter"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_maxLength":["validateMaxLength"],"_name":["validateName"],"_on":["validateOn"],"_pattern":["validatePattern"],"_placeholder":["validatePlaceholder"],"_readOnly":["validateReadOnly"],"_required":["validateRequired"],"_suggestions":["validateSuggestions"],"_smartButton":["validateSmartButton"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_type":["validateType"],"_value":["validateValue"]}]]],["kol-textarea",[[33,"kol-textarea",{"_accessKey":[1,"_access-key"],"_adjustHeight":[4,"_adjust-height"],"_alert":[1540],"_disabled":[4],"_error":[1],"_hasCounter":[4,"_has-counter"],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_id":[1],"_label":[1],"_maxLength":[2,"_max-length"],"_name":[1],"_on":[16],"_placeholder":[1],"_readOnly":[4,"_read-only"],"_resize":[1],"_required":[4],"_rows":[1026],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_adjustHeight":["validateAdjustHeight"],"_alert":["validateAlert"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hasCounter":["validateHasCounter"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_id":["validateId"],"_label":["validateLabel"],"_maxLength":["validateMaxLength"],"_name":["validateName"],"_on":["validateOn"],"_placeholder":["validatePlaceholder"],"_readOnly":["validateReadOnly"],"_resize":["validateResize"],"_required":["validateRequired"],"_rows":["validateRows"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-nav",[[33,"kol-nav",{"_ariaCurrentValue":[8,"_aria-current-value"],"_collapsible":[4],"_hideLabel":[4,"_hide-label"],"_label":[1],"_links":[1],"_orientation":[1],"state":[32]},null,{"_ariaCurrentValue":["validateAriaCurrentValue"],"_collapsible":["validateCollapsible"],"_hideLabel":["validateHideLabel"],"_label":["validateLabel"],"_links":["validateLinks"],"_orientation":["validateOrientation"]}]]],["kol-accordion",[[33,"kol-accordion",{"_label":[1],"_level":[2],"_on":[16],"_open":[1540],"state":[32]},null,{"_label":["validateLabel"],"_level":["validateLevel"],"_on":["validateOn"],"_open":["validateOpen"]}]]],["kol-breadcrumb",[[33,"kol-breadcrumb",{"_label":[1],"_links":[1],"state":[32]},null,{"_label":["validateLabel"],"_links":["validateLinks"]}]]],["kol-card",[[33,"kol-card",{"_on":[16],"_hasCloser":[4,"_has-closer"],"_label":[1],"_level":[2],"state":[32]},null,{"_on":["validateOn"],"_hasCloser":["validateHasCloser"],"_label":["validateLabel"],"_level":["validateLevel"]}]]],["kol-link-group",[[33,"kol-link-group",{"_listStyleType":[1,"_list-style-type"],"_label":[1],"_links":[1],"_orientation":[1],"state":[32]},null,{"_label":["validateLabel"],"_listStyleType":["validateListStyleType"],"_links":["validateLinks"],"_orientation":["validateOrientation"]}]]],["kol-quote",[[33,"kol-quote",{"_label":[1],"_href":[1],"_quote":[1],"_variant":[1],"state":[32]},null,{"_label":["validateLabel"],"_href":["validateHref"],"_quote":["validateQuote"],"_variant":["validateVariant"]}]]],["kol-tabs",[[33,"kol-tabs",{"_align":[1],"_label":[1],"_on":[16],"_selected":[1538],"_tabs":[1],"state":[32]},null,{"_align":["validateAlign"],"_label":["validateLabel"],"_on":["validateOn"],"_selected":["validateSelected"],"_tabs":["validateTabs"]}]]],["kol-version",[[33,"kol-version",{"_label":[1],"state":[32]},null,{"_label":["validateLabel"]}]]],["kol-button-link",[[33,"kol-button-link",{"_ariaControls":[1,"_aria-controls"],"_ariaExpanded":[4,"_aria-expanded"],"_ariaSelected":[4,"_aria-selected"],"_disabled":[4],"_hideLabel":[4,"_hide-label"],"_icons":[1],"_id":[1],"_label":[1],"_name":[1],"_on":[16],"_role":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_type":[1],"_value":[8]}]]],["kol-link-button",[[33,"kol-link-button",{"_customClass":[1,"_custom-class"],"_download":[1],"_hideLabel":[4,"_hide-label"],"_href":[1],"_icons":[1],"_label":[1],"_listenAriaCurrent":[8,"_listen-aria-current"],"_on":[16],"_role":[1],"_tabIndex":[2,"_tab-index"],"_target":[1],"_targetDescription":[1,"_target-description"],"_tooltipAlign":[1,"_tooltip-align"],"_variant":[1]}]]],["kol-skip-nav",[[33,"kol-skip-nav",{"_label":[1],"_links":[1],"state":[32]},null,{"_label":["validateLabel"],"_links":["validateLinks"]}]]],["kol-split-button",[[33,"kol-split-button",{"_ariaControls":[1,"_aria-controls"],"_ariaExpanded":[4,"_aria-expanded"],"_ariaSelected":[4,"_aria-selected"],"_customClass":[1,"_custom-class"],"_disabled":[4],"_hideLabel":[4,"_hide-label"],"_icons":[1],"_id":[1],"_label":[1],"_name":[1],"_on":[16],"_role":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_type":[1],"_value":[8],"_variant":[1],"state":[32]}]]],["kol-abbr",[[33,"kol-abbr",{"_label":[1],"_tooltipAlign":[1,"_tooltip-align"],"state":[32]},null,{"_label":["validateLabel"],"_tooltipAlign":["validateTooltipAlign"]}]]],["kol-details",[[33,"kol-details",{"_label":[1],"_on":[16],"_open":[1540],"state":[32]},null,{"_label":["validateLabel"],"_on":["validateOn"],"_open":["validateOpen"]}]]],["kol-span",[[33,"kol-span",{"_hideLabel":[4,"_hide-label"],"_icons":[1],"_label":[1]}]]],["kol-avatar",[[33,"kol-avatar",{"_src":[1],"_label":[1]}]]],["kol-button-group",[[33,"kol-button-group"]]],["kol-form",[[1,"kol-form",{"_on":[16],"_requiredText":[8,"_required-text"],"state":[32]},null,{"_on":["validateOn"],"_requiredText":["validateRequiredText"]}]]],["kol-heading",[[33,"kol-heading",{"_label":[1],"_level":[2],"_secondaryHeadline":[1,"_secondary-headline"]}]]],["kol-image",[[33,"kol-image",{"_alt":[1],"_loading":[1],"_sizes":[1],"_src":[1],"_srcset":[1],"state":[32]},null,{"_alt":["validateAlt"],"_loading":["validateLoading"],"_sizes":["validateSizes"],"_src":["validateSrc"],"_srcset":["validateSrcset"]}]]],["kol-kolibri",[[33,"kol-kolibri",{"_animate":[4],"_color":[1],"_labeled":[4],"state":[32]},null,{"_animate":["validateAnimate"],"_color":["validateColor"],"_labeled":["validateLabeled"]}]]],["kol-logo",[[33,"kol-logo",{"_org":[1],"state":[32]},null,{"_org":["validateOrg"]}]]],["kol-modal",[[33,"kol-modal",{"_activeElement":[1040],"_label":[1],"_on":[16],"_width":[1],"state":[32]},null,{"_activeElement":["validateActiveElement"],"_label":["validateLabel"],"_on":["validateOn"],"_width":["validateWidth"]}]]],["kol-popover",[[4,"kol-popover",{"_align":[1],"_show":[1540],"state":[32]},null,{"_align":["validateAlign"],"_show":["validateShow"]}]]],["kol-progress",[[33,"kol-progress",{"_label":[1],"_max":[2],"_unit":[1],"_value":[2],"_variant":[1],"state":[32]},null,{"_label":["validateLabel"],"_max":["validateMax"],"_unit":["validateUnit"],"_value":["validateValue"],"_variant":["validateVariant"]}]]],["kol-spin",[[33,"kol-spin",{"_show":[1540],"_variant":[1],"state":[32]},null,{"_show":["validateShow"],"_variant":["validateVariant"]}]]],["kol-symbol",[[0,"kol-symbol",{"_label":[1],"_symbol":[1],"state":[32]},null,{"_label":["validateLabel"],"_symbol":["validateSymbol"]}]]],["kol-alert-wc_3",[[4,"kol-alert-wc",{"_alert":[4],"_hasCloser":[4,"_has-closer"],"_label":[1],"_level":[2],"_on":[16],"_type":[1],"_variant":[1],"state":[32]},null,{"_alert":["validateAlert"],"_hasCloser":["validateHasCloser"],"_label":["validateLabel"],"_level":["validateLevel"],"_on":["validateOn"],"_type":["validateType"],"_variant":["validateVariant"]}],[4,"kol-heading-wc",{"_label":[1],"_level":[2],"_secondaryHeadline":[1,"_secondary-headline"],"state":[32]},null,{"_label":["validateLabel"],"_level":["validateLevel"],"_secondaryHeadline":["validateSecondaryHeadline"]}],[4,"kol-button-wc",{"_ariaControls":[1,"_aria-controls"],"_ariaExpanded":[4,"_aria-expanded"],"_ariaSelected":[4,"_aria-selected"],"_customClass":[1,"_custom-class"],"_disabled":[4],"_hideLabel":[4,"_hide-label"],"_icons":[1],"_id":[1],"_label":[1],"_name":[1],"_on":[16],"_role":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_type":[1],"_value":[8],"_variant":[1],"state":[32]},null,{"_ariaControls":["validateAriaControls"],"_ariaExpanded":["validateAriaExpanded"],"_ariaSelected":["validateAriaSelected"],"_customClass":["validateCustomClass"],"_disabled":["validateDisabled"],"_hideLabel":["validateHideLabel"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_name":["validateName"],"_on":["validateOn"],"_role":["validateRole"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_tooltipAlign":["validateTooltipAlign"],"_type":["validateType"],"_value":["validateValue"],"_variant":["validateVariant"]}]]],["kol-input",[[4,"kol-input",{"_alert":[4],"_currentLength":[2,"_current-length"],"_disabled":[4],"_error":[1],"_hasCounter":[4,"_has-counter"],"_hideError":[4,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[16],"_id":[1],"_label":[1],"_maxLength":[2,"_max-length"],"_readOnly":[4,"_read-only"],"_renderNoLabel":[4,"_render-no-label"],"_required":[4],"_slotName":[1,"_slot-name"],"_suggestions":[1],"_smartButton":[1,"_smart-button"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[4]}]]],["kol-pagination",[[33,"kol-pagination",{"_boundaryCount":[2,"_boundary-count"],"_customClass":[1,"_custom-class"],"_label":[1],"_hasButtons":[8,"_has-buttons"],"_page":[2],"_pageSize":[1026,"_page-size"],"_pageSizeOptions":[1,"_page-size-options"],"_on":[16],"_siblingCount":[2,"_sibling-count"],"_tooltipAlign":[1,"_tooltip-align"],"_max":[2],"_variant":[1],"state":[32]},null,{"_boundaryCount":["validateBoundaryCount"],"_customClass":["validateCustomClass"],"_label":["validateLabel"],"_hasButtons":["validateHasButtons"],"_on":["validateOn"],"_page":["validatePage"],"_pageSize":["validatePageSize"],"_pageSizeOptions":["validatePageSizeOptions"],"_siblingCount":["validateSiblingCount"],"_max":["validateMax"],"_tooltipAlign":["validateTooltipAlign"],"_variant":["validateVariant"]}]]],["kol-toast",[[33,"kol-toast",{"_label":[1],"_on":[16],"_status":[1],"_type":[1],"state":[32]},null,{"_label":["validateLabel"],"_on":["validateOn"],"_status":["validateStatus"],"_type":["validateType"]}]]],["kol-avatar-wc",[[0,"kol-avatar-wc",{"_src":[1],"_label":[1],"state":[32]},null,{"_src":["validateSrc"],"_label":["validateLabel"]}]]],["kol-indented-text",[[33,"kol-indented-text",{"state":[32]}]]],["kol-icon",[[33,"kol-icon",{"_icons":[1],"_label":[1],"state":[32]},null,{"_icons":["validateIcons"],"_label":["validateLabel"]}]]],["kol-button-link-text-switch",[[0,"kol-button-link-text-switch",{"_link":[16]}]]],["kol-badge",[[33,"kol-badge",{"_color":[1],"_icons":[1],"_label":[1],"_smartButton":[1,"_smart-button"],"state":[32]},null,{"_color":["validateColor"],"_smartButton":["validateSmartButton"]}]]],["kol-select",[[33,"kol-select",{"_accessKey":[1,"_access-key"],"_alert":[1540],"_disabled":[4],"_error":[1],"_hideError":[1540,"_hide-error"],"_hideLabel":[4,"_hide-label"],"_hint":[1],"_icons":[1],"_id":[1],"_label":[1],"_multiple":[4],"_name":[1],"_on":[16],"_options":[1],"_required":[4],"_rows":[2],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_touched":[1540],"_value":[1025],"state":[32]},null,{"_accessKey":["validateAccessKey"],"_alert":["validateAlert"],"_disabled":["validateDisabled"],"_error":["validateError"],"_hideError":["validateHideError"],"_hideLabel":["validateHideLabel"],"_hint":["validateHint"],"_icons":["validateIcons"],"_id":["validateId"],"_label":["validateLabel"],"_multiple":["validateMultiple"],"_name":["validateName"],"_on":["validateOn"],"_options":["validateOptions"],"_required":["validateRequired"],"_rows":["validateRows"],"_syncValueBySelector":["validateSyncValueBySelector"],"_tabIndex":["validateTabIndex"],"_touched":["validateTouched"],"_value":["validateValue"]}]]],["kol-button-group-wc",[[4,"kol-button-group-wc",{"state":[32]}]]],["kol-button",[[33,"kol-button",{"_ariaControls":[1,"_aria-controls"],"_ariaExpanded":[4,"_aria-expanded"],"_ariaSelected":[4,"_aria-selected"],"_customClass":[1,"_custom-class"],"_disabled":[4],"_hideLabel":[4,"_hide-label"],"_icons":[1],"_id":[1],"_label":[1],"_name":[1],"_on":[16],"_role":[1],"_syncValueBySelector":[1,"_sync-value-by-selector"],"_tabIndex":[2,"_tab-index"],"_tooltipAlign":[1,"_tooltip-align"],"_type":[1],"_value":[8],"_variant":[1]}]]],["kol-link-wc",[[4,"kol-link-wc",{"_download":[1],"_hideLabel":[4,"_hide-label"],"_href":[1],"_icons":[1],"_label":[1],"_listenAriaCurrent":[8,"_listen-aria-current"],"_on":[16],"_role":[1],"_tabIndex":[2,"_tab-index"],"_target":[1],"_targetDescription":[1,"_target-description"],"_tooltipAlign":[1,"_tooltip-align"],"state":[32]},null,{"_download":["validateDownload"],"_hideLabel":["validateHideLabel"],"_href":["validateHref"],"_icons":["validateIcons"],"_label":["validateLabel"],"_listenAriaCurrent":["validateListenAriaCurrent"],"_on":["validateOn"],"_role":["validateRole"],"_tabIndex":["validateTabIndex"],"_target":["validateTarget"],"_targetDescription":["validateTargetDescription"],"_tooltipAlign":["validateTooltipAlign"]}]]],["kol-link",[[33,"kol-link",{"_download":[1],"_hideLabel":[4,"_hide-label"],"_href":[1],"_icons":[1],"_label":[1],"_listenAriaCurrent":[8,"_listen-aria-current"],"_on":[16],"_role":[1],"_tabIndex":[2,"_tab-index"],"_target":[1],"_targetDescription":[1,"_target-description"],"_tooltipAlign":[1,"_tooltip-align"]}]]],["kol-alert",[[33,"kol-alert",{"_alert":[4],"_hasCloser":[4,"_has-closer"],"_label":[1],"_level":[2],"_on":[16],"_type":[1],"_variant":[1],"state":[32]}]]]]'),a);var f}]).then((()=>{const n=document.querySelector("div#app");n instanceof HTMLElement&&(0,E.s)(n).render((0,t.jsx)(T.StrictMode,{children:(0,t.jsx)(J,{})}))})).catch(console.error)})()})();