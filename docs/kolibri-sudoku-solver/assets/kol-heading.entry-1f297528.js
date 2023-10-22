import{U as n,O as e}from"./index-294842fb.js";/*!
 * KoliBri - The accessible HTML-Standard
 */const t=":host{--a11y-min-size:44px;font-size:inherit}*{font-family:Verdana;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host>kol-heading-wc{display:grid}:host>kol-heading-wc>.overline{order:1}:host>kol-heading-wc>.headline{order:2}",o=class{constructor(i){n(this,i),this._label=void 0,this._level=void 0,this._secondaryHeadline=void 0}render(){return e("kol-heading-wc",{_label:this._label,_level:this._level,_secondaryHeadline:this._secondaryHeadline},e("slot",null))}};o.style={default:t};export{o as kol_heading};
