##  多标题表格布局

---

#### table2组件
<ks-table2
    v-bind:columns="columns"
    v-bind:data="tableData"
    v-bind:options="options"></ks-table2>


#### table组件
<!-- {{tableData}} -->
<!-- <ks-table 
    v-bind:data="tableData" 
    v-bind:columns="columns" 
    v-bind:options="options"></ks-table> -->


<script type="text/javascript">
    export default {
        data(){
            return {
                columns:['id','name','age','操作'],
                tableData: [
                  {id:1, name:"John",age:"sss",operator:''},
                  {id:2, name:"Jane",age:"24",operator:''},
                  {id:3, name:"Susan",age:"16",operator:''},
                  {id:4, name:"Chris",age:"55",operator:''},
                  {id:5, name:"Dan",age:"40",operator:''},
                  {id:6, name:"Jane",age:"24",operator:''},
                  {id:7, name:"Susan",age:"16",operator:''},
                  {id:8, name:"Chris",age:"55",operator:''},
                  {id:9, name:"Dan",age:"40",operator:''},
                  {id:10, name:"Jane",age:"24",operator:''},
                  {id:11, name:"Susan",age:"16",operator:''},
                  {id:12, name:"Chris",age:"55",operator:''},
                  {id:13, name:"Dan",age:"40",operator:''}
                ],
                options: {
                  // see the options API
                  templates:{
                    age(val){
                        // console.log(this)
                        return val.name
                    },
                    age2(val){
                        // console.log(this)
                        return this.add(val.name)
                    },
                    operator(val){
                        return `
                            <a href="javascript:;" @click="output(${val})" >操作</a><span>|</span>
                        `
                    }
                  }
                }
            }
        },
        methods:{
            add(val){
                return val+'---'
            },
            output(val){
                console.log(val)
            }
        }
    }
</script>

####  基础样式



<br>

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
</div>

```html
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
            <tr> // 此行中添加的是 向右合并的单元格的表头     
                <th>当月</th>      
                <th>上月</th>      
                <th>当月</th>      
                <th>上月</th>      
                <th>其他</th>      
            </tr>  
        </thead>  
        <tbody>    
            <tr>      
                <td>...</td>      
                <td>...</td>      
                <td>...</td>      
                <td>...</td>      
                <td>...</td>      
                <td>...</td>      
                <td>...</td>      
                <td>...</td> 
                <td>...</td>    
            </tr>
            ...... 添加多行    
        </tbody>
    </table>
</div>
```

rowspan="2"  意思是向下合并两个单元格
colspan="2"  意思是向右合并两个单元格
