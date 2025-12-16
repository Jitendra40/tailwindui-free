<script setup lang="ts">
import SimpleReview from "@/components/Reviews/SimpleReview.vue"
import GridReviews from "@/components/Reviews/GridReviews.vue"
import SideBySide from "@/components/Reviews/SideBySide.vue"
import DarkReview from "@/components/Reviews/DarkReview.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'simple', label: 'Compact Single' },
    { id: 'grid', label: 'Compact Grid' },
    { id: 'side-by-side', label: 'Compact List' },
    { id: 'dark', label: 'Dark Social Post' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Reviews & Testimonials</h1>
      <p class="text-gray-500">Social proof sections.</p>
    </div>

    <div class="grid gap-10">
      <div id="simple" class="scroll-mt-24">
        <SimpleReview />
      </div>
      <div id="grid" class="scroll-mt-24">
        <GridReviews />
      </div>
      <div id="side-by-side" class="scroll-mt-24">
        <SideBySide />
      </div>
      <div id="dark" class="scroll-mt-24">
        <DarkReview />
      </div>
    </div>
  </div>
</template>
