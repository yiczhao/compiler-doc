## KsToolTipNew

> 常用的添加表格控件

---

<div class="ks-row" style="margin-bottom:200px">
    <div class="ks-col">
        <ks-tool-tip-new  placement="left-start">
            <div>案例一(左偏上)</div>
            <div slot="content">
                <div style="width:100px">我是案例1,箭头指向的是文字剧中的地方,相对于弹框而言,里面的内容是自适应的,箭头是左偏上的</div>
            </div>
        </ks-tool-tip-new>
    </div>
    <div class="ks-col">
        <ks-tool-tip-new  placement="left-end">
            <div>案例二(左偏下)</div>
            <div slot="content">
                <div style="width:100px">我是案例2,箭头指向的是文字剧中的地方,相对于弹框而言,里面的内容是自适应的,箭头是左偏下的</div>
            </div>
        </ks-tool-tip-new>
    </div>
    <div class="ks-col">
        <ks-tool-tip-new  placement="left">
            <div>案例三(左)</div>
            <div slot="content">
                <div style="width:100px">
                    <p style="box-sizing: border-box;word-wrap: break-word;">我是案例3,箭头指向的是文字剧中的地方,相对于弹框而言,里面的内容是自适应的,箭头是左剧中的</p></div>
            </div>
        </ks-tool-tip-new>
    </div>
</div>

----


<div class="ks-row" style="margin-bottom:200px">
    <div class="ks-col">
        <ks-tool-tip-new  placement="right-start">
            <div>案例一(右偏上)</div>
            <div slot="content">
                <div style="width:100px">我是案例1,箭头指向的是文字剧中的地方,相对于弹框而言,里面的内容是自适应的,箭头是右偏上的</div>
            </div>
        </ks-tool-tip-new>
    </div>
    <div class="ks-col">
        <ks-tool-tip-new  placement="right-end">
            <div>案例二(右偏下)</div>
            <div slot="content">
                <div style="width:100px">我是案例2,箭头指向的是文字剧中的地方,相对于弹框而言,里面的内容是自适应的,箭头是右偏下的</div>
            </div>
        </ks-tool-tip-new>
    </div>
    <div class="ks-col">
        <ks-tool-tip-new  placement="right">
            <div>案例三(右)</div>
            <div slot="content">
                <div style="width:100px">我是案例3,箭头指向的是文字剧中的地方,相对于弹框而言,里面的内容是自适应的,箭头是右剧中的</div>
            </div>
        </ks-tool-tip-new>
    </div>
</div>

---

<div class="ks-row" style="margin-bottom:200px">
    <div class="ks-col">
        <ks-tool-tip-new  placement="bottom-start">
            <div>案例一(下偏左)</div>
            <div slot="content">
                <div style="width:100px">我是案例1,箭头指向的是文字剧中的地方,相对于弹框而言,里面的内容是自适应的,箭头是下偏左的</div>
                <div>1111111</div>
            </div>
        </ks-tool-tip-new>
    </div>
    <div class="ks-col">
        <ks-tool-tip-new  placement="bottom-end">
            <div>案例二(下偏右)</div>
            <div slot="content">
                <div style="width:100px">我是案例2,箭头指向的是文字剧中的地方,相对于弹框而言,里面的内容是自适应的,箭头是下偏右的</div>
            </div>
        </ks-tool-tip-new>
    </div>
    <div class="ks-col">
        <ks-tool-tip-new  placement="bottom">
            <div>案例三(下)</div>
            <div slot="content">
                <div style="width:100px">我是案例3,箭头指向的是文字剧中的地方,相对于弹框而言,里面的内容是自适应的,箭头是下剧中的</div>
            </div>
        </ks-tool-tip-new>
    </div>
</div>

----


<div class="ks-row" style="margin-bottom:200px">
    <div class="ks-col">
        <ks-tool-tip-new  placement="top-start">
            <div>案例一(上偏左)</div>
            <div slot="content">
                <div style="width:100px">我是案例1,箭头指向的是文字剧中的地方,相对于弹框而言,里面的内容是自适应的,箭头是上偏左的</div>
                <div>显示內容</div>
            </div>
        </ks-tool-tip-new>
    </div>
    <div class="ks-col">
        <ks-tool-tip-new  placement="top-end">
            <div>案例二(上偏右)</div>
            <div slot="content">
                <div style="width:100px">我是案例2,箭头指向的是文字剧中的地方,相对于弹框而言,里面的内容是自适应的,箭头是上偏右的</div>
            </div>
        </ks-tool-tip-new>
    </div>
    <div class="ks-col">
        <ks-tool-tip-new  placement="top">
            <div>案例三(上)</div>
            <div slot="content">
                <div style="width:100px">我是案例3,箭头指向的是文字剧中的地方,相对于弹框而言,里面的内容是自适应的,箭头是上剧中的</div>
            </div>
        </ks-tool-tip-new>
    </div>
</div>

----

<ks-tool-tip  placement="top"  show-popper = true>
    <div>pppppp</div>
    <div slot="content">pppppppppppppppppppppppppppppp</div>
</ks-tool-tip>

-----


<ks-tool-tip-website
    :show-popper.sync="showPopper1"
    content="Lorem ipsum dolor"
    placement="right"
    close-button="Close me!">
<a @click.prevent="showPopper1 = !showPopper1" href="#">
    Click to open popover on the right
</a>
</ks-tool-tip-website>

<br/>
<script>
export default {
    data(){
        return {  
            showPopper1:false
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




