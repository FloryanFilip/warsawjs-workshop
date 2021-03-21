import {mount} from "@vue/test-utils";
import AppInputComponent from "@/core/components/app-input.component.vue";

describe('AppInput', () => {
    it('should render default slot content by default', () => {
        const wrapper = mount(AppInputComponent);

        const label = wrapper.find('[data-testid="label"]'); // normal query selector: any valid DOM node
        // or class selector

        expect(label.text()).toBe('Domyślny label');
    });

    it('it should render provided label slot context', () => {
        const wrapper = mount(AppInputComponent, {
            slots: {
                default: '<div>Jakaś zawartość</div>'
            }
        });

        const label = wrapper.find('[data-testid="label"]');

        expect(label.text()).toBe('Jakaś zawartość');
    });
});
