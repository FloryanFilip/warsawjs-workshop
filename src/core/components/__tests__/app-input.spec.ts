import {mount, Wrapper} from "@vue/test-utils";
import AppInputComponent from "@/core/components/app-input.component.vue";

describe('AppInput', () => {
    let wrapper!: Wrapper<AppInputComponent>;
    const factory = (slots?: any) => {
        return mount(AppInputComponent, {
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

    it('should render default slot content by default', () => {
        const label = wrapper.find('[data-testid="label"]'); // normal query selector: any valid DOM node
        // or class selector

        expect(label.text()).toBe('Domyślny label');
    });

    it('it should render provided label slot context', () => {
        wrapper = factory({
            default: '<div>Jakaś zawartość</div>'
        });

        const label = wrapper.find('[data-testid="label"]');

        expect(label.text()).toBe('Jakaś zawartość');
    });
});
