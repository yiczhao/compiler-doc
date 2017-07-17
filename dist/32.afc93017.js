webpackJsonp([32],{

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(264);

/***/ },

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(265)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/v1.0.0-15.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(266)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/v1.0.0-15.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 265:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template><section><h2>Search</h2>
	// <br>
	// <blockquote>
	// <p>Author: 辛坚<br>
	// 基本的模糊搜索组件</p>
	// </blockquote>
	// <hr>
	// <br>
	// <blockquote>
	// <blockquote>
	// <p>默认传入/选中item的名称 -- {{dataName}}<br>
	// 选中item的标志值 -- {{dataSign}}</p>
	// </blockquote>
	// </blockquote>
	// <br>
	// <div class="ks-col">
	// 	<ks-search :show.sync="ksSearchShow" :fuzzydata.sync="dataList" sign="uuid" :data-name.sync="dataName" :data-sign.sync="dataSign" @actionSearch="actionSearch">
	// 	</ks-search>
	// </div>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"ks-col"</span>&gt;</span>
	// 	<span class="hljs-tag">&lt;<span class="hljs-name">ks-search</span>
	// 		<span class="hljs-attr">:show.sync</span>=<span class="hljs-string">"ksSearchShow"</span>
	// 		<span class="hljs-attr">:fuzzydata.sync</span>=<span class="hljs-string">"dataList"</span>
	// 		<span class="hljs-attr">sign</span>=<span class="hljs-string">"uuid"</span>
	// 		<span class="hljs-attr">:data-name.sync</span>=<span class="hljs-string">"dataName"</span>
	// 		<span class="hljs-attr">:data-sign.sync</span>=<span class="hljs-string">"dataSign"</span>
	// 		<span class="hljs-attr">@actionSearch</span>=<span class="hljs-string">"actionSearch"</span>&gt;</span>
	// 	<span class="hljs-tag">&lt;/<span class="hljs-name">ks-search</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
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
	// <td>show</td>
	// <td>展示搜索框</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">必填</code></td>
	// <td>无</td>
	// </tr>
	// <tr>
	// <td>disable</td>
	// <td>禁用搜索框</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">非必填</code></td>
	// <td><code class="ks-code-inline">false</code></td>
	// </tr>
	// <tr>
	// <td>placeholder</td>
	// <td>input placeholder</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">非必填</code></td>
	// <td><code class="ks-code-inline">输入关键词搜索</code></td>
	// </tr>
	// <tr>
	// <td>fuzzydata</td>
	// <td>搜索结果集</td>
	// <td>props</td>
	// <td>Array</td>
	// <td><code class="ks-code-inline">必填</code></td>
	// <td>无</td>
	// </tr>
	// <tr>
	// <td>name</td>
	// <td>搜索结果集中显示字段</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">非必填</code></td>
	// <td><code class="ks-code-inline">label</code></td>
	// </tr>
	// <tr>
	// <td>sign</td>
	// <td>提交后台字段（如果需要）</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">非必填</code></td>
	// <td><code class="ks-code-inline">key</code></td>
	// </tr>
	// <tr>
	// <td>data-name</td>
	// <td>选中item的name字段值</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">必填</code></td>
	// <td>无</td>
	// </tr>
	// <tr>
	// <td>data-sign</td>
	// <td>选中item的sign字段值</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">非必填</code></td>
	// <td>无</td>
	// </tr>
	// <tr>
	// <td>debounce</td>
	// <td>调用接口时间间隔（仅响应input事件）<br>click事件与enter事件均为实时</td>
	// <td>props</td>
	// <td>Number</td>
	// <td><code class="ks-code-inline">非必填</code></td>
	// <td><code class="ks-code-inline">777</code></td>
	// </tr>
	// <tr>
	// <td>actionSearch</td>
	// <td>查找结果集</td>
	// <td>props</td>
	// <td>Function</td>
	// <td><code class="ks-code-inline">必填</code></td>
	// <td>无</td>
	// </tr>
	// </tbody>
	// </table></div>
	// <pre class="ks-hljs"><code>&lt;script&gt;
	// 	<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	// 		<span class="hljs-attr">kscomponents</span>: [<span class="hljs-string">'KsSearch_v1'</span>],
	// 		data () {
	// 			<span class="hljs-keyword">return</span> {
	// 				<span class="hljs-attr">dataList</span>: [],
	// 				<span class="hljs-attr">dataName</span>: <span class="hljs-string">'this is default...'</span>,
	// 				<span class="hljs-attr">dataSign</span>: <span class="hljs-string">''</span>,
	// 				<span class="hljs-attr">ksSearchShow</span>: <span class="hljs-literal">false</span>
	// 			}
	// 		},
	// 		<span class="hljs-attr">methods</span>: {
	// 			actionSearch () {
	//
	// 				<span class="hljs-comment">// 实际场景中在这里调用接口 动态改变dataList</span>
	// 				<span class="hljs-keyword">this</span>.dataList =  [
	// 			        {<span class="hljs-attr">uuid</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">'aaaa'</span>},
	// 			        {<span class="hljs-attr">uuid</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">'bbbb'</span>},
	// 			        {<span class="hljs-attr">uuid</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">'cccc'</span>},
	// 			        {<span class="hljs-attr">uuid</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">'dddd'</span>},
	// 			        {<span class="hljs-attr">uuid</span>: <span class="hljs-number">5</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">'eeee'</span>},
	// 			        {<span class="hljs-attr">uuid</span>: <span class="hljs-number">6</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">'ffff'</span>},
	// 			        {<span class="hljs-attr">uuid</span>: <span class="hljs-number">7</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">'gggg'</span>},
	// 			        {<span class="hljs-attr">uuid</span>: <span class="hljs-number">8</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">'hhhh'</span>},
	// 			        {<span class="hljs-attr">uuid</span>: <span class="hljs-number">9</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">'jjjj'</span>},
	// 			        {<span class="hljs-attr">uuid</span>: <span class="hljs-number">10</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">'kkkk'</span>},
	// 			        {<span class="hljs-attr">uuid</span>: <span class="hljs-number">11</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">'llll'</span>},
	// 			        {<span class="hljs-attr">uuid</span>: <span class="hljs-number">12</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">'mmmm'</span>},
	// 			        {<span class="hljs-attr">uuid</span>: <span class="hljs-number">13</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">'nnnn'</span>},
	// 			        {<span class="hljs-attr">uuid</span>: <span class="hljs-number">14</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">'oooo'</span>}
	// 			    ]
	//
	// 			    <span class="hljs-keyword">this</span>.ksSearchShow = <span class="hljs-literal">true</span>
	// 			}
	// 		}
	// 	}
	// &lt;<span class="hljs-regexp">/script&gt;
	// </span></code></pre>
	// </section></template>
	//
	// <script>
	exports.default = {
		kscomponents: ['KsSearch_v1'],
		data: function data() {
			return {
				dataList: [],
				dataName: 'this is default...',
				dataSign: '',
				ksSearchShow: false
			};
		},

		methods: {
			actionSearch: function actionSearch() {

				// 实际场景中在这里调用接口 动态改变dataList
				this.dataList = [{ uuid: 1, label: 'aaaa' }, { uuid: 2, label: 'bbbb' }, { uuid: 3, label: 'cccc' }, { uuid: 4, label: 'dddd' }, { uuid: 5, label: 'eeee' }, { uuid: 6, label: 'ffff' }, { uuid: 7, label: 'gggg' }, { uuid: 8, label: 'hhhh' }, { uuid: 9, label: 'jjjj' }, { uuid: 10, label: 'kkkk' }, { uuid: 11, label: 'llll' }, { uuid: 12, label: 'mmmm' }, { uuid: 13, label: 'nnnn' }, { uuid: 14, label: 'oooo' }];

				this.ksSearchShow = true;
			}
		}
	};
	// </script>

/***/ },

/***/ 266:
/***/ function(module, exports) {

	module.exports = "<section><h2>Search</h2>\n<br>\n<blockquote>\n<p>Author: 辛坚<br>\n基本的模糊搜索组件</p>\n</blockquote>\n<hr>\n<br>\n<blockquote>\n<blockquote>\n<p>默认传入/选中item的名称 -- {{dataName}}<br>\n选中item的标志值 -- {{dataSign}}</p>\n</blockquote>\n</blockquote>\n<br>\n<div class=\"ks-col\">\n\t<ks-search :show.sync=\"ksSearchShow\" :fuzzydata.sync=\"dataList\" sign=\"uuid\" :data-name.sync=\"dataName\" :data-sign.sync=\"dataSign\" @actionSearch=\"actionSearch\">\n\t</ks-search>\n</div>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"ks-col\"</span>&gt;</span>\n\t<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-search</span>\n\t\t<span class=\"hljs-attr\">:show.sync</span>=<span class=\"hljs-string\">\"ksSearchShow\"</span>\n\t\t<span class=\"hljs-attr\">:fuzzydata.sync</span>=<span class=\"hljs-string\">\"dataList\"</span>\n\t\t<span class=\"hljs-attr\">sign</span>=<span class=\"hljs-string\">\"uuid\"</span>\n\t\t<span class=\"hljs-attr\">:data-name.sync</span>=<span class=\"hljs-string\">\"dataName\"</span>\n\t\t<span class=\"hljs-attr\">:data-sign.sync</span>=<span class=\"hljs-string\">\"dataSign\"</span>\n\t\t<span class=\"hljs-attr\">@actionSearch</span>=<span class=\"hljs-string\">\"actionSearch\"</span>&gt;</span>\n\t<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-search</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n</code></pre>\n<h3>API</h3>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>show</td>\n<td>展示搜索框</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">必填</code></td>\n<td>无</td>\n</tr>\n<tr>\n<td>disable</td>\n<td>禁用搜索框</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td><code class=\"ks-code-inline\">false</code></td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>input placeholder</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td><code class=\"ks-code-inline\">输入关键词搜索</code></td>\n</tr>\n<tr>\n<td>fuzzydata</td>\n<td>搜索结果集</td>\n<td>props</td>\n<td>Array</td>\n<td><code class=\"ks-code-inline\">必填</code></td>\n<td>无</td>\n</tr>\n<tr>\n<td>name</td>\n<td>搜索结果集中显示字段</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td><code class=\"ks-code-inline\">label</code></td>\n</tr>\n<tr>\n<td>sign</td>\n<td>提交后台字段（如果需要）</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td><code class=\"ks-code-inline\">key</code></td>\n</tr>\n<tr>\n<td>data-name</td>\n<td>选中item的name字段值</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">必填</code></td>\n<td>无</td>\n</tr>\n<tr>\n<td>data-sign</td>\n<td>选中item的sign字段值</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td>无</td>\n</tr>\n<tr>\n<td>debounce</td>\n<td>调用接口时间间隔（仅响应input事件）<br>click事件与enter事件均为实时</td>\n<td>props</td>\n<td>Number</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td><code class=\"ks-code-inline\">777</code></td>\n</tr>\n<tr>\n<td>actionSearch</td>\n<td>查找结果集</td>\n<td>props</td>\n<td>Function</td>\n<td><code class=\"ks-code-inline\">必填</code></td>\n<td>无</td>\n</tr>\n</tbody>\n</table></div>\n<pre class=\"ks-hljs\"><code>&lt;script&gt;\n\t<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n\t\t<span class=\"hljs-attr\">kscomponents</span>: [<span class=\"hljs-string\">'KsSearch_v1'</span>],\n\t\tdata () {\n\t\t\t<span class=\"hljs-keyword\">return</span> {\n\t\t\t\t<span class=\"hljs-attr\">dataList</span>: [],\n\t\t\t\t<span class=\"hljs-attr\">dataName</span>: <span class=\"hljs-string\">'this is default...'</span>,\n\t\t\t\t<span class=\"hljs-attr\">dataSign</span>: <span class=\"hljs-string\">''</span>,\n\t\t\t\t<span class=\"hljs-attr\">ksSearchShow</span>: <span class=\"hljs-literal\">false</span>\n\t\t\t}\n\t\t},\n\t\t<span class=\"hljs-attr\">methods</span>: {\n\t\t\tactionSearch () {\n\n\t\t\t\t<span class=\"hljs-comment\">// 实际场景中在这里调用接口 动态改变dataList</span>\n\t\t\t\t<span class=\"hljs-keyword\">this</span>.dataList =  [\n\t\t\t        {<span class=\"hljs-attr\">uuid</span>: <span class=\"hljs-number\">1</span>, <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'aaaa'</span>},\n\t\t\t        {<span class=\"hljs-attr\">uuid</span>: <span class=\"hljs-number\">2</span>, <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'bbbb'</span>},\n\t\t\t        {<span class=\"hljs-attr\">uuid</span>: <span class=\"hljs-number\">3</span>, <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'cccc'</span>},\n\t\t\t        {<span class=\"hljs-attr\">uuid</span>: <span class=\"hljs-number\">4</span>, <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'dddd'</span>},\n\t\t\t        {<span class=\"hljs-attr\">uuid</span>: <span class=\"hljs-number\">5</span>, <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'eeee'</span>},\n\t\t\t        {<span class=\"hljs-attr\">uuid</span>: <span class=\"hljs-number\">6</span>, <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'ffff'</span>},\n\t\t\t        {<span class=\"hljs-attr\">uuid</span>: <span class=\"hljs-number\">7</span>, <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'gggg'</span>},\n\t\t\t        {<span class=\"hljs-attr\">uuid</span>: <span class=\"hljs-number\">8</span>, <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'hhhh'</span>},\n\t\t\t        {<span class=\"hljs-attr\">uuid</span>: <span class=\"hljs-number\">9</span>, <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'jjjj'</span>},\n\t\t\t        {<span class=\"hljs-attr\">uuid</span>: <span class=\"hljs-number\">10</span>, <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'kkkk'</span>},\n\t\t\t        {<span class=\"hljs-attr\">uuid</span>: <span class=\"hljs-number\">11</span>, <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'llll'</span>},\n\t\t\t        {<span class=\"hljs-attr\">uuid</span>: <span class=\"hljs-number\">12</span>, <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'mmmm'</span>},\n\t\t\t        {<span class=\"hljs-attr\">uuid</span>: <span class=\"hljs-number\">13</span>, <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'nnnn'</span>},\n\t\t\t        {<span class=\"hljs-attr\">uuid</span>: <span class=\"hljs-number\">14</span>, <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'oooo'</span>}\n\t\t\t    ]\n\n\t\t\t    <span class=\"hljs-keyword\">this</span>.ksSearchShow = <span class=\"hljs-literal\">true</span>\n\t\t\t}\n\t\t}\n\t}\n&lt;<span class=\"hljs-regexp\">/script&gt;\n</span></code></pre>\n</section>";

/***/ }

});