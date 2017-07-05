<template>
  <li>
  {{show}}
      <div class="col">
          <input type="checkbox"  class="checkbox" 
              v-on:change="clickchildren()" 
              v-model="itemdata.checked"
              v-bind:class="itemdata.checked==true"/>
          <span v-on:click="show=!show">{{itemdata.name}}</span>
      </div>
      <ul style="margin-left:50px" v-show="show">
          <treeitem 
                v-on:change="change" 
                v-for="item in itemdata.children" 
                v-bind:itemdata="item"></treeitem>
      </ul>
  </li>
</template>
<script type="text/javascript">

  export default{
    name:'treeitem', 
    props:{
        itemdata:{
            type:Object
        }
    },
    data(){
        return {
            show:true
        }
    },
    methods:{
        change(){
            this.$emit('change')
        },
        clickchildren(){
            // console.log('pp',this.itemdata)
            
            this.itemdata.forEach(item=>{
                this.deep(item.children,item.checked)
            })
            this.$emit('change')
        },
        deep(children,checked){
            children && children.forEach((item)=>{
                item.checked = checked
                this.deep(item.children, checked)
            })
        }

    },
    created(){
        console.log(this._uid)
    }
  }
</script>
