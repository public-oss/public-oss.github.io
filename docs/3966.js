/*! For license information please see 3966.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_oss_th_ik_ja_belegerfassung=self.webpackChunk_public_oss_th_ik_ja_belegerfassung||[]).push([[3966],{1312:(t,e,a)=>{a.d(e,{w:()=>o});var i=a(81);const o=(t,e,a)=>{(0,i.a)(t,e,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["TooltipAlignment {top, right, buttom, left}"]),a,{defaultValue:"top"})}},934:(t,e,a)=>{a.d(e,{a:()=>o,p:()=>r});var i=a(81);const o=(t={})=>{for(;t.form instanceof HTMLElement&&"FORM"!==t.form.tagName&&"KOL-FORM"!==t.form.tagName;)t.form.parentElement instanceof HTMLElement?t.form=t.form.parentElement:t.form.parentNode instanceof ShadowRoot?t.form=t.form.parentNode.host:t.form=null;if(t.form instanceof HTMLElement){const e=new Event("reset",{bubbles:!0,cancelable:!0});if((0,i.d)(e,t.ref),"FORM"===t.form.tagName)t.form.dispatchEvent(e);else if("KOL-FORM"===t.form.tagName){const a=t.form;"object"==typeof a._on&&null!==typeof a._on&&"function"==typeof a._on.onReset&&a._on.onReset(e)}}},r=(t={})=>{for(;t.form instanceof HTMLElement&&"FORM"!==t.form.tagName&&"KOL-FORM"!==t.form.tagName;)t.form.parentElement instanceof HTMLElement?t.form=t.form.parentElement:t.form.parentNode instanceof ShadowRoot?t.form=t.form.parentNode.host:t.form=null;if(t.form instanceof HTMLElement){const e=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:t.ref});if((0,i.d)(e,t.ref),"FORM"===t.form.tagName)t.form.dispatchEvent(e);else if("KOL-FORM"===t.form.tagName){const a=t.form;"object"==typeof a._on&&null!==typeof a._on&&"function"==typeof a._on.onSubmit&&a._on.onSubmit(e)}}}},4171:(t,e,a)=>{a.d(e,{a:()=>r,w:()=>o});var i=a(81);const o=(t,e,a)=>{(0,i.a)(t,e,(t=>"button"===t||"reset"===t||"submit"===t),new Set(["KoliBriButtonType {button, reset, submit}"]),a)},r=(t,e,a)=>{(0,i.a)(t,e,(t=>"primary"===t||"secondary"===t||"normal"===t||"danger"===t||"ghost"===t||"custom"===t),new Set(["KoliBriButtonVariant {primary, secondary, normal, danger, ghost, custom}"]),a,{defaultValue:"normal"})}},6515:(t,e,a)=>{a.d(e,{i:()=>s,v:()=>c,w:()=>d});var i=a(1707),o=a(81),r=a(4957);const n=(t,e,a)=>{(0,r.b)(a)?t[e]=a:(0,r.i)(a,1)&&(t[e]={icon:a})},l=t=>{var e,a,i,o,l,s,c;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icon")){const e=null===(a=t.nextState)||void 0===a?void 0:a.get("_icon"),l=(null===(i=t.nextState)||void 0===i?void 0:i.get("_iconAlign"))||t.state._iconAlign;null===(o=t.nextState)||void 0===o||o.set("_icon",((t,e)=>{let a={};return(0,r.i)(t,1)?a="right"===e?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(n(a,"top",t.top),n(a,"right",t.right),n(a,"bottom",t.bottom),n(a,"left",t.left)),a})(e,l))}else if(null===(l=t.nextState)||void 0===l?void 0:l.has("_iconAlign")){const e=t.state._iconAlign;null===(s=t.nextState)||void 0===s||s.set("_icon",{[e]:void 0,[null===(c=t.nextState)||void 0===c?void 0:c.get("_iconAlign")]:t.state._icon[e]})}},s=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,r.a)(t.style))&&(0,r.i)(t.icon,1),c=(t,e)=>{(0,o.o)(e,(()=>{try{e=(0,o.p)(e)}catch(t){}(0,o.a)(t,"_icon",(t=>null===t||(0,r.i)(t,1)||"object"==typeof t&&null!==t&&((0,r.i)(t.left,1)||s(t.left)||(0,r.i)(t.right,1)||s(t.right)||(0,r.i)(t.top,1)||s(t.top)||(0,r.i)(t.bottom,1)||s(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,a)=>{null===e&&a.set("_icon",{}),l(t)}},required:!0})}))},d=(t,e)=>{(0,i.c)("Das Property _icon-align bzw. _iconAlign ist veraltet. Die Ausrichtung der Icon's kann jetzt direkt über das _icon-Property vorgenommen werden. (v1.1.10: https://public-ui.github.io/?path=/story/backlog-und-changelog--page)"),(0,o.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{l(t)}}})}},3966:(t,e,a)=>{a.r(e),a.d(e,{kol_button_link:()=>p});var i=a(2974),o=a(1312),r=a(1707),n=a(1344),l=a(81),s=a(6515),c=a(2263),d=a(8927),h=a(4171),b=a(934);const p=class{constructor(t){(0,i.r)(this,t),this.nonce=(0,n.n)(),this.catchHost=t=>{this.host=t},this.catchRef=t=>{this.forwardedRef=t,this.ref=t},this.onClick=t=>{var e,a;"submit"===this.state._type?(0,b.p)({form:this.host,ref:this.ref}):"reset"===this.state._type?(0,b.a)({form:this.host,ref:this.ref}):"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onClick)?((0,l.d)(t,this.ref),null===(a=this.state._on)||void 0===a||a.onClick(t)):(0,r.d)("It is no button click callback configured!")},this._accessKey=void 0,this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel=void 0,this._disabled=!1,this._icon=void 0,this._iconAlign="left",this._iconOnly=!1,this._id=void 0,this._label=void 0,this._on=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this.state={_ariaLabel:"",_icon:{},_iconAlign:"left",_label:"",_on:{},_type:"button"}}render(){return(0,i.h)(i.H,{ref:this.catchHost},(0,i.h)("button",Object.assign({ref:this.catchRef,accessKey:this.state._accessKey,"aria-controls":this.state._ariaControls,"aria-current":(0,l.m)(this.state._ariaCurrent),"aria-expanded":(0,l.e)(this.state._ariaExpanded),"aria-label":!1===this.state._iconOnly?this.state._ariaLabel||this.state._label:void 0,"aria-labelledby":!0===this.state._iconOnly?this.nonce:void 0,class:{[this.state._variant]:!0,"icon-only":!0===this.state._iconOnly,[this.state._customClass]:"string"==typeof this.state._customClass&&this.state._customClass.length>0},disabled:this.state._disabled,id:this.state._id},this.state._on,{onClick:this.onClick,style:{width:"inherit"},tabIndex:this.state._tabIndex,type:this.state._type}),(0,i.h)("kol-span-wc",{_icon:this._icon,_iconOnly:this._iconOnly,_label:this.state._ariaLabel||this.state._label},(0,i.h)("slot",{name:"expert",slot:"expert"}))),!0===this.state._iconOnly&&(0,i.h)("kol-tooltip",{_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._ariaLabel||this.state._label}))}validateAccessKey(t){(0,l.w)(this,"_accessKey",t)}validateAriaControls(t){(0,l.w)(this,"_ariaControls",t)}validateAriaCurrent(t){(0,l.a)(this,"_ariaControls",(t=>!0===t||"date"===t||"location"===t||"page"===t||"step"===t||"time"===t),new Set(["boolean","String {data, location, page, step, time}"]),t)}validateAriaExpanded(t){(0,l.b)(this,"_ariaExpanded",t)}validateAriaLabel(t){(0,c.v)(this,t)}validateDisabled(t){(0,l.b)(this,"_disabled",t),!0===t&&(0,r.b)()}validateIcon(t){(0,s.v)(this,t)}validateIconAlign(t){(0,s.w)(this,t)}validateIconOnly(t){(0,l.b)(this,"_iconOnly",t,{defaultValue:!1})}validateId(t){(0,l.w)(this,"_id",t)}validateLabel(t){(0,c.a)(this,t)}validateOn(t){"object"==typeof t&&null!==t&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validateTabIndex(t){(0,d.v)(this,t)}validateTooltipAlign(t){(0,o.w)(this,"_tooltipAlign",t)}validateType(t){(0,h.w)(this,"_type",t)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaLabel(this._ariaLabel),this.validateDisabled(this._disabled),this.validateIcon(this._icon),this.validateIconOnly(this._iconOnly),this.validateId(this._id),this.validateLabel(this._label),this.validateOn(this._on),this.validateTabIndex(this._tabIndex),this.validateTooltipAlign(this._tooltipAlign),this.validateType(this._type)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_disabled:["validateDisabled"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_id:["validateId"],_label:["validateLabel"],_on:["validateOn"],_tabIndex:["validateTabIndex"],_tooltipAlign:["validateTooltipAlign"],_type:["validateType"]}}};p.style={default:'*,::before,::after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--kolibri-border-color)}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:var(--kolibri-color);--tw-ring-color:rgba(undefined, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}::moz-focus-inner{border-style:none;padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=\'search\']{-webkit-appearance:textfield;outline-offset:-2px}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}b{font-weight:bolder}button,select{text-transform:none}button,[type=\'button\'],[type=\'reset\'],[type=\'submit\']{-webkit-appearance:button}button{background-color:transparent;background-image:none}button,[role="button"]{cursor:pointer}code{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}fieldset{margin:0;padding:0}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}h1,p,h2,h3,h4,h5,h6{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}input,button,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;padding:0;line-height:inherit;color:inherit}input::placeholder{opacity:1;color:#9ca3af}input::webkit-input-placeholder{opacity:1;color:#9ca3af}input::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder{opacity:1;color:#9ca3af}input::-ms-input-placeholder{opacity:1;color:#9ca3af}legend{padding:0}progress{vertical-align:baseline}small{font-size:80%}svg{display:block;vertical-align:middle}table{text-indent:0;border-color:inherit;border-collapse:collapse}textarea{resize:vertical}textarea::placeholder{opacity:1;color:#9ca3af}textarea::webkit-input-placeholder{opacity:1;color:#9ca3af}textarea::-moz-placeholder{opacity:1;color:#9ca3af}textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}textarea::-ms-input-placeholder{opacity:1;color:#9ca3af}ul,ol{list-style:none;margin:0;padding:0}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.bg-normal{background-color:var(--kolibri-color-normal)}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.bg-spin-1{background-color:var(--kolibri-color-spin-1)}.bg-spin-2{background-color:var(--kolibri-color-spin-2)}.bg-spin-3{background-color:var(--kolibri-color-spin-3)}.rounded{border-radius:var(--kolibri-border-radius)}.border-1{border-width:1px}.cursor-pointer{cursor:pointer}.block{display:block}.inline-block{display:inline-block}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.inline-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex}.table{display:table}.grid{display:-ms-grid;display:grid}.hidden{display:none}.flex-wrap{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.items-center{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.content-center{-ms-flex-line-pack:center;-webkit-align-content:center;align-content:center}.float-left{float:left}.font-80{font-weight:80}.font-60{font-weight:60}.h-full{height:100%}.h-0{height:0px}.h-0\\.41c-2\\.42\\2c 0-4\\.82-1\\.57-4\\.82-3\\.58c0\\.05-0\\.98\\2c 0\\.43-1\\.91\\2c 1\\.07-2\\.65c0\\.3\\2c 0\\.05\\2c 0\\.61\\2c 0\\.09\\2c 0\\.92\\2c 0\\.09c1\\.1\\2c 0\\2c 1\\.69-0\\.58\\2c 1\\.74-1\\.16{height:0.29rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.leading-normal{line-height:1.5}.list-none{list-style-type:none}.list-disc{list-style-type:disc}.list-decimal{list-style-type:decimal}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:calc(1 * var(--kolibri-spacing))}.mr-2{margin-right:calc(2 * var(--kolibri-spacing))}.ml-2{margin-left:calc(2 * var(--kolibri-spacing))}.mt-2{margin-top:calc(2 * var(--kolibri-spacing))}.mt-4{margin-top:calc(4 * var(--kolibri-spacing))}.outline{outline-style:solid}.overflow-hidden{overflow:hidden}.overflow-y-visible{overflow-y:visible}.p-2{padding:calc(2 * var(--kolibri-spacing))}.p-4{padding:calc(4 * var(--kolibri-spacing))}.px{padding-left:1px;padding-right:1px}.py-2{padding-top:calc(2 * var(--kolibri-spacing));padding-bottom:calc(2 * var(--kolibri-spacing))}.pl-8{padding-left:2rem}.pb-2{padding-bottom:calc(2 * var(--kolibri-spacing))}.tab{-moz-tab-size:4;-o-tab-size:4;tab-size:4}.absolute{position:absolute}.text-center{text-align:center}.text-normal{color:var(--kolibri-color-normal)}.hover\\:text-primary:hover{color:var(--kolibri-color-primary)}.italic{font-style:italic}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.indent{text-indent:1.5rem}.visible{visibility:visible}.w-full{width:100%}.w-4\\/5{width:80%}.z-50{z-index:50}.gap-1{grid-gap:calc(1 * var(--kolibri-spacing));gap:calc(1 * var(--kolibri-spacing))}.gap-2{grid-gap:calc(2 * var(--kolibri-spacing));gap:calc(2 * var(--kolibri-spacing))}.grid-flow-col{grid-auto-flow:column}.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z))}.animate{-webkit-animation-iteration-count:1;animation-iteration-count:1}.filter{--tw-blur:var(--tw-empty, );--tw-brightness:var(--tw-empty, );--tw-contrast:var(--tw-empty, );--tw-grayscale:var(--tw-empty, );--tw-hue-rotate:var(--tw-empty, );--tw-invert:var(--tw-empty, );--tw-saturate:var(--tw-empty, );--tw-sepia:var(--tw-empty, );--tw-drop-shadow:var(--tw-empty, );-webkit-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}:host *{-ms-hyphens:var(--kolibri-hyphens);-webkit-hyphens:var(--kolibri-hyphens);hyphens:var(--kolibri-hyphens);font-family:var(--kolibri-font-family);line-height:var(--kolibri-line-height);word-break:break-word}'}},2263:(t,e,a)=>{a.d(e,{a:()=>l,v:()=>n});var i=a(1707),o=a(81);const r=(t,e,a,o)=>{const r=e.has("_ariaLabel")?e.get("_ariaLabel"):a.state._ariaLabel;if("string"==typeof r&&r.length>0){const t=e.has("_label")?e.get("_label"):a.state._label;!1===new RegExp(`^${t}`).test(r)&&("_ariaLabel"===o?(e.set("_label",r),a._label=r):(e.set("_ariaLabel",t),a._ariaLabel=t),(0,i.e)("Das abweichende Aria-Label am Schalter ist nicht barrierefrei. Ein abweichendes Aria-Label muss aus Barrierefreiheitsgründen für die Sprachsteuerung mit dem Label-Text beginnen."))}},n=(t,e)=>{(0,o.w)(t,"_ariaLabel",e,{hooks:{beforePatch:r}})},l=(t,e)=>{(0,o.w)(t,"_label",e,{hooks:{beforePatch:r},required:!0})}},8927:(t,e,a)=>{a.d(e,{v:()=>n});var i=a(1707),o=a(81);const r={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,i.e)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},n=(t,e)=>{(0,o.f)(t,"_tabIndex",e,r)}},4957:(t,e,a)=>{a.d(e,{S:()=>n,a:()=>r,b:()=>i,i:()=>o});const i=t=>"object"==typeof t&&null!==t,o=(t,e=0)=>"string"==typeof t&&t.length>=e,r=t=>{if("object"!=typeof t||null===t)return o(t,1);for(const e in t)if(!1===o(e,1))return!1;return!0},n=new Event("StateChange")}}]);