webpackJsonp([37],{

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(282)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/doc/views/data/image/index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(283)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/doc/views/data/image/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 282:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div>
	//     <div class="ibw page-tabs">
	//         <a  class="ib tab" title=""
	//             v-bind:class="{'active':active=='image/v1.0.1'}" 
	//             v-link="{name:'image/v1.0.1'}">v1.0.1</a>
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

/***/ 283:
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <div class=\"ibw page-tabs\">\n      <a  class=\"ib tab\" title=\"\"\n          v-bind:class=\"{'active':active=='image/v1.0.1'}\" \n          v-link=\"{name:'image/v1.0.1'}\">v1.0.1</a>\n  </div>\n  <router-view></router-view>\n</div>\n";

/***/ }

});