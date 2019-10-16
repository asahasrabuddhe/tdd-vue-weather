<template>
    <div class="level-item" v-if="weather.main !== undefined">
        <div class="weather">
            <p class="subtitle is-5 city">The weather in <strong>{{weather.name}}</strong> is:</p>
            <br/>
            <p class="temp"><strong>Temperature:</strong> {{weather.main.temp}}&deg;C</p>
            <p class="humidity"><strong>Humidity:</strong> {{weather.main.humidity}} %</p>
            <p class="wind"><strong>Wind Speed:</strong> {{weather.wind.speed}} m/s</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Display",
        props: {
            weather: {
                type: Object,
                required: true,
                default: null
            }
        }
    }
</script>

<style scoped>
    .weather {
        text-align: left
    }
</style>
