/**
 * @description 卡说前端公用库
 * @summary
 *  公用库中包含了一些通用的 `组件` `指令` `过滤器` 等.
 * @author pkeros.
 * @date 2016/11/11.
 */

import { KsToolTips } from './KsPopup'
import KsNoticeCenter from './KsNoticeCenter'
import KsSwitch from './KsSwitch'
import { KsDialog, KsDialogEntity } from './KsDialog'
import { KsModal, KsModalEntity, KsModalCenter } from './KsModal'
import KsCheckbox from './KsCheckbox'
import { KsMask, KsMaskEntity } from './KsMask'
import KsRadio from './KsRadio'
import KsButton from './KsButton'
import KsPage from './KsPager'
import KsDater from './KsDater'
import KsStore from './KsDropChoose'
import KsSearch from './KsSearch'
import KsDialogChoose from './KsDialogChoose'
import KsItem from './KsFloorSelect'
import KsDialogProgram from './KsDialogProgram'
import KsAddTableItem from './KsAddTable'
import KsImage from './KsImage'
import KsIcon from './KsIcon'
import { KsAbstract,KsTips } from './KsTip'
import KsTable from './KsTable'


// 组件
const Components = {

  KsMaskEntity,
  KsDialogEntity,
  KsModalEntity,
  KsModalCenter,
  KsPage,
  KsIcon,
  KsSwitch,
  KsCheckbox,
  KsRadio,
  KsButton,
  KsToolTips,
  KsDater,
  KsStore,
  KsSearch,
  KsDialogChoose,
  KsItem,
  KsDialogProgram,
  KsImage,
  KsAddTableItem,
  KsAbstract,
  KsTips,
  KsTable

};

// 插件
const Plugins = {

  KsNotice:KsNoticeCenter,
  KsDialog,
  KsMask,
  KsModal

};

// const install = function(Vue) {
//   if (install.installed) return;

//   Object.keys(Components).reduce((arr, k) => {
//     let temp;

//     if(Components[k].template) {
//       temp = { name: k, val: Components[k] };
//     } else {
//       temp = Object.keys(Components[k]).map((key) => {
//         return { name: key, val: Components[k][key] }
//       });
//     }

//     return arr.concat(temp);
//   }, []).forEach((item) => {
//     Vue.component(item.name, item.val)
//   });

//   // install plugins.
//   Object.keys(Plugins).forEach(k => {
//     if (k === 'VERSION') return;
//     Plugins[k].install(Vue);
//   });

// };

// // automation register components.
// if (typeof window !== 'undefined' && window.Vue) {
//   install(window.Vue);
// }
// export default install

export { Components, Plugins }
