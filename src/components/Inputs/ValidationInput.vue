<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="space-y-6">
  <!-- Error State -->
  <div>
    <label for="email-error" class="block text-sm font-medium leading-none text-red-500 mb-2">Email (Error)</label>
    <div class="relative">
      <input type="email" id="email-error" class="block w-full rounded-xl border border-red-300 bg-white px-4 py-3 pr-10 text-sm text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all" value="invalid-email" aria-invalid="true" />
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <svg class="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
    <p class="mt-2 text-xs text-red-600">Please enter a valid email address.</p>
  </div>

  <!-- Success State -->
  <div>
    <label for="username-success" class="block text-sm font-medium leading-none text-green-700 mb-2">Username (Success)</label>
    <div class="relative">
      <input type="text" id="username-success" class="block w-full rounded-xl border border-green-300 bg-white px-4 py-3 pr-10 text-sm text-green-900 placeholder-green-300 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 transition-all" value="tailus_user" />
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <svg class="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
    <p class="mt-2 text-xs text-green-600">Username is available!</p>
  </div>

  <!-- Warning State -->
  <div>
    <label for="password-warning" class="block text-sm font-medium leading-none text-yellow-700 mb-2">Password (Warning)</label>
    <div class="relative">
      <input type="password" id="password-warning" class="block w-full rounded-xl border border-yellow-300 bg-white px-4 py-3 pr-10 text-sm text-yellow-900 placeholder-yellow-300 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500 transition-all" value="password123" />
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
        <svg class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
    <p class="mt-2 text-xs text-yellow-600">Password is weak. Consider adding numbers and symbols.</p>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Validation States" description="Form validation feedback states." :html-block="htmlBlock">

  </PreviewWrapper>
</template>
