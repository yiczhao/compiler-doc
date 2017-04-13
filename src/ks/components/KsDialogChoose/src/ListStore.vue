<template> 
<div class="KsList">
	<ul>
	    <li v-for = "i in list" 
	        :class="i.ischecked && 'check'"
	        @click="choosestore(i)">
	        <span>{{i.name}}</span>
	        <i></i>
	    </li>
	</ul>
</div> 
</template>
<script type="text/javascript">  
 export default {  
    props:{
        list:{
            type:Array
        },
        sid:{
            type:Array
        }
    },
    methods:{
    	choosestore(t){
            t.ischecked = !t.ischecked
            //console.log(this.sid)
            var listarr = []
            this.list.forEach(t=>{
                if(t.ischecked)
                {
                   listarr.push(t.id) 
                }
            })
            this.sid = listarr

            this.$emit('change',listarr)
        }
    },
    ready(){

    }
}
</script>
<style lang="scss">
  @import "../styles/KsDialogChoose";
</style>
