class t{constructor(){this.listeners={}}on(t,e,s){if(this.listeners[t]||(this.listeners[t]=new Set),this.listeners[t].add(e),null==s?void 0:s.once){const s=()=>{this.un(t,s),this.un(t,e)};return this.on(t,s),s}return()=>this.un(t,e)}un(t,e){var s;null===(s=this.listeners[t])||void 0===s||s.delete(e)}once(t,e){return this.on(t,e,{once:!0})}unAll(){this.listeners={}}emit(t,...e){this.listeners[t]&&this.listeners[t].forEach((t=>t(...e)))}}class e extends t{constructor(t){super(),this.subscriptions=[],this.options=t}onInit(){}_init(t){this.wavesurfer=t,this.onInit()}destroy(){this.emit("destroy"),this.subscriptions.forEach((t=>t()))}}const s={scale:.5,deltaThreshold:5};class i extends e{constructor(t){super(t||{}),this.wrapper=void 0,this.container=null,this.accumulatedDelta=0,this.onWheel=t=>{if(this.wavesurfer&&this.container&&!(Math.abs(t.deltaX)>=Math.abs(t.deltaY))&&(t.preventDefault(),this.accumulatedDelta+=-t.deltaY,0===this.options.deltaThreshold||Math.abs(this.accumulatedDelta)>=this.options.deltaThreshold)){const e=this.wavesurfer.getDuration(),s=this.wavesurfer.options.minPxPerSec,i=t.clientX,r=this.container.clientWidth,n=(this.wavesurfer.getScroll()+i)/s,o=this.calculateNewZoom(s,this.accumulatedDelta),a=r/o*(i/r);o*e<r?(this.wavesurfer.zoom(r/e),this.container.scrollLeft=0):(this.wavesurfer.zoom(o),this.container.scrollLeft=(n-a)*o),this.accumulatedDelta=0}},this.calculateNewZoom=(t,e)=>{const s=Math.max(0,t+e*this.options.scale);return void 0===this.options.maxZoom?s:Math.min(s,this.options.maxZoom)},this.options=Object.assign({},s,t)}static create(t){return new i(t)}onInit(){var t;this.wrapper=null===(t=this.wavesurfer)||void 0===t?void 0:t.getWrapper(),this.wrapper&&(this.container=this.wrapper.parentElement,this.wrapper.addEventListener("wheel",this.onWheel))}destroy(){this.wrapper&&this.wrapper.removeEventListener("wheel",this.onWheel),super.destroy()}}export{i as default};
