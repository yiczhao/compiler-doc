webpackJsonp([25],{

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(237);

/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(238)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/v1.0.0-11.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(239)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/v1.0.0-11.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 238:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template><section><h2>KsPager</h2>
	// <blockquote>
	// <p><strong>Author:张大柱</strong><br>
	// 常用分页组件</p>
	// </blockquote>
	// <hr>
	// <h3>基础使用 （分类）</h3>
	// <br>
	// <h3><strong>page</strong></h3>
	// <p><ks-page v-bind:current.sync="pageVal" v-bind:length="7" v-bind:total="10000" v-bind:size="13" v-on:change="pageChange"></ks-page><br>
	// pageVal:{{pageVal}}</p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-page</span> 
	//     <span class="hljs-attr">v-bind:current.sync</span>=<span class="hljs-string">"pageVal"</span> 
	//     <span class="hljs-attr">v-bind:length</span>=<span class="hljs-string">"7"</span>
	//     <span class="hljs-attr">v-bind:total</span>=<span class="hljs-string">"100"</span>
	//     <span class="hljs-attr">v-bind:size</span>=<span class="hljs-string">"13"</span>
	//     <span class="hljs-attr">v-on:change</span>=<span class="hljs-string">"pageChange"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-page</span>&gt;</span>
	//
	// </code></pre>
	// <h4><strong>API</strong></h4>
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
	// <td>v-on:change</td>
	// <td>分页改变时调用 ，返回当前点中的页数</td>
	// <td>props</td>
	// <td>Event</td>
	// <td><code class="ks-code-inline">非必填</code></td>
	// <td>无</td>
	// </tr>
	// </tbody>
	// </table></div><br>
	// <h3><strong>pageGroup</strong></h3>
	// <br>
	// <p><ks-page-group v-bind:current.sync="pageGroupVal" v-bind:size.sync="size" v-bind:length="7" v-bind:total="100" v-bind:sizes="[10,17,30]" v-on:change="pageGroupChange"></ks-page-group><br>
	// current:{{pageGroupVal}}   size:{{size}}</p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-page-group</span>
	//     <span class="hljs-attr">v-bind:current.sync</span>=<span class="hljs-string">"pageGroupVal"</span> 
	//     <span class="hljs-attr">v-bind:size</span> = <span class="hljs-string">'size'</span>
	//     <span class="hljs-attr">v-bind:length</span>=<span class="hljs-string">"7"</span>
	//     <span class="hljs-attr">v-bind:total</span>=<span class="hljs-string">"100"</span>
	//     <span class="hljs-attr">v-bind:sizes</span>=<span class="hljs-string">"[10,17,30]"</span>
	//     <span class="hljs-attr">v-on:change</span>=<span class="hljs-string">"pageGroupChange"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-page-group</span>&gt;</span>
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
	// <td>v-on:change</td>
	// <td>分页改变时调用；每页条数，当前页数（size,page）</td>
	// <td>props</td>
	// <td>Event</td>
	// <td><code class="ks-code-inline">非必填</code></td>
	// <td>无</td>
	// </tr>
	// </tbody>
	// </table></div><pre class="ks-hljs"><code>&lt;script&gt;
	//     <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//         data(){
	//             <span class="hljs-keyword">return</span> {
	//                 <span class="hljs-attr">pageVal</span>:<span class="hljs-number">24</span>,
	//                 <span class="hljs-attr">pageGroupVal</span>:<span class="hljs-number">4</span>,
	//                 <span class="hljs-attr">size</span>:<span class="hljs-string">''</span>
	//             }
	//         },
	//         <span class="hljs-attr">methods</span>:{
	//             pageChange(val){
	//                 <span class="hljs-built_in">console</span>.log(val);
	//             },
	//             pageGroupChange(size,page){
	//                 <span class="hljs-built_in">console</span>.log(size,page);
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
	    kscomponents: ['KsPager_v1'],
	    data: function data() {
	        return {
	            pageVal: 24,
	            pageGroupVal: 4,
	            size: 10
	        };
	    },

	    methods: {
	        pageChange: function pageChange(val) {
	            console.log(val);
	        },
	        pageGroupChange: function pageGroupChange(size, page) {
	            console.log(size, page);
	        }
	    }

	};
	// </script>

/***/ },

/***/ 239:
/***/ function(module, exports) {

	module.exports = "<section><h2>KsPager</h2>\n<blockquote>\n<p><strong>Author:张大柱</strong><br>\n常用分页组件</p>\n</blockquote>\n<hr>\n<h3>基础使用 （分类）</h3>\n<br>\n<h3><strong>page</strong></h3>\n<p><ks-page v-bind:current.sync=\"pageVal\" v-bind:length=\"7\" v-bind:total=\"10000\" v-bind:size=\"13\" v-on:change=\"pageChange\"></ks-page><br>\npageVal:{{pageVal}}</p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-page</span> \n    <span class=\"hljs-attr\">v-bind:current.sync</span>=<span class=\"hljs-string\">\"pageVal\"</span> \n    <span class=\"hljs-attr\">v-bind:length</span>=<span class=\"hljs-string\">\"7\"</span>\n    <span class=\"hljs-attr\">v-bind:total</span>=<span class=\"hljs-string\">\"100\"</span>\n    <span class=\"hljs-attr\">v-bind:size</span>=<span class=\"hljs-string\">\"13\"</span>\n    <span class=\"hljs-attr\">v-on:change</span>=<span class=\"hljs-string\">\"pageChange\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-page</span>&gt;</span>\n\n</code></pre>\n<h4><strong>API</strong></h4>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>current</td>\n<td>当前选中的页数</td>\n<td>props</td>\n<td>Number</td>\n<td>无</td>\n<td>无</td>\n</tr>\n<tr>\n<td>length</td>\n<td>展示的页数长度（<code class=\"ks-code-inline\">奇数</code>）</td>\n<td>props</td>\n<td>Number</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td>7</td>\n</tr>\n<tr>\n<td>total</td>\n<td>总条数</td>\n<td>props</td>\n<td>Number</td>\n<td>无</td>\n<td>无</td>\n</tr>\n<tr>\n<td>size</td>\n<td>每页展示条数</td>\n<td>props</td>\n<td>Number</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td>10</td>\n</tr>\n<tr>\n<td>v-on:change</td>\n<td>分页改变时调用 ，返回当前点中的页数</td>\n<td>props</td>\n<td>Event</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td>无</td>\n</tr>\n</tbody>\n</table></div><br>\n<h3><strong>pageGroup</strong></h3>\n<br>\n<p><ks-page-group v-bind:current.sync=\"pageGroupVal\" v-bind:size.sync=\"size\" v-bind:length=\"7\" v-bind:total=\"100\" v-bind:sizes=\"[10,17,30]\" v-on:change=\"pageGroupChange\"></ks-page-group><br>\ncurrent:{{pageGroupVal}}   size:{{size}}</p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-page-group</span>\n    <span class=\"hljs-attr\">v-bind:current.sync</span>=<span class=\"hljs-string\">\"pageGroupVal\"</span> \n    <span class=\"hljs-attr\">v-bind:size</span> = <span class=\"hljs-string\">'size'</span>\n    <span class=\"hljs-attr\">v-bind:length</span>=<span class=\"hljs-string\">\"7\"</span>\n    <span class=\"hljs-attr\">v-bind:total</span>=<span class=\"hljs-string\">\"100\"</span>\n    <span class=\"hljs-attr\">v-bind:sizes</span>=<span class=\"hljs-string\">\"[10,17,30]\"</span>\n    <span class=\"hljs-attr\">v-on:change</span>=<span class=\"hljs-string\">\"pageGroupChange\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-page-group</span>&gt;</span>\n</code></pre>\n<p><code class=\"ks-code-inline\">比 ks-page 组件多的接口</code></p>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>sizes</td>\n<td>页面展示的数据条数</td>\n<td>props</td>\n<td>Array</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td>[10,20,100]</td>\n</tr>\n<tr>\n<td>v-on:change</td>\n<td>分页改变时调用；每页条数，当前页数（size,page）</td>\n<td>props</td>\n<td>Event</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td>无</td>\n</tr>\n</tbody>\n</table></div><pre class=\"ks-hljs\"><code>&lt;script&gt;\n    <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n        data(){\n            <span class=\"hljs-keyword\">return</span> {\n                <span class=\"hljs-attr\">pageVal</span>:<span class=\"hljs-number\">24</span>,\n                <span class=\"hljs-attr\">pageGroupVal</span>:<span class=\"hljs-number\">4</span>,\n                <span class=\"hljs-attr\">size</span>:<span class=\"hljs-string\">''</span>\n            }\n        },\n        <span class=\"hljs-attr\">methods</span>:{\n            pageChange(val){\n                <span class=\"hljs-built_in\">console</span>.log(val);\n            },\n            pageGroupChange(size,page){\n                <span class=\"hljs-built_in\">console</span>.log(size,page);\n            }\n            \n           \n        }\n\n    }\n&lt;<span class=\"hljs-regexp\">/script&gt;\n</span></code></pre>\n\n</section>";

/***/ }

});