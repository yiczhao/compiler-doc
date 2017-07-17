webpackJsonp([5],{

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(156);

/***/ },

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(157)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/dir-3.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 157:
/***/ function(module, exports) {

	module.exports = "<section><h1>目录结构</h1>\n<blockquote>\n<p>简单描述，了解项目结构、关系</p>\n</blockquote>\n<hr>\n<h4>组件目录结构</h4>\n<blockquote>\n<p>为了单独导出组件，要遵循一定的目录结构（方便在编译配置的时候找到相关目录）</p>\n</blockquote>\n<blockquote>\n<h5>具体结构如下</h5>\n</blockquote>\n<pre class=\"ks-hljs\"><code>KsButton\n  |—src\n  |-style\n  |-index.js\n</code></pre>\n<blockquote>\n<p>每个组件为一个文件夹(已Ks开头驼峰命名)<br>\n组件文件夹要有一个index.js 文件作为对外输出</p>\n</blockquote>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-keyword\">import</span> KsButton <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./src/Button.vue'</span>\n<span class=\"hljs-keyword\">import</span> KsNrButton <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./src/NrButton.vue'</span>\n<span class=\"hljs-keyword\">import</span> KsGhostButton <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./src/GhostButton.vue'</span>\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span>{\n  KsButton,\n  KsNrButton,\n  KsGhostButton\n}\n</code></pre>\n<blockquote>\n<p>src目录下 中为具体组件<br>\nstyles目录下 中为组件具体样式【引入公共样式方式如下，别忘了sass下的引入要加@哦】<br>\n组件中的css要加上组件前缀【例：KsPager 组件 css中的前缀为 .KsPager 。落实到具体节点css为 .KsPager-btn】</p>\n</blockquote>\n<pre class=\"ks-hljs\"><code>  @import '~KsComponents/styles/<span class=\"hljs-selector-tag\">base</span>/creater/index';\n  @import '~KsComponents/styles/<span class=\"hljs-selector-tag\">base</span>/ref/index';\n  @import '~KsComponents/styles/common/<span class=\"hljs-attribute\">icon</span>-<span class=\"hljs-selector-tag\">input</span>';\n</code></pre>\n<blockquote>\n<p>组件文件夹下的index.js要导入到外层index.js 文件中，加以自测并完成文档</p>\n</blockquote>\n</section>";

/***/ }

});