<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-all">
  <div class="flex items-center gap-4">
    <div class="relative">
      <img class="h-16 w-16 rounded-full border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile" />
      <span class="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-green-500 ring-2 ring-white"></span>
    </div>
    <div class="flex-1">
       <h3 class="text-lg font-bold text-gray-900">Lindsay Walton</h3>
       <p class="text-sm font-medium text-gray-500">Front-end Developer</p>
    </div>
    <div class="flex -space-x-1">
      <button class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:text-gray-600 ring-1 ring-gray-200">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      </button>
       <button class="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:text-gray-600 ring-1 ring-gray-200 z-10 bg-white">
         <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
      </button>
    </div>
  </div>
  <div class="mt-6 grid grid-cols-2 gap-4 border-t border-gray-100 pt-4">
    <div>
      <p class="text-xs font-medium text-gray-500 uppercase tracking-wider">Department</p>
      <p class="mt-0.5 text-sm font-semibold text-gray-900">Engineering</p>
    </div>
    <div>
      <p class="text-xs font-medium text-gray-500 uppercase tracking-wider">Hired Date</p>
      <p class="mt-0.5 text-sm font-semibold text-gray-900">Oct 24, 2022</p>
    </div>
    <div>
      <p class="text-xs font-medium text-gray-500 uppercase tracking-wider">Status</p>
      <span class="mt-1 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
    </div>
    <div>
      <p class="text-xs font-medium text-gray-500 uppercase tracking-wider">Manager</p>
      <div class="mt-1 flex -space-x-1 hover:space-x-1 transition-all">
         <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
         <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
      </div>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="HR Employee Card"
    description="Employee profile with status, contacts, and key details."
    :html-block="htmlBlock"
  >
    <div class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-all max-w-sm mx-auto">
      <div class="flex items-center gap-4">
        <div class="relative">
          <img class="h-16 w-16 rounded-full border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile" />
          <span class="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-green-500 ring-2 ring-white ring-offset-1"></span>
        </div>
        <div class="flex-1">
           <h3 class="text-lg font-bold text-gray-900">Lindsay Walton</h3>
           <p class="text-sm font-medium text-gray-500">Front-end Developer</p>
        </div>
        <div class="flex items-center gap-2">
          <button class="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:text-gray-600 ring-1 ring-gray-200 hover:ring-gray-300 transition-all">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </button>
           <button class="flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:text-gray-600 ring-1 ring-gray-200 hover:ring-gray-300 transition-all">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
          </button>
        </div>
      </div>
      <div class="mt-6 grid grid-cols-2 gap-4 border-t border-gray-100 pt-4">
        <div>
          <p class="text-xs font-medium text-gray-500 uppercase tracking-wider">Department</p>
          <p class="mt-0.5 text-sm font-semibold text-gray-900">Engineering</p>
        </div>
        <div>
          <p class="text-xs font-medium text-gray-500 uppercase tracking-wider">Hired Date</p>
          <p class="mt-0.5 text-sm font-semibold text-gray-900">Oct 24, 2022</p>
        </div>
        <div>
          <p class="text-xs font-medium text-gray-500 uppercase tracking-wider">Status</p>
          <span class="mt-1 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
        </div>
        <div>
          <p class="text-xs font-medium text-gray-500 uppercase tracking-wider">Team</p>
          <div class="mt-1 flex -space-x-2 overflow-hidden hover:space-x-1 transition-all">
             <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
             <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
             <div class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-2 ring-white">
                <span class="text-[10px] font-medium text-gray-500">+3</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
