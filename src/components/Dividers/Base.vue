<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="w-full max-w-2xl mx-auto space-y-4 rounded-lg border bg-white p-4 shadow-sm">
  <div class="flex items-center justify-between text-sm font-medium text-gray-900">
    <span>Profile</span>
    <span class="text-xs text-gray-500">Edit</span>
  </div>
  <hr class="border-gray-200" />
  <div class="text-sm text-gray-700">
    Keep your profile information up to date to help your team identify you.
  </div>
  <div class="flex items-center justify-between text-sm font-medium text-gray-900">
    <span>Notifications</span>
    <span class="text-xs text-gray-500">Manage</span>
  </div>
  <hr class="border-dashed border-gray-200" />
  <div class="text-sm text-gray-700">
    Choose which channels to receive notifications.
  </div>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Dividers"
    description="Solid and dashed horizontal rules separating sections."
    :html-block="htmlBlock"
    default-viewport="full"
  >
    <div class="w-full max-w-2xl mx-auto space-y-4 rounded-lg border bg-white p-4 shadow-sm">
      <div class="flex items-center justify-between text-sm font-medium text-gray-900">
        <span>Profile</span>
        <span class="text-xs text-gray-500">Edit</span>
      </div>
      <hr class="border-gray-200" />
      <div class="text-sm text-gray-700">
        Keep your profile information up to date to help your team identify you.
      </div>
      <div class="flex items-center justify-between text-sm font-medium text-gray-900">
        <span>Notifications</span>
        <span class="text-xs text-gray-500">Manage</span>
      </div>
      <hr class="border-dashed border-gray-200" />
      <div class="text-sm text-gray-700">
        Choose which channels to receive notifications.
      </div>
    </div>
  </PreviewWrapper>
</template>
