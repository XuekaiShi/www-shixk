<script setup lang="ts">
import HomeMain from '../components/home/HomeMain.vue'
import HomeHeader from '@/components/home/HomeHeader.vue'
import Affix from '@/components/Affix.vue';
</script>

<template>
  <div class="home">
    <HomeHeader />
    <HomeMain />
    <Affix />
  </div>
</template>

<style scoped>
.home {
  --homeview-width: 100%;
  --homeview-gap: 2rem;
  width: var(--homeview-width);
  margin: 16vh auto;
  position: relative;
}

@media (max-width: 720px) {
  .home {
    --homeview-width: 100%;
    width: var(--homeview-width);
    margin-top: 5vh;
  }
}
</style>