<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import TheNav from './components/TheNav.vue';
  import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <header>
    <nav class="tempNav">
      <RouterLink to="/TheFooter">TheFooter</RouterLink>
      <RouterLink to="/TheNav">TheNav</RouterLink>
      <RouterLink to="/ScrollToTop">ScrollToTop</RouterLink>
      <RouterLink to="/CTABtn">CTABtn</RouterLink>
      <RouterLink to="/ActivityCard">ActivityCard</RouterLink>
      <RouterLink to="/ExhibitCard">ExhibitCard</RouterLink>
      <RouterLink to="/FEPCards">FEPCards</RouterLink>
      <RouterLink to="/HeroImg">HeroImg</RouterLink>
      <RouterLink to="/ImgWText">ImgWText</RouterLink>
      <RouterLink to="/InstagramCard">InstagramCard</RouterLink>
      <RouterLink to="/StickyBottomMenu">StickyBottomMenu</RouterLink>
    </nav>
  </header>

  <TheNav />
  <RouterView />
  <TheFooter />
</template>

<style scoped>
  nav *{
    margin: 10px;
  }
</style>
