webpackJsonp([18],{

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(213);

/***/ },

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(214)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/v0.1.0-7.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(215)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/v0.1.0-7.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 214:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template><section><h2>Radio 单选框</h2>
	// <blockquote>
	// <p>Checkbox 复选框组件<br>
	// 作者: pkeros(张杰)<br>
	// 最后修改时间: 2017-04-20</p>
	// </blockquote>
	// <hr>
	// <h3>基础使用</h3>
	// <h4>单选使用</h4>
	// <br>
	// <blockquote>
	// <p>组件使用方式和原生 <code class="ks-code-inline">radio</code> 方式差不多，在使用时 <code class="ks-code-inline">name</code> <code class="ks-code-inline">model</code> <code class="ks-code-inline">value</code> <strong>必填属性</strong>。</p>
	// </blockquote>
	// <br>
	// <p><ks-radio name="base-use" :model.sync="baseUse" value="bxx1">备选项1</ks-radio><br>
	// <ks-radio name="base-use" :model.sync="baseUse" value="bxx2">备选项2</ks-radio><br>
	// <ks-radio name="base-use" :model.sync="baseUse" value="bxx3">备选项3</ks-radio></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-use"</span> <span class="hljs-attr">:model.sync</span>=<span class="hljs-string">"baseUse"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"bxx1"</span>&gt;</span>备选项1<span class="hljs-tag">&lt;/<span class="hljs-name">ks-radio</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-use"</span> <span class="hljs-attr">:model.sync</span>=<span class="hljs-string">"baseUse"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"bxx2"</span>&gt;</span>备选项2<span class="hljs-tag">&lt;/<span class="hljs-name">ks-radio</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-use"</span> <span class="hljs-attr">:model.sync</span>=<span class="hljs-string">"baseUse"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"bxx3"</span>&gt;</span>备选项3<span class="hljs-tag">&lt;/<span class="hljs-name">ks-radio</span>&gt;</span>
	// </code></pre>
	// <h4>Color 属性 （单选按钮颜色）</h4>
	// <br>
	// <blockquote>
	// <p>组件可以通过 <code class="ks-code-inline">color</code> 属性来自定义单选按钮的颜色</p>
	// </blockquote>
	// <br>
	// <p><span class="mr20" style="color: #FFDD33">#FFDD33</span> <ks-radio color="#FFDD33" :model.sync="propsColor" value="bxx1" name="base-color">备选项1</ks-radio><br>
	// <span class="mr20" style="color: #CC00FF">#CC00FF</span> <ks-radio color="#CC00FF" :model.sync="propsColor" value="bxx2" name="base-color">备选项2</ks-radio><br>
	// <span class="mr20" style="color: #FFBBDD">#FFBBDD</span> <ks-radio color="#FFBBDD" :model.sync="propsColor" value="bxx3" name="base-color">备选项3</ks-radio></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-radio</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"#FFDD33"</span> <span class="hljs-attr">:model.sync</span>=<span class="hljs-string">"propsColor"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"bxx1"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-color"</span>&gt;</span>备选项1<span class="hljs-tag">&lt;/<span class="hljs-name">ks-radio</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-radio</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"#CC00FF"</span> <span class="hljs-attr">:model.sync</span>=<span class="hljs-string">"propsColor"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"bxx2"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-color"</span>&gt;</span>备选项2<span class="hljs-tag">&lt;/<span class="hljs-name">ks-radio</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-radio</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"#FFBBDD"</span> <span class="hljs-attr">:model.sync</span>=<span class="hljs-string">"propsColor"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"bxx3"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-color"</span>&gt;</span>备选项3<span class="hljs-tag">&lt;/<span class="hljs-name">ks-radio</span>&gt;</span>
	// </code></pre>
	// <h4>Disabled 属性 （禁用单选）</h4>
	// <br>
	// <blockquote>
	// <p>组件可以通过 <code class="ks-code-inline">disable</code> 属性来禁用</p>
	// </blockquote>
	// <br>
	// <ks-switch class="mr20" :checked.sync="radioDisabled">
	// </ks-switch><ks-radio :disabled="radioDisabled" :model.sync="radioDisable" value="ghostBtn">幽灵按钮</ks-radio>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-switch</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"mr20"</span> <span class="hljs-attr">:checked.sync</span>=<span class="hljs-string">"radioDisabled"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-switch</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-radio</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">"radioDisabled"</span> <span class="hljs-attr">:model.sync</span>=<span class="hljs-string">"radioDisable"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"ghostBtn"</span>&gt;</span>幽灵按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ks-radio</span>&gt;</span>
	// </code></pre>
	// <h4>DefChecked 属性 （默认选中）</h4>
	// <br>
	// <blockquote>
	// <p>组件可以通过 <code class="ks-code-inline">defChecked</code> 属性来让某个 <code class="ks-code-inline">radio</code> 默认选中</p>
	// </blockquote>
	// <br>
	// <p><ks-radio :model.sync="defC" :def-checked="true" value="defChecked">默认选中</ks-radio></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-radio</span> <span class="hljs-attr">:model.sync</span>=<span class="hljs-string">"defC"</span> <span class="hljs-attr">:def-checked</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"defChecked"</span>&gt;</span>默认选中<span class="hljs-tag">&lt;/<span class="hljs-name">ks-radio</span>&gt;</span>
	// </code></pre>
	// <h4>按钮形态的单选 （KsBtnRadio）</h4>
	// <br>
	// <blockquote>
	// <p>使用 <code class="ks-code-inline">color</code> 属性可以设置 <code class="ks-code-inline">radio</code> 颜色</p>
	// </blockquote>
	// <br>
	// <p><ks-btn-radio name="base-btn" color="#FFDD33" :model.sync="btnUse1" value="ZhangSan">张三</ks-btn-radio> <ks-btn-radio name="base-btn" color="#CC00FF" :model.sync="btnUse1" value="LiSi">李四</ks-btn-radio> <ks-btn-radio name="base-btn" color="#FFBBDD" :model.sync="btnUse1" value="WangWu">王五</ks-btn-radio></p>
	// <br>
	// <pre class="ks-hljs"><code><span class="hljs-comment">&lt;!-- 通常使用 --&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-btn-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-btn"</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"#FFDD33"</span> <span class="hljs-attr">:model.sync</span>=<span class="hljs-string">"btnUse1"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"ZhangSan"</span>&gt;</span>张三<span class="hljs-tag">&lt;/<span class="hljs-name">ks-btn-radio</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-btn-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-btn"</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"#CC00FF"</span> <span class="hljs-attr">:model.sync</span>=<span class="hljs-string">"btnUse1"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"LiSi"</span>&gt;</span>李四<span class="hljs-tag">&lt;/<span class="hljs-name">ks-btn-radio</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-btn-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-btn"</span> <span class="hljs-attr">color</span>=<span class="hljs-string">"#FFBBDD"</span> <span class="hljs-attr">:model.sync</span>=<span class="hljs-string">"btnUse1"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"WangWu"</span>&gt;</span>王五<span class="hljs-tag">&lt;/<span class="hljs-name">ks-btn-radio</span>&gt;</span>
	// </code></pre>
	// <br>
	// <blockquote>
	// <p>使用 <code class="ks-code-inline">defChecked</code> 可以默认选中张三<br>
	// dd<br>
	// <br></p>
	// </blockquote>
	// <p><ks-btn-radio name="base-btn" :model.sync="btnUse2" value="ZhangSan">张三</ks-btn-radio><br>
	// <ks-btn-radio name="base-btn" :def-checked="true" :model.sync="btnUse2" value="LiSi">李四</ks-btn-radio><br>
	// <ks-btn-radio name="base-btn" :model.sync="btnUse2" value="WangWu">王五</ks-btn-radio></p>
	// <br>
	// <pre class="ks-hljs"><code><span class="hljs-comment">&lt;!-- 默认选中张三 --&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-btn-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-btn"</span> <span class="hljs-attr">:model.sync</span>=<span class="hljs-string">"btnUse2"</span> <span class="hljs-attr">:def-checked</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"ZhangSan"</span>&gt;</span>张三<span class="hljs-tag">&lt;/<span class="hljs-name">ks-btn-radio</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-btn-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-btn"</span> <span class="hljs-attr">:model.sync</span>=<span class="hljs-string">"btnUse2"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"LiSi"</span>&gt;</span>李四<span class="hljs-tag">&lt;/<span class="hljs-name">ks-btn-radio</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-btn-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-btn"</span> <span class="hljs-attr">:model.sync</span>=<span class="hljs-string">"btnUse2"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"WangWu"</span>&gt;</span>王五<span class="hljs-tag">&lt;/<span class="hljs-name">ks-btn-radio</span>&gt;</span>
	// </code></pre>
	// <br>
	// <blockquote>
	// <p>使用 <code class="ks-code-inline">disabled</code> 属性可以警用某个单选</p>
	// </blockquote>
	// <br>
	// <p><ks-btn-radio name="base-btn" :model.sync="btnUse3" :disabled="true" value="ZhangSan">张三</ks-btn-radio> <ks-btn-radio name="base-btn" :model.sync="btnUse3" value="LiSi">李四</ks-btn-radio> <ks-btn-radio name="base-btn" :model.sync="btnUse3" value="WangWu">王五</ks-btn-radio></p>
	// <br>
	// <pre class="ks-hljs"><code><span class="hljs-comment">&lt;!-- 禁用 --&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-btn-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-btn"</span> <span class="hljs-attr">:model.sync</span>=<span class="hljs-string">"btnUse3"</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"ZhangSan"</span>&gt;</span>张三<span class="hljs-tag">&lt;/<span class="hljs-name">ks-btn-radio</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-btn-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-btn"</span> <span class="hljs-attr">:model.sync</span>=<span class="hljs-string">"btnUse3"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"LiSi"</span>&gt;</span>李四<span class="hljs-tag">&lt;/<span class="hljs-name">ks-btn-radio</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-btn-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-btn"</span> <span class="hljs-attr">:model.sync</span>=<span class="hljs-string">"btnUse3"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"WangWu"</span>&gt;</span>王五<span class="hljs-tag">&lt;/<span class="hljs-name">ks-btn-radio</span>&gt;</span>
	// </code></pre>
	// <h4>单选组 （KsRadioGroup）</h4>
	// <br>
	// <blockquote>
	// <p>在 <code class="ks-code-inline">KsBtn-Radio</code> 组件外部包裹一个 <code class="ks-code-inline">KsRadioGroup</code> 就可以形成一个按钮组</p>
	// </blockquote>
	// <br>
	// <ks-radio-group>
	//   <ks-btn-radio name="base-btn" :model.sync="group" value="ZhangSan">张三</ks-btn-radio>
	//   <ks-btn-radio name="base-btn" :model.sync="group" value="LiSi">李四</ks-btn-radio>
	//   <ks-btn-radio name="base-btn" :model.sync="group" value="WangWu">王五</ks-btn-radio>
	// </ks-radio-group>
	// <br>
	// <pre class="ks-hljs"><code><span class="hljs-comment">&lt;!-- 单选组 --&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-radio-group</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">ks-btn-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-btn"</span> <span class="hljs-attr">:model.sync</span>=<span class="hljs-string">"group"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"ZhangSan"</span>&gt;</span>张三<span class="hljs-tag">&lt;/<span class="hljs-name">ks-btn-radio</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">ks-btn-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-btn"</span> <span class="hljs-attr">:model.sync</span>=<span class="hljs-string">"group"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"LiSi"</span>&gt;</span>李四<span class="hljs-tag">&lt;/<span class="hljs-name">ks-btn-radio</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">ks-btn-radio</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"base-btn"</span> <span class="hljs-attr">:model.sync</span>=<span class="hljs-string">"group"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"WangWu"</span>&gt;</span>王五<span class="hljs-tag">&lt;/<span class="hljs-name">ks-btn-radio</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">ks-radio-group</span>&gt;</span>
	// </code></pre>
	// <h4>高级使用</h4>
	// <br>
	// <blockquote>
	// <p>一样的 <code class="ks-code-inline">KsRadio</code> 也有一个高度抽象的行为的组件 <code class="ks-code-inline">KsRadioAbstract</code>。<br>
	// <code class="ks-code-inline">KsCircleRadio</code> 也就我们使用时候的 <code class="ks-code-inline">KsRadio</code> 是基于 <code class="ks-code-inline">KsRadioAbstract</code> 来实现的。<br>
	// <code class="ks-code-inline">KsBtnRadio</code> 也是基于 <code class="ks-code-inline">KsRadioAbstract</code> 加上 <code class="ks-code-inline">KsButtonAbstract</code> 组件来实现的。<br>
	// 🔘 <strong>欢迎也鼓励你们通过继承封装行为的组件来实现千变万化的 <code class="ks-code-inline">类 Radio</code> 组件。</strong></p>
	// </blockquote>
	// <br>
	// <h3>API</h3>
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
	// <td>disabled</td>
	// <td>用来描述当前 <code class="ks-code-inline">radio</code> 是否是禁用状态</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td><code class="ks-code-inline">true</code>, <code class="ks-code-inline">false</code></td>
	// <td>无</td>
	// <td><code class="ks-code-inline">false</code></td>
	// </tr>
	// <tr>
	// <td>model</td>
	// <td>存储了当前 <code class="ks-code-inline">radio</code> 组中选中的值</td>
	// <td>props</td>
	// <td>Any</td>
	// <td><code class="ks-code-inline">true</code></td>
	// <td>否</td>
	// <td>无</td>
	// <td>''</td>
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
	// <td>-</td>
	// <td>-</td>
	// <td>-</td>
	// <td>-</td>
	// <td>-</td>
	// <td>-</td>
	// <td>-</td>
	// <td>-</td>
	// </tr>
	// </tbody>
	// </table></div></section></template>
	//
	// <script>
	exports.default = {
	  kscomponents: ['KsRadio_v0', 'KsSwitch_v0'],
	  data: function data() {
	    return {
	      baseUse: '',
	      propsColor: '',

	      radioDisabled: false,
	      radioDisable: '',

	      defC: '',
	      btnUse1: '',
	      btnUse2: '',
	      btnUse3: '',

	      group: ''
	    };
	  },
	  created: function created() {
	    console.log(this);
	  }
	};
	// </script>

/***/ },

/***/ 215:
/***/ function(module, exports) {

	module.exports = "<section><h2>Radio 单选框</h2>\n<blockquote>\n<p>Checkbox 复选框组件<br>\n作者: pkeros(张杰)<br>\n最后修改时间: 2017-04-20</p>\n</blockquote>\n<hr>\n<h3>基础使用</h3>\n<h4>单选使用</h4>\n<br>\n<blockquote>\n<p>组件使用方式和原生 <code class=\"ks-code-inline\">radio</code> 方式差不多，在使用时 <code class=\"ks-code-inline\">name</code> <code class=\"ks-code-inline\">model</code> <code class=\"ks-code-inline\">value</code> <strong>必填属性</strong>。</p>\n</blockquote>\n<br>\n<p><ks-radio name=\"base-use\" :model.sync=\"baseUse\" value=\"bxx1\">备选项1</ks-radio><br>\n<ks-radio name=\"base-use\" :model.sync=\"baseUse\" value=\"bxx2\">备选项2</ks-radio><br>\n<ks-radio name=\"base-use\" :model.sync=\"baseUse\" value=\"bxx3\">备选项3</ks-radio></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-use\"</span> <span class=\"hljs-attr\">:model.sync</span>=<span class=\"hljs-string\">\"baseUse\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"bxx1\"</span>&gt;</span>备选项1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-radio</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-use\"</span> <span class=\"hljs-attr\">:model.sync</span>=<span class=\"hljs-string\">\"baseUse\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"bxx2\"</span>&gt;</span>备选项2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-radio</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-use\"</span> <span class=\"hljs-attr\">:model.sync</span>=<span class=\"hljs-string\">\"baseUse\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"bxx3\"</span>&gt;</span>备选项3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-radio</span>&gt;</span>\n</code></pre>\n<h4>Color 属性 （单选按钮颜色）</h4>\n<br>\n<blockquote>\n<p>组件可以通过 <code class=\"ks-code-inline\">color</code> 属性来自定义单选按钮的颜色</p>\n</blockquote>\n<br>\n<p><span class=\"mr20\" style=\"color: #FFDD33\">#FFDD33</span> <ks-radio color=\"#FFDD33\" :model.sync=\"propsColor\" value=\"bxx1\" name=\"base-color\">备选项1</ks-radio><br>\n<span class=\"mr20\" style=\"color: #CC00FF\">#CC00FF</span> <ks-radio color=\"#CC00FF\" :model.sync=\"propsColor\" value=\"bxx2\" name=\"base-color\">备选项2</ks-radio><br>\n<span class=\"mr20\" style=\"color: #FFBBDD\">#FFBBDD</span> <ks-radio color=\"#FFBBDD\" :model.sync=\"propsColor\" value=\"bxx3\" name=\"base-color\">备选项3</ks-radio></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-radio</span> <span class=\"hljs-attr\">color</span>=<span class=\"hljs-string\">\"#FFDD33\"</span> <span class=\"hljs-attr\">:model.sync</span>=<span class=\"hljs-string\">\"propsColor\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"bxx1\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-color\"</span>&gt;</span>备选项1<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-radio</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-radio</span> <span class=\"hljs-attr\">color</span>=<span class=\"hljs-string\">\"#CC00FF\"</span> <span class=\"hljs-attr\">:model.sync</span>=<span class=\"hljs-string\">\"propsColor\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"bxx2\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-color\"</span>&gt;</span>备选项2<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-radio</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-radio</span> <span class=\"hljs-attr\">color</span>=<span class=\"hljs-string\">\"#FFBBDD\"</span> <span class=\"hljs-attr\">:model.sync</span>=<span class=\"hljs-string\">\"propsColor\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"bxx3\"</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-color\"</span>&gt;</span>备选项3<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-radio</span>&gt;</span>\n</code></pre>\n<h4>Disabled 属性 （禁用单选）</h4>\n<br>\n<blockquote>\n<p>组件可以通过 <code class=\"ks-code-inline\">disable</code> 属性来禁用</p>\n</blockquote>\n<br>\n<ks-switch class=\"mr20\" :checked.sync=\"radioDisabled\">\n</ks-switch><ks-radio :disabled=\"radioDisabled\" :model.sync=\"radioDisable\" value=\"ghostBtn\">幽灵按钮</ks-radio>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-switch</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">\"mr20\"</span> <span class=\"hljs-attr\">:checked.sync</span>=<span class=\"hljs-string\">\"radioDisabled\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-switch</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-radio</span> <span class=\"hljs-attr\">:disabled</span>=<span class=\"hljs-string\">\"radioDisabled\"</span> <span class=\"hljs-attr\">:model.sync</span>=<span class=\"hljs-string\">\"radioDisable\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"ghostBtn\"</span>&gt;</span>幽灵按钮<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-radio</span>&gt;</span>\n</code></pre>\n<h4>DefChecked 属性 （默认选中）</h4>\n<br>\n<blockquote>\n<p>组件可以通过 <code class=\"ks-code-inline\">defChecked</code> 属性来让某个 <code class=\"ks-code-inline\">radio</code> 默认选中</p>\n</blockquote>\n<br>\n<p><ks-radio :model.sync=\"defC\" :def-checked=\"true\" value=\"defChecked\">默认选中</ks-radio></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-radio</span> <span class=\"hljs-attr\">:model.sync</span>=<span class=\"hljs-string\">\"defC\"</span> <span class=\"hljs-attr\">:def-checked</span>=<span class=\"hljs-string\">\"true\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"defChecked\"</span>&gt;</span>默认选中<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-radio</span>&gt;</span>\n</code></pre>\n<h4>按钮形态的单选 （KsBtnRadio）</h4>\n<br>\n<blockquote>\n<p>使用 <code class=\"ks-code-inline\">color</code> 属性可以设置 <code class=\"ks-code-inline\">radio</code> 颜色</p>\n</blockquote>\n<br>\n<p><ks-btn-radio name=\"base-btn\" color=\"#FFDD33\" :model.sync=\"btnUse1\" value=\"ZhangSan\">张三</ks-btn-radio> <ks-btn-radio name=\"base-btn\" color=\"#CC00FF\" :model.sync=\"btnUse1\" value=\"LiSi\">李四</ks-btn-radio> <ks-btn-radio name=\"base-btn\" color=\"#FFBBDD\" :model.sync=\"btnUse1\" value=\"WangWu\">王五</ks-btn-radio></p>\n<br>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-comment\">&lt;!-- 通常使用 --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-btn-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-btn\"</span> <span class=\"hljs-attr\">color</span>=<span class=\"hljs-string\">\"#FFDD33\"</span> <span class=\"hljs-attr\">:model.sync</span>=<span class=\"hljs-string\">\"btnUse1\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"ZhangSan\"</span>&gt;</span>张三<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-btn-radio</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-btn-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-btn\"</span> <span class=\"hljs-attr\">color</span>=<span class=\"hljs-string\">\"#CC00FF\"</span> <span class=\"hljs-attr\">:model.sync</span>=<span class=\"hljs-string\">\"btnUse1\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"LiSi\"</span>&gt;</span>李四<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-btn-radio</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-btn-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-btn\"</span> <span class=\"hljs-attr\">color</span>=<span class=\"hljs-string\">\"#FFBBDD\"</span> <span class=\"hljs-attr\">:model.sync</span>=<span class=\"hljs-string\">\"btnUse1\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"WangWu\"</span>&gt;</span>王五<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-btn-radio</span>&gt;</span>\n</code></pre>\n<br>\n<blockquote>\n<p>使用 <code class=\"ks-code-inline\">defChecked</code> 可以默认选中张三<br>\ndd<br>\n<br></p>\n</blockquote>\n<p><ks-btn-radio name=\"base-btn\" :model.sync=\"btnUse2\" value=\"ZhangSan\">张三</ks-btn-radio><br>\n<ks-btn-radio name=\"base-btn\" :def-checked=\"true\" :model.sync=\"btnUse2\" value=\"LiSi\">李四</ks-btn-radio><br>\n<ks-btn-radio name=\"base-btn\" :model.sync=\"btnUse2\" value=\"WangWu\">王五</ks-btn-radio></p>\n<br>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-comment\">&lt;!-- 默认选中张三 --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-btn-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-btn\"</span> <span class=\"hljs-attr\">:model.sync</span>=<span class=\"hljs-string\">\"btnUse2\"</span> <span class=\"hljs-attr\">:def-checked</span>=<span class=\"hljs-string\">\"true\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"ZhangSan\"</span>&gt;</span>张三<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-btn-radio</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-btn-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-btn\"</span> <span class=\"hljs-attr\">:model.sync</span>=<span class=\"hljs-string\">\"btnUse2\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"LiSi\"</span>&gt;</span>李四<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-btn-radio</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-btn-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-btn\"</span> <span class=\"hljs-attr\">:model.sync</span>=<span class=\"hljs-string\">\"btnUse2\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"WangWu\"</span>&gt;</span>王五<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-btn-radio</span>&gt;</span>\n</code></pre>\n<br>\n<blockquote>\n<p>使用 <code class=\"ks-code-inline\">disabled</code> 属性可以警用某个单选</p>\n</blockquote>\n<br>\n<p><ks-btn-radio name=\"base-btn\" :model.sync=\"btnUse3\" :disabled=\"true\" value=\"ZhangSan\">张三</ks-btn-radio> <ks-btn-radio name=\"base-btn\" :model.sync=\"btnUse3\" value=\"LiSi\">李四</ks-btn-radio> <ks-btn-radio name=\"base-btn\" :model.sync=\"btnUse3\" value=\"WangWu\">王五</ks-btn-radio></p>\n<br>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-comment\">&lt;!-- 禁用 --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-btn-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-btn\"</span> <span class=\"hljs-attr\">:model.sync</span>=<span class=\"hljs-string\">\"btnUse3\"</span> <span class=\"hljs-attr\">:disabled</span>=<span class=\"hljs-string\">\"true\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"ZhangSan\"</span>&gt;</span>张三<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-btn-radio</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-btn-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-btn\"</span> <span class=\"hljs-attr\">:model.sync</span>=<span class=\"hljs-string\">\"btnUse3\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"LiSi\"</span>&gt;</span>李四<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-btn-radio</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-btn-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-btn\"</span> <span class=\"hljs-attr\">:model.sync</span>=<span class=\"hljs-string\">\"btnUse3\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"WangWu\"</span>&gt;</span>王五<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-btn-radio</span>&gt;</span>\n</code></pre>\n<h4>单选组 （KsRadioGroup）</h4>\n<br>\n<blockquote>\n<p>在 <code class=\"ks-code-inline\">KsBtn-Radio</code> 组件外部包裹一个 <code class=\"ks-code-inline\">KsRadioGroup</code> 就可以形成一个按钮组</p>\n</blockquote>\n<br>\n<ks-radio-group>\n  <ks-btn-radio name=\"base-btn\" :model.sync=\"group\" value=\"ZhangSan\">张三</ks-btn-radio>\n  <ks-btn-radio name=\"base-btn\" :model.sync=\"group\" value=\"LiSi\">李四</ks-btn-radio>\n  <ks-btn-radio name=\"base-btn\" :model.sync=\"group\" value=\"WangWu\">王五</ks-btn-radio>\n</ks-radio-group>\n<br>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-comment\">&lt;!-- 单选组 --&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-radio-group</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-btn-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-btn\"</span> <span class=\"hljs-attr\">:model.sync</span>=<span class=\"hljs-string\">\"group\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"ZhangSan\"</span>&gt;</span>张三<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-btn-radio</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-btn-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-btn\"</span> <span class=\"hljs-attr\">:model.sync</span>=<span class=\"hljs-string\">\"group\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"LiSi\"</span>&gt;</span>李四<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-btn-radio</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-btn-radio</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"base-btn\"</span> <span class=\"hljs-attr\">:model.sync</span>=<span class=\"hljs-string\">\"group\"</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"WangWu\"</span>&gt;</span>王五<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-btn-radio</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-radio-group</span>&gt;</span>\n</code></pre>\n<h4>高级使用</h4>\n<br>\n<blockquote>\n<p>一样的 <code class=\"ks-code-inline\">KsRadio</code> 也有一个高度抽象的行为的组件 <code class=\"ks-code-inline\">KsRadioAbstract</code>。<br>\n<code class=\"ks-code-inline\">KsCircleRadio</code> 也就我们使用时候的 <code class=\"ks-code-inline\">KsRadio</code> 是基于 <code class=\"ks-code-inline\">KsRadioAbstract</code> 来实现的。<br>\n<code class=\"ks-code-inline\">KsBtnRadio</code> 也是基于 <code class=\"ks-code-inline\">KsRadioAbstract</code> 加上 <code class=\"ks-code-inline\">KsButtonAbstract</code> 组件来实现的。<br>\n🔘 <strong>欢迎也鼓励你们通过继承封装行为的组件来实现千变万化的 <code class=\"ks-code-inline\">类 Radio</code> 组件。</strong></p>\n</blockquote>\n<br>\n<h3>API</h3>\n<h4>KsRadio 与 KsBtnRadio</h4>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>双向（twoWay）</th>\n<th>是否必须</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>name</td>\n<td>用来标记当前 <code class=\"ks-code-inline\">radio</code> 的名称作用和原生 <code class=\"ks-code-inline\">radio</code> 一样</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td>''</td>\n</tr>\n<tr>\n<td>color</td>\n<td>用来描述 <code class=\"ks-code-inline\">radio</code> 的颜色, 一个十六进制的数值</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td>#00A5E0</td>\n</tr>\n<tr>\n<td>value</td>\n<td>保留</td>\n<td>props</td>\n<td>Any</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td>无</td>\n<td>''</td>\n</tr>\n<tr>\n<td>defChecked</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">radio</code> 默认是否选中</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td><code class=\"ks-code-inline\">true</code>, <code class=\"ks-code-inline\">false</code></td>\n<td><code class=\"ks-code-inline\">false</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>用来描述当前 <code class=\"ks-code-inline\">radio</code> 是否是禁用状态</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td><code class=\"ks-code-inline\">true</code>, <code class=\"ks-code-inline\">false</code></td>\n<td>无</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n</tr>\n<tr>\n<td>model</td>\n<td>存储了当前 <code class=\"ks-code-inline\">radio</code> 组中选中的值</td>\n<td>props</td>\n<td>Any</td>\n<td><code class=\"ks-code-inline\">true</code></td>\n<td>否</td>\n<td>无</td>\n<td>''</td>\n</tr>\n</tbody>\n</table></div><br>\n<h4>KsRadioGroup</h4>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>双向（twoWay）</th>\n<th>是否必须</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table></div></section>";

/***/ }

});