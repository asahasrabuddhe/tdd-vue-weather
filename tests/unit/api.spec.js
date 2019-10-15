import nock from "nock";
import weatherData from './data/weather'
import api from '@/api'
import flushPromises from "flush-promises";

describe('api', () => {
    it('finds weather', async () => {
        const city = 'Pune'

        const request = nock('https://api.openweathermap.org')
            .get('/data/2.5/weather')
            .query({q: city, units: 'metric', appid: "6b4970abe58409a9afb6e09df2b18243"})
            .reply(200, weatherData)

        const result = await api.findWeather(city)
        await flushPromises()

        expect(result.data).toEqual(weatherData)
        expect(request.isDone()).toBeTruthy()
    })
})
