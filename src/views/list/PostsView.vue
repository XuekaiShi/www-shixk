<script setup lang="ts">
import { ref } from 'vue';
import ListHeader from '@/components/list/ListHeader.vue';
import List from '@/components/list/List.vue';
import Affix from '@/components/Affix.vue';

const isTrans = ref(false);
const toggleTrans = () => {
  console.log('toggleTrans');
  isTrans.value = true;
  console.log('isTrans', isTrans.value);
  setTimeout(() => {
    isTrans.value = false;
    console.log('isTrans time out', isTrans.value);
  }, 500);
};
</script>
<template>
  <div class="list-view">
    <button @click="toggleTrans">Transitionasdfasdf</button>
    <ListHeader @change-tab="toggleTrans"></ListHeader>
    <KeepAlive>
      <List :class="{ 'slide-fade-enter-active': isTrans, 'slide-fade-enter-from': isTrans }"></List>
    </KeepAlive>
    <!-- <Affix></Affix> -->
  </div>
</template>
<style scoped>
.list-view {
  width: 100%;
  position: relative;
}

.slide-fade-enter-active {
  transition: all 1s ease-in;
}

.slide-fade-leave-active {
  transition: all 0.1s linear;
}

.slide-fade-enter-from {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0.5;
}
</style>