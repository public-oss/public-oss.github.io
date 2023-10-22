/*! For license information please see 2246.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_oss_kolibri_sudoku_solver=self.webpackChunk_public_oss_kolibri_sudoku_solver||[]).push([[2246],{3340:(e,t,i)=>{i.d(t,{a:()=>s,b:()=>_,c:()=>p,d:()=>a,e:()=>g,f:()=>h,g:()=>l,u:()=>u});var n=i(379);const o=new Set,s=(e,t)=>{(!1===o.has(e)||(null==t?void 0:t.force))&&(o.add(e),n.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"✋ a11y",overwriteStyle:"; background-color: #09f"}))},r=new Set,a=(e,t)=>{(!1===r.has(e)||(null==t?void 0:t.force))&&(r.add(e),n.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"💻 dev",overwriteStyle:"; background-color: #f09"}))},l=(e,t)=>{(!1===r.has(e)||(null==t?void 0:t.force))&&(r.add(e),n.L.warn([e].concat((null==t?void 0:t.details)||[]),{classifier:"💻 dev",overwriteStyle:"; background-color: #f09"}))},d=new Set,h=(e,t=!1,i)=>{(!1===d.has(e)||(null==i?void 0:i.force))&&(d.add(e),e+=!0===t?" ✅":"",n.L.debug([e].concat((null==i?void 0:i.details)||[]),{classifier:"🌟 feature",overwriteStyle:"; background-color: #309"}))};a("Wir freuen uns über jedes Feedback, Kommentare, Screenshots oder Demo-Links von einer auf KoliBri-basierenden Anwendung (kolibri@itzbund.de). Vielen Dank!");const c=new Set,u=(e,t)=>{(!1===c.has(e)||(null==t?void 0:t.force))&&(c.add(e),n.L.debug([e].concat((null==t?void 0:t.details)||[]),{classifier:"📑 ui/ux",overwriteStyle:"; background-color: #060;"}))},g=()=>{s('"Disabled" schränkt die Zugänglichkeit und Sichtbarkeit ein. Wir empfehlen aus Sicht der Barrierefreiheit readonly- statt disabled-Attribut zu verwenden.\n- https://uxdesign.cc/is-it-ok-to-grey-out-disabled-buttons-8afa74a0fae')},_=e=>{"string"==typeof e&&""!==e||s("Manche Strukturelemente, wie bspw. der nav-Tag, können mehrfach in einer Webseite verwendet werden. Damit die gleichnamigen Strukturelemente voneinander unterschieden werden können, ist es erforderlich ein Aria-Label zu setzen.\n- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role#accessibility_concerns")},p=(e,t=8)=>{t>7&&u(`[${e}] Innerhalb von Navigationsstrukturen wird empfohlen nicht mehr als 7 Menüpunkte zu verwenden.\n\nLinks:\n- https://de.ryte.com/wiki/Millersche_Zahl\n- https://de.wikipedia.org/wiki/Millersche_Zahl`)}},7624:(e,t,i)=>{i.d(t,{a:()=>d});var n=i(7352),o=i(3340);const s={error:"Fehler",warning:"Warnung",info:"Hinweis",success:"Erfolg",message:"Nachricht",close:"Schließen","form-description":"Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben.",of:"von",characters:"Zeichen",new:"Neu","no-entries":"Es sind keine Einträge vorhanden.","change-order":"Sortierung von {{colLabel}} ändern","action-running":"Aktion wird ausgeführt...","action-done":"Aktion abgeschlossen",pagination:"Paginierung","page-first":"Direkt zur ersten Seite","page-back":"Eine Seite zurück","page-next":"Eine Seite weiter","page-last":"Direkt zur letzten Seite","entries-per-site":"Einträge pro Seite","page-current":"Seite {{page}}","page-selected":"Seite {{page}} ist ausgewählt","page-per-site":"{{entries}} Einträge pro Seite","logo-description":"Logo {{orgShort}}. Bundesadler mit Flaggenstab und Schriftzug {{orgLong}}","open-link-in-tab":"Der Link wird in einem neuen Tab geöffnet.","kolibri-logo":"Logo von KoliBri","sort-descending":"Spalte {{column}} absteigend sortiert","sort-ascending":"Spalte {{column}} aufsteigend sortiert","sort-none":"Spalte {{column}} nicht sortiert","table-pagination-label":"Paginierung für die Tabelle {{label}}","avatar-alt":"Avatar von {{name}}","toast-close-all":"Alle schließen"},r={error:"Error",warning:"Warning",info:"Note",success:"Success",message:"Message",close:"Close","form-description":"Form fields marked with an asterisk (*) are mandatory.",of:"of",characters:"characters",new:"New","no-entries":"No entries available.","change-order":"Change order of {{colLabel}}","action-running":"Action is running...","action-done":"Action done",pagination:"Pagination","page-first":"Directly to the first page","page-back":"One page back","page-next":"One page further","page-last":"Directly to the last page","entries-per-site":"Entries per page","page-current":"Page {{page}}","page-selected":"Page {{page}} is selected","page-per-site":"{{entries}} entries per page","logo-description":"Logo {{orgShort}}. Federal eagle with flag staff and lettering {{orgLong}}","open-link-in-tab":"The link will open in a new tab.","kolibri-logo":"KoliBri logo","sort-descending":"sorted column {{column}} descending","sort-ascending":"sorted column {{column}} ascending","sort-none":"column {{column}} not sorted","table-pagination-label":"Pagination for table {{label}}","avatar-alt":"Avatar of {{name}}","toast-close-all":"Close all"},a=e=>Object.keys(e).reduce(((t,i)=>(t[`kol-${i}`]=e[i],t)),{}),l=new Set([e=>e("en",a(r)),e=>e("de",a(s))]),d=(e,t)=>{const i=(0,n.g)();if(void 0===i)return(0,o.d)("[I18n] I18nService not available! Please call the global register function."),e;let s=i.translate(e,t);return s===e&&((0,o.d)("[I18n] Locales not initialized! Initialize default locales automatically."),l.forEach((e=>e(((e,t)=>(i.addResourceBundle(e,t),e))))),s=i.translate(e,t)),s}},2246:(e,t,i)=>{i.r(t),i.d(t,{kol_input:()=>r});var n=i(2323),o=i(7624),s=i(4477);const r=class{constructor(e){(0,n.r)(this,e),this.slotName="input",this.catchInputSlot=e=>{(0,s.h)(this.host,e,this.slotName)},this._alert=!0,this._currentLength=void 0,this._disabled=!1,this._error="",this._hasCounter=!1,this._hideError=!1,this._hideLabel=!1,this._hint="",this._icons=void 0,this._id=void 0,this._label=void 0,this._maxLength=void 0,this._readOnly=!1,this._renderNoLabel=!1,this._required=!1,this._slotName=void 0,this._suggestions=void 0,this._smartButton=void 0,this._tooltipAlign="top",this._touched=!1}componentWillRender(){this.slotName=this._slotName?this._slotName:"input"}getIconStyles(e){return e&&"object"==typeof e&&e.style?e.style:{}}render(){var e,t,i,r,a,l,d,h;const c="string"==typeof this._error&&this._error.length>0&&!0===this._touched,u=(0,s.s)(this._label),g="string"==typeof this._hint&&this._hint.length>0,_=!u&&this._hideLabel;return(0,n.h)(n.H,{class:{disabled:!0===this._disabled,error:!0===c,"read-only":!0===this._readOnly,required:!0===this._required,touched:!0===this._touched,"hidden-error":!0===this._hideError}},(0,n.h)("label",{id:_?void 0:`${this._id}-label`,hidden:_,htmlFor:this._id},(0,n.h)("span",null,(0,n.h)("slot",{name:"label"}))),g&&(0,n.h)("span",{class:"hint",id:`${this._id}-hint`},this._hint),(0,n.h)("div",{class:{input:!0,"icon-left":"object"==typeof(null===(e=this._icons)||void 0===e?void 0:e.left),"icon-right":"object"==typeof(null===(t=this._icons)||void 0===t?void 0:t.right)}},(null===(i=this._icons)||void 0===i?void 0:i.left)&&(0,n.h)("kol-icon",{_label:"",_icons:(null===(r=this._icons)||void 0===r?void 0:r.left).icon,style:this.getIconStyles(null===(a=this._icons)||void 0===a?void 0:a.left)}),(0,n.h)("div",{ref:this.catchInputSlot,id:this.slotName,class:"input-slot"}),"object"==typeof this._smartButton&&null!==this._smartButton&&(0,n.h)("kol-button-wc",{_customClass:this._smartButton._customClass,_disabled:this._smartButton._disabled,_icons:this._smartButton._icons,_hideLabel:!0,_id:this._smartButton._id,_label:this._smartButton._label,_on:this._smartButton._on,_tooltipAlign:this._smartButton._tooltipAlign,_variant:this._smartButton._variant}),(null===(l=this._icons)||void 0===l?void 0:l.right)&&(0,n.h)("kol-icon",{_label:"",_icons:(null===(d=this._icons)||void 0===d?void 0:d.right).icon,style:this.getIconStyles(null===(h=this._icons)||void 0===h?void 0:h.right)})),_&&(0,n.h)("kol-tooltip-wc",{"aria-hidden":"true",class:"input-tooltip",_align:this._tooltipAlign,_id:this._hideLabel?`${this._id}-label`:void 0,_label:this._label}),c&&(0,n.h)("kol-alert",{_alert:this._alert,_type:"error",_variant:"msg","aria-hidden":this._hideError,class:"error"+(this._hideError?" hidden":""),id:`${this._id}-error`},this._error),Array.isArray(this._suggestions)&&this._suggestions.length>0&&(0,n.h)("datalist",{id:`${this._id}-list`},this._suggestions.map((e=>(0,n.h)("option",{value:e})))),this._hasCounter&&(0,n.h)("span",{class:"counter","aria-atomic":"true","aria-live":"polite"},this._currentLength,this._maxLength&&(0,n.h)(n.F,null,(0,n.h)("span",{"aria-label":(0,o.a)("kol-of"),role:"img"},"/"),this._maxLength)," ",(0,n.h)("span",null,(0,o.a)("kol-characters"))))}get host(){return(0,n.g)(this)}}}}]);