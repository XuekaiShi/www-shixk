<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'

const route = useRoute()

const routeChange = computed(() => {
  return route.fullPath
})

</script>

<template>
  <RouterView :key="routeChange"></RouterView>
</template>