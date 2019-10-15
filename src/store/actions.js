import api from '@/api'

export default {
    findWeather({commit}, {city}) {
        return new Promise(async (resolve, reject) => {
            try {
                const weather = await api.findWeather(city)
                commit('setWeather', weather)
                resolve(weather)
            } catch (error) {
                reject(error)
            }
        })
    }
}
