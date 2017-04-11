webpackJsonp([59],{

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
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/notice-center-17.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/notice-center-17.vue"
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
	// <template><section><h2>NoticeCenter 通知中心</h2>
	// <blockquote>
	// <p>通知中心</p>
	// </blockquote>
	// <hr>
	// <h3>基础使用</h3>
	// <p><label for="type">类型：</label><select name="type" id="type" v-model="type"><option value="primary">默认 --- 主色调</option><option value="warn">警告 --- 警告色</option><option value="danger">危险 --- 危险色</option><option value="success">成功 --- 成功色</option><option value="info">信息 --- 信息色</option></select></p>
	// <p><label for="title">标题：</label><br>
	// <input type="text" id="title" v-model="title"></p>
	// <p><label for="title">内容：</label><br>
	// <textarea id="title" v-model="content"></textarea></p>
	// <p><label for="timeout">超时时间：</label><br>
	// <input type="number" id="timeout" v-model="timeout"></p>
	// <br>
	// <ks-button @click="postOneMsg2NoticeCenter">将消息投递到通知中心</ks-button>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"type"</span>&gt;</span>类型：<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">select</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"type"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"type"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"type"</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"primary"</span>&gt;</span>默认 --- 主色调<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"warn"</span>&gt;</span>警告 --- 警告色<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"danger"</span>&gt;</span>危险 --- 危险色<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"success"</span>&gt;</span>成功 --- 成功色<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
	//   <span class="hljs-tag">&lt;<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"info"</span>&gt;</span>信息 --- 信息色<span class="hljs-tag">&lt;/<span class="hljs-name">option</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">select</span>&gt;</span>
	//
	// <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"title"</span>&gt;</span>标题：<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"title"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"title"</span>&gt;</span>
	//
	// <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"title"</span>&gt;</span>内容：<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">textarea</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"title"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"content"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">textarea</span>&gt;</span>
	//
	// <span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"timeout"</span>&gt;</span>超时时间：<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"number"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"timeout"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"timeout"</span>&gt;</span>
	//
	// <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>
	// <span class="hljs-tag">&lt;<span class="hljs-name">ks-button</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"postOneMsg2NoticeCenter"</span>&gt;</span>将消息投递到通知中心<span class="hljs-tag">&lt;/<span class="hljs-name">ks-button</span>&gt;</span>
	// </code></pre>
	// <h3>脚本</h3>
	//
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
	//   <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
	//     data () {
	//       <span class="hljs-keyword">return</span> { 
	//         <span class="hljs-attr">title</span>: <span class="hljs-string">'title'</span>,
	//         <span class="hljs-attr">content</span>: <span class="hljs-string">'content...'</span>,
	//         <span class="hljs-attr">type</span>: <span class="hljs-string">'primary'</span>,
	//         <span class="hljs-attr">timeout</span>: <span class="hljs-number">4500</span>
	//       }
	//     },
	//
	//     <span class="hljs-attr">methods</span>: {
	//       postOneMsg2NoticeCenter () {
	//         <span class="hljs-comment">//                    通知标题     通知内容      通知类型        自动销毁时间          关闭之后的回调</span>
	//         <span class="hljs-comment">//                       V           V            V              V                    V</span>
	//         <span class="hljs-keyword">this</span>.$KsNotice.post(<span class="hljs-keyword">this</span>.title, <span class="hljs-keyword">this</span>.content, <span class="hljs-keyword">this</span>.type, <span class="hljs-keyword">this</span>.timeout &lt;&lt; <span class="hljs-number">0</span>, (msg) =&gt; <span class="hljs-built_in">console</span>.log(msg));
	//       }
	//     }
	//   }
	// </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
	// </code></pre>
	// <h3>API</h3>
	// <h4>KsModal / KsModalEntity</h4>
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
	// <td>title</td>
	// <td>通知内容的标题</td>
	// <td>param</td>
	// <td>String</td>
	// <td>-</td>
	// <td>否</td>
	// <td>-</td>
	// <td><code class="ks-code-inline">'title'</code></td>
	// </tr>
	// <tr>
	// <td>content</td>
	// <td>通知内容的主体</td>
	// <td>param</td>
	// <td>String</td>
	// <td>-</td>
	// <td>否</td>
	// <td>-</td>
	// <td><code class="ks-code-inline">'content...'</code></td>
	// </tr>
	// <tr>
	// <td>type</td>
	// <td>通知内容的类型</td>
	// <td>param</td>
	// <td>String</td>
	// <td>-</td>
	// <td>否</td>
	// <td><code class="ks-code-inline">primary</code>, <code class="ks-code-inline">danger</code>, <code class="ks-code-inline">warn</code>, <code class="ks-code-inline">success</code>, <code class="ks-code-inline">info</code></td>
	// <td><code class="ks-code-inline">primary</code></td>
	// </tr>
	// <tr>
	// <td>timeout</td>
	// <td>通知消息销毁的时间</td>
	// <td>param</td>
	// <td>Number</td>
	// <td>-</td>
	// <td>否</td>
	// <td>-</td>
	// <td><code class="ks-code-inline">4500</code></td>
	// </tr>
	// <tr>
	// <td>closeCallback</td>
	// <td>当前通知消息销毁时的回调</td>
	// <td>param</td>
	// <td>Function</td>
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
	      title: 'title',
	      content: 'content...',
	      type: 'primary',
	      timeout: 4500
	    };
	  },


	  methods: {
	    postOneMsg2NoticeCenter: function postOneMsg2NoticeCenter() {
	      this.$KsNotice.post(this.title, this.content, this.type, this.timeout << 0, function (msg) {
	        return console.log(msg);
	      });
	    }
	  }
	};
	// </script>

/***/ },

/***/ 167:
/***/ function(module, exports) {

	module.exports = "<section><h2>NoticeCenter 通知中心</h2>\n<blockquote>\n<p>通知中心</p>\n</blockquote>\n<hr>\n<h3>基础使用</h3>\n<p><label for=\"type\">类型：</label><select name=\"type\" id=\"type\" v-model=\"type\"><option value=\"primary\">默认 --- 主色调</option><option value=\"warn\">警告 --- 警告色</option><option value=\"danger\">危险 --- 危险色</option><option value=\"success\">成功 --- 成功色</option><option value=\"info\">信息 --- 信息色</option></select></p>\n<p><label for=\"title\">标题：</label><br>\n<input type=\"text\" id=\"title\" v-model=\"title\"></p>\n<p><label for=\"title\">内容：</label><br>\n<textarea id=\"title\" v-model=\"content\"></textarea></p>\n<p><label for=\"timeout\">超时时间：</label><br>\n<input type=\"number\" id=\"timeout\" v-model=\"timeout\"></p>\n<br>\n<ks-button @click=\"postOneMsg2NoticeCenter\">将消息投递到通知中心</ks-button>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">for</span>=<span class=\"hljs-string\">\"type\"</span>&gt;</span>类型：<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">select</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"type\"</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"type\"</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"type\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"primary\"</span>&gt;</span>默认 --- 主色调<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">option</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"warn\"</span>&gt;</span>警告 --- 警告色<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">option</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"danger\"</span>&gt;</span>危险 --- 危险色<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">option</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"success\"</span>&gt;</span>成功 --- 成功色<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">option</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">option</span> <span class=\"hljs-attr\">value</span>=<span class=\"hljs-string\">\"info\"</span>&gt;</span>信息 --- 信息色<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">option</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">select</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">for</span>=<span class=\"hljs-string\">\"title\"</span>&gt;</span>标题：<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text\"</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"title\"</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"title\"</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">for</span>=<span class=\"hljs-string\">\"title\"</span>&gt;</span>内容：<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">textarea</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"title\"</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"content\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">textarea</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">label</span> <span class=\"hljs-attr\">for</span>=<span class=\"hljs-string\">\"timeout\"</span>&gt;</span>超时时间：<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">label</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">input</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"number\"</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"timeout\"</span> <span class=\"hljs-attr\">v-model</span>=<span class=\"hljs-string\">\"timeout\"</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-button</span> <span class=\"hljs-attr\">@click</span>=<span class=\"hljs-string\">\"postOneMsg2NoticeCenter\"</span>&gt;</span>将消息投递到通知中心<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-button</span>&gt;</span>\n</code></pre>\n<h3>脚本</h3>\n\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span>{\n    data () {\n      <span class=\"hljs-keyword\">return</span> { \n        <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'title'</span>,\n        <span class=\"hljs-attr\">content</span>: <span class=\"hljs-string\">'content...'</span>,\n        <span class=\"hljs-attr\">type</span>: <span class=\"hljs-string\">'primary'</span>,\n        <span class=\"hljs-attr\">timeout</span>: <span class=\"hljs-number\">4500</span>\n      }\n    },\n    \n    <span class=\"hljs-attr\">methods</span>: {\n      postOneMsg2NoticeCenter () {\n        <span class=\"hljs-comment\">//                    通知标题     通知内容      通知类型        自动销毁时间          关闭之后的回调</span>\n        <span class=\"hljs-comment\">//                       V           V            V              V                    V</span>\n        <span class=\"hljs-keyword\">this</span>.$KsNotice.post(<span class=\"hljs-keyword\">this</span>.title, <span class=\"hljs-keyword\">this</span>.content, <span class=\"hljs-keyword\">this</span>.type, <span class=\"hljs-keyword\">this</span>.timeout &lt;&lt; <span class=\"hljs-number\">0</span>, (msg) =&gt; <span class=\"hljs-built_in\">console</span>.log(msg));\n      }\n    }\n  }\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n</code></pre>\n<h3>API</h3>\n<h4>KsModal / KsModalEntity</h4>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>双向（twoWay）</th>\n<th>是否必须</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>通知内容的标题</td>\n<td>param</td>\n<td>String</td>\n<td>-</td>\n<td>否</td>\n<td>-</td>\n<td><code class=\"ks-code-inline\">'title'</code></td>\n</tr>\n<tr>\n<td>content</td>\n<td>通知内容的主体</td>\n<td>param</td>\n<td>String</td>\n<td>-</td>\n<td>否</td>\n<td>-</td>\n<td><code class=\"ks-code-inline\">'content...'</code></td>\n</tr>\n<tr>\n<td>type</td>\n<td>通知内容的类型</td>\n<td>param</td>\n<td>String</td>\n<td>-</td>\n<td>否</td>\n<td><code class=\"ks-code-inline\">primary</code>, <code class=\"ks-code-inline\">danger</code>, <code class=\"ks-code-inline\">warn</code>, <code class=\"ks-code-inline\">success</code>, <code class=\"ks-code-inline\">info</code></td>\n<td><code class=\"ks-code-inline\">primary</code></td>\n</tr>\n<tr>\n<td>timeout</td>\n<td>通知消息销毁的时间</td>\n<td>param</td>\n<td>Number</td>\n<td>-</td>\n<td>否</td>\n<td>-</td>\n<td><code class=\"ks-code-inline\">4500</code></td>\n</tr>\n<tr>\n<td>closeCallback</td>\n<td>当前通知消息销毁时的回调</td>\n<td>param</td>\n<td>Function</td>\n<td>-</td>\n<td>否</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table></div></section>";

/***/ }

});