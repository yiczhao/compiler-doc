## KsTipDialog

> 常用的弹出框列表选择组件

---

<div style="position:relative">
    <span>111111111111111111111111111111111111</span>
    <ks-tip-dialog 
        :show_toast = show_toast1>
        <p>333333333333333333333333333</p>
        <p>333333333333333333333333333</p>
        <p>333333333333333333333333333</p>
        <p>333333333333333333333333333</p>
        <p>333333333333333333333333333</p>
    </ks-tip-dialog> 
</div>

<div style="position:relative;float:left">
    <div style="display:inline-block;position:relative;border:1px solid #333">
        <span>111111111</span>
        <div class="toast-trangle"></div>
        <div class="toast-trangletop"></div>
    </div>
    <ks-tip-dialog 
        :show_toast = show_toast2>
        <div style="max-width:880px">
            <p>上好佳上好佳</p>
        </div>
    </ks-tip-dialog> 
</div>

<div style="position:relative;float:left">
    <div style="display:inline-block;position:relative">
        <span>111111111</span>
        <div class="toast-trangle"></div>
        <div class="toast-trangletop"></div>
    </div>
    <ks-tip-dialog 
        :show_toast = show_toast3>
        <p>333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333</p>
    </ks-tip-dialog> 
</div>

<script type="text/javascript">  
    export default {  
        data() {  
            return {  
                show_toast1:false,
                show_toast2:true,
                show_toast3:true,
            }  
        },
        methods:{},
        ready(){}            
    }  
</script>  