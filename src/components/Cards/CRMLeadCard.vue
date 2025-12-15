<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md max-w-sm">
  <div class="p-6">
    <div class="flex items-start justify-between">
      <div class="flex gap-4">
        <img class="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
        <div>
          <h3 class="font-semibold text-gray-900">Sarah Anderson</h3>
          <p class="text-sm text-gray-500">Marketing Director</p>
          <p class="text-sm text-gray-500">Acme Corp</p>
        </div>
      </div>
      <span class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Negotiation</span>
    </div>

    <div class="mt-4 flex gap-2">
       <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Enterprise</span>
       <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">High Value</span>
    </div>

    <div class="mt-6 flex justify-between gap-4 border-t border-gray-100 pt-6">
       <div class="flex flex-col">
          <span class="text-xs font-medium text-gray-500">Est. Value</span>
          <span class="text-sm font-semibold text-gray-900">$45,000</span>
       </div>
       <div class="flex flex-col text-right">
          <span class="text-xs font-medium text-gray-500">Probability</span>
          <span class="text-sm font-semibold text-green-600">75%</span>
       </div>
    </div>

    <div class="mt-6 grid grid-cols-2 gap-3">
      <button class="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50">
        <svg class="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
            <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
        </svg>
        Email
      </button>
      <button class="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
         <svg class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
         </svg>
         Call
      </button>
    </div>
  </div>
  <div class="border-t border-gray-100 bg-gray-50 px-6 py-3">
    <div class="flex items-center gap-2 text-xs text-gray-500">
       <svg class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
         <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clip-rule="evenodd" />
       </svg>
       Last contacted: 2 days ago
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="CRM: Lead Card"
    description="Kanban-style lead card with status, value, and quick actions."
    :html-block="htmlBlock"
  >
     <div class="rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md max-w-sm mx-auto">
      <div class="p-6">
        <div class="flex items-start justify-between">
          <div class="flex gap-4">
            <img class="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            <div>
              <h3 class="font-semibold text-gray-900">Sarah Anderson</h3>
              <p class="text-sm text-gray-500">Marketing Director</p>
              <p class="text-sm text-gray-500">Acme Corp</p>
            </div>
          </div>
          <span class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Negotiation</span>
        </div>

        <div class="mt-4 flex gap-2">
           <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Enterprise</span>
           <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">High Value</span>
        </div>

        <div class="mt-6 flex justify-between gap-4 border-t border-gray-100 pt-6">
           <div class="flex flex-col">
              <span class="text-xs font-medium text-gray-500">Est. Value</span>
              <span class="text-sm font-semibold text-gray-900">$45,000</span>
           </div>
           <div class="flex flex-col text-right">
              <span class="text-xs font-medium text-gray-500">Probability</span>
              <span class="text-sm font-semibold text-green-600">75%</span>
           </div>
        </div>

        <div class="mt-6 grid grid-cols-2 gap-3">
          <button class="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50">
            <svg class="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
            </svg>
            Email
          </button>
          <button class="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
             <svg class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
             </svg>
             Call
          </button>
        </div>
      </div>
      <div class="border-t border-gray-100 bg-gray-50 px-6 py-3">
        <div class="flex items-center gap-2 text-xs text-gray-500">
           <svg class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
             <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clip-rule="evenodd" />
           </svg>
           Last contacted: 2 days ago
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
