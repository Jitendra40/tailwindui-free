<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="mx-auto max-w-lg divide-y divide-gray-100 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
  <details class="group">
    <summary class="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 marker:hidden hover:bg-gray-50/50 transition-colors">
      <h2 class="text-xs font-semibold uppercase tracking-wider text-gray-500">Project Settings</h2>
      <svg class="h-4 w-4 text-gray-500 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>
    <div class="px-4 pb-4">
      <p class="text-sm text-gray-600">Configure your project name, repository URL, and basic deployment settings here.</p>
    </div>
  </details>

  <details class="group" open>
    <summary class="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 marker:hidden hover:bg-gray-50/50 transition-colors">
      <h2 class="text-xs font-semibold uppercase tracking-wider text-indigo-600">Environment Variables</h2>
      <svg class="h-4 w-4 text-indigo-600 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>
    <div class="px-4 pb-4">
      <div class="space-y-3">
        <div class="flex items-center justify-between rounded-md bg-gray-50 px-3 py-2 text-xs">
          <span class="font-mono text-gray-600">API_KEY</span>
          <span class="font-mono text-gray-400">••••••••••••••••</span>
        </div>
        <div class="flex items-center justify-between rounded-md bg-gray-50 px-3 py-2 text-xs">
          <span class="font-mono text-gray-600">DATABASE_URL</span>
          <span class="font-mono text-gray-400">postgres://...</span>
        </div>
      </div>
    </div>
  </details>

  <details class="group">
    <summary class="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 marker:hidden hover:bg-gray-50/50 transition-colors">
      <h2 class="text-xs font-semibold uppercase tracking-wider text-gray-500">Integrations</h2>
      <svg class="h-4 w-4 text-gray-500 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>
    <div class="px-4 pb-4">
      <p class="text-sm text-gray-600">Connect third-party services like Slack, GitHub, or Jira to streamline your workflow.</p>
    </div>
  </details>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="Compact Accordion"
    description="Minimalist, dense accordion group perfect for settings sidebar or tool panels."
    :html-block="htmlBlock"
    default-viewport="full"
  />
</template>
