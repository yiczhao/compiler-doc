# Button 按钮

> 常用的操作按钮，触发业务逻辑时使用。

---

### 基础使用

#### 按钮类型 （KsButton）

<select class="mr20" name="btnType" v-model="btnType">
  <option v-for="type in btnTypeMapper" :value="type" v-text="type"></option>
</select><ks-button :type="btnType">按钮类型</ks-button>

```html
<select class="mr20" name="btnType" v-model="btnType">
  <option v-for="type in btnTypeMapper" :value="type" v-text="type"></option>
</select>
<ks-button :type="btnType">按钮类型</ks-button>
```

#### 按钮大小

<select class="mr20" name="btnSize" v-model="btnSize">
  <option v-for="size in btnSizeMapper" :value="size" v-text="size"></option>
</select><ks-button :size="btnSize">按钮大小</ks-button>

```html
<select class="mr20" name="btnSize" v-model="btnSize">
  <option v-for="size in btnSizeMapper" :value="size" v-text="size"></option>
</select>
<ks-button :size="btnSize">按钮大小</ks-button>
```

#### 幽灵按钮

<ks-button :ghost="true">幽灵按钮</ks-button>

```html
<ks-button :ghost="true">幽灵按钮</ks-button>
```

#### 加载按钮

<ks-switch class="mr20" :checked.sync="btnSwitch"></ks-switch><ks-button :loading="btnSwitch">幽灵按钮</ks-button>

```html
<ks-switch class="mr20" :checked.sync="btnSwitch"></ks-switch>
<ks-button :loading="btnSwitch">加载按钮</ks-button>
```

#### 按钮禁用

<ks-switch class="mr20" :checked.sync="btnDisable"></ks-switch><ks-button :disable="btnDisable">按钮禁用</ks-button>

```html
<ks-switch class="mr20" :checked.sync="btnDisable"></ks-switch>
<ks-button :disable="btnDisable">按钮禁用</ks-button>
```

#### 按钮的拓展使用 (KsNrButton) 与 (KsGhostButton)

> `KsButton` 的默认状态是由 `KsNrButton` 组件来提供的实现, 下面我来简述一下 `KsNrButton` 与 `KsButton` 组件 Api 的差异
> 与 `KsNrButton` 暴露的更加具有自定义的一些 Api。

<br>

<ks-nr-button :width="100" :height="30"> AAA </ks-nr-button>

<br>

<ks-ghost-button :width="300" :height="40"> BBB </ks-ghost-button>

<br>

<ks-nr-button :width="500" :height="32" color-normal="#FF0000" color-hover="#00FF00" color-active="#0000FF"> CCC </ks-nr-button>

<br>

> 默认不管是 `KsNrButton` 还是 `KsGhostButton` 都是不提供颜色的需要自己实现 `colorNormal` `colorHover` `colorAcitve` 来提供按钮主题

```html
<ks-nr-button :width="100" :height="30"> AAA </ks-nr-button>
<ks-ghost-button :width="130" :height="60"> BBB </ks-ghost-button>
<ks-nr-button :width="500" :height="32" :color-normal="#FF0000" :color-hover="#00FF00" :color-active="#0000FF"> CCC </ks-nr-button>
```

> 默认按钮的风格样式设计是根据设计原型里的标准, 可以满足大部分需求单不排除有一些定制话的需求, 故在此释出定制化接口来满足一些特殊的需求。


<script>
  let btnTypeMapper = [
    'primary',
    'success',
    'info',
    'warn',
    'danger',
    'other'
  ];
  
  let btnSizeMapper = [
    'normal',
    'middle',
    'large'
  ]

  export default{
    data () {
      return {
        btnTypeMapper,
        btnSizeMapper,
        
        btnSwitch: false,
        btnDisable: false,
        btnType: 'primary',
        btnSize: 'normal'
      }
    }
  }
</script>

### 脚本

```html
<script>
  let btnTypeMapper = [
    'primary',
    'success',
    'info',
    'warn',
    'danger',
    'other'
  ];
  
  let btnSizeMapper = [
    'normal',
    'middle',
    'large'
  ];

  export default{
    data () {
      return {
        btnTypeMapper,
        btnSizeMapper,
        
        btnSwitch: false,
        btnDisable: false,
        btnType: 'primary',
        btnSize: 'normal'
      }
    }
  }
</script>
```
### API

#### KsButton

| 参数 | 说明 | 接口类型 | 类型 |  双向（twoWay） | 是否必须 | 可选值 | 默认值 |
|------|-------|----------|---------|-------|---------|-------|--------|
| type | 用来描述按钮的类型 | props | String | `false` | 否 | **primary**, **success**, **info**, **warn**, **danger**, **other**| primary |
| size | 用来描述按钮的大小 | props | String | `false` | 否 |**normal**, **middle**, **large** | normal |
| ghost | 用来描述按钮是否是 `幽灵` 类型按钮 | props | Boolean | `false` | 否 | `true`, `false` | `false` |
| loading | 同步属性，用来控制按钮是否是加载状态 | props | Boolean | `false` | 否 | 无 | 无 |
| disable | 用来描述按钮是禁用 | props  | Boolean | `false` | 否 | `true`, `false` | `false` |
| nativeType | 用来描述按钮原生类型 | props | String | `false` | 否 | 无 | `button` |

#### (KsNrButton) 与 (KsGhostButton)

| 参数 | 说明 | 接口类型 | 类型 |  双向（twoWay） | 是否必须 | 可选值 | 默认值 |
|------|-------|----------|---------|-------|---------|-------|--------|
| loading | 同步属性，用来控制按钮是否是加载状态 | props | Boolean | `false` | 否 | 无 | 无 |
| disable | 用来描述按钮是禁用 | props  | Boolean | `false` | 否 | `true`, `false` | `false` |
| nativeType | 用来描述按钮原生类型 | props | String | `false` | 否 | 无 | `button` |
| fontSize | 用来描述按钮内文字大小 | props | Number | `false` | 是 | 无 | 无 |
| width | 用来描述按钮的宽度 | props | Number | `false` | 是 | 无 | 无 |
| height | 用来描述按钮的高度 | props | Number | `false` | 是 | 无 | 无 |
| colorNormal | 用来描述按钮 normal （默认） 时的颜色, 十六进制颜色值 | props | String | `false` | 是 | 无 | 无 |
| colorHover | 用来描述按钮 hover （鼠标悬浮） 时的颜色, 十六进制颜色值 | props | String | `false` | 是 | 无 | 无 |
| colorActive | 用来描述按钮 active （按钮按下） 是的颜色, 十六进制颜色值 | props | String | `false` | 是 | 无 | 无 |
