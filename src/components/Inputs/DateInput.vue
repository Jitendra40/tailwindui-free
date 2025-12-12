<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="grid grid-cols-2 gap-4">
  <div class="space-y-2">
    <label for="date" class="text-sm font-medium leading-none text-foreground">Date</label>
    <div class="relative">
      <input type="date" id="date" class="flex h-12 w-full rounded-lg border border-input bg-white px-4 py-3 text-sm text-foreground shadow-none placeholder:text-muted-foreground hover:border-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200" />
    </div>
  </div>
  <div class="space-y-2">
    <label for="time" class="text-sm font-medium leading-none text-foreground">Time</label>
    <div class="relative">
      <input type="time" id="time" class="flex h-12 w-full rounded-lg border border-input bg-white px-4 py-3 text-sm text-foreground shadow-none placeholder:text-muted-foreground hover:border-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200" />
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Date & Time" description="Split picker for precise scheduling." :html-block="htmlBlock">
    <div class="grid grid-cols-2 gap-4">
      <div class="space-y-2">
        <label for="date" class="text-sm font-medium leading-none text-foreground">Date</label>
        <div class="relative">
          <input type="date" id="date" class="flex h-12 w-full rounded-lg border border-input bg-white px-4 py-3 text-sm text-foreground shadow-none placeholder:text-muted-foreground hover:border-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200" />
        </div>
      </div>
      <div class="space-y-2">
        <label for="time" class="text-sm font-medium leading-none text-foreground">Time</label>
        <div class="relative">
          <input type="time" id="time" class="flex h-12 w-full rounded-lg border border-input bg-white px-4 py-3 text-sm text-foreground shadow-none placeholder:text-muted-foreground hover:border-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200" />
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
