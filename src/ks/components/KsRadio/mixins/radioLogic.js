/**
 * @description radio 的逻辑
 * @author: pkeros.
 * @date: 2016/10/14.
 */
export default {
  props: {
    value: { default: 'KsNormalRadio' },
    vModel: { towWay: true },
    name: { type: String, default: 'KsNormalRadio' },
    color: { type: String, default: '#00A5E0' },
    checked: { type: Boolean, default: false },
    defChecked: { type: Boolean, default: false },
    disable: { type: Boolean, default: false }
  },

  computed: {
    /**
     * @description 选择框中方块 style
     * @summary 用于控制选择框中方块的颜色
     * @return {string}
     */
    styleCubeColor () {
      return `background: ${this.color}!important;`
    }
  },

  watch: {
    /**
     * @description 监测 checked 属性
     * @summary 用于监测改变并发送 change 事件
     */
    checked () {
      this.$dispatch('CChange', this.value);

      this.vModel = this.value;
    }
  }
}
