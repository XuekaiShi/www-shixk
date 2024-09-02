<template>
  <div class="item">
    <li>
      <slot name="icon"></slot>
    </li>
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
  font-family:'Courier New', Courier, monospace;
  /* background-color: red */
}

span{
  margin-left: 0.2em;
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
}</style>