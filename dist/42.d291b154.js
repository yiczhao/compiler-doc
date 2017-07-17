webpackJsonp([42],{

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(320);

/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(321)
	__vue_script__ = __webpack_require__(323)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/v0.1.0-18.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(324)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/v0.1.0-18.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(322);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-rewriter.js!../../sass-loader/index.js!../../vue-loader/lib/selector.js?type=style&index=0!./v0.1.0-18.vue", function() {
				var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-rewriter.js!../../sass-loader/index.js!../../vue-loader/lib/selector.js?type=style&index=0!./v0.1.0-18.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.table-wrapper {\n  width: 550px;\n  border: 1px solid #e5e5e5;\n  position: relative; }\n  .table-wrapper .table-hidden {\n    visibility: hidden; }\n  .table-wrapper .table-fixed-left {\n    box-shadow: 2px 0 6px -2px rgba(0, 0, 0, 0.2);\n    position: absolute;\n    left: 0;\n    top: 0;\n    overflow: hidden; }\n  .table-wrapper .table-fixed-right {\n    box-shadow: -2px 0 6px -2px rgba(0, 0, 0, 0.2);\n    position: absolute;\n    top: 0;\n    left: auto;\n    right: 0;\n    overflow: hidden; }\n\n/* table基础样式 */\n.table-striped {\n  overflow-y: hidden;\n  /*margin: 0 -20px;*/\n  /*margin-bottom: 20px;*/ }\n  .table-striped table {\n    width: 100%;\n    white-space: nowrap;\n    background: #fff; }\n    .table-striped table th {\n      padding: 10px 20px;\n      border: 0;\n      line-height: 1.7em;\n      border-bottom: 1px solid #999;\n      /*border-top:1px solid #e9e9e9;*/\n      font-weight: bold;\n      text-align: left; }\n    .table-striped table td {\n      padding: 10px 20px;\n      border: 0;\n      line-height: 1.7em;\n      border-bottom: 1px solid #e9e9e9;\n      vertical-align: top; }\n      .table-striped table td a {\n        color: #2196F3;\n        cursor: pointer; }\n      .table-striped table td i {\n        padding-right: 10px; }\n  .table-striped tbody tr:nth-of-type(odd) {\n    background-color: #fcfcfc; }\n", ""]);

	// exports


/***/ },

/***/ 323:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template><section><h2>table组件</h2>
	// <blockquote>
	// <p><strong>Author:张大柱</strong><br>
	// 支持新增数据、排序、自定义操作等功能。</p>
	// </blockquote>
	// <hr>
	// <br>
	// <p v-for="item in tableData">
	//     <span style="display:inline-block;width:160px;" v-for="(key,val) in item">{{key+':'+val}}</span>
	// </p>
	// <br>
	// <ks-tabs v-on:change="changeTab">
	//     <ks-tab title="aaa">
	//         <ks-table v-bind:uid="_uid" v-bind:columns="columns" v-bind:data="tableData" v-on:change-sort="sortChange" v-on:change-checked="checkedChange"></ks-table>
	//             <ks-button v-on:click="addOneData">添加一条</ks-button>    
	//     </ks-tab>
	//     <ks-tab title="bbb"></ks-tab>
	// </ks-tabs>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-table</span>
	//     <span class="hljs-attr">v-bind:uid</span>=<span class="hljs-string">"_uid"</span>
	//     <span class="hljs-attr">v-bind:columns</span>=<span class="hljs-string">"columns"</span>
	//     <span class="hljs-attr">v-bind:data</span>=<span class="hljs-string">"tableData"</span>
	//     <span class="hljs-attr">v-on:change-sort</span>=<span class="hljs-string">"sortChange"</span>
	//     <span class="hljs-attr">v-on:change-checked</span>=<span class="hljs-string">"checkedChange"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-table</span>&gt;</span>
	// </code></pre>
	// <h3>API</h3>
	// <div class="table-striped"><table class="table-entity"><thead>
	// <tr>
	// <th>参数</th>
	// <th>说明</th>
	// <th>接口类型</th>
	// <th>类型</th>
	// <th>可选值</th>
	// <th>默认值</th>
	// </tr>
	// </thead>
	// <tbody>
	// <tr>
	// <td>uid</td>
	// <td>当前组件下标（_uid）</td>
	// <td>props</td>
	// <td>Number</td>
	// <td><code class="ks-code-inline">必填</code></td>
	// <td>无</td>
	// </tr>
	// <tr>
	// <td>columns</td>
	// <td>设置表格的表头</td>
	// <td>props</td>
	// <td>Array</td>
	// <td><code class="ks-code-inline">必填</code></td>
	// <td>无</td>
	// </tr>
	// <tr>
	// <td>columns -&gt; table-idx</td>
	// <td>序号</td>
	// <td></td>
	// <td>Boolean</td>
	// <td></td>
	// <td>false</td>
	// </tr>
	// <tr>
	// <td>columns -&gt; sortable</td>
	// <td>排序</td>
	// <td></td>
	// <td>Boolean</td>
	// <td></td>
	// <td>false</td>
	// </tr>
	// <tr>
	// <td>columns -&gt; checked</td>
	// <td>全选功能</td>
	// <td></td>
	// <td>Boolean</td>
	// <td></td>
	// <td>false</td>
	// </tr>
	// <tr>
	// <td>data</td>
	// <td>表格的数据</td>
	// <td>props</td>
	// <td>Array</td>
	// <td><code class="ks-code-inline">必填</code></td>
	// <td>无</td>
	// </tr>
	// <tr>
	// <td>change-sort</td>
	// <td>对表格每列数据进行排序后出发</td>
	// <td>props</td>
	// <td>Event</td>
	// <td><code class="ks-code-inline">非必填</code></td>
	// <td>降序</td>
	// </tr>
	// <tr>
	// <td>change-checked</td>
	// <td>checkbox更改触发</td>
	// <td>props</td>
	// <td>Event</td>
	// <td><code class="ks-code-inline">非必填</code></td>
	// <td></td>
	// </tr>
	// </tbody>
	// </table></div><br>
	// <h3>基础功能</h3>
	// <br>
	// <h4>自定义列模板</h4>
	// <br>
	// <p>通过columns添加自定义列，每项的key与列表数据data的字段一一对应，title为表头的每列的名称，设置sortable为true即可对该列进行排序，默认为降序，template为该列数据的模板。</p>
	// <br>
	// <h3>脚本</h3>
	// <pre class="ks-hljs"><code>&lt;script type=<span class="hljs-string">"text/javascript"</span>&gt;
	//
	//     <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//         data(){
	//             <span class="hljs-keyword">this</span>.checkeds = []
	//             <span class="hljs-keyword">return</span> {
	//
	//                 <span class="hljs-attr">columns</span>:[
	//                     {
	//                         <span class="hljs-attr">key</span>:<span class="hljs-string">'checked'</span>,
	//                         <span class="hljs-attr">title</span>:<span class="hljs-string">'全选'</span>,
	//                         <span class="hljs-attr">checked</span>:<span class="hljs-literal">true</span>
	//                     },
	//                     {
	//                         <span class="hljs-attr">key</span>:<span class="hljs-string">'table-idx'</span>,
	//                         <span class="hljs-attr">title</span>:<span class="hljs-string">'序号'</span>,
	//                         <span class="hljs-attr">width</span>:<span class="hljs-string">'60px'</span>
	//                     },
	//                     {<span class="hljs-attr">key</span>:<span class="hljs-string">'id'</span>,<span class="hljs-attr">title</span>:<span class="hljs-string">'下标值'</span>},
	//                     {<span class="hljs-attr">key</span>:<span class="hljs-string">'name'</span>,<span class="hljs-attr">title</span>:<span class="hljs-string">'名字'</span>,<span class="hljs-attr">sortable</span>:<span class="hljs-literal">true</span>,
	//                         template(val,index){
	//                             <span class="hljs-keyword">return</span> val.name+<span class="hljs-string">'==='</span>
	//                         }
	//                     },
	//                     {<span class="hljs-attr">key</span>:<span class="hljs-string">'age'</span>,<span class="hljs-attr">title</span>:<span class="hljs-string">'年龄'</span>,<span class="hljs-attr">sortable</span>:<span class="hljs-string">'asc'</span>},
	//                     {
	//                         <span class="hljs-attr">key</span>:<span class="hljs-string">'operator'</span>,
	//                         <span class="hljs-attr">title</span>:<span class="hljs-string">'操作'</span>,
	//                         template(val,index){
	//                             <span class="hljs-keyword">return</span> <span class="hljs-string">`&lt;a href="javascript:;" v-on:click.stop="output('<span class="hljs-subst">${index}</span>')" &gt;操作&lt;/a&gt;&lt;span&gt;|&lt;/span&gt;&lt;a href="javascript:;" v-on:click.stop="remove('<span class="hljs-subst">${index}</span>')" &gt;删除&lt;/a&gt;`</span>
	//                         }
	//                     }
	//                 ],
	//                 <span class="hljs-attr">tableData</span>: [
	//                     {<span class="hljs-attr">checked</span>:<span class="hljs-literal">true</span>,<span class="hljs-attr">id</span>:<span class="hljs-number">1</span>, <span class="hljs-attr">name</span>:<span class="hljs-string">"John"</span>,<span class="hljs-attr">age</span>:<span class="hljs-string">"sss"</span>},
	//                     {<span class="hljs-attr">checked</span>:<span class="hljs-literal">true</span>,<span class="hljs-attr">id</span>:<span class="hljs-number">333</span>, <span class="hljs-attr">name</span>:<span class="hljs-string">"John"</span>,<span class="hljs-attr">age</span>:<span class="hljs-string">"sss"</span>},
	//                     {<span class="hljs-attr">checked</span>:<span class="hljs-literal">true</span>,<span class="hljs-attr">id</span>:<span class="hljs-number">55</span>, <span class="hljs-attr">name</span>:<span class="hljs-string">"John"</span>,<span class="hljs-attr">age</span>:<span class="hljs-string">"sss"</span>},
	//                     {<span class="hljs-attr">checked</span>:<span class="hljs-literal">true</span>,<span class="hljs-attr">id</span>:<span class="hljs-number">133</span>, <span class="hljs-attr">name</span>:<span class="hljs-string">"John"</span>,<span class="hljs-attr">age</span>:<span class="hljs-string">"sss"</span>},
	//                     {<span class="hljs-attr">checked</span>:<span class="hljs-literal">true</span>,<span class="hljs-attr">id</span>:<span class="hljs-number">1111</span>, <span class="hljs-attr">name</span>:<span class="hljs-string">"John"</span>,<span class="hljs-attr">age</span>:<span class="hljs-string">"sss"</span>},
	//                     {<span class="hljs-attr">checked</span>:<span class="hljs-literal">true</span>,<span class="hljs-attr">id</span>:<span class="hljs-number">155</span>, <span class="hljs-attr">name</span>:<span class="hljs-string">"John"</span>,<span class="hljs-attr">age</span>:<span class="hljs-string">"sss"</span>},
	//                     {<span class="hljs-attr">checked</span>:<span class="hljs-literal">true</span>,<span class="hljs-attr">id</span>:<span class="hljs-number">1777</span>, <span class="hljs-attr">name</span>:<span class="hljs-string">"John"</span>,<span class="hljs-attr">age</span>:<span class="hljs-string">"sss"</span>}
	//                 ],
	//
	//             }
	//         },
	//         <span class="hljs-attr">methods</span>:{
	//             addOneData(val){
	//                 <span class="hljs-keyword">this</span>.tableData.push({<span class="hljs-attr">checked</span>:<span class="hljs-literal">false</span>,<span class="hljs-attr">id</span>:<span class="hljs-number">1</span>, <span class="hljs-attr">name</span>:<span class="hljs-string">"John--"</span>,<span class="hljs-attr">age</span>:<span class="hljs-string">"sss"</span>,<span class="hljs-attr">work</span>:<span class="hljs-string">'IT'</span>,<span class="hljs-attr">work2</span>:<span class="hljs-string">'IT2'</span>,<span class="hljs-attr">operator</span>:<span class="hljs-string">''</span>})   
	//             },
	//             output(val){
	//                 <span class="hljs-keyword">this</span>.$KsNotice.info(<span class="hljs-string">'内容'</span>,<span class="hljs-string">`点击序列为：<span class="hljs-subst">${val}</span>`</span>)
	//             },
	//             remove(index){
	//                 <span class="hljs-comment">// alert('delete: '+index)</span>
	//                 <span class="hljs-keyword">this</span>.tableData.splice(index,<span class="hljs-number">1</span>)
	//             },
	//             sortChange(key,val){
	//                 <span class="hljs-keyword">this</span>.$KsNotice.info(<span class="hljs-string">'内容'</span>,<span class="hljs-string">`排序的字段为：<span class="hljs-subst">${key}</span>，顺序为：<span class="hljs-subst">${val}</span>`</span>)
	//
	//             },
	//             <span class="hljs-comment">// checkbox 变化触发</span>
	//             checkedChange(data,index){
	//                 <span class="hljs-built_in">console</span>.log(data,index)
	//             }
	//
	//         },
	//         created(){
	//         }
	//     }
	// &lt;<span class="hljs-regexp">/script&gt;
	// </span></code></pre>
	// <div class="table-wrapper">
	//     <div class="table-box table-striped">
	//         <div class="table-body">
	//             <table>
	//                 <tr>
	//                     <th class="table-hidden">姓名</th>
	//                     <th>年龄</th>
	//                     <th>省份</th>
	//                     <th>市区</th>
	//                     <th>地址</th>
	//                     <th>邮编</th>
	//                     <th class="table-hidden">操作</th>
	//                 </tr>
	//                 <tr>
	//                     <td class="table-hidden">王小明</td>
	//                     <td>18</td>
	//                     <td>北京市</td>
	//                     <td>朝阳区</td>
	//                     <td>北京市朝阳区芍药居</td>
	//                     <td>100000</td>
	//                     <td class="table-hidden">查看</td>
	//                 </tr>
	//                 <tr>
	//                     <td class="table-hidden">张小刚</td>
	//                     <td>25</td>
	//                     <td>北京市</td>
	//                     <td>海淀区</td>
	//                     <td>北京市海淀区西二旗</td>
	//                     <td>100000</td>
	//                     <td class="table-hidden">查看</td>
	//                 </tr>
	//                 <tr>
	//                     <td class="table-hidden">李小红</td>
	//                     <td>30</td>
	//                     <td>上海市</td>
	//                     <td>浦东新区</td>
	//                     <td>上海市浦东新区世纪大道</td>
	//                     <td>100000</td>
	//                     <td class="table-hidden">查看</td>
	//                 </tr>
	//                 <tr>
	//                     <td class="table-hidden">周小伟</td>
	//                     <td>26</td>
	//                     <td>广东</td>
	//                     <td>南山区</td>
	//                     <td>深圳市南山区深南大道</td>
	//                     <td>100000</td>
	//                     <td class="table-hidden">查看</td>
	//                 </tr>
	//             </table>
	//         </div>
	//         <div class="table-fixed-left" style="width: 79px;">
	//             <table>
	//                 <tr>
	//                     <th>姓名</th>
	//                     <th class="table-hidden">年龄</th>
	//                     <th class="table-hidden">省份</th>
	//                     <th class="table-hidden">市区</th>
	//                     <th class="table-hidden">地址</th>
	//                     <th class="table-hidden">邮编</th>
	//                     <th class="table-hidden">操作</th>
	//                 </tr>
	//                 <tr>
	//                     <td>王小明</td>
	//                     <td class="table-hidden">18</td>
	//                     <td class="table-hidden">北京市</td>
	//                     <td class="table-hidden">朝阳区</td>
	//                     <td class="table-hidden">北京市朝阳区芍药居</td>
	//                     <td class="table-hidden">100000</td>
	//                     <td class="table-hidden">查看</td>
	//                 </tr>
	//                 <tr>
	//                     <td>张小刚</td>
	//                     <td class="table-hidden">25</td>
	//                     <td class="table-hidden">北京市</td>
	//                     <td class="table-hidden">海淀区</td>
	//                     <td class="table-hidden">北京市海淀区西二旗</td>
	//                     <td class="table-hidden">100000</td>
	//                     <td class="table-hidden">查看</td>
	//                 </tr>
	//                 <tr>
	//                     <td>李小红</td>
	//                     <td class="table-hidden">30</td>
	//                     <td class="table-hidden">上海市</td>
	//                     <td class="table-hidden">浦东新区</td>
	//                     <td class="table-hidden">上海市浦东新区世纪大道</td>
	//                     <td class="table-hidden">100000</td>
	//                     <td class="table-hidden">查看</td>
	//                 </tr>
	//                 <tr>
	//                     <td>周小伟</td>
	//                     <td class="table-hidden">26</td>
	//                     <td class="table-hidden">广东</td>
	//                     <td class="table-hidden">南山区</td>
	//                     <td class="table-hidden">深圳市南山区深南大道</td>
	//                     <td class="table-hidden">100000</td>
	//                     <td class="table-hidden">查看</td>
	//                 </tr>
	//             </table>
	//         </div>
	//         <div class="table-fixed-right" style="width: 66px;">
	//             <table>
	//                 <tr>
	//                     <th>操作</th>
	//                     <th class="table-hidden">姓名</th>
	//                     <th class="table-hidden">年龄</th>
	//                     <th class="table-hidden">省份</th>
	//                     <th class="table-hidden">市区</th>
	//                     <th class="table-hidden">地址</th>
	//                     <th class="table-hidden">邮编</th>
	//                 </tr>
	//                 <tr>
	//                     <td>查看</td>
	//                     <td class="table-hidden">王小明</td>
	//                     <td class="table-hidden">18</td>
	//                     <td class="table-hidden">北京市</td>
	//                     <td class="table-hidden">朝阳区</td>
	//                     <td class="table-hidden">北京市朝阳区芍药居</td>
	//                     <td class="table-hidden">100000</td>
	//                 </tr>
	//                 <tr>
	//                     <td>查看</td>
	//                     <td class="table-hidden">张小刚</td>
	//                     <td class="table-hidden">25</td>
	//                     <td class="table-hidden">北京市</td>
	//                     <td class="table-hidden">海淀区</td>
	//                     <td class="table-hidden">北京市海淀区西二旗</td>
	//                     <td class="table-hidden">100000</td>
	//                 </tr>
	//                 <tr>
	//                     <td>查看</td>
	//                     <td class="table-hidden">李小红</td>
	//                     <td class="table-hidden">30</td>
	//                     <td class="table-hidden">上海市</td>
	//                     <td class="table-hidden">浦东新区</td>
	//                     <td class="table-hidden">上海市浦东新区世纪大道</td>
	//                     <td class="table-hidden">100000</td>
	//                 </tr>
	//                 <tr>
	//                     <td>查看</td>
	//                     <td class="table-hidden">周小伟</td>
	//                     <td class="table-hidden">26</td>
	//                     <td class="table-hidden">广东</td>
	//                     <td class="table-hidden">南山区</td>
	//                     <td class="table-hidden">深圳市南山区深南大道</td>
	//                     <td class="table-hidden">100000</td>
	//                 </tr>
	//             </table>
	//         </div>
	//     </div>
	// </div>
	//
	// <!-- ####  基础样式 -->
	// <br>
	// <!-- 
	// rowspan="2"  意思是向下合并两个单元格
	// colspan="2"  意思是向右合并两个单元格
	// <div class="multiple-table">
	//     <table>  
	//         <thead>    
	//             <tr>      
	//                 <th rowspan="2">表头一</th>      
	//                 <th rowspan="2">表头二</th>      
	//                 <th colspan="2"><div>表头三</div></th>      
	//                 <th colspan="3"><div>表头四</div></th>
	//                 <th rowspan="2">表头五</th>     
	//             </tr>    
	//             <tr>      
	//                 <th>当月</th>      
	//                 <th>上月</th>      
	//                 <th>当月</th>      
	//                 <th>上月</th>      
	//                 <th>其他</th>      
	//             </tr>  
	//         </thead>  
	//         <tbody>    
	//             <tr>      
	//                 <td v-for="1 in 8">第1行,第{{$index+1}}列</td> 
	//             </tr>    
	//             <tr> 
	//                 <td v-for="1 in 8">第2行,第{{$index+1}}列</td> 
	//             </tr>    
	//             <tr>      
	//                 <td v-for="1 in 8">第3行,第{{$index+1}}列</td>   
	//             </tr> 
	//         </tbody>
	//     </table>
	// </div> -->
	//
	// </section></template>
	// <style lang="sass">
	//     .table-wrapper{
	//         width: 550px;
	//         border: 1px solid #e5e5e5;
	//         position: relative;
	//
	//         .table-hidden{
	//             visibility: hidden;
	//         }
	//         .table-fixed-left{
	//             box-shadow: 2px 0 6px -2px rgba(0,0,0,.2);
	//             position: absolute;
	//             left: 0;
	//             top: 0;
	//             overflow: hidden;
	//         }
	//         .table-fixed-right{
	//             box-shadow: -2px 0 6px -2px rgba(0,0,0,.2);
	//             position: absolute;
	//             top: 0;
	//             left: auto;
	//             right: 0;
	//             overflow: hidden;
	//         }
	//     }
	//
	//     /* table基础样式 */
	//     .table-striped {
	//         overflow-y: hidden;
	//         /*margin: 0 -20px;*/
	//         /*margin-bottom: 20px;*/
	//         table { 
	//             width: 100%;
	//             white-space: nowrap;
	//             background: #fff;
	//             th{
	//                padding: 10px 20px;
	//                 border: 0;
	//                 line-height: 1.7em;
	//                 border-bottom: 1px solid #999;
	//                 /*border-top:1px solid #e9e9e9;*/
	//                 font-weight: bold;
	//                 text-align: left;
	//             }
	//             td{ 
	//                 padding: 10px 20px;
	//                 border: 0;
	//                 line-height: 1.7em;
	//                 border-bottom: 1px solid #e9e9e9;
	//                 vertical-align:top;
	//                 a{
	//                     color: #2196F3;
	//                     cursor: pointer;
	//                 }
	//                 i{ 
	//                     padding-right: 10px; 
	//                 }
	//             }
	//         }
	//         & tbody tr:nth-of-type(odd) { 
	//             background-color: #fcfcfc; 
	//         }
	//     } 
	// </style>
	// <script type="text/javascript">

	exports.default = {
	    kscomponents: ['KsTable_v0', 'KsButton_v0', 'KsTabs_v0', 'KsNotice_v1'],
	    data: function data() {
	        this.checkeds = [];
	        return {

	            columns: [{
	                key: 'checked',
	                title: '全选',
	                checked: true
	            }, {
	                key: 'table-idx',
	                title: '序号',
	                width: '60px'
	            }, { key: 'id', title: '下标值' }, { key: 'name', title: '名字', sortable: true,
	                template: function template(val, index) {
	                    return val.name + '===';
	                }
	            }, { key: 'age', title: '年龄', sortable: 'asc' }, {
	                key: 'operator',
	                title: '操作',
	                template: function template(val, index) {
	                    return '<a href="javascript:;" v-on:click.stop="output(\'' + index + '\')" >\u64CD\u4F5C</a><span>|</span><a href="javascript:;" v-on:click.stop="remove(\'' + index + '\')" >\u5220\u9664</a>';
	                }
	            }],
	            tableData: [{ checked: true, id: 1, name: "John", name1: "John", age: "sss" }, { checked: true, id: 333, name: "John", age: "sss" }, { checked: true, id: 55, name: "John", age: "sss" }, { checked: true, id: 133, name: "John", age: "sss" }, { checked: true, id: 1111, name: "John", age: "sss" }, { checked: true, id: 155, name: "John", age: "sss" }, { checked: true, id: 1777, name: "John", age: "sss" }]

	        };
	    },

	    methods: {
	        addOneData: function addOneData(val) {
	            this.tableData.push({ checked: false, id: 1, name: "John--", age: "sss", work: 'IT', work2: 'IT2', operator: '' });
	        },
	        output: function output(val) {
	            this.$KsNotice.info('内容', '\u70B9\u51FB\u5E8F\u5217\u4E3A\uFF1A' + val);
	        },
	        remove: function remove(index) {
	            // alert('delete: '+index)
	            this.tableData.splice(index, 1);
	        },
	        sortChange: function sortChange(key, val) {
	            this.$KsNotice.info('内容', '\u6392\u5E8F\u7684\u5B57\u6BB5\u4E3A\uFF1A' + key + '\uFF0C\u987A\u5E8F\u4E3A\uFF1A' + val);
	        },

	        // checkbox 变化触发
	        checkedChange: function checkedChange(data, index) {
	            console.log(data, index);
	        },
	        changeTab: function changeTab(index) {
	            console.log(index);
	        }
	    },
	    created: function created() {}
	};
	// </script>

/***/ },

/***/ 324:
/***/ function(module, exports) {

	module.exports = "<section><h2>table组件</h2>\n<blockquote>\n<p><strong>Author:张大柱</strong><br>\n支持新增数据、排序、自定义操作等功能。</p>\n</blockquote>\n<hr>\n<br>\n<p v-for=\"item in tableData\">\n    <span style=\"display:inline-block;width:160px;\" v-for=\"(key,val) in item\">{{key+':'+val}}</span>\n</p>\n<br>\n<ks-tabs v-on:change=\"changeTab\">\n    <ks-tab title=\"aaa\">\n        <ks-table v-bind:uid=\"_uid\" v-bind:columns=\"columns\" v-bind:data=\"tableData\" v-on:change-sort=\"sortChange\" v-on:change-checked=\"checkedChange\"></ks-table>\n            <ks-button v-on:click=\"addOneData\">添加一条</ks-button>    \n    </ks-tab>\n    <ks-tab title=\"bbb\"></ks-tab>\n</ks-tabs>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-table</span>\n    <span class=\"hljs-attr\">v-bind:uid</span>=<span class=\"hljs-string\">\"_uid\"</span>\n    <span class=\"hljs-attr\">v-bind:columns</span>=<span class=\"hljs-string\">\"columns\"</span>\n    <span class=\"hljs-attr\">v-bind:data</span>=<span class=\"hljs-string\">\"tableData\"</span>\n    <span class=\"hljs-attr\">v-on:change-sort</span>=<span class=\"hljs-string\">\"sortChange\"</span>\n    <span class=\"hljs-attr\">v-on:change-checked</span>=<span class=\"hljs-string\">\"checkedChange\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-table</span>&gt;</span>\n</code></pre>\n<h3>API</h3>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>uid</td>\n<td>当前组件下标（_uid）</td>\n<td>props</td>\n<td>Number</td>\n<td><code class=\"ks-code-inline\">必填</code></td>\n<td>无</td>\n</tr>\n<tr>\n<td>columns</td>\n<td>设置表格的表头</td>\n<td>props</td>\n<td>Array</td>\n<td><code class=\"ks-code-inline\">必填</code></td>\n<td>无</td>\n</tr>\n<tr>\n<td>columns -&gt; table-idx</td>\n<td>序号</td>\n<td></td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>columns -&gt; sortable</td>\n<td>排序</td>\n<td></td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>columns -&gt; checked</td>\n<td>全选功能</td>\n<td></td>\n<td>Boolean</td>\n<td></td>\n<td>false</td>\n</tr>\n<tr>\n<td>data</td>\n<td>表格的数据</td>\n<td>props</td>\n<td>Array</td>\n<td><code class=\"ks-code-inline\">必填</code></td>\n<td>无</td>\n</tr>\n<tr>\n<td>change-sort</td>\n<td>对表格每列数据进行排序后出发</td>\n<td>props</td>\n<td>Event</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td>降序</td>\n</tr>\n<tr>\n<td>change-checked</td>\n<td>checkbox更改触发</td>\n<td>props</td>\n<td>Event</td>\n<td><code class=\"ks-code-inline\">非必填</code></td>\n<td></td>\n</tr>\n</tbody>\n</table></div><br>\n<h3>基础功能</h3>\n<br>\n<h4>自定义列模板</h4>\n<br>\n<p>通过columns添加自定义列，每项的key与列表数据data的字段一一对应，title为表头的每列的名称，设置sortable为true即可对该列进行排序，默认为降序，template为该列数据的模板。</p>\n<br>\n<h3>脚本</h3>\n<pre class=\"ks-hljs\"><code>&lt;script type=<span class=\"hljs-string\">\"text/javascript\"</span>&gt;\n    \n    <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n        data(){\n            <span class=\"hljs-keyword\">this</span>.checkeds = []\n            <span class=\"hljs-keyword\">return</span> {\n                \n                <span class=\"hljs-attr\">columns</span>:[\n                    {\n                        <span class=\"hljs-attr\">key</span>:<span class=\"hljs-string\">'checked'</span>,\n                        <span class=\"hljs-attr\">title</span>:<span class=\"hljs-string\">'全选'</span>,\n                        <span class=\"hljs-attr\">checked</span>:<span class=\"hljs-literal\">true</span>\n                    },\n                    {\n                        <span class=\"hljs-attr\">key</span>:<span class=\"hljs-string\">'table-idx'</span>,\n                        <span class=\"hljs-attr\">title</span>:<span class=\"hljs-string\">'序号'</span>,\n                        <span class=\"hljs-attr\">width</span>:<span class=\"hljs-string\">'60px'</span>\n                    },\n                    {<span class=\"hljs-attr\">key</span>:<span class=\"hljs-string\">'id'</span>,<span class=\"hljs-attr\">title</span>:<span class=\"hljs-string\">'下标值'</span>},\n                    {<span class=\"hljs-attr\">key</span>:<span class=\"hljs-string\">'name'</span>,<span class=\"hljs-attr\">title</span>:<span class=\"hljs-string\">'名字'</span>,<span class=\"hljs-attr\">sortable</span>:<span class=\"hljs-literal\">true</span>,\n                        template(val,index){\n                            <span class=\"hljs-keyword\">return</span> val.name+<span class=\"hljs-string\">'==='</span>\n                        }\n                    },\n                    {<span class=\"hljs-attr\">key</span>:<span class=\"hljs-string\">'age'</span>,<span class=\"hljs-attr\">title</span>:<span class=\"hljs-string\">'年龄'</span>,<span class=\"hljs-attr\">sortable</span>:<span class=\"hljs-string\">'asc'</span>},\n                    {\n                        <span class=\"hljs-attr\">key</span>:<span class=\"hljs-string\">'operator'</span>,\n                        <span class=\"hljs-attr\">title</span>:<span class=\"hljs-string\">'操作'</span>,\n                        template(val,index){\n                            <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`&lt;a href=\"javascript:;\" v-on:click.stop=\"output('<span class=\"hljs-subst\">${index}</span>')\" &gt;操作&lt;/a&gt;&lt;span&gt;|&lt;/span&gt;&lt;a href=\"javascript:;\" v-on:click.stop=\"remove('<span class=\"hljs-subst\">${index}</span>')\" &gt;删除&lt;/a&gt;`</span>\n                        }\n                    }\n                ],\n                <span class=\"hljs-attr\">tableData</span>: [\n                    {<span class=\"hljs-attr\">checked</span>:<span class=\"hljs-literal\">true</span>,<span class=\"hljs-attr\">id</span>:<span class=\"hljs-number\">1</span>, <span class=\"hljs-attr\">name</span>:<span class=\"hljs-string\">\"John\"</span>,<span class=\"hljs-attr\">age</span>:<span class=\"hljs-string\">\"sss\"</span>},\n                    {<span class=\"hljs-attr\">checked</span>:<span class=\"hljs-literal\">true</span>,<span class=\"hljs-attr\">id</span>:<span class=\"hljs-number\">333</span>, <span class=\"hljs-attr\">name</span>:<span class=\"hljs-string\">\"John\"</span>,<span class=\"hljs-attr\">age</span>:<span class=\"hljs-string\">\"sss\"</span>},\n                    {<span class=\"hljs-attr\">checked</span>:<span class=\"hljs-literal\">true</span>,<span class=\"hljs-attr\">id</span>:<span class=\"hljs-number\">55</span>, <span class=\"hljs-attr\">name</span>:<span class=\"hljs-string\">\"John\"</span>,<span class=\"hljs-attr\">age</span>:<span class=\"hljs-string\">\"sss\"</span>},\n                    {<span class=\"hljs-attr\">checked</span>:<span class=\"hljs-literal\">true</span>,<span class=\"hljs-attr\">id</span>:<span class=\"hljs-number\">133</span>, <span class=\"hljs-attr\">name</span>:<span class=\"hljs-string\">\"John\"</span>,<span class=\"hljs-attr\">age</span>:<span class=\"hljs-string\">\"sss\"</span>},\n                    {<span class=\"hljs-attr\">checked</span>:<span class=\"hljs-literal\">true</span>,<span class=\"hljs-attr\">id</span>:<span class=\"hljs-number\">1111</span>, <span class=\"hljs-attr\">name</span>:<span class=\"hljs-string\">\"John\"</span>,<span class=\"hljs-attr\">age</span>:<span class=\"hljs-string\">\"sss\"</span>},\n                    {<span class=\"hljs-attr\">checked</span>:<span class=\"hljs-literal\">true</span>,<span class=\"hljs-attr\">id</span>:<span class=\"hljs-number\">155</span>, <span class=\"hljs-attr\">name</span>:<span class=\"hljs-string\">\"John\"</span>,<span class=\"hljs-attr\">age</span>:<span class=\"hljs-string\">\"sss\"</span>},\n                    {<span class=\"hljs-attr\">checked</span>:<span class=\"hljs-literal\">true</span>,<span class=\"hljs-attr\">id</span>:<span class=\"hljs-number\">1777</span>, <span class=\"hljs-attr\">name</span>:<span class=\"hljs-string\">\"John\"</span>,<span class=\"hljs-attr\">age</span>:<span class=\"hljs-string\">\"sss\"</span>}\n                ],\n                \n            }\n        },\n        <span class=\"hljs-attr\">methods</span>:{\n            addOneData(val){\n                <span class=\"hljs-keyword\">this</span>.tableData.push({<span class=\"hljs-attr\">checked</span>:<span class=\"hljs-literal\">false</span>,<span class=\"hljs-attr\">id</span>:<span class=\"hljs-number\">1</span>, <span class=\"hljs-attr\">name</span>:<span class=\"hljs-string\">\"John--\"</span>,<span class=\"hljs-attr\">age</span>:<span class=\"hljs-string\">\"sss\"</span>,<span class=\"hljs-attr\">work</span>:<span class=\"hljs-string\">'IT'</span>,<span class=\"hljs-attr\">work2</span>:<span class=\"hljs-string\">'IT2'</span>,<span class=\"hljs-attr\">operator</span>:<span class=\"hljs-string\">''</span>})   \n            },\n            output(val){\n                <span class=\"hljs-keyword\">this</span>.$KsNotice.info(<span class=\"hljs-string\">'内容'</span>,<span class=\"hljs-string\">`点击序列为：<span class=\"hljs-subst\">${val}</span>`</span>)\n            },\n            remove(index){\n                <span class=\"hljs-comment\">// alert('delete: '+index)</span>\n                <span class=\"hljs-keyword\">this</span>.tableData.splice(index,<span class=\"hljs-number\">1</span>)\n            },\n            sortChange(key,val){\n                <span class=\"hljs-keyword\">this</span>.$KsNotice.info(<span class=\"hljs-string\">'内容'</span>,<span class=\"hljs-string\">`排序的字段为：<span class=\"hljs-subst\">${key}</span>，顺序为：<span class=\"hljs-subst\">${val}</span>`</span>)\n                \n            },\n            <span class=\"hljs-comment\">// checkbox 变化触发</span>\n            checkedChange(data,index){\n                <span class=\"hljs-built_in\">console</span>.log(data,index)\n            }\n            \n        },\n        created(){\n        }\n    }\n&lt;<span class=\"hljs-regexp\">/script&gt;\n</span></code></pre>\n<div class=\"table-wrapper\">\n    <div class=\"table-box table-striped\">\n        <div class=\"table-body\">\n            <table>\n                <tr>\n                    <th class=\"table-hidden\">姓名</th>\n                    <th>年龄</th>\n                    <th>省份</th>\n                    <th>市区</th>\n                    <th>地址</th>\n                    <th>邮编</th>\n                    <th class=\"table-hidden\">操作</th>\n                </tr>\n                <tr>\n                    <td class=\"table-hidden\">王小明</td>\n                    <td>18</td>\n                    <td>北京市</td>\n                    <td>朝阳区</td>\n                    <td>北京市朝阳区芍药居</td>\n                    <td>100000</td>\n                    <td class=\"table-hidden\">查看</td>\n                </tr>\n                <tr>\n                    <td class=\"table-hidden\">张小刚</td>\n                    <td>25</td>\n                    <td>北京市</td>\n                    <td>海淀区</td>\n                    <td>北京市海淀区西二旗</td>\n                    <td>100000</td>\n                    <td class=\"table-hidden\">查看</td>\n                </tr>\n                <tr>\n                    <td class=\"table-hidden\">李小红</td>\n                    <td>30</td>\n                    <td>上海市</td>\n                    <td>浦东新区</td>\n                    <td>上海市浦东新区世纪大道</td>\n                    <td>100000</td>\n                    <td class=\"table-hidden\">查看</td>\n                </tr>\n                <tr>\n                    <td class=\"table-hidden\">周小伟</td>\n                    <td>26</td>\n                    <td>广东</td>\n                    <td>南山区</td>\n                    <td>深圳市南山区深南大道</td>\n                    <td>100000</td>\n                    <td class=\"table-hidden\">查看</td>\n                </tr>\n            </table>\n        </div>\n        <div class=\"table-fixed-left\" style=\"width: 79px;\">\n            <table>\n                <tr>\n                    <th>姓名</th>\n                    <th class=\"table-hidden\">年龄</th>\n                    <th class=\"table-hidden\">省份</th>\n                    <th class=\"table-hidden\">市区</th>\n                    <th class=\"table-hidden\">地址</th>\n                    <th class=\"table-hidden\">邮编</th>\n                    <th class=\"table-hidden\">操作</th>\n                </tr>\n                <tr>\n                    <td>王小明</td>\n                    <td class=\"table-hidden\">18</td>\n                    <td class=\"table-hidden\">北京市</td>\n                    <td class=\"table-hidden\">朝阳区</td>\n                    <td class=\"table-hidden\">北京市朝阳区芍药居</td>\n                    <td class=\"table-hidden\">100000</td>\n                    <td class=\"table-hidden\">查看</td>\n                </tr>\n                <tr>\n                    <td>张小刚</td>\n                    <td class=\"table-hidden\">25</td>\n                    <td class=\"table-hidden\">北京市</td>\n                    <td class=\"table-hidden\">海淀区</td>\n                    <td class=\"table-hidden\">北京市海淀区西二旗</td>\n                    <td class=\"table-hidden\">100000</td>\n                    <td class=\"table-hidden\">查看</td>\n                </tr>\n                <tr>\n                    <td>李小红</td>\n                    <td class=\"table-hidden\">30</td>\n                    <td class=\"table-hidden\">上海市</td>\n                    <td class=\"table-hidden\">浦东新区</td>\n                    <td class=\"table-hidden\">上海市浦东新区世纪大道</td>\n                    <td class=\"table-hidden\">100000</td>\n                    <td class=\"table-hidden\">查看</td>\n                </tr>\n                <tr>\n                    <td>周小伟</td>\n                    <td class=\"table-hidden\">26</td>\n                    <td class=\"table-hidden\">广东</td>\n                    <td class=\"table-hidden\">南山区</td>\n                    <td class=\"table-hidden\">深圳市南山区深南大道</td>\n                    <td class=\"table-hidden\">100000</td>\n                    <td class=\"table-hidden\">查看</td>\n                </tr>\n            </table>\n        </div>\n        <div class=\"table-fixed-right\" style=\"width: 66px;\">\n            <table>\n                <tr>\n                    <th>操作</th>\n                    <th class=\"table-hidden\">姓名</th>\n                    <th class=\"table-hidden\">年龄</th>\n                    <th class=\"table-hidden\">省份</th>\n                    <th class=\"table-hidden\">市区</th>\n                    <th class=\"table-hidden\">地址</th>\n                    <th class=\"table-hidden\">邮编</th>\n                </tr>\n                <tr>\n                    <td>查看</td>\n                    <td class=\"table-hidden\">王小明</td>\n                    <td class=\"table-hidden\">18</td>\n                    <td class=\"table-hidden\">北京市</td>\n                    <td class=\"table-hidden\">朝阳区</td>\n                    <td class=\"table-hidden\">北京市朝阳区芍药居</td>\n                    <td class=\"table-hidden\">100000</td>\n                </tr>\n                <tr>\n                    <td>查看</td>\n                    <td class=\"table-hidden\">张小刚</td>\n                    <td class=\"table-hidden\">25</td>\n                    <td class=\"table-hidden\">北京市</td>\n                    <td class=\"table-hidden\">海淀区</td>\n                    <td class=\"table-hidden\">北京市海淀区西二旗</td>\n                    <td class=\"table-hidden\">100000</td>\n                </tr>\n                <tr>\n                    <td>查看</td>\n                    <td class=\"table-hidden\">李小红</td>\n                    <td class=\"table-hidden\">30</td>\n                    <td class=\"table-hidden\">上海市</td>\n                    <td class=\"table-hidden\">浦东新区</td>\n                    <td class=\"table-hidden\">上海市浦东新区世纪大道</td>\n                    <td class=\"table-hidden\">100000</td>\n                </tr>\n                <tr>\n                    <td>查看</td>\n                    <td class=\"table-hidden\">周小伟</td>\n                    <td class=\"table-hidden\">26</td>\n                    <td class=\"table-hidden\">广东</td>\n                    <td class=\"table-hidden\">南山区</td>\n                    <td class=\"table-hidden\">深圳市南山区深南大道</td>\n                    <td class=\"table-hidden\">100000</td>\n                </tr>\n            </table>\n        </div>\n    </div>\n</div>\n\n<!-- ####  基础样式 -->\n<br>\n<!-- \nrowspan=\"2\"  意思是向下合并两个单元格\ncolspan=\"2\"  意思是向右合并两个单元格\n<div class=\"multiple-table\">\n    <table>  \n        <thead>    \n            <tr>      \n                <th rowspan=\"2\">表头一</th>      \n                <th rowspan=\"2\">表头二</th>      \n                <th colspan=\"2\"><div>表头三</div></th>      \n                <th colspan=\"3\"><div>表头四</div></th>\n                <th rowspan=\"2\">表头五</th>     \n            </tr>    \n            <tr>      \n                <th>当月</th>      \n                <th>上月</th>      \n                <th>当月</th>      \n                <th>上月</th>      \n                <th>其他</th>      \n            </tr>  \n        </thead>  \n        <tbody>    \n            <tr>      \n                <td v-for=\"1 in 8\">第1行,第{{$index+1}}列</td> \n            </tr>    \n            <tr> \n                <td v-for=\"1 in 8\">第2行,第{{$index+1}}列</td> \n            </tr>    \n            <tr>      \n                <td v-for=\"1 in 8\">第3行,第{{$index+1}}列</td>   \n            </tr> \n        </tbody>\n    </table>\n</div> -->\n\n</section>";

/***/ }

});