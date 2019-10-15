import axios from "axios";
import httpAdapter from 'axios/lib/adapters/http'

const instance = axios.create({
    baseURL: "https://api.openweathermap.org",
    adapter: httpAdapter,
})

export default {
    findWeather(city) {
        return instance
            .get('/data/2.5/weather', {
                params: {q: city, units: 'metric', appid: "6b4970abe58409a9afb6e09df2b18243"}
            })
    }
}
