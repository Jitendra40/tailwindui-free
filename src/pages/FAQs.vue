<script setup lang="ts">
import SimpleFAQ from "@/components/FAQs/SimpleFAQ.vue"
import TwoColumnFAQ from "@/components/FAQs/TwoColumnFAQ.vue"
import OffsetFAQ from "@/components/FAQs/OffsetFAQ.vue"
import DarkFAQ from "@/components/FAQs/DarkFAQ.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">FAQ Sections</h1>
      <p class="text-gray-500">Frequently Asked Questions sections.</p>
    </div>

    <div class="grid gap-10">
      <SimpleFAQ />
      <TwoColumnFAQ />
      <OffsetFAQ />
      <DarkFAQ />
    </div>
  </div>
</template>
