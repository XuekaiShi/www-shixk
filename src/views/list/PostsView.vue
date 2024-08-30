<script setup lang="ts">
import ListHeader from '@/components/list/ListHeader.vue';
import List from '@/components/list/List.vue';
import Affix from '@/components/Affix.vue';
</script>
<template>
  <div class="list-view">
    <ListHeader></ListHeader>
    <List></List>
    <!-- <Affix></Affix> -->
  </div>
</template>
<style scoped>
.list-view {
  width: 100%;
  position: relative;
}
</style>