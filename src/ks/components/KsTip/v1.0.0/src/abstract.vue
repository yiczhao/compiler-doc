<template>
  <div class="KsPopupAbstract" v-el:reference>
    <!-- 内容 -->
    <slot name="title"></slot>
    <div v-bind:class="className" 
         v-el:popper 
         v-show="!disabled && showPopper">
          <strong v-text="content"></strong>
          <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  import VuePopper from 'KsComponents/utils/Popper'
  
  export default {
    VERSION: '1.0.0',
    name: 'KsPopupAbstract',
    mixins: [VuePopper],
    props: {
      show:Boolean,
      className: {type: String, default: 'KsPopupAbstract'},
      arrowClassName: {type: String, default: 'KsPopupAbstract-arrow'},
      disabled: Boolean,
      content: String,
      visibleArrow: {default: true},
      transition: {type: String, default: 'fade-in-linear'},
      options: {
        default() {
          return {
            boundariesPadding: 10,
            gpuAcceleration: false
          }
        }
      }
    },
    data () {
      return {}
    },
    watch:{
      show(val){
        this.showPopper = val
      },
      placement(val){
        
        if(!this.popperJS) this.updatePopper()
        this.showPopper = false
        setTimeout(()=>{
          this.doDestroy()
          this.updatePopper()  
          this.showPopper = true
          this.$emit('change',this.showPopper)
        })
        
      }
    },
    created(){
      this.showPopper = this.show
    }

  }
</script>
