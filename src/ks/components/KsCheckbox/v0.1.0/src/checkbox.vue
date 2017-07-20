<template>
    <span class="ib KsCheckbox" 
          v-bind:class="{disabled: disabled}">
      <input type="checkbox" class="KsCheckbox-input" 
            v-bind:name="name"
            v-model="checked"
            v-bind:disabled="disabled && 'disabled'">
      <ks-icon class="ib KsCheckbox-cube"
        v-bind:class="{'KsCheckbox-cube-checked':checked,'KsCheckbox-cube-disabled':disabled}"
        v-bind:name="ksIconName"
        v-bind:style="cubeStyle"></ks-icon>
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
      name:{type:String},
      checked: {twoWay: true},
      disabled: {type: Boolean, default: false}
    },
    computed:{
      cubeStyle(){
        var color = this.color
        return color!='#00A5E0'? `background:${color}`: ''
      },
      ksIconName(){
          return this.checked ? 
                      this.disabled ? 'fuxuanbukexuan':'fuxuanxuanze' 
                      : 'fuxuanweixuan'
      }
    },
    methods: {}
  }
</script>

<style lang="scss">
  @import '../styles/checkbox';
</style>
