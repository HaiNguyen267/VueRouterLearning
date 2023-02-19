<template>
    <div>
        <RouterLink active-class="active-link" class='link' to="/">Home</RouterLink>
        <RouterLink active-class="active-link" class='link' to="/about">About</RouterLink>
        <RouterLink active-class="active-link" class='link' to="/cars">Car</RouterLink>
    </div>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
</script>

<style lang="scss" scoped>
    .link {
        margin: 0px 20px;
        text-decoration: none;
        color: black;
    }

    .active-link {
        background: lightblue;
        padding: 20px;
        border-radius: 10px;
    }
</style>