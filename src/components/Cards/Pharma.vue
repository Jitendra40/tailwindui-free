<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="overflow-hidden rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md">
  <div class="flex items-start gap-4">
    <div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
       <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
         <path d="M19 11H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2Z" />
         <path fill-rule="evenodd" d="M11 2a1 1 0 0 1 1 1v3.293l4.293 4.293a1 1 0 0 1 .207.327V11h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1.5v1a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1H6a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3V10.914l.207-.327L10.5 6.293V3a1 1 0 0 1 .5-1ZM8 14v1h8v-1H8Z" clip-rule="evenodd" />
       </svg>
    </div>
    <div class="flex-1">
      <div class="flex items-center justify-between">
        <div>
           <h3 class="font-bold text-gray-900">Amoxicillin</h3>
           <p class="text-sm text-gray-500">500mg • 30 Capsules</p>
        </div>
        <span class="rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">In Stock</span>
      </div>
      <div class="mt-4 flex items-end justify-between">
         <div class="space-y-1">
           <p class="text-sm font-medium text-gray-900">$12.99</p>
           <div class="flex items-center gap-1 text-xs text-amber-600">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3.5 w-3.5">
               <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625l6.28-10.875zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
             </svg>
             Rx Required
           </div>
         </div>
         <button class="flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
           Add to Cart
         </button>
      </div>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="Pharma Product"
    description="Product card for medicine with stock status and prescription alert."
    :html-block="htmlBlock"
  >
    <div class="overflow-hidden rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md max-w-sm mx-auto">
      <div class="flex items-start gap-4">
        <div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
             <path fill-rule="evenodd" d="M12 2a3 3 0 0 0-3 3v2H6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3h-3V5a3 3 0 0 0-3-3Zm-1 8v7h2v-7h-2Zm-1-5v3h4V5a1 1 0 0 0-2 0Z" clip-rule="evenodd"/>
           </svg>
        </div>
        <div class="flex-1">
          <div class="flex items-center justify-between">
            <div>
               <h3 class="text-lg font-bold text-gray-900">Amoxicillin</h3>
               <p class="text-sm text-gray-500">500mg • 30 Capsules</p>
            </div>
            <span class="rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700">In Stock</span>
          </div>
          <div class="mt-4 flex items-end justify-between">
             <div class="space-y-1">
               <p class="text-xl font-bold text-gray-900">$12.99</p>
               <div class="flex items-center gap-1 text-xs font-medium text-amber-600">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-3.5 w-3.5">
                   <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625l6.28-10.875zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                 </svg>
                 Rx Required
               </div>
             </div>
             <button class="flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
               Add to Cart
             </button>
          </div>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
