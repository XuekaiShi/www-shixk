<script setup lang="ts">
import { isDark, toggleDark } from '@/composables/useTheme'
import { toggleLang } from '@/composables/useLocale'
import IconMoon from './icons/IconMoon.vue';
import IconSun from './icons/IconSun.vue';
import IconTranslate from './icons/IconTranslate.vue';
</script>
<template>
  <div class="affix">
    <button class="lang">
      <li>
        <IconTranslate @click="toggleLang()"></IconTranslate>
      </li>
    </button>
    <button class="theme" @click="toggleDark()">
      <li>
        <IconMoon v-if="!isDark"></IconMoon>
        <IconSun v-if="isDark"></IconSun>
      </li>
    </button>
  </div>
</template>
<style scoped>
.affix {
  --affix-width: 2rem;
  --affix-height: 4rem;
  z-index: 999;
  position: absolute;
  width: var(--affix-width);
  height: var(--affix-height);
  bottom: var(--homeview-gap);
  right: -3rem;
}

button {
  display: flex;
  place-items: center;
  place-content: center;
  width: var(--affix-width);
  height: calc(var(--affix-height) / 2);
  padding: 0;
  border: .5px solid var(--color-text);
}

button:hover {
  cursor: pointer;
  user-select: none;
}

.lang {
  color: var(--color-text);
  background-color: var(--color-background);
}

.theme {
  color: var(--color-background);
  background-color: var(--color-text);
}

li {
  display: flex;
  place-content: center;
  place-items: center;
  width: calc(var(--affix-width) * 0.618);
  height: calc(var(--affix-height) * 0.618);
  /* background-color: aqua; */
}

@media (max-width: 720px) {
  .affix {
    position: fixed;
    bottom: var(--app-padding);
    right: var(--app-padding);
  }
}
</style>