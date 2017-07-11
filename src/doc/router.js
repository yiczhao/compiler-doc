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
              goName:'tree/v0.1.0',
              component: (resolve) => {
                require(['./views/data/tree/index.vue'], resolve)
              },
              subRoutes: {
                '/v0.1.0': {
                  name: 'tree/v0.1.0',
                  cnName: 'v0.1.0',
                  goName:'',
                  component: (resolve) => {
                    require(['./views/data/tree/v0.1.0.md'], resolve)
                  }
                }
                
              }
            },

            '/dropchoose': {
              name: 'dropchoose',
              cnName: '下拉选择',
              goName:'dropchoose/v0.1.0',
              component: (resolve) => {
                require(['./views/data/dropchoose/index.vue'], resolve)
              },
              subRoutes: {
                '/v0.1.0': {
                  name: 'dropchoose/v0.1.0',
                  cnName: 'v0.1.0',
                  goName:'',
                  component: (resolve) => {
                    require(['./views/data/dropchoose/v0.1.0.md'], resolve)
                  }
                }
              }
            },

            '/search': {
                name: 'search',
                cnName: '模糊搜索',
                goName: 'search/v1.0.0',
                component: (resolve) => {
                    require(['./views/data/search/index.vue'], resolve)
                },
                subRoutes: {
                    '/v1.0.0': {
                        name: 'search/v1.0.0',
                        cnName: 'v1.0.0',
                        goName: '',
                        component: (resolve) => {
                            require(['./views/data/search/v1.0.0.md'], resolve)
                        }
                    }
                }
            },

            '/dialogchoose': {
              name: 'dialogchoose',
              cnName: '弹出层选择',
              goName:'dialogchoose/v0.1.0',
              component: (resolve) => {
                require(['./views/data/dialogchoose/index.vue'], resolve)
              },
              subRoutes: {
                '/v0.1.0': {
                  name: 'dialogchoose/v0.1.0',
                  cnName: 'v0.1.0',
                  goName:'',
                  component: (resolve) => {
                    require(['./views/data/dialogchoose/v0.1.0.md'], resolve)
                  }
                }
                
              }
            },

            '/floorchoose': {
              name: 'floorchoose',
              cnName: '楼层选择',
              goName:'floorchoose/v0.1.0',
              component: (resolve) => {
                require(['./views/data/floorchoose/index.vue'], resolve)
              },
              subRoutes: {
                '/v0.1.0': {
                  name: 'floorchoose/v0.1.0',
                  cnName: 'v0.1.0',
                  goName:'',
                  component: (resolve) => {
                    require(['./views/data/floorchoose/v0.1.0.md'], resolve)
                  }
                }
                
              }
            },


            /* 基础组件-图片 */
            '/image': {
              name: 'image',
              cnName: '图片',
              component: (resolve) => {
                require(['./views/data/image/index.vue'], resolve)
              },
              subRoutes:{
                '/v1.0.1': {
                  name: 'image/v1.0.1',
                  cnName: 'v1.0.1',
                  component: (resolve) => {
                    require(['./views/data/image/v1.0.1.md'], resolve)
                  }
                },                
              }
            },
           

            '/addtable': {
              name: 'addtable',
              cnName: '表格添加',
              goName:'addtable/v0.1.0',
              component: (resolve) => {
                require(['./views/data/addtable/index.vue'], resolve)
              },
              subRoutes:{
                '/v0.1.0': {
                  name: 'addtable/v0.1.0',
                  cnName: 'v0.1.0',
                  component: (resolve) => {
                    require(['./views/data/addtable/v0.1.0.md'], resolve)
                  }
                },                
              }
            },

            /* 多标题表格 */
            '/table': {
              name: 'table',
              cnName: '表格',
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
                }
              }
            }

            


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
              goName:'dialog/v1.0.0',
              component: (resolve) => {
                require(['./views/notice/dialog/index.vue'], resolve)
              },
              subRoutes: {
                '/v1.0.0': {
                  name: 'dialog/v1.0.0',
                  cnName: 'v1.0.0',
                  goName:'',
                  component: (resolve) => {
                    require(['./views/notice/dialog/v1.0.0.md'], resolve)
                  }
                }
              }
            },

            /* 通知组件-模态框 */
            '/modal': {
              name: 'modal',
              cnName: '模态框',
              goName:'modal/v1.0.0',
              component: (resolve) => {
                require(['./views/notice/modal/index.vue'], resolve)
              },
              subRoutes: {
                '/v1.0.0': {
                  name: 'modal/v1.0.0',
                  cnName: 'v1.0.0',
                  goName:'',
                  component: (resolve) => {
                    require(['./views/notice/modal/v1.0.0.md'], resolve)
                  }
                }
              }
            }

          }
        },

        /* Navigation 导航*/
        '/navigation': {
          name: 'navigation',
          cnName: '导航',
          component: (resolve) => {
            require(['./views/navigation/index.vue'], resolve)
          },
          subRoutes: {
            /* tab切换 */
            '/tabs': {
              name: 'tabs',
              cnName: 'tab切换',
              goName:'tabs/v0.1.0',
              component: (resolve) => {
                require(['./views/navigation/tabs/index.vue'], resolve)
              },
              subRoutes: {
                '/v0.1.0': {
                  name: 'tabs/v0.1.0',
                  cnName: 'v0.1.0',
                  goName:'',
                  component: (resolve) => {
                    require(['./views/navigation/tabs/v0.1.0.md'], resolve)
                  }
                }
              }
            }
          }
        },
        /* validate 验证器*/
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
            '/tips': {
              name: 'tips',
              cnName: '弹出提示',
              goName:'tips/v1.0.0',
              component: (resolve) => {
                require(['./views/other/tips/index.vue'], resolve)
              },
              subRoutes: {
                '/v0.1.0':{
                  name: 'tips/v0.1.0',
                  cnName: 'v0.1.0',
                  goName:'',
                  component: (resolve) => {
                    require(['./views/other/tips/v0.1.0.md'], resolve)
                  }
                },
                '/v1.0.0':{
                  name: 'tips/v1.0.0',
                  cnName: 'v1.0.0',
                  goName:'',
                  component: (resolve) => {
                    require(['./views/other/tips/v1.0.0.md'], resolve)
                  }
                },
              }
            }
          }
        },
        '/directives':{
          name: 'directives',
          cnName: '指令',
          component: (resolve) => {
            require(['./views/directives/index.vue'], resolve)
          },
          subRoutes: {
            '/limit-number-fixed': {
              name: 'limit-number-fixed',
              cnName: '限制字符输入',
              component: (resolve) => {
                require(['./views/directives/limit-number-fixed.md'], resolve)
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
