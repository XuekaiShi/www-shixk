<script setup lang="ts">
import ArticleHeader from '@/views/articles/template/layout/ArticleHeader.vue'
import ArticleMain from '@/views/articles/template/layout/ArticleMain.vue'
import ArticleFooter from '@/views/articles/template/layout/ArticleFooter.vue'
import par from './typography/par.vue';
</script>

<template>
  <ArticleHeader>
    <template #title>文章标题Title</template>
    <template #author></template>
    <template #date>2023-01-01</template>
    <template #catagory>分类</template>
    <template #tags>标签</template>
  </ArticleHeader>
  <ArticleMain>
    <par>文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章，内容文章内容文章内容，文章内容文章内容文章内容。文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章，内容文章内容文章内容，文章内容文章内容文章内容。文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章，内容文章内容文章内容，文章内容文章内容文章内容。文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章，内容文章内容文章内容，文章内容文章内容文章内容。</par>
    <par>文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章，内容文章内容文章内容，文章内容文章内容文章内容。文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章，内容文章内容文章内容，文章内容文章内容文章内容。文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章，内容文章内容文章内容，文章内容文章内容文章内容。文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章，内容文章内容文章内容，文章内容文章内容文章内容。</par>
  </ArticleMain>
  <ArticleFooter />
</template>