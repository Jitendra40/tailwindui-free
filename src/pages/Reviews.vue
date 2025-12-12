<script setup lang="ts">
import SimpleReview from "@/components/Reviews/SimpleReview.vue"
import GridReviews from "@/components/Reviews/GridReviews.vue"
import SideBySide from "@/components/Reviews/SideBySide.vue"
import DarkReview from "@/components/Reviews/DarkReview.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Reviews & Testimonials</h1>
      <p class="text-gray-500">Social proof sections.</p>
    </div>

    <div class="grid gap-10">
      <SimpleReview />
      <GridReviews />
      <SideBySide />
      <DarkReview />
    </div>
  </div>
</template>
