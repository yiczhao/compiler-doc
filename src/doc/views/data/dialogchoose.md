## ksDialogChoose

> 常用的弹出框列表选择组件

---

<ks-dialog-choose 
        :list.sync = list1
        :sid.sync = sid1></ks-dialog-choose ><br/>
<div>
    <span>已选门店id:{{sid1}}</span><br/>
</div>  

----


```js
<!-- sid双向绑定,返回已经选中的门店id -->
<ks-dialog-choose 
        :list.sync = list1
        :sid.sync = sid1></ks-dialog-choose ><br/>
<div>
    <span>已选门店id:{{sid1}}</span><br/>
</div>  
```


<ks-dialog-choose 
        :list.sync = list2
        :sid = sid2
        @change = getSid ></ks-dialog-choose ><br/>
<div>
    <span>已选门店id:{{sid2}}</span><br/>
</div>  

----


```js
<!-- sid单向绑定,提供了一个onchange事件,返回已经选中的门店id -->
<ks-dialog-choose 
        :list.sync = list2
        :sid = sid2
        @change = getSid ></ks-dialog-choose ><br/>
<div>
    <span>已选门店id:{{sid2}}</span><br/>
</div>  
```

### API
| 参数 | 说明 | 接口类型  | 可选值 | 默认值 | 是否必须 |
|------|-------|----------|---------|-------|--------|
| list | 门店列表  | Array | 无 | 无 |是 |
| sid | 用于显示已选中的门店id  | Array | 无 | 无 |否 |
| is_storetype | 用于判断弹出层类型(true是table类型,false是基本弹出层样式)  |  Boolean | true,false | false | 否 |
<br/>

#### 代码如下

```javascript
<script lang="babel">
import listdata from 'SRC/doc/views/data/data.js'
export default {
    data(){
        return {  
            list1:[],
            list2:[],
            sid1:[],
            sid2:[],
        }  
    },
    methods:{
        getsid(val){
            this.sid2 = val
        }
    },
    ready(){
        listdata.forEach(item=>{
            item.ischecked = false
        })
        this.list1 = JSON.parse(JSON.stringify(listdata))
        this.list2 = JSON.parse(JSON.stringify(listdata))
    }
}
</script>
```


<script lang="babel">
import listdata from 'SRC/doc/views/data/data.js'
export default {
    data(){
        return {  
            list1:[],
            list2:[],
            sid1:['086021000000006'],
            sid2:['086021000000006'],
        }  
    },
    methods:{
        getSid(val){
            this.sid2 = val
        }
    },
    ready(){
        listdata.forEach(item=>{
            item.ischecked = false
        })
        this.list1 = JSON.parse(JSON.stringify(listdata))
        this.list2 = JSON.parse(JSON.stringify(listdata))
    }
}
</script>




