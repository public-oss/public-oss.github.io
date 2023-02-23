/*! For license information please see 5999.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_oss_th_ik_ja_belegerfassung=self.webpackChunk_public_oss_th_ik_ja_belegerfassung||[]).push([[5999],{5999:(t,i,e)=>{e.r(i),e.d(i,{kol_heading_wc:()=>a,kol_input:()=>n});var s=e(1121),l=e(9115),h=e(4999);const a=class{constructor(t){(0,s.r)(this,t),this.renderHeadline=(t,i)=>{switch(i){case 1:return(0,s.h)("h1",{class:"headline"},t,(0,s.h)("slot",null));case 2:return(0,s.h)("h2",{class:"headline"},t,(0,s.h)("slot",null));case 3:return(0,s.h)("h3",{class:"headline"},t,(0,s.h)("slot",null));case 4:return(0,s.h)("h4",{class:"headline"},t,(0,s.h)("slot",null));case 5:return(0,s.h)("h5",{class:"headline"},t,(0,s.h)("slot",null));case 6:return(0,s.h)("h6",{class:"headline"},t,(0,s.h)("slot",null));default:return(0,s.h)("strong",{class:"headline"},t,(0,s.h)("slot",null))}},this._level=1,this._label=void 0,this._overline="",this.state={_label:""}}validateLabel(t){(0,h.w)(this,"_label",t)}validateLevel(t){(0,l.w)(this,t)}validateOverline(t){(0,h.w)(this,"_overline",t)}componentWillLoad(){this.validateLabel(this._label),this.validateLevel(this._level),this.validateOverline(this._overline)}render(){return(0,s.h)(s.H,null,this.renderHeadline(this.state._label,this.state._level),this.state._overline&&(0,s.h)("span",{class:"overline"},this.state._overline))}static get watchers(){return{_label:["validateLabel"],_level:["validateLevel"],_overline:["validateOverline"]}}},n=class{constructor(t){(0,s.r)(this,t),this._alert=!0,this._disabled=!1,this._error="",this._hideLabel=!1,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._readOnly=!1,this._renderNoLabel=!1,this._required=!1,this._smartButton=void 0,this._touched=!1}render(){var t,i,e,l;const h="string"==typeof this._error&&this._error.length>0&&!0===this._touched,a="string"==typeof this._hint&&this._hint.length>0,n=!0===this._hideLabel&&!0!==this._required;return(0,s.h)(s.H,{class:{disabled:!0===this._disabled,error:!0===h,"read-only":!0===this._readOnly,required:!0===this._required,touched:!0===this._touched}},!1===this._renderNoLabel&&(0,s.h)("label",{htmlFor:this._id,id:`${this._id}-label`,style:{height:n?"0":void 0,margin:n?"0":void 0,padding:n?"0":void 0,visibility:n?"hidden":void 0}},(0,s.h)("span",null,(0,s.h)("slot",{name:"label"}))),a&&(0,s.h)("span",{class:"hint",id:`${this._id}-hint`},this._hint),(0,s.h)("div",{class:{input:!0,"icon-left":"object"==typeof(null===(t=this._icon)||void 0===t?void 0:t.left),"icon-right":"object"==typeof(null===(i=this._icon)||void 0===i?void 0:i.right)}},(0,s.h)("div",{class:"icons"},(null===(e=this._icon)||void 0===e?void 0:e.left)?(0,s.h)("kol-icon",{_ariaLabel:"",_icon:this._icon.left.icon}):(0,s.h)("i",null),(null===(l=this._icon)||void 0===l?void 0:l.right)?(0,s.h)("kol-icon",{_ariaLabel:"",_icon:this._icon.right.icon}):(0,s.h)("i",null)),(0,s.h)("slot",{name:"input"}),"object"==typeof this._smartButton&&null!==this._smartButton&&(0,s.h)("kol-button-wc",{_ariaLabel:this._smartButton._ariaLabel,_customClass:this._smartButton._customClass,_disabled:this._smartButton._disabled,_icon:this._smartButton._icon,_iconOnly:!0,_id:this._smartButton._id,_label:this._smartButton._label,_on:this._smartButton._on,_tooltipAlign:this._smartButton._tooltipAlign,_variant:this._smartButton._variant})),h&&(0,s.h)("kol-alert",{class:"error",id:`${this._id}-error`,_alert:this._alert,_type:"error",_variant:"msg"},this._error),Array.isArray(this._list)&&this._list.length>0&&(0,s.h)("datalist",{id:`${this._id}-list`},this._list.map((t=>(0,s.h)("option",{value:t})))))}}},9115:(t,i,e)=>{e.d(i,{w:()=>l});var s=e(4999);const l=(t,i)=>{(0,s.a)(t,"_level",(t=>"number"==typeof t&&1<=t&&t<=6),new Set(["Number {1, 2, 3, 4, 5, 6}"]),i,{defaultValue:1,required:!0})}}}]);