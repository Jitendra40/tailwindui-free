<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<nav aria-label="Progress">
  <ol role="list" class="overflow-hidden">
    <!-- Step 1 -->
    <li class="relative pb-10">
      <div class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-indigo-600" aria-hidden="true"></div>
      <a href="#" class="group relative flex items-start">
        <span class="flex h-9 items-center">
            <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800 transition-colors">
               <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
               </svg>
            </span>
        </span>
        <span class="ml-4 flex min-w-0 flex-col">
          <span class="text-sm font-semibold text-gray-900">Create account</span>
          <span class="text-sm text-gray-500">Setup your profile details.</span>
        </span>
      </a>
    </li>
    
    <!-- Step 2 -->
    <li class="relative pb-10">
      <div class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></div>
      <a href="#" class="group relative flex items-start" aria-current="step">
        <span class="flex h-9 items-center">
           <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white shadow-sm">
              <span class="h-2.5 w-2.5 rounded-full bg-indigo-600"></span>
          </span>
        </span>
        <span class="ml-4 flex min-w-0 flex-col">
          <span class="text-sm font-semibold text-indigo-600">Profile information</span>
           <span class="text-sm text-gray-500">Add your personal info.</span>
        </span>
      </a>
    </li>

    <!-- Step 3 -->
    <li class="relative pb-10">
       <div class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></div>
      <a href="#" class="group relative flex items-start">
        <span class="flex h-9 items-center">
          <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400 transition-colors">
             <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"></span>
          </span>
        </span>
        <span class="ml-4 flex min-w-0 flex-col">
          <span class="text-sm font-medium text-gray-500 group-hover:text-gray-900 transition-colors">Theme</span>
           <span class="text-sm text-gray-500">Pick a color theme.</span>
        </span>
      </a>
    </li>

    <!-- Step 4 -->
     <li class="relative">
      <a href="#" class="group relative flex items-start">
        <span class="flex h-9 items-center">
          <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400 transition-colors">
             <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"></span>
          </span>
        </span>
        <span class="ml-4 flex min-w-0 flex-col">
          <span class="text-sm font-medium text-gray-500 group-hover:text-gray-900 transition-colors">Preview</span>
           <span class="text-sm text-gray-500">Ready to launch?</span>
        </span>
      </a>
    </li>
  </ol>
</nav>
`
</script>

<template>
  <PreviewWrapper title="Vertical Timeline" description="Vertical step progression with clear typography." :html-block="htmlBlock">
    <nav aria-label="Progress">
      <ol role="list" class="overflow-hidden">
        <li class="relative pb-10">
          <div class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-indigo-600" aria-hidden="true"></div>
          <a href="#" class="group relative flex items-start">
            <span class="flex h-9 items-center">
                <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800 transition-colors">
                   <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                   </svg>
                </span>
            </span>
            <span class="ml-4 flex min-w-0 flex-col">
              <span class="text-sm font-semibold text-gray-900">Create account</span>
              <span class="text-sm text-gray-500">Setup your profile details.</span>
            </span>
          </a>
        </li>
        <li class="relative pb-10">
          <div class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></div>
          <a href="#" class="group relative flex items-start" aria-current="step">
            <span class="flex h-9 items-center">
               <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white shadow-sm">
                  <span class="h-2.5 w-2.5 rounded-full bg-indigo-600"></span>
              </span>
            </span>
            <span class="ml-4 flex min-w-0 flex-col">
              <span class="text-sm font-semibold text-indigo-600">Profile information</span>
               <span class="text-sm text-gray-500">Add your personal info.</span>
            </span>
          </a>
        </li>
        <li class="relative pb-10">
           <div class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></div>
          <a href="#" class="group relative flex items-start">
            <span class="flex h-9 items-center">
              <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400 transition-colors">
                 <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"></span>
              </span>
            </span>
            <span class="ml-4 flex min-w-0 flex-col">
              <span class="text-sm font-medium text-gray-500 group-hover:text-gray-900 transition-colors">Theme</span>
               <span class="text-sm text-gray-500">Pick a color theme.</span>
            </span>
          </a>
        </li>
         <li class="relative">
          <a href="#" class="group relative flex items-start">
            <span class="flex h-9 items-center">
              <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400 transition-colors">
                 <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"></span>
              </span>
            </span>
            <span class="ml-4 flex min-w-0 flex-col">
              <span class="text-sm font-medium text-gray-500 group-hover:text-gray-900 transition-colors">Preview</span>
               <span class="text-sm text-gray-500">Ready to launch?</span>
            </span>
          </a>
        </li>
      </ol>
    </nav>
  </PreviewWrapper>
</template>
