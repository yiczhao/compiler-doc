webpackJsonp([27],{

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(173);

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(174)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/modal-23.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(175)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/modal-23.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 174:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template><section><h2>Modal 弹窗面板</h2>
	// <blockquote>
	// <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
	// </blockquote>
	// <hr>
	// <h3>基础使用</h3>
	// <h4>弹窗组件的基础使用（KsModalEntity）</h4>
	// <br>
	// <p><ks-switch :checked.sync="modalShow"></ks-switch><br>
	// <ks-modal-entity :show.sync="modalShow" title="通过 Slot 自定义标题" content="通过 Slot 自定义内容"><br>
	// </ks-modal-entity></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-switch</span> <span class="hljs-attr">:checked.sync</span>=<span class="hljs-string">"modalShow"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-switch</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-modal-entity</span> <span class="hljs-attr">:show.sync</span>=<span class="hljs-string">"modalShow"</span>&gt;</span>
	//   <span class="hljs-comment">&lt;!-- ! 注意: 作为 slot 的包裹元素最好使用行内元素 --&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>通过 Slot 自定义标题<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"content"</span>&gt;</span>通过 Slot 自定义内容<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">ks-modal-entity</span>&gt;</span>
	// </code></pre>
	// <blockquote>
	// <p><code class="ks-code-inline">KsModal</code> 组件和 <code class="ks-code-inline">KsDialog</code> 组件的 API 使用方法差不多，所以在此我就不再多赘述了。</p>
	// </blockquote>
	// <br>
	// <h4>通过方法调用组件（KsModal）</h4>
	// <br>
	// <p><ks-button @click="showModal">呼出 KsModal 组件</ks-button></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"showModal"</span>&gt;</span>呼出 KsModal 组件<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span>
	// </code></pre>
	// <pre class="ks-hljs"><code><span class="hljs-comment">/**
	//  * @description info, warn, success, primary, normal 这几个原型上的方法都是都是对应风格的 modal 组件
	//  * 显示的 modal  showConfirmBtn: true, 有取消, 有关闭, 有确定按钮。
	//                 showCancelBtn: true,
	//                 showCloseBtn: true,
	//
	//  * @param content {String} 显示的内容
	//  * @param title {String} 显示的标题
	//  */</span>
	// $KsModal.info (content, title);            <span class="hljs-comment">// info 风格的 modal</span>
	// $KsModal.warn (content, title);            <span class="hljs-comment">// warn 风格的 modal</span>
	// $KsModal.success (content, title);         <span class="hljs-comment">// success 风格的 modal</span>
	// $KsModal.primary (content, title);         <span class="hljs-comment">// primary 风格的 modal</span>
	// $KsModal.normal (content, title);          <span class="hljs-comment">// normal 风格的 modal</span>
	//
	//
	// <span class="hljs-comment">/**
	//  * @description prompt 类型模态
	//  * @summary
	//  *  提示类型也是默认的类型, 拥有确定取消并且有关闭按钮.
	//  * @param content {String} 显示的内容
	//  * @param title {String} 标题
	//  * @param hue {String} 色调
	//  * @param options {Object} 附加配置项
	//  */</span>
	// $KsModal.prompt (content, title, hue, options);
	//
	// <span class="hljs-comment">/**
	//  * @description confirm 类型模态
	//  * @summary
	//  *  这是一种只有确定和取消的模态, 用户必须做出选择.
	//  * @param content {String} 显示的内容
	//  * @param title {String} 标题
	//  * @param hue {String} 色调
	//  * @param options {Object} 附加配置项
	//  */</span>
	// $KsModal.confirm (content, title, hue, options);
	//
	// <span class="hljs-comment">/**
	//  * @description 警告类型模态
	//  * @summary
	//  *  这是一种没有取消和确定的的模态类型, 我们称它为警告类型
	//  *  一般警告类型的运用场景就是弹出一些信息展示给用户, 没有相关后续操作.
	//  *  @param content {String} 显示的内容
	//  *  @param title {String} 标题
	//  *  @param hue {String} 色调
	//  *  @param options {Object} 附加配置项
	//  */</span>
	// $KsModal.alert (content, title, hue, options);
	//
	// <span class="hljs-comment">// options 默认配置和配置内容</span>
	// <span class="hljs-keyword">let</span> defaults = {
	//   <span class="hljs-attr">showConfirmBtn</span>: <span class="hljs-literal">true</span>,
	//   <span class="hljs-attr">showCancelBtn</span>: <span class="hljs-literal">true</span>,
	//   <span class="hljs-attr">showCloseBtn</span>: <span class="hljs-literal">true</span>,
	//   <span class="hljs-attr">cancelBtnText</span>: <span class="hljs-string">'取消'</span>,
	//   <span class="hljs-attr">confirmBtnText</span>: <span class="hljs-string">'确定'</span>,
	//   <span class="hljs-attr">mask</span>: <span class="hljs-literal">true</span>,
	//   <span class="hljs-attr">title</span>: <span class="hljs-string">'Title'</span>,
	//   <span class="hljs-attr">content</span>: <span class="hljs-string">'Content...'</span>,
	//   <span class="hljs-attr">type</span>: <span class="hljs-string">'normal'</span>
	// }
	// </code></pre>
	// <blockquote>
	// <p>上面就是 <code class="ks-code-inline">KsModal</code> 对象上的一些方法，以及区别于 <code class="ks-code-inline">KsDialog</code> 的部分。其他的使用方法与技巧与 <code class="ks-code-inline">KsDialog</code> 相同。</p>
	// </blockquote>
	// <br>
	// <h4>全屏模态承载大量业务逻辑 （KsModalCenter）</h4>
	// <br>
	// <p><ks-button @click="showModalCenter">呼出 KsModalCenter 组件</ks-button><br>
	// <ks-modal-center :show.sync="modalShowCenter" width="1000" title="呼出 KsModalCenter 组件"><br>
	// <template slot="content"><div style="width: 100%; height: 1000px;background: #f59f00"></div></template><br>
	// </ks-modal-center></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"showModalCenter"</span>&gt;</span>呼出 KsModalCenter 组件<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-modal-center</span> <span class="hljs-attr">:show.sync</span>=<span class="hljs-string">"modalShowCenter"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"1000"</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"呼出 KsModalCenter 组件"</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>呼出 KsModalCenter 组件<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"content"</span>&gt;</span>
	//     <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 100%; height: 1000px;background: #f59f00"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
	//   <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">ks-modal-center</span>&gt;</span>
	// </code></pre>
	// <h3>脚本</h3>
	//
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
	//   <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
	//     data () {
	//       <span class="hljs-keyword">return</span> {
	//         <span class="hljs-attr">modalShow</span>: <span class="hljs-literal">false</span>,
	//         <span class="hljs-attr">modalShowCenter</span>: <span class="hljs-literal">false</span>,
	//       }
	//     },
	//
	//     <span class="hljs-attr">methods</span>: {
	//       showModal () {
	//         <span class="hljs-keyword">this</span>.$KsModal.info(<span class="hljs-string">'1'</span>, <span class="hljs-string">'2'</span>, <span class="hljs-string">'3'</span>)();
	//       },
	//
	//       showModalCenter () {
	//         <span class="hljs-keyword">this</span>.modalShowCenter = <span class="hljs-literal">true</span>;
	//       }
	//     }
	//   }
	// </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	// </code></pre>
	// <h3>API</h3>
	// <h4>KsModal / KsModalEntity</h4>
	// <div class="table-striped"><table class="table-entity"><thead>
	// <tr>
	// <th>参数</th>
	// <th>说明</th>
	// <th>接口类型</th>
	// <th>类型</th>
	// <th>双向（twoWay）</th>
	// <th>是否必须</th>
	// <th>可选值</th>
	// <th>默认值</th>
	// </tr>
	// </thead>
	// <tbody>
	// <tr>
	// <td>showCloseBtn</td>
	// <td>用来描述 <code class="ks-code-inline">KsModal</code> 是否显示关闭按钮</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td><code class="ks-code-inline">true</code></td>
	// </tr>
	// <tr>
	// <td>showConfirmBtn</td>
	// <td>用来描述 <code class="ks-code-inline">KsModal</code> 是否显示确定按钮</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td><code class="ks-code-inline">true</code></td>
	// </tr>
	// <tr>
	// <td>showCancelBtn</td>
	// <td>用来描述 <code class="ks-code-inline">KsModal</code> 是否显示取消按钮</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td><code class="ks-code-inline">true</code></td>
	// </tr>
	// <tr>
	// <td>cancelBtnText</td>
	// <td>用来描述当前 <code class="ks-code-inline">KsModal</code> 取消按钮的文字</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td>取消</td>
	// </tr>
	// <tr>
	// <td>confirmBtnText</td>
	// <td>用来描述当前 <code class="ks-code-inline">KsModal</code> 确定按钮的文字</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td>确定</td>
	// </tr>
	// <tr>
	// <td>title</td>
	// <td>用来描述当前 <code class="ks-code-inline">KsModal</code> 标题的文字</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td>无</td>
	// </tr>
	// <tr>
	// <td>content</td>
	// <td>用来描述当前 <code class="ks-code-inline">KsModal</code> 内容的文字</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td>无</td>
	// </tr>
	// <tr>
	// <td>type</td>
	// <td>用来描述当前 <code class="ks-code-inline">KsModal</code> 的类型</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td><code class="ks-code-inline">success</code>, <code class="ks-code-inline">info</code>, <code class="ks-code-inline">warn</code>, <code class="ks-code-inline">danger</code>, <code class="ks-code-inline">primary</code>, <code class="ks-code-inline">normal</code></td>
	// <td><code class="ks-code-inline">normal</code></td>
	// </tr>
	// <tr>
	// <td>show</td>
	// <td>用来描述当前 <code class="ks-code-inline">KsModal</code> 是否显示</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">true</code></td>
	// <td>是</td>
	// <td>无</td>
	// <td>无</td>
	// </tr>
	// <tr>
	// <td>@confirm</td>
	// <td><code class="ks-code-inline">KsModal</code> 确定按钮点击 事件</td>
	// <td>event</td>
	// <td>-</td>
	// <td>-</td>
	// <td>否</td>
	// <td>-</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>@cancel</td>
	// <td><code class="ks-code-inline">KsModal</code> 取消按钮点击 事件</td>
	// <td>event</td>
	// <td>-</td>
	// <td>-</td>
	// <td>否</td>
	// <td>-</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>@close</td>
	// <td><code class="ks-code-inline">KsModal</code> 关闭按钮点击 事件</td>
	// <td>event</td>
	// <td>-</td>
	// <td>-</td>
	// <td>否</td>
	// <td>-</td>
	// <td>-</td>
	// </tr>
	// </tbody>
	// </table></div><h4>KsModalCenter</h4>
	// <div class="table-striped"><table class="table-entity"><thead>
	// <tr>
	// <th>参数</th>
	// <th>说明</th>
	// <th>接口类型</th>
	// <th>类型</th>
	// <th>双向（twoWay）</th>
	// <th>是否必须</th>
	// <th>可选值</th>
	// <th>默认值</th>
	// </tr>
	// </thead>
	// <tbody>
	// <tr>
	// <td>showCloseBtn</td>
	// <td>用来描述 <code class="ks-code-inline">KsModal</code> 是否显示关闭按钮</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td><code class="ks-code-inline">true</code></td>
	// </tr>
	// <tr>
	// <td>showConfirmBtn</td>
	// <td>用来描述 <code class="ks-code-inline">KsModal</code> 是否显示确定按钮</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td><code class="ks-code-inline">true</code></td>
	// </tr>
	// <tr>
	// <td>showCancelBtn</td>
	// <td>用来描述 <code class="ks-code-inline">KsModal</code> 是否显示取消按钮</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td><code class="ks-code-inline">true</code></td>
	// </tr>
	// <tr>
	// <td>cancelBtnText</td>
	// <td>用来描述当前 <code class="ks-code-inline">KsModal</code> 取消按钮的文字</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td>取消</td>
	// </tr>
	// <tr>
	// <td>confirmBtnText</td>
	// <td>用来描述当前 <code class="ks-code-inline">KsModal</code> 确定按钮的文字</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td>确定</td>
	// </tr>
	// <tr>
	// <td>mask</td>
	// <td>用来描述当前 <code class="ks-code-inline">KsModal</code> 是否含有背景遮罩</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td><code class="ks-code-inline">true</code></td>
	// </tr>
	// <tr>
	// <td>title</td>
	// <td>用来描述当前 <code class="ks-code-inline">KsModal</code> 标题的文字</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td>无</td>
	// </tr>
	// <tr>
	// <td>content</td>
	// <td>用来描述当前 <code class="ks-code-inline">KsModal</code> 内容的文字</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td>无</td>
	// </tr>
	// <tr>
	// <td>type</td>
	// <td>用来描述当前 <code class="ks-code-inline">KsModal</code> 的类型</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td><code class="ks-code-inline">success</code>, <code class="ks-code-inline">info</code>, <code class="ks-code-inline">warn</code>, <code class="ks-code-inline">danger</code>, <code class="ks-code-inline">primary</code>, <code class="ks-code-inline">normal</code></td>
	// <td><code class="ks-code-inline">normal</code></td>
	// </tr>
	// <tr>
	// <td>show</td>
	// <td>用来描述当前 <code class="ks-code-inline">KsModal</code> 是否显示</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">true</code></td>
	// <td>是</td>
	// <td>无</td>
	// <td>无</td>
	// </tr>
	// <tr>
	// <td>@confirm</td>
	// <td><code class="ks-code-inline">KsModal</code> 确定按钮点击 事件</td>
	// <td>event</td>
	// <td>-</td>
	// <td>-</td>
	// <td>否</td>
	// <td>-</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>@cancel</td>
	// <td><code class="ks-code-inline">KsModal</code> 取消按钮点击 事件</td>
	// <td>event</td>
	// <td>-</td>
	// <td>-</td>
	// <td>否</td>
	// <td>-</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>@close</td>
	// <td><code class="ks-code-inline">KsModal</code> 关闭按钮点击 事件</td>
	// <td>event</td>
	// <td>-</td>
	// <td>-</td>
	// <td>否</td>
	// <td>-</td>
	// <td>-</td>
	// </tr>
	// </tbody>
	// </table></div></section></template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      modalShow: false,
	      modalShowCenter: false
	    };
	  },


	  methods: {
	    showModal: function showModal() {
	      this.$KsModal.info('1', '2', '3')();
	    },
	    showModalCenter: function showModalCenter() {
	      this.modalShowCenter = true;
	    }
	  }
	};
	// </script>

/***/ },

/***/ 175:
/***/ function(module, exports) {

	module.exports = "<section><h2>Modal 弹窗面板</h2>\n<blockquote>\n<p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>\n</blockquote>\n<hr>\n<h3>基础使用</h3>\n<h4>弹窗组件的基础使用（KsModalEntity）</h4>\n<br>\n<p><ks-switch :checked.sync=\"modalShow\"></ks-switch><br>\n<ks-modal-entity :show.sync=\"modalShow\" title=\"通过 Slot 自定义标题\" content=\"通过 Slot 自定义内容\"><br>\n</ks-modal-entity></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-switch</span> <span class=\"hljs-attr\">:checked.sync</span>=<span class=\"hljs-string\">\"modalShow\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-switch</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-modal-entity</span> <span class=\"hljs-attr\">:show.sync</span>=<span class=\"hljs-string\">\"modalShow\"</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- ! 注意: 作为 slot 的包裹元素最好使用行内元素 --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">slot</span>=<span class=\"hljs-string\">\"title\"</span>&gt;</span>通过 Slot 自定义标题<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">slot</span>=<span class=\"hljs-string\">\"content\"</span>&gt;</span>通过 Slot 自定义内容<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-modal-entity</span>&gt;</span>\n</code></pre>\n<blockquote>\n<p><code class=\"ks-code-inline\">KsModal</code> 组件和 <code class=\"ks-code-inline\">KsDialog</code> 组件的 API 使用方法差不多，所以在此我就不再多赘述了。</p>\n</blockquote>\n<br>\n<h4>通过方法调用组件（KsModal）</h4>\n<br>\n<p><ks-button @click=\"showModal\">呼出 KsModal 组件</ks-button></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-button</span> <span class=\"hljs-attr\">@click</span>=<span class=\"hljs-string\">\"showModal\"</span>&gt;</span>呼出 KsModal 组件<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-button</span>&gt;</span>\n</code></pre>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-comment\">/**\n * @description info, warn, success, primary, normal 这几个原型上的方法都是都是对应风格的 modal 组件\n * 显示的 modal  showConfirmBtn: true, 有取消, 有关闭, 有确定按钮。\n                showCancelBtn: true,\n                showCloseBtn: true,\n                \n * @param content {String} 显示的内容\n * @param title {String} 显示的标题\n */</span>\n$KsModal.info (content, title);            <span class=\"hljs-comment\">// info 风格的 modal</span>\n$KsModal.warn (content, title);            <span class=\"hljs-comment\">// warn 风格的 modal</span>\n$KsModal.success (content, title);         <span class=\"hljs-comment\">// success 风格的 modal</span>\n$KsModal.primary (content, title);         <span class=\"hljs-comment\">// primary 风格的 modal</span>\n$KsModal.normal (content, title);          <span class=\"hljs-comment\">// normal 风格的 modal</span>\n\n\n<span class=\"hljs-comment\">/**\n * @description prompt 类型模态\n * @summary\n *  提示类型也是默认的类型, 拥有确定取消并且有关闭按钮.\n * @param content {String} 显示的内容\n * @param title {String} 标题\n * @param hue {String} 色调\n * @param options {Object} 附加配置项\n */</span>\n$KsModal.prompt (content, title, hue, options);\n\n<span class=\"hljs-comment\">/**\n * @description confirm 类型模态\n * @summary\n *  这是一种只有确定和取消的模态, 用户必须做出选择.\n * @param content {String} 显示的内容\n * @param title {String} 标题\n * @param hue {String} 色调\n * @param options {Object} 附加配置项\n */</span>\n$KsModal.confirm (content, title, hue, options);\n\n<span class=\"hljs-comment\">/**\n * @description 警告类型模态\n * @summary\n *  这是一种没有取消和确定的的模态类型, 我们称它为警告类型\n *  一般警告类型的运用场景就是弹出一些信息展示给用户, 没有相关后续操作.\n *  @param content {String} 显示的内容\n *  @param title {String} 标题\n *  @param hue {String} 色调\n *  @param options {Object} 附加配置项\n */</span>\n$KsModal.alert (content, title, hue, options);\n\n<span class=\"hljs-comment\">// options 默认配置和配置内容</span>\n<span class=\"hljs-keyword\">let</span> defaults = {\n  <span class=\"hljs-attr\">showConfirmBtn</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">showCancelBtn</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">showCloseBtn</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">cancelBtnText</span>: <span class=\"hljs-string\">'取消'</span>,\n  <span class=\"hljs-attr\">confirmBtnText</span>: <span class=\"hljs-string\">'确定'</span>,\n  <span class=\"hljs-attr\">mask</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'Title'</span>,\n  <span class=\"hljs-attr\">content</span>: <span class=\"hljs-string\">'Content...'</span>,\n  <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">'normal'</span>\n}\n</code></pre>\n<blockquote>\n<p>上面就是 <code class=\"ks-code-inline\">KsModal</code> 对象上的一些方法，以及区别于 <code class=\"ks-code-inline\">KsDialog</code> 的部分。其他的使用方法与技巧与 <code class=\"ks-code-inline\">KsDialog</code> 相同。</p>\n</blockquote>\n<br>\n<h4>全屏模态承载大量业务逻辑 （KsModalCenter）</h4>\n<br>\n<p><ks-button @click=\"showModalCenter\">呼出 KsModalCenter 组件</ks-button><br>\n<ks-modal-center :show.sync=\"modalShowCenter\" width=\"1000\" title=\"呼出 KsModalCenter 组件\"><br>\n<template slot=\"content\"><div style=\"width: 100%; height: 1000px;background: #f59f00\"></div></template><br>\n</ks-modal-center></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-button</span> <span class=\"hljs-attr\">@click</span>=<span class=\"hljs-string\">\"showModalCenter\"</span>&gt;</span>呼出 KsModalCenter 组件<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-modal-center</span> <span class=\"hljs-attr\">:show.sync</span>=<span class=\"hljs-string\">\"modalShowCenter\"</span> <span class=\"hljs-attr\">width</span>=<span class=\"hljs-string\">\"1000\"</span> <span class=\"hljs-attr\">title</span>=<span class=\"hljs-string\">\"呼出 KsModalCenter 组件\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span> <span class=\"hljs-attr\">slot</span>=<span class=\"hljs-string\">\"title\"</span>&gt;</span>呼出 KsModalCenter 组件<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">template</span> <span class=\"hljs-attr\">slot</span>=<span class=\"hljs-string\">\"content\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"width: 100%; height: 1000px;background: #f59f00\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">template</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-modal-center</span>&gt;</span>\n</code></pre>\n<h3>脚本</h3>\n\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span>{\n    data () {\n      <span class=\"hljs-keyword\">return</span> {\n        <span class=\"hljs-attr\">modalShow</span>: <span class=\"hljs-literal\">false</span>,\n        <span class=\"hljs-attr\">modalShowCenter</span>: <span class=\"hljs-literal\">false</span>,\n      }\n    },\n    \n    <span class=\"hljs-attr\">methods</span>: {\n      showModal () {\n        <span class=\"hljs-keyword\">this</span>.$KsModal.info(<span class=\"hljs-string\">'1'</span>, <span class=\"hljs-string\">'2'</span>, <span class=\"hljs-string\">'3'</span>)();\n      },\n      \n      showModalCenter () {\n        <span class=\"hljs-keyword\">this</span>.modalShowCenter = <span class=\"hljs-literal\">true</span>;\n      }\n    }\n  }\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre>\n<h3>API</h3>\n<h4>KsModal / KsModalEntity</h4>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>双向（twoWay）</th>\n<th>是否必须</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>showCloseBtn</td>\n<td>用来描述 <code class=\"ks-code-inline\">KsModal</code> 是否显示关闭按钮</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td><code class=\"ks-code-inline\">true</code></td>\n</tr>\n<tr>\n<td>showConfirmBtn</td>\n<td>用来描述 <code class=\"ks-code-inline\">KsModal</code> 是否显示确定按钮</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td><code class=\"ks-code-inline\">true</code></td>\n</tr>\n<tr>\n<td>showCancelBtn</td>\n<td>用来描述 <code class=\"ks-code-inline\">KsModal</code> 是否显示取消按钮</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td><code class=\"ks-code-inline\">true</code></td>\n</tr>\n<tr>\n<td>cancelBtnText</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">KsModal</code> 取消按钮的文字</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td>取消</td>\n</tr>\n<tr>\n<td>confirmBtnText</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">KsModal</code> 确定按钮的文字</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td>确定</td>\n</tr>\n<tr>\n<td>title</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">KsModal</code> 标题的文字</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td>无</td>\n</tr>\n<tr>\n<td>content</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">KsModal</code> 内容的文字</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td>无</td>\n</tr>\n<tr>\n<td>type</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">KsModal</code> 的类型</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td><code class=\"ks-code-inline\">success</code>, <code class=\"ks-code-inline\">info</code>, <code class=\"ks-code-inline\">warn</code>, <code class=\"ks-code-inline\">danger</code>, <code class=\"ks-code-inline\">primary</code>, <code class=\"ks-code-inline\">normal</code></td>\n<td><code class=\"ks-code-inline\">normal</code></td>\n</tr>\n<tr>\n<td>show</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">KsModal</code> 是否显示</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">true</code></td>\n<td>是</td>\n<td>无</td>\n<td>无</td>\n</tr>\n<tr>\n<td>@confirm</td>\n<td><code class=\"ks-code-inline\">KsModal</code> 确定按钮点击 事件</td>\n<td>event</td>\n<td>-</td>\n<td>-</td>\n<td>否</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>@cancel</td>\n<td><code class=\"ks-code-inline\">KsModal</code> 取消按钮点击 事件</td>\n<td>event</td>\n<td>-</td>\n<td>-</td>\n<td>否</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>@close</td>\n<td><code class=\"ks-code-inline\">KsModal</code> 关闭按钮点击 事件</td>\n<td>event</td>\n<td>-</td>\n<td>-</td>\n<td>否</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table></div><h4>KsModalCenter</h4>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>双向（twoWay）</th>\n<th>是否必须</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>showCloseBtn</td>\n<td>用来描述 <code class=\"ks-code-inline\">KsModal</code> 是否显示关闭按钮</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td><code class=\"ks-code-inline\">true</code></td>\n</tr>\n<tr>\n<td>showConfirmBtn</td>\n<td>用来描述 <code class=\"ks-code-inline\">KsModal</code> 是否显示确定按钮</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td><code class=\"ks-code-inline\">true</code></td>\n</tr>\n<tr>\n<td>showCancelBtn</td>\n<td>用来描述 <code class=\"ks-code-inline\">KsModal</code> 是否显示取消按钮</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td><code class=\"ks-code-inline\">true</code></td>\n</tr>\n<tr>\n<td>cancelBtnText</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">KsModal</code> 取消按钮的文字</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td>取消</td>\n</tr>\n<tr>\n<td>confirmBtnText</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">KsModal</code> 确定按钮的文字</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td>确定</td>\n</tr>\n<tr>\n<td>mask</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">KsModal</code> 是否含有背景遮罩</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td><code class=\"ks-code-inline\">true</code></td>\n</tr>\n<tr>\n<td>title</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">KsModal</code> 标题的文字</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td>无</td>\n</tr>\n<tr>\n<td>content</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">KsModal</code> 内容的文字</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td>无</td>\n</tr>\n<tr>\n<td>type</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">KsModal</code> 的类型</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td><code class=\"ks-code-inline\">success</code>, <code class=\"ks-code-inline\">info</code>, <code class=\"ks-code-inline\">warn</code>, <code class=\"ks-code-inline\">danger</code>, <code class=\"ks-code-inline\">primary</code>, <code class=\"ks-code-inline\">normal</code></td>\n<td><code class=\"ks-code-inline\">normal</code></td>\n</tr>\n<tr>\n<td>show</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">KsModal</code> 是否显示</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">true</code></td>\n<td>是</td>\n<td>无</td>\n<td>无</td>\n</tr>\n<tr>\n<td>@confirm</td>\n<td><code class=\"ks-code-inline\">KsModal</code> 确定按钮点击 事件</td>\n<td>event</td>\n<td>-</td>\n<td>-</td>\n<td>否</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>@cancel</td>\n<td><code class=\"ks-code-inline\">KsModal</code> 取消按钮点击 事件</td>\n<td>event</td>\n<td>-</td>\n<td>-</td>\n<td>否</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>@close</td>\n<td><code class=\"ks-code-inline\">KsModal</code> 关闭按钮点击 事件</td>\n<td>event</td>\n<td>-</td>\n<td>-</td>\n<td>否</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table></div></section>";

/***/ }

});