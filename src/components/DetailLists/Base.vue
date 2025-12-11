<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<dl class="grid grid-cols-1 gap-x-8 gap-y-3 rounded-lg border bg-white p-4 shadow-sm sm:grid-cols-2">
  <div>
    <dt class="text-xs uppercase tracking-wide text-gray-500">Customer</dt>
    <dd class="text-sm font-medium text-gray-900">Leslie Alexander</dd>
  </div>
  <div>
    <dt class="text-xs uppercase tracking-wide text-gray-500">Email</dt>
    <dd class="text-sm font-medium text-gray-900">leslie.alexander@example.com</dd>
  </div>
  <div>
    <dt class="text-xs uppercase tracking-wide text-gray-500">Plan</dt>
    <dd class="text-sm font-medium text-gray-900">Pro Annual</dd>
  </div>
  <div>
    <dt class="text-xs uppercase tracking-wide text-gray-500">Status</dt>
    <dd class="text-sm font-medium text-emerald-700">Active</dd>
  </div>
</dl>`
</script>

<template>
  <PreviewWrapper
    title="Detail Lists"
    description="Definition list layout for key-value pairs."
    :html-block="htmlBlock"
    default-viewport="full"
  >
    <dl class="grid grid-cols-1 gap-x-8 gap-y-3 rounded-lg border bg-white p-4 shadow-sm sm:grid-cols-2">
      <div>
        <dt class="text-xs uppercase tracking-wide text-gray-500">Customer</dt>
        <dd class="text-sm font-medium text-gray-900">Leslie Alexander</dd>
      </div>
      <div>
        <dt class="text-xs uppercase tracking-wide text-gray-500">Email</dt>
        <dd class="text-sm font-medium text-gray-900">leslie.alexander@example.com</dd>
      </div>
      <div>
        <dt class="text-xs uppercase tracking-wide text-gray-500">Plan</dt>
        <dd class="text-sm font-medium text-gray-900">Pro Annual</dd>
      </div>
      <div>
        <dt class="text-xs uppercase tracking-wide text-gray-500">Status</dt>
        <dd class="text-sm font-medium text-emerald-700">Active</dd>
      </div>
    </dl>
  </PreviewWrapper>
</template>
