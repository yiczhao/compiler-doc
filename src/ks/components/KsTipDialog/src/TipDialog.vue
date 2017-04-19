<template>        
<div class="KsTipDialog toast-current" v-show="show_toast">
    <slot></slot>
    <div class="toast-trangle"></div>
    <div class="toast-trangletop"></div>
</div>

</template>  
  
<script type="text/javascript">  
    export default {  
        props:{
            show_toast:{
                type:Boolean,
                default:false
            },
        },
        data() {  
            return {  
                
            }  
        },
        methods:{
           
        },
        ready(){ 
            
        }            
    }  
</script>  
<style lang="scss">
  @import "../styles/KsTipDialog";
</style>
