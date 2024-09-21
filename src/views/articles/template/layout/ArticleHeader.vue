<template>
  <header>
    <h1>
      <slot name="title">正在加载...</slot>
    </h1>
    <div id="info">
      <p>
        Author:
        <slot name="author">shixuekai</slot>
      </p>
      <p class="line">
        <slot name="date"></slot>
      </p>
      <p>
        <slot name="catagory"></slot>
      </p>
      <p>
        <slot name="tags"></slot>
      </p>
    </div>
  </header>
</template>

<style scoped>
header {
  --article-header-gap: 0.5rem;
  width: 100%;
  /* margin-bottom: 1rem; */
  border-bottom: 1px solid var(--color-text);
  padding: var(--article-header-gap);
  /* background-color: aqua; */
}

h1 {
  font-weight: bold;
}

#info {
  display: flex;
  margin-top: var(--article-header-gap);
  color: var(--color-info-2);
  /* background-color: aquamarine; */
}

#info p {
  margin-right: var(--article-header-gap);
  /* background-color: blueviolet; */
}
#info .line {
  border-right: 0.3px solid var(--color-info-1);
  padding-right: var(--article-header-gap);
}
</style>