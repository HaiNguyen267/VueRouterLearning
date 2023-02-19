<template>
    <h1>CAR!</h1>
    <div v-if="car">
        <h1>Car view</h1>
        <p>{{ car.name }}</p>
        <p>${{ car.price }}</p>
        <p>{{ car.year }}</p>
        <button @click="showContact()">Show contact</button>
        <RouterView />
    </div>
    <div v-else>
        <h1>Car Not Found</h1>
    </div>
</template>

<script setup>
    import { useRoute, RouterView, useRouter } from 'vue-router';
    import cars from '../data/cars.json'

    const route = useRoute()
    const router = useRouter()
    const carId = route.params.id
    
    function showContact() {
        if (carId == 4) return;

        router.push(`/cars/${carId}/contact`)
    }
    const car = cars.find(c => c.id == carId)

    
</script>

<style lang="scss" scoped>

</style>