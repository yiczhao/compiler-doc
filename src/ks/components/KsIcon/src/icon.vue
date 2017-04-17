<template>
  <span class="KsIcon">
    <i :class="classes" :style="styles"></i>
  </span>
</template>

<script>
  // 对应图标库对应 class 的映射
  const libraryMapper = {
    ks: 'ks',
    fa: 'fa'
  };

  export default {
    VERSION: '1.0.0',

    name: 'KSIcon',

    data () {
      return {}
    },

    computed: {
      classes () {
        let prefix = libraryMapper[this.library];

        return `${prefix} ${prefix}-${this.name} fa-${this.size}
                fa-rotate-${this.rotate} fa-${this.animate}`;
      },

      styles () {
        return `color: ${this.color}; font-size: ${this.size}`;
      }
    },

    props: {
      library: {type: String, default: 'fa'},
      name: {type: String, required: true},
      size: {type: String, default: '2x'},
      color: {type: String, default: '#333'},
      rotate: {type: String, default: 'normal'},
      animate: {type: String, default: 'stop'}
    }
  }
</script>

<style lang="scss">
  @import "../../foundation/Font-Awesome-master/css/font-awesome.min.css";
</style>
