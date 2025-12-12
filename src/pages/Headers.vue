<script setup lang="ts">
import SimpleHeader from "@/components/Headers/SimpleHeader.vue"
import CenteredHeader from "@/components/Headers/CenteredHeader.vue"
import WithSearchHeader from "@/components/Headers/WithSearchHeader.vue"
import DarkHeader from "@/components/Headers/DarkHeader.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Headers</h1>
      <p class="text-gray-500">Navigation bars and page headers.</p>
    </div>

    <div class="grid gap-10">
      <SimpleHeader />
      <CenteredHeader />
      <WithSearchHeader />
      <DarkHeader />
    </div>
  </div>
</template>
