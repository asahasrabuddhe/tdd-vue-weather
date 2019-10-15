import weatherData from '../../../tests/unit/data/weather'

export default {
    FindWeather: jest.fn().mockResolvedValue(weatherData)
}
