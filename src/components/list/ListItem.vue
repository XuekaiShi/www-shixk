<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <span>
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
  /* background-color: red */
}

i {
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
}</style>