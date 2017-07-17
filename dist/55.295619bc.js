webpackJsonp([55],{

/***/ 370:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(371);

/***/ },

/***/ 371:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(372)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/v0.1.0-29.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(373)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/v0.1.0-29.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 372:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template><section><h2>KsTabs</h2>
	// <blockquote>
	// <p><strong>Author:张大柱</strong><br>
	// 常用tab切换组件</p>
	// </blockquote>
	// <hr>
	// <br>
	// <div style="">
	// <ks-tabs v-on:change="KsTabsChange" rerender="">
	//     <ks-tab title="aaaaaaa" status="active">
	//         aa-内容
	//     </ks-tab>
	//     <ks-tab title="<h4>bb</h4>">
	//         bb-内容
	//     </ks-tab>
	//     <ks-tab title="<h4><ks-icon name='weixinzhifu'></ks-icon>cc</h4>">
	//         cc-内容<ks-icon name="weixinzhifu"></ks-icon>
	//     </ks-tab>
	// </ks-tabs>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-tabs</span> <span class="hljs-attr">v-on:change</span>=<span class="hljs-string">"KsTabsChange"</span> <span class="hljs-attr">rerender</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">ks-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"aaaaaaa"</span> <span class="hljs-attr">status</span>=<span class="hljs-string">"active"</span>&gt;</span>
	//         aa-内容
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">ks-tab</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">ks-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"&lt;h4&gt;bb&lt;/h4&gt;"</span>&gt;</span>
	//         bb-内容
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">ks-tab</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">ks-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"&lt;h4&gt;&lt;ks-icon name='weixinzhifu'&gt;&lt;/ks-icon&gt;cc&lt;/h4&gt;"</span>&gt;</span>
	//         cc-内容<span class="hljs-tag">&lt;<span class="hljs-name">ks-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">'weixinzhifu'</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-icon</span>&gt;</span>
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">ks-tab</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">ks-tabs</span>&gt;</span>
	// </code></pre>
	// <br>
	// <ks-tabs type="border">
	//     <ks-tab title="<h1>aa</h1>">
	//         aa-内容
	//     </ks-tab>
	//     <ks-tab title="<span>bb</span>">
	//         bb-内容
	//     </ks-tab>
	//     <ks-tab title="<span>cc</span>">
	//         cc-内容
	//     </ks-tab>
	// </ks-tabs>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-tabs</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"border"</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">ks-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"&lt;h1&gt;aa&lt;/h1&gt;"</span>&gt;</span>
	//         aa-内容
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">ks-tab</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">ks-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"&lt;span&gt;bb&lt;/span&gt;"</span>&gt;</span>
	//         bb-内容
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">ks-tab</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">ks-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"&lt;span&gt;cc&lt;/span&gt;"</span>&gt;</span>
	//         cc-内容
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">ks-tab</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">ks-tabs</span>&gt;</span>
	// </code></pre>
	// <br>
	// <ks-tabs type="underline" v-on:change="KsTabsChange">
	//     <ks-tab title="<h1>aa</h1>">
	//         aa-内容
	//     </ks-tab>
	//     <ks-tab title="<span>bb</span>" v-bind:status="active">
	//         bb-内容
	//     </ks-tab>
	//     <ks-tab title="<span>cc</span>">
	//         cc-内容
	//     </ks-tab>
	// </ks-tabs>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-tabs</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"underline"</span> <span class="hljs-attr">v-on:change</span>=<span class="hljs-string">"KsTabsChange"</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">ks-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"&lt;h1&gt;aa&lt;/h1&gt;"</span>&gt;</span>
	//         aa-内容
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">ks-tab</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">ks-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"&lt;span&gt;bb&lt;/span&gt;"</span> <span class="hljs-attr">v-bind:status</span>=<span class="hljs-string">"active"</span>&gt;</span>
	//         bb-内容
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">ks-tab</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">ks-tab</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"&lt;span&gt;cc&lt;/span&gt;"</span>&gt;</span>
	//         cc-内容
	//     <span class="hljs-tag">&lt;/<span class="hljs-name">ks-tab</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">ks-tabs</span>&gt;</span>
	// </code></pre>
	// </div>
	// <h3>API</h3>
	// <div class="table-striped"><table class="table-entity"><thead>
	// <tr>
	// <th>参数</th>
	// <th>说明</th>
	// <th>接口类型</th>
	// <th>类型</th>
	// <th>双向（twoWay）</th>
	// <th>是否必须</th>
	// <th>可选值</th>
	// <th>默认值</th>
	// </tr>
	// </thead>
	// <tbody>
	// <tr>
	// <td>type</td>
	// <td>KsTabs类型</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td><code class="ks-code-inline">overline``underline``border</code></td>
	// <td><code class="ks-code-inline">overline</code></td>
	// </tr>
	// <tr>
	// <td>v-on:change</td>
	// <td>tab改变时触发</td>
	// <td>props</td>
	// <td>Event</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td></td>
	// <td></td>
	// </tr>
	// <tr>
	// <td>status</td>
	// <td>当前状态(选中)</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td><code class="ks-code-inline">active</code></td>
	// <td></td>
	// </tr>
	// </tbody>
	// </table></div><br>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text/javascript"</span>&gt;</span><span class="javascript">
	//     <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//         data(){
	//             <span class="hljs-keyword">return</span> {
	//                 <span class="hljs-attr">active</span>:<span class="hljs-string">'active'</span>
	//             }
	//         },
	//         <span class="hljs-attr">methods</span>:{
	//             KsTabsChange(res){
	//                 <span class="hljs-built_in">console</span>.log(res)
	//             }
	//         }
	//     }
	// </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	// </code></pre>
	//
	// </section></template>
	//
	// <script type="text/javascript">
	exports.default = {
	    kscomponents: ['KsTabs_v0', 'KsIcon_v0'],
	    data: function data() {
	        return {
	            active: ''
	        };
	    },

	    methods: {
	        KsTabsChange: function KsTabsChange(res) {
	            console.log('KsTabsChange', res);
	        }
	    },
	    created: function created() {
	        var _this = this;

	        setTimeout(function () {
	            _this.active = 'active';
	        }, 4000);
	    }
	};
	// </script>

/***/ },

/***/ 373:
/***/ function(module, exports) {

	module.exports = "<section><h2>KsTabs</h2>\n<blockquote>\n<p><strong>Author:张大柱</strong><br>\n常用tab切换组件</p>\n</blockquote>\n<hr>\n<br>\n<div style=\"\">\n<ks-tabs v-on:change=\"KsTabsChange\" rerender=\"\">\n    <ks-tab title=\"aaaaaaa\" status=\"active\">\n        aa-内容\n    </ks-tab>\n    <ks-tab title=\"<h4>bb</h4>\">\n        bb-内容\n    </ks-tab>\n    <ks-tab title=\"<h4><ks-icon name='weixinzhifu'></ks-icon>cc</h4>\">\n        cc-内容<ks-icon name=\"weixinzhifu\"></ks-icon>\n    </ks-tab>\n</ks-tabs>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-tabs</span> <span class=\"hljs-attr\">v-on:change</span>=<span class=\"hljs-string\">\"KsTabsChange\"</span> <span class=\"hljs-attr\">rerender</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-tab</span> <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">\"aaaaaaa\"</span> <span class=\"hljs-attr\">status</span>=<span class=\"hljs-string\">\"active\"</span>&gt;</span>\n        aa-内容\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-tab</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-tab</span> <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">\"&lt;h4&gt;bb&lt;/h4&gt;\"</span>&gt;</span>\n        bb-内容\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-tab</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-tab</span> <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">\"&lt;h4&gt;&lt;ks-icon name='weixinzhifu'&gt;&lt;/ks-icon&gt;cc&lt;/h4&gt;\"</span>&gt;</span>\n        cc-内容<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-icon</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">'weixinzhifu'</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-icon</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-tab</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-tabs</span>&gt;</span>\n</code></pre>\n<br>\n<ks-tabs type=\"border\">\n    <ks-tab title=\"<h1>aa</h1>\">\n        aa-内容\n    </ks-tab>\n    <ks-tab title=\"<span>bb</span>\">\n        bb-内容\n    </ks-tab>\n    <ks-tab title=\"<span>cc</span>\">\n        cc-内容\n    </ks-tab>\n</ks-tabs>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-tabs</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"border\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-tab</span> <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">\"&lt;h1&gt;aa&lt;/h1&gt;\"</span>&gt;</span>\n        aa-内容\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-tab</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-tab</span> <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">\"&lt;span&gt;bb&lt;/span&gt;\"</span>&gt;</span>\n        bb-内容\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-tab</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-tab</span> <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">\"&lt;span&gt;cc&lt;/span&gt;\"</span>&gt;</span>\n        cc-内容\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-tab</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-tabs</span>&gt;</span>\n</code></pre>\n<br>\n<ks-tabs type=\"underline\" v-on:change=\"KsTabsChange\">\n    <ks-tab title=\"<h1>aa</h1>\">\n        aa-内容\n    </ks-tab>\n    <ks-tab title=\"<span>bb</span>\" v-bind:status=\"active\">\n        bb-内容\n    </ks-tab>\n    <ks-tab title=\"<span>cc</span>\">\n        cc-内容\n    </ks-tab>\n</ks-tabs>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-tabs</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"underline\"</span> <span class=\"hljs-attr\">v-on:change</span>=<span class=\"hljs-string\">\"KsTabsChange\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-tab</span> <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">\"&lt;h1&gt;aa&lt;/h1&gt;\"</span>&gt;</span>\n        aa-内容\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-tab</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-tab</span> <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">\"&lt;span&gt;bb&lt;/span&gt;\"</span> <span class=\"hljs-attr\">v-bind:status</span>=<span class=\"hljs-string\">\"active\"</span>&gt;</span>\n        bb-内容\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-tab</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-tab</span> <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">\"&lt;span&gt;cc&lt;/span&gt;\"</span>&gt;</span>\n        cc-内容\n    <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-tab</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-tabs</span>&gt;</span>\n</code></pre>\n</div>\n<h3>API</h3>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>双向（twoWay）</th>\n<th>是否必须</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>KsTabs类型</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td><code class=\"ks-code-inline\">overline``underline``border</code></td>\n<td><code class=\"ks-code-inline\">overline</code></td>\n</tr>\n<tr>\n<td>v-on:change</td>\n<td>tab改变时触发</td>\n<td>props</td>\n<td>Event</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>status</td>\n<td>当前状态(选中)</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td><code class=\"ks-code-inline\">active</code></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><br>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text/javascript\"</span>&gt;</span><span class=\"javascript\">\n    <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n        data(){\n            <span class=\"hljs-keyword\">return</span> {\n                <span class=\"hljs-attr\">active</span>:<span class=\"hljs-string\">'active'</span>\n            }\n        },\n        <span class=\"hljs-attr\">methods</span>:{\n            KsTabsChange(res){\n                <span class=\"hljs-built_in\">console</span>.log(res)\n            }\n        }\n    }\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre>\n\n</section>";

/***/ }

});