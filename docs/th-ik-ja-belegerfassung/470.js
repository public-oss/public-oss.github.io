/*! For license information please see 470.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_oss_th_ik_ja_belegerfassung=self.webpackChunk_public_oss_th_ik_ja_belegerfassung||[]).push([[470],{470:(e,t,o)=>{o.r(t),o.d(t,{lean_test_open:()=>r});var n=o(2729),l=o(3981);const r=class{constructor(e){(0,n.r)(this,e),this.hostElement=null,this.catchHostElement=e=>{this.hostElement=e,console.log(this.hostElement)},this._name=void 0,this.state={_name:""}}validateName(e){(0,l.a)(this,"_name",e)}componentWillLoad(){this.validateName(this._name)}render(){return(0,n.h)(n.H,{ref:this.catchHostElement},(0,n.h)("span",null,(0,n.h)("strong",null,"Name:")," ",this.state._name),(0,n.h)("slot",null))}static get watchers(){return{_name:["validateName"]}}}},3981:(e,t,o)=>{o.d(t,{L:()=>c,a:()=>f,s:()=>u,w:()=>h});var n,l,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==o.g?o.g:"undefined"!=typeof self?self:{},i=(n=function(e){var t,o;t=r,o=function(){var e=function(){},t="undefined",o=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),n=["trace","debug","info","warn","error"];function l(e,t){var o=e[t];if("function"==typeof o.bind)return o.bind(e);try{return Function.prototype.bind.call(o,e)}catch(t){return function(){return Function.prototype.apply.apply(o,[e,arguments])}}}function r(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function i(n){return"debug"===n&&(n="log"),typeof console!==t&&("trace"===n&&o?r:void 0!==console[n]?l(console,n):void 0!==console.log?l(console,"log"):e)}function s(t,o){for(var l=0;l<n.length;l++){var r=n[l];this[r]=l<t?e:this.methodFactory(r,t,o)}this.log=this.debug}function a(e,o,n){return function(){typeof console!==t&&(s.call(this,o,n),this[e].apply(this,arguments))}}function c(e,t,o){return i(e)||a.apply(this,arguments)}function u(e,o,l){var r,i=this;o=null==o?"WARN":o;var a="loglevel";function u(){var e;if(typeof window!==t&&a){try{e=window.localStorage[a]}catch(e){}if(typeof e===t)try{var o=window.document.cookie,n=o.indexOf(encodeURIComponent(a)+"=");-1!==n&&(e=/^([^;]+)/.exec(o.slice(n))[1])}catch(e){}return void 0===i.levels[e]&&(e=void 0),e}}"string"==typeof e?a+=":"+e:"symbol"==typeof e&&(a=void 0),i.name=e,i.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},i.methodFactory=l||c,i.getLevel=function(){return r},i.setLevel=function(o,l){if("string"==typeof o&&void 0!==i.levels[o.toUpperCase()]&&(o=i.levels[o.toUpperCase()]),!("number"==typeof o&&o>=0&&o<=i.levels.SILENT))throw"log.setLevel() called with invalid level: "+o;if(r=o,!1!==l&&function(e){var o=(n[e]||"silent").toUpperCase();if(typeof window!==t&&a){try{return void(window.localStorage[a]=o)}catch(e){}try{window.document.cookie=encodeURIComponent(a)+"="+o+";"}catch(e){}}}(o),s.call(i,o,e),typeof console===t&&o<i.levels.SILENT)return"No console available for logging"},i.setDefaultLevel=function(e){o=e,u()||i.setLevel(e,!1)},i.resetLevel=function(){i.setLevel(o,!1),function(){if(typeof window!==t&&a){try{return void window.localStorage.removeItem(a)}catch(e){}try{window.document.cookie=encodeURIComponent(a)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}()},i.enableAll=function(e){i.setLevel(i.levels.TRACE,e)},i.disableAll=function(e){i.setLevel(i.levels.SILENT,e)};var d=u();null==d&&(d=o),i.setLevel(d,!1)}var d=new u,f={};d.getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=f[e];return t||(t=f[e]=new u(e,d.getLevel(),d.methodFactory)),t};var h=typeof window!==t?window.log:void 0;return d.noConflict=function(){return typeof window!==t&&window.log===d&&(window.log=h),d},d.getLoggers=function(){return f},d.default=d,d},e.exports?e.exports=o():t.log=o()},n(l={path:undefined,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}}),l.exports);const s=[];class a{constructor(e,t={}){this.shield=[`%c${e}`,"string"==typeof t.shieldStyle&&t.shieldStyle.length>0?t.shieldStyle:"color: white; background: #666; font-weight: bold; font-size: 10px; padding: 2px 6px; border-radius: 3px; border: 1px solid #000"]}static getInstance(e,t={}){if("string"==typeof e&&e.length>0)return!1===a.instances.has(e)&&a.instances.set(e,new a(e)),a.instances.get(e);throw new Error("The identifier of the Logger must be a string with a min length of 1.")}log(e,t){switch("object"==typeof t.refObject&&null!==t.refObject&&"function"==typeof t.refObject.constructor&&"string"==typeof t.refObject.constructor.name&&(t.className=`[${t.refObject.constructor.name}]:`),s.push({date:(new Date).toUTCString(),level:e,message:t}),e){case"trace":i.trace(...this.shield,t);break;case"debug":i.debug(...this.shield,t);break;case"info":i.info(...this.shield,t);break;case"warn":i.warn(...this.shield,t);break;default:i.error(...this.shield,t)}}trace(e,t){return this.log("trace",{messageText:e,refObject:t}),this}debug(e,t){return this.log("debug",{messageText:e,refObject:t}),this}info(e,t){return this.log("info",{messageText:e,refObject:t}),this}warn(e,t){return this.log("warn",{messageText:e,refObject:t}),this}error(e,t){return this.log("error",{messageText:e,refObject:t}),this}static get cache(){return[].concat(s)}}a.instances=new Map,i.setDefaultLevel("error");const c=a.getInstance("leanup"),u=(e,t,o,n={})=>{var l,r;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==o&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof n.afterPatch&&(null===(l=e.nextHooks.get(t))||void 0===l||l.set("afterPatch",n.afterPatch)),"function"==typeof n.beforePatch&&(null===(r=e.nextHooks.get(t))||void 0===r||r.set("beforePatch",n.beforePatch)),e.nextState.set(t,o),(e=>{var t,o,n;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,o)=>{var n;const l=t.get("beforePatch");"function"==typeof l&&l(null===(n=e.nextState)||void 0===n?void 0:n.get(o),e.nextState,e,o)})),(null===(o=e.nextState)||void 0===o?void 0:o.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(n=e.nextHooks)||void 0===n||n.forEach(((t,o)=>{const n=t.get("afterPatch");"function"==typeof n&&n(e.state[o],e.state,e,o)}))),delete e.nextHooks})(e))},d=(e,t,o,n,l,r={})=>{!o(l)||void 0!==(null==r?void 0:r.allowNull)&&!1!==(null==r?void 0:r.allowNull)&&null!==l?void 0!==(null==r?void 0:r.defaultValue)||void 0===(null==r?void 0:r.required)||!1===(null==r?void 0:r.required)?u(e,t,null==r?void 0:r.defaultValue,null==r?void 0:r.hooks):(!0===r.allowNull&&n.add(null),!0!==r.required&&n.add(void 0),((e,t,o,n)=>{c.debug(`[${e.constructor.name}] Der Property-Wert (${o}) für '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(n).join(", ")}`)})(e,t,l,n)):u(e,t,l,null==r?void 0:r.hooks)},f=(e,t,o,n)=>{d(e,t,(e=>"string"==typeof e&&e.length>=("number"==typeof(null==n?void 0:n.minLength)?null==n?void 0:n.minLength:1)),new Set(["String (nicht leer)"]),o,n)},h=(e,t,o,n)=>{d(e,t,(e=>"number"==typeof e&&(void 0===(null==n?void 0:n.min)||"number"==typeof(null==n?void 0:n.min)&&e>=n.min)&&(void 0===(null==n?void 0:n.max)||"number"==typeof(null==n?void 0:n.max)&&e<=n.max)),new Set(["Number"]),o,n)}}}]);