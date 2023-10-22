import{U as s,O as i,C as o}from"./index-294842fb.js";/*!
 * KoliBri - The accessible HTML-Standard
 */const r=class{constructor(t){s(this,t),this.button=n=>i("kol-button-wc",Object.assign({},n)),this.link=n=>i("kol-link-wc",Object.assign({},n)),this.text=n=>i("kol-span-wc",Object.assign({},n)),this._link=void 0}render(){return i(o,null,this.renderContent())}renderContent(){if(this._link._on){const t=this._link;return this.button(t)}if(this._link._href){const t=this._link;return this.link(t)}{const t=this._link;return this.text(t)}}};export{r as kol_button_link_text_switch};
