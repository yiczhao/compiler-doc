<template>
  <div>
    <div class="ibw page-tabs">
        <a  class="ib tab" title=""
            v-bind:class="{'active':active=='date-picker'}" 
            v-link="{name:'date-picker'}">v0.0.1</a>
        <a  class="ib tab" title=""
            v-bind:class="{'active':active=='date-picker/v1.0.0'}" 
            v-link="{name:'date-picker/v1.0.0'}">v1.0.0</a>
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
            console.log(transiton.to)
            // transiton.to.title
            this.active = transiton.to.name
        }
    }
  }
</script>
