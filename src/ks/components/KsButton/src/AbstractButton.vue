<template>
  <button :type="nativeType" :autofocus="autofocus" :name="name"
          :disabled="disabled" :form="form" :style="btnSize"
          class="KSAbstractButton" cid="KSAbstractButton"
          :class="{'KSAbstractButton-disabled': disabled}"
  >
    <slot></slot>
  </button>
</template>

<script>
  import baseBtnProps from '../mixins/baseBtnProps'

  export default{

    mixins: [baseBtnProps],

    data () {
      return {}
    }

  }
</script>

<style lang="scss" scoped>
  .KSAbstractButton {

    // 禁用状态
    _disabled {
      cursor: not-allowed;
    }

  }
</style>
