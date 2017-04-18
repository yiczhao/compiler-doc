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
    },
  },
  ready(){ 
    setTimeout(()=>{
        console.log(this.value,'___',this.vModel);
      (this.value == this.vModel) && ( document.querySelector(`.radio__${this._uid}`).click()); //判断初始化时是否应该选中//this.defChecked=true

      this.defChecked && (document.querySelector(`.radio__${this._uid}`).click());  //默认选中时，执行对应赋值操作this.vModel = this.value,this.checked =this.vModel
  },100)
    
  },
  watch:{
        vModel(){//当不通过点击方式修改vModel值时
            if(this.value == this.vModel) {
                document.querySelector(`.radio__${this._uid}`).click()
               //this.checked = this.vModel;
            }
        }
  }
}
