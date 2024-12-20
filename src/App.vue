<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="tempNav">
      <RouterLink to="/TheFooter">TheFooter</RouterLink>
      <RouterLink to="/TheNav">TheNav</RouterLink>
      <RouterLink to="/ScrollToTop">ScrollToTop</RouterLink>
      <RouterLink to="/BtnLight">BtnLight</RouterLink>
      <RouterLink to="/ActivityCards">ActivityCards</RouterLink>
      <RouterLink to="/BtnDark">BtnDark</RouterLink>
      <RouterLink to="/ExhibitCard">ExhibitCard</RouterLink>
      <RouterLink to="/FEPCards">FEPCards</RouterLink>
      <RouterLink to="/HeroImg">HeroImg</RouterLink>
      <RouterLink to="/ImgWText">ImgWText</RouterLink>
      <RouterLink to="/InstagramCards">InstagramCards</RouterLink>
      <RouterLink to="/ScrollIndicator">ScrollIndicator</RouterLink>
      <RouterLink to="/StickyBottomMenu">StickyBottomMenu</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
  nav *{
    margin: 10px;
  }
</style>
