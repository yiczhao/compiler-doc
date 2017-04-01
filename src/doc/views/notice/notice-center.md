## NoticeCenter 通知中心

> 通知中心

---

### 基础使用

<label for="type">类型：</label><select name="type" id="type" v-model="type"><option value="primary">默认 --- 主色调</option><option value="warn">警告 --- 警告色</option><option value="danger">危险 --- 危险色</option><option value="success">成功 --- 成功色</option><option value="info">信息 --- 信息色</option></select>

<label for="title">标题：</label>
<input type="text" id="title" v-model="title">

<label for="title">内容：</label>
<textarea id="title" v-model="content"></textarea>

<label for="timeout">超时时间：</label>
<input type="number" id="timeout" v-model="timeout">

<br>
<ks-button @click="postOneMsg2NoticeCenter">将消息投递到通知中心</ks-button>

```html
<label for="type">类型：</label>
<select name="type" id="type" v-model="type">
  <option value="primary">默认 --- 主色调</option>
  <option value="warn">警告 --- 警告色</option>
  <option value="danger">危险 --- 危险色</option>
  <option value="success">成功 --- 成功色</option>
  <option value="info">信息 --- 信息色</option>
</select>

<label for="title">标题：</label>
<input type="text" id="title" v-model="title">

<label for="title">内容：</label>
<textarea id="title" v-model="content"></textarea>

<label for="timeout">超时时间：</label>
<input type="number" id="timeout" v-model="timeout">

<br>
<ks-button @click="postOneMsg2NoticeCenter">将消息投递到通知中心</ks-button>
```

### 脚本

<script>
  export default{
    data () {
      return { 
        title: 'title',
        content: 'content...',
        type: 'primary',
        timeout: 4500
      }
    },
    
    methods: {
      postOneMsg2NoticeCenter () {
        this.$KsNotice.post(this.title, this.content, this.type, this.timeout  << 0, (msg) => console.log(msg));
      }
    }
  }
</script>

```html
<script>
  export default{
    data () {
      return { 
        title: 'title',
        content: 'content...',
        type: 'primary',
        timeout: 4500
      }
    },
    
    methods: {
      postOneMsg2NoticeCenter () {
        //                    通知标题     通知内容      通知类型        自动销毁时间          关闭之后的回调
        //                       V           V            V              V                    V
        this.$KsNotice.post(this.title, this.content, this.type, this.timeout << 0, (msg) => console.log(msg));
      }
    }
  }
</script>
```

### API

#### KsModal / KsModalEntity

| 参数 | 说明 | 接口类型 | 类型 | 双向（twoWay） | 是否必须 | 可选值 | 默认值 |
|------|-------|----------|---------|---------|---------|-------|--------|
| title | 用来描述 `KsModal` 是否显示关闭按钮 | props | Boolean | `false` | 否 | 无 | `true` |
| content | 用来描述 `KsModal` 是否显示确定按钮 | props | Boolean | `false` | 否 | 无 | `true` |
| type | 用来描述 `KsModal` 是否显示取消按钮 | props | Boolean | `false` | 否 | 无 | `true` |
| timeout | 用来描述当前 `KsModal` 取消按钮的文字 | props | String | `false` | 否 | 无 | 取消 |
| closeCallback | 用来描述当前 `KsModal` 确定按钮的文字 | props | String | `false`| 否 | 无 | 确定 |
