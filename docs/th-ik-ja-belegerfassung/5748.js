/*! For license information please see 5748.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_oss_th_ik_ja_belegerfassung=self.webpackChunk_public_oss_th_ik_ja_belegerfassung||[]).push([[5748],{61:(t,e,i)=>{i.d(e,{w:()=>s});var a=i(46);const s=(t,e,i)=>{(0,a.a)(t,e,(t=>"top"===t||"right"===t||"bottom"===t||"left"===t),new Set(["TooltipAlignment {top, right, buttom, left}"]),i,{defaultValue:"top"})}},1916:(t,e,i)=>{i.d(e,{a:()=>s,p:()=>o});var a=i(46);const s=(t={})=>{for(;t.form instanceof HTMLElement&&"FORM"!==t.form.tagName&&"KOL-FORM"!==t.form.tagName;)t.form.parentElement instanceof HTMLElement?t.form=t.form.parentElement:t.form.parentNode instanceof ShadowRoot?t.form=t.form.parentNode.host:t.form=null;if(t.form instanceof HTMLElement){const e=new Event("reset",{bubbles:!0,cancelable:!0});if("FORM"===t.form.tagName)(0,a.d)(e,t.form),t.form.dispatchEvent(e);else if("KOL-FORM"===t.form.tagName){(0,a.d)(e,a.K.querySelector("form",t.form));const i=t.form;"object"==typeof i._on&&null!==typeof i._on&&"function"==typeof i._on.onReset&&i._on.onReset(e)}}},o=(t={})=>{for(;t.form instanceof HTMLElement&&"FORM"!==t.form.tagName&&"KOL-FORM"!==t.form.tagName;)t.form.parentElement instanceof HTMLElement?t.form=t.form.parentElement:t.form.parentNode instanceof ShadowRoot?t.form=t.form.parentNode.host:t.form=null;if(t.form instanceof HTMLElement){const e=new SubmitEvent("submit",{bubbles:!0,cancelable:!0,submitter:t.form});if("FORM"===t.form.tagName)(0,a.d)(e,t.form),t.form.dispatchEvent(e);else if("KOL-FORM"===t.form.tagName){(0,a.d)(e,a.K.querySelector("form",t.form));const i=t.form;"object"==typeof i._on&&null!==typeof i._on&&"function"==typeof i._on.onSubmit&&i._on.onSubmit(e)}}}},9366:(t,e,i)=>{i.d(e,{a:()=>o,w:()=>s});var a=i(46);const s=(t,e,i)=>{(0,a.a)(t,e,(t=>"button"===t||"reset"===t||"submit"===t),new Set(["KoliBriButtonType {button, reset, submit}"]),i)},o=(t,e,i)=>{(0,a.a)(t,e,(t=>"primary"===t||"secondary"===t||"normal"===t||"danger"===t||"ghost"===t||"custom"===t),new Set(["KoliBriButtonVariant {primary, secondary, normal, danger, ghost, custom}"]),i,{defaultValue:"normal"})}},4070:(t,e,i)=>{i.d(e,{i:()=>r,v:()=>h,w:()=>d});var a=i(6509),s=i(46),o=i(2051);const n=(t,e,i)=>{(0,o.b)(i)?t[e]=i:(0,o.i)(i,1)&&(t[e]={icon:i})},l=t=>{var e,i,a,s,l,r,h;if(null===(e=t.nextState)||void 0===e?void 0:e.has("_icon")){const e=null===(i=t.nextState)||void 0===i?void 0:i.get("_icon"),l=(null===(a=t.nextState)||void 0===a?void 0:a.get("_iconAlign"))||t.state._iconAlign;null===(s=t.nextState)||void 0===s||s.set("_icon",((t,e)=>{let i={};return(0,o.i)(t,1)?i="right"===e?{right:{icon:t}}:{left:{icon:t}}:"object"==typeof t&&null!==t&&(n(i,"top",t.top),n(i,"right",t.right),n(i,"bottom",t.bottom),n(i,"left",t.left)),i})(e,l))}else if(null===(l=t.nextState)||void 0===l?void 0:l.has("_iconAlign")){const e=t.state._iconAlign;null===(r=t.nextState)||void 0===r||r.set("_icon",{[e]:void 0,[null===(h=t.nextState)||void 0===h?void 0:h.get("_iconAlign")]:t.state._icon[e]})}},r=t=>"object"==typeof t&&null!==t&&(void 0===t.style||(0,o.a)(t.style))&&(0,o.i)(t.icon,1),h=(t,e)=>{(0,s.o)(e,(()=>{try{e=(0,s.p)(e)}catch(t){}(0,s.a)(t,"_icon",(t=>null===t||(0,o.i)(t,1)||"object"==typeof t&&null!==t&&((0,o.i)(t.left,1)||r(t.left)||(0,o.i)(t.right,1)||r(t.right)||(0,o.i)(t.top,1)||r(t.top)||(0,o.i)(t.bottom,1)||r(t.bottom))),new Set(["KoliBriIcon"]),e,{hooks:{beforePatch:(e,i)=>{null===e&&i.set("_icon",{}),l(t)}},required:!0})}))},d=(t,e)=>{(0,a.c)("Das Property _icon-align bzw. _iconAlign ist veraltet. Die Ausrichtung der Icon's kann jetzt direkt über das _icon-Property vorgenommen werden. (v1.1.10: https://public-ui.github.io/?path=/story/backlog-und-changelog--page)"),(0,s.a)(t,"_iconAlign",(t=>"left"===t||"right"===t),new Set(["Alignment {left, right, top, bottom}"]),e,{hooks:{beforePatch:()=>{l(t)}}})}},5748:(t,e,i)=>{i.r(e),i.d(e,{kol_button_wc:()=>b,kol_heading_wc:()=>v,kol_input:()=>f});var a=i(7227),s=i(61),o=i(6509),n=i(85),l=i(46),r=i(4070),h=i(8567),d=i(9853),_=i(1916),c=i(9366),u=i(5820);const b=class{constructor(t){(0,a.r)(this,t),this.nonce=(0,n.n)(),this.catchHost=t=>{this.host=t},this.catchRef=t=>{this.forwardedRef=t,this.ref=t},this.onClick=t=>{var e,i;"submit"===this.state._type?(0,_.p)({form:this.host,ref:this.ref}):"reset"===this.state._type?(0,_.a)({form:this.host,ref:this.ref}):"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onClick)?((0,l.d)(t,this.ref),null===(i=this.state._on)||void 0===i||i.onClick(t)):(0,o.d)("It is no button click callback configured!")},this._accessKey=void 0,this._ariaControls=void 0,this._ariaCurrent=void 0,this._ariaExpanded=void 0,this._ariaLabel="",this._customClass=void 0,this._disabled=!1,this._icon=void 0,this._iconAlign="left",this._iconOnly=!1,this._id=void 0,this._label=void 0,this._on=void 0,this._tabIndex=void 0,this._tooltipAlign="top",this._type="button",this._variant="normal",this.state={_ariaLabel:"",_icon:{},_iconAlign:"left",_label:"",_on:{},_type:"button"}}render(){return(0,a.h)(a.H,{ref:this.catchHost},(0,a.h)("button",Object.assign({ref:this.catchRef,accessKey:this.state._accessKey,"aria-controls":this.state._ariaControls,"aria-current":(0,l.m)(this.state._ariaCurrent),"aria-expanded":(0,l.e)(this.state._ariaExpanded),"aria-label":!1===this.state._iconOnly?this.state._ariaLabel||this.state._label:void 0,"aria-labelledby":!0===this.state._iconOnly?this.nonce:void 0,class:{[this.state._variant]:"custom"!==this.state._variant,[this.state._customClass]:"custom"===this.state._variant&&"string"==typeof this.state._customClass&&this.state._customClass.length>0,"icon-only":!0===this.state._iconOnly},disabled:this.state._disabled,id:this.state._id},this.state._on,{onClick:this.onClick,style:{width:"inherit"},tabIndex:this.state._tabIndex,type:this.state._type}),(0,a.h)("kol-span-wc",{_icon:this._icon,_iconOnly:this._iconOnly,_label:this.state._ariaLabel||this.state._label},(0,a.h)("slot",{name:"expert",slot:"expert"}))),!0===this.state._iconOnly&&(0,a.h)("kol-tooltip",{_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._ariaLabel||this.state._label}))}getInteractiveElementRef(){return t=this,null,e=function*(){return Promise.resolve(this.ref)},new Promise(((i,a)=>{var s=t=>{try{n(e.next(t))}catch(t){a(t)}},o=t=>{try{n(e.throw(t))}catch(t){a(t)}},n=t=>t.done?i(t.value):Promise.resolve(t.value).then(s,o);n((e=e.apply(t,null)).next())}));var t,e}validateAccessKey(t){(0,l.w)(this,"_accessKey",t)}validateAriaControls(t){(0,l.w)(this,"_ariaControls",t)}validateAriaCurrent(t){(0,l.a)(this,"_ariaControls",(t=>!0===t||"date"===t||"location"===t||"page"===t||"step"===t||"time"===t),new Set(["boolean","String {data, location, page, step, time}"]),t)}validateAriaExpanded(t){(0,l.b)(this,"_ariaExpanded",t)}validateAriaLabel(t){(0,h.v)(this,t)}validateCustomClass(t){(0,l.w)(this,"_customClass",t,{defaultValue:void 0})}validateDisabled(t){(0,l.b)(this,"_disabled",t),!0===t&&(0,o.b)()}validateIcon(t){(0,r.v)(this,t)}validateIconAlign(t){(0,r.w)(this,t)}validateIconOnly(t){(0,l.b)(this,"_iconOnly",t,{defaultValue:!1})}validateId(t){(0,l.w)(this,"_id",t)}validateLabel(t){(0,h.a)(this,t)}validateOn(t){"object"==typeof t&&null!==t&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validateTabIndex(t){(0,d.v)(this,t)}validateTooltipAlign(t){(0,s.w)(this,"_tooltipAlign",t)}validateType(t){(0,c.w)(this,"_type",t)}validateVariant(t){(0,c.a)(this,"_variant",t)}componentWillLoad(){this.validateAccessKey(this._accessKey),this.validateAriaControls(this._ariaControls),this.validateAriaCurrent(this._ariaCurrent),this.validateAriaExpanded(this._ariaExpanded),this.validateAriaLabel(this._ariaLabel),this.validateCustomClass(this._customClass),this.validateDisabled(this._disabled),this.validateIcon(this._icon),this.validateIconOnly(this._iconOnly),this.validateId(this._id),this.validateLabel(this._label),this.validateOn(this._on),this.validateTabIndex(this._tabIndex),this.validateTooltipAlign(this._tooltipAlign),this.validateType(this._type),this.validateVariant(this._variant),0===Date.now()&&console.log(this.forwardedRef,this.ref)}static get watchers(){return{_accessKey:["validateAccessKey"],_ariaControls:["validateAriaControls"],_ariaCurrent:["validateAriaCurrent"],_ariaExpanded:["validateAriaExpanded"],_ariaLabel:["validateAriaLabel"],_customClass:["validateCustomClass"],_disabled:["validateDisabled"],_icon:["validateIcon"],_iconAlign:["validateIconAlign"],_iconOnly:["validateIconOnly"],_id:["validateId"],_label:["validateLabel"],_on:["validateOn"],_tabIndex:["validateTabIndex"],_tooltipAlign:["validateTooltipAlign"],_type:["validateType"],_variant:["validateVariant"]}}},v=class{constructor(t){(0,a.r)(this,t),this._level=1,this.state={}}validateLevel(t){(0,u.w)(this,t)}componentWillLoad(){this.validateLevel(this._level)}render(){switch(this.state._level){case 2:return(0,a.h)("h2",null,(0,a.h)("slot",null));case 3:return(0,a.h)("h3",null,(0,a.h)("slot",null));case 4:return(0,a.h)("h4",null,(0,a.h)("slot",null));case 5:return(0,a.h)("h5",null,(0,a.h)("slot",null));case 6:return(0,a.h)("h6",null,(0,a.h)("slot",null));default:return(0,a.h)("h1",null,(0,a.h)("slot",null))}}static get watchers(){return{_level:["validateLevel"]}}},f=class{constructor(t){(0,a.r)(this,t),this._alert=!0,this._disabled=!1,this._error="",this._hideLabel=!1,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._readOnly=!1,this._renderNoLabel=!1,this._required=!1,this._smartButton=void 0,this._touched=!1}render(){var t,e,i,s;const o="string"==typeof this._error&&this._error.length>0&&!0===this._touched,n="string"==typeof this._hint&&this._hint.length>0,l=!0===this._hideLabel&&!0!==this._required;return(0,a.h)(a.H,{class:{disabled:!0===this._disabled,error:!0===o,"read-only":!0===this._readOnly,required:!0===this._required,touched:!0===this._touched}},!1===this._renderNoLabel&&(0,a.h)("label",{htmlFor:this._id,id:`${this._id}-label`,style:{height:l?"0":void 0,margin:l?"0":void 0,padding:l?"0":void 0,visibility:l?"hidden":void 0}},(0,a.h)("span",null,(0,a.h)("slot",{name:"label"}))),n&&(0,a.h)("span",{class:"hint",id:`${this._id}-hint`},this._hint),(0,a.h)("div",{class:{input:!0,"icon-left":"object"==typeof(null===(t=this._icon)||void 0===t?void 0:t.left),"icon-right":"object"==typeof(null===(e=this._icon)||void 0===e?void 0:e.right)}},(0,a.h)("div",{class:"icons"},(null===(i=this._icon)||void 0===i?void 0:i.left)?(0,a.h)("kol-icon",{_ariaLabel:"",_icon:this._icon.left.icon}):(0,a.h)("i",null),(null===(s=this._icon)||void 0===s?void 0:s.right)?(0,a.h)("kol-icon",{_ariaLabel:"",_icon:this._icon.right.icon}):(0,a.h)("i",null)),(0,a.h)("slot",{name:"input"}),"object"==typeof this._smartButton&&null!==this._smartButton&&(0,a.h)("kol-button-wc",{_ariaLabel:this._smartButton._ariaLabel,_customClass:this._smartButton._customClass,_disabled:this._smartButton._disabled,_icon:this._smartButton._icon,_iconOnly:!0,_id:this._smartButton._id,_label:this._smartButton._label,_on:this._smartButton._on,_tooltipAlign:this._smartButton._tooltipAlign,_variant:this._smartButton._variant})),o&&(0,a.h)("kol-alert",{class:"error",id:`${this._id}-error`,_alert:this._alert,_type:"error",_variant:"msg"},this._error),Array.isArray(this._list)&&this._list.length>0&&(0,a.h)("datalist",{id:`${this._id}-list`},this._list.map((t=>(0,a.h)("option",{value:t})))))}}},8567:(t,e,i)=>{i.d(e,{a:()=>l,v:()=>n});var a=i(6509),s=i(46);const o=(t,e,i,s)=>{const o=e.has("_ariaLabel")?e.get("_ariaLabel"):i.state._ariaLabel;if("string"==typeof o&&o.length>0){const t=e.has("_label")?e.get("_label"):i.state._label;!1===new RegExp(`^${t}`).test(o)&&("_ariaLabel"===s?(e.set("_label",o),i._label=o):(e.set("_ariaLabel",t),i._ariaLabel=t),(0,a.e)("Das abweichende Aria-Label am Schalter ist nicht barrierefrei. Ein abweichendes Aria-Label muss aus Barrierefreiheitsgründen für die Sprachsteuerung mit dem Label-Text beginnen."))}},n=(t,e)=>{(0,s.w)(t,"_ariaLabel",e,{hooks:{beforePatch:o}})},l=(t,e)=>{(0,s.w)(t,"_label",e,{hooks:{beforePatch:o},required:!0})}},9853:(t,e,i)=>{i.d(e,{v:()=>n});var a=i(6509),s=i(46);const o={hooks:{afterPatch:t=>{-1!==t&&0!==t&&(0,a.e)("Don’t Use Tabindex Greater than 0: https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html")}}},n=(t,e)=>{(0,s.f)(t,"_tabIndex",e,o)}},5820:(t,e,i)=>{i.d(e,{w:()=>s});var a=i(46);const s=(t,e)=>{(0,a.a)(t,"_level",(t=>"number"==typeof t&&1<=t&&t<=6),new Set(["Number {1, 2, 3, 4, 5, 6}"]),e,{defaultValue:1,required:!0})}},2051:(t,e,i)=>{i.d(e,{S:()=>n,a:()=>o,b:()=>a,i:()=>s});const a=t=>"object"==typeof t&&null!==t,s=(t,e=0)=>"string"==typeof t&&t.length>=e,o=t=>{if("object"!=typeof t||null===t)return s(t,1);for(const e in t)if(!1===s(e,1))return!1;return!0},n=new Event("StateChange")}}]);