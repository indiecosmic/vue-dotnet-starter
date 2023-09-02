<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useWeatherStore } from '../stores/weather'

const weatherStore = useWeatherStore()
const currentWeather = computed(() => weatherStore.currentWeather)

onMounted(async () => {
  await weatherStore.loadWeather()
})

</script>

<template>
  <div>
    Weather: {{ currentWeather }}
  </div>
</template>

<style scoped></style>
