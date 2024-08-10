<script setup lang="ts">
import {list} from '@/views/articles/list'
// console.log(list)
</script>

<template>
  <div>
    <div v-for="item in list" :key="item.id">
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>