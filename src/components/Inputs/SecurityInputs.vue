<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
  <!-- Password -->
  <div class="sm:col-span-1">
    <label for="password" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Password</label>
    <div class="relative">
      <input type="password" name="password" id="password" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white" value="password123">
    </div>
  </div>

  <!-- Confirm Password -->
  <div class="sm:col-span-1">
    <label for="confirm-password" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Confirm Password</label>
    <div class="relative">
      <input type="password" name="confirm-password" id="confirm-password" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white" value="password123">
    </div>
  </div>

  <!-- Current Password -->
  <div class="sm:col-span-1">
    <label for="current-password" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Current Password</label>
    <div class="relative">
      <input type="password" name="current-password" id="current-password" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white">
    </div>
  </div>

  <!-- New Password -->
  <div class="sm:col-span-1">
    <label for="new-password" class="block text-sm font-medium leading-6 text-gray-900 mb-2">New Password</label>
    <div class="relative">
      <input type="password" name="new-password" id="new-password" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white">
    </div>
     <p class="mt-2 text-xs text-gray-500 font-medium">Must be at least 8 characters</p>
  </div>

  <!-- Security Answer -->
  <div class="sm:col-span-2">
    <label for="security-answer" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Security Answer</label>
    <div class="relative rounded-lg shadow-sm ring-1 ring-inset ring-gray-200 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 bg-white transition-all hover:ring-gray-300">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-gray-400">
             <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
           </svg>
        </div>
        <input type="text" name="security-answer" id="security-answer" class="block w-full rounded-lg border-0 py-3 pl-11 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Mother's maiden name">
      </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="Authentication & Security"
    description="Password fields and security questions."
    :html-block="htmlBlock"
  >
    <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
      <!-- Password -->
      <div class="sm:col-span-1">
        <label for="password" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Password</label>
        <div class="relative">
          <input type="password" name="password" id="password" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white" value="password123">
        </div>
      </div>

      <!-- Confirm Password -->
      <div class="sm:col-span-1">
        <label for="confirm-password" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Confirm Password</label>
        <div class="relative">
          <input type="password" name="confirm-password" id="confirm-password" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white" value="password123">
        </div>
      </div>

      <!-- Current Password -->
      <div class="sm:col-span-1">
        <label for="current-password" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Current Password</label>
        <div class="relative">
          <input type="password" name="current-password" id="current-password" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white">
        </div>
      </div>

      <!-- New Password -->
      <div class="sm:col-span-1">
        <label for="new-password" class="block text-sm font-medium leading-6 text-gray-900 mb-2">New Password</label>
        <div class="relative">
          <input type="password" name="new-password" id="new-password" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white">
        </div>
         <p class="mt-2 text-xs text-gray-500 font-medium">Must be at least 8 characters</p>
      </div>

      <!-- Security Answer -->
      <div class="sm:col-span-2">
        <label for="security-answer" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Security Answer</label>
        <div class="relative rounded-lg shadow-sm ring-1 ring-inset ring-gray-200 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 bg-white transition-all hover:ring-gray-300">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-gray-400">
                 <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
               </svg>
            </div>
            <input type="text" name="security-answer" id="security-answer" class="block w-full rounded-lg border-0 py-3 pl-11 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Mother's maiden name">
          </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
