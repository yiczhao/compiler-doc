##  多标题表格布局

---

#### table组件

> 支持新增数据、排序、自定义操作等功能。

------

<br/>

{{tableData | json}}

<br/>

<ks-table
    v-bind:columns="columns"
    v-bind:data="tableData"
    v-on:change-sort="sortChange"></ks-table>

<ks-button v-on:click="addOneData">添加一条</ks-button>


```html
<ks-table
    v-bind:columns="columns"
    v-bind:data="tableData"
    v-on:change-sort="sortChange"></ks-table>
```
### API

| 参数 | 说明 | 接口类型 | 类型 | 可选值 | 默认值 |
|------|-------|----------|---------|-------|--------|
| columns | 设置表格的表头 | props | Array | `必填` | 无 |
| data | 表格的数据 | props | Array | `必填` | 无 |
| change-sort | 对表格每列数据进行排序 | props  | Function | `非必填` | 降序 |

<br/>

### 基础功能

<br/>

#### 自定义列

<br/>

通过columns添加自定义列，每项的key与列表数据的字段一一对应，title为表头的每项的名称，设置sortable即可对对应项进行排序，template为列表的数据设置模板。


<br/>

### 脚本

```javascript
<script>
    export default {
        data(){
            return {
                
                columns:[
                    {
                        key:'table-idx',
                        title:'序号',
                        width:'60px'
                    },
                    {key:'id',title:'下标值'},
                    {key:'name',title:'名字',sortable:true,
                        template(val,index){
                            return val.name+'==='
                        }
                    },
                    {key:'age',title:'年龄',sortable:'asc'},
                    {
                        key:'operator',
                        title:'操作',
                        template(val,index){
                            return `<a href="javascript:;" v-on:click.stop="output('${index}')" >操作</a><span>|</span><a href="javascript:;" v-on:click.stop="remove('${index}')" >删除</a>`
                        }
                    }
                ],
                tableData: [
                    {id:1, name:"John",age:"sss"}
                ]
            }
        },
        methods:{
            
        },
        created(){
            
        }
    }
</script>
```

<script type="text/javascript">
    export default {
        data(){
            return {
                
                columns:[
                    {
                        key:'table-idx',
                        title:'序号',
                        width:'60px'
                    },
                    {key:'id',title:'下标值'},
                    {key:'name',title:'名字',sortable:true,
                        template(val,index){
                            return val.name+'==='
                        }
                    },
                    {key:'age',title:'年龄',sortable:'asc'},
                    {
                        key:'operator',
                        title:'操作',
                        template(val,index){
                            return `<a href="javascript:;" v-on:click.stop="output('${index}')" >操作</a><span>|</span><a href="javascript:;" v-on:click.stop="remove('${index}')" >删除</a>`
                        }
                    }
                ],
                tableData: [
                    {id:1, name:"John",age:"sss"}
                ]
            }
        },
        methods:{
            addOneData(val){
                this.tableData.push({id:1, name:"John--",age:"sss",work:'IT',work2:'IT2',operator:''})   
            },
            output(val){
                this.$KsNotice.info('内容',`点击序列为：${val}`)
            },
            remove(index){
                // alert('delete: '+index)
                this.tableData.splice(index,1)
            },
            sortChange(key,val){
                this.$KsNotice.info('内容',`排序的字段为：${key}，顺序为：${val}`)
                
            }
        },
        created(){
            
        }
    }
</script>

<!-- ####  基础样式 -->



<br>

<!-- 
rowspan="2"  意思是向下合并两个单元格
colspan="2"  意思是向右合并两个单元格
<div class="multiple-table">
    <table>  
        <thead>    
            <tr>      
                <th rowspan="2">表头一</th>      
                <th rowspan="2">表头二</th>      
                <th colspan="2"><div>表头三</div></th>      
                <th colspan="3"><div>表头四</div></th>
                <th rowspan="2">表头五</th>     
            </tr>    
            <tr>      
                <th>当月</th>      
                <th>上月</th>      
                <th>当月</th>      
                <th>上月</th>      
                <th>其他</th>      
            </tr>  
        </thead>  
        <tbody>    
            <tr>      
                <td v-for="1 in 8">第1行,第{{$index+1}}列</td> 
            </tr>    
            <tr> 
                <td v-for="1 in 8">第2行,第{{$index+1}}列</td> 
            </tr>    
            <tr>      
                <td v-for="1 in 8">第3行,第{{$index+1}}列</td>   
            </tr> 
        </tbody>
    </table>
</div> -->




