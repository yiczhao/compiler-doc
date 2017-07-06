<template>
    <ul class="KsTree">
        <treeitem 
            v-on:change="change" 
            v-for="item in data" 
            v-bind:itemdata="item" 
            v-bind:name-key="nameKey" 
            v-bind:children-key="childrenKey"
            v-bind:checked-key="checkedKey"></treeitem>
    </ul>
</template>
<script type="text/javascript">
    import treeitem from './item.vue'
    export default {
        components:{
            treeitem
        },
        props:{
            data:{
                type:Array
            },
            nameKey:{
                type:String,
                default:'name'
            },
            checkedKey:{
                type:String,
                default:'checked'
            },
            childrenKey:{
                type:String,
                default:'children'
            }
        },
        data(){
            return{}
        },
        methods:{
            change(){
                // this.data = 
                this.redata(this.data)
            },
            redata(datalist){
                var children = this.childrenKey,
                    checkedKey = this.checkedKey

                // datalist = JSON.parse(JSON.stringify(this.datalist))
                function deepAndConvertNode(node){
                    if(node[children] && node[children].length){
                        let checkeds = node[children].map(function(node){
                            return deepAndConvertNode(node)
                        })
                        node[checkedKey] = checkeds.indexOf(false) == -1
                        // console.log(node[checkedKey])
                        return node[checkedKey]
                    }
                    return !!(+node[checkedKey])

                }
                datalist.forEach(function(node){
                    node[checkedKey] = deepAndConvertNode(node)
                })

                // return datalist
            }
        }
        
    }
</script>
