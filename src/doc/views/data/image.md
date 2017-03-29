## ksImage

> 常用的图片显示组件

---

### 基础使用 （分类）

<ks-button @click="imageShow = true">呼出 ksImage 组件</ks-button>

<ks-image 
    :image-show.sync="imageShow" 
    :img-url="imgUrl"></ks-image>

```html
<ks-image 
    :image-show.sync="imageShow" 
    :img-url="imgUrl"></ks-image>
```

```javascript
    export default{
        data () {
            return {
                imageShow:false,
                imgUrl:" "
            }
        }
    }
```

### API
| 参数 | 说明 | 接口类型  | 可选值 | 默认值 | 是否必须 |
|------|-------|----------|---------|-------|--------|
| image-show | 用于是否显示查看图片组件 | Boolean | true, false | false | 是 |
| img-url | 显示图片的url  | String | 无 | 有 |是 |






<script>
    export default{
        data () {
            return {
                imageShow:false,
                imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1490775129&di=bbbf41c41be43d9a2c0e72242a85f208&src=http://img4q.duitang.com/uploads/item/201501/27/20150127133007_dEmyC.jpeg"
            }
        },
        methods: {
        }
    }
</script>