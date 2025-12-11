<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div>
  <label class="text-base font-semibold text-gray-900">Size</label>
  <fieldset class="mt-4">
    <legend class="sr-only">Choose a size</legend>
    <div class="flex items-center space-x-3">
      <div class="flex items-center">
          <input id="size-xs" name="size" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
          <label for="size-xs" class="ml-2 block text-sm font-medium leading-6 text-gray-900">XS</label>
      </div>
      <div class="flex items-center">
          <input id="size-s" name="size" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
          <label for="size-s" class="ml-2 block text-sm font-medium leading-6 text-gray-900">S</label>
      </div>
      <div class="flex items-center">
          <input id="size-m" name="size" type="radio" checked class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
          <label for="size-m" class="ml-2 block text-sm font-medium leading-6 text-gray-900">M</label>
      </div>
      <div class="flex items-center">
          <input id="size-l" name="size" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
          <label for="size-l" class="ml-2 block text-sm font-medium leading-6 text-gray-900">L</label>
      </div>
       <div class="flex items-center">
          <input id="size-xl" name="size" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
          <label for="size-xl" class="ml-2 block text-sm font-medium leading-6 text-gray-900">XL</label>
      </div>
    </div>
  </fieldset>
</div>
`
</script>

<template>
<template>
  <PreviewWrapper title="Inline" description="Horizontal layout for compact spaces." :html-block="htmlBlock">
    <div>
      <label class="text-base font-semibold text-gray-900">Size</label>
      <fieldset class="mt-4">
        <legend class="sr-only">Choose a size</legend>
        <div class="flex items-center space-x-3">
          <div class="flex items-center">
              <input id="size-xs" name="size" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
              <label for="size-xs" class="ml-2 block text-sm font-medium leading-6 text-gray-900">XS</label>
          </div>
          <div class="flex items-center">
              <input id="size-s" name="size" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
              <label for="size-s" class="ml-2 block text-sm font-medium leading-6 text-gray-900">S</label>
          </div>
          <div class="flex items-center">
              <input id="size-m" name="size" type="radio" checked class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
              <label for="size-m" class="ml-2 block text-sm font-medium leading-6 text-gray-900">M</label>
          </div>
          <div class="flex items-center">
              <input id="size-l" name="size" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
              <label for="size-l" class="ml-2 block text-sm font-medium leading-6 text-gray-900">L</label>
          </div>
           <div class="flex items-center">
              <input id="size-xl" name="size" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
              <label for="size-xl" class="ml-2 block text-sm font-medium leading-6 text-gray-900">XL</label>
          </div>
        </div>
      </fieldset>
    </div>
  </PreviewWrapper>
</template>
</template>
