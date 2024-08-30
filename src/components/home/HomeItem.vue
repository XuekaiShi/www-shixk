<template>
  <div class="item">
    <li>
      <slot name="icon"></slot>
    </li>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <p class="info">
        <slot name="details"></slot>
      </p>
    </div>
  </div>
</template>

<style scoped>
.item {
  padding: .3rem;
  user-select: none;
  /* background-color: aqua; */
  display: flex;
  align-items: center;
  transition: background-color 0.2s;
}

.item:hover {
  cursor: pointer;
  background-color: var(--color-background-soft);
}

.item:active {
  background-color: var(--color-background-mute);
}

li {
  display: flex;
  place-items: center;
  place-content: center;
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  /* background-color: aqua; */
}

.details {
  padding: 0.5rem;
}

h3 {
  height: 1.5rem;
}

p {
  height: 1rem;
  /* font-size: 1rem; */
}

.info {
  color: var(--color-info-1);
}</style>