webpackJsonp([44],{

/***/ 489:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(490);

/***/ },

/***/ 490:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(491)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/upload-24.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(492)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/upload-24.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 491:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template><section><h2>Upload</h2>
	// <blockquote>
	// <p>常用文件上传</p>
	// </blockquote>
	// <hr>
	// <p><ks-upload :size="204800" :exts="['jpg','png','jpeg']" :src.sync="upload"></ks-upload></p>
	// <pre class="ks-hljs"><code>    <span class="hljs-tag">&lt;<span class="hljs-name">ks-upload</span>
	//         <span class="hljs-attr">:size</span>=<span class="hljs-string">"204800"</span>
	//         <span class="hljs-attr">:exts</span>=<span class="hljs-string">"['jpg','png','jpeg']"</span>
	//         <span class="hljs-attr">:src.sync</span>=<span class="hljs-string">"upload"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-upload</span>&gt;</span>
	// </code></pre>
	//
	// </section></template>
	//
	// <script type="text/javascript">
	exports.default = {
	    data: function data() {
	        return {
	            upload: ''
	        };
	    }
	};
	// </script>

/***/ },

/***/ 492:
/***/ function(module, exports) {

	module.exports = "<section><h2>Upload</h2>\n<blockquote>\n<p>常用文件上传</p>\n</blockquote>\n<hr>\n<p><ks-upload :size=\"204800\" :exts=\"['jpg','png','jpeg']\" :src.sync=\"upload\"></ks-upload></p>\n<pre class=\"ks-hljs\"><code>    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-upload</span>\n        <span class=\"hljs-attr\">:size</span>=<span class=\"hljs-string\">\"204800\"</span>\n        <span class=\"hljs-attr\">:exts</span>=<span class=\"hljs-string\">\"['jpg','png','jpeg']\"</span>\n        <span class=\"hljs-attr\">:src.sync</span>=<span class=\"hljs-string\">\"upload\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-upload</span>&gt;</span>\n</code></pre>\n\n</section>";

/***/ }

});