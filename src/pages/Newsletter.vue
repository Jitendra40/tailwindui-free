<script setup lang="ts">
import SimpleCenteredNewsletter from "@/components/Newsletter/SimpleCenteredNewsletter.vue"
import CardNewsletter from "@/components/Newsletter/CardNewsletter.vue"
import SideBySideNewsletter from "@/components/Newsletter/SideBySideNewsletter.vue"
import DarkNewsletter from "@/components/Newsletter/DarkNewsletter.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Newsletter Sections</h1>
      <p class="text-gray-500">Subscription forms.</p>
    </div>

    <div class="grid gap-10">
      <SimpleCenteredNewsletter />
      <CardNewsletter />
      <SideBySideNewsletter />
      <DarkNewsletter />
    </div>
  </div>
</template>
