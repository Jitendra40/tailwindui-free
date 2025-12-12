<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="space-y-3">
  <label for="website" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground">Company Website</label>
  <div class="flex rounded-md">
    <span class="inline-flex items-center rounded-l-md border border-r-0 border-input bg-muted px-3 text-sm text-muted-foreground">http://</span>
    <input type="text" name="website" id="website" class="flex h-10 w-full min-w-0 rounded-none rounded-r-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="www.example.com" />
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="With Add-ons" description="Prefix and suffix elements." :html-block="htmlBlock">
    <div class="space-y-3">
      <label for="website" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-foreground">Company Website</label>
      <div class="flex rounded-md">
        <span class="inline-flex items-center rounded-l-md border border-r-0 border-input bg-muted px-3 text-sm text-muted-foreground">http://</span>
        <input type="text" name="website" id="website" class="flex h-10 w-full min-w-0 rounded-none rounded-r-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="www.example.com" />
      </div>
    </div>
  </PreviewWrapper>
</template>
