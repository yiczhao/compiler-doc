<template>
  <div>
    <div class="ibw page-tabs">
        <a  class="ib tab" title=""
            v-bind:class="{'active':active=='notice/v1.0.0'}" 
            v-link="{name:'notice/v1.0.0'}">v1.0.0</a>
        <a  class="ib tab" title=""
            v-bind:class="{'active':active=='notice/v0.1.0'}" 
            v-link="{name:'notice/v0.1.0'}">v0.1.0</a>

    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        active:''
      }
    },
    route:{
        data(transiton){
            this.active = transiton.to.name
        }
    },
    created(){
      this.$router.go({name:'notice/v1.0.0'})
    }
  }
</script>
