/*! For license information please see 448.js.LICENSE.txt */
"use strict";(self.webpackChunk_public_oss_th_ik_ja_belegerfassung=self.webpackChunk_public_oss_th_ik_ja_belegerfassung||[]).push([[448],{448:(t,e,a)=>{a.r(e),a.d(e,{kol_progress:()=>l});var s=a(5259),i=a(4493);const l=class{constructor(t){(0,s.r)(this,t),this._max=void 0,this._type=void 0,this._unit="%",this._value=void 0,this.state={_max:100,_type:"bar",_unit:"%",_value:0,_liveValue:0}}render(){return(0,s.h)(s.H,null,"cycle"===(t=this.state)._type?(0,s.h)("svg",{width:"100",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},(0,s.h)("circle",{fill:"none",stroke:"#efefef",cx:"6px",cy:"6px",r:"5px"}),(0,s.h)("circle",{class:"cycle","stroke-linecap":"round","stroke-dasharray":`${Math.round(t._value/t._max*32)}px 32px`,fill:"none",stroke:"#0075ff",cx:"6px",cy:"6px",r:"5px"})):(0,s.h)("svg",{width:"100",viewBox:"0 0 24 2",xmlns:"http://www.w3.org/2000/svg"},(0,s.h)("line",{"stroke-width":"2",x1:"1","stroke-linecap":"round",y1:"1",x2:"23",y2:"1",fill:"#efefef",stroke:"#efefef"}),(0,s.h)("line",{class:"bar","stroke-width":"2",x1:"1","stroke-linecap":"round",y1:"1",x2:`${1+Math.round(t._value/t._max*22)}`,y2:"1",fill:"#0075ff",stroke:"#0075ff"})),(0,s.h)("progress",{"aria-busy":this.state._value<this.state._max?"true":"false",max:this.state._max,value:this.state._value}),(0,s.h)("span",{"aria-live":"polite","aria-relevant":"removals text"},this.state._liveValue," von ",this.state._max," ",this.state._unit));var t}validateMax(t){"number"!=typeof t&&(t=100),(0,i.f)(this,"_max",t,{required:!0})}validateType(t){"cycle"===t||(t="bar"),this.state=Object.assign(Object.assign({},this.state),{_type:t})}validateUnit(t){(0,i.w)(this,"_unit",t)}validateValue(t){"number"!=typeof t&&(t=0),(0,i.f)(this,"_value",t,{required:!0})}componentWillLoad(){this.validateMax(this._max),this.validateType(this._type),this.validateUnit(this._unit),this.validateValue(this._value),this.interval=setInterval((()=>{this.state._liveValue!==this.state._value&&(this.state=Object.assign(Object.assign({},this.state),{_liveValue:this.state._value}))}),5e3)}disconnectedCallback(){clearInterval(this.interval)}static get watchers(){return{_max:["validateMax"],_type:["validateType"],_unit:["validateUnit"],_value:["validateValue"]}}};l.style={default:":host progress,:host span{display:block;height:0px;overflow:hidden;width:0px}:host .bar,:host .cycle{transition:all 0.5s ease-in-out 0s;transition-property:all;transition-duration:0.5s;transition-timing-function:ease-in-out;transition-delay:0.25s}:host .cycle{transform-origin:50% 50%;transform:rotate(-90deg)}"}}}]);