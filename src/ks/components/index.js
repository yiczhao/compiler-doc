/**
 * @description 卡说前端公用库
 * @summary
 *  公用库中包含了一些通用的 `组件` `指令` `过滤器` 等.
 * @author pkeros.
 * @date 2016/11/11.
 */

import KsToolTip from './KsToolTip';
import KsNoticeCenter from './KsNoticeCenter'
import { KsSwitch, KsAbstractSwitch } from './KsSwitch';
import { KsDialog, KsDialogEntity } from './KsDialog';
import { KsModal, KsModalEntity, KsModalCenter } from './KsModal';
import { KsCheckbox, KsCheckboxGroup } from './KsCheckbox';
import { KsMask, KsMaskEntity } from './KsMask';
import { KsPage, KsPageGroup } from './KsPager';
import { KsRadio, KsRadioGroup, KsBtnRadio } from './KsRadio';
import { KsButton, KsNrButton, KsGhostButton } from './KsButton';
import { KsDater, KsDaterPure, KsDatePicker, KsDaterRange, KsDateRangePicker, KsDateMonth} from './KsDater';
import { KsStore, KsStoreClick } from './KsDropChoose';
import { KsSearch } from './KsSearch';
import { KsDialogChoose,KsList } from './KsDialogChoose';
import { KsItem, KsItemFloor } from './KsFloorSelect';
import { KsDialogProgram } from './KsDialogProgram';
import { KsAddTableItem } from './KsAddTable';
import { KsImage } from './KsImage';

const VERSION = '0.0.1';
const KsComponents = {
  VERSION,
  KsMask,
  KsModal,
  KsDialog,
  KsPage,
  KsPageGroup,
  KsSwitch,
  KsAbstractSwitch,
  KsCheckbox,
  KsCheckboxGroup,
  KsRadio,
  KsBtnRadio,
  KsRadioGroup,
  KsButton,
  KsNrButton,
  KsGhostButton,
  KsMaskEntity,
  KsDialogEntity,
  KsModalEntity,
  KsModalCenter,
  KsToolTip,
  KsDater,
  KsDaterPure,
  KsDatePicker,
  KsDaterRange,
  KsDateRangePicker,
  KsDateMonth,
  KsStore,
  KsStoreClick,
  KsSearch,
  KsDialogChoose,
  KsList,
  KsItem,
  KsItemFloor,
  KsDialogProgram,
  KsImage,
  KsAddTableItem
};

const VueInstances = {
  KsNoticeCenter
}

const install = function(Vue) {
  if (install.installed) {
    return
  }

  // register components.
  Object.keys(KsComponents).forEach(k => {
    // console.log(k, KsComponents[k])
    Vue.component(k, KsComponents[k])
  });


  // install plugins.
  Object.keys(VueInstances).forEach(k => {
    VueInstances[k].install(Vue);
  });
  
};

// automation register components.
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install
export {
  KsComponents
}
