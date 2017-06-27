/**
 * @description application router file.
 * @author pkeros
 * @data 16/6/1
 * @email pkeros@vip.qq.com
 */

export default (router) => {

  // 路由映射
  router.map({

    /* 主页 */
    '/': {
      name: 'index',
      cnName: '主页',
      component: resolve => {
        require(['./views/index.vue'], res => {
          resolve(res)
        })
      },

      subRoutes: {

        /* 欢迎页面 */
        '/': {
          name: 'welcome',
          cnName: '欢迎页面',
          component: (resolve) => {
            require(['./views/other/welcome.vue'], resolve)
          }
        },
        '/home': {
          name: 'welcome',
          cnName: '欢迎页面',
          component: (resolve) => {
            require(['./views/other/welcome.vue'], resolve)
          }
        },

        /* 引导 */
        '/guide': {
          name: 'guide',
          cnName: '介绍',
          component: (resolve) => {
            require(['./views/guide/index.vue'], resolve)
          },
          subRoutes: {
            '/intro': {
              name: 'intro',
              cnName: '介绍',
              component: (resolve) => {
                require(['./views/guide/intro.md'], resolve)
              }
            },
            '/dir': {
              name: 'dir',
              cnName: '目录结构',
              component: (resolve) => {
                require(['./views/guide/dir.md'], resolve)
              }
            }
          }
        },

        /* 基础组件 */
        '/base': {
          name: 'base',
          cnName: '基础组件',
          component: (resolve) => {
            require(['./views/base/index.vue'], resolve)
          },

          subRoutes: {

            /* 基础组件-图标 */
            '/icons': {
              name: 'icons',
              cnName: '图标',
              goName:'icons/v0.1.0',
              component: (resolve) => {
                require(['./views/base/icons/index.vue'], resolve)
              },
              subRoutes:{
                'v0.1.0':{
                  name: 'icons/v0.1.0',
                  cnName: '图标',
                  goName:'',
                  component: (resolve) => {
                    require(['./views/base/icons/v0.1.0.md'], resolve)
                  }
                },
                
              }
            },
            /* 基础组件-图标 */
            'icons/list': {
              name: 'v0.1.0',
              cnName: '卡说图标库',
              component: (resolve) => {
                require(['./views/base/icons/list.v0.1.0.vue'], resolve)
              }
            },

            

            /* 基础组件-布局 */
            '/layout': {
              name: 'layout',
              cnName: '布局',
              component: (resolve) => {
                require(['./views/base/layout.md'], resolve)
              }
            },

            /* 基础组件-按钮 */
            '/button': {
              name: 'button',
              cnName: '按钮',
              goName:'button/v0.1.0',
              component: (resolve) => {
                require(['./views/base/button/index.vue'], resolve)
              },
              subRoutes:{
                'v0.1.0':{
                  name: 'button/v0.1.0',
                  cnName: 'v0.1.0',
                  goName:'',
                  component: (resolve) => {
                    require(['./views/base/button/v0.1.0.md'], resolve)
                  }
                },
              }
            }
          }
        },

        /* form */
        '/form': {
          name: 'form',
          cnName: '表单',
          component: (resolve) => {
            require(['./views/form/index.vue'], resolve)
          },

          subRoutes: {

            /* 基础组件-布局 */
            '/date-picker': {
              name: 'date-picker',
              cnName: '时间选择器',
              goName:'date-picker/v1.0.0',
              component: (resolve) => {
                require(['./views/form/datepicker/index.vue'], resolve)
              },
              subRoutes: {
                '/v1.0.0': {
                  name: 'date-picker/v1.0.0',
                  cnName: 'v1.0.0',
                  goName:'',
                  component: (resolve) => {
                    require(['./views/form/datepicker/v1.0.0.md'], resolve)
                  }
                },
                '/v0.1.0': {
                  name: 'date-picker/v0.1.0',
                  cnName: 'v0.1.0',
                  goName:'',
                  component: (resolve) => {
                    require(['./views/form/datepicker/v0.1.0.md'], resolve)
                  }
                }
              }

            },

            /* 基础组件-单选框 */
            '/radio': {
              name: 'radio',
              cnName: '单选框',
              goName:'radio/v0.1.0',
              component: (resolve) => {
                require(['./views/form/radio/index.vue'], resolve)
              },
              subRoutes: {
                '/v0.1.0': {
                  name: 'radio/v0.1.0',
                  cnName: 'v0.1.0',
                  goName:'',
                  component: (resolve) => {
                    require(['./views/form/radio/v0.1.0.md'], resolve)
                  }
                }
              }
            },

            /* 基础组件-复选框 */
            '/checkbox': {
              name: 'checkbox',
              cnName: '复选框',
              goName:'checkbox/v0.1.0',
              component: (resolve) => {
                require(['./views/form/checkbox/index.vue'], resolve)
              },
              subRoutes: {
                '/v0.1.0': {
                  name: 'checkbox/v0.1.0',
                  cnName: 'v0.1.0',
                  goName:'',
                  component: (resolve) => {
                    require(['./views/form/checkbox/v0.1.0.md'], resolve)
                  }
                }
              }
            },

            /* 基础组件-IOS 风格开关 */
            '/switch': {
              name: 'switch',
              cnName: 'IOS 风格开关',
              goName:'switch/v0.1.0',
              component: (resolve) => {
                require(['./views/form/switch/index.vue'], resolve)
              },
              subRoutes: {
                '/v0.1.0': {
                  name: 'switch/v0.1.0',
                  cnName: 'v0.1.0',
                  goName:'',
                  component: (resolve) => {
                    require(['./views/form/switch/v0.1.0.md'], resolve)
                  }
                }
              }
            },
          }
        },

        /* data */
        '/data': {
          name: 'data',
          cnName: '数据展示',
          component: (resolve) => {
            require(['./views/data/index.vue'], resolve)
          },

          subRoutes: {

            /* 基础组件-分页器 */
            '/pager': {
              name: 'pager',
              cnName: '分页器',
              goName:'pager/v1.0.0',
              component: (resolve) => {
                require(['./views/data/pager/index.vue'], resolve)
              },
              subRoutes: {
                '/v1.0.0': {
                  name: 'pager/v1.0.0',
                  cnName: 'v1.0.0',
                  goName:'',
                  component: (resolve) => {
                    require(['./views/data/pager/v1.0.0.md'], resolve)
                  }
                },
                '/v0.1.0': {
                  name: 'pager/v0.1.0',
                  cnName: 'v0.1.0',
                  goName:'',
                  component: (resolve) => {
                    require(['./views/data/pager/v0.1.0.md'], resolve)
                  }
                }
                
              }
            },

            /* 数据展示-树形组件 */
            '/tree': {
              name: 'tree',
              cnName: '树形组件',
              component: (resolve) => {
                require(['./views/data/tree.md'], resolve)
              }
            },

            '/dropchoose': {
              name: 'dropchoose',
              cnName: '下拉选择',
              component: (resolve) => {
                require(['./views/data/dropchoose.md'], resolve)
              }
            },

            '/search': {
                name: 'search',
                cnName: '模糊搜索',
                component: (resolve) => {
                    require(['./views/data/search.md'], resolve)
                }
            },

            '/dialogchoose': {
              name: 'dialogchoose',
              cnName: '弹出层选择',
              component: (resolve) => {
                require(['./views/data/dialogchoose.md'], resolve)
              }
            },

            '/floorchoose': {
              name: 'floorchoose',
              cnName: '楼层选择',
              component: (resolve) => {
                require(['./views/data/floorchoose.md'], resolve)
              }
            },


            /* 基础组件-图片 */
            '/image': {
              name: 'image',
              cnName: '图片',
              component: (resolve) => {
                require(['./views/data/image.md'], resolve)
              }
            },
            '/ksimg': {
              name: 'ksimg',
              cnName: '图片',
              component: (resolve) => {
                require(['./views/data/ksimg.md'], resolve)
              }
            },            

            '/addtable': {
              name: 'addtable',
              cnName: '表格添加',
              component: (resolve) => {
                require(['./views/data/addtable.md'], resolve)

                }
            },

            /* 多标题表格 */
            '/table': {
              name: 'table',
              cnName: '图片',
              goName:'table/v0.1.0',
              component: (resolve) => {
                require(['./views/data/table/index.vue'], resolve)
              },
              subRoutes: {
                '/v0.1.0': {
                  name: 'table/v0.1.0',
                  cnName: 'v0.1.0',
                  goName:'',
                  component: (resolve) => {
                    require(['./views/data/table/v0.1.0.md'], resolve)
                  }
                },
                /* 定项表格 */
                '/setitem': {
                  name: 'table/setitem',
                  cnName: '定项表格',
                  component: (resolve) => {
                    require(['./views/data/table/setitem-table.md'], resolve)

                  }
                },

                
              }
            },

            


          }
        },

        /* 通知组件 */
        '/notice': {
          name: 'notice',
          cnName: '通知组件',
          component: (resolve) => {
            require(['./views/notice/index.vue'], resolve)
          },

          subRoutes: {

            /* 通知组件-通知中心 */
            '/notice-center': {
              name: 'notice-center',
              cnName: '对话框',
              goName:'notice/v0.1.0',
              component: (resolve) => {
                require(['./views/notice/notice-center/index.vue'], resolve)
              },
              subRoutes: {
                '/v0.1.0': {
                  name: 'notice/v0.1.0',
                  cnName: 'v0.1.0',
                  goName:'',
                  component: (resolve) => {
                    require(['./views/notice/notice-center/v0.1.0.md'], resolve)
                  }
                }
                
              }
            },

            /* 通知组件-对话框 */
            '/dialog': {
              name: 'dialog',
              cnName: '对话框',
              component: (resolve) => {
                require(['./views/notice/dialog.md'], resolve)
              }
            },

            /* 通知组件-模态框 */
            '/modal': {
              name: 'modal',
              cnName: '模态框',
              component: (resolve) => {
                require(['./views/notice/modal.md'], resolve)
              }
            }
          }
        },

        /* validate */
        '/validate': {
          name: 'validate',
          cnName: '验证',
          component: (resolve) => {
            require(['./views/validate/index.vue'], resolve)
          },

          subRoutes: {
            /* 说明 */
            '/remark': {
              name: 'remark',
              cnName: '说明',
              component: (resolve) => {
                require(['./views/validate/validate.md'], resolve)
              }
            },
            /* 说明 */
            '/rules': {
              name: 'rules',
              cnName: '默认校验规则',
              component: (resolve) => {
                require(['./views/validate/rules.md'], resolve)
              }
            }
          }
        },

        /* other */
        '/other': {
          name: 'other',
          cnName: '其他',
          component: (resolve) => {
            require(['./views/other/index.vue'], resolve)
          },
          subRoutes: {
            /* 更新日志 */
            '/tooltips': {
              name: 'tooltips',
              cnName: '弹出提示',
              component: (resolve) => {
                require(['./views/other/tooltips.md'], resolve)
              }
            }
          }
        },

        /* log */
        '/log': {
          name: 'log',
          cnName: '更新日志',
          component: (resolve) => {
            require(['../../CHANGELOG.md'], resolve)
          }
        }

      }
    }
  })

  

  router.beforeEach(transition =>{
    if(transition.to.goName) router.go({ name: transition.to.goName})
    transition.next()
  })

}
