/* eslint-disable */
import { mount } from '@vue/test-utils'
import email from './email.vue'

describe('Email', () => {
    it('renders a button to cancel the input', () => {
        const wrapper = mount(email)
        const input = wrapper.find('.input')
        input.element.value = 'a123@foo.bar'
        input.trigger('input')
    })
})