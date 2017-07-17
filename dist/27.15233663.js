webpackJsonp([27],{

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(245)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/doc/views/data/tree/index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(246)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/doc/views/data/tree/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 245:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div>
	//     <div class="ibw page-tabs">
	//         <a  class="ib tab" title=""
	//             v-bind:class="{'active':active=='tree/v0.1.0'}" 
	//             v-link="{name:'tree/v0.1.0'}">v0.1.0</a>
	//     </div>
	//     <router-view></router-view>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      active: ''
	    };
	  },

	  route: {
	    data: function data(transiton) {
	      this.active = transiton.to.name;
	    }
	  }

	};
	// </script>

/***/ },

/***/ 246:
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <div class=\"ibw page-tabs\">\n      <a  class=\"ib tab\" title=\"\"\n          v-bind:class=\"{'active':active=='tree/v0.1.0'}\" \n          v-link=\"{name:'tree/v0.1.0'}\">v0.1.0</a>\n  </div>\n  <router-view></router-view>\n</div>\n";

/***/ }

});