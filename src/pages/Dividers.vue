<script setup lang="ts">
import DividersBase from "@/components/Dividers/Base.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'base', label: 'Base Dividers' },
  ])
})
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-1">
      <h1 class="text-lg font-semibold">Dividers</h1>
      <p class="text-sm text-muted-foreground">Horizontal rules for separating content sections.</p>
    </div>
    <div class="space-y-3">
      <div id="base" class="scroll-mt-24">
        <DividersBase />
      </div>
    </div>
  </div>
</template>
