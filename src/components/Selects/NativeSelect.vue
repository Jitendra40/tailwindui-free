<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div>
  <label for="location" class="block text-sm font-medium leading-6 text-gray-900">Location</label>
  <div class="mt-2 text-sm text-gray-900">
      <select id="location" name="location" class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
        <option>United States</option>
        <option selected>Canada</option>
        <option>Mexico</option>
      </select>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Native Select" description="Browser default styled select." :html-block="htmlBlock">
    <div>
      <label for="location" class="block text-sm font-medium leading-6 text-gray-900">Location</label>
      <div class="mt-2 text-sm text-gray-900">
          <select id="location" name="location" class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <option>United States</option>
            <option selected>Canada</option>
            <option>Mexico</option>
          </select>
      </div>
    </div>
  </PreviewWrapper>
</template>
