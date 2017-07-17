webpackJsonp([61],{

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(390);

/***/ },

/***/ 390:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(391)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/v0.1.0-31.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(392)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/v0.1.0-31.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 391:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template><section><h3>ToolTips</h3>
	// <blockquote>
	// <p>一个悬浮的弹出提示</p>
	// </blockquote>
	// <ks-tool-tips content="我是内容哈哈哈哈哈哈哈">
	//   <h3 style="text-align: center">测试</h3>
	// </ks-tool-tips>
	// <p></p>
	// <ks-tips placement="bottom-start" :show.sync="show">
	//     <span class="tiptxt">性别</span>
	//     <div slot="content">
	//         <div :style="{width:width + 'px'}">
	//             <h3>请选择性别</h3>
	//         </div>
	//     </div>
	// </ks-tips>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-tool-tips</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"我是内容哈哈哈哈哈哈哈"</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">h3</span>&gt;</span>测试<span class="hljs-tag">&lt;/<span class="hljs-name">h3</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">ks-tool-tips</span>&gt;</span>
	//
	// </code></pre>
	//
	// </section></template>
	//
	// <script>
	exports.default = {
	  kscomponents: ['KsPopup_v0', 'KsTips_v0'],
	  data: function data() {

	    return {
	      show: false,
	      width: 500
	    };
	  }
	};
	// </script>

/***/ },

/***/ 392:
/***/ function(module, exports) {

	module.exports = "<section><h3>ToolTips</h3>\n<blockquote>\n<p>一个悬浮的弹出提示</p>\n</blockquote>\n<ks-tool-tips content=\"我是内容哈哈哈哈哈哈哈\">\n  <h3 style=\"text-align: center\">测试</h3>\n</ks-tool-tips>\n<p></p>\n<ks-tips placement=\"bottom-start\" :show.sync=\"show\">\n    <span class=\"tiptxt\">性别</span>\n    <div slot=\"content\">\n        <div :style=\"{width:width + 'px'}\">\n            <h3>请选择性别</h3>\n        </div>\n    </div>\n</ks-tips>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-tool-tips</span> <span class=\"hljs-attr\">content</span>=<span class=\"hljs-string\">\"我是内容哈哈哈哈哈哈哈\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">h3</span>&gt;</span>测试<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">h3</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-tool-tips</span>&gt;</span>\n\n</code></pre>\n\n</section>";

/***/ }

});