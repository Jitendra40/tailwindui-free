<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
  <!-- Address Line 1 -->
  <div class="col-span-full">
    <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Address Line 1</label>
    <div class="relative">
      <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white">
    </div>
  </div>

  <!-- Address Line 2 -->
  <div class="col-span-full">
    <label for="street-address-2" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Address Line 2</label>
    <div class="relative">
      <input type="text" name="street-address-2" id="street-address-2" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white">
    </div>
  </div>

  <!-- City -->
  <div class="sm:col-span-2 sm:col-start-1">
    <label for="city" class="block text-sm font-medium leading-6 text-gray-900 mb-2">City</label>
    <div class="relative">
      <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white">
    </div>
  </div>

  <!-- State -->
  <div class="sm:col-span-2">
    <label for="region" class="block text-sm font-medium leading-6 text-gray-900 mb-2">State / Province</label>
    <div class="relative">
      <input type="text" name="region" id="region" autocomplete="address-level1" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white">
    </div>
  </div>

  <!-- Postal Code -->
  <div class="sm:col-span-2">
    <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900 mb-2">ZIP / Postal Code</label>
    <div class="relative">
      <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white">
    </div>
  </div>

   <!-- Country -->
  <div class="sm:col-span-3">
    <label for="country" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Country</label>
    <div class="relative">
      <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 bg-white transition-all hover:ring-gray-300">
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>
      </select>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="Address & Location"
    description="Fields for shipping and billing addresses."
    :html-block="htmlBlock"
  >
    <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <!-- Address Line 1 -->
      <div class="col-span-full">
        <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Address Line 1</label>
        <div class="relative">
          <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white">
        </div>
      </div>

      <!-- Address Line 2 -->
      <div class="col-span-full">
        <label for="street-address-2" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Address Line 2</label>
        <div class="relative">
          <input type="text" name="street-address-2" id="street-address-2" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white">
        </div>
      </div>

      <!-- City -->
      <div class="sm:col-span-2 sm:col-start-1">
        <label for="city" class="block text-sm font-medium leading-6 text-gray-900 mb-2">City</label>
        <div class="relative">
          <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white">
        </div>
      </div>

      <!-- State -->
      <div class="sm:col-span-2">
        <label for="region" class="block text-sm font-medium leading-6 text-gray-900 mb-2">State / Province</label>
        <div class="relative">
          <input type="text" name="region" id="region" autocomplete="address-level1" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white">
        </div>
      </div>

      <!-- Postal Code -->
      <div class="sm:col-span-2">
        <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900 mb-2">ZIP / Postal Code</label>
        <div class="relative">
          <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white">
        </div>
      </div>

       <!-- Country -->
      <div class="sm:col-span-3">
        <label for="country" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Country</label>
        <div class="relative">
          <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 bg-white transition-all hover:ring-gray-300">
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
