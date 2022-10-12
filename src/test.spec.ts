import {mount} from '@vue/test-utils';
import App from './App.vue';

describe('App', () => {
    test('Vue instance', () => {
        const wrapper = mount(<any>App);
        expect(wrapper.findComponent(App)).toBeTruthy();
    });
});
