<template>
    <span class="ib KsCheckbox" 
          v-bind:class="{disabled: disabled}">
      <input type="checkbox" class="KsCheckbox-input" 
            v-bind:name="name"
            v-model="checked"
            v-bind:disabled="disabled && 'disabled'">
      <span class="ib KsCheckbox-cube" v-if="color=='#00A5E0'"></span>
      <span class="ib KsCheckbox-cube" v-if="color!='#00A5E0'" v-bind:style="{'background':color}"></span>
    </span>
</template>

<script>
  export default{
    VERSION: '0.1.0',
    props: {
      color: {type: String, default: '#00A5E0'},
      checked: {twoWay: true},
      disabled: {type: Boolean, default: false}
    },
    methods: {}
  }
</script>

<style lang="scss">
  @import '../styles/checkbox';
</style>
