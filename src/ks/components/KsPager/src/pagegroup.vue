<template>
    <div class="KsPageGroup" cid="KsPageGroup">
        <div class="_statistical">共<span>{{total}}</span>条</div>
        <div class="ks-col">
            每页
            <select class="input" v-model="size">
                <option 
                    v-for="i in sizes" 
                    v-bind:value="i">{{i}}</option>
            </select>
            条
        </div>
        <page 
            class="ks-col-auto"
            v-bind:current.sync="current" 
            v-bind:length="length"
            v-bind:total="total"
            v-bind:size="size"
            v-bind:on-change="currentChange"
            v-on:change="currentChange2"></page>    
    </div>
</template>
<script type="text/javascript">
    import props from './mixins'
    import page from './page.vue'
    export default {
        VERSION:'1.0.1',
        components:{
            'page':page
        },
        mixins:[props],
        props: {
            // 每页可能展示条数
            sizes :{ type:Array, default(){ return[10,20,100] } }
        },
        data() {
            return {}
        },
        methods: {
            init (){
                this.size = this.size||this.sizes[0]
            },
            currentChange(val){
                if('function' == typeof this.onChange){
                    this.onChange(val)
                }
            },
            currentChange2(val){
                this.$emit('change',val)
            }
        },
        created (){
            this.init()
        },
        watch:{
            size(val){
                event && event.preventDefault()
                event && event.stopPropagation()
                this.$emit('change',val,'SIZE-CHANGE')
                if('function' == typeof this.onChange){
                    this.onChange(val,'SIZE-CHANGE')
                }
            }
        }
    }
</script>
<style lang="scss">
    /*@import '../styles/input.scss';*/
</style>