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
  --img-size: 11rem;
  --header-margin: var(--homeview-gap);
  display: flex;
  place-items: center;
  padding: var(--header-margin);
  user-select: none;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid var(--color-info-1);
  padding-bottom: calc(var(--header-margin) / 2);
  transition: all 0.5s ease-in-out;
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
  --font-size-info: 1.17rem;
  display: flex;
  flex-direction: column;
  height: var(--img-size);
  justify-content: space-between;
  align-items: end;
  margin-left: var(--header-margin);
}

@media (max-width: 720px) {
  header {
    /* background-color: rgb(240, 155, 255); */
    flex-direction: column;
    --img-size: 8rem;
    padding-bottom: calc(var(--header-margin) / 4);

  }

  .right {
    margin-left: 0;
    height: auto;
    /* background-color: antiquewhite; */
  }

}
</style>