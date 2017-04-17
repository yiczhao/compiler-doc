<template>
<div class="KsTable-multiple">
    <table>  
        <thead>    
            <tr> 
                <th v-for="key in columns" v-text="key"></th>      
            </tr>  
            
        </thead>  
        <tbody v-el:tbody>    
            <tr v-for="item in data">      
                <td v-for="(key,val) in item" v-html="val | render key item"></td>      
            </tr>
            
            <!-- ...... 添加多行     -->
        </tbody>
    </table>
</div>
</template>
<script type="text/javascript">
    export default {
        props:{
            columns:{
                type:Array,
                default(){
                    return []
                }
            },
            data:{
                type:Array,
                default(){
                    return []
                }
            },
            options:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        data(){
            this._ksparent = this.$parent
            return {

            }
        },
        filters:{
            render(val,key,item){
                var operator = (this.options.templates || {})[key]
                if('function' == typeof operator){

                    return operator.call(this._ksparent,item)
                }else{
                    return val
                }

            }
        },
        methods:{
            output(val){
                // console.log(val)
            }
        },
        created(){
            console.log()
            setTimeout(()=>{
                this.$compile(this.$els.tbody)
            },3000)
            // 
        }
    }
</script>
<style lang="scss">
    @import '../styles/table.scss'
</style>