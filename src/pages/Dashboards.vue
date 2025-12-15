<script setup lang="ts">
import StackedLayout from "@/components/Dashboards/StackedLayout.vue"
import SidebarLayout from "@/components/Dashboards/SidebarLayout.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'sidebar', label: 'Sidebar Layout' },
    { id: 'stacked', label: 'Stacked Layout' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Dashboards</h1>
      <p class="text-gray-500">Application shells and dashboard layouts.</p>
    </div>

    <div class="space-y-8">
      <div id="sidebar" class="scroll-mt-24">
        <SidebarLayout />
      </div>
      <div id="stacked" class="scroll-mt-24">
        <StackedLayout />
      </div>
    </div>
  </div>
</template>
