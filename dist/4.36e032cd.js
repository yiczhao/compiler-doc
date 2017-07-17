webpackJsonp([4],{

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(153);

/***/ },

/***/ 153:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(154)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/intro-2.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 154:
/***/ function(module, exports) {

	module.exports = "<section><h1>简介</h1>\n<blockquote>\n<p>文档列出了KS前端常用<code class=\"ks-code-inline\">公共组件</code><br>\n项目中内置的git<code class=\"ks-code-inline\">子模块</code>在min目录中，<code class=\"ks-code-inline\">npm run min</code>命令导出压缩的组件模块，供后台直出（前端非编译开发）模式使用</p>\n</blockquote>\n<hr>\n<br>\n<p><code class=\"ks-code-inline\">为了组件的更新迭代，添加相应版本；具体如下</code></p>\n<h3>组件编写注意事项</h3>\n<blockquote>\n<p><strong>为了完成增量更新，开发时要注意添加VERSION属性</strong><br>\n打包后会输出相应版本的文件，如果打包⬇️</p>\n</blockquote>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n    <span class=\"hljs-attr\">VERSION</span>:<span class=\"hljs-string\">'1.0.0'</span>,\n    data(){\n\n    }\n    [,...]\n\n}\n</code></pre>\n<br>\n<p><code class=\"ks-code-inline\">版本多了产生了如下问题</code></p>\n<blockquote>\n<p>1 . 打包时导出所有版本（当前解决方式：每次保留老版本，待新版本构建导出后与老版本合为一起提交发布）<br>\n2 . 多版本文档共存和多版本Demo问题（文档中引入不同版本组件，覆盖声明全局的当前版本组件;原则上可以，但实际造作有些问题）<br>\n3 . 在大量的业务中使用了老版本组件并出现bug(紧急情况下)，原则上是要更换新版本，由于时间迫切并且更换代价过大，此时可以在老版本中做bugfix；后期找时间更换组件版本</p>\n</blockquote>\n<br>\n<p><code class=\"ks-code-inline\">怎么解决生产条件下多版本共存问题？如下</code></p>\n<h3>组件版本语义化</h3>\n<blockquote>\n<p>例如：<strong>版本 3.1.2 ， 一次对应（3为大版本号.1为次版本号.2为修订版本号）</strong><br>\n修订版本号: 紧急的bug修复，并且不调整API的情况下<br>\n次版本号: API增加的情况下<br>\n大版本号: API的更改、删除情况下 或 有重大技术革新情况（要有必要注明）</p>\n</blockquote>\n<p><br><br></p>\n<h4>【有了理论依据】</h4>\n<h4>我们的文档则以大版本为分割，次版本和修正版本均在当前版本文档中描述；</h4>\n<h4>如有大版本更新则需要新建路由并完善文档（重大技术革新是只需调整路由版本号，并备注说明即可）</h4>\n<p><code class=\"ks-code-inline\">为此我们开发了vue插件用来引入版本组件，具体操作如下</code></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n    <span class=\"hljs-attr\">kscomponents</span>:[<span class=\"hljs-string\">'KsPager_v0'</span>],\n    ...\n}\n</code></pre>\n<p><strong><code class=\"ks-code-inline\">有了细粒度的版本控制，我们可以同时保留多个版本，对于使用老版本的项目组，在时间充裕的时候更新组件</code></strong>（在设计上我们也尽力保持向下兼容，让小伙伴们在业务上尽量少的改动）<br>\n<br></p>\n<p><strong><code class=\"ks-code-inline\">开发需要调整部分</code></strong></p>\n<p><br><br></p>\n<blockquote>\n<p>组件调整，添加版本目录（可参考其它已调整组件结构）<br>\n文挡调整，添加版本目录（可参考其他修正文档）<br>\n路由部分调整，添加goName属性（解决点击左侧菜单跳转问题，可参考其他组件路由）</p>\n</blockquote>\n<h3>组件输出打包</h3>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-comment\">// 全量打包</span>\nnpm run min \n\n<span class=\"hljs-comment\">// 指定组件打包</span>\nnpm run min -a KsDatePicker\n\n<span class=\"hljs-comment\">// 指定多个组件打包</span>\nnpm run min -a KsDatePicker KsPage\n</code></pre>\n<blockquote>\n<h4>在min目录下生成ks目录 ,此目录下会生成相应独立的组件、指令、过滤器</h4>\n<p>【以上单独导出组件要符合一定的目录结构，具体在 <a v-link=\"{name:'dir'}\" title=\"\">目录结构</a> 查看】</p>\n</blockquote>\n<br>\n<h3>组件使用（全局注册）</h3>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-keyword\">import</span> { myModule } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./modulePath'</span>;\n\nVue.component(<span class=\"hljs-string\">'myModule'</span>, myModule);\n</code></pre>\n<h3>组件使用（局部注册）</h3>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-keyword\">import</span> { myModule } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'./modulePath'</span>;\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n  ...\n  components:{\n      myModule\n  }    \n  ...\n}\n</code></pre>\n</section>";

/***/ }

});