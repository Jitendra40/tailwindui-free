<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div>
  <h3 class="text-sm font-medium text-gray-900">Color</h3>
  <fieldset class="mt-4">
    <legend class="sr-only">Choose a color</legend>
    <div class="flex items-center space-x-3">
      <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
        <input type="radio" name="color-choice" value="White" class="sr-only" aria-labelledby="color-choice-0-label" />
        <span id="color-choice-0-label" class="sr-only">White</span>
        <span aria-hidden="true" class="h-8 w-8 bg-white rounded-full border border-black border-opacity-10"></span>
      </label>
      <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400 ring-offset-1">
        <input type="radio" name="color-choice" value="Gray" class="sr-only" aria-labelledby="color-choice-1-label" />
        <span id="color-choice-1-label" class="sr-only">Gray</span>
        <span aria-hidden="true" class="h-8 w-8 bg-gray-200 rounded-full border border-black border-opacity-10"></span>
      </label>
      <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900 ring-2 ring-offset-1">
        <input type="radio" name="color-choice" value="Black" checked class="sr-only" aria-labelledby="color-choice-2-label" />
        <span id="color-choice-2-label" class="sr-only">Black</span>
        <span aria-hidden="true" class="h-8 w-8 bg-gray-900 rounded-full border border-black border-opacity-10"></span>
      </label>
    </div>
  </fieldset>
</div>
`
</script>

<template>
  <PreviewWrapper title="Color Picker" description="Visual color selection." :html-block="htmlBlock">
    <div>
      <h3 class="text-sm font-medium text-gray-900">Color</h3>
      <fieldset class="mt-4">
        <legend class="sr-only">Choose a color</legend>
        <div class="flex items-center space-x-3">
          <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
            <input type="radio" name="color-choice" value="White" class="sr-only" aria-labelledby="color-choice-0-label" />
            <span id="color-choice-0-label" class="sr-only">White</span>
            <span aria-hidden="true" class="h-8 w-8 bg-white rounded-full border border-black border-opacity-10"></span>
          </label>
          <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400 ring-offset-1">
            <input type="radio" name="color-choice" value="Gray" class="sr-only" aria-labelledby="color-choice-1-label" />
            <span id="color-choice-1-label" class="sr-only">Gray</span>
            <span aria-hidden="true" class="h-8 w-8 bg-gray-200 rounded-full border border-black border-opacity-10"></span>
          </label>
          <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-900 ring-2 ring-offset-1">
            <input type="radio" name="color-choice" value="Black" checked class="sr-only" aria-labelledby="color-choice-2-label" />
            <span id="color-choice-2-label" class="sr-only">Black</span>
            <span aria-hidden="true" class="h-8 w-8 bg-gray-900 rounded-full border border-black border-opacity-10"></span>
          </label>
        </div>
      </fieldset>
    </div>
  </PreviewWrapper>
</template>
