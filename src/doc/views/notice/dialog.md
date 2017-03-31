## Dialog 弹窗面板

> 在保留当前页面状态的情况下，告知用户并承载相关操作。

---

### 基础使用

#### 弹窗组件的基础使用（KsDialog / KsDialogEntity）

<br>

<ks-switch :checked.sync="dialogShow"></ks-switch>
<ks-dialog-entity :show.sync="dialogShow">
  <span slot="title">通过 Slot 自定义标题</span>
  <span slot="text">通过 Slot 自定义内容</span>
</ks-dialog-entity>

```html
<ks-switch :checked.sync="dialogShow"></ks-switch>
<ks-dialog-entity :show.sync="dialogShow">
  <!-- ! 注意: 作为 slot 的包裹元素最好使用行内元素 -->
  <span slot="title">通过 Slot 自定义标题</span>
  <span slot="text">通过 Slot 自定义内容</span>
</ks-dialog-entity>
```

> 这是基本的使用 `Ksdialog` 组件的方法, 通过其他属性我们还可以定义是否显示取消按钮, 
> 取消按钮显示的文字, 确定按钮显示的文字, 对话框的类型, 是否显示 mask 等等诸多细节。

<br>

#### 弹窗组件的其他使用方式

> 在看到上述的使用方式后你肯定有些疑问, 我只想简单的显示一个对话框提醒用户让用户做出选择都要写这么麻烦的代码吗？
> 是的这确实是一个问题, 在项目越来越复杂之后我们重复冗余的代码也越来越多, 不过幸好我们找到了解决办法

<br>

<ks-button @click="showDialog">呼出 KsDialog 组件</ks-button>

```html
<ks-button @click="showDialog">呼出 KsDialog 组件</ks-button>
```

> wow exciting !! 如你所见很简单，一个简单的函数调用就可以了，相比之前那些大片大片的代码真的是能方便不少，那么使用变得如此简单
> 那么功能是否也相应减少了呢？不！代码减少，功能一个不少！
> 来让我们一步一步分析调用他的代码，首先通过挂载在 `VueComponent` 对象上的 `$Ksdialog` 对象的 `info` 方法创建了一个
> 类型为 `info` 类型的对话框并传入了相关参数 标题 内容 等等，然后调用它其接受一个确定按钮的回调函数，和一个取消按钮的回调函数。

<br> 

> 下面让我们来详细介绍下 `$KsDialog` 对象上所提供的能力：
> 如你所料 `$KsDialog` 上提供了与类型对应的函数来产生不同类型的对话框。与设计标准一样对话框类型一共有四种：`success`, `info`, `warn`, `danger`

```javascript
//                   内容      标题  是否显示取消按钮
//                    ^         ^         ^
$KsDialog.success('content', 'title', 'cancel')(confirmCallback, cancelCallback);

/**
 * 以上的文档说过调用里传入的第一参数是确定的回调函数, 那么我们在没有传入确定的回调函数的情况下为什么点击确定他会关闭？
 * 之所以会有这样的行为是应为 `confirmCallback` 默认函数就是 `$KsDialog.close`, 所以如果你只想通知一条信息给用户那么
 * 就可以直接不传免去了手动调用 `$KsDialog.close` 方法的烦恼。
 */
```

> 上面的代码示例详细展示描述了各个参数分别是什么含义有什么作用，其实每个参数都有默认值 `content` 默认是 `Content...`
> `title` 默认是 `Title`， `cancel` 默认是 `false`，参数的顺序也是按照参数的重要性来设计的，你需要显示一个对话框那么最重要的肯定是内容
> 标题其次，等等一些其他的参数。

<br>

> **这里在叨唠一句通过 `$KsDialog` 方式调用的会话框是设计成队列的，也就是说不管你同时或者非同时调用多个对话框，它都会显示出来，在上一个关闭的时候显示下一个。**

<script>
  export default{
    data () {
      return {
        dialogShow: false
      }
    },
    
    methods: {
      showDialog () {
        this.$KsDialog.info('1', '2', '3')();
      },
      
      containerDialog (container) {
        document.querySelector(container).scrollTop = 0;

        this.$KsDialog.create({ container: container }).show()();
      }
    }
  }
</script>

### 脚本

```html
<script>
  export default{
    data () {
      return {
        dialogShow: false
      }
    },
    
    methods: {
      showDialog () {
        this.$KsDialog.info('1', '2', '3')();
      },
      
      containerDialog (container) {
        document.querySelector(container).scrollTop = 0;
        
        this.$KsDialog.create({ container: container }).show()();
      }
    }
  }
</script>
```

### API

#### KsDialog / KsDialogEntity

| 参数 | 说明 | 接口类型 | 类型 | 双向（twoWay） | 是否必须 | 可选值 | 默认值 |
|------|-------|----------|---------|---------|---------|-------|--------|
| showCancelBtn | 用来描述 `KsDialog` 是否显示取消按钮 | props | Boolean | `false` | 否 | 无 | `true` |
| cancelBtnText | 用来描述当前 `KsDialog` 取消按钮的文字 | props | String | `false` | 否 | 无 | 取消 |
| confirmBtnText | 用来描述当前 `KsDialog` 确定按钮的文字 | props | String | `false`| 否 | 无 | 确定 |
| title | 用来描述当前 `KsDialog` 标题的文字 | props | String | `false` | 否 | 无 | 无 |
| text | 用来描述当前 `KsDialog` 内容的文字 | props | String | `false` | 否 | 无 | 无 |
| type | 用来描述当前 `KsDialog` 的类型 | props | String | `false` | 否 | `success`, `info`, `warn`, `danger` | `success` |
| show | 用来描述当前 `KsDialog` 是否显示 | props | Boolean | `true` | 是 | 无 | 无 |
| @confirm | `KsDialog` 确定按钮点击 事件 | event | - | - | 否 | - | - |
| @cancel | `KsDialog` 取消按钮点击 事件 | event | - | - | 否 | - | - |

#### $KsDialog (通过原型方法调用)

| 函数名 | 函数签名 | 函数描述 |
|------|-------|--------|
| success| function (text, title, cancel = false) | 创建一个 `success` 类型的对话框 |
| info | function (text, title, cancel = false) | 创建一个 `info` 类型的对话框 | 
| warn | function (text, title, cancel = false) | 创建一个 `warn` 类型的对话框 | 
| danger | function (text, title, cancel = false) | 创建一个 `danger` 类型的对话框 | 
| show | function (text, title, hue, options) | 显示一个对话框可以做更多的自定义 |
| setDefaults | function (options) | 设置默认参数 |
| create | function (options) | 创建一个对话框 |
| close | function () | 关闭当前显示的对话框并且显示下一个对话框，如果当前没有对话框那么就是显示对话框 |

```javascript
/**
 * setDefaults 可以设置默认使用的参数, 下面列出了一些默认参数的默认值
 */
let defaults = {
  showCancelBtn: false,
  cancelBtnText: '取消',
  confirmBtnText: '确定',
  container: 'body',
  mask: true,
  title: 'Title',
  text: 'Content...',
  type: 'success'
};

$KsDialog.setDefaults({
                        title: 'A',
                        text: 'B'
                      });
// 在调用了 setDefaults 函数后再调用如果你不穿那么默认就是 title 被改成了 A，text 被改成了 B

$KsDialog.create();
// create 方法就是对 setDefaults 函数的一个封装不过它会返回一个 KsDialog 对象你可以直接对返回的对象调用 .show 方法

$KsDialog.show(text, title, hue, options);
// 下面我们来谈谈 show 方法前面两个参数都不用我在多赘述了，一个是显示的内容，一个是标题。
// hue 这个参数就是标记了当前对话框的主题 四个主题 `success`, `info`, `warn`, `danger`。
// 我们来着重谈谈 options 这个参数，这个参数可以说非常复杂提供了极大的可定制性，下到标题，上到遮罩的的容器范围，甚至 mask 的背景色都可以定义
// 因为 KsDialog 中的 mask 使用的是 KsMask 所以 options 中可以传入相关的参数来定制 mask 的能力

$KsDialog.show(text, title, hue, {
  fillMode: '填充模式 / full | part',
  backgroundColor: '遮罩颜色 / 有效的颜色值'
});


// 例如我在这里指定了它的 container 那么他的定位就是根据这个容器来的不会占满一屏幕
let dialog = this.$KsDialog.create({ container: '.work-container' });
```
<ks-button @click="containerDialog('body')">container body</ks-button>
<br>
<ks-button @click="containerDialog('.work-container')">container .work-container</ks-button>
