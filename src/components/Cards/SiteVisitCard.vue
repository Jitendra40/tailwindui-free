<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md max-w-sm">
  <div class="relative h-40">
    <img src="https://images.unsplash.com/photo-1600596542815-2250657d2f96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Property" class="h-full w-full object-cover">
    <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
      <h3 class="font-semibold text-white">The Grand Arch</h3>
      <p class="text-sm text-gray-200">Unit 402, Tower B</p>
    </div>
    <div class="absolute top-3 right-3">
         <span class="inline-flex items-center rounded-md bg-white/90 px-2 py-1 text-xs font-bold text-gray-900 backdrop-blur-sm shadow-sm">
           Today, 2:30 PM
         </span>
    </div>
  </div>
  
  <div class="p-4">
    <div class="flex items-center gap-3">
      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-10 w-10 rounded-full bg-gray-100">
      <div class="flex-1">
        <h4 class="text-sm font-semibold text-gray-900">Amit Kumar</h4>
        <p class="text-xs text-gray-500">Scheduled Client</p>
      </div>
       <button class="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900">
          <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
       </button>
    </div>
    
    <div class="mt-4 grid grid-cols-2 gap-3">
      <button class="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800">
        <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
           <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.006.003.002.001.001.001zm-3.19-7.433A3.5 3.5 0 1110 5.5a3.5 3.5 0 01-3.5 6z" clip-rule="evenodd" />
        </svg>
        Navigate
      </button>
       <button class="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-gray-900">
        Reschedule
      </button>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="Real Estate: Visit Card"
    description="Agent-facing card for scheduled site visits with navigation."
    :html-block="htmlBlock"
  >
    <div class="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-md max-w-sm mx-auto">
      <div class="relative h-40">
        <img src="https://images.unsplash.com/photo-1600596542815-2250657d2f96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Property" class="h-full w-full object-cover">
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
          <h3 class="font-semibold text-white">The Grand Arch</h3>
          <p class="text-sm text-gray-200">Unit 402, Tower B</p>
        </div>
        <div class="absolute top-3 right-3">
             <span class="inline-flex items-center rounded-md bg-white/90 px-2 py-1 text-xs font-bold text-gray-900 backdrop-blur-sm shadow-sm">
               Today, 2:30 PM
             </span>
        </div>
      </div>
      
      <div class="p-4">
        <div class="flex items-center gap-3">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-10 w-10 rounded-full bg-gray-100">
          <div class="flex-1">
            <h4 class="text-sm font-semibold text-gray-900">Amit Kumar</h4>
            <p class="text-xs text-gray-500">Scheduled Client</p>
          </div>
           <button class="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200 hover:text-gray-900">
              <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
           </button>
        </div>
        
        <div class="mt-4 grid grid-cols-2 gap-3">
          <button class="flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800">
            <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
               <path fill-rule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.006.003.002.001.001.001zm-3.19-7.433A3.5 3.5 0 1110 5.5a3.5 3.5 0 01-3.5 6z" clip-rule="evenodd" />
            </svg>
            Navigate
          </button>
           <button class="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-gray-900">
            Reschedule
          </button>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
