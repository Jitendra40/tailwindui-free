<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex flex-col gap-12 p-8 min-h-[400px]">
  
  <!-- Row 1: Trigger Variants -->
  <div>
      <h3 class="text-sm font-medium text-gray-500 mb-4">Triggers</h3>
      <div class="flex flex-wrap items-center gap-4">
        <!-- Compact Standard -->
        <button type="button" class="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Filter
            <svg class="-mr-0.5 h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
        </button>

        <!-- Compact Active with Badge -->
        <button type="button" class="inline-flex items-center gap-x-1.5 rounded-md bg-white pl-3 pr-2 py-1.5 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            <svg class="-ml-0.5 h-3.5 w-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
            </svg>
            Status
            <span class="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-100 text-[10px] text-indigo-600">2</span>
        </button>

        <!-- Compact Ghost -->
        <button type="button" class="inline-flex items-center gap-x-1.5 rounded-md px-3 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-100 transition-colors">
            Date Range
            <svg class="-mr-0.5 h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
        </button>
      </div>
  </div>

  <!-- Row 2: Open Menu Preview -->
  <div>
      <h3 class="text-sm font-medium text-gray-500 mb-4">Dropdown State</h3>
      <div class="relative w-56 inline-block text-left">
        <!-- Trigger (Visual only) -->
        <button type="button" class="mb-2 inline-flex w-full items-center justify-between gap-x-1.5 rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            <span>Sort By: <span class="text-indigo-600">Newest First</span></span>
            <svg class="-mr-0.5 h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
        </button>

        <!-- Dropdown Panel -->
        <div class="relative z-10 w-full origin-top-right divide-y divide-gray-100 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div class="px-3 py-2 bg-gray-50/50 rounded-t-lg">
                <p class="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Sort options</p>
            </div>
            <div class="py-1">
            <a href="javascript:void(0)" class="group flex items-center px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                <svg class="mr-3 h-4 w-4 text-gray-400 group-hover:text-gray-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
                </svg>
                Most Popular
            </a>
            <a href="javascript:void(0)" class="group flex items-center bg-indigo-50/50 px-4 py-2 text-xs text-indigo-700 font-medium border-l-2 border-indigo-600">
                <svg class="mr-3 h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                Newest First
                <svg class="ml-auto h-4 w-4 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
            </a>
            <a href="javascript:void(0)" class="group flex items-center px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                <svg class="mr-3 h-4 w-4 text-gray-400 group-hover:text-gray-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Price: Low to High
            </a>
            </div>
            <div class="py-1 border-t border-gray-100">
                <a href="javascript:void(0)" class="flex px-4 py-2 text-xs text-red-600 hover:bg-red-50">
                    <span class="ml-7">Reset Filters</span>
                </a>
            </div>
        </div>
      </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper 
    title="Compact Dropdown Filters" 
    description="Space-efficient dropdown menus with distinct trigger states and rich menu items." 
    :html-block="htmlBlock"
    default-viewport="full"
  >
  </PreviewWrapper>
</template>
