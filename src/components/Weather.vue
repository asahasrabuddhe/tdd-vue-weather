<template>
    <div class="level">
        <SearchForm @submit="findWeather"/>
        <Display :weather="weather"/>
    </div>
</template>

<script>
    import SearchForm from "@/views/SearchForm";
    import Display from "@/views/Display";
    import {mapState} from "vuex";

    export default {
        name: "Weather",
        components: {Display, SearchForm},
        computed: {
            ...mapState({
                weather: 'weather'
            })
        },
        methods: {
            findWeather(city) {
                this.$store.dispatch('findWeather', {city})
            }
        }
    }
</script>

<style scoped>

</style>
