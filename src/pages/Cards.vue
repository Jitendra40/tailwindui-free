<script setup lang="ts">
import SimpleCard from "@/components/Cards/SimpleCard.vue"
import HeaderFooterCard from "@/components/Cards/HeaderFooterCard.vue"
import ImageCard from "@/components/Cards/ImageCard.vue"
import HorizontalCard from "@/components/Cards/HorizontalCard.vue"
import InteractiveCard from "@/components/Cards/InteractiveCard.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Cards</h1>
      <p class="text-gray-500">Containers for related content and actions.</p>
    </div>

    <div class="grid gap-10">
      <SimpleCard />
      <HeaderFooterCard />
      <ImageCard />
      <HorizontalCard />
      <InteractiveCard />
    </div>
  </div>
</template>
