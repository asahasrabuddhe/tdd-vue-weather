<template>
    <div class="container">
        <h1 class="title">Weather</h1>
        <Weather/>
    </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css?family=Karla|Montserrat&display=swap');

    body {
        font-family: 'Montserrat', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }
</style>
<script>
    import Weather from "@/components/Weather";

    export default {
        components: {Weather}
    }
</script>
