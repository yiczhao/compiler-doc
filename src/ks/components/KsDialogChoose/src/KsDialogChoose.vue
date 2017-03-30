<template>  
<div class="KsDialogChoose">            
    <div class="radiofir ">
        <input type="text" class="input full" 
            @click="clickinput()" 
            readonly="readonly"
            v-model="showtxt"
            />
    </div>
    <ks-dialog-program  
        :title="'请选择交易门店'" 
        :show="is_show" 
        :cb-close="close_dialog"
        :width = "width" >
        <div class="trade_store">
            <ul>
                <li v-for = "i in list" 
                    :class="i.ischecked && 'check'"
                    @click="choosestore(i)">
                    <span>{{i.name}}</span>
                    <i></i>
                </li>
            </ul>
            <div class="txtr btngroup">
                <span class="reset" @click="reset()">重选</span>
                <span class="checkall" @click="checkall()">全选</span>
                <ks-button :ghost="true" type="other" style="margin-right: 10px"
                    @click="close_dialog">取消</ks-button>
                <ks-button :type="'primary'"
                    @click="save()">确认</ks-button>
            </div>
        </div>
    </ks-dialog-program>
</div>
</template>  
  
<script type="text/javascript">  
import KsButton from '../../KsButton'
import KsDialogProgram from '../../KsDialogProgram'
  export default {  
    props:{
        list:{
            type:Array
        },
        sid:{
            type:Array
        }
    },
    components:{
        KsDialogProgram:KsDialogProgram,
        KsButton:KsButton
    },
    data() {  
        return {  
            is_show:false,
            width:600,
            total:0,
            showtxt:'',
            onestorename:'',
            listparse:[]
        }  
    },
    methods:{
        close_dialog(){
            this.is_show = false
            this.list = [].concat(JSON.parse(JSON.stringify(this.listparse)));
        },
        clickinput(){
            this.is_show = true
        },
        choosestore(t){
            t.ischecked = !t.ischecked
        },
        save(){
            this.look()
            this.is_show = false
            this.listparse = [].concat(JSON.parse(JSON.stringify(this.list)));
        },
        look(){
            this.total = 0
            this.list.forEach(t=>{
                if(t.ischecked)
                {
                    this.total ++;
                    this.onestorename = t.name
                }
            })
            if(this.total == 1)
            {
                this.total = this.onestorename 
            }else if(this.total == 0){
                this.total = '您还未选择任何一家门店'
            }else{
                 this.total = '共有'+ this.total +'家门店'
            }

            this.showtxt = this.total


          
        },
        reset(){
            this.total = 0
            this.list.forEach(t=>{
                t.ischecked = false
            })
        },
        checkall(){
            this.total = this.list.length
            this.list.forEach(t=>{
                t.ischecked = true
            })
        }
    },
    watch:{
        list(val){
            val.forEach(t=>{
                this.sid.forEach(item=>{
                    if(t.id == item)
                    {
                        t.ischecked = true
                    }
                })
                
            })
            this.look()
            this.listparse = [].concat(JSON.parse(JSON.stringify(val)));
        }
    },
    ready(){  

    }
            
  }  
</script>  
<style lang="scss">
  @import "../styles/KsDialogChoose";
</style>
