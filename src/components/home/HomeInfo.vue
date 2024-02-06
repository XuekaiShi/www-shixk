<script setup lang="ts">
import IconGithub from '../icons/IconGithub.vue';
import IconBili from '../icons/IconBili.vue';
import IconDiscord from '../icons/IconDiscord.vue';
import IconEmai from '../icons/IconEmai.vue';
import IconRSS from '../icons/IconRSS.vue';
</script>

<template>
  <h1>Xuekai Shi</h1>
  <p class="cite">Do not go gentle into that good night.</p>
  <p class="intro">
    Do not go gentle into that good night. Do not go gentle into that good night. Do not go gentle into that good night
  </p>
  <nav>
    <i>
      <IconEmai></IconEmai>
    </i>
    <i title="github.com/XuekaiShi">
      <IconGithub></IconGithub>
    </i>
    <i>
    <IconBili></IconBili>
    </i>
    <i>
    <IconDiscord></IconDiscord>
    </i>
    <i>
    <IconRSS></IconRSS>
    </i>
    <!-- <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink> -->
  </nav>
</template>

<style scoped>
h1 {
  font-size: 3.6rem;
}

p {
  font-size: var(--font-size-info);
  margin-top: calc(var(--header-margin) / 4);
  margin-bottom: calc(var(--header-margin) / 4);
}

.cite {
  color: var(--color-info-1);
  font-style: italic;
}

.intro {
  overflow: hidden;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
  text-align-last: right;
}

nav {
  display: flex;
  font-size: var(--font-size-info);
  margin-top: calc(var(--header-margin) / 4);
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: var(--font-size-info);
  height: var(--font-size-info);
  margin-right: calc(var(--header-margin) / 4);
  margin-left: calc(var(--header-margin) / 4);
}

i:last-of-type {
  margin-right: 0;
}

i:hover {
  cursor: pointer;
}

@media (max-width: 720px) {
  h1 {
    font-size: 2.6rem;
    margin: auto;
    margin-top: calc(var(--header-margin) / 2);
  }

  p {
    margin: calc(var(--header-margin) / 4) auto;
  }

  .intro{
    display: none;
  }

  nav {
    margin: calc(var(--header-margin) / 4) auto calc(var(--header-margin) / 2) auto;
  }
}

/* nav {
  width: 100%;
  padding: 2rem;
  display: grid;
  grid-template-columns: auto max-content;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;

}

nav a:first-of-type {
  border: 0;
} */</style>