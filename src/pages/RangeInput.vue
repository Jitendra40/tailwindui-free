<script setup lang="ts">
import SimpleRange from "@/components/RangeInput/SimpleRange.vue"
import StepRange from "@/components/RangeInput/StepRange.vue"
import TickRange from "@/components/RangeInput/TickRange.vue"
import DualRange from "@/components/RangeInput/DualRange.vue"
import VolumeRange from "@/components/RangeInput/VolumeRange.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'simple', label: 'Simple Range' },
    { id: 'step', label: 'Step Range' },
    { id: 'tick', label: 'Tick Range' },
    { id: 'dual', label: 'Dual Range' },
    { id: 'volume', label: 'Volume Range' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Range Input</h1>
      <p class="text-gray-500">Sliders for selecting a value from a range.</p>
    </div>

    <div class="grid gap-10">
      <div id="simple" class="scroll-mt-24">
        <SimpleRange />
      </div>
      <div id="step" class="scroll-mt-24">
        <StepRange />
      </div>
      <div id="tick" class="scroll-mt-24">
        <TickRange />
      </div>
      <div id="dual" class="scroll-mt-24">
        <DualRange />
      </div>
      <div id="volume" class="scroll-mt-24">
        <VolumeRange />
      </div>
    </div>
  </div>
</template>
