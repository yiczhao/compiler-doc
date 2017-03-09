## Radio 单选框

> 在一组备选项中进行单选。

---

### 基础使用

#### 单选使用

> 单选在使用时与原生 `Radio` 一样必须设置 `name` 属性, 只有相同名称的 `Radio` 才能形成单选

<br>

<ks-radio class="mr20" name="base-use">备选项1</ks-radio><ks-radio class="mr20" name="base-use">备选项2</ks-radio><ks-radio class="mr20" name="base-use">备选项3</ks-radio>

```html
<ks-radio name="base-use">备选项1</ks-radio>
<ks-radio name="base-use">备选项2</ks-radio>
<ks-radio name="base-use">备选项3</ks-radio>
```

#### 单选颜色

> 组件可以通过 `color` 属性来自定义颜色

<br>

<span class="mr20" style="color: #FFDD33">#FFDD33</span> <ks-radio color="#FFDD33" name="base-color">备选项1</ks-radio>
<span class="mr20" style="color: #CC00FF">#CC00FF</span> <ks-radio color="#CC00FF" name="base-color">备选项2</ks-radio>
<span class="mr20" style="color: #FFBBDD">#FFBBDD</span> <ks-radio color="#FFBBDD" name="base-color">备选项3</ks-radio>

```html
<span class="mr20" style="color: #FFDD33">#FFDD33</span> <ks-radio color="#FFDD33" name="base-color">备选项1</ks-radio>
<span class="mr20" style="color: #CC00FF">#CC00FF</span> <ks-radio color="#CC00FF" name="base-color">备选项2</ks-radio>
<span class="mr20" style="color: #FFBBDD">#FFBBDD</span> <ks-radio color="#FFBBDD" name="base-color">备选项3</ks-radio>
```

#### 单选禁用

> 组件可以通过 `disable` 属性来禁用

<br>

<ks-switch class="mr20" :checked.sync="radioDisable">
</ks-switch><ks-radio :disable="radioDisable">幽灵按钮</ks-radio>

```html
<ks-switch class="mr20" :checked.sync="radioDisable"></ks-switch>
<ks-radio :disable="radioDisable">幽灵按钮</ks-radio>
```

#### 按钮类型的单选

> 按钮类型的单选使用

<br>

<div class="radio-container">
  <ks-btn-radio name="base-btn">张三</ks-btn-radio><ks-btn-radio name="base-btn">李四</ks-btn-radio><ks-btn-radio name="base-btn">王五</ks-btn-radio>
</div>

<br>

默认选中张三
<div class="radio-container">
  <ks-btn-radio name="base-btn1" :def-checked="true">张三</ks-btn-radio><ks-btn-radio name="base-btn1">李四</ks-btn-radio><ks-btn-radio name="base-btn1">王五</ks-btn-radio>
</div>

<br>

禁用项
<div class="radio-container">
  <ks-btn-radio name="base-btn2" color="#CC00FF" :def-checked="true">张三</ks-btn-radio><ks-btn-radio name="base-btn2" :disable="true">李四</ks-btn-radio><ks-btn-radio name="base-btn2">王五</ks-btn-radio>
</div>

```html
<!-- 通常使用 -->
<div class="radio-container">
  <ks-btn-radio name="base-btn">张三</ks-btn-radio>
  <ks-btn-radio name="base-btn">李四</ks-btn-radio>
  <ks-btn-radio name="base-btn">王五</ks-btn-radio>
</div>

<!-- 默认选中张三 -->
<div class="radio-container">
  <ks-btn-radio name="base-btn1" :def-checked="true">张三</ks-btn-radio>
  <ks-btn-radio name="base-btn1">李四</ks-btn-radio>
  <ks-btn-radio name="base-btn1">王五</ks-btn-radio>
</div>

<!-- 禁用 -->
<div class="radio-container">
  <ks-btn-radio name="base-btn2" :def-checked="true">张三</ks-btn-radio>
  <ks-btn-radio name="base-btn2" :disable="true">李四</ks-btn-radio>
  <ks-btn-radio name="base-btn2">王五</ks-btn-radio>
</div>
```

#### 获取 Radio 的选中值

> 如何获取 radio 的选中值

<br>

<div class="radio-container">
  <ks-radio name="test1" :v-model.sync="radioChange" value="zhangSan">张三</ks-radio>
  <ks-radio name="test1" :v-model.sync="radioChange" value="liSi">李四</ks-radio>
  <ks-radio name="test1" :v-model.sync="radioChange" value="wangWu">王五</ks-radio>
</div>

<br>

<label v-text="radioChange"></label>

<br>

我们可以通过绑定 `v-model` 属性的方式来获取当前的选中项。

```html
<div class="radio-container">
  <ks-radio name="test1" :v-model.sync="radioChange" value="zhangSan">张三</ks-radio>
  <ks-radio name="test1" :v-model.sync="radioChange" value="liSi">李四</ks-radio>
  <ks-radio name="test1" :v-model.sync="radioChange" value="wangWu">王五</ks-radio>
</div>
```

<ks-radio-group :v-model.sync="radioChange2">
  <ks-radio name="test2" value="zhangSan">张三</ks-radio>
  <ks-radio name="test2" value="liSi">李四</ks-radio>
  <ks-radio name="test2" value="wangWu">王五</ks-radio>
</ks-radio-group>

<br>

<label v-text="radioChange2"></label>

<br>

我们可以通过给 `ks-radio-group` 绑定 `v-model` 属性的方式来获取当前的选中项, 避免了每个 `radio` 都要绑定的烦恼。

```html
<ks-radio-group :v-model.sync="radioChange2">
  <ks-radio name="test2" value="zhangSan">张三</ks-radio>
  <ks-radio name="test2" value="liSi">李四</ks-radio>
  <ks-radio name="test2" value="wangWu">王五</ks-radio>
</ks-radio-group>
```

<script lang="babel">
  export default{
    data () {
      return {
        radioChange2: 'radioChange',
        radioChange: 'radioChange',
        radioDisable: false
      }
    }
  }
</script>

### 脚本

```html
<script lang="babel">
  export default{
    data () {
      return {
        radioChange2: 'radioChange',
        radioChange: 'radioChange',
        radioDisable: false
      }
    }
  }
</script>
```

### API

<br>

#### KsRadio

| 参数 | 说明 | 接口类型 | 类型 | 双向（twoWay） | 是否必须 | 可选值 | 默认值 |
|------|-------|----------|---------|---------|---------|-------|--------|
| name | 用来标记当前 `radio` 的名称作用和原生 `radio` 一样 | props | String | `false` | 否 | 无 | '' |
| color | 用来描述 `radio` 的颜色, 一个十六进制的数值 | props | String | `false` | 否 | 无 | #00A5E0 |
| value | 保留 | props | Any | `false` | 否 | 无 | '' |
| checked | 用来描述当前 `radio` 是否选中 | props | Boolean | `true` | 否 | `true`, `false` | `false` |
| defChecked | 用来描述当前 `radio` 默认是否选中 | props  | Boolean | `false` | 否 | `true`, `false` | `false` |
| disable | 用来描述当前 `radio` 是否是禁用状态 | props | Boolean | `false`| `true`, `false` | 无 | `false` |
| vModel | 存储了当前 `radio` 组中选中的值 | props | Any | `true` | 否 | 无 | '' |
| @change | `change` 事件 | event | - | - | 否 | - | - |
| #slot | `radio` label 内容 | slot | - | - | 否 | - | - |

<br>

#### KsBtnRadio

| 参数 | 说明 | 接口类型 | 类型 | 双向（twoWay） | 是否必须 | 可选值 | 默认值 |
|------|-------|----------|---------|---------|---------|-------|--------|
| name | 用来标记当前 `radio` 的名称作用和原生 `radio` 一样 | props | String | `false` | 否 | 无 | '' |
| color | 用来描述 `radio` 的颜色, 一个十六进制的数值 | props | String | `false` | 否 | 无 | #00A5E0 |
| value | 保留 | props | Any | `false` | 否 | 无 | '' |
| checked | 用来描述当前 `radio` 是否选中 | props | Boolean | `true` | 否 | `true`, `false` | `false` |
| defChecked | 用来描述当前 `radio` 默认是否选中 | props  | Boolean | `false` | 否 | `true`, `false` | `false` |
| disable | 用来描述当前 `radio` 是否是禁用状态 | props | Boolean | `false`| `true`, `false` | 无 | `false` |
| vModel | 存储了当前 `radio` 组中选中的值 | props | Any | `true` | 否 | 无 | '' |
| @change | `change` 事件 | event | - | - | 否 | - | - |
| #slot | `radio` label 内容 | slot | - | - | 否 | - | - |

<br>

#### KsRadioGroup

| 参数 | 说明 | 接口类型 | 类型 | 双向（twoWay） | 是否必须 | 可选值 | 默认值 |
|------|-------|----------|---------|---------|---------|-------|--------|
| vModel | 存储了当前 `radio` 组中选中的值 | props | Any | `true` | 否 | 无 | '' |
| @change | `change` 事件 | event | - | - | 否 | - | - |
| #slot | 单选组中的单选 | slot | - | - | 否 | - | - |
