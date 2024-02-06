<template>
  <div class="item">
    <i>
      <slot name="icon"></slot>
    </i>
    <h3>
      <slot name="heading"></slot>
    </h3>
  </div>
</template>
<style scoped>
.item {
  user-select: none;
  display: flex;
  align-items: center;
  /* width: 100px;
  height: 100px; */
  /* background-color: red */
}
i{
  color: var(--color-text);
  display: flex;
  place-items: center;
  place-content: center;
  width: 1.17rem;
  height: 1.17rem;
}
</style>