webpackJsonp([11],{

/***/ 78:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(79);

/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(80)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/radio-6.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(81)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/radio-6.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 80:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template><section><h2>Radio 单选框</h2>
	// <blockquote>
	// <p>在一组备选项中进行单选。</p>
	// </blockquote>
	// <hr>
	// <h3>基础使用</h3>
	// <h4>单选使用（KsRadio）</h4>
	// <blockquote>
	// <p>单选在使用时与原生 <code class="ks-code-inline">Radio</code> 一样必须设置 <code class="ks-code-inline">name</code> 属性, 只有相同名称的 <code class="ks-code-inline">Radio</code> 才能形成单选</p>
	// </blockquote>
	// <br>
	// <p><ks-radio class="mr20" name="base-use">备选项1</ks-radio><ks-radio class="mr20" name="base-use">备选项2</ks-radio><ks-radio class="mr20" name="base-use">备选项3</ks-radio></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-use"</span>&gt;</span>备选项1<span class="hljs-tag">&lt;/<span class="hljs-name">ks-radio</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-use"</span>&gt;</span>备选项2<span class="hljs-tag">&lt;/<span class="hljs-name">ks-radio</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-use"</span>&gt;</span>备选项3<span class="hljs-tag">&lt;/<span class="hljs-name">ks-radio</span>&gt;</span>
	// </code></pre>
	// <h4>单选颜色</h4>
	// <blockquote>
	// <p>组件可以通过 <code class="ks-code-inline">color</code> 属性来自定义颜色</p>
	// </blockquote>
	// <br>
	// <p><span class="mr20" style="color: #FFDD33">#FFDD33</span> <ks-radio color="#FFDD33" name="base-color">备选项1</ks-radio><br>
	// <span class="mr20" style="color: #CC00FF">#CC00FF</span> <ks-radio color="#CC00FF" name="base-color">备选项2</ks-radio><br>
	// <span class="mr20" style="color: #FFBBDD">#FFBBDD</span> <ks-radio color="#FFBBDD" name="base-color">备选项3</ks-radio></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mr20"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: #FFDD33"</span>&gt;</span>#FFDD33<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">ks-radio</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"#FFDD33"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-color"</span>&gt;</span>备选项1<span class="hljs-tag">&lt;/<span class="hljs-name">ks-radio</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mr20"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: #CC00FF"</span>&gt;</span>#CC00FF<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">ks-radio</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"#CC00FF"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-color"</span>&gt;</span>备选项2<span class="hljs-tag">&lt;/<span class="hljs-name">ks-radio</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mr20"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: #FFBBDD"</span>&gt;</span>#FFBBDD<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">ks-radio</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"#FFBBDD"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-color"</span>&gt;</span>备选项3<span class="hljs-tag">&lt;/<span class="hljs-name">ks-radio</span>&gt;</span>
	// </code></pre>
	// <h4>单选禁用</h4>
	// <blockquote>
	// <p>组件可以通过 <code class="ks-code-inline">disable</code> 属性来禁用</p>
	// </blockquote>
	// <br>
	// <ks-switch class="mr20" :checked.sync="radioDisable">
	// </ks-switch><ks-radio :disable="radioDisable">幽灵按钮</ks-radio>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-switch</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mr20"</span> <span class="hljs-attr">:checked.sync</span>=<span class="hljs-string">"radioDisable"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-switch</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-radio</span> <span class="hljs-attr">:disable</span>=<span class="hljs-string">"radioDisable"</span>&gt;</span>幽灵按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ks-radio</span>&gt;</span>
	// </code></pre>
	// <h4>按钮类型的单选 （KsBtnRadio）</h4>
	// <blockquote>
	// <p>按钮类型的单选使用</p>
	// </blockquote>
	// <br>
	// <div class="radio-container">
	//   <ks-btn-radio name="base-btn">张三</ks-btn-radio><ks-btn-radio name="base-btn">李四</ks-btn-radio><ks-btn-radio name="base-btn">王五</ks-btn-radio>
	// </div>
	// <br>
	// <p>默认选中张三</p>
	// <div class="radio-container">
	//   <ks-btn-radio name="base-btn1" :def-checked="true">张三</ks-btn-radio><ks-btn-radio name="base-btn1">李四</ks-btn-radio><ks-btn-radio name="base-btn1">王五</ks-btn-radio>
	// </div>
	// <br>
	// <p>禁用项</p>
	// <div class="radio-container">
	//   <ks-btn-radio name="base-btn2" color="#CC00FF" :def-checked="true">张三</ks-btn-radio><ks-btn-radio name="base-btn2" :disable="true">李四</ks-btn-radio><ks-btn-radio name="base-btn2">王五</ks-btn-radio>
	// </div>
	// <pre class="ks-hljs"><code><span class="hljs-comment">&lt;!-- 通常使用 --&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"radio-container"</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">ks-btn-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-btn"</span>&gt;</span>张三<span class="hljs-tag">&lt;/<span class="hljs-name">ks-btn-radio</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">ks-btn-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-btn"</span>&gt;</span>李四<span class="hljs-tag">&lt;/<span class="hljs-name">ks-btn-radio</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">ks-btn-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-btn"</span>&gt;</span>王五<span class="hljs-tag">&lt;/<span class="hljs-name">ks-btn-radio</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
	//
	// <span class="hljs-comment">&lt;!-- 默认选中张三 --&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"radio-container"</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">ks-btn-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-btn1"</span> <span class="hljs-attr">:def-checked</span>=<span class="hljs-string">"true"</span>&gt;</span>张三<span class="hljs-tag">&lt;/<span class="hljs-name">ks-btn-radio</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">ks-btn-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-btn1"</span>&gt;</span>李四<span class="hljs-tag">&lt;/<span class="hljs-name">ks-btn-radio</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">ks-btn-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-btn1"</span>&gt;</span>王五<span class="hljs-tag">&lt;/<span class="hljs-name">ks-btn-radio</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
	//
	// <span class="hljs-comment">&lt;!-- 禁用 --&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"radio-container"</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">ks-btn-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-btn2"</span> <span class="hljs-attr">:def-checked</span>=<span class="hljs-string">"true"</span>&gt;</span>张三<span class="hljs-tag">&lt;/<span class="hljs-name">ks-btn-radio</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">ks-btn-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-btn2"</span> <span class="hljs-attr">:disable</span>=<span class="hljs-string">"true"</span>&gt;</span>李四<span class="hljs-tag">&lt;/<span class="hljs-name">ks-btn-radio</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">ks-btn-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-btn2"</span>&gt;</span>王五<span class="hljs-tag">&lt;/<span class="hljs-name">ks-btn-radio</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
	// </code></pre>
	// <h4>获取 Radio 的选中值 （KsRadioGroup）</h4>
	// <blockquote>
	// <p>如何获取 radio 的选中值</p>
	// </blockquote>
	// <br>
	// <div class="radio-container">
	//   <ks-radio name="test1" :v-model.sync="radioChange" value="zhangSan">张三</ks-radio>
	//   <ks-radio name="test1" :v-model.sync="radioChange" value="liSi">李四</ks-radio>
	//   <ks-radio name="test1" :v-model.sync="radioChange" value="wangWu">王五</ks-radio>
	// </div>
	// <br>
	// <p><label v-text="radioChange"></label></p>
	// <br>
	// <p>我们可以通过绑定 <code class="ks-code-inline">v-model</code> 属性的方式来获取当前的选中项。</p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"radio-container"</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">ks-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"test1"</span> <span class="hljs-attr">:v-model.sync</span>=<span class="hljs-string">"radioChange"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"zhangSan"</span>&gt;</span>张三<span class="hljs-tag">&lt;/<span class="hljs-name">ks-radio</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">ks-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"test1"</span> <span class="hljs-attr">:v-model.sync</span>=<span class="hljs-string">"radioChange"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"liSi"</span>&gt;</span>李四<span class="hljs-tag">&lt;/<span class="hljs-name">ks-radio</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">ks-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"test1"</span> <span class="hljs-attr">:v-model.sync</span>=<span class="hljs-string">"radioChange"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"wangWu"</span>&gt;</span>王五<span class="hljs-tag">&lt;/<span class="hljs-name">ks-radio</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
	// </code></pre>
	// <ks-radio-group :v-model.sync="radioChange2">
	//   <ks-radio name="test2" value="zhangSan">张三</ks-radio>
	//   <ks-radio name="test2" value="liSi">李四</ks-radio>
	//   <ks-radio name="test2" value="wangWu">王五</ks-radio>
	// </ks-radio-group>
	// <br>
	// <p><label v-text="radioChange2"></label></p>
	// <br>
	// <p>我们可以通过给 <code class="ks-code-inline">ks-radio-group</code> 绑定 <code class="ks-code-inline">v-model</code> 属性的方式来获取当前的选中项, 避免了每个 <code class="ks-code-inline">radio</code> 都要绑定的烦恼。</p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-radio-group</span> <span class="hljs-attr">:v-model.sync</span>=<span class="hljs-string">"radioChange2"</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">ks-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"test2"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"zhangSan"</span>&gt;</span>张三<span class="hljs-tag">&lt;/<span class="hljs-name">ks-radio</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">ks-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"test2"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"liSi"</span>&gt;</span>李四<span class="hljs-tag">&lt;/<span class="hljs-name">ks-radio</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">ks-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"test2"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"wangWu"</span>&gt;</span>王五<span class="hljs-tag">&lt;/<span class="hljs-name">ks-radio</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">ks-radio-group</span>&gt;</span>
	// </code></pre>
	//
	// <h3>脚本</h3>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
	//   <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
	//     data () {
	//       <span class="hljs-keyword">return</span> {
	//         <span class="hljs-attr">radioChange2</span>: <span class="hljs-string">'radioChange'</span>,
	//         <span class="hljs-attr">radioChange</span>: <span class="hljs-string">'radioChange'</span>,
	//         <span class="hljs-attr">radioDisable</span>: <span class="hljs-literal">false</span>
	//       }
	//     }
	//   }
	// </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	// </code></pre>
	// <h3>API</h3>
	// <br>
	// <h4>KsRadio 与 KsBtnRadio</h4>
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
	// <td>name</td>
	// <td>用来标记当前 <code class="ks-code-inline">radio</code> 的名称作用和原生 <code class="ks-code-inline">radio</code> 一样</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td>''</td>
	// </tr>
	// <tr>
	// <td>color</td>
	// <td>用来描述 <code class="ks-code-inline">radio</code> 的颜色, 一个十六进制的数值</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td>#00A5E0</td>
	// </tr>
	// <tr>
	// <td>value</td>
	// <td>保留</td>
	// <td>props</td>
	// <td>Any</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td>''</td>
	// </tr>
	// <tr>
	// <td>checked</td>
	// <td>用来描述当前 <code class="ks-code-inline">radio</code> 是否选中</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">true</code></td>
	// <td>否</td>
	// <td><code class="ks-code-inline">true</code>, <code class="ks-code-inline">false</code></td>
	// <td><code class="ks-code-inline">false</code></td>
	// </tr>
	// <tr>
	// <td>defChecked</td>
	// <td>用来描述当前 <code class="ks-code-inline">radio</code> 默认是否选中</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td><code class="ks-code-inline">true</code>, <code class="ks-code-inline">false</code></td>
	// <td><code class="ks-code-inline">false</code></td>
	// </tr>
	// <tr>
	// <td>disable</td>
	// <td>用来描述当前 <code class="ks-code-inline">radio</code> 是否是禁用状态</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td><code class="ks-code-inline">true</code>, <code class="ks-code-inline">false</code></td>
	// <td>无</td>
	// <td><code class="ks-code-inline">false</code></td>
	// </tr>
	// <tr>
	// <td>vModel</td>
	// <td>存储了当前 <code class="ks-code-inline">radio</code> 组中选中的值</td>
	// <td>props</td>
	// <td>Any</td>
	// <td><code class="ks-code-inline">true</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td>''</td>
	// </tr>
	// <tr>
	// <td>@change</td>
	// <td><code class="ks-code-inline">radio</code> change 事件</td>
	// <td>event</td>
	// <td>-</td>
	// <td>-</td>
	// <td>否</td>
	// <td>-</td>
	// <td>-</td>
	// </tr>
	// </tbody>
	// </table></div><br>
	// <h4>KsRadioGroup</h4>
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
	// <td>vModel</td>
	// <td>存储了当前 <code class="ks-code-inline">KsRadioGroup</code> 组中选中的值</td>
	// <td>props</td>
	// <td>Any</td>
	// <td><code class="ks-code-inline">true</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td>''</td>
	// </tr>
	// <tr>
	// <td>@change</td>
	// <td><code class="ks-code-inline">KsRadioGroup</code> change 事件</td>
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
	      radioChange2: 'radioChange',
	      radioChange: 'radioChange',
	      radioDisable: false
	    };
	  }
	};
	// </script>

/***/ },

/***/ 81:
/***/ function(module, exports) {

	module.exports = "<section><h2>Radio 单选框</h2>\n<blockquote>\n<p>在一组备选项中进行单选。</p>\n</blockquote>\n<hr>\n<h3>基础使用</h3>\n<h4>单选使用（KsRadio）</h4>\n<blockquote>\n<p>单选在使用时与原生 <code class=\"ks-code-inline\">Radio</code> 一样必须设置 <code class=\"ks-code-inline\">name</code> 属性, 只有相同名称的 <code class=\"ks-code-inline\">Radio</code> 才能形成单选</p>\n</blockquote>\n<br>\n<p><ks-radio class=\"mr20\" name=\"base-use\">备选项1</ks-radio><ks-radio class=\"mr20\" name=\"base-use\">备选项2</ks-radio><ks-radio class=\"mr20\" name=\"base-use\">备选项3</ks-radio></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-use\"</span>&gt;</span>备选项1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-radio</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-use\"</span>&gt;</span>备选项2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-radio</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-use\"</span>&gt;</span>备选项3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-radio</span>&gt;</span>\n</code></pre>\n<h4>单选颜色</h4>\n<blockquote>\n<p>组件可以通过 <code class=\"ks-code-inline\">color</code> 属性来自定义颜色</p>\n</blockquote>\n<br>\n<p><span class=\"mr20\" style=\"color: #FFDD33\">#FFDD33</span> <ks-radio color=\"#FFDD33\" name=\"base-color\">备选项1</ks-radio><br>\n<span class=\"mr20\" style=\"color: #CC00FF\">#CC00FF</span> <ks-radio color=\"#CC00FF\" name=\"base-color\">备选项2</ks-radio><br>\n<span class=\"mr20\" style=\"color: #FFBBDD\">#FFBBDD</span> <ks-radio color=\"#FFBBDD\" name=\"base-color\">备选项3</ks-radio></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"mr20\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"color: #FFDD33\"</span>&gt;</span>#FFDD33<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span> <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-radio</span> <span class=\"hljs-attr\">color</span>=<span class=\"hljs-string\">\"#FFDD33\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-color\"</span>&gt;</span>备选项1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-radio</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"mr20\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"color: #CC00FF\"</span>&gt;</span>#CC00FF<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span> <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-radio</span> <span class=\"hljs-attr\">color</span>=<span class=\"hljs-string\">\"#CC00FF\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-color\"</span>&gt;</span>备选项2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-radio</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"mr20\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"color: #FFBBDD\"</span>&gt;</span>#FFBBDD<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span> <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-radio</span> <span class=\"hljs-attr\">color</span>=<span class=\"hljs-string\">\"#FFBBDD\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-color\"</span>&gt;</span>备选项3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-radio</span>&gt;</span>\n</code></pre>\n<h4>单选禁用</h4>\n<blockquote>\n<p>组件可以通过 <code class=\"ks-code-inline\">disable</code> 属性来禁用</p>\n</blockquote>\n<br>\n<ks-switch class=\"mr20\" :checked.sync=\"radioDisable\">\n</ks-switch><ks-radio :disable=\"radioDisable\">幽灵按钮</ks-radio>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-switch</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"mr20\"</span> <span class=\"hljs-attr\">:checked.sync</span>=<span class=\"hljs-string\">\"radioDisable\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-switch</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-radio</span> <span class=\"hljs-attr\">:disable</span>=<span class=\"hljs-string\">\"radioDisable\"</span>&gt;</span>幽灵按钮<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-radio</span>&gt;</span>\n</code></pre>\n<h4>按钮类型的单选 （KsBtnRadio）</h4>\n<blockquote>\n<p>按钮类型的单选使用</p>\n</blockquote>\n<br>\n<div class=\"radio-container\">\n  <ks-btn-radio name=\"base-btn\">张三</ks-btn-radio><ks-btn-radio name=\"base-btn\">李四</ks-btn-radio><ks-btn-radio name=\"base-btn\">王五</ks-btn-radio>\n</div>\n<br>\n<p>默认选中张三</p>\n<div class=\"radio-container\">\n  <ks-btn-radio name=\"base-btn1\" :def-checked=\"true\">张三</ks-btn-radio><ks-btn-radio name=\"base-btn1\">李四</ks-btn-radio><ks-btn-radio name=\"base-btn1\">王五</ks-btn-radio>\n</div>\n<br>\n<p>禁用项</p>\n<div class=\"radio-container\">\n  <ks-btn-radio name=\"base-btn2\" color=\"#CC00FF\" :def-checked=\"true\">张三</ks-btn-radio><ks-btn-radio name=\"base-btn2\" :disable=\"true\">李四</ks-btn-radio><ks-btn-radio name=\"base-btn2\">王五</ks-btn-radio>\n</div>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-comment\">&lt;!-- 通常使用 --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"radio-container\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-btn-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-btn\"</span>&gt;</span>张三<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-btn-radio</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-btn-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-btn\"</span>&gt;</span>李四<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-btn-radio</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-btn-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-btn\"</span>&gt;</span>王五<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-btn-radio</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- 默认选中张三 --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"radio-container\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-btn-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-btn1\"</span> <span class=\"hljs-attr\">:def-checked</span>=<span class=\"hljs-string\">\"true\"</span>&gt;</span>张三<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-btn-radio</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-btn-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-btn1\"</span>&gt;</span>李四<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-btn-radio</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-btn-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-btn1\"</span>&gt;</span>王五<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-btn-radio</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-comment\">&lt;!-- 禁用 --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"radio-container\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-btn-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-btn2\"</span> <span class=\"hljs-attr\">:def-checked</span>=<span class=\"hljs-string\">\"true\"</span>&gt;</span>张三<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-btn-radio</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-btn-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-btn2\"</span> <span class=\"hljs-attr\">:disable</span>=<span class=\"hljs-string\">\"true\"</span>&gt;</span>李四<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-btn-radio</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-btn-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-btn2\"</span>&gt;</span>王五<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-btn-radio</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n</code></pre>\n<h4>获取 Radio 的选中值 （KsRadioGroup）</h4>\n<blockquote>\n<p>如何获取 radio 的选中值</p>\n</blockquote>\n<br>\n<div class=\"radio-container\">\n  <ks-radio name=\"test1\" :v-model.sync=\"radioChange\" value=\"zhangSan\">张三</ks-radio>\n  <ks-radio name=\"test1\" :v-model.sync=\"radioChange\" value=\"liSi\">李四</ks-radio>\n  <ks-radio name=\"test1\" :v-model.sync=\"radioChange\" value=\"wangWu\">王五</ks-radio>\n</div>\n<br>\n<p><label v-text=\"radioChange\"></label></p>\n<br>\n<p>我们可以通过绑定 <code class=\"ks-code-inline\">v-model</code> 属性的方式来获取当前的选中项。</p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"radio-container\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"test1\"</span> <span class=\"hljs-attr\">:v-model.sync</span>=<span class=\"hljs-string\">\"radioChange\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"zhangSan\"</span>&gt;</span>张三<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-radio</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"test1\"</span> <span class=\"hljs-attr\">:v-model.sync</span>=<span class=\"hljs-string\">\"radioChange\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"liSi\"</span>&gt;</span>李四<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-radio</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"test1\"</span> <span class=\"hljs-attr\">:v-model.sync</span>=<span class=\"hljs-string\">\"radioChange\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"wangWu\"</span>&gt;</span>王五<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-radio</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n</code></pre>\n<ks-radio-group :v-model.sync=\"radioChange2\">\n  <ks-radio name=\"test2\" value=\"zhangSan\">张三</ks-radio>\n  <ks-radio name=\"test2\" value=\"liSi\">李四</ks-radio>\n  <ks-radio name=\"test2\" value=\"wangWu\">王五</ks-radio>\n</ks-radio-group>\n<br>\n<p><label v-text=\"radioChange2\"></label></p>\n<br>\n<p>我们可以通过给 <code class=\"ks-code-inline\">ks-radio-group</code> 绑定 <code class=\"ks-code-inline\">v-model</code> 属性的方式来获取当前的选中项, 避免了每个 <code class=\"ks-code-inline\">radio</code> 都要绑定的烦恼。</p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-radio-group</span> <span class=\"hljs-attr\">:v-model.sync</span>=<span class=\"hljs-string\">\"radioChange2\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"test2\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"zhangSan\"</span>&gt;</span>张三<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-radio</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"test2\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"liSi\"</span>&gt;</span>李四<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-radio</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"test2\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"wangWu\"</span>&gt;</span>王五<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-radio</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-radio-group</span>&gt;</span>\n</code></pre>\n\n<h3>脚本</h3>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span>{\n    data () {\n      <span class=\"hljs-keyword\">return</span> {\n        <span class=\"hljs-attr\">radioChange2</span>: <span class=\"hljs-string\">'radioChange'</span>,\n        <span class=\"hljs-attr\">radioChange</span>: <span class=\"hljs-string\">'radioChange'</span>,\n        <span class=\"hljs-attr\">radioDisable</span>: <span class=\"hljs-literal\">false</span>\n      }\n    }\n  }\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre>\n<h3>API</h3>\n<br>\n<h4>KsRadio 与 KsBtnRadio</h4>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>双向（twoWay）</th>\n<th>是否必须</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>name</td>\n<td>用来标记当前 <code class=\"ks-code-inline\">radio</code> 的名称作用和原生 <code class=\"ks-code-inline\">radio</code> 一样</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td>''</td>\n</tr>\n<tr>\n<td>color</td>\n<td>用来描述 <code class=\"ks-code-inline\">radio</code> 的颜色, 一个十六进制的数值</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td>#00A5E0</td>\n</tr>\n<tr>\n<td>value</td>\n<td>保留</td>\n<td>props</td>\n<td>Any</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td>''</td>\n</tr>\n<tr>\n<td>checked</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">radio</code> 是否选中</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">true</code></td>\n<td>否</td>\n<td><code class=\"ks-code-inline\">true</code>, <code class=\"ks-code-inline\">false</code></td>\n<td><code class=\"ks-code-inline\">false</code></td>\n</tr>\n<tr>\n<td>defChecked</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">radio</code> 默认是否选中</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td><code class=\"ks-code-inline\">true</code>, <code class=\"ks-code-inline\">false</code></td>\n<td><code class=\"ks-code-inline\">false</code></td>\n</tr>\n<tr>\n<td>disable</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">radio</code> 是否是禁用状态</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td><code class=\"ks-code-inline\">true</code>, <code class=\"ks-code-inline\">false</code></td>\n<td>无</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n</tr>\n<tr>\n<td>vModel</td>\n<td>存储了当前 <code class=\"ks-code-inline\">radio</code> 组中选中的值</td>\n<td>props</td>\n<td>Any</td>\n<td><code class=\"ks-code-inline\">true</code></td>\n<td>否</td>\n<td>无</td>\n<td>''</td>\n</tr>\n<tr>\n<td>@change</td>\n<td><code class=\"ks-code-inline\">radio</code> change 事件</td>\n<td>event</td>\n<td>-</td>\n<td>-</td>\n<td>否</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table></div><br>\n<h4>KsRadioGroup</h4>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>双向（twoWay）</th>\n<th>是否必须</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>vModel</td>\n<td>存储了当前 <code class=\"ks-code-inline\">KsRadioGroup</code> 组中选中的值</td>\n<td>props</td>\n<td>Any</td>\n<td><code class=\"ks-code-inline\">true</code></td>\n<td>否</td>\n<td>无</td>\n<td>''</td>\n</tr>\n<tr>\n<td>@change</td>\n<td><code class=\"ks-code-inline\">KsRadioGroup</code> change 事件</td>\n<td>event</td>\n<td>-</td>\n<td>-</td>\n<td>否</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table></div></section>";

/***/ }

});