<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div>
  <label for="email-error" class="block text-sm font-medium leading-6 text-red-600">Email</label>
  <div class="relative mt-2 rounded-md shadow-sm">
    <input type="email" name="email-error" id="email-error" class="block w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" placeholder="you@example.com" value="adamwathan" aria-invalid="true" aria-describedby="email-error-text" />
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
      <svg class="h-5 w-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" x2="12" y1="8" y2="12"/>
      <line x1="12" x2="12.01" y1="16" y2="16"/>
    </svg>
    </div>
  </div>
  <p class="mt-2 text-sm text-red-600" id="email-error-text">Not a valid email address.</p>
</div>
`
</script>

<template>
  <PreviewWrapper title="With Validation" description="Error state visualization." :html-block="htmlBlock">
    <div>
      <label for="email-error" class="block text-sm font-medium leading-6 text-red-600">Email</label>
      <div class="relative mt-2 rounded-md shadow-sm">
        <input type="email" name="email-error" id="email-error" class="block w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" placeholder="you@example.com" value="adamwathan" aria-invalid="true" aria-describedby="email-error-text" />
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <svg class="h-5 w-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" x2="12" y1="8" y2="12"/>
          <line x1="12" x2="12.01" y1="16" y2="16"/>
        </svg>
        </div>
      </div>
      <p class="mt-2 text-sm text-red-600" id="email-error-text">Not a valid email address.</p>
    </div>
  </PreviewWrapper>
</template>
