webpackJsonp([4],{

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(88);

/***/ },

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(89)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/intro-1.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 89:
/***/ function(module, exports) {

	module.exports = "<section><h1>简介</h1>\n<blockquote>\n<p>文档列出了KS前端常用<code class=\"ks-code-inline\">公共组件</code><br>\n项目中内置的git<code class=\"ks-code-inline\">子模块</code>在min目录中，<code class=\"ks-code-inline\">npm run components</code>命令导出压缩的组件模块，供后台直出（前端非编译开发）模式使用</p>\n</blockquote>\n<hr>\n<h2>组件使用（全局注册）</h2>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-keyword\">import</span> { myModule } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./modulePath'</span>;\n\nVue.component(<span class=\"hljs-string\">'myModule'</span>, myModule);\n</code></pre>\n<h2>组件使用（局部注册）</h2>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-keyword\">import</span> { myModule } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./modulePath'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n    ...\n    components:{\n        myModule\n    }    \n    ...\n}\n</code></pre>\n</section>";

/***/ }

});