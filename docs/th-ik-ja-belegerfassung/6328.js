/*! For license information please see 6328.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_oss_th_ik_ja_belegerfassung=self.webpackChunk_public_oss_th_ik_ja_belegerfassung||[]).push([[6328],{6328:(i,o,r)=>{r.r(o),r.d(o,{kol_details:()=>l});var e=r(1121),a=r(4999);const l=class{constructor(i){(0,e.r)(this,i),this.onClick=()=>{setTimeout((()=>{var i;this._open=null===(i=this.htmlDetailsElement)||void 0===i?void 0:i.open}),25)},this._open=!1,this._summary=void 0,this.state={_summary:"…"}}render(){return(0,e.h)(e.H,null,(0,e.h)("details",{ref:i=>{this.htmlDetailsElement=i},open:this.state._open},(0,e.h)("summary",{onClick:this.onClick},this.state._open?(0,e.h)("kol-icon",{_ariaLabel:"",_icon:"fa-solid fa-angle-down"}):(0,e.h)("kol-icon",{_ariaLabel:"",_icon:"fa-solid fa-angle-right"}),(0,e.h)("span",null,this.state._summary)),(0,e.h)("kol-indented-text",null,(0,e.h)("slot",null))))}validateOpen(i){(0,a.b)(this,"_open",i)}validateSummary(i){(0,a.w)(this,"_summary",i,{required:!0})}componentWillLoad(){this.validateOpen(this._open),this.validateSummary(this._summary)}static get watchers(){return{_open:["validateOpen"],_summary:["validateSummary"]}}};l.style={default:":host{--kolibri-border-color:#e0e0e0;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*{box-sizing:border-box;font-family:var(--kolibri-font-family)}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}a,button,input,select,textarea{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{background-color:transparent;border-width:0}h1,h2,h3,h4,h5,h6{font-size:1rem;margin:0}:host details{display:grid;width:100%}:host details>kol-indented-text{margin:var(--kolibri-spacing) 0 0 var(--kolibri-spacing)}:host summary{cursor:pointer;display:flow-root;margin:0;padding:0}:host summary span{margin-left:var(--kolibri-spacing);text-decoration:underline}:host summary:hover{text-decoration-thickness:var(--kolibri-spacing)}"}}}]);