<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'

import DefaultLayout from './layouts/Default.vue'

const route = useRoute()
const layoutComponent = computed(() => {
  const layout = route.meta.layout as string | undefined
  return layout === 'Default' || !layout ? DefaultLayout : DefaultLayout
})
</script>

<template>
  <RouterView v-slot="{ Component }">
    <component :is="layoutComponent">
      <component :is="Component" />
    </component>
  </RouterView>
</template>