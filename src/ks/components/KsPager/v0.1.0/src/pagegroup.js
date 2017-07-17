// VERSION:'0.1.0'
require('../styles/style.css')
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var s=n[i]={exports:{},id:i,loaded:!1};return t[i].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var n={};return e.m=t,e.c=n,e.p="./dist/",e(0)}(function(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))switch(typeof t[e]){case"function":break;case"object":t[e]=function(e){var n=e.slice(1),i=t[e[0]];return function(t,e,s){i.apply(this,[t,e,s].concat(n))}}(t[e]);break;default:t[e]=t[t[e]]}return t}([function(t,e,n){t.exports=n(9)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{total:{type:Number,default:0},length:{type:Number,default:7},pages:{type:Number,default:7},current:{type:Number,default:1},page_current:{type:Number,default:1},size:{type:Number,default:10},page_size:{type:Number,default:10},onChange:Function}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),r=i(s);e.default={mixins:[r.default],data:function(){return{pages2:[]}},methods:{init:function(){this.totalLength=this.getTotalLength(this.total,this.size),this.pages2=this.buildPages(this.current,this.length,this.totalLength)},getTotalLength:function(t,e){var n=t%e;return(t-n)/e+(n&&1)},createPurePages:function(t,e,n){var i,s,r=[];e>n?(e=n,s=n,i=n-1):(i=e-1,s=t+i/2,t<=i/2&&(s=e),s>n&&(s=n));for(var o=i;o>=0;o--)r.push(s-o);return r},addFold:function(t,e){var n;return e=e||[],e=[].concat(e),n=e.length-1,e[0]>1&&(e[0]=1,e[1]="···"),e[n]<t&&(e[n]=t,e[n-1]="···"),e},buildPages:function(t,e,n){var i;return i=this.createPurePages(t,e,n),i=this.addFold(n,i)},emitClick:function(t){var e=t.target.innerHTML.trim();switch(!0){case"&lt;"===e:--this.current,this.current<1&&(this.current=1);break;case"&gt;"===e:++this.current,this.current=Math.min(this.current,this.totalLength);break;case"···"===e:break;case!isNaN(e):this.current=+e}},warn:function(){this.total&&this.length%2==0&&(this.length=this.length-1,console.error("分页中的参数 pages 或 length 请传入奇数 , 自动转为："+this.length))}},watch:{current:function(t){this.page_current=t,this.$emit("current_change",t),this.$emit("change",t),"function"==typeof this.onChange&&this.onChange(t),this.pages2=this.buildPages(t,this.length,this.totalLength)},size:function(){this.current=1},"total + size + length":function(){this.init()}},created:function(){this.warn(),this.init()}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),r=i(s),o=n(8),a=i(o);e.default={components:{page:a.default},mixins:[r.default],props:{sizes:{type:Array,default:function(){return[10,20,100]}}},data:function(){return{}},methods:{init:function(){this.size=this.sizes[0]},currentChange:function(t){"function"==typeof this.onChange&&this.onChange(t)},currentChange2:function(t){this.$emit("change",t)}},created:function(){this.init()},watch:{size:function(t){event&&event.preventDefault(),event&&event.stopPropagation(),this.$emit("change",t,"SIZE-CHANGE"),"function"==typeof this.onChange&&this.onChange(t,"SIZE-CHANGE")}}}},function(t,e){},4,function(t,e){t.exports=' <ul v-show=total class=KsPage cid=KsPage @click=emitClick($event)> <li :class="{\'disabled\':current == 1}">&lt;</li> <li v-for="i in pages2" track-by=$index :class="{\'active\':current == i}" v-text=i></li> <li :class="{\'disabled\':current == pages2[pages2.length-1]}">&gt;</li> </ul> '},function(t,e){t.exports=' <div class=KsPageGroup cid=KsPageGroup> <div class=KsPageGroup-statistical>共<span>{{total}}</span>条</div> <div class=ks-col> 每页 <select class=input v-model=size> <option v-for="i in sizes" v-bind:value=i>{{i}}</option> </select> 条 </div> <page class=ks-col-auto v-bind:current.sync=current v-bind:length=length v-bind:total=total v-bind:size=size v-bind:on-change=currentChange v-on:change=currentChange2></page> </div> '},function(t,e,n){var i,s;n(4),i=n(2),s=n(6),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,n){var i,s;n(5),i=n(3),s=n(7),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)}]))});