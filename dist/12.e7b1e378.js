webpackJsonp([12],{

/***/ 114:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(115);

/***/ },

/***/ 115:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(116)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/checkbox-7.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(117)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/checkbox-7.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 116:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template><section><h2>Checkbox 复选框</h2>
	// <blockquote>
	// <p>在一组备选项中进行多选。</p>
	// </blockquote>
	// <hr>
	// <h3>基础使用</h3>
	// <h4>复选框的使用（KsCheckbox）</h4>
	// <blockquote>
	// <p>单选在使用时与原生 <code class="ks-code-inline">Radio</code> 一样必须设置 <code class="ks-code-inline">name</code> 属性, 只有相同名称的 <code class="ks-code-inline">Radio</code> 才能形成单选</p>
	// </blockquote>
	// <br>
	// <p><ks-checkbox>备选项1</ks-checkbox><br>
	// <ks-checkbox>备选项2</ks-checkbox><br>
	// <ks-checkbox>备选项3</ks-checkbox></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-checkbox</span>&gt;</span>备选项1<span class="hljs-tag">&lt;/<span class="hljs-name">ks-checkbox</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-checkbox</span>&gt;</span>备选项2<span class="hljs-tag">&lt;/<span class="hljs-name">ks-checkbox</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-checkbox</span>&gt;</span>备选项3<span class="hljs-tag">&lt;/<span class="hljs-name">ks-checkbox</span>&gt;</span>
	// </code></pre>
	// <h4>复选颜色</h4>
	// <blockquote>
	// <p>组件可以通过 <code class="ks-code-inline">color</code> 属性来自定义颜色</p>
	// </blockquote>
	// <br>
	// <p><span class="mr20" style="color: #FFDD33">#FFDD33</span> <ks-checkbox color="#FFDD33">备选项1</ks-checkbox><br>
	// <span class="mr20" style="color: #CC00FF">#CC00FF</span> <ks-checkbox color="#CC00FF">备选项2</ks-checkbox><br>
	// <span class="mr20" style="color: #FFBBDD">#FFBBDD</span> <ks-checkbox color="#FFBBDD">备选项3</ks-checkbox></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mr20"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: #FFDD33"</span>&gt;</span>#FFDD33<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">ks-checkbox</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"#FFDD33"</span>&gt;</span>备选项1<span class="hljs-tag">&lt;/<span class="hljs-name">ks-checkbox</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mr20"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: #CC00FF"</span>&gt;</span>#CC00FF<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">ks-checkbox</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"#CC00FF"</span>&gt;</span>备选项2<span class="hljs-tag">&lt;/<span class="hljs-name">ks-checkbox</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mr20"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: #FFBBDD"</span>&gt;</span>#FFBBDD<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">ks-checkbox</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"#FFBBDD"</span>&gt;</span>备选项3<span class="hljs-tag">&lt;/<span class="hljs-name">ks-checkbox</span>&gt;</span>
	// </code></pre>
	// <h4>复选禁用</h4>
	// <blockquote>
	// <p>组件可以通过 <code class="ks-code-inline">disable</code> 属性来禁用</p>
	// </blockquote>
	// <br>
	// <ks-switch class="mr20" :checked.sync="checkboxDisable">
	// </ks-switch><ks-checkbox :disable="checkboxDisable">备选项</ks-checkbox>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-switch</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mr20"</span> <span class="hljs-attr">:checked.sync</span>=<span class="hljs-string">"checkboxDisable"</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">ks-switch</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-checkbox</span> <span class="hljs-attr">:disable</span>=<span class="hljs-string">"checkboxDisable"</span>&gt;</span>备选项<span class="hljs-tag">&lt;/<span class="hljs-name">ks-checkbox</span>&gt;</span>
	// </code></pre>
	// <h4>获取 Checkbox 的选中值 （KsRadioGroup）</h4>
	// <blockquote>
	// <p>如何获取 Checkbox 的选中值</p>
	// </blockquote>
	// <br>
	// <ks-checkbox-group :v-model.sync="checkboxGroup1">
	//   <ks-checkbox name="zhangSan">张三</ks-checkbox>
	//   <ks-checkbox name="liSi">李四</ks-checkbox>
	//   <ks-checkbox name="wangWu">王五</ks-checkbox>
	// </ks-checkbox-group>
	// <br>
	// <p><label v-text="checkboxGroup1 | json 4"></label></p>
	// <br>
	// <blockquote>
	// <p>通过外部包裹一个 <code class="ks-code-inline">ks-checkbox-group</code> 绑定其 <code class="ks-code-inline">vModel</code> 属性就可以监听到复选框组内部选中内容的变化。<br>
	// 同样的我们队 <code class="ks-code-inline">vModel</code> 属性进行操作也会影响到内容 <code class="ks-code-inline">ks-checkbox</code> 的选中状态。</p>
	// </blockquote>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-checkbox-group</span> <span class="hljs-attr">:v-model.sync</span>=<span class="hljs-string">"checkboxGroup1"</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">ks-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"zhangSan"</span>&gt;</span>张三<span class="hljs-tag">&lt;/<span class="hljs-name">ks-checkbox</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">ks-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"liSi"</span>&gt;</span>李四<span class="hljs-tag">&lt;/<span class="hljs-name">ks-checkbox</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">ks-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"wangWu"</span>&gt;</span>王五<span class="hljs-tag">&lt;/<span class="hljs-name">ks-checkbox</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">ks-checkbox-group</span>&gt;</span>
	//
	// <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">v-text</span>=<span class="hljs-string">"checkboxGroup1 | json 4"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
	// </code></pre>
	// <ks-checkbox-group :v-model.sync="checkboxGroup2">
	//   <ks-checkbox name="zhangSan">张三</ks-checkbox>
	//   <ks-checkbox name="liSi">李四</ks-checkbox>
	//   <ks-checkbox name="wangWu">王五</ks-checkbox>
	// </ks-checkbox-group>
	// <br>
	// <p><button @click="checkboxGroup2.push('zhangSan')">checkboxGroup2.push('zhangSan')</button><br>
	// <button @click="checkboxGroup2.pop()">checkboxGroup2.pop()</button></p>
	// <br>
	// <p><label v-text="checkboxGroup2 | json 4"></label></p>
	// <br>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-checkbox-group</span> <span class="hljs-attr">:v-model.sync</span>=<span class="hljs-string">"checkboxGroup12"</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">ks-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"zhangSan"</span>&gt;</span>张三<span class="hljs-tag">&lt;/<span class="hljs-name">ks-checkbox</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">ks-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"liSi"</span>&gt;</span>李四<span class="hljs-tag">&lt;/<span class="hljs-name">ks-checkbox</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">ks-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"wangWu"</span>&gt;</span>王五<span class="hljs-tag">&lt;/<span class="hljs-name">ks-checkbox</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">ks-checkbox-group</span>&gt;</span>
	//
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"checkboxGroup2.push('zhangSan')"</span>&gt;</span>checkboxGroup2.push('zhangSan')<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"checkboxGroup2.pop()"</span>&gt;</span>checkboxGroup2.pop()<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span>
	//
	// <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">v-text</span>=<span class="hljs-string">"checkboxGroup2 | json 4"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
	// </code></pre>
	//
	// <h3>脚本</h3>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
	//   <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
	//     data () {
	//       <span class="hljs-keyword">return</span> {
	//         <span class="hljs-attr">checkboxGroup1</span>: [],
	//         <span class="hljs-attr">checkboxGroup2</span>: [],
	//         <span class="hljs-attr">checkboxDisable</span>: <span class="hljs-literal">false</span>
	//       }
	//     }
	//   }
	// </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	// </code></pre>
	// <h3>API</h3>
	// <br>
	// <h4>KsCheckbox</h4>
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
	// <td>用来标记当前 <code class="ks-code-inline">KsCheckbox</code> 的名称作用和原生 <code class="ks-code-inline">KsCheckbox</code> 一样</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td>''</td>
	// </tr>
	// <tr>
	// <td>color</td>
	// <td>用来描述 <code class="ks-code-inline">KsCheckbox</code> 的颜色, 一个十六进制的数值</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td>#00A5E0</td>
	// </tr>
	// <tr>
	// <td>checked</td>
	// <td>用来描述当前 <code class="ks-code-inline">KsCheckbox</code> 是否选中</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">true</code></td>
	// <td>否</td>
	// <td><code class="ks-code-inline">true</code>, <code class="ks-code-inline">false</code></td>
	// <td><code class="ks-code-inline">false</code></td>
	// </tr>
	// <tr>
	// <td>disable</td>
	// <td>用来描述当前 <code class="ks-code-inline">KsCheckbox</code> 是否是禁用状态</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td><code class="ks-code-inline">true</code>, <code class="ks-code-inline">false</code></td>
	// <td>无</td>
	// <td><code class="ks-code-inline">false</code></td>
	// </tr>
	// <tr>
	// <td>@change</td>
	// <td><code class="ks-code-inline">KsCheckbox</code> change 事件</td>
	// <td>event</td>
	// <td>-</td>
	// <td>-</td>
	// <td>否</td>
	// <td>-</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>@label-click</td>
	// <td><code class="ks-code-inline">KsCheckbox</code> 点击文字部分所发出的事件</td>
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
	      checkboxGroup1: [],
	      checkboxGroup2: [],
	      checkboxDisable: false
	    };
	  }
	};
	// </script>

/***/ },

/***/ 117:
/***/ function(module, exports) {

	module.exports = "<section><h2>Checkbox 复选框</h2>\n<blockquote>\n<p>在一组备选项中进行多选。</p>\n</blockquote>\n<hr>\n<h3>基础使用</h3>\n<h4>复选框的使用（KsCheckbox）</h4>\n<blockquote>\n<p>单选在使用时与原生 <code class=\"ks-code-inline\">Radio</code> 一样必须设置 <code class=\"ks-code-inline\">name</code> 属性, 只有相同名称的 <code class=\"ks-code-inline\">Radio</code> 才能形成单选</p>\n</blockquote>\n<br>\n<p><ks-checkbox>备选项1</ks-checkbox><br>\n<ks-checkbox>备选项2</ks-checkbox><br>\n<ks-checkbox>备选项3</ks-checkbox></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-checkbox</span>&gt;</span>备选项1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-checkbox</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-checkbox</span>&gt;</span>备选项2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-checkbox</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-checkbox</span>&gt;</span>备选项3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-checkbox</span>&gt;</span>\n</code></pre>\n<h4>复选颜色</h4>\n<blockquote>\n<p>组件可以通过 <code class=\"ks-code-inline\">color</code> 属性来自定义颜色</p>\n</blockquote>\n<br>\n<p><span class=\"mr20\" style=\"color: #FFDD33\">#FFDD33</span> <ks-checkbox color=\"#FFDD33\">备选项1</ks-checkbox><br>\n<span class=\"mr20\" style=\"color: #CC00FF\">#CC00FF</span> <ks-checkbox color=\"#CC00FF\">备选项2</ks-checkbox><br>\n<span class=\"mr20\" style=\"color: #FFBBDD\">#FFBBDD</span> <ks-checkbox color=\"#FFBBDD\">备选项3</ks-checkbox></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"mr20\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"color: #FFDD33\"</span>&gt;</span>#FFDD33<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span> <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-checkbox</span> <span class=\"hljs-attr\">color</span>=<span class=\"hljs-string\">\"#FFDD33\"</span>&gt;</span>备选项1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-checkbox</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"mr20\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"color: #CC00FF\"</span>&gt;</span>#CC00FF<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span> <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-checkbox</span> <span class=\"hljs-attr\">color</span>=<span class=\"hljs-string\">\"#CC00FF\"</span>&gt;</span>备选项2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-checkbox</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"mr20\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"color: #FFBBDD\"</span>&gt;</span>#FFBBDD<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span> <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-checkbox</span> <span class=\"hljs-attr\">color</span>=<span class=\"hljs-string\">\"#FFBBDD\"</span>&gt;</span>备选项3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-checkbox</span>&gt;</span>\n</code></pre>\n<h4>复选禁用</h4>\n<blockquote>\n<p>组件可以通过 <code class=\"ks-code-inline\">disable</code> 属性来禁用</p>\n</blockquote>\n<br>\n<ks-switch class=\"mr20\" :checked.sync=\"checkboxDisable\">\n</ks-switch><ks-checkbox :disable=\"checkboxDisable\">备选项</ks-checkbox>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-switch</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"mr20\"</span> <span class=\"hljs-attr\">:checked.sync</span>=<span class=\"hljs-string\">\"checkboxDisable\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-switch</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-checkbox</span> <span class=\"hljs-attr\">:disable</span>=<span class=\"hljs-string\">\"checkboxDisable\"</span>&gt;</span>备选项<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-checkbox</span>&gt;</span>\n</code></pre>\n<h4>获取 Checkbox 的选中值 （KsRadioGroup）</h4>\n<blockquote>\n<p>如何获取 Checkbox 的选中值</p>\n</blockquote>\n<br>\n<ks-checkbox-group :v-model.sync=\"checkboxGroup1\">\n  <ks-checkbox name=\"zhangSan\">张三</ks-checkbox>\n  <ks-checkbox name=\"liSi\">李四</ks-checkbox>\n  <ks-checkbox name=\"wangWu\">王五</ks-checkbox>\n</ks-checkbox-group>\n<br>\n<p><label v-text=\"checkboxGroup1 | json 4\"></label></p>\n<br>\n<blockquote>\n<p>通过外部包裹一个 <code class=\"ks-code-inline\">ks-checkbox-group</code> 绑定其 <code class=\"ks-code-inline\">vModel</code> 属性就可以监听到复选框组内部选中内容的变化。<br>\n同样的我们队 <code class=\"ks-code-inline\">vModel</code> 属性进行操作也会影响到内容 <code class=\"ks-code-inline\">ks-checkbox</code> 的选中状态。</p>\n</blockquote>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-checkbox-group</span> <span class=\"hljs-attr\">:v-model.sync</span>=<span class=\"hljs-string\">\"checkboxGroup1\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-checkbox</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"zhangSan\"</span>&gt;</span>张三<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-checkbox</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-checkbox</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"liSi\"</span>&gt;</span>李四<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-checkbox</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-checkbox</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"wangWu\"</span>&gt;</span>王五<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-checkbox</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-checkbox-group</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">v-text</span>=<span class=\"hljs-string\">\"checkboxGroup1 | json 4\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n</code></pre>\n<ks-checkbox-group :v-model.sync=\"checkboxGroup2\">\n  <ks-checkbox name=\"zhangSan\">张三</ks-checkbox>\n  <ks-checkbox name=\"liSi\">李四</ks-checkbox>\n  <ks-checkbox name=\"wangWu\">王五</ks-checkbox>\n</ks-checkbox-group>\n<br>\n<p><button @click=\"checkboxGroup2.push('zhangSan')\">checkboxGroup2.push('zhangSan')</button><br>\n<button @click=\"checkboxGroup2.pop()\">checkboxGroup2.pop()</button></p>\n<br>\n<p><label v-text=\"checkboxGroup2 | json 4\"></label></p>\n<br>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-checkbox-group</span> <span class=\"hljs-attr\">:v-model.sync</span>=<span class=\"hljs-string\">\"checkboxGroup12\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-checkbox</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"zhangSan\"</span>&gt;</span>张三<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-checkbox</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-checkbox</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"liSi\"</span>&gt;</span>李四<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-checkbox</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-checkbox</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"wangWu\"</span>&gt;</span>王五<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-checkbox</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-checkbox-group</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-button</span> <span class=\"hljs-attr\">@click</span>=<span class=\"hljs-string\">\"checkboxGroup2.push('zhangSan')\"</span>&gt;</span>checkboxGroup2.push('zhangSan')<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-button</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-button</span> <span class=\"hljs-attr\">@click</span>=<span class=\"hljs-string\">\"checkboxGroup2.pop()\"</span>&gt;</span>checkboxGroup2.pop()<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-button</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">v-text</span>=<span class=\"hljs-string\">\"checkboxGroup2 | json 4\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n</code></pre>\n\n<h3>脚本</h3>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span>{\n    data () {\n      <span class=\"hljs-keyword\">return</span> {\n        <span class=\"hljs-attr\">checkboxGroup1</span>: [],\n        <span class=\"hljs-attr\">checkboxGroup2</span>: [],\n        <span class=\"hljs-attr\">checkboxDisable</span>: <span class=\"hljs-literal\">false</span>\n      }\n    }\n  }\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre>\n<h3>API</h3>\n<br>\n<h4>KsCheckbox</h4>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>双向（twoWay）</th>\n<th>是否必须</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>name</td>\n<td>用来标记当前 <code class=\"ks-code-inline\">KsCheckbox</code> 的名称作用和原生 <code class=\"ks-code-inline\">KsCheckbox</code> 一样</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td>''</td>\n</tr>\n<tr>\n<td>color</td>\n<td>用来描述 <code class=\"ks-code-inline\">KsCheckbox</code> 的颜色, 一个十六进制的数值</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td>#00A5E0</td>\n</tr>\n<tr>\n<td>checked</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">KsCheckbox</code> 是否选中</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">true</code></td>\n<td>否</td>\n<td><code class=\"ks-code-inline\">true</code>, <code class=\"ks-code-inline\">false</code></td>\n<td><code class=\"ks-code-inline\">false</code></td>\n</tr>\n<tr>\n<td>disable</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">KsCheckbox</code> 是否是禁用状态</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td><code class=\"ks-code-inline\">true</code>, <code class=\"ks-code-inline\">false</code></td>\n<td>无</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n</tr>\n<tr>\n<td>@change</td>\n<td><code class=\"ks-code-inline\">KsCheckbox</code> change 事件</td>\n<td>event</td>\n<td>-</td>\n<td>-</td>\n<td>否</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>@label-click</td>\n<td><code class=\"ks-code-inline\">KsCheckbox</code> 点击文字部分所发出的事件</td>\n<td>event</td>\n<td>-</td>\n<td>-</td>\n<td>否</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table></div><br>\n<h4>KsRadioGroup</h4>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>双向（twoWay）</th>\n<th>是否必须</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>vModel</td>\n<td>存储了当前 <code class=\"ks-code-inline\">KsRadioGroup</code> 组中选中的值</td>\n<td>props</td>\n<td>Any</td>\n<td><code class=\"ks-code-inline\">true</code></td>\n<td>否</td>\n<td>无</td>\n<td>''</td>\n</tr>\n<tr>\n<td>@change</td>\n<td><code class=\"ks-code-inline\">KsRadioGroup</code> change 事件</td>\n<td>event</td>\n<td>-</td>\n<td>-</td>\n<td>否</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table></div></section>";

/***/ }

});