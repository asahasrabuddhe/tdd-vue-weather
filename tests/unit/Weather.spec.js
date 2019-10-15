jest.mock('@/store/actions')
import Weather from '@/components/Weather';
import {createLocalVue, shallowMount} from '@vue/test-utils';
import SearchForm from '@/views/SearchForm';
import Display from '@/views/Display';
import initialState from '@/store/state'
import Vuex from 'vuex'
import weatherData from './data/weather'
import actions from '@/store/actions'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Weather', () => {
    let state

    const build = () => {
        const wrapper = shallowMount(Weather, {
            localVue,
            store: new Vuex.Store({state, actions})
        })

        return {
            wrapper,
            searchForm: () => wrapper.find(SearchForm),
            display: () => wrapper.find(Display)
        }
    }

    beforeEach(() => {
        jest.resetAllMocks()
        state = {...initialState}
    })

    it('renders the component properly', () => {
        const {wrapper} = build()

        expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders the views properly', () => {
        const {searchForm, display} = build()

        expect(searchForm().exists()).toBeTruthy()
        expect(display().exists()).toBeTruthy()
    })

    it('passes a bound weather prop to the display component', () => {
        state.weather = weatherData
        const {display} = build()

        expect(display().vm.weather).toBe(state.weather)
    })

    it('finds the weather for the city when form is submitted', () => {
        const expectedCity = 'Pune'
        const {searchForm} = build()

        searchForm().vm.$emit('submit', expectedCity)

        expect(actions.findWeather).toHaveBeenCalled()
        expect(actions.findWeather.mock.calls[0][1]).toEqual({city: expectedCity})
    })
})
