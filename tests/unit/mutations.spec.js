import initialState from '@/store/state'
import weatherData from './data/weather'
import mutations from "@/store/mutations";

describe('mutations', () => {
    let state

    beforeEach(() => {
        state = {...initialState}
    })

    it('sets weather', () => {
        const expectedWeather = weatherData

        mutations.setWeather(state, expectedWeather)
        
        expect(state.weather).toEqual(expectedWeather)
        expect(state.weather).not.toBe(expectedWeather)
    })
})
