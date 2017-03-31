webpackJsonp([19],{

/***/ 142:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(143);

/***/ },

/***/ 143:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(144)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/image-12.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(145)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/image-12.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 144:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template><section><h2>ksImage</h2>
	// <blockquote>
	// <p>常用的图片显示组件</p>
	// </blockquote>
	// <hr>
	// <h3>如果查看图片后，直接关闭，不需要在关闭时添加操作</h3>
	// <br>
	// <p><ks-button @click="imageShow1 = true">呼出 ksImage 组件</ks-button></p>
	// <p><ks-image v-bind:show.sync="imageShow1" v-bind:url="imgUrl"></ks-image></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"imageShow = true"</span>&gt;</span>呼出 ksImage 组件<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span>
	// </code></pre>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-image</span> 
	//     <span class="hljs-attr">v-bind:show.sync</span>=<span class="hljs-string">"imageShow"</span> 
	//     <span class="hljs-attr">v-bind:url</span>=<span class="hljs-string">"imgUrl"</span>
	//     &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-image</span>&gt;</span>
	// </code></pre>
	// <pre class="ks-hljs"><code>
	//     <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
	//         data () {
	//             <span class="hljs-keyword">return</span> {
	//                 <span class="hljs-attr">imageShow</span>:<span class="hljs-literal">false</span>,
	//                 <span class="hljs-attr">imgUrl</span>:<span class="hljs-string">" "</span>
	//             }
	//         }
	//     }
	//
	// </code></pre>
	// <h3>API</h3>
	// <div class="table-striped"><table class="table-entity"><thead>
	// <tr>
	// <th>参数</th>
	// <th>说明</th>
	// <th>接口类型</th>
	// <th>可选值</th>
	// <th>默认值</th>
	// <th>是否必须</th>
	// </tr>
	// </thead>
	// <tbody>
	// <tr>
	// <td>show</td>
	// <td>用于是否显示查看图片组件</td>
	// <td>Boolean</td>
	// <td>true, false</td>
	// <td>false</td>
	// <td>是</td>
	// </tr>
	// <tr>
	// <td>url</td>
	// <td>显示图片的url</td>
	// <td>String</td>
	// <td>无</td>
	// <td>有</td>
	// <td>是</td>
	// </tr>
	// </tbody>
	// </table></div><br>
	// <h3>如果查看图片后，关闭时需要添加事件</h3>
	// <br>
	// <p><ks-button @click="imageShow2 = true">呼出 ksImage 组件</ks-button></p>
	// <p><ks-image v-bind:show="imageShow2" v-bind:url="imgUrl" v-on:change="close"></ks-image></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"imageShow = true"</span>&gt;</span>呼出 ksImage 组件<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span>
	// </code></pre>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-image</span> 
	//     <span class="hljs-attr">v-bind:show</span>=<span class="hljs-string">"imageShow"</span> 
	//     <span class="hljs-attr">v-bind:url</span>=<span class="hljs-string">"imgUrl"</span>
	//     <span class="hljs-attr">v-on:change</span>=<span class="hljs-string">"close"</span>
	//     &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-image</span>&gt;</span>
	// </code></pre>
	// <pre class="ks-hljs"><code>
	//     <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
	//         data () {
	//             <span class="hljs-keyword">return</span> {
	//                 <span class="hljs-attr">imageShow</span>:<span class="hljs-literal">false</span>,
	//                 <span class="hljs-attr">imgUrl</span>:<span class="hljs-string">" "</span>
	//             }
	//         },
	//         <span class="hljs-attr">methods</span>: {
	//             close(staut){
	//                 <span class="hljs-keyword">this</span>.imageShow2 = staut
	//                 ...... 
	//                 添加操作
	//                 ......
	//             }
	//         }
	//     }
	//
	// </code></pre>
	// <h3>API</h3>
	// <div class="table-striped"><table class="table-entity"><thead>
	// <tr>
	// <th>参数</th>
	// <th>说明</th>
	// <th>接口类型</th>
	// <th>可选值</th>
	// <th>默认值</th>
	// <th>是否必须</th>
	// </tr>
	// </thead>
	// <tbody>
	// <tr>
	// <td>show</td>
	// <td>用于是否显示查看图片组件</td>
	// <td>Boolean</td>
	// <td>true, false</td>
	// <td>false</td>
	// <td>是</td>
	// </tr>
	// <tr>
	// <td>url</td>
	// <td>显示图片的url</td>
	// <td>String</td>
	// <td>无</td>
	// <td>有</td>
	// <td>是</td>
	// </tr>
	// <tr>
	// <td>change</td>
	// <td>关闭时可添加事件</td>
	// <td>Function</td>
	// <td>无</td>
	// <td>无</td>
	// <td>否</td>
	// </tr>
	// </tbody>
	// </table></div></section></template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {
	            imageShow1: false,
	            imageShow2: false,
	            imgUrl: "http://img02.tooopen.com/images/20140504/sy_60294738471.jpg"
	        };
	    },

	    methods: {
	        close: function close(staut) {
	            this.imageShow2 = staut;
	            console.log('close', staut);
	        }
	    }
	};
	// </script>

/***/ },

/***/ 145:
/***/ function(module, exports) {

	module.exports = "<section><h2>ksImage</h2>\n<blockquote>\n<p>常用的图片显示组件</p>\n</blockquote>\n<hr>\n<h3>如果查看图片后，直接关闭，不需要在关闭时添加操作</h3>\n<br>\n<p><ks-button @click=\"imageShow1 = true\">呼出 ksImage 组件</ks-button></p>\n<p><ks-image v-bind:show.sync=\"imageShow1\" v-bind:url=\"imgUrl\"></ks-image></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-button</span> <span class=\"hljs-attr\">@click</span>=<span class=\"hljs-string\">\"imageShow = true\"</span>&gt;</span>呼出 ksImage 组件<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-button</span>&gt;</span>\n</code></pre>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-image</span> \n    <span class=\"hljs-attr\">v-bind:show.sync</span>=<span class=\"hljs-string\">\"imageShow\"</span> \n    <span class=\"hljs-attr\">v-bind:url</span>=<span class=\"hljs-string\">\"imgUrl\"</span>\n    &gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-image</span>&gt;</span>\n</code></pre>\n<pre class=\"ks-hljs\"><code>\n    <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span>{\n        data () {\n            <span class=\"hljs-keyword\">return</span> {\n                <span class=\"hljs-attr\">imageShow</span>:<span class=\"hljs-literal\">false</span>,\n                <span class=\"hljs-attr\">imgUrl</span>:<span class=\"hljs-string\">\" \"</span>\n            }\n        }\n    }\n\n</code></pre>\n<h3>API</h3>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>可选值</th>\n<th>默认值</th>\n<th>是否必须</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>show</td>\n<td>用于是否显示查看图片组件</td>\n<td>Boolean</td>\n<td>true, false</td>\n<td>false</td>\n<td>是</td>\n</tr>\n<tr>\n<td>url</td>\n<td>显示图片的url</td>\n<td>String</td>\n<td>无</td>\n<td>有</td>\n<td>是</td>\n</tr>\n</tbody>\n</table></div><br>\n<h3>如果查看图片后，关闭时需要添加事件</h3>\n<br>\n<p><ks-button @click=\"imageShow2 = true\">呼出 ksImage 组件</ks-button></p>\n<p><ks-image v-bind:show=\"imageShow2\" v-bind:url=\"imgUrl\" v-on:change=\"close\"></ks-image></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-button</span> <span class=\"hljs-attr\">@click</span>=<span class=\"hljs-string\">\"imageShow = true\"</span>&gt;</span>呼出 ksImage 组件<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-button</span>&gt;</span>\n</code></pre>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-image</span> \n    <span class=\"hljs-attr\">v-bind:show</span>=<span class=\"hljs-string\">\"imageShow\"</span> \n    <span class=\"hljs-attr\">v-bind:url</span>=<span class=\"hljs-string\">\"imgUrl\"</span>\n    <span class=\"hljs-attr\">v-on:change</span>=<span class=\"hljs-string\">\"close\"</span>\n    &gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-image</span>&gt;</span>\n</code></pre>\n<pre class=\"ks-hljs\"><code>\n    <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span>{\n        data () {\n            <span class=\"hljs-keyword\">return</span> {\n                <span class=\"hljs-attr\">imageShow</span>:<span class=\"hljs-literal\">false</span>,\n                <span class=\"hljs-attr\">imgUrl</span>:<span class=\"hljs-string\">\" \"</span>\n            }\n        },\n        <span class=\"hljs-attr\">methods</span>: {\n            close(staut){\n                <span class=\"hljs-keyword\">this</span>.imageShow2 = staut\n                ...... \n                添加操作\n                ......\n            }\n        }\n    }\n\n</code></pre>\n<h3>API</h3>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>可选值</th>\n<th>默认值</th>\n<th>是否必须</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>show</td>\n<td>用于是否显示查看图片组件</td>\n<td>Boolean</td>\n<td>true, false</td>\n<td>false</td>\n<td>是</td>\n</tr>\n<tr>\n<td>url</td>\n<td>显示图片的url</td>\n<td>String</td>\n<td>无</td>\n<td>有</td>\n<td>是</td>\n</tr>\n<tr>\n<td>change</td>\n<td>关闭时可添加事件</td>\n<td>Function</td>\n<td>无</td>\n<td>无</td>\n<td>否</td>\n</tr>\n</tbody>\n</table></div></section>";

/***/ }

});