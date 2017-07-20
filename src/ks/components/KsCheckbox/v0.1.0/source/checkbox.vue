<template>
    <span class="ib KsCheckbox" 
          v-bind:class="{disabled: disabled}">
      <input type="checkbox" class="KsCheckbox-input" 
            v-bind:name="name"
            v-model="checked"
            v-bind:disabled="disabled && 'disabled'">
      <span class="ib KsCheckbox-cube" 
        v-bind:style="cubeStyle"></span>
    </span>
</template>

<script>
  import KsIcon from 'KsComponents/KsIcon/v0.1.0/'
  export default{
    VERSION: '0.1.0',
    components:{
      KsIcon
    },
    props: {
      color: {type: String, default: '#00A5E0'},
      checked: {twoWay: true},
      disabled: {type: Boolean, default: false}
    },
    computed:{
      cubeStyle(){
        var color = this.color
        return color!='#00A5E0'? `background:${color}`: ''
      }
    },
    methods: {}
  }
</script>

<style lang="scss">
  @import '../styles/checkbox';
</style>
