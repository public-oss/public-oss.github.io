/*! For license information please see 6254.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_ui_designer=self.webpackChunk_public_ui_designer||[]).push([[6254],{86254:(t,a,i)=>{i.r(a),i.d(a,{kol_nav:()=>c});var e=i(84310),r=i(88134),o=i(56223),l=i(4787);const n=[],s=t=>{const a=n.indexOf(t);a>=0&&n.splice(a,1)},c=class{constructor(t){(0,e.r)(this,t),this.onClick=t=>{t._active=!1===t._active,this.state=Object.assign({},this.state)},this.hasActiveChild=t=>!!(Array.isArray(t._children)&&t._children.length>0)&&t._children.some(this.hasActiveChild),this.linkList=t=>(0,e.h)("ul",{class:{flex:0===t.deep&&"horizontal"===this.state._orientation},part:`nav ${this.state._orientation}`},t.links.map(((a,i)=>(0,e.h)("li",{key:i,part:`li ${0===t.deep?this.state._orientation:"vertical"}${a._active?" selected":""}${i<t.links.length-1?"":" last"}`},Array.isArray(a._children)&&a._children.length>0?(0,e.h)("div",{class:"h-full"},(0,e.h)("div",{class:{"h-full":!0}},(0,e.h)("kol-link-wc",{class:"block w-full h-full",exportparts:"icon,link,span"+(!0===a._active?",selected":""),_useCase:"nav",_ariaCurrent:!0===a._active&&this.state._ariaCurrentValue,_ariaLabel:!0===this.state._compact||!0===a._iconOnly?a._label:"undefined",_ariaExpanded:!0===a._active,_disabled:a._disabled,_icon:!0===this.state._collapsible?!0===a._active?"minus":"plus":"string"==typeof a._icon?a._icon:"broken",_iconOnly:!0===this.state._compact||!0===a._iconOnly,_part:!0===a._active?"selected":void 0,_underline:!1,onClick:()=>this.onClick(a)},a._label)),(!1===this._collapsible||!0===a._active)&&(0,e.h)("div",{class:{expanded:!0,active:!0===a._active,"active-child":this.hasActiveChild(a),"absolute ":0===t.deep&&"horizontal"===this.state._orientation}},(0,e.h)(this.linkList,{links:a._children,deep:t.deep+1}))):(0,e.h)("div",{class:{"h-full":!0,"text-center":!0===this.state._compact||!0===a._iconOnly}},(0,e.h)("kol-link-wc",{class:{"block w-full h-full":!0,active:!0===a._active},exportparts:"icon,link,span"+(!0===a._active?",selected":""),_ariaLabel:!0===this.state._compact||!0===a._iconOnly?a._label:"undefined",_href:a._href,_icon:"string"==typeof a._icon?a._icon:"broken","_icon-only":!0===this.state._compact||!0===a._iconOnly,_on:a._on,_part:!0===a._active?"selected":void 0,_selector:a._selector,_tooltipAlign:a._tooltipAlign,_target:a._target,_underline:!1,_useCase:"nav"},a._label)))))),this._ariaCurrentValue=!1,this._ariaLabel=void 0,this._collapsible=!1,this._compact=!1,this._hasCompactButton=!1,this._orientation="vertical",this._links=void 0,this._variant="primary",this.state={_ariaCurrentValue:!1,_ariaLabel:"…",_collapsible:!0,_hasCompactButton:!1,_links:[],_orientation:"vertical",_variant:"primary"}}render(){let t=this.state._hasCompactButton;return"horizontal"===this.state._orientation&&!0===this.state._hasCompactButton&&(t=!1,(0,r.d)("[KolNav] Wenn eine horizontale Navigation verwendet wird, kann die Option _hasCompactButton nicht aktiviert werden.")),(0,e.h)(e.H,null,(0,e.h)("div",{class:{[this.state._orientation]:!0,"inline-block":!0===this.state._compact,[this.state._variant]:!0}},(0,e.h)("nav",{"aria-label":this.state._ariaLabel,id:"nav",part:"nav"},(0,e.h)(this.linkList,{links:this.state._links,deep:0})),t&&(0,e.h)("div",{class:"mt-2 w-full text-center"},(0,e.h)("kol-button",{exportparts:"button,ghost",_ariaControls:"nav",_ariaExpanded:!0===this.state._compact,_ariaLabel:this.state._compact?"Navigation maximieren":"Navigation minimieren",_icon:this.state._compact?"rounded-double-right":"rounded-double-left",_iconOnly:!0,_label:this.state._compact?"Navigation maximieren":"Navigation minimieren",_on:{onClick:()=>{this.state=Object.assign(Object.assign({},this.state),{_compact:!1===this.state._compact})}},_tooltipAlign:"right",_variant:"ghost"}))))}validateAriaCurrentValue(t){(0,o.a)(this,"_ariaCurrentValue",(t=>!0===t||"date"===t||"location"===t||"page"===t||"step"===t||"time"===t),new Set(["boolean","String {data, location, page, step, time}"]),t)}validateAriaLabel(t){(0,o.w)(this,"_ariaLabel",t,{hooks:{afterPatch:()=>{n.includes(this.state._ariaLabel)&&(0,r.d)(`[KolNav] Das Aria-Label "${this.state._ariaLabel}" wurde für die Rolle Navigation mehrfach verwendet!`),n.push(this.state._ariaLabel)},beforePatch:()=>{s(this.state._ariaLabel)}},required:!0}),(0,r.a)(t)}validateCollapsible(t){(0,o.b)(this,"_collapsible",t)}validateCompact(t){(0,o.b)(this,"_compact",t)}validateHasCompactButton(t){(0,o.b)(this,"_hasCompactButton",t)}validateLinks(t){(0,l.w)("KolNav",this,t),(0,r.d)("[KolNav] Die Navigationsstruktur wird noch nicht rekursiv validiert.")}validateOrientation(t){(0,o.a)(this,"_orientation",(t=>"horizontal"===t||"vertical"===t),new Set(["Orientation {horizontal, vertical}"]),t,{defaultValue:"vertical"})}validateVariant(t){(0,o.a)(this,"_variant",(t=>"primary"===t||"secondary"===t),new Set(["KoliBriNavVariant {primary, secondary}"]),t,{defaultValue:"primary"})}componentWillLoad(){this.validateAriaLabel(this._ariaLabel),this.validateCollapsible(this._collapsible),this.validateCompact(this._compact),this.validateHasCompactButton(this._hasCompactButton),this.validateLinks(this._links),this.validateOrientation(this._orientation),this.validateVariant(this._variant)}disconnectedCallback(){s(this.state._ariaLabel)}static get watchers(){return{_ariaCurrentValue:["validateAriaCurrentValue"],_ariaLabel:["validateAriaLabel"],_collapsible:["validateCollapsible"],_compact:["validateCompact"],_hasCompactButton:["validateHasCompactButton"],_links:["validateLinks"],_orientation:["validateOrientation"],_variant:["validateVariant"]}}};c.style={default:'*,::before,::after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--kolibri-border-color)}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:var(--kolibri-color);--tw-ring-color:rgba(undefined, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}:-moz-focusring{outline:1px dotted ButtonText}:-moz-ui-invalid{box-shadow:none}::moz-focus-inner{border-style:none;padding:0}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=\'search\']{-webkit-appearance:textfield;outline-offset:-2px}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}b{font-weight:bolder}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;padding:0;line-height:inherit;color:inherit}button,select{text-transform:none}button,[type=\'button\'],[type=\'reset\'],[type=\'submit\']{-webkit-appearance:button}button{background-color:transparent;background-image:none}button,[role="button"]{cursor:pointer}code{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}fieldset{margin:0;padding:0}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";line-height:1.5}h1,p,h2,h3,h4,h5,h6{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}input::placeholder{opacity:1;color:#9ca3af}input::webkit-input-placeholder{opacity:1;color:#9ca3af}input::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder{opacity:1;color:#9ca3af}input::-ms-input-placeholder{opacity:1;color:#9ca3af}legend{padding:0}progress{vertical-align:baseline}small{font-size:80%}sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;top:-0.5em}svg{display:block;vertical-align:middle}table{text-indent:0;border-color:inherit;border-collapse:collapse}textarea{resize:vertical}textarea::placeholder{opacity:1;color:#9ca3af}textarea::webkit-input-placeholder{opacity:1;color:#9ca3af}textarea::-moz-placeholder{opacity:1;color:#9ca3af}textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}textarea::-ms-input-placeholder{opacity:1;color:#9ca3af}ul,ol{list-style:none;margin:0;padding:0}.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.bg-normal{background-color:var(--kolibri-color-normal)}.bg-white{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity))}.bg-spin-1{background-color:var(--kolibri-color-spin-1)}.bg-spin-2{background-color:var(--kolibri-color-spin-2)}.bg-spin-3{background-color:var(--kolibri-color-spin-3)}.rounded{border-radius:var(--kolibri-border-radius)}.border-1{border-width:1px}.cursor-pointer{cursor:pointer}.block{display:block}.inline-block{display:inline-block}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.inline-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex}.grid{display:-ms-grid;display:grid}.hidden{display:none}.flex-wrap{-ms-flex-wrap:wrap;-webkit-flex-wrap:wrap;flex-wrap:wrap}.items-center{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.content-center{-ms-flex-line-pack:center;-webkit-align-content:center;align-content:center}.float-left{float:left}.font-80{font-weight:80}.font-60{font-weight:60}.h-full{height:100%}.h-0{height:0px}.h-0\\.41c-2\\.42\\2c 0-4\\.82-1\\.57-4\\.82-3\\.58c0\\.05-0\\.98\\2c 0\\.43-1\\.91\\2c 1\\.07-2\\.65c0\\.3\\2c 0\\.05\\2c 0\\.61\\2c 0\\.09\\2c 0\\.92\\2c 0\\.09c1\\.1\\2c 0\\2c 1\\.69-0\\.58\\2c 1\\.74-1\\.16{height:0.29rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.leading-normal{line-height:1.5}.list-none{list-style-type:none}.list-disc{list-style-type:disc}.list-decimal{list-style-type:decimal}.mx-auto{margin-left:auto;margin-right:auto}.mr-1{margin-right:calc(1 * var(--kolibri-spacing))}.ml-1{margin-left:calc(1 * var(--kolibri-spacing))}.mr-2{margin-right:calc(2 * var(--kolibri-spacing))}.ml-2{margin-left:calc(2 * var(--kolibri-spacing))}.mb-1{margin-bottom:calc(1 * var(--kolibri-spacing))}.ml-6{margin-left:calc(6 * var(--kolibri-spacing))}.mt-2{margin-top:calc(2 * var(--kolibri-spacing))}.mt-4{margin-top:calc(4 * var(--kolibri-spacing))}.overflow-hidden{overflow:hidden}.overflow-y-visible{overflow-y:visible}.p-2{padding:calc(2 * var(--kolibri-spacing))}.p-4{padding:calc(4 * var(--kolibri-spacing))}.px{padding-left:1px;padding-right:1px}.py-2{padding-top:calc(2 * var(--kolibri-spacing));padding-bottom:calc(2 * var(--kolibri-spacing))}.pl-8{padding-left:2rem}.pb-2{padding-bottom:calc(2 * var(--kolibri-spacing))}.tab{-moz-tab-size:4;-o-tab-size:4;tab-size:4}.absolute{position:absolute}.relative{position:relative}.text-center{text-align:center}.hover\\:text-primary:hover{color:var(--kolibri-color-primary)}.text-normal{color:var(--kolibri-color-normal)}.underline{-webkit-text-decoration-line:underline;text-decoration-line:underline}.no-underline{text-decoration:none}.visible{visibility:visible}.w-full{width:100%}.w-4\\/5{width:80%}.z-50{z-index:50}.gap-1{grid-gap:calc(1 * var(--kolibri-spacing));gap:calc(1 * var(--kolibri-spacing))}.gap-2{grid-gap:calc(2 * var(--kolibri-spacing));gap:calc(2 * var(--kolibri-spacing))}.grid-flow-col{grid-auto-flow:column}.transform{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate:0;--tw-rotate-x:0;--tw-rotate-y:0;--tw-rotate-z:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;-webkit-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));-ms-transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z));transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotateZ(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z))}.animate{-webkit-animation-iteration-count:1;animation-iteration-count:1}.blur{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}:host *{-ms-hyphens:var(--kolibri-hyphens);-webkit-hyphens:var(--kolibri-hyphens);hyphens:var(--kolibri-hyphens);font-family:var(--kolibri-font-family);line-height:var(--kolibri-line-height);word-break:break-word}'}},4787:(t,a,i)=>{i.d(a,{w:()=>o});var e=i(88134),r=i(56223);const o=(t,a,i)=>{(0,r.c)(a,"_links",(t=>"object"==typeof t&&"string"==typeof t._label),i),(0,e.u)(t,a.state._links.length)}}}]);