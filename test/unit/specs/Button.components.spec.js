//
// 按钮组件单元测试
//

import utils from '../utils'
import components from '@/components/KsButton'

const { KsButtonAbstract, KsButton } = components.KsButton_v0;
describe('KsButtonAbstract 组件测试', () => {
  let vm = null;
  beforeEach(() => utils.destroyVM(vm));

  it('mode 属性测试', () => {
    vm = utils.createTest(KsButtonAbstract, {
      mode: 'ghost'
    });
    let el = vm.$el;

    //
    // 1. 测试组件是否正确应用了 ghost 样式
    //
    expect(el.querySelector('style').getAttribute('data-type')).to.be.equal('ghost');
  });
  
  it('disabled 属性测试', () => {
    vm = utils.createTest(KsButtonAbstract, {
      disabled: true
    });
    let el = vm.$el;

    //
    // 1. 测试组件是否引用了禁用样式
    //
    expect(el.querySelector('.KsBtnAbstract').classList.contains('KsBtnAbstract--disabled')).to.be.true;
  });

  it('truth 属性测试', () => {
    vm = utils.createTest(KsButtonAbstract, {
      truth: false
    });
    let el = vm.$el;

    //
    // 1. 测试组件的实体元素是否是 A 标签
    //
    expect(el.querySelector('.KsBtnAbstract').nodeName).to.be.equal('A');
  });

  context('width, height, fontSize 样式属性测试', () => {
    let testProperty = {
      width: '100px',
      height: '100px',
      fontSize: '100px'
    };
    let testItem2CssPropertyName = {
      width: 'width',
      height: 'height',
      fontSize: 'font-size'
    };

    Object.keys(testProperty).forEach(k => {
      specify(`${k} 属性测试`, () => {
        vm = utils.createTest(KsButtonAbstract, testProperty);
        let el = vm.$el;
        let targetEl = el.querySelector('.KsBtnAbstract');
        let computedStyle = getComputedStyle(targetEl, null);

        //
        // 1. 测试各个属性是否正确引用到组件上
        //
        expect(computedStyle.getPropertyValue(testItem2CssPropertyName[k])).to.be.equal(testProperty[k]);
      });
    });
  });

  context('colorNormal colorHover colorActive 样式属性测试', () => {
    let testProperty = {
      colorNormal: '#AAA',
      colorHover: '#BBB',
      colorActive: '#CCC'
    };

    //
    // TODO: 暂时无法实现 :hover :active 伪类的样式是否被正确应用
    //
    Object.keys(testProperty).forEach(k => specify(`${k} 属性测试`));
  });
});