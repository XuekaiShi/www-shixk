<script setup lang="ts">
import { ref, reactive, onMounted, markRaw, shallowRef, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import ArticleTemplate from '@/views/articles/template/Article.vue'
// const modules = import.meta.glob('../*.vue');

const route = useRoute()
const routeID = route.path.replace(/^(.*?)(?=\d+$)/, '')

const Article = shallowRef({})
Article.value = ArticleTemplate

onMounted(async () => {
  const module = await import(`./articles/a${routeID}.vue`);
  // console.log(module)
  Article.value = module.default
})

</script>
<template>
  <component :is="Article" />
</template>