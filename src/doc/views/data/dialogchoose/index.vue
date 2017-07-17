<template>
  <div>
    <div class="ibw page-tabs">
        <a  class="ib tab" title=""
            v-bind:class="{'active':active=='dialogchoose/v0.1.0'}" 
            v-link="{name:'dialogchoose/v0.1.0'}">v0.1.0</a>
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
    }
  }
</script>
