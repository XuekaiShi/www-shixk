<script setup lang="ts">
import HomeItem from './HomeItem.vue'
import IconArchive from '../icons/IconArchive.vue';
import IconGame from '../icons/IconGame.vue'
import IconFile from '../icons/IconFile.vue'
import IconMore from '../icons/IconMore.vue'
import router from '@/router';

const goToViews = (path: string) => {
  router.push('/' + path)
}
</script>

<template>
  <main>
    <HomeItem @click="goToViews('all')">
      <template #icon>
        <IconArchive></IconArchive>
      </template>
      <template #heading>
        All Blogs and Notes
      </template>
      <template #details>
        Here is all my blogs and notes sorded by date.
      </template>
    </HomeItem>
    <HomeItem @click="goToViews('blog')">
      <template #icon>
        <IconGame></IconGame>
      </template>
      <template #heading>
        Blog
      </template>
      <template #details>
        Here is all my blogs and notes sorded by date.
      </template>
    </HomeItem>
    <HomeItem @click="goToViews('notes')">
      <template #icon>
        <IconFile></IconFile>
      </template>
      <template #heading>
        Notes
      </template>
      <template #details>
        Here is all my blogs and notes sorded by date.
      </template>
    </HomeItem>
    <HomeItem @click="goToViews('more')">
      <template #icon>
        <IconMore></IconMore>
      </template>
      <template #heading>
        More
      </template>
      <template #details>
        Here is all my blogs and notes sorded by date.
      </template>
    </HomeItem>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding-top: calc(var(--homeview-gap) / 2);
  /* background-color: yellow; */
  /* height: 20vh; */
  /* overflow: hidden; */
}

@media (min-width: 720px) {
  main {
    padding: var(--homeview-gap);
    grid-template-columns: 1fr 1fr;
  }

  /* main {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    width: 100%;
  } */
}
</style>
