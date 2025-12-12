<script setup lang="ts">
import SimpleFooter from "@/components/Footers/SimpleFooter.vue"
import LargeFooter from "@/components/Footers/LargeFooter.vue"
import FourColumnNewsletter from "@/components/Footers/FourColumnNewsletter.vue"
import DarkFooter from "@/components/Footers/DarkFooter.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Footers</h1>
      <p class="text-gray-500">Page footers.</p>
    </div>

    <div class="grid gap-10">
      <SimpleFooter />
      <LargeFooter />
      <FourColumnNewsletter />
      <DarkFooter />
    </div>
  </div>
</template>
