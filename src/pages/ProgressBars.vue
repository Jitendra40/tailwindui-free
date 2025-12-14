<script setup lang="ts">
import SimpleProgress from "@/components/ProgressBars/SimpleProgress.vue"
import LabelProgress from "@/components/ProgressBars/LabelProgress.vue"
import StripedProgress from "@/components/ProgressBars/StripedProgress.vue"
import VerticalProgress from "@/components/ProgressBars/VerticalProgress.vue"
import CircleProgress from "@/components/ProgressBars/CircleProgress.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'simple', label: 'Simple Progress' },
    { id: 'label', label: 'Label Progress' },
    { id: 'striped', label: 'Striped Progress' },
    { id: 'vertical', label: 'Vertical Progress' },
    { id: 'circle', label: 'Circle Progress' },
  ])
})
</script>

<template>
  <div class="space-y-4">
    <div class="space-y-1">
      <h1 class="text-lg font-semibold">Progress Bars</h1>
      <p class="text-sm text-muted-foreground">Feedback for completion status of a task.</p>
    </div>

    <div class="space-y-8">
      <div id="simple" class="scroll-mt-24">
        <SimpleProgress />
      </div>
      <div id="label" class="scroll-mt-24 p-4 border rounded-lg bg-white shadow-sm">
        <LabelProgress />
      </div>
      <div id="striped" class="scroll-mt-24">
        <StripedProgress />
      </div>
      <div id="vertical" class="scroll-mt-24">
        <VerticalProgress />
      </div>
      <div id="circle" class="scroll-mt-24">
        <CircleProgress />
      </div>
    </div>
  </div>
</template>
