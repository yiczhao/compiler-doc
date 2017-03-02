## DatePicker 

> 常用的日期组件

---

### 基础使用 （分类）

#### date
<ks-date-picker :value="date" type="date" v-on:change="date_change"></ks-date-picker>
```html
<ks-date-picker :value="date" type="date" v-on:change="date_change"></ks-date-picker>
```


#### datetime
<ks-date-picker :value="datetime" type="datetime" v-on:change="datetime_change"></ks-date-picker> 
```html
<ks-date-picker :value="datetime" type="datetime" v-on:change="datetime_change"></ks-date-picker> 
```


#### datemulti
{{dateMultiPure}}
<ks-dater :value.sync="dateMultiPure" type="datemulti" v-on:change="dateMultiPureChange"></ks-dater>
```html
<ks-dater :value.sync="dateMultiPure" type="datemulti" v-on:change="dateMultiPureChange"></ks-dater>
```
{{datemulti}}
<ks-date-picker :value.sync="datemulti" type="datemulti" v-on:change="datemulti_change"></ks-date-picker>
```html
<ks-date-picker :value="datemulti" type="datemulti" v-on:change="datemulti_change"></ks-date-picker>
```



#### daterange

<ks-dater-range v-on:change="daterange_change"></ks-dater-range>
```html
<ks-dater-range v-on:change="daterange_change"></ks-dater-range>
```


#### daterange picker
{{dateRangePicker}}
<ks-date-range-picker placeholder="开始,结束" 
        :range.sync="dateRangePicker"
        :readonly="false"
        v-on:change="daterange_picker_change"></ks-date-range-picker>
```html
<ks-date-range-picker placeholder="开始,结束" 
        :range="[]"
        :readonly="false"
        v-on:change="date_multi_picker_change"></ks-date-range-picker>
```

```javascript
<script lang="babel">
    export default {
        data(){
            return {
                datetime:'2016-10-12 03:04:20',
                date:'',
                datemulti:'2016-11-09',
                date_base:'2016-10-12 03:04:20',
                date_val:'2016-11-09,2016-11-10,2016-11-11,2016-11-18,2016-11-17,2016-11-16,2016-11-15,2016-11-13,2016-11-14',
                dateRangePicker:[]
            }
        },
        methods:{
            current_change(val){
                this.date_base = val
            },
            datetime_change(val){},
            date_change(val){
                // console.log('parent catch change value',val)
            },
            datemulti_change(val){
                // console.log('筛选 picker',val)
                if(!val){
                    // setTimeout(()=>{
                        this.datemulti = '2016-11-02'            
                    // })
                }
                
            },
            daterange_change(){},
            date_multi_picker_change(val){
                // console.log('多选 picker',val)
            }
        },
        ready(){
            this.date1 = '2016-09-21 03:02:24'
        }

    }
</script>
```



### 非范围日期组件API
| 参数 | 说明 | 接口类型 | 类型 | 可选值 | 默认值 |
|------|-------|----------|---------|-------|--------|
| type | dater类型 | props | String | **date**, **datetime**, **datemulti**| date |
| value | 数据中绑定的值（可sync） | props | String | **date=>'2016-11-09'**，**datetime=>'2016-11-09 03:04:20'**，**datemulti=>'2016-11-09,2016-11-10'** | 无 |
| readonly | 是否只读 | props | Boolean | `true`, `false` | `false` |
| change | 组件中日期时间改变复值 | props | Function | `可不设置change` | 无 |

### 范围日期组件API（区别部分如下）
| 参数 | 说明 | 接口类型 | 类型 | 可选值 | 默认值 |
|------|-------|----------|---------|-------|--------|
| type | 无type类型 | null | null | null| null |
| value | 数据中绑定的值（可sync） | props | Array | **[]**|**[]** |


<script lang="babel">
    export default {
        data(){
            return {
                datetime:'',
                date:'',
                datemulti:'',
                dateMultiPure:'',
                date_base:'2016-10-12 03:04:20',
                date_val:'2016-11-09,2016-11-10,2016-11-11,2016-11-18,2016-11-17,2016-11-16,2016-11-15,2016-11-13,2016-11-14',
                dateRangePicker:[]
            }
        },
        methods:{
            current_change(val){
                this.date_base = val
            },
            datetime_change(val){},
            date_change(val){
                // console.log('parent catch change value',val)
            },
            datemulti_change(val){
                // console.log('筛选 picker',val)
                if(!val){
                    // setTimeout(()=>{
                        this.datemulti = '2016-11-02'            
                    // })
                }
                
            },
            dateMultiPureChange(){

            },
            daterange_change(val){
                console.log(val)
            },
            daterange_picker_change(val){
                console.log('多选 picker',val)
            }
        },
        ready(){
            this.date1 = '2016-09-21 03:02:24'

            setTimeout(()=>{
                this.dateRangePicker = ['2016-09-21','2016-10-29']
            },1000)
        }

    }
</script>


