import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })

  it('add function adds to running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('1');
    expect(wrapper.vm.runningTotal).to.equal(5)
  })

  it('subtract function removes from running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('multiply function multiplies running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15)
  })

  it('Divide function divides running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('clicking multiple numbers will concatenate', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick('9');
    wrapper.vm.numberClick('0');
    wrapper.vm.numberClick('0');
    expect(wrapper.vm.runningTotal).to.equal(900)
  })

  it('multiple operations can be chained together', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.runningTotal = 10
    wrapper.vm.operatorClick('+');
    wrapper.vm.numberClick('5');
    wrapper.vm.operatorClick('-');
    wrapper.vm.numberClick('11');
    wrapper.vm.operatorClick('*');
    wrapper.vm.numberClick('10');
    wrapper.vm.operatorClick('/');
    wrapper.vm.numberClick('4');
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(10) 
  })

  it('clearing the running total will not effect the calculation', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.runningTotal = 10
    wrapper.vm.operatorClick('+');
    wrapper.vm.numberClick('5');
    wrapper.vm.clearClick();
    wrapper.vm.operatorClick('-');
    wrapper.vm.numberClick('5');
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(5)
  })

})
