/*! For license information please see 9646.9477e9bf.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_storybook=self.webpackChunk_public_ui_storybook||[]).push([[9646],{"./node_modules/@public-ui/components/dist/esm/button-link-ef5135dc.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>watchTooltipAlignment});var _prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/prop.validators-0a1ccf64.js");const watchTooltipAlignment=(t,o,a)=>{(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_0__.a)(t,o,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["TooltipAlignment {top, right, buttom, left}"]),a,{defaultValue:"top"})}},"./node_modules/@public-ui/components/dist/esm/controller-2d55595b.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>propergateResetEventToForm,p:()=>propergateSubmitEventToForm});var _prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/prop.validators-0a1ccf64.js");const propergateResetEventToForm=(e={})=>{for(;e.form instanceof HTMLElement&&"FORM"!==e.form.tagName&&"KOL-FORM"!==e.form.tagName;)e.form.parentElement instanceof HTMLElement?e.form=e.form.parentElement:e.form.parentNode instanceof ShadowRoot?e.form=e.form.parentNode.host:e.form=null;if(e.form instanceof HTMLElement){const o=new Event("reset",{bubbles:!0,cancelable:!0});if((0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_0__.d)(o,e.ref),"FORM"===e.form.tagName)e.form.dispatchEvent(o);else if("KOL-FORM"===e.form.tagName){const t=e.form;"object"==typeof t._on&&null!==typeof t._on&&"function"==typeof t._on.onReset&&t._on.onReset(o)}}},propergateSubmitEventToForm=(e={})=>{for(;e.form instanceof HTMLElement&&"FORM"!==e.form.tagName&&"KOL-FORM"!==e.form.tagName;)e.form.parentElement instanceof HTMLElement?e.form=e.form.parentElement:e.form.parentNode instanceof ShadowRoot?e.form=e.form.parentNode.host:e.form=null;if(e.form instanceof HTMLElement){const o=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:e.ref});if((0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_0__.d)(o,e.ref),"FORM"===e.form.tagName)e.form.dispatchEvent(o);else if("KOL-FORM"===e.form.tagName){const t=e.form;"object"==typeof t._on&&null!==typeof t._on&&"function"==typeof t._on.onSubmit&&t._on.onSubmit(o)}}}},"./node_modules/@public-ui/components/dist/esm/controller-a7535a35.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>watchButtonVariant,w:()=>watchButtonType});var _prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/prop.validators-0a1ccf64.js");const watchButtonType=(t,a,o)=>{(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_0__.a)(t,a,(t=>"button"===t||"reset"===t||"submit"===t),new Set(["KoliBriButtonType {button, reset, submit}"]),o)},watchButtonVariant=(t,a,o)=>{(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_0__.a)(t,a,(t=>"primary"===t||"secondary"===t||"normal"===t||"danger"===t||"ghost"===t||"custom"===t),new Set(["KoliBriButtonVariant {primary, secondary, normal, danger, ghost, custom}"]),o,{defaultValue:"normal"})}},"./node_modules/@public-ui/components/dist/esm/icon-0bfea48a.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>isIcon,v:()=>validateIcon,w:()=>watchIconAlign});var _a11y_tipps_bb9add07_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/a11y.tipps-bb9add07.js"),_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/prop.validators-0a1ccf64.js"),_validator_05e130c7_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/validator-05e130c7.js");const mapCustomIcon=(t,o,i)=>{(0,_validator_05e130c7_js__WEBPACK_IMPORTED_MODULE_0__.b)(i)?t[o]=i:(0,_validator_05e130c7_js__WEBPACK_IMPORTED_MODULE_0__.i)(i,1)&&(t[o]={icon:i})},beforePatchIcon=t=>{var o,i,e,n,a,c,s;if(null===(o=t.nextState)||void 0===o?void 0:o.has("_icon")){const o=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),a=(null===(e=t.nextState)||void 0===e?void 0:e.get("_iconAlign"))||t.state._iconAlign;null===(n=t.nextState)||void 0===n||n.set("_icon",((t,o)=>{let i={};return(0,_validator_05e130c7_js__WEBPACK_IMPORTED_MODULE_0__.i)(t,1)?i="right"===o?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(mapCustomIcon(i,"top",t.top),mapCustomIcon(i,"right",t.right),mapCustomIcon(i,"bottom",t.bottom),mapCustomIcon(i,"left",t.left)),i})(o,a))}else if(null===(a=t.nextState)||void 0===a?void 0:a.has("_iconAlign")){const o=t.state._iconAlign;null===(c=t.nextState)||void 0===c||c.set("_icon",{[o]:void 0,[null===(s=t.nextState)||void 0===s?void 0:s.get("_iconAlign")]:t.state._icon[o]})}},isIcon=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,_validator_05e130c7_js__WEBPACK_IMPORTED_MODULE_0__.a)(t.style))&&(0,_validator_05e130c7_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.icon,1),validateIcon=(t,o)=>{(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_1__.o)(o,(()=>{try{o=(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_1__.p)(o)}catch(t){}(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_1__.a)(t,"_icon",(t=>null===t||(0,_validator_05e130c7_js__WEBPACK_IMPORTED_MODULE_0__.i)(t,1)||"object"==typeof t&&null!==t&&((0,_validator_05e130c7_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.left,1)||isIcon(t.left)||(0,_validator_05e130c7_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.right,1)||isIcon(t.right)||(0,_validator_05e130c7_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.top,1)||isIcon(t.top)||(0,_validator_05e130c7_js__WEBPACK_IMPORTED_MODULE_0__.i)(t.bottom,1)||isIcon(t.bottom))),new Set(["KoliBriIcon"]),o,{hooks:{beforePatch:(o,i)=>{null===o&&i.set("_icon",{}),beforePatchIcon(t)}},required:!0})}))},watchIconAlign=(t,o)=>{(0,_a11y_tipps_bb9add07_js__WEBPACK_IMPORTED_MODULE_2__.c)("Das Property _icon-align bzw. _iconAlign ist veraltet. Die Ausrichtung der Icon's kann jetzt direkt über das _icon-Property vorgenommen werden. (v1.1.10: https://public-ui.github.io/?path=/story/backlog-und-changelog--page)"),(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_1__.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),o,{hooks:{beforePatch:()=>{beforePatchIcon(t)}}})}},"./node_modules/@public-ui/components/dist/esm/kol-button-wc_3.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{kol_button_wc:()=>KolButtonWc,kol_heading_wc:()=>KolHeadingWc,kol_input:()=>KolInput});var _index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/index-d338436e.js"),_button_link_ef5135dc_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/button-link-ef5135dc.js"),_a11y_tipps_bb9add07_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/a11y.tipps-bb9add07.js"),_dev_utils_bbaf8793_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/dev.utils-bbaf8793.js"),_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/prop.validators-0a1ccf64.js"),_icon_0bfea48a_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/icon-0bfea48a.js"),_label_919a73c8_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/label-919a73c8.js"),_tab_index_c61711b2_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/tab-index-c61711b2.js"),_controller_2d55595b_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/controller-2d55595b.js"),_controller_a7535a35_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/controller-a7535a35.js"),_validation_6e5422b5_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/validation-6e5422b5.js");const KolButtonWc=class{constructor(t){(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this.nonce=(0,_dev_utils_bbaf8793_js__WEBPACK_IMPORTED_MODULE_1__.n)(),this.catchHost=t=>{this.host=t},this.catchRef=t=>{this.forwardedRef=t,this.ref=t},this.onClick=t=>{var i,a;"submit"===this.state._type?(0,_controller_2d55595b_js__WEBPACK_IMPORTED_MODULE_2__.p)({form:this.host,ref:this.ref}):"reset"===this.state._type?(0,_controller_2d55595b_js__WEBPACK_IMPORTED_MODULE_2__.a)({form:this.host,ref:this.ref}):"function"==typeof(null===(i=this.state._on)||void 0===i?void 0:i.onClick)?((0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_3__.d)(t,this.ref),null===(a=this.state._on)||void 0===a||a.onClick(t)):(0,_a11y_tipps_bb9add07_js__WEBPACK_IMPORTED_MODULE_4__.d)("It is no button click callback configured!")},this._accessKey=void 0,this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel="",this._customClass=void 0,this._disabled=!1,this._icon=void 0,this._iconAlign="left",this._iconOnly=!1,this._id=void 0,this._label=void 0,this._on=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._variant="normal",this.state={_ariaLabel:"",_icon:{},_iconAlign:"left",_label:"",_on:{},_type:"button"}}render(){return(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.H,{ref:this.catchHost},(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",Object.assign({ref:this.catchRef,accessKey:this.state._accessKey,"aria-controls":this.state._ariaControls,"aria-current":(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_3__.m)(this.state._ariaCurrent),"aria-expanded":(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_3__.e)(this.state._ariaExpanded),"aria-label":!1===this.state._iconOnly?this.state._ariaLabel||this.state._label:void 0,"aria-labelledby":!0===this.state._iconOnly?this.nonce:void 0,class:{[this.state._variant]:"custom"!==this.state._variant,[this.state._customClass]:"custom"===this.state._variant&&"string"==typeof this.state._customClass&&this.state._customClass.length>0,"icon-only":!0===this.state._iconOnly},disabled:this.state._disabled,id:this.state._id},this.state._on,{onClick:this.onClick,style:{width:"inherit"},tabIndex:this.state._tabIndex,type:this.state._type}),(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-span-wc",{_icon:this._icon,_iconOnly:this._iconOnly,_label:this.state._ariaLabel||this.state._label},(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"expert",slot:"expert"}))),!0===this.state._iconOnly&&(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-tooltip",{_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._ariaLabel||this.state._label}))}async getInteractiveElementRef(){return Promise.resolve(this.ref)}validateAccessKey(t){(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_3__.w)(this,"_accessKey",t)}validateAriaControls(t){(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_3__.w)(this,"_ariaControls",t)}validateAriaCurrent(t){(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_3__.a)(this,"_ariaControls",(t=>!0===t||"date"===t||"location"===t||"page"===t||"step"===t||"time"===t),new Set(["boolean","String {data, location, page, step, time}"]),t)}validateAriaExpanded(t){(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_3__.b)(this,"_ariaExpanded",t)}validateAriaLabel(t){(0,_label_919a73c8_js__WEBPACK_IMPORTED_MODULE_5__.v)(this,t)}validateCustomClass(t){(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_3__.w)(this,"_customClass",t,{defaultValue:void 0})}validateDisabled(t){(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_3__.b)(this,"_disabled",t),!0===t&&(0,_a11y_tipps_bb9add07_js__WEBPACK_IMPORTED_MODULE_4__.b)()}validateIcon(t){(0,_icon_0bfea48a_js__WEBPACK_IMPORTED_MODULE_6__.v)(this,t)}validateIconAlign(t){(0,_icon_0bfea48a_js__WEBPACK_IMPORTED_MODULE_6__.w)(this,t)}validateIconOnly(t){(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_3__.b)(this,"_iconOnly",t,{defaultValue:!1})}validateId(t){(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_3__.w)(this,"_id",t)}validateLabel(t){(0,_label_919a73c8_js__WEBPACK_IMPORTED_MODULE_5__.a)(this,t)}validateOn(t){"object"==typeof t&&null!==t&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validateTabIndex(t){(0,_tab_index_c61711b2_js__WEBPACK_IMPORTED_MODULE_7__.v)(this,t)}validateTooltipAlign(t){(0,_button_link_ef5135dc_js__WEBPACK_IMPORTED_MODULE_8__.w)(this,"_tooltipAlign",t)}validateType(t){(0,_controller_a7535a35_js__WEBPACK_IMPORTED_MODULE_9__.w)(this,"_type",t)}validateVariant(t){(0,_controller_a7535a35_js__WEBPACK_IMPORTED_MODULE_9__.a)(this,"_variant",t)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaLabel(this._ariaLabel),this.validateCustomClass(this._customClass),this.validateDisabled(this._disabled),this.validateIcon(this._icon),this.validateIconOnly(this._iconOnly),this.validateId(this._id),this.validateLabel(this._label),this.validateOn(this._on),this.validateTabIndex(this._tabIndex),this.validateTooltipAlign(this._tooltipAlign),this.validateType(this._type),this.validateVariant(this._variant),0===Date.now()&&console.log(this.forwardedRef,this.ref)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_customClass:["validateCustomClass"],_disabled:["validateDisabled"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_id:["validateId"],_label:["validateLabel"],_on:["validateOn"],_tabIndex:["validateTabIndex"],_tooltipAlign:["validateTooltipAlign"],_type:["validateType"],_variant:["validateVariant"]}}},KolHeadingWc=class{constructor(t){(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this._level=1,this.state={}}validateLevel(t){(0,_validation_6e5422b5_js__WEBPACK_IMPORTED_MODULE_10__.w)(this,t)}componentWillLoad(){this.validateLevel(this._level)}render(){switch(this.state._level){case 2:return(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("h2",null,(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null));case 3:return(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("h3",null,(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null));case 4:return(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("h4",null,(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null));case 5:return(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("h5",null,(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null));case 6:return(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("h6",null,(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null));default:return(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("h1",null,(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}}static get watchers(){return{_level:["validateLevel"]}}},KolInput=class{constructor(t){(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,t),this._alert=!0,this._disabled=!1,this._error="",this._hideLabel=!1,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._readOnly=!1,this._renderNoLabel=!1,this._required=!1,this._smartButton=void 0,this._touched=!1}render(){var t,i,a,e;const s="string"==typeof this._error&&this._error.length>0&&!0===this._touched,l="string"==typeof this._hint&&this._hint.length>0,o=!0===this._hideLabel&&!0!==this._required;return(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:{disabled:!0===this._disabled,error:!0===s,"read-only":!0===this._readOnly,required:!0===this._required,touched:!0===this._touched}},!1===this._renderNoLabel&&(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:this._id,id:`${this._id}-label`,style:{height:o?"0":void 0,margin:o?"0":void 0,padding:o?"0":void 0,visibility:o?"hidden":void 0}},(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",null,(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"label"}))),l&&(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"hint",id:`${this._id}-hint`},this._hint),(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:{input:!0,"icon-left":"object"==typeof(null===(t=this._icon)||void 0===t?void 0:t.left),"icon-right":"object"==typeof(null===(i=this._icon)||void 0===i?void 0:i.right)}},(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"icons"},(null===(a=this._icon)||void 0===a?void 0:a.left)?(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-icon",{_ariaLabel:"",_icon:this._icon.left.icon}):(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("i",null),(null===(e=this._icon)||void 0===e?void 0:e.right)?(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-icon",{_ariaLabel:"",_icon:this._icon.right.icon}):(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("i",null)),(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{name:"input"}),"object"==typeof this._smartButton&&null!==this._smartButton&&(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-button-wc",{_ariaLabel:this._smartButton._ariaLabel,_customClass:this._smartButton._customClass,_disabled:this._smartButton._disabled,_icon:this._smartButton._icon,_iconOnly:!0,_id:this._smartButton._id,_label:this._smartButton._label,_on:this._smartButton._on,_tooltipAlign:this._smartButton._tooltipAlign,_variant:this._smartButton._variant})),s&&(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("kol-alert",{class:"error",id:`${this._id}-error`,_alert:this._alert,_type:"error",_variant:"msg"},this._error),Array.isArray(this._list)&&this._list.length>0&&(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("datalist",{id:`${this._id}-list`},this._list.map((t=>(0,_index_d338436e_js__WEBPACK_IMPORTED_MODULE_0__.h)("option",{value:t})))))}}},"./node_modules/@public-ui/components/dist/esm/label-919a73c8.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>validateLabel,v:()=>validateAriaLabel});var _a11y_tipps_bb9add07_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/a11y.tipps-bb9add07.js"),_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/prop.validators-0a1ccf64.js");const syncAriaLabelBeforePatch=(a,e,r,t)=>{const i=e.has("_ariaLabel")?e.get("_ariaLabel"):r.state._ariaLabel;if("string"==typeof i&&i.length>0){const a=e.has("_label")?e.get("_label"):r.state._label;!1===new RegExp(`^${a}`).test(i)&&("_ariaLabel"===t?(e.set("_label",i),r._label=i):(e.set("_ariaLabel",a),r._ariaLabel=a),(0,_a11y_tipps_bb9add07_js__WEBPACK_IMPORTED_MODULE_0__.e)("Das abweichende Aria-Label am Schalter ist nicht barrierefrei. Ein abweichendes Aria-Label muss aus Barrierefreiheitsgründen für die Sprachsteuerung mit dem Label-Text beginnen."))}},validateAriaLabel=(a,e)=>{(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_1__.w)(a,"_ariaLabel",e,{hooks:{beforePatch:syncAriaLabelBeforePatch}})},validateLabel=(a,e)=>{(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_1__.w)(a,"_label",e,{hooks:{beforePatch:syncAriaLabelBeforePatch},required:!0})}},"./node_modules/@public-ui/components/dist/esm/tab-index-c61711b2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>validateTabIndex});var _a11y_tipps_bb9add07_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/a11y.tipps-bb9add07.js"),_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/prop.validators-0a1ccf64.js");const options={hooks:{afterPatch:a=>{-1!==a&&0!==a&&(0,_a11y_tipps_bb9add07_js__WEBPACK_IMPORTED_MODULE_0__.e)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},validateTabIndex=(a,t)=>{(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_1__.f)(a,"_tabIndex",t,options)}},"./node_modules/@public-ui/components/dist/esm/validation-6e5422b5.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>watchHeadingLevel});var _prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@public-ui/components/dist/esm/prop.validators-0a1ccf64.js");const watchHeadingLevel=(a,e)=>{(0,_prop_validators_0a1ccf64_js__WEBPACK_IMPORTED_MODULE_0__.a)(a,"_level",(a=>"number"==typeof a&&1<=a&&a<=6),new Set(["Number {1, 2, 3, 4, 5, 6}"]),e,{defaultValue:1,required:!0})}},"./node_modules/@public-ui/components/dist/esm/validator-05e130c7.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>STATE_CHANGE_EVENT,a:()=>isStyle,b:()=>isObject,i:()=>isString});const isObject=t=>"object"==typeof t&&null!==t,isString=(t,e=0)=>"string"==typeof t&&t.length>=e,isStyle=t=>{if("object"!=typeof t||null===t)return isString(t,1);for(const e in t)if(!1===isString(e,1))return!1;return!0},STATE_CHANGE_EVENT=new Event("StateChange")}}]);