<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { posts } from '@/router';
import ProfilePhoto from '../ProfilePhoto.vue';
import ListHeaderItem from './ListHeaderItem.vue';
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
      <ProfilePhoto @click="goTo('/')"></ProfilePhoto>
    </div>
    <div class="right">
      <template v-if="route.path === '/' + posts.all">
        <h1>All</h1>
        <p class="info">Here is all my blogs and notes sorded by date.</p>
      </template>
      <template v-if="route.path === '/' + posts.blogs">
        <h1>Blog</h1>
        <p class="info">Here is all my blogs and notes sorded by date.</p>
      </template>
      <template v-if="route.path === '/' + posts.notes">
        <h1>Notes</h1>
        <p class="info">Here is all my blogs and notes sorded by date.</p>
      </template>
      <template v-if="route.path === '/' + posts.more">
        <h1>More</h1>
        <p class="info">Here is all my blogs and notes sorded by date.</p>
      </template>
      <div class="nav">
        <ListHeaderItem @click="goTo('/')">
          <template #icon>
            <IconTerminalLine />
          </template>
          <template #heading>
            cd ..
          </template>
        </ListHeaderItem>
        <ListHeaderItem v-if="route.path !== '/' + posts.all" @click="goTo(posts.all)">
          <template #icon>
            <IconArchiveLine />
          </template>
          <template #heading>
            All
          </template>
        </ListHeaderItem>
        <ListHeaderItem v-if="route.path !== '/' + posts.blogs" @click="goTo(posts.blogs)">
          <template #icon>
            <IconGameLine />
          </template>
          <template #heading>
            Blog
          </template>
        </ListHeaderItem>
        <ListHeaderItem v-if="route.path !== '/' + posts.notes" @click="goTo(posts.notes)">
          <template #icon>
            <IconFileLine />
          </template>
          <template #heading>
            Notes
          </template>
        </ListHeaderItem>
        <ListHeaderItem v-if="route.path !== '/' + posts.more" @click="goTo(posts.more)">
          <template #icon>
            <IconMoreLine />
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
  margin-bottom: 1rem;
  border-bottom: 2px solid var(--color-text);
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

.info {
  color: var(--color-info-1);
}

.nav {
  display: flex;
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