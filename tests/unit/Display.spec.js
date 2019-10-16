import Display from '@/views/Display';
import {shallowMount} from '@vue/test-utils';
import weatherData from './data/weather'

describe('Display', () => {
    let props

    const build = () => {
        const wrapper = shallowMount(Display, {
            propsData: props,
        })

        return {
            wrapper,
            city: () => wrapper.find('.weather .city'),
            temp: () => wrapper.find('.weather .temp'),
            humidity: () => wrapper.find('.weather .humidity'),
            wind: () => wrapper.find('.weather .wind'),
        }
    }

    beforeEach(() => {
        props = {
            weather: weatherData.data
        }
    })

    it('renders the component properly', () => {
        const { wrapper } = build()

        expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders its contents properly', () => {
        const { city, temp, humidity, wind } = build()

        expect(city().exists()).toBeTruthy()
        expect(city().text()).toBe(`The weather in ${props.weather.name} is:`)

        expect(temp().exists()).toBeTruthy()
        expect(temp().text()).toBe(`Temperature: ${props.weather.main.temp.toString()}°C`)

        expect(humidity().exists()).toBeTruthy()
        expect(humidity().text()).toBe(`Humidity: ${props.weather.main.humidity.toString()} %`)

        expect(wind().exists()).toBeTruthy()
        expect(wind().text()).toBe(`Wind Speed: ${props.weather.wind.speed} m/s`)
    })
})
