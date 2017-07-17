webpackJsonp([46],{

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(339);

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(340)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/v1.0.0-22.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(341)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/v1.0.0-22.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 340:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template><section><h2>KsNotice 通知中心</h2>
	// <blockquote>
	// <p>通知中心<br>
	// 作者: pkeros(张杰)<br>
	// 最后修改时间: 2017-04-10</p>
	// </blockquote>
	// <hr>
	// <h3>基础使用</h3>
	// <p><label for="type">类型：</label><select name="type" id="type" v-model="type"><option value="primary">默认 --- 主色调</option><option value="warn">警告 --- 警告色</option><option value="danger">危险 --- 危险色</option><option value="success">成功 --- 成功色</option><option value="info">信息 --- 信息色</option></select></p>
	// <p><label for="title">标题：</label><br>
	// <input type="text" id="title" v-model="title"></p>
	// <p><label for="title">内容：</label><br>
	// <textarea id="title" v-model="content"></textarea></p>
	// <p><label for="timeout">超时时间：</label><br>
	// <input type="number" id="timeout" v-model="timeout"><br>
	// <br><br>
	// <ks-button @click="postOneMsg2NoticeCenter">将消息投递到通知中心</ks-button></p>
	//
	// <pre class="ks-hljs"><code><span class="hljs-comment">//                 通知标题  通知内容 通知类型 自动销毁时间   关闭之后的回调</span>
	// <span class="hljs-comment">//                    V       V       V        V              V</span>
	// <span class="hljs-keyword">this</span>.$KsNotice.post(title, content, type,    delay, o =&gt; <span class="hljs-built_in">console</span>.log(o));
	// </code></pre>
	// <blockquote>
	// <p>回调函数中接受的 <code class="ks-code-inline">o</code> 对象是当前关闭信息的详细配置信息，具体内容如下:</p>
	// </blockquote>
	// <pre class="ks-hljs"><code>{
	//   <span class="hljs-attr">closeCb</span>: <span class="hljs-built_in">Function</span>,                  <span class="hljs-comment">// 关闭当前信息的回调函数，也就传入的回调函数</span>
	//   options: {                          <span class="hljs-comment">// 生成的配置对象</span>
	//     closeBtn: <span class="hljs-built_in">Boolean</span>,                <span class="hljs-comment">// 当前信息是否显示了关闭按钮</span>
	//     content: <span class="hljs-built_in">String</span>,                  <span class="hljs-comment">// 当前信息内容</span>
	//     delay: <span class="hljs-built_in">Number</span>,                    <span class="hljs-comment">// 当前信息关闭的延迟</span>
	//     hue: <span class="hljs-built_in">String</span>,                      <span class="hljs-comment">// 当前信息的色调，也就是类型</span>
	//     title: <span class="hljs-built_in">String</span>                     <span class="hljs-comment">// 当前信息的标题</span>
	//   },
	//   <span class="hljs-attr">_uid</span>: <span class="hljs-built_in">Number</span>                        <span class="hljs-comment">// 当前信息的 UID</span>
	// }
	// </code></pre>
	// <blockquote>
	// <p>当前不需要传入 delay 参数是该参数可以省去，该参数默认值为 <code class="ks-code-inline">4500</code>，如果不要传入 delay 参数那么 close 的回调可以提前。</p>
	// </blockquote>
	// <pre class="ks-hljs"><code><span class="hljs-comment">//                 通知标题  通知内容 通知类型  关闭之后的回调</span>
	// <span class="hljs-comment">//                    V       V       V          V</span>
	// <span class="hljs-keyword">this</span>.$KsNotice.post(title, content, type, o =&gt; <span class="hljs-built_in">console</span>.log(o));
	// </code></pre>
	// <h3>其他使用方式</h3>
	// <blockquote>
	// <p>noticeCenter 组件还支持通过类型快捷调用， KsNotice对象上含有 <code class="ks-code-inline">primary</code>, <code class="ks-code-inline">danger</code>, <code class="ks-code-inline">warn</code>, <code class="ks-code-inline">success</code>, <code class="ks-code-inline">info</code> 对应的方法。<br>
	// 同样样式 delay 参数和关闭的回调都可以不传，也可以传任意一个。</p>
	// </blockquote>
	// <pre class="ks-hljs"><code><span class="hljs-comment">//              类型 通知标题  通知内容 自动销毁时间   关闭之后的回调</span>
	// <span class="hljs-comment">//               V     V        V         V             V</span>
	// <span class="hljs-keyword">this</span>.$KsNotice.info(title, content,     delay, o =&gt; <span class="hljs-built_in">console</span>.log(o));
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
	  kscomponents: ['KsButton_v0', 'KsNotice_v1'],
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

/***/ 341:
/***/ function(module, exports) {

	module.exports = "<section><h2>KsNotice 通知中心</h2>\n<blockquote>\n<p>通知中心<br>\n作者: pkeros(张杰)<br>\n最后修改时间: 2017-04-10</p>\n</blockquote>\n<hr>\n<h3>基础使用</h3>\n<p><label for=\"type\">类型：</label><select name=\"type\" id=\"type\" v-model=\"type\"><option value=\"primary\">默认 --- 主色调</option><option value=\"warn\">警告 --- 警告色</option><option value=\"danger\">危险 --- 危险色</option><option value=\"success\">成功 --- 成功色</option><option value=\"info\">信息 --- 信息色</option></select></p>\n<p><label for=\"title\">标题：</label><br>\n<input type=\"text\" id=\"title\" v-model=\"title\"></p>\n<p><label for=\"title\">内容：</label><br>\n<textarea id=\"title\" v-model=\"content\"></textarea></p>\n<p><label for=\"timeout\">超时时间：</label><br>\n<input type=\"number\" id=\"timeout\" v-model=\"timeout\"><br>\n<br><br>\n<ks-button @click=\"postOneMsg2NoticeCenter\">将消息投递到通知中心</ks-button></p>\n\n<pre class=\"ks-hljs\"><code><span class=\"hljs-comment\">//                 通知标题  通知内容 通知类型 自动销毁时间   关闭之后的回调</span>\n<span class=\"hljs-comment\">//                    V       V       V        V              V</span>\n<span class=\"hljs-keyword\">this</span>.$KsNotice.post(title, content, type,    delay, o =&gt; <span class=\"hljs-built_in\">console</span>.log(o));\n</code></pre>\n<blockquote>\n<p>回调函数中接受的 <code class=\"ks-code-inline\">o</code> 对象是当前关闭信息的详细配置信息，具体内容如下:</p>\n</blockquote>\n<pre class=\"ks-hljs\"><code>{\n  <span class=\"hljs-attr\">closeCb</span>: <span class=\"hljs-built_in\">Function</span>,                  <span class=\"hljs-comment\">// 关闭当前信息的回调函数，也就传入的回调函数</span>\n  options: {                          <span class=\"hljs-comment\">// 生成的配置对象</span>\n    closeBtn: <span class=\"hljs-built_in\">Boolean</span>,                <span class=\"hljs-comment\">// 当前信息是否显示了关闭按钮</span>\n    content: <span class=\"hljs-built_in\">String</span>,                  <span class=\"hljs-comment\">// 当前信息内容</span>\n    delay: <span class=\"hljs-built_in\">Number</span>,                    <span class=\"hljs-comment\">// 当前信息关闭的延迟</span>\n    hue: <span class=\"hljs-built_in\">String</span>,                      <span class=\"hljs-comment\">// 当前信息的色调，也就是类型</span>\n    title: <span class=\"hljs-built_in\">String</span>                     <span class=\"hljs-comment\">// 当前信息的标题</span>\n  },\n  <span class=\"hljs-attr\">_uid</span>: <span class=\"hljs-built_in\">Number</span>                        <span class=\"hljs-comment\">// 当前信息的 UID</span>\n}\n</code></pre>\n<blockquote>\n<p>当前不需要传入 delay 参数是该参数可以省去，该参数默认值为 <code class=\"ks-code-inline\">4500</code>，如果不要传入 delay 参数那么 close 的回调可以提前。</p>\n</blockquote>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-comment\">//                 通知标题  通知内容 通知类型  关闭之后的回调</span>\n<span class=\"hljs-comment\">//                    V       V       V          V</span>\n<span class=\"hljs-keyword\">this</span>.$KsNotice.post(title, content, type, o =&gt; <span class=\"hljs-built_in\">console</span>.log(o));\n</code></pre>\n<h3>其他使用方式</h3>\n<blockquote>\n<p>noticeCenter 组件还支持通过类型快捷调用， KsNotice对象上含有 <code class=\"ks-code-inline\">primary</code>, <code class=\"ks-code-inline\">danger</code>, <code class=\"ks-code-inline\">warn</code>, <code class=\"ks-code-inline\">success</code>, <code class=\"ks-code-inline\">info</code> 对应的方法。<br>\n同样样式 delay 参数和关闭的回调都可以不传，也可以传任意一个。</p>\n</blockquote>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-comment\">//              类型 通知标题  通知内容 自动销毁时间   关闭之后的回调</span>\n<span class=\"hljs-comment\">//               V     V        V         V             V</span>\n<span class=\"hljs-keyword\">this</span>.$KsNotice.info(title, content,     delay, o =&gt; <span class=\"hljs-built_in\">console</span>.log(o));\n</code></pre>\n<h3>API</h3>\n<h4>KsModal / KsModalEntity</h4>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>双向（twoWay）</th>\n<th>是否必须</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>通知内容的标题</td>\n<td>param</td>\n<td>String</td>\n<td>-</td>\n<td>否</td>\n<td>-</td>\n<td><code class=\"ks-code-inline\">'title'</code></td>\n</tr>\n<tr>\n<td>content</td>\n<td>通知内容的主体</td>\n<td>param</td>\n<td>String</td>\n<td>-</td>\n<td>否</td>\n<td>-</td>\n<td><code class=\"ks-code-inline\">'content...'</code></td>\n</tr>\n<tr>\n<td>type</td>\n<td>通知内容的类型</td>\n<td>param</td>\n<td>String</td>\n<td>-</td>\n<td>否</td>\n<td><code class=\"ks-code-inline\">primary</code>, <code class=\"ks-code-inline\">danger</code>, <code class=\"ks-code-inline\">warn</code>, <code class=\"ks-code-inline\">success</code>, <code class=\"ks-code-inline\">info</code></td>\n<td><code class=\"ks-code-inline\">primary</code></td>\n</tr>\n<tr>\n<td>timeout</td>\n<td>通知消息销毁的时间</td>\n<td>param</td>\n<td>Number</td>\n<td>-</td>\n<td>否</td>\n<td>-</td>\n<td><code class=\"ks-code-inline\">4500</code></td>\n</tr>\n<tr>\n<td>closeCallback</td>\n<td>当前通知消息销毁时的回调</td>\n<td>param</td>\n<td>Function</td>\n<td>-</td>\n<td>否</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table></div></section>";

/***/ }

});