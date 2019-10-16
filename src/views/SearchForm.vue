<template>
    <div class="level-item">
        <form @submit.prevent="$emit('submit', city)" class="field has-addons">
            <p class="control"><input class="input" type="text" v-model="city" placeholder="Enter City" /></p>
            <p class="control"><button class="button" type="submit">Find Weather</button></p>
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
