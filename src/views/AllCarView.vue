<template>
    <div class="cars">
            <RouterLink 
                v-for="car in cars" 
                :to="`/cars/${car.id}`" 
                href="" 
                active-class="active-link">
                {{ car.name }}
            </RouterLink>
        </div>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
    import cars from '../data/cars.json'

</script>

<style lang="scss" scoped>
.cars {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    a {
        display: inline-block;
        text-decoration: none;
        color: black;
        box-shadow: 1px 1px 10px black;
        width: 100px;
        padding: 10px;
    }

    
}
</style>