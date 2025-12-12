<script setup lang="ts">
import SimpleLogoCloud from "@/components/LogoClouds/SimpleLogoCloud.vue"
import SplitLogoCloud from "@/components/LogoClouds/SplitLogoCloud.vue"
import DarkLogoCloud from "@/components/LogoClouds/DarkLogoCloud.vue"
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Logo Clouds</h1>
      <p class="text-gray-500">Trust sections with logos.</p>
    </div>

    <div class="grid gap-10">
      <SimpleLogoCloud />
      <SplitLogoCloud />
      <DarkLogoCloud />
    </div>
  </div>
</template>
