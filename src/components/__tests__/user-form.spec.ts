import {createLocalVue, mount} from "@vue/test-utils";
import FormComponent from "@/components/user-form.component.vue";
import AppInputComponent from "@/core/components/app-input.component.vue";

describe('UserForm', () => {
    const localVue = createLocalVue();
    localVue.component('app-input', AppInputComponent);
    it('should display empty input value for firstName prop', () => {
        const wrapper = mount(FormComponent, {
            localVue,
            propsData: {
                firstName: {
                    value: ''
                },
                lastName: {
                    value: ''
                },
                phoneNumber: {
                    value: '',
                }
            }
        });

        const firstNameInput = wrapper.find('[data-testid="nameInput"]');

        expect(firstNameInput.value).toBe('');
    });

    it('should emit [setPhoneNumber] event on [input] event', () => {
        const wrapper = mount(FormComponent, {
            localVue,
            propsData: {
                firstName: {
                    value: ''
                },
                lastName: {
                    value: ''
                },
                phoneNumber: {
                    value: '',
                }
            }
        });

        wrapper.findComponent(AppInputComponent).vm.$emit('input');

        expect(wrapper.emitted().setPhoneNumber).toBeTruthy();
        expect(wrapper.emitted().setPhoneNumber).toHaveLength(1);
        expect(wrapper.emitted().setPhoneNumber![0]).
    })
});
