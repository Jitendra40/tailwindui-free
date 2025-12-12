<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="space-y-2">
  <label for="price" class="text-sm font-medium leading-none text-foreground">Price</label>
  <div class="relative flex h-12 w-full items-center rounded-xl border border-input bg-white p-1 hover:border-gray-400 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-200 shadow-sm/50">
    <input type="text" name="price" id="price" class="h-full flex-1 bg-transparent px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none" placeholder="0.00" />
    <div class="flex h-full items-center border-l border-input">
      <select id="currency" name="currency" class="h-full rounded-r-lg bg-transparent py-0 pl-3 pr-7 text-sm text-muted-foreground focus:ring-0 cursor-pointer hover:text-foreground transition-colors border-none bg-none outline-none">
        <option>USD</option>
        <option>CAD</option>
        <option>EUR</option>
      </select>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Input with Select" description="Text input with trailing currency selector." :html-block="htmlBlock">
    <div class="space-y-2">
      <label for="price" class="text-sm font-medium leading-none text-foreground">Price</label>
      <div class="relative flex h-12 w-full items-center rounded-xl border border-input bg-white p-1 hover:border-gray-400 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-200 shadow-sm/50">
        <input type="text" name="price" id="price" class="h-full flex-1 bg-transparent px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none" placeholder="0.00" />
        <div class="flex h-full items-center border-l border-input">
          <select id="currency" name="currency" class="h-full rounded-r-lg bg-transparent py-0 pl-3 pr-7 text-sm text-muted-foreground focus:ring-0 cursor-pointer hover:text-foreground transition-colors border-none bg-none outline-none">
            <option>USD</option>
            <option>CAD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
