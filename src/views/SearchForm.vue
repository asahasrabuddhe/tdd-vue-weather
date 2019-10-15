<template>
    <div>
        <form @submit.prevent="$emit('submit', city)">
            <input type="text" v-model="city" />
            <button type="submit">Find Weather</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "SearchForm",
        data() {
            return {
                city: ''
            }
        }
    }
</script>

<style scoped>

</style>
