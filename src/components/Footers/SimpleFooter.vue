<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<footer class="bg-white/95 border-t border-gray-100">
  <div class="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-6 sm:flex-row sm:justify-between">
    <div class="flex items-center gap-2 text-sm font-semibold text-gray-900">
  
      <span>Dummy Logo</span>
    </div>
    <div class="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-gray-600">
      <a href="javascript:void(0)" class="hover:text-indigo-600">Terms</a>
      <a href="javascript:void(0)" class="hover:text-indigo-600">Privacy</a>
      <a href="javascript:void(0)" class="hover:text-indigo-600">Security</a>
      <a href="javascript:void(0)" class="hover:text-indigo-600">Status</a>
    </div>
    <p class="text-center text-xs text-gray-500">&copy; 2025. All rights reserved.</p>
  </div>
</footer>
`
</script>

<template>
  <PreviewWrapper title="Compact Footer" description="Tight footer with essentials only." :html-block="htmlBlock">

  </PreviewWrapper>
</template>
