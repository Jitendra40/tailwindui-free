<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<fieldset>
  <legend class="sr-only">Server size</legend>
  <div class="space-y-4">
    <label class="relative flex cursor-pointer rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:border-indigo-300 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50/20">
      <div class="flex flex-1 gap-4">
         <div class="flex flex-col justify-center">
            <span class="block text-sm font-semibold text-gray-900 mb-0.5">Hobby</span>
            <span class="block text-sm text-gray-500">8GB / 4 CPUs</span>
         </div>
         <div class="ml-auto flex items-center gap-4">
             <span class="text-sm font-medium text-gray-900">$40 <span class="text-gray-500 font-normal">/mo</span></span>
             <div class="relative flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-600">
                <input type="radio" name="server-size" value="Hobby" class="peer sr-only" />
                <svg class="h-3 w-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                   <path d="M2 6L4.5 9L10 3" />
                </svg>
             </div>
         </div>
      </div>
    </label>

    <label class="relative flex cursor-pointer rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:border-indigo-300 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50/20">
      <div class="flex flex-1 gap-4">
         <div class="flex flex-col justify-center">
            <span class="block text-sm font-semibold text-gray-900 mb-0.5">Startup</span>
            <span class="block text-sm text-gray-500">12GB / 6 CPUs</span>
         </div>
         <div class="ml-auto flex items-center gap-4">
             <span class="text-sm font-medium text-gray-900">$80 <span class="text-gray-500 font-normal">/mo</span></span>
             <div class="relative flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-600">
                <input type="radio" name="server-size" value="Startup" checked class="peer sr-only" />
                 <svg class="h-3 w-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                   <path d="M2 6L4.5 9L10 3" />
                </svg>
             </div>
         </div>
      </div>
    </label>
  </div>
</fieldset>
`
</script>

<template>
  <PreviewWrapper title="Detail Cards" description="Expanded cards with custom radio indicators and details." :html-block="htmlBlock">
    <div class="w-full max-w-sm">
      <fieldset>
        <legend class="sr-only">Server size</legend>
        <div class="space-y-4">
          <label class="relative flex cursor-pointer rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:border-indigo-300 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50/20">
            <div class="flex flex-1 gap-4">
               <div class="flex flex-col justify-center">
                  <span class="block text-sm font-semibold text-gray-900 mb-0.5">Hobby</span>
                  <span class="block text-sm text-gray-500">8GB / 4 CPUs</span>
               </div>
               <div class="ml-auto flex items-center gap-4">
                   <span class="text-sm font-medium text-gray-900">$40 <span class="text-gray-500 font-normal">/mo</span></span>
                   <div class="relative flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-600">
                      <input type="radio" name="server-size" value="Hobby" class="peer sr-only" />
                      <svg class="h-3 w-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                         <path d="M2 6L4.5 9L10 3" />
                      </svg>
                   </div>
               </div>
            </div>
          </label>

          <label class="relative flex cursor-pointer rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:border-indigo-300 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50/20">
            <div class="flex flex-1 gap-4">
               <div class="flex flex-col justify-center">
                  <span class="block text-sm font-semibold text-gray-900 mb-0.5">Startup</span>
                  <span class="block text-sm text-gray-500">12GB / 6 CPUs</span>
               </div>
               <div class="ml-auto flex items-center gap-4">
                   <span class="text-sm font-medium text-gray-900">$80 <span class="text-gray-500 font-normal">/mo</span></span>
                   <div class="relative flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 transition-colors has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-600">
                      <input type="radio" name="server-size" value="Startup" checked class="peer sr-only" />
                       <svg class="h-3 w-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                         <path d="M2 6L4.5 9L10 3" />
                      </svg>
                   </div>
               </div>
            </div>
          </label>
        </div>
      </fieldset>
    </div>
  </PreviewWrapper>
</template>
