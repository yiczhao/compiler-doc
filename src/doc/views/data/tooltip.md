## KsToolTipNew

> 常用的添加表格控件

---

<div class="ks-row" style="margin-bottom:200px">
    <div class="ks-col">
        <ks-tool-tip-new  placement="left-start">
            <div>案例一(左偏上)</div>
            <div slot="content">
                <div :style="{width:width + 'px'}">我是案例1,箭头指向的是文字剧中的地方,相对于弹框而言,里面的内容是自适应的,箭头是左偏上的</div>
            </div>
        </ks-tool-tip-new>
    </div>
</div>


-----

<script>
export default {
    data(){
        return {  
            width:500,
        }  
    },
    methods:{},
    ready(){}
}
</script>
<style>
    .ksUl{overflow: hidden;}
    .ksUl ul li{float:left;margin-right: 50px;margin-bottom: 150px;}

</style>




