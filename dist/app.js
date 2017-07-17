webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _App = __webpack_require__(5);

	var _App2 = _interopRequireDefault(_App);

	var _vue = __webpack_require__(7);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueRouter = __webpack_require__(103);

	var _vueRouter2 = _interopRequireDefault(_vueRouter);

	var _vueResource = __webpack_require__(104);

	var _vueResource2 = _interopRequireDefault(_vueResource);

	var _vueValidator = __webpack_require__(763);

	var _vueValidator2 = _interopRequireDefault(_vueValidator);

	var _router = __webpack_require__(128);

	var _router2 = _interopRequireDefault(_router);

	var _components = __webpack_require__(408);

	var _components2 = _interopRequireDefault(_components);

	var _directives = __webpack_require__(743);

	var _directives2 = _interopRequireDefault(_directives);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description application main logic file.
	 * @author pkeros
	 * @data 16/6/1
	 * @email pkeros@vip.qq.com
	 */

	__webpack_require__(2);

	// Vue configure
	_vue2.default.config.debug = process.env.NODE_ENV !== 'production';

	// attach plugin.
	_vue2.default.use(_vueResource2.default);
	_vue2.default.use(_vueRouter2.default);
	_vue2.default.use(_vueValidator2.default);

	// attach utils
	_vue2.default.use(_directives2.default);

	// attach components
	_vue2.default.use(_components2.default);

	// router configure.
	var router = new _vueRouter2.default({
	  history: false,
	  hashbang: true,
	  saveScrollPosition: true,
	  suppressTransitionError: true
	});
	(0, _router2.default)(router);

	var app = _vue2.default.extend(_App2.default);
	router.start(app, '#app');
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(6)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/doc/App.vue: named exports in *.vue files are ignored.")}
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/doc/App.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <script>
	exports.default = {
	  data: function data() {
	    return {};
	  }
	};
	// </script>

/***/ },
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	/**
	 * @description application router file.
	 * @author pkeros
	 * @data 16/6/1
	 * @email pkeros@vip.qq.com
	 */

	exports.default = function (router) {

	  // 路由映射
	  router.map({

	    /* 主页 */
	    '/': {
	      name: 'index',
	      cnName: '主页',
	      component: function component(resolve) {
	        __webpack_require__.e/* require */(67, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(129)]; (function (res) {
	          resolve(res);
	        }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
	      },

	      subRoutes: {

	        /* 欢迎页面 */
	        '/': {
	          name: 'welcome',
	          cnName: '欢迎页面',
	          component: function component(resolve) {
	            __webpack_require__.e/* require */(68, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(145)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	          }
	        },
	        '/home': {
	          name: 'welcome',
	          cnName: '欢迎页面',
	          component: function component(resolve) {
	            __webpack_require__.e/* require */(68/* duplicate */, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(145)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	          }
	        },

	        /* 引导 */
	        '/guide': {
	          name: 'guide',
	          cnName: '介绍',
	          component: function component(resolve) {
	            __webpack_require__.e/* require */(69, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(149)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	          },
	          subRoutes: {
	            '/intro': {
	              name: 'intro',
	              cnName: '介绍',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(70, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(152)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            },
	            '/dir': {
	              name: 'dir',
	              cnName: '目录结构',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(71, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(155)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            }
	          }
	        },

	        /* 基础组件 */
	        '/base': {
	          name: 'base',
	          cnName: '基础组件',
	          component: function component(resolve) {
	            __webpack_require__.e/* require */(72, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(158)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	          },

	          subRoutes: {

	            /* 基础组件-图标 */
	            '/icons': {
	              name: 'icons',
	              cnName: '图标',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(73, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(764)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            },

	            /* 基础组件-图标 */
	            '/icons-list': {
	              name: 'icons-list',
	              cnName: '卡说图标库',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(74, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(767)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            },

	            /* 基础组件-布局 */
	            '/layout': {
	              name: 'layout',
	              cnName: '布局',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(75, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(183)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            },

	            /* 基础组件-按钮 */
	            '/button': {
	              name: 'button',
	              cnName: '按钮',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(76, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(773)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            }
	          }
	        },

	        /* form */
	        '/form': {
	          name: 'form',
	          cnName: '表单',
	          component: function component(resolve) {
	            __webpack_require__.e/* require */(77, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(195)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	          },

	          subRoutes: {

	            /* 基础组件-布局 */
	            '/date-picker': {
	              name: 'date-picker',
	              cnName: '时间选择器',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(78, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(779)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            },

	            /* 基础组件-单选框 */
	            '/radio': {
	              name: 'radio',
	              cnName: '单选框',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(79, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(783)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            },

	            /* 基础组件-复选框 */
	            '/checkbox': {
	              name: 'checkbox',
	              cnName: '复选框',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(80, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(787)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            },

	            /* 基础组件-IOS 风格开关 */
	            '/switch': {
	              name: 'switch',
	              cnName: 'IOS 风格开关',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(81, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(791)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            }
	          }
	        },

	        /* data */
	        '/data': {
	          name: 'data',
	          cnName: '数据展示',
	          component: function component(resolve) {
	            __webpack_require__.e/* require */(82, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(230)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	          },

	          subRoutes: {

	            /* 基础组件-布局 */
	            '/page': {
	              name: 'page',
	              cnName: '分页',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(83, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(795)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            },

	            /* 数据展示-树形组件 */
	            '/tree': {
	              name: 'tree',
	              cnName: '树形组件',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(84, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(799)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            },

	            '/dropchoose': {
	              name: 'dropchoose',
	              cnName: '下拉选择',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(85, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(827)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            },

	            '/search': {
	              name: 'search',
	              cnName: '模糊搜索',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(86, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(831)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            },

	            '/dialogchoose': {
	              name: 'dialogchoose',
	              cnName: '弹出层选择',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(87, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(835)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            },

	            '/floorchoose': {
	              name: 'floorchoose',
	              cnName: '楼层选择',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(88, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(839)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            },

	            /* 基础组件-图片 */
	            '/image': {
	              name: 'image',
	              cnName: '图片',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(89, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(843)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            },
	            '/ksimg': {
	              name: 'ksimg',
	              cnName: '图片',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(90, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(847)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            },

	            '/addtable': {
	              name: 'addtable',
	              cnName: '表格添加',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(91, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(851)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            },

	            /* 多标题表格 */
	            '/multiple-table': {
	              name: 'multiple-table',
	              cnName: '图片',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(92, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(855)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            },

	            /* 定项表格 */
	            '/setitem-table': {
	              name: 'setitem-table',
	              cnName: '定项表格',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(93, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(861)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            }

	          }
	        },

	        /* 通知组件 */
	        '/notice': {
	          name: 'notice',
	          cnName: '通知组件',
	          component: function component(resolve) {
	            __webpack_require__.e/* require */(94, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(332)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	          },

	          subRoutes: {

	            /* 通知组件-通知中心 */
	            '/notice-center': {
	              name: 'notice-center',
	              cnName: '对话框',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(95, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(868)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            },

	            /* 通知组件-对话框 */
	            '/dialog': {
	              name: 'dialog',
	              cnName: '对话框',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(96, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(872)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            },

	            /* 通知组件-模态框 */
	            '/modal': {
	              name: 'modal',
	              cnName: '模态框',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(97, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(876)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            }
	          }
	        },

	        /* validate */
	        '/validate': {
	          name: 'validate',
	          cnName: '验证',
	          component: function component(resolve) {
	            __webpack_require__.e/* require */(98, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(374)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	          },

	          subRoutes: {
	            /* 说明 */
	            '/remark': {
	              name: 'remark',
	              cnName: '说明',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(99, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(377)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            },
	            /* 说明 */
	            '/rules': {
	              name: 'rules',
	              cnName: '默认校验规则',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(100, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(380)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            }
	          }
	        },

	        /* other */
	        '/other': {
	          name: 'other',
	          cnName: '其他',
	          component: function component(resolve) {
	            __webpack_require__.e/* require */(101, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(383)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	          },
	          subRoutes: {
	            /* 更新日志 */
	            '/tooltips': {
	              name: 'tooltips',
	              cnName: '弹出提示',
	              component: function component(resolve) {
	                __webpack_require__.e/* require */(102, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(880)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	              }
	            }
	          }
	        },

	        /* log */
	        '/log': {
	          name: 'log',
	          cnName: '更新日志',
	          component: function component(resolve) {
	            __webpack_require__.e/* require */(103, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(404)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this));
	          }
	        }

	      }
	    }
	  });
	};

/***/ },
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Plugins = exports.Components = undefined;

	var _keys = __webpack_require__(100);

	var _keys2 = _interopRequireDefault(_keys);

	var _KsPopup = __webpack_require__(409);

	var _KsNoticeCenter = __webpack_require__(892);

	var _KsNoticeCenter2 = _interopRequireDefault(_KsNoticeCenter);

	var _KsSwitch = __webpack_require__(439);

	var _KsSwitch2 = _interopRequireDefault(_KsSwitch);

	var _KsDialog = __webpack_require__(451);

	var _KsModal = __webpack_require__(487);

	var _KsCheckbox = __webpack_require__(501);

	var _KsCheckbox2 = _interopRequireDefault(_KsCheckbox);

	var _KsMask = __webpack_require__(513);

	var _KsRadio = __webpack_require__(514);

	var _KsRadio2 = _interopRequireDefault(_KsRadio);

	var _KsButton = __webpack_require__(538);

	var _KsPager = __webpack_require__(539);

	var _KsPager2 = _interopRequireDefault(_KsPager);

	var _KsDater = __webpack_require__(557);

	var _KsDater2 = _interopRequireDefault(_KsDater);

	var _KsDropChoose = __webpack_require__(622);

	var _KsDropChoose2 = _interopRequireDefault(_KsDropChoose);

	var _KsSearch = __webpack_require__(634);

	var _KsSearch2 = _interopRequireDefault(_KsSearch);

	var _KsDialogChoose = __webpack_require__(641);

	var _KsDialogChoose2 = _interopRequireDefault(_KsDialogChoose);

	var _KsFloorSelect = __webpack_require__(658);

	var _KsFloorSelect2 = _interopRequireDefault(_KsFloorSelect);

	var _KsDialogProgram = __webpack_require__(670);

	var _KsDialogProgram2 = _interopRequireDefault(_KsDialogProgram);

	var _KsAddTable = __webpack_require__(672);

	var _KsAddTable2 = _interopRequireDefault(_KsAddTable);

	var _KsImage = __webpack_require__(679);

	var _KsIcon = __webpack_require__(691);

	var _KsIcon2 = _interopRequireDefault(_KsIcon);

	var _KsTip = __webpack_require__(1092);

	var _KsTable = __webpack_require__(711);

	var _KsTable2 = _interopRequireDefault(_KsTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 版本
	var VERSION = '1.0.0';

	// 组件
	/**
	 * @description 卡说前端公用库
	 * @summary
	 *  公用库中包含了一些通用的 `组件` `指令` `过滤器` 等.
	 * @author pkeros.
	 * @date 2016/11/11.
	 */

	var Components = {

	  VERSION: VERSION,
	  KsMaskEntity: _KsMask.KsMaskEntity,
	  KsDialogEntity: _KsDialog.KsDialogEntity,
	  KsModalEntity: _KsModal.KsModalEntity,
	  KsModalCenter: _KsModal.KsModalCenter,
	  KsPage: _KsPager2.default,
	  KsIcon: _KsIcon2.default,
	  KsSwitch: _KsSwitch2.default,
	  KsCheckbox: _KsCheckbox2.default,
	  KsRadio: _KsRadio2.default,
	  KsButton: _KsButton.KsButton,
	  KsButtonAbstract: _KsButton.KsButtonAbstract,
	  KsToolTips: _KsPopup.KsToolTips,
	  KsDater: _KsDater2.default,
	  KsStore: _KsDropChoose2.default,
	  KsSearch: _KsSearch2.default,
	  KsDialogChoose: _KsDialogChoose2.default,
	  KsItem: _KsFloorSelect2.default,
	  KsDialogProgram: _KsDialogProgram2.default,
	  KsImage: _KsImage.KsImage,
	  KsImgs: _KsImage.KsImgs,
	  KsAddTableItem: _KsAddTable2.default,
	  KsAbstract: _KsTip.KsAbstract,
	  KsTips: _KsTip.KsTips,
	  KsTable: _KsTable2.default

	};

	// 插件
	var Plugins = {

	  VERSION: VERSION,
	  KsNoticeCenter: _KsNoticeCenter2.default,
	  KsDialog: _KsDialog.KsDialog,
	  KsMask: _KsMask.KsMask,
	  KsModal: _KsModal.KsModal

	};

	var install = function install(Vue) {
	  if (install.installed) return;

	  (0, _keys2.default)(Components).reduce(function (arr, k) {
	    var temp = void 0;

	    if (Components[k].template) {
	      temp = { name: k, val: Components[k] };
	    } else {
	      temp = (0, _keys2.default)(Components[k]).map(function (key) {
	        return { name: key, val: Components[k][key] };
	      });
	    }

	    return arr.concat(temp);
	  }, []).forEach(function (item) {
	    Vue.component(item.name, item.val);
	  });

	  // install plugins.
	  (0, _keys2.default)(Plugins).forEach(function (k) {
	    if (k === 'VERSION') return;
	    Plugins[k].install(Vue);
	  });
	};

	// automation register components.
	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue);
	}

	exports.default = install;
	exports.Components = Components;
	exports.Plugins = Plugins;

/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.KsToolTips = exports.KsPopup = undefined;

	var _abstract = __webpack_require__(884);

	var _abstract2 = _interopRequireDefault(_abstract);

	var _tips = __webpack_require__(887);

	var _tips2 = _interopRequireDefault(_tips);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description: tooltip 组件.
	 * @author: pkeros.
	 * @date: 2016/11/14.
	 */

	exports.KsPopup = _abstract2.default;
	exports.KsToolTips = _tips2.default;

/***/ },
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _popper = __webpack_require__(414);

	var _popper2 = _interopRequireDefault(_popper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @param {HTMLElement} [reference=$refs.reference] - The reference element used to position the popper.
	 * @param {HTMLElement} [popper=$refs.popper] - The HTML element used as popper, or a configuration used to generate the popper.
	 * @param {String} [placement=button] - Placement of the popper accepted values: top(-start, -end), right(-start, -end), bottom(-start, -right), left(-start, -end)
	 * @param {Number} [offset=0] - Amount of pixels the popper will be shifted (can be negative).
	 * @param {Boolean} [visible=false] Visibility of the popup element.
	 * @param {Boolean} [visible-arrow=false] Visibility of the arrow, no style.
	 */
	exports.default = {
	  props: {
	    placement: { type: String, default: 'bottom' },
	    boundariesPadding: { type: Number, default: 5 },
	    reference: Object,
	    popper: Object,
	    offset: { default: 0 },
	    value: Boolean,
	    visibleArrow: Boolean,
	    transition: String,
	    options: { type: Object, default: function _default() {
	        return {};
	      }
	    }
	  },

	  data: function data() {
	    return {
	      showPopper: false
	    };
	  },


	  watch: {
	    value: {
	      immediate: true,
	      handler: function handler(val) {
	        this.showPopper = val;
	        this.$emit('input', val);
	      }
	    },

	    showPopper: function showPopper(val) {
	      val ? this.updatePopper() : this.destroyPopper();
	      this.$emit('input', val);
	    }
	  },

	  methods: {
	    createPopper: function createPopper() {
	      var _this = this;

	      if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.placement)) {
	        return;
	      }

	      var options = this.options;
	      var popper = this.popper || this.$els.popper;
	      var reference = this.reference || this.$els.reference;

	      if (!popper || !reference) return;
	      if (this.visibleArrow) {
	        this.appendArrow(popper);
	      }

	      if (this.popperJS && this.popperJS.hasOwnProperty('destroy')) {
	        this.popperJS.destroy();
	      }

	      options.placement = this.placement;
	      options.offset = this.offset;

	      this.$nextTick(function () {
	        _this.popperJS = new _popper2.default(reference, popper, options);
	        _this.popperJS.onCreate(function (popper) {
	          _this.resetTransformOrigin(popper);
	          _this.$emit('created', _this);
	        });
	      });
	    },
	    updatePopper: function updatePopper() {
	      if (this.popperJS) {
	        this.popperJS.update();
	      } else {
	        this.createPopper();
	      }
	    },
	    doDestroy: function doDestroy() {
	      if (this.showPopper) return;
	      this.popperJS.destroy();
	      this.popperJS = null;
	    },
	    destroyPopper: function destroyPopper() {
	      if (this.popperJS) {
	        this.resetTransformOrigin(this.popperJS);
	      }
	    },
	    resetTransformOrigin: function resetTransformOrigin(popper) {
	      var placementMap = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' };
	      var placement = popper._popper.getAttribute('x-placement').split('-')[0];
	      var origin = placementMap[placement];
	      popper._popper.style.transformOrigin = ['top', 'bottom'].indexOf(placement) > -1 ? 'center ' + origin : origin + ' center';
	    },
	    appendArrow: function appendArrow(element) {
	      var hash = void 0;
	      if (this.appended) {
	        return;
	      }

	      this.appended = true;

	      for (var item in element.attributes) {
	        if (/^_v-/.test(element.attributes[item].name)) {
	          hash = element.attributes[item].name;
	          break;
	        }
	      }

	      var arrow = document.createElement('div');

	      if (hash) {
	        arrow.setAttribute(hash, '');
	      }
	      arrow.setAttribute('x-arrow', '');
	      arrow.className = this.arrowClassName;
	      element.appendChild(arrow);
	    }
	  },

	  beforeDestroy: function beforeDestroy() {
	    if (this.popperJS) {
	      this.popperJS.destroy();
	    }
	  }
	};

/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _getOwnPropertyDescriptor = __webpack_require__(8);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	var _keys = __webpack_require__(100);

	var _keys2 = _interopRequireDefault(_keys);

	var _assign = __webpack_require__(415);

	var _assign2 = _interopRequireDefault(_assign);

	var _typeof2 = __webpack_require__(70);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @fileOverview Kickass library to create and place poppers near their reference elements.
	 * @version {{version}}
	 * @license
	 * Copyright (c) 2016 Federico Zivolo and contributors
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 * SOFTWARE.
	 */

	//
	// Cross module loader
	// Supported: Node, AMD, Browser globals
	//
	;(function (root, factory) {
	    if (true) {
	        // AMD. Register as an anonymous module.
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if ((typeof module === 'undefined' ? 'undefined' : (0, _typeof3.default)(module)) === 'object' && module.exports) {
	        // Node. Does not work with strict CommonJS, but
	        // only CommonJS-like environments that support module.exports,
	        // like Node.
	        module.exports = factory();
	    } else {
	        // Browser globals (root is window)
	        root.Popper = factory();
	    }
	})(undefined, function () {

	    'use strict';

	    var root = window;

	    // default options
	    var DEFAULTS = {
	        // placement of the popper
	        placement: 'bottom',

	        gpuAcceleration: true,

	        // shift popper from its origin by the given amount of pixels (can be negative)
	        offset: 0,

	        // the element which will act as boundary of the popper
	        boundariesElement: 'viewport',

	        // amount of pixel used to define a minimum distance between the boundaries and the popper
	        boundariesPadding: 5,

	        // popper will try to prevent overflow following this order,
	        // by default, then, it could overflow on the left and on top of the boundariesElement
	        preventOverflowOrder: ['left', 'right', 'top', 'bottom'],

	        // the behavior used by flip to change the placement of the popper
	        flipBehavior: 'flip',

	        arrowElement: '[x-arrow]',

	        // list of functions used to modify the offsets before they are applied to the popper
	        modifiers: ['shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle'],

	        modifiersIgnored: [],

	        forceAbsolute: false
	    };

	    /**
	     * Create a new Popper.js instance
	     * @constructor Popper
	     * @param {HTMLElement} reference - The reference element used to position the popper
	     * @param {HTMLElement|Object} popper
	     *      The HTML element used as popper, or a configuration used to generate the popper.
	     * @param {String} [popper.tagName='div'] The tag name of the generated popper.
	     * @param {Array} [popper.classNames=['popper']] Array of classes to apply to the generated popper.
	     * @param {Array} [popper.attributes] Array of attributes to apply, specify `attr:value` to assign a value to it.
	     * @param {HTMLElement|String} [popper.parent=window.document.body] The parent element, given as HTMLElement or as query string.
	     * @param {String} [popper.content=''] The content of the popper, it can be text, html, or node; if it is not text, set `contentType` to `html` or `node`.
	     * @param {String} [popper.contentType='text'] If `html`, the `content` will be parsed as HTML. If `node`, it will be appended as-is.
	     * @param {String} [popper.arrowTagName='div'] Same as `popper.tagName` but for the arrow element.
	     * @param {Array} [popper.arrowClassNames='popper__arrow'] Same as `popper.classNames` but for the arrow element.
	     * @param {String} [popper.arrowAttributes=['x-arrow']] Same as `popper.attributes` but for the arrow element.
	     * @param {Object} options
	     * @param {String} [options.placement=bottom]
	     *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -right),
	     *      left(-start, -end)`
	     *
	     * @param {HTMLElement|String} [options.arrowElement='[x-arrow]']
	     *      The DOM Node used as arrow for the popper, or a CSS selector used to get the DOM node. It must be child of
	     *      its parent Popper. Popper.js will apply to the given element the style required to align the arrow with its
	     *      reference element.
	     *      By default, it will look for a child node of the popper with the `x-arrow` attribute.
	     *
	     * @param {Boolean} [options.gpuAcceleration=true]
	     *      When this property is set to true, the popper position will be applied using CSS3 translate3d, allowing the
	     *      browser to use the GPU to accelerate the rendering.
	     *      If set to false, the popper will be placed using `top` and `left` properties, not using the GPU.
	     *
	     * @param {Number} [options.offset=0]
	     *      Amount of pixels the popper will be shifted (can be negative).
	     *
	     * @param {String|Element} [options.boundariesElement='viewport']
	     *      The element which will define the boundaries of the popper position, the popper will never be placed outside
	     *      of the defined boundaries (except if `keepTogether` is enabled)
	     *
	     * @param {Number} [options.boundariesPadding=5]
	     *      Additional padding for the boundaries
	     *
	     * @param {Array} [options.preventOverflowOrder=['left', 'right', 'top', 'bottom']]
	     *      Order used when Popper.js tries to avoid overflows from the boundaries, they will be checked in order,
	     *      this means that the last ones will never overflow
	     *
	     * @param {String|Array} [options.flipBehavior='flip']
	     *      The behavior used by the `flip` modifier to change the placement of the popper when the latter is trying to
	     *      overlap its reference element. Defining `flip` as value, the placement will be flipped on
	     *      its axis (`right - left`, `top - bottom`).
	     *      You can even pass an array of placements (eg: `['right', 'left', 'top']` ) to manually specify
	     *      how alter the placement when a flip is needed. (eg. in the above example, it would first flip from right to left,
	     *      then, if even in its new placement, the popper is overlapping its reference element, it will be moved to top)
	     *
	     * @param {Array} [options.modifiers=[ 'shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle']]
	     *      List of functions used to modify the data before they are applied to the popper, add your custom functions
	     *      to this array to edit the offsets and placement.
	     *      The function should reflect the @params and @returns of preventOverflow
	     *
	     * @param {Array} [options.modifiersIgnored=[]]
	     *      Put here any built-in modifier name you want to exclude from the modifiers list
	     *      The function should reflect the @params and @returns of preventOverflow
	     *
	     * @param {Boolean} [options.removeOnDestroy=false]
	     *      Set to true if you want to automatically remove the popper when you call the `destroy` method.
	     */
	    function Popper(reference, popper, options) {
	        this._reference = reference.jquery ? reference[0] : reference;
	        this.state = {};

	        // if the popper variable is a configuration object, parse it to generate an HTMLElement
	        // generate a default popper if is not defined
	        var isNotDefined = typeof popper === 'undefined' || popper === null;
	        var isConfig = popper && Object.prototype.toString.call(popper) === '[object Object]';
	        if (isNotDefined || isConfig) {
	            this._popper = this.parse(isConfig ? popper : {});
	        }
	        // otherwise, use the given HTMLElement as popper
	        else {
	                this._popper = popper.jquery ? popper[0] : popper;
	            }

	        // with {} we create a new object with the options inside it
	        this._options = (0, _assign2.default)({}, DEFAULTS, options);

	        // refactoring modifiers' list
	        this._options.modifiers = this._options.modifiers.map(function (modifier) {
	            // remove ignored modifiers
	            if (this._options.modifiersIgnored.indexOf(modifier) !== -1) return;

	            // set the x-placement attribute before everything else because it could be used to add margins to the popper
	            // margins needs to be calculated to get the correct popper offsets
	            if (modifier === 'applyStyle') {
	                this._popper.setAttribute('x-placement', this._options.placement);
	            }

	            // return predefined modifier identified by string or keep the custom one
	            return this.modifiers[modifier] || modifier;
	        }.bind(this));

	        // make sure to apply the popper position before any computation
	        this.state.position = this._getPosition(this._popper, this._reference);
	        setStyle(this._popper, { position: this.state.position });

	        // fire the first update to position the popper in the right place
	        this.update();

	        // setup event listeners, they will take care of update the position in specific situations
	        this._setupEventListeners();
	        return this;
	    }

	    //
	    // Methods
	    //
	    /**
	     * Destroy the popper
	     * @method
	     * @memberof Popper
	     */
	    Popper.prototype.destroy = function () {
	        this._popper.removeAttribute('x-placement');
	        this._popper.style.left = '';
	        this._popper.style.position = '';
	        this._popper.style.top = '';
	        this._popper.style[getSupportedPropertyName('transform')] = '';
	        this._removeEventListeners();

	        // remove the popper if user explicity asked for the deletion on destroy
	        if (this._options.removeOnDestroy) {
	            this._popper.remove();
	        }
	        return this;
	    };

	    /**
	     * Updates the position of the popper, computing the new offsets and applying the new style
	     * @method
	     * @memberof Popper
	     */
	    Popper.prototype.update = function () {
	        var data = { instance: this, styles: {} };

	        // store placement inside the data object, modifiers will be able to edit `placement` if needed
	        // and refer to _originalPlacement to know the original value
	        data.placement = this._options.placement;
	        data._originalPlacement = this._options.placement;

	        // compute the popper and reference offsets and put them inside data.offsets
	        data.offsets = this._getOffsets(this._popper, this._reference, data.placement);

	        // get boundaries
	        data.boundaries = this._getBoundaries(data, this._options.boundariesPadding, this._options.boundariesElement);

	        data = this.runModifiers(data, this._options.modifiers);

	        if (typeof this.state.updateCallback === 'function') {
	            this.state.updateCallback(data);
	        }
	    };

	    /**
	     * If a function is passed, it will be executed after the initialization of popper with as first argument the Popper instance.
	     * @method
	     * @memberof Popper
	     * @param {Function} callback
	     */
	    Popper.prototype.onCreate = function (callback) {
	        // the createCallbacks return as first argument the popper instance
	        callback(this);
	        return this;
	    };

	    /**
	     * If a function is passed, it will be executed after each update of popper with as first argument the set of coordinates and informations
	     * used to style popper and its arrow.
	     * NOTE: it doesn't get fired on the first call of the `Popper.update()` method inside the `Popper` constructor!
	     * @method
	     * @memberof Popper
	     * @param {Function} callback
	     */
	    Popper.prototype.onUpdate = function (callback) {
	        this.state.updateCallback = callback;
	        return this;
	    };

	    /**
	     * Helper used to generate poppers from a configuration file
	     * @method
	     * @memberof Popper
	     * @param config {Object} configuration
	     * @returns {HTMLElement} popper
	     */
	    Popper.prototype.parse = function (config) {
	        var defaultConfig = {
	            tagName: 'div',
	            classNames: ['popper'],
	            attributes: [],
	            parent: root.document.body,
	            content: '',
	            contentType: 'text',
	            arrowTagName: 'div',
	            arrowClassNames: ['popper__arrow'],
	            arrowAttributes: ['x-arrow']
	        };
	        config = (0, _assign2.default)({}, defaultConfig, config);

	        var d = root.document;

	        var popper = d.createElement(config.tagName);
	        addClassNames(popper, config.classNames);
	        addAttributes(popper, config.attributes);
	        if (config.contentType === 'node') {
	            popper.appendChild(config.content.jquery ? config.content[0] : config.content);
	        } else if (config.contentType === 'html') {
	            popper.innerHTML = config.content;
	        } else {
	            popper.textContent = config.content;
	        }

	        if (config.arrowTagName) {
	            var arrow = d.createElement(config.arrowTagName);
	            addClassNames(arrow, config.arrowClassNames);
	            addAttributes(arrow, config.arrowAttributes);
	            popper.appendChild(arrow);
	        }

	        var parent = config.parent.jquery ? config.parent[0] : config.parent;

	        // if the given parent is a string, use it to match an element
	        // if more than one element is matched, the first one will be used as parent
	        // if no elements are matched, the script will throw an error
	        if (typeof parent === 'string') {
	            parent = d.querySelectorAll(config.parent);
	            if (parent.length > 1) {
	                console.warn('WARNING: the given `parent` query(' + config.parent + ') matched more than one element, the first one will be used');
	            }
	            if (parent.length === 0) {
	                throw 'ERROR: the given `parent` doesn\'t exists!';
	            }
	            parent = parent[0];
	        }
	        // if the given parent is a DOM nodes list or an array of nodes with more than one element,
	        // the first one will be used as parent
	        if (parent.length > 1 && parent instanceof Element === false) {
	            console.warn('WARNING: you have passed as parent a list of elements, the first one will be used');
	            parent = parent[0];
	        }

	        // append the generated popper to its parent
	        parent.appendChild(popper);

	        return popper;

	        /**
	         * Adds class names to the given element
	         * @function
	         * @ignore
	         * @param {HTMLElement} target
	         * @param {Array} classes
	         */
	        function addClassNames(element, classNames) {
	            classNames.forEach(function (className) {
	                element.classList.add(className);
	            });
	        }

	        /**
	         * Adds attributes to the given element
	         * @function
	         * @ignore
	         * @param {HTMLElement} target
	         * @param {Array} attributes
	         * @example
	         * addAttributes(element, [ 'data-info:foobar' ]);
	         */
	        function addAttributes(element, attributes) {
	            attributes.forEach(function (attribute) {
	                element.setAttribute(attribute.split(':')[0], attribute.split(':')[1] || '');
	            });
	        }
	    };

	    /**
	     * Helper used to get the position which will be applied to the popper
	     * @method
	     * @memberof Popper
	     * @param config {HTMLElement} popper element
	     * @returns {HTMLElement} reference element
	     */
	    Popper.prototype._getPosition = function (popper, reference) {
	        var container = getOffsetParent(reference);

	        if (this._options.forceAbsolute) {
	            return 'absolute';
	        }

	        // Decide if the popper will be fixed
	        // If the reference element is inside a fixed context, the popper will be fixed as well to allow them to scroll together
	        var isParentFixed = isFixed(reference, container);
	        return isParentFixed ? 'fixed' : 'absolute';
	    };

	    /**
	     * Get offsets to the popper
	     * @method
	     * @memberof Popper
	     * @access private
	     * @param {Element} popper - the popper element
	     * @param {Element} reference - the reference element (the popper will be relative to this)
	     * @returns {Object} An object containing the offsets which will be applied to the popper
	     */
	    Popper.prototype._getOffsets = function (popper, reference, placement) {
	        placement = placement.split('-')[0];
	        var popperOffsets = {};

	        popperOffsets.position = this.state.position;
	        var isParentFixed = popperOffsets.position === 'fixed';

	        //
	        // Get reference element position
	        //
	        var referenceOffsets = getOffsetRectRelativeToCustomParent(reference, getOffsetParent(popper), isParentFixed);

	        //
	        // Get popper sizes
	        //
	        var popperRect = getOuterSizes(popper);

	        //
	        // Compute offsets of popper
	        //

	        // depending by the popper placement we have to compute its offsets slightly differently
	        if (['right', 'left'].indexOf(placement) !== -1) {
	            popperOffsets.top = referenceOffsets.top + referenceOffsets.height / 2 - popperRect.height / 2;
	            if (placement === 'left') {
	                popperOffsets.left = referenceOffsets.left - popperRect.width;
	            } else {
	                popperOffsets.left = referenceOffsets.right;
	            }
	        } else {
	            popperOffsets.left = referenceOffsets.left + referenceOffsets.width / 2 - popperRect.width / 2;
	            if (placement === 'top') {
	                popperOffsets.top = referenceOffsets.top - popperRect.height;
	            } else {
	                popperOffsets.top = referenceOffsets.bottom;
	            }
	        }

	        // Add width and height to our offsets object
	        popperOffsets.width = popperRect.width;
	        popperOffsets.height = popperRect.height;

	        return {
	            popper: popperOffsets,
	            reference: referenceOffsets
	        };
	    };

	    /**
	     * Setup needed event listeners used to update the popper position
	     * @method
	     * @memberof Popper
	     * @access private
	     */
	    Popper.prototype._setupEventListeners = function () {
	        // NOTE: 1 DOM access here
	        this.state.updateBound = this.update.bind(this);
	        root.addEventListener('resize', this.state.updateBound);
	        // if the boundariesElement is window we don't need to listen for the scroll event
	        if (this._options.boundariesElement !== 'window') {
	            var target = getScrollParent(this._reference);
	            // here it could be both `body` or `documentElement` thanks to Firefox, we then check both
	            if (target === root.document.body || target === root.document.documentElement) {
	                target = root;
	            }
	            target.addEventListener('scroll', this.state.updateBound);
	        }
	    };

	    /**
	     * Remove event listeners used to update the popper position
	     * @method
	     * @memberof Popper
	     * @access private
	     */
	    Popper.prototype._removeEventListeners = function () {
	        // NOTE: 1 DOM access here
	        root.removeEventListener('resize', this.state.updateBound);
	        if (this._options.boundariesElement !== 'window') {
	            var target = getScrollParent(this._reference);
	            // here it could be both `body` or `documentElement` thanks to Firefox, we then check both
	            if (target === root.document.body || target === root.document.documentElement) {
	                target = root;
	            }
	            target.removeEventListener('scroll', this.state.updateBound);
	        }
	        this.state.updateBound = null;
	    };

	    /**
	     * Computed the boundaries limits and return them
	     * @method
	     * @memberof Popper
	     * @access private
	     * @param {Object} data - Object containing the property "offsets" generated by `_getOffsets`
	     * @param {Number} padding - Boundaries padding
	     * @param {Element} boundariesElement - Element used to define the boundaries
	     * @returns {Object} Coordinates of the boundaries
	     */
	    Popper.prototype._getBoundaries = function (data, padding, boundariesElement) {
	        // NOTE: 1 DOM access here
	        var boundaries = {};
	        var width, height;
	        if (boundariesElement === 'window') {
	            var body = root.document.body,
	                html = root.document.documentElement;

	            height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
	            width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);

	            boundaries = {
	                top: 0,
	                right: width,
	                bottom: height,
	                left: 0
	            };
	        } else if (boundariesElement === 'viewport') {
	            var offsetParent = getOffsetParent(this._popper);
	            var scrollParent = getScrollParent(this._popper);
	            var offsetParentRect = getOffsetRect(offsetParent);

	            // if the popper is fixed we don't have to substract scrolling from the boundaries
	            var scrollTop = data.offsets.popper.position === 'fixed' ? 0 : scrollParent.scrollTop;
	            var scrollLeft = data.offsets.popper.position === 'fixed' ? 0 : scrollParent.scrollLeft;

	            boundaries = {
	                top: 0 - (offsetParentRect.top - scrollTop),
	                right: root.document.documentElement.clientWidth - (offsetParentRect.left - scrollLeft),
	                bottom: root.document.documentElement.clientHeight - (offsetParentRect.top - scrollTop),
	                left: 0 - (offsetParentRect.left - scrollLeft)
	            };
	        } else {
	            if (getOffsetParent(this._popper) === boundariesElement) {
	                boundaries = {
	                    top: 0,
	                    left: 0,
	                    right: boundariesElement.clientWidth,
	                    bottom: boundariesElement.clientHeight
	                };
	            } else {
	                boundaries = getOffsetRect(boundariesElement);
	            }
	        }
	        boundaries.left += padding;
	        boundaries.right -= padding;
	        boundaries.top = boundaries.top + padding;
	        boundaries.bottom = boundaries.bottom - padding;
	        return boundaries;
	    };

	    /**
	     * Loop trough the list of modifiers and run them in order, each of them will then edit the data object
	     * @method
	     * @memberof Popper
	     * @access public
	     * @param {Object} data
	     * @param {Array} modifiers
	     * @param {Function} ends
	     */
	    Popper.prototype.runModifiers = function (data, modifiers, ends) {
	        var modifiersToRun = modifiers.slice();
	        if (ends !== undefined) {
	            modifiersToRun = this._options.modifiers.slice(0, getArrayKeyIndex(this._options.modifiers, ends));
	        }

	        modifiersToRun.forEach(function (modifier) {
	            if (isFunction(modifier)) {
	                data = modifier.call(this, data);
	            }
	        }.bind(this));

	        return data;
	    };

	    /**
	     * Helper used to know if the given modifier depends from another one.
	     * @method
	     * @memberof Popper
	     * @returns {Boolean}
	     */

	    Popper.prototype.isModifierRequired = function (requesting, requested) {
	        var index = getArrayKeyIndex(this._options.modifiers, requesting);
	        return !!this._options.modifiers.slice(0, index).filter(function (modifier) {
	            return modifier === requested;
	        }).length;
	    };

	    //
	    // Modifiers
	    //

	    /**
	     * Modifiers list
	     * @namespace Popper.modifiers
	     * @memberof Popper
	     * @type {Object}
	     */
	    Popper.prototype.modifiers = {};

	    /**
	     * Apply the computed styles to the popper element
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by `update` method
	     * @returns {Object} The same data object
	     */
	    Popper.prototype.modifiers.applyStyle = function (data) {
	        // apply the final offsets to the popper
	        // NOTE: 1 DOM access here
	        var styles = {
	            position: data.offsets.popper.position
	        };

	        // round top and left to avoid blurry text
	        var left = Math.round(data.offsets.popper.left);
	        var top = Math.round(data.offsets.popper.top);

	        // if gpuAcceleration is set to true and transform is supported, we use `translate3d` to apply the position to the popper
	        // we automatically use the supported prefixed version if needed
	        var prefixedProperty;
	        if (this._options.gpuAcceleration && (prefixedProperty = getSupportedPropertyName('transform'))) {
	            styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
	            styles.top = 0;
	            styles.left = 0;
	        }
	        // othwerise, we use the standard `left` and `top` properties
	        else {
	                styles.left = left;
	                styles.top = top;
	            }

	        // any property present in `data.styles` will be applied to the popper,
	        // in this way we can make the 3rd party modifiers add custom styles to it
	        // Be aware, modifiers could override the properties defined in the previous
	        // lines of this modifier!
	        (0, _assign2.default)(styles, data.styles);

	        setStyle(this._popper, styles);

	        // set an attribute which will be useful to style the tooltip (use it to properly position its arrow)
	        // NOTE: 1 DOM access here
	        this._popper.setAttribute('x-placement', data.placement);

	        // if the arrow modifier is required and the arrow style has been computed, apply the arrow style
	        if (this.isModifierRequired(this.modifiers.applyStyle, this.modifiers.arrow) && data.offsets.arrow) {
	            setStyle(data.arrowElement, data.offsets.arrow);
	        }

	        return data;
	    };

	    /**
	     * Modifier used to shift the popper on the start or end of its reference element side
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by `update` method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.shift = function (data) {
	        var placement = data.placement;
	        var basePlacement = placement.split('-')[0];
	        var shiftVariation = placement.split('-')[1];

	        // if shift shiftVariation is specified, run the modifier
	        if (shiftVariation) {
	            var reference = data.offsets.reference;
	            var popper = getPopperClientRect(data.offsets.popper);

	            var shiftOffsets = {
	                y: {
	                    start: { top: reference.top },
	                    end: { top: reference.top + reference.height - popper.height }
	                },
	                x: {
	                    start: { left: reference.left },
	                    end: { left: reference.left + reference.width - popper.width }
	                }
	            };

	            var axis = ['bottom', 'top'].indexOf(basePlacement) !== -1 ? 'x' : 'y';

	            data.offsets.popper = (0, _assign2.default)(popper, shiftOffsets[axis][shiftVariation]);
	        }

	        return data;
	    };

	    /**
	     * Modifier used to make sure the popper does not overflows from it's boundaries
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by `update` method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.preventOverflow = function (data) {
	        var order = this._options.preventOverflowOrder;
	        var popper = getPopperClientRect(data.offsets.popper);

	        var check = {
	            left: function left() {
	                var left = popper.left;
	                if (popper.left < data.boundaries.left) {
	                    left = Math.max(popper.left, data.boundaries.left);
	                }
	                return { left: left };
	            },
	            right: function right() {
	                var left = popper.left;
	                if (popper.right > data.boundaries.right) {
	                    left = Math.min(popper.left, data.boundaries.right - popper.width);
	                }
	                return { left: left };
	            },
	            top: function top() {
	                var top = popper.top;
	                if (popper.top < data.boundaries.top) {
	                    top = Math.max(popper.top, data.boundaries.top);
	                }
	                return { top: top };
	            },
	            bottom: function bottom() {
	                var top = popper.top;
	                if (popper.bottom > data.boundaries.bottom) {
	                    top = Math.min(popper.top, data.boundaries.bottom - popper.height);
	                }
	                return { top: top };
	            }
	        };

	        order.forEach(function (direction) {
	            data.offsets.popper = (0, _assign2.default)(popper, check[direction]());
	        });

	        return data;
	    };

	    /**
	     * Modifier used to make sure the popper is always near its reference
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by _update method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.keepTogether = function (data) {
	        var popper = getPopperClientRect(data.offsets.popper);
	        var reference = data.offsets.reference;
	        var f = Math.floor;

	        if (popper.right < f(reference.left)) {
	            data.offsets.popper.left = f(reference.left) - popper.width;
	        }
	        if (popper.left > f(reference.right)) {
	            data.offsets.popper.left = f(reference.right);
	        }
	        if (popper.bottom < f(reference.top)) {
	            data.offsets.popper.top = f(reference.top) - popper.height;
	        }
	        if (popper.top > f(reference.bottom)) {
	            data.offsets.popper.top = f(reference.bottom);
	        }

	        return data;
	    };

	    /**
	     * Modifier used to flip the placement of the popper when the latter is starting overlapping its reference element.
	     * Requires the `preventOverflow` modifier before it in order to work.
	     * **NOTE:** This modifier will run all its previous modifiers everytime it tries to flip the popper!
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by _update method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.flip = function (data) {
	        // check if preventOverflow is in the list of modifiers before the flip modifier.
	        // otherwise flip would not work as expected.
	        if (!this.isModifierRequired(this.modifiers.flip, this.modifiers.preventOverflow)) {
	            console.warn('WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!');
	            return data;
	        }

	        if (data.flipped && data.placement === data._originalPlacement) {
	            // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
	            return data;
	        }

	        var placement = data.placement.split('-')[0];
	        var placementOpposite = getOppositePlacement(placement);
	        var variation = data.placement.split('-')[1] || '';

	        var flipOrder = [];
	        if (this._options.flipBehavior === 'flip') {
	            flipOrder = [placement, placementOpposite];
	        } else {
	            flipOrder = this._options.flipBehavior;
	        }

	        flipOrder.forEach(function (step, index) {
	            if (placement !== step || flipOrder.length === index + 1) {
	                return;
	            }

	            placement = data.placement.split('-')[0];
	            placementOpposite = getOppositePlacement(placement);

	            var popperOffsets = getPopperClientRect(data.offsets.popper);

	            // this boolean is used to distinguish right and bottom from top and left
	            // they need different computations to get flipped
	            var a = ['right', 'bottom'].indexOf(placement) !== -1;

	            // using Math.floor because the reference offsets may contain decimals we are not going to consider here
	            if (a && Math.floor(data.offsets.reference[placement]) > Math.floor(popperOffsets[placementOpposite]) || !a && Math.floor(data.offsets.reference[placement]) < Math.floor(popperOffsets[placementOpposite])) {
	                // we'll use this boolean to detect any flip loop
	                data.flipped = true;
	                data.placement = flipOrder[index + 1];
	                if (variation) {
	                    data.placement += '-' + variation;
	                }
	                data.offsets.popper = this._getOffsets(this._popper, this._reference, data.placement).popper;

	                data = this.runModifiers(data, this._options.modifiers, this._flip);
	            }
	        }.bind(this));
	        return data;
	    };

	    /**
	     * Modifier used to add an offset to the popper, useful if you more granularity positioning your popper.
	     * The offsets will shift the popper on the side of its reference element.
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by _update method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.offset = function (data) {
	        var offset = this._options.offset;
	        var popper = data.offsets.popper;

	        if (data.placement.indexOf('left') !== -1) {
	            popper.top -= offset;
	        } else if (data.placement.indexOf('right') !== -1) {
	            popper.top += offset;
	        } else if (data.placement.indexOf('top') !== -1) {
	            popper.left -= offset;
	        } else if (data.placement.indexOf('bottom') !== -1) {
	            popper.left += offset;
	        }
	        return data;
	    };

	    /**
	     * Modifier used to move the arrows on the edge of the popper to make sure them are always between the popper and the reference element
	     * It will use the CSS outer size of the arrow element to know how many pixels of conjuction are needed
	     * @method
	     * @memberof Popper.modifiers
	     * @argument {Object} data - The data object generated by _update method
	     * @returns {Object} The data object, properly modified
	     */
	    Popper.prototype.modifiers.arrow = function (data) {
	        var arrow = this._options.arrowElement;

	        // if the arrowElement is a string, suppose it's a CSS selector
	        if (typeof arrow === 'string') {
	            arrow = this._popper.querySelector(arrow);
	        }

	        // if arrow element is not found, don't run the modifier
	        if (!arrow) {
	            return data;
	        }

	        // the arrow element must be child of its popper
	        if (!this._popper.contains(arrow)) {
	            console.warn('WARNING: `arrowElement` must be child of its popper element!');
	            return data;
	        }

	        // arrow depends on keepTogether in order to work
	        if (!this.isModifierRequired(this.modifiers.arrow, this.modifiers.keepTogether)) {
	            console.warn('WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!');
	            return data;
	        }

	        var arrowStyle = {};
	        var placement = data.placement.split('-')[0];
	        var popper = getPopperClientRect(data.offsets.popper);
	        var reference = data.offsets.reference;
	        var isVertical = ['left', 'right'].indexOf(placement) !== -1;

	        var len = isVertical ? 'height' : 'width';
	        var side = isVertical ? 'top' : 'left';
	        var altSide = isVertical ? 'left' : 'top';
	        var opSide = isVertical ? 'bottom' : 'right';
	        var arrowSize = getOuterSizes(arrow)[len];

	        //
	        // extends keepTogether behavior making sure the popper and its reference have enough pixels in conjuction
	        //

	        // top/left side
	        if (reference[opSide] - arrowSize < popper[side]) {
	            data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowSize);
	        }
	        // bottom/right side
	        if (reference[side] + arrowSize > popper[opSide]) {
	            data.offsets.popper[side] += reference[side] + arrowSize - popper[opSide];
	        }

	        // compute center of the popper
	        var center = reference[side] + reference[len] / 2 - arrowSize / 2;

	        var sideValue = center - popper[side];

	        // prevent arrow from being placed not contiguously to its popper
	        sideValue = Math.max(Math.min(popper[len] - arrowSize, sideValue), 0);
	        arrowStyle[side] = sideValue;
	        arrowStyle[altSide] = ''; // make sure to remove any old style from the arrow

	        data.offsets.arrow = arrowStyle;
	        data.arrowElement = arrow;

	        return data;
	    };

	    //
	    // Helpers
	    //

	    /**
	     * Get the outer sizes of the given element (offset size + margins)
	     * @function
	     * @ignore
	     * @argument {Element} element
	     * @returns {Object} object containing width and height properties
	     */
	    function getOuterSizes(element) {
	        // NOTE: 1 DOM access here
	        var _display = element.style.display,
	            _visibility = element.style.visibility;
	        element.style.display = 'block';element.style.visibility = 'hidden';
	        var calcWidthToForceRepaint = element.offsetWidth;

	        // original method
	        var styles = root.getComputedStyle(element);
	        var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
	        var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
	        var result = { width: element.offsetWidth + y, height: element.offsetHeight + x };

	        // reset element styles
	        element.style.display = _display;element.style.visibility = _visibility;
	        return result;
	    }

	    /**
	     * Get the opposite placement of the given one/
	     * @function
	     * @ignore
	     * @argument {String} placement
	     * @returns {String} flipped placement
	     */
	    function getOppositePlacement(placement) {
	        var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
	        return placement.replace(/left|right|bottom|top/g, function (matched) {
	            return hash[matched];
	        });
	    }

	    /**
	     * Given the popper offsets, generate an output similar to getBoundingClientRect
	     * @function
	     * @ignore
	     * @argument {Object} popperOffsets
	     * @returns {Object} ClientRect like output
	     */
	    function getPopperClientRect(popperOffsets) {
	        var offsets = (0, _assign2.default)({}, popperOffsets);
	        offsets.right = offsets.left + offsets.width;
	        offsets.bottom = offsets.top + offsets.height;
	        return offsets;
	    }

	    /**
	     * Given an array and the key to find, returns its index
	     * @function
	     * @ignore
	     * @argument {Array} arr
	     * @argument keyToFind
	     * @returns index or null
	     */
	    function getArrayKeyIndex(arr, keyToFind) {
	        var i = 0,
	            key;
	        for (key in arr) {
	            if (arr[key] === keyToFind) {
	                return i;
	            }
	            i++;
	        }
	        return null;
	    }

	    /**
	     * Get CSS computed property of the given element
	     * @function
	     * @ignore
	     * @argument {Eement} element
	     * @argument {String} property
	     */
	    function getStyleComputedProperty(element, property) {
	        // NOTE: 1 DOM access here
	        var css = root.getComputedStyle(element, null);
	        return css[property];
	    }

	    /**
	     * Returns the offset parent of the given element
	     * @function
	     * @ignore
	     * @argument {Element} element
	     * @returns {Element} offset parent
	     */
	    function getOffsetParent(element) {
	        // NOTE: 1 DOM access here
	        var offsetParent = element.offsetParent;
	        return offsetParent === root.document.body || !offsetParent ? root.document.documentElement : offsetParent;
	    }

	    /**
	     * Returns the scrolling parent of the given element
	     * @function
	     * @ignore
	     * @argument {Element} element
	     * @returns {Element} offset parent
	     */
	    function getScrollParent(element) {
	        if (element === root.document) {
	            // Firefox puts the scrollTOp value on `documentElement` instead of `body`, we then check which of them is
	            // greater than 0 and return the proper element
	            if (root.document.body.scrollTop) {
	                return root.document.body;
	            } else {
	                return root.document.documentElement;
	            }
	        }

	        // Firefox want us to check `-x` and `-y` variations as well
	        if (['scroll', 'auto'].indexOf(getStyleComputedProperty(element, 'overflow')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputedProperty(element, 'overflow-x')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputedProperty(element, 'overflow-y')) !== -1) {
	            return element;
	        }
	        return element.parentNode ? getScrollParent(element.parentNode) : element;
	    }

	    /**
	     * Check if the given element is fixed or is inside a fixed parent
	     * @function
	     * @ignore
	     * @argument {Element} element
	     * @argument {Element} customContainer
	     * @returns {Boolean} answer to "isFixed?"
	     */
	    function isFixed(element) {
	        if (element === root.document.body) {
	            return false;
	        }
	        if (getStyleComputedProperty(element, 'position') === 'fixed') {
	            return true;
	        }
	        return element.parentNode ? isFixed(element.parentNode) : element;
	    }

	    /**
	     * Set the style to the given popper
	     * @function
	     * @ignore
	     * @argument {Element} element - Element to apply the style to
	     * @argument {Object} styles - Object with a list of properties and values which will be applied to the element
	     */
	    function setStyle(element, styles) {
	        function is_numeric(n) {
	            return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
	        }
	        (0, _keys2.default)(styles).forEach(function (prop) {
	            var unit = '';
	            // add unit if the value is numeric and is one of the following
	            if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && is_numeric(styles[prop])) {
	                unit = 'px';
	            }
	            element.style[prop] = styles[prop] + unit;
	        });
	    }

	    /**
	     * Check if the given variable is a function
	     * @function
	     * @ignore
	     * @argument {Element} element - Element to check
	     * @returns {Boolean} answer to: is a function?
	     */
	    function isFunction(functionToCheck) {
	        var getType = {};
	        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	    }

	    /**
	     * Get the position of the given element, relative to its offset parent
	     * @function
	     * @ignore
	     * @param {Element} element
	     * @return {Object} position - Coordinates of the element and its `scrollTop`
	     */
	    function getOffsetRect(element) {
	        var elementRect = {
	            width: element.offsetWidth,
	            height: element.offsetHeight,
	            left: element.offsetLeft,
	            top: element.offsetTop
	        };

	        elementRect.right = elementRect.left + elementRect.width;
	        elementRect.bottom = elementRect.top + elementRect.height;

	        // position
	        return elementRect;
	    }

	    /**
	     * Get bounding client rect of given element
	     * @function
	     * @ignore
	     * @param {HTMLElement} element
	     * @return {Object} client rect
	     */
	    function getBoundingClientRect(element) {
	        var rect = element.getBoundingClientRect();
	        return {
	            left: rect.left,
	            top: rect.top,
	            right: rect.right,
	            bottom: rect.bottom,
	            width: rect.right - rect.left,
	            height: rect.bottom - rect.top
	        };
	    }

	    /**
	     * Given an element and one of its parents, return the offset
	     * @function
	     * @ignore
	     * @param {HTMLElement} element
	     * @param {HTMLElement} parent
	     * @return {Object} rect
	     */
	    function getOffsetRectRelativeToCustomParent(element, parent, fixed) {
	        var elementRect = getBoundingClientRect(element);
	        var parentRect = getBoundingClientRect(parent);

	        if (fixed) {
	            var scrollParent = getScrollParent(parent);
	            parentRect.top += scrollParent.scrollTop;
	            parentRect.bottom += scrollParent.scrollTop;
	            parentRect.left += scrollParent.scrollLeft;
	            parentRect.right += scrollParent.scrollLeft;
	        }

	        var rect = {
	            top: elementRect.top - parentRect.top,
	            left: elementRect.left - parentRect.left,
	            bottom: elementRect.top - parentRect.top + elementRect.height,
	            right: elementRect.left - parentRect.left + elementRect.width,
	            width: elementRect.width,
	            height: elementRect.height
	        };
	        return rect;
	    }

	    /**
	     * Get the prefixed supported property name
	     * @function
	     * @ignore
	     * @argument {String} property (camelCase)
	     * @returns {String} prefixed property (camelCase)
	     */
	    function getSupportedPropertyName(property) {
	        var prefixes = ['', 'ms', 'webkit', 'moz', 'o'];

	        for (var i = 0; i < prefixes.length; i++) {
	            var toCheck = prefixes[i] ? prefixes[i] + property.charAt(0).toUpperCase() + property.slice(1) : property;
	            if (typeof root.document.body.style[toCheck] !== 'undefined') {
	                return toCheck;
	            }
	        }
	        return null;
	    }

	    /**
	     * The Object.assign() method is used to copy the values of all enumerable own properties from one or more source
	     * objects to a target object. It will return the target object.
	     * This polyfill doesn't support symbol properties, since ES5 doesn't have symbols anyway
	     * Source: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
	     * @function
	     * @ignore
	     */
	    if (!_assign2.default) {
	        Object.defineProperty(Object, 'assign', {
	            enumerable: false,
	            configurable: true,
	            writable: true,
	            value: function value(target) {
	                if (target === undefined || target === null) {
	                    throw new TypeError('Cannot convert first argument to object');
	                }

	                var to = Object(target);
	                for (var i = 1; i < arguments.length; i++) {
	                    var nextSource = arguments[i];
	                    if (nextSource === undefined || nextSource === null) {
	                        continue;
	                    }
	                    nextSource = Object(nextSource);

	                    var keysArray = (0, _keys2.default)(nextSource);
	                    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
	                        var nextKey = keysArray[nextIndex];
	                        var desc = (0, _getOwnPropertyDescriptor2.default)(nextSource, nextKey);
	                        if (desc !== undefined && desc.enumerable) {
	                            to[nextKey] = nextSource[nextKey];
	                        }
	                    }
	                }
	                return to;
	            }
	        });
	    }

	    return Popper;
	});

/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(416), __esModule: true };

/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(417);
	module.exports = __webpack_require__(28).Object.assign;

/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(27);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(418)});

/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(55)
	  , gOPS     = __webpack_require__(95)
	  , pIE      = __webpack_require__(16)
	  , toObject = __webpack_require__(83)
	  , IObject  = __webpack_require__(12)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(23)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description 操作对象的工具方法.
	 * @author pkeros
	 * @data 2017/3/31
	 * @email pkeros@vip.qq.com
	 */

	/**
	 * @description 合并选项
	 * @param target 需要合并的目标
	 * @return {*} 目标
	 */
	var merge = function merge(target) {
	  for (var i = 1, j = arguments.length; i < j; i++) {
	    var source = arguments[i];
	    for (var prop in source) {
	      if (source.hasOwnProperty(prop)) {
	        var value = source[prop];
	        if (value !== undefined) {
	          target[prop] = value;
	        }
	      }
	    }
	  }

	  return target;
	};

	exports.default = {
	  merge: merge
	};

/***/ },
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _IosSwitch = __webpack_require__(904);

	var _IosSwitch2 = _interopRequireDefault(_IosSwitch);

	var _AbstractSwitch = __webpack_require__(909);

	var _AbstractSwitch2 = _interopRequireDefault(_AbstractSwitch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description: 封装了一些列的的开关组件。
	 * @summary:
	 *  KsSwitch 中封装了多种 Switch, 它们可以分别导入。
	 * @author: pkeros.
	 * @date: 2016/10/11.
	 */

	exports.default = {
	  KsSwitch: _IosSwitch2.default,
	  KsAbstractSwitch: _AbstractSwitch2.default
	};

/***/ },
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.KsDialogEntity = exports.KsDialog = undefined;

	var _main = __webpack_require__(914);

	var _main2 = _interopRequireDefault(_main);

	var _main3 = __webpack_require__(915);

	var _main4 = _interopRequireDefault(_main3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description dialog 组件
	 * @summary
	 *  1. 一个对话框组件.
	 * @author: pkeros.
	 * @date: 2016/10/25.
	 */

	exports.KsDialog = _main2.default;
	exports.KsDialogEntity = _main4.default;

/***/ },
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.KsModalCenter = exports.KsModalEntity = exports.KsModal = undefined;

	var _main = __webpack_require__(946);

	var _main2 = _interopRequireDefault(_main);

	var _main3 = __webpack_require__(947);

	var _main4 = _interopRequireDefault(_main3);

	var _center = __webpack_require__(959);

	var _center2 = _interopRequireDefault(_center);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.KsModal = _main2.default;
	exports.KsModalEntity = _main4.default;
	exports.KsModalCenter = _center2.default; /**
	                                           * @description modal 组件
	                                           * @summary
	                                           *  我是一个单纯可爱的模态组件.
	                                           * @author: pkeros.
	                                           * @date: 2016/10/19.
	                                           */

/***/ },
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _NrCheckbox = __webpack_require__(964);

	var _NrCheckbox2 = _interopRequireDefault(_NrCheckbox);

	var _CheckboxGroup = __webpack_require__(969);

	var _CheckboxGroup2 = _interopRequireDefault(_CheckboxGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description: 封装了一些列的的复选框组件。
	 * @summary:
	 *  KsCheckbox 中封装了多种 Checkbox, 它们可以分别导入。
	 * @author: pkeros.
	 * @date: 2016/10/11.
	 */

	exports.default = {
	  KsCheckbox: _NrCheckbox2.default,
	  KsCheckboxGroup: _CheckboxGroup2.default
	};

/***/ },
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.KsMaskEntity = exports.KsMask = undefined;

	var _main = __webpack_require__(953);

	var _main2 = _interopRequireDefault(_main);

	var _main3 = __webpack_require__(954);

	var _main4 = _interopRequireDefault(_main3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description mask 组件
	 * @author: pkeros.
	 * @date: 2016/10/20.
	 */

	exports.KsMask = _main2.default;
	exports.KsMaskEntity = _main4.default;

/***/ },
/* 514 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _circleRadio = __webpack_require__(974);

	var _circleRadio2 = _interopRequireDefault(_circleRadio);

	var _BtnRadio = __webpack_require__(985);

	var _BtnRadio2 = _interopRequireDefault(_BtnRadio);

	var _radioGroup = __webpack_require__(990);

	var _radioGroup2 = _interopRequireDefault(_radioGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  KsRadio: _circleRadio2.default,
	  KsBtnRadio: _BtnRadio2.default,
	  KsRadioGroup: _radioGroup2.default
	}; /**
	    * @description: 封装了一些列的单选组件。
	    * @summary:
	    *  KsRadio 中封装了多种 Radio, 它们可以分别导入。
	    * @author: pkeros.
	    * @date: 2016/10/14.
	    */

/***/ },
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.KsButtonAbstract = exports.KsButton = undefined;

	var _main = __webpack_require__(931);

	var _main2 = _interopRequireDefault(_main);

	var _abstract = __webpack_require__(935);

	var _abstract2 = _interopRequireDefault(_abstract);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description KsButton 组件
	 * @author: pkeros.
	 * @date: 2016/10/18.
	 * @email pkeros@vip.qq.com
	 */

	exports.KsButton = _main2.default;
	exports.KsButtonAbstract = _abstract2.default;

/***/ },
/* 539 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _page = __webpack_require__(995);

	var _page2 = _interopRequireDefault(_page);

	var _pagegroup = __webpack_require__(1001);

	var _pagegroup2 = _interopRequireDefault(_pagegroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  KsPage: _page2.default,
	  KsPageGroup: _pagegroup2.default
	};

/***/ },
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dater = __webpack_require__(1006);

	var _dater2 = _interopRequireDefault(_dater);

	var _daterPure = __webpack_require__(1016);

	var _daterPure2 = _interopRequireDefault(_daterPure);

	var _datePicker = __webpack_require__(1022);

	var _datePicker2 = _interopRequireDefault(_datePicker);

	var _daterRange = __webpack_require__(1030);

	var _daterRange2 = _interopRequireDefault(_daterRange);

	var _dateRangePicker = __webpack_require__(1034);

	var _dateRangePicker2 = _interopRequireDefault(_dateRangePicker);

	var _dateMonth = __webpack_require__(1026);

	var _dateMonth2 = _interopRequireDefault(_dateMonth);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  KsDater: _dater2.default,
	  KsDaterPure: _daterPure2.default,
	  KsDatePicker: _datePicker2.default,
	  KsDaterRange: _daterRange2.default,
	  KsDateRangePicker: _dateRangePicker2.default,
	  KsDateMonth: _dateMonth2.default
	};

/***/ },
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Store = __webpack_require__(1037);

	var _Store2 = _interopRequireDefault(_Store);

	var _StoreClick = __webpack_require__(1042);

	var _StoreClick2 = _interopRequireDefault(_StoreClick);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description: 封装了一些列的的复选框组件。
	 * @summary:
	 *  KsCheckbox 中封装了多种 Checkbox, 它们可以分别导入。
	 * @author: pkeros.
	 * @date: 2016/10/11.
	 */

	exports.default = {
	  KsStore: _Store2.default,
	  KsStoreClick: _StoreClick2.default
	};

/***/ },
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Search = __webpack_require__(1047);

	var _Search2 = _interopRequireDefault(_Search);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  KsSearch: _Search2.default
	}; /**
	    * @description search 组件
	    * @summary
	    *  模糊搜索组件
	    */

/***/ },
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _KsDialogChoose = __webpack_require__(1052);

	var _KsDialogChoose2 = _interopRequireDefault(_KsDialogChoose);

	var _ListStore = __webpack_require__(1056);

	var _ListStore2 = _interopRequireDefault(_ListStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description: 封装了一些列的的复选框组件。
	 * @summary:
	 *  KsCheckbox 中封装了多种 Checkbox, 它们可以分别导入。
	 * @author: pkeros.
	 * @date: 2016/10/11.
	 */

	exports.default = {
	  KsDialogChoose: _KsDialogChoose2.default,
	  KsList: _ListStore2.default
	};

/***/ },
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Item = __webpack_require__(1067);

	var _Item2 = _interopRequireDefault(_Item);

	var _ItemFloor = __webpack_require__(1072);

	var _ItemFloor2 = _interopRequireDefault(_ItemFloor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description: 封装了一些列的的复选框组件。
	 * @summary:
	 *  KsCheckbox 中封装了多种 Checkbox, 它们可以分别导入。
	 * @author: pkeros.
	 * @date: 2016/10/11.
	 */

	exports.default = {
	  KsItem: _Item2.default,
	  KsItemFloor: _ItemFloor2.default
	};

/***/ },
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Dialog = __webpack_require__(1061);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Dialog2.default; /**
	                                     * @description: 封装了一些列的的复选框组件。
	                                     * @summary:
	                                     *  KsCheckbox 中封装了多种 Checkbox, 它们可以分别导入。
	                                     * @author: pkeros.
	                                     * @date: 2016/10/11.
	                                     */

/***/ },
/* 671 */,
/* 672 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _AddTableItem = __webpack_require__(1077);

	var _AddTableItem2 = _interopRequireDefault(_AddTableItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _AddTableItem2.default; /**
	                                           * @description: 封装了一些列的的复选框组件。
	                                           * @summary:
	                                           *  KsCheckbox 中封装了多种 Checkbox, 它们可以分别导入。
	                                           * @author: pkeros.
	                                           * @date: 2016/10/11.
	                                           */

/***/ },
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.KsImgs = exports.KsImage = undefined;

	var _KsImage = __webpack_require__(1082);

	var _KsImage2 = _interopRequireDefault(_KsImage);

	var _KsImgs = __webpack_require__(1087);

	var _KsImgs2 = _interopRequireDefault(_KsImgs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description: 封装了一些列的的复选框组件。
	 * @summary:
	 *  KsCheckbox 中封装了多种 Checkbox, 它们可以分别导入。
	 * @author: pkeros.
	 * @date: 2016/10/11.
	 */

	exports.KsImage = _KsImage2.default;
	exports.KsImgs = _KsImgs2.default;

/***/ },
/* 680 */,
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _icon = __webpack_require__(926);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _icon2.default; /**
	                                   * @description 图标 图标 图标.
	                                   * @author pkeros
	                                   * @data 2017/4/11
	                                   * @email pkeros@vip.qq.com
	                                   */

/***/ },
/* 692 */,
/* 693 */,
/* 694 */,
/* 695 */,
/* 696 */,
/* 697 */,
/* 698 */,
/* 699 */,
/* 700 */,
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */,
/* 705 */,
/* 706 */,
/* 707 */,
/* 708 */,
/* 709 */,
/* 710 */,
/* 711 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _table = __webpack_require__(1101);

	var _table2 = _interopRequireDefault(_table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    KsTable: _table2.default
	};

/***/ },
/* 712 */,
/* 713 */,
/* 714 */,
/* 715 */,
/* 716 */,
/* 717 */,
/* 718 */,
/* 719 */,
/* 720 */,
/* 721 */,
/* 722 */,
/* 723 */,
/* 724 */,
/* 725 */,
/* 726 */,
/* 727 */,
/* 728 */,
/* 729 */,
/* 730 */,
/* 731 */,
/* 732 */,
/* 733 */,
/* 734 */,
/* 735 */,
/* 736 */,
/* 737 */,
/* 738 */,
/* 739 */,
/* 740 */,
/* 741 */,
/* 742 */,
/* 743 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _keys = __webpack_require__(100);

	var _keys2 = _interopRequireDefault(_keys);

	exports.default = install;

	var _KsLimitNumberFixed = __webpack_require__(744);

	var _KsLimitNumberFixed2 = _interopRequireDefault(_KsLimitNumberFixed);

	var _KsClickOutside = __webpack_require__(745);

	var _KsClickOutside2 = _interopRequireDefault(_KsClickOutside);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var directives = {
	    KsLimitNumberFixed: _KsLimitNumberFixed2.default,
	    KsClickOutside: _KsClickOutside2.default
	};
	function install(Vue) {
	    if (!Vue) {
	        console.error('please install Vue');
	    }
	    (0, _keys2.default)(directives).forEach(function (k) {
	        return Vue.directive(k, directives[k]);
	    });
	};

/***/ },
/* 744 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    params: ['limit', 'min'],
	    twoWay: true,
	    bind: function bind() {
	        var _this = this;

	        var limit = this.params.limit || 100000;
	        var min = this.params.min || 0;

	        if (this.el.addEventListener) {
	            this.el.addEventListener('input', function (e) {
	                _this.handler.call(_this, limit, min);
	            });
	        } else if (this.el.attachEvent) {
	            this.el.attachEvent('onpropertychange', function (event) {
	                if (event.propertyName != 'value') return;
	                _this.handler.call(_this, limit, min);
	            });
	        } else {
	            this.el.addEventListener('keyup', function () {
	                _this.handler.call(_this, limit, min);
	            });
	        }
	    },
	    handler: function handler(limit, min) {

	        //debugger
	        // var reg = new RegExp('^[0-9]+(\\.[0-9]{0,'+this.arg+'})?$')

	        var temp_val = this.el.value,
	            ints,
	            fixed = '';

	        if (temp_val.length == 1 && temp_val == "-" && min != 0) return;

	        if (parseInt(temp_val) < -1) {
	            temp_val = "-";
	        } else {
	            if (temp_val == '' || isNaN(parseInt(temp_val))) {
	                temp_val = '';
	            } else {
	                ints = this.get_ints(temp_val, limit, min);
	                fixed = this.get_fixed(temp_val, this.arg);
	                temp_val = ints + fixed;
	            }
	        }

	        this.el.value = temp_val;
	        this.set(temp_val);
	    },


	    /**
	     * 获取整数部分
	     * INF 无穷大
	     */
	    get_ints: function get_ints(temp_val, limit, min) {
	        var ints = parseInt(temp_val, 10);
	        if (limit != 'INF' && ints > limit) {
	            ints = ('' + ints).substr(0, ('' + ints).length - 1);
	        }

	        return ints;
	    },


	    // 获取小数部分
	    get_fixed: function get_fixed(temp_val, limit, min) {
	        //debugger
	        var fixed = '';
	        if (limit && ~temp_val.indexOf('.')) {
	            if (temp_val.split('.')[1].length != 1) {
	                temp_val.split('.')[1].split('').map(function (t) {
	                    fixed += isNaN(parseInt(t)) ? '' : parseInt(t);
	                });
	            } else {
	                fixed = temp_val.split('.')[1];
	                fixed = isNaN(parseInt(fixed)) ? '' : parseInt(fixed);
	            }

	            fixed = '.' + ('' + fixed).substr(0, limit);
	        }
	        return fixed;
	    }
	};

/***/ },
/* 745 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    bind: function bind() {
	        var _this = this;

	        this.contains = function (e) {

	            var equ;

	            if (_this.el.contains(e.target)) return false;

	            // console.log(this.expression)
	            if (_this.expression && 'function' == typeof _this.vm[_this.expression]) {

	                _this.vm[_this.expression]();
	                return;
	            }

	            if (equ = splitEqu(_this.expression)) {
	                // console.log(equ.name, equ.value)
	                _this.vm[equ.name] = equ.value;
	            } else {

	                _this.vm.hasOwnProperty('show') && (_this.vm['show'] = false);
	            }
	        };
	        document.addEventListener('click', this.contains, false);
	    },
	    unbind: function unbind() {
	        document.removeEventListener('click', this.contains, false);
	    }
	};


	function splitEqu(expression) {
	    var arr = (expression || '').split('=');
	    // console.log(arr)
	    return arr.length > 1 ? { name: arr[0].trim(), value: arr[1].trim() == 'true' } : false;
	}

/***/ },
/* 746 */,
/* 747 */,
/* 748 */,
/* 749 */,
/* 750 */,
/* 751 */,
/* 752 */,
/* 753 */,
/* 754 */,
/* 755 */,
/* 756 */,
/* 757 */,
/* 758 */,
/* 759 */,
/* 760 */,
/* 761 */,
/* 762 */,
/* 763 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*!
	 * vue-validator v2.1.3
	 * (c) 2016 kazuya kawaguchi
	 * Released under the MIT License.
	 */
	'use strict';

	var babelHelpers = {};
	babelHelpers.typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	};

	babelHelpers.classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	babelHelpers.createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

	babelHelpers.inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};

	babelHelpers.possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};

	babelHelpers;

	/**
	 * Utilties
	 */

	// export default for holding the Vue reference
	var exports$1 = {};
	/**
	 * warn
	 *
	 * @param {String} msg
	 * @param {Error} [err]
	 *
	 */

	function warn(msg, err) {
	  if (window.console) {
	    console.warn('[vue-validator] ' + msg);
	    if (err) {
	      console.warn(err.stack);
	    }
	  }
	}

	/**
	 * empty
	 *
	 * @param {Array|Object} target
	 * @return {Boolean}
	 */

	function empty(target) {
	  if (target === null || target === undefined) {
	    return true;
	  }

	  if (Array.isArray(target)) {
	    if (target.length > 0) {
	      return false;
	    }
	    if (target.length === 0) {
	      return true;
	    }
	  } else if (exports$1.Vue.util.isPlainObject(target)) {
	    for (var key in target) {
	      if (exports$1.Vue.util.hasOwn(target, key)) {
	        return false;
	      }
	    }
	  }

	  return true;
	}

	/**
	 * each
	 *
	 * @param {Array|Object} target
	 * @param {Function} iterator
	 * @param {Object} [context]
	 */

	function each(target, iterator, context) {
	  if (Array.isArray(target)) {
	    for (var i = 0; i < target.length; i++) {
	      iterator.call(context || target[i], target[i], i);
	    }
	  } else if (exports$1.Vue.util.isPlainObject(target)) {
	    var hasOwn = exports$1.Vue.util.hasOwn;
	    for (var key in target) {
	      if (hasOwn(target, key)) {
	        iterator.call(context || target[key], target[key], key);
	      }
	    }
	  }
	}

	/**
	 * pull
	 *
	 * @param {Array} arr
	 * @param {Object} item
	 * @return {Object|null}
	 */

	function pull(arr, item) {
	  var index = exports$1.Vue.util.indexOf(arr, item);
	  return ~index ? arr.splice(index, 1) : null;
	}

	/**
	 * trigger
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Object} [args]
	 */

	function trigger(el, event, args) {
	  var e = document.createEvent('HTMLEvents');
	  e.initEvent(event, true, false);

	  if (args) {
	    for (var prop in args) {
	      e[prop] = args[prop];
	    }
	  }

	  // Due to Firefox bug, events fired on disabled
	  // non-attached form controls can throw errors
	  try {
	    el.dispatchEvent(e);
	  } catch (e) {}
	}

	/**
	 * Forgiving check for a promise
	 *
	 * @param {Object} p
	 * @return {Boolean}
	 */

	function isPromise(p) {
	  return p && typeof p.then === 'function';
	}

	/**
	 * Togging classes
	 *
	 * @param {Element} el
	 * @param {String} key
	 * @param {Function} fn
	 */

	function toggleClasses(el, key, fn) {
	  key = key.trim();
	  if (key.indexOf(' ') === -1) {
	    fn(el, key);
	    return;
	  }

	  var keys = key.split(/\s+/);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    fn(el, keys[i]);
	  }
	}

	/**
	 * Fundamental validate functions
	 */

	/**
	 * required
	 *
	 * This function validate whether the value has been filled out.
	 *
	 * @param {*} val
	 * @return {Boolean}
	 */

	function required(val) {
	  if (Array.isArray(val)) {
	    if (val.length !== 0) {
	      var valid = true;
	      for (var i = 0, l = val.length; i < l; i++) {
	        valid = required(val[i]);
	        if (!valid) {
	          break;
	        }
	      }
	      return valid;
	    } else {
	      return false;
	    }
	  } else if (typeof val === 'number' || typeof val === 'function') {
	    return true;
	  } else if (typeof val === 'boolean') {
	    return val;
	  } else if (typeof val === 'string') {
	    return val.length > 0;
	  } else if (val !== null && (typeof val === 'undefined' ? 'undefined' : babelHelpers.typeof(val)) === 'object') {
	    return Object.keys(val).length > 0;
	  } else if (val === null || val === undefined) {
	    return false;
	  }
	}

	/**
	 * pattern
	 *
	 * This function validate whether the value matches the regex pattern
	 *
	 * @param val
	 * @param {String} pat
	 * @return {Boolean}
	 */

	function pattern(val, pat) {
	  if (typeof pat !== 'string') {
	    return false;
	  }

	  var match = pat.match(new RegExp('^/(.*?)/([gimy]*)$'));
	  if (!match) {
	    return false;
	  }

	  return new RegExp(match[1], match[2]).test(val);
	}

	/**
	 * minlength
	 *
	 * This function validate whether the minimum length.
	 *
	 * @param {String|Array} val
	 * @param {String|Number} min
	 * @return {Boolean}
	 */

	function minlength(val, min) {
	  if (typeof val === 'string') {
	    return isInteger(min, 10) && val.length >= parseInt(min, 10);
	  } else if (Array.isArray(val)) {
	    return val.length >= parseInt(min, 10);
	  } else {
	    return false;
	  }
	}

	/**
	 * maxlength
	 *
	 * This function validate whether the maximum length.
	 *
	 * @param {String|Array} val
	 * @param {String|Number} max
	 * @return {Boolean}
	 */

	function maxlength(val, max) {
	  if (typeof val === 'string') {
	    return isInteger(max, 10) && val.length <= parseInt(max, 10);
	  } else if (Array.isArray(val)) {
	    return val.length <= parseInt(max, 10);
	  } else {
	    return false;
	  }
	}

	/**
	 * min
	 *
	 * This function validate whether the minimum value of the numberable value.
	 *
	 * @param {*} val
	 * @param {*} arg minimum
	 * @return {Boolean}
	 */

	function min(val, arg) {
	  return !isNaN(+val) && !isNaN(+arg) && +val >= +arg;
	}

	/**
	 * max
	 *
	 * This function validate whether the maximum value of the numberable value.
	 *
	 * @param {*} val
	 * @param {*} arg maximum
	 * @return {Boolean}
	 */

	function max(val, arg) {
	  return !isNaN(+val) && !isNaN(+arg) && +val <= +arg;
	}

	/**
	 * isInteger
	 *
	 * This function check whether the value of the string is integer.
	 *
	 * @param {String} val
	 * @return {Boolean}
	 * @private
	 */

	function isInteger(val) {
	  return (/^(-?[1-9]\d*|0)$/.test(val)
	  );
	}

	var validators = Object.freeze({
	  required: required,
	  pattern: pattern,
	  minlength: minlength,
	  maxlength: maxlength,
	  min: min,
	  max: max
	});

	function Asset (Vue) {
	  var extend = Vue.util.extend;

	  // set global validators asset
	  var assets = Object.create(null);
	  extend(assets, validators);
	  Vue.options.validators = assets;

	  // set option merge strategy
	  var strats = Vue.config.optionMergeStrategies;
	  if (strats) {
	    strats.validators = function (parent, child) {
	      if (!child) {
	        return parent;
	      }
	      if (!parent) {
	        return child;
	      }
	      var ret = Object.create(null);
	      extend(ret, parent);
	      for (var key in child) {
	        ret[key] = child[key];
	      }
	      return ret;
	    };
	  }

	  /**
	   * Register or retrieve a global validator definition.
	   *
	   * @param {String} id
	   * @param {Function} definition
	   */

	  Vue.validator = function (id, definition) {
	    if (!definition) {
	      return Vue.options['validators'][id];
	    } else {
	      Vue.options['validators'][id] = definition;
	    }
	  };
	}

	function Override (Vue) {
	  // override _init
	  var init = Vue.prototype._init;
	  Vue.prototype._init = function (options) {
	    if (!this._validatorMaps) {
	      this._validatorMaps = Object.create(null);
	    }
	    init.call(this, options);
	  };

	  // override _destroy
	  var destroy = Vue.prototype._destroy;
	  Vue.prototype._destroy = function () {
	    destroy.apply(this, arguments);
	    this._validatorMaps = null;
	  };
	}

	var VALIDATE_UPDATE = '__vue-validator-validate-update__';
	var PRIORITY_VALIDATE = 16;
	var PRIORITY_VALIDATE_CLASS = 32;
	var REGEX_FILTER = /[^|]\|[^|]/;
	var REGEX_VALIDATE_DIRECTIVE = /^v-validate(?:$|:(.*)$)/;
	var REGEX_EVENT = /^v-on:|^@/;

	var classId = 0; // ID for validation class

	function ValidateClass (Vue) {
	  var vIf = Vue.directive('if');
	  var FragmentFactory = Vue.FragmentFactory;
	  var _Vue$util = Vue.util;
	  var toArray = _Vue$util.toArray;
	  var replace = _Vue$util.replace;
	  var createAnchor = _Vue$util.createAnchor;

	  /**
	   * `v-validate-class` directive
	   */

	  Vue.directive('validate-class', {
	    terminal: true,
	    priority: vIf.priority + PRIORITY_VALIDATE_CLASS,

	    bind: function bind() {
	      var _this = this;

	      var id = String(classId++);
	      this.setClassIds(this.el, id);

	      this.vm.$on(VALIDATE_UPDATE, this.cb = function (classIds, validation, results) {
	        if (classIds.indexOf(id) > -1) {
	          validation.updateClasses(results, _this.frag.node);
	        }
	      });

	      this.setupFragment();
	    },
	    unbind: function unbind() {
	      this.vm.$off(VALIDATE_UPDATE, this.cb);
	      this.teardownFragment();
	    },
	    setClassIds: function setClassIds(el, id) {
	      var childNodes = toArray(el.childNodes);
	      for (var i = 0, l = childNodes.length; i < l; i++) {
	        var element = childNodes[i];
	        if (element.nodeType === 1) {
	          var hasAttrs = element.hasAttributes();
	          var attrs = hasAttrs && toArray(element.attributes);
	          for (var k = 0, _l = attrs.length; k < _l; k++) {
	            var attr = attrs[k];
	            if (attr.name.match(REGEX_VALIDATE_DIRECTIVE)) {
	              var existingId = element.getAttribute(VALIDATE_UPDATE);
	              var value = existingId ? existingId + ',' + id : id;
	              element.setAttribute(VALIDATE_UPDATE, value);
	            }
	          }
	        }

	        if (element.hasChildNodes()) {
	          this.setClassIds(element, id);
	        }
	      }
	    },
	    setupFragment: function setupFragment() {
	      this.anchor = createAnchor('v-validate-class');
	      replace(this.el, this.anchor);

	      this.factory = new FragmentFactory(this.vm, this.el);
	      this.frag = this.factory.create(this._host, this._scope, this._frag);
	      this.frag.before(this.anchor);
	    },
	    teardownFragment: function teardownFragment() {
	      if (this.frag) {
	        this.frag.remove();
	        this.frag = null;
	        this.factory = null;
	      }

	      replace(this.anchor, this.el);
	      this.anchor = null;
	    }
	  });
	}

	function Validate (Vue) {
	  var vIf = Vue.directive('if');
	  var FragmentFactory = Vue.FragmentFactory;
	  var parseDirective = Vue.parsers.directive.parseDirective;
	  var _Vue$util = Vue.util;
	  var inBrowser = _Vue$util.inBrowser;
	  var bind = _Vue$util.bind;
	  var on = _Vue$util.on;
	  var off = _Vue$util.off;
	  var createAnchor = _Vue$util.createAnchor;
	  var replace = _Vue$util.replace;
	  var camelize = _Vue$util.camelize;
	  var isPlainObject = _Vue$util.isPlainObject;

	  // Test for IE10/11 textarea placeholder clone bug

	  function checkTextareaCloneBug() {
	    if (inBrowser) {
	      var t = document.createElement('textarea');
	      t.placeholder = 't';
	      return t.cloneNode(true).value === 't';
	    } else {
	      return false;
	    }
	  }
	  var hasTextareaCloneBug = checkTextareaCloneBug();

	  /**
	   * `v-validate` directive
	   */

	  Vue.directive('validate', {
	    terminal: true,
	    priority: vIf.priority + PRIORITY_VALIDATE,
	    params: ['group', 'field', 'detect-blur', 'detect-change', 'initial', 'classes'],

	    paramWatchers: {
	      detectBlur: function detectBlur(val, old) {
	        if (this._invalid) {
	          return;
	        }
	        this.validation.detectBlur = this.isDetectBlur(val);
	        this.validator.validate(this.field);
	      },
	      detectChange: function detectChange(val, old) {
	        if (this._invalid) {
	          return;
	        }
	        this.validation.detectChange = this.isDetectChange(val);
	        this.validator.validate(this.field);
	      }
	    },

	    bind: function bind() {
	      var el = this.el;

	      if (process.env.NODE_ENV !== 'production' && el.__vue__) {
	        warn('v-validate="' + this.expression + '" cannot be used on an instance root element.');
	        this._invalid = true;
	        return;
	      }

	      if (process.env.NODE_ENV !== 'production' && (el.hasAttribute('v-if') || el.hasAttribute('v-for'))) {
	        warn('v-validate cannot be used `v-if` or `v-for` build-in terminal directive ' + 'on an element. these is wrapped with `<template>` or other tags: ' + '(e.g. <validator name="validator">' + '<template v-if="hidden">' + '<input type="text" v-validate:field1="[\'required\']">' + '</template>' + '</validator>).');
	        this._invalid = true;
	        return;
	      }

	      if (process.env.NODE_ENV !== 'production' && !(this.arg || this.params.field)) {
	        warn('you need specify field name for v-validate directive.');
	        this._invalid = true;
	        return;
	      }

	      var validatorName = this.vm.$options._validator;
	      if (process.env.NODE_ENV !== 'production' && !validatorName) {
	        warn('you need to wrap the elements to be validated in a <validator> element: ' + '(e.g. <validator name="validator">' + '<input type="text" v-validate:field1="[\'required\']">' + '</validator>).');
	        this._invalid = true;
	        return;
	      }

	      var raw = el.getAttribute('v-model');

	      var _parseModelRaw = this.parseModelRaw(raw);

	      var model = _parseModelRaw.model;
	      var filters = _parseModelRaw.filters;

	      this.model = model;

	      this.setupFragment();
	      this.setupValidate(validatorName, model, filters);
	      this.listen();
	    },
	    update: function update(value, old) {
	      if (!value || this._invalid) {
	        return;
	      }

	      if (isPlainObject(value)) {
	        this.handleObject(value);
	      } else if (Array.isArray(value)) {
	        this.handleArray(value);
	      }

	      var options = { field: this.field, noopable: this._initialNoopValidation };
	      if (this.frag) {
	        options.el = this.frag.node;
	      }
	      this.validator.validate(options);

	      if (this._initialNoopValidation) {
	        this._initialNoopValidation = null;
	      }
	    },
	    unbind: function unbind() {
	      if (this._invalid) {
	        return;
	      }

	      this.unlisten();
	      this.teardownValidate();
	      this.teardownFragment();

	      this.model = null;
	    },
	    parseModelRaw: function parseModelRaw(raw) {
	      if (REGEX_FILTER.test(raw)) {
	        var parsed = parseDirective(raw);
	        return { model: parsed.expression, filters: parsed.filters };
	      } else {
	        return { model: raw };
	      }
	    },
	    setupValidate: function setupValidate(name, model, filters) {
	      var params = this.params;
	      var validator = this.validator = this.vm._validatorMaps[name];

	      this.field = camelize(this.arg ? this.arg : params.field);

	      this.validation = validator.manageValidation(this.field, model, this.vm, this.getElementFrom(this.frag), this._scope, filters, params.initial, this.isDetectBlur(params.detectBlur), this.isDetectChange(params.detectChange));

	      isPlainObject(params.classes) && this.validation.setValidationClasses(params.classes);

	      params.group && validator.addGroupValidation(params.group, this.field);

	      this._initialNoopValidation = this.isInitialNoopValidation(params.initial);
	    },
	    listen: function listen() {
	      var model = this.model;
	      var validation = this.validation;
	      var el = this.getElementFrom(this.frag);

	      this.onBlur = bind(validation.listener, validation);
	      on(el, 'blur', this.onBlur);
	      if ((el.type === 'radio' || el.tagName === 'SELECT') && !model) {
	        this.onChange = bind(validation.listener, validation);
	        on(el, 'change', this.onChange);
	      } else if (el.type === 'checkbox') {
	        if (!model) {
	          this.onChange = bind(validation.listener, validation);
	          on(el, 'change', this.onChange);
	        } else {
	          this.onClick = bind(validation.listener, validation);
	          on(el, 'click', this.onClick);
	        }
	      } else {
	        if (!model) {
	          this.onInput = bind(validation.listener, validation);
	          on(el, 'input', this.onInput);
	        }
	      }
	    },
	    unlisten: function unlisten() {
	      var el = this.getElementFrom(this.frag);

	      if (this.onInput) {
	        off(el, 'input', this.onInput);
	        this.onInput = null;
	      }

	      if (this.onClick) {
	        off(el, 'click', this.onClick);
	        this.onClick = null;
	      }

	      if (this.onChange) {
	        off(el, 'change', this.onChange);
	        this.onChange = null;
	      }

	      if (this.onBlur) {
	        off(el, 'blur', this.onBlur);
	        this.onBlur = null;
	      }
	    },
	    teardownValidate: function teardownValidate() {
	      if (this.validator && this.validation) {
	        var el = this.getElementFrom(this.frag);

	        this.params.group && this.validator.removeGroupValidation(this.params.group, this.field);

	        this.validator.unmanageValidation(this.field, el);

	        this.validator = null;
	        this.validation = null;
	        this.field = null;
	      }
	    },
	    setupFragment: function setupFragment() {
	      this.anchor = createAnchor('v-validate');
	      replace(this.el, this.anchor);

	      this.factory = new FragmentFactory(this.vm, this.shimNode(this.el));
	      this.frag = this.factory.create(this._host, this._scope, this._frag);
	      this.frag.before(this.anchor);
	    },
	    teardownFragment: function teardownFragment() {
	      if (this.frag) {
	        this.frag.remove();
	        this.frag = null;
	        this.factory = null;
	      }

	      replace(this.anchor, this.el);
	      this.anchor = null;
	    },
	    handleArray: function handleArray(value) {
	      var _this = this;

	      each(value, function (val) {
	        _this.validation.setValidation(val);
	      });
	    },
	    handleObject: function handleObject(value) {
	      var _this2 = this;

	      each(value, function (val, key) {
	        if (isPlainObject(val)) {
	          if ('rule' in val) {
	            var msg = 'message' in val ? val.message : null;
	            var initial = 'initial' in val ? val.initial : null;
	            _this2.validation.setValidation(key, val.rule, msg, initial);
	          }
	        } else {
	          _this2.validation.setValidation(key, val);
	        }
	      });
	    },
	    isDetectBlur: function isDetectBlur(detectBlur) {
	      return detectBlur === undefined || detectBlur === 'on' || detectBlur === true;
	    },
	    isDetectChange: function isDetectChange(detectChange) {
	      return detectChange === undefined || detectChange === 'on' || detectChange === true;
	    },
	    isInitialNoopValidation: function isInitialNoopValidation(initial) {
	      return initial === 'off' || initial === false;
	    },
	    shimNode: function shimNode(node) {
	      var ret = node;
	      if (hasTextareaCloneBug) {
	        if (node.tagName === 'TEXTAREA') {
	          ret = node.cloneNode(true);
	          ret.value = node.value;
	          var i = ret.childNodes.length;
	          while (i--) {
	            ret.removeChild(ret.childNodes[i]);
	          }
	        }
	      }
	      return ret;
	    },
	    getElementFrom: function getElementFrom(frag) {
	      return frag.single ? frag.node : frag.node.nextSibling;
	    }
	  });
	}

	/**
	 * BaseValidation class
	 */

	var BaseValidation = function () {
	  function BaseValidation(field, model, vm, el, scope, validator, filters, detectBlur, detectChange) {
	    babelHelpers.classCallCheck(this, BaseValidation);

	    this.field = field;
	    this.touched = false;
	    this.dirty = false;
	    this.modified = false;

	    this._modified = false;
	    this._model = model;
	    this._filters = filters;
	    this._validator = validator;
	    this._vm = vm;
	    this._el = el;
	    this._forScope = scope;
	    this._init = this._getValue(el);
	    this._validators = {};
	    this._detectBlur = detectBlur;
	    this._detectChange = detectChange;
	    this._classes = {};
	  }

	  BaseValidation.prototype.manageElement = function manageElement(el, initial) {
	    var _this = this;

	    var scope = this._getScope();
	    var model = this._model;

	    this._initial = initial;

	    var classIds = el.getAttribute(VALIDATE_UPDATE);
	    if (classIds) {
	      el.removeAttribute(VALIDATE_UPDATE);
	      this._classIds = classIds.split(',');
	    }

	    if (model) {
	      el.value = this._evalModel(model, this._filters);
	      this._unwatch = scope.$watch(model, function (val, old) {
	        if (val !== old) {
	          if (_this.guardValidate(el, 'input')) {
	            return;
	          }

	          _this.handleValidate(el, { noopable: _this._initial });
	          if (_this._initial) {
	            _this._initial = null;
	          }
	        }
	      }, { deep: true });
	    }
	  };

	  BaseValidation.prototype.unmanageElement = function unmanageElement(el) {
	    this._unwatch && this._unwatch();
	  };

	  BaseValidation.prototype.setValidation = function setValidation(name, arg, msg, initial) {
	    var validator = this._validators[name];
	    if (!validator) {
	      validator = this._validators[name] = {};
	      validator.name = name;
	    }

	    validator.arg = arg;
	    if (msg) {
	      validator.msg = msg;
	    }

	    if (initial) {
	      validator.initial = initial;
	      validator._isNoopable = true;
	    }
	  };

	  BaseValidation.prototype.setValidationClasses = function setValidationClasses(classes) {
	    var _this2 = this;

	    each(classes, function (value, key) {
	      _this2._classes[key] = value;
	    });
	  };

	  BaseValidation.prototype.willUpdateFlags = function willUpdateFlags() {
	    var touched = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

	    touched && this.willUpdateTouched(this._el, 'blur');
	    this.willUpdateDirty(this._el);
	    this.willUpdateModified(this._el);
	  };

	  BaseValidation.prototype.willUpdateTouched = function willUpdateTouched(el, type) {
	    if (type && type === 'blur') {
	      this.touched = true;
	      this._fireEvent(el, 'touched');
	    }
	  };

	  BaseValidation.prototype.willUpdateDirty = function willUpdateDirty(el) {
	    if (!this.dirty && this._checkModified(el)) {
	      this.dirty = true;
	      this._fireEvent(el, 'dirty');
	    }
	  };

	  BaseValidation.prototype.willUpdateModified = function willUpdateModified(el) {
	    this.modified = this._checkModified(el);
	    if (this._modified !== this.modified) {
	      this._fireEvent(el, 'modified', { modified: this.modified });
	      this._modified = this.modified;
	    }
	  };

	  BaseValidation.prototype.listener = function listener(e) {
	    if (this.guardValidate(e.target, e.type)) {
	      return;
	    }

	    this.handleValidate(e.target, { type: e.type });
	  };

	  BaseValidation.prototype.handleValidate = function handleValidate(el) {
	    var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var _ref$type = _ref.type;
	    var type = _ref$type === undefined ? null : _ref$type;
	    var _ref$noopable = _ref.noopable;
	    var noopable = _ref$noopable === undefined ? false : _ref$noopable;

	    this.willUpdateTouched(el, type);
	    this.willUpdateDirty(el);
	    this.willUpdateModified(el);

	    this._validator.validate({ field: this.field, el: el, noopable: noopable });
	  };

	  BaseValidation.prototype.validate = function validate(cb) {
	    var _this3 = this;

	    var noopable = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	    var el = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	    var _ = exports$1.Vue.util;

	    var results = {};
	    var errors = [];
	    var valid = true;

	    this._runValidators(function (descriptor, name, done) {
	      var asset = _this3._resolveValidator(name);
	      var validator = null;
	      var msg = null;

	      if (_.isPlainObject(asset)) {
	        if (asset.check && typeof asset.check === 'function') {
	          validator = asset.check;
	        }
	        if (asset.message) {
	          msg = asset.message;
	        }
	      } else if (typeof asset === 'function') {
	        validator = asset;
	      }

	      if (descriptor.msg) {
	        msg = descriptor.msg;
	      }

	      if (noopable) {
	        results[name] = false;
	        return done();
	      }

	      if (descriptor._isNoopable) {
	        results[name] = false;
	        descriptor._isNoopable = null;
	        return done();
	      }

	      if (validator) {
	        var value = _this3._getValue(_this3._el);
	        _this3._invokeValidator(_this3._vm, validator, value, descriptor.arg, function (ret, err) {
	          if (!ret) {
	            valid = false;
	            if (err) {
	              // async error message
	              errors.push({ validator: name, message: err });
	              results[name] = err;
	            } else if (msg) {
	              var error = { validator: name };
	              error.message = typeof msg === 'function' ? msg.call(_this3._vm, _this3.field, descriptor.arg) : msg;
	              errors.push(error);
	              results[name] = error.message;
	            } else {
	              results[name] = !ret;
	            }
	          } else {
	            results[name] = !ret;
	          }

	          done();
	        });
	      } else {
	        done();
	      }
	    }, function () {
	      // finished
	      _this3._fireEvent(_this3._el, valid ? 'valid' : 'invalid');

	      var props = {
	        valid: valid,
	        invalid: !valid,
	        touched: _this3.touched,
	        untouched: !_this3.touched,
	        dirty: _this3.dirty,
	        pristine: !_this3.dirty,
	        modified: _this3.modified
	      };
	      if (!empty(errors)) {
	        props.errors = errors;
	      }
	      _.extend(results, props);

	      _this3.willUpdateClasses(results, el);

	      cb(results);
	    });
	  };

	  BaseValidation.prototype.resetFlags = function resetFlags() {
	    this.touched = false;
	    this.dirty = false;
	    this.modified = false;
	    this._modified = false;
	  };

	  BaseValidation.prototype.reset = function reset() {
	    each(this._validators, function (descriptor, key) {
	      if (descriptor.initial && !descriptor._isNoopable) {
	        descriptor._isNoopable = true;
	      }
	    });
	    this.resetFlags();
	    this._init = this._getValue(this._el);
	  };

	  BaseValidation.prototype.willUpdateClasses = function willUpdateClasses(results) {
	    var _this4 = this;

	    var el = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	    if (this._checkClassIds(el)) {
	      (function () {
	        var classIds = _this4._getClassIds(el);
	        _this4.vm.$nextTick(function () {
	          _this4.vm.$emit(VALIDATE_UPDATE, classIds, _this4, results);
	        });
	      })();
	    } else {
	      this.updateClasses(results);
	    }
	  };

	  BaseValidation.prototype.updateClasses = function updateClasses(results) {
	    var el = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	    this._updateClasses(el || this._el, results);
	  };

	  BaseValidation.prototype.guardValidate = function guardValidate(el, type) {
	    if (type && type === 'blur' && !this.detectBlur) {
	      return true;
	    }

	    if (type && type === 'input' && !this.detectChange) {
	      return true;
	    }

	    if (type && type === 'change' && !this.detectChange) {
	      return true;
	    }

	    if (type && type === 'click' && !this.detectChange) {
	      return true;
	    }

	    return false;
	  };

	  BaseValidation.prototype._getValue = function _getValue(el) {
	    return el.value;
	  };

	  BaseValidation.prototype._getScope = function _getScope() {
	    return this._forScope || this._vm;
	  };

	  BaseValidation.prototype._getClassIds = function _getClassIds(el) {
	    return this._classIds;
	  };

	  BaseValidation.prototype._checkModified = function _checkModified(target) {
	    return this._init !== this._getValue(target);
	  };

	  BaseValidation.prototype._checkClassIds = function _checkClassIds(el) {
	    return this._getClassIds(el);
	  };

	  BaseValidation.prototype._fireEvent = function _fireEvent(el, type, args) {
	    trigger(el, type, args);
	  };

	  BaseValidation.prototype._evalModel = function _evalModel(model, filters) {
	    var scope = this._getScope();

	    var val = null;
	    if (filters) {
	      val = scope.$get(model);
	      return filters ? this._applyFilters(val, null, filters) : val;
	    } else {
	      val = scope.$get(model);
	      return val === undefined || val === null ? '' : val;
	    }
	  };

	  BaseValidation.prototype._updateClasses = function _updateClasses(el, results) {
	    this._toggleValid(el, results.valid);
	    this._toggleTouched(el, results.touched);
	    this._togglePristine(el, results.pristine);
	    this._toggleModfied(el, results.modified);
	  };

	  BaseValidation.prototype._toggleValid = function _toggleValid(el, valid) {
	    var _util$Vue$util = exports$1.Vue.util;
	    var addClass = _util$Vue$util.addClass;
	    var removeClass = _util$Vue$util.removeClass;

	    var validClass = this._classes.valid || 'valid';
	    var invalidClass = this._classes.invalid || 'invalid';

	    if (valid) {
	      toggleClasses(el, validClass, addClass);
	      toggleClasses(el, invalidClass, removeClass);
	    } else {
	      toggleClasses(el, validClass, removeClass);
	      toggleClasses(el, invalidClass, addClass);
	    }
	  };

	  BaseValidation.prototype._toggleTouched = function _toggleTouched(el, touched) {
	    var _util$Vue$util2 = exports$1.Vue.util;
	    var addClass = _util$Vue$util2.addClass;
	    var removeClass = _util$Vue$util2.removeClass;

	    var touchedClass = this._classes.touched || 'touched';
	    var untouchedClass = this._classes.untouched || 'untouched';

	    if (touched) {
	      toggleClasses(el, touchedClass, addClass);
	      toggleClasses(el, untouchedClass, removeClass);
	    } else {
	      toggleClasses(el, touchedClass, removeClass);
	      toggleClasses(el, untouchedClass, addClass);
	    }
	  };

	  BaseValidation.prototype._togglePristine = function _togglePristine(el, pristine) {
	    var _util$Vue$util3 = exports$1.Vue.util;
	    var addClass = _util$Vue$util3.addClass;
	    var removeClass = _util$Vue$util3.removeClass;

	    var pristineClass = this._classes.pristine || 'pristine';
	    var dirtyClass = this._classes.dirty || 'dirty';

	    if (pristine) {
	      toggleClasses(el, pristineClass, addClass);
	      toggleClasses(el, dirtyClass, removeClass);
	    } else {
	      toggleClasses(el, pristineClass, removeClass);
	      toggleClasses(el, dirtyClass, addClass);
	    }
	  };

	  BaseValidation.prototype._toggleModfied = function _toggleModfied(el, modified) {
	    var _util$Vue$util4 = exports$1.Vue.util;
	    var addClass = _util$Vue$util4.addClass;
	    var removeClass = _util$Vue$util4.removeClass;

	    var modifiedClass = this._classes.modified || 'modified';

	    if (modified) {
	      toggleClasses(el, modifiedClass, addClass);
	    } else {
	      toggleClasses(el, modifiedClass, removeClass);
	    }
	  };

	  BaseValidation.prototype._applyFilters = function _applyFilters(value, oldValue, filters, write) {
	    var resolveAsset = exports$1.Vue.util.resolveAsset;
	    var scope = this._getScope();

	    var filter = void 0,
	        fn = void 0,
	        args = void 0,
	        arg = void 0,
	        offset = void 0,
	        i = void 0,
	        l = void 0,
	        j = void 0,
	        k = void 0;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[i];
	      fn = resolveAsset(this._vm.$options, 'filters', filter.name);
	      if (!fn) {
	        continue;
	      }

	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') {
	        continue;
	      }

	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? scope.$get(arg.value) : arg.value;
	        }
	      }

	      value = fn.apply(this._vm, args);
	    }

	    return value;
	  };

	  BaseValidation.prototype._runValidators = function _runValidators(fn, cb) {
	    var validators = this._validators;
	    var length = Object.keys(validators).length;

	    var count = 0;
	    each(validators, function (descriptor, name) {
	      fn(descriptor, name, function () {
	        ++count;
	        count >= length && cb();
	      });
	    });
	  };

	  BaseValidation.prototype._invokeValidator = function _invokeValidator(vm, validator, val, arg, cb) {
	    var future = validator.call(this, val, arg);
	    if (typeof future === 'function') {
	      // function
	      future(function () {
	        // resolve
	        cb(true);
	      }, function (msg) {
	        // reject
	        cb(false, msg);
	      });
	    } else if (isPromise(future)) {
	      // promise
	      future.then(function () {
	        // resolve
	        cb(true);
	      }, function (msg) {
	        // reject
	        cb(false, msg);
	      }).catch(function (err) {
	        cb(false, err.message);
	      });
	    } else {
	      // sync
	      cb(future);
	    }
	  };

	  BaseValidation.prototype._resolveValidator = function _resolveValidator(name) {
	    var resolveAsset = exports$1.Vue.util.resolveAsset;
	    return resolveAsset(this._vm.$options, 'validators', name);
	  };

	  babelHelpers.createClass(BaseValidation, [{
	    key: 'vm',
	    get: function get() {
	      return this._vm;
	    }
	  }, {
	    key: 'el',
	    get: function get() {
	      return this._el;
	    }
	  }, {
	    key: 'detectChange',
	    get: function get() {
	      return this._detectChange;
	    },
	    set: function set(val) {
	      this._detectChange = val;
	    }
	  }, {
	    key: 'detectBlur',
	    get: function get() {
	      return this._detectBlur;
	    },
	    set: function set(val) {
	      this._detectBlur = val;
	    }
	  }]);
	  return BaseValidation;
	}();

	/**
	 * CheckboxValidation class
	 */

	var CheckboxValidation = function (_BaseValidation) {
	  babelHelpers.inherits(CheckboxValidation, _BaseValidation);

	  function CheckboxValidation(field, model, vm, el, scope, validator, filters, detectBlur, detectChange) {
	    babelHelpers.classCallCheck(this, CheckboxValidation);

	    var _this = babelHelpers.possibleConstructorReturn(this, _BaseValidation.call(this, field, model, vm, el, scope, validator, filters, detectBlur, detectChange));

	    _this._inits = [];
	    return _this;
	  }

	  CheckboxValidation.prototype.manageElement = function manageElement(el, initial) {
	    var _this2 = this;

	    var scope = this._getScope();
	    var item = this._addItem(el, initial);

	    var model = item.model = this._model;
	    if (model) {
	      var value = this._evalModel(model, this._filters);
	      if (Array.isArray(value)) {
	        this._setChecked(value, item.el);
	        item.unwatch = scope.$watch(model, function (val, old) {
	          if (val !== old) {
	            if (_this2.guardValidate(item.el, 'change')) {
	              return;
	            }

	            _this2.handleValidate(item.el, { noopable: item.initial });
	            if (item.initial) {
	              item.initial = null;
	            }
	          }
	        });
	      } else {
	        el.checked = value || false;
	        this._init = el.checked;
	        item.init = el.checked;
	        item.value = el.value;
	        item.unwatch = scope.$watch(model, function (val, old) {
	          if (val !== old) {
	            if (_this2.guardValidate(el, 'change')) {
	              return;
	            }

	            _this2.handleValidate(el, { noopable: item.initial });
	            if (item.initial) {
	              item.initial = null;
	            }
	          }
	        });
	      }
	    } else {
	      var options = { field: this.field, noopable: initial };
	      if (this._checkClassIds(el)) {
	        options.el = el;
	      }
	      this._validator.validate(options);
	    }
	  };

	  CheckboxValidation.prototype.unmanageElement = function unmanageElement(el) {
	    var found = -1;
	    each(this._inits, function (item, index) {
	      if (item.el === el) {
	        found = index;
	        if (item.unwatch && item.model) {
	          item.unwatch();
	          item.unwatch = null;
	          item.model = null;
	        }
	      }
	    });
	    if (found === -1) {
	      return;
	    }

	    this._inits.splice(found, 1);
	    this._validator.validate({ field: this.field });
	  };

	  CheckboxValidation.prototype.willUpdateFlags = function willUpdateFlags() {
	    var _this3 = this;

	    var touched = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

	    each(this._inits, function (item, index) {
	      touched && _this3.willUpdateTouched(item.el, 'blur');
	      _this3.willUpdateDirty(item.el);
	      _this3.willUpdateModified(item.el);
	    });
	  };

	  CheckboxValidation.prototype.reset = function reset() {
	    this.resetFlags();
	    each(this._inits, function (item, index) {
	      item.init = item.el.checked;
	      item.value = item.el.value;
	    });
	  };

	  CheckboxValidation.prototype.updateClasses = function updateClasses(results) {
	    var _this4 = this;

	    var el = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	    if (el) {
	      // for another element
	      this._updateClasses(el, results);
	    } else {
	      each(this._inits, function (item, index) {
	        _this4._updateClasses(item.el, results);
	      });
	    }
	  };

	  CheckboxValidation.prototype._addItem = function _addItem(el, initial) {
	    var item = {
	      el: el,
	      init: el.checked,
	      value: el.value,
	      initial: initial
	    };

	    var classIds = el.getAttribute(VALIDATE_UPDATE);
	    if (classIds) {
	      el.removeAttribute(VALIDATE_UPDATE);
	      item.classIds = classIds.split(',');
	    }

	    this._inits.push(item);
	    return item;
	  };

	  CheckboxValidation.prototype._setChecked = function _setChecked(values, el) {
	    for (var i = 0, l = values.length; i < l; i++) {
	      var value = values[i];
	      if (!el.disabled && el.value === value && !el.checked) {
	        el.checked = true;
	      }
	    }
	  };

	  CheckboxValidation.prototype._getValue = function _getValue(el) {
	    var _this5 = this;

	    if (!this._inits || this._inits.length === 0) {
	      return el.checked;
	    } else {
	      var _ret = function () {
	        var vals = [];
	        each(_this5._inits, function (item, index) {
	          item.el.checked && vals.push(item.el.value);
	        });
	        return {
	          v: vals
	        };
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : babelHelpers.typeof(_ret)) === "object") return _ret.v;
	    }
	  };

	  CheckboxValidation.prototype._getClassIds = function _getClassIds(el) {
	    var classIds = void 0;
	    each(this._inits, function (item, index) {
	      if (item.el === el) {
	        classIds = item.classIds;
	      }
	    });
	    return classIds;
	  };

	  CheckboxValidation.prototype._checkModified = function _checkModified(target) {
	    var _this6 = this;

	    if (this._inits.length === 0) {
	      return this._init !== target.checked;
	    } else {
	      var _ret2 = function () {
	        var modified = false;
	        each(_this6._inits, function (item, index) {
	          if (!modified) {
	            modified = item.init !== item.el.checked;
	          }
	        });
	        return {
	          v: modified
	        };
	      }();

	      if ((typeof _ret2 === 'undefined' ? 'undefined' : babelHelpers.typeof(_ret2)) === "object") return _ret2.v;
	    }
	  };

	  return CheckboxValidation;
	}(BaseValidation);

	/**
	 * RadioValidation class
	 */

	var RadioValidation = function (_BaseValidation) {
	  babelHelpers.inherits(RadioValidation, _BaseValidation);

	  function RadioValidation(field, model, vm, el, scope, validator, filters, detectBlur, detectChange) {
	    babelHelpers.classCallCheck(this, RadioValidation);

	    var _this = babelHelpers.possibleConstructorReturn(this, _BaseValidation.call(this, field, model, vm, el, scope, validator, filters, detectBlur, detectChange));

	    _this._inits = [];
	    return _this;
	  }

	  RadioValidation.prototype.manageElement = function manageElement(el, initial) {
	    var _this2 = this;

	    var scope = this._getScope();
	    var item = this._addItem(el, initial);

	    var model = item.model = this._model;
	    if (model) {
	      var value = this._evalModel(model, this._filters);
	      this._setChecked(value, el, item);
	      item.unwatch = scope.$watch(model, function (val, old) {
	        if (val !== old) {
	          if (_this2.guardValidate(item.el, 'change')) {
	            return;
	          }

	          _this2.handleValidate(el, { noopable: item.initial });
	          if (item.initial) {
	            item.initial = null;
	          }
	        }
	      });
	    } else {
	      var options = { field: this.field, noopable: initial };
	      if (this._checkClassIds(el)) {
	        options.el = el;
	      }
	      this._validator.validate(options);
	    }
	  };

	  RadioValidation.prototype.unmanageElement = function unmanageElement(el) {
	    var found = -1;
	    each(this._inits, function (item, index) {
	      if (item.el === el) {
	        found = index;
	      }
	    });
	    if (found === -1) {
	      return;
	    }

	    this._inits.splice(found, 1);
	    this._validator.validate({ field: this.field });
	  };

	  RadioValidation.prototype.willUpdateFlags = function willUpdateFlags() {
	    var _this3 = this;

	    var touched = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

	    each(this._inits, function (item, index) {
	      touched && _this3.willUpdateTouched(item.el, 'blur');
	      _this3.willUpdateDirty(item.el);
	      _this3.willUpdateModified(item.el);
	    });
	  };

	  RadioValidation.prototype.reset = function reset() {
	    this.resetFlags();
	    each(this._inits, function (item, index) {
	      item.init = item.el.checked;
	      item.value = item.el.value;
	    });
	  };

	  RadioValidation.prototype.updateClasses = function updateClasses(results) {
	    var _this4 = this;

	    var el = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	    if (el) {
	      // for another element
	      this._updateClasses(el, results);
	    } else {
	      each(this._inits, function (item, index) {
	        _this4._updateClasses(item.el, results);
	      });
	    }
	  };

	  RadioValidation.prototype._addItem = function _addItem(el, initial) {
	    var item = {
	      el: el,
	      init: el.checked,
	      value: el.value,
	      initial: initial
	    };

	    var classIds = el.getAttribute(VALIDATE_UPDATE);
	    if (classIds) {
	      el.removeAttribute(VALIDATE_UPDATE);
	      item.classIds = classIds.split(',');
	    }

	    this._inits.push(item);
	    return item;
	  };

	  RadioValidation.prototype._setChecked = function _setChecked(value, el, item) {
	    if (el.value === value) {
	      el.checked = true;
	      this._init = el.checked;
	      item.init = el.checked;
	      item.value = value;
	    }
	  };

	  RadioValidation.prototype._getValue = function _getValue(el) {
	    var _this5 = this;

	    if (!this._inits || this._inits.length === 0) {
	      return el.checked;
	    } else {
	      var _ret = function () {
	        var vals = [];
	        each(_this5._inits, function (item, index) {
	          item.el.checked && vals.push(item.el.value);
	        });
	        return {
	          v: vals
	        };
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : babelHelpers.typeof(_ret)) === "object") return _ret.v;
	    }
	  };

	  RadioValidation.prototype._getClassIds = function _getClassIds(el) {
	    var classIds = void 0;
	    each(this._inits, function (item, index) {
	      if (item.el === el) {
	        classIds = item.classIds;
	      }
	    });
	    return classIds;
	  };

	  RadioValidation.prototype._checkModified = function _checkModified(target) {
	    var _this6 = this;

	    if (this._inits.length === 0) {
	      return this._init !== target.checked;
	    } else {
	      var _ret2 = function () {
	        var modified = false;
	        each(_this6._inits, function (item, index) {
	          if (!modified) {
	            modified = item.init !== item.el.checked;
	          }
	        });
	        return {
	          v: modified
	        };
	      }();

	      if ((typeof _ret2 === 'undefined' ? 'undefined' : babelHelpers.typeof(_ret2)) === "object") return _ret2.v;
	    }
	  };

	  return RadioValidation;
	}(BaseValidation);

	/**
	 * SelectValidation class
	 */

	var SelectValidation = function (_BaseValidation) {
	  babelHelpers.inherits(SelectValidation, _BaseValidation);

	  function SelectValidation(field, model, vm, el, scope, validator, filters, detectBlur, detectChange) {
	    babelHelpers.classCallCheck(this, SelectValidation);

	    var _this = babelHelpers.possibleConstructorReturn(this, _BaseValidation.call(this, field, model, vm, el, scope, validator, filters, detectBlur, detectChange));

	    _this._multiple = _this._el.hasAttribute('multiple');
	    return _this;
	  }

	  SelectValidation.prototype.manageElement = function manageElement(el, initial) {
	    var _this2 = this;

	    var scope = this._getScope();
	    var model = this._model;

	    this._initial = initial;

	    var classIds = el.getAttribute(VALIDATE_UPDATE);
	    if (classIds) {
	      el.removeAttribute(VALIDATE_UPDATE);
	      this._classIds = classIds.split(',');
	    }

	    if (model) {
	      var value = this._evalModel(model, this._filters);
	      var values = !Array.isArray(value) ? [value] : value;
	      this._setOption(values, el);
	      this._unwatch = scope.$watch(model, function (val, old) {
	        var values1 = !Array.isArray(val) ? [val] : val;
	        var values2 = !Array.isArray(old) ? [old] : old;
	        if (values1.slice().sort().toString() !== values2.slice().sort().toString()) {
	          if (_this2.guardValidate(el, 'change')) {
	            return;
	          }

	          _this2.handleValidate(el, { noopable: _this2._initial });
	          if (_this2._initial) {
	            _this2._initial = null;
	          }
	        }
	      });
	    }
	  };

	  SelectValidation.prototype.unmanageElement = function unmanageElement(el) {
	    this._unwatch && this._unwatch();
	  };

	  SelectValidation.prototype.reset = function reset() {
	    this.resetFlags();
	  };

	  SelectValidation.prototype._getValue = function _getValue(el) {
	    var ret = [];

	    for (var i = 0, l = el.options.length; i < l; i++) {
	      var option = el.options[i];
	      if (!option.disabled && option.selected) {
	        ret.push(option.value);
	      }
	    }

	    return ret;
	  };

	  SelectValidation.prototype._setOption = function _setOption(values, el) {
	    for (var i = 0, l = values.length; i < l; i++) {
	      var value = values[i];
	      for (var j = 0, m = el.options.length; j < m; j++) {
	        var option = el.options[j];
	        if (!option.disabled && option.value === value && (!option.hasAttribute('selected') || !option.selected)) {
	          option.selected = true;
	        }
	      }
	    }
	  };

	  SelectValidation.prototype._checkModified = function _checkModified(target) {
	    var values = this._getValue(target).slice().sort();
	    if (this._init.length !== values.length) {
	      return true;
	    } else {
	      var inits = this._init.slice().sort();
	      return inits.toString() !== values.toString();
	    }
	  };

	  return SelectValidation;
	}(BaseValidation);

	/**
	 * Validator class
	 */

	var Validator$1 = function () {
	  function Validator(name, dir, groups, classes) {
	    var _this = this;

	    babelHelpers.classCallCheck(this, Validator);

	    this.name = name;

	    this._scope = {};
	    this._dir = dir;
	    this._validations = {};
	    this._checkboxValidations = {};
	    this._radioValidations = {};
	    this._groups = groups;
	    this._groupValidations = {};
	    this._events = {};
	    this._modified = false;
	    this._classes = classes;

	    each(groups, function (group) {
	      _this._groupValidations[group] = [];
	    });
	  }

	  Validator.prototype.enableReactive = function enableReactive() {
	    var vm = this._dir.vm;

	    // define the validation scope
	    exports$1.Vue.util.defineReactive(vm, this.name, this._scope);
	    vm._validatorMaps[this.name] = this;

	    // define the validation resetting meta method to vue instance
	    this._defineResetValidation();

	    // define the validate manually meta method to vue instance
	    this._defineValidate();

	    // define manually the validation errors
	    this._defineSetValidationErrors();
	  };

	  Validator.prototype.disableReactive = function disableReactive() {
	    var vm = this._dir.vm;
	    vm.$setValidationErrors = null;
	    delete vm['$setValidationErrors'];
	    vm.$validate = null;
	    delete vm['$validate'];
	    vm.$validatorReset = null;
	    delete vm['$validatorReset'];
	    vm._validatorMaps[this.name] = null;
	    delete vm._validatorMaps[this.name];
	    vm[this.name] = null;
	    delete vm[this.name];
	  };

	  Validator.prototype.registerEvents = function registerEvents() {
	    var isSimplePath = exports$1.Vue.parsers.expression.isSimplePath;

	    var attrs = this._dir.el.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var event = attrs[i].name;
	      if (REGEX_EVENT.test(event)) {
	        var value = attrs[i].value;
	        if (isSimplePath(value)) {
	          value += '.apply(this, $arguments)';
	        }
	        event = event.replace(REGEX_EVENT, '');
	        this._events[this._getEventName(event)] = this._dir.vm.$eval(value, true);
	      }
	    }
	  };

	  Validator.prototype.unregisterEvents = function unregisterEvents() {
	    var _this2 = this;

	    each(this._events, function (handler, event) {
	      _this2._events[event] = null;
	      delete _this2._events[event];
	    });
	  };

	  Validator.prototype.manageValidation = function manageValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange) {
	    var validation = null;

	    if (el.tagName === 'SELECT') {
	      validation = this._manageSelectValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange);
	    } else if (el.type === 'checkbox') {
	      validation = this._manageCheckboxValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange);
	    } else if (el.type === 'radio') {
	      validation = this._manageRadioValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange);
	    } else {
	      validation = this._manageBaseValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange);
	    }

	    validation.setValidationClasses(this._classes);

	    return validation;
	  };

	  Validator.prototype.unmanageValidation = function unmanageValidation(field, el) {
	    if (el.type === 'checkbox') {
	      this._unmanageCheckboxValidation(field, el);
	    } else if (el.type === 'radio') {
	      this._unmanageRadioValidation(field, el);
	    } else if (el.tagName === 'SELECT') {
	      this._unmanageSelectValidation(field, el);
	    } else {
	      this._unmanageBaseValidation(field, el);
	    }
	  };

	  Validator.prototype.addGroupValidation = function addGroupValidation(group, field) {
	    var indexOf = exports$1.Vue.util.indexOf;

	    var validation = this._getValidationFrom(field);
	    var validations = this._groupValidations[group];

	    validations && ! ~indexOf(validations, validation) && validations.push(validation);
	  };

	  Validator.prototype.removeGroupValidation = function removeGroupValidation(group, field) {
	    var validation = this._getValidationFrom(field);
	    var validations = this._groupValidations[group];

	    validations && pull(validations, validation);
	  };

	  Validator.prototype.validate = function validate() {
	    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var _ref$el = _ref.el;
	    var el = _ref$el === undefined ? null : _ref$el;
	    var _ref$field = _ref.field;
	    var field = _ref$field === undefined ? null : _ref$field;
	    var _ref$touched = _ref.touched;
	    var touched = _ref$touched === undefined ? false : _ref$touched;
	    var _ref$noopable = _ref.noopable;
	    var noopable = _ref$noopable === undefined ? false : _ref$noopable;
	    var _ref$cb = _ref.cb;
	    var cb = _ref$cb === undefined ? null : _ref$cb;

	    if (!field) {
	      // all
	      each(this.validations, function (validation, key) {
	        validation.willUpdateFlags(touched);
	      });
	      this._validates(cb);
	    } else {
	      // each field
	      this._validate(field, touched, noopable, el, cb);
	    }
	  };

	  Validator.prototype.setupScope = function setupScope() {
	    var _this3 = this;

	    this._defineProperties(function () {
	      return _this3.validations;
	    }, function () {
	      return _this3._scope;
	    });

	    each(this._groups, function (name) {
	      var validations = _this3._groupValidations[name];
	      var group = {};
	      exports$1.Vue.set(_this3._scope, name, group);
	      _this3._defineProperties(function () {
	        return validations;
	      }, function () {
	        return group;
	      });
	    });
	  };

	  Validator.prototype.waitFor = function waitFor(cb) {
	    var method = '$activateValidator';
	    var vm = this._dir.vm;

	    vm[method] = function () {
	      cb();
	      vm[method] = null;
	    };
	  };

	  Validator.prototype._defineResetValidation = function _defineResetValidation() {
	    var _this4 = this;

	    this._dir.vm.$resetValidation = function (cb) {
	      _this4._resetValidation(cb);
	    };
	  };

	  Validator.prototype._defineValidate = function _defineValidate() {
	    var _this5 = this;

	    this._dir.vm.$validate = function () {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      var field = null;
	      var touched = false;
	      var cb = null;

	      each(args, function (arg, index) {
	        if (typeof arg === 'string') {
	          field = arg;
	        } else if (typeof arg === 'boolean') {
	          touched = arg;
	        } else if (typeof arg === 'function') {
	          cb = arg;
	        }
	      });

	      _this5.validate({ field: field, touched: touched, cb: cb });
	    };
	  };

	  Validator.prototype._defineSetValidationErrors = function _defineSetValidationErrors() {
	    var _this6 = this;

	    this._dir.vm.$setValidationErrors = function (errors) {
	      _this6._setValidationErrors(errors);
	    };
	  };

	  Validator.prototype._validate = function _validate(field) {
	    var touched = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	    var noopable = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	    var _this7 = this;

	    var el = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
	    var cb = arguments.length <= 4 || arguments[4] === undefined ? null : arguments[4];

	    var scope = this._scope;

	    var validation = this._getValidationFrom(field);
	    if (validation) {
	      validation.willUpdateFlags(touched);
	      validation.validate(function (results) {
	        exports$1.Vue.set(scope, field, results);
	        _this7._fireEvents();
	        cb && cb();
	      }, noopable, el);
	    }
	  };

	  Validator.prototype._validates = function _validates(cb) {
	    var _this8 = this;

	    var scope = this._scope;

	    this._runValidates(function (validation, key, done) {
	      validation.validate(function (results) {
	        exports$1.Vue.set(scope, key, results);
	        done();
	      });
	    }, function () {
	      // finished
	      _this8._fireEvents();
	      cb && cb();
	    });
	  };

	  Validator.prototype._getValidationFrom = function _getValidationFrom(field) {
	    return this._validations[field] || this._checkboxValidations[field] && this._checkboxValidations[field].validation || this._radioValidations[field] && this._radioValidations[field].validation;
	  };

	  Validator.prototype._resetValidation = function _resetValidation(cb) {
	    each(this.validations, function (validation, key) {
	      validation.reset();
	    });
	    this._validates(cb);
	  };

	  Validator.prototype._setValidationErrors = function _setValidationErrors(errors) {
	    var _this9 = this;

	    var extend = exports$1.Vue.util.extend;

	    // make tempolaly errors

	    var temp = {};
	    each(errors, function (error, index) {
	      if (!temp[error.field]) {
	        temp[error.field] = [];
	      }
	      temp[error.field].push(error);
	    });

	    // set errors
	    each(temp, function (values, field) {
	      var results = _this9._scope[field];
	      var newResults = {};

	      each(values, function (error) {
	        if (error.validator) {
	          results[error.validator] = error.message;
	        }
	      });

	      results.valid = false;
	      results.invalid = true;
	      results.errors = values;
	      extend(newResults, results);

	      var validation = _this9._getValidationFrom(field);
	      validation.willUpdateClasses(newResults, validation.el);

	      exports$1.Vue.set(_this9._scope, field, newResults);
	    });
	  };

	  Validator.prototype._manageBaseValidation = function _manageBaseValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange) {
	    var validation = this._validations[field] = new BaseValidation(field, model, vm, el, scope, this, filters, detectBlur, detectChange);
	    validation.manageElement(el, initial);
	    return validation;
	  };

	  Validator.prototype._unmanageBaseValidation = function _unmanageBaseValidation(field, el) {
	    var validation = this._validations[field];
	    if (validation) {
	      validation.unmanageElement(el);
	      exports$1.Vue.delete(this._scope, field);
	      this._validations[field] = null;
	      delete this._validations[field];
	    }
	  };

	  Validator.prototype._manageCheckboxValidation = function _manageCheckboxValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange) {
	    var validationSet = this._checkboxValidations[field];
	    if (!validationSet) {
	      var validation = new CheckboxValidation(field, model, vm, el, scope, this, filters, detectBlur, detectChange);
	      validationSet = { validation: validation, elements: 0 };
	      this._checkboxValidations[field] = validationSet;
	    }

	    validationSet.elements++;
	    validationSet.validation.manageElement(el, initial);
	    return validationSet.validation;
	  };

	  Validator.prototype._unmanageCheckboxValidation = function _unmanageCheckboxValidation(field, el) {
	    var validationSet = this._checkboxValidations[field];
	    if (validationSet) {
	      validationSet.elements--;
	      validationSet.validation.unmanageElement(el);
	      if (validationSet.elements === 0) {
	        exports$1.Vue.delete(this._scope, field);
	        this._checkboxValidations[field] = null;
	        delete this._checkboxValidations[field];
	      }
	    }
	  };

	  Validator.prototype._manageRadioValidation = function _manageRadioValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange) {
	    var validationSet = this._radioValidations[field];
	    if (!validationSet) {
	      var validation = new RadioValidation(field, model, vm, el, scope, this, filters, detectBlur, detectChange);
	      validationSet = { validation: validation, elements: 0 };
	      this._radioValidations[field] = validationSet;
	    }

	    validationSet.elements++;
	    validationSet.validation.manageElement(el, initial);
	    return validationSet.validation;
	  };

	  Validator.prototype._unmanageRadioValidation = function _unmanageRadioValidation(field, el) {
	    var validationSet = this._radioValidations[field];
	    if (validationSet) {
	      validationSet.elements--;
	      validationSet.validation.unmanageElement(el);
	      if (validationSet.elements === 0) {
	        exports$1.Vue.delete(this._scope, field);
	        this._radioValidations[field] = null;
	        delete this._radioValidations[field];
	      }
	    }
	  };

	  Validator.prototype._manageSelectValidation = function _manageSelectValidation(field, model, vm, el, scope, filters, initial, detectBlur, detectChange) {
	    var validation = this._validations[field] = new SelectValidation(field, model, vm, el, scope, this, filters, detectBlur, detectChange);
	    validation.manageElement(el, initial);
	    return validation;
	  };

	  Validator.prototype._unmanageSelectValidation = function _unmanageSelectValidation(field, el) {
	    var validation = this._validations[field];
	    if (validation) {
	      validation.unmanageElement(el);
	      exports$1.Vue.delete(this._scope, field);
	      this._validations[field] = null;
	      delete this._validations[field];
	    }
	  };

	  Validator.prototype._fireEvent = function _fireEvent(type) {
	    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	      args[_key2 - 1] = arguments[_key2];
	    }

	    var handler = this._events[this._getEventName(type)];
	    handler && this._dir.vm.$nextTick(function () {
	      handler.apply(null, args);
	    });
	  };

	  Validator.prototype._fireEvents = function _fireEvents() {
	    var scope = this._scope;

	    scope.touched && this._fireEvent('touched');
	    scope.dirty && this._fireEvent('dirty');

	    if (this._modified !== scope.modified) {
	      this._fireEvent('modified', scope.modified);
	      this._modified = scope.modified;
	    }

	    var valid = scope.valid;
	    this._fireEvent(valid ? 'valid' : 'invalid');
	  };

	  Validator.prototype._getEventName = function _getEventName(type) {
	    return this.name + ':' + type;
	  };

	  Validator.prototype._defineProperties = function _defineProperties(validationsGetter, targetGetter) {
	    var _this10 = this;

	    var bind = exports$1.Vue.util.bind;

	    each({
	      valid: { fn: this._defineValid, arg: validationsGetter },
	      invalid: { fn: this._defineInvalid, arg: targetGetter },
	      touched: { fn: this._defineTouched, arg: validationsGetter },
	      untouched: { fn: this._defineUntouched, arg: targetGetter },
	      modified: { fn: this._defineModified, arg: validationsGetter },
	      dirty: { fn: this._defineDirty, arg: validationsGetter },
	      pristine: { fn: this._definePristine, arg: targetGetter },
	      errors: { fn: this._defineErrors, arg: validationsGetter }
	    }, function (descriptor, name) {
	      Object.defineProperty(targetGetter(), name, {
	        enumerable: true,
	        configurable: true,
	        get: function get() {
	          return bind(descriptor.fn, _this10)(descriptor.arg);
	        }
	      });
	    });
	  };

	  Validator.prototype._runValidates = function _runValidates(fn, cb) {
	    var length = Object.keys(this.validations).length;

	    var count = 0;
	    each(this.validations, function (validation, key) {
	      fn(validation, key, function () {
	        ++count;
	        count >= length && cb();
	      });
	    });
	  };

	  Validator.prototype._walkValidations = function _walkValidations(validations, property, condition) {
	    var _this11 = this;

	    var hasOwn = exports$1.Vue.util.hasOwn;
	    var ret = condition;

	    each(validations, function (validation, key) {
	      if (ret === !condition) {
	        return;
	      }
	      if (hasOwn(_this11._scope, validation.field)) {
	        var target = _this11._scope[validation.field];
	        if (target && target[property] === !condition) {
	          ret = !condition;
	        }
	      }
	    });

	    return ret;
	  };

	  Validator.prototype._defineValid = function _defineValid(validationsGetter) {
	    return this._walkValidations(validationsGetter(), 'valid', true);
	  };

	  Validator.prototype._defineInvalid = function _defineInvalid(scopeGetter) {
	    return !scopeGetter().valid;
	  };

	  Validator.prototype._defineTouched = function _defineTouched(validationsGetter) {
	    return this._walkValidations(validationsGetter(), 'touched', false);
	  };

	  Validator.prototype._defineUntouched = function _defineUntouched(scopeGetter) {
	    return !scopeGetter().touched;
	  };

	  Validator.prototype._defineModified = function _defineModified(validationsGetter) {
	    return this._walkValidations(validationsGetter(), 'modified', false);
	  };

	  Validator.prototype._defineDirty = function _defineDirty(validationsGetter) {
	    return this._walkValidations(validationsGetter(), 'dirty', false);
	  };

	  Validator.prototype._definePristine = function _definePristine(scopeGetter) {
	    return !scopeGetter().dirty;
	  };

	  Validator.prototype._defineErrors = function _defineErrors(validationsGetter) {
	    var _this12 = this;

	    var hasOwn = exports$1.Vue.util.hasOwn;
	    var isPlainObject = exports$1.Vue.util.isPlainObject;
	    var errors = [];

	    each(validationsGetter(), function (validation, key) {
	      if (hasOwn(_this12._scope, validation.field)) {
	        var target = _this12._scope[validation.field];
	        if (target && !empty(target.errors)) {
	          each(target.errors, function (err, index) {
	            var error = { field: validation.field };
	            if (isPlainObject(err)) {
	              if (err.validator) {
	                error.validator = err.validator;
	              }
	              error.message = err.message;
	            } else if (typeof err === 'string') {
	              error.message = err;
	            }
	            errors.push(error);
	          });
	        }
	      }
	    });

	    return empty(errors) ? undefined : errors.sort(function (a, b) {
	      return a.field < b.field ? -1 : 1;
	    });
	  };

	  babelHelpers.createClass(Validator, [{
	    key: 'validations',
	    get: function get() {
	      var extend = exports$1.Vue.util.extend;

	      var ret = {};
	      extend(ret, this._validations);

	      each(this._checkboxValidations, function (dataset, key) {
	        ret[key] = dataset.validation;
	      });

	      each(this._radioValidations, function (dataset, key) {
	        ret[key] = dataset.validation;
	      });

	      return ret;
	    }
	  }]);
	  return Validator;
	}();

	function Validator (Vue) {
	  var FragmentFactory = Vue.FragmentFactory;
	  var vIf = Vue.directive('if');
	  var _Vue$util = Vue.util;
	  var isArray = _Vue$util.isArray;
	  var isPlainObject = _Vue$util.isPlainObject;
	  var createAnchor = _Vue$util.createAnchor;
	  var replace = _Vue$util.replace;
	  var extend = _Vue$util.extend;
	  var camelize = _Vue$util.camelize;

	  /**
	   * `validator` element directive
	   */

	  Vue.elementDirective('validator', {
	    params: ['name', 'groups', 'lazy', 'classes'],

	    bind: function bind() {
	      var params = this.params;

	      if (process.env.NODE_ENV !== 'production' && !params.name) {
	        warn('validator element requires a \'name\' attribute: ' + '(e.g. <validator name="validator1">...</validator>)');
	        return;
	      }

	      this.validatorName = '$' + camelize(params.name);
	      if (!this.vm._validatorMaps) {
	        throw new Error('Invalid validator management error');
	      }

	      var classes = {};
	      if (isPlainObject(this.params.classes)) {
	        classes = this.params.classes;
	      }

	      this.setupValidator(classes);
	      this.setupFragment(params.lazy);
	    },
	    unbind: function unbind() {
	      this.teardownFragment();
	      this.teardownValidator();
	    },
	    getGroups: function getGroups() {
	      var params = this.params;
	      var groups = [];

	      if (params.groups) {
	        if (isArray(params.groups)) {
	          groups = params.groups;
	        } else if (!isPlainObject(params.groups) && typeof params.groups === 'string') {
	          groups.push(params.groups);
	        }
	      }

	      return groups;
	    },
	    setupValidator: function setupValidator(classes) {
	      var validator = this.validator = new Validator$1(this.validatorName, this, this.getGroups(), classes);
	      validator.enableReactive();
	      validator.setupScope();
	      validator.registerEvents();
	    },
	    teardownValidator: function teardownValidator() {
	      this.validator.unregisterEvents();
	      this.validator.disableReactive();

	      if (this.validatorName) {
	        this.validatorName = null;
	        this.validator = null;
	      }
	    },
	    setupFragment: function setupFragment(lazy) {
	      var _this = this;

	      var vm = this.vm;

	      this.validator.waitFor(function () {
	        _this.anchor = createAnchor('vue-validator');
	        replace(_this.el, _this.anchor);
	        extend(vm.$options, { _validator: _this.validatorName });
	        _this.factory = new FragmentFactory(vm, _this.el.innerHTML);
	        vIf.insert.call(_this);
	      });

	      !lazy && vm.$activateValidator();
	    },
	    teardownFragment: function teardownFragment() {
	      vIf.unbind.call(this);
	    }
	  });
	}

	function ValidatorError (Vue) {
	  /**
	   * ValidatorError component
	   */

	  var error = {
	    name: 'validator-error',

	    props: {
	      field: {
	        type: String,
	        required: true
	      },
	      validator: {
	        type: String
	      },
	      message: {
	        type: String,
	        required: true
	      },
	      partial: {
	        type: String,
	        default: 'validator-error-default'
	      }
	    },

	    template: '<div><partial :name="partial"></partial></div>',

	    partials: {}
	  };

	  // only use ValidatorError component
	  error.partials['validator-error-default'] = '<p>{{field}}: {{message}}</p>';

	  return error;
	}

	function Errors (Vue) {
	  var _ = Vue.util;
	  var error = ValidatorError(Vue); // import ValidatorError component

	  /**
	   * ValidatorErrors component
	   */

	  var errors = {
	    name: 'validator-errors',

	    props: {
	      validation: {
	        type: Object,
	        required: true
	      },
	      group: {
	        type: String,
	        default: null
	      },
	      field: {
	        type: String,
	        default: null
	      },
	      component: {
	        type: String,
	        default: 'validator-error'
	      }
	    },

	    computed: {
	      errors: function errors() {
	        var _this = this;

	        if (this.group !== null) {
	          return this.validation[this.group].errors;
	        } else if (this.field !== null) {
	          var target = this.validation[this.field];
	          if (!target.errors) {
	            return;
	          }

	          return target.errors.map(function (error) {
	            var err = { field: _this.field };
	            if (_.isPlainObject(error)) {
	              if (error.validator) {
	                err.validator = error.validator;
	              }
	              err.message = error.message;
	            } else if (typeof error === 'string') {
	              err.message = error;
	            }
	            return err;
	          });
	        } else {
	          return this.validation.errors;
	        }
	      }
	    },

	    template: '<template v-for="error in errors">' + '<component :is="component" :partial="partial" :field="error.field" :validator="error.validator" :message="error.message">' + '</component>' + '</template>',

	    components: {}
	  };

	  // define 'partial' prop
	  errors.props['partial'] = error.props['partial'];

	  // only use ValidatorErrors component
	  errors.components[error.name] = error;

	  // install ValidatorErrors component
	  Vue.component(errors.name, errors);

	  return errors;
	}

	/**
	 * plugin
	 *
	 * @param {Function} Vue
	 * @param {Object} options
	 */

	function plugin(Vue) {
	  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  if (plugin.installed) {
	    warn('already installed.');
	    return;
	  }

	  exports$1.Vue = Vue;
	  Asset(Vue);
	  Errors(Vue);

	  Override(Vue);
	  Validator(Vue);
	  ValidateClass(Vue);
	  Validate(Vue);
	}

	plugin.version = '2.1.3';

	if (typeof window !== 'undefined' && window.Vue) {
	  window.Vue.use(plugin);
	}

	module.exports = plugin;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 764 */,
/* 765 */,
/* 766 */,
/* 767 */,
/* 768 */,
/* 769 */,
/* 770 */,
/* 771 */,
/* 772 */,
/* 773 */,
/* 774 */,
/* 775 */,
/* 776 */,
/* 777 */,
/* 778 */,
/* 779 */,
/* 780 */,
/* 781 */,
/* 782 */,
/* 783 */,
/* 784 */,
/* 785 */,
/* 786 */,
/* 787 */,
/* 788 */,
/* 789 */,
/* 790 */,
/* 791 */,
/* 792 */,
/* 793 */,
/* 794 */,
/* 795 */,
/* 796 */,
/* 797 */,
/* 798 */,
/* 799 */,
/* 800 */,
/* 801 */,
/* 802 */,
/* 803 */,
/* 804 */,
/* 805 */,
/* 806 */,
/* 807 */,
/* 808 */,
/* 809 */,
/* 810 */,
/* 811 */,
/* 812 */,
/* 813 */,
/* 814 */,
/* 815 */,
/* 816 */,
/* 817 */,
/* 818 */,
/* 819 */,
/* 820 */,
/* 821 */,
/* 822 */,
/* 823 */,
/* 824 */,
/* 825 */,
/* 826 */,
/* 827 */,
/* 828 */,
/* 829 */,
/* 830 */,
/* 831 */,
/* 832 */,
/* 833 */,
/* 834 */,
/* 835 */,
/* 836 */,
/* 837 */,
/* 838 */,
/* 839 */,
/* 840 */,
/* 841 */,
/* 842 */,
/* 843 */,
/* 844 */,
/* 845 */,
/* 846 */,
/* 847 */,
/* 848 */,
/* 849 */,
/* 850 */,
/* 851 */,
/* 852 */,
/* 853 */,
/* 854 */,
/* 855 */,
/* 856 */,
/* 857 */,
/* 858 */,
/* 859 */,
/* 860 */,
/* 861 */,
/* 862 */,
/* 863 */,
/* 864 */,
/* 865 */,
/* 866 */,
/* 867 */,
/* 868 */,
/* 869 */,
/* 870 */,
/* 871 */,
/* 872 */,
/* 873 */,
/* 874 */,
/* 875 */,
/* 876 */,
/* 877 */,
/* 878 */,
/* 879 */,
/* 880 */,
/* 881 */,
/* 882 */,
/* 883 */,
/* 884 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(885)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsPopup/src/abstract.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(886)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsPopup/src/abstract.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 885 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Popper = __webpack_require__(413);

	var _Popper2 = _interopRequireDefault(_Popper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  VERSION: '1.0.0',

	  name: 'KsPopupAbstract',

	  mixins: [_Popper2.default],

	  data: function data() {
	    return {};
	  },


	  props: {
	    className: { type: String, default: 'KsPopupAbstract' },
	    arrowClassName: { type: String, default: 'KsPopupAbstract-arrow' },
	    showPopper: { type: Boolean, toWay: true },
	    disabled: { type: Boolean, default: false },
	    content: { type: String, default: '' },
	    visibleArrow: { type: Boolean, default: true },
	    transition: { type: String, default: 'fade-in-linear' },
	    options: {
	      default: function _default() {
	        return {
	          boundariesPadding: 10,
	          gpuAcceleration: true
	        };
	      }
	    }
	  }

	};
	// </script>
	// <template>
	//   <div v-el:reference style="display: inline-block">
	//     <!-- 内容 -->
	//     <slot></slot>
	//     <div :class="className" v-el:popper v-show="!disabled && showPopper">
	//       <strong v-text="content"></strong>
	//       <slot name="content"></slot>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 886 */
/***/ function(module, exports) {

	module.exports = "\n<div v-el:reference style=\"display: inline-block\">\n  <!-- 内容 -->\n  <slot></slot>\n  <div :class=\"className\" v-el:popper v-show=\"!disabled && showPopper\">\n    <strong v-text=\"content\"></strong>\n    <slot name=\"content\"></slot>\n  </div>\n</div>\n";

/***/ },
/* 887 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(888)
	__vue_script__ = __webpack_require__(890)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsPopup/src/tips.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(891)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsPopup/src/tips.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 888 */
[1106, 889],
/* 889 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/**\n * @description ToolTips 样式.\n * @author pkeros\n * @data 2017/2/15\n * @email pkeros@vip.qq.com\n */\n.KsToolTip {\n  position: absolute;\n  background: #333;\n  color: white;\n  padding: 7px 18px;\n  border-radius: 4px;\n  text-align: center; }\n  .KsToolTip-arrow {\n    width: 0;\n    height: 0;\n    position: absolute;\n    margin: 7px;\n    border-style: solid; }\n  .KsToolTip[x-placement^=\"top\"] {\n    margin-bottom: 7px; }\n  .KsToolTip[x-placement^=\"top\"] .KsToolTip-arrow {\n    border-width: 7px 7px 0 7px;\n    border-color: #333 transparent transparent transparent;\n    bottom: -7px;\n    left: calc(50% - 7px);\n    margin-top: 0;\n    margin-bottom: 0; }\n  .KsToolTip[x-placement^=\"bottom\"] {\n    margin-top: 7px; }\n  .KsToolTip[x-placement^=\"bottom\"] .KsToolTip-arrow {\n    border-width: 0 7px 7px 7px;\n    border-color: transparent transparent #333 transparent;\n    top: -7px;\n    left: calc(50% - 7px);\n    margin-top: 0;\n    margin-bottom: 0; }\n  .KsToolTip[x-placement^=\"right\"] {\n    margin-left: 7px; }\n  .KsToolTip[x-placement^=\"right\"] .KsToolTip-arrow {\n    border-width: 7px 7px 7px 0;\n    border-color: transparent #333 transparent transparent;\n    left: -7px;\n    top: calc(50% - 7px);\n    margin-left: 0;\n    margin-right: 0; }\n  .KsToolTip[x-placement^=\"left\"] {\n    margin-right: 7px; }\n  .KsToolTip[x-placement^=\"left\"] .KsToolTip-arrow {\n    border-width: 7px 0 7px 7px;\n    border-color: transparent transparent transparent #333;\n    right: -7px;\n    top: calc(50% - 7px);\n    margin-left: 0;\n    margin-right: 0; }\n", ""]);

	// exports


/***/ },
/* 890 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _abstract = __webpack_require__(884);

	var _abstract2 = _interopRequireDefault(_abstract);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  VERSION: '1.0.0',

	  name: 'KsToolTip',

	  data: function data() {
	    return {
	      showPopper: false
	    };
	  },


	  props: {
	    className: { type: String, default: 'KsToolTip' },
	    arrowClassName: { type: String, default: 'KsToolTip-arrow' },
	    openDelay: { type: Number, default: 0 },
	    closeDelay: { type: Number, default: 0 },
	    disabled: { type: Boolean, default: false },
	    content: { type: String, default: '' },
	    visibleArrow: { type: Boolean, default: true },
	    transition: { type: String, default: 'fade-in-linear' },
	    options: {
	      default: function _default() {
	        return {
	          boundariesPadding: 10,
	          gpuAcceleration: true
	        };
	      }
	    }
	  },

	  methods: {
	    handleShowPopper: function handleShowPopper() {
	      var _this = this;

	      this.timeout = setTimeout(function () {
	        _this.showPopper = true;
	      }, this.openDelay);
	    },
	    handleClosePopper: function handleClosePopper() {
	      this.showPopper = false;
	    }
	  },

	  components: { KsPopupAbstract: _abstract2.default }

	};
	// </script>
	//
	// <style lang="scss">
	//   @import "../styles/index";
	// </style>
	// <template>
	//   <div cid="KsToolTip" style="display: inline-block">
	//     <ks-popup-abstract :class-name="className" :arrow-class-name="arrowClassName"
	//                            :disabled="disable" :content="content"
	//                            :visible-arrow="visibleArrow" :transition="transition"
	//                            :options="options" :show-popper.sync="showPopper"
	//     >
	//       <!-- 弹出依靠 -->
	//       <div class="container" @mouseenter="handleShowPopper" @mouseleave="handleClosePopper">
	//         <slot></slot>
	//       </div>
	//       <!-- 弹出内容部分 -->
	//       <slot name="content" slot="content"></slot>
	//     </ks-popup-abstract>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 891 */
/***/ function(module, exports) {

	module.exports = "\n<div cid=\"KsToolTip\" style=\"display: inline-block\">\n  <ks-popup-abstract :class-name=\"className\" :arrow-class-name=\"arrowClassName\"\n                         :disabled=\"disable\" :content=\"content\"\n                         :visible-arrow=\"visibleArrow\" :transition=\"transition\"\n                         :options=\"options\" :show-popper.sync=\"showPopper\"\n  >\n    <!-- 弹出依靠 -->\n    <div class=\"container\" @mouseenter=\"handleShowPopper\" @mouseleave=\"handleClosePopper\">\n      <slot></slot>\n    </div>\n    <!-- 弹出内容部分 -->\n    <slot name=\"content\" slot=\"content\"></slot>\n  </ks-popup-abstract>\n</div>\n";

/***/ },
/* 892 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _main = __webpack_require__(893);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _main2.default; /**
	                                   * @description 通知中心插件.
	                                   * @author pkeros
	                                   * @data 2017/3/31
	                                   * @email pkeros@vip.qq.com
	                                   */

/***/ },
/* 893 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _container = __webpack_require__(894);

	var _container2 = _interopRequireDefault(_container);

	var _ObjectUtil = __webpack_require__(438);

	var _ObjectUtil2 = _interopRequireDefault(_ObjectUtil);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description notice center component.
	 * @author pkeros
	 * @data 2017/3/31
	 * @email pkeros@vip.qq.com
	 */

	var KsNoticeCenter = void 0,
	    noticeCenter = void 0,
	    _uid = 0;

	// 默认配置参数
	var defaults = {
	  closeBtn: true,
	  title: 'Title',
	  content: 'Content...',
	  hue: 'success'
	};

	var install = function install(Vue) {
	  if (install.installed) return;

	  // 实例化通知中心
	  var initNoticeCenter = function initNoticeCenter() {
	    var constructor = Vue.extend(_container2.default);

	    noticeCenter = new constructor({ el: document.createElement('div') });
	    noticeCenter.show = false;
	    noticeCenter.$on('empty', KsNoticeCenter.clear);
	  };

	  /**
	   * @description 通知中心构造函数
	   * @param options {Object} 配置项
	   * @param closeCb {Function} close 回调
	   * @constructor
	   */
	  KsNoticeCenter = function KsNoticeCenter(options, closeCb) {
	    if (closeCb && typeof closeCb !== 'function') throw new TypeError('KsNoticeCenter: `closeCb` 参数必须为一个函数!');

	    if (!noticeCenter) initNoticeCenter();
	    document.body.appendChild(noticeCenter.$el);
	    Vue.nextTick(function () {
	      return noticeCenter.show = true;
	    });

	    return {
	      _uid: _uid++,
	      options: _ObjectUtil2.default.merge({}, defaults, options),
	      closeCb: closeCb ? closeCb : function () {}
	    };
	  };

	  /**
	   * @description 关闭当前通知中心
	   */
	  KsNoticeCenter.clear = function () {
	    noticeCenter.show = false;
	    noticeCenter.queue = [];
	  };

	  /**
	   * @description 向通知中心投递一个信息
	   * @param title {String} 标题
	   * @param content {String} 内容
	   * @param hue {String} 色调
	   * @param delay {Number} 超时时间 单位毫秒 默认 4.5s
	   * @param closeCb {Function} close 回调
	   */
	  KsNoticeCenter.post = function (title, content, hue, delay, closeCb) {
	    // 如果没有设置 delay 参数, delay 参数位置为 closeCb 回调
	    var _closeCb = null,
	        _delay = 4500;
	    if (delay && typeof delay === 'function') {
	      _closeCb = delay;
	    } else {
	      _closeCb = closeCb;
	      _delay = delay ? delay : _delay;
	    }

	    var msg = KsNoticeCenter({
	      hue: hue ? hue : 'primary',
	      title: title,
	      content: content,
	      delay: _delay
	    }, _closeCb);

	    noticeCenter.queue.push(msg);
	  };

	  //
	  // 注册不同类型的通知函数
	  //
	  ['danger', 'warn', 'primary', 'success', 'info'].forEach(function (type) {
	    /**
	     * @description 向通知中心投递一个指定类型的信息
	     * @param title {String} 标题
	     * @param content {String} 内容
	     * @param delay {Number} 超时时间 单位毫秒 默认 4.5s
	     * @param closeCb {Function} close 回调
	     */
	    KsNoticeCenter[type] = function (title, content, delay, closeCb) {
	      KsNoticeCenter.post(title, content, type, delay, closeCb);
	    };
	  });

	  Vue.prototype.$KsNotice = KsNoticeCenter;
	};

	// automation register components.
	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue);
	}

	exports.default = { install: install };

/***/ },
/* 894 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(895)
	__vue_script__ = __webpack_require__(897)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsNoticeCenter/src/container.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(903)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsNoticeCenter/src/container.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 895 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(896);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./container.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./container.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 896 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".noticeCenterContainer {\n  z-index: 19941026;\n  position: fixed;\n  top: 0;\n  right: 0;\n  overflow: scroll;\n  width: 300px;\n  min-height: 32px;\n  padding: 6px 12px; }\n  .noticeCenterContainer__li {\n    margin-top: 6px; }\n", ""]);

	// exports


/***/ },
/* 897 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _item = __webpack_require__(898);

	var _item2 = _interopRequireDefault(_item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  VERSION: '1.0.0',

	  data: function data() {
	    return {
	      show: false
	    };
	  },


	  props: {
	    queue: { type: Array, default: function _default() {
	        return [];
	      }
	    }
	  },

	  methods: {
	    /**
	     * @description 关闭消息处理函数
	     * @param i {Number} 消息 ID
	     */
	    closeHandle: function closeHandle(i) {
	      var _queue = this.queue;

	      this.queue = _queue.filter(function (msg) {
	        if (i === msg._uid) msg.closeCb(msg);

	        return i !== msg._uid;
	      });
	      if (!this.queue.length) this.$emit('empty');
	    }
	  },

	  components: { NoticeCenterItem: _item2.default }
	};
	// </script>
	//
	// <style lang="scss">
	//   @import "../../foundation/SassMagic-master/src/sassMagic";
	//
	//   $width: 300px;                                 // 提示信息框的长度
	//
	//   @include b (noticeCenterContainer) {
	//     z-index: 19941026;
	//     position: fixed; top: 0; right: 0;
	//     overflow: scroll;
	//     width: $width; min-height: 32px;
	//     padding: 6px 12px;
	//
	//     @include e (li) { margin-top: 6px }
	//   }
	// </style>
	// <template>
	//   <div class="notice-center-container">
	//     <ul class="noticeCenterContainer" v-if="show">
	//       <li class="noticeCenterContainer__li" v-for="msg in queue">
	//         <notice-center-item :id="msg._uid"
	//                             :hue="msg['options'].hue"
	//                             :title="msg['options'].title"
	//                             :content="msg['options'].content"
	//                             :delay="msg['options'].delay"
	//                             :close-btn="msg['options'].closeBtn"
	//                             @close="closeHandle(msg._uid)"
	//         ></notice-center-item>
	//       </li>
	//     </ul>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 898 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(899)
	__vue_script__ = __webpack_require__(901)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsNoticeCenter/src/item.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(902)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsNoticeCenter/src/item.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 899 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(900);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./item.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./item.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 900 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".noticeCenterItem {\n  position: relative;\n  width: 300px;\n  min-height: 80px;\n  box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  padding: 6px;\n  box-sizing: border-box;\n  word-wrap: break-word; }\n  .noticeCenterItem__title {\n    padding-right: 18px; }\n  .noticeCenterItem__close {\n    position: absolute;\n    right: 6px;\n    top: 6px;\n    text-align: center;\n    line-height: 13px;\n    cursor: pointer; }\n", ""]);

	// exports


/***/ },
/* 901 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="noticeCenterItem" :style="{background: hueMapper[hue]['background'], color: hueMapper[hue]['fontColor']}">
	//     <h3 class="noticeCenterItem__title">
	//       <strong>{{{title}}}</strong>
	//       <i class="noticeCenterItem__close" @click="$emit('close')" v-if="closeBtn">
	//         <!-- close 图标 -->
	//         <ks-icon name="cuowutubiao" size="13px"></ks-icon>
	//       </i>
	//     </h3>
	//     <p class="noticeCenterItem__content">{{{content}}}</p>
	//   </div>
	// </template>
	//
	// <script>
	/**
	 * @description 色调映射
	 * @type {{}}
	 */
	var hueMapper = {
	  danger: { background: '#EF5350', fontColor: '#FFF' },
	  warn: { background: '#FF7043', fontColor: '#FFF' },
	  primary: { background: '#2196f3', fontColor: '#FFF' },
	  success: { background: '#66BB6A', fontColor: '#FFF' },
	  info: { background: '#26C6DA', fontColor: '#FFF' }
	};

	exports.default = {
	  VERSION: '1.0.0',

	  data: function data() {
	    return {
	      hueMapper: hueMapper
	    };
	  },


	  props: {
	    id: { type: Number, default: -1 },
	    closeBtn: { type: Boolean, default: true },
	    delay: { type: Number, default: 4500 },
	    hue: { type: String, default: 'primary' },
	    title: { type: String, default: 'title' },
	    content: { type: String, default: 'content...' }
	  },

	  created: function created() {
	    var _this = this;

	    setTimeout(function () {
	      return _this.$emit('close', _this.id);
	    }, this.delay);
	  }
	};
	// </script>
	//
	// <style lang="scss">
	//   @import "../../foundation/SassMagic-master/src/sassMagic";
	//
	//   $width: 300px;                                 // 提示信息框的长度
	//
	//   @include b (noticeCenterItem) {
	//     position: relative; width: $width; min-height: 80px;
	//     box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
	//     border-radius: 3px; padding: 6px;
	//     box-sizing: border-box;
	//     word-wrap: break-word;
	//
	//     // 标题
	//     @include e (title) { padding-right: 18px }
	//
	//     // close 按钮
	//     @include e (close) {
	//       position: absolute; right: 6px; top: 6px;
	//       text-align: center; line-height: 13px;
	//       cursor: pointer;
	//     }
	//   }
	// </style>

/***/ },
/* 902 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"noticeCenterItem\" :style=\"{background: hueMapper[hue]['background'], color: hueMapper[hue]['fontColor']}\">\n  <h3 class=\"noticeCenterItem__title\">\n    <strong>{{{title}}}</strong>\n    <i class=\"noticeCenterItem__close\" @click=\"$emit('close')\" v-if=\"closeBtn\">\n      <!-- close 图标 -->\n      <ks-icon name=\"cuowutubiao\" size=\"13px\"></ks-icon>\n    </i>\n  </h3>\n  <p class=\"noticeCenterItem__content\">{{{content}}}</p>\n</div>\n";

/***/ },
/* 903 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"notice-center-container\">\n  <ul class=\"noticeCenterContainer\" v-if=\"show\">\n    <li class=\"noticeCenterContainer__li\" v-for=\"msg in queue\">\n      <notice-center-item :id=\"msg._uid\"\n                          :hue=\"msg['options'].hue\"\n                          :title=\"msg['options'].title\"\n                          :content=\"msg['options'].content\"\n                          :delay=\"msg['options'].delay\"\n                          :close-btn=\"msg['options'].closeBtn\"\n                          @close=\"closeHandle(msg._uid)\"\n      ></notice-center-item>\n    </li>\n  </ul>\n</div>\n";

/***/ },
/* 904 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(905)
	__vue_script__ = __webpack_require__(907)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsSwitch/src/IosSwitch.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(908)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsSwitch/src/IosSwitch.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 905 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(906);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./IosSwitch.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./IosSwitch.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 906 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".KSIosSwitch--large {\n  height: 28px;\n  width: 56px;\n  line-height: 28px;\n  font-size: 12px; }\n  .KSIosSwitch--large .KSIosSwitch__entity:checked + .KSIosSwitch__slide .KSIosSwitch__btn {\n    -webkit-transform: translate(28px, 0);\n            transform: translate(28px, 0); }\n  .KSIosSwitch--large .KSIosSwitch__slide {\n    border-radius: 28px; }\n  .KSIosSwitch--large .KSIosSwitch__btn {\n    height: 28px;\n    width: 28px; }\n\n.KSIosSwitch--normal {\n  height: 24px;\n  width: 48px;\n  line-height: 24px;\n  font-size: 12px; }\n  .KSIosSwitch--normal .KSIosSwitch__entity:checked + .KSIosSwitch__slide .KSIosSwitch__btn {\n    -webkit-transform: translate(24px, 0);\n            transform: translate(24px, 0); }\n  .KSIosSwitch--normal .KSIosSwitch__slide {\n    border-radius: 24px; }\n  .KSIosSwitch--normal .KSIosSwitch__btn {\n    height: 24px;\n    width: 24px; }\n\n.KSIosSwitch--small {\n  height: 20px;\n  width: 40px;\n  line-height: 20px;\n  font-size: 12px; }\n  .KSIosSwitch--small .KSIosSwitch__entity:checked + .KSIosSwitch__slide .KSIosSwitch__btn {\n    -webkit-transform: translate(20px, 0);\n            transform: translate(20px, 0); }\n  .KSIosSwitch--small .KSIosSwitch__slide {\n    border-radius: 20px; }\n  .KSIosSwitch--small .KSIosSwitch__btn {\n    height: 20px;\n    width: 20px; }\n\n.KSIosSwitch--mini {\n  height: 16px;\n  width: 32px;\n  line-height: 16px;\n  font-size: 12px; }\n  .KSIosSwitch--mini .KSIosSwitch__entity:checked + .KSIosSwitch__slide .KSIosSwitch__btn {\n    -webkit-transform: translate(16px, 0);\n            transform: translate(16px, 0); }\n  .KSIosSwitch--mini .KSIosSwitch__slide {\n    border-radius: 16px; }\n  .KSIosSwitch--mini .KSIosSwitch__btn {\n    height: 16px;\n    width: 16px; }\n\n.KSIosSwitch {\n  position: relative;\n  display: inline-block;\n  overflow: hidden;\n  padding: 0 2px 2px 0;\n  vertical-align: middle;\n  font-size: 12px; }\n  .KSIosSwitch__entity {\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    opacity: 0 !important;\n    cursor: pointer; }\n    .KSIosSwitch__entity[disabled] {\n      cursor: not-allowed; }\n    .KSIosSwitch__entity[disabled] + .KSIosSwitch__slide {\n      opacity: .6; }\n    .KSIosSwitch__entity:checked + .KSIosSwitch__slide {\n      box-shadow: #4CAF50 0 0 0 16.667px inset;\n      border: 1px solid #4CAF50;\n      -webkit-transition: border .3s, box-shadow .6s, background .9s;\n      transition: border .3s, box-shadow .6s, background .9s;\n      background: #4CAF50; }\n      .KSIosSwitch__entity:checked + .KSIosSwitch__slide *[slot=\"unCheckedChildren\"] {\n        display: none; }\n  .KSIosSwitch__slide {\n    position: relative;\n    z-index: 0;\n    height: 100%;\n    width: 100%;\n    box-shadow: #fff 0 0 0 0 inset;\n    border: 1px solid #dfdfdf;\n    box-sizing: content-box;\n    background: #fff;\n    outline: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    -webkit-transition: border .3s, box-shadow .3s;\n    transition: border .3s, box-shadow .3s;\n    -webkit-tap-highlight-color: transparent; }\n    .KSIosSwitch__slide *[slot$=\"heckedChildren\"] {\n      position: absolute;\n      z-index: -1;\n      display: inline-block;\n      padding: 0 3px; }\n    .KSIosSwitch__slide *[slot=\"checkedChildren\"] {\n      left: 3px;\n      color: #fff; }\n    .KSIosSwitch__slide *[slot=\"unCheckedChildren\"] {\n      right: 3px;\n      color: #bbb; }\n  .KSIosSwitch__btn {\n    display: inline-block;\n    vertical-align: middle;\n    /*position: absolute; top: 0; left: 0;*/\n    float: left;\n    border-radius: 100%;\n    background: #fff;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n    -webkit-transition: all .3s;\n    transition: all .3s;\n    -webkit-tap-highlight-color: transparent; }\n", ""]);

	// exports


/***/ },
/* 907 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div :class="classesSize">
	//     <!-- IosSwitch 背景自定义 -->
	//     <style type="text/css">
	//       {{ '.KSIosSwitch__UID--' + _uid }} .KSIosSwitch__entity:checked + .KSIosSwitch__slide {
	//         {{ styleBgColor }}
	//       }
	//     </style>
	//     <input class="KSIosSwitch__entity" type="checkbox"
	//            v-model="checked"
	//            :checked="defChecked && 'checked'"
	//            :disabled="disable && 'disabled'"/>
	//     <div class="KSIosSwitch__slide">
	//       <small class="KSIosSwitch__btn"></small>
	//       <slot name="checkedChildren"></slot>
	//       <slot name="unCheckedChildren"></slot>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'KsIosSwitch',

	  props: {
	    color: { type: String, default: '#04BE02' },
	    size: { type: String, default: 'normal' },
	    checked: { type: Boolean, twoWay: true },
	    disable: { type: Boolean, default: false }
	  },

	  computed: {
	    /**
	     * @description 开关根 div 的 class
	     * @summary 用于控制组件大小, 标识组件
	     * @return {string}
	     */
	    classesSize: function classesSize() {
	      return 'KSIosSwitch KSIosSwitch--' + this.size + ' KSIosSwitch__UID--' + this._uid;
	    },

	    /**
	     * @description 开关滑动槽的 style
	     * @summary 用于控制组件的颜色
	     * @return {string}
	     */
	    styleBgColor: function styleBgColor() {
	      return 'box-shadow: ' + this.color + ' 0 0 0 16.667px inset!important;\n      background: ' + this.color + '!important;border: 1px solid ' + this.color + '!important;';
	    }
	  },

	  watch: {
	    /**
	     * @description 监测 checked 属性
	     * @param checked {Boolean} checked 值
	     * @summary 用于监测改变并发送 OnChange 事件
	     */
	    checked: function checked(_checked) {
	      this.$emit('change', _checked);
	    }
	  }
	};
	// </script>
	//
	// <style lang="scss">
	//   @import "../styles/IosSwitch";
	// </style>

/***/ },
/* 908 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classesSize\">\n  <!-- IosSwitch 背景自定义 -->\n  <style type=\"text/css\">\n    {{ '.KSIosSwitch__UID--' + _uid }} .KSIosSwitch__entity:checked + .KSIosSwitch__slide {\n      {{ styleBgColor }}\n    }\n  </style>\n  <input class=\"KSIosSwitch__entity\" type=\"checkbox\"\n         v-model=\"checked\"\n         :checked=\"defChecked && 'checked'\"\n         :disabled=\"disable && 'disabled'\"/>\n  <div class=\"KSIosSwitch__slide\">\n    <small class=\"KSIosSwitch__btn\"></small>\n    <slot name=\"checkedChildren\"></slot>\n    <slot name=\"unCheckedChildren\"></slot>\n  </div>\n</div>\n";

/***/ },
/* 909 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(910)
	__vue_script__ = __webpack_require__(912)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsSwitch/src/AbstractSwitch.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(913)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsSwitch/src/AbstractSwitch.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 910 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(911);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./AbstractSwitch.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./AbstractSwitch.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 911 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/**\n * @description 一个抽象的 Switch 组件样式.\n * @author pkeros\n * @data 2017/3/9\n * @email pkeros@vip.qq.com\n */\n.KSAbstractSwitch {\n  position: relative;\n  display: inline-block;\n  padding: 0 2px 2px 0;\n  vertical-align: middle;\n  cursor: pointer; }\n  .KSAbstractSwitch__slide {\n    position: relative;\n    z-index: 0;\n    height: 100%;\n    width: 100%;\n    box-shadow: #fff 0 0 0 0 inset;\n    text-align: center;\n    overflow: hidden;\n    border: 1px solid #dfdfdf;\n    box-sizing: content-box;\n    outline: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    -webkit-transition: border .3s, box-shadow .3s;\n    transition: border .3s, box-shadow .3s;\n    -webkit-tap-highlight-color: transparent; }\n    .KSAbstractSwitch__slide--selected {\n      -webkit-transition: border .3s, box-shadow .6s, background .9s;\n      transition: border .3s, box-shadow .6s, background .9s; }\n  .KSAbstractSwitch__dot {\n    display: inline-block;\n    vertical-align: middle;\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-radius: 100%;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n    -webkit-transition: all .3s;\n    transition: all .3s;\n    -webkit-tap-highlight-color: transparent; }\n", ""]);

	// exports


/***/ },
/* 912 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keys = __webpack_require__(100);

	var _keys2 = _interopRequireDefault(_keys);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <div :class="classes">
	//     <style type="text/css">
	//       {{ '.KSAbstractSwitch__UID--' + _uid }} .KSAbstractSwitch__slide {
	//         {{ slideStyles }}
	//       }
	//       {{ '.KSAbstractSwitch__UID--' + _uid }} .KSAbstractSwitch__dot {
	//         {{ dotStyles }}
	//       }
	//       {{ '.KSAbstractSwitch__UID--' + _uid }} .KSAbstractSwitch__slide--selected {
	//         {{ selectedSlide }}
	//       }
	//       {{ '.KSAbstractSwitch__UID--' + _uid }} .KSAbstractSwitch__text {
	//         {{ textStyles }}
	//       }
	//       {{ '.KSAbstractSwitch__UID--' + _uid }} .KSAbstractSwitch__dot--selected {
	//         {{ selectedDot }}
	//       }
	//     </style>
	//     <div class="KSAbstractSwitch__slide" @click="slideClickHandle"
	//          :class="{'KSAbstractSwitch__slide--selected': count % 2}"
	//     >
	//       <span class="KSAbstractSwitch__text" :class="{'KSAbstractSwitch__text--selected': count % 2}">
	//         <slot></slot> {{statusMapper[status].text}}
	//       </span>
	//       <div class="KSAbstractSwitch__dot" :class="{'KSAbstractSwitch__dot--selected': count % 2}"></div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  VERSION: '1.0.0',

	  data: function data() {
	    return {
	      count: 0
	    };
	  },


	  props: {
	    statusMapper: { type: Object, required: true },
	    status: { type: String, required: true, towWay: true },
	    width: { type: Number, required: true },
	    height: { type: Number, required: true }
	  },

	  methods: {
	    /**
	     * @description 开关点击事件处理函数
	     * @param e {Event} 事件对象
	     */
	    slideClickHandle: function slideClickHandle(e) {
	      var statusArr = (0, _keys2.default)(this.statusMapper);

	      this.count = this.count < statusArr.length - 1 ? this.count + 1 : 0;
	      this.status = statusArr[this.count];
	    }
	  },

	  computed: {
	    /**
	     * @description 开关开启状态滑动槽样式
	     * @summary 开关开启状态滑动槽样式
	     * @return {string}
	     */
	    selectedSlide: function selectedSlide() {
	      var currentStatus = this.statusMapper[this.status];

	      return 'box-shadow: ' + currentStatus.slideColor + ' 0 0 0 16.667px inset;\n              border: 1px solid ' + currentStatus.slideColor + ';';
	    },


	    /**
	     * @description 开关开启状态点样式
	     * @summary 开关开启状态点样式
	     * @return {string}
	     */
	    selectedDot: function selectedDot() {
	      return 'transform: translate(' + (this.width - this.height) + 'px, 0);';
	    },


	    /**
	     * @description 组件根元素的 class
	     * @summary 标识组件
	     * @return {string}
	     */
	    classes: function classes() {
	      return 'KSAbstractSwitch KSAbstractSwitch__UID--' + this._uid;
	    },


	    /**
	     * @description 开关中心文字样式
	     * @summary 开关中心文字样式
	     * @return {string}
	     */
	    textStyles: function textStyles() {
	      var currentStatus = this.statusMapper[this.status];

	      return 'font-size: ' + currentStatus.fontSize + 'px;color: ' + currentStatus.fontColor;
	    },


	    /**
	     * @description 滑动槽的样式
	     * @summary 滑动槽的样式
	     * @return {string}
	     */
	    slideStyles: function slideStyles() {
	      var currentStatus = this.statusMapper[this.status];

	      return 'height: ' + this.height + 'px;width: ' + this.width + 'px;line-height: ' + this.height + 'px;\n              border-radius: ' + this.height + 'px;background: ' + currentStatus.slideColor;
	    },


	    /**
	     * @description 开关小点点的样式
	     * @summary switch 开关小点点的样式
	     * @return {string}
	     */
	    dotStyles: function dotStyles() {
	      var currentStatus = this.statusMapper[this.status];

	      return 'height: ' + this.height + 'px;width: ' + this.height + 'px;background: ' + currentStatus.dotColor;
	    }
	  }
	};
	// </script>
	//
	// <style lang="scss">
	//   @import "../styles/AbstractSwitch";
	// </style>

/***/ },
/* 913 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"classes\">\n  <style type=\"text/css\">\n    {{ '.KSAbstractSwitch__UID--' + _uid }} .KSAbstractSwitch__slide {\n      {{ slideStyles }}\n    }\n    {{ '.KSAbstractSwitch__UID--' + _uid }} .KSAbstractSwitch__dot {\n      {{ dotStyles }}\n    }\n    {{ '.KSAbstractSwitch__UID--' + _uid }} .KSAbstractSwitch__slide--selected {\n      {{ selectedSlide }}\n    }\n    {{ '.KSAbstractSwitch__UID--' + _uid }} .KSAbstractSwitch__text {\n      {{ textStyles }}\n    }\n    {{ '.KSAbstractSwitch__UID--' + _uid }} .KSAbstractSwitch__dot--selected {\n      {{ selectedDot }}\n    }\n  </style>\n  <div class=\"KSAbstractSwitch__slide\" @click=\"slideClickHandle\"\n       :class=\"{'KSAbstractSwitch__slide--selected': count % 2}\"\n  >\n    <span class=\"KSAbstractSwitch__text\" :class=\"{'KSAbstractSwitch__text--selected': count % 2}\">\n      <slot></slot> {{statusMapper[status].text}}\n    </span>\n    <div class=\"KSAbstractSwitch__dot\" :class=\"{'KSAbstractSwitch__dot--selected': count % 2}\"></div>\n  </div>\n</div>\n";

/***/ },
/* 914 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _main = __webpack_require__(915);

	var _main2 = _interopRequireDefault(_main);

	var _ObjectUtil = __webpack_require__(438);

	var _ObjectUtil2 = _interopRequireDefault(_ObjectUtil);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description dialog 对话框.
	 * @author pkeros
	 * @data 2017/4/20
	 * @email pkeros@vip.qq.com
	 */

	var _KsDialog = void 0,
	    instance = void 0,
	    maskInstance = void 0,
	    currentMsg = void 0,
	    _uid = 0;
	var dialogQueue = [];
	var type2TitleMapper = { success: '成功', info: '信息', warn: '警告', danger: '危险' };

	// 默认配置参数
	var defaults = {
	  showCancelBtn: false,
	  cancelBtnText: '取消',
	  confirmBtnText: '确定',
	  container: 'body',
	  mask: true,
	  title: 'Title',
	  content: 'Content...',
	  type: 'success'
	};

	var install = function install(Vue) {
	  if (install.installed) return;

	  // 实例化通知中心
	  var initInstance = function initInstance() {
	    var constructor = Vue.extend(_main2.default);

	    instance = new constructor({ el: document.createElement('div') });
	    instance.show = false;
	  };

	  // 显示对话框队列中的下一个对话框
	  var showNextDialog = function showNextDialog() {
	    if (!instance) initInstance();

	    // 是否阻塞
	    if (instance.show || currentMsg || !dialogQueue.length) return;

	    // 应用相关配置
	    currentMsg = dialogQueue.shift();
	    _ObjectUtil2.default.merge(instance, currentMsg.options);

	    // 事件处理
	    var _currentMsg = currentMsg,
	        confirmCb = _currentMsg.confirmCb,
	        cancelCb = _currentMsg.cancelCb;

	    instance.$off('confirm');
	    instance.$off('cancel');
	    instance.$on('confirm', function () {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      var reject = confirmCb && confirmCb.apply(this, args);

	      if (!reject) _KsDialog.close();
	    });
	    instance.$on('cancel', function () {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      var reject = cancelCb && cancelCb.apply(this, args);

	      if (!reject) _KsDialog.close();
	    });

	    // 创建遮罩 并 获取挂载点
	    Vue.prototype.$KsMask.show(currentMsg.options);
	    maskInstance = Vue.prototype.$KsMask.getInstance();

	    // 要等待组件 Ready 才能获取到容器
	    setTimeout(function () {
	      maskInstance.$els.container.appendChild(instance.$el);

	      // 在遮罩中创建对话框
	      Vue.nextTick(function () {
	        instance.show = true;
	      });
	    }, 0);
	  };

	  /**
	   * @description KsDialog 构造函数
	   * @param options {Object} 配置项
	   * @param confirmCb {Function} 确定回调函数
	   * @param cancelCb {Function} 取消回调函数
	   * @return {Object} 含有 then 方法的对象
	   *
	   * @constructor
	   */
	  _KsDialog = function KsDialog(options, confirmCb, cancelCb) {
	    var _config = {
	      id: _uid++,
	      options: _ObjectUtil2.default.merge({}, defaults, _KsDialog.defaults || {}, options),
	      confirmCb: confirmCb,
	      cancelCb: cancelCb
	    };

	    // 是否是直接调用
	    if (!_config.options.showCancelBtn) {
	      dialogQueue.push(_config);
	      showNextDialog();

	      return {};
	    }

	    var handler = function handler(confirmCb, cancelCb) {
	      if (confirmCb && typeof confirmCb !== 'function') throw new TypeError('KsDialog: `confirmCb` 参数必须为一个函数!');
	      if (cancelCb && typeof cancelCb !== 'function') throw new TypeError('KsDialog: `cancelCb` 参数必须为一个函数!');

	      _config.confirmCb = confirmCb;
	      _config.cancelCb = cancelCb;

	      dialogQueue.push(_config);
	      showNextDialog();
	    };

	    return { then: handler };
	  };

	  /**
	   * @description 显示一个对话框
	   * @param content {String} 显示的内容
	   * @param title {String} 标题
	   * @param type {String} 类型
	   * @param cancel {Boolean/Function} 是否显示取消按钮, cancelCallback.
	   * @param confirmCb {Function} 确定回调函数
	   * @param cancelCb {Function} 取消回调函数
	   * @return {Object} dialog 配置项
	   */
	  _KsDialog.show = function (content, title, type) {
	    var cancel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	    var confirmCb = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
	    var cancelCb = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

	    return _KsDialog({
	      content: content,
	      title: title,
	      type: type,
	      showCancelBtn: cancel
	    }, confirmCb, cancelCb);
	  };

	  /**
	   * @description 关闭 Dialog
	   */
	  _KsDialog.close = function () {
	    instance.show = false;
	    currentMsg = null;
	    Vue.prototype.$KsMask.close();

	    showNextDialog();
	  };

	  /**
	   * @description 设置默认配置项
	   * @param options 配置项
	   */
	  _KsDialog.setDefaults = function (options) {
	    _KsDialog.defaults = _ObjectUtil2.default.merge(defaults, options);
	  };

	  //
	  // 注册不同类型的对话框
	  //
	  ['success', 'info', 'warn', 'danger'].forEach(function (type) {
	    /**
	     * @description 弹出一个指定类型的对话框
	     * @param content {String} 内容
	     * @param title {String} 标题
	     * @param cancel {Boolean/Function} 是否显示取消按钮, cancelCallback.
	     * @return {Object} 含有 then 方法的对象
	     */
	    _KsDialog[type] = function (content, title) {
	      var cancel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	      var _cancelIsFunc = typeof cancel === 'function';
	      var _titleIsFunc = typeof title === 'function';

	      var _cancel = _cancelIsFunc ? false : cancel;
	      var _title = !_titleIsFunc ? title ? title : type2TitleMapper[type] : type2TitleMapper[type];
	      var _confirmCb = _cancelIsFunc ? cancel : _titleIsFunc ? title : null;

	      return _KsDialog.show(content, _title, type, _cancel, _confirmCb, null);
	    };
	  });

	  Vue.prototype.$KsDialog = _KsDialog;
	};

	// automation register components.
	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue);
	}

	exports.default = { install: install };

/***/ },
/* 915 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(916)
	__vue_script__ = __webpack_require__(918)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsDialog/src/main.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(945)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsDialog/src/main.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 916 */
[1107, 917],
/* 917 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".KsDialog__title {\n  margin: 0;\n  padding: 20px;\n  font-size: 20px;\n  word-wrap: break-word; }\n\n.KsDialog__icon {\n  width: 88px;\n  height: 88px;\n  padding: 20px;\n  border: 5px solid;\n  text-align: center;\n  line-height: 88px;\n  border-radius: 50%;\n  margin: auto; }\n  .KsDialog__icon .icon {\n    font-size: 44px;\n    line-height: inherit; }\n\n.KsDialog__article {\n  text-align: center; }\n\n.KsDialog__content {\n  color: #444;\n  font-size: 13px;\n  line-height: 22px;\n  padding: 0 20px;\n  word-wrap: break-word; }\n\n.KsDialog__operation {\n  overflow: hidden;\n  padding: 20px 0;\n  text-align: center; }\n", ""]);

	// exports


/***/ },
/* 918 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeMapper = __webpack_require__(919);

	var _typeMapper2 = _interopRequireDefault(_typeMapper);

	var _abstract = __webpack_require__(920);

	var _abstract2 = _interopRequireDefault(_abstract);

	var _KsIcon = __webpack_require__(691);

	var _KsIcon2 = _interopRequireDefault(_KsIcon);

	var _KsButton = __webpack_require__(538);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <div class="KsDialog">
	//     <abstract v-if="show">
	//       <aside class="KsDialog__icon" slot="icon" :style="{color: typeMapper[type].hue}">
	//         <ks-icon :name="typeMapper[type].icon"></ks-icon>
	//       </aside>
	//
	//       <aside class="KsDialog__article" slot="article">
	//         <h3 class="KsDialog__title" v-text="title"></h3>
	//         <p class="KsDialog__content" v-text="content"></p>
	//       </aside>
	//
	//       <aside class="KsDialog__operation" slot="operation">
	//         <ks-button type="other" mode="ghost" style="margin-right: 12px"
	//                    v-if="showCancelBtn" @click="$emit('cancel')"
	//         >
	//           {{cancelBtnText}}
	//         </ks-button>
	//         <ks-button :type="type" @click="$emit('confirm')">
	//           {{confirmBtnText}}
	//         </ks-button>
	//       </aside>
	//     </abstract>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  VERSION: '1.0.1',

	  data: function data() {
	    return {
	      typeMapper: _typeMapper2.default
	    };
	  },


	  props: {
	    show: { type: Boolean, default: false },
	    showCancelBtn: { type: Boolean, default: false },
	    cancelBtnText: { type: String, default: '取消' },
	    confirmBtnText: { type: String, default: '确定' },
	    title: { type: String, default: 'Title' },
	    content: { type: String, default: 'Content...' },
	    type: { type: String, default: 'success' }
	  },

	  components: { Abstract: _abstract2.default, KsButton: _KsButton.KsButton, KsIcon: _KsIcon2.default }

	};
	// </script>
	//
	// <style lang="scss">
	//   @import "../../foundation/SassMagic-master/src/sassMagic";
	//
	//   $icon-size: 88px;                                                       // 图标大小
	//
	//   @include b (KsDialog) {
	//
	//     // 标题部分
	//     @include e (title) {
	//       margin: 0; padding: 20px;
	//       font-size: 20px;
	//       word-wrap: break-word;
	//     }
	//
	//     // 图标部分
	//     @include e (icon) {
	//       @include size($icon-size);
	//
	//       padding: 20px; border: 5px solid;
	//       text-align: center; line-height: $icon-size;
	//       border-radius: 50%; margin: auto;
	//
	//       .icon { font-size: $icon-size / 2; line-height: inherit }
	//     }
	//
	//     // 内容块
	//     @include e (article) {
	//       text-align: center;
	//     }
	//     @include e (content) {
	//       color: #444; font-size: 13px;
	//       line-height: 22px; padding: 0 20px;
	//       word-wrap: break-word;
	//     }
	//
	//     // 操作区域
	//     @include e (operation) {
	//       overflow: hidden; padding: 20px 0;
	//       text-align: center;
	//     }
	//
	//   }
	// </style>

/***/ },
/* 919 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description 类型对应的图标, 色调映射.
	 * @author pkeros
	 * @data 2017/4/20
	 * @email pkeros@vip.qq.com
	 */

	exports.default = {
	  success: { hue: '#4CAF50', icon: 'chenggongtubiao' },
	  info: { hue: '#00BCD4', icon: 'xinxitubiao' },
	  warn: { hue: '#FF5722', icon: 'cuowutubiao' },
	  danger: { hue: '#F44336', icon: 'cuowutubiao' }
	};

/***/ },
/* 920 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(921)
	__vue_script__ = __webpack_require__(923)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsDialog/src/abstract.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(925)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsDialog/src/abstract.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 921 */
[1108, 922],
/* 922 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".KsDialogAbstract__wrapper {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate3d(-50%, -50%, 0);\n          transform: translate3d(-50%, -50%, 0);\n  margin: 6px auto;\n  width: 420px;\n  box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  background: #FFF;\n  padding-top: 30px; }\n", ""]);

	// exports


/***/ },
/* 923 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dialogBaseProps = __webpack_require__(924);

	var _dialogBaseProps2 = _interopRequireDefault(_dialogBaseProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  VERSION: '1.0.0',

	  mixins: [_dialogBaseProps2.default],

	  data: function data() {
	    return {};
	  }
	};
	// </script>
	//
	// <style lang="scss">
	//   @import "../../foundation/SassMagic-master/src/sassMagic";
	//
	//   $width: 420px;                                                          // 模态宽度
	//
	//   @include b(KsDialogAbstract) {
	//
	//     @include e (wrapper) {
	//       @include center-translate();
	//
	//       margin: 6px auto; width: $width;
	//       box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
	//       border-radius: 3px; background: #FFF; padding-top: 30px;
	//     }
	//
	//   }
	// </style>
	// <template>
	//   <div class="KsDialogAbstract">
	//     <div class="KsDialogAbstract__wrapper">
	//       <aside class="KsDialogAbstract__icon">
	//         <slot name="icon"></slot>
	//       </aside>
	//
	//       <article class="KsDialogAbstract__article">
	//         <slot name="article"></slot>
	//       </article>
	//
	//       <footer class="KsDialogAbstract__operation">
	//         <slot name="operation"></slot>
	//       </footer>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 924 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description dialog 框通用属性.
	 * @author pkeros
	 * @data 2017/4/20
	 * @email pkeros@vip.qq.com
	 */

	exports.default = {

	  props: {}

	};

/***/ },
/* 925 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KsDialogAbstract\">\n  <div class=\"KsDialogAbstract__wrapper\">\n    <aside class=\"KsDialogAbstract__icon\">\n      <slot name=\"icon\"></slot>\n    </aside>\n\n    <article class=\"KsDialogAbstract__article\">\n      <slot name=\"article\"></slot>\n    </article>\n\n    <footer class=\"KsDialogAbstract__operation\">\n      <slot name=\"operation\"></slot>\n    </footer>\n  </div>\n</div>\n";

/***/ },
/* 926 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(927)
	__vue_script__ = __webpack_require__(929)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsIcon/src/icon.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(930)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsIcon/src/icon.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 927 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(928);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./icon.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./icon.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 928 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/*@import \"../styles/icons\";\n@import \"../styles/index.css\";\n\n@import \"../../foundation/Font-Awesome-master/css/font-awesome.min.css\";*/\n", ""]);

	// exports


/***/ },
/* 929 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <i :class="classes" :style="styles"></i>
	// </template>
	//
	// <script>
	// 对应图标库对应 class 的映射
	var libraryMapper = {
	  ks: 'icon',
	  fa: 'fa'
	};

	exports.default = {
	  VERSION: '1.0.0',

	  data: function data() {
	    return {};
	  },


	  computed: {
	    classes: function classes() {
	      var prefix = libraryMapper[this.library];

	      return prefix + ' ' + prefix + '-' + this.name + ' fa-' + this.size + '\n              fa-rotate-' + this.rotate + ' fa-' + this.animate;
	    },
	    styles: function styles() {
	      return 'font-size: ' + this.size;
	    }
	  },

	  props: {
	    library: { type: String, default: 'ks' },
	    name: { type: String, required: true },
	    size: { type: String, default: '2x' },
	    rotate: { type: String, default: 'normal' },
	    animate: { type: String, default: 'stop' }
	  }
	};
	// </script>
	//
	// <style lang="scss">
	//   /*@import "../styles/icons";
	//   @import "../styles/index.css";
	//
	//   @import "../../foundation/Font-Awesome-master/css/font-awesome.min.css";*/
	// </style>

/***/ },
/* 930 */
/***/ function(module, exports) {

	module.exports = "\n<i :class=\"classes\" :style=\"styles\"></i>\n";

/***/ },
/* 931 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(932)
	__vue_script__ = __webpack_require__(934)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsButton/src/main.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(944)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsButton/src/main.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 932 */
[1107, 933],
/* 933 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".KsButton {\n  display: inline-block; }\n", ""]);

	// exports


/***/ },
/* 934 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _KsIcon = __webpack_require__(691);

	var _KsIcon2 = _interopRequireDefault(_KsIcon);

	var _abstract = __webpack_require__(935);

	var _abstract2 = _interopRequireDefault(_abstract);

	var _baseBtnProps = __webpack_require__(939);

	var _baseBtnProps2 = _interopRequireDefault(_baseBtnProps);

	var _sizeMapper = __webpack_require__(942);

	var _sizeMapper2 = _interopRequireDefault(_sizeMapper);

	var _hueMapper = __webpack_require__(943);

	var _hueMapper2 = _interopRequireDefault(_hueMapper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  VERSION: '1.0.0',

	  mixins: [_baseBtnProps2.default],

	  data: function data() {
	    return {
	      sizeMapper: _sizeMapper2.default,
	      hueMapper: _hueMapper2.default
	    };
	  },


	  props: {
	    loading: { type: Boolean, default: false },
	    type: { type: String, default: 'primary' },
	    size: { type: String, default: 'normal' }
	  },

	  computed: {
	    disable: function disable() {
	      return this.disabled || this.loading;
	    }
	  },

	  components: { Abstract: _abstract2.default, KsIcon: _KsIcon2.default }
	};
	// </script>
	//
	// <style lang="scss">
	//   @import "../../foundation/SassMagic-master/src/sassMagic";
	//
	//   @include b(KsButton) {
	//     display: inline-block;
	//   }
	// </style>
	// <template>
	//   <span class="KsButton">
	//     <abstract :form="form" :disabled="disable" :auto-focus="autoFocus"
	//               :name="name" :native-type="nativeType" :mode="mode"
	//               :width="sizeMapper[size].width"
	//               :height="sizeMapper[size].height"
	//               :font-size="sizeMapper[size].fontSize"
	//               :color-normal="hueMapper[type].normal"
	//               :color-hover="hueMapper[type].hover"
	//               :color-active="hueMapper[type].active"
	//     >
	//       <ks-icon name="circle-o-notch" animate="spin" library="fa"
	//                :size="sizeMapper[size].fontSize" v-if="loading"
	//       ></ks-icon>
	//       <slot></slot>
	//     </abstract>
	//   </span>
	// </template>
	//
	// <script>

/***/ },
/* 935 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(936)
	__vue_script__ = __webpack_require__(938)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsButton/src/abstract.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(941)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsButton/src/abstract.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 936 */
[1108, 937],
/* 937 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".KsBtnAbstract {\n  min-width: 90px;\n  outline: none;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  padding: 3px 18px;\n  display: inline-block;\n  white-space: nowrap;\n  text-align: center;\n  cursor: pointer;\n  -webkit-user-drag: none;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .KsBtnAbstract--disabled {\n    opacity: .6;\n    cursor: not-allowed; }\n", ""]);

	// exports


/***/ },
/* 938 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _baseBtnProps = __webpack_require__(939);

	var _baseBtnProps2 = _interopRequireDefault(_baseBtnProps);

	var _styles = __webpack_require__(940);

	var styles = _interopRequireWildcard(_styles);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <span :class="'KsBtnAbstract--UID-' + _uid">
	//
	//     <!-- 普通按钮 -->
	//     <template v-if="mode === 'normal'">
	//       <style type="text/css">#normalStyle{}</style>
	//     </template>
	//     <!-- 幽灵按钮 -->
	//     <template v-if="mode === 'ghost'">
	//       <style type="text/css">#ghostStyle{}</style>
	//     </template>
	//
	//     <button :type="nativeType" :autofocus="autoFocus" :name="name" v-if="truth"
	//             :disabled="disabled" :form="form" :style="style"
	//             class="KsBtnAbstract" :class="{'KsBtnAbstract--disabled': disabled}"
	//             :id="'KsBtnAbstract--UID-' + _uid"
	//     >
	//       <slot></slot>
	//     </button>
	//
	//     <a :disabled="disabled" :style="style" v-if="!truth"
	//        class="KsBtnAbstract" :class="{'KsBtnAbstract--disabled': disabled}"
	//        :id="'KsBtnAbstract--UID-' + _uid"
	//     >
	//       <slot></slot>
	//     </a>
	//   </span>
	// </template>
	//
	// <script>
	exports.default = {
	  VERSION: '1.0.0',

	  mixins: [_baseBtnProps2.default],

	  data: function data() {
	    return {};
	  },


	  props: {
	    width: { type: String, require: true },
	    height: { type: String, require: true },
	    fontSize: { type: String, default: '14px' },
	    truth: { type: Boolean, default: true },
	    colorNormal: { type: String, require: true },
	    colorHover: { type: String, require: true },
	    colorActive: { type: String, require: true }
	  },

	  init: function init() {
	    // TODO 在编译之前插入样式，webpack -p 的时候会压缩样式，将差值表达式取消
	    this.$options.template = this.$options.template.replace('#normalStyle{}', styles.normal).replace('#ghostStyle{}', styles.ghost);
	  },


	  computed: {
	    style: function style() {
	      return 'min-width: ' + this.width + '; height: ' + this.height + ';\n   font-size: ' + this.fontSize + '; line-height: ' + (!this.truth && this.height);
	    }
	  }

	};
	// </script>
	//
	// <style lang="scss">
	//   @import "../../foundation/SassMagic-master/src/sassMagic";
	//
	//   @include b (KsBtnAbstract) {
	//     min-width: 90px; outline: none;
	//     border: 1px solid transparent; border-radius: 3px;
	//     padding: 3px 18px; display: inline-block;
	//     white-space: nowrap; text-align: center;
	//     cursor: pointer; -webkit-user-drag: none;
	//     touch-action: manipulation; user-select: none;
	//
	//     // 禁用状态
	//     @include m (disabled) {
	//       opacity: .6; cursor: not-allowed;
	//     }
	//   }
	// </style>

/***/ },
/* 939 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description 按钮基本属性.
	 * @author pkeros
	 * @data 2017/4/6
	 * @email pkeros@vip.qq.com
	 */

	exports.default = {

	  props: {
	    mode: { type: String, default: 'normal' },
	    form: { type: String, default: '' },
	    disabled: { type: Boolean, default: false },
	    autoFocus: { type: Boolean, default: false },
	    name: { type: String, default: 'KSButton' },
	    nativeType: { type: String, default: 'button' }
	  }

	};

/***/ },
/* 940 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description 按钮样式.
	 * @author pkeros
	 * @data 2017/4/26
	 * @email pkeros@vip.qq.com
	 */

	// 普通按钮样式
	var normal = exports.normal = "\n  /* \u9ED8\u8BA4\u72B6\u6001 */\n  .KsBtnAbstract--UID-{{ _uid }} .KsBtnAbstract {\n    color: white;\n    background: {{ colorNormal }};\n  }\n  /* hover \u72B6\u6001 */\n  .KsBtnAbstract--UID-{{ _uid }} .KsBtnAbstract:hover {\n    background: {{ colorHover }};\n  }\n  .KsBtnAbstract--UID-{{ _uid }} .KsBtnAbstract[disabled]:hover {\n    background: {{ colorNormal }};\n  }\n  /* active \u72B6\u6001 */\n  .KsBtnAbstract--UID-{{ _uid }} .KsBtnAbstract:active {\n    background: {{ colorActive }};\n  }\n  .KsBtnAbstract--UID-{{ _uid }} .KsBtnAbstract[disabled]:active {\n    background: {{ colorNormal }};\n  }\n";

	// 幽灵按钮样式
	var ghost = exports.ghost = "\n  /* \u9ED8\u8BA4\u72B6\u6001 */\n  .KsBtnAbstract--UID-{{ _uid }} .KsBtnAbstract {\n    color: {{ colorNormal }};\n    background: white;\n    border: 1px solid {{ colorNormal }};\n  }\n  /* hover \u72B6\u6001 */\n  .KsBtnAbstract--UID-{{ _uid }} .KsBtnAbstract:hover {\n    color: {{ colorHover }};\n    border: 1px solid {{ colorHover }};\n  }\n  .KsBtnAbstract--UID-{{ _uid }} .KsBtnAbstract[disabled]:hover {\n    color: {{ colorNormal }};\n    border: 1px solid {{ colorNormal }};\n  }\n  /* active \u72B6\u6001 */\n  .KsBtnAbstract--UID-{{ _uid }} .KsBtnAbstract:active {\n    color: {{ colorActive }};\n    border: 1px solid {{ colorActive }};\n  }\n  .KsBtnAbstract--UID-{{ _uid }} .KsBtnAbstract[disabled]:active {\n    color: {{ colorNormal }};\n    border: 1px solid {{ colorNormal }};\n  }\n";

/***/ },
/* 941 */
/***/ function(module, exports) {

	module.exports = "\n<span :class=\"'KsBtnAbstract--UID-' + _uid\">\n\n  <!-- 普通按钮 -->\n  <template v-if=\"mode === 'normal'\">\n    <style type=\"text/css\">#normalStyle{}</style>\n  </template>\n  <!-- 幽灵按钮 -->\n  <template v-if=\"mode === 'ghost'\">\n    <style type=\"text/css\">#ghostStyle{}</style>\n  </template>\n\n  <button :type=\"nativeType\" :autofocus=\"autoFocus\" :name=\"name\" v-if=\"truth\"\n          :disabled=\"disabled\" :form=\"form\" :style=\"style\"\n          class=\"KsBtnAbstract\" :class=\"{'KsBtnAbstract--disabled': disabled}\"\n          :id=\"'KsBtnAbstract--UID-' + _uid\"\n  >\n    <slot></slot>\n  </button>\n\n  <a :disabled=\"disabled\" :style=\"style\" v-if=\"!truth\"\n     class=\"KsBtnAbstract\" :class=\"{'KsBtnAbstract--disabled': disabled}\"\n     :id=\"'KsBtnAbstract--UID-' + _uid\"\n  >\n    <slot></slot>\n  </a>\n</span>\n";

/***/ },
/* 942 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description 定义了几种常用的按钮尺寸.
	 * @author pkeros
	 * @data 2017/4/14
	 * @email pkeros@vip.qq.com
	 */

	exports.default = {
	  small: { width: '48px', height: '24px', fontSize: '12px' },
	  normal: { width: '90px', height: '36px', fontSize: '13px' },
	  middle: { width: '120px', height: '42px', fontSize: '16px' },
	  large: { width: '160px', height: '54px', fontSize: '18px' }
	};

/***/ },
/* 943 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description 定义了几种按钮主题。
	 * @author pkeros
	 * @data 2017/4/14
	 * @email pkeros@vip.qq.com
	 */

	exports.default = {
	  primary: { normal: '#2196F3', hover: '#42A5F5', active: '#1E88E5' },
	  success: { normal: '#4CAF50', hover: '#66BB6A', active: '#43A047' },
	  info: { normal: '#00BCD4', hover: '#26C6DA', active: '#00ACC1' },
	  warn: { normal: '#FF5722', hover: '#FF7043', active: '#F4511E' },
	  danger: { normal: '#F44336', hover: '#EF5350', active: '#E53935' },
	  other: { normal: '#999999', hover: '#C8C8C8', active: '#777777' }
	};

/***/ },
/* 944 */
/***/ function(module, exports) {

	module.exports = "\n<span class=\"KsButton\">\n  <abstract :form=\"form\" :disabled=\"disable\" :auto-focus=\"autoFocus\"\n            :name=\"name\" :native-type=\"nativeType\" :mode=\"mode\"\n            :width=\"sizeMapper[size].width\"\n            :height=\"sizeMapper[size].height\"\n            :font-size=\"sizeMapper[size].fontSize\"\n            :color-normal=\"hueMapper[type].normal\"\n            :color-hover=\"hueMapper[type].hover\"\n            :color-active=\"hueMapper[type].active\"\n  >\n    <ks-icon name=\"circle-o-notch\" animate=\"spin\" library=\"fa\"\n             :size=\"sizeMapper[size].fontSize\" v-if=\"loading\"\n    ></ks-icon>\n    <slot></slot>\n  </abstract>\n</span>\n";

/***/ },
/* 945 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KsDialog\">\n  <abstract v-if=\"show\">\n    <aside class=\"KsDialog__icon\" slot=\"icon\" :style=\"{color: typeMapper[type].hue}\">\n      <ks-icon :name=\"typeMapper[type].icon\"></ks-icon>\n    </aside>\n\n    <aside class=\"KsDialog__article\" slot=\"article\">\n      <h3 class=\"KsDialog__title\" v-text=\"title\"></h3>\n      <p class=\"KsDialog__content\" v-text=\"content\"></p>\n    </aside>\n\n    <aside class=\"KsDialog__operation\" slot=\"operation\">\n      <ks-button type=\"other\" mode=\"ghost\" style=\"margin-right: 12px\"\n                 v-if=\"showCancelBtn\" @click=\"$emit('cancel')\"\n      >\n        {{cancelBtnText}}\n      </ks-button>\n      <ks-button :type=\"type\" @click=\"$emit('confirm')\">\n        {{confirmBtnText}}\n      </ks-button>\n    </aside>\n  </abstract>\n</div>\n";

/***/ },
/* 946 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(7);

	var _vue2 = _interopRequireDefault(_vue);

	var _main = __webpack_require__(947);

	var _main2 = _interopRequireDefault(_main);

	var _KsMask = __webpack_require__(513);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var pueMapper = ['primary', 'success', 'info', 'warn', 'danger', 'normal']; /**
	                                                                             * @description modal 对话框
	                                                                             * @summary
	                                                                             *  可以进行全局调用的哦, 棒棒哒
	                                                                             * @author: pkeros.
	                                                                             * @date: 2016/10/19.
	                                                                             */

	var defaults = {
	  showConfirmBtn: true,
	  showCancelBtn: true,
	  showCloseBtn: true,
	  cancelBtnText: '取消',
	  confirmBtnText: '确定',
	  mask: true,
	  title: 'Title',
	  content: 'Content...',
	  type: 'normal'
	};

	var KsModalConstructor = _vue2.default.extend(_main2.default);

	var currentMsg = void 0,
	    instance = void 0,
	    _KsModal = void 0,
	    id = 0;
	var modalQueue = [];

	/**
	 * @description 合并选项
	 * @param target 需要合并的目标
	 * @return {*} 目标
	 */
	var merge = function merge(target) {
	  for (var i = 1, j = arguments.length; i < j; i++) {
	    var source = arguments[i];
	    for (var prop in source) {
	      if (source.hasOwnProperty(prop)) {
	        var value = source[prop];
	        if (value !== undefined) {
	          target[prop] = value;
	        }
	      }
	    }
	  }

	  return target;
	};

	var install = function install(Vue) {
	  if (install.installed) return;

	  /**
	   * @description 初始化 Modal 实例
	   */
	  var initInstance = function initInstance() {
	    // 实例化 modal
	    instance = new KsModalConstructor({
	      el: document.createElement('div')
	    });
	    instance.show = false;

	    // 监听关闭动作
	    instance.$on('close', _KsModal.close);
	  };

	  /**
	   * @description 显示队列中的下一个信息
	   */
	  var showNextModal = function showNextModal() {
	    if (!instance) {
	      initInstance();
	    }

	    // 检测是否阻塞
	    if (instance.show || currentMsg || !modalQueue.length) {
	      return;
	    }

	    // 获取当前信息
	    currentMsg = modalQueue.shift();

	    // 合并配置项
	    var options = currentMsg.options;
	    for (var prop in options) {
	      if (instance.hasOwnProperty(prop)) {
	        instance[prop] = options[prop];
	      }
	    }

	    // 绑定事件
	    var _currentMsg = currentMsg,
	        confirmCb = _currentMsg.confirmCb,
	        cancelCb = _currentMsg.cancelCb;

	    instance.$off('confirm');
	    instance.$off('cancel');
	    instance.$on('confirm', function () {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      confirmCb && confirmCb.apply(null, args);
	      _KsModal.close();
	    });
	    instance.$on('cancel', function () {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      cancelCb && cancelCb.apply(null, args);
	      _KsModal.close();
	    });

	    // 实例化 mask
	    if (typeof currentMsg.maskInstance !== 'undefined') {
	      instance['maskConfig'] = currentMsg.maskInstance(cancelCb);
	    }

	    document.body.appendChild(instance.$el);
	    Vue.nextTick(function () {
	      return instance.show = true;
	    });
	  };

	  /**
	   * @description 构造函数
	   * @param options {Object} 配置项
	   * @constructor
	   */
	  _KsModal = function KsModal(options) {
	    // 配置 modal 并加入显示队列
	    return function (confirmCb, cancelCb) {
	      // 参数正确性校验
	      if (typeof confirmCb !== 'undefined' && typeof confirmCb !== 'function' || typeof cancelCb !== 'undefined' && typeof cancelCb !== 'function') {
	        throw new TypeError('KsModal: Parameter is not correct, member not a function!');
	      }

	      var config = {
	        id: id++,
	        options: merge({}, defaults, _KsModal.defaults || {}, options),
	        confirmCb: confirmCb,
	        cancelCb: cancelCb
	      };

	      // 创建 mask 配置
	      options.mask && (config['maskInstance'] = (0, _KsMask.KsMask)(options));

	      modalQueue.push(config);
	      showNextModal();
	      return config;
	    };
	  };

	  /**
	   * @description 关闭 modal
	   */
	  _KsModal.close = function () {
	    instance.show = false;
	    currentMsg = null;

	    showNextModal();
	  };

	  /**
	   * @description 设置默认配置项
	   * @param defaults 默认配置项
	   */
	  _KsModal.setDefaults = function (defaults) {
	    _KsModal.defaults = defaults;
	  };

	  /**
	   * @description 警告类型模态
	   * @summary
	   *  这是一种没有取消和确定的的模态类型, 我们称它为警告类型
	   *  一般警告类型的运用场景就是弹出一些信息展示给用户, 没有相关后续操作.
	   *  @param content {String} 显示的内容
	   *  @param title {String} 标题
	   *  @param hue {String} 色调
	   *  @param options {Object} 附加配置项
	   */
	  _KsModal.alert = function (content, title, hue, options) {
	    return _KsModal(merge({
	      showConfirmBtn: false,
	      showCancelBtn: false,
	      showCloseBtn: true,
	      content: content,
	      title: title,
	      type: hue
	    }, options));
	  };

	  /**
	   * @description confirm 类型模态
	   * @summary
	   *  这是一种只有确定和取消的模态, 用户必须做出选择.
	   * @param content {String} 显示的内容
	   * @param title {String} 标题
	   * @param hue {String} 色调
	   * @param options {Object} 附加配置项
	   */
	  _KsModal.confirm = function (content, title, hue, options) {
	    return _KsModal(merge({
	      showConfirmBtn: true,
	      showCancelBtn: true,
	      showCloseBtn: false,
	      content: content,
	      title: title,
	      type: hue
	    }, options));
	  };

	  /**
	   * @description prompt 类型模态
	   * @summary
	   *  提示类型也是默认的类型, 拥有确定取消并且有关闭按钮.
	   * @param content {String} 显示的内容
	   * @param title {String} 标题
	   * @param hue {String} 色调
	   * @param options {Object} 附加配置项
	   */
	  _KsModal.prompt = function (content, title, hue, options) {
	    return _KsModal(merge({
	      showConfirmBtn: true,
	      showCancelBtn: true,
	      showCloseBtn: true,
	      content: content,
	      title: title,
	      type: hue
	    }, options));
	  };

	  // 注册不同色调的函数
	  pueMapper.forEach(function (hue) {
	    _KsModal[hue] = function (content, title) {
	      return _KsModal.prompt(content, title, hue, {});
	    };
	  });

	  Vue.prototype.$KsModal = _KsModal;
	  /**
	   * return KsModal
	   *   供外部调用
	   *   service.KsModal = KsModal
	   */
	};

	// automation register components.
	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue);
	}

	exports.default = { install: install };

/***/ },
/* 947 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(948)
	__vue_script__ = __webpack_require__(950)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsModal/src/main.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(952)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsModal/src/main.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 948 */
[1107, 949],
/* 949 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".KSModal__content, .KSModal__footer {\n  padding: 20px; }\n\n.KSModal {\n  margin: 6px auto;\n  width: 504px;\n  background: #FFF;\n  border-radius: 3px;\n  box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);\n  position: relative;\n  z-index: 19941026;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate3d(-50%, -50%, 0);\n          transform: translate3d(-50%, -50%, 0); }\n  .KSModal__header {\n    padding: 0 20px; }\n    .KSModal__header .innerWrap {\n      position: relative; }\n  .KSModal__title {\n    margin: 0;\n    padding: 20px 40px 20px 0;\n    font-size: 24px; }\n  .KSModal__close {\n    width: 32px;\n    height: 32px;\n    position: absolute;\n    right: 0;\n    top: 50%;\n    margin-top: -16px;\n    border-radius: 50%;\n    cursor: pointer; }\n    .KSModal__close .icon {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      margin: auto;\n      fill: currentColor; }\n    .KSModal__close:hover {\n      background: #F13F3B;\n      color: #FFF; }\n    .KSModal__close:active {\n      background: #E33439;\n      color: #FFF; }\n  .KSModal__separation {\n    height: 1px;\n    background: #E0E0E0; }\n  .KSModal__content {\n    color: #444;\n    font-size: 13px;\n    line-height: 22px; }\n  .KSModal__footer {\n    overflow: hidden; }\n  .KSModal__btnWarp {\n    float: right; }\n", ""]);

	// exports


/***/ },
/* 950 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _KsButton = __webpack_require__(538);

	var _modalProps = __webpack_require__(951);

	var _modalProps2 = _interopRequireDefault(_modalProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 类型对色调映射
	// <template>
	//   <div class="KSModal__wrapper">
	//     <div class="KSModal" v-if="show" :style="modalWidth">
	//       <header class="KSModal__header" :style="modalHeaderStyle">
	//         <div class="innerWrap">
	//           <h3 class="KSModal__title">
	//             {{ title }} <slot name="title"></slot>
	//           </h3>
	//
	//           <i class="KSModal__close" v-if="showCloseBtn"
	//              @click="$emit('close') && (show = false)">
	//             <!-- close 图标 -->
	//             <svg class="icon" width="24" height="24" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
	//               <g transform="scale(0.03125, 0.03125)">
	//                 <path
	//                   d="M557.312 513.248l265.28-263.904c12.544-12.48 12.608-32.704 0.128-45.248-12.512-12.576-32.704-12.608-45.248-0.128l-265.344 263.936-263.04-263.84C236.64 191.584 216.384 191.52 203.84 204 191.328 216.48 191.296 236.736 203.776 249.28l262.976 263.776L201.6 776.8c-12.544 12.48-12.608 32.704-0.128 45.248 6.24 6.272 14.464 9.44 22.688 9.44 8.16 0 16.32-3.104 22.56-9.312l265.216-263.808 265.44 266.24c6.24 6.272 14.432 9.408 22.656 9.408 8.192 0 16.352-3.136 22.592-9.344 12.512-12.48 12.544-32.704 0.064-45.248L557.312 513.248z">
	//                 </path>
	//               </g>
	//             </svg>
	//           </i>
	//
	//           <!-- 神奇的分隔线 -->
	//           <div class="KSModal__separation" v-if="type === 'normal'"></div>
	//         </div>
	//       </header>
	//       <article class="KSModal__content">
	//         {{ content }} <slot name="content"></slot>
	//       </article>
	//       <footer class="KSModal__footer" :style="type !== 'normal' && 'padding-top: 0'">
	//         <aside class="KSModal__btnWarp">
	//           <ks-button mode="ghost" type="other" @click="$emit('cancel')"
	//                      v-if="showCancelBtn" style="margin-right: 10px"
	//           >{{ cancelBtnText }}</ks-button>
	//           <ks-button :type="type === 'normal' ? 'primary' : type" @click="$emit('confirm')"
	//                      v-if="showConfirmBtn"
	//           >{{ confirmBtnText }}</ks-button>
	//         </aside>
	//       </footer>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>
	var colorMapper = {
	  primary: { hue: '#2196F3', font: '#FFF' },
	  success: { hue: '#4CAF50', font: '#FFF' },
	  info: { hue: '#00BCD4', font: '#FFF' },
	  warn: { hue: '#FF5722', font: '#FFF' },
	  danger: { hue: '#F44336', font: '#FFF' },
	  normal: { hue: '#FFF', font: '#444' }
	};

	exports.default = {
	  name: 'KsModal',

	  data: function data() {
	    return {};
	  },


	  mixins: [_modalProps2.default],

	  computed: {
	    /**
	     * @description 当前模态的主色调
	     * @return {*} color
	     */
	    hue: function hue() {
	      return colorMapper[this.type];
	    },


	    /**
	     * @description 模态的宽度样式
	     * @returns {string}
	     */
	    modalWidth: function modalWidth() {
	      return 'width: ' + this.width + 'px';
	    },


	    /**
	     * @description 模态的 header 部分样式
	     * @returns {string}
	     */
	    modalHeaderStyle: function modalHeaderStyle() {
	      return 'background: ' + this.hue.hue + ';color: ' + this.hue.font;
	    }
	  },

	  watch: {
	    show: function show(_show) {
	      var maskConfig = this.maskConfig;

	      if (!_show && maskConfig) {
	        KsMask.close();
	      }
	    }
	  },

	  components: { KsButton: _KsButton.KsButton }
	};
	// </script>
	//
	// <style lang="scss">
	//   @import "../styles/modal";
	// </style>

/***/ },
/* 951 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description modal 的复合
	 * @author: pkeros.
	 * @date: 2016/10/18.
	 */

	exports.default = {
	  props: {
	    showConfirmBtn: { type: Boolean, default: true },
	    showCancelBtn: { type: Boolean, default: true },
	    showCloseBtn: { type: Boolean, default: true },
	    cancelBtnText: { type: String, default: '取消' },
	    confirmBtnText: { type: String, default: '确定' },
	    title: { type: String, default: '' },
	    content: { type: String, default: '' },
	    type: { type: String, default: 'normal' },
	    width: { type: String, default: '504' },
	    mask: { type: Boolean, default: true },
	    show: { type: Boolean, default: true, towWay: true }
	  }
	};

/***/ },
/* 952 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KSModal__wrapper\">\n  <div class=\"KSModal\" v-if=\"show\" :style=\"modalWidth\">\n    <header class=\"KSModal__header\" :style=\"modalHeaderStyle\">\n      <div class=\"innerWrap\">\n        <h3 class=\"KSModal__title\">\n          {{ title }} <slot name=\"title\"></slot>\n        </h3>\n\n        <i class=\"KSModal__close\" v-if=\"showCloseBtn\"\n           @click=\"$emit('close') && (show = false)\">\n          <!-- close 图标 -->\n          <svg class=\"icon\" width=\"24\" height=\"24\" viewBox=\"0 0 32 32\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n            <g transform=\"scale(0.03125, 0.03125)\">\n              <path\n                d=\"M557.312 513.248l265.28-263.904c12.544-12.48 12.608-32.704 0.128-45.248-12.512-12.576-32.704-12.608-45.248-0.128l-265.344 263.936-263.04-263.84C236.64 191.584 216.384 191.52 203.84 204 191.328 216.48 191.296 236.736 203.776 249.28l262.976 263.776L201.6 776.8c-12.544 12.48-12.608 32.704-0.128 45.248 6.24 6.272 14.464 9.44 22.688 9.44 8.16 0 16.32-3.104 22.56-9.312l265.216-263.808 265.44 266.24c6.24 6.272 14.432 9.408 22.656 9.408 8.192 0 16.352-3.136 22.592-9.344 12.512-12.48 12.544-32.704 0.064-45.248L557.312 513.248z\">\n              </path>\n            </g>\n          </svg>\n        </i>\n\n        <!-- 神奇的分隔线 -->\n        <div class=\"KSModal__separation\" v-if=\"type === 'normal'\"></div>\n      </div>\n    </header>\n    <article class=\"KSModal__content\">\n      {{ content }} <slot name=\"content\"></slot>\n    </article>\n    <footer class=\"KSModal__footer\" :style=\"type !== 'normal' && 'padding-top: 0'\">\n      <aside class=\"KSModal__btnWarp\">\n        <ks-button mode=\"ghost\" type=\"other\" @click=\"$emit('cancel')\"\n                   v-if=\"showCancelBtn\" style=\"margin-right: 10px\"\n        >{{ cancelBtnText }}</ks-button>\n        <ks-button :type=\"type === 'normal' ? 'primary' : type\" @click=\"$emit('confirm')\"\n                   v-if=\"showConfirmBtn\"\n        >{{ confirmBtnText }}</ks-button>\n      </aside>\n    </footer>\n  </div>\n</div>\n";

/***/ },
/* 953 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _main = __webpack_require__(954);

	var _main2 = _interopRequireDefault(_main);

	var _ObjectUtil = __webpack_require__(438);

	var _ObjectUtil2 = _interopRequireDefault(_ObjectUtil);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description mask 遮罩
	 * @author: pkeros.
	 * @date: 2016/10/21.
	 */

	var _KsMask = void 0,
	    instance = void 0,
	    currentMask = void 0,
	    _uid = 0;
	var maskQueue = [];

	var defaults = {
	  backgroundColor: 'rgba(0, 0, 0, .3)'
	};

	var install = function install(Vue) {
	  if (install.installed) return;

	  // 实例化通知中心
	  var initInstance = function initInstance() {
	    var constructor = Vue.extend(_main2.default);

	    instance = new constructor({ el: document.createElement('div') });
	    instance.show = false;
	  };

	  // 显示对话框队列中的下一个对话框
	  var showNextMask = function showNextMask() {
	    if (!instance) initInstance();

	    // 是否阻塞
	    if (instance.show || currentMask || !maskQueue.length) return;

	    // 应用相关配置
	    currentMask = maskQueue.shift();
	    _ObjectUtil2.default.merge(instance, currentMask.options);

	    document.body.appendChild(instance.$el);
	    Vue.nextTick(function () {
	      return instance.show = true;
	    });
	  };

	  /**
	   * @description 构造函数
	   * @param options {Object} 配置项
	   * @return {Object} mask 配置项
	   *
	   * @constructor
	   */
	  _KsMask = function KsMask(options) {
	    var _config = {
	      id: _uid++,
	      options: _ObjectUtil2.default.merge({}, defaults, _KsMask.defaults || {}, options)
	    };

	    maskQueue.push(_config);
	    showNextMask();
	    return _config;
	  };

	  /**
	   * @description 显示一个对话框
	   * @param options {Object} 配置项
	   * @return {Object} mask 配置项
	   */
	  _KsMask.show = function (options) {
	    return _KsMask(options);
	  };

	  /**
	   * @description 获取实例
	   * @return {Object} mask 实例
	   */
	  _KsMask.getInstance = function () {
	    return instance;
	  };

	  /**
	   * @description 关闭 mask
	   */
	  _KsMask.close = function () {
	    instance.show = false;
	    currentMask = null;

	    showNextMask();
	  };

	  Vue.prototype.$KsMask = _KsMask;
	};

	// automation register components.
	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue);
	}

	exports.default = { install: install };

/***/ },
/* 954 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(955)
	__vue_script__ = __webpack_require__(957)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsMask/src/main.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(958)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsMask/src/main.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 955 */
[1107, 956],
/* 956 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".KsMask__wrapper {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0; }\n\n.KsMask__container {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0; }\n", ""]);

	// exports


/***/ },
/* 957 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="KsMask">
	//     <div class="KsMask__wrapper" :style="maskStyle" v-if="show">
	//       <div class="KsMask__container" :style="containerStyle"
	//            v-el:container @click="$emit('spaceClick')"
	//       >
	//         <slot></slot>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  VERSION: '1.0.0',

	  data: function data() {
	    return {
	      zIndex: 19940921
	    };
	  },


	  props: {
	    fillMode: { type: String, default: 'full' },
	    show: { type: Boolean, default: false },
	    containerStyle: { type: String, default: '' },
	    backgroundColor: { type: String, default: 'rgba(0, 0, 0, .3)' }
	  },

	  computed: {
	    /**
	     * @description mask sytles.
	     */
	    maskStyle: function maskStyle() {
	      return 'background: ' + this.backgroundColor + ';\n      z-index: ' + ++this.zIndex + ';\n      position: ' + (this.fillMode === 'full' ? 'fixed' : 'absolute');
	    }
	  }
	};
	// </script>
	//
	// <style lang="scss">
	//   @import "../../foundation/SassMagic-master/src/sassMagic";
	//
	//   @include b (KsMask) {
	//
	//     @include e (wrapper) {
	//       top: 0; right: 0; bottom: 0; left: 0;
	//     }
	//
	//     @include e (container) {
	//       position: absolute;
	//       top: 0; right: 0; bottom: 0; left: 0;
	//     }
	//   }
	// </style>

/***/ },
/* 958 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KsMask\">\n  <div class=\"KsMask__wrapper\" :style=\"maskStyle\" v-if=\"show\">\n    <div class=\"KsMask__container\" :style=\"containerStyle\"\n         v-el:container @click=\"$emit('spaceClick')\"\n    >\n      <slot></slot>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 959 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(960)
	__vue_script__ = __webpack_require__(962)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsModal/src/center.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(963)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsModal/src/center.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 960 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(961);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./center.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./center.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 961 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".ks-modal-center .KSModal {\n  position: static;\n  top: inherit;\n  left: inherit;\n  -webkit-transform: inherit;\n          transform: inherit; }\n\n.ks-modal-center .KSMask__container {\n  overflow: scroll;\n  overflow-x: hidden; }\n", ""]);

	// exports


/***/ },
/* 962 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _KsMask = __webpack_require__(513);

	var _main = __webpack_require__(947);

	var _main2 = _interopRequireDefault(_main);

	var _modalProps = __webpack_require__(951);

	var _modalProps2 = _interopRequireDefault(_modalProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {};
	  },


	  mixins: [_modalProps2.default],

	  components: { KsMaskEntity: _KsMask.KsMaskEntity, KsModalEntity: _main2.default }
	};
	// </script>
	//
	// <style lang="scss">
	//   .ks-modal-center {
	//     .KSModal {
	//       position: static;
	//       top: inherit;
	//       left: inherit;
	//       transform: inherit;
	//     }
	//
	//     .KSMask__container {
	//       overflow: scroll;
	//       overflow-x: hidden;
	//     }
	//   }
	// </style>
	// <template>
	//   <div class="ks-modal-center" v-if="show">
	//     <ks-mask-entity :fill-mode="'full'"
	//                     :show.sync="show"
	//     >
	//       <ks-modal-entity
	//         class="ks-modal-center"
	//         :show-confirm-btn="showConfirmBtn"
	//         :show-cancel-btn="showCancelBtn"
	//         :show-close-btn="showCloseBtn"
	//         :confirm-btn-text="confirmBtnText"
	//         :title="title"
	//         :content="content"
	//         :type="type"
	//         :width="width"
	//         :mask="mask"
	//         :show.sync="show"
	//         @cancel="$emit('cancel')"
	//         @confirm="$emit('confirm')"
	//         @close="$emit('close')"
	//       >
	//         <slot name="content" slot="content"></slot>
	//       </ks-modal-entity>
	//     </ks-mask-entity>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 963 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ks-modal-center\" v-if=\"show\">\n  <ks-mask-entity :fill-mode=\"'full'\"\n                  :show.sync=\"show\"\n  >\n    <ks-modal-entity\n      class=\"ks-modal-center\"\n      :show-confirm-btn=\"showConfirmBtn\"\n      :show-cancel-btn=\"showCancelBtn\"\n      :show-close-btn=\"showCloseBtn\"\n      :confirm-btn-text=\"confirmBtnText\"\n      :title=\"title\"\n      :content=\"content\"\n      :type=\"type\"\n      :width=\"width\"\n      :mask=\"mask\"\n      :show.sync=\"show\"\n      @cancel=\"$emit('cancel')\"\n      @confirm=\"$emit('confirm')\"\n      @close=\"$emit('close')\"\n    >\n      <slot name=\"content\" slot=\"content\"></slot>\n    </ks-modal-entity>\n  </ks-mask-entity>\n</div>\n";

/***/ },
/* 964 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(965)
	__vue_script__ = __webpack_require__(967)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsCheckbox/src/NrCheckbox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(968)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsCheckbox/src/NrCheckbox.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 965 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(966);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./NrCheckbox.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./NrCheckbox.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 966 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".KSNRCheckbox {\n  position: relative;\n  display: inline-block;\n  padding: 2px 3px;\n  vertical-align: middle;\n  font-size: 14px; }\n  .KSNRCheckbox-container.disable {\n    opacity: .6; }\n    .KSNRCheckbox-container.disable * {\n      cursor: not-allowed; }\n  .KSNRCheckbox-container-entity {\n    display: none; }\n    .KSNRCheckbox-container-entity:checked + .KSNRCheckbox-container-skin > .KSNRCheckbox-container-skin-cube {\n      opacity: 1; }\n  .KSNRCheckbox-container-text {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    cursor: pointer; }\n  .KSNRCheckbox-container-skin {\n    display: inline-block;\n    border: 1px solid #D0D0D5;\n    border-radius: 3px;\n    width: 18px;\n    height: 18px;\n    text-align: center;\n    line-height: 18px;\n    cursor: pointer; }\n    .KSNRCheckbox-container-skin-cube {\n      display: inline-block;\n      height: 10px;\n      width: 10px;\n      border-radius: 3px;\n      background-color: #00A5E0;\n      opacity: 0;\n      -webkit-transition: opacity .3s;\n      transition: opacity .3s; }\n", ""]);

	// exports


/***/ },
/* 967 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="KSNRCheckbox" cid="KSNRCheckbox">
	//     <div class="_container" :class="{disable: disable}">
	//       <input type="checkbox" class="_entity"
	//              v-model="checked" @change="checkboxChangeHandle"
	//              :disabled="disable && 'disabled'" :id="`KSNRCheckbox--${_uid}`" />
	//       <label class="_skin" :for="`KSNRCheckbox--${_uid}`">
	//         <em class="_cube" :style="{background: color}"></em>
	//       </label>
	//       <label class="_text" :for="`KSNRCheckbox--${_uid}`" @click="$emit('label-click')">
	//         <slot>LABEL</slot>
	//       </label>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'KsNormalCheckbox',

	  props: {
	    name: { type: String, default: 'KsNormalCheckbox' },
	    color: { type: String, default: '#00A5E0' },
	    checked: { type: Boolean, twoWay: true },
	    disable: { type: Boolean, default: false }
	  },

	  events: {
	    /**
	     * @description modelChange 事件响应
	     * @summary 负责接受 Group 组件的 change 事件, 改变选中状态
	     */
	    modelChange: function modelChange(model) {
	      this.checked = model.indexOf(this.name) > -1;
	    }
	  },

	  methods: {
	    /**
	     * @description checkbox 改变处理函数
	     */
	    checkboxChangeHandle: function checkboxChangeHandle() {
	      this.$dispatch('CChange', this.checked, this.name);
	      this.$emit('change', this.checked, this.name);
	    }
	  }
	};
	// </script>
	//
	// <style lang="scss">
	//   @import '../styles/NrCheckbox';
	// </style>

/***/ },
/* 968 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KSNRCheckbox\" cid=\"KSNRCheckbox\">\n  <div class=\"KSNRCheckbox-container\" :class=\"{disable: disable}\">\n    <input type=\"checkbox\" class=\"KSNRCheckbox-container-entity\"\n           v-model=\"checked\" @change=\"checkboxChangeHandle\"\n           :disabled=\"disable && 'disabled'\" :id=\"`KSNRCheckbox--${_uid}`\" />\n    <label class=\"KSNRCheckbox-container-skin\" :for=\"`KSNRCheckbox--${_uid}`\">\n      <em class=\"KSNRCheckbox-container-skin-cube\" :style=\"{background: color}\"></em>\n    </label>\n    <label class=\"KSNRCheckbox-container-text\" :for=\"`KSNRCheckbox--${_uid}`\" @click=\"$emit('label-click')\">\n      <slot>LABEL</slot>\n    </label>\n  </div>\n</div>\n";

/***/ },
/* 969 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(970)
	__vue_script__ = __webpack_require__(972)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsCheckbox/src/CheckboxGroup.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(973)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsCheckbox/src/CheckboxGroup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 970 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(971);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./CheckboxGroup.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./CheckboxGroup.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 971 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".ks-checkbox-group {\n  font-size: 0; }\n", ""]);

	// exports


/***/ },
/* 972 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="ks-checkbox-group">
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'KsCheckboxGroup',

	  props: {
	    vModel: { type: Array, towWay: true }
	  },

	  events: {
	    /**
	     * @description change 事件处理函数
	     * @param value {Boolean} 事件传递的 value
	     * @param name {String} 组件的名称
	     * @summary 负责处理子组件产生的 change 事件
	     */
	    CChange: function CChange(value, name) {
	      var model = this.vModel;
	      var pos = model.indexOf(name);

	      if (pos > -1 && !value) {
	        model.splice(pos, 1);
	      } else if (pos === -1 && value) {
	        model.push(name);
	      }

	      // TODO: 柱哥说了数据的流向要单向
	      this.$emit('model-change', model);
	      this.$emit('node-change', name, value);
	    }
	  },

	  watch: {
	    /**
	     * @description model 监听器
	     * @param model {Array} model 属性值
	     */
	    vModel: function vModel(model) {
	      this.$broadcast('modelChange', model);
	    }
	  },

	  ready: function ready() {
	    // 通知子组件初始化状态
	    this.$broadcast('modelChange', this.vModel);
	  }
	};
	// </script>
	//
	// <style lang="scss">
	//   .ks-checkbox-group { font-size: 0 }
	// </style>

/***/ },
/* 973 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ks-checkbox-group\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 974 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(975)
	__vue_script__ = __webpack_require__(977)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsRadio/src/circleRadio.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(984)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsRadio/src/circleRadio.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 975 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(976);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./circleRadio.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./circleRadio.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 976 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".KsCircleRadio {\n  display: inline-block; }\n  .KsCircleRadio__dotContainer {\n    width: 18px;\n    height: 18px;\n    position: relative;\n    display: inline-block;\n    border: 1px solid #D0D0D5;\n    border-radius: 50%;\n    vertical-align: middle; }\n  .KsCircleRadio__dotInner {\n    width: 10px;\n    height: 10px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate3d(-50%, -50%, 0);\n            transform: translate3d(-50%, -50%, 0);\n    border-radius: 50%; }\n", ""]);

	// exports


/***/ },
/* 977 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _abstract = __webpack_require__(978);

	var _abstract2 = _interopRequireDefault(_abstract);

	var _baseRadioProps = __webpack_require__(982);

	var _baseRadioProps2 = _interopRequireDefault(_baseRadioProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <div class="KsCircleRadio" :style="{opacity: disabled ? '0.6' : '1'}">
	//     <abstract :name="name" :value="value" :disabled="disabled"
	//               :model.sync="model" :def-checked="defChecked"
	//     >
	//       <div class="KsCircleRadio__dotContainer" slot="dot">
	//         <div class="KsCircleRadio__dotInner"
	//              :style="{backgroundColor: model === value ? color : 'white'}"></div>
	//       </div>
	//
	//       <slot slot="label">Label...</slot>
	//     </abstract>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  VERSION: '1.0.0',

	  mixins: [_baseRadioProps2.default],

	  data: function data() {
	    return {};
	  },


	  props: {
	    color: { type: String, default: '#00A5E0' }
	  },

	  components: { Abstract: _abstract2.default }
	};
	// </script>
	//
	// <style lang="scss">
	//   @import "../../foundation/SassMagic-master/src/sassMagic";
	//
	//   $dotSize: 18px;                         // 选择点点大小
	//
	//   @include b (KsCircleRadio) {
	//     display: inline-block;
	//
	//     @include e (dotContainer) {
	//       @include size (18px);
	//
	//       position: relative;
	//       display: inline-block;
	//       border: 1px solid #D0D0D5;
	//       border-radius: 50%;
	//       vertical-align: middle;
	//     }
	//
	//     @include e (dotInner) {
	//       @include size ($dotSize / 1.8);
	//       @include center-translate();
	//
	//       border-radius: 50%;
	//     }
	//   }
	// </style>

/***/ },
/* 978 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(979)
	__vue_script__ = __webpack_require__(981)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsRadio/src/abstract.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(983)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsRadio/src/abstract.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 979 */
[1108, 980],
/* 980 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".KsRadioAbstract {\n  vertical-align: middle; }\n  .KsRadioAbstract > label {\n    display: inline-block; }\n  .KsRadioAbstract__label {\n    vertical-align: middle;\n    font-size: 13px; }\n  .KsRadioAbstract__entity {\n    width: 0;\n    height: 0;\n    display: none;\n    opacity: 0; }\n", ""]);

	// exports


/***/ },
/* 981 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _baseRadioProps = __webpack_require__(982);

	var _baseRadioProps2 = _interopRequireDefault(_baseRadioProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  VERSION: '1.0.0',

	  mixins: [_baseRadioProps2.default],

	  data: function data() {
	    return {};
	  },


	  computed: {
	    /**
	     * @return {string}
	     */
	    Id: function Id() {
	      return 'KsRadioAbstract__entity--UID-' + this._uid;
	    }
	  }
	};
	// </script>
	//
	// <style lang="scss">
	//   @import "../../foundation/SassMagic-master/src/sassMagic";
	//
	//   @include b (KsRadioAbstract) {
	//     vertical-align: middle;
	//
	//     & > label { display: inline-block }
	//
	//     @include e (label) {
	//       vertical-align: middle;
	//       font-size: 13px;
	//     }
	//
	//     @include e (entity) {
	//       @include size (0);
	//
	//       display: none;
	//       opacity: 0;
	//     }
	//   }
	// </style>
	// <template>
	//   <div :class="'KsRadioAbstract KsRadioAbstract--UID-' + _uid">
	//     <input type="radio" class="KsRadioAbstract__entity" :id="Id" :name="name"
	//            :checked="defChecked" :value="value" :disabled="disabled"
	//            v-model="model"
	//     >
	//
	//     <label class="KsRadioAbstract__dot" :for="Id">
	//       <slot name="dot"></slot>
	//     </label>
	//
	//     <label class="KsRadioAbstract__label" :for="Id">
	//       <slot name="label"></slot>
	//     </label>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 982 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description 单选按钮基础属性.
	 * @author pkeros
	 * @data 2017/4/18
	 * @email pkeros@vip.qq.com
	 */

	exports.default = {

	  props: {
	    value: { required: true },
	    disabled: { type: Boolean, default: false },
	    defChecked: { type: Boolean, default: false },
	    model: { toWay: true, required: true },
	    name: { default: 'KsRadioAbstract' }
	  }

	};

/***/ },
/* 983 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"'KsRadioAbstract KsRadioAbstract--UID-' + _uid\">\n  <input type=\"radio\" class=\"KsRadioAbstract__entity\" :id=\"Id\" :name=\"name\"\n         :checked=\"defChecked\" :value=\"value\" :disabled=\"disabled\"\n         v-model=\"model\"\n  >\n\n  <label class=\"KsRadioAbstract__dot\" :for=\"Id\">\n    <slot name=\"dot\"></slot>\n  </label>\n\n  <label class=\"KsRadioAbstract__label\" :for=\"Id\">\n    <slot name=\"label\"></slot>\n  </label>\n</div>\n";

/***/ },
/* 984 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KsCircleRadio\" :style=\"{opacity: disabled ? '0.6' : '1'}\">\n  <abstract :name=\"name\" :value=\"value\" :disabled=\"disabled\"\n            :model.sync=\"model\" :def-checked=\"defChecked\"\n  >\n    <div class=\"KsCircleRadio__dotContainer\" slot=\"dot\">\n      <div class=\"KsCircleRadio__dotInner\"\n           :style=\"{backgroundColor: model === value ? color : 'white'}\"></div>\n    </div>\n\n    <slot slot=\"label\">Label...</slot>\n  </abstract>\n</div>\n";

/***/ },
/* 985 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(986)
	__vue_script__ = __webpack_require__(988)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsRadio/src/BtnRadio.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(989)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsRadio/src/BtnRadio.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 986 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(987);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./BtnRadio.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./BtnRadio.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 987 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".KsBtnRadio {\n  display: inline-block; }\n  .KsBtnRadio__text {\n    position: relative;\n    display: inline-block;\n    min-width: 42px;\n    padding: 8px 10px;\n    border: 1px solid #D0D0D5;\n    text-align: center;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    cursor: pointer; }\n", ""]);

	// exports


/***/ },
/* 988 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _abstract = __webpack_require__(978);

	var _abstract2 = _interopRequireDefault(_abstract);

	var _KsButton = __webpack_require__(538);

	var _baseRadioProps = __webpack_require__(982);

	var _baseRadioProps2 = _interopRequireDefault(_baseRadioProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  VERSION: '1.0.0',

	  mixins: [_baseRadioProps2.default],

	  data: function data() {
	    return {};
	  },


	  props: {
	    color: { type: String, default: '#008FE1' },
	    width: { type: String, default: '26px' },
	    height: { type: String, default: '27PX' }
	  },

	  components: { Abstract: _abstract2.default, KsButtonAbstract: _KsButton.KsButtonAbstract }
	};
	// </script>
	//
	// <style lang="scss">
	//   @import "../../foundation/SassMagic-master/src/sassMagic";
	//
	//   @include b (KsBtnRadio) {
	//     display: inline-block;
	//
	//     @include e (text) {
	//       position: relative; display: inline-block;
	//       min-width: 42px;
	//       padding: 8px 10px; border: 1px solid #D0D0D5;
	//       text-align: center;
	//       user-select: none; cursor: pointer;
	//     }
	//   }
	// </style>
	// <template>
	//   <div :class="'KsBtnRadio KsBtnRadio--UID-' + _uid">
	//     <abstract :name="name" :value="value" :disabled="disabled"
	//               :model.sync="model" :def-checked="defChecked"
	//     >
	//       <ks-button-abstract slot="label" :truth="false"
	//                           :width="width" :height="height"
	//                           :disabled="disabled"
	//                           :color-hover="color"
	//                           :color-normal="color"
	//                           :color-active="color"
	//                           :mode="model === value ? 'normal' : 'ghost'">
	//         <slot></slot>
	//       </ks-button-abstract>
	//     </abstract>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 989 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"'KsBtnRadio KsBtnRadio--UID-' + _uid\">\n  <abstract :name=\"name\" :value=\"value\" :disabled=\"disabled\"\n            :model.sync=\"model\" :def-checked=\"defChecked\"\n  >\n    <ks-button-abstract slot=\"label\" :truth=\"false\"\n                        :width=\"width\" :height=\"height\"\n                        :disabled=\"disabled\"\n                        :color-hover=\"color\"\n                        :color-normal=\"color\"\n                        :color-active=\"color\"\n                        :mode=\"model === value ? 'normal' : 'ghost'\">\n      <slot></slot>\n    </ks-button-abstract>\n  </abstract>\n</div>\n";

/***/ },
/* 990 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(991)
	__vue_script__ = __webpack_require__(993)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsRadio/src/radioGroup.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(994)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsRadio/src/radioGroup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 991 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(992);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./radioGroup.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./radioGroup.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 992 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".KsRadioGroup {\n  font-size: 0; }\n  .KsRadioGroup .KsBtnRadio .KsBtnAbstract {\n    border-radius: 0; }\n  .KsRadioGroup .KsBtnRadio:first-child .KsBtnAbstract {\n    border-radius: 4px 0 0 4px; }\n  .KsRadioGroup .KsBtnRadio:last-child .KsBtnAbstract {\n    border-radius: 0 4px 4px 0; }\n  .KsRadioGroup .KsBtnRadio:not(:last-child) .KsBtnAbstract {\n    margin-right: -1px; }\n", ""]);

	// exports


/***/ },
/* 993 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="KsRadioGroup">
	//     <slot></slot>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  VERSION: '1.0.0',

	  data: function data() {
	    return {};
	  }
	};
	// </script>
	//
	// <style lang="scss">
	//   @import "../../foundation/SassMagic-master/src/sassMagic";
	//
	//   @include b (KsRadioGroup) {
	//     font-size: 0;
	//
	//     @include b (KsBtnRadio) {
	//       // 中间的去除圆角
	//       .KsBtnAbstract {
	//         border-radius: 0;
	//       }
	//       // 第一个 radio button 样式
	//       &:first-child .KsBtnAbstract {
	//         border-radius: 4px 0 0 4px;
	//       }
	//       // 最后一个 radio button 样式
	//       &:last-child .KsBtnAbstract {
	//         border-radius: 0 4px 4px 0;
	//       }
	//       // 去除间隔线
	//       &:not(:last-child) .KsBtnAbstract {
	//         margin-right: -1px;
	//       }
	//     }
	//   }
	// </style>

/***/ },
/* 994 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KsRadioGroup\">\n  <slot></slot>\n</div>\n";

/***/ },
/* 995 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(996)
	__vue_script__ = __webpack_require__(998)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsPager/src/page.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(1000)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsPager/src/page.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 996 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(997);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./page.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./page.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 997 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".ks-row {\n  display: table;\n  table-layout: fixed;\n  border-spacing: 0; }\n\n.ks-col-top, .ks-col-auto-top, .ks-col-auto, .KsPageGroup-statistical, .ks-col {\n  display: table-cell;\n  vertical-align: middle;\n  word-break: break-all; }\n\n.ks-col-top {\n  vertical-align: top; }\n\n.ks-col-auto-top {\n  vertical-align: top; }\n\n.ks-row-auto, .KsPageGroup {\n  box-sizing: border-box;\n  width: 100%;\n  display: table;\n  border-spacing: 0;\n  table-layout: auto; }\n\n.ks-col-auto-top, .ks-col-auto, .KsPageGroup-statistical {\n  width: 1px;\n  white-space: nowrap; }\n\n.ks-row {\n  box-sizing: border-box;\n  width: 100%; }\n\n.KsPage li, .KsPageGroup li {\n  display: inline-block;\n  min-width: 16px;\n  padding: 0 10px;\n  height: 36px;\n  line-height: 36px;\n  text-align: center;\n  border-radius: 4px;\n  color: #000;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .KsPage li:hover, .KsPageGroup li:hover {\n    background: #f5f5f5;\n    color: #000; }\n  .KsPage li.active:hover, .KsPageGroup li.active:hover {\n    background: #2196f3;\n    color: #fff; }\n\n.KsPage .active, .KsPageGroup .active {\n  background: #2196f3;\n  color: #fff; }\n\n.KsPage .disabled, .KsPageGroup .disabled {\n  color: #999;\n  cursor: not-allowed; }\n  .KsPage .disabled:hover, .KsPageGroup .disabled:hover {\n    background: transparent;\n    color: #999; }\n\n.KsPageGroup {\n  color: #999;\n  line-height: 36px; }\n  .KsPageGroup-statistical {\n    padding-right: 20px; }\n    .KsPageGroup-statistical span {\n      color: #000;\n      padding: 0 5px; }\n", ""]);

	// exports


/***/ },
/* 998 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mixins = __webpack_require__(999);

	var _mixins2 = _interopRequireDefault(_mixins);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    VERSION: '1.1.0',
	    mixins: [_mixins2.default],
	    data: function data() {
	        return {
	            pages: []
	        };
	    },


	    methods: {
	        init: function init() {
	            this.totalLength = this.getTotalLength(this.total, this.size);
	            this.pages = this.buildPages(this.current, this.length, this.totalLength);
	        },

	        /**
	         * [getTotalLength 总页数]
	         * @param  {[Number]} total [总条数]
	         * @param  {[Number]} size  [每页条数]
	         * @return {[Number]}       [总页数]
	         */
	        getTotalLength: function getTotalLength(total, size) {
	            var mod = total % size;
	            return (total - mod) / size + (mod && 1);
	        },


	        /**
	         * [createPurePages 生成无折叠符的分页数组]
	         * @param  {[Number]} current     [当前页数]
	         * @param  {[Number]} length      [展示长度]
	         * @param  {[Number]} totalLength [总页数]
	         * @return {[Array]}              [分页新数组]
	         */
	        createPurePages: function createPurePages(current, length, totalLength) {
	            var arr = [],
	                len,
	                max;
	            if (length > totalLength) {
	                length = totalLength;
	                max = totalLength;
	                len = totalLength - 1;
	            } else {
	                len = length - 1;
	                max = current + len / 2;
	                current <= len / 2 && (max = length);
	                max > totalLength && (max = totalLength);
	            }

	            for (var i = len; i >= 0; i--) {
	                arr.push(max - i);
	            }
	            return arr;
	        },

	        // 
	        /**
	         * [addFold 折叠，添加省略号]
	         * @param {[Number]} max [总页数]
	         * @param {[Array]} arr  [纯净分页数组]
	         * @return {[Array]}     [带符号的分页数组]
	         */
	        addFold: function addFold(max, arr) {
	            var last;
	            arr = arr || [];
	            arr = [].concat(arr);
	            last = arr.length - 1;

	            if (arr[0] > 1) {
	                arr[0] = 1;
	                arr[1] = '···';
	            }
	            if (arr[last] < max) {
	                arr[last] = max;
	                arr[last - 1] = '···';
	            }
	            return arr;
	        },
	        buildPages: function buildPages(current, length, totalLength) {
	            var arr;
	            arr = this.createPurePages(current, length, totalLength);
	            arr = this.addFold(totalLength, arr);
	            return arr;
	        },

	        // 点击分页主体
	        emitClick: function emitClick(event) {

	            var value = event.target.innerHTML.trim();

	            switch (true) {
	                // left
	                case '&lt;' === value:
	                    --this.current;
	                    this.current < 1 && (this.current = 1);
	                    break;
	                // right
	                case '&gt;' === value:
	                    ++this.current;
	                    this.current = Math.min(this.current, this.totalLength);
	                    break;
	                case '···' === value:
	                    break;
	                case !isNaN(value):
	                    this.current = +value;
	                    break;
	            }

	            this.$emit('change', this.current);
	        },
	        warn: function warn() {
	            if (!this.total) return;
	            if (this.length % 2 == 0) {
	                this.length = this.length - 1;
	                console.error('分页中的参数 pages 或 length 请传入奇数 , 自动转为：' + this.length);
	            }
	        }
	    },
	    watch: {
	        'current': function current(val) {
	            // console.log(val)

	            this.pages = this.buildPages(val, this.length, this.totalLength);
	        },
	        'size': function size() {
	            this.current = 1;
	        },
	        'total + size + length': function totalSizeLength() {
	            this.init();
	        }
	    },
	    created: function created() {
	        this.warn();
	        this.init();
	    }
	};
	// </script>
	// <style lang="scss">
	//     @import '../styles/paging.scss';
	//
	// </style>
	// <template>
	//     <ul v-show="total" class="KsPage" cid="KsPage" @click="emitClick($event)">
	//         <li :class="{'disabled':current == 1}">&lt;</li>
	//         <li v-for="i in pages"
	//             track-by="$index"
	//             :class="{'active':current == i}" v-text="i"></li>
	//         <li :class="{'disabled':current == pages[pages.length-1]}">&gt;</li>
	//     </ul>
	// </template>
	// <script type="text/javascript">

/***/ },
/* 999 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    props: {
	        // 总条数
	        total: { type: Number, default: 0 },
	        // 展示分页个数 pages => length (展示长度 ，迁移为length)
	        length: { type: Number, default: 7 },
	        // 当前选中的页数 page_current => current (迁移为current)
	        current: { type: Number, default: 1 },
	        // 每页展示条数 page_size => size (迁移为size)
	        size: { type: Number, default: 10 },
	        onChange: Function
	    }
	};

/***/ },
/* 1000 */
/***/ function(module, exports) {

	module.exports = "\n<ul v-show=\"total\" class=\"KsPage\" cid=\"KsPage\" @click=\"emitClick($event)\">\n    <li :class=\"{'disabled':current == 1}\">&lt;</li>\n    <li v-for=\"i in pages\"\n        track-by=\"$index\"\n        :class=\"{'active':current == i}\" v-text=\"i\"></li>\n    <li :class=\"{'disabled':current == pages[pages.length-1]}\">&gt;</li>\n</ul>\n";

/***/ },
/* 1001 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(1002)
	__vue_script__ = __webpack_require__(1004)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsPager/src/pagegroup.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(1005)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsPager/src/pagegroup.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1002 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(1003);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pagegroup.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pagegroup.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 1003 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/*@import '../styles/input.scss';*/\n", ""]);

	// exports


/***/ },
/* 1004 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mixins = __webpack_require__(999);

	var _mixins2 = _interopRequireDefault(_mixins);

	var _page = __webpack_require__(995);

	var _page2 = _interopRequireDefault(_page);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="KsPageGroup" cid="KsPageGroup">
	//         <div class="_statistical">共<span>{{total}}</span>条</div>
	//         <div class="ks-col">
	//             每页
	//             <select class="input" v-on:change.stop v-model="size">
	//                 <option 
	//                     v-for="i in sizes" 
	//                     v-bind:value="i">{{i}}</option>
	//             </select>
	//             条
	//         </div>
	//         <page 
	//             class="ks-col-auto"
	//             v-bind:current.sync="current" 
	//             v-bind:length="length"
	//             v-bind:total="total"
	//             v-bind:size="size"
	//             v-on:change="currentChange"></page>    
	//     </div>
	// </template>
	// <script type="text/javascript">
	exports.default = {
	    VERSION: '1.1.0',
	    components: {
	        'page': _page2.default
	    },
	    mixins: [_mixins2.default],
	    props: {
	        // 每页可能展示条数
	        sizes: { type: Array, default: function _default() {
	                return [10, 20, 100];
	            }
	        }
	    },
	    data: function data() {
	        return {};
	    },

	    methods: {
	        init: function init() {
	            var size = this.size;
	            if (!~this.sizes.indexOf(size)) {
	                size = this.sizes[0];
	            }
	            this.size = size;
	        },
	        currentChange: function currentChange(val) {
	            this.$emit('change', this.size, this.current);
	        }
	    },
	    created: function created() {
	        this.init();
	    },

	    watch: {
	        size: function size(val, oldVal) {
	            this.current = 1;
	            this.$emit('change', this.size, this.current);
	        }
	    }
	};
	// </script>
	// <style lang="scss">
	//     /*@import '../styles/input.scss';*/
	// </style>

/***/ },
/* 1005 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KsPageGroup\" cid=\"KsPageGroup\">\n    <div class=\"KsPageGroup-statistical\">共<span>{{total}}</span>条</div>\n    <div class=\"ks-col\">\n        每页\n        <select class=\"input\" v-on:change.stop v-model=\"size\">\n            <option \n                v-for=\"i in sizes\" \n                v-bind:value=\"i\">{{i}}</option>\n        </select>\n        条\n    </div>\n    <page \n        class=\"ks-col-auto\"\n        v-bind:current.sync=\"current\" \n        v-bind:length=\"length\"\n        v-bind:total=\"total\"\n        v-bind:size=\"size\"\n        v-on:change=\"currentChange\"></page>    \n</div>\n";

/***/ },
/* 1006 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(1007)
	__vue_script__ = __webpack_require__(1009)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsDater/src/dater.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(1015)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsDater/src/dater.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1007 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(1008);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./dater.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./dater.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 1008 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.ks-row, .tb, .KsDater-date-days, .KsDaterMulti-date-days, .KsDateMonth-date-days, .KsDateYear-date-days, .KsDater-date-btn, .KsDaterMulti-date-btn, .KsDateMonth-date-btn, .KsDateYear-date-btn, .KsDater-date-week, .KsDaterMulti-date-week, .KsDateMonth-date-week, .KsDateYear-date-week, .KsDatePicker .KsDater, .KsDaterMultiPicker .KsDater, .KsDater, .KsDaterMulti, .KsDateMonth, .KsDateYear {\n  display: table;\n  table-layout: fixed;\n  border-spacing: 0; }\n\n.ks-col-top, .ks-col-auto-top, .ks-col-auto, .KsDater-date-head .year, .KsDaterMulti-date-head .year, .KsDateMonth-date-head .year, .KsDateYear-date-head .year, .KsDater-date-head .month, .KsDaterMulti-date-head .month, .KsDateMonth-date-head .month, .KsDateYear-date-head .month, .ks-col, .KsDater-date-days span, .KsDaterMulti-date-days span, .KsDateMonth-date-days span, .KsDateYear-date-days span, .KsDater-date-btn span, .KsDaterMulti-date-btn span, .KsDateMonth-date-btn span, .KsDateYear-date-btn span, .KsDater-date-week span, .KsDaterMulti-date-week span, .KsDateMonth-date-week span, .KsDateYear-date-week span, .KsDater-date, .KsDaterMulti-date, .KsDateMonth-date, .KsDateYear-date, .KsDater-date-head .retreat, .KsDaterMulti-date-head .retreat, .KsDateMonth-date-head .retreat, .KsDateYear-date-head .retreat, .KsDater-date-head .next, .KsDaterMulti-date-head .next, .KsDateMonth-date-head .next, .KsDateYear-date-head .next, .KsDater-date-head .interstice, .KsDaterMulti-date-head .interstice, .KsDateMonth-date-head .interstice, .KsDateYear-date-head .interstice, .tb-cell {\n  display: table-cell;\n  vertical-align: middle;\n  word-break: break-all; }\n\n.ib-w, .ib-w.ib {\n  letter-spacing: -0.31em;\n  word-spacing: -0.43em;\n  text-rendering: optimizespeed;\n  font-family: PingFangSC-Regular, microsoft yahei, Arial, sans-serif;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  -ms-flex-flow: row wrap;\n  -ms-align-content: flex-start;\n  -ms-flex-line-pack: start;\n      align-content: flex-start; }\n\n.ib {\n  display: inline-block;\n  zoom: 1;\n  letter-spacing: normal;\n  word-spacing: normal;\n  vertical-align: top;\n  text-rendering: auto;\n  box-sizing: border-box; }\n\n.ks-col-top {\n  vertical-align: top; }\n\n.ks-col-auto-top {\n  vertical-align: top; }\n\n.ks-row-auto, .KsDatePicker-input, .KsDaterMultiPicker-input, .KsDateMonthPicker-input, .KsDateYearPicker-input, .KsDater-date-head, .KsDaterMulti-date-head, .KsDateMonth-date-head, .KsDateYear-date-head {\n  box-sizing: border-box;\n  width: 100%;\n  display: table;\n  border-spacing: 0;\n  table-layout: auto; }\n\n.ks-col-auto-top, .ks-col-auto, .KsDater-date-head .year, .KsDaterMulti-date-head .year, .KsDateMonth-date-head .year, .KsDateYear-date-head .year, .KsDater-date-head .month, .KsDaterMulti-date-head .month, .KsDateMonth-date-head .month, .KsDateYear-date-head .month {\n  width: 1px;\n  white-space: nowrap; }\n\n.ks-row, .tb, .KsDater-date-days, .KsDaterMulti-date-days, .KsDateMonth-date-days, .KsDateYear-date-days, .KsDater-date-btn, .KsDaterMulti-date-btn, .KsDateMonth-date-btn, .KsDateYear-date-btn, .KsDater-date-week, .KsDaterMulti-date-week, .KsDateMonth-date-week, .KsDateYear-date-week, .KsDatePicker .KsDater, .KsDaterMultiPicker .KsDater, .KsDater, .KsDaterMulti, .KsDateMonth, .KsDateYear {\n  box-sizing: border-box;\n  width: 100%; }\n\n/* h1 ~ h6 字体大小 */\n.h1 {\n  font-size: 30px; }\n\n.h2 {\n  font-size: 24px; }\n\n.h3 {\n  font-size: 18px; }\n\n.h4 {\n  font-size: 16px; }\n\n.h5 {\n  font-size: 14px; }\n\n.h6 {\n  font-size: 12px; }\n\n/* 颜色  primary danger info warning dark gray */\n.primary {\n  color: #2196F3;\n  border-color: #2196F3; }\n\n.primary-light {\n  color: #42A5F5;\n  border-color: #42A5F5; }\n\n.primary-deep {\n  color: #1E88E5;\n  border-color: #1E88E5; }\n\n.success {\n  color: #4CAF50;\n  border-color: #4CAF50; }\n\n.success-light {\n  color: #66BB6A;\n  border-color: #66BB6A; }\n\n.success-deep {\n  color: #43A047;\n  border-color: #43A047; }\n\n.info {\n  color: #00BCD4;\n  border-color: #00BCD4; }\n\n.info-light {\n  color: #26C6DA;\n  border-color: #26C6DA; }\n\n.info-deep {\n  color: #00ACC1;\n  border-color: #00ACC1; }\n\n.danger {\n  color: #F44336;\n  border-color: #F44336; }\n\n.danger-light {\n  color: #EF5350;\n  border-color: #EF5350; }\n\n.danger-deep {\n  color: #E53935;\n  border-color: #E53935; }\n\n.warning {\n  color: #FF5722;\n  border-color: #FF5722; }\n\n.warning-light {\n  color: #FF7043;\n  border-color: #FF7043; }\n\n.warning-deep {\n  color: #F4511E;\n  border-color: #F4511E; }\n\n.dark {\n  color: #777777;\n  border-color: #777777; }\n\n.dark-light {\n  color: #999999;\n  border-color: #999999; }\n\n.dark-deep {\n  color: #444444;\n  border-color: #444444; }\n\n.gray {\n  color: #F5F5F5;\n  border-color: #F5F5F5; }\n\n.gray-light {\n  color: #FCFCFC;\n  border-color: #FCFCFC; }\n\n.gray-deep {\n  color: #E9E9E9;\n  border-color: #E9E9E9; }\n\n.bg-primary {\n  background: #2196F3;\n  color: #fff; }\n\n.bg-primary-light {\n  background: #42A5F5;\n  color: #fff; }\n\n.bg-primary-deep {\n  background: #1E88E5;\n  color: #fff; }\n\n.bg-success {\n  background: #4CAF50;\n  color: #fff; }\n\n.bg-success-light {\n  background: #66BB6A;\n  color: #fff; }\n\n.bg-success-deep {\n  background: #43A047;\n  color: #fff; }\n\n.bg-info {\n  background: #00BCD4;\n  color: #fff; }\n\n.bg-info-light {\n  background: #26C6DA;\n  color: #fff; }\n\n.bg-info-deep {\n  background: #00ACC1;\n  color: #fff; }\n\n.bg-danger {\n  background: #F44336;\n  color: #fff; }\n\n.bg-danger-light {\n  background: #EF5350;\n  color: #fff; }\n\n.bg-danger-deep {\n  background: #E53935;\n  color: #fff; }\n\n.bg-warning {\n  background: #FF5722;\n  color: #fff; }\n\n.bg-warning-light {\n  background: #FF7043;\n  color: #fff; }\n\n.bg-warning-deep {\n  background: #F4511E;\n  color: #fff; }\n\n.bg-dark {\n  background: #777777;\n  color: #fff; }\n\n.bg-dark-light {\n  background: #999999;\n  color: #fff; }\n\n.bg-dark-deep {\n  background: #444444;\n  color: #fff; }\n\n.bg-gray {\n  background: #F5F5F5;\n  color: #fff; }\n\n.bg-gray-light {\n  background: #FCFCFC;\n  color: #fff; }\n\n.bg-gray-deep {\n  background: #E9E9E9;\n  color: #fff; }\n\n.ks-row, .tb, .KsDater-date-days, .KsDaterMulti-date-days, .KsDateMonth-date-days, .KsDateYear-date-days, .KsDater-date-btn, .KsDaterMulti-date-btn, .KsDateMonth-date-btn, .KsDateYear-date-btn, .KsDater-date-week, .KsDaterMulti-date-week, .KsDateMonth-date-week, .KsDateYear-date-week, .KsDatePicker .KsDater, .KsDaterMultiPicker .KsDater, .KsDater, .KsDaterMulti, .KsDateMonth, .KsDateYear {\n  display: table;\n  table-layout: fixed;\n  border-spacing: 0; }\n\n.ks-col-top, .ks-col-auto-top, .ks-col-auto, .KsDater-date-head .year, .KsDaterMulti-date-head .year, .KsDateMonth-date-head .year, .KsDateYear-date-head .year, .KsDater-date-head .month, .KsDaterMulti-date-head .month, .KsDateMonth-date-head .month, .KsDateYear-date-head .month, .ks-col, .KsDater-date-days span, .KsDaterMulti-date-days span, .KsDateMonth-date-days span, .KsDateYear-date-days span, .KsDater-date-btn span, .KsDaterMulti-date-btn span, .KsDateMonth-date-btn span, .KsDateYear-date-btn span, .KsDater-date-week span, .KsDaterMulti-date-week span, .KsDateMonth-date-week span, .KsDateYear-date-week span, .KsDater-date, .KsDaterMulti-date, .KsDateMonth-date, .KsDateYear-date, .KsDater-date-head .retreat, .KsDaterMulti-date-head .retreat, .KsDateMonth-date-head .retreat, .KsDateYear-date-head .retreat, .KsDater-date-head .next, .KsDaterMulti-date-head .next, .KsDateMonth-date-head .next, .KsDateYear-date-head .next, .KsDater-date-head .interstice, .KsDaterMulti-date-head .interstice, .KsDateMonth-date-head .interstice, .KsDateYear-date-head .interstice, .tb-cell {\n  display: table-cell;\n  vertical-align: middle;\n  word-break: break-all; }\n\n.ib-w, .ib-w.ib {\n  letter-spacing: -0.31em;\n  word-spacing: -0.43em;\n  text-rendering: optimizespeed;\n  font-family: PingFangSC-Regular, microsoft yahei, Arial, sans-serif;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  -ms-flex-flow: row wrap;\n  -ms-align-content: flex-start;\n  -ms-flex-line-pack: start;\n      align-content: flex-start; }\n\n.ib {\n  display: inline-block;\n  zoom: 1;\n  letter-spacing: normal;\n  word-spacing: normal;\n  vertical-align: top;\n  text-rendering: auto;\n  box-sizing: border-box; }\n\n.ks-col-top {\n  vertical-align: top; }\n\n.ks-col-auto-top {\n  vertical-align: top; }\n\n.ks-row-auto, .KsDatePicker-input, .KsDaterMultiPicker-input, .KsDateMonthPicker-input, .KsDateYearPicker-input, .KsDater-date-head, .KsDaterMulti-date-head, .KsDateMonth-date-head, .KsDateYear-date-head {\n  box-sizing: border-box;\n  width: 100%;\n  display: table;\n  border-spacing: 0;\n  table-layout: auto; }\n\n.ks-col-auto-top, .ks-col-auto, .KsDater-date-head .year, .KsDaterMulti-date-head .year, .KsDateMonth-date-head .year, .KsDateYear-date-head .year, .KsDater-date-head .month, .KsDaterMulti-date-head .month, .KsDateMonth-date-head .month, .KsDateYear-date-head .month {\n  width: 1px;\n  white-space: nowrap; }\n\n.ks-row, .tb, .KsDater-date-days, .KsDaterMulti-date-days, .KsDateMonth-date-days, .KsDateYear-date-days, .KsDater-date-btn, .KsDaterMulti-date-btn, .KsDateMonth-date-btn, .KsDateYear-date-btn, .KsDater-date-week, .KsDaterMulti-date-week, .KsDateMonth-date-week, .KsDateYear-date-week, .KsDatePicker .KsDater, .KsDaterMultiPicker .KsDater, .KsDater, .KsDaterMulti, .KsDateMonth, .KsDateYear {\n  box-sizing: border-box;\n  width: 100%; }\n\n.KsDatePicker-input, .KsDaterMultiPicker-input, .KsDateMonthPicker-input, .KsDateYearPicker-input {\n  background: #fff;\n  border: 1px solid #c8c8c8;\n  border-radius: 4px; }\n  .KsDatePicker-input .date-icon, .KsDaterMultiPicker-input .date-icon, .KsDateMonthPicker-input .date-icon, .KsDateYearPicker-input .date-icon {\n    border-right: 1px solid #c8c8c8; }\n    .KsDatePicker-input .date-icon i, .KsDaterMultiPicker-input .date-icon i, .KsDateMonthPicker-input .date-icon i, .KsDateYearPicker-input .date-icon i {\n      padding: 11px; }\n  .KsDatePicker-input input, .KsDaterMultiPicker-input input, .KsDateMonthPicker-input input, .KsDateYearPicker-input input {\n    height: 36px;\n    border: 0;\n    outline: 0;\n    padding: 0 10px;\n    width: 100%;\n    box-sizing: border-box;\n    background: transparent; }\n\n.KsDater-date-days, .KsDaterMulti-date-days, .KsDateMonth-date-days, .KsDateYear-date-days, .KsDater-date-btn, .KsDaterMulti-date-btn, .KsDateMonth-date-btn, .KsDateYear-date-btn, .KsDater-date-week, .KsDaterMulti-date-week, .KsDateMonth-date-week, .KsDateYear-date-week {\n  padding: 0 32px;\n  text-align: center;\n  line-height: 36px; }\n\n.KsDater-date-days, .KsDaterMulti-date-days, .KsDateMonth-date-days, .KsDateYear-date-days, .KsDater-date-btn, .KsDaterMulti-date-btn, .KsDateMonth-date-btn, .KsDateYear-date-btn {\n  padding-bottom: 5px; }\n  .KsDater-date-days span, .KsDaterMulti-date-days span, .KsDateMonth-date-days span, .KsDateYear-date-days span, .KsDater-date-btn span, .KsDaterMulti-date-btn span, .KsDateMonth-date-btn span, .KsDateYear-date-btn span {\n    cursor: pointer;\n    border-radius: 4px; }\n    .KsDater-date-days span:hover, .KsDaterMulti-date-days span:hover, .KsDateMonth-date-days span:hover, .KsDateYear-date-days span:hover, .KsDater-date-btn span:hover, .KsDaterMulti-date-btn span:hover, .KsDateMonth-date-btn span:hover, .KsDateYear-date-btn span:hover {\n      background: #f5f5f5; }\n    .KsDater-date-days span.active, .KsDaterMulti-date-days span.active, .KsDateMonth-date-days span.active, .KsDateYear-date-days span.active, .KsDater-date-btn span.active, .KsDaterMulti-date-btn span.active, .KsDateMonth-date-btn span.active, .KsDateYear-date-btn span.active {\n      color: #fff;\n      background: #2196F3; }\n  .KsDater-date-days .pass, .KsDaterMulti-date-days .pass, .KsDateMonth-date-days .pass, .KsDateYear-date-days .pass, .KsDater-date-btn .pass, .KsDaterMulti-date-btn .pass, .KsDateMonth-date-btn .pass, .KsDateYear-date-btn .pass, .KsDater-date-days .future, .KsDaterMulti-date-days .future, .KsDateMonth-date-days .future, .KsDateYear-date-days .future, .KsDater-date-btn .future, .KsDaterMulti-date-btn .future, .KsDateMonth-date-btn .future, .KsDateYear-date-btn .future, .KsDater-date-days .collect, .KsDaterMulti-date-days .collect, .KsDateMonth-date-days .collect, .KsDateYear-date-days .collect, .KsDater-date-btn .collect, .KsDaterMulti-date-btn .collect, .KsDateMonth-date-btn .collect, .KsDateYear-date-btn .collect {\n    color: #c8c8c8; }\n  .KsDater-date-days .scope-bg, .KsDaterMulti-date-days .scope-bg, .KsDateMonth-date-days .scope-bg, .KsDateYear-date-days .scope-bg, .KsDater-date-btn .scope-bg, .KsDaterMulti-date-btn .scope-bg, .KsDateMonth-date-btn .scope-bg, .KsDateYear-date-btn .scope-bg {\n    background: #f5f5f5;\n    border-radius: 0; }\n\n.KsDatePicker .KsDater, .KsDaterMultiPicker .KsDater, .KsDater, .KsDaterMulti, .KsDateMonth, .KsDateYear {\n  display: inline-block;\n  margin-top: -1px; }\n  .KsDater-date, .KsDaterMulti-date, .KsDateMonth-date, .KsDateYear-date {\n    border: 1px solid #c8c8c8;\n    border-left: transparent;\n    width: 314px;\n    background: #fff; }\n    .KsDater-date-head, .KsDaterMulti-date-head, .KsDateMonth-date-head, .KsDateYear-date-head {\n      padding: 30px 18px 15px;\n      font-size: 14px; }\n      .KsDater-date-head .retreat, .KsDaterMulti-date-head .retreat, .KsDateMonth-date-head .retreat, .KsDateYear-date-head .retreat, .KsDater-date-head .next, .KsDaterMulti-date-head .next, .KsDateMonth-date-head .next, .KsDateYear-date-head .next {\n        cursor: pointer; }\n      .KsDater-date-head .next, .KsDaterMulti-date-head .next, .KsDateMonth-date-head .next, .KsDateYear-date-head .next {\n        text-align: right; }\n    .KsDater-date-week, .KsDaterMulti-date-week, .KsDateMonth-date-week, .KsDateYear-date-week {\n      font-weight: bold;\n      color: #c8c8c8; }\n      .KsDater-date-week .week, .KsDaterMulti-date-week .week, .KsDateMonth-date-week .week, .KsDateYear-date-week .week {\n        color: #ef5350; }\n    .KsDater-date-days:last-child, .KsDaterMulti-date-days:last-child, .KsDateMonth-date-days:last-child, .KsDateYear-date-days:last-child {\n      margin-bottom: 10px; }\n    .KsDater-date-btn select, .KsDaterMulti-date-btn select, .KsDateMonth-date-btn select, .KsDateYear-date-btn select {\n      width: 70px;\n      border-color: #e5e5e5; }\n    .KsDater-date-btn .mlr-10, .KsDaterMulti-date-btn .mlr-10, .KsDateMonth-date-btn .mlr-10, .KsDateYear-date-btn .mlr-10 {\n      margin: 0 10px; }\n    .KsDater-date-btn .today, .KsDaterMulti-date-btn .today, .KsDateMonth-date-btn .today, .KsDateYear-date-btn .today, .KsDater-date-btn .reset, .KsDaterMulti-date-btn .reset, .KsDateMonth-date-btn .reset, .KsDateYear-date-btn .reset {\n      color: #2196F3; }\n    .KsDater-date-btn .clear, .KsDaterMulti-date-btn .clear, .KsDateMonth-date-btn .clear, .KsDateYear-date-btn .clear {\n      color: #F44336; }\n    .KsDater-date-btn .today:hover, .KsDaterMulti-date-btn .today:hover, .KsDateMonth-date-btn .today:hover, .KsDateYear-date-btn .today:hover, .KsDater-date-btn .clear:hover, .KsDaterMulti-date-btn .clear:hover, .KsDateMonth-date-btn .clear:hover, .KsDateYear-date-btn .clear:hover, .KsDater-date-btn .reset:hover, .KsDaterMulti-date-btn .reset:hover, .KsDateMonth-date-btn .reset:hover, .KsDateYear-date-btn .reset:hover, .KsDater-date-btn .collect:hover, .KsDaterMulti-date-btn .collect:hover, .KsDateMonth-date-btn .collect:hover, .KsDateYear-date-btn .collect:hover, .KsDater-date-btn .selects:hover, .KsDaterMulti-date-btn .selects:hover, .KsDateMonth-date-btn .selects:hover, .KsDateYear-date-btn .selects:hover {\n      background: transparent; }\n    .KsDater-date-btn .today, .KsDaterMulti-date-btn .today, .KsDateMonth-date-btn .today, .KsDateYear-date-btn .today, .KsDater-date-btn .clear, .KsDaterMulti-date-btn .clear, .KsDateMonth-date-btn .clear, .KsDateYear-date-btn .clear {\n      padding-bottom: 20px; }\n  .KsDater-date:first-child, .KsDaterMulti-date:first-child, .KsDateMonth-date:first-child, .KsDateYear-date:first-child {\n    border-left: 1px solid #c8c8c8; }\n\n.KsDatePicker .KsDater, .KsDaterMultiPicker .KsDater, .KsDater, .KsDaterMulti, .KsDateMonth, .KsDateYear {\n  z-index: 1;\n  width: auto;\n  min-width: 316px; }\n  .KsDater-date-head .interstice, .KsDaterMulti-date-head .interstice, .KsDateMonth-date-head .interstice, .KsDateYear-date-head .interstice {\n    width: 16px; }\n  .KsDater-date-head .month, .KsDaterMulti-date-head .month, .KsDateMonth-date-head .month, .KsDateYear-date-head .month {\n    font-weight: bold; }\n\n.KsDatePicker .KsDater, .KsDaterMultiPicker .KsDater, .KsDateMonthPicker .KsDater, .KsDateYearPicker .KsDater {\n  position: absolute; }\n\n.KsDatePicker .KsDateMonth, .KsDaterMultiPicker .KsDateMonth, .KsDateMonthPicker .KsDateMonth, .KsDateYearPicker .KsDateMonth {\n  position: absolute; }\n\n.KsDatePicker .KsDater-head .year, .KsDaterMultiPicker .KsDater-head .year {\n  color: #c8c8c8; }\n\n.KsDateMonthPicker .KsDater-date-head .year, .KsDateYearPicker .KsDater-date-head .year {\n  font-weight: bold; }\n\n.KsDateMonthPicker .KsDater-days, .KsDateYearPicker .KsDater-days {\n  margin: 28px 0; }\n\n.readonly.KsDatePicker .KsDater-date, .readonly.KsDaterMultiPicker .KsDaterMulti-date {\n  background: #f5f5f5; }\n  .readonly.KsDatePicker .KsDater-date-days span, .readonly.KsDaterMultiPicker .KsDaterMulti-date-days span {\n    pointer-events: none;\n    color: #c8c8c8; }\n    .readonly.KsDatePicker .KsDater-date-days span.begin-active, .readonly.KsDaterMultiPicker .KsDaterMulti-date-days span.begin-active, .readonly.KsDatePicker .KsDater-date-days span.end-active, .readonly.KsDaterMultiPicker .KsDaterMulti-date-days span.end-active, .readonly.KsDatePicker .KsDater-date-days span.active, .readonly.KsDaterMultiPicker .KsDaterMulti-date-days span.active {\n      background: #777;\n      border-radius: 0;\n      color: #fff; }\n  .readonly.KsDatePicker .KsDater-date-days-btn, .readonly.KsDaterMultiPicker .KsDaterMulti-date-days-btn {\n    padding: 0; }\n    .readonly.KsDatePicker .KsDater-date-days-btn .reset, .readonly.KsDaterMultiPicker .KsDaterMulti-date-days-btn .reset, .readonly.KsDatePicker .KsDater-date-days-btn .collect, .readonly.KsDaterMultiPicker .KsDaterMulti-date-days-btn .collect {\n      padding: 0 32px 5px;\n      pointer-events: none; }\n    .readonly.KsDatePicker .KsDater-date-days-btn .reset, .readonly.KsDaterMultiPicker .KsDaterMulti-date-days-btn .reset {\n      text-align: left;\n      padding-left: 42px; }\n    .readonly.KsDatePicker .KsDater-date-days-btn .collect, .readonly.KsDaterMultiPicker .KsDaterMulti-date-days-btn .collect {\n      border-left: 8px solid #f5f5f5;\n      margin-left: -5px;\n      display: block; }\n\n.KsDatePicker {\n  position: relative; }\n\n.KsDaterMulti-date {\n  min-width: 316px; }\n  .KsDaterMulti-date-btn {\n    border-top: 1px solid #c8c8c8; }\n\n.KsDaterMultiPicker {\n  position: relative; }\n  .KsDaterMultiPicker-input input {\n    text-align: center;\n    min-width: 100px; }\n  .KsDaterMultiPicker-input .scope-icon {\n    color: #26c6da; }\n  .KsDaterMultiPicker .KsDaterMulti {\n    position: absolute; }\n  .KsDaterMultiPicker-btn {\n    margin-top: 20px;\n    border-top: 1px solid #c8c8c8; }\n    .KsDaterMultiPicker-btn .reset, .KsDaterMultiPicker-btn .collect {\n      line-height: 44px;\n      height: 44px; }\n\n.KsDateMonthPicker {\n  position: absolute; }\n\n.KsDateYear {\n  position: absolute; }\n\n.readonly.KsDatePicker .KsDatePicker-input {\n  background: #e9e9e9; }\n\n.readonly.KsDaterMultiPicker .KsDaterMultiPicker-input {\n  background: #e9e9e9; }\n", ""]);

	// exports


/***/ },
/* 1009 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _index = __webpack_require__(1010);

	var _index2 = _interopRequireDefault(_index);

	var _multi = __webpack_require__(1013);

	var _multi2 = _interopRequireDefault(_multi);

	var _lang = __webpack_require__(1011);

	var _apage = __webpack_require__(1014);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//
	//   <div class="KsDater" cid="KsDater">
	//     <div class="_date">
	//       <div class="_head">
	//         <div class="retreat" v-on:click.stop="click_month(-1)">&lt;</div>
	//         <div class="year">{{now.getFullYear()}}年</div>
	//         <div class="interstice"></div>
	//         <div class="month">{{now.getMonth()+1}}月</div>
	//         <div class="next" v-on:click.stop="click_month(1)">&gt;</div>
	//       </div>
	//       <div class="_week">
	//         <span v-for="day in days" :class="{'week':day=='六'||day=='日'}">{{day}}</span>
	//       </div>
	//       <div v-on:click.stop="pick_date($event)">
	//         <div class="_days"
	//              v-for="week in 6">
	//                 <span
	//                   v-for="day in  7"
	//                   v-bind:id="'dater'+_uid
	//                             +'_'+(+week * 7 + day)
	//                             +'_'+(dates[week * 7 + day] && dates[week * 7 + day].status)"
	//                   v-bind:class="{
	//                         'pass':dates[week * 7 + day] && dates[week * 7 + day].status=='disabled',
	//                         'active':dates[week * 7 + day] && dates[week * 7 + day].status=='active'}">
	//                         {{dates[week * 7 + day] && +dates[week * 7 + day].datetext}}</span>
	//         </div>
	//       </div>
	//       <div class="_btn" v-if="type=='datetime'">
	//         <select class="input" v-model="times[0]" v-on:change.stop="pick_time">
	//           <option v-bind:value="i|fr_limit" v-for="i in 24">{{i|fr_limit}}</option>
	//         </select>
	//         <select class="input mlr-10" v-model="times[1]" v-on:change.stop="pick_time">
	//           <option v-bind:value="i|fr_limit" v-for="i in 60">{{i|fr_limit}}</option>
	//         </select>
	//         <select class="input" v-model="times[2]" v-on:change.stop="pick_time">
	//           <option v-bind:value="i|fr_limit" v-for="i in 60">{{i|fr_limit}}</option>
	//         </select>
	//       </div>
	//       <div class="_btn" v-if="type!='datemulti'">
	//         <span class="today" v-on:click.stop="today()">今天</span>
	//         <span class="clear" v-on:click.stop="clear()">清除</span>
	//       </div>
	//     </div>
	//   </div>
	//
	// </template>
	// <script type="text/javascript">
	exports.default = {
	    VERSION: '1.0.0',
	    mixins: [_index2.default, _multi2.default],
	    data: function data() {

	        this.dater = '';
	        this.timer = '';
	        this.min = this.min.replace(/-/g, '');
	        this.max = this.max.replace(/-/g, '');

	        return {
	            times: ['00', '00', '00']
	        };
	    },

	    methods: {
	        // 今天
	        today: function today() {
	            if (this.readonly) return;

	            var _date = new Date();
	            var dater = (0, _lang.stringify)(_date);
	            if (this.dater == dater) {
	                this.now = _date;
	                return;
	            }

	            if (this.banLimit(dater.replace(/-/g, ''))) return;

	            this.putout(dater);
	        },

	        // 清除
	        clear: function clear() {
	            if (!this.value || this.readonly) return;
	            this.value = '';
	            this.times = ['00', '00', '00'];
	            this.$emit('change', '');
	        },

	        // 限制范围
	        banLimit: function banLimit(val) {
	            // console.log(val,this.min)
	            if (this.min && val < this.min || this.max && val > this.max) {
	                return true;
	            }
	            return false;
	        },

	        // 过滤选择
	        selectd: function selectd(dater) {

	            var status = '',
	                bond = dater.replace(/-/g, '');

	            if (this.type == 'datemulti') {
	                ~this.point_daters.indexOf(dater) && (status = 'active');
	            } else if (dater == this.dater) {
	                status = 'active';
	            }

	            if (this.banLimit(bond)) status = 'disabled';

	            return status;
	        },
	        pick_date: function pick_date(event) {
	            var id = event.target.id.split('_');
	            var index = +id[1];

	            if (isNaN(index) || id[2] == 'disabled' || this.readonly) return;

	            var dater = this.dates[index].dater;
	            this.putout(dater);
	        },

	        // emit数据
	        putout: function putout(dater) {
	            var _this = this;

	            // console.log('putout(dater)',dater,this.type)
	            var value = '';
	            switch (this.type) {
	                case 'date':
	                    value = dater;
	                    break;
	                case 'datemulti':
	                    this.point_daters = this.non(this.point_daters, dater);
	                    // console.log(this.point_daters)
	                    value = this.point_daters.join(',');
	                    break;
	                case 'datetime':
	                    // console.log(dater)
	                    dater = dater || (0, _lang.stringify)(new Date());
	                    // console.log(this.times)
	                    value = dater + ' ' + this.times.join(':');
	                    break;
	            }
	            this.value = value;
	            // console.log('change',value)
	            this.$nextTick(function () {
	                _this.$emit('change', value);
	            });
	        },

	        // 选择时间
	        pick_time: function pick_time() {
	            this.putout(this.dater);
	            // var dater = this.cur_value || stringify(new Date())
	            // this.no_exclude(dater,true)
	        },


	        // 数组中数值，无则加，有则去除
	        non: function non(point_daters, dater) {
	            var index = point_daters.indexOf(dater);
	            if (~index) {
	                point_daters.splice(index, 1);
	            } else {
	                point_daters.push(dater);
	            }
	            // console.log(point_daters)
	            return point_daters;
	        },

	        // 更新视图
	        update: function update(val) {

	            var dater = (0, _lang.format_conver)(val, 'YYYY-MM-DD');
	            var timer = (0, _lang.format_conver)(val, 'HH:mm:ss');
	            // console.log('dater',dater,this.dater);
	            if (this.dater != dater) {
	                this.dater = dater;
	                this.now = (0, _lang.parse)(dater);
	            }
	            if (this.timer != timer) {
	                this.timer = timer;
	                this.times = timer.split(':');
	            }
	        }
	    },
	    watch: {
	        value: function value(val, oldval) {

	            if (val) {
	                this.update(val);
	            } else {
	                // clear
	                this.dater = '';
	                this.timer = '';
	                this.now = (0, _lang.parse)((0, _lang.stringify)(this.now));
	            }
	        },

	        // 重新绘制
	        now: function now(val, oldval) {
	            this.dates = (0, _apage.one_page_date)(val.getFullYear(), val.getMonth(), this.selectd);
	        }
	    },
	    created: function created() {
	        if (!this.value) {
	            this.now = (0, _lang.parse)((0, _lang.stringify)(this.now));
	        }
	        this.update(this.value);
	    }
	};
	// </script>
	// <style lang="scss">
	//     @import '../styles/date';
	// </style>

/***/ },
/* 1010 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _lang = __webpack_require__(1011);

	var _props = __webpack_require__(1012);

	var _props2 = _interopRequireDefault(_props);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    mixins: [_props2.default],
	    data: function data() {

	        return {
	            days: (0, _lang.get_days)(),
	            months: (0, _lang.get_months)(),
	            dates: [],
	            now: new Date()
	        };
	    },

	    filters: {
	        fr_limit: function fr_limit(val, len) {
	            return (0, _lang.fullzero)(val, len);
	        }
	    },
	    methods: {
	        today: function today() {
	            // alert('mixins today')
	        },

	        // 切换年
	        click_year: function click_year(flag) {
	            this.now.setFullYear(this.now.getFullYear() + flag);
	            this.now = new Date(this.now);
	        },

	        // 切换月
	        click_month: function click_month(flag) {
	            this.now.setMonth(this.now.getMonth() + flag, 1);
	            this.now = new Date(this.now);
	        }
	    },
	    created: function created() {}
	};

/***/ },
/* 1011 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _keys = __webpack_require__(100);

	var _keys2 = _interopRequireDefault(_keys);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 约定
	 *     date : new Date()
	 *     // v-m 对象
	 *     _date : {dater:'2016-10-14',datetext:'',status:''}
	 *     dater : 2016-10-10
	 */
	// 周几
	exports.get_days = function () {
	    return ['日', '一', '二', '三', '四', '五', '六'];
	};
	// 月份
	exports.getMonths = exports.get_months = function () {
	    var arr = [];
	    for (var i = 0; i < 12; i++) {
	        arr.push(i + 1 + '月');
	    }
	    return arr;
	};
	// 解析date
	exports.parse = function (str) {
	    var date = new Date(str);
	    return isNaN(date.getTime()) ? null : date;
	};
	// 转换date为string
	exports.stringify = function (date, format) {

	    var year = date.getFullYear();
	    var month = date.getMonth() + 1;
	    var date = date.getDate();
	    // var monthName = months[date.getMonth()]

	    format = format || 'YYYY-MM-DD';

	    var map = {
	        YYYY: year,
	        // MMM: monthName,
	        MM: ('0' + month).slice(-2),
	        M: month,
	        DD: ('0' + date).slice(-2),
	        D: date
	    };
	    return format.replace(/Y+|M+|D+/g, function (str) {
	        return map[str];
	    });
	};

	// 上一个月
	exports.prev_month = function (year, month) {
	    return api_ym(year, month, -1);
	};
	// 当前月
	exports.cur_month = function (year, month) {
	    return api_ym(year, month);
	};
	// 下一个月
	exports.next_month = function (year, month) {
	    return api_ym(year, month, +1);
	};
	/**
	 * [ymd 获取年月日]
	 * @param  {[type]} dater [2016-10-01]
	 * @return {[type]}       [{y:'2016',m:'10',d:'01'}]
	 */
	exports.ymd = function (dater) {
	    var dater = dater.split('-');

	    return {
	        y: dater[0],
	        m: dater[1],
	        ym: dater[0] + '-' + dater[1],
	        d: dater[2]
	    };
	};

	// number -> [0~11]
	function api_month(month) {
	    month = month > 11 ? 0 : month < 0 ? 11 : month;
	    return month;
	}
	exports.api_month = api_month;

	/**
	 * [api_ym Date api 中的年月]
	 * @param  {[Number]} year      [2016]
	 * @param  {[Number]} month     [8]
	 * @param  {[Number]} sgn       [+1|-1]
	 * @return {[Object]}           [{year:'2016',month:'08'}]
	 */
	function api_ym(year, month, sgn) {
	    year = parseInt(year);
	    month = parseInt(month);
	    if (sgn) {
	        month = month + sgn;
	        month > 11 && ++year;
	        month < 0 && --year;
	        month = api_month(month);
	    } else {
	        month = api_month(month);
	    }
	    return { year: year, month: month, stringify: year + '-' + (month + 1) };
	}
	exports.api_ym = exports.apiYm = api_ym;
	/**
	 * [split_dt 分割 '2016-10-11 10:01:03']
	 * @return {[type]} [description]
	 */
	function split_dt(val) {
	    if (val && (/:(\d{2}):(\d{2}):(\d{2})/g.test(val) || /(\d{2}):(\d{2}):(\d{2})/g.test(val))) {
	        var dater_timer = val.replace(/:(\d{2}):(\d{2}):(\d{2})/g, '$1:$2:$3').replace(/(\d{2}):(\d{2}):(\d{2})/g, '|$1:$2:$3').split('|');
	        return {
	            dater: dater_timer[0].trim(),
	            timer: dater_timer[1]
	        };
	    }
	    return '';
	}

	exports.split_dt = split_dt;

	var addzero = function addzero(len) {
	    return ('' + Math.pow(10, len)).substr(1);
	};

	function fullzero(val, len) {
	    var real_len = ('' + val).length;
	    len = len || 2;
	    return real_len < len ? addzero(len - real_len) + val : val;
	}

	/**
	 * (string , YYYY-MM-DD HH:mm:ss) => 2016-10-11 10:10:10
	 */
	function format_conver(dater_timer, format) {
	    if (!dater_timer || typeof dater_timer != 'string') return '';
	    var datas = [],
	        reg = '';
	    format = format || 'YYYY-MM-DD HH:mm:ss';
	    reg = format.replace(/\w+/g, '\\d+');
	    reg = new RegExp(reg, 'g');

	    var matchs = dater_timer.match(reg);
	    if (matchs) {
	        datas = matchs[0].match(/\d+/g);
	    }
	    // else{
	    //     return format_conver(dater_timer+' 00:00:00',format)
	    // }

	    var map_old = {};
	    format.match(/\w+/g).forEach(function (key, i) {
	        map_old[key] = datas[i];
	    });

	    var map = createAllDT();

	    (0, _keys2.default)(map_old).forEach(function (key) {
	        map[key] = map_old[key] || map[key];
	    });

	    format.match(/Y+|M+|D+|H+|m+|s+/g).forEach(function (key, i) {
	        map[key] = fullzero(map[key], key.length);
	    });

	    return format.replace(/Y+|M+|D+|H+|m+|s+/g, function (str) {
	        return map[str];
	    });
	}

	/**
	 * [createAllDT 返回所有可能的YMDHms]
	 * @return {[type]} [description]
	 */
	function createAllDT() {

	    var _date = new Date();
	    var year = _date.getFullYear();
	    var month = _date.getMonth() + 1;
	    var date = _date.getDate();
	    var hour = _date.getHours();
	    var minute = _date.getMinutes();
	    var second = _date.getSeconds();

	    // YYYY-MM-DD HH:mm:ss

	    return {
	        YYYY: year,
	        MM: ('0' + month).slice(-2),
	        M: month,
	        DD: ('0' + date).slice(-2),
	        D: date,
	        HH: ('0' + hour).slice(-2),
	        H: hour,
	        mm: ('0' + minute).slice(-2),
	        m: minute,
	        ss: ('0' + second).slice(-2),
	        s: second
	    };
	}

	exports.fullzero = fullzero;
	exports.format_conver = format_conver;

/***/ },
/* 1012 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _lang = __webpack_require__(1011);

	exports.default = {
	    props: {

	        readonly: { type: Boolean, default: false },
	        value: {
	            type: String
	        },
	        // year/month/date/week/datetime/datemulti/datetimerange/daterange
	        type: { type: String, default: 'date' },
	        min: { type: String, default: '' },
	        max: { type: String, default: '' },
	        format: { type: String, default: 'YYYY-MM-DD' }

	    }
	};

/***/ },
/* 1013 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _lang = __webpack_require__(1011);

	var _props = __webpack_require__(1012);

	var _props2 = _interopRequireDefault(_props);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'multi',
	    data: function data() {
	        return {};
	    },

	    methods: {
	        multi: function multi() {}
	    },
	    watch: {
	        value: function value(val, oldval) {
	            var addItem = '';
	            // console.log(val)
	            if (this.type == 'datemulti') {

	                ~val.indexOf(',') ? this.point_daters = val.split(',') : this.point_daters = [val];
	                this.point_daters = this.point_daters.filter(function (v) {
	                    if (v) return v;
	                });

	                if (val.length > oldval.length) {
	                    addItem = this.point_daters[this.point_daters.length - 1];
	                } else {
	                    // console.log(this.now,'=====')
	                    addItem = (0, _lang.stringify)(this.now);
	                }
	                // console.log('addItem',addItem)
	                // console.log('oldval',oldval)
	                var now = addItem && (0, _lang.parse)(addItem) || (0, _lang.parse)(oldval);
	                // console.log('this.now = ',now)
	                this.now = now;
	            }
	        }
	    },
	    created: function created() {
	        if (this.type == 'datemulti') {
	            this.point_daters = [];
	            ~this.value.indexOf(',') ? this.point_daters = this.value.split(',') : this.value && this.point_daters.push(this.value);

	            // console.log(this.value);    
	        }
	    }
	};

/***/ },
/* 1014 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _lang = __webpack_require__(1011);

	/**
	 * [one_page_date 获取某页日期数据 上个月(部分) + 当前月(满月) + 下个月(部分)]
	 * @param  {Number}   year  [年]
	 * @param  {Number}   month [月]
	 * @param  {Function} cb    [description]
	 * @return {Array}         [description]
	 */
	exports.one_page_date = function (year, month, cb) {
		// console.log(year,month)
		// 生成年月
		var pre_date = (0, _lang.prev_month)(year, month, -1);
		var date = (0, _lang.cur_month)(year, month);
		var next_date = (0, _lang.next_month)(year, month, +1);
		// 年月最后一天
		var prev = month_last_day(pre_date.year, pre_date.month);
		var cur = month_last_day(date.year, date.month);
		var next = month_last_day(next_date.year, next_date.month);

		// 当页面数据
		var prev_month_dates = get_prev_month_dates(prev.day, prev.dater);
		var full_month_dates = get_full_month_dates(cur.dater, cb);

		var arr = [].concat(prev_month_dates).concat(full_month_dates);
		var next_month_dates = get_next_month_dates(arr.length, next.dater);
		arr = arr.concat(next_month_dates);
		// console.log(arr)
		return arr;
	};
	/**
	 * [month_last_day 返回“某”月份的最后一天]
	 * @param  {[type]} year  [2016]
	 * @param  {[type]} month [月份 0~11]
	 * @return {[type]}       {day:1~6、0 , dater:2016-09-30}
	 */

	function month_last_day(year, month) {

		var date,
		    year = year,
		    month = month + 1,
		    date_temp;

		// console.log(year+'-'+month+'-'+1)
		// date_temp = new Date(year+'-'+month+'-'+1)
		date_temp = new Date();
		date_temp.setFullYear(year, month, 1);
		date = new Date(date_temp.getTime() - 24 * 60 * 60 * 1000);

		return {
			day: date.getDay() || 7,
			dater: (0, _lang.stringify)(date)
		};
	}

	exports.month_last_day = month_last_day;

	/**
	 * [get_prev_month_dates 上个月(部分)]
	 * @param  {[type]} day   [周几]
	 * @param  {[type]} dater [YY-MM-DD]
	 */
	function get_prev_month_dates(day, dater) {

		var ymdr = (0, _lang.ymd)(dater),
		    counts = (day + 1) % 7 || 7;

		return get_month_dates(counts, ymdr.d, ymdr.ym, 'disabled');
	}
	// 当前月(满月) YY-MM-DD
	function get_full_month_dates(dater, cb) {
		var ymdr = (0, _lang.ymd)(dater),
		    counts = ymdr.d;

		return get_month_dates(counts, ymdr.d, ymdr.ym, cb);
	}
	exports.get_full_month_dates = get_full_month_dates;
	// 下个月(部分)
	function get_next_month_dates(counts, dater) {

		var ymdr = (0, _lang.ymd)(dater);
		counts = 42 - counts;

		return get_month_dates(counts, counts, ymdr.ym, 'disabled');
	}

	/**
	 * [get_month_dates 获取整月或部分的数据]
	 * @param  {[type]} counts    [天数 -> length]
	 * @param  {[type]} datetext   [日期号 -> 31]
	 * @param  {[type]} status [ym -> 2016-10]
	 * @param  {[type]} status ['disable|active']
	 * @return {[type]}        [{datetext:26,status:'active',dater:'2016-10-03'},{}[,...]]
	 */
	function get_month_dates(counts, datetext, ym, status) {

		var arr = [],
		    dater,
		    status_temp = '',
		    datetext_temp;

		while (counts--) {

			datetext_temp = '' + datetext--;
			// 2016-10,03 -> 2016-10-03
			dater = ym + '-' + ('0' + datetext_temp).slice(-2);

			if (typeof status === 'function') {
				status_temp = status(dater);
			}
			// 'disabled' 或 选中的值
			// if( status!='active' || dater === this.value ){
			//     status_temp = status
			// // 范围值 头尾 + 中间
			// }else if(~this.range_daters.indexOf(dater)){
			//     status_temp = (this.range_daters[0] == dater || this.range_daters[this.range_daters.length-1] == dater)
			//                     ? status : 'scope-bg'

			// }else if(~this.point_daters.indexOf(dater)){
			//     status_temp = 'active'
			// }else{
			//     status_temp = ''
			// }

			if (status == 'disabled') {
				status_temp = status;
			}

			arr.push({
				datetext: datetext_temp,
				status: status_temp,
				dater: dater
			});
		}
		return arr.reverse();
	}

/***/ },
/* 1015 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"KsDater\" cid=\"KsDater\">\n  <div class=\"KsDater-date\">\n    <div class=\"KsDater-date-head\">\n      <div class=\"retreat\" v-on:click.stop=\"click_month(-1)\">&lt;</div>\n      <div class=\"year\">{{now.getFullYear()}}年</div>\n      <div class=\"interstice\"></div>\n      <div class=\"month\">{{now.getMonth()+1}}月</div>\n      <div class=\"next\" v-on:click.stop=\"click_month(1)\">&gt;</div>\n    </div>\n    <div class=\"KsDater-date-week\">\n      <span v-for=\"day in days\" :class=\"{'week':day=='六'||day=='日'}\">{{day}}</span>\n    </div>\n    <div v-on:click.stop=\"pick_date($event)\">\n      <div class=\"KsDater-date-days\"\n           v-for=\"week in 6\">\n              <span\n                v-for=\"day in  7\"\n                v-bind:id=\"'dater'+_uid\n                          +'_'+(+week * 7 + day)\n                          +'_'+(dates[week * 7 + day] && dates[week * 7 + day].status)\"\n                v-bind:class=\"{\n                      'pass':dates[week * 7 + day] && dates[week * 7 + day].status=='disabled',\n                      'active':dates[week * 7 + day] && dates[week * 7 + day].status=='active'}\">\n                      {{dates[week * 7 + day] && +dates[week * 7 + day].datetext}}</span>\n      </div>\n    </div>\n    <div class=\"KsDater-date-btn\" v-if=\"type=='datetime'\">\n      <select class=\"input\" v-model=\"times[0]\" v-on:change.stop=\"pick_time\">\n        <option v-bind:value=\"i|fr_limit\" v-for=\"i in 24\">{{i|fr_limit}}</option>\n      </select>\n      <select class=\"input mlr-10\" v-model=\"times[1]\" v-on:change.stop=\"pick_time\">\n        <option v-bind:value=\"i|fr_limit\" v-for=\"i in 60\">{{i|fr_limit}}</option>\n      </select>\n      <select class=\"input\" v-model=\"times[2]\" v-on:change.stop=\"pick_time\">\n        <option v-bind:value=\"i|fr_limit\" v-for=\"i in 60\">{{i|fr_limit}}</option>\n      </select>\n    </div>\n    <div class=\"KsDater-date-btn\" v-if=\"type!='datemulti'\">\n      <span class=\"today\" v-on:click.stop=\"today()\">今天</span>\n      <span class=\"clear\" v-on:click.stop=\"clear()\">清除</span>\n    </div>\n  </div>\n</div>\n\n";

/***/ },
/* 1016 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(1017)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsDater/src/dater-pure.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(1021)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsDater/src/dater-pure.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1017 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _sub = __webpack_require__(1018);

	var _sub2 = _interopRequireDefault(_sub);

	var _lang = __webpack_require__(1011);

	var _apage = __webpack_require__(1014);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    components: {
	        sub: _sub2.default
	    },
	    data: function data() {
	        return {
	            dates: [],
	            now: new Date(),
	            value: '',
	            val: 'eeeee'
	        };
	    },

	    methods: {
	        pick: function pick(e) {
	            var id = event.target.id.split('_');
	            var unit_index = +id[1];
	            var index = +id[2];
	            // console.log(unit_index,index)
	            if (isNaN(unit_index) || isNaN(index) || id[2] == 'disabled') return;

	            this.value = this.dates[unit_index][index].dater;
	            // console.log(unit_index,index,this.value)

	            // this.dates[unit_index][index].status = 'active'
	            // this.dates[0] = this.pages_date(this.now,this.filter,1)[0]
	            // this.dates.splice(0,1,this.pages_date(this.now,this.filter,1)[0])
	            this.init();
	            // this.dates.splice(1,unit_index,)
	            this.val = Math.random() * 1000;
	        },
	        pick2: function pick2(e) {
	            var id = event.target.id.split('_');
	            var index = +id[1];
	            // console.log(index)
	            if (isNaN(index) || id[2] == 'disabled') return;

	            this.value = this.dates[index].dater;
	            // console.log(index,this.value)

	            // this.dates[10].status='active'

	            this.init();
	            // this.dates.splice(1,unit_index,)

	        },
	        filter: function filter(item) {
	            // console.log(item)
	            if (this.value === item) return 'active';
	        },
	        init: function init() {
	            this.dates = this.pages_date(this.now, this.filter, 4);
	            // console.log(this.dates)
	        },
	        pages_date: function pages_date(date, callback_filter, length) {
	            var arr = [];
	            var ym = {
	                year: date.getFullYear(),
	                month: date.getMonth()
	            };

	            for (var i = 0, len = length; i < len; i++) {
	                arr.push((0, _apage.one_page_date)(ym.year, ym.month, callback_filter));
	                // 对象
	                // var data = {}
	                // data.date = one_page_date(ym.year,ym.month,callback_filter)
	                // arr.push(data)
	                // 对象 end
	                ym = (0, _lang.next_month)(ym.year, ym.month);
	            }
	            return arr;
	        },
	        val_change: function val_change(val) {
	            // console.log(val)
	            this.val = val;
	            this.val = 'val_I_' + Math.random() * 1000;
	        }
	    },
	    watch: {
	        value: function value() {
	            // this.init()
	        }
	    },
	    created: function created() {
	        var _this = this;

	        this.init();

	        setTimeout(function () {
	            _this.val = 'cccc';
	        }, 3000);
	        // this.dates.push(get_page_dates(2016,7,this.select))
	        // this.dates.push(get_page_dates(2016,8))
	        // this.dates.push(get_page_dates(2016,9))
	        // this.dates.push(get_page_dates(2016,10))
	        // this.dates.push(get_page_dates(2016,11))
	    }
	};
	// </script>
	// <template>
	// <div class="KsDater" cid="KsDater"
	//     v-on:click="pick($event)">
	//
	// <div class="_date" v-for="(key,date) in dates">
	// <div>
	//     <div class="_days"
	//         v-for="week in 6">
	//         <span 
	//             v-for="day in  7"
	//             :id="'dater'+_uid+'_'+key+'_'+(+week * 7 + day)"
	//             :class="{
	//                 'pass':date[week * 7 + day] && date[week * 7 + day].status=='disabled',
	//                 'active':date[week * 7 + day] && date[week * 7 + day].status=='active'}">
	//                 {{date[week * 7 + day] && +date[week * 7 + day].datetext}}</span>
	//     </div>
	// </div>
	// </div>
	//
	// <!-- <div class="date-bd" v-for="(key,data) in dates">
	// <div>
	//     <div class="date-days"
	//         v-for="week in 6">
	//         <span 
	//             v-for="day in  7"
	//             :id="'dater'+_uid+'_'+key+'_'+(+week * 7 + day)"
	//             :class="{
	//                 'pass':data.date[week * 7 + day] && data.date[week * 7 + day].status=='disabled',
	//                 'active':data.date[week * 7 + day] && data.date[week * 7 + day].status=='active'}">
	//                 {{data.date[week * 7 + day] && +data.date[week * 7 + day].datetext}}</span>
	//     </div>
	// </div>
	// </div> -->
	//
	// <!-- <div class="_date">
	// <div>
	//     <div class="_days"
	//         v-for="week in 6">
	//         <span 
	//             v-for="day in  7"
	//             :id="'dater'+_uid+'_'+(+week * 7 + day)"
	//             :class="{
	//                 'pass':dates[week * 7 + day] && dates[week * 7 + day].status=='disabled',
	//                 'active':dates[week * 7 + day] && dates[week * 7 + day].status=='active'}">
	//                 {{dates[week * 7 + day] && +dates[week * 7 + day].datetext}}</span>
	//     </div>
	// </div>
	// </div> -->
	// {{val}}
	// <sub :val="val" v-on:change="val_change"></sub>
	// </div>
	// </template>
	// <script>

/***/ },
/* 1018 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(1019)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsDater/src/sub.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(1020)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsDater/src/sub.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1019 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div v-on:click="click">
	//         {{val}}
	//     </div>
	// </template>
	// <script type="text/javascript">
	exports.default = {
	    props: {
	        val: {}
	    },
	    data: function data() {
	        return {};
	    },

	    methods: {
	        click: function click() {
	            this.val = 'val_' + Math.random() * 1000;
	            this.$emit('change', this.val);
	        }
	    },
	    watch: {
	        val: function val(v) {
	            // console.log(v,'watch sub')
	        }
	    },
	    created: function created() {
	        var _this = this;

	        setTimeout(function () {
	            _this.val = '99999';
	        }, 6000);
	    }
	};
	// </script>

/***/ },
/* 1020 */
/***/ function(module, exports) {

	module.exports = "\n<div v-on:click=\"click\">\n    {{val}}\n</div>\n";

/***/ },
/* 1021 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KsDater\" cid=\"KsDater\"\n    v-on:click=\"pick($event)\">\n\n<div class=\"KsDater-date\" v-for=\"(key,date) in dates\">\n<div>\n    <div class=\"KsDater-date-days\"\n        v-for=\"week in 6\">\n        <span \n            v-for=\"day in  7\"\n            :id=\"'dater'+_uid+'_'+key+'_'+(+week * 7 + day)\"\n            :class=\"{\n                'pass':date[week * 7 + day] && date[week * 7 + day].status=='disabled',\n                'active':date[week * 7 + day] && date[week * 7 + day].status=='active'}\">\n                {{date[week * 7 + day] && +date[week * 7 + day].datetext}}</span>\n    </div>\n</div>\n</div>\n\n<!-- <div class=\"date-bd\" v-for=\"(key,data) in dates\">\n<div>\n    <div class=\"date-days\"\n        v-for=\"week in 6\">\n        <span \n            v-for=\"day in  7\"\n            :id=\"'dater'+_uid+'_'+key+'_'+(+week * 7 + day)\"\n            :class=\"{\n                'pass':data.date[week * 7 + day] && data.date[week * 7 + day].status=='disabled',\n                'active':data.date[week * 7 + day] && data.date[week * 7 + day].status=='active'}\">\n                {{data.date[week * 7 + day] && +data.date[week * 7 + day].datetext}}</span>\n    </div>\n</div>\n</div> -->\n\n<!-- <div class=\"_date\">\n<div>\n    <div class=\"_days\"\n        v-for=\"week in 6\">\n        <span \n            v-for=\"day in  7\"\n            :id=\"'dater'+_uid+'_'+(+week * 7 + day)\"\n            :class=\"{\n                'pass':dates[week * 7 + day] && dates[week * 7 + day].status=='disabled',\n                'active':dates[week * 7 + day] && dates[week * 7 + day].status=='active'}\">\n                {{dates[week * 7 + day] && +dates[week * 7 + day].datetext}}</span>\n    </div>\n</div>\n</div> -->\n{{val}}\n<sub :val=\"val\" v-on:change=\"val_change\"></sub>\n</div>\n";

/***/ },
/* 1022 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(1023)
	__vue_script__ = __webpack_require__(1025)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsDater/src/date-picker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(1029)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsDater/src/date-picker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1023 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(1024);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./date-picker.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./date-picker.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 1024 */
1008,
/* 1025 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _props = __webpack_require__(1012);

	var _props2 = _interopRequireDefault(_props);

	var _dater = __webpack_require__(1006);

	var _dater2 = _interopRequireDefault(_dater);

	var _dateMonth = __webpack_require__(1026);

	var _dateMonth2 = _interopRequireDefault(_dateMonth);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    VERSION: '1.0.0',
	    components: {
	        'ks-dater': _dater2.default,
	        'ks-date-month': _dateMonth2.default
	    },
	    mixins: [_props2.default],
	    props: {
	        placeholder: { type: String, default: '' }
	    },
	    data: function data() {

	        return {
	            show: false
	        };
	    },

	    computed: {},
	    methods: {
	        close: function close() {
	            this.show = false;
	        },
	        isContains: function isContains(e) {
	            if (this.$el && !this.$el.contains(e.target)) {
	                this.close();
	            }
	        },


	        // dater callback
	        change: function change(cur_date) {
	            var _this = this;

	            this.value = cur_date;
	            this.$nextTick(function () {
	                _this.$emit('change', cur_date);
	            });
	            if (this.type != 'datemulti' && this.type != 'datetime') {
	                this.close();
	            }
	        }
	    },
	    ready: function ready() {
	        document.addEventListener('click', this.isContains, false);
	    },
	    beforeDestroy: function beforeDestroy() {
	        document.removeEventListener('click', this.isContains, false);
	    }
	};
	// </script>
	// <style lang="scss">
	//     @import '../styles/date';
	// </style>
	// <template>
	//   <div class="KsDatePicker" cid="KsDatePicker"
	//        :class="{'readonly':readonly}">
	//     <div class="_input" v-on:mouseup="show=!show">
	//       <div class="ks-col-auto date-icon"><i class="icon"></i></div>
	//       <input type="text" class="ks-col" placeholder="{{placeholder}}" v-model="value" readonly>
	//     </div>
	//     <ks-dater 
	//         v-bind:min="min" 
	//         v-bind:max="max"
	//         v-if="type!='datemonth'"
	//         v-show="show" 
	//         v-bind:value="value" 
	//         v-bind:type="type" 
	//         v-bind:readonly="readonly" 
	//         v-on:change="change"></ks-dater>
	//     <ks-date-month 
	//         v-bind:min="min" 
	//         v-bind:max="max"
	//         v-if="type=='datemonth'"
	//         v-show="show" 
	//         v-bind:value="value" 
	//         v-bind:type="type" 
	//         v-bind:readonly="readonly" 
	//         v-on:change="change"></ks-date-month>
	//
	//   </div>
	// </template>
	// <script>

/***/ },
/* 1026 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(1027)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsDater/src/date-month.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(1028)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsDater/src/date-month.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1027 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _lang = __webpack_require__(1011);

	var _months = (0, _lang.getMonths)(); // <template>
	//     <div class="KsDateMonth" cid="KsDateMonth">
	//         <div class="KsDateMonth-date">
	//             <div class="KsDateMonth-date-head">
	//                 <div class="retreat" v-on:click="prev">&lt;</div>
	//                 <div class="year" v-text="year+'年'"></div>
	//                 <div class="next" v-on:click="next">&gt;</div>
	//             </div>
	//             <div v-on:click="pick($event)">
	//                 <div class="KsDateMonth-date-days"
	//                     v-for="row in 3">
	//                     <span v-bind:id="'month'+_uid
	//                               +'_'+[4*row+index]
	//                               +'_'+(months[4*row+index] 
	//                                && months[4*row+index].status)" 
	//                         v-bind:class="{
	//                         'pass':months[4*row+index] 
	//                                && months[4*row+index].status == 'disabled',
	//                         'active':months[4*row+index] 
	//                                && months[4*row+index].status == 'active',
	//                         }" 
	//                         v-for="(index,item) in 4">{{months[4*row+index].val}}</span>
	//                 </div>
	//             </div>
	//             <div class="KsDateMonth-date-btn">
	//                 <span class="today" v-on:click="curmonth">本月</span>
	//                 <span class="clear" v-on:click="clearmonth">清除</span>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	// <script type="text/javascript">
	exports.default = {
	    VERSION: '1.0.0',
	    props: {
	        value: {
	            type: String,
	            default: ''
	        },
	        min: {
	            type: String,
	            default: ''
	        },
	        max: {
	            type: String,
	            default: ''
	        }
	    },
	    data: function data() {
	        // console.log(this.value)
	        if (this.value) {
	            var yearmonth = this.value.split('-');
	            var year = yearmonth[0];
	            var month = yearmonth[1];
	        } else {
	            var dater = new Date();
	            var year = dater.getFullYear();
	        }

	        this.min = this.min.replace(/-/g, '');
	        this.max = this.max.replace(/-/g, '');

	        return {
	            year: year,
	            month: month,
	            interior: {
	                year: year,
	                month: month
	            }
	        };
	    },


	    computed: {
	        value: {
	            get: function get() {
	                // console.log(this.interior.year+'-'+fullzero(this.interior.month))
	                return this.interior.year + '-' + (0, _lang.fullzero)(this.interior.month);
	            },
	            set: function set(val) {

	                if (!val || this.interior.month != this.month) return;

	                var yearmonth = val.split('-');
	                this.year = yearmonth[0];
	                this.month = yearmonth[1];
	                this.output();
	            }
	        },
	        months: function months() {
	            var _this = this;

	            var monthval = '';
	            if (this.interior.year == this.year) {
	                monthval = this.interior.month;
	            }

	            return _months.map(function (month, index) {
	                var status = '',
	                    bond = _this.year + '' + (0, _lang.fullzero)(index + 1);

	                if (index + 1 == monthval) status = 'active';
	                if (_this.banLimit(bond)) {
	                    status = 'disabled';
	                }
	                return { val: month, status: status };
	            });
	        }
	    },
	    methods: {
	        prev: function prev() {
	            this.year = +this.year - 1;
	        },
	        next: function next() {
	            this.year = +this.year + 1;
	        },
	        banLimit: function banLimit(val) {
	            if (this.min && val < this.min || this.max && val > this.max) {
	                return true;
	            }
	            return false;
	        },
	        pick: function pick(event) {
	            var id = event.target.id,
	                index;
	            if (!id) return;
	            id = id.split('_');
	            if ('disabled' == id[2]) return;
	            this.month = +id[1] + 1;
	            this.output();
	            // console.log(this.month)
	        },
	        curmonth: function curmonth() {
	            var dater = new Date();
	            this.year = dater.getFullYear();
	            this.month = 1 + dater.getMonth();
	            if (!this.banLimit(this.year + '' + (0, _lang.fullzero)(1 + dater.getMonth()))) {
	                this.output();
	            }
	        },
	        output: function output() {
	            this.interior.month = this.month;
	            this.interior.year = this.year;
	            this.$emit('change', this.value);
	        },
	        clearmonth: function clearmonth() {
	            this.interior.month = '';
	            this.$emit('change', '');
	        }
	    },
	    created: function created() {
	        // if(this.value)
	        // console.log(this.value)
	        // var dater = new Date()
	        // this.year = dater.getFullYear()
	        // this.value = this.value
	        // this.curmonth()
	    }
	};
	// </script>

/***/ },
/* 1028 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KsDateMonth\" cid=\"KsDateMonth\">\n    <div class=\"KsDateMonth-date\">\n        <div class=\"KsDateMonth-date-head\">\n            <div class=\"retreat\" v-on:click=\"prev\">&lt;</div>\n            <div class=\"year\" v-text=\"year+'年'\"></div>\n            <div class=\"next\" v-on:click=\"next\">&gt;</div>\n        </div>\n        <div v-on:click=\"pick($event)\">\n            <div class=\"KsDateMonth-date-days\"\n                v-for=\"row in 3\">\n                <span v-bind:id=\"'month'+_uid\n                          +'_'+[4*row+index]\n                          +'_'+(months[4*row+index] \n                           && months[4*row+index].status)\" \n                    v-bind:class=\"{\n                    'pass':months[4*row+index] \n                           && months[4*row+index].status == 'disabled',\n                    'active':months[4*row+index] \n                           && months[4*row+index].status == 'active',\n                    }\" \n                    v-for=\"(index,item) in 4\">{{months[4*row+index].val}}</span>\n            </div>\n        </div>\n        <div class=\"KsDateMonth-date-btn\">\n            <span class=\"today\" v-on:click=\"curmonth\">本月</span>\n            <span class=\"clear\" v-on:click=\"clearmonth\">清除</span>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 1029 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KsDatePicker\" cid=\"KsDatePicker\"\n     :class=\"{'readonly':readonly}\">\n  <div class=\"KsDatePicker-input\" v-on:mouseup=\"show=!show\">\n    <div class=\"ks-col-auto date-icon\"><i class=\"icon\"></i></div>\n    <input type=\"text\" class=\"ks-col\" placeholder=\"{{placeholder}}\" v-model=\"value\" readonly>\n  </div>\n  <ks-dater \n      v-bind:min=\"min\" \n      v-bind:max=\"max\"\n      v-if=\"type!='datemonth'\"\n      v-show=\"show\" \n      v-bind:value=\"value\" \n      v-bind:type=\"type\" \n      v-bind:readonly=\"readonly\" \n      v-on:change=\"change\"></ks-dater>\n  <ks-date-month \n      v-bind:min=\"min\" \n      v-bind:max=\"max\"\n      v-if=\"type=='datemonth'\"\n      v-show=\"show\" \n      v-bind:value=\"value\" \n      v-bind:type=\"type\" \n      v-bind:readonly=\"readonly\" \n      v-on:change=\"change\"></ks-date-month>\n\n</div>\n";

/***/ },
/* 1030 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(1031)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsDater/src/dater-range.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(1033)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsDater/src/dater-range.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1031 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _index = __webpack_require__(1010);

	var _index2 = _interopRequireDefault(_index);

	var _lang = __webpack_require__(1011);

	var _apage = __webpack_require__(1014);

	var _range = __webpack_require__(1032);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//     <div class="KsDaterMulti" cid="KsDaterMulti">
	//         <div class="_date">
	//             <div class="_head">
	//                 <div class="retreat" v-on:click="click_month(-1)">&lt;</div>
	//                 <div class="year">{{now.getFullYear()}}年</div>
	//                 <div class="interstice"></div>
	//                 <div class="month">{{now.getMonth()+1}}月</div>
	//                 <div class="next" v-on:click="click_month(1)">&gt;</div>
	//             </div>
	//             <div class="_week">
	//                 <span v-for="day in days" :class="{'week':day=='六'||day=='日'}">{{day}}</span>
	//             </div>
	//             <div v-on:mousedown="pick_date($event)">
	//                 <div class="_days" v-for="week in 6">
	//                     <span 
	//                         v-for="day in  7"
	//                         :id="'dater'+_uid+'_'+(+week * 7 + day)+'_'+(dates[week * 7 + day] && dates[week * 7 + day].status)"
	//                         :class="{
	//                             'pass':dates[week * 7 + day] && dates[week * 7 + day].status=='disabled',
	//                             'scope-bg':dates[week * 7 + day] && dates[week * 7 + day].status=='scope-bg',
	//                             'active':dates[week * 7 + day] && dates[week * 7 + day].status=='active'}">
	//                             {{dates[week * 7 + day] && +dates[week * 7 + day].datetext}}</span>
	//                 </div>
	//             </div>
	//             <div class="_btn">
	//                 <span class="reset" v-on:click="reset()">重置</span>
	//             </div>
	//         </div>
	//         <div class="_date">
	//             <div class="_head">
	//                 <div class="retreat" v-on:click="click_next_month(-1)">&lt;</div>
	//                 <div class="year">{{next_data.year}}年</div>
	//                 <div class="interstice"></div>
	//                 <div class="month">{{next_data.month+1}}月</div>
	//                 <div class="next" v-on:click="click_next_month(1)">&gt;</div>
	//             </div>
	//             <div class="_week">
	//                 <span v-for="day in days" :class="{'week':day=='六'||day=='日'}">{{day}}</span>
	//             </div>
	//             <div v-on:mousedown="pick_date($event)">
	//                 <div class="_days"
	//                     v-for="week in 6">
	//                     <span 
	//                         v-for="day in  7"
	//                         :id="'dater'+_uid+'_'+(42+week * 7 + day)+'_'+(next_dates[week * 7 + day] && next_dates[week * 7 + day].status)"
	//                         :class="{
	//                             'pass':next_dates[week * 7 + day] && next_dates[week * 7 + day].status=='disabled',
	//                             'scope-bg':next_dates[week * 7 + day] && next_dates[week * 7 + day].status=='scope-bg',
	//                             'active':next_dates[week * 7 + day] && next_dates[week * 7 + day].status=='active'}">
	//                             {{next_dates[week * 7 + day] && +next_dates[week * 7 + day].datetext}}</span>
	//                 </div>
	//             </div>
	//             <div class="_btn">
	//                 <span class="selects">已选择{{range_daters_length}}天</span>
	//             </div>
	//         </div>
	//     </div>
	// </template>
	// <script type="text/javascript">
	exports.default = {
	    mixins: [_index2.default],
	    props: {
	        range_dater: {
	            type: Array
	        }
	    },
	    data: function data() {
	        this.range_daters = [];
	        return {
	            range_daters_length: 0,
	            next_dates: [],
	            next_now: new Date(),
	            next_data: {
	                year: '',
	                month: ''
	            }
	        };
	    },

	    methods: {
	        uniq: function uniq(data) {
	            return (data || []).reduce(function (arr, val) {
	                if (val) arr.push(val);
	                return arr;
	            }, []);
	        },
	        redraw: function redraw(show_range, range_daters) {

	            var show_start = show_range[0],
	                show_end = show_range[1];
	            this.value = '';
	            this.range_daters = range_daters;

	            // 取具体日期
	            range_daters.length == 2 && (this.range_daters = (0, _range.get_range_dates)(range_daters));
	            //console.log(range_daters,this.range_daters)
	            // 视图中选中长度
	            this.range_daters_length = this.range_daters.length;
	            if (this.range_daters.length == 2 && this.range_daters[0] == this.range_daters[this.range_daters.length - 1]) {
	                this.range_daters_length = 1;
	            }

	            // //console.log(show_start,show_end)
	            // 比较展示
	            if (this.compared_month(show_end, show_start)) {
	                var ym = (0, _range.split_ym)(show_end);
	                show_end = (0, _lang.next_month)(ym.year, ym.month).stringify + '-01';
	                // //console.log('show_end',show_end)
	            }

	            this.now = new Date(show_start);
	            this.next_now = new Date(show_end);
	        },
	        reset: function reset() {
	            this.redraw([(0, _lang.stringify)(this.now), (0, _lang.stringify)(this.next_now)], []);
	            this.$emit('change', []);
	        },

	        // 点击日期
	        pick_date: function pick_date(event) {
	            var id = event.target.id.split('_');
	            var index = +id[1],
	                _date,
	                range_dater;

	            if (isNaN(index) || id[2] == 'disabled') return;

	            if (index > 42) {
	                _date = this.next_dates[index - 42];
	            } else {
	                _date = this.dates[index];
	            }

	            range_dater = this.get_range(this.range_daters, _date.dater);

	            this.redraw([(0, _lang.stringify)(this.now), (0, _lang.stringify)(this.next_now)], range_dater);
	            // //console.log('range_dater',range_dater)
	            this.$emit('change', range_dater);
	        },

	        // [a,b] , e => [c,d]
	        get_range: function get_range(range_daters, select_value) {

	            if (range_daters.length >= 2) {
	                range_daters = [];
	            }

	            if (range_daters.length && this.compared(select_value, range_daters[0])) {
	                range_daters.unshift(select_value);
	            } else {
	                range_daters.push(select_value);
	            }

	            return range_daters;
	        },

	        // 切换月(右侧)
	        click_next_month: function click_next_month(flag) {
	            this.next_now.setMonth(this.next_now.getMonth() + flag, 1);
	            this.next_now = new Date(this.next_now);

	            if (this.compared_month((0, _lang.stringify)(this.next_now), (0, _lang.stringify)(this.now))) {
	                this.click_month(-1);
	            }
	        },

	        // 切换月(左侧)
	        click_month: function click_month(flag) {
	            this.now.setMonth(this.now.getMonth() + flag, 1);
	            this.now = new Date(this.now);
	            // //console.log(this.stringify(this.next_now) , this.stringify(this.now))
	            if (this.compared_month((0, _lang.stringify)(this.next_now), (0, _lang.stringify)(this.now))) {
	                this.click_next_month(1);
	            }
	        },
	        compared: function compared(val1, val2) {
	            return +val1.replace(/-/g, '') <= +val2.replace(/-/g, '');
	        },
	        compared_month: function compared_month(val1, val2) {
	            var val1 = (0, _range.split_ym)(val1);
	            var val2 = (0, _range.split_ym)(val2);
	            return +(val1.year + '' + (val1.month + 10)) <= +(val2.year + '' + (val2.month + 10));
	        },
	        next_month_dates: function next_month_dates() {
	            var year = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.next_now.getFullYear();
	            var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.next_now.getMonth();

	            this.next_data = (0, _lang.cur_month)(year, month);

	            this.next_dates = (0, _apage.one_page_date)(this.next_data.year, this.next_data.month, this.selectd);
	        },
	        selectd: function selectd(dater) {
	            // //console.log(this.range_daters)
	            if (~this.range_daters.indexOf(dater)) {
	                if (this.range_daters[0] == dater || this.range_daters[this.range_daters.length - 1] == dater) {
	                    return 'active';
	                } else {
	                    return 'scope-bg';
	                }
	            }
	        }
	    },
	    watch: {
	        now: function now() {
	            this.dates = (0, _apage.one_page_date)(this.now.getFullYear(), this.now.getMonth(), this.selectd);
	        },
	        next_now: function next_now() {
	            this.next_month_dates();
	        },
	        range_dater: function range_dater(val) {
	            val = this.uniq(val);
	            // //console.log(val)
	            if (val.length == 2) {

	                this.redraw(val, val);
	            } else {
	                this.redraw([(0, _lang.stringify)(this.now), (0, _lang.stringify)(this.next_now)], val);
	            }
	        }
	    },
	    created: function created() {

	        this.range_dater = this.uniq(this.range_dater);
	        if (!this.range_dater || !this.range_dater.length) {
	            this.range_dater = [(0, _lang.stringify)(this.now), (0, _lang.stringify)(this.next_now)];
	        }

	        this.redraw(this.range_dater, this.range_dater);
	    }
	};
	// </script>

/***/ },
/* 1032 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _lang = __webpack_require__(1011);

	var _apage = __webpack_require__(1014);

	// 选择范围取值
	function get_range_dates(range_dater) {
	    range_dater = range_dater || [];
	    var prev_date = range_dater[0];
	    var next_date = range_dater[1];

	    if (!prev_date || !next_date || gt(prev_date, next_date)) return null;
	    if (prev_date === next_date) return range_dater;

	    var prev = split_ym(prev_date);
	    var next = split_ym(next_date);
	    // console.log(prev,next)
	    if (prev.year == next.year && prev.month == next.month) {
	        return one_month(prev, next);
	    } else {
	        return span_month(prev, next, next_date);
	    }
	}

	// 选择同一个月
	function one_month(prev, next) {

	    var month = prev.month + 1,
	        counts = next.datetext - prev.datetext + 1,
	        arr = [],
	        val,
	        ym;('' + month).length == 1 && (month = '0' + month);
	    ym = prev.year + '-' + month;

	    while (counts--) {
	        val = +prev.datetext + counts;
	        ('' + val).length == 1 && (val = '0' + val);
	        arr.push(ym + '-' + val);
	    }

	    return arr;
	}
	/**
	 * [span_month 选择两个月以上]
	 *     第一个月部分日期 + 中间完整月份日期 + 最后一个月部分日期
	 * @param  {[type]}   prev      [范围第一个值]
	 * @param  {Function} next      [范围第二个值]
	 * @param  {[type]}   next_date []
	 * @return {[type]}             [description]
	 */
	function span_month(prev, next, next_date) {

	    var prev_dates = first_month_part(prev.year, prev.month, prev.datetext);
	    // console.log(prev_dates)
	    var dates = full_month_dates(loop_full_month(prev, next)).reduce(function (pre, cur, i, arr) {
	        return pre.concat(cur);
	    }, []);
	    var next_dates = last_month_part(next_date);
	    return prev_dates.concat([].concat(dates)).concat(next_dates).map(function (_date) {
	        return _date.dater;
	    });
	}

	function first_month_part(year, month, datetext) {
	    var prev = (0, _lang.cur_month)(year, month);
	    var last_day = (0, _apage.month_last_day)(prev.year, prev.month);

	    return (0, _apage.get_full_month_dates)(last_day.dater).filter(function (_date) {
	        if (parseInt(_date.datetext) >= parseInt(datetext)) {
	            return true;
	        }
	    });
	}

	function last_month_part(dater) {
	    return (0, _apage.get_full_month_dates)(dater);
	}

	// [ '2015-10-03','2015-10-03'[,...] ]
	function full_month_dates(dater_arr) {
	    return dater_arr.map(function (dater) {
	        return (0, _apage.get_full_month_dates)(dater);
	    });
	}

	// 尾调用
	function loop_full_month(prev, next, arr) {
	    var last_day, prev_ym;

	    arr = arr || [];

	    prev_ym = (0, _lang.next_month)(prev.year, prev.month);

	    if (prev_ym.year + '' + (+prev_ym.month + 10) >= next.year + '' + (+next.month + 10)) return arr;

	    last_day = (0, _apage.month_last_day)(prev_ym.year, prev_ym.month);
	    arr.push(last_day.dater);
	    return loop_full_month(prev_ym, next, arr);
	}

	function gt(start, end) {
	    return +start.replace(/-/g, '') > +end.replace(/-/g, '');
	}

	function split_ym(dater) {
	    dater = dater.split('-');
	    return {
	        year: dater[0],
	        month: dater[1] - 1,
	        datetext: dater[2]
	    };
	}

	module.exports = {
	    split_ym: split_ym,
	    get_range_dates: get_range_dates
	};

/***/ },
/* 1033 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KsDaterMulti\" cid=\"KsDaterMulti\">\n    <div class=\"KsDaterMulti-date\">\n        <div class=\"KsDaterMulti-date-head\">\n            <div class=\"retreat\" v-on:click=\"click_month(-1)\">&lt;</div>\n            <div class=\"year\">{{now.getFullYear()}}年</div>\n            <div class=\"interstice\"></div>\n            <div class=\"month\">{{now.getMonth()+1}}月</div>\n            <div class=\"next\" v-on:click=\"click_month(1)\">&gt;</div>\n        </div>\n        <div class=\"KsDaterMulti-date-week\">\n            <span v-for=\"day in days\" :class=\"{'week':day=='六'||day=='日'}\">{{day}}</span>\n        </div>\n        <div v-on:mousedown=\"pick_date($event)\">\n            <div class=\"KsDaterMulti-date-days\" v-for=\"week in 6\">\n                <span \n                    v-for=\"day in  7\"\n                    :id=\"'dater'+_uid+'_'+(+week * 7 + day)+'_'+(dates[week * 7 + day] && dates[week * 7 + day].status)\"\n                    :class=\"{\n                        'pass':dates[week * 7 + day] && dates[week * 7 + day].status=='disabled',\n                        'scope-bg':dates[week * 7 + day] && dates[week * 7 + day].status=='scope-bg',\n                        'active':dates[week * 7 + day] && dates[week * 7 + day].status=='active'}\">\n                        {{dates[week * 7 + day] && +dates[week * 7 + day].datetext}}</span>\n            </div>\n        </div>\n        <div class=\"KsDaterMulti-date-btn\">\n            <span class=\"reset\" v-on:click=\"reset()\">重置</span>\n        </div>\n    </div>\n    <div class=\"KsDaterMulti-date\">\n        <div class=\"KsDaterMulti-date-head\">\n            <div class=\"retreat\" v-on:click=\"click_next_month(-1)\">&lt;</div>\n            <div class=\"year\">{{next_data.year}}年</div>\n            <div class=\"interstice\"></div>\n            <div class=\"month\">{{next_data.month+1}}月</div>\n            <div class=\"next\" v-on:click=\"click_next_month(1)\">&gt;</div>\n        </div>\n        <div class=\"KsDaterMulti-date-week\">\n            <span v-for=\"day in days\" :class=\"{'week':day=='六'||day=='日'}\">{{day}}</span>\n        </div>\n        <div v-on:mousedown=\"pick_date($event)\">\n            <div class=\"KsDaterMulti-date-days\"\n                v-for=\"week in 6\">\n                <span \n                    v-for=\"day in  7\"\n                    :id=\"'dater'+_uid+'_'+(42+week * 7 + day)+'_'+(next_dates[week * 7 + day] && next_dates[week * 7 + day].status)\"\n                    :class=\"{\n                        'pass':next_dates[week * 7 + day] && next_dates[week * 7 + day].status=='disabled',\n                        'scope-bg':next_dates[week * 7 + day] && next_dates[week * 7 + day].status=='scope-bg',\n                        'active':next_dates[week * 7 + day] && next_dates[week * 7 + day].status=='active'}\">\n                        {{next_dates[week * 7 + day] && +next_dates[week * 7 + day].datetext}}</span>\n            </div>\n        </div>\n        <div class=\"KsDaterMulti-date-btn\">\n            <span class=\"selects\">已选择{{range_daters_length}}天</span>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 1034 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(1035)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsDater/src/date-range-picker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(1036)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsDater/src/date-range-picker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1035 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _props = __webpack_require__(1012);

	var _props2 = _interopRequireDefault(_props);

	var _daterRange = __webpack_require__(1030);

	var _daterRange2 = _interopRequireDefault(_daterRange);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	// <div class="KsDaterMultiPicker" :class="{'readonly':readonly}" cid="KsDaterMultiPicker">
	//     <div class="_input" v-on:mouseup="show=!show">
	//         <div class="ks-col-auto date-icon"><i class="icon">&#xe615;</i></div>
	//         <div class="ks-col">
	//             <div class="ks-row-auto">
	//                 <div class="ks-col">
	//                     <input type="text" readonly placeholder="{{placeholder[0]}}" :value="titles[0]">
	//                 </div>
	//                 <i class="icon ks-col-auto scope-icon">&#xe677;</i>
	//                 <div class="ks-col">
	//                     <input type="text" readonly placeholder="{{placeholder[1]}}" :value="titles[1]">
	//                 </div>
	//             </div>
	//         </div>
	//     </div>
	//     <ks-dater-range v-show="show" v-on:change="change" :range_dater="range"></ks-dater-range> 
	// </div>
	// </template>
	// <script type="text/javascript">
	exports.default = {
	    VERSION: '1.0.0',
	    mixins: [_props2.default],
	    components: {
	        'ks-dater-range': _daterRange2.default
	    },
	    props: {
	        range: {
	            type: Array,
	            default: function _default() {
	                return [];
	            }
	        },
	        placeholder: {
	            coerce: function coerce(val) {
	                val = val || '';
	                if (Array.isArray(val)) return val;
	                if (~val.indexOf(',')) return val.split(',');
	                return [val];
	            }
	        }
	    },
	    data: function data() {
	        return {
	            show: false
	        };
	    },

	    computed: {
	        titles: function titles() {
	            return this.range || [];
	        }
	    },
	    methods: {
	        close: function close() {
	            this.show = false;
	        },
	        isContains: function isContains(e) {
	            if (this.$el && !this.$el.contains(e.target)) {
	                this.close();
	            }
	        },
	        change: function change(range) {
	            // console.log(range)
	            this.range = range;
	            range.length == 2 && this.$emit('change', range);
	        }
	    },
	    ready: function ready() {
	        document.addEventListener('click', this.isContains, false);
	    },
	    beforeDestroy: function beforeDestroy() {
	        document.removeEventListener('click', this.isContains, false);
	    }
	};
	// </script>

/***/ },
/* 1036 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KsDaterMultiPicker\" :class=\"{'readonly':readonly}\" cid=\"KsDaterMultiPicker\">\n    <div class=\"KsDaterMultiPicker-input\" v-on:mouseup=\"show=!show\">\n        <div class=\"ks-col-auto date-icon\"><i class=\"icon\">&#xe615;</i></div>\n        <div class=\"ks-col\">\n            <div class=\"ks-row-auto\">\n                <div class=\"ks-col\">\n                    <input type=\"text\" readonly placeholder=\"{{placeholder[0]}}\" :value=\"titles[0]\">\n                </div>\n                <i class=\"icon ks-col-auto scope-icon\">&#xe677;</i>\n                <div class=\"ks-col\">\n                    <input type=\"text\" readonly placeholder=\"{{placeholder[1]}}\" :value=\"titles[1]\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <ks-dater-range v-show=\"show\" v-on:change=\"change\" :range_dater=\"range\"></ks-dater-range> \n</div>\n";

/***/ },
/* 1037 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(1038)
	__vue_script__ = __webpack_require__(1040)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsDropChoose/src/Store.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(1041)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsDropChoose/src/Store.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1038 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(1039);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Store.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Store.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 1039 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.KsStoreClick .KsStoreClick-input {\n  font-family: PingFang SC,Arial,\"\\82F9\\65B9\",\"\\5FAE\\8F6F\\96C5\\9ED1\";\n  display: inline-block;\n  padding: 0 10px;\n  height: 34px;\n  font-size: 13px;\n  color: #444444;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #c8c8c8;\n  border-radius: 3px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  box-sizing: border-box; }\n  .KsStoreClick .KsStoreClick-input:focus {\n    border-color: #00BCD4;\n    outline: 0; }\n\n.KsStoreClick .KsStoreClick-input {\n  height: 34px;\n  line-height: 34px;\n  font-size: 13px; }\n\n.KsStoreClick {\n  padding: 10px; }\n  .KsStoreClick .radiofir {\n    position: relative; }\n  .KsStoreClick .p-l10 {\n    padding-left: 10px; }\n  .KsStoreClick .KsStore {\n    position: absolute;\n    top: 40px;\n    left: 0;\n    right: 0;\n    z-index: 10; }\n  .KsStoreClick .iconup {\n    position: absolute;\n    right: 10px;\n    top: 15px;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    border-top: 7px solid #bfcbd9;\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s; }\n  .KsStoreClick .icondown {\n    position: absolute;\n    right: 10px;\n    top: 15px;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    border-top: 7px solid #bfcbd9;\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s; }\n\n.KsStoreClick .full, .KsStore .full {\n  width: 100%; }\n\n.KsStoreClick .perstore, .KsStore .perstore {\n  border: 1px solid #efefef; }\n\n.KsStoreClick .checkboxall, .KsStore .checkboxall {\n  margin-right: 0px;\n  margin-left: 0px;\n  padding: 0px 15px;\n  background: #fff;\n  line-height: 40px;\n  cursor: pointer; }\n  .KsStoreClick .checkboxall input[type=checkbox], .KsStore .checkboxall input[type=checkbox] {\n    width: 18px;\n    height: 18px;\n    vertical-align: middle;\n    margin-top: -3px; }\n\n.KsStoreClick .checkboxwhole, .KsStore .checkboxwhole {\n  margin-right: 0px;\n  margin-left: 0px;\n  padding: 0px 15px;\n  background: #fff; }\n\n.KsStoreClick .whole, .KsStore .whole {\n  border-top: 1px dashed #efefef;\n  line-height: 40px; }\n  .KsStoreClick .whole:first-child, .KsStore .whole:first-child {\n    border-top: 0px; }\n\n.KsStoreClick input {\n  outline: none; }\n\n.KsStore {\n  overflow: scroll; }\n", ""]);

	// exports


/***/ },
/* 1040 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof2 = __webpack_require__(70);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>  
	//     <div class="KsStore" 
	//         :style="max_height | filter_style min_width">
	//         <div class="perstore ">
	//             <div v-if="is_havechecked" class="checkboxall">
	//                      <input type="checkbox" 
	//                      @change = "checkAll()"
	//                      v-model = "allchecked">
	//                      <span>全选</span>
	//             </div>
	//             <div class="checkboxwhole">
	//                 <div class="whole" v-show="!list.length && list.xhr">
	//                     您还未配置门店~
	//                 </div>
	//
	//                 <div class="checkbox1 whole" v-for="t in list">
	//                   <label>
	//                     <!-- <input type="checkbox" name="" :value="3" v-model="[3,4]"> -->
	//                     <!-- {{checkeds}} -->
	//                     <input type="checkbox" :value="t.id" v-model="checkeds">
	//                     <span class="wholetext" v-text="t.name"></span>
	//                     <span class="wholeaddress" v-text="t.addr"></span>
	//                   </label>
	//                 </div>
	//
	//             </div>
	//         </div>
	//     </div>
	// </template>  
	//
	// <script type="text/javascript">

	exports.default = {
	    props: {
	        store_part: {
	            // toWay:true,
	            type: Object,
	            coerce: function coerce(val) {
	                if (!val) {
	                    val = {
	                        choose_store: []
	                    };
	                }
	                return val;
	            }
	        },
	        is_havechecked: {
	            type: Boolean,
	            default: false
	        },
	        verify: {
	            type: Boolean,
	            default: false
	        },
	        // change后回调钩子
	        changeCb: {},
	        max_height: {
	            type: Number
	        },
	        min_width: {
	            type: Number
	        },
	        list: {
	            type: Array
	        }
	    },
	    data: function data() {
	        return {
	            checkeds: [],
	            allchecked: false
	        };
	    },

	    filters: {
	        filter_style: function filter_style(height, width) {

	            if (height && !width) {
	                return {
	                    'max-height': this.max_height + 'px'
	                };
	            } else if (!height && width) {
	                return {
	                    'min-width': this.min_width + 'px'
	                };
	            } else if (height && width) {
	                return {
	                    'max-height': this.max_height + 'px',
	                    'min-width': this.min_width + 'px'
	                };
	            } else {
	                return;
	            }
	        }
	    },
	    watch: {
	        checkeds: function checkeds(val) {
	            this.watch_checkeds(val);
	            this.verify = !!val.length;
	        },
	        store_part: function store_part(val) {
	            this.checkeds = val.choose_store;
	        },
	        list: function list(_list) {
	            this.list = _list;
	            var val = this.store_part;
	            //直接输数组
	            if ((0, _typeof3.default)(val.choose_store[0]) != 'object') {
	                this.checkeds = val.choose_store;
	            } else {
	                this.checkeds = val.choose_store.map(function (t) {
	                    return t.id;
	                });
	            }
	        }
	    },
	    methods: {
	        watch_checkeds: function watch_checkeds(val) {
	            if (val.length == this.list.length) {
	                this.allchecked = true;
	            } else {
	                this.allchecked = false;
	            }

	            var list = this.list.filter(function (t) {
	                if (~val.indexOf(t.id)) {
	                    return true;
	                }
	            }).map(function (arr) {
	                return {
	                    name: arr.name,
	                    id: arr.id
	                };
	            });
	            if (this.list.length && val) {
	                this.store_part.choose_store = list;
	            }

	            if (typeof this.changeCb == 'function') {
	                //console.log(this.$parse(this.list))
	                var index = this.$parse(this.list).map(function (item) {
	                    return item.id;
	                }).indexOf(val[val.length - 1]);

	                this.changeCb(index);
	            }
	        },
	        checkAll: function checkAll() {
	            var allstore = this.list.map(function (t) {
	                return t.id;
	            });

	            this.allchecked ? this.checkeds = allstore : this.checkeds = [];
	        }
	    },
	    ready: function ready() {
	        //console.log(this.list)
	        //this.list = list
	    }
	};
	// </script>  
	// <style lang="scss">
	//   @import "../styles/Store";
	// </style>

/***/ },
/* 1041 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KsStore\" \n    :style=\"max_height | filter_style min_width\">\n    <div class=\"perstore \">\n        <div v-if=\"is_havechecked\" class=\"checkboxall\">\n                 <input type=\"checkbox\" \n                 @change = \"checkAll()\"\n                 v-model = \"allchecked\">\n                 <span>全选</span>\n        </div>\n        <div class=\"checkboxwhole\">\n            <div class=\"whole\" v-show=\"!list.length && list.xhr\">\n                您还未配置门店~\n            </div>\n      \n            <div class=\"checkbox1 whole\" v-for=\"t in list\">\n              <label>\n                <!-- <input type=\"checkbox\" name=\"\" :value=\"3\" v-model=\"[3,4]\"> -->\n                <!-- {{checkeds}} -->\n                <input type=\"checkbox\" :value=\"t.id\" v-model=\"checkeds\">\n                <span class=\"wholetext\" v-text=\"t.name\"></span>\n                <span class=\"wholeaddress\" v-text=\"t.addr\"></span>\n              </label>\n            </div>\n\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 1042 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(1043)
	__vue_script__ = __webpack_require__(1045)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsDropChoose/src/StoreClick.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(1046)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsDropChoose/src/StoreClick.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1043 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(1044);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./StoreClick.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./StoreClick.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 1044 */
1039,
/* 1045 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Store = __webpack_require__(1037);

	var _Store2 = _interopRequireDefault(_Store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    components: {
	        'store': _Store2.default
	    },
	    props: {
	        store_part: {
	            // toWay:true,
	            type: Object,
	            coerce: function coerce(val) {
	                if (!val) {
	                    val = {
	                        choose_store: []
	                    };
	                }
	                return val;
	            }
	        },
	        is_havechecked: {
	            type: Boolean,
	            default: false
	        },
	        // change后回调钩子
	        changeCb: {},
	        max_height: {
	            type: Number
	        },
	        min_width: {
	            type: Number
	        },
	        store_list_show: {
	            type: Boolean,
	            default: false
	        },
	        list: {
	            type: Array
	        }
	    },
	    data: function data() {
	        return {
	            choose_part: []
	        };
	    },

	    filters: {
	        filter_name: function filter_name(val) {
	            var choose_part = [];
	            if (val.choose_store.length) {
	                val.choose_store.forEach(function (k) {
	                    choose_part.push(k.name);
	                });
	            }
	            return choose_part.join(' , ');
	        }
	    },
	    methods: {
	        clickinput: function clickinput() {
	            //debugger
	            this.store_list_show = !this.store_list_show;
	        }
	    },
	    ready: function ready() {
	        var _this = this;

	        window.addEventListener('click', function (e) {
	            if (_this.$els.name == null) return;
	            if (!_this.$els.name.contains(e.target)) {
	                _this.store_list_show = false;
	            }
	        });
	    }
	};
	// </script>  
	// <style lang="scss">
	//   @import "../styles/Store";
	// </style>
	// <template>  
	// <div class="KsStoreClick"  v-el:name>            
	//     <div class="radiofir ">
	//             <i :class="store_list_show ? 'icondown' : 'iconup'"></i>
	//             <input type="text" class="KsStoreClick-input full" 
	//                 @click="clickinput()" 
	//                 readonly="readonly"
	//                 value="{{store_part | filter_name}}"
	//                 />
	//                 <store class="store_pos"
	//                     v-show="store_list_show"
	//                     :store_part.sync = "store_part"
	//                     :list.sync = "list"
	//                     :is_havechecked = "is_havechecked"
	//                     :max_height = "max_height"
	//                     :min_width = "min_width"></store>
	//     </div>
	// </div>
	// </template>  
	//
	// <script type="text/javascript">

/***/ },
/* 1046 */
/***/ function(module, exports) {

	module.exports = "  \n<div class=\"KsStoreClick\"  v-el:name>            \n    <div class=\"radiofir \">\n            <i :class=\"store_list_show ? 'icondown' : 'iconup'\"></i>\n            <input type=\"text\" class=\"KsStoreClick-input full\" \n                @click=\"clickinput()\" \n                readonly=\"readonly\"\n                value=\"{{store_part | filter_name}}\"\n                />\n                <store class=\"store_pos\"\n                    v-show=\"store_list_show\"\n                    :store_part.sync = \"store_part\"\n                    :list.sync = \"list\"\n                    :is_havechecked = \"is_havechecked\"\n                    :max_height = \"max_height\"\n                    :min_width = \"min_width\"></store>\n    </div>\n</div>\n";

/***/ },
/* 1047 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(1048)
	__vue_script__ = __webpack_require__(1050)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsSearch/src/Search.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(1051)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsSearch/src/Search.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1048 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(1049);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Search.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Search.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 1049 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.KsSearch {\n  position: relative;\n  width: 100%;\n  z-index: 999; }\n  .KsSearch input {\n    width: 100%; }\n  .KsSearch .SearchIcon {\n    position: absolute;\n    top: 50%;\n    right: 8px;\n    margin-top: -8px;\n    font-size: 16px;\n    color: #444;\n    cursor: pointer; }\n    .KsSearch .SearchIcon:hover {\n      color: rgba(65, 3, 253, 0.7); }\n  .KsSearch .SearchResult {\n    position: absolute;\n    top: 33px;\n    left: 0;\n    width: 100%;\n    box-sizing: border-box; }\n    .KsSearch .SearchResult ul {\n      max-height: 250px;\n      width: 100%;\n      box-sizing: border-box;\n      border: 1px solid #00bcd4;\n      border-radius: 3px;\n      overflow-y: scroll; }\n      .KsSearch .SearchResult ul li {\n        background: #fff;\n        cursor: pointer;\n        height: 25px;\n        line-height: 25px;\n        padding-left: 10px; }\n        .KsSearch .SearchResult ul li:hover {\n          color: #fff;\n          background: #00bcd4; }\n\n.KsSearch input {\n  font-family: PingFang SC, Arial, \"\\82F9\\65B9\", \"\\5FAE\\8F6F\\96C5\\9ED1\";\n  padding: 0 10px;\n  height: 35px;\n  font-size: 13px;\n  color: #444444;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #c8c8c8;\n  border-radius: 3px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  box-sizing: border-box; }\n  .KsSearch input:focus {\n    border-color: #00BCD4;\n    outline: 0; }\n", ""]);

	// exports


/***/ },
/* 1050 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="KsSearch ks-col">
	//         <input type="text" class="input"
	//                 v-model="keywords"
	//                 :disabled="disabled"
	//                 :placeholder="placeholder"
	//                 :debounce="debounce"
	//                 >
	//         <a class="icon SearchIcon" @click="getList($event)" v-if="!disabled">&#xe617;</a>
	//         <div class="SearchResult" v-show="resultShow">
	//             <ul>
	//                 <template v-if="fuzzydata.length >= 1">
	//                     <template v-if="datalabel == 'name'">
	//                         <li v-for="item in fuzzydata" @click="selectItem($event)" :data-backCode="item.backCode"
	//                             :data-channelCode="item.channelCode" :data-key="item.key" :data-id="item.id">{{item.name}}
	//                         </li>
	//                     </template>
	//                     <template v-if="datalabel == 'label'">
	//                         <li v-for="item in fuzzydata" @click="selectItem($event)" :data-backCode="item.backCode"
	//                             :data-channelCode="item.channelCode" :data-key="item.key" :data-id="item.id">{{item.label}}
	//                         </li>
	//                     </template>
	//                     <template v-if="datalabel == 'channelName'">
	//                         <li v-for="item in fuzzydata" @click="selectItem($event)" :data-backCode="item.backCode"
	//                             :data-channelCode="item.channelCode" :data-key="item.key" :data-id="item.id">{{item.channelName}}
	//                         </li>
	//                     </template>
	//                 </template>
	//                 <template v-else>
	//                     <li @click="selectItem($event)">当前无搜索结果</li>
	//                 </template>
	//             </ul>
	//         </div>
	//     </div>
	// </template>
	//
	// <script>
	exports.default = {
	    props: {
	        disabled: { type: Boolean, default: false },
	        placeholder: { type: String, default: '输入关键词搜索' },
	        resultattr: { type: String, default: 'key' },
	        fuzzydata: { type: Array },
	        datalabel: { type: String, default: 'label' },
	        debounce: { type: Number, default: 500 }
	    },
	    ready: function ready() {
	        var _this = this;

	        document.addEventListener('click', function (e) {
	            if (_this.$el && !_this.$el.contains(e.target)) {
	                _this.resultShow = false;
	            }
	        }, false);
	    },
	    data: function data() {
	        return {
	            resultShow: false,
	            keywords: ''
	        };
	    },

	    methods: {
	        getList: function getList() {

	            this.resultShow = true;

	            this.$emit('actionsearch', this.keywords);
	        },
	        selectItem: function selectItem(event) {

	            this.resultShow = false;

	            var e = window.event || event;
	            var temp = e.target ? e.target : e.srcElement;
	            if (temp.innerText == '当前无搜索结果') return;
	            this.keywords = temp.innerText;

	            this.$emit('actionselect', temp.getAttribute('data-' + this.resultattr), temp.innerText);
	        }
	    },
	    watch: {
	        keywords: function keywords() {
	            this.getList();
	        }
	    }
	};
	// </script>
	//
	// <style lang="scss">
	//     @import "../styles/Search"
	// </style>

/***/ },
/* 1051 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KsSearch ks-col\">\n    <input type=\"text\" class=\"input\"\n            v-model=\"keywords\"\n            :disabled=\"disabled\"\n            :placeholder=\"placeholder\"\n            :debounce=\"debounce\"\n            >\n    <a class=\"icon SearchIcon\" @click=\"getList($event)\" v-if=\"!disabled\">&#xe617;</a>\n    <div class=\"SearchResult\" v-show=\"resultShow\">\n        <ul>\n            <template v-if=\"fuzzydata.length >= 1\">\n                <template v-if=\"datalabel == 'name'\">\n                    <li v-for=\"item in fuzzydata\" @click=\"selectItem($event)\" :data-backCode=\"item.backCode\"\n                        :data-channelCode=\"item.channelCode\" :data-key=\"item.key\" :data-id=\"item.id\">{{item.name}}\n                    </li>\n                </template>\n                <template v-if=\"datalabel == 'label'\">\n                    <li v-for=\"item in fuzzydata\" @click=\"selectItem($event)\" :data-backCode=\"item.backCode\"\n                        :data-channelCode=\"item.channelCode\" :data-key=\"item.key\" :data-id=\"item.id\">{{item.label}}\n                    </li>\n                </template>\n                <template v-if=\"datalabel == 'channelName'\">\n                    <li v-for=\"item in fuzzydata\" @click=\"selectItem($event)\" :data-backCode=\"item.backCode\"\n                        :data-channelCode=\"item.channelCode\" :data-key=\"item.key\" :data-id=\"item.id\">{{item.channelName}}\n                    </li>\n                </template>\n            </template>\n            <template v-else>\n                <li @click=\"selectItem($event)\">当前无搜索结果</li>\n            </template>\n        </ul>\n    </div>\n</div>\n";

/***/ },
/* 1052 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(1053)
	__vue_script__ = __webpack_require__(1055)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsDialogChoose/src/KsDialogChoose.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(1066)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsDialogChoose/src/KsDialogChoose.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1053 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(1054);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./KsDialogChoose.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./KsDialogChoose.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 1054 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.KsDialogChoose .KsDialogChoose-input {\n  font-family: PingFang SC,Arial,\"\\82F9\\65B9\",\"\\5FAE\\8F6F\\96C5\\9ED1\";\n  display: inline-block;\n  padding: 0 10px;\n  height: 34px;\n  font-size: 13px;\n  color: #444444;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #c8c8c8;\n  border-radius: 3px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  box-sizing: border-box; }\n  .KsDialogChoose .KsDialogChoose-input:focus {\n    border-color: #00BCD4;\n    outline: 0; }\n\n.KsDialogChoose .KsDialogChoose-input {\n  height: 34px;\n  line-height: 34px;\n  font-size: 13px; }\n\n.KsDialogChoose .radiofir {\n  position: relative; }\n  .KsDialogChoose .radiofir .full {\n    width: 100%; }\n\n.KsDialogChoose .store_pos {\n  position: absolute;\n  top: 40px;\n  left: 0;\n  right: 0;\n  z-index: 10;\n  overflow: scroll; }\n\n.KsDialogChoose ul, .KsList ul {\n  overflow: hidden;\n  margin-top: 20px; }\n  .KsDialogChoose ul li, .KsList ul li {\n    margin-right: 10px;\n    margin-bottom: 20px;\n    float: left;\n    cursor: pointer; }\n    .KsDialogChoose ul li span, .KsList ul li span {\n      padding: 5px 10px;\n      background-color: #f5f5f5;\n      display: block;\n      border-radius: 2px;\n      border: 1px solid #f5f5f5; }\n    .KsDialogChoose ul li.check span, .KsList ul li.check span {\n      color: #2196F3;\n      background: #FFFFFF;\n      border: 1px solid #2196F3; }\n\n.KsDialogChoose .txtr {\n  text-align: right; }\n\n.KsDialogChoose .btngroup .mr-10 {\n  margin-right: 10px; }\n\n.KsDialogChoose .btngroup .mt-20 {\n  margin-top: 20px; }\n\n.KsDialogChoose .btngroup .checkall {\n  margin-right: 20px;\n  font-family: PingFangSC-Regular;\n  font-size: 13px;\n  color: #2196F3;\n  line-height: 13px;\n  cursor: pointer; }\n\n.KsDialogChoose .btngroup .reset {\n  margin-right: 10px;\n  font-family: PingFangSC-Regular;\n  font-size: 13px;\n  color: #2196F3;\n  line-height: 13px;\n  cursor: pointer; }\n\n.KsDialogChoose .btngroup .errortxt {\n  float: left;\n  color: red; }\n", ""]);

	// exports


/***/ },
/* 1055 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _stringify = __webpack_require__(65);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _ListStore = __webpack_require__(1056);

	var _ListStore2 = _interopRequireDefault(_ListStore);

	var _KsButton = __webpack_require__(538);

	var _KsButton2 = _interopRequireDefault(_KsButton);

	var _KsDialogProgram = __webpack_require__(670);

	var _KsDialogProgram2 = _interopRequireDefault(_KsDialogProgram);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    props: {
	        list: {
	            type: Array
	        },
	        sid: {
	            type: Array
	        },
	        errorInfo: {
	            type: String,
	            default: '*您尚未选择门店'
	        },
	        typeMate: {
	            type: String,
	            default: 'id'
	        },
	        nameMate: {
	            type: String,
	            default: 'name'
	        }
	    },
	    components: {
	        KsDialogProgram: _KsDialogProgram2.default,
	        KsButton: _KsButton2.default,
	        ListStore: _ListStore2.default
	    },
	    data: function data() {
	        return {
	            is_show: false,
	            width: 600,
	            total: 0,
	            showtxt: '',
	            onestorename: '',
	            listparse: [],
	            errorshow: false
	        };
	    },

	    methods: {
	        //关闭弹出层
	        close_dialog: function close_dialog() {
	            //debugger
	            this.total = 0;
	            this.is_show = false;
	            this.list = [].concat(JSON.parse((0, _stringify2.default)(this.listparse)));
	            //console.log("close")
	            var sid = this.getId();

	            if (sid.length != 0) {
	                this.sid = sid;
	            } else {
	                this.sid = [];
	            }
	            //console.log(this.sid)
	            this.$emit('change', this.sid);
	        },

	        //点击input框
	        clickinput: function clickinput() {
	            this.is_show = true;
	        },

	        //获取子传给父的sid,onchange事件
	        getsid: function getsid(val) {
	            this.sid = val;
	            this.sid.length == 0 ? this.errorshow = true : this.errorshow = false;
	        },

	        // 点击保存粗发外部事件获取已经选中的sid
	        save: function save() {
	            //this.look()
	            if (this.total == 0) {
	                this.errorshow = true;
	            } else {
	                this.errorshow = false;
	                this.is_show = false;
	                this.listparse = [].concat(JSON.parse((0, _stringify2.default)(this.list)));
	            }
	            this.$emit('change', this.getId());
	        },

	        //获取已经选中id
	        getId: function getId() {
	            var _this = this;

	            var listarr = [];
	            this.list.forEach(function (t) {
	                if (t.ischecked) {
	                    listarr.push(t[_this.nameMate]);
	                }
	            });

	            return listarr;
	        },

	        // 点击重置
	        reset: function reset() {
	            this.total = 0;
	            this.list.forEach(function (t) {
	                t.ischecked = false;
	            });
	            this.sid = [];
	        },

	        // 点击全选
	        checkall: function checkall() {
	            this.total = this.list.length;
	            this.list.forEach(function (t) {
	                t.ischecked = true;
	            });
	            this.sid = this.getId();
	            this.errorshow = false;
	        },

	        //input显示内容
	        inputShowTxt: function inputShowTxt() {
	            // switch(this.total){
	            //     0: this.showtxt = '';break;
	            //     1: this.showtxt = this.onestorename;break;
	            //     this.list.length: this.showtxt = '全部门店';break;
	            //     default:this.showtxt = '共有'+ this.total +'家门店';break;
	            // }
	            var total = '';
	            if (this.total == 1) {
	                total = this.onestorename;
	            } else if (this.total == 0) {
	                total = '';
	            } else if (this.total == this.list.length) {
	                total = '全部门店';
	            } else {
	                total = '共有' + this.total + '家门店';
	            }

	            this.showtxt = total;
	        }
	    },
	    watch: {
	        sid: function sid(val) {
	            var _this2 = this;

	            //console.log("sid")

	            this.total = 0;
	            this.list.forEach(function (t) {
	                if (t.ischecked) {
	                    _this2.total++;
	                    _this2.onestorename = t[_this2.typeMate];
	                }
	            });

	            this.inputShowTxt();

	            this.total == 0 ? this.errorshow = true : this.errorshow = false;
	        },
	        list: function list(val) {
	            var _this3 = this;

	            //console.log('list')
	            //var total = ''

	            this.total = 0;

	            if (this.sid) {
	                val.forEach(function (t) {
	                    _this3.sid.forEach(function (item) {

	                        if (t[_this3.typeMate] == item) {
	                            t.ischecked = true;
	                            _this3.total++;
	                            _this3.onestorename = t.name;
	                        }
	                    });
	                });
	            }
	            //console.log(this.typeMate)

	            //this.sidchange = this.sid
	            //this.look()
	            this.inputShowTxt();
	            //console.log(this.total)
	            this.errorshow = false;
	            this.listparse = [].concat(JSON.parse((0, _stringify2.default)(val)));
	        }
	    },
	    ready: function ready() {
	        //console.log(this.typeMate)
	    }
	};
	// </script>  
	// <style lang="scss">
	//   @import "../styles/KsDialogChoose";
	// </style>
	// <template>  
	// <div class="KsDialogChoose">            
	//     <div class="radiofir ">
	//         <input type="text" class="KsDialogChoose-input full" 
	//             @click="clickinput()" 
	//             readonly="readonly"
	//             v-model="showtxt"
	//             />
	//     </div>
	//     <ks-dialog-program  
	//         :title="'请选择交易门店'" 
	//         :show="is_show" 
	//         :cb-close="close_dialog"
	//         :width = "width" >
	//         <div class="trade_store">
	//             <list-store
	//                 :list = "list"
	//                 :sid.sync = "sid"
	//                 :type-mate = "typeMate"
	//                 :name-mate = "nameMate">
	//                 <!-- @change = getsid -->
	//             </list-store>
	//             <div class="txtr btngroup">
	//                 <span class="errortxt" v-show = "errorshow">{{errorInfo}}</span>
	//                 <span class="reset" @click="reset()">重选</span>
	//                 <span class="checkall" @click="checkall()">全选</span>
	//                 <ks-button :ghost="true" type="other" style="margin-right: 10px"
	//                     @click="close_dialog">取消</ks-button>
	//                 <ks-button :type="'primary'"
	//                     @click="save()">确认</ks-button>
	//             </div>
	//         </div>
	//     </ks-dialog-program>
	// </div>
	// </template>  
	//
	// <script type="text/javascript">

/***/ },
/* 1056 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(1057)
	__vue_script__ = __webpack_require__(1059)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsDialogChoose/src/ListStore.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(1060)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsDialogChoose/src/ListStore.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1057 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(1058);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ListStore.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ListStore.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 1058 */
1054,
/* 1059 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template> 
	// <div class="KsList">
	// 	<ul>
	// 	    <li v-for = "i in list" 
	// 	        :class="i.ischecked && 'check'"
	// 	        @click="choosestore($index)">
	// 	        <span>{{i[nameMate]}}</span>
	// 	        <i></i>
	// 	    </li>
	// 	</ul>
	// </div> 
	// </template>
	// <script type="text/javascript">  
	exports.default = {
	    props: {
	        list: {
	            type: Array
	        },
	        sid: {
	            type: Array
	        },
	        typeMate: {
	            type: String,
	            default: 'id'
	        },
	        nameMate: {
	            type: String,
	            default: 'name'
	        }
	    },
	    methods: {
	        choosestore: function choosestore(index) {
	            var _this = this;

	            //debugger
	            //t.ischecked = !t.ischecked
	            this.list[index].ischecked = !this.list[index].ischecked;
	            //console.log(this.sid)
	            var listarr = [];
	            this.list.forEach(function (t) {
	                if (t.ischecked) {
	                    listarr.push(t[_this.typeMate]);
	                }
	            });
	            this.sid = listarr;

	            this.$emit('change', listarr);
	        }
	    },
	    watch: {
	        list: function list(val) {
	            var _this2 = this;

	            if (this.sid) {
	                val.forEach(function (t) {
	                    _this2.sid.forEach(function (item) {

	                        if (t[_this2.typeMate] == item) {
	                            t.ischecked = true;
	                        }
	                    });
	                });
	            }
	        }
	    },
	    ready: function ready() {}
	};
	// </script>
	// <style lang="scss">
	//   @import "../styles/KsDialogChoose";
	// </style>

/***/ },
/* 1060 */
/***/ function(module, exports) {

	module.exports = " \n<div class=\"KsList\">\n\t<ul>\n\t    <li v-for = \"i in list\" \n\t        :class=\"i.ischecked && 'check'\"\n\t        @click=\"choosestore($index)\">\n\t        <span>{{i[nameMate]}}</span>\n\t        <i></i>\n\t    </li>\n\t</ul>\n</div> \n";

/***/ },
/* 1061 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(1062)
	__vue_script__ = __webpack_require__(1064)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsDialogProgram/src/Dialog.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(1065)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsDialogProgram/src/Dialog.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1062 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(1063);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Dialog.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Dialog.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 1063 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".dialog-mask {\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 100;\n  width: 100%;\n  height: 100%;\n  background: #222;\n  opacity: 0.3; }\n\n.dialog {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  z-index: 13;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  border-radius: 3px;\n  overflow: hidden;\n  min-width: 400px;\n  width: 40%;\n  background-color: #fff;\n  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);\n  z-index: 9999;\n  max-height: 90%;\n  overflow-y: auto; }\n\n.dialog-hd {\n  position: relative; }\n\n.dialog-hd a {\n  float: right;\n  position: absolute;\n  top: 20px;\n  right: 0; }\n\n.dialog-hd h2 {\n  padding: 20px 0; }\n\n.dialog-primary-title {\n  margin: 0 20px; }\n  .dialog-primary-title h2 {\n    color: #444;\n    font-size: 24px;\n    line-height: 24px;\n    border-bottom: 1px solid #e0e0e0; }\n  .dialog-primary-title a {\n    border-radius: 50%;\n    line-height: 1em;\n    width: 22px;\n    height: 22px;\n    line-height: 22px;\n    text-align: center;\n    color: #777; }\n  .dialog-primary-title a:hover {\n    background-color: #EF5350;\n    color: #fff; }\n  .dialog-primary-title a:active {\n    background-color: #E53935;\n    color: #fff; }\n  .dialog-primary-title i {\n    font-size: 10px; }\n\n.dialog-bd {\n  padding: 0 20px 20px; }\n", ""]);

	// exports


/***/ },
/* 1064 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div  v-show="show">
	//     <div class="dialog" :style="{width:width+'px'}">
	//         <div class="dialog-hd dialog-primary-title" v-show="!is_storetype">
	//             <h2 v-text="title"></h2>
	//             <a href="javascript:;" class="icon-clear" @click="_close()"><i class="icon">&#xe611;</i></a>
	//         </div>
	//
	//
	//         <div class="dialog-bd"  :class="{'dialog-bd':!is_storetype}">
	//             <slot></slot>
	//         </div>
	//
	//     </div>
	//     <div class="dialog-mask"></div>
	// </div>
	// </template>
	// <script type="text/javascript">
	exports.default = {
	    props: {
	        title: { type: String },
	        show: { type: Boolean, default: false },
	        width: { type: Number },
	        is_storetype: { type: Boolean, default: false },
	        cbClose: {}
	    },
	    data: function data() {
	        return {
	            align: {
	                points: ['cc', 'cc']
	            },
	            monitor: true
	        };
	    },

	    methods: {
	        _close: function _close() {
	            if (this.cbClose) {
	                this.cbClose('cancel');
	            }
	            this.show = false;
	        }
	    },
	    created: function created() {
	        this.title = this.title || '标题';
	    },
	    ready: function ready() {}
	};
	// </script>
	// <style lang="scss">
	//   @import "../styles/Dialog";
	// </style>

/***/ },
/* 1065 */
/***/ function(module, exports) {

	module.exports = "\n    <div  v-show=\"show\">\n    <div class=\"dialog\" :style=\"{width:width+'px'}\">\n        <div class=\"dialog-hd dialog-primary-title\" v-show=\"!is_storetype\">\n            <h2 v-text=\"title\"></h2>\n            <a href=\"javascript:;\" class=\"icon-clear\" @click=\"_close()\"><i class=\"icon\">&#xe611;</i></a>\n        </div>\n\n\n        <div class=\"dialog-bd\"  :class=\"{'dialog-bd':!is_storetype}\">\n            <slot></slot>\n        </div>\n        \n    </div>\n    <div class=\"dialog-mask\"></div>\n</div>\n";

/***/ },
/* 1066 */
/***/ function(module, exports) {

	module.exports = "  \n<div class=\"KsDialogChoose\">            \n    <div class=\"radiofir \">\n        <input type=\"text\" class=\"KsDialogChoose-input full\" \n            @click=\"clickinput()\" \n            readonly=\"readonly\"\n            v-model=\"showtxt\"\n            />\n    </div>\n    <ks-dialog-program  \n        :title=\"'请选择交易门店'\" \n        :show=\"is_show\" \n        :cb-close=\"close_dialog\"\n        :width = \"width\" >\n        <div class=\"trade_store\">\n            <list-store\n                :list = \"list\"\n                :sid.sync = \"sid\"\n                :type-mate = \"typeMate\"\n                :name-mate = \"nameMate\">\n                <!-- @change = getsid -->\n            </list-store>\n            <div class=\"txtr btngroup\">\n                <span class=\"errortxt\" v-show = \"errorshow\">{{errorInfo}}</span>\n                <span class=\"reset\" @click=\"reset()\">重选</span>\n                <span class=\"checkall\" @click=\"checkall()\">全选</span>\n                <ks-button :ghost=\"true\" type=\"other\" style=\"margin-right: 10px\"\n                    @click=\"close_dialog\">取消</ks-button>\n                <ks-button :type=\"'primary'\"\n                    @click=\"save()\">确认</ks-button>\n            </div>\n        </div>\n    </ks-dialog-program>\n</div>\n";

/***/ },
/* 1067 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(1068)
	__vue_script__ = __webpack_require__(1070)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsFloorSelect/src/Item.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(1071)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsFloorSelect/src/Item.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1068 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(1069);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Item.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Item.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 1069 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.KsItem .KsItem-input, .KsItemFloor .KsItem-input {\n  font-family: PingFang SC,Arial,\"\\82F9\\65B9\",\"\\5FAE\\8F6F\\96C5\\9ED1\";\n  display: inline-block;\n  padding: 0 10px;\n  height: 34px;\n  font-size: 13px;\n  color: #444444;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #c8c8c8;\n  border-radius: 3px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  box-sizing: border-box; }\n  .KsItem .KsItem-input:focus, .KsItemFloor .KsItem-input:focus {\n    border-color: #00BCD4;\n    outline: 0; }\n\n.KsItem .KsItem-input, .KsItemFloor .KsItem-input {\n  height: 34px;\n  line-height: 34px;\n  font-size: 13px; }\n\n.KsItemFloor {\n  border: 1px solid #C8C8C8;\n  border-radius: 2px; }\n  .KsItemFloor .full {\n    width: 100%; }\n  .KsItemFloor .turnright {\n    width: 40px;\n    text-align: center;\n    border-left: 1px solid #C8C8C8;\n    border-right: 1px solid #C8C8C8;\n    position: relative; }\n  .KsItemFloor .iconright {\n    position: absolute;\n    top: 18px;\n    right: 12px;\n    background-color: #26C6DA;\n    height: 2px;\n    width: 20px; }\n  .KsItemFloor .iconarrow {\n    position: absolute;\n    top: 14px;\n    right: 11px;\n    width: 8px;\n    height: 8px;\n    border-top: 2px solid #26C6DA;\n    border-right: 2px solid #26C6DA;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n  .KsItemFloor .iconup {\n    position: absolute;\n    right: 10px;\n    top: 11px;\n    width: 8px;\n    height: 8px;\n    border-left: 1px solid #C8C8C8;\n    border-bottom: 1px solid #C8C8C8;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s; }\n  .KsItemFloor .icondown {\n    position: absolute;\n    right: 10px;\n    top: 16px;\n    width: 8px;\n    height: 8px;\n    border-left: 1px solid #C8C8C8;\n    border-bottom: 1px solid #C8C8C8;\n    -webkit-transform: rotate(-225deg);\n            transform: rotate(-225deg);\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s; }\n\n.KsItem, .KsItemFloor {\n  position: relative; }\n  .KsItem ul, .KsItemFloor ul {\n    position: absolute;\n    top: 36px;\n    left: -1px;\n    border: 1px solid #C8C8C8;\n    border-radius: 2px;\n    max-height: 367px;\n    overflow-y: scroll;\n    z-index: 2;\n    background-color: #fff; }\n    .KsItem ul li, .KsItemFloor ul li {\n      line-height: 36px;\n      text-align: center;\n      width: 120px; }\n      .KsItem ul li span, .KsItemFloor ul li span {\n        font-family: PingFangSC-Regular;\n        font-size: 13px;\n        color: #444444; }\n      .KsItem ul li:hover, .KsItemFloor ul li:hover {\n        background-color: #F5F5F5;\n        cursor: pointer; }\n      .KsItem ul li.check, .KsItemFloor ul li.check {\n        background-color: #2196F3; }\n        .KsItem ul li.check span, .KsItemFloor ul li.check span {\n          color: #fff; }\n      .KsItem ul li.disabled, .KsItemFloor ul li.disabled {\n        background-color: #000;\n        opacity: 0.2;\n        cursor: not-allowed; }\n        .KsItem ul li.disabled span, .KsItemFloor ul li.disabled span {\n          color: #fff; }\n  .KsItem .KsItem-input, .KsItemFloor .KsItem-input {\n    border: 0;\n    background: none; }\n", ""]);

	// exports


/***/ },
/* 1070 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <div class="ks-col  KsItem"  
	//         v-el:floor
	//         @click="clickinput()" >
	//         <input type="text" class="KsItem-input full" 
	//             readonly="readonly"
	//             v-model="floor_value" />
	//         <i :class="floor_show ? 'icondown' : 'iconup'"></i>
	//         <ul v-show = "floor_show">
	//             <li 
	//                 v-for="item in floorlist"
	//                 :class="{
	//                     'check':ischeck == $index ,
	//                     'disabled': item.isdisabled ? true :false
	//                 }"
	//                 @click="choosefloor(item)">
	//                 <span>{{item.name }}</span>
	//                 <i></i>
	//             </li>
	//         </ul>
	//     </div>
	// </template>
	// <script type="text/javascript">
	exports.default = {
	    props: {
	        floor_value: {
	            type: String,
	            default: 'B1'
	        },
	        limit_before: {
	            type: String,
	            default: ''
	        },
	        limit_after: {
	            type: String,
	            default: ''
	        },
	        isdisabled: {
	            type: Boolean,
	            default: true
	        }
	    },
	    data: function data() {
	        return {
	            floorlist: [],
	            floorlistafter: [],
	            floor_show: false,
	            ischeck: -1
	        };
	    },

	    methods: {
	        clickinput: function clickinput() {
	            var _this = this;

	            if (!this.limit_before) {
	                this.floorlistafter.forEach(function (m) {
	                    m.isdisabled = false;
	                });
	            }
	            var isdisabledarray = [];
	            if (this.limit_after) {

	                this.floorlist = this.floorlistafter.concat();
	                this.floorlist.forEach(function (t, index) {
	                    if (t.name == _this.limit_after) {
	                        if (_this.isdisabled) {
	                            //console.log(index)
	                            //console.log(this.limit_after)
	                            for (var j = index + 1; j < _this.floorlist.length; j++) {
	                                _this.floorlist[j].isdisabled = true;
	                            }
	                        } else {
	                            _this.floorlist.splice(index + 1, _this.floorlist.length - 1);
	                        }
	                    }
	                });
	            }

	            this.floor_show = !this.floor_show;
	            if (this.floor_value) {
	                this.floorlist.forEach(function (t, index) {
	                    if (t.name == _this.floor_value) {
	                        _this.ischeck = index;
	                    }
	                });
	            }
	        },
	        choosefloor: function choosefloor(item) {
	            //this.floor_show = !this.floor_show
	            if (item.isdisabled) return;

	            this.floor_value = item.name;
	            if (this.limit_before) {
	                if (!~this.floor_value.indexOf('B')) {
	                    //有F---
	                    //有F-
	                    if (!~this.limit_before.indexOf('B')) {
	                        if (+this.floor_value.split('F')[1] > +this.limit_before.split('F')[1]) {
	                            this.limit_before = '';
	                        }
	                    } else {
	                        //有B-
	                        this.limit_before = '';
	                    }
	                } else {
	                    //有B---
	                    if (this.limit_before.indexOf('B') != -1) {
	                        //有B-
	                        if (+this.floor_value.split('B')[1] < +this.limit_before.split('B')[1]) {
	                            this.limit_before = '';
	                        }
	                    }
	                }
	            }
	        }
	    },
	    ready: function ready() {
	        var _this2 = this;

	        for (var i = 20; i >= 1; i--) {
	            this.floorlist.push({ name: 'F' + i, isdisabled: false });
	            this.floorlistafter.push({ name: 'F' + i, isdisabled: false });
	        }

	        for (var j = 1; j <= 5; j++) {
	            this.floorlist.push({ name: 'B' + j, isdisabled: false });
	            this.floorlistafter.push({ name: 'B' + j, isdisabled: false });
	        }

	        window.addEventListener('click', function (e) {
	            if (_this2.$els.floor == null) return;
	            if (!_this2.$els.floor.contains(e.target)) {
	                _this2.floor_show = false;
	            }
	        });
	    }
	};
	// </script>
	// <style lang="scss">
	//   @import "../styles/Floor";
	// </style>
	//

/***/ },
/* 1071 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ks-col  KsItem\"  \n    v-el:floor\n    @click=\"clickinput()\" >\n    <input type=\"text\" class=\"KsItem-input full\" \n        readonly=\"readonly\"\n        v-model=\"floor_value\" />\n    <i :class=\"floor_show ? 'icondown' : 'iconup'\"></i>\n    <ul v-show = \"floor_show\">\n        <li \n            v-for=\"item in floorlist\"\n            :class=\"{\n                'check':ischeck == $index ,\n                'disabled': item.isdisabled ? true :false\n            }\"\n            @click=\"choosefloor(item)\">\n            <span>{{item.name }}</span>\n            <i></i>\n        </li>\n    </ul>\n</div>\n";

/***/ },
/* 1072 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(1073)
	__vue_script__ = __webpack_require__(1075)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsFloorSelect/src/ItemFloor.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(1076)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsFloorSelect/src/ItemFloor.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1073 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(1074);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ItemFloor.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ItemFloor.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 1074 */
1069,
/* 1075 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Item = __webpack_require__(1067);

	var _Item2 = _interopRequireDefault(_Item);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    props: {
	        floor_begin: {
	            type: String,
	            default: ''
	        },
	        floor_end: {
	            type: String,
	            default: ''
	        },
	        isdisabled: {
	            type: Boolean,
	            default: false
	        }
	    },
	    components: {
	        item: _Item2.default
	    },
	    data: function data() {
	        return {
	            limit_before: this.floor_end,
	            limit_after: this.floor_begin
	        };
	    },

	    watch: {
	        floor_begin: function floor_begin(val) {
	            this.limit_after = val;
	        },
	        floor_end: function floor_end(val) {
	            this.limit_before = val;
	        },
	        limit_before: function limit_before(val) {
	            //debugger
	            this.floor_end = val;
	        },
	        limit_after: function limit_after(val) {
	            this.floor_begin = val;
	        }
	    },
	    methods: {},
	    ready: function ready() {}
	};
	// </script>
	// <style lang="scss">
	//   @import "../styles/Floor";
	// </style>
	// <template>
	//     <div class="KsItemFloor ks-row">
	//         <item
	//             :floor_value.sync = "floor_begin"
	//             :limit_before.sync = "limit_before"></item>
	//         <div class="ks-col turnright">
	//             <span class="iconright"></span>
	//             <span class="iconarrow"></span>
	//         </div>
	//
	//         <item
	//             :floor_value.sync = "floor_end"
	//             :limit_after.sync = "limit_after"
	//             :isdisabled.sync = "isdisabled"></item>
	//     </div>
	// </template>
	// <script type="text/javascript">

/***/ },
/* 1076 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KsItemFloor ks-row\">\n    <item\n        :floor_value.sync = \"floor_begin\"\n        :limit_before.sync = \"limit_before\"></item>\n    <div class=\"ks-col turnright\">\n        <span class=\"iconright\"></span>\n        <span class=\"iconarrow\"></span>\n    </div>\n    \n    <item\n        :floor_value.sync = \"floor_end\"\n        :limit_after.sync = \"limit_after\"\n        :isdisabled.sync = \"isdisabled\"></item>\n</div>\n";

/***/ },
/* 1077 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(1078)
	__vue_script__ = __webpack_require__(1080)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsAddTable/src/AddTableItem.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(1081)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsAddTable/src/AddTableItem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1078 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(1079);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./AddTableItem.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./AddTableItem.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 1079 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.AddTableItem .AddTableItem-input {\n  font-family: PingFang SC,Arial,\"\\82F9\\65B9\",\"\\5FAE\\8F6F\\96C5\\9ED1\";\n  display: inline-block;\n  padding: 0 10px;\n  height: 34px;\n  font-size: 13px;\n  color: #444444;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #c8c8c8;\n  border-radius: 3px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  box-sizing: border-box; }\n  .AddTableItem .AddTableItem-input:focus {\n    border-color: #00BCD4;\n    outline: 0; }\n\n.AddTableItem .AddTableItem-input {\n  height: 34px;\n  line-height: 34px;\n  font-size: 13px; }\n\n.AddTableItem .btn-group {\n  background: #E9F5FF;\n  padding: 20px; }\n  .AddTableItem .btn-group ul {\n    overflow: hidden;\n    display: inline-block; }\n    .AddTableItem .btn-group ul li {\n      background: #E9E9E9;\n      border-radius: 23px;\n      height: 24px;\n      line-height: 24px;\n      margin-right: 10px;\n      text-align: center;\n      float: left;\n      cursor: pointer;\n      margin-top: 10px; }\n      .AddTableItem .btn-group ul li span {\n        color: #999999;\n        padding: 3px 11px; }\n      .AddTableItem .btn-group ul li.check {\n        background: #2196F3; }\n        .AddTableItem .btn-group ul li.check span {\n          color: #fff;\n          padding: 3px 11px; }\n  .AddTableItem .btn-group .btn-add {\n    display: inline-block;\n    background: #4CAF50;\n    border-radius: 50%;\n    width: 24px;\n    height: 24px;\n    position: relative;\n    cursor: pointer; }\n    .AddTableItem .btn-group .btn-add:before {\n      position: absolute;\n      top: 11px;\n      left: 5px;\n      background: #fff;\n      content: '';\n      width: 14px;\n      height: 2px; }\n    .AddTableItem .btn-group .btn-add:after {\n      position: absolute;\n      left: 11px;\n      top: 5px;\n      background: #fff;\n      content: '';\n      height: 14px;\n      width: 2px; }\n\n.AddTableItem .top {\n  padding: 20px;\n  background: #E8F5FF; }\n  .AddTableItem .top .btn-input {\n    margin-bottom: 20px; }\n    .AddTableItem .top .btn-input .errormsg {\n      color: red;\n      margin: 10px 0; }\n    .AddTableItem .top .btn-input input {\n      border: none;\n      background: #D3DFE8;\n      border: 1px solid #D3DFE8;\n      color: #444444; }\n      .AddTableItem .top .btn-input input.disabled {\n        background: #FFFFFF;\n        border: 1px solid #C8C8C8;\n        border-radius: 2px;\n        border-radius: 2px;\n        font-size: 13px; }\n      .AddTableItem .top .btn-input input:focus {\n        background: #FFFFFF;\n        border: 1px solid #C8C8C8;\n        border-radius: 2px;\n        border-radius: 2px;\n        font-size: 13px; }\n    .AddTableItem .top .btn-input span {\n      margin-left: 10px;\n      cursor: pointer;\n      color: #C8C8C8; }\n  .AddTableItem .top .table-default {\n    margin-bottom: 6px; }\n    .AddTableItem .top .table-default ul {\n      overflow: hidden; }\n      .AddTableItem .top .table-default ul li {\n        border: 1px solid #DAE4ED;\n        border-radius: 2px;\n        margin-right: 10px;\n        margin-bottom: 20px;\n        float: left;\n        cursor: pointer; }\n        .AddTableItem .top .table-default ul li span {\n          font-size: 14px;\n          padding: 5px 10px;\n          color: #444444;\n          display: block; }\n        .AddTableItem .top .table-default ul li.alreadychoose {\n          background: #FFFFFF;\n          border-radius: 2px; }\n\n.AddTableItem .middle {\n  padding: 20px; }\n  .AddTableItem .middle .mb-20 {\n    margin-bottom: 20px; }\n  .AddTableItem .middle .title {\n    font-size: 13px;\n    color: #999999;\n    width: 53px;\n    height: 30px;\n    line-height: 30px;\n    text-align: right;\n    padding-right: 10px; }\n  .AddTableItem .middle ul {\n    display: inline-block; }\n    .AddTableItem .middle ul li {\n      background: #999999;\n      border-radius: 2px;\n      float: left;\n      margin-right: 10px; }\n      .AddTableItem .middle ul li span {\n        padding: 5px 10px;\n        color: #fff;\n        display: block;\n        cursor: pointer;\n        font-size: 14px; }\n      .AddTableItem .middle ul li.disabled {\n        background: #000;\n        opacity: 0.2; }\n        .AddTableItem .middle ul li.disabled span {\n          cursor: not-allowed; }\n\n.AddTableItem .bottom {\n  position: relative;\n  margin: 20px; }\n  .AddTableItem .bottom .tip {\n    height: 18px;\n    font-size: 13px;\n    color: #C8C8C8;\n    position: absolute;\n    bottom: 0;\n    left: 0; }\n  .AddTableItem .bottom .txtr {\n    text-align: right; }\n  .AddTableItem .bottom .btngroup .mr-10 {\n    margin-right: 10px; }\n  .AddTableItem .bottom .btngroup .mt-20 {\n    margin-top: 20px; }\n  .AddTableItem .bottom .btngroup .checkall {\n    margin-right: 20px;\n    font-size: 13px;\n    color: #2196F3;\n    line-height: 13px;\n    cursor: pointer; }\n  .AddTableItem .bottom .btngroup .reset {\n    margin-right: 20px;\n    font-family: PingFangSC-Regular;\n    font-size: 13px;\n    color: #2196F3;\n    line-height: 13px;\n    cursor: pointer; }\n", ""]);

	// exports


/***/ },
/* 1080 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stringify = __webpack_require__(65);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _KsButton = __webpack_require__(538);

	var _KsButton2 = _interopRequireDefault(_KsButton);

	var _KsDialogProgram = __webpack_require__(670);

	var _KsDialogProgram2 = _interopRequireDefault(_KsDialogProgram);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <div class="AddTableItem">
	//     <ks-dialog-program
	//       :show="is_show"
	//       :cb-close="close_dialog"
	//       :width="width"
	//       :is_storetype = "is_storetype">
	//       <div class="dialog-main" id = "dialog">
	//         <div class="btn-group">
	//           <ul>
	//             <li v-for="i in list"
	//                 @click="clicktablehead($index)"
	//                 :class="(showindex == $index) && 'check'">
	//               <span>{{i.title}}</span>
	//             </li>
	//             <li class="btn-add"
	//                 @click="addtablename()"
	//                 v-show = "addicon && list.length < 11"></li>
	//           </ul>
	//         </div>
	//         <div
	//           v-for = "listitem in list"
	//           v-show = "showindex == $index">
	//           <div class="top" >
	//             <div class="btn-input">
	//               <input type="text" class="AddTableItem-input"
	//                      v-model = "listitem.title"
	//                      @click = "modifyname($event,$index)"
	//                      @keyup.enter="savetablename($event,$index)">
	//               <span
	//                 @click="deletetable($index)"
	//                 v-show="$index != 0">删除当前分组</span>
	//             </div>
	//             <div class="table-default">
	//               <ul>
	//                 <li
	//                   v-for = "n in listitem.defaultlist"
	//                   :class = "n.ischeck && 'alreadychoose'"
	//                   @click="removedefault(n,$index)">
	//                   <span>{{n.name}}</span>
	//                 </li>
	//               </ul>
	//             </div>
	//           </div>
	//           <div class="middle" >
	//             <div class="ks-row mb-20" v-for="first in listitem.addlist">
	//               <div class="ks-col title">{{first.title}}</div>
	//               <ul class="ks-col">
	//                 <li
	//                   v-for="item in first.list_data"
	//                   :class="(item.isdisabled) && 'disabled'"
	//                   @click="adddefault(item,$index,first)">
	//                   <span>{{item.name}}</span>
	//                 </li>
	//               </ul>
	//             </div>
	//           </div>
	//           <div class="bottom" >
	//             <span class="tip">点击你需要的表格项添加或移除，也可以拖拽进行排序</span>
	//             <div class="txtr btngroup">
	//               <span class="reset" @click="reset($index)">重选</span>
	//               <span class="checkall" @click="checkall($index)">全选</span>
	//               <ks-button :ghost="true" type="other" style="margin-right: 10px"
	//                          @click="close_dialog">取消</ks-button>
	//               <ks-button :type="'primary'"
	//                          @click="savetable()">确认</ks-button>
	//             </div>
	//           </div>
	//         </div>
	//       </div>
	//     </ks-dialog-program>
	//   </div>
	// </template>
	// <script type="text/javascript">
	exports.default = {
	  components: {
	    KsDialogProgram: _KsDialogProgram2.default,
	    KsButton: _KsButton2.default
	  },
	  props: {
	    list: {
	      type: Array
	    },
	    checkalllist: {
	      type: Array
	    },
	    datasource: {
	      type: Object
	    },
	    is_show: {
	      type: Boolean,
	      default: false
	    },
	    width: {
	      type: Number
	    },
	    is_storetype: {
	      type: Boolean,
	      default: false
	    },
	    prefix: {
	      type: String
	    }
	  },
	  data: function data() {
	    return {
	      showindex: 0,
	      addicon: true,
	      tableindex: -1,
	      addIndex: -1
	    };
	  },

	  methods: {
	    //点击全部选择
	    checkall: function checkall(index) {
	      var data = JSON.parse((0, _stringify2.default)(this.checkalllist));
	      this.list[index].defaultlist = data;

	      this.list[index].addlist.forEach(function (t) {
	        t.list_data.forEach(function (i) {
	          i.isdisabled = true;
	        });
	      });
	    },

	    //重新选择
	    reset: function reset(index) {
	      var data = JSON.parse((0, _stringify2.default)(this.datasource.defaultlist));
	      this.list[index].defaultlist = data;
	      this.list[index].addlist.forEach(function (t) {
	        t.list_data.forEach(function (i) {
	          i.isdisabled = false;
	        });
	      });
	    },

	    //删除当前分组
	    deletetable: function deletetable(index) {
	      this.list.splice(index, 1);
	      this.showindex = index - 1;
	    },

	    //更改表头名字,点击input
	    modifyname: function modifyname(event, index) {
	      event.target.focus();
	    },

	    //不可更改表头名字,按下enter
	    savetablename: function savetablename(event, index) {
	      event.target.blur();
	    },

	    //点击表头
	    clicktablehead: function clicktablehead(index) {
	      this.showindex = index;
	    },

	    //保存表格
	    savetable: function savetable() {
	      var prefix = this.prefix + '_list';
	      if (!this.addicon) {
	        var data = JSON.parse(localStorage.getItem(prefix));
	        data[this.tableindex] = this.list[0];
	        localStorage.setItem(prefix, (0, _stringify2.default)(data));
	      } else {
	        localStorage.setItem(prefix, (0, _stringify2.default)(this.list));
	      }
	      //console.log(JSON.parse(localStorage.getItem('list')))
	      this.is_show = false;
	    },

	    //点击下面上去
	    adddefault: function adddefault(n, index, parent) {
	      if (n.isdisabled) {
	        return;
	      }
	      this.list[this.showindex].defaultlist.push({
	        title: parent.title,
	        id: n.id,
	        name: n.name,
	        ischeck: true
	      });

	      parent.list_data[index].isdisabled = true;
	    },

	    //点击上面撤销
	    removedefault: function removedefault(n, index) {
	      if (!n.title) {
	        return;
	      }
	      this.list[this.showindex].addlist.forEach(function (t, index) {
	        if (t.title == n.title) {
	          t.list_data.forEach(function (i) {
	            if (i.name == n.name) {
	              i.isdisabled = false;
	            }
	          });
	        }
	      });

	      this.list[this.showindex].defaultlist.splice(index, 1);
	    },

	    //点击增加一个表,+
	    addtablename: function addtablename(event) {
	      //var num = {1:"一",2:"二",3:"三",4:"四",5:"五",6:"六",7:"七",8:"八",9:"九",10:"十"}
	      var data = JSON.parse((0, _stringify2.default)(this.datasource));
	      //data.title = "自定义" + num[this.list.length]
	      data.title = "自定义表";
	      data.tableid = this.list.length;
	      this.list.push(data);
	      this.showindex = this.list.length - 1;
	    },
	    close_dialog: function close_dialog() {
	      this.is_show = false;
	    }
	  },
	  events: {
	    'show_dialog': function show_dialog(index) {

	      var prefix = this.prefix + '_list';
	      this.showindex = 0;
	      this.tableindex = index;
	      if (localStorage.getItem(prefix) != null) {
	        this.list = JSON.parse(localStorage.getItem(prefix));
	      }
	      if (index != -1) {
	        this.list = [JSON.parse((0, _stringify2.default)(this.list[index]))];
	        this.addicon = false;
	      } else {
	        this.addicon = true;
	      }
	      this.is_show = true;
	    }
	  },
	  watch: {
	    'list': function list(val) {
	      this.list = val;
	    }
	  },
	  ready: function ready() {}
	};
	// </script>
	// <style lang="scss">
	//   @import "../styles/AddTable";
	// </style>

/***/ },
/* 1081 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"AddTableItem\">\n  <ks-dialog-program\n    :show=\"is_show\"\n    :cb-close=\"close_dialog\"\n    :width=\"width\"\n    :is_storetype = \"is_storetype\">\n    <div class=\"dialog-main\" id = \"dialog\">\n      <div class=\"btn-group\">\n        <ul>\n          <li v-for=\"i in list\"\n              @click=\"clicktablehead($index)\"\n              :class=\"(showindex == $index) && 'check'\">\n            <span>{{i.title}}</span>\n          </li>\n          <li class=\"btn-add\"\n              @click=\"addtablename()\"\n              v-show = \"addicon && list.length < 11\"></li>\n        </ul>\n      </div>\n      <div\n        v-for = \"listitem in list\"\n        v-show = \"showindex == $index\">\n        <div class=\"top\" >\n          <div class=\"btn-input\">\n            <input type=\"text\" class=\"AddTableItem-input\"\n                   v-model = \"listitem.title\"\n                   @click = \"modifyname($event,$index)\"\n                   @keyup.enter=\"savetablename($event,$index)\">\n            <span\n              @click=\"deletetable($index)\"\n              v-show=\"$index != 0\">删除当前分组</span>\n          </div>\n          <div class=\"table-default\">\n            <ul>\n              <li\n                v-for = \"n in listitem.defaultlist\"\n                :class = \"n.ischeck && 'alreadychoose'\"\n                @click=\"removedefault(n,$index)\">\n                <span>{{n.name}}</span>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"middle\" >\n          <div class=\"ks-row mb-20\" v-for=\"first in listitem.addlist\">\n            <div class=\"ks-col title\">{{first.title}}</div>\n            <ul class=\"ks-col\">\n              <li\n                v-for=\"item in first.list_data\"\n                :class=\"(item.isdisabled) && 'disabled'\"\n                @click=\"adddefault(item,$index,first)\">\n                <span>{{item.name}}</span>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"bottom\" >\n          <span class=\"tip\">点击你需要的表格项添加或移除，也可以拖拽进行排序</span>\n          <div class=\"txtr btngroup\">\n            <span class=\"reset\" @click=\"reset($index)\">重选</span>\n            <span class=\"checkall\" @click=\"checkall($index)\">全选</span>\n            <ks-button :ghost=\"true\" type=\"other\" style=\"margin-right: 10px\"\n                       @click=\"close_dialog\">取消</ks-button>\n            <ks-button :type=\"'primary'\"\n                       @click=\"savetable()\">确认</ks-button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ks-dialog-program>\n</div>\n";

/***/ },
/* 1082 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(1083)
	__vue_script__ = __webpack_require__(1085)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsImage/src/KsImage.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(1086)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsImage/src/KsImage.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1083 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(1084);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./KsImage.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./KsImage.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 1084 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".ks-image-box {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 100; }\n  .ks-image-box .image-content {\n    position: fixed;\n    top: 54px;\n    left: 54px;\n    right: 54px;\n    bottom: 54px;\n    background: #444; }\n  .ks-image-box img {\n    max-width: 100%;\n    max-height: 100%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n  .ks-image-box i {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    width: 54px;\n    height: 54px;\n    text-align: center;\n    line-height: 54px;\n    color: #fff;\n    background: rgba(0, 0, 0, 0.25);\n    font-size: 33px;\n    cursor: pointer;\n    border-radius: 2px; }\n    .ks-image-box i:hover {\n      background: #f44336; }\n    .ks-image-box i:active {\n      background: #ea1c0d; }\n", ""]);

	// exports


/***/ },
/* 1085 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>  
	//     <div class="ks-image-box" v-show="show">
	//         <div class="image-content">
	//             <img :src="url">
	//             <i class="icon" @click="close">&#xe60d;</i>
	//         </div>
	//     </div>
	// </template>   
	//
	//
	// <script type="text/javascript">
	exports.default = {
	    props: {
	        show: { type: Boolean, default: false },
	        url: { type: String, default: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490777740832&di=29af36b1dddd1d1a6cf8848d27049175&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201510%2F03%2F20151003150321_EuYFh.jpeg" }
	    },
	    data: function data() {
	        return {};
	    },

	    methods: {
	        close: function close() {
	            this.show = false;
	            this.$emit('change', this.show);
	        }
	    }
	};
	// </script>
	//
	// <style lang="scss">
	//     @import "../styles/Image";
	// </style>

/***/ },
/* 1086 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ks-image-box\" v-show=\"show\">\n    <div class=\"image-content\">\n        <img :src=\"url\">\n        <i class=\"icon\" @click=\"close\">&#xe60d;</i>\n    </div>\n</div>\n";

/***/ },
/* 1087 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(1088)
	__vue_script__ = __webpack_require__(1090)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsImage/src/KsImgs.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(1091)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsImage/src/KsImgs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1088 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(1089);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-d19a38f4&scoped=true!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./KsImgs.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-d19a38f4&scoped=true!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./KsImgs.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 1089 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".opc[_v-d19a38f4] {\n  opacity: 0.6;\n  color: #fff;\n  cursor: pointer;\n  -webkit-transition: 0.5s;\n  z-index: 100; }\n\n.opc[_v-d19a38f4]:hover {\n  opacity: 1; }\n\n.img_box[_v-d19a38f4] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 100000;\n  overflow: scroll; }\n\n.ic[_v-d19a38f4] {\n  font-size: 30px;\n  position: absolute;\n  right: 10px;\n  top: 10px; }\n\n.tran[_v-d19a38f4] {\n  -webkit-transition: .5s;\n  transition: .5s; }\n\n.box[_v-d19a38f4] {\n  position: relative;\n  height: 100%; }\n\nimg[_v-d19a38f4] {\n  width: 35%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%); }\n\n.but[_v-d19a38f4] {\n  width: 100%;\n  position: absolute;\n  top: 50%; }\n  .but i[_v-d19a38f4] {\n    font-size: 100px;\n    position: absolute;\n    -webkit-transform: translateY(-50%); }\n  .but .l[_v-d19a38f4] {\n    left: 10%;\n    background-color: rgba(0, 0, 0, 0.5); }\n  .but .r[_v-d19a38f4] {\n    right: 10%;\n    background-color: rgba(0, 0, 0, 0.5); }\n\nul[_v-d19a38f4] {\n  position: absolute;\n  bottom: 20px;\n  left: 50%;\n  padding: 16px;\n  -webkit-transform: translateX(-50%);\n  background-color: rgba(0, 0, 0, 0.5);\n  overflow: hidden; }\n  ul li[_v-d19a38f4] {\n    position: relative;\n    width: 120px;\n    height: 50px;\n    float: left;\n    -webkit-transform: scale(1);\n    top: 0px;\n    line-height: 50px;\n    text-align: center; }\n    ul li span[_v-d19a38f4] {\n      font-size: 16px; }\n    ul li a[_v-d19a38f4] {\n      color: #fff; }\n  ul li[_v-d19a38f4]:hover {\n    top: -5px;\n    -webkit-transform: scale(1.2); }\n\n.star-transition[_v-d19a38f4], .stal-transition[_v-d19a38f4] {\n  -webkit-transition: all 0.5s ease;\n  -webkit-transform: translate(-50%, -50%);\n  opacity: 1; }\n\n.star-leave[_v-d19a38f4], .stal-enter[_v-d19a38f4] {\n  opacity: 0;\n  -webkit-transform: translate(-150%, -50%); }\n\n.star-enter[_v-d19a38f4], .stal-leave[_v-d19a38f4] {\n  opacity: 0;\n  -webkit-transform: translate(50%, -50%); }\n", ""]);

	// exports


/***/ },
/* 1090 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="img_box "  v-show="show">
	//     <i class="icon ic  opc" @click='close'>&#xe60d;</i>
	//     <div class="box" :style="{transform:'rotate('+(90*rot)+'deg)'+' scale('+(1+sca)+')'}" :class='{tran:!none}'>
	//       <img v-for="i in src" :src="i"  track-by='$index' v-show="index==$index"  :transition="sta" >
	//     </div>                  
	//     <div class="but" v-show='src.length>1'>
	//       <i class="fa fa-chevron-left  opc l" v-show='index>0' @click="move(0)"></i>
	//       <i class="fa fa-chevron-right  opc r" @click="move(1)" v-show='index<src.length-1'></i>
	//     </div>
	//         <ul>  
	//           <li class="opc fa fa-repeat fa-2x" @click='rotate'>
	//             <span>旋转</span>
	//           </li>
	//           <li class="opc  fa fa-search fa-2x" @click='scale'>
	//             <span>放大</span>
	//           </li>
	//           <li class="opc fa fa-search-minus fa-2x" @click='sacles'>
	//             <span>缩小</span>
	//           </li>
	//           <li class="opc fa fa-download fa-2x"  v-if="load">
	//               <a :href="src[index]" download><span>下载</span></a>
	//           </li>
	//         </ul>
	//   </div>
	// </template>
	// <script>

	/**
	    <ksimg 
	        :show.sync="Boolean"  弹出 必填
	        :src="Array"  图片数组 必填
	        :pindex="Number"   当前要显示 的图片下标
	        ></ksimg>
	 */

	exports.default = {
	  VERSION: '1.0.0',
	  data: function data() {
	    return {
	      rot: 0,
	      sca: 0,
	      none: false,
	      sta: '',
	      index: 0
	    };
	  },
	  ready: function ready() {},

	  props: {
	    show: { type: Boolean, required: true, default: false },
	    src: { type: Array, required: true, default: [] },
	    pindex: { type: Number, required: false, default: 0 },
	    load: { type: Boolean, required: false, default: true }
	  },
	  watch: {
	    show: function show(_show) {
	      this.index = this.pindex;
	      if (_show) {
	        var _this = this;
	        _this.src.length == 1 && (_this.index = 0);
	        document.body.classList.add('ovh');
	        document.onkeydown = function (e) {
	          var e = e || window.event;
	          e.keyCode == 27 && _this.close();
	        };
	      } else {
	        document.body.classList.remove('ovh');
	      }
	    }
	  },
	  methods: {
	    close: function close() {
	      this.rot = 0;
	      this.sca = 0;
	      this.sta = '';
	      this.show = false;
	      this.$emit('close');
	    },

	    move: function move(i) {
	      this.none = true;
	      this.rot = 0;
	      this.sca = 0;
	      if (i) {
	        this.sta = 'star';
	        this.index < this.src.length - 1 && this.index++;
	      } else {
	        this.sta = 'stal';
	        this.index > 0 && this.index--;
	      }
	    },
	    rotate: function rotate() {
	      this.none = false;
	      this.rot++;
	    },
	    scale: function scale() {
	      this.none = false;
	      this.sca += 0.2;
	    },
	    sacles: function sacles() {
	      this.none = false;
	      this.sca > -0.8 && (this.sca -= 0.2);
	    }
	  }
	};
	// </script>
	// <style lang="sass" scoped>
	// @import "../styles/Img";
	// </style>

/***/ },
/* 1091 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"img_box \" v-show=\"show\" _v-d19a38f4=\"\">\n  <i class=\"icon ic  opc\" @click=\"close\" _v-d19a38f4=\"\"></i>\n  <div class=\"box\" :style=\"{transform:'rotate('+(90*rot)+'deg)'+' scale('+(1+sca)+')'}\" :class=\"{tran:!none}\" _v-d19a38f4=\"\">\n    <img v-for=\"i in src\" :src=\"i\" track-by=\"$index\" v-show=\"index==$index\" :transition=\"sta\" _v-d19a38f4=\"\">\n  </div>                  \n  <div class=\"but\" v-show=\"src.length>1\" _v-d19a38f4=\"\">\n    <i class=\"fa fa-chevron-left  opc l\" v-show=\"index>0\" @click=\"move(0)\" _v-d19a38f4=\"\"></i>\n    <i class=\"fa fa-chevron-right  opc r\" @click=\"move(1)\" v-show=\"index<src.length-1\" _v-d19a38f4=\"\"></i>\n  </div>\n      <ul _v-d19a38f4=\"\">  \n        <li class=\"opc fa fa-repeat fa-2x\" @click=\"rotate\" _v-d19a38f4=\"\">\n          <span _v-d19a38f4=\"\">旋转</span>\n        </li>\n        <li class=\"opc  fa fa-search fa-2x\" @click=\"scale\" _v-d19a38f4=\"\">\n          <span _v-d19a38f4=\"\">放大</span>\n        </li>\n        <li class=\"opc fa fa-search-minus fa-2x\" @click=\"sacles\" _v-d19a38f4=\"\">\n          <span _v-d19a38f4=\"\">缩小</span>\n        </li>\n        <li class=\"opc fa fa-download fa-2x\" v-if=\"load\" _v-d19a38f4=\"\">\n            <a :href=\"src[index]\" download=\"\" _v-d19a38f4=\"\"><span _v-d19a38f4=\"\">下载</span></a>\n        </li>\n      </ul>\n</div>\n";

/***/ },
/* 1092 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.KsTips = exports.KsAbstract = undefined;

	var _abstract = __webpack_require__(1093);

	var _abstract2 = _interopRequireDefault(_abstract);

	var _tips = __webpack_require__(1096);

	var _tips2 = _interopRequireDefault(_tips);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description: tooltip 组件.
	 * @author: pkeros.
	 * @date: 2016/11/14.
	 */

	exports.KsAbstract = _abstract2.default;
	exports.KsTips = _tips2.default;

/***/ },
/* 1093 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(1094)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsTip/src/abstract.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(1095)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsTip/src/abstract.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1094 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Popper = __webpack_require__(413);

	var _Popper2 = _interopRequireDefault(_Popper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  VERSION: '1.0.0',

	  name: 'KsPopupAbstract',

	  mixins: [_Popper2.default],

	  data: function data() {
	    return {};
	  },


	  props: {
	    className: { type: String, default: 'KsPopupAbstract' },
	    arrowClassName: { type: String, default: 'KsPopupAbstract-arrow' },
	    disabled: Boolean,
	    content: String,
	    visibleArrow: { default: true },
	    transition: { type: String, default: 'fade-in-linear' },
	    options: {
	      default: function _default() {
	        return {
	          boundariesPadding: 10,
	          gpuAcceleration: false
	        };
	      }
	    }
	  }

	};
	// </script>
	// <template>
	//   <div v-el:reference style="display: inline-block">
	//     <!-- 内容 -->
	//     <slot></slot>
	//     <div :class="className" v-el:popper v-show="!disabled && showPopper">
	//           <strong v-text="content"></strong>
	//           <slot name="content"></slot>
	//           <div class="txtr mb-20">
	//               <input type="button" class="btn-dark-light mr-10" value="取消">
	//               <input type="button" class="btn-primary" value="完成">             
	//           </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 1095 */
/***/ function(module, exports) {

	module.exports = "\n<div v-el:reference style=\"display: inline-block\">\n  <!-- 内容 -->\n  <slot></slot>\n  <div :class=\"className\" v-el:popper v-show=\"!disabled && showPopper\">\n        <strong v-text=\"content\"></strong>\n        <slot name=\"content\"></slot>\n        <div class=\"txtr mb-20\">\n            <input type=\"button\" class=\"btn-dark-light mr-10\" value=\"取消\">\n            <input type=\"button\" class=\"btn-primary\" value=\"完成\">             \n        </div>\n  </div>\n</div>\n";

/***/ },
/* 1096 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(1097)
	__vue_script__ = __webpack_require__(1099)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsTip/src/tips.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(1100)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsTip/src/tips.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1097 */
[1106, 1098],
/* 1098 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/**\n * @description ToolTips 样式.\n * @author pkeros\n * @data 2017/2/15\n * @email pkeros@vip.qq.com\n */\n/**\n * @description 活动列表操作弹出框样式.\n * @author pkeros\n * @data 2017/2/15\n * @email pkeros@vip.qq.com\n */\n.KsToolTip {\n  position: absolute;\n  background: #333;\n  color: white;\n  padding: 7px 18px;\n  border-radius: 4px;\n  text-align: center; }\n  .KsToolTip-arrow {\n    width: 0;\n    height: 0;\n    position: absolute;\n    margin: 7px;\n    border-style: solid; }\n  .KsToolTip[x-placement^=\"top\"] {\n    margin-bottom: 7px; }\n  .KsToolTip[x-placement^=\"top\"] .KsToolTip-arrow {\n    border-width: 7px 7px 0 7px;\n    border-color: #333 transparent transparent transparent;\n    bottom: -7px;\n    left: calc(50% - 7px);\n    margin-top: 0;\n    margin-bottom: 0; }\n  .KsToolTip[x-placement^=\"bottom\"] {\n    margin-top: 7px; }\n  .KsToolTip[x-placement^=\"bottom\"] .KsToolTip-arrow {\n    border-width: 0 7px 7px 7px;\n    border-color: transparent transparent #333 transparent;\n    top: -7px;\n    left: calc(50% - 7px);\n    margin-top: 0;\n    margin-bottom: 0; }\n  .KsToolTip[x-placement^=\"right\"] {\n    margin-left: 7px; }\n  .KsToolTip[x-placement^=\"right\"] .KsToolTip-arrow {\n    border-width: 7px 7px 7px 0;\n    border-color: transparent #333 transparent transparent;\n    left: -7px;\n    top: calc(50% - 7px);\n    margin-left: 0;\n    margin-right: 0; }\n  .KsToolTip[x-placement^=\"left\"] {\n    margin-right: 7px; }\n  .KsToolTip[x-placement^=\"left\"] .KsToolTip-arrow {\n    border-width: 7px 0 7px 7px;\n    border-color: transparent transparent transparent #333;\n    right: -7px;\n    top: calc(50% - 7px);\n    margin-left: 0;\n    margin-right: 0; }\n", ""]);

	// exports


/***/ },
/* 1099 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _abstract = __webpack_require__(1093);

	var _abstract2 = _interopRequireDefault(_abstract);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  VERSION: '1.0.0',

	  name: 'KsToolTip',

	  data: function data() {
	    return {
	      showPopper: false
	    };
	  },


	  props: {
	    className: { type: String, default: 'KsToolTip' },
	    arrowClassName: { type: String, default: 'KsToolTip-arrow' },
	    openDelay: { type: Number, default: 0 },
	    closeDelay: { type: Number, default: 0 },
	    disabled: Boolean,
	    content: String,
	    show: Boolean,
	    visibleArrow: { default: true },
	    transition: { type: String, default: 'fade-in-linear' },
	    options: {
	      default: function _default() {
	        return {
	          boundariesPadding: 10,
	          gpuAcceleration: true
	        };
	      }
	    }
	  },

	  methods: {
	    handleShowPopper: function handleShowPopper() {
	      var _this = this;

	      this.timeout = setTimeout(function () {
	        _this.showPopper = !_this.showPopper;
	        _this.show = _this.showPopper;
	        _this.$emit('change', _this.show);
	      }, this.openDelay);
	    }
	  },

	  components: { KsPopupAbstract: _abstract2.default }

	};
	// </script>
	//
	// <style lang="scss">
	//   @import "../styles/index";
	// </style>
	// <template>
	//   <div cid="KsToolTip" style="display: inline-block;position:relative">
	//     <ks-popup-abstract :class-name="className" :arrow-class-name="arrowClassName"
	//                            :disabled="disable" :content="content"
	//                            :visible-arrow="visibleArrow" :transition="transition"
	//                            :options="options" :show-popper.sync="showPopper"
	//     >
	//       <!-- 弹出依靠 -->
	//       <div class="container" @click="handleShowPopper">
	//         <slot></slot>
	//       </div>
	//       <!-- 弹出内容部分 -->
	//       <slot name="content" slot="content"></slot>
	//     </ks-popup-abstract>
	//   </div>
	// </template>
	//
	// <script>

/***/ },
/* 1100 */
/***/ function(module, exports) {

	module.exports = "\n<div cid=\"KsToolTip\" style=\"display: inline-block;position:relative\">\n  <ks-popup-abstract :class-name=\"className\" :arrow-class-name=\"arrowClassName\"\n                         :disabled=\"disable\" :content=\"content\"\n                         :visible-arrow=\"visibleArrow\" :transition=\"transition\"\n                         :options=\"options\" :show-popper.sync=\"showPopper\"\n  >\n    <!-- 弹出依靠 -->\n    <div class=\"container\" @click=\"handleShowPopper\">\n      <slot></slot>\n    </div>\n    <!-- 弹出内容部分 -->\n    <slot name=\"content\" slot=\"content\"></slot>\n  </ks-popup-abstract>\n</div>\n";

/***/ },
/* 1101 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(1102)
	__vue_script__ = __webpack_require__(1104)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsTable/src/table.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(1105)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsTable/src/table.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 1102 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(1103);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./table.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./table.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 1103 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.KsTable-multiple {\n  overflow-y: hidden;\n  margin: 0 -20px;\n  margin-bottom: 20px; }\n  .KsTable-multiple > table {\n    width: 100%;\n    white-space: nowrap; }\n    .KsTable-multiple > table thead {\n      border-bottom: 1px solid #999;\n      border-top: 1px solid #e9e9e9; }\n      .KsTable-multiple > table thead div {\n        border-bottom: 1px solid #999;\n        margin-right: -20px; }\n    .KsTable-multiple > table th {\n      font-weight: bold;\n      text-align: left;\n      padding: 0 20px;\n      font-size: 12px; }\n    .KsTable-multiple > table td {\n      padding: 10px 20px;\n      border: 0;\n      line-height: 1.7em;\n      border-bottom: 1px solid #e9e9e9;\n      vertical-align: top; }\n      .KsTable-multiple > table td a {\n        color: #2196F3;\n        cursor: pointer; }\n      .KsTable-multiple > table td i {\n        padding-right: 10px; }\n  .KsTable-multiple tbody tr:nth-of-type(odd) {\n    background-color: #fcfcfc; }\n\n/* table基础样式 */\n.KsTable-striped table td, .KsTable-striped table th {\n  padding: 10px 20px;\n  border: 0;\n  line-height: 1.7em; }\n\n.KsTable-striped table td {\n  border-bottom: 1px solid #e9e9e9;\n  vertical-align: top; }\n  .KsTable-striped table td a {\n    color: #2196F3;\n    cursor: pointer; }\n  .KsTable-striped table td i {\n    padding-right: 10px; }\n\n.KsTable-striped table {\n  width: 100%;\n  white-space: nowrap; }\n  .KsTable-striped table th {\n    font-weight: bold;\n    text-align: left; }\n\n.KsTable-striped {\n  overflow-y: hidden;\n  margin: 0 -20px;\n  margin-bottom: 20px; }\n  .KsTable-striped table {\n    border-top: 1px solid #e9e9e9; }\n  .KsTable-striped tbody {\n    border-top: 1px solid #999; }\n  .KsTable-striped tbody tr:nth-of-type(odd) {\n    background-color: #fcfcfc; }\n  .KsTable-striped .multiple-tit .tit-bor {\n    border-bottom: 1px solid #999;\n    margin-right: -20px; }\n  .KsTable-striped .multiple-tit th {\n    font-weight: bold;\n    text-align: left;\n    padding: 0 20px;\n    font-size: 12px; }\n", ""]);

	// exports


/***/ },
/* 1104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _icon = __webpack_require__(926);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    components: {
	        'ks-icon': _icon2.default
	    },
	    props: {
	        columns: {
	            type: Array,
	            default: function _default() {
	                return [];
	            }
	        },
	        data: {
	            type: Array,
	            default: function _default() {
	                return [];
	            }
	        },
	        icons: {
	            type: Object,
	            default: function _default() {
	                return {
	                    desc: 'xiangxiajiantou',
	                    asc: 'xiangshangjiantou'
	                };
	            }
	        }
	    },

	    data: function data() {
	        this._ksparent = this.$parent;
	        this._options = {
	            templates: {},
	            columnkeys: []
	        };

	        return {
	            tempData: this.data,
	            tempColumns: this.columns,
	            allchecked: false
	        };
	    },

	    computed: {

	        columns: {
	            get: function get() {
	                return this.tempColumns;
	            },
	            set: function set(val) {
	                var _this = this;

	                this._options.columnkeys = this.columns.map(function (item) {

	                    item.template && (_this._options['templates'][item.key] = item.template);

	                    return item.key;
	                });
	            }
	        },
	        data: {
	            get: function get() {
	                return this.tempData;
	            },
	            set: function set(val) {
	                var _this2 = this;

	                this.tempData = this.filterData(val, this._options.columnkeys);
	                this.allchecked = this.isAllChecked(this.tempData);
	                this.$nextTick(function () {
	                    _this2.$parent.$compile(_this2.$els.tbody);
	                });
	            }
	        }
	    },
	    watch: {},
	    filters: {
	        // 图标名
	        getIcon: function getIcon(val) {

	            var temp = this.icons.desc;

	            if ('asc' == val) temp = this.icons.asc;
	            return temp;
	        },
	        render: function render(val, key, item, index) {

	            var template = (this._options.templates || {})[key];
	            if ('function' == typeof template) {

	                return template.call(this._ksparent, item, index);
	            } else {
	                return val;
	            }
	        }
	    },
	    methods: {
	        // 排序
	        sort: function sort(index) {
	            var column = this.columns[index];
	            var direction = column.sortable == 'asc' ? 'desc' : 'asc';

	            this.columns[index].sortable = direction;
	            this.$emit('change-sort', column.key, direction);
	        },


	        // 
	        /**
	         * [customSchema 获取自定义的 Schema column]
	         * @param  {[Array]} schema [columns模式]
	         * @param  {[Array]} real   [真实数据]
	         * @return {[Array]}        []
	         */
	        customSchema: function customSchema() {
	            var schema = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	            var real = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	            return schema.filter(function (key) {
	                return !~real.indexOf(key);
	            });
	        },

	        /**
	         * [filterData 根据自定义]
	         * @param  {[Array]} data       [原始数据]
	         * @param  {[Array]} columnkeys [定义的 Schema]
	         * @return {[Array]}            []
	         */
	        filterData: function filterData(data, columnkeys) {
	            // this.customSchema(columnkeys,Object.keys(data[0]||[]))

	            return data.map(function (item, index) {
	                var temp = {};

	                columnkeys.forEach(function (key) {

	                    switch (key) {
	                        case 'table-idx':
	                            temp[key] = index + 1;
	                            break;

	                        case 'operator':
	                            temp[key] = '';
	                            break;

	                        default:
	                            item.hasOwnProperty(key) && (temp[key] = item[key]);

	                            break;
	                    }
	                });
	                return temp;
	            });
	        },

	        /**
	         * [change DOM change]
	         * @return {[type]} []
	         */
	        change: function change(event) {
	            var index;
	            if ('ks-table-allchecked' == event.target.name) {
	                var allchecked = false;
	                if (this.allchecked) {
	                    allchecked = true;
	                } else {
	                    index = -1;
	                }
	                this.tempData = this.tempData.map(function (item) {
	                    item.checked = allchecked;
	                    return item;
	                });
	            } else {

	                this.allchecked = this.isAllChecked(this.tempData);
	                index = event.target.id.split('_')[2];
	            }

	            // console.log(event.target)
	            this.$emit('change-checked', this.data, index);

	            // console.log(this.data)
	        },

	        /**
	         * [isAllChecked 是否全选]
	         * @param  {[type]}  data [源数据]
	         * @return {Boolean}      []
	         */
	        isAllChecked: function isAllChecked(data) {
	            var noCheckeds = data.filter(function (item) {
	                if (!item.checked) {
	                    return true;
	                }
	            });
	            return noCheckeds.length ? false : true;
	        }
	    },
	    created: function created() {
	        var _this3 = this;

	        this.columns = this.columns;
	        this.data = this.data;
	        this.$nextTick(function () {
	            // this.$parent.$compile(this.$parent.$el)
	            // this.$parent.$destroy()
	            _this3.$parent.$compile(_this3.$els.tbody);
	        });
	    }
	};
	// </script>
	// <style lang="scss">
	//     @import '../styles/table.scss'
	// </style>
	// <template>
	// <div class="KsTable-striped">
	//     <table v-on:change="change">  
	//         <thead v-el:thead>    
	//             <tr> 
	//                 <th v-for="item in columns">
	//                     <ks-icon v-bind:name="item.sortable | getIcon" 
	//                         v-if="item.sortable"
	//                         size="1x"
	//                         v-on:click="sort($index)"></ks-icon>
	//                     <input type="checkbox" name="ks-table-allchecked"
	//                         v-model="allchecked"
	//                         v-if="item.checked"/>
	//                     <div v-text="item.title" 
	//                         style="display: inline-block;" 
	//                          v-bind:style="{'width':item.width}"></div>
	//                 </th>      
	//             </tr>  
	//         </thead>  
	//         <tbody v-el:tbody>    
	//             <tr v-for="(index, item) in data">      
	//                 <td v-for="(key, val) in item" >
	//                     <input type="checkbox" id="KsTable_{{_uid}}_{{index}}"
	//                            v-if="key=='checked'"
	//                            v-model="item.checked"/>
	//                     <div v-if="key!='checked'" v-html="val | render key item index">
	//                     </div>        
	//                 </td>      
	//             </tr>
	//
	//         </tbody>
	//     </table>
	// </div>
	// </template>
	// <script type="text/javascript">
	/**
	 * 1. 制定基本API columns、data、icon 图标接口
	 * 2. 数据从父级流入处理columns
	 *     get 和 set
	 *     set 处理: 
	 *     i.  map columns 数据填充 this._options
	 *         _options: {
	 *             //  储存了要重新渲染的模板内容，
	 *             //  作用：用于filters的render输出页面
	 *             templates:{},
	 *             //  获取定义的columns中的key值，
	 *             //  作用：用于 filterData 过滤源数据获取 columnkeys 中需要显示的数据
	 *             columnkeys:[] 
	 *         }
	 * 
	 * 
	 */

/***/ },
/* 1105 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"KsTable-striped\">\n    <table v-on:change=\"change\">  \n        <thead v-el:thead>    \n            <tr> \n                <th v-for=\"item in columns\">\n                    <ks-icon v-bind:name=\"item.sortable | getIcon\" \n                        v-if=\"item.sortable\"\n                        size=\"1x\"\n                        v-on:click=\"sort($index)\"></ks-icon>\n                    <input type=\"checkbox\" name=\"ks-table-allchecked\"\n                        v-model=\"allchecked\"\n                        v-if=\"item.checked\"/>\n                    <div v-text=\"item.title\" \n                        style=\"display: inline-block;\" \n                         v-bind:style=\"{'width':item.width}\"></div>\n                </th>      \n            </tr>  \n        </thead>  \n        <tbody v-el:tbody>    \n            <tr v-for=\"(index, item) in data\">      \n                <td v-for=\"(key, val) in item\" >\n                    <input type=\"checkbox\" id=\"KsTable_{{_uid}}_{{index}}\"\n                           v-if=\"key=='checked'\"\n                           v-model=\"item.checked\"/>\n                    <div v-if=\"key!='checked'\" v-html=\"val | render key item index\">\n                    </div>        \n                </td>      \n            </tr>\n            \n        </tbody>\n    </table>\n</div>\n";

/***/ },
/* 1106 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(__webpack_module_template_argument_0__);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./tips.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./tips.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 1107 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(__webpack_module_template_argument_0__);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./main.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./main.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 1108 */
/***/ function(module, exports, __webpack_require__, __webpack_module_template_argument_0__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(__webpack_module_template_argument_0__);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./abstract.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./abstract.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }
]);