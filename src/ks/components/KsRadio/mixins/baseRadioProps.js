/**
 * @description 单选按钮基础属性.
 * @author pkeros
 * @data 2017/4/18
 * @email pkeros@vip.qq.com
 */

export default {

  props: {
    value: {type: String, required: true},
    disabled: {type: Boolean, default: false},
    defChecked: {type: Boolean, default: false},
    model: {type: String, toWay: true, required: true},
    name: {type: String, default: 'KsRadioAbstract'}
  }

}
