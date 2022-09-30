/*! For license information please see 28.e4489349.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"./node_modules/@public-ui/components/dist/esm/kol-alert.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"kol_alert",(function(){return KolAlert}));var _index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/index-56929ada.js"),_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/dev.utils-4f23c289.js"),_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/prop.validators-6dd43868.js"),_validation_a4a68e52_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/validation-a4a68e52.js"),_a11y_tipps_1f6fb00f_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/a11y.tipps-1f6fb00f.js");const Icon=t=>Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("kol-icon",{class:"icon",_ariaLabel:"string"==typeof t.heading&&t.heading.length>0?"":t.ariaLabel,_icon:t.icon}),AlertIcon=t=>{switch(t.type){case"error":return Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)(Icon,{ariaLabel:"Fehler",icon:"icofont-error",heading:t.heading});case"info":return Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)(Icon,{ariaLabel:"Hinweis",icon:"icofont-info-circle",heading:t.heading});case"warning":return Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)(Icon,{ariaLabel:"Warnung",icon:"icofont-warning",heading:t.heading});case"success":return Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)(Icon,{ariaLabel:"Erfolg",icon:"icofont-check-circled",heading:t.heading});default:return Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)(Icon,{ariaLabel:"Nachricht",icon:"icofont-comment",heading:t.heading})}},KolAlert=class{constructor(t){Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.f)(this,t),this.close=()=>{var t;void 0!==(null===(t=this._on)||void 0===t?void 0:t.onClose)&&this._on.onClose(new Event("Close"))},this.on={onClick:this.close},this._alert=!1,this._hasCloser=!1,this._level=1,this._type="default",this._variant="msg",this.state={}}render(){if(this.state._alert){try{_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_1__.c.debug(["Navigator should vibrate ...",navigator.vibrate([100,75,100,75,100])])}catch(t){_dev_utils_4f23c289_js__WEBPACK_IMPORTED_MODULE_1__.c.debug("Navigator does not support vibration.")}setTimeout((()=>{this.validateAlert(!1)}),1e4)}return Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.b,null,Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("div",{class:{[this.state._type]:!0,[this.state._variant]:!0},role:this.state._alert?"alert":void 0},"msg"===this.state._variant&&Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)(AlertIcon,{heading:this.state._heading,type:this.state._type}),Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("div",null,("string"==typeof this.state._heading&&this.state._heading.length>0||"card"===this.state._variant)&&Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("kol-heading-wc",{class:"heading",_level:this.state._level},"card"===this.state._variant&&Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)(AlertIcon,{heading:this.state._heading,type:this.state._type}),this.state._heading),Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("div",{class:"content"},Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("slot",null)),this.state._hasCloser&&Object(_index_56929ada_js__WEBPACK_IMPORTED_MODULE_0__.d)("kol-button-wc",{class:"close",_icon:{left:{icon:"icofont-close"}},_iconOnly:!0,_label:"Schließen",_on:this.on}))))}validateAlert(t){Object(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_2__.c)(this,"_alert",t)}validateHasCloser(t){Object(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_2__.c)(this,"_hasCloser",t)}validateHeading(t){Object(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_2__.u)(this,"_heading",t)}validateLevel(t){Object(_validation_a4a68e52_js__WEBPACK_IMPORTED_MODULE_3__.a)(this,t)}validateOn(t){if("object"==typeof t&&null!==t){Object(_a11y_tipps_1f6fb00f_js__WEBPACK_IMPORTED_MODULE_4__.f)("[KolAlert] Prüfen, wie man auch einen EventCallback einzeln ändern kann.");const e={};"function"!=typeof t.onClose&&!0!==t.onClose||(e.onClose=t.onClose),Object(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_2__.t)(this,"_on",e)}}validateType(t){Object(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_2__.b)(this,"_type",(t=>"string"==typeof t&&("default"===t||"error"===t||"info"===t||"success"===t||"warning"===t)),new Set("String {success, info, warning, error}"),t)}validateVariant(t){Object(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_2__.b)(this,"_variant",(t=>"card"===t||"msg"===t),new Set("AlertVariant {card, msg}"),t)}componentWillLoad(){this.validateAlert(this._alert),this.validateHasCloser(this._hasCloser),this.validateHeading(this._heading),this.validateLevel(this._level),this.validateOn(this._on),this.validateType(this._type),this.validateVariant(this._variant)}static get watchers(){return{_alert:["validateAlert"],_hasCloser:["validateHasCloser"],_heading:["validateHeading"],_level:["validateLevel"],_on:["validateOn"],_type:["validateType"],_variant:["validateVariant"]}}};KolAlert.style={default:'*,::before,::after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--kolibri-border-color)}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:var(--kolibri-color);--tw-ring-color:rgba(undefined, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}::moz-focus-inner{border-style:none;padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=\'search\']{-webkit-appearance:textfield;outline-offset:-2px}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}b{font-weight:bolder}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;padding:0;line-height:inherit;color:inherit}button,select{text-transform:none}button,[type=\'button\'],[type=\'reset\'],[type=\'submit\']{-webkit-appearance:button}button{background-color:transparent;background-image:none}button,[role="button"]{cursor:pointer}code{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}fieldset{margin:0;padding:0}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}h1,p,h2,h3,h4,h5,h6{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}input::placeholder{opacity:1;color:#9ca3af}input::webkit-input-placeholder{opacity:1;color:#9ca3af}input::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder{opacity:1;color:#9ca3af}input::-ms-input-placeholder{opacity:1;color:#9ca3af}legend{padding:0}progress{vertical-align:baseline}small{font-size:80%}sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;top:-0.5em}svg{display:block;vertical-align:middle}table{text-indent:0;border-color:inherit;border-collapse:collapse}textarea{resize:vertical}textarea::placeholder{opacity:1;color:#9ca3af}textarea::webkit-input-placeholder{opacity:1;color:#9ca3af}textarea::-moz-placeholder{opacity:1;color:#9ca3af}textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}textarea::-ms-input-placeholder{opacity:1;color:#9ca3af}ul,ol{list-style:none;margin:0;padding:0}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.bg-normal{background-color:var(--kolibri-color-normal)}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.bg-spin-1{background-color:var(--kolibri-color-spin-1)}.bg-spin-2{background-color:var(--kolibri-color-spin-2)}.bg-spin-3{background-color:var(--kolibri-color-spin-3)}.rounded{border-radius:var(--kolibri-border-radius)}.border-1{border-width:1px}.cursor-pointer{cursor:pointer}.block{display:block}.inline-block{display:inline-block}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.inline-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex}.grid{display:-ms-grid;display:grid}.hidden{display:none}.flex-wrap{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.items-center{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.content-center{-ms-flex-line-pack:center;-webkit-align-content:center;align-content:center}.float-left{float:left}.font-80{font-weight:80}.font-60{font-weight:60}.h-full{height:100%}.h-0{height:0px}.h-0\\.41c-2\\.42\\2c 0-4\\.82-1\\.57-4\\.82-3\\.58c0\\.05-0\\.98\\2c 0\\.43-1\\.91\\2c 1\\.07-2\\.65c0\\.3\\2c 0\\.05\\2c 0\\.61\\2c 0\\.09\\2c 0\\.92\\2c 0\\.09c1\\.1\\2c 0\\2c 1\\.69-0\\.58\\2c 1\\.74-1\\.16{height:0.29rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.leading-normal{line-height:1.5}.list-none{list-style-type:none}.list-disc{list-style-type:disc}.list-decimal{list-style-type:decimal}.mx-auto{margin-left:auto;margin-right:auto}.mr-1{margin-right:calc(1 * var(--kolibri-spacing))}.ml-1{margin-left:calc(1 * var(--kolibri-spacing))}.mr-2{margin-right:calc(2 * var(--kolibri-spacing))}.ml-2{margin-left:calc(2 * var(--kolibri-spacing))}.mb-1{margin-bottom:calc(1 * var(--kolibri-spacing))}.ml-6{margin-left:calc(6 * var(--kolibri-spacing))}.mt-2{margin-top:calc(2 * var(--kolibri-spacing))}.mt-4{margin-top:calc(4 * var(--kolibri-spacing))}.overflow-hidden{overflow:hidden}.overflow-y-visible{overflow-y:visible}.p-2{padding:calc(2 * var(--kolibri-spacing))}.px{padding-left:1px;padding-right:1px}.py-2{padding-top:calc(2 * var(--kolibri-spacing));padding-bottom:calc(2 * var(--kolibri-spacing))}.pl-8{padding-left:2rem}.pb-2{padding-bottom:calc(2 * var(--kolibri-spacing))}.tab{-moz-tab-size:4;-o-tab-size:4;tab-size:4}.absolute{position:absolute}.relative{position:relative}.text-center{text-align:center}.hover\\:text-primary:hover{color:var(--kolibri-color-primary)}.text-normal{color:var(--kolibri-color-normal)}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.no-underline{text-decoration:none}.visible{visibility:visible}.w-full{width:100%}.w-4\\/5{width:80%}.z-50{z-index:50}.gap-1{grid-gap:calc(1 * var(--kolibri-spacing));gap:calc(1 * var(--kolibri-spacing))}.gap-2{grid-gap:calc(2 * var(--kolibri-spacing));gap:calc(2 * var(--kolibri-spacing))}.grid-flow-col{grid-auto-flow:column}.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z))}.animate{-webkit-animation-iteration-count:1;animation-iteration-count:1}.blur{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}:host *{-ms-hyphens:var(--kolibri-hyphens);-webkit-hyphens:var(--kolibri-hyphens);hyphens:var(--kolibri-hyphens);font-family:var(--kolibri-font-family);line-height:var(--kolibri-line-height);word-break:break-word}:host *{box-sizing:border-box}:host>div{background-color:white;border-color:white;border-width:1px;border-radius:0.5rem;border-style:solid;display:flex;width:100%;overflow:hidden}:host>div.error{border-color:var(--kolibri-color-error)}:host>div.error .icon{background-color:var(--kolibri-color-error)}:host>div.info{border-color:var(--kolibri-color-info)}:host>div.info .icon{background-color:var(--kolibri-color-info)}:host>div.success{border-color:var(--kolibri-color-success)}:host>div.success .icon{background-color:var(--kolibri-color-success)}:host>div.warning{border-color:var(--kolibri-color-warning)}:host>div.warning .icon{background-color:var(--kolibri-color-warning)}:host>div .icon{color:white;display:inline-block;padding:0 0.25rem}:host>div>div{display:grid}:host>div>div .heading{padding:0 0.25rem;display:inline-block}:host>div>div .heading .icon{margin-left:-0.25rem;margin-right:0.25rem;border-radius:0 0 0.25rem 0}:host>div>div>div:last-child{padding:0.25rem}'}},"./node_modules/@public-ui/components/dist/esm/validation-a4a68e52.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return watchHeadingLevel}));var _prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/prop.validators-6dd43868.js");const watchHeadingLevel=(e,a)=>{Object(_prop_validators_6dd43868_js__WEBPACK_IMPORTED_MODULE_0__.b)(e,"_level",(e=>"number"==typeof e&&1<=e&&e<=6),new Set(["Number {1, 2, 3, 4, 5, 6}"]),a,{defaultValue:1,required:!0})}}}]);
//# sourceMappingURL=28.e4489349.iframe.bundle.js.map