jest.mock('@/api')
import flushPromises from "flush-promises";
import actions from '@/store/actions'
import api from '@/api'
import weatherData from './data/weather'

describe('store actions', () => {
    let commit

    beforeEach(() => {
        commit = jest.fn()
    })

    it('finds weather for given city', async () => {
        const city = 'Pune'

        await actions.findWeather({commit}, {city})
        await flushPromises()

        expect(api.findWeather).toHaveBeenCalledWith(city)
        expect(commit).toHaveBeenCalledWith('setWeather', weatherData)
    })
})
