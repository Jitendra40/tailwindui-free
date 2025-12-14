<script setup lang="ts">
import SimpleFooter from "@/components/Footers/SimpleFooter.vue"
import LargeFooter from "@/components/Footers/LargeFooter.vue"
import FourColumnNewsletter from "@/components/Footers/FourColumnNewsletter.vue"
import DarkFooter from "@/components/Footers/DarkFooter.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'simple', label: 'Simple Footer' },
    { id: 'large', label: 'Large Footer' },
    { id: 'four-column', label: 'Four Column Newsletter' },
    { id: 'dark', label: 'Dark Footer' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Footers</h1>
      <p class="text-gray-500">Page footers.</p>
    </div>

    <div class="grid gap-10">
      <div id="simple" class="scroll-mt-24">
        <SimpleFooter />
      </div>
      <div id="large" class="scroll-mt-24">
        <LargeFooter />
      </div>
      <div id="four-column" class="scroll-mt-24">
        <FourColumnNewsletter />
      </div>
      <div id="dark" class="scroll-mt-24">
        <DarkFooter />
      </div>
    </div>
  </div>
</template>
