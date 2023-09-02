import axios from 'axios'

const apiBaseUrl = '/api'
export const fetchWeather = async() => {
    return await axios.get(`${apiBaseUrl}/weatherforecast`)
}
