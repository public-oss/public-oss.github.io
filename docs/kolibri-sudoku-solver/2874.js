/*! For license information please see 2874.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_oss_kolibri_sudoku_solver=self.webpackChunk_public_oss_kolibri_sudoku_solver||[]).push([[2874],{2050:(t,e,a)=>{a.d(e,{v:()=>n});var i=a(3043);const s=new Set([...new Set(['"left", "right"']),...new Set(['"bottom", "top"'])]),n=(t,e,a)=>{(0,i.w)(t,e,(t=>"bottom"===t||"left"===t||"right"===t||"top"===t),s,a,{defaultValue:"top"})}},3802:(t,e,a)=>{a.d(e,{a:()=>s,v:()=>n});var i=a(3043);const s=(t,e)=>{(0,i.w)(t,"_variant",(t=>"primary"===t||"secondary"===t||"normal"===t||"danger"===t||"ghost"===t||"custom"===t),new Set(["KoliBriButtonVariant {primary, secondary, normal, danger, ghost, custom}"]),e,{defaultValue:"normal"})},n=(t,e)=>{(0,i.d)(t,"_customClass",e,{defaultValue:void 0})}},7624:(t,e,a)=>{a.d(e,{a:()=>h});var i=a(7352),s=a(3340);const n={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri","sort-descending":"Spalte {{column}} absteigend sortiert","sort-ascending":"Spalte {{column}} aufsteigend sortiert","sort-none":"Spalte {{column}} nicht sortiert","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen"},o={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","sort-descending":"sorted column {{column}} descending","sort-ascending":"sorted column {{column}} ascending","sort-none":"column {{column}} not sorted","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all"},l=t=>Object.keys(t).reduce(((e,a)=>(e[`kol-${a}`]=t[a],e)),{}),r=new Set([t=>t("en",l(o)),t=>t("de",l(n))]),h=(t,e)=>{const a=(0,i.g)();if(void 0===a)return(0,s.d)("[I18n] I18nService not available! Please call the global register function."),t;let n=a.translate(t,e);return n===t&&((0,s.d)("[I18n] Locales not initialized! Initialize default locales automatically."),r.forEach((t=>t(((t,e)=>(a.addResourceBundle(t,e),t))))),n=a.translate(t,e)),n}},2874:(t,e,a)=>{a.r(e),a.d(e,{kol_pagination:()=>b});var i=a(2323),s=a(7624),n=a(3802),o=a(2707),l=a(6508),r=a(379),h=a(3043),g=a(1211),c=a(4477);const u={left:"codicon codicon-debug-reverse-continue"},p={left:"codicon codicon-chevron-left"},d={right:"codicon codicon-chevron-right"},_={right:"codicon codicon-debug-continue"},b=class{constructor(t){(0,i.r)(this,t),this.nonce=(0,r.n)(),this.calcCount=(t,e=1)=>Math.ceil(t/e),this.getCount=()=>this.calcCount(this.state._max,this.state._pageSize),this.onClick=(t,e)=>{"function"==typeof this.state._on.onClick&&this.state._on.onClick(t,e),this.onChangePage(t,e)},this.onChangePage=(t,e)=>{const a=setTimeout((()=>{clearTimeout(a),"function"==typeof this.state._on.onChangePage&&this.state._on.onChangePage(t,e)}))},this.onChangePageSize=(t,e)=>{if("number"==typeof(e=parseInt(e[0]))&&e>0&&this._pageSize!==e){this._pageSize=e;const a=setTimeout((()=>{clearTimeout(a),"function"==typeof this.state._on.onChangePageSize&&this.state._on.onChangePageSize(t,this._pageSize)}))}},this.onGoToFirst={onClick:t=>{this.onClick(t,1)}},this.onGoToEnd={onClick:t=>{this.onClick(t,this.getCount())}},this.onGoBackward={onClick:t=>{this.onClick(t,this.state._page-1)}},this.onGoForward={onClick:t=>{this.onClick(t,this.state._page+1)}},this.beforePageSize=(t,e)=>{let a=e.has("_pageSize")?e.get("_pageSize"):this.state._pageSize;const i=e.has("_pageSizeOptions")?e.get("_pageSizeOptions"):this.state._pageSizeOptions;if(Array.isArray(i)&&i.length>0){const t=i.find((t=>t.value===a));a=void 0===t?i[0].value:t.value,e.set("_pageSize",a)}const s=e.has("_page")?e.get("_page"):this.state._page,n=e.has("_max")?e.get("_max"):this.state._max;this.syncPage(e,s,e.get("_pageSize"),n)},this.syncPage=(t,e,a,i)=>{if(i>0){const s=this.calcCount(i,a);s>0&&(e>s?(t.set("_page",s),this.onChangePage(c.S,s)):e<1&&(t.set("_page",1),this.onChangePage(c.S,1)))}},this.beforePageSizeOptions=(t,e)=>{const a=[];if(Array.isArray(t))for(const e of t)"number"==typeof e&&a.push({label:(0,s.a)("kol-page-per-site",{placeholders:{entries:`${e}`}}),value:e});e.set("_pageSizeOptions",a),this.beforePageSize(a,e)},this._boundaryCount=1,this._customClass=void 0,this._label=void 0,this._hasButtons=!0,this._page=void 0,this._pageSize=1,this._pageSizeOptions=[],this._on=void 0,this._siblingCount=1,this._tooltipAlign="top",this._max=void 0,this._variant="normal",this.state={_boundaryCount:1,_label:(0,s.a)("kol-pagination"),_hasButtons:{first:!0,last:!0,next:!0,previous:!0},_on:{onClick:()=>null},_page:0,_pageSize:1,_pageSizeOptions:[],_siblingCount:1,_max:0,_variant:"normal"}}render(){var t;let e=!1;const a=this.getCount(),n=Array.from(Array(a).keys()).map((t=>t+1)).map((t=>t<=this.state._boundaryCount||t>a-this.state._boundaryCount||t>=this.state._page-this.state._siblingCount&&t<=this.state._page+this.state._siblingCount?(e=!0,this.state._page===t?this.getSelectedPageButton(t):this.getUnselectedPageButton(t)):!0===e?(e=!1,(0,i.h)("li",null,(0,i.h)("span",{class:"separator",key:`${this.nonce}-el-${t}`,"aria-hidden":"true"}))):null));return(0,i.h)(i.H,null,(0,i.h)("nav",{"aria-label":this.state._label},(0,i.h)("ul",{class:"navigation-list"},this.state._hasButtons.first&&(0,i.h)("li",null,(0,i.h)("kol-button",{class:"first",exportparts:"icon",_customClass:this.state._customClass,_disabled:this.state._page<=1,_icons:u,_hideLabel:!0,_label:(0,s.a)("kol-page-first"),_on:this.onGoToFirst,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign})),this.state._hasButtons.previous&&(0,i.h)("li",null,(0,i.h)("kol-button",{class:"previous",exportparts:"icon",_customClass:this.state._customClass,_disabled:this.state._page<=1,_icons:p,_hideLabel:!0,_label:(0,s.a)("kol-page-back"),_on:this.onGoBackward,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign})),n,this.state._hasButtons.next&&(0,i.h)("li",null,(0,i.h)("kol-button",{class:"next",exportparts:"icon",_customClass:this.state._customClass,_disabled:a<=this.state._page,_icons:d,_hideLabel:!0,_label:(0,s.a)("kol-page-next"),_on:this.onGoForward,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign})),this.state._hasButtons.last&&(0,i.h)("li",null,(0,i.h)("kol-button",{class:"last",exportparts:"icon",_customClass:this.state._customClass,_disabled:a<=this.state._page,_icons:_,_hideLabel:!0,_label:(0,s.a)("kol-page-last"),_on:this.onGoToEnd,_variant:this.state._variant,_tooltipAlign:this.state._tooltipAlign})))),(null===(t=this.state._pageSizeOptions)||void 0===t?void 0:t.length)>0&&(0,i.h)("kol-select",{_hideLabel:!0,_id:`pagination-size-${this.nonce}`,_label:(0,s.a)("kol-entries-per-site"),_options:this.state._pageSizeOptions,_on:{onChange:this.onChangePageSize},_value:[this.state._pageSize]}))}getUnselectedPageButton(t){return(0,i.h)("li",null,(0,i.h)("kol-button",{exportparts:"icon",key:`${this.nonce}-${t}`,_customClass:this.state._customClass,_label:`${t}`,_on:{onClick:e=>{this.onClick(e,t)}},_variant:this.state._variant}))}getSelectedPageButton(t){return(0,i.h)("li",null,(0,i.h)("kol-button-wc",{class:"selected",key:`${this.nonce}-selected`,_customClass:this.state._customClass,_disabled:!0,_label:`${t}`,_variant:this.state._variant}))}validateBoundaryCount(t){(0,h.e)(this,"_boundaryCount",Math.max(0,null!=t?t:1))}validateCustomClass(t){(0,n.v)(this,t)}validateLabel(t,e,a=!1){a||(0,g.r)(this.state._label),(0,o.v)(this,t),(0,g.a)(this.state._label)}validateHasButtons(t){(0,h.w)(this,"_hasButtons",(t=>"boolean"==typeof t||"string"==typeof t||"object"==typeof t&&null!==t),new Set(["Boolean","PaginationHasButton"]),t,{hooks:{beforePatch:(t,e)=>{if("boolean"==typeof t)e.set("_hasButtons",{first:t,last:t,next:t,previous:t});else{if("string"==typeof t)try{t=(0,h.p)(t)}catch(t){e.delete("_hasButtons")}"object"==typeof t&&null!==t&&e.set("_hasButtons",Object.assign(Object.assign({},this.state._hasButtons),{first:"boolean"==typeof t.first?!0===t.first:this.state._hasButtons.first,last:"boolean"==typeof t.last?!0===t.last:this.state._hasButtons.last,next:"boolean"==typeof t.next?!0===t.next:this.state._hasButtons.next,previous:"boolean"==typeof t.previous?!0===t.previous:this.state._hasButtons.previous}))}}}})}validateOn(t){"object"==typeof t&&null!==t&&(this.state=Object.assign(Object.assign({},this.state),{_on:t}))}validatePage(t){(0,h.e)(this,"_page",t,{hooks:{beforePatch:(t,e)=>{const a=e.has("_pageSize")?e.get("_pageSize"):this.state._pageSize,i=e.has("_max")?e.get("_max"):this.state._max;this.syncPage(e,t,a,i)}}})}validatePageSize(t){(0,h.e)(this,"_pageSize",t,{hooks:{beforePatch:this.beforePageSize}})}validatePageSizeOptions(t){(0,h.c)(this,"_pageSizeOptions",(t=>"number"==typeof t),t,void 0,{hooks:{beforePatch:this.beforePageSizeOptions}})}validateSiblingCount(t){(0,h.e)(this,"_siblingCount",Math.max(0,null!=t?t:1))}validateMax(t){((t,e,a)=>{(0,h.e)(t,"_max",e,a)})(this,t,{hooks:{beforePatch:(t,e)=>{const a=e.has("_page")?e.get("_page"):this.state._page,i=e.has("_pageSize")?e.get("_pageSize"):this.state._pageSize;this.syncPage(e,a,i,t)}}})}validateTooltipAlign(t){(0,l.v)(this,t)}validateVariant(t){(0,n.a)(this,t)}componentWillLoad(){this.validateBoundaryCount(this._boundaryCount),this.validateCustomClass(this._customClass),this.validateHasButtons(this._hasButtons),this.validateLabel(this._label,void 0,!0),this.validateOn(this._on),this.validatePage(this._page),this.validatePageSize(this._pageSize),this.validatePageSizeOptions(this._pageSizeOptions),this.validateSiblingCount(this._siblingCount),this.validateTooltipAlign(this._tooltipAlign),this.validateMax(this._max),this.validateVariant(this._variant),this.validatePage(this._page)}disconnectedCallback(){(0,g.r)(this.state._label)}static get watchers(){return{_boundaryCount:["validateBoundaryCount"],_customClass:["validateCustomClass"],_label:["validateLabel"],_hasButtons:["validateHasButtons"],_on:["validateOn"],_page:["validatePage"],_pageSize:["validatePageSize"],_pageSizeOptions:["validatePageSizeOptions"],_siblingCount:["validateSiblingCount"],_max:["validateMax"],_tooltipAlign:["validateTooltipAlign"],_variant:["validateVariant"]}}};b.style={default:":host{--a11y-min-size:44px;font-size:inherit}*{font-family:Verdana;hyphens:auto;letter-spacing:inherit;word-break:break-word;word-spacing:inherit}[role='button'],button:not([role='link']),kol-input .input{min-height:var(--a11y-min-size);min-width:var(--a11y-min-size)}a,button,h1,h2,h3,h4,h5,h6,input,option,select,textarea{font-family:inherit;font-size:inherit}:is(a,button){background-color:transparent;border:none;margin:0;padding:0;width:100%;}:host{max-width:100%}*{box-sizing:border-box}kol-span-wc{display:grid;place-items:center}kol-span-wc>span{display:flex;place-items:center}a,button{cursor:pointer}button,input,option,select,textarea{font-family:inherit}.icon-only>kol-span-wc>span>span{display:none}.navigation-list{list-style:none}.separator:before{content:'•••'}"}},2707:(t,e,a)=>{a.d(e,{a:()=>c,c:()=>r,h:()=>l,v:()=>g});var i=a(3340),s=a(3043);const n=/[a-zA-Z0-9äöüÄÖÜß]/g,o=/^\d+$/;function l(t,e=1){return function(t){var e;return"string"==typeof t&&(null===(e=t.match(n))||void 0===e?void 0:e.length)||0}(t)>=e}function r(t){return o.test(t)}const h=new Set(["string"]),g=(t,e,a={})=>{(0,s.w)(t,"_label",(t=>"string"==typeof t),h,e,function(t){var e;return{hooks:{afterPatch:(e,a,s,n)=>{var o,h;"function"==typeof(null===(o=t.hooks)||void 0===o?void 0:o.afterPatch)&&(null===(h=t.hooks)||void 0===h||h.afterPatch(e,a,s,n)),"string"==typeof e&&!1===l(e,3)&&!1===r(e)&&(0,i.a)(`The heading or label ("${e}") is not accessible. A label should consist of at least three readable characters.`),"string"==typeof e&&e.length>80&&(0,i.u)("A heading or label should not be longer than 80 characters.")},beforePatch:null===(e=t.hooks)||void 0===e?void 0:e.beforePatch}}}(a))},c=g},6508:(t,e,a)=>{a.d(e,{v:()=>s});var i=a(2050);const s=(t,e)=>{(0,i.v)(t,"_tooltipAlign",e)}},1211:(t,e,a)=>{a.d(e,{a:()=>s,r:()=>n});const i=new Set;function s(t){i.has(t)?console.error(`There already is a nav element with the label "${t}"`):i.add(t)}function n(t){i.delete(t)}}}]);