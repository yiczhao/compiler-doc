webpackJsonp([16],{

/***/ 129:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(130);

/***/ },

/***/ 130:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(131)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/dropchoose-18.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(133)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/dropchoose-18.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 131:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _data = __webpack_require__(132);

	var _data2 = _interopRequireDefault(_data);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    data: function data() {
	        return {
	            store_part1: {
	                choose_store: []
	            },
	            store_part2: {
	                choose_store: []
	            },
	            store_part3: {
	                choose_store: []
	            },
	            store_part0: {
	                choose_store: []
	            },
	            is_havechecked: true,
	            max_height: 300,
	            min_width: 400,
	            list: _data2.default
	        };
	    },

	    filters: {
	        filter_name: function filter_name(val) {
	            var choose_part = [];
	            if (val.choose_store.length) {
	                val.choose_store.forEach(function (k) {
	                    choose_part.push(k.name);
	                });
	            }
	            return choose_part.join(' , ');
	        }
	    },
	    methods: {},
	    ready: function ready() {}
	};
	// </script>
	// <template><section><h2>ksStore</h2>
	// <blockquote>
	// <p>常用的列表选择组件</p>
	// </blockquote>
	// <hr>
	// <p><ks-store :store_part.sync="store_part0" :list.sync="list" :is_havechecked="is_havechecked"><br>
	// </ks-store></p>
	// <br>
	// <p><span style="color:red;font-size:18px">已经选择：{{store_part0 | filter_name}}</span></p>
	// <hr>
	// <br>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-store</span>
	//     <span class="hljs-attr">:store_part.sync</span> = <span class="hljs-string">"store_part"</span>
	//     <span class="hljs-attr">:list.sync</span> = <span class="hljs-string">"list"</span>
	//     <span class="hljs-attr">:is_havechecked</span> = <span class="hljs-string">"is_havechecked"</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">ks-store</span>&gt;</span>
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
	// <td>is_havechecked</td>
	// <td>包括是否显示全选</td>
	// <td>Boolean</td>
	// <td>true, false</td>
	// <td>false</td>
	// <td>否</td>
	// </tr>
	// <tr>
	// <td>store_part</td>
	// <td>用于显示已选中的门店id</td>
	// <td>Object</td>
	// <td>无</td>
	// <td>无</td>
	// <td>是</td>
	// </tr>
	// <tr>
	// <td>list</td>
	// <td>用于获取门店列表</td>
	// <td>Array</td>
	// <td>无</td>
	// <td>无</td>
	// <td>是</td>
	// </tr>
	// <tr>
	// <td>store_list_show</td>
	// <td>用于是否显示门店列表</td>
	// <td>Boolean</td>
	// <td>true, false</td>
	// <td>false</td>
	// <td>否</td>
	// </tr>
	// <tr>
	// <td>max_height</td>
	// <td>显示下拉内容的最大高度</td>
	// <td>String</td>
	// <td>无</td>
	// <td>无</td>
	// <td>是</td>
	// </tr>
	// <tr>
	// <td>min_width</td>
	// <td>显示下拉内容的最小宽度</td>
	// <td>String</td>
	// <td>无</td>
	// <td>无</td>
	// <td>是</td>
	// </tr>
	// </tbody>
	// </table></div><pre class="ks-hljs"><code>&lt;script lang=<span class="hljs-string">"babel"</span>&gt;
	// <span class="hljs-keyword">import</span> list <span class="hljs-keyword">from</span> <span class="hljs-string">'SRC/doc/views/data/data.js'</span>
	// <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//     data(){
	//         <span class="hljs-keyword">return</span> {  
	//             <span class="hljs-attr">store_part</span>:{
	//                 <span class="hljs-attr">choose_store</span> : []
	//             },
	//             <span class="hljs-attr">is_havechecked</span>:<span class="hljs-literal">true</span>,
	//             <span class="hljs-attr">list</span>:list
	//         }  
	//     },
	//     <span class="hljs-attr">methods</span>:{},
	//     <span class="hljs-attr">filters</span>:{
	//         filter_name(val){
	//             <span class="hljs-keyword">var</span> choose_part = []
	//             <span class="hljs-keyword">if</span>(val.choose_store.length)
	//             {
	//                 val.choose_store.forEach(<span class="hljs-function">(<span class="hljs-params">k</span>)=&gt;</span>{
	//                     choose_part.push(k.name)
	//                 })
	//             }
	//             <span class="hljs-keyword">return</span> choose_part.join(<span class="hljs-string">' , '</span>)
	//         }
	//     }
	// }
	// &lt;<span class="hljs-regexp">/script&gt;
	// </span></code></pre>
	// <hr>
	// <br>
	// <h3>KsStoreClick</h3>
	// <blockquote>
	// <p>常用的列表选择扩展组件</p>
	// </blockquote>
	// <hr>
	// <p><ks-store-click :store_part.sync="store_part1" :list.sync="list"><br>
	// </ks-store-click></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-store-click</span>
	//         <span class="hljs-attr">:store_part.sync</span> = <span class="hljs-string">"store_part"</span>
	//         <span class="hljs-attr">:list.sync</span> = <span class="hljs-string">"list"</span>&gt;</span>
	// <span class="hljs-tag">&lt;/<span class="hljs-name">ks-store-click</span>&gt;</span>
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
	// <td>is_havechecked</td>
	// <td>包括是否显示全选</td>
	// <td>Boolean</td>
	// <td>true, false</td>
	// <td>false</td>
	// <td>否</td>
	// </tr>
	// <tr>
	// <td>store_part</td>
	// <td>用于显示已选中的门店id</td>
	// <td>Object</td>
	// <td>无</td>
	// <td>无</td>
	// <td>是</td>
	// </tr>
	// <tr>
	// <td>list</td>
	// <td>用于获取门店列表</td>
	// <td>Array</td>
	// <td>无</td>
	// <td>无</td>
	// <td>是</td>
	// </tr>
	// <tr>
	// <td>store_list_show</td>
	// <td>用于是否显示门店列表</td>
	// <td>Boolean</td>
	// <td>true, false</td>
	// <td>false</td>
	// <td>否</td>
	// </tr>
	// <tr>
	// <td>max_height</td>
	// <td>显示下拉内容的最大高度</td>
	// <td>String</td>
	// <td>无</td>
	// <td>无</td>
	// <td>是</td>
	// </tr>
	// <tr>
	// <td>min_width</td>
	// <td>显示下拉内容的最小宽度</td>
	// <td>String</td>
	// <td>无</td>
	// <td>无</td>
	// <td>是</td>
	// </tr>
	// </tbody>
	// </table></div><br>
	// <h3>ksStoreClick案例其他参数展示</h3>
	// <br>
	// <h4>1.加上全选按钮</h4>
	// <div>
	// <ks-store-click :store_part.sync="store_part2" :list.sync="list" :is_havechecked="is_havechecked">
	// </ks-store-click>
	// </div>
	// <pre class="ks-hljs"><code>&lt;ks-store-click
	//         :store_part.sync = <span class="hljs-string">"store_part"</span>
	//         :list.sync = <span class="hljs-string">"list"</span>
	//         :is_havechecked = <span class="hljs-string">"is_havechecked"</span>&gt;
	// <span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">ks-store-click</span>&gt;</span>
	// </span></code></pre>
	// <h4>2.加上宽高</h4>
	// <div>
	// <ks-store-click :store_part.sync="store_part3" :list.sync="list" :max_height="max_height" :min_width="min_width">
	// </ks-store-click>
	// </div>
	// <pre class="ks-hljs"><code>&lt;ks-store-click
	//         :store_part.sync = <span class="hljs-string">"store_part"</span>
	//         :list.sync = <span class="hljs-string">"list"</span>
	//         :max_height = <span class="hljs-string">"max_height"</span>
	//         :min_width = <span class="hljs-string">"min_width"</span>&gt;
	// <span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">ks-store-click</span>&gt;</span>
	// </span></code></pre>
	// <h4>3.代码如下</h4>
	// <pre class="ks-hljs"><code>&lt;script&gt;
	// <span class="hljs-keyword">import</span> list <span class="hljs-keyword">from</span> <span class="hljs-string">'SRC/doc/views/data/data.js'</span>
	// <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//     data(){
	//         <span class="hljs-keyword">return</span> {  
	//             <span class="hljs-attr">store_part</span>:{
	//                 <span class="hljs-attr">choose_store</span> : []
	//             },
	//             <span class="hljs-attr">is_havechecked</span>:<span class="hljs-literal">true</span>,
	//             <span class="hljs-attr">max_height</span>:<span class="hljs-number">300</span>,
	//             <span class="hljs-attr">min_width</span>:<span class="hljs-number">400</span>,
	//             <span class="hljs-attr">list</span>:list
	//         }  
	//     },
	//     <span class="hljs-attr">methods</span>:{}
	// }
	// &lt;<span class="hljs-regexp">/script&gt;
	// </span></code></pre>
	//
	// </section></template>
	//
	// <script>

/***/ },

/***/ 132:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = [{
	    "id": "086021000000006",
	    "name": "上海卡说",
	    "longitude": 0,
	    "latitude": 0,
	    "logo": null,
	    "pid": null,
	    "addr": "上海卡说3",
	    "contactor": "张三",
	    "contact_phone": "18611111111",
	    "city_code": 310100,
	    "province_code": 310000,
	    "district_code": 310110,
	    "store_user_id": [2085600537249792, 2077070317783040, 2009107646679040, 2009110680291328, 2076959849662464, 2055754986784768, 2055752790345728, 2054320971368448, 2054276754278400, 2054146978793472, 2054079558404096, 2013479661111296, 2013098723330048, 2013097614854144, 2013086356719616, 2013084138899456, 2013083314685952, 2013082323257344, 2013082027591680, 2013081710184448, 2013071241840640, 2013069269583872, 2009159108200448, 2011624801044480, 2011620206217216],
	    "position_num": "22222",
	    "floor_name": null,
	    "area_name": "",
	    "store_area": 22222,
	    "store_category": 2007693365217280,
	    "store_contactor": "张11111111",
	    "store_phone": "15811111111"
	}, {
	    "id": "086021000000009",
	    "name": "渝乡人家",
	    "longitude": 0,
	    "latitude": 0,
	    "logo": null,
	    "pid": 2007693720946688,
	    "addr": "上海市浦东新区正大广场",
	    "contactor": "章",
	    "contact_phone": "15223652365",
	    "city_code": 310100,
	    "province_code": 310000,
	    "district_code": 310115,
	    "store_user_id": [2085600537249792, 2077070317783040, 2009096888354816, 2076959849662464, 2055754986784768, 2055752790345728, 2054320971368448, 2054146978793472, 2054079558404096, 2013479661111296, 2013084138899456, 2013083314685952, 2013082323257344, 2013082027591680, 2013041341368320, 2009159491848192, 2009108537067520],
	    "position_num": "2",
	    "floor_name": null,
	    "area_name": "",
	    "store_area": 2,
	    "store_category": 2007693845317632,
	    "store_contactor": "章",
	    "store_phone": "15223652365"
	}, {
	    "id": "086021000000011",
	    "name": "渝乡人家",
	    "longitude": 0,
	    "latitude": 0,
	    "logo": null,
	    "pid": 2007693720946688,
	    "addr": "上海市浦东新区正大广场",
	    "contactor": "章",
	    "contact_phone": "11011101",
	    "city_code": 310100,
	    "province_code": 310000,
	    "district_code": 310115,
	    "store_user_id": [2085600537249792, 2077070317783040, 2076959849662464, 2055754986784768, 2055752790345728, 2054320971368448, 2054146978793472, 2054079558404096, 2009114505463808, 2013010419779584, 2009159491848192],
	    "position_num": "3243",
	    "floor_name": null,
	    "area_name": "",
	    "store_area": 32,
	    "store_category": 2007694036797440,
	    "store_contactor": "章",
	    "store_phone": "15223652365"
	}, {
	    "id": "053100180000001001",
	    "name": "江南小厨总店",
	    "longitude": 0,
	    "latitude": 0,
	    "logo": null,
	    "pid": null,
	    "addr": "山东省济南市历下区泉城路77号希努尔大厦1楼",
	    "contactor": null,
	    "contact_phone": "15610188818",
	    "city_code": 370100,
	    "province_code": 370000,
	    "district_code": 370102,
	    "store_user_id": [2085600537249792, 2077070317783040, 2009109932722176, 2055752790345728, 2054146978793472, 2011798767912960, 2009109687568384, 2009108537067520],
	    "position_num": null,
	    "floor_name": null,
	    "area_name": null,
	    "store_area": 0,
	    "store_category": null,
	    "store_contactor": null,
	    "store_phone": null
	}, {
	    "id": "086073000022157",
	    "name": "岳阳康星百货有限公司",
	    "longitude": 0,
	    "latitude": 0,
	    "logo": null,
	    "pid": 2007693365217280,
	    "addr": "步行街第一大厦",
	    "contactor": "硕大的",
	    "contact_phone": "15236523652",
	    "city_code": 430600,
	    "province_code": 430000,
	    "district_code": 430603,
	    "store_user_id": [2085600537249792, 2076959849662464, 2076741847123968, 2055752790345728, 2054146978793472, 2009116289615872],
	    "position_num": "1",
	    "floor_name": "null",
	    "area_name": "null",
	    "store_area": 0,
	    "store_category": 2007693620889600,
	    "store_contactor": "章",
	    "store_phone": "15232563652"
	}, {
	    "id": "037100750000014001",
	    "name": "郑州市美邦商贸",
	    "longitude": 0,
	    "latitude": 0,
	    "logo": null,
	    "pid": null,
	    "addr": "河南省郑州市二七区连云路橄榄城伍号院小区10号楼2单元2207号",
	    "contactor": null,
	    "contact_phone": "18638547626",
	    "city_code": 410100,
	    "province_code": 410000,
	    "district_code": 410103,
	    "store_user_id": [2085600537249792, 2076959849662464, 2055752790345728, 2054146978793472, 2013098723330048, 2013041983981568, 2009108537067520],
	    "position_num": null,
	    "floor_name": null,
	    "area_name": null,
	    "store_area": 0,
	    "store_category": null,
	    "store_contactor": null,
	    "store_phone": null
	}, {
	    "id": "086073100022169",
	    "name": "湘潭步步高易俗河店",
	    "longitude": 0,
	    "latitude": 0,
	    "logo": null,
	    "pid": null,
	    "addr": "步步高店",
	    "contactor": null,
	    "contact_phone": null,
	    "city_code": 430300,
	    "province_code": 430000,
	    "district_code": 430302,
	    "store_user_id": [2085600537249792, 2076959849662464, 2076741847123968, 2055752790345728, 2054146978793472, 2009137443588096],
	    "position_num": null,
	    "floor_name": null,
	    "area_name": null,
	    "store_area": 0,
	    "store_category": null,
	    "store_contactor": null,
	    "store_phone": null
	}, {
	    "id": "002700400000428001",
	    "name": "武汉众城苏荷实业有限公司",
	    "longitude": 0,
	    "latitude": 0,
	    "logo": null,
	    "pid": null,
	    "addr": "湖北省武汉市江汉区姑嫂树路10号新华锦绣1栋1单元1层1室",
	    "contactor": null,
	    "contact_phone": "13871999548",
	    "city_code": 420100,
	    "province_code": 420000,
	    "district_code": 420103,
	    "store_user_id": [2085600537249792, 2076959849662464, 2075645287221248, 2055752790345728, 2054146978793472, 2013010419779584, 2013004468013056],
	    "position_num": null,
	    "floor_name": null,
	    "area_name": null,
	    "store_area": 0,
	    "store_category": null,
	    "store_contactor": null,
	    "store_phone": null
	}];

/***/ },

/***/ 133:
/***/ function(module, exports) {

	module.exports = "<section><h2>ksStore</h2>\n<blockquote>\n<p>常用的列表选择组件</p>\n</blockquote>\n<hr>\n<p><ks-store :store_part.sync=\"store_part0\" :list.sync=\"list\" :is_havechecked=\"is_havechecked\"><br>\n</ks-store></p>\n<br>\n<p><span style=\"color:red;font-size:18px\">已经选择：{{store_part0 | filter_name}}</span></p>\n<hr>\n<br>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-store</span>\n    <span class=\"hljs-attr\">:store_part.sync</span> = <span class=\"hljs-string\">\"store_part\"</span>\n    <span class=\"hljs-attr\">:list.sync</span> = <span class=\"hljs-string\">\"list\"</span>\n    <span class=\"hljs-attr\">:is_havechecked</span> = <span class=\"hljs-string\">\"is_havechecked\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-store</span>&gt;</span>\n</code></pre>\n<h3>API</h3>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>可选值</th>\n<th>默认值</th>\n<th>是否必须</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>is_havechecked</td>\n<td>包括是否显示全选</td>\n<td>Boolean</td>\n<td>true, false</td>\n<td>false</td>\n<td>否</td>\n</tr>\n<tr>\n<td>store_part</td>\n<td>用于显示已选中的门店id</td>\n<td>Object</td>\n<td>无</td>\n<td>无</td>\n<td>是</td>\n</tr>\n<tr>\n<td>list</td>\n<td>用于获取门店列表</td>\n<td>Array</td>\n<td>无</td>\n<td>无</td>\n<td>是</td>\n</tr>\n<tr>\n<td>store_list_show</td>\n<td>用于是否显示门店列表</td>\n<td>Boolean</td>\n<td>true, false</td>\n<td>false</td>\n<td>否</td>\n</tr>\n<tr>\n<td>max_height</td>\n<td>显示下拉内容的最大高度</td>\n<td>String</td>\n<td>无</td>\n<td>无</td>\n<td>是</td>\n</tr>\n<tr>\n<td>min_width</td>\n<td>显示下拉内容的最小宽度</td>\n<td>String</td>\n<td>无</td>\n<td>无</td>\n<td>是</td>\n</tr>\n</tbody>\n</table></div><pre class=\"ks-hljs\"><code>&lt;script lang=<span class=\"hljs-string\">\"babel\"</span>&gt;\n<span class=\"hljs-keyword\">import</span> list <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'SRC/doc/views/data/data.js'</span>\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n    data(){\n        <span class=\"hljs-keyword\">return</span> {  \n            <span class=\"hljs-attr\">store_part</span>:{\n                <span class=\"hljs-attr\">choose_store</span> : []\n            },\n            <span class=\"hljs-attr\">is_havechecked</span>:<span class=\"hljs-literal\">true</span>,\n            <span class=\"hljs-attr\">list</span>:list\n        }  \n    },\n    <span class=\"hljs-attr\">methods</span>:{},\n    <span class=\"hljs-attr\">filters</span>:{\n        filter_name(val){\n            <span class=\"hljs-keyword\">var</span> choose_part = []\n            <span class=\"hljs-keyword\">if</span>(val.choose_store.length)\n            {\n                val.choose_store.forEach(<span class=\"hljs-function\">(<span class=\"hljs-params\">k</span>)=&gt;</span>{\n                    choose_part.push(k.name)\n                })\n            }\n            <span class=\"hljs-keyword\">return</span> choose_part.join(<span class=\"hljs-string\">' , '</span>)\n        }\n    }\n}\n&lt;<span class=\"hljs-regexp\">/script&gt;\n</span></code></pre>\n<hr>\n<br>\n<h3>KsStoreClick</h3>\n<blockquote>\n<p>常用的列表选择扩展组件</p>\n</blockquote>\n<hr>\n<p><ks-store-click :store_part.sync=\"store_part1\" :list.sync=\"list\"><br>\n</ks-store-click></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-store-click</span>\n        <span class=\"hljs-attr\">:store_part.sync</span> = <span class=\"hljs-string\">\"store_part\"</span>\n        <span class=\"hljs-attr\">:list.sync</span> = <span class=\"hljs-string\">\"list\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-store-click</span>&gt;</span>\n</code></pre>\n<h3>API</h3>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>可选值</th>\n<th>默认值</th>\n<th>是否必须</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>is_havechecked</td>\n<td>包括是否显示全选</td>\n<td>Boolean</td>\n<td>true, false</td>\n<td>false</td>\n<td>否</td>\n</tr>\n<tr>\n<td>store_part</td>\n<td>用于显示已选中的门店id</td>\n<td>Object</td>\n<td>无</td>\n<td>无</td>\n<td>是</td>\n</tr>\n<tr>\n<td>list</td>\n<td>用于获取门店列表</td>\n<td>Array</td>\n<td>无</td>\n<td>无</td>\n<td>是</td>\n</tr>\n<tr>\n<td>store_list_show</td>\n<td>用于是否显示门店列表</td>\n<td>Boolean</td>\n<td>true, false</td>\n<td>false</td>\n<td>否</td>\n</tr>\n<tr>\n<td>max_height</td>\n<td>显示下拉内容的最大高度</td>\n<td>String</td>\n<td>无</td>\n<td>无</td>\n<td>是</td>\n</tr>\n<tr>\n<td>min_width</td>\n<td>显示下拉内容的最小宽度</td>\n<td>String</td>\n<td>无</td>\n<td>无</td>\n<td>是</td>\n</tr>\n</tbody>\n</table></div><br>\n<h3>ksStoreClick案例其他参数展示</h3>\n<br>\n<h4>1.加上全选按钮</h4>\n<div>\n<ks-store-click :store_part.sync=\"store_part2\" :list.sync=\"list\" :is_havechecked=\"is_havechecked\">\n</ks-store-click>\n</div>\n<pre class=\"ks-hljs\"><code>&lt;ks-store-click\n        :store_part.sync = <span class=\"hljs-string\">\"store_part\"</span>\n        :list.sync = <span class=\"hljs-string\">\"list\"</span>\n        :is_havechecked = <span class=\"hljs-string\">\"is_havechecked\"</span>&gt;\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-store-click</span>&gt;</span>\n</span></code></pre>\n<h4>2.加上宽高</h4>\n<div>\n<ks-store-click :store_part.sync=\"store_part3\" :list.sync=\"list\" :max_height=\"max_height\" :min_width=\"min_width\">\n</ks-store-click>\n</div>\n<pre class=\"ks-hljs\"><code>&lt;ks-store-click\n        :store_part.sync = <span class=\"hljs-string\">\"store_part\"</span>\n        :list.sync = <span class=\"hljs-string\">\"list\"</span>\n        :max_height = <span class=\"hljs-string\">\"max_height\"</span>\n        :min_width = <span class=\"hljs-string\">\"min_width\"</span>&gt;\n<span class=\"xml\"><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-store-click</span>&gt;</span>\n</span></code></pre>\n<h4>3.代码如下</h4>\n<pre class=\"ks-hljs\"><code>&lt;script&gt;\n<span class=\"hljs-keyword\">import</span> list <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'SRC/doc/views/data/data.js'</span>\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n    data(){\n        <span class=\"hljs-keyword\">return</span> {  \n            <span class=\"hljs-attr\">store_part</span>:{\n                <span class=\"hljs-attr\">choose_store</span> : []\n            },\n            <span class=\"hljs-attr\">is_havechecked</span>:<span class=\"hljs-literal\">true</span>,\n            <span class=\"hljs-attr\">max_height</span>:<span class=\"hljs-number\">300</span>,\n            <span class=\"hljs-attr\">min_width</span>:<span class=\"hljs-number\">400</span>,\n            <span class=\"hljs-attr\">list</span>:list\n        }  \n    },\n    <span class=\"hljs-attr\">methods</span>:{}\n}\n&lt;<span class=\"hljs-regexp\">/script&gt;\n</span></code></pre>\n\n</section>";

/***/ }

});