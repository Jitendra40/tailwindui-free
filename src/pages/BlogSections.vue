<script setup lang="ts">
import ThreeColumnSimple from "@/components/BlogSections/ThreeColumnSimple.vue"
import ThreeColumnCards from "@/components/BlogSections/ThreeColumnCards.vue"
import SingleColumn from "@/components/BlogSections/SingleColumn.vue"
import FeaturedPost from "@/components/BlogSections/FeaturedPost.vue"
import GridWithBackground from "@/components/BlogSections/GridWithBackground.vue"

import { useTOC } from '@/composables/useTOC'
import { onMounted } from 'vue'

const { setItems } = useTOC()

onMounted(() => {
  setItems([
    { id: 'three-column-simple', label: 'Three Column Simple' },
    { id: 'three-column-cards', label: 'Three Column Cards' },
    { id: 'single-column', label: 'Single Column' },
    { id: 'featured-post', label: 'Featured Post' },
    { id: 'grid-with-background', label: 'Grid With Background' },
  ])
})
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Blog Sections</h1>
      <p class="text-gray-500">Layouts for displaying blog posts and articles.</p>
    </div>

    <div class="grid gap-10">
      <div id="three-column-simple" class="scroll-mt-24">
        <ThreeColumnSimple />
      </div>
      <div id="three-column-cards" class="scroll-mt-24">
        <ThreeColumnCards />
      </div>
      <div id="single-column" class="scroll-mt-24">
        <SingleColumn />
      </div>
      <div id="featured-post" class="scroll-mt-24">
        <FeaturedPost />
      </div>
      <div id="grid-with-background" class="scroll-mt-24">
        <GridWithBackground />
      </div>
    </div>
  </div>
</template>
