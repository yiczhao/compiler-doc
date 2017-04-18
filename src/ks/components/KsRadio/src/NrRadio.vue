<template>
  <div :class="classes">
    <!-- NrRadio 选择色块自定义 -->
    <style type="text/css">
      {{ '.KSNRRadio__UID--' + _uid }} .KSNRRadio__entity:checked + .KSNRRadio__skin:before {
        {{ styleCubeColor }}
      }
    </style>
    <div class="KSNRRadio__container" :class="{disable: disable}">
      <input type="radio" class="KSNRRadio__entity"
             v-model="checked" :value="value"
             :name="!!name && name"
             :id="'KSNRCheckbox__entity--' + _uid"
             :disabled="disable && 'disabled'"
             :checked="defChecked && 'checked'"
             @click='change()'
             :class="'radio__'+_uid"
      >
      {{checked}}
      <label class="KSNRRadio__skin" :for="'KSNRCheckbox__entity--' + _uid"></label>
      <label class="KSNRRadio__text" :for="'KSNRCheckbox__entity--' + _uid">
        <slot>LABEL</slot>
      </label>
    </div>
  </div>
</template>

<script>
  import radioLogic from '../mixins/radioLogic'

  export default{
    name: 'KsNormalRadio',

    mixins: [radioLogic],

    computed: {
      /**
       * @description 复选框根 div 的 class
       * @summary 用于标识复选框
       * @return {string}
       */
      classes () { return `KSNRRadio KSNRRadio__UID--${this._uid}` }
    },
    methods:{
      change() {
        this.$dispatch('CChange', this.value);

        this.vModel = this.value;
      }
    }
  }
</script>

<style lang="scss">
  @import "../styles/NrRadio";
</style>
