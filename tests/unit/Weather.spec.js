import Weather from "@/components/Weather";
import {shallowMount} from "@vue/test-utils";
import SearchForm from "@/views/SearchForm";
import Display from "@/views/Display";

describe('Weather', () => {
    const build = () => {
        const wrapper = shallowMount(Weather)

        return {
            wrapper,
            searchForm: () => wrapper.find(SearchForm),
            display: () => wrapper.find(Display)
        }
    }
    it('renders the component properly', () => {
        const {wrapper} = build()

        expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders the views properly', () => {
        const { searchForm, display } = build()

        expect(searchForm().exists()).toBeTruthy()
        expect(display().exists()).toBeTruthy()
    })
})
