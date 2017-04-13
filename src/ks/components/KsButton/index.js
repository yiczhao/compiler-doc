/**
 * @description modal 组件
 * @author: pkeros.
 * @date: 2016/10/18.
 */

import KsButton from './src/Button.vue'
import KsNrButton from './src/NrButton.vue'
import KsGhostButton from './src/GhostButton.vue'

KsButton.normal = KsNrButton;
KsButton.ghost = KsGhostButton;
export default KsButton
