<script setup lang="ts">
import SimpleCenteredNewsletter from "@/components/Newsletter/SimpleCenteredNewsletter.vue"
import CardNewsletter from "@/components/Newsletter/CardNewsletter.vue"
import SideBySideNewsletter from "@/components/Newsletter/SideBySideNewsletter.vue"
import DarkNewsletter from "@/components/Newsletter/DarkNewsletter.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'simple-centered', label: 'Simple Centered' },
    { id: 'card', label: 'Card Newsletter' },
    { id: 'side-by-side', label: 'Side By Side' },
    { id: 'dark', label: 'Dark Newsletter' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Newsletter Sections</h1>
      <p class="text-gray-500">Subscription forms.</p>
    </div>

    <div class="grid gap-10">
      <div id="simple-centered" class="scroll-mt-24">
        <SimpleCenteredNewsletter />
      </div>
      <div id="card" class="scroll-mt-24">
        <CardNewsletter />
      </div>
      <div id="side-by-side" class="scroll-mt-24">
        <SideBySideNewsletter />
      </div>
      <div id="dark" class="scroll-mt-24">
        <DarkNewsletter />
      </div>
    </div>
  </div>
</template>
