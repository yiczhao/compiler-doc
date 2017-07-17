webpackJsonp([8],{

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(165);

/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(166)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/v0.1.0-4.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(167)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/v0.1.0-4.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 166:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template><section><h2>Icon 图标 <a href="#!/base/icons/list">卡说图标库</a></h2>
	// <blockquote>
	// <p>Icon 图标组件<br>
	// 作者: pkeros(张杰)<br>
	// 最后修改时间: 2017-04-12</p>
	// </blockquote>
	// <hr>
	// <h3>基础使用</h3>
	// <h4>- 图标的使用</h4>
	// <br>
	// <p><ks-icon name="camera-retro" library="fa"></ks-icon> <ks-icon name="bandcamp" library="fa"></ks-icon> <ks-icon name="circle-o" library="fa"></ks-icon></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"camera-retro"</span> <span class="hljs-attr">library</span>=<span class="hljs-string">"fa"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-icon</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"bandcamp"</span> <span class="hljs-attr">library</span>=<span class="hljs-string">"fa"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-icon</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"circle-o"</span> <span class="hljs-attr">library</span>=<span class="hljs-string">"fa"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-icon</span>&gt;</span>
	//
	// </code></pre>
	// <p>上面列举了几种图标，<code class="ks-code-inline">library="fa"</code> 模式采用的 <code class="ks-code-inline">font-awesome</code> 的图标字体库。<br>
	// <a href="http://fontawesome.io/icons/">font-awesome 图标列表</a>, 此处的链接就是 <code class="ks-code-inline">font-asesome</code>。</p>
	// <p><img src="http://chuantu.biz/t5/63/1491985624x2890174454.png" alt="name 参数对应在图标列表中的位置"></p>
	// <p>图中红色框框所标出的就是需要填入 <code class="ks-code-inline">name</code> 属性名字。</p>
	// <br>
	// <h4>- 设置图标的颜色</h4>
	// <br>
	// <p><ks-icon name="camera-retro" style="color: #FF00FF" library="fa"></ks-icon></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"camera-retro"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: #FF00FF"</span> <span class="hljs-attr">library</span>=<span class="hljs-string">"fa"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-icon</span>&gt;</span>
	// </code></pre>
	// <p>直接使用设置文字的方式就可以了设置颜色了。</p>
	// <br>
	// <span style="color: #FF00FF">
	//   <ks-icon name="camera-retro" library="fa"></ks-icon>
	// </span>
	// <span style="color: #00FF00">
	//   <ks-icon name="bandcamp" library="fa"></ks-icon>
	// </span>
	// <span style="color: #FFAA11">
	//   <ks-icon name="circle-o" library="fa"></ks-icon>
	// </span>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: #FF00FF"</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">ks-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"camera-retro"</span> <span class="hljs-attr">library</span>=<span class="hljs-string">"fa"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-icon</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: #00FF00"</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">ks-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"bandcamp"</span> <span class="hljs-attr">library</span>=<span class="hljs-string">"fa"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-icon</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"color: #FFAA11"</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">ks-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"circle-o"</span> <span class="hljs-attr">library</span>=<span class="hljs-string">"fa"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-icon</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
	// </code></pre>
	// <p>直接使用 <code class="ks-code-inline">color</code> 参数就可以设置图标的颜色了。</p>
	// <br>
	// <h4>- 设置图标大小</h4>
	// <br>
	// <p><ks-icon name="camera-retro" size="2x" library="fa"></ks-icon><br>
	// <ks-icon name="camera-retro" size="3x" library="fa"></ks-icon><br>
	// <ks-icon name="camera-retro" size="4x" library="fa"></ks-icon><br>
	// <ks-icon name="camera-retro" size="5x" library="fa"></ks-icon></p>
	// <p><ks-icon name="bandcamp" size="20px" library="fa"></ks-icon><br>
	// <ks-icon name="circle-o" size="4em" library="fa"></ks-icon></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"camera-retro"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"2x"</span> <span class="hljs-attr">library</span>=<span class="hljs-string">"fa"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-icon</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"camera-retro"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"3x"</span> <span class="hljs-attr">library</span>=<span class="hljs-string">"fa"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-icon</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"camera-retro"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"4x"</span> <span class="hljs-attr">library</span>=<span class="hljs-string">"fa"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-icon</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"camera-retro"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"5x"</span> <span class="hljs-attr">library</span>=<span class="hljs-string">"fa"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-icon</span>&gt;</span>
	//
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"bandcamp"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"20px"</span> <span class="hljs-attr">library</span>=<span class="hljs-string">"fa"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-icon</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"circle-o"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"4em"</span> <span class="hljs-attr">library</span>=<span class="hljs-string">"fa"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-icon</span>&gt;</span>
	//
	// </code></pre>
	// <p><code class="ks-code-inline">size</code> 参数就除了可以设置 <code class="ks-code-inline">2x</code>, <code class="ks-code-inline">3x</code>, <code class="ks-code-inline">4x</code>, <code class="ks-code-inline">5x</code> 还可以设置任何有效的 css 单位。</p>
	// <br>
	// <h4>- 设置旋转角度</h4>
	// <br>
	// <p><ks-icon name="camera-retro" size="4x" rotate="90" library="fa"></ks-icon><br>
	// <ks-icon name="camera-retro" size="4x" rotate="180" library="fa"></ks-icon><br>
	// <ks-icon name="camera-retro" size="4x" rotate="270" library="fa"></ks-icon></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"camera-retro"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"4x"</span> <span class="hljs-attr">rotate</span>=<span class="hljs-string">"90"</span> <span class="hljs-attr">library</span>=<span class="hljs-string">"fa"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-icon</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"camera-retro"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"4x"</span> <span class="hljs-attr">rotate</span>=<span class="hljs-string">"180"</span> <span class="hljs-attr">library</span>=<span class="hljs-string">"fa"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-icon</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"camera-retro"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"4x"</span> <span class="hljs-attr">rotate</span>=<span class="hljs-string">"270"</span> <span class="hljs-attr">library</span>=<span class="hljs-string">"fa"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-icon</span>&gt;</span>
	//
	// </code></pre>
	// <p>可以通过 <code class="ks-code-inline">rotate</code> 来设置图标的旋转角度，预置的有 <code class="ks-code-inline">90</code>, <code class="ks-code-inline">180</code>, <code class="ks-code-inline">270</code> 几个值。</p>
	// <h4>- 图标旋转动画</h4>
	// <p><ks-icon name="camera-retro" size="4x" animate="spin" library="fa"></ks-icon><br>
	// <ks-icon name="camera-retro" size="4x" animate="pulse" library="fa"></ks-icon></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"camera-retro"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"4x"</span> <span class="hljs-attr">animate</span>=<span class="hljs-string">"spin"</span> <span class="hljs-attr">library</span>=<span class="hljs-string">"fa"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-icon</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"camera-retro"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"4x"</span> <span class="hljs-attr">animate</span>=<span class="hljs-string">"pulse"</span> <span class="hljs-attr">library</span>=<span class="hljs-string">"fa"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-icon</span>&gt;</span>
	//
	// </code></pre>
	// <p>可以通过 <code class="ks-code-inline">animate</code> 来设置图标的旋转动画，预置的 <code class="ks-code-inline">spin</code>, <code class="ks-code-inline">pulse</code> 两个值。</p>
	// <h3>API</h3>
	// <h4>Icon (图标组件)</h4>
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
	// <td>library</td>
	// <td>需要引用的图标库</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td><code class="ks-code-inline">ks</code>, <code class="ks-code-inline">fd</code></td>
	// <td><strong>ks</strong></td>
	// </tr>
	// <tr>
	// <td>name</td>
	// <td>需要引用的图标</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>是</td>
	// <td>-</td>
	// <td>-</td>
	// </tr>
	// <tr>
	// <td>size</td>
	// <td>图标大小</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td><code class="ks-code-inline">2x</code>, <code class="ks-code-inline">3x</code>, <code class="ks-code-inline">4x</code>, <code class="ks-code-inline">5x</code></td>
	// <td><code class="ks-code-inline">13px</code></td>
	// </tr>
	// <tr>
	// <td>rotate</td>
	// <td>图标旋转角度</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td><code class="ks-code-inline">90</code>, <code class="ks-code-inline">180</code>, <code class="ks-code-inline">270</code></td>
	// <td><code class="ks-code-inline">0</code></td>
	// </tr>
	// <tr>
	// <td>animate</td>
	// <td>图标动画类型</td>
	// <td>props</td>
	// <td>String</td>
	// <td><code class="ks-code-inline">false</code></td>
	// <td>否</td>
	// <td><code class="ks-code-inline">spin</code>, <code class="ks-code-inline">pulse</code></td>
	// <td><code class="ks-code-inline">stop</code></td>
	// </tr>
	// </tbody>
	// </table></div></section></template>
	//
	// <script type="text/javascript">
	exports.default = {
	    kscomponents: ['KsIcon_v0']
	};
	// </script>

/***/ },

/***/ 167:
/***/ function(module, exports) {

	module.exports = "<section><h2>Icon 图标 <a href=\"#!/base/icons/list\">卡说图标库</a></h2>\n<blockquote>\n<p>Icon 图标组件<br>\n作者: pkeros(张杰)<br>\n最后修改时间: 2017-04-12</p>\n</blockquote>\n<hr>\n<h3>基础使用</h3>\n<h4>- 图标的使用</h4>\n<br>\n<p><ks-icon name=\"camera-retro\" library=\"fa\"></ks-icon> <ks-icon name=\"bandcamp\" library=\"fa\"></ks-icon> <ks-icon name=\"circle-o\" library=\"fa\"></ks-icon></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-icon</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"camera-retro\"</span> <span class=\"hljs-attr\">library</span>=<span class=\"hljs-string\">\"fa\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-icon</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-icon</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"bandcamp\"</span> <span class=\"hljs-attr\">library</span>=<span class=\"hljs-string\">\"fa\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-icon</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-icon</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"circle-o\"</span> <span class=\"hljs-attr\">library</span>=<span class=\"hljs-string\">\"fa\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-icon</span>&gt;</span>\n\n</code></pre>\n<p>上面列举了几种图标，<code class=\"ks-code-inline\">library=\"fa\"</code> 模式采用的 <code class=\"ks-code-inline\">font-awesome</code> 的图标字体库。<br>\n<a href=\"http://fontawesome.io/icons/\">font-awesome 图标列表</a>, 此处的链接就是 <code class=\"ks-code-inline\">font-asesome</code>。</p>\n<p><img src=\"http://chuantu.biz/t5/63/1491985624x2890174454.png\" alt=\"name 参数对应在图标列表中的位置\"></p>\n<p>图中红色框框所标出的就是需要填入 <code class=\"ks-code-inline\">name</code> 属性名字。</p>\n<br>\n<h4>- 设置图标的颜色</h4>\n<br>\n<p><ks-icon name=\"camera-retro\" style=\"color: #FF00FF\" library=\"fa\"></ks-icon></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-icon</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"camera-retro\"</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"color: #FF00FF\"</span> <span class=\"hljs-attr\">library</span>=<span class=\"hljs-string\">\"fa\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-icon</span>&gt;</span>\n</code></pre>\n<p>直接使用设置文字的方式就可以了设置颜色了。</p>\n<br>\n<span style=\"color: #FF00FF\">\n  <ks-icon name=\"camera-retro\" library=\"fa\"></ks-icon>\n</span>\n<span style=\"color: #00FF00\">\n  <ks-icon name=\"bandcamp\" library=\"fa\"></ks-icon>\n</span>\n<span style=\"color: #FFAA11\">\n  <ks-icon name=\"circle-o\" library=\"fa\"></ks-icon>\n</span>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"color: #FF00FF\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-icon</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"camera-retro\"</span> <span class=\"hljs-attr\">library</span>=<span class=\"hljs-string\">\"fa\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-icon</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"color: #00FF00\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-icon</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"bandcamp\"</span> <span class=\"hljs-attr\">library</span>=<span class=\"hljs-string\">\"fa\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-icon</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"color: #FFAA11\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-icon</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"circle-o\"</span> <span class=\"hljs-attr\">library</span>=<span class=\"hljs-string\">\"fa\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-icon</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n</code></pre>\n<p>直接使用 <code class=\"ks-code-inline\">color</code> 参数就可以设置图标的颜色了。</p>\n<br>\n<h4>- 设置图标大小</h4>\n<br>\n<p><ks-icon name=\"camera-retro\" size=\"2x\" library=\"fa\"></ks-icon><br>\n<ks-icon name=\"camera-retro\" size=\"3x\" library=\"fa\"></ks-icon><br>\n<ks-icon name=\"camera-retro\" size=\"4x\" library=\"fa\"></ks-icon><br>\n<ks-icon name=\"camera-retro\" size=\"5x\" library=\"fa\"></ks-icon></p>\n<p><ks-icon name=\"bandcamp\" size=\"20px\" library=\"fa\"></ks-icon><br>\n<ks-icon name=\"circle-o\" size=\"4em\" library=\"fa\"></ks-icon></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-icon</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"camera-retro\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"2x\"</span> <span class=\"hljs-attr\">library</span>=<span class=\"hljs-string\">\"fa\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-icon</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-icon</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"camera-retro\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"3x\"</span> <span class=\"hljs-attr\">library</span>=<span class=\"hljs-string\">\"fa\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-icon</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-icon</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"camera-retro\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"4x\"</span> <span class=\"hljs-attr\">library</span>=<span class=\"hljs-string\">\"fa\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-icon</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-icon</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"camera-retro\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"5x\"</span> <span class=\"hljs-attr\">library</span>=<span class=\"hljs-string\">\"fa\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-icon</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-icon</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"bandcamp\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"20px\"</span> <span class=\"hljs-attr\">library</span>=<span class=\"hljs-string\">\"fa\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-icon</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-icon</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"circle-o\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"4em\"</span> <span class=\"hljs-attr\">library</span>=<span class=\"hljs-string\">\"fa\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-icon</span>&gt;</span>\n\n</code></pre>\n<p><code class=\"ks-code-inline\">size</code> 参数就除了可以设置 <code class=\"ks-code-inline\">2x</code>, <code class=\"ks-code-inline\">3x</code>, <code class=\"ks-code-inline\">4x</code>, <code class=\"ks-code-inline\">5x</code> 还可以设置任何有效的 css 单位。</p>\n<br>\n<h4>- 设置旋转角度</h4>\n<br>\n<p><ks-icon name=\"camera-retro\" size=\"4x\" rotate=\"90\" library=\"fa\"></ks-icon><br>\n<ks-icon name=\"camera-retro\" size=\"4x\" rotate=\"180\" library=\"fa\"></ks-icon><br>\n<ks-icon name=\"camera-retro\" size=\"4x\" rotate=\"270\" library=\"fa\"></ks-icon></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-icon</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"camera-retro\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"4x\"</span> <span class=\"hljs-attr\">rotate</span>=<span class=\"hljs-string\">\"90\"</span> <span class=\"hljs-attr\">library</span>=<span class=\"hljs-string\">\"fa\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-icon</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-icon</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"camera-retro\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"4x\"</span> <span class=\"hljs-attr\">rotate</span>=<span class=\"hljs-string\">\"180\"</span> <span class=\"hljs-attr\">library</span>=<span class=\"hljs-string\">\"fa\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-icon</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-icon</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"camera-retro\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"4x\"</span> <span class=\"hljs-attr\">rotate</span>=<span class=\"hljs-string\">\"270\"</span> <span class=\"hljs-attr\">library</span>=<span class=\"hljs-string\">\"fa\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-icon</span>&gt;</span>\n\n</code></pre>\n<p>可以通过 <code class=\"ks-code-inline\">rotate</code> 来设置图标的旋转角度，预置的有 <code class=\"ks-code-inline\">90</code>, <code class=\"ks-code-inline\">180</code>, <code class=\"ks-code-inline\">270</code> 几个值。</p>\n<h4>- 图标旋转动画</h4>\n<p><ks-icon name=\"camera-retro\" size=\"4x\" animate=\"spin\" library=\"fa\"></ks-icon><br>\n<ks-icon name=\"camera-retro\" size=\"4x\" animate=\"pulse\" library=\"fa\"></ks-icon></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-icon</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"camera-retro\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"4x\"</span> <span class=\"hljs-attr\">animate</span>=<span class=\"hljs-string\">\"spin\"</span> <span class=\"hljs-attr\">library</span>=<span class=\"hljs-string\">\"fa\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-icon</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-icon</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"camera-retro\"</span> <span class=\"hljs-attr\">size</span>=<span class=\"hljs-string\">\"4x\"</span> <span class=\"hljs-attr\">animate</span>=<span class=\"hljs-string\">\"pulse\"</span> <span class=\"hljs-attr\">library</span>=<span class=\"hljs-string\">\"fa\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-icon</span>&gt;</span>\n\n</code></pre>\n<p>可以通过 <code class=\"ks-code-inline\">animate</code> 来设置图标的旋转动画，预置的 <code class=\"ks-code-inline\">spin</code>, <code class=\"ks-code-inline\">pulse</code> 两个值。</p>\n<h3>API</h3>\n<h4>Icon (图标组件)</h4>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>双向（twoWay）</th>\n<th>是否必须</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>library</td>\n<td>需要引用的图标库</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td><code class=\"ks-code-inline\">ks</code>, <code class=\"ks-code-inline\">fd</code></td>\n<td><strong>ks</strong></td>\n</tr>\n<tr>\n<td>name</td>\n<td>需要引用的图标</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>是</td>\n<td>-</td>\n<td>-</td>\n</tr>\n<tr>\n<td>size</td>\n<td>图标大小</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td><code class=\"ks-code-inline\">2x</code>, <code class=\"ks-code-inline\">3x</code>, <code class=\"ks-code-inline\">4x</code>, <code class=\"ks-code-inline\">5x</code></td>\n<td><code class=\"ks-code-inline\">13px</code></td>\n</tr>\n<tr>\n<td>rotate</td>\n<td>图标旋转角度</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td><code class=\"ks-code-inline\">90</code>, <code class=\"ks-code-inline\">180</code>, <code class=\"ks-code-inline\">270</code></td>\n<td><code class=\"ks-code-inline\">0</code></td>\n</tr>\n<tr>\n<td>animate</td>\n<td>图标动画类型</td>\n<td>props</td>\n<td>String</td>\n<td><code class=\"ks-code-inline\">false</code></td>\n<td>否</td>\n<td><code class=\"ks-code-inline\">spin</code>, <code class=\"ks-code-inline\">pulse</code></td>\n<td><code class=\"ks-code-inline\">stop</code></td>\n</tr>\n</tbody>\n</table></div></section>";

/***/ }

});