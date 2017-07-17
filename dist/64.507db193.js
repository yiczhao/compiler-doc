webpackJsonp([64],{

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(401);

/***/ },

/***/ 401:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(402)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/limit-number-fixed-30.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(403)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/limit-number-fixed-30.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 402:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template><section><h2>#KsLimitNumberFixed 指令</h2>
	// <p>{{val}}<br>
	// <input type="text" v-ks-limit-number-fixed:2="val" max="999" min="-90" v-model="val"></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span>
	//     <span class="hljs-attr">v-ks-limit-number-fixed:2</span>=<span class="hljs-string">"val"</span> <span class="hljs-attr">max</span>=<span class="hljs-string">"999"</span> <span class="hljs-attr">min</span>=<span class="hljs-string">"-90"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"val"</span>&gt;</span>
	// </code></pre>
	// <pre class="ks-hljs"><code>&lt;script type=<span class="hljs-string">"text/javascript"</span>&gt;
	//     <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//         data(){
	//             <span class="hljs-keyword">return</span>{
	//                 <span class="hljs-attr">val</span>:<span class="hljs-string">''</span>
	//             }
	//         }
	//     }
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
	// <td>max</td>
	// <td>最大值（limit为别名）</td>
	// <td>params</td>
	// <td>Number</td>
	// <td><code class="ks-code-inline">非必填</code></td>
	// <td><code class="ks-code-inline">100000</code></td>
	// </tr>
	// <tr>
	// <td>min</td>
	// <td>最小值（只能为赋值）</td>
	// <td>params</td>
	// <td>Number</td>
	// <td><code class="ks-code-inline">非必填</code></td>
	// <td><code class="ks-code-inline">0</code></td>
	// </tr>
	// <tr>
	// <td>:2</td>
	// <td>小数部分</td>
	// <td>arg</td>
	// <td>Number</td>
	// <td><code class="ks-code-inline">非必填</code></td>
	// <td><code class="ks-code-inline">0</code></td>
	// </tr>
	// </tbody>
	// </table></div>
	// </section></template>
	//
	// <script type="text/javascript">
	exports.default = {
	    data: function data() {
	        return {
	            val: ''
	        };
	    }
	};
	// </script>

/***/ },

/***/ 403:
/***/ function(module, exports) {

	module.exports = "<section><h2>#KsLimitNumberFixed 指令</h2>\n<p>{{val}}<br>\n<input type=\"text\" v-ks-limit-number-fixed:2=\"val\" max=\"999\" min=\"-90\" v-model=\"val\"></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span>\n    <span class=\"hljs-attr\">v-ks-limit-number-fixed:2</span>=<span class=\"hljs-string\">\"val\"</span> <span class=\"hljs-attr\">max</span>=<span class=\"hljs-string\">\"999\"</span> <span class=\"hljs-attr\">min</span>=<span class=\"hljs-string\">\"-90\"</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"val\"</span>&gt;</span>\n</code></pre>\n<pre class=\"ks-hljs\"><code>&lt;script type=<span class=\"hljs-string\">\"text/javascript\"</span>&gt;\n    <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n        data(){\n            <span class=\"hljs-keyword\">return</span>{\n                <span class=\"hljs-attr\">val</span>:<span class=\"hljs-string\">''</span>\n            }\n        }\n    }\n&lt;<span class=\"hljs-regexp\">/script&gt;\n</span></code></pre>\n<h3>API</h3>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>max</td>\n<td>最大值（limit为别名）</td>\n<td>params</td>\n<td>Number</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td><code class=\"ks-code-inline\">100000</code></td>\n</tr>\n<tr>\n<td>min</td>\n<td>最小值（只能为赋值）</td>\n<td>params</td>\n<td>Number</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td><code class=\"ks-code-inline\">0</code></td>\n</tr>\n<tr>\n<td>:2</td>\n<td>小数部分</td>\n<td>arg</td>\n<td>Number</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td><code class=\"ks-code-inline\">0</code></td>\n</tr>\n</tbody>\n</table></div>\n</section>";

/***/ }

});