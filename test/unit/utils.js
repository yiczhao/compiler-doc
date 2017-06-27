/**
 * @description 测试工具函数.
 * @author pkeros
 * @data 2017/6/27
 * @email pkeros@vip.qq.com
 */

import Vue from 'vue'

Vue.config.debug = true;

let id = 0;
const createElm = function() {
  const elm = document.createElement('div');

  elm.id = 'app' + ++id;
  document.body.appendChild(elm);

  return elm;
};

/**
 * 回收 vm
 * @param  {Object} vm
 */
function destroyVM (vm) {
  if (!vm) return;

  vm.$el &&
  vm.$el.parentNode &&
  vm.$el.parentNode.removeChild(vm.$el);
}

/**
 * 创建一个测试组件实例
 * @link http://vuejs.org/guide/unit-testing.html#Writing-Testable-Components
 * @param  {Object}  Compo          - 组件对象
 * @param  {Object}  propsData      - props 数据
 * @param  {Boolean=false} mounted  - 是否添加到 DOM 上
 * @return {Object} vm
 */
function createTest (Compo, propsData = {}, mounted = false) {
  if (propsData === true || propsData === false) {
    mounted = propsData;
    propsData = {};
  }
  const elm = createElm();
  const Ctor = Vue.extend(Compo);

  return new Ctor({
    el: mounted === false ? null : elm,
    props: propsData
  });
}

export default {
  destroyVM,
  createTest
}
