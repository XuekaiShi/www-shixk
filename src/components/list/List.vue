<script setup lang="ts">
import { onMounted } from 'vue';
import { list } from '@/views/articles/list'
import { posts } from '@/router';
import { useRoute, useRouter } from 'vue-router';
import ListItem from './ListItem.vue'

const route = useRoute();
const router = useRouter();

const goTo = (id: number, category: string) => {
  router.push(category + '/' + id)
}

const filterList = list.filter((item) => {
  const path = route.path
  if (path === '/' + posts.all) {
    return true
  } else if (path === '/' + posts.more) {
    return (item.category !== posts.blogs) && (item.category !== posts.notes)
  } else {
    return '/' + item.category === route.path
  }
})

onMounted(() => {
  console.log("mounted")
})

</script>

<template>
  <div class="list">
    <ListItem v-for="item in filterList" :key="item.id" @click="goTo(item.id, item.category)">
      <template #title>
        {{ item.title }}
      </template>
      <template #category>
        {{ item.category }}
      </template>
      <template #date>
        {{ item.date }}
      </template>
      <template #abstract>
        {{ item.abstract }}
      </template>
    </ListItem>
    <ListItem v-for="item in filterList" :key="item.id" @click="goTo(item.id, item.category)">
      <template #title>
        {{ item.title }}
      </template>
      <template #category>
        {{ item.category }}
      </template>
      <template #date>
        {{ item.date }}
      </template>
      <template #abstract>
        {{ item.abstract }}
      </template>
    </ListItem>     <ListItem v-for="item in filterList" :key="item.id" @click="goTo(item.id, item.category)">
      <template #title>
        {{ item.title }}
      </template>
      <template #category>
        {{ item.category }}
      </template>
      <template #date>
        {{ item.date }}
      </template>
      <template #abstract>
        {{ item.abstract }}
      </template>
    </ListItem>

  </div>
</template>

<style scoped>
.list {
  min-height: calc(100vh - var(--app-padding) * 2 - 8rem);
  border-bottom: 1.5px solid var(--color-text);
  margin-bottom: var(--app-padding);
}
</style>
