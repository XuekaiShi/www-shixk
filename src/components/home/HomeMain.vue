<script setup lang="ts">
import HomeItem from './HomeItem.vue'
// import { posts } from '@/router';
import IconArchive from '../icons/IconArchive.vue';
import IconGame from '../icons/IconGame.vue'
import IconFile from '../icons/IconFile.vue'
import IconMore from '../icons/IconMore.vue'
import router from '@/router';
import { useListStore } from '@/stores/listState';
import { ListCategory } from '@/types/list.d';
const listStore = useListStore();

const goToViews = (path: ListCategory) => {
  listStore.ListState = path;
  console.log(listStore.ListState)
  router.push("posts")
}
</script>

<template>
  <main>
    <HomeItem @click="goToViews(ListCategory.All)">
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
    <HomeItem @click="goToViews(ListCategory.Blogs)">
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
    <HomeItem @click="goToViews(ListCategory.Notes)">
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
    <HomeItem @click="goToViews(ListCategory.More)">
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
  padding: var(--homeview-gap);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  /* background-color: yellow; */
  /* height: 20vh; */
  /* overflow: hidden; */
}

@media (max-width: 720px) {
  main {
    padding: calc(var(--homeview-gap) / 2);
    grid-template-columns: 1fr;
  }
}
</style>
