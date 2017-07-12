#KsLimitNumberFixed 指令
---

{{val}}
<input type="text"
    v-ks-limit-number-fixed:2="val" max="999" min="-90" v-model="val">

```html
<input type="text"
    v-ks-limit-number-fixed:2="val" max="999" min="-90" v-model="val">
```

```javascript
<script type="text/javascript">
    export default {
        data(){
            return{
                val:''
            }
        }
    }
</script>
```

### API
| 参数 | 说明 | 接口类型 | 类型 | 可选值 | 默认值 |
|------|-------|----------|---------|-------|--------|
| max | 最大值（limit为别名） | params | Number | `非必填` | `100000` |
| min | 最小值（只能为赋值） | params | Number | `非必填` | `0` |
| :2 | 小数部分 | arg | Number | `非必填` | `0` |


<script type="text/javascript">
    export default {
        data(){
            return{
                val:''
            }
        }
    }
</script>



