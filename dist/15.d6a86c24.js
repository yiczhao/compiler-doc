webpackJsonp([15],{

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(108);

/***/ },

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(109)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/switch-14.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(110)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/switch-14.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 109:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template><section><h2>Switch 开关组件</h2>
	// <blockquote>
	// <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
	// </blockquote>
	// <hr>
	// <h3>基础使用</h3>
	// <h4>开关组件的基础使用（KsSwitch）</h4>
	// <br>
	// <p><ks-switch class="mr20"></ks-switch><ks-switch color="#AABBCC" size="large"><br>
	// <span slot="checkedChildren">开</span><br>
	// <span slot="unCheckedChildren">关</span><br>
	// </ks-switch></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-switch</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mr20"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-switch</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-switch</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"#CC00FF"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"large"</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"checkedChildren"</span>&gt;</span>开<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"unCheckedChildren"</span>&gt;</span>关<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">ks-switch</span>&gt;</span>
	// </code></pre>
	// <h4>开关颜色</h4>
	// <blockquote>
	// <p>组件可以通过 <code class="ks-code-inline">color</code> 属性来自定义颜色</p>
	// </blockquote>
	// <br>
	// <p><span class="mr20" style="color: #FFDD33">#FFDD33</span> <ks-switch color="#FFDD33"></ks-switch><br>
	// <span class="mr20" style="color: #CC00FF">#CC00FF</span> <ks-switch color="#CC00FF"></ks-switch><br>
	// <span class="mr20" style="color: #FFBBDD">#FFBBDD</span> <ks-switch color="#FFBBDD"></ks-switch></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mr20"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: #FFDD33"</span>&gt;</span>#FFDD33<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">ks-switch</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"#FFDD33"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-switch</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mr20"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: #CC00FF"</span>&gt;</span>#CC00FF<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">ks-switch</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"#CC00FF"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-switch</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mr20"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: #FFBBDD"</span>&gt;</span>#FFBBDD<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">ks-switch</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"#FFBBDD"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-switch</span>&gt;</span>
	// </code></pre>
	// <h4>开关禁用</h4>
	// <blockquote>
	// <p>组件可以通过 <code class="ks-code-inline">disable</code> 属性来禁用</p>
	// </blockquote>
	// <br>
	// <ks-switch class="mr20" :checked.sync="switchDisable">
	// </ks-switch><ks-switch :disable="switchDisable"></ks-switch>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-switch</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mr20"</span> <span class="hljs-attr">:checked.sync</span>=<span class="hljs-string">"switchDisable"</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">ks-switch</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-switch</span> <span class="hljs-attr">:disable</span>=<span class="hljs-string">"switchDisable"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-switch</span>&gt;</span>
	// </code></pre>
	// <h4>抽象的 Switch 组件 (AbstractSwitch)</h4>
	// <blockquote>
	// <p>高度抽象的 switch 组件</p>
	// </blockquote>
	// <br>
	// <p><ks-abstract-switch :width="120" :height="30" :status-mapper="statusMapper" :status.sync="status"></ks-abstract-switch></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-abstract-switch</span> <span class="hljs-attr">:width</span>=<span class="hljs-string">"120"</span> <span class="hljs-attr">:height</span>=<span class="hljs-string">"30"</span>
	//   <span class="hljs-attr">:status-mapper</span>=<span class="hljs-string">"statusMapper"</span> <span class="hljs-attr">:status.sync</span>=<span class="hljs-string">"status"</span>&gt;</span>
	//   <span class="hljs-comment">&lt;!-- 在此处的内容会在滑动槽中间显示 与 text 属性效果一样, 不过这边定制程度更高一点。 --&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">ks-abstract-switch</span>&gt;</span>
	// </code></pre>
	// <blockquote>
	// <p><code class="ks-code-inline">AbstractSwitch</code> 组件可以自定义 高度, 宽度, 每个状态下都有对应的 slide 颜色 dot 颜色 font 颜色<br>
	// font 大小 以及 text 内容设置</p>
	// </blockquote>
	//
	// <h3>脚本</h3>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
	//   <span class="hljs-keyword">let</span> statusMapper = {
	//      <span class="hljs-attr">off</span>: {<span class="hljs-attr">slideColor</span>: <span class="hljs-string">'#FFF'</span>, <span class="hljs-attr">dotColor</span>: <span class="hljs-string">'#FFF'</span>, <span class="hljs-attr">fontColor</span>: <span class="hljs-string">'#E1E1E1'</span>, <span class="hljs-attr">fontSize</span>: <span class="hljs-string">'14'</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">'OFF'</span>},
	//      <span class="hljs-attr">on</span>: {<span class="hljs-attr">slideColor</span>: <span class="hljs-string">'#55C45A'</span>, <span class="hljs-attr">dotColor</span>: <span class="hljs-string">'#FFF'</span>, <span class="hljs-attr">fontColor</span>: <span class="hljs-string">'#FFF'</span>, <span class="hljs-attr">fontSize</span>: <span class="hljs-string">'16'</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">'ON'</span>}
	//    };
	//
	//   <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
	//     data () {
	//       <span class="hljs-keyword">return</span> {
	//         statusMapper,
	//         <span class="hljs-attr">status</span>: <span class="hljs-string">'off'</span>,
	//
	//         <span class="hljs-attr">switchDisable</span>: <span class="hljs-literal">false</span>
	//       }
	//     }
	//   }
	// </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	// </code></pre>
	// <h3>API</h3>
	// <br>
	// <h4>KsSwitch</h4>
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
	// <td>color</td>
	// <td>用来描述 <code class="ks-code-inline">KsSwitch</code> 的颜色, 一个十六进制的数值</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td>#04BE02</td>
	// </tr>
	// <tr>
	// <td>size</td>
	// <td>用来描述当前 <code class="ks-code-inline">KsSwitch</code> 大小</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td><code class="ks-code-inline">normal</code>, <code class="ks-code-inline">small</code>, <code class="ks-code-inline">mini</code>, <code class="ks-code-inline">large</code></td>
	// <td><code class="ks-code-inline">false</code></td>
	// </tr>
	// <tr>
	// <td>checked</td>
	// <td>用来描述当前 <code class="ks-code-inline">KsSwitch</code> 是否选中</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">true</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td><code class="ks-code-inline">false</code></td>
	// </tr>
	// <tr>
	// <td>disable</td>
	// <td><code class="ks-code-inline">KsCheckbox</code> 是否是禁用状态</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td><code class="ks-code-inline">false</code></td>
	// </tr>
	// </tbody>
	// </table></div><h4>KsAbstractSwitch</h4>
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
	// <td>statusMapper</td>
	// <td>开关状态对应的显示状态</td>
	// <td>props</td>
	// <td>Object</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>是</td>
	// <td>无</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>status</td>
	// <td>当前组件的状态</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">true</code></td>
	// <td>是</td>
	// <td>无</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>width</td>
	// <td>当前组件的宽度</td>
	// <td>props</td>
	// <td>Number</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>是</td>
	// <td>无</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>height</td>
	// <td>当前组件的高度</td>
	// <td>props</td>
	// <td>Number</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>是</td>
	// <td>无</td>
	// <td>-</td>
	// </tr>
	// </tbody>
	// </table></div><h4>statusMapper （KsAbstractSwitch 的 statusMapper 参数）</h4>
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
	// <td>slideColor</td>
	// <td>滑槽颜色</td>
	// <td>props</td>
	// <td>String</td>
	// <td>-</td>
	// <td>是</td>
	// <td>无</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>dotColor</td>
	// <td>点颜色</td>
	// <td>props</td>
	// <td>String</td>
	// <td>-</td>
	// <td>是</td>
	// <td>无</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>fontColor</td>
	// <td>字体颜色</td>
	// <td>props</td>
	// <td>String</td>
	// <td>-</td>
	// <td>是</td>
	// <td>无</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>fontSize</td>
	// <td>字体大小</td>
	// <td>props</td>
	// <td>Number</td>
	// <td>-</td>
	// <td>是</td>
	// <td>无</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>text</td>
	// <td>显示文字</td>
	// <td>props</td>
	// <td>String</td>
	// <td>-</td>
	// <td>是</td>
	// <td>无</td>
	// <td>-</td>
	// </tr>
	// </tbody>
	// </table></div></section></template>
	//
	// <script>
	var statusMapper = {
	  off: { slideColor: '#FFF', dotColor: '#FFF', fontColor: '#E1E1E1', fontSize: '14', text: 'OFF' },
	  on: { slideColor: '#55C45A', dotColor: '#FFF', fontColor: '#FFF', fontSize: '16', text: 'ON' }
	};

	exports.default = {
	  data: function data() {
	    return {
	      statusMapper: statusMapper,
	      status: 'off',

	      switchDisable: false
	    };
	  }
	};
	// </script>

/***/ },

/***/ 110:
/***/ function(module, exports) {

	module.exports = "<section><h2>Switch 开关组件</h2>\n<blockquote>\n<p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>\n</blockquote>\n<hr>\n<h3>基础使用</h3>\n<h4>开关组件的基础使用（KsSwitch）</h4>\n<br>\n<p><ks-switch class=\"mr20\"></ks-switch><ks-switch color=\"#AABBCC\" size=\"large\"><br>\n<span slot=\"checkedChildren\">开</span><br>\n<span slot=\"unCheckedChildren\">关</span><br>\n</ks-switch></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-switch</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"mr20\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-switch</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-switch</span> <span class=\"hljs-attr\">color</span>=<span class=\"hljs-string\">\"#CC00FF\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"large\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">slot</span>=<span class=\"hljs-string\">\"checkedChildren\"</span>&gt;</span>开<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">slot</span>=<span class=\"hljs-string\">\"unCheckedChildren\"</span>&gt;</span>关<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-switch</span>&gt;</span>\n</code></pre>\n<h4>开关颜色</h4>\n<blockquote>\n<p>组件可以通过 <code class=\"ks-code-inline\">color</code> 属性来自定义颜色</p>\n</blockquote>\n<br>\n<p><span class=\"mr20\" style=\"color: #FFDD33\">#FFDD33</span> <ks-switch color=\"#FFDD33\"></ks-switch><br>\n<span class=\"mr20\" style=\"color: #CC00FF\">#CC00FF</span> <ks-switch color=\"#CC00FF\"></ks-switch><br>\n<span class=\"mr20\" style=\"color: #FFBBDD\">#FFBBDD</span> <ks-switch color=\"#FFBBDD\"></ks-switch></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"mr20\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"color: #FFDD33\"</span>&gt;</span>#FFDD33<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span> <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-switch</span> <span class=\"hljs-attr\">color</span>=<span class=\"hljs-string\">\"#FFDD33\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-switch</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"mr20\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"color: #CC00FF\"</span>&gt;</span>#CC00FF<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span> <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-switch</span> <span class=\"hljs-attr\">color</span>=<span class=\"hljs-string\">\"#CC00FF\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-switch</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"mr20\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"color: #FFBBDD\"</span>&gt;</span>#FFBBDD<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span> <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-switch</span> <span class=\"hljs-attr\">color</span>=<span class=\"hljs-string\">\"#FFBBDD\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-switch</span>&gt;</span>\n</code></pre>\n<h4>开关禁用</h4>\n<blockquote>\n<p>组件可以通过 <code class=\"ks-code-inline\">disable</code> 属性来禁用</p>\n</blockquote>\n<br>\n<ks-switch class=\"mr20\" :checked.sync=\"switchDisable\">\n</ks-switch><ks-switch :disable=\"switchDisable\"></ks-switch>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-switch</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"mr20\"</span> <span class=\"hljs-attr\">:checked.sync</span>=<span class=\"hljs-string\">\"switchDisable\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-switch</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-switch</span> <span class=\"hljs-attr\">:disable</span>=<span class=\"hljs-string\">\"switchDisable\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-switch</span>&gt;</span>\n</code></pre>\n<h4>抽象的 Switch 组件 (AbstractSwitch)</h4>\n<blockquote>\n<p>高度抽象的 switch 组件</p>\n</blockquote>\n<br>\n<p><ks-abstract-switch :width=\"120\" :height=\"30\" :status-mapper=\"statusMapper\" :status.sync=\"status\"></ks-abstract-switch></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-abstract-switch</span> <span class=\"hljs-attr\">:width</span>=<span class=\"hljs-string\">\"120\"</span> <span class=\"hljs-attr\">:height</span>=<span class=\"hljs-string\">\"30\"</span>\n  <span class=\"hljs-attr\">:status-mapper</span>=<span class=\"hljs-string\">\"statusMapper\"</span> <span class=\"hljs-attr\">:status.sync</span>=<span class=\"hljs-string\">\"status\"</span>&gt;</span>\n  <span class=\"hljs-comment\">&lt;!-- 在此处的内容会在滑动槽中间显示 与 text 属性效果一样, 不过这边定制程度更高一点。 --&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-abstract-switch</span>&gt;</span>\n</code></pre>\n<blockquote>\n<p><code class=\"ks-code-inline\">AbstractSwitch</code> 组件可以自定义 高度, 宽度, 每个状态下都有对应的 slide 颜色 dot 颜色 font 颜色<br>\nfont 大小 以及 text 内容设置</p>\n</blockquote>\n\n<h3>脚本</h3>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n  <span class=\"hljs-keyword\">let</span> statusMapper = {\n     <span class=\"hljs-attr\">off</span>: {<span class=\"hljs-attr\">slideColor</span>: <span class=\"hljs-string\">'#FFF'</span>, <span class=\"hljs-attr\">dotColor</span>: <span class=\"hljs-string\">'#FFF'</span>, <span class=\"hljs-attr\">fontColor</span>: <span class=\"hljs-string\">'#E1E1E1'</span>, <span class=\"hljs-attr\">fontSize</span>: <span class=\"hljs-string\">'14'</span>, <span class=\"hljs-attr\">text</span>: <span class=\"hljs-string\">'OFF'</span>},\n     <span class=\"hljs-attr\">on</span>: {<span class=\"hljs-attr\">slideColor</span>: <span class=\"hljs-string\">'#55C45A'</span>, <span class=\"hljs-attr\">dotColor</span>: <span class=\"hljs-string\">'#FFF'</span>, <span class=\"hljs-attr\">fontColor</span>: <span class=\"hljs-string\">'#FFF'</span>, <span class=\"hljs-attr\">fontSize</span>: <span class=\"hljs-string\">'16'</span>, <span class=\"hljs-attr\">text</span>: <span class=\"hljs-string\">'ON'</span>}\n   };\n  \n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span>{\n    data () {\n      <span class=\"hljs-keyword\">return</span> {\n        statusMapper,\n        <span class=\"hljs-attr\">status</span>: <span class=\"hljs-string\">'off'</span>,\n        \n        <span class=\"hljs-attr\">switchDisable</span>: <span class=\"hljs-literal\">false</span>\n      }\n    }\n  }\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre>\n<h3>API</h3>\n<br>\n<h4>KsSwitch</h4>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>双向（twoWay）</th>\n<th>是否必须</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>color</td>\n<td>用来描述 <code class=\"ks-code-inline\">KsSwitch</code> 的颜色, 一个十六进制的数值</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td>#04BE02</td>\n</tr>\n<tr>\n<td>size</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">KsSwitch</code> 大小</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td><code class=\"ks-code-inline\">normal</code>, <code class=\"ks-code-inline\">small</code>, <code class=\"ks-code-inline\">mini</code>, <code class=\"ks-code-inline\">large</code></td>\n<td><code class=\"ks-code-inline\">false</code></td>\n</tr>\n<tr>\n<td>checked</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">KsSwitch</code> 是否选中</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">true</code></td>\n<td>否</td>\n<td>无</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n</tr>\n<tr>\n<td>disable</td>\n<td><code class=\"ks-code-inline\">KsCheckbox</code> 是否是禁用状态</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n</tr>\n</tbody>\n</table></div><h4>KsAbstractSwitch</h4>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>双向（twoWay）</th>\n<th>是否必须</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>statusMapper</td>\n<td>开关状态对应的显示状态</td>\n<td>props</td>\n<td>Object</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>是</td>\n<td>无</td>\n<td>-</td>\n</tr>\n<tr>\n<td>status</td>\n<td>当前组件的状态</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">true</code></td>\n<td>是</td>\n<td>无</td>\n<td>-</td>\n</tr>\n<tr>\n<td>width</td>\n<td>当前组件的宽度</td>\n<td>props</td>\n<td>Number</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>是</td>\n<td>无</td>\n<td>-</td>\n</tr>\n<tr>\n<td>height</td>\n<td>当前组件的高度</td>\n<td>props</td>\n<td>Number</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>是</td>\n<td>无</td>\n<td>-</td>\n</tr>\n</tbody>\n</table></div><h4>statusMapper （KsAbstractSwitch 的 statusMapper 参数）</h4>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>双向（twoWay）</th>\n<th>是否必须</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>slideColor</td>\n<td>滑槽颜色</td>\n<td>props</td>\n<td>String</td>\n<td>-</td>\n<td>是</td>\n<td>无</td>\n<td>-</td>\n</tr>\n<tr>\n<td>dotColor</td>\n<td>点颜色</td>\n<td>props</td>\n<td>String</td>\n<td>-</td>\n<td>是</td>\n<td>无</td>\n<td>-</td>\n</tr>\n<tr>\n<td>fontColor</td>\n<td>字体颜色</td>\n<td>props</td>\n<td>String</td>\n<td>-</td>\n<td>是</td>\n<td>无</td>\n<td>-</td>\n</tr>\n<tr>\n<td>fontSize</td>\n<td>字体大小</td>\n<td>props</td>\n<td>Number</td>\n<td>-</td>\n<td>是</td>\n<td>无</td>\n<td>-</td>\n</tr>\n<tr>\n<td>text</td>\n<td>显示文字</td>\n<td>props</td>\n<td>String</td>\n<td>-</td>\n<td>是</td>\n<td>无</td>\n<td>-</td>\n</tr>\n</tbody>\n</table></div></section>";

/***/ }

});