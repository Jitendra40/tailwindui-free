<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<nav aria-label="Progress">
  <ol role="list" class="overflow-hidden">
    <li class="relative pb-10">
      <div class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-indigo-600" aria-hidden="true" />
      <a href="#" class="relative flex items-start group">
        <span class="flex h-9 items-center">
            <span class="relative flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-900">
               <svg class="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 6 9 17l-5-5"/>
               </svg>
            </span>
        </span>
        <span class="ml-4 flex min-w-0 flex-col">
          <span class="text-sm font-medium text-indigo-600">Create account</span>
          <span class="text-sm text-gray-500">Setup your profile details.</span>
        </span>
      </a>
    </li>
    <li class="relative pb-10">
      <div class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
      <a href="#" class="relative flex items-start group">
        <span class="flex h-9 items-center">
           <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
              <span class="h-2.5 w-2.5 rounded-full bg-indigo-600" />
          </span>
        </span>
        <span class="ml-4 flex min-w-0 flex-col">
          <span class="text-sm font-medium text-indigo-600">Profile information</span>
           <span class="text-sm text-gray-500">Add your personal info.</span>
        </span>
      </a>
    </li>
    <li class="relative pb-10">
       <div class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
      <a href="#" class="relative flex items-start group">
        <span class="flex h-9 items-center">
          <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
             <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
          </span>
        </span>
        <span class="ml-4 flex min-w-0 flex-col">
          <span class="text-sm font-medium text-gray-500">Theme</span>
           <span class="text-sm text-gray-500">Pick a color theme.</span>
        </span>
      </a>
    </li>
     <li class="relative">
      <a href="#" class="relative flex items-start group">
        <span class="flex h-9 items-center">
          <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
             <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
          </span>
        </span>
        <span class="ml-4 flex min-w-0 flex-col">
          <span class="text-sm font-medium text-gray-500">Preview</span>
           <span class="text-sm text-gray-500">Ready to launch?</span>
        </span>
      </a>
    </li>
  </ol>
</nav>
`
</script>

<template>
  <PreviewWrapper title="Vertical Steps" description="Vertical step progression." :html-block="htmlBlock">
    <nav aria-label="Progress">
      <ol role="list" class="overflow-hidden">
        <li class="relative pb-10">
          <div class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-indigo-600" aria-hidden="true" />
          <a href="#" class="relative flex items-start group">
            <span class="flex h-9 items-center">
                <span class="relative flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-900">
                   <svg class="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                   </svg>
                </span>
            </span>
            <span class="ml-4 flex min-w-0 flex-col">
              <span class="text-sm font-medium text-indigo-600">Create account</span>
              <span class="text-sm text-gray-500">Setup your profile details.</span>
            </span>
          </a>
        </li>
        <li class="relative pb-10">
          <div class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
          <a href="#" class="relative flex items-start group">
            <span class="flex h-9 items-center">
               <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
                  <span class="h-2.5 w-2.5 rounded-full bg-indigo-600" />
              </span>
            </span>
            <span class="ml-4 flex min-w-0 flex-col">
              <span class="text-sm font-medium text-indigo-600">Profile information</span>
               <span class="text-sm text-gray-500">Add your personal info.</span>
            </span>
          </a>
        </li>
        <li class="relative pb-10">
           <div class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
          <a href="#" class="relative flex items-start group">
            <span class="flex h-9 items-center">
              <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                 <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
              </span>
            </span>
            <span class="ml-4 flex min-w-0 flex-col">
              <span class="text-sm font-medium text-gray-500">Theme</span>
               <span class="text-sm text-gray-500">Pick a color theme.</span>
            </span>
          </a>
        </li>
         <li class="relative">
          <a href="#" class="relative flex items-start group">
            <span class="flex h-9 items-center">
              <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                 <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
              </span>
            </span>
            <span class="ml-4 flex min-w-0 flex-col">
              <span class="text-sm font-medium text-gray-500">Preview</span>
               <span class="text-sm text-gray-500">Ready to launch?</span>
            </span>
          </a>
        </li>
      </ol>
    </nav>
  </PreviewWrapper>
</template>
