<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200 transaction-all hover:shadow-md max-w-sm">
  <div class="p-6">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
         <img class="h-12 w-12 rounded-full border border-gray-100 bg-white p-1 object-contain shadow-sm" src="https://logo.clearbit.com/tata.com" alt="Tata Tech">
         <div>
            <h3 class="text-base font-semibold text-gray-900">Tata Technologies</h3>
            <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Mainboard IPO</span>
         </div>
      </div>
      <div class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:text-gray-500">
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
             <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
        </svg>
      </div>
    </div>
    
    <div class="mt-6 grid grid-cols-2 gap-4 border-t border-gray-100 pt-6">
      <div>
        <dt class="text-xs font-medium text-gray-500">Price Band</dt>
        <dd class="mt-1 text-sm font-semibold text-gray-900">₹475 - ₹500</dd>
      </div>
      <div>
        <dt class="text-xs font-medium text-gray-500">Lot Size</dt>
        <dd class="mt-1 text-sm font-semibold text-gray-900">30 Shares</dd>
      </div>
      <div>
        <dt class="text-xs font-medium text-gray-500">GMP (Est.)</dt>
        <dd class="mt-1 text-sm font-bold text-green-600">+₹380 (76%)</dd>
      </div>
       <div>
        <dt class="text-xs font-medium text-gray-500">Subscription</dt>
        <dd class="mt-1 text-sm font-semibold text-gray-900">69.43x</dd>
      </div>
    </div>
    
    <div class="mt-6 flex items-center justify-between gap-4">
      <div class="text-xs text-gray-500">
        Closes in <span class="font-medium text-gray-900">2 days</span>
      </div>
      <button type="button" class="rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Apply Now</button>
    </div>
  </div>
  <div class="bg-gray-50 px-6 py-3">
    <div class="text-xs text-center text-gray-500">
        Listing Date: <span class="font-medium text-gray-900">05 Dec 2023</span>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="Finance: IPO Card"
    description="Card displaying IPO details, GMP, and status for investment platforms."
    :html-block="htmlBlock"
  >
    <div class="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200 transaction-all hover:shadow-md max-w-sm mx-auto">
      <div class="p-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
             <img class="h-12 w-12 rounded-full border border-gray-100 bg-white p-1 object-contain shadow-sm" src="https://logo.clearbit.com/tata.com" alt="Tata Tech">
             <div>
                <h3 class="text-base font-semibold text-gray-900">Tata Technologies</h3>
                <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Mainboard IPO</span>
             </div>
          </div>
          <div class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:text-gray-500">
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                 <path d="M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
            </svg>
          </div>
        </div>
        
        <div class="mt-6 grid grid-cols-2 gap-4 border-t border-gray-100 pt-6">
          <div>
            <dt class="text-xs font-medium text-gray-500">Price Band</dt>
            <dd class="mt-1 text-sm font-semibold text-gray-900">₹475 - ₹500</dd>
          </div>
          <div>
            <dt class="text-xs font-medium text-gray-500">Lot Size</dt>
            <dd class="mt-1 text-sm font-semibold text-gray-900">30 Shares</dd>
          </div>
          <div>
            <dt class="text-xs font-medium text-gray-500">GMP (Est.)</dt>
            <dd class="mt-1 text-sm font-bold text-green-600">+₹380 (76%)</dd>
          </div>
           <div>
            <dt class="text-xs font-medium text-gray-500">Subscription</dt>
            <dd class="mt-1 text-sm font-semibold text-gray-900">69.43x</dd>
          </div>
        </div>
        
        <div class="mt-6 flex items-center justify-between gap-4">
          <div class="text-xs text-gray-500">
            Closes in <span class="font-medium text-gray-900">2 days</span>
          </div>
          <button type="button" class="rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Apply Now</button>
        </div>
      </div>
      <div class="bg-gray-50 px-6 py-3">
        <div class="text-xs text-center text-gray-500">
            Listing Date: <span class="font-medium text-gray-900">05 Dec 2023</span>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
