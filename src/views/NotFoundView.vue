<script setup lang="ts">
import { useRouter } from 'vue-router'
import IconTerminalLine from '@/components/icons/IconTerminalLine.vue';
const router = useRouter()
const goTo = (path: string) => {
  router.push(path)
}
</script>
<template>
  <h2>{{ $t('notfound.heading') }}</h2>
  <div class="item" @click="goTo('/')">
    <i>
      <IconTerminalLine />
    </i>
    <span>
      cd ..
    </span>
  </div>
</template>
<style scoped>
h2 {
  margin-bottom: 2rem;
}

.item {
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  /* background-color: red */
}

span {
  margin-left: 0.2em;
}

i {
  color: var(--color-text);
  display: flex;
  place-items: center;
  place-content: center;
  width: 1em;
  height: 1em;
}
</style>