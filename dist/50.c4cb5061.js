webpackJsonp([50],Array(97).concat([
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(98);

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(99)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/tree-9.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(128)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/tree-9.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _treeData = __webpack_require__(100);

	var _KsTree = __webpack_require__(101);

	// <template><section><h1>树</h1>
	// <hr>
	// <fold-tree :node="company" :config="{text: 'channelName', children: 'nodes'}" @node-clicked="console">
	// </fold-tree>
	// <hr>
	// <p><abstract-tree :node="company" :config="{text: 'channelName', children: 'nodes'}" @node-clicked="console"></abstract-tree></p>
	// <hr>
	// <p><checked-tree :node="company" :config="{text: 'channelName', children: 'nodes'}" @node-clicked="console"></checked-tree></p>
	// <hr>
	//
	// <h3>脚本</h3>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
	//   <span class="hljs-keyword">import</span> { company } <span class="hljs-keyword">from</span> <span class="hljs-string">'DATA/tree-data'</span>
	//   <span class="hljs-keyword">import</span> { AbstractTree } <span class="hljs-keyword">from</span> <span class="hljs-string">'KsComponents/KsTree'</span>
	//   <span class="hljs-keyword">import</span> { FoldTree } <span class="hljs-keyword">from</span> <span class="hljs-string">'KsComponents/KsTree'</span>
	//   <span class="hljs-keyword">import</span> { CheckedTree } <span class="hljs-keyword">from</span> <span class="hljs-string">'KsComponents/KsTree'</span>
	//
	//   <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
	//     data () {
	//       <span class="hljs-keyword">return</span> {
	//         company
	//       }
	//     },
	//
	//     <span class="hljs-attr">methods</span>: {
	//       <span class="hljs-built_in">console</span> () { <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">arguments</span>) }
	//     },
	//
	//     <span class="hljs-attr">components</span>: { 
	//       FoldTree,
	//       CheckedTree,
	//       AbstractTree   
	//     }
	//   }
	// </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	// </code></pre>
	// </section></template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      company: _treeData.company
	    };
	  },


	  methods: {
	    console: function (_console) {
	      function console() {
	        return _console.apply(this, arguments);
	      }

	      console.toString = function () {
	        return _console.toString();
	      };

	      return console;
	    }(function () {
	      console.log(arguments);
	    })
	  },

	  components: {
	    FoldTree: _KsTree.FoldTree,
	    CheckedTree: _KsTree.CheckedTree,
	    AbstractTree: _KsTree.AbstractTree
	  }
	};
	// </script>

/***/ },
/* 100 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description 树形组件的测试数据.
	 * @author pkeros
	 * @data 2017/3/29
	 * @email pkeros@vip.qq.com
	 */

	// 公司模拟数据
	var company = exports.company = {
	  "id": 1,
	  "channelName": "卡说总部",
	  "address": "address",
	  "contactName": "contactName",
	  "mobilePhone": "mobilePhone",
	  "email": "email",
	  "status": 1,
	  "pid": 0,
	  "total": 12,
	  "nodes": [{
	    "id": 2,
	    "channelName": "华中大区",
	    "address": "address",
	    "contactName": "contactName",
	    "mobilePhone": "mobilePhone",
	    "email": "email",
	    "status": 1,
	    "pid": 1,
	    "nodes": [{
	      "id": 4,
	      "channelName": "上海卡说一部",
	      "address": "address",
	      "contactName": "contactName",
	      "mobilePhone": "mobilePhone",
	      "email": "email",
	      "status": 1,
	      "pid": 2,
	      "nodes": []
	    }, {
	      "id": 5,
	      "channelName": "上海卡说二部",
	      "address": "address",
	      "contactName": "contactName",
	      "mobilePhone": "mobilePhone",
	      "email": "email",
	      "status": 1,
	      "pid": 2,
	      "nodes": []
	    }, {
	      "id": 6,
	      "channelName": "上海卡说三部",
	      "address": "address",
	      "contactName": "contactName",
	      "mobilePhone": "mobilePhone",
	      "email": "email",
	      "status": 1,
	      "pid": 2,
	      "nodes": [{
	        "id": 10,
	        "channelName": "闵行卡说一部",
	        "address": "address",
	        "contactName": "contactName",
	        "mobilePhone": "mobilePhone",
	        "email": "email",
	        "status": 1,
	        "pid": 6,
	        "nodes": []
	      }]
	    }]
	  }, {
	    "id": 3,
	    "channelName": "华南大区",
	    "address": "address",
	    "contactName": "contactName",
	    "mobilePhone": "mobilePhone",
	    "email": "email",
	    "status": 1,
	    "pid": 1,
	    "nodes": [{
	      "id": 7,
	      "channelName": "无锡卡说一部",
	      "address": "address",
	      "contactName": "contactName",
	      "mobilePhone": "mobilePhone",
	      "email": "email",
	      "status": 1,
	      "pid": 3,
	      "nodes": [{
	        "id": 11,
	        "channelName": "苏州卡说一部",
	        "address": "address",
	        "contactName": "contactName",
	        "mobilePhone": "mobilePhone",
	        "email": "email",
	        "status": 1,
	        "pid": 7,
	        "nodes": [{
	          "id": 20,
	          "channelName": "闵行卡说一部",
	          "address": "address",
	          "contactName": "contactName",
	          "mobilePhone": "mobilePhone",
	          "email": "email",
	          "status": 1,
	          "pid": 11,
	          "nodes": []
	        }]
	      }]
	    }, {
	      "id": 8,
	      "channelName": "XX卡说一部",
	      "address": "address",
	      "contactName": "contactName",
	      "mobilePhone": "mobilePhone",
	      "email": "email",
	      "status": 1,
	      "pid": 3,
	      "nodes": []
	    }, {
	      "id": 9,
	      "channelName": "ASF卡说一部",
	      "address": "address",
	      "contactName": "contactName",
	      "mobilePhone": "mobilePhone",
	      "email": "email",
	      "status": 1,
	      "pid": 3,
	      "nodes": []
	    }]
	  }]
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AbstractTree = exports.CheckedTree = exports.FoldTree = undefined;

	var _FoldTree = __webpack_require__(102);

	var _FoldTree2 = _interopRequireDefault(_FoldTree);

	var _AbstractTree = __webpack_require__(110);

	var _AbstractTree2 = _interopRequireDefault(_AbstractTree);

	var _CheckedTree = __webpack_require__(115);

	var _CheckedTree2 = _interopRequireDefault(_CheckedTree);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.FoldTree = _FoldTree2.default;
	exports.CheckedTree = _CheckedTree2.default;
	exports.AbstractTree = _AbstractTree2.default; /**
	                                                * @description 树形组件.
	                                                * @author pkeros
	                                                * @data 2017/3/29
	                                                * @email pkeros@vip.qq.com
	                                                */

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(103)
	__vue_script__ = __webpack_require__(107)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsTree/src/FoldTree.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(109)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsTree/src/FoldTree.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(104);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(106)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./FoldTree.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./FoldTree.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(105)();
	// imports


	// module
	exports.push([module.id, ".foldTree-ul {\n  margin-left: 20px; }\n  .foldTree-ul-li {\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n", ""]);

	// exports


/***/ },
/* 105 */
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
/* 106 */
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
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _FoldTree = __webpack_require__(102);

	var _FoldTree2 = _interopRequireDefault(_FoldTree);

	var _treeMinxi = __webpack_require__(108);

	var _treeMinxi2 = _interopRequireDefault(_treeMinxi);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <div class="fold-tree" cid="foldTree">
	//
	//     <ul class="_ul">
	//       <li class="_li" @click="nodeClicked(node)" :_PUid="node._PUid" :PDeep="node._PDeep">
	//         <span class="operation" @click="open = !open" slot="item">
	//           <slot name="shut" v-if="!decorate && open && node[config['children']]['length']">[-]</slot>
	//           <slot name="open" v-if="!decorate && !open && node[config['children']]['length']">[+]</slot>
	//           <slot name="end" v-if="!decorate && !node[config['children']]['length']">[=]</slot>
	//         </span>
	//         <strong class="_text" v-text="node[config['text']]"></strong>
	//       </li>
	//
	//       <fold-tree :node="n" :config="config" v-show="open"
	//                  v-for="n in node[config['children']]"
	//                  @node-clicked="nodeClicked"
	//       >
	//         <slot name="shut" slot="shut">[-]</slot>
	//         <slot name="open" slot="open">[+]</slot>
	//         <slot name="end" slot="end">[=]</slot>
	//       </fold-tree>
	//     </ul>
	//
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'FoldTree',

	  data: function data() {
	    return {
	      open: true };
	  },


	  mixins: [_treeMinxi2.default],

	  components: { FoldTree: _FoldTree2.default }
	};
	// </script>
	//
	// <style lang="scss">
	//   .foldTree {
	//     _ul {
	//       margin-left: 20px;
	//       _li {
	//         cursor: pointer;
	//         -webkit-user-select: none;
	//         -moz-user-select: none;
	//         -ms-user-select: none;
	//         user-select: none;
	//       }
	//     }
	//   }
	// </style>

/***/ },
/* 108 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description 树的复合.
	 * @author pkeros
	 * @data 2017/3/30
	 * @email pkeros@vip.qq.com
	 */

	exports.default = {
	  methods: {
	    /**
	     * @description 节点被点击
	     * @param node {Object} 当前节点对象
	     */
	    nodeClicked: function nodeClicked(node) {
	      this.$emit('node-clicked', node);
	    }
	  },

	  props: {
	    node: { type: Object, required: true },
	    config: { type: Object, default: function _default() {
	        return { text: 'name', children: 'children' };
	      }
	    }
	  }
	};

/***/ },
/* 109 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"fold-tree\" cid=\"foldTree\">\n\n  <ul class=\"foldTree-ul\">\n    <li class=\"foldTree-ul-li\" @click=\"nodeClicked(node)\" :_PUid=\"node._PUid\" :PDeep=\"node._PDeep\">\n      <span class=\"operation\" @click=\"open = !open\" slot=\"item\">\n        <slot name=\"shut\" v-if=\"!decorate && open && node[config['children']]['length']\">[-]</slot>\n        <slot name=\"open\" v-if=\"!decorate && !open && node[config['children']]['length']\">[+]</slot>\n        <slot name=\"end\" v-if=\"!decorate && !node[config['children']]['length']\">[=]</slot>\n      </span>\n      <strong class=\"foldTree-ul-li-text\" v-text=\"node[config['text']]\"></strong>\n    </li>\n\n    <fold-tree :node=\"n\" :config=\"config\" v-show=\"open\"\n               v-for=\"n in node[config['children']]\"\n               @node-clicked=\"nodeClicked\"\n    >\n      <slot name=\"shut\" slot=\"shut\">[-]</slot>\n      <slot name=\"open\" slot=\"open\">[+]</slot>\n      <slot name=\"end\" slot=\"end\">[=]</slot>\n    </fold-tree>\n  </ul>\n\n</div>\n";

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(111)
	__vue_script__ = __webpack_require__(113)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsTree/src/AbstractTree.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(114)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsTree/src/AbstractTree.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(112);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(106)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./AbstractTree.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./AbstractTree.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(105)();
	// imports


	// module
	exports.push([module.id, ".abstractTree-ul {\n  margin-left: 20px; }\n  .abstractTree-ul-li {\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n", ""]);

	// exports


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _AbstractTree = __webpack_require__(110);

	var _AbstractTree2 = _interopRequireDefault(_AbstractTree);

	var _treeMinxi = __webpack_require__(108);

	var _treeMinxi2 = _interopRequireDefault(_treeMinxi);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <div class="abstract-tree" cid="abstractTree">
	//
	//     <ul class="_ul">
	//       <li class="_li" @click="nodeClicked(node)" :_PUid="node._PUid" :PDeep="node._PDeep">
	//         <slot name="before"></slot>
	//         <strong class="_text" v-text="node[config['text']]"></strong>
	//         <slot name="after"></slot>
	//       </li>
	//
	//       <abstract-tree :node="n" :config="config" @node-clicked="nodeClicked"
	//                      v-for="n in node[config['children']]"
	//       >
	//         <slot name="before" slot="before"></slot>
	//         <slot name="after" slot="after"></slot>
	//       </abstract-tree>
	//     </ul>
	//
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'AbstractTree',

	  data: function data() {
	    return {};
	  },


	  mixins: [_treeMinxi2.default],

	  components: { AbstractTree: _AbstractTree2.default }
	};
	// </script>
	//
	// <style lang="scss">
	//   .abstractTree {
	//     _ul {
	//       margin-left: 20px;
	//       _li {
	//         cursor: pointer;
	//         -webkit-user-select: none;
	//         -moz-user-select: none;
	//         -ms-user-select: none;
	//         user-select: none;
	//       }
	//     }
	//   }
	// </style>

/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"abstract-tree\" cid=\"abstractTree\">\n\n  <ul class=\"abstractTree-ul\">\n    <li class=\"abstractTree-ul-li\" @click=\"nodeClicked(node)\" :_PUid=\"node._PUid\" :PDeep=\"node._PDeep\">\n      <slot name=\"before\"></slot>\n      <strong class=\"abstractTree-ul-li-text\" v-text=\"node[config['text']]\"></strong>\n      <slot name=\"after\"></slot>\n    </li>\n\n    <abstract-tree :node=\"n\" :config=\"config\" @node-clicked=\"nodeClicked\"\n                   v-for=\"n in node[config['children']]\"\n    >\n      <slot name=\"before\" slot=\"before\"></slot>\n      <slot name=\"after\" slot=\"after\"></slot>\n    </abstract-tree>\n  </ul>\n\n</div>\n";

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(116)
	__vue_script__ = __webpack_require__(118)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsTree/src/CheckedTree.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(127)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsTree/src/CheckedTree.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(117);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(106)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./CheckedTree.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./CheckedTree.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(105)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _CheckedTree = __webpack_require__(119);

	var _CheckedTree2 = _interopRequireDefault(_CheckedTree);

	var _treeMinxi = __webpack_require__(108);

	var _treeMinxi2 = _interopRequireDefault(_treeMinxi);

	var _algorithm = __webpack_require__(124);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var selectMode = ['normal', // 不进行快捷选中
	'toUp', // 向上选中
	'toDown', // 向下选中
	'toWay', // 双向选中
	'level' // 同层级选中
	]; // <template>
	//   <div class="checked-tree" cid="checkedTree">
	//
	//     {{vModel | json}}
	//
	//     <ks-checkbox-group :v-model="model" @node-change="treeChangeHandle">
	//       <checked-tree :node="node" :config="config"></checked-tree>
	//     </ks-checkbox-group>
	//
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      model: [],
	      flat: [],
	      flatObj: []
	    };
	  },


	  props: {
	    mode: { type: String, default: 'normal' },
	    vModel: { type: Object, required: true, toWay: true }
	  },

	  mixins: [_treeMinxi2.default],

	  methods: {
	    /**
	     * @description 树选中改变事件处理函数
	     * @param name {String} 节点名
	     * @param value {Boolean} 选中还是取消
	     */
	    treeChangeHandle: function treeChangeHandle(name, value) {
	      var _this = this;

	      var result = this.mode === 'normal' ? [] : this[this.mode + 'Select'](name, value);

	      this.vModel = this.flatObj.filter(function (_ref) {
	        var path = _ref._PPath;
	        return ~_this.model.indexOf(path);
	      });
	      this.model = result.filter(function (id) {
	        return ~result.indexOf(id);
	      }).concat(value ? this.model : []);
	    },


	    /**
	     * @description 同等级选中
	     * @param name {String} 当前发生改变的节点
	     * @param value {Boolean} 当前节点选中还是取消
	     */
	    levelSelect: function levelSelect(name, value) {
	      return (value ? this.flat : this.model).filter(function (id) {
	        return value ? id.split('|').length === name.split('|').length : id.split('|').length !== name.split('|').length;
	      });
	    },


	    /**
	     * @description 向下选中
	     * @param name {String} 当前发生改变的节点
	     * @param value {Boolean} 当前节点选中还是取消
	     */
	    toDownSelect: function toDownSelect(name, value) {
	      return (value ? this.flat : this.model).filter(function (id) {
	        return value ? ~id.indexOf(name) : !~id.indexOf(name);
	      });
	    },


	    /**
	     * @description 向上选中
	     * @param name {String} 当前发生改变的节点
	     * @param value {Boolean} 当前节点选中还是取消
	     */
	    toUpSelect: function toUpSelect(name, value) {
	      return (value ? this.flat : this.model).filter(function (id) {
	        return value ? ~name.indexOf(id) : !~name.indexOf(id);
	      });
	    },


	    /**
	     * @description 双向选中
	     * @param name {String} 当前发生改变的节点
	     * @param value {Boolean} 当前节点选中还是取消
	     */
	    toWaySelect: function toWaySelect(name, value) {
	      return this.toDownSelect(name, value).concat(this.toUpSelect(name, value));
	    }
	  },

	  created: function created() {
	    (0, _algorithm.deepProbe)(this.node, this.config['children']);
	    this.flatObj = (0, _algorithm.flatTree)(this.node, this.config['children']);
	    this.flat = this.flatObj.map(function (_ref2) {
	      var _PPath = _ref2._PPath;
	      return _PPath;
	    });
	  },


	  components: { CheckedTree: _CheckedTree2.default }
	};
	// </script>
	//
	// <style lang="scss">
	//   .checkedTree {
	//
	//   }
	// </style>

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(120)
	__vue_script__ = __webpack_require__(122)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/ks/components/KsTree/src/_CheckedTree.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(123)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/ks/components/KsTree/src/_CheckedTree.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(121);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(106)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./_CheckedTree.vue", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../../node_modules/sass-loader/index.js!../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./_CheckedTree.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(105)();
	// imports


	// module
	exports.push([module.id, ".checkedTreeInner-ul {\n  margin-left: 20px; }\n  .checkedTreeInner-ul-li {\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n", ""]);

	// exports


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _CheckedTree = __webpack_require__(119);

	var _CheckedTree2 = _interopRequireDefault(_CheckedTree);

	var _treeMinxi = __webpack_require__(108);

	var _treeMinxi2 = _interopRequireDefault(_treeMinxi);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <div class="checked-tree-inner" cid="checkedTreeInner">
	//
	//     <ul class="_ul">
	//       <li class="_li" @click="nodeClicked(node)"
	//           :_PUid="node._PUid" :PDeep="node._PDeep" :_PPath="node._PPath">
	//         <span class="operation" @click="open = !open">
	//           <slot name="shut" v-if="!decorate && open && node[config['children']]['length']">[-]</slot>
	//           <slot name="open" v-if="!decorate && !open && node[config['children']]['length']">[+]</slot>
	//           <slot name="end" v-if="!decorate && !node[config['children']]['length']">[=]</slot>
	//         </span>
	//         <ks-checkbox :name="node._PPath">{{node[config['text']]}}</ks-checkbox>
	//       </li>
	//
	//       <checked-tree :node="n" :config="config" v-show="open"
	//                     v-for="n in node[config['children']]"
	//                     @node-clicked="nodeClicked"
	//       >
	//         <slot name="shut" slot="shut">[-]</slot>
	//         <slot name="open" slot="open">[+]</slot>
	//         <slot name="end" slot="end">[=]</slot>
	//       </checked-tree>
	//     </ul>
	//
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  name: 'CheckedTree',

	  data: function data() {
	    return {
	      open: true
	    };
	  },


	  props: {
	    decorate: { type: Boolean, default: 'false' }
	  },

	  mixins: [_treeMinxi2.default],

	  components: { CheckedTree: _CheckedTree2.default }
	};
	// </script>
	//
	// <style lang="scss">
	//   .checkedTreeInner {
	//     _ul {
	//       margin-left: 20px;
	//       _li {
	//         cursor: pointer;
	//         -webkit-user-select: none;
	//         -moz-user-select: none;
	//         -ms-user-select: none;
	//         user-select: none;
	//       }
	//     }
	//   }
	// </style>

/***/ },
/* 123 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"checked-tree-inner\" cid=\"checkedTreeInner\">\n\n  <ul class=\"checkedTreeInner-ul\">\n    <li class=\"checkedTreeInner-ul-li\" @click=\"nodeClicked(node)\"\n        :_PUid=\"node._PUid\" :PDeep=\"node._PDeep\" :_PPath=\"node._PPath\">\n      <span class=\"operation\" @click=\"open = !open\">\n        <slot name=\"shut\" v-if=\"!decorate && open && node[config['children']]['length']\">[-]</slot>\n        <slot name=\"open\" v-if=\"!decorate && !open && node[config['children']]['length']\">[+]</slot>\n        <slot name=\"end\" v-if=\"!decorate && !node[config['children']]['length']\">[=]</slot>\n      </span>\n      <ks-checkbox :name=\"node._PPath\">{{node[config['text']]}}</ks-checkbox>\n    </li>\n\n    <checked-tree :node=\"n\" :config=\"config\" v-show=\"open\"\n                  v-for=\"n in node[config['children']]\"\n                  @node-clicked=\"nodeClicked\"\n    >\n      <slot name=\"shut\" slot=\"shut\">[-]</slot>\n      <slot name=\"open\" slot=\"open\">[+]</slot>\n      <slot name=\"end\" slot=\"end\">[=]</slot>\n    </checked-tree>\n  </ul>\n\n</div>\n";

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deepProbe = exports.flatTree = undefined;

	var _deepProbe = __webpack_require__(125);

	var _deepProbe2 = _interopRequireDefault(_deepProbe);

	var _flatTree = __webpack_require__(126);

	var _flatTree2 = _interopRequireDefault(_flatTree);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description 一些简单处理树的算法.
	 * @author pkeros
	 * @data 2017/3/30
	 * @email pkeros@vip.qq.com
	 */

	exports.flatTree = _flatTree2.default;
	exports.deepProbe = _deepProbe2.default;

/***/ },
/* 125 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = deepProbe;
	/**
	 * @description 探测树的深度.
	 * @author pkeros
	 * @data 2017/3/30
	 * @email pkeros@vip.qq.com
	 */

	var _deepMax = 0;
	var _count = 0;

	function deepProbe(tree, childrenField) {
	  var deep = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	  var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

	  var _path = path + '-' + deep++ + '|' + _count++;

	  tree['_PDeep'] = deep;
	  tree['_PUid'] = _count;
	  tree['_PPath'] = _path;
	  []['concat'](tree[childrenField])['forEach'](function (node) {
	    deepProbe(node, childrenField, deep, _path);
	  });
	  _deepMax = _deepMax < deep ? deep : _deepMax;
	}

/***/ },
/* 126 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = flatTree;
	/**
	 * @description 扁平化树.
	 * @author pkeros
	 * @data 2017/3/30
	 * @email pkeros@vip.qq.com
	 */

	var array = [];

	function flatTree(tree, childrenField) {
	  array.push(tree);
	  []['concat'](tree[childrenField])['forEach'](function (node) {
	    return flatTree(node, childrenField);
	  });
	  return array;
	}

/***/ },
/* 127 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"checked-tree\" cid=\"checkedTree\">\n\n  {{vModel | json}}\n\n  <ks-checkbox-group :v-model=\"model\" @node-change=\"treeChangeHandle\">\n    <checked-tree :node=\"node\" :config=\"config\"></checked-tree>\n  </ks-checkbox-group>\n\n</div>\n";

/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = "<section><h1>树</h1>\n<hr>\n<fold-tree :node=\"company\" :config=\"{text: 'channelName', children: 'nodes'}\" @node-clicked=\"console\">\n</fold-tree>\n<hr>\n<p><abstract-tree :node=\"company\" :config=\"{text: 'channelName', children: 'nodes'}\" @node-clicked=\"console\"></abstract-tree></p>\n<hr>\n<p><checked-tree :node=\"company\" :config=\"{text: 'channelName', children: 'nodes'}\" @node-clicked=\"console\"></checked-tree></p>\n<hr>\n\n<h3>脚本</h3>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n  <span class=\"hljs-keyword\">import</span> { company } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'DATA/tree-data'</span>\n  <span class=\"hljs-keyword\">import</span> { AbstractTree } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'KsComponents/KsTree'</span>\n  <span class=\"hljs-keyword\">import</span> { FoldTree } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'KsComponents/KsTree'</span>\n  <span class=\"hljs-keyword\">import</span> { CheckedTree } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'KsComponents/KsTree'</span>\n  \n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span>{\n    data () {\n      <span class=\"hljs-keyword\">return</span> {\n        company\n      }\n    },\n    \n    <span class=\"hljs-attr\">methods</span>: {\n      <span class=\"hljs-built_in\">console</span> () { <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-built_in\">arguments</span>) }\n    },\n    \n    <span class=\"hljs-attr\">components</span>: { \n      FoldTree,\n      CheckedTree,\n      AbstractTree   \n    }\n  }\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre>\n</section>";

/***/ }
]));