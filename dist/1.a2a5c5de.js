webpackJsonp([1],{

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(33)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/doc/views/index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(47)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/doc/views/index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 33:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _KHeader = __webpack_require__(34);

	var _KHeader2 = _interopRequireDefault(_KHeader);

	var _KMenu = __webpack_require__(38);

	var _KMenu2 = _interopRequireDefault(_KMenu);

	var _KFooter = __webpack_require__(42);

	var _KFooter2 = _interopRequireDefault(_KFooter);

	var _KCrumbs = __webpack_require__(44);

	var _KCrumbs2 = _interopRequireDefault(_KCrumbs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <div class="app-container">
	//     <k-header></k-header>
	//     <div class="content-container">
	//       <k-menu></k-menu>
	//       <div class="work-container" v-el:main-container>
	//         <k-crumbs></k-crumbs>
	//         <loading-mask></loading-mask>
	//         <div class="router-container">
	//           <div class="router-wrap">
	//             <router-view class="p20"></router-view>
	//           </div>
	//         </div>
	//         <k-footer></k-footer>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {};
	  },


	  components: { KHeader: _KHeader2.default, KMenu: _KMenu2.default, KFooter: _KFooter2.default, KCrumbs: _KCrumbs2.default }
	};
	// </script>

/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(35)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/doc/views/core/KHeader.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(36)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/doc/views/core/KHeader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 35:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <nav class="k-header">
	//     <div class="k-header__item logo-wrap">
	//       <img class="logo" src="../../assets/logo/login-logo.png"
	//            width="160" alt="LOGO">
	//     </div>
	//     <a href="" style="background: #fff ;float: right;">下载</a>
	//   </nav>
	// </template>
	//
	// <script>

	exports.default = {
	  data: function data() {
	    return {};
	  }
	};
	// </script>

/***/ },

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n<nav class=\"k-header\">\n  <div class=\"k-header__item logo-wrap\">\n    <img class=\"logo\" src=\"" + __webpack_require__(37) + "\"\n         width=\"160\" alt=\"LOGO\">\n  </div>\n  <a href=\"\" style=\"background: #fff ;float: right;\">下载</a>\n</nav>\n";

/***/ },

/***/ 37:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },

/***/ 38:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(39)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/doc/views/core/KMenu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(41)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/doc/views/core/KMenu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _menu = __webpack_require__(40);

	var _menu2 = _interopRequireDefault(_menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return { Menu: _menu2.default };
	  }
	};
	// </script>
	// <template>
	//   <nav class="k-menu-container fix l">
	//     <ul class="k-menu" style="overflow-y: scroll">
	//       <div class="menu-container" v-for="mobj in Menu">
	//         <li class="k-menu__item title"
	//             v-text="mobj.name"
	//         ></li>
	//
	//         <div class="subMenuContainer" v-for="smobj in mobj.subMenu">
	//           <li class="k-menu__item trans"
	//               v-link="{name: smobj.link}" :data-ksa="smobj.ksa"
	//           >
	//             <i class="k-menu__icon icon" :class="smobj.icon"></i>
	//             <span v-text="smobj.name"></span>
	//           </li>
	//
	//           <ul class="k-menuSub__container" v-if="smobj.subMenu && smobj.subMenu.length">
	//             <li class="k-menu__item f12" v-for="ssmobj in smobj.subMenu"
	//                 v-link="{name: ssmobj.link}" :data-ksa="ssmobj.ksa"
	//                 style="padding-left: 40px">
	//               <i class="k-menu__icon icon" :class="ssmobj.icon"></i>
	//               <span v-text="ssmobj.name"></span>
	//             </li>
	//           </ul>
	//         </div>
	//
	//
	//       </div>
	//     </ul>
	//   </nav>
	// </template>
	//
	// <script>

/***/ },

/***/ 40:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @author: pkeros.
	 * @date: 2016/6/21.
	 * @mail: pkeros@vip.qq.com
	 * @see: https://www.github.com/pkeros/
	 */

	exports.default = [{
	  name: '引导Guide',
	  subMenu: [{ name: '介绍', icon: 'icon', link: 'intro' }, { name: '目录结构', icon: 'icon', link: 'dir' }]
	}, {
	  name: '基础组件 Base',
	  subMenu: [{
	    name: '基础 Base', icon: 'icon', link: '',
	    subMenu: [
	    // {name: 'Layout 布局', icon: 'icon', link: 'layout'},
	    // {name: 'Color 色彩', icon: 'icon', link: ''},
	    { name: 'Icon 图标', icon: 'icon', link: '' }, { name: 'Button 按钮', icon: 'icon', link: 'button' }]
	  }, {
	    name: '表单 Form', icon: 'icon', link: '',
	    subMenu: [{ name: 'Radio 单选框', icon: 'icon', link: 'radio' }, { name: 'Checkbox 多选框', icon: 'icon', link: 'checkbox' },
	    // {name: 'Input 输入框', icon: 'icon', link: ''},
	    { name: 'Switch 开关', icon: 'icon', link: 'switch' }, { name: 'DatePicker 时间选择器', icon: 'icon', link: 'date-picker' }]
	  }, {
	    name: '数据 Data', icon: 'icon', link: '',
	    subMenu: [
	    // {name: 'Table 表格', icon: 'icon', link: ''},
	    // {name: 'Tag 标签', icon: 'icon', link: ''},
	    // {name: 'Progress 进度条', icon: 'icon', link: ''},
	    // {name: 'Tree 树形控件', icon: 'icon', link: ''},
	    { name: 'Tree 树形组件', icon: 'icon', link: 'tree' }, { name: 'Pagination 分页器', icon: 'icon', link: 'page' }, { name: 'Search 模糊搜索', icon: 'icon', link: 'search' }, { name: 'DropChoose 下拉选择', icon: 'icon', link: 'dropchoose' }, { name: 'DialogChoose 弹出层选择', icon: 'icon', link: 'dialogchoose' }, { name: 'FloorChoose 楼层选择', icon: 'icon', link: 'floorchoose' }, { name: '根据不同用户显示不同表格', icon: 'icon', link: 'addtable' }]
	  }, {
	    name: '通知 Notice', icon: 'icon', link: '',
	    subMenu: [{ name: 'NoticeCenter 通知中心', icon: 'icon', link: 'notice-center' }, { name: 'Dialog 对话框', icon: 'icon', link: 'dialog' }, { name: 'Modal 模态框', icon: 'icon', link: 'modal' }]
	  }, {
	    name: '导航 Navigation', icon: 'icon', link: '',
	    subMenu: [
	      // {name: 'Tabs 标签页', icon: 'icon', link: ''},
	      // {name: 'Breadcrumb 面包屑', icon: 'icon', link: ''},
	      // {name: 'Dropdown 下拉菜单', icon: 'icon', link: ''},
	      // {name: 'Steps 步骤条', icon: 'icon', link: ''}
	    ]
	  }, {
	    name: '验证 Validate', icon: 'icon', link: '',
	    subMenu: [
	      // {name: 'Validate 验证', icon: 'icon', link: 'remark'},
	      // {name: '默认校验规则', icon: 'icon', link: 'rules'}
	    ]
	  }, {
	    name: '其他 Others', icon: 'icon', link: '',
	    subMenu: [{ name: 'Image 查看', icon: 'icon', link: 'image' }, { name: '多标题表格', icon: 'icon', link: 'multiple-table' }]
	  }]
	}, {
	  name: '日志 Log',
	  subMenu: [{ name: '更新日志', icon: 'icon', link: 'update' }]
	}];

/***/ },

/***/ 41:
/***/ function(module, exports) {

	module.exports = "\n<nav class=\"k-menu-container fix l\">\n  <ul class=\"k-menu\" style=\"overflow-y: scroll\">\n    <div class=\"menu-container\" v-for=\"mobj in Menu\">\n      <li class=\"k-menu__item title\"\n          v-text=\"mobj.name\"\n      ></li>\n\n      <div class=\"subMenuContainer\" v-for=\"smobj in mobj.subMenu\">\n        <li class=\"k-menu__item trans\"\n            v-link=\"{name: smobj.link}\" :data-ksa=\"smobj.ksa\"\n        >\n          <i class=\"k-menu__icon icon\" :class=\"smobj.icon\"></i>\n          <span v-text=\"smobj.name\"></span>\n        </li>\n\n        <ul class=\"k-menuSub__container\" v-if=\"smobj.subMenu && smobj.subMenu.length\">\n          <li class=\"k-menu__item f12\" v-for=\"ssmobj in smobj.subMenu\"\n              v-link=\"{name: ssmobj.link}\" :data-ksa=\"ssmobj.ksa\"\n              style=\"padding-left: 40px\">\n            <i class=\"k-menu__icon icon\" :class=\"ssmobj.icon\"></i>\n            <span v-text=\"ssmobj.name\"></span>\n          </li>\n        </ul>\n      </div>\n\n\n    </div>\n  </ul>\n</nav>\n";

/***/ },

/***/ 42:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_template__ = __webpack_require__(43)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/doc/views/core/KFooter.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 43:
/***/ function(module, exports) {

	module.exports = "\n<div id=\"footer\">\n  © {{new Date().getFullYear()}} <a>卡说 · 权限系统</a>\n  <a class=\"beian\" href=\"http://www.miibeian.gov.cn\" target=\"_blank\">南昌网安备案第360101011060901号.</a>\n  <span class=\"r\"><a href=\"http://www.kashuo.com/\" target=\"_blank\">Power by Suzhou KASHUO Inc.</a></span>\n</div>\n";

/***/ },

/***/ 44:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(45)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/doc/views/core/KCrumbs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(46)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/doc/views/core/KCrumbs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 45:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <nav class="k-crumbs-container f14">
	//     <ul class="k-crumbs m0 p0 ell">
	//       <!-- 面包屑 Home 部分图标 -->
	//       <!--<img class="k-crumbs__home" src="../../../static/images/icons/home.png" alt="home icon">-->
	//       <li class="k-crumbs__item" v-for="path in routePath" track-by="$index"
	//       >
	//         <!-- 面包屑导航链接  @click="$router.go({name: path.route})" -->
	//         <a class="k-crumbs__point tdn" :class="routePath.length - 1 === $index && 'k-crumbs__active'"
	//            v-text="path.cn"
	//         ></a>
	//         <span v-if="routePath.length - 1 !== $index"
	//               class="k-crumbs__split">/&nbsp;</span>
	//       </li>
	//     </ul>
	//   </nav>
	// </template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      routePath: []
	    };
	  },

	  methods: {
	    /**
	     * @description 路由变换处理函数
	     * @summary 负责监控路由变换更新 面包屑信息
	     */
	    hashChangeHandle: function hashChangeHandle() {
	      var _this = this;

	      setTimeout(function () {
	        var matched = _this.$route.matched;
	        var matchedLength = matched.length;
	        var arr = [];

	        for (var i = 0; i < matchedLength; i++) {
	          arr.push({ cn: matched[i].handler.cnName, route: matched[i].handler.name });
	        }
	        _this.$set('routePath', arr);
	      }, 77);
	    }
	  },
	  created: function created() {
	    // 初始化面包屑
	    this.hashChangeHandle();

	    window.addEventListener('hashchange', this.hashChangeHandle.bind(this));
	  },
	  destroy: function destroy() {
	    window.removeEventListener('hashchange', this.hashChangeHandle);
	  }
	};
	// </script>

/***/ },

/***/ 46:
/***/ function(module, exports) {

	module.exports = "\n<nav class=\"k-crumbs-container f14\">\n  <ul class=\"k-crumbs m0 p0 ell\">\n    <!-- 面包屑 Home 部分图标 -->\n    <!--<img class=\"k-crumbs__home\" src=\"../../../static/images/icons/home.png\" alt=\"home icon\">-->\n    <li class=\"k-crumbs__item\" v-for=\"path in routePath\" track-by=\"$index\"\n    >\n      <!-- 面包屑导航链接  @click=\"$router.go({name: path.route})\" -->\n      <a class=\"k-crumbs__point tdn\" :class=\"routePath.length - 1 === $index && 'k-crumbs__active'\"\n         v-text=\"path.cn\"\n      ></a>\n      <span v-if=\"routePath.length - 1 !== $index\"\n            class=\"k-crumbs__split\">/&nbsp;</span>\n    </li>\n  </ul>\n</nav>\n";

/***/ },

/***/ 47:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"app-container\">\n  <k-header></k-header>\n  <div class=\"content-container\">\n    <k-menu></k-menu>\n    <div class=\"work-container\" v-el:main-container>\n      <k-crumbs></k-crumbs>\n      <loading-mask></loading-mask>\n      <div class=\"router-container\">\n        <div class=\"router-wrap\">\n          <router-view class=\"p20\"></router-view>\n        </div>\n      </div>\n      <k-footer></k-footer>\n    </div>\n  </div>\n</div>\n";

/***/ }

});