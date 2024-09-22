<script setup lang="ts">
defineProps(['isActive'])
</script>
<template>
  <div class="item">
    <li>
      <slot name="icon"></slot>
    </li>
    <span :class="{ active: isActive }">
      <slot name="heading"></slot>
    </span>
  </div>
</template>
<style scoped>
.item {
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  font-family: 'Courier New', Courier, monospace;
  /* background-color: red */
}

span {
  margin-left: 0.2em;
  background: linear-gradient(to right, var(--color-text), var(--color-text)) no-repeat right bottom;
  background-size: 0 1px;
  transition: background-size 0.3s ease-in-out;
}
.active {
  background-size: 100% 1px;
}

.item:hover span {
  background-position-x: left;
  background-size: 100% 1px;
}

li {
  color: var(--color-text);
  display: flex;
  place-items: center;
  place-content: center;
  width: 1em;
  height: 1em;
}

@media (max-width: 720px) {
  span {
    display: none;
  }
}
</style>