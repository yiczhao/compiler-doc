webpackJsonp([4],{

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(56);

/***/ },

/***/ 56:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(57)
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

/***/ 57:
/***/ function(module, exports) {

	module.exports = "<section><h1>简介</h1>\n<blockquote>\n<p>文档列出了KS前端常用<code class=\"ks-code-inline\">公共组件</code><br>\n项目中内置的git<code class=\"ks-code-inline\">子模块</code>在min目录中，<code class=\"ks-code-inline\">npm run components</code>命令导出压缩的组件模块，供后台直出（前端非编译开发）模式使用</p>\n</blockquote>\n<hr>\n<h3>组件编写注意事项</h3>\n<blockquote>\n<p><strong>为了完成增量更新，开发时要注意添加VERSION属性</strong></p>\n</blockquote>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n    <span class=\"hljs-attr\">VERSION</span>:<span class=\"hljs-string\">'1.0.0'</span>,\n    data(){\n\n    }\n    [,...]\n\n}\n</code></pre>\n<h3>组件输出打包</h3>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-comment\">// 全量打包</span>\nnpm run min \n\n<span class=\"hljs-comment\">// 指定组件打包</span>\nnpm run min -a KsDatePicker\n\n<span class=\"hljs-comment\">// 指定多个组件打包</span>\nnpm run min -a KsDatePicker KsPage\n</code></pre>\n<blockquote>\n<h4>在min目录下生成ks目录 ,此目录下会生成相应独立的组件、指令、过滤器</h4>\n<p>【以上单独导出组件要符合一定的目录结构，具体在 <a v-link=\"{name:'dir'}\" title=\"\">目录结构</a> 查看】</p>\n</blockquote>\n<br>\n<h3>组件使用（全局注册）</h3>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-keyword\">import</span> { myModule } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./modulePath'</span>;\n\nVue.component(<span class=\"hljs-string\">'myModule'</span>, myModule);\n</code></pre>\n<h3>组件使用（局部注册）</h3>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-keyword\">import</span> { myModule } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./modulePath'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n  ...\n  components:{\n      myModule\n  }    \n  ...\n}\n</code></pre>\n</section>";

/***/ }

});