<script setup lang="ts">
import BasicSkipLink from "@/components/SkipLink/BasicSkipLink.vue"
import SlideSkipLink from "@/components/SkipLink/SlideSkipLink.vue"
import FixedSkipLink from "@/components/SkipLink/FixedSkipLink.vue"
import GhostSkipLink from "@/components/SkipLink/GhostSkipLink.vue"
import ButtonSkipLink from "@/components/SkipLink/ButtonSkipLink.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'basic', label: 'Basic Pop-in' },
    { id: 'slide', label: 'Full Width Slide' },
    { id: 'fixed', label: 'Fixed Position' },
    { id: 'ghost', label: 'Ghost Style' },
    { id: 'button', label: 'Center Button' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Skip Link</h1>
      <p class="text-gray-500">Accessible navigation shortcuts for screen readers and keyboard users.</p>
      <p class="text-xs text-amber-600 font-medium mt-2">Note: Click inside the dashed boxes and press TAB to reveal the links.</p>
    </div>

    <div class="grid gap-10">
      <div id="basic" class="scroll-mt-24">
        <BasicSkipLink />
      </div>

      <div id="slide" class="scroll-mt-24">
        <SlideSkipLink />
      </div>

      <div id="fixed" class="scroll-mt-24">
        <FixedSkipLink />
      </div>

      <div id="ghost" class="scroll-mt-24">
        <GhostSkipLink />
      </div>

      <div id="button" class="scroll-mt-24">
        <ButtonSkipLink />
      </div>
    </div>
  </div>
</template>
