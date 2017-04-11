webpackJsonp([49],{

/***/ 93:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(94);

/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(95)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/page-8.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(96)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/page-8.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 95:
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
	// <ks-page v-bind:current="page_current" v-bind:length="7" v-bind:total="10000" v-bind:size="13" v-on:change="change"></ks-page></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-page</span> 
	//     <span class="hljs-attr">v-bind:current.sync</span>=<span class="hljs-string">"page_current"</span> 
	//     <span class="hljs-attr">v-bind:length</span>=<span class="hljs-string">"7"</span>
	//     <span class="hljs-attr">v-bind:total</span>=<span class="hljs-string">"100"</span>
	//     <span class="hljs-attr">v-bind:size</span>=<span class="hljs-string">"13"</span>
	//     <span class="hljs-attr">v-bind:on-change</span>=<span class="hljs-string">"change"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-page</span>&gt;</span>
	//
	// // 新版本
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-page</span> 
	//     <span class="hljs-attr">v-bind:current.sync</span>=<span class="hljs-string">"page_current"</span> 
	//     <span class="hljs-attr">v-bind:length</span>=<span class="hljs-string">"7"</span>
	//     <span class="hljs-attr">v-bind:total</span>=<span class="hljs-string">"100"</span>
	//     <span class="hljs-attr">v-bind:size</span>=<span class="hljs-string">"13"</span>
	//     <span class="hljs-attr">v-on:change</span>=<span class="hljs-string">"change"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-page</span>&gt;</span>
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
	// </table></div><pre class="ks-hljs"><code>&lt;script&gt;
	//     <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//         data(){
	//             <span class="hljs-keyword">return</span> {
	//                 <span class="hljs-attr">page_current</span>:<span class="hljs-number">24</span>,
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
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            page_current: 24,
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

/***/ 96:
/***/ function(module, exports) {

	module.exports = "<section><h2>KsPager</h2>\n<blockquote>\n<p>常用的日期组件</p>\n</blockquote>\n<hr>\n<h3>基础使用 （分类）</h3>\n<h3>page</h3>\n<p>page_current:{{page_current}}<br>\n<ks-page v-bind:current=\"page_current\" v-bind:length=\"7\" v-bind:total=\"10000\" v-bind:size=\"13\" v-on:change=\"change\"></ks-page></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-page</span> \n    <span class=\"hljs-attr\">v-bind:current.sync</span>=<span class=\"hljs-string\">\"page_current\"</span> \n    <span class=\"hljs-attr\">v-bind:length</span>=<span class=\"hljs-string\">\"7\"</span>\n    <span class=\"hljs-attr\">v-bind:total</span>=<span class=\"hljs-string\">\"100\"</span>\n    <span class=\"hljs-attr\">v-bind:size</span>=<span class=\"hljs-string\">\"13\"</span>\n    <span class=\"hljs-attr\">v-bind:on-change</span>=<span class=\"hljs-string\">\"change\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-page</span>&gt;</span>\n\n// 新版本\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-page</span> \n    <span class=\"hljs-attr\">v-bind:current.sync</span>=<span class=\"hljs-string\">\"page_current\"</span> \n    <span class=\"hljs-attr\">v-bind:length</span>=<span class=\"hljs-string\">\"7\"</span>\n    <span class=\"hljs-attr\">v-bind:total</span>=<span class=\"hljs-string\">\"100\"</span>\n    <span class=\"hljs-attr\">v-bind:size</span>=<span class=\"hljs-string\">\"13\"</span>\n    <span class=\"hljs-attr\">v-on:change</span>=<span class=\"hljs-string\">\"change\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-page</span>&gt;</span>\n</code></pre>\n<h3>API</h3>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>current</td>\n<td>当前选中的页数</td>\n<td>props</td>\n<td>Number</td>\n<td>无</td>\n<td>无</td>\n</tr>\n<tr>\n<td>length</td>\n<td>展示的页数长度（<code class=\"ks-code-inline\">奇数</code>）</td>\n<td>props</td>\n<td>Number</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td>7</td>\n</tr>\n<tr>\n<td>total</td>\n<td>总条数</td>\n<td>props</td>\n<td>Number</td>\n<td>无</td>\n<td>无</td>\n</tr>\n<tr>\n<td>size</td>\n<td>每页展示条数</td>\n<td>props</td>\n<td>Number</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td>10</td>\n</tr>\n<tr>\n<td>on-change</td>\n<td>分页改变时调用</td>\n<td>props</td>\n<td>Function</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td>无</td>\n</tr>\n</tbody>\n</table></div><h3>pageGroup</h3>\n<p><ks-page-group :current.sync=\"page_current2\" :length=\"7\" :total=\"100\" :sizes=\"[10,17,30]\" :on-change=\"change2\"></ks-page-group></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-page-group</span>\n    <span class=\"hljs-attr\">:current.sync</span>=<span class=\"hljs-string\">\"page_current2\"</span> \n    <span class=\"hljs-attr\">:length</span>=<span class=\"hljs-string\">\"7\"</span>\n    <span class=\"hljs-attr\">:total</span>=<span class=\"hljs-string\">\"100\"</span>\n    <span class=\"hljs-attr\">:sizes</span>=<span class=\"hljs-string\">\"[10,17,30]\"</span>\n    <span class=\"hljs-attr\">:on-change</span>=<span class=\"hljs-string\">\"change2\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-page-group</span>&gt;</span>\n</code></pre>\n<p><code class=\"ks-code-inline\">比 ks-page 组件多的接口</code></p>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>sizes</td>\n<td>页面展示的数据条数</td>\n<td>props</td>\n<td>Array</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td>[10,20,100]</td>\n</tr>\n<tr>\n<td>on-change</td>\n<td>分页改变时调用（val,type<code class=\"ks-code-inline\">sizes变化输出SIZE-CHANGE</code>）</td>\n<td>props</td>\n<td>Function</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td>无</td>\n</tr>\n</tbody>\n</table></div><pre class=\"ks-hljs\"><code>&lt;script&gt;\n    <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n        data(){\n            <span class=\"hljs-keyword\">return</span> {\n                <span class=\"hljs-attr\">page_current</span>:<span class=\"hljs-number\">24</span>,\n                <span class=\"hljs-attr\">page_current2</span>:<span class=\"hljs-number\">4</span>\n            }\n        },\n        <span class=\"hljs-attr\">methods</span>:{\n            change(val){\n                <span class=\"hljs-built_in\">console</span>.log(val);\n            },\n            change2(val,type){\n                <span class=\"hljs-built_in\">console</span>.log(val,type);\n            }\n            \n           \n        }\n\n    }\n&lt;<span class=\"hljs-regexp\">/script&gt;\n</span></code></pre>\n\n</section>";

/***/ }

});