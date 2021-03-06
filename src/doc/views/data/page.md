## KsPager 

> 常用的日期组件

---

### 基础使用 （分类）

### page
page_current:{{page_current}}
<ks-page 
    :current.sync="page_current" 
    :length="7"
    :total="100"
    :size="13"
    :on-change="change"></ks-page>
```html
<ks-page 
    v-bind:current.sync="page_current" 
    v-bind:length="7"
    v-bind:total="100"
    v-bind:size="13"
    v-bind:on-change="change"></ks-page>
```
### API
| 参数 | 说明 | 接口类型 | 类型 | 可选值 | 默认值 |
|------|-------|----------|---------|-------|--------|
| current | 当前选中的页数 | props | Number | 无 |无  |
| length | 展示的页数长度（`奇数`） | props | Number | `非必填` | 7 |
| total | 总条数 | props | Number | 无 | 无 |
| size | 每页展示条数 | props | Number | `非必填` | 10 |
| on-change | 分页改变时调用 | props  | Function | `非必填` | 无 |


### pageGroup
<ks-page-group
    :current.sync="page_current2" 
    :length="7"
    :total="100"
    :sizes="[10,17,30]"
    :on-change="change2"></ks-page-group>

```html
<ks-page-group
    :current.sync="page_current2" 
    :length="7"
    :total="100"
    :sizes="[10,17,30]"
    :on-change="change2"></ks-page-group>
```
`比 ks-page 组件多的接口`
| 参数 | 说明 | 接口类型 | 类型 | 可选值 | 默认值 |
|------|-------|----------|---------|-------|--------|
| sizes | 页面展示的数据条数 | props | Array | `非必填` | [10,20,100] |
| on-change | 分页改变时调用（val,type`sizes变化输出SIZE-CHANGE`） | props  | Function | `非必填` | 无 |

```javascript
<script lang="babel">
    export default {
        data(){
            return {
                page_current:4,
                page_current2:4
            }
        },
        methods:{
            change(val){
                console.log(val);
            },
            change2(val,type){
                console.log(val,type);
            }
            
           
        }

    }
</script>
```
<script lang="babel">
    export default {
        data(){
            return {
                page_current:4,
                page_current2:4
            }
        },
        methods:{
            change(val){
                console.log(val);
            },
            change2(val,type){
                console.log(val,type);
            }
            
           
        }

    }
</script>

