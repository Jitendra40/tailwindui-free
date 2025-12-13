<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="rounded-2xl border-l-4 border-l-purple-500 bg-white p-5 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-all">
  <div class="flex justify-between">
    <div>
      <p class="text-xs font-medium uppercase tracking-wide text-gray-500">Sales Deal</p>
      <h3 class="mt-1 text-lg font-bold text-gray-900">Enterprise License</h3>
      <p class="text-sm text-gray-500">Acme Corp Inc.</p>
    </div>
    <div class="text-right">
      <p class="text-lg font-bold text-gray-900">$50,000</p>
      <span class="inline-flex items-center rounded-full bg-purple-50 px-2 py-1 text-xs font-bold text-purple-700">Negotiation</span>
    </div>
  </div>
  
  <div class="mt-4">
    <div class="mb-1 flex justify-between text-xs font-medium">
      <span class="text-gray-500">Probability</span>
      <span class="text-gray-900">75%</span>
    </div>
    <div class="h-2 w-full rounded-full bg-gray-100">
      <div class="h-2 rounded-full bg-purple-500" style="width: 75%"></div>
    </div>
  </div>

  <div class="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
    <div class="flex items-center gap-2">
       <img class="h-8 w-8 rounded-full bg-gray-50 ring-2 ring-white" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
       <div class="text-xs">
         <p class="font-medium text-gray-900">Tom Wilson</p>
         <p class="text-gray-500">Head of Sales</p>
       </div>
    </div>
    <div class="flex gap-1">
      <button class="rounded-lg p-2 text-gray-400 hover:bg-purple-50 hover:text-purple-600 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
      </button>
      <button class="rounded-lg p-2 text-gray-400 hover:bg-purple-50 hover:text-purple-600 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      </button>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="Sales Pipeline"
    description="CRM deal card with value, probability, and key contacts."
    :html-block="htmlBlock"
  >
    <div class="rounded-2xl border-l-4 border-l-purple-500 bg-white p-5 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-all max-w-sm mx-auto">
      <div class="flex justify-between">
        <div>
          <p class="text-xs font-medium uppercase tracking-wide text-gray-500">Sales Deal</p>
          <h3 class="mt-1 text-lg font-bold text-gray-900">Enterprise License</h3>
          <p class="text-sm text-gray-500">Acme Corp Inc.</p>
        </div>
        <div class="text-right">
          <p class="text-xl font-bold text-gray-900">$50,000</p>
          <span class="inline-flex items-center rounded-full bg-purple-50 px-2 py-1 text-xs font-bold text-purple-700">Negotiation</span>
        </div>
      </div>
      
      <div class="mt-4">
        <div class="mb-1 flex justify-between text-xs font-medium">
          <span class="text-gray-500">Probability</span>
          <span class="text-gray-900">75%</span>
        </div>
        <div class="h-2 w-full rounded-full bg-gray-100">
          <div class="h-2 rounded-full bg-purple-500" style="width: 75%"></div>
        </div>
      </div>

      <div class="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
        <div class="flex items-center gap-2">
           <img class="h-8 w-8 rounded-full bg-gray-50 ring-2 ring-white border border-gray-100" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
           <div class="text-xs">
             <p class="font-medium text-gray-900">Tom Wilson</p>
             <p class="text-gray-500">Head of Sales</p>
           </div>
        </div>
        <div class="flex gap-1">
          <button class="rounded-lg p-2 text-gray-400 hover:bg-purple-50 hover:text-purple-600 transition-colors ring-1 ring-transparent hover:ring-purple-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          </button>
          <button class="rounded-lg p-2 text-gray-400 hover:bg-purple-50 hover:text-purple-600 transition-colors ring-1 ring-transparent hover:ring-purple-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </button>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
