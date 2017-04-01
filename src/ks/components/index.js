/**
 * @description 卡说前端公用库
 * @summary
 *  公用库中包含了一些通用的 `组件` `指令` `过滤器` 等.
 * @author pkeros.
 * @date 2016/11/11.
 */

// 通知中心
import KsNoticeCenter from './KsNoticeCenter'
// 开关组件
import { KsSwitch, KsAbstractSwitch } from './KsSwitch';
// Dialog 对话框组件
import { KsDialog, KsDialogEntity } from './KsDialog';
// Modal 模态框组件
import { KsModal, KsModalEntity, KsModalCenter } from './KsModal';
// ToolTips 组件
import KsToolTip from './KsToolTip';
// 复选组件
import { KsCheckbox, KsCheckboxGroup } from './KsCheckbox';
// 遮罩组件
import { KsMask, KsMaskEntity } from './KsMask';
// 分页组件
import { KsPage, KsPageGroup } from './KsPager';
// 单选组件
import {
  KsRadio,
  KsRadioGroup,
  KsBtnRadio
} from './KsRadio';

// 按钮组件
import {
  KsButton,
  KsNrButton,
  KsGhostButton
} from './KsButton';

// 日期选择组件
import {
  KsDater,
  KsDaterPure,
  KsDatePicker,
  KsDaterRange,
  KsDateRangePicker,
  KsDateMonth
} from './KsDater';

// 下拉选择组件
import {
  KsStore,
  KsStoreClick
} from './KsDropChoose';

// 弹出层选择组件
import {
  KsDialogChoose
} from './KsDialogChoose';

// 楼层选择组件
import {
  KsItem,
  KsItemFloor
} from './KsFloorSelect';

// 项目中弹出层组件
import {
  KsDialogProgram
} from './KsDialogProgram';

// 表格选择组件
import {
  KsAddTableItem
} from './KsAddTable';

// 图片查看组件
import {
  KsImage
} from './KsImage';

const VERSION = '0.0.1';
const KsComponents = {
  VERSION,
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

  KsMask,
  KsMaskEntity,

  KsDialog,
  KsDialogEntity,

  KsModal,
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

  KsDialogChoose,
  KsItem,
  KsItemFloor,
  KsDialogProgram,
  KsImage,
  KsAddTableItem


};

const install = function(Vue) {
  if (install.installed) {
    return
  }

  // register components.
  Object.keys(KsComponents).forEach(k => {
    // console.log(k, KsComponents[k])
    Vue.component(k, KsComponents[k])
  });

  // register prototype methods.
  Object.defineProperties(Vue.prototype, {
    // 在 VueComponent 原型上注册 KsDialog 组件
    $KsDialog: {
      get() { return KsDialog }
    },

    // 在 VueComponent 原型上注册 KsModal 组件
    $KsModal: {
      get () { return KsModal }
    },

    $KsNotice: {
      get: () => KsNoticeCenter
    }
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
