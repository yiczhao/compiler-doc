<template>
<div class="KsTable-multiple">
{{columns|json}}
    <table>  
        <thead v-el:thead>    
            <tr> 
                <th v-for="item in columns">
                    <ks-icon v-bind:name="item.sortable | getIcon" 
                        v-if="item.sortable"
                        v-on:click="sort($index)"></ks-icon>
                    <span v-text="item.title"></span>
                </th>      
            </tr>  
        </thead>  
        <tbody v-el:tbody>    
            <tr v-for="(index, item) in data" v-on:click="output">      
                <!-- <td v-if="hasIDX" v-text="index"></td> -->
                <td v-for="(key, val) in item" v-html="val | render key item index"></td>      
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
            this._columnkeys = []

            return {
                tempData : this.data,
                tempColumns: this.columns
            }
        },
        computed:{
            // hasIDX(){
            //     return ~this._columnkeys.indexOf('table-idx')
            // },
            columns:{
                get(){
                    return this.tempColumns
                },
                set(val){
                    this._columnkeys = this.columns.map((item)=>{
                        return item.key
                    })

                    console.log(this._columnkeys)
                }
            },
            data:{
                get(){
                    return this.tempData
                },
                set(val){
                    var selfSchema = this.selfSchema(this._columnkeys
                                                    ,Object.keys(val[0]||[]))
                    console.log(selfSchema)
                    this.tempData = val.map((item,index)=>{
                        var temp = {}


                        item['table-idx'] = index

                        this._columnkeys.forEach((key)=>{
                            if(~selfSchema.indexOf(key)){

                                temp[key] = ''
                            }
                            if(item.hasOwnProperty(key)){
                                temp[key] = item[key]
                            }
                        })
                        
                        return temp
                    })
                    console.log(this.tempData)
                    this.$nextTick(()=>{
                        this.$parent.$compile(this.$els.tbody)    
                        // console.log(val);
                    })
                    
                }
            }
        },
        watch:{
            // data(){
            //     this.$nextTick(()=>{
            //         this.$parent.$compile(this.$els.tbody)    
            //         // console.log(val);
            //     })
            // }
        },
        filters:{
            // 图标名
            getIcon(val){
                var temp = 'arrow-down'
                // if('desc' == val) return 
                if('asc' == val) temp = 'arrow-up'
                return temp
            },
            render(val,key,item,index){

                var operator = (this.options.templates || {})[key]
                if('function' == typeof operator){

                    return operator.call(this._ksparent,item,index)
                }else{
                    return val
                }

            }
        },
        methods:{
            // 排序
            sort(index){
                var direction = this.columns[index].sortable
                direction = direction == 'asc'
                                ? 'desc'
                                : 'asc'
                    
                this.columns[index].sortable = direction

            },
            output(val){
                console.log('output',this)
            },
            // 
            /**
             * [selfSchema 获取自定义的 Schema column]
             * @param  {[type]} schema [columns模式]
             * @param  {[type]} real   [真实数据]
             * @return {[type]}        [description]
             */
            selfSchema(schema = [],real = []){
                console.log(schema,real)
                return schema.filter((key)=>{
                    return !~real.indexOf(key)
                })
            }

        },
        created(){
            this.columns = this.columns
            this.data = this.data
            this.$nextTick(()=>{
                // this.$parent.$compile(this.$parent.$el)
                // this.$parent.$destroy()
                this.$parent.$compile(this.$els.tbody)
            })
        }
    }
</script>
<style lang="scss">
    @import '../styles/table.scss'
</style>