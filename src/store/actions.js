import api from '@/api'

export default {
    findWeather({commit}, {city}) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await api.findWeather(city)
                const weather = response.data
                commit('setWeather', weather)
                resolve(weather)
            } catch (error) {
                reject(error)
            }
        })
    }
}
