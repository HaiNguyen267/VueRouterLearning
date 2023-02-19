<template>
  <div>
    <Nav />
    <RouterView />
  </div>
</template>

<script setup>
  import { RouterView } from 'vue-router';
  import Nav from './components/Nav.vue'

</script>

<style lang="scss" scoped>
</style>
