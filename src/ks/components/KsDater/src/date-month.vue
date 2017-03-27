<template>
    <div class="KsDateMonth" cid="KsDateMonth">
        <div class="_date">
            <div class="_head">
                <div class="retreat" v-on:click="prev">&lt;</div>
                <div class="year" v-text="year+'年'"></div>
                <div class="next" v-on:click="next">&gt;</div>
            </div>
            <div v-on:click="pick($event)">
                <div class="_days"
                    v-for="row in 3">
                    <span id="month{{_uid}}_{{[4*row+index]}}" v-bind:class="{
                        'pass':months[4*row+index] 
                               && months[4*row+index].status == 'disabled',
                        'active':months[4*row+index] 
                               && months[4*row+index].status == 'active',
                        }" 
                        v-for="(index,item) in 4">{{months[4*row+index].val}}</span>
                </div>
            </div>
            <div class="_btn">
                <span class="today" v-on:click="curmonth">本月</span>
                <span class="clear" v-on:click="clearmonth">清除</span>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import { getMonths , fullzero} from './util/lang'

    var months = getMonths()
    
    export default {
        props:{
            value:{
                type:String,
                default:''
            }
        },
        data(){
            return {
                year:'',
                month:''
            }
        },
        computed:{
            
            months(){
                var yearmonth = this.value.split('-'),monthval = ''
                if(yearmonth[0] == this.year) monthval = yearmonth[1]
                
                return months.map((month,index)=>{
                    var status = ''
                    if(index+1 == monthval) status = 'active'
                    return {val:month,status:status}
                })
                
            }
        },
        methods:{
            prev(){
                this.year = +this.year - 1
            },
            next(){
                this.year = +this.year + 1
            },
            pick(event){
                var id = event.target.id,index
                if(!id) return
                id = id.split('_')
                this.month = +id[1]+1
            },
            curmonth(){
                var dater = new Date()
                this.year = dater.getFullYear()
                this.month = fullzero(1+dater.getMonth())
            },
            clearmonth(){

            }
        },
        watch:{
            value(val){
                var yearmonth= val.split('-')
                this.year = yearmonth[0]
                this.month = fullzero(yearmonth[1])
            },
            'month'(){
                this.value = this.year +'-'+ this.month
                console.log('this.value',this.value)
            }

        },
        ready(){
            console.log('ready',this.value)
        }

    }
</script>