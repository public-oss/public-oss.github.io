/*! For license information please see 6387.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_oss_th_ik_ja_belegerfassung=self.webpackChunk_public_oss_th_ik_ja_belegerfassung||[]).push([[6387],{6387:(t,i,s)=>{s.r(i),s.d(i,{kol_heading_wc:()=>h,kol_input:()=>r});var l=s(7501),e=s(6250);const h=class{constructor(t){(0,l.r)(this,t),this._level=1,this.state={}}validateLevel(t){(0,e.w)(this,t)}componentWillLoad(){this.validateLevel(this._level)}render(){switch(this.state._level){case 2:return(0,l.h)("h2",null,(0,l.h)("slot",null));case 3:return(0,l.h)("h3",null,(0,l.h)("slot",null));case 4:return(0,l.h)("h4",null,(0,l.h)("slot",null));case 5:return(0,l.h)("h5",null,(0,l.h)("slot",null));case 6:return(0,l.h)("h6",null,(0,l.h)("slot",null));default:return(0,l.h)("h1",null,(0,l.h)("slot",null))}}static get watchers(){return{_level:["validateLevel"]}}},r=class{constructor(t){(0,l.r)(this,t),this._alert=!0,this._disabled=!1,this._error="",this._hideLabel=!1,this._hint="",this._icon=void 0,this._id=void 0,this._list=void 0,this._readOnly=!1,this._renderNoLabel=!1,this._required=!1,this._smartButton=void 0,this._touched=!1}render(){var t,i,s,e;const h="string"==typeof this._error&&this._error.length>0&&!0===this._touched,r="string"==typeof this._hint&&this._hint.length>0,n=!0===this._hideLabel&&!0!==this._required;return(0,l.h)(l.H,{class:{disabled:!0===this._disabled,error:!0===h,"read-only":!0===this._readOnly,required:!0===this._required,touched:!0===this._touched}},!1===this._renderNoLabel&&(0,l.h)("label",{htmlFor:this._id,id:`${this._id}-label`,style:{height:n?"0":void 0,margin:n?"0":void 0,padding:n?"0":void 0,visibility:n?"hidden":void 0}},(0,l.h)("span",null,(0,l.h)("slot",{name:"label"}))),r&&(0,l.h)("span",{class:"hint",id:`${this._id}-hint`},this._hint),(0,l.h)("div",{class:{input:!0,"icon-left":"object"==typeof(null===(t=this._icon)||void 0===t?void 0:t.left),"icon-right":"object"==typeof(null===(i=this._icon)||void 0===i?void 0:i.right)}},(0,l.h)("div",{class:"icons"},(null===(s=this._icon)||void 0===s?void 0:s.left)?(0,l.h)("kol-icon",{_ariaLabel:"",_icon:this._icon.left.icon}):(0,l.h)("i",null),(null===(e=this._icon)||void 0===e?void 0:e.right)?(0,l.h)("kol-icon",{_ariaLabel:"",_icon:this._icon.right.icon}):(0,l.h)("i",null)),(0,l.h)("slot",{name:"input"}),"object"==typeof this._smartButton&&null!==this._smartButton&&(0,l.h)("kol-button-wc",{_ariaLabel:this._smartButton._ariaLabel,_customClass:this._smartButton._customClass,_disabled:this._smartButton._disabled,_icon:this._smartButton._icon,_iconOnly:!0,_id:this._smartButton._id,_label:this._smartButton._label,_on:this._smartButton._on,_tooltipAlign:this._smartButton._tooltipAlign,_variant:this._smartButton._variant})),h&&(0,l.h)("kol-alert",{class:"error",id:`${this._id}-error`,_alert:this._alert,_type:"error",_variant:"msg"},this._error),Array.isArray(this._list)&&this._list.length>0&&(0,l.h)("datalist",{id:`${this._id}-list`},this._list.map((t=>(0,l.h)("option",{value:t})))))}}},6250:(t,i,s)=>{s.d(i,{w:()=>e});var l=s(5641);const e=(t,i)=>{(0,l.a)(t,"_level",(t=>"number"==typeof t&&1<=t&&t<=6),new Set(["Number {1, 2, 3, 4, 5, 6}"]),i,{defaultValue:1,required:!0})}}}]);