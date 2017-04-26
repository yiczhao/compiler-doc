<template>
<div class="KsTable-multiple">
    <table v-on:change="change">  
        <thead v-el:thead>    
            <tr> 
                <th v-for="item in columns">
                    <ks-icon v-bind:name="item.sortable | getIcon" 
                        v-if="item.sortable"
                        size="1x"
                        v-on:click="sort($index)"></ks-icon>
                    <input type="checkbox" name="ks-table-allchecked"
                        v-model="allchecked"
                        v-if="item.checked"/>
                    <div v-text="item.title" 
                        style="display: inline-block;" 
                         v-bind:style="{'width':item.width}"></div>
                </th>      
            </tr>  
        </thead>  
        <tbody v-el:tbody>    
            <tr v-for="(index, item) in data" 
                v-on:click="output">      
                <td v-for="(key, val) in item" >
                    <input type="checkbox" 
                           v-if="key=='checked'"
                           v-model="item.checked" />
                    <div v-html="val | render key item index">
                    </div>        
                </td>      
            </tr>
            
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
            },
            icons:{
                type:Object,
                default(){
                    return {
                        desc:'xiangxiajiantou',
                        asc:'xiangshangjiantou'
                    }
                }
            }
        },
        
        data(){
            this._ksparent = this.$parent
            this._columnkeys = []
            this.options['templates'] = this.options['templates'] || {}

            return {
                tempData : this.data,
                tempColumns: this.columns,
                allchecked:false
            }
        },
        computed:{
            
            columns:{
                get(){
                    return this.tempColumns
                },
                set(val){
                    this._columnkeys = this.columns.map((item)=>{
                        
                        item.template 
                        && (this.options['templates'][item.key] = item.template)

                        return item.key
                    })

                    
                }
            },
            data:{
                get(){
                    return this.tempData
                },
                set(val){
                    
                    this.tempData = this.filterData(val,this._columnkeys)
                    this.allchecked = this.isAllChecked(this.tempData)
                    this.$nextTick(()=>{
                        this.$parent.$compile(this.$els.tbody)    
                    })
                    
                }
            }
        },
        watch:{},
        filters:{
            // 图标名
            getIcon(val){

                var temp = this.icons.desc
                
                if('asc' == val) temp = this.icons.asc
                return temp
            },
            render(val,key,item,index){

                var template = (this.options.templates || {})[key]
                if('function' == typeof template){

                    return template.call(this._ksparent,item,index)
                }else{
                    return val
                }

            }
        },
        methods:{
            // 排序
            sort(index){
                var column = this.columns[index]
                var direction = column.sortable == 'asc'
                                ? 'desc'
                                : 'asc'
                    
                this.columns[index].sortable = direction
                // this.options.sortable.call(this._ksparent, column.key, direction)
                this.$emit('change-sort',column.key, direction)
            },
            output(val){
                // console.log('output',this)
            },
            // 
            /**
             * [selfSchema 获取自定义的 Schema column]
             * @param  {[Array]} schema [columns模式]
             * @param  {[Array]} real   [真实数据]
             * @return {[Array]}        []
             */
            selfSchema(schema = [],real = []){
                // console.log(schema,real)
                return schema.filter((key)=>{
                    return !~real.indexOf(key)
                })
            },
            /**
             * [filterData 根据自定义]
             * @param  {[Array]} data       [原始数据]
             * @param  {[Array]} columnkeys [定义的 Schema]
             * @return {[Array]}            []
             */
            filterData(data,columnkeys){
                var selfSchema = this.selfSchema(columnkeys
                                                    ,Object.keys(data[0]||[]))
                    // console.log(selfSchema)
                return data.map((item,index)=>{
                    var temp = {}

                    columnkeys.forEach((key)=>{
                        if(~selfSchema.indexOf(key)){

                            temp[key] = 'table-idx' == key 
                                            ? index
                                            : ''
                        }
                        if(item.hasOwnProperty(key)){
                            temp[key] = item[key]
                        }
                    })
                    return temp
                })
            },
            /**
             * [change DOM change]
             * @return {[type]} []
             */
            change(event){
                
                if('ks-table-allchecked' == event.target.name){
                    var allchecked = false
                    if(this.allchecked){
                        allchecked = true
                    }
                    this.tempData = this.tempData.map((item)=>{
                        item.checked = allchecked
                        return item
                    })

                }else{
                    this.allchecked = this.isAllChecked(this.tempData)
                }

                // console.log(event.target)
                // console.log(this.data)
            },
            /**
             * [isAllChecked 是否全选]
             * @param  {[type]}  data [源数据]
             * @return {Boolean}      []
             */
            isAllChecked(data){
                var noCheckeds = data.filter((item)=>{
                    if(!item.checked){
                        return true
                    }
                })
                return noCheckeds.length ? false : true 
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