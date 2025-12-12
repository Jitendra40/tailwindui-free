<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="rounded-xl bg-white shadow-sm shadow-black/5 border border-gray-200 sm:w-full sm:max-w-md">
  <div class="px-4 py-5 sm:p-6">
    <h3 class="text-base font-semibold leading-6 text-gray-900">Payment method</h3>
    <div class="mt-2 text-sm text-gray-500">
      <p>Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Simple Card" description="Basic container." :html-block="htmlBlock">
<div class="rounded-xl bg-white shadow-sm shadow-black/5 border border-gray-200 sm:w-full sm:max-w-md">
  <div class="px-4 py-5 sm:p-6">
    <h3 class="text-base font-semibold leading-6 text-gray-900">Payment method</h3>
    <div class="mt-2 text-sm text-gray-500">
      <p>Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
    </div>
  </div>
</div>
  </PreviewWrapper>
</template>
