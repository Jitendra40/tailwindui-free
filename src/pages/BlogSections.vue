<script setup lang="ts">
import ThreeColumnSimple from "@/components/BlogSections/ThreeColumnSimple.vue"
import ThreeColumnCards from "@/components/BlogSections/ThreeColumnCards.vue"
import SingleColumn from "@/components/BlogSections/SingleColumn.vue"
import FeaturedPost from "@/components/BlogSections/FeaturedPost.vue"
import GridWithBackground from "@/components/BlogSections/GridWithBackground.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Blog Sections</h1>
      <p class="text-gray-500">Layouts for displaying blog posts and articles.</p>
    </div>

    <div class="grid gap-10">
      <ThreeColumnSimple />
      <ThreeColumnCards />
      <SingleColumn />
      <FeaturedPost />
      <GridWithBackground />
    </div>
  </div>
</template>
