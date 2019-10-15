<template>
    <div>
        Weather
        <SearchForm/>
        <Display/>
    </div>
</template>

<script>
    import SearchForm from "@/views/SearchForm";
    import Display from "@/views/Display";
    export default {
        name: "Weather",
        components: {Display, SearchForm}
    }
</script>

<style scoped>

</style>
