<template>
  <div class="item">
    <div class="left">
      <h2>
        <slot name="title"></slot>
      </h2>
      <p class="abstract">
        <slot name="abstract"></slot>
      </p>
    </div>
    <div class="right">
      <p class="category">
        <slot name="category"></slot>
      </p>
      <p class="date">
        <slot name="date"></slot>
      </p>
    </div>
  </div>
</template>

<style scoped>
.item {
  cursor: pointer;
  padding: 0.6rem;
  padding-bottom: 0.3rem;
  /* margin-bottom: 0.5rem; */
  border-bottom: 1.3px solid var(--color-background-mute);
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.3s ease-in-out;
  /* background-color: antiquewhite; */
}

.item:hover {
  background-color: var(--color-background-soft);
}

.item:active {
  background-color: var(--color-background-mute);
}

h2 {
  text-decoration: underline;
  font-size: 1.1rem;
  font-weight: bold;
}

.right {
  display: flex;
  flex-direction: column;
  align-items:end;
}

.abstract {
  color: var(--color-info-1);
  font-style: italic;
}

.date {
  color: var(--color-info-1);
}

.category {
  font-weight: bold;
  color: var(--color-info-1);
}
</style>