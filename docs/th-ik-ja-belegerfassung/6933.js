/*! For license information please see 6933.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_oss_th_ik_ja_belegerfassung=self.webpackChunk_public_oss_th_ik_ja_belegerfassung||[]).push([[6933],{6933:(i,e,t)=>{t.r(e),t.d(e,{kol_link_group:()=>h});var a=t(1121),l=t(2600),s=t(4999),r=t(9115),o=t(3241);const n=i=>{const e=[];return i.links.map(((t,l)=>{e.push((0,a.h)("li",{key:l,class:{ident:l>0&&"vertical"===i.orientation,"list-none":0===l&&"horizontal"===i.orientation},style:{listStyleType:i.listStyleType}},(0,a.h)("kol-link",Object.assign({},t))))})),e},h=class{constructor(i){(0,a.r)(this,i),this.isUl=!0,this._ariaLabel=void 0,this._listStyleType=void 0,this._heading=void 0,this._level=void 0,this._links=void 0,this._ordered=void 0,this._orientation="vertical",this.state={_ariaLabel:"…",_listStyleType:"disc",_links:[],_orientation:"vertical"}}render(){var i;return(0,a.h)("nav",{"aria-label":this.state._ariaLabel,class:{vertical:"vertical"===this.state._orientation,horizontal:"horizontal"===this.state._orientation}},"string"==typeof this.state._heading&&(null===(i=this.state._heading)||void 0===i?void 0:i.length)>0&&(0,a.h)("kol-heading-wc",{_label:this.state._heading,_level:this.state._level}),!1===this.isUl?(0,a.h)("ol",null,(0,a.h)(n,{links:this.state._links,orientation:this.state._orientation,listStyleType:this.state._listStyleType})):(0,a.h)("ul",null,(0,a.h)(n,{links:this.state._links,orientation:this.state._orientation,listStyleType:this.state._listStyleType})))}validateAriaLabel(i){(0,s.w)(this,"_ariaLabel",i,{required:!0}),(0,l.b)(i)}validateListStyleType(i){(0,s.a)(this,"_listStyleType",(i=>{switch(i){case"disc":case"circle":case"square":case"none":return this.isUl=!0,!0;case"decimal":case"decimal-leading-zero":case"lower-alpha":case"lower-latin":case"lower-greek":case"lower-roman":case"upper-alpha":case"upper-latin":case"upper-roman":return this.isUl=!1,!0;default:return!1}}),new Set(["https://www.w3schools.com/tags/tag_ol.asp"]),i)}validateHeading(i){(0,s.w)(this,"_heading",i)}validateLevel(i){(0,r.w)(this,i)}validateLinks(i){(0,o.w)("KolLinkGroup",this,i)}validateOrdered(i){(0,s.b)(this,"_ordered",i)}validateOrientation(i){(0,s.a)(this,"_orientation",(i=>"horizontal"===i||"vertical"===i),new Set(["Orientation {horizontal, vertical}"]),i,{defaultValue:"vertical"})}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateListStyleType(this._listStyleType),this.validateHeading(this._heading),this.validateLevel(this._level),this.validateLinks(this._links),this.validateOrientation(this._orientation)}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_listStyleType:["validateListStyleType"],_heading:["validateHeading"],_level:["validateLevel"],_links:["validateLinks"],_ordered:["validateOrdered"],_orientation:["validateOrientation"]}}};h.style={default:":host{--kolibri-border-color:#e0e0e0;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*{box-sizing:border-box;font-family:var(--kolibri-font-family)}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}a,button,input,select,textarea{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{background-color:transparent;border-width:0}h1,h2,h3,h4,h5,h6{font-size:1rem;margin:0}"}},3241:(i,e,t)=>{t.d(e,{w:()=>s});var a=t(2600),l=t(4999);const s=(i,e,t)=>{(0,l.d)(e,"_links",(i=>"object"==typeof i&&"string"==typeof i._label),t),(0,a.u)(i,e.state._links.length)}},9115:(i,e,t)=>{t.d(e,{w:()=>l});var a=t(4999);const l=(i,e)=>{(0,a.a)(i,"_level",(i=>"number"==typeof i&&1<=i&&i<=6),new Set(["Number {1, 2, 3, 4, 5, 6}"]),e,{defaultValue:1,required:!0})}}}]);