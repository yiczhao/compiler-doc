/**
 * @description notice center component.
 * @author pkeros
 * @data 2017/3/31
 * @email pkeros@vip.qq.com
 */

import Vue from 'vue'
import NoticeCenter from './container.vue'
import { ObjectUtil } from '../../utils'

let defaults = {
  closeBtn: true,
  title: 'Title',
  content: 'Content...',
  hue: 'success'
};

let constructor = Vue.extend(NoticeCenter);
let KsNoticeCenter, noticeCenter, _uid = 0;

// 实例化通知中心
let initNoticeCenter = function () {
  noticeCenter = new constructor({ el: document.createElement('div') });
  noticeCenter.show = false;

  noticeCenter.$on('empty', KsNoticeCenter.clear)
};

/**
 * @description 通知中心构造函数
 * @param options {Object} 配置项
 * @param closeCb {Function} close 回调
 * @constructor
 */
KsNoticeCenter = function (options, closeCb) {
  if ((typeof closeCb !== 'undefined' && typeof closeCb !== 'function'))
    throw new TypeError('KsNoticeCenter: `closeCb` 参数必须是一个函数!');

  if (!noticeCenter) initNoticeCenter();
  document.body.appendChild(noticeCenter.$el);
  Vue.nextTick(() => noticeCenter.show = true);

  return {
    _uid: _uid++,
    options: ObjectUtil.merge({}, defaults, options),
    closeCb: closeCb ? closeCb : () => {}
  };
};

/**
 * @description 关闭当前信息
 */
KsNoticeCenter.clear = function () {
  noticeCenter.show = false;
  noticeCenter.queue = [];
};

/**
 * @description 投递一个信息向通知中心
 * @param title {String} 标题
 * @param content {String} 内容
 * @param hue {String} 色调
 * @param timeout {Number} 超时时间 单位毫秒 默认 3s
 * @param closeCb {Function} close 回调
 */
KsNoticeCenter.post = function (title, content, hue, timeout, closeCb) {
  let msg = KsNoticeCenter({
    hue: hue ? hue : 'primary',
    title: title,
    content: content,
    timeout: timeout ? timeout : 4500
  }, closeCb);

  noticeCenter.queue.push(msg);
};

export default KsNoticeCenter
export { KsNoticeCenter }
