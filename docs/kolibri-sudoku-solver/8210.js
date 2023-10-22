/*! For license information please see 8210.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_oss_kolibri_sudoku_solver=self.webpackChunk_public_oss_kolibri_sudoku_solver||[]).push([[8210],{2050:(t,e,i)=>{i.d(e,{v:()=>l});var o=i(3043);const n=new Set([...new Set(['"left", "right"']),...new Set(['"bottom", "top"'])]),l=(t,e,i)=>{(0,o.w)(t,e,(t=>"bottom"===t||"left"===t||"right"===t||"top"===t),n,i,{defaultValue:"top"})}},8210:(t,e,i)=>{i.r(e),i.d(e,{kol_abbr:()=>s});var o=i(2323),n=i(2707),l=i(6508),a=i(379);const s=class{constructor(t){(0,o.r)(this,t),this.nonce=(0,a.n)(),this._label=void 0,this._tooltipAlign="top",this.state={_label:"…",_tooltipAlign:"top"}}render(){return(0,o.h)(o.H,null,(0,o.h)("abbr",{"aria-labelledby":this.nonce,role:"definition",tabindex:"0",title:this.state._label},(0,o.h)("span",{title:""},(0,o.h)("slot",null))),(0,o.h)("kol-tooltip-wc",{_align:this.state._tooltipAlign,_id:this.nonce,_label:this.state._label}))}validateLabel(t){(0,n.v)(this,t)}validateTooltipAlign(t){(0,l.v)(this,t)}componentWillLoad(){this.validateLabel(this._label),this.validateTooltipAlign(this._tooltipAlign)}static get watchers(){return{_label:["validateLabel"],_tooltipAlign:["validateTooltipAlign"]}}};s.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{font-family:Verdana;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host>abbr{cursor:help}"}},2707:(t,e,i)=>{i.d(e,{a:()=>p,c:()=>r,h:()=>s,v:()=>c});var o=i(3340),n=i(3043);const l=/[a-zA-Z0-9äöüÄÖÜß]/g,a=/^\d+$/;function s(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(l))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return a.test(t)}const h=new Set(["string"]),c=(t,e,i={})=>{(0,n.w)(t,"_label",(t=>"string"==typeof t),h,e,function(t){var e;return{hooks:{afterPatch:(e,i,n,l)=>{var a,h;"function"==typeof(null===(a=t.hooks)||void 0===a?void 0:a.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(e,i,n,l)),"string"==typeof e&&!1===s(e,3)&&!1===r(e)&&(0,o.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,o.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}(i))},p=c},6508:(t,e,i)=>{i.d(e,{v:()=>n});var o=i(2050);const n=(t,e)=>{(0,o.v)(t,"_tooltipAlign",e)}}}]);