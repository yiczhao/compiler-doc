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
function createTest (Compo, propsData = {}, mounted = true) {
  if (propsData === true || propsData === false) {
    mounted = propsData;
    propsData = {};
  }
  const Ctor = Vue.extend(Compo);

  let _propsData = {};
  Object.keys(propsData).forEach(k => {
    _propsData[k] = {default: propsData[k]};
  });
  return new Ctor({
    el: mounted === false ? null : createElm(),
    props: _propsData
  });
}

/**
 * 创建一个 Vue 的实例对象
 * @param  {Object|String}  Compo   组件配置，可直接传 template
 * @param  {Boolean=false} mounted 是否添加到 DOM 上
 * @return {Object} vm
 */
function createVue (Compo, mounted = true) {
  if (Object.prototype.toString.call(Compo) === '[object String]') {
    Compo = {
      el: mounted === false ? null : createElm(),
      template: Compo
    };
  }
  return new Vue(Compo);
}

/**
 * 触发一个事件
 * mouseenter, mouseleave, mouseover, keyup, change, click 等
 * @param  {Element} elm
 * @param  {String} name
 * @param  {*} opts
 */
function triggerEvent (elm, name, ...opts) {
  let eventName;

  if (/^mouse|click/.test(name)) {
    eventName = 'MouseEvents';
  } else if (/^key/.test(name)) {
    eventName = 'KeyboardEvent';
  } else {
    eventName = 'HTMLEvents';
  }
  const evt = document.createEvent(eventName);

  evt.initEvent(name, ...opts);
  elm.dispatchEvent
    ? elm.dispatchEvent(evt)
    : elm.fireEvent('on' + name, evt);

  return elm;
}

export default {
  destroyVM,
  createTest,
  createVue,
  triggerEvent
}
