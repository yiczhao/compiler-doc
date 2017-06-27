//
// 按钮组件单元测试
//

import utils from '../utils'
import components from '@/components/KsButton'

const { KsButton } = components.KsButton_v0;
describe('KsButtonAbstract 组件测试', () => {
  let vm = null;
  beforeEach(() => utils.destroyVM(vm));

  it('nativeType 属性测试', () => {
    vm = utils.createTest(KsButton, {
      nativeType: {type: String, default: 'submit'}
    }, true);
    let el = vm.$el;

    expect(el.querySelector('button').getAttribute('type')).to.be.equal('submit');
  });
  it('mode 属性测试', () => {
    vm = utils.createTest(KsButton, {
      mode: {type: String, default: 'ghost'}
    }, true);
    let el = vm.$el;

    expect(el.querySelector('.KsBtnAbstract').classList.contains('gohst').to.be.true)
  })
});
