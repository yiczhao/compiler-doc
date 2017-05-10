/**
 * @author: pkeros.
 * @date: 2016/6/21.
 * @mail: pkeros@vip.qq.com
 * @see: https://www.github.com/pkeros/
 */

export default [
  {
    name: '引导Guide',
    subMenu: [
      {name: '介绍', icon: 'icon', link: 'intro'},
      {name: '目录结构', icon: 'icon', link: 'dir'}
    ]
  },
  {
    name: '基础组件 Base',
    subMenu: [
      {
        name: '基础 Base', icon: 'icon', link: '',
        subMenu: [
          // {name: 'Layout 布局', icon: 'icon', link: 'layout'},
          // {name: 'Color 色彩', icon: 'icon', link: ''},
          {name: 'Icon 图标', icon: 'icon', link: 'icons'},
          {name: 'Button 按钮', icon: 'icon', link: 'button'}
        ]
      },
      {
        name: '表单 Form', icon: 'icon', link: '',
        subMenu: [
          {name: 'Radio 单选框', icon: 'icon', link: 'radio'},
          {name: 'Checkbox 多选框', icon: 'icon', link: 'checkbox'},
          // {name: 'Input 输入框', icon: 'icon', link: ''},
          {name: 'Switch 开关', icon: 'icon', link: 'switch'},
          {name: 'DatePicker 时间选择器', icon: 'icon', link: 'date-picker'},
          // {name: 'Rate 评分', icon: 'icon', link: ''},
          // {name: 'Upload 上传', icon: 'icon', link: ''},
          // {name: 'Form 表单', icon: 'icon', link: ''}
        ]
      },
      {
        name: '数据 Data', icon: 'icon', link: '',
        subMenu: [
          {name: 'Table 表格', icon: 'icon', link: 'multiple-table'},
          // {name: 'Tag 标签', icon: 'icon', link: ''},
          // {name: 'Progress 进度条', icon: 'icon', link: ''},
          // {name: 'Tree 树形控件', icon: 'icon', link: ''},
          {name: 'Tree 树形组件', icon: 'icon', link: 'tree'},
          {name: 'Pagination 分页器', icon: 'icon', link: 'page'},
          {name: 'Search 模糊搜索', icon: 'icon', link: 'search'},
          {name: 'DropChoose 下拉选择', icon: 'icon', link: 'dropchoose'},
          {name: 'DialogChoose 弹出层选择', icon: 'icon', link: 'dialogchoose'},
          {name: 'FloorChoose 楼层选择', icon: 'icon', link: 'floorchoose'},
          {name: '根据不同用户显示不同表格', icon: 'icon', link: 'addtable'}
        ]
      },
      {
        name: '通知 Notice', icon: 'icon', link: '',
        subMenu: [
          {name: 'NoticeCenter 通知中心', icon: 'icon', link: 'notice-center'},
          {name: 'Dialog 对话框', icon: 'icon', link: 'dialog'},
          {name: 'Modal 模态框', icon: 'icon', link: 'modal'},
          // {name: 'Loading 加载', icon: 'icon', link: ''},
          // {name: 'Notification 通知', icon: 'icon', link: ''}
        ]
      },
      {
        name: '导航 Navigation', icon: 'icon', link: '',
        subMenu: [
          // {name: 'Tabs 标签页', icon: 'icon', link: ''},
          // {name: 'Breadcrumb 面包屑', icon: 'icon', link: ''},
          // {name: 'Dropdown 下拉菜单', icon: 'icon', link: ''},
          // {name: 'Steps 步骤条', icon: 'icon', link: ''}
        ]
      },
      {
        name: '验证 Validate', icon: 'icon', link: '',
        subMenu: [
          // {name: 'Validate 验证', icon: 'icon', link: 'remark'},
          // {name: '默认校验规则', icon: 'icon', link: 'rules'}
        ]
      },
      {
        name: '其他 Others', icon: 'icon', link: '',
        subMenu: [
          {name: 'Tooltips 弹出提示', icon: 'icon', link: 'tooltips'},
          {name: 'Image 查看', icon: 'icon', link: 'image'},
          {name: 'ksImgs 查看', icon: 'icon', link: 'ksimg'},
          {name: '多标题表格', icon: 'icon', link: 'multiple-table'},
          {name: '定项表格', icon: 'icon', link: 'setitem-table'},
          // {name: 'Carousel 走马灯', icon: 'icon', link: ''},
          // {name: 'Collapse 折叠面板', icon: 'icon', link: ''}
        ]
      }
    ]
  },
  {
    name: '日志 Log',
    subMenu: [
      {name: '更新日志', icon: 'icon', link: 'log'}
    ]
  }
]
