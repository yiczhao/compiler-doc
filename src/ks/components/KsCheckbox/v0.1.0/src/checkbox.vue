<template>
    <span class="ib KsCheckbox" 
          v-bind:class="{disable: disable}">
      <input type="checkbox" class="KsCheckbox-input" 
            v-bind:name="name"
            v-model="checked"
            v-bind:disabled="disable && 'disabled'">
      <span class="ib KsCheckbox-cube"></span>
    </span>
</template>

<script>
  export default{
    VERSION: '0.1.0',
    props: {
      color: {type: String, default: '#00A5E0'},
      checked: {twoWay: true},
      disable: {type: Boolean, default: false}
    },
    methods: {
      
    }
  }
</script>

<style lang="scss">
  @import '../styles/checkbox';
</style>
