/*! For license information please see 6676.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_oss_th_ik_ja_belegerfassung=self.webpackChunk_public_oss_th_ik_ja_belegerfassung||[]).push([[6676],{6676:(t,e,o)=>{o.r(e),o.d(e,{kol_tabs:()=>s});var i=o(8207),a=o(8019),r=o(353),n=o(8323);const l=new Set([...new Set(['"left", "right"']),...new Set(['"left", "right"'])]),s=class{constructor(t){(0,i.r)(this,t),this.hostElement=null,this.onCreateLabel="Neu …",this.showCreateTab=!1,this.nextPossibleTabIndex=(t,e,o)=>{if(o>0){if(e+o<t.length)return t[e+o]._disabled?this.nextPossibleTabIndex(t,e,o+1):e+o}else if(o<0&&e+o>=0)return t[e+o]._disabled?this.nextPossibleTabIndex(t,e,o-1):e+o;return e},this.onKeyDown=t=>{const e=setTimeout((()=>{clearTimeout(e);let o=null;switch(t.key){case"ArrowRight":o=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,1);break;case"ArrowLeft":o=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,-1)}null!==o&&this.onSelect(t,o,!0)}))},this.onClickSelect=(t,e)=>{this.onSelect(t,e,!0)},this.onMouseDown=t=>{t.stopPropagation()},this.catchHostElement=t=>{this.hostElement=t},this.selectNextNotDisabledTab=(t,e,o=!0,i)=>{if(t>e.length-1&&(t=e.length-1),t<0&&(t=0),Array.isArray(e)&&e[t]&&e[t]._disabled){if(!0===o){if(t<e.length-1)return this.selectNextNotDisabledTab(t+1,e,!0,i||t);t=i||t,o=!1}if(!1===o){if(t>0)return this.selectNextNotDisabledTab(t-1,e,!1,i||t);(0,a.d)("[KolTabs] Alle Tabs sind deaktiviert und somit kann kein Tab angezeigt werden.")}}return t},this.syncSelectedAndTabs=(t,e,o,i)=>{let a,r;a="_selected"===i?t:this.state._selected,r="_tabs"===i?t:this.state._tabs,r.length>0&&e.set("_selected",this.selectNextNotDisabledTab(a,r))},this.onCreate=t=>{var e,o;t.stopPropagation(),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onCreate)&&(null===(o=this.state._on)||void 0===o||o.onCreate(t))},this._ariaLabel=void 0,this._on=void 0,this._selected=0,this._tabs=void 0,this._tabsAlign="top",this.state={_ariaLabel:"…",_selected:0,_tabs:[],_tabsAlign:"top"}}renderButtonGroup(){return(0,i.h)("kol-button-group-wc",{role:"tablist","aria-label":this.state._ariaLabel,onKeyDown:this.onKeyDown},this.state._tabs.map(((t,e)=>(0,i.h)("div",{class:"inline-flex"},(0,i.h)("kol-button-wc",{class:"h-full",_ariaControls:`tabpanel-${e}`,_id:`tab-${e}`,_disabled:t._disabled,_icon:t._icon,_iconOnly:t._iconOnly,_label:t._label&&t._label,_on:{onClick:t=>this.onClickSelect(t,e),onMouseDown:this.onMouseDown},_tabIndex:this.state._selected===e?0:-1,_tooltipAlign:t._tooltipAlign,_variant:this.state._selected===e?"custom":void 0,_customClass:this.state._selected===e?"selected":void 0,"aria-selected":this.state._selected===e?"true":"false",role:"tab"})))),this.showCreateTab&&(0,i.h)("kol-button-wc",{class:"create-button",_label:this.onCreateLabel,_on:{onClick:this.onCreate}}))}render(){return(0,i.h)(i.H,{ref:this.catchHostElement},(0,i.h)("div",{ref:t=>{this.tabsElement=t},class:{[`tabs-align-${this.state._tabsAlign}`]:!0}},this.renderButtonGroup(),(0,i.h)("div",null,(0,i.h)("slot",null))))}validateAriaLabel(t){(0,n.w)(this,"_ariaLabel",t,{required:!0}),(0,a.a)(t)}validateOn(t){if("object"==typeof t&&null!==t){(0,a.f)("[KolTabs] Prüfen, wie man auch einen EventCallback einzeln ändern kann.");const e={};"function"!=typeof t.onCreate&&"object"!=typeof t.onCreate||("object"==typeof t.onCreate?("string"==typeof t.onCreate.label&&t.onCreate.label.length>0?this.onCreateLabel=t.onCreate.label:r.L.debug("[KolTabs] Der Label-Text für Neu in {\n  onCreate: {\n    label: string (!),\n    callback: Function\n  }\n} ist nicht korrekt gesetzt."),"function"==typeof t.onCreate.callback?e.onCreate=t.onCreate.callback:r.L.debug("[KolTabs] Die onCreate-Callback-Funktion für Neu in {\n  onCreate: {\n    label: string,\n    callback: Function (!)\n  }\n} ist nicht korrekt gesetzt.")):e.onCreate=t.onCreate,this.showCreateTab="function"==typeof e.onCreate),"function"==typeof t.onSelect&&(e.onSelect=t.onSelect),(0,n.s)(this,"_on",e)}}validateSelected(t){(0,n.f)(this,"_selected",t,{hooks:{beforePatch:this.syncSelectedAndTabs}})}validateTabs(t){(0,n.c)(this,"_tabs",(t=>"object"==typeof t&&null!==t&&"string"==typeof t._label&&t._label.length>0),t,void 0,{hooks:{beforePatch:this.syncSelectedAndTabs}}),(0,a.u)("KolTabs",this.state._tabs.length)}validateTabsAlign(t){((t,e,o)=>{(0,n.a)(t,"_tabsAlign",(t=>"bottom"===t||"left"===t||"right"===t||"top"===t),l,o)})(this,0,t)}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateOn(this._on),this.validateSelected(this._selected),this.validateTabs(this._tabs),this.validateTabsAlign(this._tabsAlign)}componentDidRender(){var t;if(this.hostElement instanceof HTMLElement){this.htmlElements=null===(t=this.hostElement)||void 0===t?void 0:t.children;for(let t=0;t<this.htmlElements.length;t++)this.htmlElements[t].setAttribute("aria-labelledby",`tab-${t}`),this.htmlElements[t].setAttribute("id",`tabpanel-${t}`),this.htmlElements[t].setAttribute("role","tabpanel"),t!==this.state._selected?this.htmlElements[t].setAttribute("hidden",""):this.htmlElements[t].removeAttribute("hidden")}}onSelect(t,e,o=!1){var i,a;this._selected=e,"function"==typeof(null===(i=this._on)||void 0===i?void 0:i.onSelect)&&(null===(a=this._on)||void 0===a||a.onSelect(t,e)),!0===o&&(this.selectedTimeout=setTimeout((()=>{if(clearTimeout(this.selectedTimeout),this.tabsElement instanceof HTMLElement){const t=(0,n.k)(`button#tab-${e}`,this.tabsElement);null==t||t.focus()}})))}static get watchers(){return{_ariaLabel:["validateAriaLabel"],_on:["validateOn"],_selected:["validateSelected"],_tabs:["validateTabs"],_tabsAlign:["validateTabsAlign"]}}};s.style={default:'*,::before,::after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--kolibri-border-color)}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:var(--kolibri-color);--tw-ring-color:rgba(undefined, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}::moz-focus-inner{border-style:none;padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=\'search\']{-webkit-appearance:textfield;outline-offset:-2px}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}button,select{text-transform:none}button,[type=\'button\'],[type=\'reset\'],[type=\'submit\']{-webkit-appearance:button}button{background-color:transparent;background-image:none}button,[role="button"]{cursor:pointer}code{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}fieldset{margin:0;padding:0}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}h1,p,h2,h3,h4,h5,h6{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}input,button,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;padding:0;line-height:inherit;color:inherit}input::placeholder{opacity:1;color:#9ca3af}input::webkit-input-placeholder{opacity:1;color:#9ca3af}input::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder{opacity:1;color:#9ca3af}input::-ms-input-placeholder{opacity:1;color:#9ca3af}legend{padding:0}progress{vertical-align:baseline}small{font-size:80%}svg{display:block;vertical-align:middle}table{text-indent:0;border-color:inherit;border-collapse:collapse}textarea{resize:vertical}textarea::placeholder{opacity:1;color:#9ca3af}textarea::webkit-input-placeholder{opacity:1;color:#9ca3af}textarea::-moz-placeholder{opacity:1;color:#9ca3af}textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}textarea::-ms-input-placeholder{opacity:1;color:#9ca3af}ul,ol{list-style:none;margin:0;padding:0}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.bg-normal{background-color:var(--kolibri-color-normal)}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.bg-spin-1{background-color:var(--kolibri-color-spin-1)}.bg-spin-2{background-color:var(--kolibri-color-spin-2)}.bg-spin-3{background-color:var(--kolibri-color-spin-3)}.rounded{border-radius:var(--kolibri-border-radius)}.border-1{border-width:1px}.cursor-pointer{cursor:pointer}.block{display:block}.inline-block{display:inline-block}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.inline-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex}.table{display:table}.grid{display:-ms-grid;display:grid}.hidden{display:none}.flex-wrap{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.items-center{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.content-center{-ms-flex-line-pack:center;-webkit-align-content:center;align-content:center}.float-left{float:left}.h-full{height:100%}.h-0{height:0px}.h-0\\.41c-2\\.42\\2c 0-4\\.82-1\\.57-4\\.82-3\\.58c0\\.05-0\\.98\\2c 0\\.43-1\\.91\\2c 1\\.07-2\\.65c0\\.3\\2c 0\\.05\\2c 0\\.61\\2c 0\\.09\\2c 0\\.92\\2c 0\\.09c1\\.1\\2c 0\\2c 1\\.69-0\\.58\\2c 1\\.74-1\\.16{height:0.29rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.leading-normal{line-height:1.5}.list-none{list-style-type:none}.list-disc{list-style-type:disc}.list-decimal{list-style-type:decimal}.mx-auto{margin-left:auto;margin-right:auto}.mb-1{margin-bottom:calc(1 * var(--kolibri-spacing))}.mr-2{margin-right:calc(2 * var(--kolibri-spacing))}.ml-2{margin-left:calc(2 * var(--kolibri-spacing))}.mt-2{margin-top:calc(2 * var(--kolibri-spacing))}.mt-4{margin-top:calc(4 * var(--kolibri-spacing))}.outline{outline-style:solid}.overflow-y-visible{overflow-y:visible}.px{padding-left:1px;padding-right:1px}.pl-8{padding-left:2rem}.tab{-moz-tab-size:4;-o-tab-size:4;tab-size:4}.absolute{position:absolute}.text-center{text-align:center}.text-normal{color:var(--kolibri-color-normal)}.hover\\:text-primary:hover{color:var(--kolibri-color-primary)}.italic{font-style:italic}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.indent{text-indent:1.5rem}.visible{visibility:visible}.w-full{width:100%}.w-4\\/5{width:80%}.z-50{z-index:50}.gap-1{grid-gap:calc(1 * var(--kolibri-spacing));gap:calc(1 * var(--kolibri-spacing))}.grid-flow-col{grid-auto-flow:column}.animate{-webkit-animation-iteration-count:1;animation-iteration-count:1}.filter{--tw-blur:var(--tw-empty, );--tw-brightness:var(--tw-empty, );--tw-contrast:var(--tw-empty, );--tw-grayscale:var(--tw-empty, );--tw-hue-rotate:var(--tw-empty, );--tw-invert:var(--tw-empty, );--tw-saturate:var(--tw-empty, );--tw-sepia:var(--tw-empty, );--tw-drop-shadow:var(--tw-empty, );-webkit-filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}:host *{-ms-hyphens:var(--kolibri-hyphens);-webkit-hyphens:var(--kolibri-hyphens);hyphens:var(--kolibri-hyphens);font-family:var(--kolibri-font-family);line-height:var(--kolibri-line-height);word-break:break-word}:host{display:inline-flex}:host>*{color:inherit;width:inherit;word-spacing:inherit}:host button{display:grid;font-family:var(--kolibri-font-family);letter-spacing:inherit;width:inherit;word-spacing:inherit;border-radius:var(--kolibri-border-radius);align-items:center !important;justify-content:center !important;border-width:1px;padding:calc(2 * var(--kolibri-spacing))}:host button kol-icon,:host button .kol-icon{width:1.5em;height:1.5em;display:inline-block}:host button.primary{background-color:var(--kolibri-color-primary);border-color:transparent;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}:host button.primary:hover,:host button.primary:focus{border-color:var(--kolibri-color-primary);color:var(--kolibri-color-primary)}:host button.secondary{background-color:var(--kolibri-color-secondary);border-color:transparent;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}:host button.secondary:hover,:host button.secondary:focus{border-color:var(--kolibri-color-secondary);color:var(--kolibri-color-secondary)}:host button.normal{background-color:var(--kolibri-color-normal);border-color:transparent;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}:host button.normal:hover,:host button.normal:focus{border-color:var(--kolibri-color-normal);color:var(--kolibri-color-normal)}:host button.danger{background-color:var(--kolibri-color-danger);border-color:transparent;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}:host button.danger:hover,:host button.danger:focus{border-color:var(--kolibri-color-danger);color:var(--kolibri-color-danger)}:host button.ghost{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));border-color:var(--kolibri-color-ghost);color:var(--kolibri-color-ghost)}:host button.ghost:hover,:host button.ghost:focus{background-color:var(--kolibri-color-ghost);border-color:transparent;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}:host button:disabled{--tw-bg-opacity:1;background-color:rgba(209, 213, 219, var(--tw-bg-opacity));border-color:transparent;cursor:not-allowed;--tw-text-opacity:1;color:rgba(55, 65, 81, var(--tw-text-opacity))}:host button:disabled:hover,:host button:disabled:focus{--tw-bg-opacity:1;background-color:rgba(55, 65, 81, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(209, 213, 219, var(--tw-text-opacity))}:host button[aria-selected=true],:host button:focus{border-bottom-color:var(--kolibri-color-accent) !important;border-bottom-width:6px !important}:host .close-button{font-size:50%;height:fit-content;left:-3em;position:relative;top:0.25em}'}}}]);