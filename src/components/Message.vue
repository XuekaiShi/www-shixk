<script setup lang="ts">
import IconInfo from '@/components/icons/IconInfo.vue'
</script>
<template>
  <div class="message">
    <div class="icon">
      <IconInfo></IconInfo>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped>
.message {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-background-mute);
  padding: 0.8rem;
  border-radius: 0.5rem;
  font-style: italic;
}
.icon {
  margin-right: 0.5rem;
  width: 1rem;
  height: 1rem;
}
</style>