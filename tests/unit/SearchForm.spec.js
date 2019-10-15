import SearchForm from "@/views/SearchForm";
import {shallowMount} from "@vue/test-utils";

describe('SearchForm', () => {
    const build = () => {
        const wrapper = shallowMount(SearchForm)

        return {
            wrapper,
            input: () => wrapper.find('input'),
            button: () => wrapper.find('button')
        }
    }

    it('renders the component properly', () => {
        const {wrapper} = build()

        expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders its contents properly', () => {
        const {input, button} = build()

        expect(input().exists()).toBeTruthy()
        expect(button().exists()).toBeTruthy()
    })

    it('calls the submit event when the form is submitted', () => {
        const expectedCity = 'Pune'
        const {wrapper, button, input} = build()

        input().element.value = expectedCity

        input().trigger('input')
        button().trigger('click')
        button().trigger('submit')

        expect(wrapper.emitted().submit[0]).toEqual([expectedCity])
    })
})
