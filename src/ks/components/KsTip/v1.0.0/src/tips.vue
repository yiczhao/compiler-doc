<template>
  <div class="KsTips"
    v-on:mouseenter="hover(true)"
    v-on:mouseleave="hover(false)">
    <ks-popup-abstract
      v-on:change="change"
      v-bind:show="show"
      v-bind:placement="placement"
      v-bind:class-name="className" 
      v-bind:arrow-class-name="arrowClassName"
      v-bind:disabled="disabled" 
      v-bind:content="content"
      v-bind:visible-arrow="visibleArrow" 
      v-bind:transition="transition"
      v-bind:options="options">
      <!-- 弹出依靠 -->
      <div slot="title" class="container" 
        v-on:click="click">
        <slot name="title"></slot>
        <!-- <span>选择</span> -->
      </div>
      <!-- 弹出内容部分 -->
      <div slot="content">
        <slot name="content"></slot>  
      </div>
    </ks-popup-abstract>
  </div>
</template>

<script>
  import KsPopupAbstract from './abstract.vue'

  export default {
    VERSION: '1.0.0',
    name: 'KsTip',
    components: { KsPopupAbstract },
    props: {
      type:{default:'hover'},
      placement:{type: String, default: 'bottom'},
      className: {type: String, default: 'KsTip'},
      arrowClassName: {type: String, default: 'KsTip-arrow'},
      openDelay: {type: Number, default: 0},
      closeDelay: {type: Number, default: 0},
      disabled: {type:Boolean,default:false},
      content: String,
      show:{type:Boolean,default:false},
      visibleArrow: {default: true},
      transition: {type: String, default: 'fade-in-linear'},
      options: {
        default() {
          return {
            boundariesPadding: 10,
            gpuAcceleration: true
          }
        }
      }
    },
    data () {
      return {}
    },
    methods: {
      hover(val){
        if(this.type!='hover') return
        this.change(val)
      },
      click() {
        if(this.type!='click') return
        setTimeout(() => {
          this.change(!this.show)
        }, this.openDelay);
      },
      change(val){
        this.show = val
        this.$emit('change',this.show)
      }

    }
    

  }
</script>

<style lang="scss">
  @import "../styles/tips";
</style>
