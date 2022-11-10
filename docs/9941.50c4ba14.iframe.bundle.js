/*! For license information please see 9941.50c4ba14.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[9941],{"./node_modules/@public-ui/components/dist/esm/button-link-ef5135dc.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>watchTooltipAlignment});var _prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/prop.validators-0a1ccf64.js");const watchTooltipAlignment=(t,o,a)=>{(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_0__.a)(t,o,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["TooltipAlignment {top, right, buttom, left}"]),a,{defaultValue:"top"})}},"./node_modules/@public-ui/components/dist/esm/controller-a7535a35.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>watchButtonVariant,w:()=>watchButtonType});var _prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/prop.validators-0a1ccf64.js");const watchButtonType=(t,a,o)=>{(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_0__.a)(t,a,(t=>"button"===t||"reset"===t||"submit"===t),new Set(["KoliBriButtonType {button, reset, submit}"]),o)},watchButtonVariant=(t,a,o)=>{(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_0__.a)(t,a,(t=>"primary"===t||"secondary"===t||"normal"===t||"danger"===t||"ghost"===t||"custom"===t),new Set(["KoliBriButtonVariant {primary, secondary, normal, danger, ghost, custom}"]),o,{defaultValue:"normal"})}},"./node_modules/@public-ui/components/dist/esm/icon-0bfea48a.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>isIcon,v:()=>validateIcon,w:()=>watchIconAlign});var _a11y_tipps_bb9add07_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/a11y.tipps-bb9add07.js"),_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/prop.validators-0a1ccf64.js"),_validator_05e130c7_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/validator-05e130c7.js");const mapCustomIcon=(t,o,i)=>{(0,_validator_05e130c7_js__WEBPACK_IMPORTED_MODULE_0__.b)(i)?t[o]=i:(0,_validator_05e130c7_js__WEBPACK_IMPORTED_MODULE_0__.i)(i,1)&&(t[o]={icon:i})},beforePatchIcon=t=>{var o,i,e,n,a,c,s;if(null===(o=t.nextState)||void 0===o?void 0:o.has("_icon")){const o=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),a=(null===(e=t.nextState)||void 0===e?void 0:e.get("_iconAlign"))||t.state._iconAlign;null===(n=t.nextState)||void 0===n||n.set("_icon",((t,o)=>{let i={};return(0,_validator_05e130c7_js__WEBPACK_IMPORTED_MODULE_0__.i)(t,1)?i="right"===o?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(mapCustomIcon(i,"top",t.top),mapCustomIcon(i,"right",t.right),mapCustomIcon(i,"bottom",t.bottom),mapCustomIcon(i,"left",t.left)),i})(o,a))}else if(null===(a=t.nextState)||void 0===a?void 0:a.has("_iconAlign")){const o=t.state._iconAlign;null===(c=t.nextState)||void 0===c||c.set("_icon",{[o]:void 0,[null===(s=t.nextState)||void 0===s?void 0:s.get("_iconAlign")]:t.state._icon[o]})}},isIcon=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,_validator_05e130c7_js__WEBPACK_IMPORTED_MODULE_0__.a)(t.style))&&(0,_validator_05e130c7_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.icon,1),validateIcon=(t,o)=>{(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_1__.o)(o,(()=>{try{o=(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_1__.p)(o)}catch(t){}(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_1__.a)(t,"_icon",(t=>null===t||(0,_validator_05e130c7_js__WEBPACK_IMPORTED_MODULE_0__.i)(t,1)||"object"==typeof t&&null!==t&&((0,_validator_05e130c7_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.left,1)||isIcon(t.left)||(0,_validator_05e130c7_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.right,1)||isIcon(t.right)||(0,_validator_05e130c7_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.top,1)||isIcon(t.top)||(0,_validator_05e130c7_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.bottom,1)||isIcon(t.bottom))),new Set(["KoliBriIcon"]),o,{hooks:{beforePatch:(o,i)=>{null===o&&i.set("_icon",{}),beforePatchIcon(t)}},required:!0})}))},watchIconAlign=(t,o)=>{(0,_a11y_tipps_bb9add07_js__WEBPACK_IMPORTED_MODULE_2__.c)("Das Property _icon-align bzw. _iconAlign ist veraltet. Die Ausrichtung der Icon's kann jetzt direkt über das _icon-Property vorgenommen werden. (v1.1.10: https://public-ui.github.io/?path=/story/backlog-und-changelog--page)"),(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_1__.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),o,{hooks:{beforePatch:()=>{beforePatchIcon(t)}}})}},"./node_modules/@public-ui/components/dist/esm/kol-link-button.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{kol_link_button:()=>KolLinkButton});var _index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/index-d338436e.js"),_button_link_ef5135dc_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/button-link-ef5135dc.js"),_a11y_tipps_bb9add07_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/a11y.tipps-bb9add07.js"),_dev_utils_bbaf8793_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/dev.utils-bbaf8793.js"),_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/prop.validators-0a1ccf64.js"),_icon_0bfea48a_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/icon-0bfea48a.js"),_label_919a73c8_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/label-919a73c8.js"),_tab_index_c61711b2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/tab-index-c61711b2.js"),_controller_a7535a35_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/controller-a7535a35.js");const KolLinkButton=class{constructor(t){(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.nonce=(0,_dev_utils_bbaf8793_js__WEBPACK_IMPORTED_MODULE_1__.n)(),this.getRenderValues=()=>{let t={};"string"==typeof this.state._selector&&(t={role:"link",tabIndex:0,onClick:()=>{(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_2__.g)(this.state._selector)},onKeyPress:()=>{(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_2__.g)(this.state._selector)}});const a={href:"string"==typeof this.state._href&&this.state._href.length>0?this.state._href:"javascript:void(0)",target:"string"==typeof this.state._target&&this.state._target.length>0?this.state._target:void 0,rel:"string"==typeof this.state._target&&"_self"!==this.state._target?"noopener":void 0};let e=this.state._fill;!1!==this.state._stealth&&(e=!1);let i=this.state._underline;return"image"===this.state._useCase&&(i=!1),"image"!==this.state._useCase&&!0!==this.state._iconOnly||"string"==typeof this.state._ariaLabel&&0!==this.state._ariaLabel.length||(0,_a11y_tipps_bb9add07_js__WEBPACK_IMPORTED_MODULE_3__.d)("[KolLink] Es muss ein Aria-Label gesetzt werden, wenn eine Grafik verlinkt oder der Icon-Only-Modus verwendet wird."),{tagAttrs:a,underline:i,fill:e,goToProps:t}},this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._ariaSelected=void 0,this._customClass=void 0,this._disabled=!1,this._fill=!1,this._href="",this._icon=void 0,this._iconAlign="left",this._iconOnly=!1,this._label=void 0,this._on=void 0,this._part=void 0,this._selector=void 0,this._stealth=!1,this._tabIndex=void 0,this._target=void 0,this._targetDescription="Der Link wird in einem neuen Tab geöffnet.",this._tooltipAlign="right",this._underline=!0,this._useCase="text",this._variant="normal",this.state={_ariaLabel:"",_icon:{},_iconAlign:"left",_label:""}}render(){const{tagAttrs:t,underline:a,fill:e,goToProps:i}=this.getRenderValues();return(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("a",Object.assign({},t,{"aria-controls":this.state._ariaControls,"aria-current":this.state._ariaCurrent,"aria-expanded":(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_2__.e)(this.state._ariaExpanded),"aria-labelledby":"image"===this.state._useCase||!0===this.state._iconOnly?this.nonce:void 0,"aria-selected":(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_2__.e)(this.state._ariaSelected),class:{"disabled ":!0===this.state._disabled,"kol-visited":"nav"!==this.state._useCase,"flex flex-wrap items-center":!1===this.state._iconOnly,"grid text-center":!0===this.state._iconOnly,"skip ":!1!==this.state._stealth,[this.state._variant]:"custom"!==this.state._variant,[this.state._customClass]:"custom"===this.state._variant&&"string"==typeof this.state._customClass&&this.state._customClass.length>0,"icon-only":!0===this.state._iconOnly},part:`link ${"string"==typeof this.state._part?this.state._part:""}`},this.state._on,i,{style:{cursor:"pointer",display:"image"===this.state._useCase?"block":void 0,textDecorationLine:!0===a?"underline":"none",width:!0===e?"100%":void 0},tabIndex:this.state._tabIndex}),(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-span-wc",{_icon:this._icon,_iconOnly:this._iconOnly,_label:this.state._ariaLabel||this.state._label},(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"expert",slot:"expert"}))),!0===this.state._iconOnly&&(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-tooltip",{_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._ariaLabel||this.state._label}))}validateAriaControls(t){(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_2__.w)(this,"_ariaControls",t)}validateAriaCurrent(t){(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_2__.a)(this,"_ariaCurrent",(t=>!0===t||"date"===t||"location"===t||"page"===t||"step"===t||"time"===t),new Set(["boolean","String {data, location, page, step, time}"]),t)}validateAriaExpanded(t){(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_2__.b)(this,"_ariaExpanded",t)}validateAriaLabel(t){(0,_label_919a73c8_js__WEBPACK_IMPORTED_MODULE_4__.v)(this,t)}validateAriaSelected(t){(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_2__.b)(this,"_ariaSelected",t)}validateCustomClass(t){(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_2__.w)(this,"_customClass",t,{defaultValue:void 0})}validateDisabled(t){(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_2__.b)(this,"_disabled",t),!0===t&&(0,_a11y_tipps_bb9add07_js__WEBPACK_IMPORTED_MODULE_3__.b)()}validateFill(t){(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_2__.b)(this,"_fill",t)}validateHref(t){(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_2__.w)(this,"_href",t)}validateIcon(t){(0,_icon_0bfea48a_js__WEBPACK_IMPORTED_MODULE_5__.v)(this,t)}validateIconAlign(t){(0,_icon_0bfea48a_js__WEBPACK_IMPORTED_MODULE_5__.w)(this,t)}validateIconOnly(t){(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_2__.b)(this,"_iconOnly",t)}validateLabel(t){console.log("link-button","_label",t),(0,_label_919a73c8_js__WEBPACK_IMPORTED_MODULE_4__.a)(this,t)}validateSelector(t){(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_2__.w)(this,"_selector",t)}validateStealth(t){(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_2__.b)(this,"_stealth",t)}validateTabIndex(t){(0,_tab_index_c61711b2_js__WEBPACK_IMPORTED_MODULE_6__.v)(this,t)}validateTarget(t){(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_2__.w)(this,"_target",t)}validateTargetDescription(t){(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_2__.w)(this,"_targetDescription",t)}validateUnderline(t){(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_2__.b)(this,"_underline",t)}validateUseCase(t){"string"==typeof t&&(this.state=Object.assign(Object.assign({},this.state),{_useCase:t}))}validatePart(t){(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_2__.w)(this,"_part",t,{defaultValue:""})}validateTooltipAlign(t){(0,_button_link_ef5135dc_js__WEBPACK_IMPORTED_MODULE_7__.w)(this,"_tooltipAlign",t)}validateOn(t){"object"==typeof t&&null!==t&&Object.prototype.hasOwnProperty.call(t,"onClick")&&"function"==typeof t.onClick&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validateVariant(t){(0,_controller_a7535a35_js__WEBPACK_IMPORTED_MODULE_8__.a)(this,"_variant",t)}componentWillLoad(){this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaLabel(this._ariaLabel),this.validateAriaSelected(this._ariaSelected),this.validateCustomClass(this._customClass),this.validateDisabled(this._disabled),this.validateFill(this._fill),this.validateHref(this._href),this.validateIcon(this._icon),this.validateIconOnly(this._iconOnly),this.validateLabel(this._label),this.validateOn(this._on),this.validatePart(this._part),this.validateSelector(this._selector),this.validateStealth(this._stealth),this.validateTabIndex(this._tabIndex),this.validateTarget(this._target),this.validateTargetDescription(this._targetDescription),this.validateTooltipAlign(this._tooltipAlign),this.validateUnderline(this._underline),this.validateUseCase(this._useCase),this.validateVariant(this._variant)}static get watchers(){return{_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_ariaSelected:["validateAriaSelected"],_customClass:["validateCustomClass"],_disabled:["validateDisabled"],_fill:["validateFill"],_href:["validateHref"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_label:["validateLabel"],_selector:["validateSelector"],_stealth:["validateStealth"],_tabIndex:["validateTabIndex"],_target:["validateTarget"],_targetDescription:["validateTargetDescription"],_underline:["validateUnderline"],_useCase:["validateUseCase"],_part:["validatePart"],_tooltipAlign:["validateTooltipAlign"],_on:["validateOn"],_variant:["validateVariant"]}}};KolLinkButton.style={default:'*,::before,::after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--kolibri-border-color)}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:var(--kolibri-color);--tw-ring-color:rgba(undefined, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}::moz-focus-inner{border-style:none;padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=\'search\']{-webkit-appearance:textfield;outline-offset:-2px}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}b{font-weight:bolder}button,select{text-transform:none}button,[type=\'button\'],[type=\'reset\'],[type=\'submit\']{-webkit-appearance:button}button{background-color:transparent;background-image:none}button,[role="button"]{cursor:pointer}code{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}fieldset{margin:0;padding:0}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}h1,p,h2,h3,h4,h5,h6{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}input,button,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;padding:0;line-height:inherit;color:inherit}input::placeholder{opacity:1;color:#9ca3af}input::webkit-input-placeholder{opacity:1;color:#9ca3af}input::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder{opacity:1;color:#9ca3af}input::-ms-input-placeholder{opacity:1;color:#9ca3af}legend{padding:0}progress{vertical-align:baseline}small{font-size:80%}sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;top:-0.5em}svg{display:block;vertical-align:middle}table{text-indent:0;border-color:inherit;border-collapse:collapse}textarea{resize:vertical}textarea::placeholder{opacity:1;color:#9ca3af}textarea::webkit-input-placeholder{opacity:1;color:#9ca3af}textarea::-moz-placeholder{opacity:1;color:#9ca3af}textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}textarea::-ms-input-placeholder{opacity:1;color:#9ca3af}ul,ol{list-style:none;margin:0;padding:0}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.bg-normal{background-color:var(--kolibri-color-normal)}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.bg-spin-1{background-color:var(--kolibri-color-spin-1)}.bg-spin-2{background-color:var(--kolibri-color-spin-2)}.bg-spin-3{background-color:var(--kolibri-color-spin-3)}.rounded{border-radius:var(--kolibri-border-radius)}.border-1{border-width:1px}.cursor-pointer{cursor:pointer}.block{display:block}.inline-block{display:inline-block}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.inline-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex}.table{display:table}.grid{display:-ms-grid;display:grid}.hidden{display:none}.flex-wrap{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.items-center{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.content-center{-ms-flex-line-pack:center;-webkit-align-content:center;align-content:center}.float-left{float:left}.font-80{font-weight:80}.font-60{font-weight:60}.h-full{height:100%}.h-0{height:0px}.h-0\\.41c-2\\.42\\2c 0-4\\.82-1\\.57-4\\.82-3\\.58c0\\.05-0\\.98\\2c 0\\.43-1\\.91\\2c 1\\.07-2\\.65c0\\.3\\2c 0\\.05\\2c 0\\.61\\2c 0\\.09\\2c 0\\.92\\2c 0\\.09c1\\.1\\2c 0\\2c 1\\.69-0\\.58\\2c 1\\.74-1\\.16{height:0.29rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.leading-normal{line-height:1.5}.list-none{list-style-type:none}.list-disc{list-style-type:disc}.list-decimal{list-style-type:decimal}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:calc(1 * var(--kolibri-spacing))}.mr-2{margin-right:calc(2 * var(--kolibri-spacing))}.ml-2{margin-left:calc(2 * var(--kolibri-spacing))}.ml-1{margin-left:calc(1 * var(--kolibri-spacing))}.mt-2{margin-top:calc(2 * var(--kolibri-spacing))}.mt-4{margin-top:calc(4 * var(--kolibri-spacing))}.outline{outline-style:solid}.overflow-hidden{overflow:hidden}.overflow-y-visible{overflow-y:visible}.p-2{padding:calc(2 * var(--kolibri-spacing))}.p-4{padding:calc(4 * var(--kolibri-spacing))}.px{padding-left:1px;padding-right:1px}.py-2{padding-top:calc(2 * var(--kolibri-spacing));padding-bottom:calc(2 * var(--kolibri-spacing))}.pl-8{padding-left:2rem}.pb-2{padding-bottom:calc(2 * var(--kolibri-spacing))}.tab{-moz-tab-size:4;-o-tab-size:4;tab-size:4}.absolute{position:absolute}.relative{position:relative}.text-center{text-align:center}.text-normal{color:var(--kolibri-color-normal)}.hover\\:text-primary:hover{color:var(--kolibri-color-primary)}.italic{font-style:italic}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.no-underline{text-decoration:none}.indent{text-indent:1.5rem}.visible{visibility:visible}.w-full{width:100%}.w-4\\/5{width:80%}.z-50{z-index:50}.gap-1{grid-gap:calc(1 * var(--kolibri-spacing));gap:calc(1 * var(--kolibri-spacing))}.gap-2{grid-gap:calc(2 * var(--kolibri-spacing));gap:calc(2 * var(--kolibri-spacing))}.grid-flow-col{grid-auto-flow:column}.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z))}.animate{-webkit-animation-iteration-count:1;animation-iteration-count:1}.filter{--tw-blur:var(--tw-empty, );--tw-brightness:var(--tw-empty, );--tw-contrast:var(--tw-empty, );--tw-grayscale:var(--tw-empty, );--tw-hue-rotate:var(--tw-empty, );--tw-invert:var(--tw-empty, );--tw-saturate:var(--tw-empty, );--tw-sepia:var(--tw-empty, );--tw-drop-shadow:var(--tw-empty, );-webkit-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}:host *{-ms-hyphens:var(--kolibri-hyphens);-webkit-hyphens:var(--kolibri-hyphens);hyphens:var(--kolibri-hyphens);font-family:var(--kolibri-font-family);line-height:var(--kolibri-line-height);word-break:break-word}'}},"./node_modules/@public-ui/components/dist/esm/label-919a73c8.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>validateLabel,v:()=>validateAriaLabel});var _a11y_tipps_bb9add07_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/a11y.tipps-bb9add07.js"),_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/prop.validators-0a1ccf64.js");const syncAriaLabelBeforePatch=(a,e,r,t)=>{const i=e.has("_ariaLabel")?e.get("_ariaLabel"):r.state._ariaLabel;if("string"==typeof i&&i.length>0){const a=e.has("_label")?e.get("_label"):r.state._label;!1===new RegExp(`^${a}`).test(i)&&("_ariaLabel"===t?(e.set("_label",i),r._label=i):(e.set("_ariaLabel",a),r._ariaLabel=a),(0,_a11y_tipps_bb9add07_js__WEBPACK_IMPORTED_MODULE_0__.e)("Das abweichende Aria-Label am Schalter ist nicht barrierefrei. Ein abweichendes Aria-Label muss aus Barrierefreiheitsgründen für die Sprachsteuerung mit dem Label-Text beginnen."))}},validateAriaLabel=(a,e)=>{(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_1__.w)(a,"_ariaLabel",e,{hooks:{beforePatch:syncAriaLabelBeforePatch}})},validateLabel=(a,e)=>{(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_1__.w)(a,"_label",e,{hooks:{beforePatch:syncAriaLabelBeforePatch},required:!0})}},"./node_modules/@public-ui/components/dist/esm/tab-index-c61711b2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>validateTabIndex});var _a11y_tipps_bb9add07_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/a11y.tipps-bb9add07.js"),_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/prop.validators-0a1ccf64.js");const options={hooks:{afterPatch:a=>{-1!==a&&0!==a&&(0,_a11y_tipps_bb9add07_js__WEBPACK_IMPORTED_MODULE_0__.e)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},validateTabIndex=(a,t)=>{(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_1__.f)(a,"_tabIndex",t,options)}},"./node_modules/@public-ui/components/dist/esm/validator-05e130c7.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>STATE_CHANGE_EVENT,a:()=>isStyle,b:()=>isObject,i:()=>isString});const isObject=t=>"object"==typeof t&&null!==t,isString=(t,e=0)=>"string"==typeof t&&t.length>=e,isStyle=t=>{if("object"!=typeof t||null===t)return isString(t,1);for(const e in t)if(!1===isString(e,1))return!1;return!0},STATE_CHANGE_EVENT=new Event("StateChange")}}]);