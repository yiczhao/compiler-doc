<template>
  <div class="KSNRCheckbox" cid="KSNRCheckbox">
    <input type="checkbox" class="_entity" v-model="checked"
           @change.stop="checkboxChangeHandle"
           :disabled="disable && 'disabled'" :id="`KSNRCheckbox--${_uid}`" />
    <label class="_skin" :for="`KSNRCheckbox--${_uid}`">
      <em class="_cube" :style="{background: color}"></em>
    </label>
    <label class="_text" :for="`KSNRCheckbox--${_uid}`">
      <slot>LABEL</slot>
    </label>
  </div>
</template>

<script lang="babel">
  export default{
    name: 'KsNormalCheckbox',

    props: {
      name: {type: String, default: 'KsNormalCheckbox'},
      color: {type: String, default: '#00A5E0'},
      checked: {type: Boolean, twoWay: true},
      disable: {type: Boolean, default: false}
    },

    events: {
      /**
       * @description modelChange 事件响应
       * @summary 负责接受 Group 组件的 change 事件, 改变选中状态
       */
      modelChange (model) {
        this.checked = model.indexOf(this.name) > -1;
      }
    },

    methods: {
      /**
       * @description checkbox 改变处理函数
       */
      checkboxChangeHandle () {
        this.$dispatch('CChange', this.checked, this.name);
        this.$emit('change', this.checked, this.name);
      }
    }
  }
</script>

<style lang="scss">
  @import '../../styles/components/NrCheckbox';
</style>
