<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import TheNav from './components/TheNav.vue';
  import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <TheNav />
  <RouterView />
</template>

<style scoped>
  nav *{
    margin: 10px;
  }
</style>
