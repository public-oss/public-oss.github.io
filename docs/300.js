/*! For license information please see 300.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_oss_th_ik_ja_belegerfassung=self.webpackChunk_public_oss_th_ik_ja_belegerfassung||[]).push([[300],{300:(e,t,n)=>{n.r(t),n.d(t,{lean_input_adapter:()=>E});var r,o,s=n(4580),i=n(6387);function a(e){return e instanceof l?e.get():Array.isArray(e)?e:[e]}class l{constructor(e){this.items=new Set,this.protectedItems=new Set,this.instancesOf=Array.isArray(e)?e:[e]}get empty(){return 0===this.items.size}get first(){return this.items.size>0?Array.from(this.items)[0]:null}forEach(e){this.items.forEach(e)}filter(e){return Array.from(this.items).filter(e)}find(e){return Array.from(this.items).find(e)}get last(){return this.items.size>0?Array.from(this.items)[this.items.size-1]:null}get length(){return i.L.debug("The attribute ListOf.length is deprecated - please use ListOf.size instead."),this.size}get size(){return this.items.size}add(e,t=!1){return a(e).filter((e=>{let n=!1;return!1===this.has(e)?function(e,t){return!!Array.isArray(e)&&void 0!==e.find((e=>t instanceof e))}(this.instancesOf,e)?(t&&this.protectedItems.add(e),this.items.add(e),n=!0):i.L.debug("The item does not have a valid instance type.",this):i.L.debug("The item is already in the list.",this),n})).length>0}remove(e){return i.L.debug("The method ListOf.remove() is deprecated - please use ListOf.delete() instead."),this.delete(e)}delete(e){return a(e).filter((e=>{let t=!1;return!1===this.protectedItems.has(e)?this.items.has(e)?(this.items.delete(e),t=!0):i.L.debug("The item is not in the list.",this):i.L.debug("The item is protected and cannot be removed.",this),t})).length>0}set(e,t=!1){const n=this.clear(),r=this.add(e,t);return n||r}get(e){return!1===isNaN(e)&&"number"==typeof e?Array.from(this.items).slice(0,e):Array.from(this.items)}clear(){const e=this.items.size;return this.items.forEach((e=>{!1===this.protectedItems.has(e)&&this.items.delete(e)})),e!==this.items.size}contains(e){return i.L.debug("The method ListOf.contains() is deprecated - please use ListOf.has() instead."),this.items.has(e)}has(e){return this.items.has(e)}}class h{}class c extends l{constructor(){super(h),this.formatters=this}format(e){return this.formatters.forEach((t=>{e=t.format(e)})),e}parse(e){return this.formatters.forEach((t=>{e=t.parse(e)})),e}}class d{constructor(e){this.state={message:"An unknown validation error occurred."},this.message=e}set message(e){"string"==typeof e&&e.length>0?this.state.message=e:i.L.error("The message of the validator should be type of string with a min-length of 1.")}get message(){return this.state.message}}class u extends l{constructor(){super(d),this.validators=this,this.validators=this}validate(e,t=!1){const n=[];try{this.validators.forEach((r=>{if(!1===r.valid(e)&&(n.push(r.message),!0===t))throw new Error("Only one error is enough. Be quick and stop the execution of other validation functions.")}))}catch(e){}return n}}class f{constructor(e){this.changeListeners=new l(Function),this._errors=new Set,this._parentForms=new Set,this._name="unnamed",this._validationHandler=new u,this.name=e}get name(){return this._name}set name(e){if("string"!=typeof e)throw new Error("The name of a control must be a string.");if(!(e.length>0))throw new Error("The name of a control must have a min-length of 1.");this._name=e}get error(){return this._errors.size>0?this._errors.values().next().value:null}getErrors(){return this._errors}get id(){let e=this.name;return this._parentForms.size>0&&(e=`${this._parentForms.values().next().value.id}_${e}`),e}get valid(){return 0===this._errors.size}findMeInParentForm(e){if(this===e)return!0;if(e instanceof p){const t=[];return this._parentForms.forEach((n=>{!0===n.findMeInParentForm(e)&&t.push(n)})),t.length>0}return!1}addParentForm(e){if(!1!==this._parentForms.has(e))throw new Error(`An form control with the name '${e.name}' already exists.`);if(!1!==e.findMeInParentForm(this))throw new Error(`The same form control (${e.name}) leads to a form control loop.`);this._parentForms.add(e)}removeParentForm(e){if(!0!==this._parentForms.has(e))throw new Error(`An form control with the name '${e.name}' does not exists.`);this._parentForms.delete(e)}setValidationHandler(e,t=null){this._validationHandler=e,this.validate(t),this.notify()}validate(e){this._errors.clear(),this._validationHandler.validate(e).forEach((e=>{this._errors.add(e)})),this._parentForms.forEach((e=>{e.validate(e.getData())}))}notify(...e){this.changeListeners.forEach((t=>{t(...e)})),this._parentForms.forEach((e=>{e.notify(e.getData())}))}}(o=r||(r={})).checkbox="checkbox",o.date="date",o.email="email",o.number="number",o.password="password",o.radio="radio",o.select="select",o.slider="slider",o.text="text";class g extends f{constructor(e,t){super(e),this._disabled=!1,this._label="",this._mandatory=!1,this._placeholder="",this._readonly=!1,this._type="text",this._value=null,this._oldValue=null,this._formatHandler=new c,"object"==typeof t&&null!==t&&(this.disabled=!0===t.disabled,this.label="string"==typeof t.label?t.label:"",this.mandatory=!0===t.mandatory,this.placeholder="string"==typeof t.placeholder?t.placeholder:"",this.readonly=!0===t.disabled,this.type="string"==typeof t.type?t.type:"text",this.value=void 0!==t.value?t.value:null)}get disabled(){return this._disabled}set disabled(e){if("boolean"!=typeof e)throw new Error("The disabled flag of a input control must be a string.");this._disabled=e,this.notify()}get mandatory(){return this._mandatory}set mandatory(e){if("boolean"!=typeof e)throw new Error("The mandatory flag of a input control must be a string.");this._mandatory=e,this.notify()}get readonly(){return this._readonly}set readonly(e){if("boolean"!=typeof e)throw new Error("The readonly flag of a input control must be a string.");this._readonly=e,this.notify()}get label(){return this._label}set label(e){if("string"!=typeof e)throw new Error("The label of a input control must be a string.");this._label=e,this.notify()}get placeholder(){return this._placeholder}set placeholder(e){if("string"!=typeof e)throw new Error("The placeholder of a input control must be a string.");this._placeholder=e,this.notify()}get type(){return this._type.toString()}set type(e){if("string"!=typeof e)throw new Error("The type of a input control must be a string.");switch(e){case"checkbox":case"date":case"email":case"number":case"password":case"radio":case"select":case"slider":case"text":this._type=e,this.notify();break;default:throw new Error("The type of a input control must be a of the following types: ???.")}}get oldValue(){return this._oldValue}get value(){return this._value}set value(e){this._oldValue=this._value,this._value=e,this.validate(e),this.notify()}get modelValue(){return this.value}set modelValue(e){this.value=e}get viewValue(){return this._formatHandler.format(this.modelValue)}set viewValue(e){this.modelValue=this._formatHandler.parse(e)}notify(){super.notify(this._value,this._oldValue)}setValidationHandler(e){super.setValidationHandler(e,this.value)}setFormatHandler(e){this._formatHandler=e}}class p extends f{constructor(){super(...arguments),this.controls=new Set}get disabled(){return 0===Array.from(this.controls).filter((e=>!1===e.disabled)).length}set disabled(e){this.controls.forEach((t=>{t.disabled=e}))}get readonly(){return 0===Array.from(this.controls).filter((e=>!1===e.readonly)).length}set readonly(e){this.controls.forEach((t=>{t.readonly=e}))}get valid(){return super.valid&&0===Array.from(this.controls).filter((e=>!1===e.valid)).length}addControl(e){if(!1!==this.controls.has(e))throw new Error(`A control with the same name '${e.name}' already exists.`);e.addParentForm(this),this.controls.add(e)}removeControl(e){if(!0!==this.controls.has(e))throw new Error(`A control with the name '${e.name}' does not exists.`);e instanceof f&&(e.removeParentForm(this),this.controls.delete(e))}getControls(){return Array.from(this.controls)}getControl(e){return Array.from(this.controls).find((t=>t.name===e))}getForms(){return Array.from(this.controls).filter((e=>e instanceof p))}getForm(e){return Array.from(this.getForms()).find((t=>t.name===e))}getInputs(){return Array.from(this.controls).filter((e=>e instanceof g))}getInput(e){return Array.from(this.getInputs()).find((t=>t.name===e))}setData(e){this.controls.forEach((t=>{if(void 0!==e[t.name])if(t instanceof p)t.setData(e[t.name]);else{if(!(t instanceof g))throw new Error("The control is neither an instance of FormControl or InputControl.");t.value=e[t.name]}}))}getData(){const e={};return this.controls.forEach((t=>{if(t instanceof p)e[t.name]=t.getData();else{if(!(t instanceof g))throw new Error("The control is neither an instance of FormControl or InputControl.");e[t.name]=t.value}})),e}setValidationHandler(e){super.setValidationHandler(e)}}new class extends h{constructor(){super(...arguments),this.regExp=/([A-Z0-9]{1,4})/gi}format(e){if("string"==typeof e){const t=e.match(this.regExp);if(Array.isArray(t))return null==t?void 0:t.join(" ")}return e}parse(e){return"string"==typeof e?e.replace(/ /g,""):e}};const m=new class extends d{constructor(e="Please enter a value."){super(e)}valid(e){return null!=e&&e.toString().length>0}};class y extends d{valid(e){return!1===m.valid(e)||this.validate(e)}}class v extends y{constructor(e,t="Please enter a valid value."){super(t),this._regExp=/^/g,this.regExp=e}set regExp(e){e instanceof RegExp?this._regExp=e:i.L.debug("The regExp of the pattern validator should be type of RegExp.")}get regExp(){return this._regExp}validate(e){return this.regExp.test(e)}}const b=/^\d+$/;new class extends v{constructor(e="Please enter a number."){super(b,e)}};const w=new g("unknown",{label:""}),_=["KOL-INPUT-CHECKBOX","KOL-INPUT-COLOR","KOL-INPUT-DATE","KOL-INPUT-EMAIL","KOL-INPUT-FILE","KOL-INPUT-NUMBER","KOL-INPUT-PASSWORD","KOL-INPUT-RANGE","KOL-INPUT-RADIO","KOL-INPUT-TEXT","KOL-SELECT","KOL-TEXTAREA"],E=class{constructor(e){(0,s.r)(this,e),this._debounce=250,this._on={},this.state={_control:w,_debounce:250,_on:{}},this.changeListener=()=>{this.syncControl()},this.onChange=(e,t)=>{"object"==typeof this.state._control&&(this.state._control.viewValue=t),"object"==typeof this.state._on&&null!==this.state._on&&"function"==typeof this.state._on.onChange&&this.state._on.onChange(e,t)},this.syncControl=()=>{if(this.hostElement instanceof s.H){const e=this.hostElement.childNodes;e&&e.forEach((e=>{e instanceof s.H&&(_.includes(e.tagName)?(e._checked=!0===this.state._control.value,e._disabled=!0===this.state._control.disabled,e._error="string"==typeof this.state._control.error&&this.state._control.error.length>0?this.state._control.error:"",e._id=this.state._control.id,e._name=this.state._control.name,e._value=this.state._control.viewValue,e._on=Object.assign(Object.assign({},this.state._on),{onChange:this.onChange}),e._required=!0===this.state._control.mandatory,"string"==typeof this.state._control.label&&this.state._control.label.length>0&&(e.innerText=this.state._control.label)):console.warn(`Slotted input component (${e.tagName}) not detected. Valid tag names are: ${_.join(", ")}`))}))}},this.catchHostElement=e=>{e instanceof s.H&&(this.hostElement=e,this.syncControl())}}validateControl(e,t){"object"==typeof e&&"object"==typeof e.changeListeners&&"function"==typeof e.changeListeners.has&&"function"==typeof e.changeListeners.add&&("object"==typeof t&&"object"==typeof t.changeListeners&&"function"==typeof t.changeListeners.has&&"function"==typeof t.changeListeners.delete&&!0===t.changeListeners.has(this.changeListener)&&t.changeListeners.delete(this.changeListener),!1===e.changeListeners.has(this.changeListener)&&e.changeListeners.add(this.changeListener),(0,i.s)(this,"_control",e),this.syncControl())}validateDebounce(e){(0,i.w)(this,"_debounce",e)}validateOn(e){"object"==typeof e&&null!==e&&(0,i.s)(this,"_on",e)}componentWillLoad(){this.validateControl(this._control),this.validateDebounce(this._debounce),this.validateOn(this._on)}disconnectedCallback(){"object"==typeof this.state._control&&"object"==typeof this.state._control.changeListeners&&"function"==typeof this.state._control.changeListeners.delete&&this.state._control.changeListeners.delete(this.changeListener)}render(){return(0,s.h)(s.a,{ref:this.catchHostElement},(0,s.h)("slot",null))}static get watchers(){return{_control:["validateControl"],_debounce:["validateDebounce"],_on:["validateOn"]}}}},6387:(e,t,n)=>{n.d(t,{L:()=>h,a:()=>u,s:()=>c,w:()=>f});var r,o,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{},i=(r=function(e){var t,n;t=s,n=function(){var e=function(){},t="undefined",n=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),r=["trace","debug","info","warn","error"];function o(e,t){var n=e[t];if("function"==typeof n.bind)return n.bind(e);try{return Function.prototype.bind.call(n,e)}catch(t){return function(){return Function.prototype.apply.apply(n,[e,arguments])}}}function s(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function i(r){return"debug"===r&&(r="log"),typeof console!==t&&("trace"===r&&n?s:void 0!==console[r]?o(console,r):void 0!==console.log?o(console,"log"):e)}function a(t,n){for(var o=0;o<r.length;o++){var s=r[o];this[s]=o<t?e:this.methodFactory(s,t,n)}this.log=this.debug}function l(e,n,r){return function(){typeof console!==t&&(a.call(this,n,r),this[e].apply(this,arguments))}}function h(e,t,n){return i(e)||l.apply(this,arguments)}function c(e,n,o){var s,i=this;n=null==n?"WARN":n;var l="loglevel";function c(){var e;if(typeof window!==t&&l){try{e=window.localStorage[l]}catch(e){}if(typeof e===t)try{var n=window.document.cookie,r=n.indexOf(encodeURIComponent(l)+"=");-1!==r&&(e=/^([^;]+)/.exec(n.slice(r))[1])}catch(e){}return void 0===i.levels[e]&&(e=void 0),e}}"string"==typeof e?l+=":"+e:"symbol"==typeof e&&(l=void 0),i.name=e,i.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},i.methodFactory=o||h,i.getLevel=function(){return s},i.setLevel=function(n,o){if("string"==typeof n&&void 0!==i.levels[n.toUpperCase()]&&(n=i.levels[n.toUpperCase()]),!("number"==typeof n&&n>=0&&n<=i.levels.SILENT))throw"log.setLevel() called with invalid level: "+n;if(s=n,!1!==o&&function(e){var n=(r[e]||"silent").toUpperCase();if(typeof window!==t&&l){try{return void(window.localStorage[l]=n)}catch(e){}try{window.document.cookie=encodeURIComponent(l)+"="+n+";"}catch(e){}}}(n),a.call(i,n,e),typeof console===t&&n<i.levels.SILENT)return"No console available for logging"},i.setDefaultLevel=function(e){n=e,c()||i.setLevel(e,!1)},i.resetLevel=function(){i.setLevel(n,!1),function(){if(typeof window!==t&&l){try{return void window.localStorage.removeItem(l)}catch(e){}try{window.document.cookie=encodeURIComponent(l)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}()},i.enableAll=function(e){i.setLevel(i.levels.TRACE,e)},i.disableAll=function(e){i.setLevel(i.levels.SILENT,e)};var d=c();null==d&&(d=n),i.setLevel(d,!1)}var d=new c,u={};d.getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var t=u[e];return t||(t=u[e]=new c(e,d.getLevel(),d.methodFactory)),t};var f=typeof window!==t?window.log:void 0;return d.noConflict=function(){return typeof window!==t&&window.log===d&&(window.log=f),d},d.getLoggers=function(){return u},d.default=d,d},e.exports?e.exports=n():t.log=n()},r(o={path:undefined,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}}),o.exports);const a=[];class l{constructor(e,t={}){this.shield=[`%c${e}`,"string"==typeof t.shieldStyle&&t.shieldStyle.length>0?t.shieldStyle:"color: white; background: #666; font-weight: bold; font-size: 10px; padding: 2px 6px; border-radius: 3px; border: 1px solid #000"]}static getInstance(e,t={}){if("string"==typeof e&&e.length>0)return!1===l.instances.has(e)&&l.instances.set(e,new l(e)),l.instances.get(e);throw new Error("The identifier of the Logger must be a string with a min length of 1.")}log(e,t){switch("object"==typeof t.refObject&&null!==t.refObject&&"function"==typeof t.refObject.constructor&&"string"==typeof t.refObject.constructor.name&&(t.className=`[${t.refObject.constructor.name}]:`),a.push({date:(new Date).toUTCString(),level:e,message:t}),e){case"trace":i.trace(...this.shield,t);break;case"debug":i.debug(...this.shield,t);break;case"info":i.info(...this.shield,t);break;case"warn":i.warn(...this.shield,t);break;default:i.error(...this.shield,t)}}trace(e,t){return this.log("trace",{messageText:e,refObject:t}),this}debug(e,t){return this.log("debug",{messageText:e,refObject:t}),this}info(e,t){return this.log("info",{messageText:e,refObject:t}),this}warn(e,t){return this.log("warn",{messageText:e,refObject:t}),this}error(e,t){return this.log("error",{messageText:e,refObject:t}),this}static get cache(){return[].concat(a)}}l.instances=new Map,i.setDefaultLevel("error");const h=l.getInstance("leanup"),c=(e,t,n,r={})=>{var o,s;void 0===e.nextHooks&&(e.nextHooks=new Map),void 0===e.nextState&&(e.nextState=new Map),e.nextState.get(t)!==n&&(e.nextHooks.get(t)instanceof Map==0&&e.nextHooks.set(t,new Map),"function"==typeof r.afterPatch&&(null===(o=e.nextHooks.get(t))||void 0===o||o.set("afterPatch",r.afterPatch)),"function"==typeof r.beforePatch&&(null===(s=e.nextHooks.get(t))||void 0===s||s.set("beforePatch",r.beforePatch)),e.nextState.set(t,n),(e=>{var t,n,r;null===(t=e.nextHooks)||void 0===t||t.forEach(((t,n)=>{var r;const o=t.get("beforePatch");"function"==typeof o&&o(null===(r=e.nextState)||void 0===r?void 0:r.get(n),e.nextState,e,n)})),(null===(n=e.nextState)||void 0===n?void 0:n.size)>0&&(e.state=Object.assign(Object.assign({},e.state),Object.fromEntries(e.nextState)),delete e.nextState,null===(r=e.nextHooks)||void 0===r||r.forEach(((t,n)=>{const r=t.get("afterPatch");"function"==typeof r&&r(e.state[n],e.state,e,n)}))),delete e.nextHooks})(e))},d=(e,t,n,r,o,s={})=>{!n(o)||void 0!==(null==s?void 0:s.allowNull)&&!1!==(null==s?void 0:s.allowNull)&&null!==o?void 0!==(null==s?void 0:s.defaultValue)||void 0===(null==s?void 0:s.required)||!1===(null==s?void 0:s.required)?c(e,t,null==s?void 0:s.defaultValue,null==s?void 0:s.hooks):(!0===s.allowNull&&r.add(null),!0!==s.required&&r.add(void 0),((e,t,n,r)=>{h.debug(`[${e.constructor.name}] Der Property-Wert (${n}) für '${t}' ist nicht valide. Folgende Werte sind erlaubt: ${Array.from(r).join(", ")}`)})(e,t,o,r)):c(e,t,o,null==s?void 0:s.hooks)},u=(e,t,n,r)=>{d(e,t,(e=>"string"==typeof e&&e.length>=("number"==typeof(null==r?void 0:r.minLength)?null==r?void 0:r.minLength:1)),new Set(["String (nicht leer)"]),n,r)},f=(e,t,n,r)=>{d(e,t,(e=>"number"==typeof e&&(void 0===(null==r?void 0:r.min)||"number"==typeof(null==r?void 0:r.min)&&e>=r.min)&&(void 0===(null==r?void 0:r.max)||"number"==typeof(null==r?void 0:r.max)&&e<=r.max)),new Set(["Number"]),n,r)}}}]);