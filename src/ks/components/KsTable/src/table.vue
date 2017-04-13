<template>
<div class="KsTable-multiple">
    <table>  
        <thead>    
            <tr>      
                <th rowspan="2">表头一</th>      
                <th rowspan="2">表头二</th>      
                <th colspan="2"><div>表头三</div></th>      
                <th colspan="3"><div>表头四</div></th>
                <th rowspan="2">表头五</th>     
            </tr>    
            <!-- 此行中添加的是 向右合并的单元格的表头 -->     
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
            <!-- ...... 添加多行     -->
        </tbody>
    </table>
</div>
</template>
<script type="text/javascript">
    export default {
        props:{

        },
        data(){
            return {

            }
        },
        methods:{

        }
    }
</script>
<style lang="scss">
    @import '../styles/table.scss'
</style>