<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="w-full max-w-2xl mx-auto space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
  <div class="space-y-1">
    <h3 class="text-lg font-medium leading-6 text-gray-900">Project Profile</h3>
    <p class="max-w-xl text-sm text-gray-500">Manage your project settings and team members.</p>
  </div>
  
  <div class="relative">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-gray-300"></div>
      </div>
      <div class="relative flex justify-start">
        <span class="bg-white pr-2 text-sm text-gray-500">General</span>
      </div>
  </div>

  <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
    <div class="sm:col-span-3">
       <div class="h-8 bg-gray-50 rounded border border-gray-200 w-full"></div>
    </div>
    <div class="sm:col-span-3">
       <div class="h-8 bg-gray-50 rounded border border-gray-200 w-full"></div>
    </div>
  </div>
  
  <div class="relative">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-gray-300"></div>
      </div>
      <div class="relative flex justify-center">
        <span class="bg-white px-2 text-sm text-gray-500">Team</span>
      </div>
  </div>
  
  <div class="space-y-4">
      <div class="h-10 bg-gray-50 rounded border border-gray-200 w-full"></div>
      <div class="h-10 bg-gray-50 rounded border border-gray-200 w-full"></div>
  </div>
  
  <div class="relative">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-dashed border-gray-300"></div>
      </div>
      <div class="relative flex justify-end">
        <button type="button" class="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <svg class="-ml-1 -mr-0.5 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
          Add Section
        </button>
      </div>
  </div>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Dividers"
    description="Structural dividers with text labels and mixed styles."
    :html-block="htmlBlock"
    default-viewport="full"
  >
    <div class="w-full max-w-2xl mx-auto space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div class="space-y-1">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Project Profile</h3>
        <p class="max-w-xl text-sm text-gray-500">Manage your project settings and team members.</p>
      </div>
      
      <div class="relative">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-start">
            <span class="bg-white pr-2 text-sm text-gray-500">General</span>
          </div>
      </div>

      <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
        <div class="sm:col-span-3">
           <div class="h-8 bg-gray-50 rounded border border-gray-200 w-full"></div>
        </div>
        <div class="sm:col-span-3">
           <div class="h-8 bg-gray-50 rounded border border-gray-200 w-full"></div>
        </div>
      </div>
      
      <div class="relative">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center">
            <span class="bg-white px-2 text-sm text-gray-500">Team</span>
          </div>
      </div>
      
      <div class="space-y-4">
          <div class="h-10 bg-gray-50 rounded border border-gray-200 w-full"></div>
          <div class="h-10 bg-gray-50 rounded border border-gray-200 w-full"></div>
      </div>
      
      <div class="relative">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
            <div class="w-full border-t border-dashed border-gray-300"></div>
          </div>
          <div class="relative flex justify-end">
            <button type="button" class="inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              <svg class="-ml-1 -mr-0.5 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
              Add Section
            </button>
          </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
