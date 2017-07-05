<template>
    <div>
        {{datalist|json}}
        <ul>
            <treeitem 
                v-on:change="change" 
                v-for="item in datalist" 
                v-bind:itemdata="item"></treeitem>
        </ul>
    </div>
</template>
<script type="text/javascript">
    import treeitem from './item.vue'
    export default {
        components:{
            treeitem
        },
        data(){
            return{
                datalist:[{
                        checked:false,
                        name:'A',
                        children:[{
                                checked:false,
                                name:'A-aaa',
                                children:[{
                                    checked:false,
                                    name:'A-aaa-ccc',
                                    children:[{
                                        checked:false,
                                        name:'A-aaa-ccc',
                                        children:[{
                                            checked:false,
                                            name:'A-aaa-ccc'
                                        }]
                                    },{
                                        checked:false,
                                        name:'A-aaa-ccc',
                                        children:[{
                                            checked:false,
                                            name:'A-aaa-ccc'
                                        }]
                                    }]
                                }]
                            },
                            {
                                checked:false,
                                name:'A-bbb',
                                children:[{
                                    checked:false,
                                    name:'A-bbb-ccc'
                                }]
                            }]
                    }]
            }
        },
        methods:{
            change(){
                // this.datalist = 
                this.redata(this.datalist)
            },
            redata(datalist){
                // datalist = JSON.parse(JSON.stringify(this.datalist))
                function deepAndConvertNode(node){
                    if(node.children){
                        let checkeds = node.children.map(function(node){
                            return deepAndConvertNode(node)
                        })
                        node.checked = checkeds.indexOf(false) == -1
                        return node.checked
                    }
                    return node.checked

                }
                datalist.forEach(function(node){
                    node.checked = deepAndConvertNode(node)
                })

                // return datalist
            }
        }
        
    }
</script>
