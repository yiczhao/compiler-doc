webpackJsonp([10],{

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(75);

/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(76)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] node_modules/vue-markdown-loader/_cache/date-picker-3.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(77)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "/Users/zdzdesigner/Documents/KS/KS-FED/compiler-doc/node_modules/vue-markdown-loader/_cache/date-picker-3.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 76:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template><section><h2>DatePicker</h2>
	// <blockquote>
	// <p><strong>Author:张大柱</strong><br>
	// 常用的日期组件</p>
	// </blockquote>
	// <hr>
	// <h3>基础使用 （分类）</h3>
	// <blockquote>
	// <h4><strong>KsDateMonth =&gt; {{datemonth}}</strong></h4>
	// </blockquote>
	// <p><ks-date-month v-bind:value.sync="datemonth"></ks-date-month></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-date-month</span> <span class="hljs-attr">v-bind:value.sync</span>=<span class="hljs-string">"datemonth"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-date-month</span>&gt;</span>
	// </code></pre>
	// <blockquote>
	// <blockquote>
	// <h4><strong>KsDatePicker  =&gt; {{datemonth2}}</strong></h4>
	// </blockquote>
	// </blockquote>
	// <p><ks-date-picker type="datemonth" v-bind:value.sync="datemonth2"></ks-date-picker></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-date-picker</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"datemonth"</span> 
	//     <span class="hljs-attr">v-bind:value.sync</span>=<span class="hljs-string">"datemonth2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-date-picker</span>&gt;</span>
	// </code></pre>
	// <blockquote>
	// <blockquote>
	// <h4><strong>KsDatePicker V1.0.0 【min、max】=&gt; {{datemonth3}}</strong></h4>
	// </blockquote>
	// </blockquote>
	// <p><ks-date-picker type="datemonth" min="2017-11" max="2018-09" v-bind:value.sync="datemonth3"></ks-date-picker></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-date-picker</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"datemonth"</span> <span class="hljs-attr">min</span>=<span class="hljs-string">"2017-09"</span> <span class="hljs-attr">max</span>=<span class="hljs-string">"2018-09"</span>
	//     <span class="hljs-attr">v-bind:value.sync</span>=<span class="hljs-string">"datemonth3"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-date-picker</span>&gt;</span>
	// </code></pre>
	// <blockquote>
	// <h4><strong>date =&gt; {{date}}</strong></h4>
	// </blockquote>
	// <p><ks-dater type="date" v-bind:value.sync="date" v-on:change="date_change"></ks-dater></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-dater</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"date"</span>
	//     <span class="hljs-attr">v-bind:value.sync</span>=<span class="hljs-string">"date"</span> 
	//     <span class="hljs-attr">v-on:change</span>=<span class="hljs-string">"date_change"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-dater</span>&gt;</span>
	// </code></pre>
	// <blockquote>
	// <blockquote>
	// <h4><strong>date on KsDatePicker V1.0.0 【min、max】=&gt; {{date}}</strong></h4>
	// </blockquote>
	// </blockquote>
	// <p><ks-date-picker type="date" min="2016-10-12" max="2017-10-17" v-bind:value.sync="date" v-on:change="date_change"></ks-date-picker></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-date-picker</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"date"</span> <span class="hljs-attr">min</span>=<span class="hljs-string">"2016-10-12"</span> <span class="hljs-attr">max</span>=<span class="hljs-string">"2017-10-17"</span>
	//     <span class="hljs-attr">v-bind:value.sync</span>=<span class="hljs-string">"date"</span> 
	//     <span class="hljs-attr">v-on:change</span>=<span class="hljs-string">"date_change"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-date-picker</span>&gt;</span>
	// </code></pre>
	// <blockquote>
	// <h4><strong>datetime on KsDatePicker =&gt; {{datetime}}</strong></h4>
	// </blockquote>
	// <p><ks-date-picker type="datetime" v-bind:value.sync="datetime" v-on:change="datetime_change"></ks-date-picker></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-date-picker</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"datetime"</span> 
	//     <span class="hljs-attr">v-bind:value.sync</span>=<span class="hljs-string">"datetime"</span> 
	//     <span class="hljs-attr">v-on:change</span>=<span class="hljs-string">"datetime_change"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-date-picker</span>&gt;</span> 
	// </code></pre>
	// <blockquote>
	// <h4><strong>datemulti on KsDater =&gt; {{dateMultiPure}}</strong></h4>
	// </blockquote>
	// <p><ks-dater type="datemulti" v-bind:value.sync="dateMultiPure" v-on:change="dateMultiPureChange"></ks-dater></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-dater</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"datemulti"</span> 
	//     <span class="hljs-attr">v-bind:value.sync</span>=<span class="hljs-string">"dateMultiPure"</span> 
	//     <span class="hljs-attr">v-on:change</span>=<span class="hljs-string">"dateMultiPureChange"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-dater</span>&gt;</span>
	// </code></pre>
	// <blockquote>
	// <h4><strong>datemulti on KsDatePicker =&gt; {{datemulti}}</strong></h4>
	// </blockquote>
	// <p><ks-date-picker type="datemulti" v-bind:value.sync="datemulti" v-on:change="datemulti_change"></ks-date-picker></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-date-picker</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"datemulti"</span> 
	//     <span class="hljs-attr">v-bind:value.sync</span>=<span class="hljs-string">"datemulti"</span> 
	//     <span class="hljs-attr">v-on:change</span>=<span class="hljs-string">"datemulti_change"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-date-picker</span>&gt;</span>
	// </code></pre>
	// <blockquote>
	// <h4><strong>daterange</strong></h4>
	// </blockquote>
	// <p><ks-dater-range v-bind:range.sync="['','']" v-on:change="daterange_change"></ks-dater-range></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-dater-range</span> 
	//     <span class="hljs-attr">v-bind:range.sync</span>=<span class="hljs-string">"['','']"</span> 
	//     <span class="hljs-attr">v-on:change</span>=<span class="hljs-string">"daterange_change"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-dater-range</span>&gt;</span>
	// </code></pre>
	// <blockquote>
	// <h4><strong>daterange picker =&gt; {{dateRangePicker}}</strong></h4>
	// </blockquote>
	// <p><ks-date-range-picker placeholder="开始,结束" v-bind:range.sync="dateRangePicker" v-bind:readonly="false" v-on:change="daterange_picker_change"></ks-date-range-picker></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-date-range-picker</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"开始,结束"</span> 
	//         <span class="hljs-attr">v-bind:range.sync</span>=<span class="hljs-string">"dateRangePicker"</span>
	//         <span class="hljs-attr">v-bind:readonly</span>=<span class="hljs-string">"false"</span>
	//         <span class="hljs-attr">v-on:change</span>=<span class="hljs-string">"daterange_picker_change"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-date-range-picker</span>&gt;</span>
	// </code></pre>
	// <p><ks-date-range-picker placeholder="开始,结束" v-bind:range.sync="dateRangePicker2" v-bind:readonly="true" v-on:change="daterange_picker_change"></ks-date-range-picker></p>
	// <pre class="ks-hljs"><code><span class="hljs-tag">&lt;<span class="hljs-name">ks-date-range-picker</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"开始,结束"</span> 
	//         <span class="hljs-attr">v-bind:range.sync</span>=<span class="hljs-string">"dateRangePicker2"</span>
	//         <span class="hljs-attr">v-bind:readonly</span>=<span class="hljs-string">"true"</span>
	//         <span class="hljs-attr">v-on:change</span>=<span class="hljs-string">"daterange_picker_change"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">ks-date-range-picker</span>&gt;</span>
	// </code></pre>
	// <h3>非范围日期组件API</h3>
	// <div class="table-striped"><table class="table-entity"><thead>
	// <tr>
	// <th>参数</th>
	// <th>版本</th>
	// <th>说明</th>
	// <th>接口类型</th>
	// <th>类型</th>
	// <th>可选值</th>
	// <th>默认值</th>
	// </tr>
	// </thead>
	// <tbody>
	// <tr>
	// <td>type</td>
	// <td></td>
	// <td>dater类型</td>
	// <td>props</td>
	// <td>String</td>
	// <td><strong>date</strong>, <strong>datetime</strong>,<strong>datemonth</strong>, <strong>datemulti</strong></td>
	// <td>date</td>
	// </tr>
	// <tr>
	// <td>value</td>
	// <td></td>
	// <td>数据中绑定的值（可sync）</td>
	// <td>props</td>
	// <td>String</td>
	// <td><strong>date=&gt;'2016-11-09'</strong>，<strong>datemonth=&gt;'2016-09'</strong>，<strong>datetime=&gt;'2016-11-09 03:04:20'</strong>，<strong>datemulti=&gt;'2016-11-09,2016-11-10'</strong></td>
	// <td>无</td>
	// </tr>
	// <tr>
	// <td>min</td>
	// <td>V1.0.0</td>
	// <td>最小范围</td>
	// <td>props</td>
	// <td>String</td>
	// <td><strong>date=&gt;'2016-11-09'</strong>，<strong>datemonth=&gt;'2016-09'</strong></td>
	// <td>无</td>
	// </tr>
	// <tr>
	// <td>max</td>
	// <td>V1.0.0</td>
	// <td>最大范围</td>
	// <td>props</td>
	// <td>String</td>
	// <td><strong>date=&gt;'2016-11-09'</strong>，<strong>datemonth=&gt;'2016-09'</strong></td>
	// <td>无</td>
	// </tr>
	// <tr>
	// <td>readonly</td>
	// <td></td>
	// <td>是否只读</td>
	// <td>props</td>
	// <td>Boolean</td>
	// <td><code class="ks-code-inline">true</code>, <code class="ks-code-inline">false</code></td>
	// <td><code class="ks-code-inline">false</code></td>
	// </tr>
	// <tr>
	// <td>change</td>
	// <td></td>
	// <td>组件中日期时间改变复值</td>
	// <td>props</td>
	// <td>Function</td>
	// <td><code class="ks-code-inline">可不设置change</code></td>
	// <td>无</td>
	// </tr>
	// </tbody>
	// </table></div><h3>范围日期组件API（区别部分如下）</h3>
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
	// <td>type</td>
	// <td>无type类型</td>
	// <td>null</td>
	// <td>null</td>
	// <td>null</td>
	// <td>null</td>
	// </tr>
	// <tr>
	// <td>value</td>
	// <td>数据中绑定的值（可sync）</td>
	// <td>props</td>
	// <td>Array</td>
	// <td><strong>[]</strong></td>
	// <td><strong>[]</strong></td>
	// </tr>
	// </tbody>
	// </table></div><pre class="ks-hljs"><code>&lt;script&gt;
	//     <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
	//         data(){
	//             <span class="hljs-keyword">return</span> {
	//                 <span class="hljs-attr">datemonth</span>:<span class="hljs-string">'2016-10'</span>,
	//                 <span class="hljs-attr">datemonth2</span>:<span class="hljs-string">'2016-10'</span>,
	//                 <span class="hljs-attr">datemonth3</span>:<span class="hljs-string">'2016-10'</span>,
	//                 <span class="hljs-attr">datetime</span>:<span class="hljs-string">'2016-10-12 03:04:20'</span>,
	//                 <span class="hljs-attr">date</span>:<span class="hljs-string">''</span>,
	//                 <span class="hljs-attr">datemulti</span>:<span class="hljs-string">''</span>,
	//                 <span class="hljs-attr">dateMultiPure</span>:<span class="hljs-string">''</span>,
	//                 <span class="hljs-attr">date_base</span>:<span class="hljs-string">'2016-10-12 03:04:20'</span>,
	//                 <span class="hljs-attr">dateRangePicker</span>:[],
	//                 <span class="hljs-attr">dateRangePicker2</span>:[<span class="hljs-string">''</span>,<span class="hljs-string">''</span>]
	//             }
	//         },
	//         <span class="hljs-attr">methods</span>:{
	//             current_change(val){
	//                 <span class="hljs-keyword">this</span>.date_base = val
	//             },
	//             datetime_change(val){},
	//             date_change(val){
	//                 <span class="hljs-comment">// console.log('parent catch change value',val)</span>
	//             },
	//             datemulti_change(val){
	//                 <span class="hljs-comment">// console.log('筛选 picker',val)</span>
	//                 <span class="hljs-keyword">if</span>(!val){
	//                     <span class="hljs-comment">// setTimeout(()=&gt;{</span>
	//                         <span class="hljs-comment">// this.datemulti = '2016-11-02'            </span>
	//                     <span class="hljs-comment">// })</span>
	//                 }
	//
	//             },
	//             dateMultiPureChange(){
	//
	//             },
	//             daterange_change(val){
	//                 <span class="hljs-built_in">console</span>.log(val)
	//             },
	//             daterange_picker_change(val){
	//                 <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'多选 picker'</span>,val)
	//             }
	//         },
	//         ready(){
	//             <span class="hljs-keyword">this</span>.date1 = <span class="hljs-string">'2016-09-21 03:02:24'</span>
	//
	//             setTimeout(<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
	//                 <span class="hljs-keyword">this</span>.dateRangePicker = [<span class="hljs-string">'2016-09-21'</span>,<span class="hljs-string">'2016-10-29'</span>]
	//             },<span class="hljs-number">1000</span>)
	//
	//             setTimeout(<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
	//                 <span class="hljs-keyword">this</span>.dateRangePicker2 = [<span class="hljs-string">''</span>,<span class="hljs-string">''</span>]
	//             },<span class="hljs-number">10000</span>)
	//
	//             setTimeout(<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
	//                 <span class="hljs-keyword">this</span>.datemonth2 = <span class="hljs-string">'2016-09'</span>
	//             },<span class="hljs-number">1000</span>)
	//         }
	//
	//     }
	// &lt;<span class="hljs-regexp">/script&gt;
	// </span></code></pre>
	//
	// </section></template>
	//
	// <script>
	exports.default = {
	    data: function data() {
	        return {

	            datemonth: '2016-10',
	            datemonth2: '2016-10',
	            datemonth3: '2016-10',
	            datetime: '2016-10-12 03:04:20',
	            date: '',
	            datemulti: '',
	            dateMultiPure: '',
	            date_base: '2016-10-12 03:04:20',
	            dateRangePicker: [],
	            dateRangePicker2: ['', '']
	        };
	    },

	    methods: {
	        current_change: function current_change(val) {
	            this.date_base = val;
	        },
	        datetime_change: function datetime_change(val) {},
	        date_change: function date_change(val) {
	            // console.log('parent catch change value',val)
	        },
	        datemulti_change: function datemulti_change(val) {
	            // console.log('筛选 picker',val)
	            // if(!val){
	            //     // setTimeout(()=>{
	            //         this.datemulti = '2016-11-02'            
	            //     // })
	            // }

	        },
	        dateMultiPureChange: function dateMultiPureChange() {},
	        daterange_change: function daterange_change(val) {
	            console.log(val);
	        },
	        daterange_picker_change: function daterange_picker_change(val) {
	            console.log('多选 picker', val);
	        }
	    },
	    ready: function ready() {
	        var _this = this;

	        this.date1 = '2016-09-21 03:02:24';

	        setTimeout(function () {
	            _this.dateRangePicker = ['2016-09-21', '2016-10-29'];
	        }, 1000);

	        setTimeout(function () {
	            _this.dateRangePicker2 = ['', ''];
	        }, 10000);

	        setTimeout(function () {
	            _this.datemonth2 = '2016-09';
	        }, 1000);
	    }
	};
	// </script>

/***/ },

/***/ 77:
/***/ function(module, exports) {

	module.exports = "<section><h2>DatePicker</h2>\n<blockquote>\n<p><strong>Author:张大柱</strong><br>\n常用的日期组件</p>\n</blockquote>\n<hr>\n<h3>基础使用 （分类）</h3>\n<blockquote>\n<h4><strong>KsDateMonth =&gt; {{datemonth}}</strong></h4>\n</blockquote>\n<p><ks-date-month v-bind:value.sync=\"datemonth\"></ks-date-month></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-date-month</span> <span class=\"hljs-attr\">v-bind:value.sync</span>=<span class=\"hljs-string\">\"datemonth\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-date-month</span>&gt;</span>\n</code></pre>\n<blockquote>\n<blockquote>\n<h4><strong>KsDatePicker  =&gt; {{datemonth2}}</strong></h4>\n</blockquote>\n</blockquote>\n<p><ks-date-picker type=\"datemonth\" v-bind:value.sync=\"datemonth2\"></ks-date-picker></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-date-picker</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"datemonth\"</span> \n    <span class=\"hljs-attr\">v-bind:value.sync</span>=<span class=\"hljs-string\">\"datemonth2\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-date-picker</span>&gt;</span>\n</code></pre>\n<blockquote>\n<blockquote>\n<h4><strong>KsDatePicker V1.0.0 【min、max】=&gt; {{datemonth3}}</strong></h4>\n</blockquote>\n</blockquote>\n<p><ks-date-picker type=\"datemonth\" min=\"2017-11\" max=\"2018-09\" v-bind:value.sync=\"datemonth3\"></ks-date-picker></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-date-picker</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"datemonth\"</span> <span class=\"hljs-attr\">min</span>=<span class=\"hljs-string\">\"2017-09\"</span> <span class=\"hljs-attr\">max</span>=<span class=\"hljs-string\">\"2018-09\"</span>\n    <span class=\"hljs-attr\">v-bind:value.sync</span>=<span class=\"hljs-string\">\"datemonth3\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-date-picker</span>&gt;</span>\n</code></pre>\n<blockquote>\n<h4><strong>date =&gt; {{date}}</strong></h4>\n</blockquote>\n<p><ks-dater type=\"date\" v-bind:value.sync=\"date\" v-on:change=\"date_change\"></ks-dater></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-dater</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"date\"</span>\n    <span class=\"hljs-attr\">v-bind:value.sync</span>=<span class=\"hljs-string\">\"date\"</span> \n    <span class=\"hljs-attr\">v-on:change</span>=<span class=\"hljs-string\">\"date_change\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-dater</span>&gt;</span>\n</code></pre>\n<blockquote>\n<blockquote>\n<h4><strong>date on KsDatePicker V1.0.0 【min、max】=&gt; {{date}}</strong></h4>\n</blockquote>\n</blockquote>\n<p><ks-date-picker type=\"date\" min=\"2016-10-12\" max=\"2017-10-17\" v-bind:value.sync=\"date\" v-on:change=\"date_change\"></ks-date-picker></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-date-picker</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"date\"</span> <span class=\"hljs-attr\">min</span>=<span class=\"hljs-string\">\"2016-10-12\"</span> <span class=\"hljs-attr\">max</span>=<span class=\"hljs-string\">\"2017-10-17\"</span>\n    <span class=\"hljs-attr\">v-bind:value.sync</span>=<span class=\"hljs-string\">\"date\"</span> \n    <span class=\"hljs-attr\">v-on:change</span>=<span class=\"hljs-string\">\"date_change\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-date-picker</span>&gt;</span>\n</code></pre>\n<blockquote>\n<h4><strong>datetime on KsDatePicker =&gt; {{datetime}}</strong></h4>\n</blockquote>\n<p><ks-date-picker type=\"datetime\" v-bind:value.sync=\"datetime\" v-on:change=\"datetime_change\"></ks-date-picker></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-date-picker</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"datetime\"</span> \n    <span class=\"hljs-attr\">v-bind:value.sync</span>=<span class=\"hljs-string\">\"datetime\"</span> \n    <span class=\"hljs-attr\">v-on:change</span>=<span class=\"hljs-string\">\"datetime_change\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-date-picker</span>&gt;</span> \n</code></pre>\n<blockquote>\n<h4><strong>datemulti on KsDater =&gt; {{dateMultiPure}}</strong></h4>\n</blockquote>\n<p><ks-dater type=\"datemulti\" v-bind:value.sync=\"dateMultiPure\" v-on:change=\"dateMultiPureChange\"></ks-dater></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-dater</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"datemulti\"</span> \n    <span class=\"hljs-attr\">v-bind:value.sync</span>=<span class=\"hljs-string\">\"dateMultiPure\"</span> \n    <span class=\"hljs-attr\">v-on:change</span>=<span class=\"hljs-string\">\"dateMultiPureChange\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-dater</span>&gt;</span>\n</code></pre>\n<blockquote>\n<h4><strong>datemulti on KsDatePicker =&gt; {{datemulti}}</strong></h4>\n</blockquote>\n<p><ks-date-picker type=\"datemulti\" v-bind:value.sync=\"datemulti\" v-on:change=\"datemulti_change\"></ks-date-picker></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-date-picker</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"datemulti\"</span> \n    <span class=\"hljs-attr\">v-bind:value.sync</span>=<span class=\"hljs-string\">\"datemulti\"</span> \n    <span class=\"hljs-attr\">v-on:change</span>=<span class=\"hljs-string\">\"datemulti_change\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-date-picker</span>&gt;</span>\n</code></pre>\n<blockquote>\n<h4><strong>daterange</strong></h4>\n</blockquote>\n<p><ks-dater-range v-bind:range.sync=\"['','']\" v-on:change=\"daterange_change\"></ks-dater-range></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-dater-range</span> \n    <span class=\"hljs-attr\">v-bind:range.sync</span>=<span class=\"hljs-string\">\"['','']\"</span> \n    <span class=\"hljs-attr\">v-on:change</span>=<span class=\"hljs-string\">\"daterange_change\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-dater-range</span>&gt;</span>\n</code></pre>\n<blockquote>\n<h4><strong>daterange picker =&gt; {{dateRangePicker}}</strong></h4>\n</blockquote>\n<p><ks-date-range-picker placeholder=\"开始,结束\" v-bind:range.sync=\"dateRangePicker\" v-bind:readonly=\"false\" v-on:change=\"daterange_picker_change\"></ks-date-range-picker></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-date-range-picker</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">\"开始,结束\"</span> \n        <span class=\"hljs-attr\">v-bind:range.sync</span>=<span class=\"hljs-string\">\"dateRangePicker\"</span>\n        <span class=\"hljs-attr\">v-bind:readonly</span>=<span class=\"hljs-string\">\"false\"</span>\n        <span class=\"hljs-attr\">v-on:change</span>=<span class=\"hljs-string\">\"daterange_picker_change\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-date-range-picker</span>&gt;</span>\n</code></pre>\n<p><ks-date-range-picker placeholder=\"开始,结束\" v-bind:range.sync=\"dateRangePicker2\" v-bind:readonly=\"true\" v-on:change=\"daterange_picker_change\"></ks-date-range-picker></p>\n<pre class=\"ks-hljs\"><code><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">ks-date-range-picker</span> <span class=\"hljs-attr\">placeholder</span>=<span class=\"hljs-string\">\"开始,结束\"</span> \n        <span class=\"hljs-attr\">v-bind:range.sync</span>=<span class=\"hljs-string\">\"dateRangePicker2\"</span>\n        <span class=\"hljs-attr\">v-bind:readonly</span>=<span class=\"hljs-string\">\"true\"</span>\n        <span class=\"hljs-attr\">v-on:change</span>=<span class=\"hljs-string\">\"daterange_picker_change\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">ks-date-range-picker</span>&gt;</span>\n</code></pre>\n<h3>非范围日期组件API</h3>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>版本</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td></td>\n<td>dater类型</td>\n<td>props</td>\n<td>String</td>\n<td><strong>date</strong>, <strong>datetime</strong>,<strong>datemonth</strong>, <strong>datemulti</strong></td>\n<td>date</td>\n</tr>\n<tr>\n<td>value</td>\n<td></td>\n<td>数据中绑定的值（可sync）</td>\n<td>props</td>\n<td>String</td>\n<td><strong>date=&gt;'2016-11-09'</strong>，<strong>datemonth=&gt;'2016-09'</strong>，<strong>datetime=&gt;'2016-11-09 03:04:20'</strong>，<strong>datemulti=&gt;'2016-11-09,2016-11-10'</strong></td>\n<td>无</td>\n</tr>\n<tr>\n<td>min</td>\n<td>V1.0.0</td>\n<td>最小范围</td>\n<td>props</td>\n<td>String</td>\n<td><strong>date=&gt;'2016-11-09'</strong>，<strong>datemonth=&gt;'2016-09'</strong></td>\n<td>无</td>\n</tr>\n<tr>\n<td>max</td>\n<td>V1.0.0</td>\n<td>最大范围</td>\n<td>props</td>\n<td>String</td>\n<td><strong>date=&gt;'2016-11-09'</strong>，<strong>datemonth=&gt;'2016-09'</strong></td>\n<td>无</td>\n</tr>\n<tr>\n<td>readonly</td>\n<td></td>\n<td>是否只读</td>\n<td>props</td>\n<td>Boolean</td>\n<td><code class=\"ks-code-inline\">true</code>, <code class=\"ks-code-inline\">false</code></td>\n<td><code class=\"ks-code-inline\">false</code></td>\n</tr>\n<tr>\n<td>change</td>\n<td></td>\n<td>组件中日期时间改变复值</td>\n<td>props</td>\n<td>Function</td>\n<td><code class=\"ks-code-inline\">可不设置change</code></td>\n<td>无</td>\n</tr>\n</tbody>\n</table></div><h3>范围日期组件API（区别部分如下）</h3>\n<div class=\"table-striped\"><table class=\"table-entity\"><thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>接口类型</th>\n<th>类型</th>\n<th>可选值</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td>无type类型</td>\n<td>null</td>\n<td>null</td>\n<td>null</td>\n<td>null</td>\n</tr>\n<tr>\n<td>value</td>\n<td>数据中绑定的值（可sync）</td>\n<td>props</td>\n<td>Array</td>\n<td><strong>[]</strong></td>\n<td><strong>[]</strong></td>\n</tr>\n</tbody>\n</table></div><pre class=\"ks-hljs\"><code>&lt;script&gt;\n    <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n        data(){\n            <span class=\"hljs-keyword\">return</span> {\n                <span class=\"hljs-attr\">datemonth</span>:<span class=\"hljs-string\">'2016-10'</span>,\n                <span class=\"hljs-attr\">datemonth2</span>:<span class=\"hljs-string\">'2016-10'</span>,\n                <span class=\"hljs-attr\">datemonth3</span>:<span class=\"hljs-string\">'2016-10'</span>,\n                <span class=\"hljs-attr\">datetime</span>:<span class=\"hljs-string\">'2016-10-12 03:04:20'</span>,\n                <span class=\"hljs-attr\">date</span>:<span class=\"hljs-string\">''</span>,\n                <span class=\"hljs-attr\">datemulti</span>:<span class=\"hljs-string\">''</span>,\n                <span class=\"hljs-attr\">dateMultiPure</span>:<span class=\"hljs-string\">''</span>,\n                <span class=\"hljs-attr\">date_base</span>:<span class=\"hljs-string\">'2016-10-12 03:04:20'</span>,\n                <span class=\"hljs-attr\">dateRangePicker</span>:[],\n                <span class=\"hljs-attr\">dateRangePicker2</span>:[<span class=\"hljs-string\">''</span>,<span class=\"hljs-string\">''</span>]\n            }\n        },\n        <span class=\"hljs-attr\">methods</span>:{\n            current_change(val){\n                <span class=\"hljs-keyword\">this</span>.date_base = val\n            },\n            datetime_change(val){},\n            date_change(val){\n                <span class=\"hljs-comment\">// console.log('parent catch change value',val)</span>\n            },\n            datemulti_change(val){\n                <span class=\"hljs-comment\">// console.log('筛选 picker',val)</span>\n                <span class=\"hljs-keyword\">if</span>(!val){\n                    <span class=\"hljs-comment\">// setTimeout(()=&gt;{</span>\n                        <span class=\"hljs-comment\">// this.datemulti = '2016-11-02'            </span>\n                    <span class=\"hljs-comment\">// })</span>\n                }\n                \n            },\n            dateMultiPureChange(){\n\n            },\n            daterange_change(val){\n                <span class=\"hljs-built_in\">console</span>.log(val)\n            },\n            daterange_picker_change(val){\n                <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'多选 picker'</span>,val)\n            }\n        },\n        ready(){\n            <span class=\"hljs-keyword\">this</span>.date1 = <span class=\"hljs-string\">'2016-09-21 03:02:24'</span>\n\n            setTimeout(<span class=\"hljs-function\"><span class=\"hljs-params\">()</span>=&gt;</span>{\n                <span class=\"hljs-keyword\">this</span>.dateRangePicker = [<span class=\"hljs-string\">'2016-09-21'</span>,<span class=\"hljs-string\">'2016-10-29'</span>]\n            },<span class=\"hljs-number\">1000</span>)\n\n            setTimeout(<span class=\"hljs-function\"><span class=\"hljs-params\">()</span>=&gt;</span>{\n                <span class=\"hljs-keyword\">this</span>.dateRangePicker2 = [<span class=\"hljs-string\">''</span>,<span class=\"hljs-string\">''</span>]\n            },<span class=\"hljs-number\">10000</span>)\n\n            setTimeout(<span class=\"hljs-function\"><span class=\"hljs-params\">()</span>=&gt;</span>{\n                <span class=\"hljs-keyword\">this</span>.datemonth2 = <span class=\"hljs-string\">'2016-09'</span>\n            },<span class=\"hljs-number\">1000</span>)\n        }\n\n    }\n&lt;<span class=\"hljs-regexp\">/script&gt;\n</span></code></pre>\n\n</section>";

/***/ }

});