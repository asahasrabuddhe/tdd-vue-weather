<template>
    <div>
        <div class="weather">
            <p class="city">{{weather.name}}</p>
            <p class="temp">{{weather.main.temp}}</p>
            <p class="pressure">{{weather.main.pressure}}</p>
            <p class="humidity">{{weather.main.humidity}}</p>
            <p class="wind"></p>
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
            }
        }
    }
</script>

<style scoped>

</style>
