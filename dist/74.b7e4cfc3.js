webpackJsonp([74],{

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(174), __webpack_require__(176), __webpack_require__(177)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(module, require('./clipboard-action'), require('tiny-emitter'), require('good-listener'));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod, global.clipboardAction, global.tinyEmitter, global.goodListener);
	        global.clipboard = mod.exports;
	    }
	})(this, function (module, _clipboardAction, _tinyEmitter, _goodListener) {
	    'use strict';

	    var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

	    var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

	    var _goodListener2 = _interopRequireDefault(_goodListener);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    var _createClass = function () {
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

	    function _possibleConstructorReturn(self, call) {
	        if (!self) {
	            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	        }

	        return call && (typeof call === "object" || typeof call === "function") ? call : self;
	    }

	    function _inherits(subClass, superClass) {
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
	    }

	    var Clipboard = function (_Emitter) {
	        _inherits(Clipboard, _Emitter);

	        /**
	         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
	         * @param {Object} options
	         */
	        function Clipboard(trigger, options) {
	            _classCallCheck(this, Clipboard);

	            var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

	            _this.resolveOptions(options);
	            _this.listenClick(trigger);
	            return _this;
	        }

	        /**
	         * Defines if attributes would be resolved using internal setter functions
	         * or custom functions that were passed in the constructor.
	         * @param {Object} options
	         */


	        _createClass(Clipboard, [{
	            key: 'resolveOptions',
	            value: function resolveOptions() {
	                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	                this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
	                this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
	                this.text = typeof options.text === 'function' ? options.text : this.defaultText;
	            }
	        }, {
	            key: 'listenClick',
	            value: function listenClick(trigger) {
	                var _this2 = this;

	                this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
	                    return _this2.onClick(e);
	                });
	            }
	        }, {
	            key: 'onClick',
	            value: function onClick(e) {
	                var trigger = e.delegateTarget || e.currentTarget;

	                if (this.clipboardAction) {
	                    this.clipboardAction = null;
	                }

	                this.clipboardAction = new _clipboardAction2.default({
	                    action: this.action(trigger),
	                    target: this.target(trigger),
	                    text: this.text(trigger),
	                    trigger: trigger,
	                    emitter: this
	                });
	            }
	        }, {
	            key: 'defaultAction',
	            value: function defaultAction(trigger) {
	                return getAttributeValue('action', trigger);
	            }
	        }, {
	            key: 'defaultTarget',
	            value: function defaultTarget(trigger) {
	                var selector = getAttributeValue('target', trigger);

	                if (selector) {
	                    return document.querySelector(selector);
	                }
	            }
	        }, {
	            key: 'defaultText',
	            value: function defaultText(trigger) {
	                return getAttributeValue('text', trigger);
	            }
	        }, {
	            key: 'destroy',
	            value: function destroy() {
	                this.listener.destroy();

	                if (this.clipboardAction) {
	                    this.clipboardAction.destroy();
	                    this.clipboardAction = null;
	                }
	            }
	        }], [{
	            key: 'isSupported',
	            value: function isSupported() {
	                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

	                var actions = typeof action === 'string' ? [action] : action;
	                var support = !!document.queryCommandSupported;

	                actions.forEach(function (action) {
	                    support = support && !!document.queryCommandSupported(action);
	                });

	                return support;
	            }
	        }]);

	        return Clipboard;
	    }(_tinyEmitter2.default);

	    /**
	     * Helper function to retrieve attribute value.
	     * @param {String} suffix
	     * @param {Element} element
	     */
	    function getAttributeValue(suffix, element) {
	        var attribute = 'data-clipboard-' + suffix;

	        if (!element.hasAttribute(attribute)) {
	            return;
	        }

	        return element.getAttribute(attribute);
	    }

	    module.exports = Clipboard;
	});

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, __webpack_require__(175)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(module, require('select'));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod, global.select);
	        global.clipboardAction = mod.exports;
	    }
	})(this, function (module, _select) {
	    'use strict';

	    var _select2 = _interopRequireDefault(_select);

	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }

	    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	        return typeof obj;
	    } : function (obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };

	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }

	    var _createClass = function () {
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

	    var ClipboardAction = function () {
	        /**
	         * @param {Object} options
	         */
	        function ClipboardAction(options) {
	            _classCallCheck(this, ClipboardAction);

	            this.resolveOptions(options);
	            this.initSelection();
	        }

	        /**
	         * Defines base properties passed from constructor.
	         * @param {Object} options
	         */


	        _createClass(ClipboardAction, [{
	            key: 'resolveOptions',
	            value: function resolveOptions() {
	                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	                this.action = options.action;
	                this.emitter = options.emitter;
	                this.target = options.target;
	                this.text = options.text;
	                this.trigger = options.trigger;

	                this.selectedText = '';
	            }
	        }, {
	            key: 'initSelection',
	            value: function initSelection() {
	                if (this.text) {
	                    this.selectFake();
	                } else if (this.target) {
	                    this.selectTarget();
	                }
	            }
	        }, {
	            key: 'selectFake',
	            value: function selectFake() {
	                var _this = this;

	                var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

	                this.removeFake();

	                this.fakeHandlerCallback = function () {
	                    return _this.removeFake();
	                };
	                this.fakeHandler = document.body.addEventListener('click', this.fakeHandlerCallback) || true;

	                this.fakeElem = document.createElement('textarea');
	                // Prevent zooming on iOS
	                this.fakeElem.style.fontSize = '12pt';
	                // Reset box model
	                this.fakeElem.style.border = '0';
	                this.fakeElem.style.padding = '0';
	                this.fakeElem.style.margin = '0';
	                // Move element out of screen horizontally
	                this.fakeElem.style.position = 'absolute';
	                this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
	                // Move element to the same position vertically
	                var yPosition = window.pageYOffset || document.documentElement.scrollTop;
	                this.fakeElem.style.top = yPosition + 'px';

	                this.fakeElem.setAttribute('readonly', '');
	                this.fakeElem.value = this.text;

	                document.body.appendChild(this.fakeElem);

	                this.selectedText = (0, _select2.default)(this.fakeElem);
	                this.copyText();
	            }
	        }, {
	            key: 'removeFake',
	            value: function removeFake() {
	                if (this.fakeHandler) {
	                    document.body.removeEventListener('click', this.fakeHandlerCallback);
	                    this.fakeHandler = null;
	                    this.fakeHandlerCallback = null;
	                }

	                if (this.fakeElem) {
	                    document.body.removeChild(this.fakeElem);
	                    this.fakeElem = null;
	                }
	            }
	        }, {
	            key: 'selectTarget',
	            value: function selectTarget() {
	                this.selectedText = (0, _select2.default)(this.target);
	                this.copyText();
	            }
	        }, {
	            key: 'copyText',
	            value: function copyText() {
	                var succeeded = void 0;

	                try {
	                    succeeded = document.execCommand(this.action);
	                } catch (err) {
	                    succeeded = false;
	                }

	                this.handleResult(succeeded);
	            }
	        }, {
	            key: 'handleResult',
	            value: function handleResult(succeeded) {
	                this.emitter.emit(succeeded ? 'success' : 'error', {
	                    action: this.action,
	                    text: this.selectedText,
	                    trigger: this.trigger,
	                    clearSelection: this.clearSelection.bind(this)
	                });
	            }
	        }, {
	            key: 'clearSelection',
	            value: function clearSelection() {
	                if (this.target) {
	                    this.target.blur();
	                }

	                window.getSelection().removeAllRanges();
	            }
	        }, {
	            key: 'destroy',
	            value: function destroy() {
	                this.removeFake();
	            }
	        }, {
	            key: 'action',
	            set: function set() {
	                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

	                this._action = action;

	                if (this._action !== 'copy' && this._action !== 'cut') {
	                    throw new Error('Invalid "action" value, use either "copy" or "cut"');
	                }
	            },
	            get: function get() {
	                return this._action;
	            }
	        }, {
	            key: 'target',
	            set: function set(target) {
	                if (target !== undefined) {
	                    if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
	                        if (this.action === 'copy' && target.hasAttribute('disabled')) {
	                            throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
	                        }

	                        if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
	                            throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
	                        }

	                        this._target = target;
	                    } else {
	                        throw new Error('Invalid "target" value, use a valid Element');
	                    }
	                }
	            },
	            get: function get() {
	                return this._target;
	            }
	        }]);

	        return ClipboardAction;
	    }();

	    module.exports = ClipboardAction;
	});

/***/ },

/***/ 175:
/***/ function(module, exports) {

	function select(element) {
	    var selectedText;

	    if (element.nodeName === 'SELECT') {
	        element.focus();

	        selectedText = element.value;
	    }
	    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
	        var isReadOnly = element.hasAttribute('readonly');

	        if (!isReadOnly) {
	            element.setAttribute('readonly', '');
	        }

	        element.select();
	        element.setSelectionRange(0, element.value.length);

	        if (!isReadOnly) {
	            element.removeAttribute('readonly');
	        }

	        selectedText = element.value;
	    }
	    else {
	        if (element.hasAttribute('contenteditable')) {
	            element.focus();
	        }

	        var selection = window.getSelection();
	        var range = document.createRange();

	        range.selectNodeContents(element);
	        selection.removeAllRanges();
	        selection.addRange(range);

	        selectedText = selection.toString();
	    }

	    return selectedText;
	}

	module.exports = select;


/***/ },

/***/ 176:
/***/ function(module, exports) {

	function E () {
	  // Keep this empty so it's easier to inherit from
	  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
	}

	E.prototype = {
	  on: function (name, callback, ctx) {
	    var e = this.e || (this.e = {});

	    (e[name] || (e[name] = [])).push({
	      fn: callback,
	      ctx: ctx
	    });

	    return this;
	  },

	  once: function (name, callback, ctx) {
	    var self = this;
	    function listener () {
	      self.off(name, listener);
	      callback.apply(ctx, arguments);
	    };

	    listener._ = callback
	    return this.on(name, listener, ctx);
	  },

	  emit: function (name) {
	    var data = [].slice.call(arguments, 1);
	    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
	    var i = 0;
	    var len = evtArr.length;

	    for (i; i < len; i++) {
	      evtArr[i].fn.apply(evtArr[i].ctx, data);
	    }

	    return this;
	  },

	  off: function (name, callback) {
	    var e = this.e || (this.e = {});
	    var evts = e[name];
	    var liveEvents = [];

	    if (evts && callback) {
	      for (var i = 0, len = evts.length; i < len; i++) {
	        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
	          liveEvents.push(evts[i]);
	      }
	    }

	    // Remove event from queue to prevent memory leak
	    // Suggested by https://github.com/lazd
	    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

	    (liveEvents.length)
	      ? e[name] = liveEvents
	      : delete e[name];

	    return this;
	  }
	};

	module.exports = E;


/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	var is = __webpack_require__(178);
	var delegate = __webpack_require__(179);

	/**
	 * Validates all params and calls the right
	 * listener function based on its target type.
	 *
	 * @param {String|HTMLElement|HTMLCollection|NodeList} target
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listen(target, type, callback) {
	    if (!target && !type && !callback) {
	        throw new Error('Missing required arguments');
	    }

	    if (!is.string(type)) {
	        throw new TypeError('Second argument must be a String');
	    }

	    if (!is.fn(callback)) {
	        throw new TypeError('Third argument must be a Function');
	    }

	    if (is.node(target)) {
	        return listenNode(target, type, callback);
	    }
	    else if (is.nodeList(target)) {
	        return listenNodeList(target, type, callback);
	    }
	    else if (is.string(target)) {
	        return listenSelector(target, type, callback);
	    }
	    else {
	        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
	    }
	}

	/**
	 * Adds an event listener to a HTML element
	 * and returns a remove listener function.
	 *
	 * @param {HTMLElement} node
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listenNode(node, type, callback) {
	    node.addEventListener(type, callback);

	    return {
	        destroy: function() {
	            node.removeEventListener(type, callback);
	        }
	    }
	}

	/**
	 * Add an event listener to a list of HTML elements
	 * and returns a remove listener function.
	 *
	 * @param {NodeList|HTMLCollection} nodeList
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listenNodeList(nodeList, type, callback) {
	    Array.prototype.forEach.call(nodeList, function(node) {
	        node.addEventListener(type, callback);
	    });

	    return {
	        destroy: function() {
	            Array.prototype.forEach.call(nodeList, function(node) {
	                node.removeEventListener(type, callback);
	            });
	        }
	    }
	}

	/**
	 * Add an event listener to a selector
	 * and returns a remove listener function.
	 *
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Object}
	 */
	function listenSelector(selector, type, callback) {
	    return delegate(document.body, selector, type, callback);
	}

	module.exports = listen;


/***/ },

/***/ 178:
/***/ function(module, exports) {

	/**
	 * Check if argument is a HTML element.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.node = function(value) {
	    return value !== undefined
	        && value instanceof HTMLElement
	        && value.nodeType === 1;
	};

	/**
	 * Check if argument is a list of HTML elements.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.nodeList = function(value) {
	    var type = Object.prototype.toString.call(value);

	    return value !== undefined
	        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
	        && ('length' in value)
	        && (value.length === 0 || exports.node(value[0]));
	};

	/**
	 * Check if argument is a string.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.string = function(value) {
	    return typeof value === 'string'
	        || value instanceof String;
	};

	/**
	 * Check if argument is a function.
	 *
	 * @param {Object} value
	 * @return {Boolean}
	 */
	exports.fn = function(value) {
	    var type = Object.prototype.toString.call(value);

	    return type === '[object Function]';
	};


/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	var closest = __webpack_require__(180);

	/**
	 * Delegates event to a selector.
	 *
	 * @param {Element} element
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @param {Boolean} useCapture
	 * @return {Object}
	 */
	function delegate(element, selector, type, callback, useCapture) {
	    var listenerFn = listener.apply(this, arguments);

	    element.addEventListener(type, listenerFn, useCapture);

	    return {
	        destroy: function() {
	            element.removeEventListener(type, listenerFn, useCapture);
	        }
	    }
	}

	/**
	 * Finds closest match and invokes callback.
	 *
	 * @param {Element} element
	 * @param {String} selector
	 * @param {String} type
	 * @param {Function} callback
	 * @return {Function}
	 */
	function listener(element, selector, type, callback) {
	    return function(e) {
	        e.delegateTarget = closest(e.target, selector);

	        if (e.delegateTarget) {
	            callback.call(element, e);
	        }
	    }
	}

	module.exports = delegate;


/***/ },

/***/ 180:
/***/ function(module, exports) {

	var DOCUMENT_NODE_TYPE = 9;

	/**
	 * A polyfill for Element.matches()
	 */
	if (typeof Element !== 'undefined' && !Element.prototype.matches) {
	    var proto = Element.prototype;

	    proto.matches = proto.matchesSelector ||
	                    proto.mozMatchesSelector ||
	                    proto.msMatchesSelector ||
	                    proto.oMatchesSelector ||
	                    proto.webkitMatchesSelector;
	}

	/**
	 * Finds the closest parent that matches a selector.
	 *
	 * @param {Element} element
	 * @param {String} selector
	 * @return {Function}
	 */
	function closest (element, selector) {
	    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
	        if (element.matches(selector)) return element;
	        element = element.parentNode;
	    }
	}

	module.exports = closest;


/***/ },

/***/ 767:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(768)
	__vue_script__ = __webpack_require__(770)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/doc/views/base/icons-list.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(772)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/src/doc/views/base/icons-list.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 768:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(769);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../node_modules/sass-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./icons-list.vue", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js!../../../../node_modules/ks-autobem-loader/index.js?type=css!../../../../node_modules/sass-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./icons-list.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 769:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".ks-font-library li {\n  display: inline-block;\n  width: 80px;\n  padding: 12px 6px;\n  margin: 12px 0;\n  vertical-align: middle;\n  text-align: center;\n  border-radius: 2px;\n  cursor: pointer; }\n  .ks-font-library li:hover {\n    background: #42A5F5;\n    color: white; }\n", ""]);

	// exports


/***/ },

/***/ 770:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _clipboard = __webpack_require__(173);

	var _clipboard2 = _interopRequireDefault(_clipboard);

	var _icon2ClassMapper = __webpack_require__(771);

	var _icon2ClassMapper2 = _interopRequireDefault(_icon2ClassMapper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>
	//   <h3> 点击图标复制图标名称 ！！！</h3>
	//   <ul class="ks-font-library">
	//     <li v-for="(key, icon) in KsFonts" class="copy" @click="currentIcon = icon.des"
	//         data-clipboard-action="copy" :data-clipboard-target="'#iconName' + $index">
	//       <ks-icon :name="key" library="ks"></ks-icon>
	//       <h6 v-text="icon.des"></h6>
	//       <input type="text" :value="key" :id="'iconName' + $index" style="opacity: 0; position: absolute">
	//     </li>
	//   </ul>
	// </template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      KsFonts: _icon2ClassMapper2.default,
	      currentIcon: '',
	      clipborad: null
	    };
	  },
	  ready: function ready() {
	    var _this = this;

	    // 实现复制功能
	    this.clipboard = new _clipboard2.default('.copy');
	    this.clipboard.on('success', function () {
	      _this.$KsNotice.success('复制成功', '\u606D\u559C\u4F60\u6210\u529F\u590D\u5236\u4E86 ' + _this.currentIcon + ' \u56FE\u6807');
	    });
	  },
	  destroy: function destroy() {
	    // 销毁 Clipboard
	    this.clipboard.destroy();
	  }
	};
	// </script>
	//
	// <style lang="scss">
	//   .ks-font-library li {
	//     display: inline-block;
	//     width: 80px; padding: 12px 6px;
	//     margin: 12px 0;
	//     vertical-align: middle;
	//     text-align: center;
	//     border-radius: 2px;
	//     cursor: pointer;
	//
	//     &:hover {
	//       background: #42A5F5;
	//       color: white;
	//     }
	//   }
	// </style>

/***/ },

/***/ 771:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description 图标到 class 的映射.
	 * @author pkeros
	 * @data 2017/4/17
	 * @email pkeros@vip.qq.com
	 */

	exports.default = {
	  'nanrentouxiang': { des: '男人头像' },
	  'xiajiantou': { des: '下箭头' },
	  'shangjiantou': { des: '上箭头' },
	  'sanjiaojiantouxia': { des: '三角箭头-下' },
	  'lock': { des: '锁' },
	  'jianhao': { des: '减号' },
	  'chengshishitu': { des: '城市视图' },
	  'zhexianquyuxingupolylineshapedregion': { des: '折线区域形uPolyli' },
	  'shizhong': { des: '时钟' },
	  'xiangyoujiantou2': { des: 'XYJT2' },
	  'right-arrow': { des: '向右箭头' },
	  'weixinzhifu': { des: '微信支付' },
	  'appshusandian': { des: 'app竖三点' },
	  'chenggong': { des: '成功' },
	  'arrow-right': { des: '箭头右' },
	  'huoxuanzhong': { des: '火选中' },
	  'jiahao': { des: '加号' },
	  'triangle-copy-copy': { des: '三角形' },
	  'loading-copy': { des: '加载' },
	  'chenggong1': { des: '成功' },
	  'iconzhenghe31': { des: '人' },
	  '1-copy-copy': { des: '向右箭头' },
	  'icohongbao': { des: 'ico-_红包' },
	  'icohongbaoyouhui': { des: 'ico-_红包优惠' },
	  'icohuiyuan': { des: 'ico-_会员' },
	  'icohui': { des: 'ico-_惠' },
	  'icoji': { des: 'ico-_积' },
	  'icohome': { des: 'ico-_home' },
	  'icomap': { des: 'ico-_map' },
	  'icostar': { des: 'ico-_star' },
	  'icowifi': { des: 'ico-_wifi' },
	  'icochongzhihuodong': { des: 'ico-_充值活动' },
	  'icochu': { des: 'ico-_储' },
	  'icochuzhiqia': { des: 'ico-_储值卡' },
	  'icoerweima': { des: 'ico-_二维码' },
	  'icofanhui': { des: 'ico-_返回' },
	  'icofujinmendian': { des: 'ico-_附近门店' },
	  'icoyanzhengma': { des: 'ico-_验证码' },
	  'icoyouhuiquan': { des: 'ico-_优惠券' },
	  'icozhekou': { des: 'ico-_折扣' },
	  'ico12': { des: 'ico--12' },
	  'icojifen': { des: 'ico-_积分' },
	  'icojifenhuodong': { des: 'ico-_积分活动' },
	  'icojiasu': { des: 'ico-_加速' },
	  'icolipin': { des: 'ico-_礼品' },
	  'icomendian': { des: 'ico-_门店' },
	  'icoshengri': { des: 'ico-_生日' },
	  'icoshouji': { des: 'ico-_手机' },
	  'icotequan': { des: 'ico-_特权' },
	  'icoxiaofeiyouhui': { des: 'ico-_消费优惠' },
	  'icoxingbie': { des: 'ico-_性别' },
	  'bangzhu': { des: '帮助' },
	  'daohangico': { des: '导航ico' },
	  'kongico': { des: 'kong ico' },
	  'jiayouzhanico': { des: '加油站ico' },
	  'jiantou': { des: '箭头' },
	  'rentouliangrenhover': { des: '人头-两人，江苏新东方' },
	  'copy': { des: '% copy' },
	  'anonymous-iconfont': { des: '￥' },
	  'copy1': { des: '加号' },
	  'copy2': { des: '减号' },
	  'anonymous-iconfont1': { des: '$' },
	  'danxuanweixuan': { des: '单选-未选' },
	  'danxuanxuanze': { des: '单选-选择' },
	  'fuxuanbukexuan': { des: '复选-不可选' },
	  'fuxuanweixuan': { des: '复选-未选' },
	  'fuxuanxuanze': { des: '复选-选择' },
	  'anquanzhongxin': { des: '安全中心' },
	  'chenggongtubiao': { des: '成功图标' },
	  'cuowu': { des: '错误' },
	  'cuowutubiao': { des: '错误图标' },
	  'jibenshezhi': { des: '基本设置' },
	  'jiaoyiguanli': { des: '交易管理' },
	  'mendian': { des: '门店' },
	  'guanbitubiaoanniu': { des: '关闭图标按钮' },
	  'huiyuanqia': { des: '会员卡' },
	  'jifen': { des: '积分' },
	  'quedingxiaotubiao': { des: '确定小图标' },
	  'rili': { des: '日历' },
	  'shijian': { des: '时间' },
	  'sousuo': { des: '搜索' },
	  'quxiaoxiaotubiao': { des: '取消小图标' },
	  'xialajiantou': { des: '下拉箭头' },
	  'xianjinhongbao': { des: '现金红包' },
	  'xinxitubiao': { des: '信息图标' },
	  'yingxiao': { des: '营销' },
	  'yonghu': { des: '用户' },
	  'zhengque': { des: '正确' },
	  'zhuyi': { des: '注意' },
	  'xialajiantoufuben': { des: '下拉箭头-副本' },
	  'chuzhiqia': { des: '储值卡' },
	  'hongbaoicocopy': { des: '红包ico copy' },
	  'shuzi': { des: '数字-.' },
	  'shuzi0': { des: '数字-0' },
	  'shuzi01': { des: '数字-01' },
	  'shuzi02': { des: '数字-02' },
	  'shuzi03': { des: '数字-03' },
	  'shuzi04': { des: '数字-04' },
	  'shuzi05': { des: '数字-05' },
	  'shuzi06': { des: '数字-06' },
	  'shuzi08': { des: '数字-08' },
	  'shuzi09': { des: '数字-09' },
	  'jiazai': { des: '加载' },
	  'jiahao1': { des: '加号' },
	  'jianhao1': { des: '减号' },
	  'buzoupen': { des: '步骤-pen' },
	  'biaogegengduoneirongico': { des: '表格更多内容ico' },
	  'quanxiancaozuoico': { des: '权限操作ico' },
	  'shanchuico': { des: '删除ico' },
	  'shezhiico': { des: '设置ico' },
	  'shouyeico': { des: '首页ico' },
	  'excel': { des: 'excel' },
	  'gongsi': { des: '公司' },
	  'bumen': { des: '部门' },
	  'daqu': { des: '大区' },
	  'xiangshangjiantou': { des: '向上箭头' },
	  'xiangxiajiantou': { des: '向下箭头' }

	};

/***/ },

/***/ 772:
/***/ function(module, exports) {

	module.exports = "\n<h3> 点击图标复制图标名称 ！！！</h3>\n<ul class=\"ks-font-library\">\n  <li v-for=\"(key, icon) in KsFonts\" class=\"copy\" @click=\"currentIcon = icon.des\"\n      data-clipboard-action=\"copy\" :data-clipboard-target=\"'#iconName' + $index\">\n    <ks-icon :name=\"key\" library=\"ks\"></ks-icon>\n    <h6 v-text=\"icon.des\"></h6>\n    <input type=\"text\" :value=\"key\" :id=\"'iconName' + $index\" style=\"opacity: 0; position: absolute\">\n  </li>\n</ul>\n";

/***/ }

});