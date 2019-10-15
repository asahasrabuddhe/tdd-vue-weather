<template>
    <div>
        Display
    </div>
</template>

<script>
    export default {
        name: "Display",
        props: {
            weather: {
                type: Object,
                required: true,
                default: () => ({})
            }
        }
    }
</script>

<style scoped>

</style>
