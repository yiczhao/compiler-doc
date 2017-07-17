webpackJsonp([16],{

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(206);

/***/ },

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(761)
	__vue_script__ = __webpack_require__(207)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/v0.1.0-5.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(208)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/v0.1.0-5.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 207:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template><section><h1>Button 按钮</h1>
	// <blockquote>
	// <p>Button 按钮组件<br>
	// 作者: pkeros(张杰)<br>
	// 最后修改时间: 2017-04-17</p>
	// </blockquote>
	// <hr>
	// <h3>基础使用</h3>
	// <h4>Type 属性 （按钮类型）</h4>
	// <br>
	// <blockquote>
	// <p>通过 <code class="ks-code-inline">type</code> 属性我们可以设置不同类型的按钮，预置的按钮类型有 <code class="ks-code-inline">primary</code>, <code class="ks-code-inline">success</code>, <code class="ks-code-inline">info</code>, <code class="ks-code-inline">warn</code>, <code class="ks-code-inline">danger</code>, <code class="ks-code-inline">other</code>。</p>
	// </blockquote>
	// <br>
	// <select class="mr20" name="btnType" v-model="btnType">
	//   <option v-for="type in btnTypeMapper" :value="type" v-text="type"></option>
	// </select><ks-button :type="btnType">按钮类型</ks-button>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>按钮类型<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span>
	// </code></pre>
	// <h4>Size 属性 （按钮尺寸）</h4>
	// <br>
	// <blockquote>
	// <p>通过 <code class="ks-code-inline">size</code> 属性我们可以设置不同按钮尺寸，预置的值有 <code class="ks-code-inline">mini</code>, <code class="ks-code-inline">normal</code>, <code class="ks-code-inline">middle</code>, <code class="ks-code-inline">large</code>。</p>
	// </blockquote>
	// <br>
	// <select class="mr20" name="btnSize" v-model="btnSize">
	//   <option v-for="size in btnSizeMapper" :value="size" v-text="size"></option>
	// </select><ks-button :size="btnSize">按钮大小</ks-button>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"normal"</span>&gt;</span>按钮类型<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span>
	// </code></pre>
	// <h4>Mode 属性 （正常/幽灵 按钮）</h4>
	// <br>
	// <blockquote>
	// <p>通过 <code class="ks-code-inline">mode</code> 设置值为 <code class="ks-code-inline">ghost</code> 可以将按钮变成幽灵按钮模式。</p>
	// </blockquote>
	// <br>
	// <p><ks-button mode="ghost">幽灵按钮</ks-button></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">"ghost"</span>&gt;</span>幽灵按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span>
	// </code></pre>
	// <h4>Loading 属性 （按钮是否处于等待状态）</h4>
	// <blockquote>
	// <p>通过将 <code class="ks-code-inline">loading</code> 设置为 <code class="ks-code-inline">ture</code> 我们可以将按钮的状态设置为加载。</p>
	// </blockquote>
	// <br>
	// <p><ks-switch class="mr20" :checked.sync="btnSwitch"></ks-switch><ks-button :loading="btnSwitch">幽灵按钮</ks-button> <ks-button :loading="btnSwitch" mode="ghost">幽灵加载按钮</ks-button></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">"btnSwitch"</span>&gt;</span>加载按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">:loading</span>=<span class="hljs-string">"btnSwitch"</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">"ghost"</span>&gt;</span>幽灵加载按钮<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span>
	// </code></pre>
	// <h4>Disabled 属性 （按钮是否处于禁用状态）</h4>
	// <blockquote>
	// <p>通过将 <code class="ks-code-inline">disabled</code> 设置为 <code class="ks-code-inline">ture</code> 我们可以将按钮的状态设置为禁用。</p>
	// </blockquote>
	// <br>
	// <p><ks-switch class="mr20" :checked.sync="btnDisable"></ks-switch><ks-button :disabled="btnDisable">按钮禁用</ks-button> <ks-button :disabled="btnDisable" mode="ghost">幽灵按钮禁用</ks-button></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">"btnDisable"</span>&gt;</span>按钮禁用<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">"btnDisable"</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">"ghost"</span>&gt;</span>幽灵按钮禁用<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span>
	// </code></pre>
	// <h4>事件绑定</h4>
	// <blockquote>
	// <p>通过 <code class="ks-code-inline">@click</code>, <code class="ks-code-inline">v-on:click</code> 等 <code class="ks-code-inline">vue</code> 支持的事件绑定式就可以绑定处理相关事件。禁用之后不再产生 <code class="ks-code-inline">click</code> 事件。</p>
	// </blockquote>
	// <br>
	// <p><ks-switch class="mr20" :checked.sync="btnEventDisable"></ks-switch><ks-button :disabled="btnEventDisable" @click="clickTest">按钮禁用</ks-button></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">:disabled</span>=<span class="hljs-string">"btnEventDisable"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"clickTest"</span>&gt;</span>按钮禁用<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span>
	// </code></pre>
	// <h4>高级使用 使用抽象的按钮组件来实现一个自定义的按钮</h4>
	// <blockquote>
	// <p>上面的我们简述了一些 <code class="ks-code-inline">KsButton</code> 一些常用的属性。默认按钮的风格样式设计是根据设计原型里的标准。<br>
	// 可以满足大部分需求单不排除有一些定制话的需求，亦或我们需要拓展出一些组件。<br>
	// 下面介绍如何使用 <code class="ks-code-inline">ks-button-abstract</code> 组件自定义实现一个 <code class="ks-code-inline">button</code>, <code class="ks-code-inline">ks-button</code> 内部也是使用 <code class="ks-code-inline">ks-button-abstract</code> 实现的。</p>
	// </blockquote>
	// <br>
	// <h5>1. 自定义按钮主题颜色</h5>
	// <br>
	// <blockquote>
	// <p>我们可以使用 <code class="ks-code-inline">ks-button-abstract</code> 提供的 <code class="ks-code-inline">width</code>，<code class="ks-code-inline">height</code>， <code class="ks-code-inline">fontSize</code>， <code class="ks-code-inline">colorNormal</code>， <code class="ks-code-inline">colorHover</code>， <code class="ks-code-inline">colorActive</code> 接口<br>
	// 来自定义按钮的宽度，高度，字体大小，等外观。</p>
	// </blockquote>
	// <br>
	// <p><ks-button-abstract width="66px" height="66px" font-size="22px" color-normal="#AACD21" color-hover="#A3421A" color-active="#D23D21">TEST</ks-button-abstract></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-button-abstract</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"66px"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"66px"</span> <span class="hljs-attr">font-size</span>=<span class="hljs-string">"22px"</span> 
	//                     <span class="hljs-attr">color-normal</span>=<span class="hljs-string">"#AACD21"</span> <span class="hljs-attr">color-hover</span>=<span class="hljs-string">"#A3421A"</span>
	//                     <span class="hljs-attr">color-active</span>=<span class="hljs-string">"#D23D21"</span>&gt;</span>TEST<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button-abstract</span>&gt;</span>
	// </code></pre>
	// <br>
	// <blockquote>
	// <p>在上面的代码中我们就通过一些列的属性设置自定义了一个按钮，当然的这是 <code class="ks-code-inline">mode='normal'</code> 类型的按钮，如果我们需要一个幽灵按钮<br>
	// 只要把 <code class="ks-code-inline">mode</code> 属性设置为 <code class="ks-code-inline">ghost</code> 就可以了。按钮默认都是有个 <code class="ks-code-inline">padding: 3px 18px</code> 的值这是设计规范所规定。</p>
	// </blockquote>
	// <br>
	// <h5>2. 完全自定义样式</h5>
	// <br>
	// <blockquote>
	// <p>在有的情况下我们可能需要完全自定义样式，那么我们就只能通过重写样式这种方式来实现，比如我们要是一线一个圆形按钮<br>
	// 建议有这种需求的时候新增一个组件，继承 <code class="ks-code-inline">ks-button-abstract</code> 来实现，一并提交到公共样式库中。</p>
	// </blockquote>
	// <br>
	//
	// <div class="round-button">
	//   <ks-button-abstract width="66px" height="66px" font-size="14px" color-normal="#AACD21" color-hover="#A3421A" color-active="#D23D21">TEST</ks-button-abstract>
	// </div>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
	//   <span class="hljs-selector-class">.round-button</span> <span class="hljs-selector-class">.KsBtnAbstract</span> { <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">50%</span>; <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span> }
	// </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
	//
	// <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"round-button"</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">ks-button-abstract</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"66px"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"66px"</span> <span class="hljs-attr">font-size</span>=<span class="hljs-string">"14px"</span> 
	//                       <span class="hljs-attr">color-normal</span>=<span class="hljs-string">"#AACD21"</span> <span class="hljs-attr">color-hover</span>=<span class="hljs-string">"#A3421A"</span>
	//                       <span class="hljs-attr">color-active</span>=<span class="hljs-string">"#D23D21"</span>&gt;</span>TEST<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button-abstract</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
	// </code></pre>
	// <h3>API</h3>
	// <h4>KsButton</h4>
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
	// <td>mode</td>
	// <td>用来描述按钮的模式 正常/幽灵</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td><code class="ks-code-inline">normal</code>, <code class="ks-code-inline">ghost</code></td>
	// <td><code class="ks-code-inline">normal</code></td>
	// </tr>
	// <tr>
	// <td>form</td>
	// <td>原生属性 <code class="ks-code-inline">form</code></td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>-</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>autoFocus</td>
	// <td>原生属性 <code class="ks-code-inline">autofocus</code></td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>-</td>
	// <td><code class="ks-code-inline">false</code></td>
	// </tr>
	// <tr>
	// <td>name</td>
	// <td>原生属性 <code class="ks-code-inline">name</code></td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>-</td>
	// <td><code class="ks-code-inline">KSButton</code></td>
	// </tr>
	// <tr>
	// <td>nativeType</td>
	// <td>用来描述按钮原生类型</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>-</td>
	// <td><code class="ks-code-inline">button</code></td>
	// </tr>
	// <tr>
	// <td>disabled</td>
	// <td>用来描述按钮是禁用</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td><code class="ks-code-inline">true</code>, <code class="ks-code-inline">false</code></td>
	// <td><code class="ks-code-inline">false</code></td>
	// </tr>
	// <tr>
	// <td>type</td>
	// <td>用来描述按钮的类型</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td><code class="ks-code-inline">primary</code>, <code class="ks-code-inline">success</code>, <code class="ks-code-inline">info</code>, <code class="ks-code-inline">warn</code>, <code class="ks-code-inline">danger</code>, <code class="ks-code-inline">other</code></td>
	// <td><code class="ks-code-inline">primary</code></td>
	// </tr>
	// <tr>
	// <td>size</td>
	// <td>用来描述按钮的大小</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td><code class="ks-code-inline">small</code>, <code class="ks-code-inline">normal</code>, <code class="ks-code-inline">middle</code>, <code class="ks-code-inline">large</code></td>
	// <td><code class="ks-code-inline">normal</code></td>
	// </tr>
	// <tr>
	// <td>loading</td>
	// <td>同步属性，用来控制按钮是否是加载状态</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>-</td>
	// <td>-</td>
	// </tr>
	// </tbody>
	// </table></div><h4>KsButtonAbstract</h4>
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
	// <td>mode</td>
	// <td>用来描述按钮的模式 正常/幽灵</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td><code class="ks-code-inline">normal</code>, <code class="ks-code-inline">ghost</code></td>
	// <td><code class="ks-code-inline">normal</code></td>
	// </tr>
	// <tr>
	// <td>form</td>
	// <td>原生属性 <code class="ks-code-inline">form</code></td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>-</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>autoFocus</td>
	// <td>原生属性 <code class="ks-code-inline">autofocus</code></td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>-</td>
	// <td><code class="ks-code-inline">false</code></td>
	// </tr>
	// <tr>
	// <td>name</td>
	// <td>原生属性 <code class="ks-code-inline">name</code></td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>-</td>
	// <td><code class="ks-code-inline">KSButton</code></td>
	// </tr>
	// <tr>
	// <td>nativeType</td>
	// <td>用来描述按钮原生类型</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>-</td>
	// <td><code class="ks-code-inline">button</code></td>
	// </tr>
	// <tr>
	// <td>disabled</td>
	// <td>用来描述按钮是禁用</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td><code class="ks-code-inline">true</code>, <code class="ks-code-inline">false</code></td>
	// <td><code class="ks-code-inline">false</code></td>
	// </tr>
	// <tr>
	// <td>fontSize</td>
	// <td>用来描述按钮内文字大小</td>
	// <td>props</td>
	// <td>Number</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>是</td>
	// <td>-</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>truth</td>
	// <td>是否是用 <code class="ks-code-inline">button</code> 元素实现按钮，设置为 <code class="ks-code-inline">false</code> 使用 <code class="ks-code-inline">a</code> 标签实现按钮，原生关于 <code class="ks-code-inline">button</code> 的属性不可用</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td>-</td>
	// <td><code class="ks-code-inline">true</code></td>
	// </tr>
	// <tr>
	// <td>width</td>
	// <td>用来描述按钮的宽度</td>
	// <td>props</td>
	// <td>Number</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>是</td>
	// <td>-</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>height</td>
	// <td>用来描述按钮的高度</td>
	// <td>props</td>
	// <td>Number</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>是</td>
	// <td>-</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>colorNormal</td>
	// <td>用来描述按钮 normal （默认） 时的颜色, 十六进制颜色值</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>是</td>
	// <td>-</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>colorHover</td>
	// <td>用来描述按钮 hover （鼠标悬浮） 时的颜色, 十六进制颜色值</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>是</td>
	// <td>-</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>colorActive</td>
	// <td>用来描述按钮 active （按钮按下） 是的颜色, 十六进制颜色值</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>是</td>
	// <td>-</td>
	// <td>-</td>
	// </tr>
	// </tbody>
	// </table></div></section></template>
	// <style>
	//   .round-button .KsBtnAbstract { border-radius: 50%; padding: 0 }
	// </style>
	// <script>
	console.log('button.md - script');
	// import KsButton from 'KsComponents/KsButton'
	// import KsSwitch from 'KsComponents/KsSwitch'

	var btnTypeMapper = ['primary', 'success', 'info', 'warn', 'danger', 'other'];

	var btnSizeMapper = ['small', 'normal', 'middle', 'large'];

	exports.default = {
	  kscomponents: ['KsButton_v0', 'KsSwitch_v0'],
	  init: function init() {
	    console.log('base button.md init----');
	  },
	  data: function data() {
	    return {
	      btnTypeMapper: btnTypeMapper,
	      btnSizeMapper: btnSizeMapper,

	      btnSwitch: false,
	      btnDisable: false,
	      btnEventDisable: false,
	      btnType: 'primary',
	      btnSize: 'normal'
	    };
	  },


	  methods: {
	    clickTest: function clickTest() {
	      alert('click me!');
	    }
	  },
	  created: function created() {
	    console.log('created');
	  }
	};
	// </script>

/***/ },

/***/ 208:
/***/ function(module, exports) {

	module.exports = "<section><h2>DatePicker</h2>\n<blockquote>\n<p><strong>Author:张大柱</strong><br>\n常用的日期组件</p>\n</blockquote>\n<hr>\n<h3>基础使用 （分类）</h3>\n<blockquote>\n<blockquote>\n<h4><strong>KsDatePicker  type=&quot;datemonth&quot;   =&gt; {{datemonth2}}</strong></h4>\n</blockquote>\n</blockquote>\n<p><ks-date-picker placeholder=\"aaa\" type=\"datemonth\" v-bind:value.sync=\"datemonth2\"></ks-date-picker></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-date-picker</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"datemonth\"</span> \n    <span class=\"hljs-attr\">v-bind:value.sync</span>=<span class=\"hljs-string\">\"datemonth2\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-date-picker</span>&gt;</span>\n</code></pre>\n<blockquote>\n<h4><strong>纯面板KsDateMonth =&gt; {{datemonth}}</strong></h4>\n</blockquote>\n<p><ks-date-month v-bind:value.sync=\"datemonth\"></ks-date-month></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-date-month</span> <span class=\"hljs-attr\">v-bind:value.sync</span>=<span class=\"hljs-string\">\"datemonth\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-date-month</span>&gt;</span>\n</code></pre>\n<blockquote>\n<blockquote>\n<h4><strong>KsDatePicker type=&quot;date&quot; =&gt; {{date}}</strong></h4>\n</blockquote>\n</blockquote>\n<p><ks-date-picker type=\"date\" v-bind:value.sync=\"date\" v-on:change=\"date_change\"></ks-date-picker></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-date-picker</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"date\"</span>\n    <span class=\"hljs-attr\">v-bind:value.sync</span>=<span class=\"hljs-string\">\"date\"</span> \n    <span class=\"hljs-attr\">v-on:change</span>=<span class=\"hljs-string\">\"date_change\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-date-picker</span>&gt;</span>\n</code></pre>\n<blockquote>\n<h4><strong>纯面板date =&gt; {{date}}</strong></h4>\n</blockquote>\n<p><ks-dater type=\"date\" v-bind:value.sync=\"date\" v-on:change=\"date_change\"></ks-dater></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-dater</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"date\"</span>\n    <span class=\"hljs-attr\">v-bind:value.sync</span>=<span class=\"hljs-string\">\"date\"</span> \n    <span class=\"hljs-attr\">v-on:change</span>=<span class=\"hljs-string\">\"date_change\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-dater</span>&gt;</span>\n</code></pre>\n<blockquote>\n<h4><strong>KsDatePicker type=&quot;datetime&quot; =&gt; {{datetime}}</strong></h4>\n</blockquote>\n<p><ks-date-picker type=\"datetime\" v-bind:value.sync=\"datetime\" v-on:change=\"datetime_change\"></ks-date-picker></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-date-picker</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"datetime\"</span> \n    <span class=\"hljs-attr\">v-bind:value.sync</span>=<span class=\"hljs-string\">\"datetime\"</span> \n    <span class=\"hljs-attr\">v-on:change</span>=<span class=\"hljs-string\">\"datetime_change\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-date-picker</span>&gt;</span> \n</code></pre>\n<blockquote>\n<h4><strong>KsDatePicker type=&quot;datemulti&quot; =&gt; {{datemulti}}</strong></h4>\n</blockquote>\n<p><ks-date-picker type=\"datemulti\" v-bind:value.sync=\"datemulti\" v-on:change=\"datemulti_change\"></ks-date-picker></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-date-picker</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"datemulti\"</span> \n    <span class=\"hljs-attr\">v-bind:value.sync</span>=<span class=\"hljs-string\">\"datemulti\"</span> \n    <span class=\"hljs-attr\">v-on:change</span>=<span class=\"hljs-string\">\"datemulti_change\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-date-picker</span>&gt;</span>\n</code></pre>\n<blockquote>\n<h4><strong>纯面板datemulti on KsDater =&gt; {{dateMultiPure}}</strong></h4>\n</blockquote>\n<p><ks-dater type=\"datemulti\" v-bind:value.sync=\"dateMultiPure\" v-on:change=\"dateMultiPureChange\"></ks-dater></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-dater</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"datemulti\"</span> \n    <span class=\"hljs-attr\">v-bind:value.sync</span>=<span class=\"hljs-string\">\"dateMultiPure\"</span> \n    <span class=\"hljs-attr\">v-on:change</span>=<span class=\"hljs-string\">\"dateMultiPureChange\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-dater</span>&gt;</span>\n</code></pre>\n<blockquote>\n<h4><strong>daterange</strong></h4>\n</blockquote>\n<p><ks-dater-range v-bind:range.sync=\"['','']\" v-on:change=\"daterange_change\"></ks-dater-range></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-dater-range</span> \n    <span class=\"hljs-attr\">v-bind:range.sync</span>=<span class=\"hljs-string\">\"['','']\"</span> \n    <span class=\"hljs-attr\">v-on:change</span>=<span class=\"hljs-string\">\"daterange_change\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-dater-range</span>&gt;</span>\n</code></pre>\n<blockquote>\n<h4><strong>daterange picker =&gt; {{dateRangePicker}}</strong></h4>\n</blockquote>\n<p><ks-date-range-picker placeholder=\"开始,结束\" v-bind:range.sync=\"dateRangePicker\" v-bind:readonly=\"false\" v-on:change=\"daterange_picker_change\"></ks-date-range-picker></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-date-range-picker</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">\"开始,结束\"</span> \n        <span class=\"hljs-attr\">v-bind:range.sync</span>=<span class=\"hljs-string\">\"dateRangePicker\"</span>\n        <span class=\"hljs-attr\">v-bind:readonly</span>=<span class=\"hljs-string\">\"false\"</span>\n        <span class=\"hljs-attr\">v-on:change</span>=<span class=\"hljs-string\">\"daterange_picker_change\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-date-range-picker</span>&gt;</span>\n</code></pre>\n<p><ks-date-range-picker placeholder=\"开始,结束\" v-bind:range.sync=\"dateRangePicker2\" v-bind:readonly=\"true\" v-on:change=\"daterange_picker_change\"></ks-date-range-picker></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-date-range-picker</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">\"开始,结束\"</span> \n        <span class=\"hljs-attr\">v-bind:range.sync</span>=<span class=\"hljs-string\">\"dateRangePicker2\"</span>\n        <span class=\"hljs-attr\">v-bind:readonly</span>=<span class=\"hljs-string\">\"true\"</span>\n        <span class=\"hljs-attr\">v-on:change</span>=<span class=\"hljs-string\">\"daterange_picker_change\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-date-range-picker</span>&gt;</span>\n</code></pre>\n<h3>非范围日期组件API</h3>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>dater类型</td>\n<td>props</td>\n<td>String</td>\n<td><strong>date</strong>, <strong>datetime</strong>,<strong>datemonth</strong>, <strong>datemulti</strong></td>\n<td>date</td>\n</tr>\n<tr>\n<td>value</td>\n<td>数据中绑定的值（可sync）</td>\n<td>props</td>\n<td>String</td>\n<td><strong>date=&gt;'2016-11-09'</strong>，<strong>datemonth=&gt;'2016-09'</strong>，<strong>datetime=&gt;'2016-11-09 03:04:20'</strong>，<strong>datemulti=&gt;'2016-11-09,2016-11-10'</strong></td>\n<td>无</td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td>提示</td>\n<td>props</td>\n<td>String</td>\n<td>无</td>\n<td>无</td>\n</tr>\n<tr>\n<td>readonly</td>\n<td>是否只读</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">true</code>, <code class=\"ks-code-inline\">false</code></td>\n<td><code class=\"ks-code-inline\">false</code></td>\n</tr>\n<tr>\n<td>change</td>\n<td>组件中日期时间改变复值</td>\n<td>props</td>\n<td>Event</td>\n<td><code class=\"ks-code-inline\">可不设置change</code></td>\n<td>无</td>\n</tr>\n</tbody>\n</table></div><h3>范围日期组件API（区别部分如下）</h3>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>无type类型</td>\n<td>null</td>\n<td>null</td>\n<td>null</td>\n<td>null</td>\n</tr>\n<tr>\n<td>range</td>\n<td>数据中绑定的值（可sync）</td>\n<td>props</td>\n<td>Array</td>\n<td><strong>[]</strong></td>\n<td><strong>[]</strong></td>\n</tr>\n</tbody>\n</table></div><pre class=\"ks-hljs\"><code>&lt;script&gt;\n    <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n        data(){\n            <span class=\"hljs-keyword\">return</span> {\n                <span class=\"hljs-attr\">datemonth</span>:<span class=\"hljs-string\">'2016-10'</span>,\n                <span class=\"hljs-attr\">datemonth2</span>:<span class=\"hljs-string\">'2016-10'</span>,\n                <span class=\"hljs-attr\">datemonth3</span>:<span class=\"hljs-string\">'2016-10'</span>,\n                <span class=\"hljs-attr\">datetime</span>:<span class=\"hljs-string\">'2016-10-12 03:04:20'</span>,\n                <span class=\"hljs-attr\">date</span>:<span class=\"hljs-string\">''</span>,\n                <span class=\"hljs-attr\">datemulti</span>:<span class=\"hljs-string\">''</span>,\n                <span class=\"hljs-attr\">dateMultiPure</span>:<span class=\"hljs-string\">''</span>,\n                <span class=\"hljs-attr\">date_base</span>:<span class=\"hljs-string\">'2016-10-12 03:04:20'</span>,\n                <span class=\"hljs-attr\">dateRangePicker</span>:[],\n                <span class=\"hljs-attr\">dateRangePicker2</span>:[<span class=\"hljs-string\">''</span>,<span class=\"hljs-string\">''</span>]\n            }\n        },\n        <span class=\"hljs-attr\">methods</span>:{\n            current_change(val){\n                <span class=\"hljs-keyword\">this</span>.date_base = val\n            },\n            datetime_change(val){},\n            date_change(val){\n                <span class=\"hljs-comment\">// console.log('parent catch change value',val)</span>\n            },\n            datemulti_change(val){\n                <span class=\"hljs-comment\">// console.log('筛选 picker',val)</span>\n                <span class=\"hljs-keyword\">if</span>(!val){\n                    <span class=\"hljs-comment\">// setTimeout(()=&gt;{</span>\n                        <span class=\"hljs-comment\">// this.datemulti = '2016-11-02'            </span>\n                    <span class=\"hljs-comment\">// })</span>\n                }\n                \n            },\n            dateMultiPureChange(){\n\n            },\n            daterange_change(val){\n                <span class=\"hljs-built_in\">console</span>.log(val)\n            },\n            daterange_picker_change(val){\n                <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'多选 picker'</span>,val)\n            }\n        },\n        ready(){\n            <span class=\"hljs-keyword\">this</span>.date1 = <span class=\"hljs-string\">'2016-09-21 03:02:24'</span>\n\n            setTimeout(<span class=\"hljs-function\"><span class=\"hljs-params\">()</span>=&gt;</span>{\n                <span class=\"hljs-keyword\">this</span>.dateRangePicker = [<span class=\"hljs-string\">'2016-09-21'</span>,<span class=\"hljs-string\">'2016-10-29'</span>]\n            },<span class=\"hljs-number\">1000</span>)\n\n            setTimeout(<span class=\"hljs-function\"><span class=\"hljs-params\">()</span>=&gt;</span>{\n                <span class=\"hljs-keyword\">this</span>.dateRangePicker2 = [<span class=\"hljs-string\">''</span>,<span class=\"hljs-string\">''</span>]\n            },<span class=\"hljs-number\">10000</span>)\n\n            setTimeout(<span class=\"hljs-function\"><span class=\"hljs-params\">()</span>=&gt;</span>{\n                <span class=\"hljs-keyword\">this</span>.datemonth2 = <span class=\"hljs-string\">'2016-09'</span>\n            },<span class=\"hljs-number\">1000</span>)\n        }\n\n    }\n&lt;<span class=\"hljs-regexp\">/script&gt;\n</span></code></pre>\n\n</section>";

/***/ },

/***/ 761:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(762);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-rewriter.js!../../vue-loader/lib/selector.js?type=style&index=0!./v0.1.0-5.vue", function() {
				var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-rewriter.js!../../vue-loader/lib/selector.js?type=style&index=0!./v0.1.0-5.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 762:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "\n.round-button .KsBtnAbstract { border-radius: 50%; padding: 0 }\n", ""]);

	// exports


/***/ }

});