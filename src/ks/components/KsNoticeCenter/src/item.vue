<template>
  <div class="notice-center-item noticeCenterItem" cid="noticeCenterItem"
       :style="{background: hueMapper[hue]['background'], color: hueMapper[hue]['fontColor']}"
  >
    <h3 class=" _title">
      <strong v-text="title"></strong>
      <i class=" _close" :style="{fill: hueMapper[hue]['fontColor']}"
         @click="$emit('close')" v-if="closeBtn">
        <!-- close 图标 -->
        <svg class="icon" width="18" height="18" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g transform="scale(0.03125, 0.03125)">
            <path
              d="M557.312 513.248l265.28-263.904c12.544-12.48 12.608-32.704 0.128-45.248-12.512-12.576-32.704-12.608-45.248-0.128l-265.344 263.936-263.04-263.84C236.64 191.584 216.384 191.52 203.84 204 191.328 216.48 191.296 236.736 203.776 249.28l262.976 263.776L201.6 776.8c-12.544 12.48-12.608 32.704-0.128 45.248 6.24 6.272 14.464 9.44 22.688 9.44 8.16 0 16.32-3.104 22.56-9.312l265.216-263.808 265.44 266.24c6.24 6.272 14.432 9.408 22.656 9.408 8.192 0 16.352-3.136 22.592-9.344 12.512-12.48 12.544-32.704 0.064-45.248L557.312 513.248z">
            </path>
          </g>
        </svg>
      </i>
    </h3>
    <p class=" _content" v-text="content"></p>
  </div>
</template>

<script>
  /**
   * @description 色调映射
   * @type {{}}
   */
  let hueMapper = {
    danger: { background: '#EF5350', fontColor: '#FFF' },
    warn: { background: '#FF7043', fontColor: '#FFF' },
    primary: { background: '#2196f3', fontColor: '#FFF' },
    success: { background: '#66BB6A', fontColor: '#FFF' },
    info: { background: '#26C6DA', fontColor: '#FFF' }
  };

  export default{
    VERSION: '0.0.1',

    data () {
      return {
        hueMapper
      }
    },

    props: {
      id: {type: Number, default: -1},
      closeBtn: {type: Boolean, default: true},
      delay: {type: Number, default: 4500},
      hue: {type: String, default: 'primary'},
      title: {type: String, default: 'title'},
      content: {type: String, default: 'content...'}
    },

    created () {
      setTimeout(() => this.$emit('close', this.id), this.delay);
    }
  }
</script>

<style lang="scss">
  $width: 300px;                                 // 提示信息框的长度
  $icon-size: 18px;                              // 图标大小

  .noticeCenterItem {
    position: relative; width: $width; min-height: 80px;
    box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
    border-radius: 3px; padding: 6px;
    box-sizing: border-box;
    word-wrap: break-word;

    // 标题
    _title {
      padding-right: 18px;

      // close 按钮
      _close {
        position: absolute; right: 6px; top: 6px;
        text-align: center; line-height: $icon-size;
        cursor: pointer;

        &:hover .icon { fill: red }
      }
    }
  }
</style>
