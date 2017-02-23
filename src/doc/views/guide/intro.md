# 简介

> 文档列出了KS前端常用`公共组件`
> 项目中内置的git`子模块`在min目录中，`npm run components`命令导出压缩的组件模块，供后台直出（前端非编译开发）模式使用

-------------

## 组件使用（全局注册）

```javascript
import { myModule } from './modulePath';

Vue.component('myModule', myModule);
```

## 组件使用（局部注册）
```javascript
import { myModule } from './modulePath';

export default {
    ...
    components:{
        myModule
    }    
    ...
}
```