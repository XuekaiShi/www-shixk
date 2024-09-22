<script setup lang="ts">
// import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { StarportCarrier } from 'vue-starport'

// const route = useRoute()

// // const routeChange = computed(() => {
//   return route.fullPath
// })

</script>

<template>
  <StarportCarrier>
    <RouterView></RouterView>
  </StarportCarrier>
</template>