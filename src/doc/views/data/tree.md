## KsTree
> **Author:张大柱**
> 支持选择，隐藏、展开
---

<ks-tree v-bind:data="datalist"></ks-tree>
<br><br>
<ks-tree v-bind:data="company" 
  name-key="channelName" 
  children-key="nodes"
  checked-key="status"></ks-tree>



### API

| 参数 | 说明 | 接口类型 | 类型 | 可选值 | 默认值 |
|------|-------|----------|---------|-------|--------|
| data | 数据 | props | Array | `必填` | 无 |
| name-key | 展示的字段 | props  | String | `非必填` | `name` |
| children-key | 子元素列表字段 | props  | String | `非必填` | `children` |
| checked-key | 当前节点状态的字段（是否选中） | props  | String | `非必填` | `checked` |




```javascript
<script>
  import { company } from 'Data/tree-data'
  
  
  export default{
    kscomponents:['KsTree_v0'],
    data () {
      return {
        company:[company],
        datalist:[{
              checked:false,
              name:'A',
              children:[{
                      checked:false,
                      name:'A-aaa',
                      children:[{
                          checked:false,
                          name:'A-aaa-ccc',
                          children:[{
                              checked:false,
                              name:'A-aaa-ccc',
                              children:[{
                                  checked:false,
                                  name:'A-aaa-ccc'
                              }]
                          },{
                              checked:false,
                              name:'A-aaa-ccc',
                              children:[{
                                  checked:false,
                                  name:'A-aaa-ccc'
                              }]
                          }]
                      }]
                  },
                  {
                      checked:false,
                      name:'A-bbb',
                      children:[{
                          checked:false,
                          name:'A-bbb-ccc'
                      }]
                  }]
          }]
      }
    },
    
    methods: {
    }
  }
</script>
```


<script>
  import { company } from 'Data/tree-data'
  
  
  export default{
    kscomponents:['KsTree_v0'],
    data () {
      return {
        company:[company],
        datalist:[{
              checked:false,
              name:'A',
              children:[{
                      checked:false,
                      name:'A-aaa',
                      children:[{
                          checked:false,
                          name:'A-aaa-ccc',
                          children:[{
                              checked:false,
                              name:'A-aaa-ccc',
                              children:[{
                                  checked:false,
                                  name:'A-aaa-ccc'
                              }]
                          },{
                              checked:false,
                              name:'A-aaa-ccc',
                              children:[{
                                  checked:false,
                                  name:'A-aaa-ccc'
                              }]
                          }]
                      }]
                  },
                  {
                      checked:false,
                      name:'A-bbb',
                      children:[{
                          checked:false,
                          name:'A-bbb-ccc'
                      }]
                  }]
          }]
      }
    },
    
    methods: {
    }
  }
</script>

