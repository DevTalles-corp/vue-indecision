import MessageBox from '@/components/chat/MessageBox.vue';
import { mount } from '@vue/test-utils';

describe('<MessageBox />', () => {
  test('renders input and button elements correctly', () => {
    const wrapper = mount(MessageBox);

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button svg').exists()).toBe(true);
  });
});
