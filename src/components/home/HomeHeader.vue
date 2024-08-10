<script setup lang="ts">
import HomeInfo from './HomeInfo.vue'
import ProfilePhoto from '../ProfilePhoto.vue';
</script>
<template>
  <header>
    <div class="left">
      <ProfilePhoto></ProfilePhoto>
    </div>
    <div class="right">
      <HomeInfo />
    </div>
  </header>
</template>

<style scoped>
header {
  /* background-color: rgb(240, 155, 255); */
  --img-size: 8rem;
  --header-margin: var(--homeview-gap);
  user-select: none;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--color-info-1);
}

.left {
  /* background-color: aqua; */
  display: flex;
}

img {
  width: var(--img-size);
  height: var(--img-size);
  border-radius: 50%;
  margin: 0 auto 0 auto;
}

.right {
  /* background-color: antiquewhite; */
  --font-size-info: 1.17rem;
  display: flex;
  flex-direction: column;
}
@media (min-width: 720px) {
  header {
    --img-size: 12rem;
    display: flex;
    place-items: center;
    padding: var(--header-margin);
    padding-bottom: calc( var(--header-margin) / 2 );
  }

  /* img {
    margin: var(--header-margin);
  } */

  .right {
    height: var(--img-size);
    justify-content: space-between;
    align-items: end;
    margin-left: var(--header-margin);
  }
}
</style>