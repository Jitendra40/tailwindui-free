<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<!-- Product Onboarding Wizard -->
<nav aria-label="Progress" class="max-w-xl mx-auto w-full">
  <ol role="list" class="overflow-hidden">
    
    <!-- Step 1: Complete -->
    <li class="relative pb-10">
      <div class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-indigo-600" aria-hidden="true"></div>
      <div class="relative flex items-start group">
        <span class="flex h-9 items-center" aria-hidden="true">
          <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-md bg-indigo-600 group-hover:bg-indigo-700 transition-colors shadow-sm">
            <svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </span>
        </span>
        <span class="ml-4 flex min-w-0 flex-col pt-0.5">
          <span class="text-sm font-semibold text-gray-900">Workspace Setup</span>
          <span class="text-sm text-gray-500 mt-1">Create your organization workspace.</span>
        </span>
      </div>
    </li>

    <!-- Step 2: Current -->
    <li class="relative pb-10">
      <div class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></div>
      <div class="relative flex items-start group cursor-pointer">
        <span class="flex h-9 items-center" aria-hidden="true">
          <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-md border-2 border-indigo-600 bg-white shadow-sm">
            <span class="h-2.5 w-2.5 rounded-full bg-indigo-600"></span>
          </span>
        </span>
        <span class="ml-4 flex min-w-0 flex-col pt-0.5">
          <span class="text-sm font-semibold text-gray-900 text-indigo-600">Invite Team</span>
          <span class="text-sm text-gray-500 mt-1">Add members to collaborate.</span>
        </span>
      </div>
    </li>

    <!-- Step 3: Upcoming -->
    <li class="relative pb-10">
      <div class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></div>
      <div class="relative flex items-start group cursor-pointer">
        <span class="flex h-9 items-center" aria-hidden="true">
          <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-md border-2 border-gray-300 bg-white group-hover:border-gray-400 transition-colors">
            <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-200"></span>
          </span>
        </span>
        <span class="ml-4 flex min-w-0 flex-col pt-0.5">
          <span class="text-sm font-medium text-gray-500">Configure Settings</span>
          <span class="text-sm text-gray-500 mt-1">Set up your preferences.</span>
        </span>
      </div>
    </li>

    <!-- Step 4: Upcoming -->
    <li class="relative pb-10">
      <div class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></div>
      <div class="relative flex items-start group cursor-pointer">
        <span class="flex h-9 items-center" aria-hidden="true">
          <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-md border-2 border-gray-300 bg-white group-hover:border-gray-400 transition-colors">
             <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-200"></span>
          </span>
        </span>
        <span class="ml-4 flex min-w-0 flex-col pt-0.5">
          <span class="text-sm font-medium text-gray-500">Connect Tools</span>
          <span class="text-sm text-gray-500 mt-1">Integrate with Slack, Jira, etc.</span>
        </span>
      </div>
    </li>

     <!-- Step 5: Upcoming -->
    <li class="relative">
      <div class="relative flex items-start group cursor-pointer">
        <span class="flex h-9 items-center" aria-hidden="true">
          <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-md border-2 border-gray-300 bg-white group-hover:border-gray-400 transition-colors">
             <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-200"></span>
          </span>
        </span>
        <span class="ml-4 flex min-w-0 flex-col pt-0.5">
          <span class="text-sm font-medium text-gray-500">Launch</span>
          <span class="text-sm text-gray-500 mt-1">Go live with your team.</span>
        </span>
      </div>
    </li>

  </ol>
</nav>
`
</script>

<template>
  <PreviewWrapper
    title="Product Onboarding Wizard"
    description="Checklist style for activation tasks."
    :html-block="htmlBlock"
  >
    <div v-html="htmlBlock"></div>
  </PreviewWrapper>
</template>
