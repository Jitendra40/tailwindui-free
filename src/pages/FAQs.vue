<script setup lang="ts">
import SimpleFAQ from "@/components/FAQs/SimpleFAQ.vue"
import TwoColumnFAQ from "@/components/FAQs/TwoColumnFAQ.vue"
import OffsetFAQ from "@/components/FAQs/OffsetFAQ.vue"
import DarkFAQ from "@/components/FAQs/DarkFAQ.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'simple', label: 'Simple FAQ' },
    { id: 'two-column', label: 'Two Column FAQ' },
    { id: 'offset', label: 'Offset FAQ' },
    { id: 'dark', label: 'Dark FAQ' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">FAQ Sections</h1>
      <p class="text-gray-500">Frequently Asked Questions sections.</p>
    </div>

    <div class="grid gap-10">
      <div id="simple" class="scroll-mt-24">
        <SimpleFAQ />
      </div>
      <div id="two-column" class="scroll-mt-24">
        <TwoColumnFAQ />
      </div>
      <div id="offset" class="scroll-mt-24">
        <OffsetFAQ />
      </div>
      <div id="dark" class="scroll-mt-24">
        <DarkFAQ />
      </div>
    </div>
  </div>
</template>
