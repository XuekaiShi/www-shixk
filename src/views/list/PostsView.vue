<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import ListHeader from '@/components/list/ListHeader.vue';
import List from '@/components/list/List.vue';
import Affix from '@/components/Affix.vue';
import { useListStore } from '@/stores/listState';
import { ListCategory } from '@/types/list.d';
import { list } from '@/views/articles/list'

const listStore = useListStore();

const listAll = list
const listBlogs = list.filter((item) => item.category === ListCategory.Blogs)
const listNotes = list.filter((item) => item.category === ListCategory.Notes)
const listMore = list.filter((item) => item.category !== ListCategory.Blogs && item.category !== ListCategory.Notes)

const listPosition = ref(0)
const transformX = computed(() => listPosition.value + '%')

const changePosition = () => {
  if (listStore.ListState === ListCategory.All) {
    listPosition.value = 0
  } else if (listStore.ListState === ListCategory.Blogs) {
    listPosition.value = -25
  } else if (listStore.ListState === ListCategory.Notes) {
    listPosition.value = -50
  } else if (listStore.ListState === ListCategory.More) {
    listPosition.value = -75
  }
}
watch(listStore, changePosition, { immediate: true })

</script>
<template>
  <div class="list-view">
    <!-- <ListHeader @change-tab="toggleTrans"></ListHeader> -->
    <ListHeader></ListHeader>
    <div class="carousel">
      <div class="carousel-inner">
        <List :list="listAll"></List>
        <List :list="listBlogs"></List>
        <List :list="listNotes"></List>
        <List :list="listMore"></List>
      </div>
    </div>
    <!-- <Affix></Affix> -->
  </div>
</template>

<style scoped>
.list-view {
  width: 100%;
  position: relative;
}

.carousel {
  width: 100%;
  overflow: hidden;
  min-height: calc(100vh - var(--app-padding) * 2 - 8rem);
  border-bottom: 1.5px solid var(--color-text);
  margin-bottom: var(--app-padding);
}

.carousel-inner {
  width: 400%;
  display: flex;
  transform: translateX(v-bind(transformX));
  transition: all 0.8s ease-in-out;
}

/* .slide-fade-enter-active {
  transition: all 1s ease-in;
}

.slide-fade-leave-active {
  transition: all 1s ease-out;
}

.slide-fade-enter-from {
  transform: translateX(50px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-50px);
  opacity: 0.5;
} */
</style>