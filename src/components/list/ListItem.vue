<template>
  <div class="item">
    <div class="left">
      <span>
        <slot name="title"></slot>
      </span>
      <p class="abstract">
        <slot name="abstract"></slot>
      </p>
    </div>
    <div class="right">
      <!-- <p class="category">
        <slot name="category"></slot>
      </p> -->
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
  /* align-items: center; */
  justify-content: space-between;
  transition: background-color 0.1s ease-in-out;
  /* background-color: antiquewhite; */
}

.item .left span {
  font-size: 1.1rem;
  font-weight: bold;
  /* text-decoration: underline; */
  background: linear-gradient(to right, var(--color-text), var(--color-text)) no-repeat right bottom;
  background-size: 0 1.3px;
  transition: background-size 0.3s ease-in-out;
}
.item:hover .left span {
  background-position-x: left;
  background-size: 100% 1.3px;
}

.item:hover {
  background-color: var(--color-background-soft);
}

.item:active {
  background-color: var(--color-background-mute);
}

.left {
  width: 80%;
}

.right {
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-top: 0.3rem;
  /* width: 60%; */
}

.abstract {
  color: var(--color-info-1);
  font-style: italic;
  /* margin-top: 3rem; */
}

.date {
  color: var(--color-info-1);
}

.category {
  font-weight: bold;
  color: var(--color-info-1);
}

@media (max-width: 768px) {
  .right {
    display: none;
  }

  .left {
    width: 100%;
  }
}
</style>