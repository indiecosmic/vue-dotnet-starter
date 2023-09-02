import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchWeather } from '../services/weatherforecast'

export const useWeatherStore = defineStore('weather', () => {
  const currentWeather = ref('')
  async function loadWeather() {
    const result = await fetchWeather()
    currentWeather.value = result.data
  }

  return { currentWeather, loadWeather }
})
