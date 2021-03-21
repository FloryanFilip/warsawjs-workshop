import ValidateInputMixin from "@/mixins/validate-input.mixin.vue";
import {mount} from "@vue/test-utils";

const Component = {
    template: '<input :value="a" @input="handleInput($event.target.value)"/>'
}
describe('ValidateInput', () => {
    it('should fail for [2] minLength and [a] value', () => {
        const component = mount(Component, {
            mixins: [ValidateInputMixin],
            methods: {
                handleInput(event: string) {
                    return minLengthValid(2, event);
                }
            }
        });


    });
});
