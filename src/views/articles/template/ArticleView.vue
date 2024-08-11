<script setup lang="ts">
import { ref, reactive, onMounted, markRaw, shallowRef, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import A1 from '@/views/articles/template/a1.vue'
// const modules = import.meta.glob('../*.vue');

const route = useRoute()
const routeID = route.path.replace(/^(.*?)(?=\d+$)/, '')

const Article = shallowRef({})
Article.value = A1
onMounted(async () => {
  const module = await import(`./a${routeID}.vue`);
  // console.log(module)
  Article.value = module.default
})
// onMounted(async () => {
//   const modules = import.meta.glob('../*.vue');
//   for (const path in modules) {
//     const mod = await modules[path]()
//     const id = path.replace(/\D/gm, '')
//     console.log(id)
//     if (id === routeID) {
//       Article.value = (mod as any).default
//     }
//   }
// })
</script>
<template>
  <div>
    <div>aaaa</div>
    <component :is="Article" />
    <div>bbbb</div>
  </div>
</template>