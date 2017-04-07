/**
 * @description 按钮基本属性.
 * @author pkeros
 * @data 2017/4/6
 * @email pkeros@vip.qq.com
 */

export default {

  props: {
    width: {type: String, require: true},
    height: {type: String, require: true},

    form: {type: String, default: ''},
    disabled: {type: Boolean, default: false},
    autofocus: {type: Boolean, default: false},
    name: {type: String, default: 'KSButton'},
    nativeType: {type: String, default: 'button'}
  },

  computed: {
    btnSize () {return `width: ${this.width}px; height: ${this.height}px`}
  }

}
