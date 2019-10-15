import weatherData from '../../../tests/unit/data/weather'

export default {
    FIND_WEATHER: jest.fn().mockResolvedValue(weatherData)
}
