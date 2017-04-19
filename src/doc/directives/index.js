import limitInputNumber from './limitInputNumber'
import limitNumberFixed from './limitNumberFixed'
import clickOutside from './clickOutside'
import KsClickOutside from './KsClickOutside'

const Directives = {
  limitInputNumber,
  limitNumberFixed,
  clickOutside,
  KsClickOutside
}

const install = function(Vue) {
  if (install.installed) { return }

  // register components.
  Object.keys(Directives).forEach(k => {
    Vue.directive(k, Directives[k])
  })

  console.log(Vue)
}

// automation register components.
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}



export default install
export { Directives }
