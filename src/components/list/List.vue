<script setup lang="ts">
import { list } from '@/views/articles/list'
import { posts } from '@/router';
import { useRoute, useRouter } from 'vue-router';

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

</script>

<template>
  <div>
    <div v-for="item in filterList" :key="item.id">
      <p @click="goTo(item.id, item.category)">{{ item.title }}</p>
    </div>
  </div>
</template>