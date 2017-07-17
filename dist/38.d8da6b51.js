webpackJsonp([38],{

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(285);

/***/ },

/***/ 285:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(286)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/v1.0.1-17.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(287)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/v1.0.1-17.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 286:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template><section><h2>ksImage</h2>
	// <blockquote>
	// <p>常用的单图片显示组件</p>
	// </blockquote>
	// <hr>
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
	// </table></div><hr>
	// <h2>ksImgs</h2>
	// <blockquote>
	// <p>Author:王明<br>
	// 常用的多图预览轮播组件<br>
	// 最后修改时间2017-06-27</p>
	// </blockquote>
	// <hr>
	// <h3>基础使用</h3>
	// <blockquote>
	// <p>打开方式：通过事件绑定调用出来<br>
	// 关闭方式：右上角x或者esc按键<br>
	// 下载图片 load 通过接口下载图片<br>
	// <br><br>
	// <img v-on:click="put(url,$index)" :src="i" v-for="i in url" style="width: 50px;height: 50px;cursor: pointer;"></p>
	// </blockquote>
	// <p><ks-imgs v-bind:show.sync="imageShow3" v-bind:src="src" v-bind:pindex="index" v-bind:isload="true" v-on:close="guanbi" v-on:load="load"></ks-imgs></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">v-on:click</span>=<span class="hljs-string">"put(url,$index)"</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">"i"</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">'i in url'</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 50px;height: 50px;cursor: pointer;"</span> &gt;</span>
	// 点击小图片 呼出 KsImgs 组件
	//
	// </code></pre>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-imgs</span> 
	//       <span class="hljs-attr">v-bind:show.sync</span>=<span class="hljs-string">"imageShow"</span>  
	//       <span class="hljs-attr">v-bind:src</span>=<span class="hljs-string">"src"</span>  
	//       <span class="hljs-attr">v-bind:pindex</span>=<span class="hljs-string">"index"</span>
	//       <span class="hljs-attr">v-bind:isload</span>=<span class="hljs-string">'true'</span>
	//       <span class="hljs-attr">v-on:close</span>=<span class="hljs-string">"guanbi"</span>
	//       <span class="hljs-attr">v-on:load</span>=<span class="hljs-string">"load"</span>    
	//       &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-imgs</span>&gt;</span>
	// </code></pre>
	// <h4>脚本</h4>
	// <pre class="ks-hljs"><code>&lt;script&gt;
	//     <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
	//         data () {
	//             <span class="hljs-keyword">return</span> {
	//                 <span class="hljs-attr">imageShow</span>:<span class="hljs-literal">false</span>,
	//                 <span class="hljs-attr">index</span>:<span class="hljs-number">0</span>,
	//                 <span class="hljs-attr">src</span>:[],
	//                 <span class="hljs-attr">url</span>:[<span class="hljs-string">"http://img02.tooopen.com/images/20140504/sy_60294738471.jpg"</span>,<span class="hljs-string">'http://joymepic.joyme.com/article/uploads/20172/211490080221647281.jpeg'</span>,<span class="hljs-string">'http://www.40407.com/uploads/allimg/170309/1817755_170309170502_1.jpg'</span>,<span class="hljs-string">'http://pic7.nipic.com/20100522/1263764_002013845527_2.jpg'</span>]
	//             }
	//         },
	//         <span class="hljs-attr">methods</span>: {
	//             put(src,index){
	//                 <span class="hljs-keyword">this</span>.src=src;
	//                 <span class="hljs-keyword">this</span>.index=index;
	//                 <span class="hljs-keyword">this</span>.imageShow=<span class="hljs-literal">true</span>;
	//             },
	//             guanbi(){
	//                 alert(<span class="hljs-string">'关闭了'</span>)
	//             }, 
	//             load(){
	//                 alert(<span class="hljs-string">'下载图片'</span>)
	//             }                  
	//         }
	//     }
	// &lt;<span class="hljs-regexp">/script&gt;
	//
	// </span></code></pre>
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
	// <td>src</td>
	// <td>显示图片的url数组</td>
	// <td>Array</td>
	// <td>无</td>
	// <td>无</td>
	// <td>是</td>
	// </tr>
	// <tr>
	// <td>index</td>
	// <td>当前要显示的图片的索引</td>
	// <td>Number</td>
	// <td>无</td>
	// <td>0</td>
	// <td>是</td>
	// </tr>
	// <tr>
	// <td>isload</td>
	// <td>是否需要下载功能</td>
	// <td>Boolean</td>
	// <td>true, false</td>
	// <td>true</td>
	// <td>否</td>
	// </tr>
	// <tr>
	// <td>v-on:close</td>
	// <td>关闭时触发事件</td>
	// <td>function</td>
	// <td>无</td>
	// <td>无</td>
	// <td>否</td>
	// </tr>
	// <tr>
	// <td>v-on:load</td>
	// <td>下载时触发事件</td>
	// <td>function</td>
	// <td>无</td>
	// <td>无</td>
	// <td>否</td>
	// </tr>
	// </tbody>
	// </table></div><br>
	// </section></template>
	//
	// <script>
	exports.default = {
	    kscomponents: ['KsImage_v1', 'KsButton_v0'],
	    data: function data() {
	        return {
	            imageShow1: false,
	            imageShow2: false,
	            src: [],
	            index: 0,
	            imageShow3: false,
	            imgUrl: "http://img02.tooopen.com/images/20140504/sy_60294738471.jpg",
	            url: ["http://img02.tooopen.com/images/20140504/sy_60294738471.jpg", 'http://joymepic.joyme.com/article/uploads/20172/211490080221647281.jpeg', 'http://www.40407.com/uploads/allimg/170309/1817755_170309170502_1.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498554341660&di=4334453e3947ad93b1e56452cf3dc674&imgtype=0&src=http%3A%2F%2Fimg.sj33.cn%2Fuploads%2Fallimg%2F201302%2F1-130201105055.jpg']
	        };
	    },

	    methods: {
	        put: function put(src, index) {
	            this.src = src;
	            this.index = index;
	            this.imageShow3 = true;
	        },
	        guanbi: function guanbi() {
	            alert('关闭了');
	        },
	        load: function load() {
	            alert('下载图片了');
	        },
	        close: function close(staut) {
	            this.imageShow2 = staut;
	            console.log('close', staut);
	        }
	    }
	};
	// </script>

/***/ },

/***/ 287:
/***/ function(module, exports) {

	module.exports = "<section><h2>ksImage</h2>\n<blockquote>\n<p>常用的单图片显示组件</p>\n</blockquote>\n<hr>\n<br>\n<p><ks-button @click=\"imageShow2 = true\">呼出 ksImage 组件</ks-button></p>\n<p><ks-image v-bind:show=\"imageShow2\" v-bind:url=\"imgUrl\" v-on:change=\"close\"></ks-image></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-button</span> <span class=\"hljs-attr\">@click</span>=<span class=\"hljs-string\">\"imageShow = true\"</span>&gt;</span>呼出 ksImage 组件<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-button</span>&gt;</span>\n</code></pre>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-image</span> \n    <span class=\"hljs-attr\">v-bind:show</span>=<span class=\"hljs-string\">\"imageShow\"</span> \n    <span class=\"hljs-attr\">v-bind:url</span>=<span class=\"hljs-string\">\"imgUrl\"</span>\n    <span class=\"hljs-attr\">v-on:change</span>=<span class=\"hljs-string\">\"close\"</span>\n    &gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-image</span>&gt;</span>\n</code></pre>\n<pre class=\"ks-hljs\"><code>\n    <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span>{\n        data () {\n            <span class=\"hljs-keyword\">return</span> {\n                <span class=\"hljs-attr\">imageShow</span>:<span class=\"hljs-literal\">false</span>,\n                <span class=\"hljs-attr\">imgUrl</span>:<span class=\"hljs-string\">\" \"</span>\n            }\n        },\n        <span class=\"hljs-attr\">methods</span>: {\n            close(staut){\n                <span class=\"hljs-keyword\">this</span>.imageShow2 = staut\n                ...... \n                添加操作\n                ......\n            }\n        }\n    }\n\n</code></pre>\n<h3>API</h3>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>可选值</th>\n<th>默认值</th>\n<th>是否必须</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>show</td>\n<td>用于是否显示查看图片组件</td>\n<td>Boolean</td>\n<td>true, false</td>\n<td>false</td>\n<td>是</td>\n</tr>\n<tr>\n<td>url</td>\n<td>显示图片的url</td>\n<td>String</td>\n<td>无</td>\n<td>有</td>\n<td>是</td>\n</tr>\n<tr>\n<td>change</td>\n<td>关闭时可添加事件</td>\n<td>Function</td>\n<td>无</td>\n<td>无</td>\n<td>否</td>\n</tr>\n</tbody>\n</table></div><hr>\n<h2>ksImgs</h2>\n<blockquote>\n<p>Author:王明<br>\n常用的多图预览轮播组件<br>\n最后修改时间2017-06-27</p>\n</blockquote>\n<hr>\n<h3>基础使用</h3>\n<blockquote>\n<p>打开方式：通过事件绑定调用出来<br>\n关闭方式：右上角x或者esc按键<br>\n下载图片 load 通过接口下载图片<br>\n<br><br>\n<img v-on:click=\"put(url,$index)\" :src=\"i\" v-for=\"i in url\" style=\"width: 50px;height: 50px;cursor: pointer;\"></p>\n</blockquote>\n<p><ks-imgs v-bind:show.sync=\"imageShow3\" v-bind:src=\"src\" v-bind:pindex=\"index\" v-bind:isload=\"true\" v-on:close=\"guanbi\" v-on:load=\"load\"></ks-imgs></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">img</span> <span class=\"hljs-attr\">v-on:click</span>=<span class=\"hljs-string\">\"put(url,$index)\"</span> <span class=\"hljs-attr\">:src</span>=<span class=\"hljs-string\">\"i\"</span> <span class=\"hljs-attr\">v-for</span>=<span class=\"hljs-string\">'i in url'</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"width: 50px;height: 50px;cursor: pointer;\"</span> &gt;</span>\n点击小图片 呼出 KsImgs 组件\n\n</code></pre>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-imgs</span> \n      <span class=\"hljs-attr\">v-bind:show.sync</span>=<span class=\"hljs-string\">\"imageShow\"</span>  \n      <span class=\"hljs-attr\">v-bind:src</span>=<span class=\"hljs-string\">\"src\"</span>  \n      <span class=\"hljs-attr\">v-bind:pindex</span>=<span class=\"hljs-string\">\"index\"</span>\n      <span class=\"hljs-attr\">v-bind:isload</span>=<span class=\"hljs-string\">'true'</span>\n      <span class=\"hljs-attr\">v-on:close</span>=<span class=\"hljs-string\">\"guanbi\"</span>\n      <span class=\"hljs-attr\">v-on:load</span>=<span class=\"hljs-string\">\"load\"</span>    \n      &gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-imgs</span>&gt;</span>\n</code></pre>\n<h4>脚本</h4>\n<pre class=\"ks-hljs\"><code>&lt;script&gt;\n    <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span>{\n        data () {\n            <span class=\"hljs-keyword\">return</span> {\n                <span class=\"hljs-attr\">imageShow</span>:<span class=\"hljs-literal\">false</span>,\n                <span class=\"hljs-attr\">index</span>:<span class=\"hljs-number\">0</span>,\n                <span class=\"hljs-attr\">src</span>:[],\n                <span class=\"hljs-attr\">url</span>:[<span class=\"hljs-string\">\"http://img02.tooopen.com/images/20140504/sy_60294738471.jpg\"</span>,<span class=\"hljs-string\">'http://joymepic.joyme.com/article/uploads/20172/211490080221647281.jpeg'</span>,<span class=\"hljs-string\">'http://www.40407.com/uploads/allimg/170309/1817755_170309170502_1.jpg'</span>,<span class=\"hljs-string\">'http://pic7.nipic.com/20100522/1263764_002013845527_2.jpg'</span>]\n            }\n        },\n        <span class=\"hljs-attr\">methods</span>: {\n            put(src,index){\n                <span class=\"hljs-keyword\">this</span>.src=src;\n                <span class=\"hljs-keyword\">this</span>.index=index;\n                <span class=\"hljs-keyword\">this</span>.imageShow=<span class=\"hljs-literal\">true</span>;\n            },\n            guanbi(){\n                alert(<span class=\"hljs-string\">'关闭了'</span>)\n            }, \n            load(){\n                alert(<span class=\"hljs-string\">'下载图片'</span>)\n            }                  \n        }\n    }\n&lt;<span class=\"hljs-regexp\">/script&gt;\n\n</span></code></pre>\n<h3>API</h3>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>可选值</th>\n<th>默认值</th>\n<th>是否必须</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>show</td>\n<td>用于是否显示查看图片组件</td>\n<td>Boolean</td>\n<td>true, false</td>\n<td>false</td>\n<td>是</td>\n</tr>\n<tr>\n<td>src</td>\n<td>显示图片的url数组</td>\n<td>Array</td>\n<td>无</td>\n<td>无</td>\n<td>是</td>\n</tr>\n<tr>\n<td>index</td>\n<td>当前要显示的图片的索引</td>\n<td>Number</td>\n<td>无</td>\n<td>0</td>\n<td>是</td>\n</tr>\n<tr>\n<td>isload</td>\n<td>是否需要下载功能</td>\n<td>Boolean</td>\n<td>true, false</td>\n<td>true</td>\n<td>否</td>\n</tr>\n<tr>\n<td>v-on:close</td>\n<td>关闭时触发事件</td>\n<td>function</td>\n<td>无</td>\n<td>无</td>\n<td>否</td>\n</tr>\n<tr>\n<td>v-on:load</td>\n<td>下载时触发事件</td>\n<td>function</td>\n<td>无</td>\n<td>无</td>\n<td>否</td>\n</tr>\n</tbody>\n</table></div><br>\n</section>";

/***/ }

});