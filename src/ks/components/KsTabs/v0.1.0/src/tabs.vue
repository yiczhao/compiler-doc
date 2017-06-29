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
        VERSION:'0.1.0',
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
                // console.log(index ,this.active)
                if(index == this.active) return
                this.active = index
                this.$emit('change',index)
                this.subShow(this.active)
            },
            subShow(index){
                this.$children.forEach((subvm,i)=>{
                    index == i 
                        ? subvm.status = 'active'
                        : subvm.status = ''
                })

            },
            changeUid(uid){
                
                this.contents.forEach((item,index)=>{
                    if(item.uid == uid){
                        this.active = index
                        this.$children.forEach((subvm,i)=>{
                            index != i && (subvm.status = '')
                        })
                    }
                })
            }
        },
        created(){

            this.$nextTick(()=>{
                this.subShow(this.active)
                if(typeof this.rerender != 'undefined'){
                    this.$compile(this.$els.titles)    
                }        
            })
            
        }
    }
</script>

<style lang="scss">
    @import '../styles/tabs.scss'
</style>