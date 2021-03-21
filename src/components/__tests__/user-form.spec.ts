import {createLocalVue, mount, Wrapper} from "@vue/test-utils";
import FormComponent from "@/components/user-form.component.vue";
import AppInputComponent from "@/core/components/app-input.component.vue";

describe('UserForm', () => {
    let wrapper!: Wrapper<FormComponent>;
    const localVue = createLocalVue();
    localVue.component('app-input', AppInputComponent);
    const factory = (props?: any, slots?: any) => {
        return mount(FormComponent, {
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
                },
                ...props
            },
            slots: {
                ...slots
            }
        })
    }

    beforeEach(() => {
        wrapper = factory();
    });

    afterEach(() => {
        wrapper.destroy();
    });

    it('should display empty input value for firstName prop', () => {
        const firstNameInput = wrapper.find('[data-testid="nameInput"]');

        expect(firstNameInput.vm.$attrs.value).toBe('');
    });

    it('should display populated input value for firstName prop', () => {
        wrapper = factory({firstName: {value: 'Jan'}});

        const firstNameInput = wrapper.find('[data-testid="nameInput"]');

        expect(firstNameInput.vm.$attrs.value).toBe('Jan');
    })
    // it('should emit [setPhoneNumber] event on [input] event', () => {
    //     const wrapper = mount(FormComponent, {
    //         localVue,
    //         propsData: {
    //             firstName: {
    //                 value: ''
    //             },
    //             lastName: {
    //                 value: ''
    //             },
    //             phoneNumber: {
    //                 value: '',
    //             }
    //         }
    //     });
    //
    //     wrapper.find('[data-testid="numberInput"]').vm.$emit('input', {
    //         $event: {
    //             target: {
    //                 value: ''
    //             }
    //         }
    //     });
    //
    //     expect(wrapper.emitted().setPhoneNumber).toBeTruthy();
    //     expect(wrapper.emitted().setPhoneNumber).toHaveLength(1);
    // expect(wrapper.emitted().setPhoneNumber![0]).toEqual(['+48'])
    // })

    it('should display confirm button', () => {
        const confirmButton = wrapper.find('[data-testid="submitButton"]');

        expect(confirmButton.exists()).toBe(true);
        expect(confirmButton.text()).toBe('Potwierdz');
    });

    it('should display cancel button', () => {
        const cancelButton = wrapper.find('[data-testid="cancelButton"]');

        expect(cancelButton.exists()).toBe(true);
        expect(cancelButton.text()).toBe('Anuluj');
    });
});
