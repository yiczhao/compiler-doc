/**
 * @description 卡说前端公用库
 * @summary
 *  公用库中包含了一些通用的 `组件` `指令` `过滤器` 等.
 * @author pkeros.
 * @date 2016/11/11.
 */

import KsPopup from './KsPopup'
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
import KsStoreClick from './KsDropChoose'
import KsSearch from './KsSearch'
import KsDialogChoose  from './KsDialogChoose'
import KsItemFloor from './KsFloorSelect'
import KsDialogProgram from './KsDialogProgram'
import KsAddTableItem from './KsAddTable'
import KsImage from './KsImage'
import KsIcon from './KsIcon'
import KsTips from './KsTips'
import KsTable from './KsTable'
import KsTabs from './KsTabs'
import KsTree from './KsTree'



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
  KsPopup,
  KsDater,
  KsStoreClick,
  KsSearch,
  KsDialogChoose,
  KsItemFloor,
  KsDialogProgram,
  KsImage,
  KsAddTableItem,
  KsTips,
  KsTable,
  KsTabs,
  KsTree


};

// 插件
const Plugins = {

  KsNotice:KsNoticeCenter,
  KsDialog,
  KsMask,
  KsModal

};


export { Components, Plugins }
