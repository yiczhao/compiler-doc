import utils from '../utils'
import KsCheckbox2 from '@/components/KsCheckbox/v0.1.0/src/checkbox.vue'



describe('KsCheckbox2组件',()=>{
    var vm , vm2

    // beforeEach(() => utils.destroyVM(vm))

    it('创建KsCheckbox2组件',()=>{

        vm = utils.createTest({
          template: `
            <div class="container">
              <ks-checkbox2 v-bind:checked.sync="checked"></ks-checkbox2>
            </div>`,
          data(){
            return {
                checked:false
            }
          },
          components: { KsCheckbox2 }
        })
        var el = vm.$el.querySelector('.KsCheckbox')
        expect(typeof el).to.be.equal('object')
    })

    it('KsCheckbox2组件接口checked、disabled、color',()=>{

        vm2 = utils.createTest({
          template: `
            <div class="container">
              <ks-checkbox2 
                v-bind:color="color"
                v-bind:checked.sync="true" 
                v-bind:disabled="disabled"></ks-checkbox2>
            </div>`,    
          data(){
            return {
                checked:true,
                disabled:true,
                color:'red'
            }
          },
          components: { KsCheckbox2 }
        })
        var input = vm2.$el.querySelector('input')
        // // console.log(input.checked)
        expect(input.checked).to.be.equal(true)
        expect(input.disabled).to.be.equal(true)
        
        var centerPoint = vm2.$el.querySelector('.KsCheckbox-cube')
        // console.log(centerPoint.style['background'])
        expect(centerPoint.style['background']).to.be.equal(vm2.color)
        
    })

    it('KsCheckbox2组件disabled:true禁止点击',()=>{
        var input = vm2.$el.querySelector('input')
        input.click()
        expect(input.checked).to.be.equal(true)    
    })


    it('点击KsCheckbox2组件，选中',()=>{
        var input = vm.$el.querySelector('input')
        input.click()
        expect(vm.checked).to.be.equal(true)
    })
    
    it('再次点击KsCheckbox2组件，取消选中',()=>{
        var input = vm.$el.querySelector('input')
        input.click()
        expect(vm.checked).to.be.equal(false)
    })
    
})