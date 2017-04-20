<template>
  <!-- 普通按钮 -->
  <template v-if="mode === 'normal'">
    <style type="text/css">
      /* 默认状态 */
      .KsBtnAbstract--UID-{{ _uid }} .KsBtnAbstract {
        color: white;
        background: {{ colorNormal }};
      }
      /* hover 状态 */
      .KsBtnAbstract--UID-{{ _uid }} .KsBtnAbstract:hover {
        background: {{ colorHover }};
      }
      .KsBtnAbstract--UID-{{ _uid }} .KsBtnAbstract[disabled]:hover {
        background: {{ colorNormal }};
      }
      /* active 状态 */
      .KsBtnAbstract--UID-{{ _uid }} .KsBtnAbstract:active {
        background: {{ colorActive }};
      }
      .KsBtnAbstract--UID-{{ _uid }} .KsBtnAbstract[disabled]:active {
        background: {{ colorNormal }};
      }
    </style>
  </template>
  <!-- 幽灵按钮 -->
  <template v-if="mode === 'ghost'">
    <style type="text/css">
      /* 默认状态 */
      .KsBtnAbstract--UID-{{ _uid }} .KsBtnAbstract {
        color: {{ colorNormal }};
        background: white;
        border: 1px solid {{ colorNormal }};
      }
      /* hover 状态 */
      .KsBtnAbstract--UID-{{ _uid }} .KsBtnAbstract:hover {
        color: {{ colorHover }};
        border: 1px solid {{ colorHover }};
      }
      .KsBtnAbstract--UID-{{ _uid }} .KsBtnAbstract[disabled]:hover {
        color: {{ colorNormal }};
        border: 1px solid {{ colorNormal }};
      }
      /* active 状态 */
      .KsBtnAbstract--UID-{{ _uid }} .KsBtnAbstract:active {
        color: {{ colorActive }};
        border: 1px solid {{ colorActive }};
      }
      .KsBtnAbstract--UID-{{ _uid }} .KsBtnAbstract[disabled]:active {
        color: {{ colorNormal }};
        border: 1px solid {{ colorNormal }};
      }
    </style>
  </template>
  <div :class="'KsBtnAbstract--UID-' + _uid">
    <button :type="nativeType" :autofocus="autoFocus" :name="name" v-if="truth"
            :disabled="disabled" :form="form" :style="style"
            class="KsBtnAbstract" :class="{'KsBtnAbstract--disabled': disabled}"
            :id="'KsBtnAbstract--UID-' + _uid"
    >
      <slot></slot>
    </button>

    <a :disabled="disabled" :style="style" v-if="!truth"
       class="KsBtnAbstract" :class="{'KsBtnAbstract--disabled': disabled}"
       :id="'KsBtnAbstract--UID-' + _uid"
    >
      <slot></slot>
    </a>
  </div>
</template>

<script>
  import baseBtnProps from '../mixins/baseBtnProps'

  export default {
    VERSION: '1.0.0',

    mixins: [baseBtnProps],

    data () {
      return {}
    },

    props: {
      width: {type: String, require: true},
      height: {type: String, require: true},
      fontSize: {type: String, default: '14px'},
      truth: {type: Boolean, default: true},
      colorNormal: { type: String, require: true },
      colorHover: { type: String, require: true },
      colorActive: { type: String, require: true }
    },

    computed: {
      style () {return `min-width: ${this.width}; height: ${this.height};
     font-size: ${this.fontSize}; line-height: ${!this.truth && this.height}`}
    }

  }
</script>

<style lang="scss">
  @import "../../foundation/SassMagic-master/src/sassMagic";

  @include b (KsBtnAbstract) {
    min-width: 90px; outline: none;
    border: 1px solid transparent; border-radius: 3px;
    padding: 3px 18px; display: inline-block;
    white-space: nowrap; text-align: center;
    cursor: pointer; -webkit-user-drag: none;
    touch-action: manipulation; user-select: none;

    // 禁用状态
    @include m (disabled) {
      opacity: .6; cursor: not-allowed;
    }
  }
</style>
