## ksDialogChoose

> 常用的弹出框列表选择组件

---

### 基础使用 （分类）

### ksDialogChoose

<ks-dialog-choose 
        :list.sync = list
        :sid.sync = sid></ks-dialog-choose >
<div class="p-10">
    <span>已选门店id:{{chooseid}}</span><br/>
    <span>已选门店name:{{choosename}}</span>
</div>  



```html
<ks-dialog-choose 
        :list.sync = list
        :sid.sync = sid></ks-dialog-choose >
<div class="p-10">
    <span>已选门店id:</span><br/>
    <span>已选门店name:</span>
</div>  
```
### API
| 参数 | 说明 | 接口类型  | 可选值 | 默认值 | 是否必须 |
|------|-------|----------|---------|-------|--------|
| list | 门店列表  | Array | 无 | 无 |是 |
| sid | 用于显示已选中的门店id  | Array | 无 | 无 |否 |
<br/>

#### 代码如下

```javascript
<script lang="babel">
import listdata from 'SRC/doc/views/data/data.js'
export default {
    data(){
        return {  
            list:[],
            sid:[]
        }  
    },
    computed:{
        chooseid(){
            var listarr = []
            this.list.forEach(t=>{
                if(t.ischecked)
                {
                   listarr.push(t.id) 
                }
            })
            return listarr.join(' , ')
        },
        choosename(){
            var listarr = []
            this.list.forEach(t=>{
                if(t.ischecked)
                {
                   listarr.push(t.name) 
                }
            })
            return listarr.join(' , ')
        } 
    },
    ready(){
        listdata.forEach(item=>{
            item.ischecked = false
        })
        this.list = listdata
    }
}
</script>
```


<script lang="babel">
import listdata from 'SRC/doc/views/data/data.js'
export default {
    data(){
        return {  
            list:[],
            sid:[]
        }  
    },
    computed:{
        chooseid(){
            var listarr = []
            this.list.forEach(t=>{
                if(t.ischecked)
                {
                   listarr.push(t.id) 
                }
            })
            return listarr.join(' , ')
        },
        choosename(){
            var listarr = []
            this.list.forEach(t=>{
                if(t.ischecked)
                {
                   listarr.push(t.name) 
                }
            })
            return listarr.join(' , ')
        } 
    },
    ready(){
        listdata.forEach(item=>{
            item.ischecked = false
        })
        this.list = listdata
    }
}
</script>




