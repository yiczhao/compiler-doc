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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _treeData = __webpack_require__(250);

	exports.default = {
	    kscomponents: ['KsTree_v0'],
	    data: function data() {
	        return {
	            company: [_treeData.company],
	            datalist: [{
	                checked: false,
	                name: 'A',
	                children: [{
	                    checked: false,
	                    name: 'A-aaa',
	                    children: [{
	                        checked: false,
	                        name: 'A-aaa-ccc',
	                        children: [{
	                            checked: false,
	                            name: 'A-aaa-ccc',
	                            children: [{
	                                checked: false,
	                                name: 'A-aaa-ccc'
	                            }]
	                        }, {
	                            checked: false,
	                            name: 'A-aaa-ccc',
	                            children: [{
	                                checked: false,
	                                name: 'A-aaa-ccc'
	                            }]
	                        }]
	                    }]
	                }, {
	                    checked: false,
	                    name: 'A-bbb',
	                    children: [{
	                        checked: false,
	                        name: 'A-bbb-ccc'
	                    }]
	                }]
	            }]
	        };
	    },


	    methods: {}
	};
	// </script>
	// <template><section><h2>KsTree</h2>
	// <blockquote>
	// <p><strong>Author:张大柱</strong><br>
	// 支持选择，折叠</p>
	// </blockquote>
	// <hr>
	// <p><ks-tree v-bind:data="datalist"></ks-tree><br>
	// <br><br><br>
	// <ks-tree v-bind:data="company" name-key="channelName" children-key="nodes" checked-key="status"></ks-tree></p>
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
	// <td>data</td>
	// <td>数据</td>
	// <td>props</td>
	// <td>Array</td>
	// <td><code class="ks-code-inline">必填</code></td>
	// <td>无</td>
	// </tr>
	// <tr>
	// <td>name-key</td>
	// <td>展示的字段</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">非必填</code></td>
	// <td><code class="ks-code-inline">name</code></td>
	// </tr>
	// <tr>
	// <td>children-key</td>
	// <td>子元素列表字段</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">非必填</code></td>
	// <td><code class="ks-code-inline">children</code></td>
	// </tr>
	// <tr>
	// <td>checked-key</td>
	// <td>当前节点状态的字段（是否选中）</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">非必填</code></td>
	// <td><code class="ks-code-inline">checked</code></td>
	// </tr>
	// </tbody>
	// </table></div><pre class="ks-hljs"><code>&lt;script&gt;
	//   <span class="hljs-keyword">import</span> { company } <span class="hljs-keyword">from</span> <span class="hljs-string">'Data/tree-data'</span>
	//
	//
	//   <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
	//     <span class="hljs-attr">kscomponents</span>:[<span class="hljs-string">'KsTree_v0'</span>],
	//     data () {
	//       <span class="hljs-keyword">return</span> {
	//         <span class="hljs-attr">company</span>:[company],
	//         <span class="hljs-attr">datalist</span>:[{
	//               <span class="hljs-attr">checked</span>:<span class="hljs-literal">false</span>,
	//               <span class="hljs-attr">name</span>:<span class="hljs-string">'A'</span>,
	//               <span class="hljs-attr">children</span>:[{
	//                       <span class="hljs-attr">checked</span>:<span class="hljs-literal">false</span>,
	//                       <span class="hljs-attr">name</span>:<span class="hljs-string">'A-aaa'</span>,
	//                       <span class="hljs-attr">children</span>:[{
	//                           <span class="hljs-attr">checked</span>:<span class="hljs-literal">false</span>,
	//                           <span class="hljs-attr">name</span>:<span class="hljs-string">'A-aaa-ccc'</span>,
	//                           <span class="hljs-attr">children</span>:[{
	//                               <span class="hljs-attr">checked</span>:<span class="hljs-literal">false</span>,
	//                               <span class="hljs-attr">name</span>:<span class="hljs-string">'A-aaa-ccc'</span>,
	//                               <span class="hljs-attr">children</span>:[{
	//                                   <span class="hljs-attr">checked</span>:<span class="hljs-literal">false</span>,
	//                                   <span class="hljs-attr">name</span>:<span class="hljs-string">'A-aaa-ccc'</span>
	//                               }]
	//                           },{
	//                               <span class="hljs-attr">checked</span>:<span class="hljs-literal">false</span>,
	//                               <span class="hljs-attr">name</span>:<span class="hljs-string">'A-aaa-ccc'</span>,
	//                               <span class="hljs-attr">children</span>:[{
	//                                   <span class="hljs-attr">checked</span>:<span class="hljs-literal">false</span>,
	//                                   <span class="hljs-attr">name</span>:<span class="hljs-string">'A-aaa-ccc'</span>
	//                               }]
	//                           }]
	//                       }]
	//                   },
	//                   {
	//                       <span class="hljs-attr">checked</span>:<span class="hljs-literal">false</span>,
	//                       <span class="hljs-attr">name</span>:<span class="hljs-string">'A-bbb'</span>,
	//                       <span class="hljs-attr">children</span>:[{
	//                           <span class="hljs-attr">checked</span>:<span class="hljs-literal">false</span>,
	//                           <span class="hljs-attr">name</span>:<span class="hljs-string">'A-bbb-ccc'</span>
	//                       }]
	//                   }]
	//           }]
	//       }
	//     },
	//
	//     <span class="hljs-attr">methods</span>: {
	//     }
	//   }
	// &lt;<span class="hljs-regexp">/script&gt;
	// </span></code></pre>
	//
	// </section></template>
	//
	// <script>

/***/ },

/***/ 250:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description 树形组件的测试数据.
	 * @author pkeros
	 * @data 2017/3/29
	 * @email pkeros@vip.qq.com
	 */

	// 公司模拟数据
	var company = exports.company = {
	  "id": 1,
	  "channelName": "卡说总部",
	  "address": "address",
	  "contactName": "contactName",
	  "mobilePhone": "mobilePhone",
	  "email": "email",
	  "status": 1,
	  "pid": 0,
	  "total": 12,
	  "nodes": [{
	    "id": 2,
	    "channelName": "华中大区",
	    "address": "address",
	    "contactName": "contactName",
	    "mobilePhone": "mobilePhone",
	    "email": "email",
	    "status": 1,
	    "pid": 1,
	    "nodes": [{
	      "id": 4,
	      "channelName": "上海卡说一部",
	      "address": "address",
	      "contactName": "contactName",
	      "mobilePhone": "mobilePhone",
	      "email": "email",
	      "status": 1,
	      "pid": 2,
	      "nodes": []
	    }, {
	      "id": 5,
	      "channelName": "上海卡说二部",
	      "address": "address",
	      "contactName": "contactName",
	      "mobilePhone": "mobilePhone",
	      "email": "email",
	      "status": 1,
	      "pid": 2,
	      "nodes": []
	    }, {
	      "id": 6,
	      "channelName": "上海卡说三部",
	      "address": "address",
	      "contactName": "contactName",
	      "mobilePhone": "mobilePhone",
	      "email": "email",
	      "status": 1,
	      "pid": 2,
	      "nodes": [{
	        "id": 10,
	        "channelName": "闵行卡说一部",
	        "address": "address",
	        "contactName": "contactName",
	        "mobilePhone": "mobilePhone",
	        "email": "email",
	        "status": 1,
	        "pid": 6,
	        "nodes": []
	      }]
	    }]
	  }, {
	    "id": 3,
	    "channelName": "华南大区",
	    "address": "address",
	    "contactName": "contactName",
	    "mobilePhone": "mobilePhone",
	    "email": "email",
	    "status": 1,
	    "pid": 1,
	    "nodes": [{
	      "id": 7,
	      "channelName": "无锡卡说一部",
	      "address": "address",
	      "contactName": "contactName",
	      "mobilePhone": "mobilePhone",
	      "email": "email",
	      "status": 1,
	      "pid": 3,
	      "nodes": [{
	        "id": 11,
	        "channelName": "苏州卡说一部",
	        "address": "address",
	        "contactName": "contactName",
	        "mobilePhone": "mobilePhone",
	        "email": "email",
	        "status": 1,
	        "pid": 7,
	        "nodes": [{
	          "id": 20,
	          "channelName": "闵行卡说一部",
	          "address": "address",
	          "contactName": "contactName",
	          "mobilePhone": "mobilePhone",
	          "email": "email",
	          "status": 1,
	          "pid": 11,
	          "nodes": []
	        }]
	      }]
	    }, {
	      "id": 8,
	      "channelName": "XX卡说一部",
	      "address": "address",
	      "contactName": "contactName",
	      "mobilePhone": "mobilePhone",
	      "email": "email",
	      "status": 1,
	      "pid": 3,
	      "nodes": []
	    }, {
	      "id": 9,
	      "channelName": "ASF卡说一部",
	      "address": "address",
	      "contactName": "contactName",
	      "mobilePhone": "mobilePhone",
	      "email": "email",
	      "status": 1,
	      "pid": 3,
	      "nodes": []
	    }]
	  }]
	};

/***/ },

/***/ 251:
/***/ function(module, exports) {

	module.exports = "<section><h2>KsTree</h2>\n<blockquote>\n<p><strong>Author:张大柱</strong><br>\n支持选择，折叠</p>\n</blockquote>\n<hr>\n<p><ks-tree v-bind:data=\"datalist\"></ks-tree><br>\n<br><br><br>\n<ks-tree v-bind:data=\"company\" name-key=\"channelName\" children-key=\"nodes\" checked-key=\"status\"></ks-tree></p>\n<h3>API</h3>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>data</td>\n<td>数据</td>\n<td>props</td>\n<td>Array</td>\n<td><code class=\"ks-code-inline\">必填</code></td>\n<td>无</td>\n</tr>\n<tr>\n<td>name-key</td>\n<td>展示的字段</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td><code class=\"ks-code-inline\">name</code></td>\n</tr>\n<tr>\n<td>children-key</td>\n<td>子元素列表字段</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td><code class=\"ks-code-inline\">children</code></td>\n</tr>\n<tr>\n<td>checked-key</td>\n<td>当前节点状态的字段（是否选中）</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td><code class=\"ks-code-inline\">checked</code></td>\n</tr>\n</tbody>\n</table></div><pre class=\"ks-hljs\"><code>&lt;script&gt;\n  <span class=\"hljs-keyword\">import</span> { company } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'Data/tree-data'</span>\n  \n  \n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span>{\n    <span class=\"hljs-attr\">kscomponents</span>:[<span class=\"hljs-string\">'KsTree_v0'</span>],\n    data () {\n      <span class=\"hljs-keyword\">return</span> {\n        <span class=\"hljs-attr\">company</span>:[company],\n        <span class=\"hljs-attr\">datalist</span>:[{\n              <span class=\"hljs-attr\">checked</span>:<span class=\"hljs-literal\">false</span>,\n              <span class=\"hljs-attr\">name</span>:<span class=\"hljs-string\">'A'</span>,\n              <span class=\"hljs-attr\">children</span>:[{\n                      <span class=\"hljs-attr\">checked</span>:<span class=\"hljs-literal\">false</span>,\n                      <span class=\"hljs-attr\">name</span>:<span class=\"hljs-string\">'A-aaa'</span>,\n                      <span class=\"hljs-attr\">children</span>:[{\n                          <span class=\"hljs-attr\">checked</span>:<span class=\"hljs-literal\">false</span>,\n                          <span class=\"hljs-attr\">name</span>:<span class=\"hljs-string\">'A-aaa-ccc'</span>,\n                          <span class=\"hljs-attr\">children</span>:[{\n                              <span class=\"hljs-attr\">checked</span>:<span class=\"hljs-literal\">false</span>,\n                              <span class=\"hljs-attr\">name</span>:<span class=\"hljs-string\">'A-aaa-ccc'</span>,\n                              <span class=\"hljs-attr\">children</span>:[{\n                                  <span class=\"hljs-attr\">checked</span>:<span class=\"hljs-literal\">false</span>,\n                                  <span class=\"hljs-attr\">name</span>:<span class=\"hljs-string\">'A-aaa-ccc'</span>\n                              }]\n                          },{\n                              <span class=\"hljs-attr\">checked</span>:<span class=\"hljs-literal\">false</span>,\n                              <span class=\"hljs-attr\">name</span>:<span class=\"hljs-string\">'A-aaa-ccc'</span>,\n                              <span class=\"hljs-attr\">children</span>:[{\n                                  <span class=\"hljs-attr\">checked</span>:<span class=\"hljs-literal\">false</span>,\n                                  <span class=\"hljs-attr\">name</span>:<span class=\"hljs-string\">'A-aaa-ccc'</span>\n                              }]\n                          }]\n                      }]\n                  },\n                  {\n                      <span class=\"hljs-attr\">checked</span>:<span class=\"hljs-literal\">false</span>,\n                      <span class=\"hljs-attr\">name</span>:<span class=\"hljs-string\">'A-bbb'</span>,\n                      <span class=\"hljs-attr\">children</span>:[{\n                          <span class=\"hljs-attr\">checked</span>:<span class=\"hljs-literal\">false</span>,\n                          <span class=\"hljs-attr\">name</span>:<span class=\"hljs-string\">'A-bbb-ccc'</span>\n                      }]\n                  }]\n          }]\n      }\n    },\n    \n    <span class=\"hljs-attr\">methods</span>: {\n    }\n  }\n&lt;<span class=\"hljs-regexp\">/script&gt;\n</span></code></pre>\n\n</section>";

/***/ }

});