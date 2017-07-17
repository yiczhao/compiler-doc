//
// 按钮组件单元测试
//

import utils from '../utils'
import components from '@/components/KsButton'

const { KsButtonAbstract, KsButton } = components.KsButton_v0;
describe('KsButtonAbstract 组件测试', () => {
  let vm = null;
  beforeEach(() => utils.destroyVM(vm));

  it('测试 KsButtonAbstract 组件是否能被正确创建', () => {
    vm = utils.createTest(KsButtonAbstract);
    let el = vm.$el;

    expect(el.querySelector('.KsBtnAbstract')).to.be.exist;
  });

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

  it('click 事件响应测试', done => {
    let result = false;
    vm = utils.createTest({
      template: `
        <div class="container">
          <ks-button-abstract @click="handleClick"></ks-button-abstract>
        </div>
      `,
      methods: {
        handleClick() { result = true },
      },
      components: { KsButtonAbstract }
    });
    vm.$el.firstElementChild.click();

    setTimeout(() => {
      expect(result).to.be.true;
      done();
    }, 0);
  });
});

describe('KsButton 组件测试', () => {
  let vm = null;
  beforeEach(() => utils.destroyVM(vm));

  it('测试 KsButton 组件是否能正确的被创建', () => {
    vm = utils.createTest(KsButton);
    let el = vm.$el;

    expect(el.classList.contains('KsButton')).to.be.true;
  });

  it('loading 属性测试', () => {
    vm = utils.createTest(KsButton, {
      loading: true
    });
    let el = vm.$el;

    //
    // 1. 测试组件有没有被禁用
    // 2. 测试组件有没有加载动画
    //
    expect(vm.disable).to.be.true;
    expect(el.querySelector('i.fa-spin')).to.be.exist;
  });

  it('type 属性测试', () => {
    vm = utils.createTest(KsButton, {
      type: 'success'
    });
    let children = vm.$children[0];
    let testItem = {
      colorNormal: '#4CAF50',
      colorHover: '#66BB6A',
      colorActive: '#43A047'
    };

    Object.keys(testItem).forEach(k => {
      expect(children[k]).to.be.equal(testItem[k]);
    });
  });

  it('size 属性测试', () => {
    vm = utils.createTest(KsButton, {
      size: 'large'
    });
    let children = vm.$children[0];
    let testItem = {
      width: '160px',
      height: '54px',
      fontSize: '18px'
    };

    Object.keys(testItem).forEach(k => {
      expect(children[k]).to.be.equal(testItem[k]);
    });
  });

  it('click 事件响应测试', done => {
    let result = false;
    vm = utils.createTest({
      template: `
        <div class="container">
          <ks-button @click="handleClick"></ks-button>
        </div>
      `,
      methods: {
        handleClick() { result = true },
      },
      components: { KsButton }
    });
    vm.$el.firstElementChild.click();

    setTimeout(() => {
      expect(result).to.be.true;
      done();
    }, 0);
  });
});
