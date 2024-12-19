<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="tempNav">
      <RouterLink to="/TheFooter">TheFooter</RouterLink>
      <RouterLink to="/TheNav">TheNav</RouterLink>
      <RouterLink to="/ScrollToTop">ScrollToTop</RouterLink>
      <RouterLink to="/TicketBtn">TicketBtn</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
  nav *{
    margin: 10px;
  }
</style>
