<template>
  <li>
      <div>
          <input type="checkbox"  class="checkbox" 
              v-on:change="checkboxChange" 
              v-model="itemdata[checkedKey]"
              v-bind:class="itemdata[checkedKey]==true"/>
          <span v-bind:class="{'KsTree-name':hasChildren}" 
              v-on:click="show=!show">{{itemdata[nameKey]}}</span>
      </div>
      <ul class="KsTree-indent" 
          v-if="hasChildren"
          v-show="show">
          <treeitem 
                v-on:change="change" 
                v-for="item in itemdata[childrenKey]" 
                v-bind:itemdata="item" 
                v-bind:name-key="nameKey" 
                v-bind:children-key="childrenKey"
                v-bind:checked-key="checkedKey"></treeitem>
      </ul>
  </li>
</template>
<script type="text/javascript">

  export default{
    name:'treeitem', 
    props:{
        itemdata:{
            type:Object
        },
        nameKey:{
            type:String,
            default:'name'
        },
        checkedKey:{
            type:String,
            default:'checked'
        },
        childrenKey:{
            type:String,
            default:'children'
        }

    },
    data(){
        return {
            show:true
        }
    },
    computed:{
        hasChildren(){
            var children =  this.itemdata[this.childrenKey]
            return children && children.length
        }
    },
    methods:{
        change(){
            this.$emit('change')
        },
        checkboxChange(){
            var checkedKey = this.checkedKey
            this.deep(this.itemdata,this.itemdata[checkedKey])
            this.$emit('change')
        },
        deep(node,checked){
            var checkedKey = this.checkedKey ,
                childrenKey = this.childrenKey

            node[childrenKey] && node[childrenKey].forEach((item)=>{
                item[checkedKey] = checked
                this.deep(item, checked)
            })
        }

    }
  }
</script>
<style lang="scss">
    @import '../styles/tree.scss'
</style>
