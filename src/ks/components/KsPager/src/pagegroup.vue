<template>
    <div class="KsPageGroup" cid="KsPageGroup">
        <div class="_statistical">共<span>{{total}}</span>条</div>
        <div class="ks-col">
            每页
            <select class="input" v-model="size">
                <option 
                    v-for="i in sizes" 
                    :value="i">{{i}}</option>
            </select>
            条
        </div>
        <page 
            class="ks-col-auto"
            :current.sync="current" 
            :length="length"
            :total="total"
            :size="size"
            v-bind:on-change="currentChange"></page>    
    </div>
</template>
<script type="text/javascript">
    import props from './mixins'
    import page from './page.vue'
    export default {
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
                this.size = this.sizes[0]
            },
            currentChange(val){
                // console.log(val,this.onChange);
                if('function' == typeof this.onChange){
                    this.onChange(val)
                }
            }
        },
        created (){
            this.init()
        },
        watch:{
            size(val){
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