/*! For license information please see 6965.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_oss_th_ik_ja_belegerfassung=self.webpackChunk_public_oss_th_ik_ja_belegerfassung||[]).push([[6965],{6965:(e,i,t)=>{t.r(i),t.d(i,{kol_modal:()=>n});var o=t(1121),a=t(2600),l=t(7544),s=t(4999);const n=class{constructor(e){(0,o.r)(this,e),this.onKeyDown=e=>{e&&"Escape"===e.code&&(this._activeElement=null)},this._activeElement=void 0,this._ariaLabel=void 0,this._width="100%",this._on=void 0,this._show=!1,this.state={_activeElement:null,_ariaLabel:"…",_show:!1,_width:"100%"}}componentDidRender(){this.hostElement&&(this.state._activeElement?(0,l.d)().Modal.openModal(this.hostElement,this.state._activeElement):(0,l.d)().Modal.closeModal(this.hostElement))}disconnectedCallback(){this.hostElement&&(0,l.d)().Modal.closeModal(this.hostElement)}render(){return(0,o.h)(o.H,{ref:e=>{this.hostElement=e}},this.state._activeElement&&(0,o.h)("div",null,(0,o.h)("div",null,(0,o.h)("div",{style:{width:this.state._width},"aria-label":this.state._ariaLabel,"aria-modal":"true",role:"dialog",onKeyDown:this.onKeyDown,ref:e=>{e&&(e.setAttribute("tabindex","0"),setTimeout((()=>e.focus()),250))}},(0,o.h)("slot",null)))))}validateActiveElement(e){(0,s.a)(this,"_activeElement",(e=>"object"==typeof e||null===e),new Set(["HTMLElement","null"]),e,{defaultValue:null})}validateAriaLabel(e){(0,s.w)(this,"_ariaLabel",e,{required:!0})}validateOn(e){if("object"==typeof e&&null!==e){(0,a.f)("[KolTabs] Prüfen, wie man auch einen EventCallback einzeln ändern kann.");const i={};"function"!=typeof e.onClose&&!0!==e.onClose||(i.onClose=e.onClose),(0,s.s)(this,"_on",i)}}validateShow(e){(0,s.b)(this,"_show",e,{defaultValue:!1,hooks:{afterPatch:()=>{!1===this.state._show&&(this._activeElement=null)}}})}validateWidth(e){(0,s.w)(this,"_width",e,{defaultValue:"100%"})}componentWillLoad(){this.validateActiveElement(this._activeElement),this.validateAriaLabel(this._ariaLabel),this.validateOn(this._on),this.validateShow(this._show),this.validateWidth(this._width)}static get watchers(){return{_activeElement:["validateActiveElement"],_ariaLabel:["validateAriaLabel"],_on:["validateOn"],_show:["validateShow"],_width:["validateWidth"]}}};n.style={default:":host{--kolibri-border-color:#e0e0e0;--kolibri-border-radius:0.125rem;--kolibri-border-width:1px;--kolibri-color-error:#f44336;--kolibri-color-info:#2196f3;--kolibri-color-success:#4caf50;--kolibri-color-warning:#ff9800;--kolibri-color-primary:#3f51b5;--kolibri-color-secondary:#ff4081;--kolibri-color-normal:#9e9e9e;--kolibri-color-danger:#f44336;--kolibri-color-ghost:#f5f5f5;--kolibri-color-disabled:#bdbdbd;--kolibri-color-text:#222222;--kolibri-color-visited:#9c27b0;--kolibri-font-family:Verdana, Arial, Tahoma, Helvetica, sans-serif;--kolibri-font-size:16px;--kolibri-spacing:0.25rem}*{hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}*{box-sizing:border-box;font-family:var(--kolibri-font-family)}kol-icon{color:inherit}kol-span-wc{display:grid;place-items:center;width:100%}kol-span-wc>span{display:flex;gap:var(--kolibri-spacing);place-items:center}a,button,input,select,textarea{cursor:pointer}a.icon-only>kol-span-wc>span>span,button.icon-only>kol-span-wc>span>span{display:none}a{display:inline-flex;place-items:baseline}button{background-color:transparent;border-width:0}h1,h2,h3,h4,h5,h6{font-size:1rem;margin:0}:host>div{width:100%;height:100%;z-index:100;position:fixed;left:0;top:0;background-color:rgba(0, 0, 0, 0.33)}:host>div>div{height:100%;padding:calc(4 * var(--kolibri-spacing));position:absolute;width:100%}:host>div>div>div{position:relative;max-height:100%;max-width:100%;overflow-x:hidden;overflow-y:auto;left:50%;top:50%;transform:translate(-50%, -50%)}"}}}]);