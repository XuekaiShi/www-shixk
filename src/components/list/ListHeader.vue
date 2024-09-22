<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import ProfilePhoto from '../ProfilePhoto.vue';
import ListHeaderItem from './ListHeaderItem.vue';
import IconArchive from '../icons/IconArchive.vue';
import IconGame from '../icons/IconGame.vue';
import IconFile from '../icons/IconFile.vue';
import IconTerminal from '../icons/IconTerminal.vue';
import IconMore from '../icons/IconMore.vue';
import { useListStore } from '@/stores/listState';
import { ListCategory } from '@/types/list.d';


const listStore = useListStore();
const router = useRouter();
const emit = defineEmits(['changeTab']);

const goTo = (path: ListCategory | '/') => {
  if (path !== '/') {
    // console.log('changeTab')
    emit('changeTab');
    listStore.ListState = path as ListCategory;
    console.log(listStore.ListState);
  } else {
    router.push(path);
  }
}

</script>
<template>
  <header>
    <div class="left">
      <ProfilePhoto @click="goTo('/')"></ProfilePhoto>
    </div>
    <div class="right">
      <template v-if="listStore.ListState === ListCategory.All">
        <h1>All</h1>
        <p class="info">Here is all my blogs and notes sorded by date.</p>
      </template>
      <template v-if="listStore.ListState === ListCategory.Blogs">
        <h1>Blogs</h1>
        <p class="info">Here is all my blogs sorded by date.</p>
      </template>
      <template v-if="listStore.ListState === ListCategory.Notes">
        <h1>Notes</h1>
        <p class="info">Here is all my notes sorded by date.</p>
      </template>
      <template v-if="listStore.ListState === ListCategory.More">
        <h1>More</h1>
        <p class="info">Here is all </p>
      </template>
      <div class="nav">
        <!-- <ListHeaderItem @click="goTo('/')">
          <template #icon>
            <IconTerminal />
          </template>
          <template #heading>
            cd ..
          </template>
        </ListHeaderItem> -->
        <ListHeaderItem @click="goTo(ListCategory.All)">
          <template #icon>
            <IconArchive />
          </template>
          <template #heading>
            All
          </template>
        </ListHeaderItem>
        <ListHeaderItem @click="goTo(ListCategory.Blogs)">
          <template #icon>
            <IconGame />
          </template>
          <template #heading>
            Blogs
          </template>
        </ListHeaderItem>
        <ListHeaderItem @click="goTo(ListCategory.Notes)">
          <template #icon>
            <IconFile />
          </template>
          <template #heading>
            Notes
          </template>
        </ListHeaderItem>
        <ListHeaderItem @click="goTo(ListCategory.More)">
          <template #icon>
            <IconMore />
          </template>
          <template #heading>
            More
          </template>
        </ListHeaderItem>
      </div>
    </div>
  </header>
</template>
<style scoped>
header {
  display: flex;
  place-items: center;
  --img-size: 6rem;
  --header-margin: 0.6rem;
  padding: var(--header-margin);
  margin-bottom: 0.6rem;
  border-bottom: 1.5px solid var(--color-text);
}

img {
  width: var(--img-size);
  height: var(--img-size);
  border-radius: 50%;
}

img:hover {
  cursor: pointer;
}

.right {
  height: var(--img-size);
  margin-left: calc(var(--header-margin) * 2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h1 {
  font-size: 2.6rem;
  margin-bottom: -0.3rem;
}

.info {
  color: var(--color-info-1);
}

.nav {
  display: flex;
  margin-top: 0.3rem;
}

.item {
  margin-left: var(--header-margin);
  margin-right: var(--header-margin);
}

.item:first-of-type {
  margin-left: 0;
}

.item:last-of-type {
  margin-right: 0;
}

@media (max-width: 720px) {
  header {
    padding: var(--header-margin) 0;
  }
}
</style>