<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
  <!-- Card 1: Horizontal with Image -->
  <div class="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-900/5 sm:flex-row hover:shadow-md transition-shadow">
    <div class="relative h-48 sm:h-auto sm:w-48 flex-none">
      <img src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&q=80&w=400" alt="" class="absolute inset-0 h-full w-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent sm:bg-gradient-to-r"></div>
    </div>
    <div class="flex flex-1 flex-col justify-between p-6">
      <div>
        <div class="flex items-center gap-x-3">
          <h3 class="text-base font-semibold leading-6 text-gray-900">Quarterly Report</h3>
          <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">On Track</span>
        </div>
        <p class="mt-2 text-sm text-gray-500">Analysis of Q3 performance across all recurring revenue streams.</p>
      </div>
      <dl class="mt-4 grid grid-cols-2 gap-4 border-t border-gray-900/5 pt-4">
        <div>
          <dt class="text-xs font-semibold text-gray-400 uppercase">Revenue</dt>
          <dd class="mt-1 text-lg font-bold text-gray-900">$2.4M</dd>
        </div>
        <div>
          <dt class="text-xs font-semibold text-gray-400 uppercase">Growth</dt>
          <dd class="mt-1 text-lg font-bold text-green-600">+14%</dd>
        </div>
      </dl>
    </div>
  </div>

   <!-- Card 2: Vertical with Header Image -->
  <div class="group relative overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-900/5 hover:shadow-md transition-shadow">
    <div class="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-blue-600 to-indigo-600 p-4">
       <div class="flex justify-between items-start text-white">
          <span class="text-xs font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded">Beta</span>
          <svg class="h-5 w-5 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 5v14M5 12h14" stroke-width="2" stroke-linecap="round"/></svg>
       </div>
    </div>
    <div class="relative mt-12 mx-4 bg-white rounded-lg shadow ring-1 ring-gray-200 p-4">
       <h3 class="font-semibold text-gray-900">Server Capacity</h3>
       <div class="mt-4 space-y-3">
         <div>
            <div class="flex justify-between text-xs mb-1">
               <span class="text-gray-500">CPU Usage</span>
               <span class="font-medium text-gray-900">78%</span>
            </div>
            <div class="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
               <div class="bg-indigo-600 h-1.5 rounded-full" style="width: 78%"></div>
            </div>
         </div>
         <div>
            <div class="flex justify-between text-xs mb-1">
               <span class="text-gray-500">Memory</span>
               <span class="font-medium text-gray-900">42%</span>
            </div>
            <div class="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
               <div class="bg-purple-600 h-1.5 rounded-full" style="width: 42%"></div>
            </div>
         </div>
       </div>
    </div>
    <div class="px-6 py-4 pt-16 flex justify-between items-center bg-gray-50 border-t border-gray-100">
       <span class="text-xs text-gray-500">Last updated 5m ago</span>
       <button class="text-xs font-medium text-indigo-600 hover:text-indigo-500 transition-colors">View Logs &rarr;</button>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper 
    title="Mixed Media Stats" 
    description="Compact cards integrating images and gradients with statistical data." 
    :html-block="htmlBlock" 
    default-viewport="full"
  />
</template>
