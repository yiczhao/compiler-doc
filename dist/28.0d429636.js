webpackJsonp([28],{

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(248);

/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(249)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/v0.1.0-12.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(251)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/v0.1.0-12.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 249:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template><section><h2>KsPager</h2>
	// <blockquote>
	// <p><strong>Author:张大柱</strong><br>
	// 常用的日期组件</p>
	// </blockquote>
	// <hr>
	// <h3>基础使用 （分类）</h3>
	// <h3>page</h3>
	// <p>page_current:{{page_current}}<br>
	// <ks-page v-bind:current.sync="page_current" v-bind:length="7" v-bind:total="10000" v-bind:size="13" v-on:change="change"></ks-page></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-page</span> 
	//     <span class="hljs-attr">v-bind:current.sync</span>=<span class="hljs-string">"page_current"</span> 
	//     <span class="hljs-attr">v-bind:length</span>=<span class="hljs-string">"7"</span>
	//     <span class="hljs-attr">v-bind:total</span>=<span class="hljs-string">"100"</span>
	//     <span class="hljs-attr">v-bind:size</span>=<span class="hljs-string">"13"</span>
	//     <span class="hljs-attr">v-bind:on-change</span>=<span class="hljs-string">"change"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-page</span>&gt;</span>
	//
	//
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
	// <p>current:{{page_current2}}<br><br>
	// size:{{size}}<br>
	// <ks-page-group v-bind:current.sync="page_current2" v-bind:size.sync="size" v-bind:length="7" v-bind:total="100" v-bind:sizes="[10,17,30]" v-bind:on-change="change2"></ks-page-group></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-page-group</span>
	//     <span class="hljs-attr">v-bind:current.sync</span>=<span class="hljs-string">"page_current2"</span> 
	//     <span class="hljs-attr">v-bind:size</span> = <span class="hljs-string">'size'</span>
	//     <span class="hljs-attr">v-bind:length</span>=<span class="hljs-string">"7"</span>
	//     <span class="hljs-attr">v-bind:total</span>=<span class="hljs-string">"100"</span>
	//     <span class="hljs-attr">v-bind:sizes</span>=<span class="hljs-string">"[10,17,30]"</span>
	//     <span class="hljs-attr">v-bind:on-change</span>=<span class="hljs-string">"change2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-page-group</span>&gt;</span>
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
	//                 <span class="hljs-attr">page_current2</span>:<span class="hljs-number">4</span>,
	//                 <span class="hljs-attr">size</span>:<span class="hljs-string">''</span>
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
	    kscomponents: ['KsPager_v0'],
	    data: function data() {
	        return {
	            page_current: 24,
	            page_current2: 4,
	            size: 10
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

/***/ 251:
/***/ function(module, exports) {

	module.exports = "<section><h2>KsTree</h2>\n<blockquote>\n<p><strong>Author:张大柱</strong><br>\n支持选择，折叠</p>\n</blockquote>\n<hr>\n<p><ks-tree v-bind:data=\"datalist\"></ks-tree><br>\n<br><br><br>\n<ks-tree v-bind:data=\"company\" name-key=\"channelName\" children-key=\"nodes\" checked-key=\"status\"></ks-tree></p>\n<h3>API</h3>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>data</td>\n<td>数据</td>\n<td>props</td>\n<td>Array</td>\n<td><code class=\"ks-code-inline\">必填</code></td>\n<td>无</td>\n</tr>\n<tr>\n<td>name-key</td>\n<td>展示的字段</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td><code class=\"ks-code-inline\">name</code></td>\n</tr>\n<tr>\n<td>children-key</td>\n<td>子元素列表字段</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td><code class=\"ks-code-inline\">children</code></td>\n</tr>\n<tr>\n<td>checked-key</td>\n<td>当前节点状态的字段（是否选中）</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td><code class=\"ks-code-inline\">checked</code></td>\n</tr>\n</tbody>\n</table></div><pre class=\"ks-hljs\"><code>&lt;script&gt;\n  <span class=\"hljs-keyword\">import</span> { company } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'Data/tree-data'</span>\n  \n  \n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span>{\n    <span class=\"hljs-attr\">kscomponents</span>:[<span class=\"hljs-string\">'KsTree_v0'</span>],\n    data () {\n      <span class=\"hljs-keyword\">return</span> {\n        <span class=\"hljs-attr\">company</span>:[company],\n        <span class=\"hljs-attr\">datalist</span>:[{\n              <span class=\"hljs-attr\">checked</span>:<span class=\"hljs-literal\">false</span>,\n              <span class=\"hljs-attr\">name</span>:<span class=\"hljs-string\">'A'</span>,\n              <span class=\"hljs-attr\">children</span>:[{\n                      <span class=\"hljs-attr\">checked</span>:<span class=\"hljs-literal\">false</span>,\n                      <span class=\"hljs-attr\">name</span>:<span class=\"hljs-string\">'A-aaa'</span>,\n                      <span class=\"hljs-attr\">children</span>:[{\n                          <span class=\"hljs-attr\">checked</span>:<span class=\"hljs-literal\">false</span>,\n                          <span class=\"hljs-attr\">name</span>:<span class=\"hljs-string\">'A-aaa-ccc'</span>,\n                          <span class=\"hljs-attr\">children</span>:[{\n                              <span class=\"hljs-attr\">checked</span>:<span class=\"hljs-literal\">false</span>,\n                              <span class=\"hljs-attr\">name</span>:<span class=\"hljs-string\">'A-aaa-ccc'</span>,\n                              <span class=\"hljs-attr\">children</span>:[{\n                                  <span class=\"hljs-attr\">checked</span>:<span class=\"hljs-literal\">false</span>,\n                                  <span class=\"hljs-attr\">name</span>:<span class=\"hljs-string\">'A-aaa-ccc'</span>\n                              }]\n                          },{\n                              <span class=\"hljs-attr\">checked</span>:<span class=\"hljs-literal\">false</span>,\n                              <span class=\"hljs-attr\">name</span>:<span class=\"hljs-string\">'A-aaa-ccc'</span>,\n                              <span class=\"hljs-attr\">children</span>:[{\n                                  <span class=\"hljs-attr\">checked</span>:<span class=\"hljs-literal\">false</span>,\n                                  <span class=\"hljs-attr\">name</span>:<span class=\"hljs-string\">'A-aaa-ccc'</span>\n                              }]\n                          }]\n                      }]\n                  },\n                  {\n                      <span class=\"hljs-attr\">checked</span>:<span class=\"hljs-literal\">false</span>,\n                      <span class=\"hljs-attr\">name</span>:<span class=\"hljs-string\">'A-bbb'</span>,\n                      <span class=\"hljs-attr\">children</span>:[{\n                          <span class=\"hljs-attr\">checked</span>:<span class=\"hljs-literal\">false</span>,\n                          <span class=\"hljs-attr\">name</span>:<span class=\"hljs-string\">'A-bbb-ccc'</span>\n                      }]\n                  }]\n          }]\n      }\n    },\n    \n    <span class=\"hljs-attr\">methods</span>: {\n    }\n  }\n&lt;<span class=\"hljs-regexp\">/script&gt;\n</span></code></pre>\n\n</section>";

/***/ }

});