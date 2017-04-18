<template>
  <div class="ks-radio-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'KsRadioGroup',

    props: {
      vModel: { type: String, towWay: true }
    },

    events: {
      /**
       * @description change 事件处理函数
       * @param value {Boolean} 事件传递的 value
       * @summary 负责处理子组件产生的 change 事件
       */
      CChange (value) {
        this.vModel = value;

        this.$emit('change', value);
      }
    },
    methods:{
      changeModel(){
        this.$children.forEach((item) => {
          item.$data.vModel = this.vModel;
        })
      }
    },
    ready(){
      this.changeModel();
    },
    watch:{
      vModel(){
        this.changeModel();
      }
    }
  }
</script>

<style lang="scss">
  @import "../styles/RadioGroup";
</style>
