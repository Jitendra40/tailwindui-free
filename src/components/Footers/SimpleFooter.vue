<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<footer class="bg-white/95 border-t border-gray-100">
  <div class="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-6 sm:flex-row sm:justify-between">
    <div class="flex items-center gap-2 text-sm font-semibold text-gray-900">
      <svg class="h-7 w-7 text-indigo-600" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="6" width="20" height="20" rx="5" fill="currentColor" fill-opacity="0.12"/>
        <path d="M12 16h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M16 12v8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <span>Northwind</span>
    </div>
    <div class="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-gray-600">
      <a href="#" class="hover:text-indigo-600">Terms</a>
      <a href="#" class="hover:text-indigo-600">Privacy</a>
      <a href="#" class="hover:text-indigo-600">Security</a>
      <a href="#" class="hover:text-indigo-600">Status</a>
    </div>
    <p class="text-center text-xs text-gray-500">&copy; 2025 Northwind. All rights reserved.</p>
  </div>
</footer>
`
</script>

<template>
  <PreviewWrapper title="Compact Footer" description="Tight footer with essentials only." :html-block="htmlBlock">
    <footer class="bg-white/95 border-t border-gray-100">
      <div class="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-6 sm:flex-row sm:justify-between">
        <div class="flex items-center gap-2 text-sm font-semibold text-gray-900">
          <svg class="h-7 w-7 text-indigo-600" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect x="6" y="6" width="20" height="20" rx="5" fill="currentColor" fill-opacity="0.12"/>
            <path d="M12 16h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            <path d="M16 12v8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span>Northwind</span>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-gray-600">
          <a href="#" class="hover:text-indigo-600">Terms</a>
          <a href="#" class="hover:text-indigo-600">Privacy</a>
          <a href="#" class="hover:text-indigo-600">Security</a>
          <a href="#" class="hover:text-indigo-600">Status</a>
        </div>
        <p class="text-center text-xs text-gray-500">&copy; 2025 Northwind. All rights reserved.</p>
      </div>
    </footer>
  </PreviewWrapper>
</template>
