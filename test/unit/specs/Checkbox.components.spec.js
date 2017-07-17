//
// 复选框单元测试
//

import utils from '../utils'
import components from '@/components/KsCheckbox'

const { KsCheckbox, KsCheckboxGroup } = components.KsCheckbox_v0;
describe('KsCheckbox 组件测试', () => {
  let vm = null;
  beforeEach(() => utils.destroyVM(vm));

  it('测试 KsCheckbox 组件能否被正常创建', () => {
    vm = utils.createTest({
      template: `
        <div class="container">
          <ks-checkbox>备选项1</ks-checkbox>
          <ks-checkbox>备选项2</ks-checkbox>
          <ks-checkbox>备选项3</ks-checkbox>
        </div>
      `,
      components: { KsCheckbox }
    });
    let el = vm.$el.querySelectorAll('.KSNRCheckbox-container-text');

    expect(el.length).to.be.equal(3);
    for (let i = 1; i <= 3; i++) {
      expect(el[i - 1].innerText).to.be.equal(`备选项${i}`);
    }
  });

  it('name 属性测试', () => {
    vm = utils.createTest(KsCheckbox, {
      name: 'TEST-NAME'
    });
    let el = vm.$el.querySelector('.KSNRCheckbox-container-entity');

    expect(el.getAttribute('name')).to.be.equal('TEST-NAME');
  });

  it('color 属性测试', () => {
    vm = utils.createTest({
      template: `
        <div class="container">
          <ks-checkbox color="rgb(1, 1, 1)" :checked.sync="checked">备选项1</ks-checkbox>
        </div>
      `,
      data () {
        return {
          checked: true
        }
      },
      components: { KsCheckbox }
    });
    let cubeEl = vm.$el.querySelector('em');

    expect(cubeEl.style.background).to.be.equal('rgb(1, 1, 1)');
  });

  it('checked 属性测试', () => {
    vm = utils.createTest({
      template: `
        <div class="container">
          <ks-checkbox :checked.sync="checked">备选项1</ks-checkbox>
        </div>
      `,
      data () {
        return {
          checked: false
        }
      },
      components: { KsCheckbox }
    });
    let entityEl = vm.$el.querySelector('input');
    entityEl.click();
    
    expect(vm.checked).to.be.true;
  });

  it('disable 属性测试', () => {
    vm = utils.createTest({
      template: `
        <div class="container">
          <ks-checkbox :disable="true" :checked.sync="checked">备选项1</ks-checkbox>
        </div>
      `,
      data () {
        return {
          checked: false
        }
      },
      components: { KsCheckbox }
    });
    let entityEl = vm.$el.querySelector('input');
    entityEl.click();

    expect(vm.checked).to.be.false;
  });

  it('@change 事件测试', done => {
    let result = false;
    vm = utils.createTest({
      template: `
        <div class="container">
          <ks-checkbox @click="clickHandle" :checked.sync="checked">备选项1</ks-checkbox>
        </div>
      `,
      data () {
        return {
          checked: false
        }
      },
      methods: {
        clickHandle () {
          result = true;
        }
      },
      components: { KsCheckbox }
    });
    let entityEl = vm.$el.querySelector('input');
    entityEl.click();

    setTimeout(() => {
      expect(result).to.be.true;

      done();
    }, 0)
  });

  it('@label-click 事件测试', done => {
    let result = false;
    vm = utils.createTest({
      template: `
        <div class="container">
          <ks-checkbox @label-click="clickHandle" :checked.sync="checked">备选项1</ks-checkbox>
        </div>
      `,
      data () {
        return {
          checked: false
        }
      },
      methods: {
        clickHandle () {
          result = true;
        }
      },
      components: { KsCheckbox }
    });
    let labelEl = vm.$el.querySelector('.KSNRCheckbox-container-text');
    labelEl.click();

    setTimeout(() => {
      expect(result).to.be.true;

      done();
    }, 0)
  });
});

describe('KsCheckboxGroup 组件测试', () => {
  let vm = null;
  beforeEach(() => utils.destroyVM(vm));

  it('测试 KsCheckboxGroup 组件能否被正常创建', () => {
    vm = utils.createTest({
      template: `
        <div class="container">
          <ks-checkbox-group></ks-checkbox-group>
        </div>
      `,
      components: { KsCheckboxGroup }
    });
    let el = vm.$el.querySelectorAll('.ks-checkbox-group');

    expect(el).to.be.exist;
  });

  it('vModel 属性测试', done => {
    vm = utils.createTest({
      template: `
        <div class="container">
          <ks-checkbox-group :v-model.sync="checkboxGroup">
            <ks-checkbox name="zhangSan">张三</ks-checkbox>
            <ks-checkbox name="liSi">李四</ks-checkbox>
            <ks-checkbox name="wangWu">王五</ks-checkbox>
          </ks-checkbox-group>
        </div>
      `,
      data () {
        return {
          checkboxGroup: []
        }
      },
      components: { KsCheckboxGroup, KsCheckbox }
    });
    let entityEls = vm.$el.querySelectorAll('input');

    for (let i = 0; i < 3; i++) {
      entityEls[i].click();
      vm.$nextTick(() => {
        expect(vm.checkboxGroup).to.be.include(entityEls[i].getAttribute('name'));

        done();
      })
    }
  });

  it('@change 事件测试', () => {
    let result = 0;
    vm = utils.createTest({
      template: `
        <div class="container">
          <ks-checkbox-group @change="" :v-model.sync="checkboxGroup">
            <ks-checkbox name="zhangSan">张三</ks-checkbox>
            <ks-checkbox name="liSi">李四</ks-checkbox>
            <ks-checkbox name="wangWu">王五</ks-checkbox>
          </ks-checkbox-group>
        </div>
      `,
      data () {
        return {
          checkboxGroup: []
        }
      },
      methods: {
        changeHandle () {
          result++;
        }
      },
      components: { KsCheckboxGroup, KsCheckbox }
    });
    let entityEls = vm.$el.querySelectorAll('input');

    for (let i = 0; i < 3; i++) {
      entityEls[i].click();
      vm.$nextTick(() => {
        expect(result).to.be.equal(i);

        done();
      })
    }
  });
});
