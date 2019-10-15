import Weather from "@/components/Weather";
import {shallowMount} from "@vue/test-utils";

describe('Weather', () => {
    it('renders the component properly',() => {
        const wrapper = shallowMount(Weather)

        expect(wrapper.html()).toMatchSnapshot()
    })
})
