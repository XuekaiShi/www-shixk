<script setup lang="ts">
// import { watchEffect, ref } from 'vue';
// import { list } from '@/views/articles/list'
import { useRouter } from 'vue-router';
import ListItem from './ListItem.vue'
// import { useListStore } from '@/stores/listState';
// import { ListCategory } from '@/types/list.d';

const router = useRouter();
// const listStore = useListStore();
defineProps(['list'])

const goTo = (id: number, category: string) => {
  router.push(category + '/' + id)
}

// const filterList = ref(list)
// watchEffect(() => {
//   filterList.value = list.filter((item) => {
//     const current = listStore.ListState
//     if (current === ListCategory.All) {
//       return true
//     } else if (current === ListCategory.More) {
//       return (item.category !== ListCategory.Blogs) && (item.category !== ListCategory.Notes)
//     } else {
//       return item.category === current
//     }
//   })
// })
</script>

<template>
  <div class="list">
    <ListItem v-for="item in list" :key="item.id" @click="goTo(item.id, item.category)">
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
    <ListItem v-for="item in list" :key="item.id" @click="goTo(item.id, item.category)">
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
    <ListItem v-for="item in list" :key="item.id" @click="goTo(item.id, item.category)">
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
    <ListItem v-for="item in list" :key="item.id" @click="goTo(item.id, item.category)">
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
    <ListItem v-for="item in list" :key="item.id" @click="goTo(item.id, item.category)">
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
  width: 25%;
  /* background-color: aqua; */
}
</style>
