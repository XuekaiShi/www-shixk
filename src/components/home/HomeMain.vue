<script setup lang="ts">
import HomeItem from './HomeItem.vue'
import IconArchive from '../icons/IconArchive.vue';
import IconGame from '../icons/IconGame.vue'
import IconFile from '../icons/IconFile.vue'
import IconMore from '../icons/IconMore.vue'
</script>

<template>
  <main>
    <HomeItem>
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
    <HomeItem>
      <template #icon>
        <IconGame></IconGame>
      </template>
      <template #heading>
        Blogs
      </template>
      <template #details>
        Here is all my blogs and notes sorded by date.
      </template>
    </HomeItem>
    <HomeItem>
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
    <HomeItem>
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
