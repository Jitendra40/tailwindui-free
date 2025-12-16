<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div>
  <label class="text-sm font-medium text-gray-900">Select Size</label>
  <fieldset class="mt-3">
    <legend class="sr-only">Choose a size</legend>
    <div class="flex flex-wrap gap-3">
      <label class="group relative flex cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-all duration-200 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-600 has-[:checked]:text-white">
          <input type="radio" name="size" value="XS" class="sr-only" />
          <span>XS</span>
      </label>
      <label class="group relative flex cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-all duration-200 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-600 has-[:checked]:text-white">
          <input type="radio" name="size" value="S" class="sr-only" />
          <span>S</span>
      </label>
      <label class="group relative flex cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-all duration-200 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-600 has-[:checked]:text-white">
          <input type="radio" name="size" value="M" checked class="sr-only" />
          <span>M</span>
      </label>
      <label class="group relative flex cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-all duration-200 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-600 has-[:checked]:text-white">
          <input type="radio" name="size" value="L" class="sr-only" />
          <span>L</span>
      </label>
      <label class="group relative flex cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-all duration-200 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-600 has-[:checked]:text-white">
          <input type="radio" name="size" value="XL" class="sr-only" />
          <span>XL</span>
      </label>
    </div>
  </fieldset>
</div>
`
</script>

<template>
  <PreviewWrapper title="Inline Chips" description="Compact selection chips." :html-block="htmlBlock">

  </PreviewWrapper>
</template>
