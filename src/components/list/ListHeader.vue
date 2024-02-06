<script setup lang="ts">
import { useRoute,useRouter } from 'vue-router';
import ProfilePhoto from '../ProfilePhoto.vue';
import ListItem from './ListItem.vue';
import IconArchiveLine from '../icons/IconArchiveLine.vue';
import IconGameLine from '../icons/IconGameLine.vue';
import IconFileLine from '../icons/IconFileLine.vue';
import IconTerminalLine from '../icons/IconTerminalLine.vue';
import IconMoreLine from '../icons/IconMoreLine.vue';

const route = useRoute();
const router = useRouter();
const goTo = (path: string) => {
  router.push(path);
}

</script>
<template>
  <header>
    <div class="left">
      <ProfilePhoto></ProfilePhoto>
    </div>
    <div class="right">
      <h1 v-if="route.name === 'all'">All</h1>
      <h1 v-if="route.name === 'blog'">Blog</h1>
      <h1 v-if="route.name === 'notes'">Notes</h1>
      <h1 v-if="route.name === 'more'">More</h1>
      <div class="nav">
        <ListItem @click="goTo('/')">
          <template #icon>
            <IconTerminalLine />
          </template>
          <template #heading>
            cd ..
          </template>
        </ListItem>
        <ListItem v-if="route.name !== 'all'" @click="goTo('/all')">
          <template #icon>
            <IconArchiveLine />
          </template>
          <template #heading>
            All
          </template>
        </ListItem>
        <ListItem v-if="route.name !== 'blog'" @click="goTo('/blog')">
          <template #icon>
            <IconGameLine />
          </template>
          <template #heading>
            Blog
          </template>
        </ListItem>
        <ListItem v-if="route.name !== 'notes'" @click="goTo('/notes')">
          <template #icon>
            <IconFileLine />
          </template>
          <template #heading>
            Notes
          </template>
        </ListItem>
        <ListItem v-if="route.name !== 'more'" @click="goTo('/more')">
          <template #icon>
            <IconMoreLine />
          </template>
          <template #heading>
            More
          </template>
        </ListItem>
      </div>
    </div>
  </header>
</template>
<style scoped>
header {
  display: flex;
  place-items: center;
  border-bottom: 1px solid var(--color-info-1);
}

img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.nav{
  display: flex;

}
</style>