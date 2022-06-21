import Button from './Button.vue'
// mount 函数可以模拟vue组件的渲染
import { mount } from '@vue/test-utils'

describe('按钮测试', () => {
  it('按钮能够显示文本', () => {
    const content = '小老弟'
    const wrapper = mount(Button, {
      slots: {
        default: content
      }
    })
    // wrapper.text()获取button文本内容
    expect(wrapper.text()).toBe(content)
  })
  it('通过size属性控制大小', () => {
    const size = 'small'
    const wrapper = mount(Button, {
      props: {
        size
      }
    })
    // wrapper.classes 获取button 的class
    expect(wrapper.classes()).toContain('el-button--small')
  })
})