<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="rounded-xl border border-gray-200 bg-white shadow-sm max-w-sm">
  <div class="border-b border-gray-100 p-4">
     <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
           <img class="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User Avatar">
           <div>
              <h3 class="text-sm font-semibold text-gray-900">Tom Cook</h3>
              <p class="text-xs text-gray-500">Administrator</p>
           </div>
        </div>
        <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
     </div>
  </div>
  
  <div class="p-4 space-y-4">
     <div>
        <div class="flex items-center justify-between text-xs mb-1">
           <span class="text-gray-500">Role Permissions</span>
           <span class="text-gray-900 font-medium">Full Access</span>
        </div>
        <div class="flex gap-1">
           <div class="h-1.5 w-full rounded-full bg-indigo-600"></div>
           <div class="h-1.5 w-full rounded-full bg-indigo-600"></div>
           <div class="h-1.5 w-full rounded-full bg-indigo-600"></div>
           <div class="h-1.5 w-full rounded-full bg-indigo-600"></div>
        </div>
     </div>
     
     <div class="grid grid-cols-2 gap-4">
        <div class="rounded-lg bg-gray-50 p-3">
           <p class="text-[10px] text-gray-400 uppercase font-semibold">Last Login</p>
           <p class="text-xs font-medium text-gray-900 mt-1">Today, 9:41 AM</p>
        </div>
        <div class="rounded-lg bg-gray-50 p-3">
           <p class="text-[10px] text-gray-400 uppercase font-semibold">Actions (24h)</p>
           <p class="text-xs font-medium text-gray-900 mt-1">45 Changes</p>
        </div>
     </div>
  </div>
  
  <div class="bg-gray-50 p-3 rounded-b-xl border-t border-gray-100 flex gap-2">
      <button class="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50">
        View Log
      </button>
      <button class="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50">
        Edit Role
      </button>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="Admin User Card"
    description="User management card showing role, status, and activity metrics."
    :html-block="htmlBlock"
  />
</template>
