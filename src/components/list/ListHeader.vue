<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { posts } from '@/router';
import ProfilePhoto from '../ProfilePhoto.vue';
import ListHeaderItem from './ListHeaderItem.vue';
// import IconArchiveLine from '../icons/IconArchiveLine.vue';
import IconArchive from '../icons/IconArchive.vue';
// import IconGameLine from '../icons/IconGameLine.vue';
import IconGame from '../icons/IconGame.vue';
// import IconFileLine from '../icons/IconFileLine.vue';
import IconFile from '../icons/IconFile.vue';
// import IconTerminalLine from '../icons/IconTerminalLine.vue';
import IconTerminal from '../icons/IconTerminal.vue';
// import IconMoreLine from '../icons/IconMoreLine.vue';
import IconMore from '../icons/IconMore.vue';

const route = useRoute();
const router = useRouter();
const emit = defineEmits(['changeTab']);

const goTo = (path: string) => {
  if (path !== '/') {
    console.log('changeTab')
    emit('changeTab');
  }
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
            <!-- <IconTerminalLine /> -->
             <IconTerminal />
          </template>
          <template #heading>
            cd ..
          </template>
        </ListHeaderItem>
        <ListHeaderItem v-if="route.path !== '/' + posts.all" @click="goTo(posts.all)">
          <template #icon>
            <!-- <IconArchiveLine /> -->
             <IconArchive />
          </template>
          <template #heading>
            All
          </template>
        </ListHeaderItem>
        <ListHeaderItem v-if="route.path !== '/' + posts.blogs" @click="goTo(posts.blogs)">
          <template #icon>
            <!-- <IconGameLine /> -->
             <IconGame />
          </template>
          <template #heading>
            Blog
          </template>
        </ListHeaderItem>
        <ListHeaderItem v-if="route.path !== '/' + posts.notes" @click="goTo(posts.notes)">
          <template #icon>
            <!-- <IconFileLine /> -->
             <IconFile />
          </template>
          <template #heading>
            Notes
          </template>
        </ListHeaderItem>
        <ListHeaderItem v-if="route.path !== '/' + posts.more" @click="goTo(posts.more)">
          <template #icon>
            <!-- <IconMoreLine /> -->
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