/**
 * @description 卡说前端公用库
 * @summary
 *  公用库中包含了一些通用的 `组件` `指令` `过滤器` 等.
 * @author pkeros.
 * @date 2016/11/11.
 */

import KsPopup from './KsPopup';
import KsNoticeCenter from './KsNoticeCenter'
import KsSwitch from './KsSwitch';
import KsDialog from './KsDialog';
import KsModal from './KsModal';
import KsCheckbox from './KsCheckbox';
import KsMask from './KsMask';
import KsRadio from './KsRadio';
import KsButton from './KsButton';
import KsPage from './KsPager';
import KsDater from './KsDater';
import KsStore from './KsDropChoose';
import KsSearch from './KsSearch';
import KsDialogChoose from './KsDialogChoose';
import KsItem from './KsFloorSelect';
import KsDialogProgram from './KsDialogProgram';
import KsAddTableItem from './KsAddTable';
import KsImage from './KsImage';
import KsIcon from './KsIcon'

// 版本
const VERSION = '1.0.0';

// 组件
const Components = {
  VERSION,
  KsMask,
  KsPage,
  KsIcon,
  KsPageGroup: KsPage.group,
  KsSwitch,
  KsAbstractSwitch: KsSwitch.abstract,
  KsCheckbox,
  KsCheckboxGroup: KsCheckbox.group,
  KsRadio,
  KsBtnRadio: KsRadio.btnRadio,
  KsRadioGroup: KsRadio.group,
  KsButton,
  KsNrButton: KsButton.normal,
  KsGhostButton: KsButton.ghost,
  KsMaskEntity: KsMask.entity,
  KsModalEntity: KsModal.entity,
  KsModalCenter: KsModal.center,
  KsDialogEntity: KsDialog.entity,
  KsToolTip: KsPopup.tips,
  KsDater,
  KsDaterPure: KsDater.pure,
  KsDatePicker: KsDater.picker,
  KsDaterRange: KsDater.range,
  KsDateRangePicker: KsDater.rangePicker,
  KsDateMonth: KsDater.month,
  KsStore,
  KsStoreClick: KsStore.click,
  KsSearch,
  KsDialogChoose,
  KsItem,
  KsItemFloor: KsItem.floor,
  KsDialogProgram,
  KsImage,
  KsAddTableItem
};

// 插件
const Plugins = {
  VERSION,
  KsNoticeCenter
};

const install = function(Vue) {
  if (install.installed) return;

  // register components.
  Object.keys(Components).forEach(k => {
    if (k === 'VERSION') return;

    Vue.component(k, Components[k])
  });


  // install plugins.
  Object.keys(Plugins).forEach(k => {
    if (k === 'VERSION') return;

    Plugins[k].install(Vue);
  });
};

// automation register components.
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install
export { Components, Plugins }
