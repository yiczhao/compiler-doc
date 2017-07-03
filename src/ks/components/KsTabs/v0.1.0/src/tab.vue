<template>
    <div v-show="active=='active'">
        <slot></slot>
    </div>
</template>
<!-- <tab status="active" ></tab> -->
<!-- <tab status="prefix" content="prefix 内容"></tab> -->
<script type="text/javascript">
    export default {
        VERSION:'0.1.0',
        props:{
            title:{
                type:String
            },
            status:{
                type:String
            },
            content:{
                type:String
            }
        },
        data(){
            return {
                active:''
            }
        },
        watch:{
            status(val){
                if('active' == val){
                    this.$parent.changeUid(this._uid)    
                }    
            }
        },
        created(){
            this.$parent.contents.push({
                title:this.title,
                status:this.status,
                uid:this._uid
            })
        }
    }

</script>