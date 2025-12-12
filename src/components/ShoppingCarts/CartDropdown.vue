<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="relative inline-block text-left">
    <button type="button" class="group -m-2 flex items-center p-2">
       <svg class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
       </svg>
       <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">2</span>
    </button>
  
  <div class="absolute right-0 z-10 mt-2 w-80 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    <div class="py-1">
      <div class="px-4 py-2">
        <h3 class="text-sm font-medium text-gray-900">Shopping Cart</h3>
      </div>
      <ul role="list" class="divide-y divide-gray-200 px-4">
        <li class="flex py-4">
            <div class="h-16 w-16 bg-gray-100 flex items-center justify-center rounded-md border border-gray-200 text-gray-400">
               <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            </div>
            <div class="ml-4 flex flex-1 flex-col">
                <div class="flex justify-between text-base font-medium text-gray-900">
                    <h3><a href="#">Throwback Hip Bag</a></h3>
                    <p class="ml-4">$90.00</p>
                </div>
                <p class="mt-1 text-sm text-gray-500">Salmon</p>
            </div>
        </li>
      </ul>
      <div class="border-t border-gray-200 px-4 py-6">
        <div class="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>$90.00</p>
        </div>
        <div class="mt-6">
            <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
        </div>
      </div>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Cart Dropdown" description="Static preview of an open cart dropdown." :html-block="htmlBlock">
     <div class="h-96 flex justify-center items-start pt-10 bg-gray-50 p-4 rounded-lg border border-dashed border-gray-200">
        <div class="relative inline-block text-left">
            <button type="button" class="group -m-2 flex items-center p-2">
               <svg class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
               </svg>
               <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">2</span>
            </button>
          
          <div class="absolute right-0 z-10 mt-2 w-80 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div class="py-1">
              <div class="px-4 py-2">
                <h3 class="text-sm font-medium text-gray-900">Shopping Cart</h3>
              </div>
              <ul role="list" class="divide-y divide-gray-200 px-4">
                <li class="flex py-4">
                    <div class="h-16 w-16 bg-gray-100 flex items-center justify-center rounded-md border border-gray-200 text-gray-400">
                       <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                    </div>
                    <div class="ml-4 flex flex-1 flex-col">
                        <div class="flex justify-between text-base font-medium text-gray-900">
                            <h3><a href="#">Throwback Hip Bag</a></h3>
                            <p class="ml-4">$90.00</p>
                        </div>
                        <p class="mt-1 text-sm text-gray-500">Salmon</p>
                    </div>
                </li>
              </ul>
              <div class="border-t border-gray-200 px-4 py-6">
                <div class="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>$90.00</p>
                </div>
                <div class="mt-6">
                    <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>
  </PreviewWrapper>
</template>
