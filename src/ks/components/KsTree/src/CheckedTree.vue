<template>
  <div class="checked-tree" cid="checkedTree">

    <ks-checkbox-group :v-model="model">
      <checked-tree :node="node" :config="config"></checked-tree>
    </ks-checkbox-group>

  </div>
</template>

<script>
  import CheckedTree from './_CheckedTree.vue'
  import TreeMixin from '../mixins/treeMinxi'

  export default{
    data () {
      return {
        model: []
      }
    },

    mixins: [TreeMixin],

    components: { CheckedTree }
  }
</script>

<style lang="scss">
  .checkedTree {

  }
</style>
