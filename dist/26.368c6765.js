webpackJsonp([26],{

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(169);

/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(170)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/dialog-22.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(171)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/dialog-22.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 170:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template><section><h2>Dialog 弹窗面板</h2>
	// <blockquote>
	// <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
	// </blockquote>
	// <hr>
	// <h3>基础使用</h3>
	// <h4>弹窗组件的基础使用（KsDialog / KsDialogEntity）</h4>
	// <br>
	// <p><ks-switch :checked.sync="dialogShow"></ks-switch><br>
	// <ks-dialog-entity :show.sync="dialogShow"><br>
	// <span slot="title">通过 Slot 自定义标题</span><br>
	// <span slot="text">通过 Slot 自定义内容</span><br>
	// </ks-dialog-entity></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-switch</span> <span class="hljs-attr">:checked.sync</span>=<span class="hljs-string">"dialogShow"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-switch</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-dialog-entity</span> <span class="hljs-attr">:show.sync</span>=<span class="hljs-string">"dialogShow"</span>&gt;</span>
	//   <span class="hljs-comment">&lt;!-- ! 注意: 作为 slot 的包裹元素最好使用行内元素 --&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>通过 Slot 自定义标题<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"text"</span>&gt;</span>通过 Slot 自定义内容<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">ks-dialog-entity</span>&gt;</span>
	// </code></pre>
	// <blockquote>
	// <p>这是基本的使用 <code class="ks-code-inline">Ksdialog</code> 组件的方法, 通过其他属性我们还可以定义是否显示取消按钮,<br>
	// 取消按钮显示的文字, 确定按钮显示的文字, 对话框的类型, 是否显示 mask 等等诸多细节。</p>
	// </blockquote>
	// <br>
	// <h4>弹窗组件的其他使用方式</h4>
	// <blockquote>
	// <p>在看到上述的使用方式后你肯定有些疑问, 我只想简单的显示一个对话框提醒用户让用户做出选择都要写这么麻烦的代码吗？<br>
	// 是的这确实是一个问题, 在项目越来越复杂之后我们重复冗余的代码也越来越多, 不过幸好我们找到了解决办法</p>
	// </blockquote>
	// <br>
	// <p><ks-button @click="showDialog">呼出 KsDialog 组件</ks-button></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"showDialog"</span>&gt;</span>呼出 KsDialog 组件<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span>
	// </code></pre>
	// <blockquote>
	// <p>wow exciting !! 如你所见很简单，一个简单的函数调用就可以了，相比之前那些大片大片的代码真的是能方便不少，那么使用变得如此简单<br>
	// 那么功能是否也相应减少了呢？不！代码减少，功能一个不少！<br>
	// 来让我们一步一步分析调用他的代码，首先通过挂载在 <code class="ks-code-inline">VueComponent</code> 对象上的 <code class="ks-code-inline">$Ksdialog</code> 对象的 <code class="ks-code-inline">info</code> 方法创建了一个<br>
	// 类型为 <code class="ks-code-inline">info</code> 类型的对话框并传入了相关参数 标题 内容 等等，然后调用它其接受一个确定按钮的回调函数，和一个取消按钮的回调函数。</p>
	// </blockquote>
	// <br> 
	// <blockquote>
	// <p>下面让我们来详细介绍下 <code class="ks-code-inline">$KsDialog</code> 对象上所提供的能力：<br>
	// 如你所料 <code class="ks-code-inline">$KsDialog</code> 上提供了与类型对应的函数来产生不同类型的对话框。与设计标准一样对话框类型一共有四种：<code class="ks-code-inline">success</code>, <code class="ks-code-inline">info</code>, <code class="ks-code-inline">warn</code>, <code class="ks-code-inline">danger</code></p>
	// </blockquote>
	// <pre class="ks-hljs"><code><span class="hljs-comment">//                   内容      标题  是否显示取消按钮</span>
	// <span class="hljs-comment">//                    ^         ^         ^</span>
	// $KsDialog.success(<span class="hljs-string">'content'</span>, <span class="hljs-string">'title'</span>, <span class="hljs-string">'cancel'</span>)(confirmCallback, cancelCallback);
	//
	// <span class="hljs-comment">/**
	//  * 以上的文档说过调用里传入的第一参数是确定的回调函数, 那么我们在没有传入确定的回调函数的情况下为什么点击确定他会关闭？
	//  * 之所以会有这样的行为是应为 `confirmCallback` 默认函数就是 `$KsDialog.close`, 所以如果你只想通知一条信息给用户那么
	//  * 就可以直接不传免去了手动调用 `$KsDialog.close` 方法的烦恼。
	//  */</span>
	// </code></pre>
	// <blockquote>
	// <p>上面的代码示例详细展示描述了各个参数分别是什么含义有什么作用，其实每个参数都有默认值 <code class="ks-code-inline">content</code> 默认是 <code class="ks-code-inline">Content...</code><br>
	// <code class="ks-code-inline">title</code> 默认是 <code class="ks-code-inline">Title</code>， <code class="ks-code-inline">cancel</code> 默认是 <code class="ks-code-inline">false</code>，参数的顺序也是按照参数的重要性来设计的，你需要显示一个对话框那么最重要的肯定是内容<br>
	// 标题其次，等等一些其他的参数。</p>
	// </blockquote>
	// <br>
	// <blockquote>
	// <p><strong>这里在叨唠一句通过 <code class="ks-code-inline">$KsDialog</code> 方式调用的会话框是设计成队列的，也就是说不管你同时或者非同时调用多个对话框，它都会显示出来，在上一个关闭的时候显示下一个。</strong></p>
	// </blockquote>
	//
	// <h3>脚本</h3>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
	//   <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
	//     data () {
	//       <span class="hljs-keyword">return</span> {
	//         <span class="hljs-attr">dialogShow</span>: <span class="hljs-literal">false</span>
	//       }
	//     },
	//
	//     <span class="hljs-attr">methods</span>: {
	//       showDialog () {
	//         <span class="hljs-keyword">this</span>.$KsDialog.info(<span class="hljs-string">'1'</span>, <span class="hljs-string">'2'</span>, <span class="hljs-string">'3'</span>)();
	//       },
	//
	//       containerDialog (container) {
	//         <span class="hljs-built_in">document</span>.querySelector(container).scrollTop = <span class="hljs-number">0</span>;
	//
	//         <span class="hljs-keyword">this</span>.$KsDialog.create({ <span class="hljs-attr">container</span>: container }).show()();
	//       }
	//     }
	//   }
	// </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	// </code></pre>
	// <h3>API</h3>
	// <h4>KsDialog / KsDialogEntity</h4>
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
	// <td>showCancelBtn</td>
	// <td>用来描述 <code class="ks-code-inline">KsDialog</code> 是否显示取消按钮</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td><code class="ks-code-inline">true</code></td>
	// </tr>
	// <tr>
	// <td>cancelBtnText</td>
	// <td>用来描述当前 <code class="ks-code-inline">KsDialog</code> 取消按钮的文字</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td>取消</td>
	// </tr>
	// <tr>
	// <td>confirmBtnText</td>
	// <td>用来描述当前 <code class="ks-code-inline">KsDialog</code> 确定按钮的文字</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td>确定</td>
	// </tr>
	// <tr>
	// <td>title</td>
	// <td>用来描述当前 <code class="ks-code-inline">KsDialog</code> 标题的文字</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td>无</td>
	// </tr>
	// <tr>
	// <td>text</td>
	// <td>用来描述当前 <code class="ks-code-inline">KsDialog</code> 内容的文字</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td>无</td>
	// </tr>
	// <tr>
	// <td>type</td>
	// <td>用来描述当前 <code class="ks-code-inline">KsDialog</code> 的类型</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td><code class="ks-code-inline">success</code>, <code class="ks-code-inline">info</code>, <code class="ks-code-inline">warn</code>, <code class="ks-code-inline">danger</code></td>
	// <td><code class="ks-code-inline">success</code></td>
	// </tr>
	// <tr>
	// <td>show</td>
	// <td>用来描述当前 <code class="ks-code-inline">KsDialog</code> 是否显示</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">true</code></td>
	// <td>是</td>
	// <td>无</td>
	// <td>无</td>
	// </tr>
	// <tr>
	// <td>@confirm</td>
	// <td><code class="ks-code-inline">KsDialog</code> 确定按钮点击 事件</td>
	// <td>event</td>
	// <td>-</td>
	// <td>-</td>
	// <td>否</td>
	// <td>-</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>@cancel</td>
	// <td><code class="ks-code-inline">KsDialog</code> 取消按钮点击 事件</td>
	// <td>event</td>
	// <td>-</td>
	// <td>-</td>
	// <td>否</td>
	// <td>-</td>
	// <td>-</td>
	// </tr>
	// </tbody>
	// </table></div><h4>$KsDialog (通过原型方法调用)</h4>
	// <div class="table-striped"><table class="table-entity"><thead>
	// <tr>
	// <th>函数名</th>
	// <th>函数签名</th>
	// <th>函数描述</th>
	// </tr>
	// </thead>
	// <tbody>
	// <tr>
	// <td>success</td>
	// <td>function (text, title, cancel = false)</td>
	// <td>创建一个 <code class="ks-code-inline">success</code> 类型的对话框</td>
	// </tr>
	// <tr>
	// <td>info</td>
	// <td>function (text, title, cancel = false)</td>
	// <td>创建一个 <code class="ks-code-inline">info</code> 类型的对话框</td>
	// </tr>
	// <tr>
	// <td>warn</td>
	// <td>function (text, title, cancel = false)</td>
	// <td>创建一个 <code class="ks-code-inline">warn</code> 类型的对话框</td>
	// </tr>
	// <tr>
	// <td>danger</td>
	// <td>function (text, title, cancel = false)</td>
	// <td>创建一个 <code class="ks-code-inline">danger</code> 类型的对话框</td>
	// </tr>
	// <tr>
	// <td>show</td>
	// <td>function (text, title, hue, options)</td>
	// <td>显示一个对话框可以做更多的自定义</td>
	// </tr>
	// <tr>
	// <td>setDefaults</td>
	// <td>function (options)</td>
	// <td>设置默认参数</td>
	// </tr>
	// <tr>
	// <td>create</td>
	// <td>function (options)</td>
	// <td>创建一个对话框</td>
	// </tr>
	// <tr>
	// <td>close</td>
	// <td>function ()</td>
	// <td>关闭当前显示的对话框并且显示下一个对话框，如果当前没有对话框那么就是显示对话框</td>
	// </tr>
	// </tbody>
	// </table></div><pre class="ks-hljs"><code><span class="hljs-comment">/**
	//  * setDefaults 可以设置默认使用的参数, 下面列出了一些默认参数的默认值
	//  */</span>
	// <span class="hljs-keyword">let</span> defaults = {
	//   <span class="hljs-attr">showCancelBtn</span>: <span class="hljs-literal">false</span>,
	//   <span class="hljs-attr">cancelBtnText</span>: <span class="hljs-string">'取消'</span>,
	//   <span class="hljs-attr">confirmBtnText</span>: <span class="hljs-string">'确定'</span>,
	//   <span class="hljs-attr">container</span>: <span class="hljs-string">'body'</span>,
	//   <span class="hljs-attr">mask</span>: <span class="hljs-literal">true</span>,
	//   <span class="hljs-attr">title</span>: <span class="hljs-string">'Title'</span>,
	//   <span class="hljs-attr">text</span>: <span class="hljs-string">'Content...'</span>,
	//   <span class="hljs-attr">type</span>: <span class="hljs-string">'success'</span>
	// };
	//
	// $KsDialog.setDefaults({
	//                         <span class="hljs-attr">title</span>: <span class="hljs-string">'A'</span>,
	//                         <span class="hljs-attr">text</span>: <span class="hljs-string">'B'</span>
	//                       });
	// <span class="hljs-comment">// 在调用了 setDefaults 函数后再调用如果你不穿那么默认就是 title 被改成了 A，text 被改成了 B</span>
	//
	// $KsDialog.create();
	// <span class="hljs-comment">// create 方法就是对 setDefaults 函数的一个封装不过它会返回一个 KsDialog 对象你可以直接对返回的对象调用 .show 方法</span>
	//
	// $KsDialog.show(text, title, hue, options);
	// <span class="hljs-comment">// 下面我们来谈谈 show 方法前面两个参数都不用我在多赘述了，一个是显示的内容，一个是标题。</span>
	// <span class="hljs-comment">// hue 这个参数就是标记了当前对话框的主题 四个主题 `success`, `info`, `warn`, `danger`。</span>
	// <span class="hljs-comment">// 我们来着重谈谈 options 这个参数，这个参数可以说非常复杂提供了极大的可定制性，下到标题，上到遮罩的的容器范围，甚至 mask 的背景色都可以定义</span>
	// <span class="hljs-comment">// 因为 KsDialog 中的 mask 使用的是 KsMask 所以 options 中可以传入相关的参数来定制 mask 的能力</span>
	//
	// $KsDialog.show(text, title, hue, {
	//   <span class="hljs-attr">fillMode</span>: <span class="hljs-string">'填充模式 / full | part'</span>,
	//   <span class="hljs-attr">backgroundColor</span>: <span class="hljs-string">'遮罩颜色 / 有效的颜色值'</span>
	// });
	//
	//
	// <span class="hljs-comment">// 例如我在这里指定了它的 container 那么他的定位就是根据这个容器来的不会占满一屏幕</span>
	// <span class="hljs-keyword">let</span> dialog = <span class="hljs-keyword">this</span>.$KsDialog.create({ <span class="hljs-attr">container</span>: <span class="hljs-string">'.work-container'</span> });
	// </code></pre>
	// <p><ks-button @click="containerDialog('body')">container body</ks-button><br>
	// <br><br>
	// <ks-button @click="containerDialog('.work-container')">container .work-container</ks-button></p>
	// </section></template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      dialogShow: false
	    };
	  },


	  methods: {
	    showDialog: function showDialog() {
	      this.$KsDialog.info('1', '2', '3')();
	    },
	    containerDialog: function containerDialog(container) {
	      document.querySelector(container).scrollTop = 0;

	      this.$KsDialog.create({ container: container }).show()();
	    }
	  }
	};
	// </script>

/***/ },

/***/ 171:
/***/ function(module, exports) {

	module.exports = "<section><h2>Dialog 弹窗面板</h2>\n<blockquote>\n<p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>\n</blockquote>\n<hr>\n<h3>基础使用</h3>\n<h4>弹窗组件的基础使用（KsDialog / KsDialogEntity）</h4>\n<br>\n<p><ks-switch :checked.sync=\"dialogShow\"></ks-switch><br>\n<ks-dialog-entity :show.sync=\"dialogShow\"><br>\n<span slot=\"title\">通过 Slot 自定义标题</span><br>\n<span slot=\"text\">通过 Slot 自定义内容</span><br>\n</ks-dialog-entity></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-switch</span> <span class=\"hljs-attr\">:checked.sync</span>=<span class=\"hljs-string\">\"dialogShow\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-switch</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-dialog-entity</span> <span class=\"hljs-attr\">:show.sync</span>=<span class=\"hljs-string\">\"dialogShow\"</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- ! 注意: 作为 slot 的包裹元素最好使用行内元素 --&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">slot</span>=<span class=\"hljs-string\">\"title\"</span>&gt;</span>通过 Slot 自定义标题<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">slot</span>=<span class=\"hljs-string\">\"text\"</span>&gt;</span>通过 Slot 自定义内容<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-dialog-entity</span>&gt;</span>\n</code></pre>\n<blockquote>\n<p>这是基本的使用 <code class=\"ks-code-inline\">Ksdialog</code> 组件的方法, 通过其他属性我们还可以定义是否显示取消按钮,<br>\n取消按钮显示的文字, 确定按钮显示的文字, 对话框的类型, 是否显示 mask 等等诸多细节。</p>\n</blockquote>\n<br>\n<h4>弹窗组件的其他使用方式</h4>\n<blockquote>\n<p>在看到上述的使用方式后你肯定有些疑问, 我只想简单的显示一个对话框提醒用户让用户做出选择都要写这么麻烦的代码吗？<br>\n是的这确实是一个问题, 在项目越来越复杂之后我们重复冗余的代码也越来越多, 不过幸好我们找到了解决办法</p>\n</blockquote>\n<br>\n<p><ks-button @click=\"showDialog\">呼出 KsDialog 组件</ks-button></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-button</span> <span class=\"hljs-attr\">@click</span>=<span class=\"hljs-string\">\"showDialog\"</span>&gt;</span>呼出 KsDialog 组件<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-button</span>&gt;</span>\n</code></pre>\n<blockquote>\n<p>wow exciting !! 如你所见很简单，一个简单的函数调用就可以了，相比之前那些大片大片的代码真的是能方便不少，那么使用变得如此简单<br>\n那么功能是否也相应减少了呢？不！代码减少，功能一个不少！<br>\n来让我们一步一步分析调用他的代码，首先通过挂载在 <code class=\"ks-code-inline\">VueComponent</code> 对象上的 <code class=\"ks-code-inline\">$Ksdialog</code> 对象的 <code class=\"ks-code-inline\">info</code> 方法创建了一个<br>\n类型为 <code class=\"ks-code-inline\">info</code> 类型的对话框并传入了相关参数 标题 内容 等等，然后调用它其接受一个确定按钮的回调函数，和一个取消按钮的回调函数。</p>\n</blockquote>\n<br> \n<blockquote>\n<p>下面让我们来详细介绍下 <code class=\"ks-code-inline\">$KsDialog</code> 对象上所提供的能力：<br>\n如你所料 <code class=\"ks-code-inline\">$KsDialog</code> 上提供了与类型对应的函数来产生不同类型的对话框。与设计标准一样对话框类型一共有四种：<code class=\"ks-code-inline\">success</code>, <code class=\"ks-code-inline\">info</code>, <code class=\"ks-code-inline\">warn</code>, <code class=\"ks-code-inline\">danger</code></p>\n</blockquote>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-comment\">//                   内容      标题  是否显示取消按钮</span>\n<span class=\"hljs-comment\">//                    ^         ^         ^</span>\n$KsDialog.success(<span class=\"hljs-string\">'content'</span>, <span class=\"hljs-string\">'title'</span>, <span class=\"hljs-string\">'cancel'</span>)(confirmCallback, cancelCallback);\n\n<span class=\"hljs-comment\">/**\n * 以上的文档说过调用里传入的第一参数是确定的回调函数, 那么我们在没有传入确定的回调函数的情况下为什么点击确定他会关闭？\n * 之所以会有这样的行为是应为 `confirmCallback` 默认函数就是 `$KsDialog.close`, 所以如果你只想通知一条信息给用户那么\n * 就可以直接不传免去了手动调用 `$KsDialog.close` 方法的烦恼。\n */</span>\n</code></pre>\n<blockquote>\n<p>上面的代码示例详细展示描述了各个参数分别是什么含义有什么作用，其实每个参数都有默认值 <code class=\"ks-code-inline\">content</code> 默认是 <code class=\"ks-code-inline\">Content...</code><br>\n<code class=\"ks-code-inline\">title</code> 默认是 <code class=\"ks-code-inline\">Title</code>， <code class=\"ks-code-inline\">cancel</code> 默认是 <code class=\"ks-code-inline\">false</code>，参数的顺序也是按照参数的重要性来设计的，你需要显示一个对话框那么最重要的肯定是内容<br>\n标题其次，等等一些其他的参数。</p>\n</blockquote>\n<br>\n<blockquote>\n<p><strong>这里在叨唠一句通过 <code class=\"ks-code-inline\">$KsDialog</code> 方式调用的会话框是设计成队列的，也就是说不管你同时或者非同时调用多个对话框，它都会显示出来，在上一个关闭的时候显示下一个。</strong></p>\n</blockquote>\n\n<h3>脚本</h3>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span>{\n    data () {\n      <span class=\"hljs-keyword\">return</span> {\n        <span class=\"hljs-attr\">dialogShow</span>: <span class=\"hljs-literal\">false</span>\n      }\n    },\n    \n    <span class=\"hljs-attr\">methods</span>: {\n      showDialog () {\n        <span class=\"hljs-keyword\">this</span>.$KsDialog.info(<span class=\"hljs-string\">'1'</span>, <span class=\"hljs-string\">'2'</span>, <span class=\"hljs-string\">'3'</span>)();\n      },\n      \n      containerDialog (container) {\n        <span class=\"hljs-built_in\">document</span>.querySelector(container).scrollTop = <span class=\"hljs-number\">0</span>;\n        \n        <span class=\"hljs-keyword\">this</span>.$KsDialog.create({ <span class=\"hljs-attr\">container</span>: container }).show()();\n      }\n    }\n  }\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre>\n<h3>API</h3>\n<h4>KsDialog / KsDialogEntity</h4>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>双向（twoWay）</th>\n<th>是否必须</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>showCancelBtn</td>\n<td>用来描述 <code class=\"ks-code-inline\">KsDialog</code> 是否显示取消按钮</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td><code class=\"ks-code-inline\">true</code></td>\n</tr>\n<tr>\n<td>cancelBtnText</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">KsDialog</code> 取消按钮的文字</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td>取消</td>\n</tr>\n<tr>\n<td>confirmBtnText</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">KsDialog</code> 确定按钮的文字</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td>确定</td>\n</tr>\n<tr>\n<td>title</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">KsDialog</code> 标题的文字</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td>无</td>\n</tr>\n<tr>\n<td>text</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">KsDialog</code> 内容的文字</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td>无</td>\n</tr>\n<tr>\n<td>type</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">KsDialog</code> 的类型</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td><code class=\"ks-code-inline\">success</code>, <code class=\"ks-code-inline\">info</code>, <code class=\"ks-code-inline\">warn</code>, <code class=\"ks-code-inline\">danger</code></td>\n<td><code class=\"ks-code-inline\">success</code></td>\n</tr>\n<tr>\n<td>show</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">KsDialog</code> 是否显示</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">true</code></td>\n<td>是</td>\n<td>无</td>\n<td>无</td>\n</tr>\n<tr>\n<td>@confirm</td>\n<td><code class=\"ks-code-inline\">KsDialog</code> 确定按钮点击 事件</td>\n<td>event</td>\n<td>-</td>\n<td>-</td>\n<td>否</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>@cancel</td>\n<td><code class=\"ks-code-inline\">KsDialog</code> 取消按钮点击 事件</td>\n<td>event</td>\n<td>-</td>\n<td>-</td>\n<td>否</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table></div><h4>$KsDialog (通过原型方法调用)</h4>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>函数名</th>\n<th>函数签名</th>\n<th>函数描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td>function (text, title, cancel = false)</td>\n<td>创建一个 <code class=\"ks-code-inline\">success</code> 类型的对话框</td>\n</tr>\n<tr>\n<td>info</td>\n<td>function (text, title, cancel = false)</td>\n<td>创建一个 <code class=\"ks-code-inline\">info</code> 类型的对话框</td>\n</tr>\n<tr>\n<td>warn</td>\n<td>function (text, title, cancel = false)</td>\n<td>创建一个 <code class=\"ks-code-inline\">warn</code> 类型的对话框</td>\n</tr>\n<tr>\n<td>danger</td>\n<td>function (text, title, cancel = false)</td>\n<td>创建一个 <code class=\"ks-code-inline\">danger</code> 类型的对话框</td>\n</tr>\n<tr>\n<td>show</td>\n<td>function (text, title, hue, options)</td>\n<td>显示一个对话框可以做更多的自定义</td>\n</tr>\n<tr>\n<td>setDefaults</td>\n<td>function (options)</td>\n<td>设置默认参数</td>\n</tr>\n<tr>\n<td>create</td>\n<td>function (options)</td>\n<td>创建一个对话框</td>\n</tr>\n<tr>\n<td>close</td>\n<td>function ()</td>\n<td>关闭当前显示的对话框并且显示下一个对话框，如果当前没有对话框那么就是显示对话框</td>\n</tr>\n</tbody>\n</table></div><pre class=\"ks-hljs\"><code><span class=\"hljs-comment\">/**\n * setDefaults 可以设置默认使用的参数, 下面列出了一些默认参数的默认值\n */</span>\n<span class=\"hljs-keyword\">let</span> defaults = {\n  <span class=\"hljs-attr\">showCancelBtn</span>: <span class=\"hljs-literal\">false</span>,\n  <span class=\"hljs-attr\">cancelBtnText</span>: <span class=\"hljs-string\">'取消'</span>,\n  <span class=\"hljs-attr\">confirmBtnText</span>: <span class=\"hljs-string\">'确定'</span>,\n  <span class=\"hljs-attr\">container</span>: <span class=\"hljs-string\">'body'</span>,\n  <span class=\"hljs-attr\">mask</span>: <span class=\"hljs-literal\">true</span>,\n  <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'Title'</span>,\n  <span class=\"hljs-attr\">text</span>: <span class=\"hljs-string\">'Content...'</span>,\n  <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">'success'</span>\n};\n\n$KsDialog.setDefaults({\n                        <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'A'</span>,\n                        <span class=\"hljs-attr\">text</span>: <span class=\"hljs-string\">'B'</span>\n                      });\n<span class=\"hljs-comment\">// 在调用了 setDefaults 函数后再调用如果你不穿那么默认就是 title 被改成了 A，text 被改成了 B</span>\n\n$KsDialog.create();\n<span class=\"hljs-comment\">// create 方法就是对 setDefaults 函数的一个封装不过它会返回一个 KsDialog 对象你可以直接对返回的对象调用 .show 方法</span>\n\n$KsDialog.show(text, title, hue, options);\n<span class=\"hljs-comment\">// 下面我们来谈谈 show 方法前面两个参数都不用我在多赘述了，一个是显示的内容，一个是标题。</span>\n<span class=\"hljs-comment\">// hue 这个参数就是标记了当前对话框的主题 四个主题 `success`, `info`, `warn`, `danger`。</span>\n<span class=\"hljs-comment\">// 我们来着重谈谈 options 这个参数，这个参数可以说非常复杂提供了极大的可定制性，下到标题，上到遮罩的的容器范围，甚至 mask 的背景色都可以定义</span>\n<span class=\"hljs-comment\">// 因为 KsDialog 中的 mask 使用的是 KsMask 所以 options 中可以传入相关的参数来定制 mask 的能力</span>\n\n$KsDialog.show(text, title, hue, {\n  <span class=\"hljs-attr\">fillMode</span>: <span class=\"hljs-string\">'填充模式 / full | part'</span>,\n  <span class=\"hljs-attr\">backgroundColor</span>: <span class=\"hljs-string\">'遮罩颜色 / 有效的颜色值'</span>\n});\n\n\n<span class=\"hljs-comment\">// 例如我在这里指定了它的 container 那么他的定位就是根据这个容器来的不会占满一屏幕</span>\n<span class=\"hljs-keyword\">let</span> dialog = <span class=\"hljs-keyword\">this</span>.$KsDialog.create({ <span class=\"hljs-attr\">container</span>: <span class=\"hljs-string\">'.work-container'</span> });\n</code></pre>\n<p><ks-button @click=\"containerDialog('body')\">container body</ks-button><br>\n<br><br>\n<ks-button @click=\"containerDialog('.work-container')\">container .work-container</ks-button></p>\n</section>";

/***/ }

});