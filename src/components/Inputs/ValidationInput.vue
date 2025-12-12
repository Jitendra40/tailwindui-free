<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="space-y-2">
  <label for="email-error" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-destructive">Email</label>
  <div class="relative">
    <input type="email" name="email-error" id="email-error" class="flex h-12 w-full rounded-lg border border-destructive bg-white px-4 py-3 pr-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="you@example.com" value="adamwathan" aria-invalid="true" aria-describedby="email-error-text" />
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
      <svg class="h-4 w-4 text-destructive" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" x2="12" y1="8" y2="12"/>
        <line x1="12" x2="12.01" y1="16" y2="16"/>
      </svg>
    </div>
  </div>
  <p class="text-sm font-medium text-destructive" id="email-error-text">Not a valid email address.</p>
</div>
`
</script>

<template>
  <PreviewWrapper title="With Validation" description="Error state visualization." :html-block="htmlBlock">
    <div class="space-y-2">
      <label for="email-error" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-destructive">Email</label>
      <div class="relative">
        <input type="email" name="email-error" id="email-error" class="flex h-12 w-full rounded-lg border border-destructive bg-white px-4 py-3 pr-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="you@example.com" value="adamwathan" aria-invalid="true" aria-describedby="email-error-text" />
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <svg class="h-4 w-4 text-destructive" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" x2="12" y1="8" y2="12"/>
            <line x1="12" x2="12.01" y1="16" y2="16"/>
          </svg>
        </div>
      </div>
      <p class="text-sm font-medium text-destructive" id="email-error-text">Not a valid email address.</p>
    </div>
  </PreviewWrapper>
</template>
