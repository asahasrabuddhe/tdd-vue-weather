import Weather from "@/components/Weather";
import {shallowMount} from "@vue/test-utils";
import SearchForm from "@/views/SearchForm";
import Display from "@/views/Display";

describe('Weather', () => {
    it('renders the component properly',() => {
        const wrapper = shallowMount(Weather)

        expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders the views properly', () => {
        const wrapper = shallowMount(Weather)
        const searchForm = wrapper.find(SearchForm)
        const display = wrapper.find(Display)

        expect(searchForm.exists()).toBeTruthy()
        expect(display.exists()).toBeTruthy()
    })
})
