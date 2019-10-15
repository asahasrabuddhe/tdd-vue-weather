import weatherData from '../../../tests/unit/data/weather'

export default {
    findWeather: jest.fn().mockResolvedValue(weatherData.data)
}
