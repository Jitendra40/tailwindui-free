<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
  <!-- Upload Document -->
  <div class="col-span-full">
    <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Upload Document</label>
    <div class="mt-2 flex justify-center rounded-xl border-2 border-dashed border-gray-200 px-6 py-12 hover:bg-gray-50 transition-all cursor-pointer bg-white group hover:border-indigo-400">
      <div class="text-center">
        <div class="mx-auto h-12 w-12 text-gray-300 group-hover:text-indigo-500 transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
            </svg>
        </div>
        <div class="mt-4 flex text-sm leading-6 text-gray-600 justify-center">
          <label for="file-upload" class="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
            <span>Upload a file</span>
            <input id="file-upload" name="file-upload" type="file" class="sr-only">
          </label>
          <p class="pl-1">or drag and drop</p>
        </div>
        <p class="text-xs leading-5 text-gray-500 mt-1">PDF, DOC, DOCX up to 10MB</p>
      </div>
    </div>
  </div>

  <!-- Upload Image -->
  <div class="col-span-full">
    <label for="photo" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Upload Image</label>
    <div class="flex items-center gap-x-4">
      <div class="h-16 w-16 overflow-hidden rounded-full bg-gray-100 ring-1 ring-gray-200 flex items-center justify-center">
        <svg class="h-10 w-10 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
        </svg>
      </div>
      <button type="button" class="rounded-lg bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all">Change</button>
      <button type="button" class="rounded-lg px-3.5 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 transition-all">Remove</button>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="File & Media"
    description="File upload areas and image inputs."
    :html-block="htmlBlock"
  >
    <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
      <!-- Upload Document -->
      <div class="col-span-full">
        <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Upload Document</label>
        <div class="mt-2 flex justify-center rounded-xl border-2 border-dashed border-gray-200 px-6 py-12 hover:bg-gray-50 transition-all cursor-pointer bg-white group hover:border-indigo-400">
          <div class="text-center">
            <div class="mx-auto h-12 w-12 text-gray-300 group-hover:text-indigo-500 transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                </svg>
            </div>
            <div class="mt-4 flex text-sm leading-6 text-gray-600 justify-center">
              <label for="file-upload" class="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                <span>Upload a file</span>
                <input id="file-upload" name="file-upload" type="file" class="sr-only">
              </label>
              <p class="pl-1">or drag and drop</p>
            </div>
            <p class="text-xs leading-5 text-gray-500 mt-1">PDF, DOC, DOCX up to 10MB</p>
          </div>
        </div>
      </div>

      <!-- Upload Image -->
      <div class="col-span-full">
        <label for="photo" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Upload Image</label>
        <div class="flex items-center gap-x-4">
          <div class="h-16 w-16 overflow-hidden rounded-full bg-gray-100 ring-1 ring-gray-200 flex items-center justify-center">
            <svg class="h-10 w-10 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
            </svg>
          </div>
          <button type="button" class="rounded-lg bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all">Change</button>
          <button type="button" class="rounded-lg px-3.5 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 transition-all">Remove</button>
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
