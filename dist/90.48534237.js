webpackJsonp([90],{

/***/ 847:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(848);

/***/ },

/***/ 848:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(849)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/ksimg-46.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(850)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/ksimg-46.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 849:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template><section><h2>ksImgs</h2>
	// <blockquote>
	// <p>Author:王明<br>
	// 常用的多图预览轮播组件</p>
	// </blockquote>
	// <hr>
	// <h3>基础使用</h3>
	// <br>
	// <img v-on:click="put(url,$index)" :src="i" v-for="i in url" style="width: 50px;height: 50px;cursor: pointer;">
	// <p><ks-imgs v-bind:show.sync="imageShow" v-bind:src="src" v-bind:pindex="index"></ks-imgs></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">v-on:click</span>=<span class="hljs-string">"put(url,$index)"</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">"i"</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">'i in url'</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 50px;height: 50px;cursor: pointer;"</span> &gt;</span>
	// 点击小图片 呼出 KsImgs 组件
	//
	// </code></pre>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-imgs</span> 
	//       <span class="hljs-attr">v-bind:show.sync</span>=<span class="hljs-string">"imageShow"</span>  
	//       <span class="hljs-attr">v-bind:src</span>=<span class="hljs-string">"src"</span>  
	//       <span class="hljs-attr">v-bind:pindex</span>=<span class="hljs-string">"index"</span>      
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
	//             }        }
	//     }
	// &lt;<span class="hljs-regexp">/script&gt;
	// </span></code></pre>
	// <h3>查看图片后关闭时候促发回调</h3>
	// <br>
	// <img v-on:click="put2(url2,$index)" :src="i" v-for="i in url2" style="width: 50px;height: 50px;cursor: pointer;">
	// <p><ks-imgs v-bind:show="imageShow2" v-bind:src="src" v-bind:pindex="index" @close="close"></ks-imgs></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">v-on:click</span>=<span class="hljs-string">"put2(url,$index)"</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">"i"</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">'i in url2'</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 50px;height: 50px;cursor: pointer;"</span> &gt;</span>
	// 点击小图片 呼出 KsImgs 组件
	//
	// </code></pre>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-imgs</span> 
	//       <span class="hljs-attr">v-bind:show</span>=<span class="hljs-string">"imageShow2"</span>  
	//       <span class="hljs-attr">v-bind:src</span>=<span class="hljs-string">"src"</span>  
	//       <span class="hljs-attr">v-bind:pindex</span>=<span class="hljs-string">"index"</span>
	//       <span class="hljs-attr">@close</span>=<span class="hljs-string">'close'</span> 
	//       &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-imgs</span>&gt;</span>
	// </code></pre>
	// <h4>脚本</h4>
	// <pre class="ks-hljs"><code>&lt;script&gt;
	//     <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
	//         data () {
	//             <span class="hljs-keyword">return</span> {
	//                 <span class="hljs-attr">imageShow2</span>:<span class="hljs-literal">false</span>,
	//                 <span class="hljs-attr">index</span>:<span class="hljs-number">0</span>,
	//                 <span class="hljs-attr">src</span>:[],
	//                 <span class="hljs-attr">url2</span>:[<span class="hljs-string">"http://img02.tooopen.com/images/20140504/sy_60294738471.jpg"</span>,<span class="hljs-string">'http://joymepic.joyme.com/article/uploads/20172/211490080221647281.jpeg'</span>],
	//             }
	//         },
	//         <span class="hljs-attr">methods</span>: {
	//             put2(src,index){
	//                 <span class="hljs-keyword">this</span>.src=src;
	//                 <span class="hljs-keyword">this</span>.index=index;
	//                 <span class="hljs-keyword">this</span>.imageShow2=<span class="hljs-literal">true</span>;
	//             },            
	//             close(){
	//                 <span class="hljs-keyword">this</span>.imageShow=<span class="hljs-literal">false</span>;
	//                 alert(<span class="hljs-string">'回调'</span>)
	//                 添加操作
	//                 ............
	//             }
	//        }
	//     }
	// &lt;<span class="hljs-regexp">/script&gt;
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
	// <td>否</td>
	// </tr>
	// <tr>
	// <td>load</td>
	// <td>是否需要下载功能</td>
	// <td>Boolean</td>
	// <td>true, false</td>
	// <td>true</td>
	// <td>否</td>
	// </tr>
	// <tr>
	// <td>@close</td>
	// <td>关闭时触发事件</td>
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
	    data: function data() {
	        return {
	            imageShow: false,
	            imageShow2: false,
	            index: 0,
	            src: [],
	            url2: ["http://img02.tooopen.com/images/20140504/sy_60294738471.jpg", 'http://joymepic.joyme.com/article/uploads/20172/211490080221647281.jpeg'],
	            url: ["http://img02.tooopen.com/images/20140504/sy_60294738471.jpg", 'http://joymepic.joyme.com/article/uploads/20172/211490080221647281.jpeg', 'http://www.40407.com/uploads/allimg/170309/1817755_170309170502_1.jpg', 'http://pic7.nipic.com/20100522/1263764_002013845527_2.jpg']
	        };
	    },

	    methods: {
	        put: function put(src, index) {
	            this.src = src;
	            this.index = index;
	            this.imageShow = true;
	        },
	        put2: function put2(src, index) {
	            this.src = src;
	            this.index = index;
	            this.imageShow2 = true;
	        },
	        close: function close() {
	            this.imageShow2 = false;
	            alert('回调');
	        }
	    }
	};
	// </script>

/***/ },

/***/ 850:
/***/ function(module, exports) {

	module.exports = "<section><h2>ksImgs</h2>\n<blockquote>\n<p>Author:王明<br>\n常用的多图预览轮播组件</p>\n</blockquote>\n<hr>\n<h3>基础使用</h3>\n<br>\n<img v-on:click=\"put(url,$index)\" :src=\"i\" v-for=\"i in url\" style=\"width: 50px;height: 50px;cursor: pointer;\">\n<p><ks-imgs v-bind:show.sync=\"imageShow\" v-bind:src=\"src\" v-bind:pindex=\"index\"></ks-imgs></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">img</span> <span class=\"hljs-attr\">v-on:click</span>=<span class=\"hljs-string\">\"put(url,$index)\"</span> <span class=\"hljs-attr\">:src</span>=<span class=\"hljs-string\">\"i\"</span> <span class=\"hljs-attr\">v-for</span>=<span class=\"hljs-string\">'i in url'</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"width: 50px;height: 50px;cursor: pointer;\"</span> &gt;</span>\n点击小图片 呼出 KsImgs 组件\n\n</code></pre>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-imgs</span> \n      <span class=\"hljs-attr\">v-bind:show.sync</span>=<span class=\"hljs-string\">\"imageShow\"</span>  \n      <span class=\"hljs-attr\">v-bind:src</span>=<span class=\"hljs-string\">\"src\"</span>  \n      <span class=\"hljs-attr\">v-bind:pindex</span>=<span class=\"hljs-string\">\"index\"</span>      \n      &gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-imgs</span>&gt;</span>\n</code></pre>\n<h4>脚本</h4>\n<pre class=\"ks-hljs\"><code>&lt;script&gt;\n    <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span>{\n        data () {\n            <span class=\"hljs-keyword\">return</span> {\n                <span class=\"hljs-attr\">imageShow</span>:<span class=\"hljs-literal\">false</span>,\n                <span class=\"hljs-attr\">index</span>:<span class=\"hljs-number\">0</span>,\n                <span class=\"hljs-attr\">src</span>:[],\n                <span class=\"hljs-attr\">url</span>:[<span class=\"hljs-string\">\"http://img02.tooopen.com/images/20140504/sy_60294738471.jpg\"</span>,<span class=\"hljs-string\">'http://joymepic.joyme.com/article/uploads/20172/211490080221647281.jpeg'</span>,<span class=\"hljs-string\">'http://www.40407.com/uploads/allimg/170309/1817755_170309170502_1.jpg'</span>,<span class=\"hljs-string\">'http://pic7.nipic.com/20100522/1263764_002013845527_2.jpg'</span>]\n            }\n        },\n        <span class=\"hljs-attr\">methods</span>: {\n            put(src,index){\n                <span class=\"hljs-keyword\">this</span>.src=src;\n                <span class=\"hljs-keyword\">this</span>.index=index;\n                <span class=\"hljs-keyword\">this</span>.imageShow=<span class=\"hljs-literal\">true</span>;\n            }        }\n    }\n&lt;<span class=\"hljs-regexp\">/script&gt;\n</span></code></pre>\n<h3>查看图片后关闭时候促发回调</h3>\n<br>\n<img v-on:click=\"put2(url2,$index)\" :src=\"i\" v-for=\"i in url2\" style=\"width: 50px;height: 50px;cursor: pointer;\">\n<p><ks-imgs v-bind:show=\"imageShow2\" v-bind:src=\"src\" v-bind:pindex=\"index\" @close=\"close\"></ks-imgs></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">img</span> <span class=\"hljs-attr\">v-on:click</span>=<span class=\"hljs-string\">\"put2(url,$index)\"</span> <span class=\"hljs-attr\">:src</span>=<span class=\"hljs-string\">\"i\"</span> <span class=\"hljs-attr\">v-for</span>=<span class=\"hljs-string\">'i in url2'</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"width: 50px;height: 50px;cursor: pointer;\"</span> &gt;</span>\n点击小图片 呼出 KsImgs 组件\n\n</code></pre>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-imgs</span> \n      <span class=\"hljs-attr\">v-bind:show</span>=<span class=\"hljs-string\">\"imageShow2\"</span>  \n      <span class=\"hljs-attr\">v-bind:src</span>=<span class=\"hljs-string\">\"src\"</span>  \n      <span class=\"hljs-attr\">v-bind:pindex</span>=<span class=\"hljs-string\">\"index\"</span>\n      <span class=\"hljs-attr\">@close</span>=<span class=\"hljs-string\">'close'</span> \n      &gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-imgs</span>&gt;</span>\n</code></pre>\n<h4>脚本</h4>\n<pre class=\"ks-hljs\"><code>&lt;script&gt;\n    <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span>{\n        data () {\n            <span class=\"hljs-keyword\">return</span> {\n                <span class=\"hljs-attr\">imageShow2</span>:<span class=\"hljs-literal\">false</span>,\n                <span class=\"hljs-attr\">index</span>:<span class=\"hljs-number\">0</span>,\n                <span class=\"hljs-attr\">src</span>:[],\n                <span class=\"hljs-attr\">url2</span>:[<span class=\"hljs-string\">\"http://img02.tooopen.com/images/20140504/sy_60294738471.jpg\"</span>,<span class=\"hljs-string\">'http://joymepic.joyme.com/article/uploads/20172/211490080221647281.jpeg'</span>],\n            }\n        },\n        <span class=\"hljs-attr\">methods</span>: {\n            put2(src,index){\n                <span class=\"hljs-keyword\">this</span>.src=src;\n                <span class=\"hljs-keyword\">this</span>.index=index;\n                <span class=\"hljs-keyword\">this</span>.imageShow2=<span class=\"hljs-literal\">true</span>;\n            },            \n            close(){\n                <span class=\"hljs-keyword\">this</span>.imageShow=<span class=\"hljs-literal\">false</span>;\n                alert(<span class=\"hljs-string\">'回调'</span>)\n                添加操作\n                ............\n            }\n       }\n    }\n&lt;<span class=\"hljs-regexp\">/script&gt;\n</span></code></pre>\n<h3>API</h3>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>可选值</th>\n<th>默认值</th>\n<th>是否必须</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>show</td>\n<td>用于是否显示查看图片组件</td>\n<td>Boolean</td>\n<td>true, false</td>\n<td>false</td>\n<td>是</td>\n</tr>\n<tr>\n<td>src</td>\n<td>显示图片的url数组</td>\n<td>Array</td>\n<td>无</td>\n<td>无</td>\n<td>是</td>\n</tr>\n<tr>\n<td>index</td>\n<td>当前要显示的图片的索引</td>\n<td>Number</td>\n<td>无</td>\n<td>0</td>\n<td>否</td>\n</tr>\n<tr>\n<td>load</td>\n<td>是否需要下载功能</td>\n<td>Boolean</td>\n<td>true, false</td>\n<td>true</td>\n<td>否</td>\n</tr>\n<tr>\n<td>@close</td>\n<td>关闭时触发事件</td>\n<td>function</td>\n<td>无</td>\n<td>无</td>\n<td>否</td>\n</tr>\n</tbody>\n</table></div><br>\n</section>";

/***/ }

});