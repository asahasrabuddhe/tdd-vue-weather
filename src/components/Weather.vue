<template>
    <div>
        Weather
        <SearchForm/>
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
        }
    }
</script>

<style scoped>

</style>
