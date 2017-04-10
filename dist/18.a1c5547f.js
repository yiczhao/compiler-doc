webpackJsonp([18],{

/***/ 134:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(135);

/***/ },

/***/ 135:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(136)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/search-12.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(137)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/search-12.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 136:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template><section><h2>Fuzzy Search</h2>
	// <blockquote>
	// <p>模糊搜索</p>
	// </blockquote>
	// <hr>
	// <blockquote>
	// <blockquote>
	// <p>调用模糊搜索组件的文件内部信息显示：<br>
	// 当前结果集查询的关键词 -- {{keywords}}<br>
	// 提交选中item的名称 -- {{dataName}}<br>
	// 提交选中item的id -- {{dataId}}</p>
	// </blockquote>
	// </blockquote>
	// <hr>
	// <p><ks-search :fuzzydata.sync="dataList" :resultattr="'id'" @actionSearch="actionSearch" @actionSelect="actionSelect"><br>
	// </ks-search></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-search</span> 
	// 	<span class="hljs-attr">:fuzzydata.sync</span>=<span class="hljs-string">"dataList"</span>
	// 	<span class="hljs-attr">:resultattr</span>=<span class="hljs-string">"'id'"</span>
	// 	<span class="hljs-attr">@actionSearch</span>=<span class="hljs-string">"actionSearch"</span>
	// 	<span class="hljs-attr">@actionSelect</span>=<span class="hljs-string">"actionSelect"</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">ks-search</span>&gt;</span>
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
	// <td>disabled</td>
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
	// <td>resultattr</td>
	// <td>提交后台字段</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">非必填</code></td>
	// <td><code class="ks-code-inline">key</code></td>
	// </tr>
	// <tr>
	// <td>datalabel</td>
	// <td>显示名称字段</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">非必填</code></td>
	// <td><code class="ks-code-inline">label</code></td>
	// </tr>
	// <tr>
	// <td>debounce</td>
	// <td>重新调用接口间隔</td>
	// <td>props</td>
	// <td>Number</td>
	// <td><code class="ks-code-inline">非必填</code></td>
	// <td><code class="ks-code-inline">500</code></td>
	// </tr>
	// <tr>
	// <td>actionSearch</td>
	// <td>查找结果集</td>
	// <td>props</td>
	// <td>Function</td>
	// <td><code class="ks-code-inline">必填</code></td>
	// <td>无</td>
	// </tr>
	// <tr>
	// <td>actionSelect</td>
	// <td>选择某个搜索结果</td>
	// <td>props</td>
	// <td>Function</td>
	// <td><code class="ks-code-inline">必填</code></td>
	// <td>无</td>
	// </tr>
	// </tbody>
	// </table></div>
	// <pre class="ks-hljs"><code>&lt;script&gt;
	// 	<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	// 		data () {
	// 			<span class="hljs-keyword">return</span> {
	// 				<span class="hljs-attr">dataList</span>: [],
	// 				<span class="hljs-attr">keywords</span>: <span class="hljs-string">''</span>,
	// 				<span class="hljs-attr">dataName</span>: <span class="hljs-string">''</span>, <span class="hljs-comment">// 名称</span>
	// 				dataId: <span class="hljs-string">''</span>  <span class="hljs-comment">// 该字段提交给后台</span>
	// 			}
	// 		},
	// 		<span class="hljs-attr">methods</span>: {
	// 			actionSearch (keywords) {
	//
	// 				<span class="hljs-comment">// keywords为带入后台查询的参数</span>
	// 				<span class="hljs-keyword">this</span>.keywords = keywords
	//
	// 				<span class="hljs-comment">// 实际场景中在这里调用接口 动态改变dataList</span>
	// 				<span class="hljs-keyword">this</span>.dataList =  [
	// 			        {<span class="hljs-attr">id</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">'aaaa'</span>},
	// 			        {<span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">'bbbb'</span>},
	// 			        {<span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">'cccc'</span>},
	// 			        {<span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">'dddd'</span>},
	// 			        {<span class="hljs-attr">id</span>: <span class="hljs-number">5</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">'eeee'</span>},
	// 			        {<span class="hljs-attr">id</span>: <span class="hljs-number">6</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">'ffff'</span>},
	// 			        {<span class="hljs-attr">id</span>: <span class="hljs-number">7</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">'gggg'</span>},
	// 			        {<span class="hljs-attr">id</span>: <span class="hljs-number">5</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">'hhhh'</span>},
	// 			        {<span class="hljs-attr">id</span>: <span class="hljs-number">8</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">'iiii'</span>},
	// 			        {<span class="hljs-attr">id</span>: <span class="hljs-number">9</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">'jjjj'</span>},
	// 			        {<span class="hljs-attr">id</span>: <span class="hljs-number">10</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">'kkkk'</span>},
	// 			        {<span class="hljs-attr">id</span>: <span class="hljs-number">11</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">'llll'</span>},
	// 			        {<span class="hljs-attr">id</span>: <span class="hljs-number">12</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">'mmmm'</span>},
	// 			        {<span class="hljs-attr">id</span>: <span class="hljs-number">13</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">'nnnn'</span>},
	// 			        {<span class="hljs-attr">id</span>: <span class="hljs-number">14</span>, <span class="hljs-attr">label</span>: <span class="hljs-string">'oooo'</span>}
	// 			    ]
	// 			},
	// 			actionSelect (dataId, dataName) {
	//
	// 				<span class="hljs-comment">// dataId是选中项的关键属性，与resultattr有关</span>
	// 				<span class="hljs-comment">// 传入的resultattr是'id'时，dataId就是对应选中项的id属性</span>
	// 				<span class="hljs-comment">// dataName是选中项的名称</span>
	// 				<span class="hljs-keyword">this</span>.dataId = dataId
	// 				<span class="hljs-keyword">this</span>.dataName = dataName
	// 			}
	// 		}
	// 	}
	// &lt;<span class="hljs-regexp">/script&gt;
	// </span></code></pre>
	// </section></template>
	//
	// <script>
	exports.default = {
		data: function data() {
			return {
				dataList: [],
				keywords: '',
				dataName: '', // 名称
				dataId: '' // 该字段提交给后台
			};
		},

		methods: {
			actionSearch: function actionSearch(keywords) {

				// keywords为带入后台查询的参数
				this.keywords = keywords;

				// 实际场景中在这里调用接口 动态改变dataList
				this.dataList = [{ id: 1, label: 'aaaa' }, { id: 2, label: 'bbbb' }, { id: 3, label: 'cccc' }, { id: 4, label: 'dddd' }, { id: 5, label: 'eeee' }, { id: 6, label: 'ffff' }, { id: 7, label: 'gggg' }, { id: 5, label: 'hhhh' }, { id: 8, label: 'iiii' }, { id: 9, label: 'jjjj' }, { id: 10, label: 'kkkk' }, { id: 11, label: 'llll' }, { id: 12, label: 'mmmm' }, { id: 13, label: 'nnnn' }, { id: 14, label: 'oooo' }];
			},
			actionSelect: function actionSelect(dataId, dataName) {

				// dataId是选中项的关键属性，与resultattr有关
				// 传入的resultattr是'id'时，dataId就是对应选中项的id属性
				// dataName是选中项的名称
				this.dataId = dataId;
				this.dataName = dataName;
			}
		}
	};
	// </script>

/***/ },

/***/ 137:
/***/ function(module, exports) {

	module.exports = "<section><h2>Fuzzy Search</h2>\n<blockquote>\n<p>模糊搜索</p>\n</blockquote>\n<hr>\n<blockquote>\n<blockquote>\n<p>调用模糊搜索组件的文件内部信息显示：<br>\n当前结果集查询的关键词 -- {{keywords}}<br>\n提交选中item的名称 -- {{dataName}}<br>\n提交选中item的id -- {{dataId}}</p>\n</blockquote>\n</blockquote>\n<hr>\n<p><ks-search :fuzzydata.sync=\"dataList\" :resultattr=\"'id'\" @actionSearch=\"actionSearch\" @actionSelect=\"actionSelect\"><br>\n</ks-search></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-search</span> \n\t<span class=\"hljs-attr\">:fuzzydata.sync</span>=<span class=\"hljs-string\">\"dataList\"</span>\n\t<span class=\"hljs-attr\">:resultattr</span>=<span class=\"hljs-string\">\"'id'\"</span>\n\t<span class=\"hljs-attr\">@actionSearch</span>=<span class=\"hljs-string\">\"actionSearch\"</span>\n\t<span class=\"hljs-attr\">@actionSelect</span>=<span class=\"hljs-string\">\"actionSelect\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-search</span>&gt;</span>\n</code></pre>\n<h3>API</h3>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>disabled</td>\n<td>禁用搜索框</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td><code class=\"ks-code-inline\">false</code></td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>input placeholder</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td><code class=\"ks-code-inline\">输入关键词搜索</code></td>\n</tr>\n<tr>\n<td>fuzzydata</td>\n<td>搜索结果集</td>\n<td>props</td>\n<td>Array</td>\n<td><code class=\"ks-code-inline\">必填</code></td>\n<td>无</td>\n</tr>\n<tr>\n<td>resultattr</td>\n<td>提交后台字段</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td><code class=\"ks-code-inline\">key</code></td>\n</tr>\n<tr>\n<td>datalabel</td>\n<td>显示名称字段</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td><code class=\"ks-code-inline\">label</code></td>\n</tr>\n<tr>\n<td>debounce</td>\n<td>重新调用接口间隔</td>\n<td>props</td>\n<td>Number</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td><code class=\"ks-code-inline\">500</code></td>\n</tr>\n<tr>\n<td>actionSearch</td>\n<td>查找结果集</td>\n<td>props</td>\n<td>Function</td>\n<td><code class=\"ks-code-inline\">必填</code></td>\n<td>无</td>\n</tr>\n<tr>\n<td>actionSelect</td>\n<td>选择某个搜索结果</td>\n<td>props</td>\n<td>Function</td>\n<td><code class=\"ks-code-inline\">必填</code></td>\n<td>无</td>\n</tr>\n</tbody>\n</table></div>\n<pre class=\"ks-hljs\"><code>&lt;script&gt;\n\t<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n\t\tdata () {\n\t\t\t<span class=\"hljs-keyword\">return</span> {\n\t\t\t\t<span class=\"hljs-attr\">dataList</span>: [],\n\t\t\t\t<span class=\"hljs-attr\">keywords</span>: <span class=\"hljs-string\">''</span>,\n\t\t\t\t<span class=\"hljs-attr\">dataName</span>: <span class=\"hljs-string\">''</span>, <span class=\"hljs-comment\">// 名称</span>\n\t\t\t\tdataId: <span class=\"hljs-string\">''</span>  <span class=\"hljs-comment\">// 该字段提交给后台</span>\n\t\t\t}\n\t\t},\n\t\t<span class=\"hljs-attr\">methods</span>: {\n\t\t\tactionSearch (keywords) {\n\n\t\t\t\t<span class=\"hljs-comment\">// keywords为带入后台查询的参数</span>\n\t\t\t\t<span class=\"hljs-keyword\">this</span>.keywords = keywords\n\n\t\t\t\t<span class=\"hljs-comment\">// 实际场景中在这里调用接口 动态改变dataList</span>\n\t\t\t\t<span class=\"hljs-keyword\">this</span>.dataList =  [\n\t\t\t        {<span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">1</span>, <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'aaaa'</span>},\n\t\t\t        {<span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">2</span>, <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'bbbb'</span>},\n\t\t\t        {<span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">3</span>, <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'cccc'</span>},\n\t\t\t        {<span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">4</span>, <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'dddd'</span>},\n\t\t\t        {<span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">5</span>, <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'eeee'</span>},\n\t\t\t        {<span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">6</span>, <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'ffff'</span>},\n\t\t\t        {<span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">7</span>, <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'gggg'</span>},\n\t\t\t        {<span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">5</span>, <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'hhhh'</span>},\n\t\t\t        {<span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">8</span>, <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'iiii'</span>},\n\t\t\t        {<span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">9</span>, <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'jjjj'</span>},\n\t\t\t        {<span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">10</span>, <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'kkkk'</span>},\n\t\t\t        {<span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">11</span>, <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'llll'</span>},\n\t\t\t        {<span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">12</span>, <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'mmmm'</span>},\n\t\t\t        {<span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">13</span>, <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'nnnn'</span>},\n\t\t\t        {<span class=\"hljs-attr\">id</span>: <span class=\"hljs-number\">14</span>, <span class=\"hljs-attr\">label</span>: <span class=\"hljs-string\">'oooo'</span>}\n\t\t\t    ]\n\t\t\t},\n\t\t\tactionSelect (dataId, dataName) {\n\n\t\t\t\t<span class=\"hljs-comment\">// dataId是选中项的关键属性，与resultattr有关</span>\n\t\t\t\t<span class=\"hljs-comment\">// 传入的resultattr是'id'时，dataId就是对应选中项的id属性</span>\n\t\t\t\t<span class=\"hljs-comment\">// dataName是选中项的名称</span>\n\t\t\t\t<span class=\"hljs-keyword\">this</span>.dataId = dataId\n\t\t\t\t<span class=\"hljs-keyword\">this</span>.dataName = dataName\n\t\t\t}\n\t\t}\n\t}\n&lt;<span class=\"hljs-regexp\">/script&gt;\n</span></code></pre>\n</section>";

/***/ }

});