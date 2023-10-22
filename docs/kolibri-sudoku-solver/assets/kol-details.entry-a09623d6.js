import{U as l,O as i,C as h,A as r}from"./index-294842fb.js";import{f as d}from"./label-0d258cd5-df9469c6.js";import{a as m}from"./open-713ddcdc-899ae59a.js";import{o as p}from"./events-2bb1065b-884d1e5b.js";import{$ as c}from"./prop.validators-125a3282-9e7c3ce9.js";import"./a11y.tipps-583a2096-ea796d66.js";/*!
 * KoliBri - The accessible HTML-Standard
 */class u{constructor(e,n,s){this.detailsElement=e,this.summaryElement=n,this.contentElement=s,this.isClosing=!1,this.isExpanding=!1,this.summaryElement.addEventListener("click",this.handleSummaryClick.bind(this))}handleSummaryClick(e){e.preventDefault(),this.detailsElement.style.overflow="hidden",this.isClosing||!this.detailsElement.open?this.open():(this.isExpanding||this.detailsElement.open)&&this.collapse()}open(){var e;this.detailsElement.style.height=`${(e=this.detailsElement.offsetHeight)!==null&&e!==void 0?e:0}px`,this.detailsElement.open=!0,window.requestAnimationFrame(this.expand.bind(this))}expand(){this.isExpanding=!0,this.animateDetailsHeight(this.summaryElement.offsetHeight+this.contentElement.offsetHeight,"expand")}collapse(){this.isClosing=!0,this.animateDetailsHeight(this.summaryElement.offsetHeight,"collapse")}animateDetailsHeight(e,n){const s=this.detailsElement.offsetHeight;this.animation&&this.animation.cancel(),this.animation=this.detailsElement.animate({height:[`${s}px`,`${e}px`]},{duration:matchMedia("(prefers-reduced-motion)").matches?0:250,easing:"ease-out"}),this.animation.addEventListener("finish",()=>{this.onAnimationFinish()},{once:!0}),this.animation.addEventListener("cancel",()=>{n==="expand"?this.isExpanding=!1:this.isClosing=!1},{once:!0})}onAnimationFinish(){this.detailsElement.open=this.isExpanding,this.animation=void 0,this.isClosing=!1,this.isExpanding=!1,this.detailsElement.style.removeProperty("height"),this.detailsElement.style.removeProperty("overview")}}const g=":host{--a11y-min-size:44px;font-size:inherit}*{font-family:Verdana;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}details{display:grid}details>summary{cursor:pointer;display:flex;place-items:center}details>summary>span{border-bottom-color:grey;border-bottom-style:solid}details>summary:focus>span,details>summary:hover>span,details[open]>summary>span{border-bottom-color:#000}details>kol-indented-text{margin:0.25em 0 0 0.5em}",f=class{constructor(t){l(this,t),this.handleToggle=e=>{clearTimeout(this.toggleTimeout),this.toggleTimeout=setTimeout(()=>{var n,s,o,a;!!(!((n=this.detailsElement)===null||n===void 0)&&n.open)!==this.state._open&&(this._open=!!(!((s=this.detailsElement)===null||s===void 0)&&s.open),p("toggle",this.host,this._open),typeof((o=this.state._on)===null||o===void 0?void 0:o.onToggle)=="function"&&((a=this.state._on)===null||a===void 0||a.onToggle(e,this._open)))},25)},this._label=void 0,this._on=void 0,this._open=!1,this.state={_label:"…",_on:{}}}render(){return i(h,null,i("details",{ref:t=>{this.detailsElement=t},onToggle:this.handleToggle},i("summary",{ref:t=>this.summaryElement=t},this.state._open?i("kol-icon",{_label:"",_icons:"codicon codicon-chevron-down"}):i("kol-icon",{_label:"",_icons:"codicon codicon-chevron-right"}),i("span",null,this.state._label)),i("div",{class:"content",ref:t=>this.contentElement=t},i("kol-indented-text",null,i("slot",null)))))}validateLabel(t){d(this,t)}validateOn(t){typeof t=="object"&&t!==null&&typeof t.onToggle=="function"&&c(this,"_on",t)}validateOpen(t){m(this,t)}componentWillLoad(){this.validateLabel(this._label),this.validateOn(this._on),this.validateOpen(this._open)}componentDidLoad(){if(this.detailsElement&&this.summaryElement&&this.contentElement){const t=new u(this.detailsElement,this.summaryElement,this.contentElement);this.state._open&&t.open()}}get host(){return r(this)}static get watchers(){return{_label:["validateLabel"],_on:["validateOn"],_open:["validateOpen"]}}};f.style={default:g};export{f as kol_details};
