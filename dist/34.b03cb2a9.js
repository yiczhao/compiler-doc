webpackJsonp([34],{

/***/ 125:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(126);

/***/ },

/***/ 126:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(127)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/page-9.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(128)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/page-9.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 127:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template><section><h2>KsPager</h2>
	// <blockquote>
	// <p>常用的日期组件</p>
	// </blockquote>
	// <hr>
	// <h3>基础使用 （分类）</h3>
	// <h3>page</h3>
	// <p>page_current:{{page_current}}<br>
	// <ks-page :current.sync="page_current" :length="7" :total="100" :size="13" :on-change="change"></ks-page></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-page</span> 
	//     <span class="hljs-attr">v-bind:current.sync</span>=<span class="hljs-string">"page_current"</span> 
	//     <span class="hljs-attr">v-bind:length</span>=<span class="hljs-string">"7"</span>
	//     <span class="hljs-attr">v-bind:total</span>=<span class="hljs-string">"100"</span>
	//     <span class="hljs-attr">v-bind:size</span>=<span class="hljs-string">"13"</span>
	//     <span class="hljs-attr">v-bind:on-change</span>=<span class="hljs-string">"change"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-page</span>&gt;</span>
	// </code></pre>
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
	// <td>current</td>
	// <td>当前选中的页数</td>
	// <td>props</td>
	// <td>Number</td>
	// <td>无</td>
	// <td>无</td>
	// </tr>
	// <tr>
	// <td>length</td>
	// <td>展示的页数长度（<code class="ks-code-inline">奇数</code>）</td>
	// <td>props</td>
	// <td>Number</td>
	// <td><code class="ks-code-inline">非必填</code></td>
	// <td>7</td>
	// </tr>
	// <tr>
	// <td>total</td>
	// <td>总条数</td>
	// <td>props</td>
	// <td>Number</td>
	// <td>无</td>
	// <td>无</td>
	// </tr>
	// <tr>
	// <td>size</td>
	// <td>每页展示条数</td>
	// <td>props</td>
	// <td>Number</td>
	// <td><code class="ks-code-inline">非必填</code></td>
	// <td>10</td>
	// </tr>
	// <tr>
	// <td>on-change</td>
	// <td>分页改变时调用</td>
	// <td>props</td>
	// <td>Function</td>
	// <td><code class="ks-code-inline">非必填</code></td>
	// <td>无</td>
	// </tr>
	// </tbody>
	// </table></div><h3>pageGroup</h3>
	// <p><ks-page-group :current.sync="page_current2" :length="7" :total="100" :sizes="[10,17,30]" :on-change="change2"></ks-page-group></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-page-group</span>
	//     <span class="hljs-attr">:current.sync</span>=<span class="hljs-string">"page_current2"</span> 
	//     <span class="hljs-attr">:length</span>=<span class="hljs-string">"7"</span>
	//     <span class="hljs-attr">:total</span>=<span class="hljs-string">"100"</span>
	//     <span class="hljs-attr">:sizes</span>=<span class="hljs-string">"[10,17,30]"</span>
	//     <span class="hljs-attr">:on-change</span>=<span class="hljs-string">"change2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-page-group</span>&gt;</span>
	// </code></pre>
	// <p><code class="ks-code-inline">比 ks-page 组件多的接口</code></p>
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
	// <td>sizes</td>
	// <td>页面展示的数据条数</td>
	// <td>props</td>
	// <td>Array</td>
	// <td><code class="ks-code-inline">非必填</code></td>
	// <td>[10,20,100]</td>
	// </tr>
	// <tr>
	// <td>on-change</td>
	// <td>分页改变时调用（val,type<code class="ks-code-inline">sizes变化输出SIZE-CHANGE</code>）</td>
	// <td>props</td>
	// <td>Function</td>
	// <td><code class="ks-code-inline">非必填</code></td>
	// <td>无</td>
	// </tr>
	// </tbody>
	// </table></div><pre class="ks-hljs"><code>&lt;script lang=<span class="hljs-string">"babel"</span>&gt;
	//     <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//         data(){
	//             <span class="hljs-keyword">return</span> {
	//                 <span class="hljs-attr">page_current</span>:<span class="hljs-number">4</span>,
	//                 <span class="hljs-attr">page_current2</span>:<span class="hljs-number">4</span>
	//             }
	//         },
	//         <span class="hljs-attr">methods</span>:{
	//             change(val){
	//                 <span class="hljs-built_in">console</span>.log(val);
	//             },
	//             change2(val,type){
	//                 <span class="hljs-built_in">console</span>.log(val,type);
	//             }
	//
	//
	//         }
	//
	//     }
	// &lt;<span class="hljs-regexp">/script&gt;
	// </span></code></pre>
	//
	// </section></template>
	//
	// <script lang="babel">
	exports.default = {
	    data: function data() {
	        return {
	            page_current: 4,
	            page_current2: 4
	        };
	    },

	    methods: {
	        change: function change(val) {
	            console.log(val);
	        },
	        change2: function change2(val, type) {
	            console.log(val, type);
	        }
	    }

	};
	// </script>

/***/ },

/***/ 128:
/***/ function(module, exports) {

	module.exports = "<section><h2>KsPager</h2>\n<blockquote>\n<p>常用的日期组件</p>\n</blockquote>\n<hr>\n<h3>基础使用 （分类）</h3>\n<h3>page</h3>\n<p>page_current:{{page_current}}<br>\n<ks-page :page_current.sync=\"page_current\" :pages=\"7\" :total=\"100\" :page_size=\"13\" v-on:current_change=\"current_change\"></ks-page></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-page</span> \n    <span class=\"hljs-attr\">:page_current.sync</span>=<span class=\"hljs-string\">\"page_current\"</span> \n    <span class=\"hljs-attr\">:pages</span>=<span class=\"hljs-string\">\"7\"</span>\n    <span class=\"hljs-attr\">:total</span>=<span class=\"hljs-string\">\"100\"</span>\n    <span class=\"hljs-attr\">:page_size</span>=<span class=\"hljs-string\">\"13\"</span>\n    <span class=\"hljs-attr\">v-on:current_change</span>=<span class=\"hljs-string\">\"current_change\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-page</span>&gt;</span>\n</code></pre>\n<h3>pageGroup</h3>\n<p><ks-page-group :page_current.sync=\"page_current\" :pages=\"7\" :total=\"100\" :page_sizes=\"[10,17,30]\" v-on:size_change=\"size_change\" v-on:current_change=\"current_change\"></ks-page-group></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-page-group</span>\n    <span class=\"hljs-attr\">:page_current</span>=<span class=\"hljs-string\">\"page_current\"</span> \n    <span class=\"hljs-attr\">:pages</span>=<span class=\"hljs-string\">\"7\"</span>\n    <span class=\"hljs-attr\">:total</span>=<span class=\"hljs-string\">\"100\"</span>\n    <span class=\"hljs-attr\">:page_sizes</span>=<span class=\"hljs-string\">\"[10,17,30]\"</span>\n    <span class=\"hljs-attr\">v-on:size_change</span>=<span class=\"hljs-string\">\"size_change\"</span>\n    <span class=\"hljs-attr\">v-on:current_change</span>=<span class=\"hljs-string\">\"current_change\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-page-group</span>&gt;</span>\n</code></pre>\n<pre class=\"ks-hljs\"><code>&lt;script lang=<span class=\"hljs-string\">\"babel\"</span>&gt;\n    <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n        data(){\n            <span class=\"hljs-keyword\">return</span> {\n                <span class=\"hljs-attr\">page_current</span>:<span class=\"hljs-number\">1</span>\n            }\n        },\n        <span class=\"hljs-attr\">methods</span>:{\n            current_change(val){\n                \n            },\n            size_change(val){},\n           \n        }\n\n    }\n&lt;<span class=\"hljs-regexp\">/script&gt;\n</span></code></pre>\n\n</section>";

/***/ }

});