<script setup lang="ts">
import HomeItem from './HomeItem.vue'
import { posts } from '@/router';
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
    <HomeItem @click="goToViews(posts.all)">
      <template #icon>
        <IconArchive></IconArchive>
      </template>
      <template #heading>
        {{ $t('home.all.heading') }}
      </template>
      <template #details>
        {{ $t('home.all.details') }}
      </template>
    </HomeItem>
    <HomeItem @click="goToViews(posts.blogs)">
      <template #icon>
        <IconGame></IconGame>
      </template>
      <template #heading>
        {{ $t('home.blog.heading') }}
      </template>
      <template #details>
        {{ $t('home.blog.details') }}
      </template>
    </HomeItem>
    <HomeItem @click="goToViews(posts.notes)">
      <template #icon>
        <IconFile></IconFile>
      </template>
      <template #heading>
        {{ $t('home.notes.heading') }}
      </template>
      <template #details>
        {{ $t('home.notes.details') }}
      </template>
    </HomeItem>
    <HomeItem @click="goToViews(posts.more)">
      <template #icon>
        <IconMore></IconMore>
      </template>
      <template #heading>
        {{ $t('home.more.heading') }}
      </template>
      <template #details>
        {{ $t('home.more.details') }}
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
