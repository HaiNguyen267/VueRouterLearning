<template>
    <div>
        <h1>Home</h1>
        <AllCarView />
    </div>
</template>

<script setup>
import cars from '../data/cars.json'
import { RouterLink } from 'vue-router'

import AllCarView from './AllCarView.vue';
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

.active-link {
        background: lightblue;
        padding: 20px;
        border-radius: 10px;
    }
</style>