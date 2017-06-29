<template>
    <div class="KsTabs-{{type}}">
        <ul class="ibw KsTabs-title-ul" v-el:titles>
            <li class="ib KsTabs-title-li"
                v-bind:class="{'active':$index==active}" 
                v-for="title in titles" 
                v-on:click="tabClick($index)">
                <div class="KsTabs-title-wrap" v-html="title"></div>
            </li>
        </ul>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default {
        kscomponents:['KsIcon_v0'],
        props:{
            type:{
                type:String,
                default:'overline'
            },
            rerender:{
                type:String
            }
        },
        data(){
            return {
                contents:[],
                titles:[],
                active:0
            }
        },
        computed:{

            titles:{
                get(){
                    return this.contents.map((item,index)=> {
                        if(item.status =='active') this.active = index
                        return item.title
                    })
                }
            }
        },
        methods:{
            /**
             * [tabClick 点击tab]
             * 调起change事件,调起切换（重复点击当前tab return）
             * @param  {[type]} index [tab序列]
             * @return {[type]}       [null]
             */
            tabClick(index){
                if(index == this.active) return
                this.active = index
                this.$emit('change',index)
                this.subShow(index)
            },
            subShow(index){
                this.$children.forEach((subvm,i)=>{
                    index == i 
                        ? subvm.status = 'active'
                        : subvm.status = ''
                    
                })
                
            }
        },
        created(){
            if(typeof this.rerender != 'undefined'){
                this.$nextTick(()=>{
                    this.$compile(this.$els.titles)    
                })
            }
            
            
        }
    }
</script>

<style lang="scss">
    @import '../styles/tabs.scss'
</style>