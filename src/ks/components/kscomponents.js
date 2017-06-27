import {Components, Plugins } from './index.js'





// console.log(componentFlags)

export default function install() {
  // console.log()
  // return
  var componentFlags = Vue.util.mergeOptions(flatObj(Components),flatObj(Plugins))
  var _init = Vue.prototype._init
  Vue.prototype._init = function(options = {}) {

    options.init = options.init ? [kscomponentInit].concat(options.init) : kscomponentInit

    _init.call(this, options)
    // console.log(options.init)
  }

  function kscomponentInit() {
    // console.log('kscomponentInit ===')
    var kscomponents = this.$options.kscomponents,
      components = []

    if (kscomponents) {

      components = kscomponents.forEach((key) => {
        var component = componentFlags[key]
        if (component) {
          inject.call(this,component,key)
          return
        }
        console.warn(`未发现组件：${key}`)
      })



    }

    function inject(component,key){
      // console.log(component,key)
      key = key.split('_')[0]
      if(component.template){
        console.log(key)
        this.$options.components[key] = Vue.extend(component)
      }else if(component.install){
        this['$'+key] = component.install(Vue)
        // console.log(this['$'+key],'$'+key)
      }else{
        Object.keys(component).forEach((k)=>{
          inject.call(this,component[k],k)
        })
      }
    }
  }

}


function realComponent(data,k,version,type){
  var temp,
    version = version || '',
    type = type || ''

  if (data[k].template || data[k].install) {
    temp = {name: k, val: data[k] ,version:version,type:type}
  } else {
    type = k.split('_')[0] || '',
      version = k.split('_')[1] || ''

    temp = Object.keys(data[k]).reduce((arr,key) => {
      return arr.concat(realComponent(data[k],key,version,type))
    },[])

  }
  return temp
}

function flatObj(foldData){

  var content = {}
  Object.keys(foldData).reduce(function(arr, k) {
    return arr.concat(realComponent(foldData,k))
  }, []).forEach(function(item) {
    // console.log(item.type,item.version)
    if(item.version){
      content[item.type+'_'+item.version] = content[item.type+'_'+item.version] || {}
      content[item.type+'_'+item.version][item.name] = item.val
    }else{
      content[item.name] = item.val
    }

  })

  return content
}
