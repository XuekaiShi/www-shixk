<script setup lang="ts">
import IconGithub from '../icons/IconGithub.vue';
import IconBili from '../icons/IconBili.vue';
import IconDiscord from '../icons/IconDiscord.vue';
import IconEmai from '../icons/IconEmai.vue';
import IconRSS from '../icons/IconRSS.vue';
import { ref } from 'vue';
import { useClipboard } from '@vueuse/core'
import Message from '@/components/Message.vue'

const linkRef = ref('shixuekai2002@gmail.com')
const { copy, copied } = useClipboard({ source: linkRef });
const copyLink = (link: string) => {
  linkRef.value = link;
  copy();
}
</script>

<template>
  <Transition name="slide-fade">
    <Message v-if="copied">Copied</Message>
  </Transition>
  <h1>{{ $t('home.name') }}</h1>
  <p class="cite">{{ $t('home.cite') }}</p>
  <p class="intro">
    {{ $t('home.intro') }}
  </p>
  <nav>
    <li @click="copyLink('shixuekai2002@gmail.com')">
      <div class="icon">
        <IconEmai></IconEmai>
      </div>
      <div class="detail">
        <div>shixuekai2002@gmail.com</div>
      </div>
    </li>
    <li @click="copyLink('github.com/XuekaiShi')">
      <div class="icon">
        <IconGithub></IconGithub>
      </div>
      <div class="detail">
        <div>
          <a href="https://github.com/xuekaishi" target="_blank">github.com/XuekaiShi</a>
        </div>
      </div>
    </li>
    <li @click="copyLink('bilibili.com')">
      <div class="icon">
        <IconBili></IconBili>
      </div>
      <div class="detail">
        <div>bilibili.com</div>
      </div>
    </li>
    <li>
      <div class="icon">
        <IconDiscord></IconDiscord>
      </div>
      <div class="detail">
        <div>discord.com</div>
      </div>
    </li>
    <li>
      <div class="icon">
        <IconRSS></IconRSS>
      </div>
      <div class="detail">
        <div>rss</div>
      </div>
    </li>
  </nav>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px) translateX(-50%);
  opacity: 0;
}

h1 {
  user-select: text;
  font-size: 3.6rem;
}

p {
  font-size: var(--font-size-info);
  margin-top: calc(var(--header-margin) / 8);
  margin-bottom: calc(var(--header-margin) / 8);
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
  margin-top: calc(var(--header-margin) / 6);
}

li {
  display: flex;
  place-items: center;
  place-content: center;
  /* width: var(--font-size-info);
  height: var(--font-size-info); */
  margin-right: calc(var(--header-margin) / 4);
  margin-left: calc(var(--header-margin) / 4);
  transition: background-color .2s ease-in-out;
}

li .icon {
  width: var(--font-size-info);
  height: var(--font-size-info);
}

li .detail {
  user-select: text;
  font-size: 0.8rem;
  display: grid;
  grid-template-columns: 0fr;
  transition:
    grid-template-columns 500ms ease-in-out;
}

li .detail>div {
  grid-column: 1 / span 2;
  overflow: hidden;
}

li:last-of-type {
  margin-right: 0;
}

li:hover {
  cursor: pointer;
  background-color: var(--color-background-soft);
}

li:active {
  background-color: var(--color-background-mute);
  /* background-color: aqua; */
}

li:hover .detail {
  grid-template-columns: 1fr;
  padding: 0 0.2rem 0 0.2rem;
}

@media (max-width: 720px) {
  h1 {
    font-size: 2.6rem;
    margin: auto;
    margin-top: calc(var(--header-margin) / 2);
    margin-bottom: calc(var(--header-margin) / 8);
  }

  p {
    margin: calc(var(--header-margin) / 8) auto;
  }

  .intro {
    display: none;
  }

  nav {
    margin: calc(var(--header-margin) / 8) auto calc(var(--header-margin) / 8) auto;
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
} */
</style>