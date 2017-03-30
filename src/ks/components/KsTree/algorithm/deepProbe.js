/**
 * @description 探测树的深度.
 * @author pkeros
 * @data 2017/3/30
 * @email pkeros@vip.qq.com
 */

let deepMax = 0;
let _count = 0;

export default function deepProbe (tree, childrenField, deep = 0) {
  tree['_PDeep'] = deep++;
  tree['_PUid'] = _count++;
  []['concat'](tree[childrenField])['forEach'](node => deepProbe(node, childrenField, deep));
  deepMax = deepMax < deep ? deep : deepMax;
}
