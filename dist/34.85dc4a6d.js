webpackJsonp([34],{

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(271);

/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(272)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/v0.1.0-19.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(273)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/v0.1.0-19.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 272:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _stringify = __webpack_require__(65);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _main = __webpack_require__(294);

	var _main2 = _interopRequireDefault(_main);

	var _tabledata = __webpack_require__(314);

	var _tabledata2 = _interopRequireDefault(_tabledata);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template><section><h2>ksAddTableItem</h2>
	// <blockquote>
	// <p>Author:左晶晶<br>
	// 常用的添加表格控件</p>
	// </blockquote>
	// <hr>
	// <p><ks-button :type="'primary'" @click="show_dialog(-1)">表格项设置</ks-button><br>
	// <br><br>
	// <ks-button :type="'primary'" @click="show_dialog(0)">获取默认表的内容</ks-button><br>
	// <ks-add-table-item :is_storetype="is_storetype" :width="width" :datasource="datasource" :list.sync="list" :checkalllist="checkalllist" :prefix="prefix" @save="save"></ks-add-table-item></p>
	// <hr>
	// <pre class="ks-hljs"><code>&lt;ks-button :type=<span class="hljs-string">"'primary'"</span> @click=<span class="hljs-string">"show_dialog(-1)"</span>&gt;表格项设置&lt;<span class="hljs-regexp">/ks-button&gt;
	// &lt;br/</span>&gt;
	// &lt;ks-button :type="'primary'" @click="show_dialog(0)"&gt;获取默认表的内容&lt;/ks-button&gt;
	// &lt;ks-add-table-item
	//     :is_storetype = is_storetype
	//     :width = width
	//     :datasource = datasource
	//     :list.sync = list
	//     :checkalllist = checkalllist
	//     :prefix = prefix 
	//     @save = save&gt;&lt;/ks-add-table-item&gt;
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
	// <td>is_show</td>
	// <td>弹出层是否显示</td>
	// <td>Boolean</td>
	// <td>true,false</td>
	// <td>false</td>
	// <td>否</td>
	// </tr>
	// <tr>
	// <td>width</td>
	// <td>弹出层width</td>
	// <td>Number</td>
	// <td>无</td>
	// <td>400</td>
	// <td>否</td>
	// </tr>
	// <tr>
	// <td>is_storetype</td>
	// <td>用于判断弹出层类型(true是table类型,false是基本弹出层样式)</td>
	// <td>Boolean</td>
	// <td>true,false</td>
	// <td>false</td>
	// <td>否</td>
	// </tr>
	// <tr>
	// <td>datasource</td>
	// <td>数据源，表格当中必选的字段集合</td>
	// <td>Object</td>
	// <td>无</td>
	// <td>无</td>
	// <td>是</td>
	// </tr>
	// <tr>
	// <td>list</td>
	// <td>数据源，表格当中所有的字段集合</td>
	// <td>Array</td>
	// <td>无</td>
	// <td>无</td>
	// <td>无</td>
	// </tr>
	// <tr>
	// <td>checkalllist</td>
	// <td>数据源，表格当中未选的字段集合</td>
	// <td>Array</td>
	// <td>无</td>
	// <td>无</td>
	// <td>无</td>
	// </tr>
	// <tr>
	// <td>prefix</td>
	// <td>存在本地的名字前缀</td>
	// <td>String</td>
	// <td>无</td>
	// <td>无</td>
	// <td>无</td>
	// </tr>
	// </tbody>
	// </table></div><br>
	// <h4>代码如下</h4>
	// <pre class="ks-hljs"><code>
	// &lt;script lang=<span class="hljs-string">"babel"</span>&gt;
	// <span class="hljs-keyword">import</span> listdata <span class="hljs-keyword">from</span> <span class="hljs-string">'SRC/doc/views/data/tabledata.js'</span>
	// <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//
	//     data(){
	//         <span class="hljs-keyword">return</span> {  
	//             <span class="hljs-attr">datasource</span>:listdata.datasource,
	//             <span class="hljs-attr">width</span>:<span class="hljs-number">800</span>,
	//             <span class="hljs-attr">is_storetype</span>:<span class="hljs-literal">true</span>,
	//             <span class="hljs-attr">list</span>:[],
	//             <span class="hljs-attr">checkalllist</span>:listdata.checkalllist,
	//             <span class="hljs-attr">prefix</span>:<span class="hljs-string">'managetrade'</span>
	//         }  
	//     },
	//     <span class="hljs-attr">methods</span>:{
	//        show_dialog(index){
	//             <span class="hljs-keyword">this</span>.$broadcast(<span class="hljs-string">'show_dialog'</span>,index)
	//        },
	//        save(){
	//             <span class="hljs-built_in">console</span>(<span class="hljs-string">"2"</span>)
	//        }
	//     },
	//     ready(){
	//         <span class="hljs-keyword">var</span> listitem = []
	//         <span class="hljs-keyword">var</span> prefix = <span class="hljs-keyword">this</span>.prefix + <span class="hljs-string">'_list'</span>
	//         <span class="hljs-keyword">if</span>(localStorage.getItem(prefix))
	//         {
	//             listitem =  <span class="hljs-built_in">JSON</span>.parse(localStorage.getItem(prefix))
	//             <span class="hljs-keyword">this</span>.list = listitem
	//         }<span class="hljs-keyword">else</span>{
	//             listitem =  <span class="hljs-built_in">JSON</span>.parse(<span class="hljs-built_in">JSON</span>.stringify(listdata.list))
	//             <span class="hljs-keyword">this</span>.list = listitem
	//         }
	//     }
	//
	// }
	// &lt;<span class="hljs-regexp">/script&gt;
	// </span></code></pre>
	//
	// </section></template>
	//
	// <script lang="babel">
	exports.default = {
	    kscomponents: ['KsAddTableItem_v0'],
	    data: function data() {
	        return {
	            datasource: _tabledata2.default.datasource,
	            is_show: false,
	            width: 800,
	            is_storetype: true,
	            list: [],
	            checkalllist: _tabledata2.default.checkalllist,
	            prefix: 'managetrade'
	        };
	    },

	    components: {
	        KsButton: _main2.default
	    },
	    methods: {
	        show_dialog: function show_dialog(index) {
	            this.$broadcast('show_dialog', index);
	        },
	        save: function save() {
	            console("2");
	        }
	    },
	    ready: function ready() {
	        var listitem = [];
	        var prefix = this.prefix + '_list';
	        if (localStorage.getItem(prefix)) {
	            listitem = JSON.parse(localStorage.getItem(prefix));
	            this.list = listitem;
	        } else {
	            listitem = JSON.parse((0, _stringify2.default)(_tabledata2.default.list));
	            this.list = listitem;
	        }
	    }
	};
	// </script>

/***/ },

/***/ 273:
/***/ function(module, exports) {

	module.exports = "<section><h2>KsList</h2>\n<blockquote>\n<p>常用的弹出框列表选择组件</p>\n</blockquote>\n<hr>\n<p><ks-list :list.sync=\"list3\" :sid.sync=\"sid3\" :type-mate=\"typemate\" :name-mate=\"namemate\"></ks-list><br></p>\n<div>\n    <span style=\"color:red;font-size:15px\">已选门店id:{{sid3}}</span><br>\n</div>  \n<br>\n<hr>\n<pre class=\"ks-hljs\"><code>&lt;!-- sid双向绑定,返回已经选中的门店id --&gt;\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-list</span> \n        <span class=\"hljs-attr\">:list.sync</span> = <span class=\"hljs-string\">list3</span>\n        <span class=\"hljs-attr\">:sid.sync</span> = <span class=\"hljs-string\">sid3</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-list</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>/&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"color:red;font-size:15px\"</span>&gt;</span>已选门店id:{{sid3}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>/&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>  \n</span></code></pre>\n<hr>\n<p><ks-list :list.sync=\"list4\" :sid=\"sid4\" @change=\"getSidList\"></ks-list><br></p>\n<div>\n    <span style=\"color:red;font-size:15px\">已选门店id:{{sid4}}</span><br>\n</div>  \n<br>\n<hr>\n<pre class=\"ks-hljs\"><code>&lt;!-- sid单向绑定,提供了一个onchange事件,返回已经选中的门店id --&gt;\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-list</span> \n        <span class=\"hljs-attr\">:list.sync</span> = <span class=\"hljs-string\">list4</span>\n        <span class=\"hljs-attr\">:sid</span> = <span class=\"hljs-string\">sid4</span>\n        <span class=\"hljs-attr\">@change</span> = <span class=\"hljs-string\">\"getSidList\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-list</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>/&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">\"color:red;font-size:15px\"</span>&gt;</span>已选门店id:{{sid3}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>/&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>  \n</span></code></pre>\n<hr>\n<h2>ksDialogChoose</h2>\n<hr>\n<p><ks-dialog-choose :list.sync=\"list1\" :sid.sync=\"sid1\"></ks-dialog-choose><br></p>\n<div>\n    <span>已选门店id:{{sid1}}</span><br>\n</div>  \n<hr>\n<pre class=\"ks-hljs\"><code>&lt;!-- sid双向绑定,返回已经选中的门店id --&gt;\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-dialog-choose</span> \n        <span class=\"hljs-attr\">:list.sync</span> = <span class=\"hljs-string\">list1</span>\n        <span class=\"hljs-attr\">:sid.sync</span> = <span class=\"hljs-string\">sid1</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-dialog-choose</span> &gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>/&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span>&gt;</span>已选门店id:{{sid1}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>/&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>  \n</span></code></pre>\n<p><ks-dialog-choose :list.sync=\"list2\" :sid=\"sid2\" :title=\"title\" :error-info=\"errorInfo\" @change=\"getSid\"></ks-dialog-choose><br></p>\n<div>\n    <span>已选门店id:{{sid2}}</span><br>\n</div>  \n<hr>\n<pre class=\"ks-hljs\"><code>&lt;!-- sid单向绑定,提供了一个onchange事件,返回已经选中的门店id --&gt;\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-dialog-choose</span> \n        <span class=\"hljs-attr\">:list.sync</span> = <span class=\"hljs-string\">list2</span>\n        <span class=\"hljs-attr\">:sid</span> = <span class=\"hljs-string\">sid2</span>\n        <span class=\"hljs-attr\">:title</span> = <span class=\"hljs-string\">title</span>\n        <span class=\"hljs-attr\">:errorInfo</span> = <span class=\"hljs-string\">errorInfo</span>\n        <span class=\"hljs-attr\">@change</span> = <span class=\"hljs-string\">getSid</span> &gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-dialog-choose</span> &gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>/&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span>&gt;</span>已选门店id:{{sid2}}<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">br</span>/&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>  \n</span></code></pre>\n<h3>API</h3>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>可选值</th>\n<th>默认值</th>\n<th>是否必须</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>list</td>\n<td>门店列表</td>\n<td>Array</td>\n<td>无</td>\n<td>无</td>\n<td>是</td>\n</tr>\n<tr>\n<td>sid</td>\n<td>用于显示已选中的门店id</td>\n<td>Array</td>\n<td>无</td>\n<td>无</td>\n<td>否</td>\n</tr>\n<tr>\n<td>is_storetype</td>\n<td>用于判断弹出层类型(true是table类型,false是基本弹出层样式)</td>\n<td>Boolean</td>\n<td>true,false</td>\n<td>false</td>\n<td>否</td>\n</tr>\n<tr>\n<td>error-info</td>\n<td>用于显示一个没选中的错误信息</td>\n<td>String</td>\n<td>无</td>\n<td>*您尚未选择门店</td>\n<td>否</td>\n</tr>\n<tr>\n<td>type-mate</td>\n<td>用于显示一个没选中的错误信息</td>\n<td>String</td>\n<td>无</td>\n<td>id</td>\n<td>否</td>\n</tr>\n<tr>\n<td>name-mate</td>\n<td>用于显示一个没选中的错误信息</td>\n<td>String</td>\n<td>无</td>\n<td>name</td>\n<td>否</td>\n</tr>\n<tr>\n<td>title</td>\n<td>用于显示弹出层的title</td>\n<td>String</td>\n<td>无</td>\n<td>请选择交易门店</td>\n<td>否</td>\n</tr>\n</tbody>\n</table></div><br>\n<h4>代码如下</h4>\n<pre class=\"ks-hljs\"><code>\n\n&lt;script lang=<span class=\"hljs-string\">\"babel\"</span>&gt;\n<span class=\"hljs-keyword\">import</span> listdata <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'SRC/doc/views/data/data.js'</span>\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n    data(){\n        <span class=\"hljs-keyword\">return</span> {  \n            <span class=\"hljs-attr\">list1</span>:[],\n            <span class=\"hljs-attr\">list2</span>:[],\n            <span class=\"hljs-attr\">list3</span>:[],\n            <span class=\"hljs-attr\">list4</span>:[],\n            <span class=\"hljs-attr\">sex</span>:[{<span class=\"hljs-string\">'level'</span>:<span class=\"hljs-string\">'0'</span>,<span class=\"hljs-attr\">levelname</span>:<span class=\"hljs-string\">'男'</span>},{<span class=\"hljs-string\">'level'</span>:<span class=\"hljs-string\">'1'</span>,<span class=\"hljs-attr\">levelname</span>:<span class=\"hljs-string\">'女'</span>}],\n            <span class=\"hljs-attr\">sid1</span>:[<span class=\"hljs-string\">'086021000000006'</span>],\n            <span class=\"hljs-attr\">sid2</span>:[],\n            <span class=\"hljs-attr\">sid4</span>:[<span class=\"hljs-string\">'086021000000006'</span>],\n            <span class=\"hljs-attr\">sid3</span>:[<span class=\"hljs-string\">'0'</span>],\n            <span class=\"hljs-attr\">title</span>:<span class=\"hljs-string\">'请选择交易数据'</span>,\n            <span class=\"hljs-attr\">errorInfo</span>:<span class=\"hljs-string\">'*您尚未选择交易数据'</span>,\n            <span class=\"hljs-attr\">typemate</span>:<span class=\"hljs-string\">'level'</span>,\n            <span class=\"hljs-attr\">namemate</span>:<span class=\"hljs-string\">'levelname'</span>\n        }  \n    },\n    <span class=\"hljs-attr\">methods</span>:{\n        getSid(val){\n            <span class=\"hljs-keyword\">this</span>.sid2 = val\n        },\n        getSidList(val){\n            <span class=\"hljs-keyword\">this</span>.sid4 = val;\n        }\n    },\n    ready(){\n        listdata.forEach(<span class=\"hljs-function\"><span class=\"hljs-params\">item</span>=&gt;</span>{\n            item.ischecked = <span class=\"hljs-literal\">false</span>\n        })\n        <span class=\"hljs-keyword\">this</span>.sex.forEach(<span class=\"hljs-function\"><span class=\"hljs-params\">item</span>=&gt;</span>{\n            item.ischecked = <span class=\"hljs-literal\">false</span>\n        })\n\n        <span class=\"hljs-keyword\">this</span>.list1 = <span class=\"hljs-built_in\">JSON</span>.parse(<span class=\"hljs-built_in\">JSON</span>.stringify(listdata))\n        <span class=\"hljs-keyword\">this</span>.list2 = <span class=\"hljs-built_in\">JSON</span>.parse(<span class=\"hljs-built_in\">JSON</span>.stringify(listdata))\n        <span class=\"hljs-keyword\">this</span>.list3 = <span class=\"hljs-built_in\">JSON</span>.parse(<span class=\"hljs-built_in\">JSON</span>.stringify(listdata))\n        <span class=\"hljs-keyword\">this</span>.list4 = <span class=\"hljs-built_in\">JSON</span>.parse(<span class=\"hljs-built_in\">JSON</span>.stringify(<span class=\"hljs-keyword\">this</span>.sex))\n    }\n}\n&lt;<span class=\"hljs-regexp\">/script&gt;\n</span></code></pre>\n\n</section>";

/***/ },

/***/ 314:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var list = [{
	    title: '默认',
	    tableid: 0,
	    defaultlist: [{
	        id: 1,
	        name: '序号',
	        ischeck: false,
	        title: ''
	    }, {
	        id: 2,
	        name: '交易流水号',
	        ischeck: false,
	        title: ''
	    }, {
	        id: 3,
	        name: '交易门店',
	        ischeck: false,
	        title: ''
	    }, {
	        id: 4,
	        name: '消费时间',
	        ischeck: false,
	        title: ''
	    }, {
	        id: 5,
	        name: '消费金额',
	        ischeck: false,
	        title: ''
	    }, {
	        id: 6,
	        name: '实收金额',
	        ischeck: false,
	        title: ''
	    }, {
	        id: 7,
	        name: '支付方式',
	        ischeck: false,
	        title: ''
	    }, {
	        id: 8,
	        name: '支付类型',
	        ischeck: false,
	        title: ''
	    }, {
	        id: 9,
	        name: '交易状态',
	        ischeck: false,
	        title: ''
	    }, {
	        id: 10,
	        name: '是否会员',
	        ischeck: false,
	        title: ''
	    }],
	    addlist: [{
	        title: '支付详情',
	        list_data: [{
	            id: 11,
	            name: '支付账号',
	            isdisabled: false
	        }, {
	            id: 12,
	            name: '知店编号',
	            isdisabled: false
	        }, {
	            id: 13,
	            name: '发卡行',
	            isdisabled: false
	        }]
	    }, {
	        title: '会员信息',
	        list_data: [{
	            id: 21,
	            name: '用户手机号',
	            isdisabled: false
	        }, {
	            id: 22,
	            name: '消耗积分',
	            isdisabled: false
	        }]
	    }, {
	        title: '手续费',
	        list_data: [{
	            id: 31,
	            name: '签约扣率',
	            isdisabled: false
	        }, {
	            id: 32,
	            name: '手续费',
	            isdisabled: false
	        }]
	    }, {
	        title: '优惠明细',
	        list_data: [{
	            id: 41,
	            name: '可打折金额',
	            isdisabled: false
	        }, {
	            id: 42,
	            name: '本店折扣',
	            isdisabled: false
	        }, {
	            id: 43,
	            name: '本店优惠金额',
	            isdisabled: false
	        }, {
	            id: 44,
	            name: '使用优惠',
	            isdisabled: false
	        }]
	    }, {
	        title: '分期',
	        list_data: [{
	            id: 51,
	            name: '分期折扣差',
	            isdisabled: false
	        }, {
	            id: 52,
	            name: '分期利润',
	            isdisabled: false
	        }, {
	            id: 53,
	            name: '分期佣金',
	            isdisabled: false
	        }]
	    }]
	}];
	var datasource = {
	    title: '默认',
	    tableid: 0,
	    defaultlist: [{
	        id: 1,
	        name: '序号',
	        ischeck: false,
	        title: ''
	    }, {
	        id: 2,
	        name: '交易流水号',
	        ischeck: false,
	        title: ''
	    }, {
	        id: 3,
	        name: '交易门店',
	        ischeck: false,
	        title: ''
	    }, {
	        id: 4,
	        name: '消费时间',
	        ischeck: false,
	        title: ''
	    }, {
	        id: 5,
	        name: '消费金额',
	        ischeck: false,
	        title: ''
	    }, {
	        id: 6,
	        name: '实收金额',
	        ischeck: false,
	        title: ''
	    }, {
	        id: 7,
	        name: '支付方式',
	        ischeck: false,
	        title: ''
	    }, {
	        id: 8,
	        name: '支付类型',
	        ischeck: false,
	        title: ''
	    }, {
	        id: 9,
	        name: '交易状态',
	        ischeck: false,
	        title: ''
	    }, {
	        id: 10,
	        name: '是否会员',
	        ischeck: false,
	        title: ''
	    }],
	    addlist: [{
	        title: '支付详情',
	        list_data: [{
	            id: 11,
	            name: '支付账号',
	            isdisabled: false
	        }, {
	            id: 12,
	            name: '知店编号',
	            isdisabled: false
	        }, {
	            id: 13,
	            name: '发卡行',
	            isdisabled: false
	        }]
	    }, {
	        title: '会员信息',
	        list_data: [{
	            id: 21,
	            name: '用户手机号',
	            isdisabled: false
	        }, {
	            id: 22,
	            name: '消耗积分',
	            isdisabled: false
	        }]
	    }, {
	        title: '手续费',
	        list_data: [{
	            id: 31,
	            name: '签约扣率',
	            isdisabled: false
	        }, {
	            id: 32,
	            name: '手续费',
	            isdisabled: false
	        }]
	    }, {
	        title: '优惠明细',
	        list_data: [{
	            id: 41,
	            name: '可打折金额',
	            isdisabled: false
	        }, {
	            id: 42,
	            name: '本店折扣',
	            isdisabled: false
	        }, {
	            id: 43,
	            name: '本店优惠金额',
	            isdisabled: false
	        }, {
	            id: 44,
	            name: '使用优惠',
	            isdisabled: false
	        }]
	    }, {
	        title: '分期',
	        list_data: [{
	            id: 51,
	            name: '分期折扣差',
	            isdisabled: false
	        }, {
	            id: 52,
	            name: '分期利润',
	            isdisabled: false
	        }, {
	            id: 53,
	            name: '分期佣金',
	            isdisabled: false
	        }]
	    }]
	};

	var checkalllist = [{
	    id: 1,
	    name: '序号',
	    ischeck: false,
	    title: ''
	}, {
	    id: 2,
	    name: '交易流水号',
	    ischeck: false,
	    title: ''
	}, {
	    id: 3,
	    name: '交易门店',
	    ischeck: false,
	    title: ''
	}, {
	    id: 4,
	    name: '消费时间',
	    ischeck: false,
	    title: ''
	}, {
	    id: 5,
	    name: '消费金额',
	    ischeck: false,
	    title: ''
	}, {
	    id: 6,
	    name: '实收金额',
	    ischeck: false,
	    title: ''
	}, {
	    id: 7,
	    name: '支付方式',
	    ischeck: false,
	    title: ''
	}, {
	    id: 8,
	    name: '支付类型',
	    ischeck: false,
	    title: ''
	}, {
	    id: 9,
	    name: '交易状态',
	    ischeck: false,
	    title: ''
	}, {
	    id: 10,
	    name: '是否会员',
	    ischeck: false,
	    title: ''
	}, {
	    id: 11,
	    name: '支付账号',
	    ischeck: true,
	    title: '支付详情'
	}, {
	    id: 12,
	    name: '知店编号',
	    ischeck: true,
	    title: '支付详情'
	}, {
	    id: 13,
	    name: '发卡行',
	    ischeck: true,
	    title: '支付详情'
	}, {
	    id: 21,
	    name: '用户手机号',
	    ischeck: true,
	    title: '会员信息'
	}, {
	    id: 22,
	    name: '消耗积分',
	    ischeck: true,
	    title: '会员信息'
	}, {
	    id: 31,
	    name: '签约扣率',
	    ischeck: true,
	    title: '手续费'
	}, {
	    id: 32,
	    name: '手续费',
	    ischeck: true,
	    title: '手续费'
	}, {
	    id: 41,
	    name: '可打折金额',
	    ischeck: true,
	    title: '优惠明细'
	}, {
	    id: 42,
	    name: '本店折扣',
	    ischeck: true,
	    title: '优惠明细'
	}, {
	    id: 43,
	    name: '本店优惠金额',
	    ischeck: true,
	    title: '优惠明细'
	}, {
	    id: 44,
	    name: '使用优惠',
	    ischeck: true,
	    title: '优惠明细'
	}, {
	    id: 51,
	    name: '分期折扣差',
	    ischeck: true,
	    title: '分期'
	}, {
	    id: 52,
	    name: '分期利润',
	    ischeck: true,
	    title: '分期'
	}, {
	    id: 53,
	    name: '分期佣金',
	    ischeck: true,
	    title: '分期'
	}];

	var data = {
	    list: list,
	    datasource: datasource,
	    checkalllist: checkalllist
	};

	exports.default = data;

/***/ }

});