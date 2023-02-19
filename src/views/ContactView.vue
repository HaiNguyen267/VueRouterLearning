<template>
    <div v-id='car'>
        <h1>Contact info</h1>
        <p>{{ car.contact.dealer }}</p>
        <p>{{ car.contact.number }}</p>
    </div>
    
</template>

<script setup>
    import { useRoute } from 'vue-router';
    import cars from '../data/cars.json'

    const route = useRoute()
    const car = cars.find(c  => c.id == route.params.id)
    // const 
</script>

<style lang="scss" scoped>

</style>