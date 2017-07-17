webpackJsonp([62],{

/***/ 393:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(394);

/***/ },

/***/ 394:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(395)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/v1.0.0-31.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(396)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/v1.0.0-31.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 395:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template><section><h3>KsTips</h3>
	// <blockquote>
	// <p>author 张杰、张大柱<br>
	// 一个悬浮的弹出提示</p>
	// </blockquote>
	// <p><br><br><br></p>
	// <p></p>
	// <ks-tips>
	//     <span slot="title" class="tiptxt">hover我</span>
	//     <div slot="content" style="width:200px">
	//       稳住，我们能赢！
	//     </div>
	// </ks-tips>
	// <p><br><br><br></p>
	// <p></p>
	// <ks-tips placement="right">
	//     <span slot="title" class="tiptxt">hover我（right）</span>
	//     <div slot="content">
	//       猥琐发育,别浪！
	//     </div>
	// </ks-tips>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-tips</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tiptxt"</span>&gt;</span>hover我<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"content"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width:200px"</span>&gt;</span>
	//       稳住，我们能赢！
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">ks-tips</span>&gt;</span>
	//
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-tips</span>
	//     <span class="hljs-attr">placement</span>=<span class="hljs-string">"right"</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tiptxt"</span>&gt;</span>hover我（right）<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"content"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width:200px"</span>&gt;</span>
	//       猥琐发育,别浪！
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">ks-tips</span>&gt;</span>
	// </code></pre>
	// <p><br><br><br></p>
	// <p></p>
	// <ks-tips type="click" v-bind:placement="placement" v-bind:show="showClick" v-bind:disabled="false" v-on:change="change">
	//     <span slot="title" class="tiptxt">点击我</span>
	//     <div slot="content">
	//       <span>标题</span>
	//       <div style="width:200px">
	//         <h3>请选择性别</h3>
	//         <ks-button v-on:click="showClick=false">关闭</ks-button>
	//         </div>
	//       </div>
	// </ks-tips>
	// <ks-button v-on:click="direct('left')">left</ks-button>
	// <ks-button v-on:click="direct('top')">top</ks-button>
	// <ks-button v-on:click="direct('right')">right</ks-button>
	// <ks-button v-on:click="direct('bottom')">bottom</ks-button>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-tips</span>
	//     <span class="hljs-attr">type</span>=<span class="hljs-string">"click"</span>
	//     <span class="hljs-attr">v-bind:placement</span>=<span class="hljs-string">"placement"</span> 
	//     <span class="hljs-attr">v-bind:show</span> = <span class="hljs-string">"showClick"</span>
	//     <span class="hljs-attr">v-bind:disabled</span>=<span class="hljs-string">"false"</span>
	//     <span class="hljs-attr">v-on:change</span>=<span class="hljs-string">"change"</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tiptxt"</span>&gt;</span>点击我<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"content"</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>标题<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	//       <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width:200px"</span>&gt;</span>
	//         <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>请选择性别<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
	//         <span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">v-on:click</span>=<span class="hljs-string">"showClick=false"</span>&gt;</span>关闭<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span>
	//         <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
	//       <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">ks-tips</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">v-on:click</span>=<span class="hljs-string">"direct('left')"</span>&gt;</span>left<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">v-on:click</span>=<span class="hljs-string">"direct('top')"</span> &gt;</span>top<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">v-on:click</span>=<span class="hljs-string">"direct('right')"</span>&gt;</span>right<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">v-on:click</span>=<span class="hljs-string">"direct('bottom')"</span>&gt;</span>bottom<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span>
	//
	// </code></pre>
	// <pre class="ks-hljs"><code>
	// &lt;script&gt;
	//   <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
	//     data () {
	//       <span class="hljs-keyword">return</span> {
	//         <span class="hljs-attr">placement</span>:<span class="hljs-string">'bottom-start'</span>,
	//         <span class="hljs-attr">showHover</span>:<span class="hljs-literal">false</span>,
	//         <span class="hljs-attr">showClick</span>:<span class="hljs-literal">false</span>
	//       }
	//     },
	//     <span class="hljs-attr">methods</span>:{
	//       direct(placement){
	//         <span class="hljs-keyword">this</span>.placement = placement
	//       },
	//       change(val){
	//         <span class="hljs-keyword">this</span>.showClick = val
	//       }
	//     }
	//   }
	// &lt;<span class="hljs-regexp">/script&gt;
	// </span></code></pre>
	// <h3>API</h3>
	// <div class="table-striped"><table class="table-entity"><thead>
	// <tr>
	// <th>参数</th>
	// <th>说明</th>
	// <th>接口类型</th>
	// <th>类型</th>
	// <th>可选值</th>
	// <th>默认值</th>
	// </tr>
	// </thead>
	// <tbody>
	// <tr>
	// <td>type</td>
	// <td>触发类型</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">非必填</code></td>
	// <td><code class="ks-code-inline">hover</code></td>
	// </tr>
	// <tr>
	// <td>show</td>
	// <td>展开Tip</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">非必填</code></td>
	// <td><code class="ks-code-inline">false</code></td>
	// </tr>
	// <tr>
	// <td>placement</td>
	// <td>展示方位</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">/(top|bottom|left|right)(-start|-end)?/</code></td>
	// <td><code class="ks-code-inline">bottom</code></td>
	// </tr>
	// <tr>
	// <td>disabled</td>
	// <td>禁止弹出</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">非必填</code></td>
	// <td><code class="ks-code-inline">false</code></td>
	// </tr>
	// <tr>
	// <td>change</td>
	// <td>show变化时触发（展示隐藏）</td>
	// <td>props</td>
	// <td>Event</td>
	// <td><code class="ks-code-inline">非必填</code></td>
	// <td></td>
	// </tr>
	// </tbody>
	// </table></div>
	// </section></template>
	//
	// <script>
	exports.default = {
	  kscomponents: ['KsButton_v0', 'KsTips_v1'],
	  data: function data() {

	    return {
	      placement: 'bottom-start',
	      showHover: false,
	      showClick: false
	    };
	  },

	  methods: {
	    direct: function direct(placement) {
	      this.placement = placement;
	    },
	    change: function change(val) {
	      this.showClick = val;
	    }
	  }
	};
	// </script>

/***/ },

/***/ 396:
/***/ function(module, exports) {

	module.exports = "<section><h3>KsTips</h3>\n<blockquote>\n<p>author 张杰、张大柱<br>\n一个悬浮的弹出提示</p>\n</blockquote>\n<p><br><br><br></p>\n<p></p>\n<ks-tips>\n    <span slot=\"title\" class=\"tiptxt\">hover我</span>\n    <div slot=\"content\" style=\"width:200px\">\n      稳住，我们能赢！\n    </div>\n</ks-tips>\n<p><br><br><br></p>\n<p></p>\n<ks-tips placement=\"right\">\n    <span slot=\"title\" class=\"tiptxt\">hover我（right）</span>\n    <div slot=\"content\">\n      猥琐发育,别浪！\n    </div>\n</ks-tips>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-tips</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">slot</span>=<span class=\"hljs-string\">\"title\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tiptxt\"</span>&gt;</span>hover我<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">slot</span>=<span class=\"hljs-string\">\"content\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"width:200px\"</span>&gt;</span>\n      稳住，我们能赢！\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-tips</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-tips</span>\n    <span class=\"hljs-attr\">placement</span>=<span class=\"hljs-string\">\"right\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">slot</span>=<span class=\"hljs-string\">\"title\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tiptxt\"</span>&gt;</span>hover我（right）<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">slot</span>=<span class=\"hljs-string\">\"content\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"width:200px\"</span>&gt;</span>\n      猥琐发育,别浪！\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-tips</span>&gt;</span>\n</code></pre>\n<p><br><br><br></p>\n<p></p>\n<ks-tips type=\"click\" v-bind:placement=\"placement\" v-bind:show=\"showClick\" v-bind:disabled=\"false\" v-on:change=\"change\">\n    <span slot=\"title\" class=\"tiptxt\">点击我</span>\n    <div slot=\"content\">\n      <span>标题</span>\n      <div style=\"width:200px\">\n        <h3>请选择性别</h3>\n        <ks-button v-on:click=\"showClick=false\">关闭</ks-button>\n        </div>\n      </div>\n</ks-tips>\n<ks-button v-on:click=\"direct('left')\">left</ks-button>\n<ks-button v-on:click=\"direct('top')\">top</ks-button>\n<ks-button v-on:click=\"direct('right')\">right</ks-button>\n<ks-button v-on:click=\"direct('bottom')\">bottom</ks-button>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-tips</span>\n    <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"click\"</span>\n    <span class=\"hljs-attr\">v-bind:placement</span>=<span class=\"hljs-string\">\"placement\"</span> \n    <span class=\"hljs-attr\">v-bind:show</span> = <span class=\"hljs-string\">\"showClick\"</span>\n    <span class=\"hljs-attr\">v-bind:disabled</span>=<span class=\"hljs-string\">\"false\"</span>\n    <span class=\"hljs-attr\">v-on:change</span>=<span class=\"hljs-string\">\"change\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">slot</span>=<span class=\"hljs-string\">\"title\"</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"tiptxt\"</span>&gt;</span>点击我<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">slot</span>=<span class=\"hljs-string\">\"content\"</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span>&gt;</span>标题<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"width:200px\"</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>请选择性别<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-button</span> <span class=\"hljs-attr\">v-on:click</span>=<span class=\"hljs-string\">\"showClick=false\"</span>&gt;</span>关闭<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-button</span>&gt;</span>\n        <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n      <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-tips</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-button</span> <span class=\"hljs-attr\">v-on:click</span>=<span class=\"hljs-string\">\"direct('left')\"</span>&gt;</span>left<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-button</span> <span class=\"hljs-attr\">v-on:click</span>=<span class=\"hljs-string\">\"direct('top')\"</span> &gt;</span>top<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-button</span> <span class=\"hljs-attr\">v-on:click</span>=<span class=\"hljs-string\">\"direct('right')\"</span>&gt;</span>right<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-button</span> <span class=\"hljs-attr\">v-on:click</span>=<span class=\"hljs-string\">\"direct('bottom')\"</span>&gt;</span>bottom<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-button</span>&gt;</span>\n\n</code></pre>\n<pre class=\"ks-hljs\"><code>\n&lt;script&gt;\n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span>{\n    data () {\n      <span class=\"hljs-keyword\">return</span> {\n        <span class=\"hljs-attr\">placement</span>:<span class=\"hljs-string\">'bottom-start'</span>,\n        <span class=\"hljs-attr\">showHover</span>:<span class=\"hljs-literal\">false</span>,\n        <span class=\"hljs-attr\">showClick</span>:<span class=\"hljs-literal\">false</span>\n      }\n    },\n    <span class=\"hljs-attr\">methods</span>:{\n      direct(placement){\n        <span class=\"hljs-keyword\">this</span>.placement = placement\n      },\n      change(val){\n        <span class=\"hljs-keyword\">this</span>.showClick = val\n      }\n    }\n  }\n&lt;<span class=\"hljs-regexp\">/script&gt;\n</span></code></pre>\n<h3>API</h3>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>触发类型</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td><code class=\"ks-code-inline\">hover</code></td>\n</tr>\n<tr>\n<td>show</td>\n<td>展开Tip</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td><code class=\"ks-code-inline\">false</code></td>\n</tr>\n<tr>\n<td>placement</td>\n<td>展示方位</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">/(top|bottom|left|right)(-start|-end)?/</code></td>\n<td><code class=\"ks-code-inline\">bottom</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>禁止弹出</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td><code class=\"ks-code-inline\">false</code></td>\n</tr>\n<tr>\n<td>change</td>\n<td>show变化时触发（展示隐藏）</td>\n<td>props</td>\n<td>Event</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td></td>\n</tr>\n</tbody>\n</table></div>\n</section>";

/***/ }

});