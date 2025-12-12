<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<fieldset>
  <legend class="sr-only">Server size</legend>
  <div class="space-y-4">
    <label class="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none ring-1 ring-gray-300 hover:bg-gray-50">
      <input type="radio" name="server-size" value="Hobby" class="sr-only" aria-labelledby="server-size-0-label" aria-describedby="server-size-0-description-0 server-size-0-description-1" />
      <span class="flex flex-1">
        <span class="flex flex-col">
          <span id="server-size-0-label" class="block text-sm font-medium text-gray-900">Hobby</span>
          <span id="server-size-0-description-0" class="mt-1 flex items-center text-sm text-gray-500">8GB / 4 CPUs</span>
          <span id="server-size-0-description-1" class="mt-6 text-sm font-medium text-gray-900">$40 / mo</span>
        </span>
      </span>
      <svg class="h-5 w-5 text-indigo-600" viewBox="0 0 24 24" fill="currentColor" stroke="none">
         <circle cx="12" cy="12" r="10"/>
      </svg>
      <span class="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent peer-checked:border-indigo-600" aria-hidden="true"></span>
    </label>
     <label class="relative flex cursor-pointer rounded-lg border border-indigo-200 bg-indigo-50 p-4 shadow-sm focus:outline-none ring-1 ring-indigo-200">
      <input type="radio" name="server-size" value="Startup" checked class="sr-only" aria-labelledby="server-size-1-label" aria-describedby="server-size-1-description-0 server-size-1-description-1" />
      <span class="flex flex-1">
        <span class="flex flex-col">
          <span id="server-size-1-label" class="block text-sm font-medium text-indigo-900">Startup</span>
          <span id="server-size-1-description-0" class="mt-1 flex items-center text-sm text-indigo-700">12GB / 6 CPUs</span>
          <span id="server-size-1-description-1" class="mt-6 text-sm font-medium text-indigo-900">$80 / mo</span>
        </span>
      </span>
      <svg class="h-5 w-5 text-indigo-600" viewBox="0 0 24 24" fill="currentColor" stroke="none">
         <circle cx="12" cy="12" r="10"/>
      </svg>
       <span class="pointer-events-none absolute -inset-px rounded-lg border-2 border-indigo-600" aria-hidden="true"></span>
    </label>
  </div>
</fieldset>
`
</script>

<template>
  <PreviewWrapper title="Cards" description="Rich options with descriptions and prices." :html-block="htmlBlock">
    <fieldset>
      <legend class="sr-only">Server size</legend>
      <div class="space-y-4">
        <label class="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none ring-1 ring-gray-300 hover:bg-gray-50">
          <input type="radio" name="server-size" value="Hobby" class="sr-only" aria-labelledby="server-size-0-label" aria-describedby="server-size-0-description-0 server-size-0-description-1" />
          <span class="flex flex-1">
            <span class="flex flex-col">
              <span id="server-size-0-label" class="block text-sm font-medium text-gray-900">Hobby</span>
              <span id="server-size-0-description-0" class="mt-1 flex items-center text-sm text-gray-500">8GB / 4 CPUs</span>
              <span id="server-size-0-description-1" class="mt-6 text-sm font-medium text-gray-900">$40 / mo</span>
            </span>
          </span>
          <svg class="h-5 w-5 text-indigo-600" viewBox="0 0 24 24" fill="currentColor" stroke="none">
             <circle cx="12" cy="12" r="10"/>
          </svg>
          <span class="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent peer-checked:border-indigo-600" aria-hidden="true"></span>
        </label>
         <label class="relative flex cursor-pointer rounded-lg border border-indigo-200 bg-indigo-50 p-4 shadow-sm focus:outline-none ring-1 ring-indigo-200">
          <input type="radio" name="server-size" value="Startup" checked class="sr-only" aria-labelledby="server-size-1-label" aria-describedby="server-size-1-description-0 server-size-1-description-1" />
          <span class="flex flex-1">
            <span class="flex flex-col">
              <span id="server-size-1-label" class="block text-sm font-medium text-indigo-900">Startup</span>
              <span id="server-size-1-description-0" class="mt-1 flex items-center text-sm text-indigo-700">12GB / 6 CPUs</span>
              <span id="server-size-1-description-1" class="mt-6 text-sm font-medium text-indigo-900">$80 / mo</span>
            </span>
          </span>
          <svg class="h-5 w-5 text-indigo-600" viewBox="0 0 24 24" fill="currentColor" stroke="none">
             <circle cx="12" cy="12" r="10"/>
          </svg>
           <span class="pointer-events-none absolute -inset-px rounded-lg border-2 border-indigo-600" aria-hidden="true"></span>
        </label>
      </div>
    </fieldset>
  </PreviewWrapper>
</template>
