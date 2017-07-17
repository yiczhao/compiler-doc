webpackJsonp([36],{

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(278);

/***/ },

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(279)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/v0.1.0-17.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(280)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/v0.1.0-17.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 279:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template><section><h2>KsItem</h2>
	// <blockquote>
	// <p>Author:左晶晶<br>
	// 常用的楼层选择单组件</p>
	// </blockquote>
	// <hr>
	// <h3>单组件展示</h3>
	// <br>
	// <p><ks-item :floor_value.sync="floor_begin1"><br>
	// </ks-item><br>
	// <span style="color:red;font-size:15px">已选中楼层:{{floor_begin1}}</span></p>
	// <hr>
	// <pre class="ks-hljs"><code>&lt;ks-item
	//     :floor_value.sync = <span class="hljs-string">"floor_begin"</span>&gt;<span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">item</span>&gt;</span></span>
	// &lt;<span class="hljs-regexp">/ks-item&gt;
	// </span></code></pre>
	// <h3>API</h3>
	// <div class="table-striped"><table class="table-entity"><thead>
	// <tr>
	// <th>参数</th>
	// <th>说明</th>
	// <th>接口类型</th>
	// <th>可选值</th>
	// <th>默认值</th>
	// <th>是否必须</th>
	// </tr>
	// </thead>
	// <tbody>
	// <tr>
	// <td>floor_value</td>
	// <td>用于显示默认楼层</td>
	// <td>String</td>
	// <td>无</td>
	// <td>B1</td>
	// <td>是</td>
	// </tr>
	// </tbody>
	// </table></div><br>
	// <pre class="ks-hljs"><code>&lt;script lang=<span class="hljs-string">"babel"</span>&gt;
	// <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//     data(){
	//         <span class="hljs-keyword">return</span> {
	//             <span class="hljs-attr">floor_begin</span>:<span class="hljs-string">'B1'</span>
	//         }
	//     },
	//     ready(){
	//     }
	// }
	// &lt;<span class="hljs-regexp">/script&gt;
	// </span></code></pre>
	// <br>
	// <h2>KsItemFloor</h2>
	// <blockquote>
	// <p>常用的楼层选择组件</p>
	// </blockquote>
	// <br>
	// <h3>API</h3>
	// <div class="table-striped"><table class="table-entity"><thead>
	// <tr>
	// <th>参数</th>
	// <th>说明</th>
	// <th>接口类型</th>
	// <th>可选值</th>
	// <th>默认值</th>
	// <th>是否必须</th>
	// </tr>
	// </thead>
	// <tbody>
	// <tr>
	// <td>floor_begin</td>
	// <td>用于显示开始楼层</td>
	// <td>String</td>
	// <td>无</td>
	// <td>B1</td>
	// <td>是</td>
	// </tr>
	// <tr>
	// <td>floor_end</td>
	// <td>用于显示结束楼层</td>
	// <td>String</td>
	// <td>无</td>
	// <td>F1</td>
	// <td>是</td>
	// </tr>
	// <tr>
	// <td>isdisabled</td>
	// <td>用于显示两种类型（true表示显示不可用楼层，false表示不显示不可用楼层）</td>
	// <td>Boolean</td>
	// <td>true, false</td>
	// <td>false</td>
	// <td>否</td>
	// </tr>
	// </tbody>
	// </table></div><br>
	// <h3>案例展示</h3>
	// <br>
	// <h4>1.直接截取楼层(不显示不可用楼层)</h4>
	// <br>
	// <p><ks-item-floor :floor_begin.sync="floor_begin1" :floor_end.sync="floor_end1"><br>
	// </ks-item-floor></p>
	// <pre class="ks-hljs"><code>&lt;ks-item-floor
	//     :floor_begin = <span class="hljs-string">"floor_begin1"</span>
	//     :floor_end = <span class="hljs-string">"floor_end1"</span>&gt;
	// <span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">ks-item-floor</span>&gt;</span>
	// </span></code></pre>
	// <h4>2.禁用楼层(显示不可用楼层)</h4>
	// <br>
	// <p><ks-item-floor :floor_begin.sync="floor_begin2" :floor_end.sync="floor_end2" :isdisabled.sync="isdisabled"><br>
	// </ks-item-floor></p>
	// <pre class="ks-hljs"><code>&lt;ks-item-floor
	//     :floor_begin.sync = <span class="hljs-string">"floor_begin2"</span>
	//     :floor_end.sync = <span class="hljs-string">"floor_end2"</span>
	//     :isdisabled.sync = <span class="hljs-string">"isdisabled"</span>&gt;
	// <span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">ks-item-floor</span>&gt;</span>
	// </span></code></pre>
	// <h4>3.代码如下</h4>
	// <pre class="ks-hljs"><code>&lt;script&gt;
	// <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//     data(){
	//         <span class="hljs-keyword">return</span> {
	//             <span class="hljs-attr">floor_begin1</span>:<span class="hljs-string">'B1'</span>,
	//             <span class="hljs-attr">floor_end1</span>:<span class="hljs-string">'F1'</span>,
	//             <span class="hljs-attr">floor_begin2</span>:<span class="hljs-string">'B1'</span>,
	//             <span class="hljs-attr">floor_end2</span>:<span class="hljs-string">'F1'</span>,
	//             <span class="hljs-attr">isdisabled</span>:<span class="hljs-literal">true</span>
	//         }
	//     },
	//     ready(){
	//     }
	// }
	// &lt;<span class="hljs-regexp">/script&gt;
	// </span></code></pre>
	//
	// </section></template>
	//
	// <script>
	exports.default = {
	    kscomponents: ['KsItemFloor_v0'],
	    data: function data() {
	        return {
	            floor_begin1: 'B1',
	            floor_end1: 'F1',
	            floor_begin2: 'B1',
	            floor_end2: 'F1',
	            isdisabled: true
	        };
	    },
	    ready: function ready() {}
	};
	// </script>

/***/ },

/***/ 280:
/***/ function(module, exports) {

	module.exports = "<section><h2>KsItem</h2>\n<blockquote>\n<p>Author:左晶晶<br>\n常用的楼层选择单组件</p>\n</blockquote>\n<hr>\n<h3>单组件展示</h3>\n<br>\n<p><ks-item :floor_value.sync=\"floor_begin1\"><br>\n</ks-item><br>\n<span style=\"color:red;font-size:15px\">已选中楼层:{{floor_begin1}}</span></p>\n<hr>\n<pre class=\"ks-hljs\"><code>&lt;ks-item\n    :floor_value.sync = <span class=\"hljs-string\">\"floor_begin\"</span>&gt;<span class=\"xml\"><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">item</span>&gt;</span></span>\n&lt;<span class=\"hljs-regexp\">/ks-item&gt;\n</span></code></pre>\n<h3>API</h3>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>可选值</th>\n<th>默认值</th>\n<th>是否必须</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>floor_value</td>\n<td>用于显示默认楼层</td>\n<td>String</td>\n<td>无</td>\n<td>B1</td>\n<td>是</td>\n</tr>\n</tbody>\n</table></div><br>\n<pre class=\"ks-hljs\"><code>&lt;script lang=<span class=\"hljs-string\">\"babel\"</span>&gt;\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n    data(){\n        <span class=\"hljs-keyword\">return</span> {\n            <span class=\"hljs-attr\">floor_begin</span>:<span class=\"hljs-string\">'B1'</span>\n        }\n    },\n    ready(){\n    }\n}\n&lt;<span class=\"hljs-regexp\">/script&gt;\n</span></code></pre>\n<br>\n<h2>KsItemFloor</h2>\n<blockquote>\n<p>常用的楼层选择组件</p>\n</blockquote>\n<br>\n<h3>API</h3>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>可选值</th>\n<th>默认值</th>\n<th>是否必须</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>floor_begin</td>\n<td>用于显示开始楼层</td>\n<td>String</td>\n<td>无</td>\n<td>B1</td>\n<td>是</td>\n</tr>\n<tr>\n<td>floor_end</td>\n<td>用于显示结束楼层</td>\n<td>String</td>\n<td>无</td>\n<td>F1</td>\n<td>是</td>\n</tr>\n<tr>\n<td>isdisabled</td>\n<td>用于显示两种类型（true表示显示不可用楼层，false表示不显示不可用楼层）</td>\n<td>Boolean</td>\n<td>true, false</td>\n<td>false</td>\n<td>否</td>\n</tr>\n</tbody>\n</table></div><br>\n<h3>案例展示</h3>\n<br>\n<h4>1.直接截取楼层(不显示不可用楼层)</h4>\n<br>\n<p><ks-item-floor :floor_begin.sync=\"floor_begin1\" :floor_end.sync=\"floor_end1\"><br>\n</ks-item-floor></p>\n<pre class=\"ks-hljs\"><code>&lt;ks-item-floor\n    :floor_begin = <span class=\"hljs-string\">\"floor_begin1\"</span>\n    :floor_end = <span class=\"hljs-string\">\"floor_end1\"</span>&gt;\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-item-floor</span>&gt;</span>\n</span></code></pre>\n<h4>2.禁用楼层(显示不可用楼层)</h4>\n<br>\n<p><ks-item-floor :floor_begin.sync=\"floor_begin2\" :floor_end.sync=\"floor_end2\" :isdisabled.sync=\"isdisabled\"><br>\n</ks-item-floor></p>\n<pre class=\"ks-hljs\"><code>&lt;ks-item-floor\n    :floor_begin.sync = <span class=\"hljs-string\">\"floor_begin2\"</span>\n    :floor_end.sync = <span class=\"hljs-string\">\"floor_end2\"</span>\n    :isdisabled.sync = <span class=\"hljs-string\">\"isdisabled\"</span>&gt;\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-item-floor</span>&gt;</span>\n</span></code></pre>\n<h4>3.代码如下</h4>\n<pre class=\"ks-hljs\"><code>&lt;script&gt;\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n    data(){\n        <span class=\"hljs-keyword\">return</span> {\n            <span class=\"hljs-attr\">floor_begin1</span>:<span class=\"hljs-string\">'B1'</span>,\n            <span class=\"hljs-attr\">floor_end1</span>:<span class=\"hljs-string\">'F1'</span>,\n            <span class=\"hljs-attr\">floor_begin2</span>:<span class=\"hljs-string\">'B1'</span>,\n            <span class=\"hljs-attr\">floor_end2</span>:<span class=\"hljs-string\">'F1'</span>,\n            <span class=\"hljs-attr\">isdisabled</span>:<span class=\"hljs-literal\">true</span>\n        }\n    },\n    ready(){\n    }\n}\n&lt;<span class=\"hljs-regexp\">/script&gt;\n</span></code></pre>\n\n</section>";

/***/ }

});