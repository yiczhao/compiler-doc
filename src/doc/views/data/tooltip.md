## KsToolTipNew

> 常用的添加表格控件

---

<div class="ks-row" style="margin-bottom:200px">
    <div class="ks-col">
        <ks-tool-tip-Website  placement="bottom-start" 
        :show.sync = "showTip1">
            <div>案例一(底偏上){{showTip1}}</div>
            <div slot="content">
                <div :style="{width:width + 'px'}" >我是案例1,箭头指向的是文字剧中的地方,相对于弹框而言,里面的内容是自适应的,箭头是底偏上的</div>
            </div>
        </ks-tool-tip-Website>
    </div>
    <div class="ks-col">
        <ks-tool-tip-Website  placement="bottom-end"
        :show.sync  = "showTip2">
            <div>案例一(底偏下){{showTip2}}</div>
            <div slot="content">
                <div :style="{width:width + 'px'}">我是案例1,箭头指向的是文字剧中的地方,相对于弹框而言,里面的内容是自适应的,箭头是底偏下的</div>
            </div>
        </ks-tool-tip-Website>
    </div>
    <div class="ks-col">
        <ks-tool-tip-content  placement="bottom">
            <div>案例一(底)</div>
            <div slot="content">
                <div :style="{width:width + 'px'}">我是案例1,箭头指向的是文字剧中的地方,相对于弹框而言,里面的内容是自适应的,箭头是底的</div>
            </div>
        </ks-tool-tip-content>
    </div>
</div>


-----

<script>
export default {
    data(){
        return {  
            width:500,
            showTip1:false,
            showTip2:false
        }  
    },
    methods:{
        showTipInfo(val){
            this.showTip2 = val
        }
    },
    ready(){}
}
</script>
<style>
    .ksUl{overflow: hidden;}
    .ksUl ul li{float:left;margin-right: 50px;margin-bottom: 150px;}

</style>




