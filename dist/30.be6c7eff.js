webpackJsonp([30],{

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(202);

/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(203)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/dialog-20.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(204)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/dialog-20.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 203:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template><section><h2>Dialog 对话框</h2>
	// <blockquote>
	// <p>Dialog 对话框<br>
	// 作者: pkeros(张杰)<br>
	// 最后修改时间: 2017-04-21</p>
	// </blockquote>
	// <hr>
	// <h3>基础使用</h3>
	// <h4>对话框的基础使用</h4>
	// <br>
	// <blockquote>
	// <p>亦可赛艇，只需要填入一个参数就可以调起一个 <code class="ks-code-inline">KsDialog</code> 对话框</p>
	// </blockquote>
	// <br>
	// <p><ks-button @click="$KsDialog.success('我是测试内容!')">Click me</ks-button></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"$KsDialog.success('我是测试内容!')"</span>&gt;</span>Click me<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span>
	// </code></pre>
	// <h4>不同类型的对话框</h4>
	// <br>
	// <blockquote>
	// <p>英吹斯汀，如视觉规范所定义，一共有四种对话框，一样简单的可以呼出它们</p>
	// </blockquote>
	// <br>
	// <p><ks-button type="success" @click="$KsDialog.success('成功!')">成功</ks-button>  <ks-button type="info" @click="$KsDialog.info('信息!')">信息</ks-button> <ks-button type="warn" @click="$KsDialog.warn('警告!')">警告</ks-button>  <ks-button type="danger" @click="$KsDialog.danger('危险!')">危险</ks-button></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"$KsDialog.success('成功!')"</span>&gt;</span>成功<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span> 
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"$KsDialog.info('信息!')"</span>&gt;</span>信息<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span> 
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"warn"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"$KsDialog.warn('警告!')"</span>&gt;</span>警告<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span> 
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"danger"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"$KsDialog.danger('危险!')"</span>&gt;</span>危险<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span>
	// </code></pre>
	// <h4>自定义标题</h4>
	// <br>
	// <blockquote>
	// <p>默认在只传入一个 内容参数的 时候标题都是内置的<br>
	// success 默认标题为 成功<br>
	// info 默认标题为 信息<br>
	// warn 默认标题为 警告<br>
	// danger 默认标题为 危险</p>
	// </blockquote>
	// <br>
	// <p><ks-button type="success" @click="$KsDialog.success('成功!', '自定义的成功')">成功</ks-button></p>
	// <pre class="ks-hljs"><code><span class="hljs-comment">&lt;!-- 在我们需要自定义标题的时候可以传入第二个参数 --&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"$KsDialog.success('成功!', '自定义的成功')"</span>&gt;</span>成功<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span>
	// </code></pre>
	// <h4>处理用户点击确定按钮事件</h4>
	// <br>
	// <blockquote>
	// <p>有时候我们可能需要在用户点击确定之后做一些其他的工作，这时候我们就可以将响应函数传入第二个参数来处理用户点击 <code class="ks-code-inline">confirm</code> 按钮的事件</p>
	// </blockquote>
	// <br>
	// <p><ks-button type="success" @click="handleConfirmEvent">成功</ks-button></p>
	// <pre class="ks-hljs"><code><span class="hljs-keyword">this</span>.$KsDialog.success(<span class="hljs-string">'响应用户点击 `confirm` 按钮事件!'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
	//   alert(<span class="hljs-string">'clicked confirm!'</span>)
	// })
	// </code></pre>
	// <br>
	// <blockquote>
	// <p>在响应 <code class="ks-code-inline">confirm</code> 事件时候自定义标题</p>
	// </blockquote>
	// <br>
	// <p><ks-button type="success" @click="handleConfirmEvent1">自定义标题</ks-button></p>
	// <pre class="ks-hljs"><code><span class="hljs-keyword">this</span>.$KsDialog.success(<span class="hljs-string">'响应用户点击 `confirm` 按钮事件!'</span>, <span class="hljs-string">'自定义标题'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
	//   alert(<span class="hljs-string">'clicked confirm!'</span>)
	// })
	// </code></pre>
	// <h4>带有取消操作的对话框</h4>
	// <br>
	// <blockquote>
	// <p>使用对话框是可能是询问用户一个操作是否继续这样我们就需要一个取消按钮来让用户可以中断操作</p>
	// </blockquote>
	// <br>
	// <p><ks-button type="success" @click="handleCancelEvent">成功</ks-button></p>
	// <pre class="ks-hljs"><code><span class="hljs-keyword">this</span>.$KsDialog.success(<span class="hljs-string">'成功!'</span>, <span class="hljs-literal">null</span>, <span class="hljs-literal">true</span>).then(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
	//   alert(<span class="hljs-string">'clicked confirm!'</span>)
	// }, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
	//   alert(<span class="hljs-string">'clicked canceled!'</span>)
	// })
	// </code></pre>
	// <br>
	// <blockquote>
	// <p>在设置了第三位参数为 <code class="ks-code-inline">true</code> 的时候对话框就进入了 <code class="ks-code-inline">对话</code> 模式，这时候必须使用 <code class="ks-code-inline">then</code> 才能呼起对话框<br>
	// <code class="ks-code-inline">then(confirmCallback, cancelCallback)</code> 第一位参数是 <code class="ks-code-inline">confirm</code> 回调，第二位参数是 <code class="ks-code-inline">cancel</code> 回调<br>
	// 在不想使用的时候传入 <code class="ks-code-inline">null</code> 占位就可以了。</p>
	// </blockquote>
	// <br>
	// <p><ks-button type="success" @click="handleCancelEvent1">不对 confirm 进行处理</ks-button></p>
	// <pre class="ks-hljs"><code><span class="hljs-keyword">this</span>.$KsDialog.success(<span class="hljs-string">'成功!'</span>, <span class="hljs-literal">null</span>, <span class="hljs-literal">true</span>).then(<span class="hljs-literal">null</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
	//   alert(<span class="hljs-string">'clicked canceled!'</span>)
	// })
	// </code></pre>
	// <h3>高级用法</h3>
	// <h4>阻止对话框关闭</h4>
	// <br>
	// <blockquote>
	// <p>默认情况下载点击确认或者取消按钮对话框都会关闭，如果需要组织对话框的关闭，那么在响应函数中返回 <code class="ks-code-inline">true</code> 就行。</p>
	// </blockquote>
	// <br>
	// <p><ks-button type="success" @click="handleCancelEventReject">阻止对框关闭</ks-button></p>
	// <pre class="ks-hljs"><code><span class="hljs-keyword">this</span>.$KsDialog.success(<span class="hljs-string">'成功!'</span>, <span class="hljs-literal">null</span>, <span class="hljs-literal">true</span>).then(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
	//   alert(<span class="hljs-string">'clicked confirm!'</span>)
	//
	// }, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
	//   alert(<span class="hljs-string">'clicked canceled!'</span>)
	//
	//   <span class="hljs-comment">// 阻止了取消按钮关闭对话框会关闭对话框的行为</span>
	//   <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
	// })
	// </code></pre>
	// <h4>自定义 <code class="ks-code-inline">confirm</code> <code class="ks-code-inline">cancel</code> 按钮文字</h4>
	// <br>
	// <blockquote>
	// <p>组件提供了一个设置默认参数的方法 <code class="ks-code-inline">setDefaults</code> 可以设置默认的 <code class="ks-code-inline">confirm</code> <code class="ks-code-inline">cancel</code> 文字。<br>
	// <code class="ks-code-inline">cancelBtnText</code>: 取消按钮显示提示文字, <code class="ks-code-inline">confirmBtnText</code>: 确定按钮显示的提示文字<br>
	// <strong>点击之后它会修改整个 组件 的行为</strong></p>
	// </blockquote>
	// <br>
	// <p><ks-button type="success" @click="handleCancelEventCustomBtnText">修改按钮提示文字</ks-button></p>
	// <pre class="ks-hljs"><code><span class="hljs-keyword">this</span>.$KsDialog.setDefaults({ <span class="hljs-attr">cancelBtnText</span>: <span class="hljs-string">'自定义取消'</span>, <span class="hljs-attr">confirmBtnText</span>: <span class="hljs-string">'自定义确定'</span> })
	// <span class="hljs-keyword">this</span>.$KsDialog.success(<span class="hljs-string">'成功!'</span>, <span class="hljs-literal">null</span>, <span class="hljs-literal">true</span>).then(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
	//   alert(<span class="hljs-string">'clicked confirm!'</span>);
	// }, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
	//   alert(<span class="hljs-string">'clicked canceled!'</span>);
	// })
	// </code></pre>
	// <h4>自定义 遮罩 颜色</h4>
	// <br>
	// <blockquote>
	// <p><code class="ks-code-inline">backgroundColor</code> 字段可以提供修改遮罩颜色的能力。</p>
	// </blockquote>
	// <br>
	// <p><ks-button type="success" @click="handleCancelEventCustomMaskBackground">修改遮罩颜色</ks-button></p>
	// <pre class="ks-hljs"><code><span class="hljs-keyword">this</span>.$KsDialog.setDefaults({ <span class="hljs-attr">backgroundColor</span>: <span class="hljs-string">'rgba(44, 11, 187, .3)'</span> })
	// <span class="hljs-keyword">this</span>.$KsDialog.success(<span class="hljs-string">'成功!'</span>, <span class="hljs-literal">null</span>, <span class="hljs-literal">true</span>).then(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
	//   alert(<span class="hljs-string">'clicked confirm!'</span>);
	// }, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
	//   alert(<span class="hljs-string">'clicked canceled!'</span>);
	// })
	// </code></pre>
	// <h4>自定义 偏移</h4>
	// <br>
	// <blockquote>
	// <p><code class="ks-code-inline">containerStyle</code> 字段就是应用在遮罩容器上的样式，理论上可以设置任何样式不过建议只使用 <code class="ks-code-inline">margin, top, left, right, bottom</code><br>
	// 来设置对话框的便宜，<strong>就比如文档左侧菜单宽度是 <code class="ks-code-inline">180px</code> 那么我们就可以设置 <code class="ks-code-inline">margin-left: 180px</code> 来是对话框在文档中居中，而不是页面居中。</strong></p>
	// </blockquote>
	// <br>
	// <p><ks-button type="success" @click="handleCancelEventCustomMaskOffset">设置偏移</ks-button></p>
	// <pre class="ks-hljs"><code><span class="hljs-keyword">this</span>.$KsDialog.setDefaults({ <span class="hljs-attr">containerStyle</span>: <span class="hljs-string">'margin-bottom: 500px'</span> })
	// <span class="hljs-keyword">this</span>.$KsDialog.success(<span class="hljs-string">'成功!'</span>, <span class="hljs-literal">null</span>, <span class="hljs-literal">true</span>).then(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
	//   alert(<span class="hljs-string">'clicked confirm!'</span>);
	// }, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
	//   alert(<span class="hljs-string">'clicked canceled!'</span>);
	// })
	// </code></pre>
	//
	// <h3>API</h3>
	// <h4>KsDialogEntity</h4>
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
	// <td><code class="ks-code-inline">false</code></td>
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
	// <td><code class="ks-code-inline">function success (text, title, cancel = false)</code></td>
	// <td>创建一个 <code class="ks-code-inline">success</code> 类型的对话框</td>
	// </tr>
	// <tr>
	// <td>info</td>
	// <td><code class="ks-code-inline">function info (text, title, cancel = false)</code></td>
	// <td>创建一个 <code class="ks-code-inline">info</code> 类型的对话框</td>
	// </tr>
	// <tr>
	// <td>warn</td>
	// <td><code class="ks-code-inline">function warn (text, title, cancel = false)</code></td>
	// <td>创建一个 <code class="ks-code-inline">warn</code> 类型的对话框</td>
	// </tr>
	// <tr>
	// <td>danger</td>
	// <td><code class="ks-code-inline">function danger (text, title, cancel = false)</code></td>
	// <td>创建一个 <code class="ks-code-inline">danger</code> 类型的对话框</td>
	// </tr>
	// <tr>
	// <td>show</td>
	// <td><code class="ks-code-inline">function show (content, title, type, cancel = false, confirmCb = null, cancelCb = null)</code></td>
	// <td>显示一个对话框可以做更多的自定义</td>
	// </tr>
	// <tr>
	// <td>setDefaults</td>
	// <td><code class="ks-code-inline">function setDefaults (options)</code></td>
	// <td>设置默认参数</td>
	// </tr>
	// <tr>
	// <td>close</td>
	// <td><code class="ks-code-inline">function close ()</code></td>
	// <td>关闭当前显示的对话框并且显示下一个对话框，如果当前没有对话框那么就是显示对话框</td>
	// </tr>
	// </tbody>
	// </table></div></section></template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      dialogShow: false
	    };
	  },


	  methods: {
	    handleConfirmEvent: function handleConfirmEvent() {
	      this.$KsDialog.success('成功!', function () {
	        alert('clicked confirm!');
	      });
	    },
	    handleConfirmEvent1: function handleConfirmEvent1() {
	      this.$KsDialog.success('成功!', '自定义标题', function () {
	        alert('clicked confirm!');
	      });
	    },
	    handleCancelEvent: function handleCancelEvent() {
	      this.$KsDialog.success('成功!', null, true).then(function () {
	        alert('clicked confirm!');
	      }, function () {
	        alert('clicked canceled!');
	      });
	    },
	    handleCancelEventReject: function handleCancelEventReject() {
	      this.$KsDialog.success('成功!', null, true).then(function () {
	        alert('clicked confirm!');
	      }, function () {
	        alert('clicked canceled!');

	        return true;
	      });
	    },
	    handleCancelEventCustomBtnText: function handleCancelEventCustomBtnText() {
	      this.$KsDialog.setDefaults({ cancelBtnText: '自定义取消', confirmBtnText: '自定义确定' });
	      this.$KsDialog.success('成功!', null, true).then(function () {
	        alert('clicked confirm!');
	      }, function () {
	        alert('clicked canceled!');
	      });
	    },
	    handleCancelEventCustomMaskBackground: function handleCancelEventCustomMaskBackground() {
	      this.$KsDialog.setDefaults({ backgroundColor: 'rgba(44, 11, 187, .3)' });
	      this.$KsDialog.success('成功!', null, true).then(function () {
	        alert('clicked confirm!');
	      }, function () {
	        alert('clicked canceled!');
	      });
	    },
	    handleCancelEventCustomMaskOffset: function handleCancelEventCustomMaskOffset() {
	      this.$KsDialog.setDefaults({ containerStyle: 'margin-bottom: 500px' });
	      this.$KsDialog.success('成功!', null, true).then(function () {
	        alert('clicked confirm!');
	      }, function () {
	        alert('clicked canceled!');
	      });
	    },
	    handleCancelEvent1: function handleCancelEvent1() {
	      this.$KsDialog.success('成功!', null, true).then(null, function () {
	        alert('clicked canceled!');
	      });
	    }
	  }
	};
	// </script>

/***/ },

/***/ 204:
/***/ function(module, exports) {

	module.exports = "<section><h2>Dialog 对话框</h2>\n<blockquote>\n<p>Dialog 对话框<br>\n作者: pkeros(张杰)<br>\n最后修改时间: 2017-04-21</p>\n</blockquote>\n<hr>\n<h3>基础使用</h3>\n<h4>对话框的基础使用</h4>\n<br>\n<blockquote>\n<p>亦可赛艇，只需要填入一个参数就可以调起一个 <code class=\"ks-code-inline\">KsDialog</code> 对话框</p>\n</blockquote>\n<br>\n<p><ks-button @click=\"$KsDialog.success('我是测试内容!')\">Click me</ks-button></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-button</span> <span class=\"hljs-attr\">@click</span>=<span class=\"hljs-string\">\"$KsDialog.success('我是测试内容!')\"</span>&gt;</span>Click me<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-button</span>&gt;</span>\n</code></pre>\n<h4>不同类型的对话框</h4>\n<br>\n<blockquote>\n<p>英吹斯汀，如视觉规范所定义，一共有四种对话框，一样简单的可以呼出它们</p>\n</blockquote>\n<br>\n<p><ks-button type=\"success\" @click=\"$KsDialog.success('成功!')\">成功</ks-button>  <ks-button type=\"info\" @click=\"$KsDialog.info('信息!')\">信息</ks-button> <ks-button type=\"warn\" @click=\"$KsDialog.warn('警告!')\">警告</ks-button>  <ks-button type=\"danger\" @click=\"$KsDialog.danger('危险!')\">危险</ks-button></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"success\"</span> <span class=\"hljs-attr\">@click</span>=<span class=\"hljs-string\">\"$KsDialog.success('成功!')\"</span>&gt;</span>成功<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-button</span>&gt;</span> \n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"info\"</span> <span class=\"hljs-attr\">@click</span>=<span class=\"hljs-string\">\"$KsDialog.info('信息!')\"</span>&gt;</span>信息<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-button</span>&gt;</span> \n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"warn\"</span> <span class=\"hljs-attr\">@click</span>=<span class=\"hljs-string\">\"$KsDialog.warn('警告!')\"</span>&gt;</span>警告<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-button</span>&gt;</span> \n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"danger\"</span> <span class=\"hljs-attr\">@click</span>=<span class=\"hljs-string\">\"$KsDialog.danger('危险!')\"</span>&gt;</span>危险<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-button</span>&gt;</span>\n</code></pre>\n<h4>自定义标题</h4>\n<br>\n<blockquote>\n<p>默认在只传入一个 内容参数的 时候标题都是内置的<br>\nsuccess 默认标题为 成功<br>\ninfo 默认标题为 信息<br>\nwarn 默认标题为 警告<br>\ndanger 默认标题为 危险</p>\n</blockquote>\n<br>\n<p><ks-button type=\"success\" @click=\"$KsDialog.success('成功!', '自定义的成功')\">成功</ks-button></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-comment\">&lt;!-- 在我们需要自定义标题的时候可以传入第二个参数 --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-button</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"success\"</span> <span class=\"hljs-attr\">@click</span>=<span class=\"hljs-string\">\"$KsDialog.success('成功!', '自定义的成功')\"</span>&gt;</span>成功<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-button</span>&gt;</span>\n</code></pre>\n<h4>处理用户点击确定按钮事件</h4>\n<br>\n<blockquote>\n<p>有时候我们可能需要在用户点击确定之后做一些其他的工作，这时候我们就可以将响应函数传入第二个参数来处理用户点击 <code class=\"ks-code-inline\">confirm</code> 按钮的事件</p>\n</blockquote>\n<br>\n<p><ks-button type=\"success\" @click=\"handleConfirmEvent\">成功</ks-button></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-keyword\">this</span>.$KsDialog.success(<span class=\"hljs-string\">'响应用户点击 `confirm` 按钮事件!'</span>, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\"></span>) </span>{\n  alert(<span class=\"hljs-string\">'clicked confirm!'</span>)\n})\n</code></pre>\n<br>\n<blockquote>\n<p>在响应 <code class=\"ks-code-inline\">confirm</code> 事件时候自定义标题</p>\n</blockquote>\n<br>\n<p><ks-button type=\"success\" @click=\"handleConfirmEvent1\">自定义标题</ks-button></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-keyword\">this</span>.$KsDialog.success(<span class=\"hljs-string\">'响应用户点击 `confirm` 按钮事件!'</span>, <span class=\"hljs-string\">'自定义标题'</span>, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\"></span>) </span>{\n  alert(<span class=\"hljs-string\">'clicked confirm!'</span>)\n})\n</code></pre>\n<h4>带有取消操作的对话框</h4>\n<br>\n<blockquote>\n<p>使用对话框是可能是询问用户一个操作是否继续这样我们就需要一个取消按钮来让用户可以中断操作</p>\n</blockquote>\n<br>\n<p><ks-button type=\"success\" @click=\"handleCancelEvent\">成功</ks-button></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-keyword\">this</span>.$KsDialog.success(<span class=\"hljs-string\">'成功!'</span>, <span class=\"hljs-literal\">null</span>, <span class=\"hljs-literal\">true</span>).then(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\"></span>) </span>{\n  alert(<span class=\"hljs-string\">'clicked confirm!'</span>)\n}, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\"></span>) </span>{\n  alert(<span class=\"hljs-string\">'clicked canceled!'</span>)\n})\n</code></pre>\n<br>\n<blockquote>\n<p>在设置了第三位参数为 <code class=\"ks-code-inline\">true</code> 的时候对话框就进入了 <code class=\"ks-code-inline\">对话</code> 模式，这时候必须使用 <code class=\"ks-code-inline\">then</code> 才能呼起对话框<br>\n<code class=\"ks-code-inline\">then(confirmCallback, cancelCallback)</code> 第一位参数是 <code class=\"ks-code-inline\">confirm</code> 回调，第二位参数是 <code class=\"ks-code-inline\">cancel</code> 回调<br>\n在不想使用的时候传入 <code class=\"ks-code-inline\">null</code> 占位就可以了。</p>\n</blockquote>\n<br>\n<p><ks-button type=\"success\" @click=\"handleCancelEvent1\">不对 confirm 进行处理</ks-button></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-keyword\">this</span>.$KsDialog.success(<span class=\"hljs-string\">'成功!'</span>, <span class=\"hljs-literal\">null</span>, <span class=\"hljs-literal\">true</span>).then(<span class=\"hljs-literal\">null</span>, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\"></span>) </span>{\n  alert(<span class=\"hljs-string\">'clicked canceled!'</span>)\n})\n</code></pre>\n<h3>高级用法</h3>\n<h4>阻止对话框关闭</h4>\n<br>\n<blockquote>\n<p>默认情况下载点击确认或者取消按钮对话框都会关闭，如果需要组织对话框的关闭，那么在响应函数中返回 <code class=\"ks-code-inline\">true</code> 就行。</p>\n</blockquote>\n<br>\n<p><ks-button type=\"success\" @click=\"handleCancelEventReject\">阻止对框关闭</ks-button></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-keyword\">this</span>.$KsDialog.success(<span class=\"hljs-string\">'成功!'</span>, <span class=\"hljs-literal\">null</span>, <span class=\"hljs-literal\">true</span>).then(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\"></span>) </span>{\n  alert(<span class=\"hljs-string\">'clicked confirm!'</span>)\n  \n}, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\"></span>) </span>{\n  alert(<span class=\"hljs-string\">'clicked canceled!'</span>)\n  \n  <span class=\"hljs-comment\">// 阻止了取消按钮关闭对话框会关闭对话框的行为</span>\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-literal\">true</span>;\n})\n</code></pre>\n<h4>自定义 <code class=\"ks-code-inline\">confirm</code> <code class=\"ks-code-inline\">cancel</code> 按钮文字</h4>\n<br>\n<blockquote>\n<p>组件提供了一个设置默认参数的方法 <code class=\"ks-code-inline\">setDefaults</code> 可以设置默认的 <code class=\"ks-code-inline\">confirm</code> <code class=\"ks-code-inline\">cancel</code> 文字。<br>\n<code class=\"ks-code-inline\">cancelBtnText</code>: 取消按钮显示提示文字, <code class=\"ks-code-inline\">confirmBtnText</code>: 确定按钮显示的提示文字<br>\n<strong>点击之后它会修改整个 组件 的行为</strong></p>\n</blockquote>\n<br>\n<p><ks-button type=\"success\" @click=\"handleCancelEventCustomBtnText\">修改按钮提示文字</ks-button></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-keyword\">this</span>.$KsDialog.setDefaults({ <span class=\"hljs-attr\">cancelBtnText</span>: <span class=\"hljs-string\">'自定义取消'</span>, <span class=\"hljs-attr\">confirmBtnText</span>: <span class=\"hljs-string\">'自定义确定'</span> })\n<span class=\"hljs-keyword\">this</span>.$KsDialog.success(<span class=\"hljs-string\">'成功!'</span>, <span class=\"hljs-literal\">null</span>, <span class=\"hljs-literal\">true</span>).then(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\"></span>) </span>{\n  alert(<span class=\"hljs-string\">'clicked confirm!'</span>);\n}, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\"></span>) </span>{\n  alert(<span class=\"hljs-string\">'clicked canceled!'</span>);\n})\n</code></pre>\n<h4>自定义 遮罩 颜色</h4>\n<br>\n<blockquote>\n<p><code class=\"ks-code-inline\">backgroundColor</code> 字段可以提供修改遮罩颜色的能力。</p>\n</blockquote>\n<br>\n<p><ks-button type=\"success\" @click=\"handleCancelEventCustomMaskBackground\">修改遮罩颜色</ks-button></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-keyword\">this</span>.$KsDialog.setDefaults({ <span class=\"hljs-attr\">backgroundColor</span>: <span class=\"hljs-string\">'rgba(44, 11, 187, .3)'</span> })\n<span class=\"hljs-keyword\">this</span>.$KsDialog.success(<span class=\"hljs-string\">'成功!'</span>, <span class=\"hljs-literal\">null</span>, <span class=\"hljs-literal\">true</span>).then(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\"></span>) </span>{\n  alert(<span class=\"hljs-string\">'clicked confirm!'</span>);\n}, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\"></span>) </span>{\n  alert(<span class=\"hljs-string\">'clicked canceled!'</span>);\n})\n</code></pre>\n<h4>自定义 偏移</h4>\n<br>\n<blockquote>\n<p><code class=\"ks-code-inline\">containerStyle</code> 字段就是应用在遮罩容器上的样式，理论上可以设置任何样式不过建议只使用 <code class=\"ks-code-inline\">margin, top, left, right, bottom</code><br>\n来设置对话框的便宜，<strong>就比如文档左侧菜单宽度是 <code class=\"ks-code-inline\">180px</code> 那么我们就可以设置 <code class=\"ks-code-inline\">margin-left: 180px</code> 来是对话框在文档中居中，而不是页面居中。</strong></p>\n</blockquote>\n<br>\n<p><ks-button type=\"success\" @click=\"handleCancelEventCustomMaskOffset\">设置偏移</ks-button></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-keyword\">this</span>.$KsDialog.setDefaults({ <span class=\"hljs-attr\">containerStyle</span>: <span class=\"hljs-string\">'margin-bottom: 500px'</span> })\n<span class=\"hljs-keyword\">this</span>.$KsDialog.success(<span class=\"hljs-string\">'成功!'</span>, <span class=\"hljs-literal\">null</span>, <span class=\"hljs-literal\">true</span>).then(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\"></span>) </span>{\n  alert(<span class=\"hljs-string\">'clicked confirm!'</span>);\n}, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> (<span class=\"hljs-params\"></span>) </span>{\n  alert(<span class=\"hljs-string\">'clicked canceled!'</span>);\n})\n</code></pre>\n\n<h3>API</h3>\n<h4>KsDialogEntity</h4>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>双向（twoWay）</th>\n<th>是否必须</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>showCancelBtn</td>\n<td>用来描述 <code class=\"ks-code-inline\">KsDialog</code> 是否显示取消按钮</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n</tr>\n<tr>\n<td>cancelBtnText</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">KsDialog</code> 取消按钮的文字</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td>取消</td>\n</tr>\n<tr>\n<td>confirmBtnText</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">KsDialog</code> 确定按钮的文字</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td>确定</td>\n</tr>\n<tr>\n<td>title</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">KsDialog</code> 标题的文字</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td>无</td>\n</tr>\n<tr>\n<td>text</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">KsDialog</code> 内容的文字</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td>无</td>\n</tr>\n<tr>\n<td>type</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">KsDialog</code> 的类型</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td><code class=\"ks-code-inline\">success</code>, <code class=\"ks-code-inline\">info</code>, <code class=\"ks-code-inline\">warn</code>, <code class=\"ks-code-inline\">danger</code></td>\n<td><code class=\"ks-code-inline\">success</code></td>\n</tr>\n<tr>\n<td>show</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">KsDialog</code> 是否显示</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">true</code></td>\n<td>是</td>\n<td>无</td>\n<td>无</td>\n</tr>\n<tr>\n<td>@confirm</td>\n<td><code class=\"ks-code-inline\">KsDialog</code> 确定按钮点击 事件</td>\n<td>event</td>\n<td>-</td>\n<td>-</td>\n<td>否</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>@cancel</td>\n<td><code class=\"ks-code-inline\">KsDialog</code> 取消按钮点击 事件</td>\n<td>event</td>\n<td>-</td>\n<td>-</td>\n<td>否</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table></div><h4>$KsDialog (通过原型方法调用)</h4>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>函数名</th>\n<th>函数签名</th>\n<th>函数描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>success</td>\n<td><code class=\"ks-code-inline\">function success (text, title, cancel = false)</code></td>\n<td>创建一个 <code class=\"ks-code-inline\">success</code> 类型的对话框</td>\n</tr>\n<tr>\n<td>info</td>\n<td><code class=\"ks-code-inline\">function info (text, title, cancel = false)</code></td>\n<td>创建一个 <code class=\"ks-code-inline\">info</code> 类型的对话框</td>\n</tr>\n<tr>\n<td>warn</td>\n<td><code class=\"ks-code-inline\">function warn (text, title, cancel = false)</code></td>\n<td>创建一个 <code class=\"ks-code-inline\">warn</code> 类型的对话框</td>\n</tr>\n<tr>\n<td>danger</td>\n<td><code class=\"ks-code-inline\">function danger (text, title, cancel = false)</code></td>\n<td>创建一个 <code class=\"ks-code-inline\">danger</code> 类型的对话框</td>\n</tr>\n<tr>\n<td>show</td>\n<td><code class=\"ks-code-inline\">function show (content, title, type, cancel = false, confirmCb = null, cancelCb = null)</code></td>\n<td>显示一个对话框可以做更多的自定义</td>\n</tr>\n<tr>\n<td>setDefaults</td>\n<td><code class=\"ks-code-inline\">function setDefaults (options)</code></td>\n<td>设置默认参数</td>\n</tr>\n<tr>\n<td>close</td>\n<td><code class=\"ks-code-inline\">function close ()</code></td>\n<td>关闭当前显示的对话框并且显示下一个对话框，如果当前没有对话框那么就是显示对话框</td>\n</tr>\n</tbody>\n</table></div></section>";

/***/ }

});