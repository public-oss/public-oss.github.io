/*! For license information please see 5506.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_oss_kolibri_sudoku_solver=self.webpackChunk_public_oss_kolibri_sudoku_solver||[]).push([[5506],{8656:(t,e,a)=>{a.d(e,{v:()=>o});var n=a(2050);const o=(t,e)=>{(0,n.v)(t,"_align",e)}},2050:(t,e,a)=>{a.d(e,{v:()=>i});var n=a(3043);const o=new Set([...new Set(['"left", "right"']),...new Set(['"bottom", "top"'])]),i=(t,e,a)=>{(0,n.w)(t,e,(t=>"bottom"===t||"left"===t||"right"===t||"top"===t),o,a,{defaultValue:"top"})}},7624:(t,e,a)=>{a.d(e,{a:()=>d});var n=a(7352),o=a(3340);const i={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri","sort-descending":"Spalte {{column}} absteigend sortiert","sort-ascending":"Spalte {{column}} aufsteigend sortiert","sort-none":"Spalte {{column}} nicht sortiert","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen"},l={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","sort-descending":"sorted column {{column}} descending","sort-ascending":"sorted column {{column}} ascending","sort-none":"column {{column}} not sorted","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all"},s=t=>Object.keys(t).reduce(((e,a)=>(e[`kol-${a}`]=t[a],e)),{}),r=new Set([t=>t("en",s(l)),t=>t("de",s(i))]),d=(t,e)=>{const a=(0,n.g)();if(void 0===a)return(0,o.d)("[I18n] I18nService not available! Please call the global register function."),t;let i=a.translate(t,e);return i===t&&((0,o.d)("[I18n] Locales not initialized! Initialize default locales automatically."),r.forEach((t=>t(((t,e)=>(a.addResourceBundle(t,e),t))))),i=a.translate(t,e)),i}},5506:(t,e,a)=>{a.r(e),a.d(e,{kol_tabs:()=>c});var n=a(2323),o=a(7624),i=a(8656),l=a(2707),s=a(3340),r=a(379),d=a(3043);const c=class{constructor(t){(0,n.r)(this,t),this.onCreateLabel=`${(0,o.a)("kol-new")} …`,this.showCreateTab=!1,this.nextPossibleTabIndex=(t,e,a)=>{if(a>0){if(e+a<t.length)return t[e+a]._disabled?this.nextPossibleTabIndex(t,e,a+1):e+a}else if(a<0&&e+a>=0)return t[e+a]._disabled?this.nextPossibleTabIndex(t,e,a-1):e+a;return e},this.onKeyDown=t=>{const e=setTimeout((()=>{clearTimeout(e);let a=null;switch(t.key){case"ArrowRight":a=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,1);break;case"ArrowLeft":a=this.nextPossibleTabIndex(this.state._tabs,this.state._selected,-1)}null!==a&&this.onSelect(t,a,!0)}),250)},this.onClickSelect=(t,e)=>{this.onSelect(t,e,!0)},this.onMouseDown=t=>{t.preventDefault(),t.stopPropagation()},this.callbacks={onClick:this.onClickSelect,onMouseDown:this.onMouseDown},this.catchTabPanelHost=t=>{this.tabPanelHost=t},this.selectNextNotDisabledTab=(t,e,a=!0,n)=>{if(t>e.length-1&&(t=e.length-1),t<0&&(t=0),Array.isArray(e)&&e[t]&&e[t]._disabled){if(!0===a){if(t<e.length-1)return this.selectNextNotDisabledTab(t+1,e,!0,n||t);t=n||t,a=!1}if(!1===a){if(t>0)return this.selectNextNotDisabledTab(t-1,e,!1,n||t);(0,s.d)("[KolTabs] Alle Tabs sind deaktiviert und somit kann kein Tab angezeigt werden.")}}return t},this.syncSelectedAndTabs=(t,e,a,n)=>{let o,i;o="_selected"===n?t:this.state._selected,i="_tabs"===n?t:this.state._tabs,i.length>0&&e.set("_selected",this.selectNextNotDisabledTab(o,i))},this.handleTabPanels=()=>{var t,e,a;if(this.tabPanelHost instanceof HTMLDivElement)for(let n=this.tabPanelHost.children.length;n<this.state._tabs.length;n++){const o=document.createElement("div");o.setAttribute("aria-labelledby",`${this.state._label.replace(/\s/g,"-")}-tab-${n}`),o.setAttribute("id",`tabpanel-${n}`),o.setAttribute("role","tabpanel"),o.setAttribute("hidden","");const i=document.createElement("slot");i.setAttribute("name",`tabpanel-slot-${n}`),o.appendChild(i),this.tabPanelHost.appendChild(o),(null===(t=this.host)||void 0===t?void 0:t.children)instanceof HTMLCollection&&(null===(e=this.host)||void 0===e?void 0:e.children[n])&&(null===(a=this.host)||void 0===a||a.children[n].setAttribute("slot",`tabpanel-slot-${n}`))}},this.onCreate=t=>{var e,a;t.preventDefault(),t.stopPropagation(),"function"==typeof(null===(e=this.state._on)||void 0===e?void 0:e.onCreate)&&(null===(a=this.state._on)||void 0===a||a.onCreate(t))},this._align="top",this._label=void 0,this._on=void 0,this._selected=0,this._tabs=void 0,this.state={_align:"top",_label:"…",_selected:0,_tabs:[]}}renderButtonGroup(){return(0,n.h)("kol-button-group-wc",{role:"tablist","aria-label":this.state._label,onKeyDown:this.onKeyDown},this.state._tabs.map(((t,e)=>(0,n.h)("kol-button-wc",{_disabled:t._disabled,_icons:t._icons,_hideLabel:t._hideLabel,_label:t._label,_on:this.callbacks,_tabIndex:this.state._selected===e?0:-1,_tooltipAlign:t._tooltipAlign,_variant:this.state._selected===e?"custom":void 0,_customClass:this.state._selected===e?"selected":void 0,_ariaControls:`tabpanel-${e}`,_ariaSelected:this.state._selected===e,_id:`${this.state._label.replace(/\s/g,"-")}-tab-${e}`,_role:"tab",_value:e}))),this.showCreateTab&&(0,n.h)("kol-button-wc",{class:"create-button",_label:this.onCreateLabel,_on:{onClick:this.onCreate}}))}render(){return(0,n.h)(n.H,null,(0,n.h)("div",{ref:t=>{this.tabPanelsElement=t},class:{[`tabs-align-${this.state._align}`]:!0}},this.renderButtonGroup(),(0,n.h)("div",{ref:this.catchTabPanelHost})))}validateAlign(t){(0,i.v)(this,t)}validateLabel(t){(0,l.v)(this,t)}validateOn(t){if("object"==typeof t&&null!==t){(0,s.f)("[KolTabs] Prüfen, wie man auch einen EventCallback einzeln ändern kann.");const e={};"function"!=typeof t.onCreate&&"object"!=typeof t.onCreate||("object"==typeof t.onCreate?("string"==typeof t.onCreate.label&&t.onCreate.label.length>0?this.onCreateLabel=t.onCreate.label:r.L.debug("[KolTabs] Der Label-Text für Neu in {\n  onCreate: {\n    label: string (!),\n    callback: Function\n  }\n} ist nicht korrekt gesetzt."),"function"==typeof t.onCreate.callback?e.onCreate=t.onCreate.callback:r.L.debug("[KolTabs] Die onCreate-Callback-Funktion für Neu in {\n  onCreate: {\n    label: string,\n    callback: Function (!)\n  }\n} ist nicht korrekt gesetzt.")):e.onCreate=t.onCreate,this.showCreateTab="function"==typeof e.onCreate),"function"==typeof t.onSelect&&(e.onSelect=t.onSelect),(0,d.s)(this,"_on",e)}}validateSelected(t){(0,d.e)(this,"_selected",t,{hooks:{beforePatch:this.syncSelectedAndTabs}})}validateTabs(t){(0,d.c)(this,"_tabs",(t=>"object"==typeof t&&null!==t&&"string"==typeof t._label&&t._label.length>0),t,void 0,{hooks:{beforePatch:this.syncSelectedAndTabs}}),(0,s.c)("KolTabs",this.state._tabs.length)}componentWillLoad(){this.validateAlign(this._align),this.validateLabel(this._label),this.validateOn(this._on),this.validateSelected(this._selected),this.validateTabs(this._tabs)}componentDidRender(){if(this.handleTabPanels(),this.tabPanelHost instanceof HTMLDivElement)for(let t=0;t<this.tabPanelHost.children.length;t++)t!==this.state._selected?this.tabPanelHost.children[t].setAttribute("hidden",""):this.tabPanelHost.children[t].removeAttribute("hidden")}onSelect(t,e,a=!1){var n,o;this._selected=e,"function"==typeof(null===(n=this._on)||void 0===n?void 0:n.onSelect)&&(null===(o=this._on)||void 0===o||o.onSelect(t,e)),!0===a&&(this.selectedTimeout=setTimeout((()=>{if(clearTimeout(this.selectedTimeout),this.tabPanelsElement){const t=(0,d.k)(`button#${this.state._label.replace(/\s/g,"-")}-tab-${e}`,this.tabPanelsElement);null==t||t.focus()}}),250))}get host(){return(0,n.g)(this)}static get watchers(){return{_align:["validateAlign"],_label:["validateLabel"],_on:["validateOn"],_selected:["validateSelected"],_tabs:["validateTabs"]}}};c.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{font-family:Verdana;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}:host{display:block}kol-button-group-wc{display:inline-flex;flex-wrap:wrap}kol-button-group-wc button{border-bottom-color:transparent;border-bottom-style:solid;display:block}div.grid,div[role='tabpanel']{height:100%}:host>.tabs-align-right{display:grid;grid-template-columns:1fr auto}:host>.tabs-align-right kol-button-group-wc{display:grid;order:2}:host>.tabs-align-left{display:grid;grid-template-columns:auto 1fr}:host>.tabs-align-left kol-button-group-wc{display:grid;order:0}:host>.tabs-align-bottom{display:grid;grid-template-rows:1fr auto}:host>.tabs-align-bottom kol-button-group-wc{order:2}:host>.tabs-align-bottom kol-button-group-wc>div{display:flex}:host>.tabs-align-bottom>kol-button-group-wc>div>div:first-child{margin:0 1em 0 0}:host>.tabs-align-bottom>kol-button-group-wc>div>div{margin:0 1em}:host>.tabs-align-top{display:grid;grid-template-rows:auto 1fr}:host>.tabs-align-top kol-button-group-wc{order:0}:host>.tabs-align-top kol-button-group-wc>div{display:flex}:host>.tabs-align-top>kol-button-group-wc>div>div:first-child{margin:0 1em 0 0}:host>.tabs-align-top>kol-button-group-wc>div>div{margin:0 1em}:host>div{display:grid}:host>.tabs-align-left kol-button-group-wc,:host>.tabs-align-top kol-button-group-wc{order:0}:host>.tabs-align-bottom kol-button-group-wc,:host>.tabs-align-right kol-button-group-wc{order:1}:host>div.tabs-align-left kol-button-group-wc>div,:host>div.tabs-align-left kol-button-group-wc>div>div,:host>div.tabs-align-right kol-button-group-wc>div,:host>div.tabs-align-right kol-button-group-wc>div>div{display:grid}:host>div.tabs-align-left kol-button-group-wc>div>div kol-button-wc,:host>div.tabs-align-right kol-button-group-wc>div>div kol-button-wc{width:100%}:host>div.tabs-align-bottom kol-button-group-wc div,:host>div.tabs-align-top kol-button-group-wc div{display:flex;flex-wrap:wrap}"}},2707:(t,e,a)=>{a.d(e,{a:()=>h,c:()=>r,h:()=>s,v:()=>c});var n=a(3340),o=a(3043);const i=/[a-zA-Z0-9äöüÄÖÜß]/g,l=/^\d+$/;function s(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(i))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return l.test(t)}const d=new Set(["string"]),c=(t,e,a={})=>{(0,o.w)(t,"_label",(t=>"string"==typeof t),d,e,function(t){var e;return{hooks:{afterPatch:(e,a,o,i)=>{var l,d;"function"==typeof(null===(l=t.hooks)||void 0===l?void 0:l.afterPatch)&&(null===(d=t.hooks)||void 0===d||d.afterPatch(e,a,o,i)),"string"==typeof e&&!1===s(e,3)&&!1===r(e)&&(0,n.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,n.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}(a))},h=c}}]);