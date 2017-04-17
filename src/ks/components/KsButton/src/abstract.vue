<template>
  <!-- 普通按钮 -->
  <template v-if="mode === 'normal'">
    <style type="text/css">
      /* 默认状态 */
      .KSBtnAbstract__UID--{{ _uid }} .KSBtnAbstract {
        color: white;
        background: {{ colorNormal }};
      }
      /* hover 状态 */
      .KSBtnAbstract__UID--{{ _uid }} .KSBtnAbstract:hover {
        background: {{ colorHover }};
      }
      .KSBtnAbstract__UID--{{ _uid }} .KSBtnAbstract[disabled]:hover {
        background: {{ colorNormal }};
      }
      /* active 状态 */
      .KSBtnAbstract__UID--{{ _uid }} .KSBtnAbstract:active {
        background: {{ colorActive }};
      }
      .KSBtnAbstract__UID--{{ _uid }} .KSBtnAbstract[disabled]:active {
        background: {{ colorNormal }};
      }
    </style>
  </template>
  <!-- 幽灵按钮 -->
  <template v-if="mode === 'ghost'">
    <style type="text/css">
      /* 默认状态 */
      .KSBtnAbstract__UID--{{ _uid }} .KSBtnAbstract {
        color: {{ colorNormal }};
        background: white;
        border: 1px solid {{ colorNormal }};
      }
      /* hover 状态 */
      .KSBtnAbstract__UID--{{ _uid }} .KSBtnAbstract:hover {
        color: {{ colorHover }};
        border: 1px solid {{ colorHover }};
      }
      .KSBtnAbstract__UID--{{ _uid }} .KSBtnAbstract[disabled]:hover {
        color: {{ colorNormal }};
        border: 1px solid {{ colorNormal }};
      }
      /* active 状态 */
      .KSBtnAbstract__UID--{{ _uid }} .KSBtnAbstract:active {
        color: {{ colorActive }};
        border: 1px solid {{ colorActive }};
      }
      .KSBtnAbstract__UID--{{ _uid }} .KSBtnAbstract[disabled]:active {
        color: {{ colorNormal }};
        border: 1px solid {{ colorNormal }};
      }
    </style>
  </template>
  <div :class="'KSBtnAbstract__UID--' + _uid">
    <button :type="nativeType" :autofocus="autoFocus" :name="name"
            :disabled="disabled" :form="form" :style="style"
            class="KSBtnAbstract" :class="{'KSBtnAbstract--disabled': disabled}"
    >
      <slot></slot>
    </button>
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
      colorNormal: { type: String, require: true },
      colorHover: { type: String, require: true },
      colorActive: { type: String, require: true }
    }

  }
</script>

<style lang="scss">
  @import "../../foundation/SassMagic-master/src/sassMagic";

  @include b(KSBtnAbstract) {
    min-width: 90px; outline: none;
    border: 1px solid transparent; border-radius: 3px;
    padding: 3px 18px; display: inline-block;
    white-space: nowrap; text-align: center;
    cursor: pointer; -webkit-user-drag: none;
    touch-action: manipulation; user-select: none;

    // 禁用状态
    @include m(disabled) {
      opacity: .6; cursor: not-allowed;
    }
  }
</style>
