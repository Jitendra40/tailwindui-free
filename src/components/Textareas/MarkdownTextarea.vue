<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="max-w-2xl w-full">
  <label for="content" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Content Editor</label>
  <div class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm ring-1 ring-transparent focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 transition-all">
      <!-- Toolbar -->
      <div class="flex items-center gap-1 border-b border-gray-100 bg-gray-50/80 px-3 py-2">
        <div class="flex items-center rounded-lg bg-white shadow-sm border border-gray-200 p-0.5">
            <button type="button" class="rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
              <span class="sr-only">Bold</span>
               <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                 <path fill-rule="evenodd" d="M13.5 3a1.5 1.5 0 011.5 1.5V17a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 015 17V4.5A1.5 1.5 0 016.5 3h7zM6.5 4.5V17h7V4.5h-7z" clip-rule="evenodd" />
                <path d="M10 7a1 1 0 01.5.866l.006.134v7a1 1 0 01-2 0V8a1 1 0 011-1z" />
              </svg>
            </button>
            <button type="button" class="rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
               <span class="sr-only">Italic</span>
              <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                 <path fill-rule="evenodd" d="M12.924 3.125a.75.75 0 01.442.946l-4.5 12a.75.75 0 01-1.398-.544l4.5-12a.75.75 0 01.956-.402z" clip-rule="evenodd" />
                </svg>
            </button>
        </div>

        <div class="h-5 w-px bg-gray-300 mx-1"></div>

        <div class="flex items-center rounded-lg bg-white shadow-sm border border-gray-200 p-0.5">
             <button type="button" class="rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
               <span class="sr-only">Link</span>
               <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                 <path fill-rule="evenodd" d="M12.5 5a2.5 2.5 0 012.35 1.76l.117.527a2.5 2.5 0 01-1.58.647h-1.077c.362.292.68.625.94 1H14.5a1 1 0 01.996 1.09l-.017.087a3.99 3.99 0 01-1.282 2.375l-.348.272a1 1 0 01-.157.108 3.999 3.999 0 01-2.079.61h-.5a1 1 0 01-.117-.007 3.994 3.994 0 01-1.87-1.155l-.337-.367a1 1 0 011.47-1.353l.34.368c.328.358.745.586 1.201.656h.17c.189 0 .373-.04.542-.113l.366-.285a2.49 2.49 0 00.73-1.638l.01-.17v-.016a2.49 2.49 0 00-.73-1.637l-.366-.285a2.502 2.502 0 00-1.542-.533h-.624a1 1 0 010-2h.624a4.002 4.002 0 012.467.854l.366.284a1 1 0 01-1.22 1.576l-.366-.285a2.5 2.5 0 00-1.897-.24l-.066.015-.098.026v-1.157l.03-.008.067-.015a4.002 4.002 0 011.897.24l.366.284a4.002 4.002 0 011.22-1.575zM8.887 10.648l-.34-.368a1 1 0 01-1.47 1.353l-.34-.368A2.49 2.49 0 006 10.609h-.17a2.502 2.502 0 00-1.542.533l-.366.285a2.49 2.49 0 00-.73 1.637v.016a2.49 2.49 0 00.73 1.638l.366.285a2.502 2.502 0 001.542.533h.624a1 1 0 010 2H5.48a4.002 4.002 0 01-2.467-.854l-.366-.284A4.002 4.002 0 011.427 14.82l.366-.285 a2.5 2.5 0 001.897-.24l.066-.015.099-.026v1.157l-.03.008-.067.015A4.002 4.002 0 011.86 15.2l-.366-.284a1 1 0 011.22-1.576zm5.613-5.648a1 1 0 010 2h-1.077c-.551 0-1.07.135-1.52.374l-.078.045-.078.05a2.491 2.491 0 00-.915.937l-.04.075-.02.043v-1.157l.044-.08a3.991 3.991 0 011.458-1.503l.115-.06.115-.05A3.994 3.994 0 0113.423 5H14.5z" clip-rule="evenodd" />
              </svg>
            </button>
             <button type="button" class="rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
               <span class="sr-only">Code</span>
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
            </button>
        </div>
      </div>
      <textarea rows="8" name="content" id="content" class="block w-full border-0 p-4 text-gray-900 shadow-none placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 font-mono text-sm leading-relaxed" placeholder="Write your content here..." />
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Markdown Editor" description="A clean, structured editor with a floating-style toolbar." :html-block="htmlBlock">
    <div class="max-w-2xl w-full">
      <label for="content" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Content Editor</label>
      <div class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm ring-1 ring-transparent focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 transition-all">
          <!-- Toolbar -->
          <div class="flex items-center gap-1 border-b border-gray-100 bg-gray-50/80 px-3 py-2">
            <div class="flex items-center rounded-lg bg-white shadow-sm border border-gray-200 p-0.5">
                <button type="button" class="rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                  <span class="sr-only">Bold</span>
                   <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                     <path fill-rule="evenodd" d="M13.5 3a1.5 1.5 0 011.5 1.5V17a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 015 17V4.5A1.5 1.5 0 016.5 3h7zM6.5 4.5V17h7V4.5h-7z" clip-rule="evenodd" />
                    <path d="M10 7a1 1 0 01.5.866l.006.134v7a1 1 0 01-2 0V8a1 1 0 011-1z" />
                  </svg>
                </button>
                <button type="button" class="rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                   <span class="sr-only">Italic</span>
                  <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                     <path fill-rule="evenodd" d="M12.924 3.125a.75.75 0 01.442.946l-4.5 12a.75.75 0 01-1.398-.544l4.5-12a.75.75 0 01.956-.402z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>

            <div class="h-5 w-px bg-gray-300 mx-1"></div>

            <div class="flex items-center rounded-lg bg-white shadow-sm border border-gray-200 p-0.5">
                 <button type="button" class="rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                   <span class="sr-only">Link</span>
                   <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                     <path fill-rule="evenodd" d="M12.5 5a2.5 2.5 0 012.35 1.76l.117.527a2.5 2.5 0 01-1.58.647h-1.077c.362.292.68.625.94 1H14.5a1 1 0 01.996 1.09l-.017.087a3.99 3.99 0 01-1.282 2.375l-.348.272a1 1 0 01-.157.108 3.999 3.999 0 01-2.079.61h-.5a1 1 0 01-.117-.007 3.994 3.994 0 01-1.87-1.155l-.337-.367a1 1 0 011.47-1.353l.34.368c.328.358.745.586 1.201.656h.17c.189 0 .373-.04.542-.113l.366-.285a2.49 2.49 0 00.73-1.638l.01-.17v-.016a2.49 2.49 0 00-.73-1.637l-.366-.285a2.502 2.502 0 00-1.542-.533h-.624a1 1 0 010-2h.624a4.002 4.002 0 012.467.854l.366.284a1 1 0 01-1.22 1.576l-.366-.285a2.5 2.5 0 00-1.897-.24l-.066.015-.098.026v-1.157l.03-.008.067-.015a4.002 4.002 0 011.897.24l.366.284a4.002 4.002 0 011.22-1.575zM8.887 10.648l-.34-.368a1 1 0 01-1.47 1.353l-.34-.368A2.49 2.49 0 006 10.609h-.17a2.502 2.502 0 00-1.542.533l-.366.285a2.49 2.49 0 00-.73 1.637v.016a2.49 2.49 0 00.73 1.638l.366.285a2.502 2.502 0 001.542.533h.624a1 1 0 010 2H5.48a4.002 4.002 0 01-2.467-.854l-.366-.284A4.002 4.002 0 011.427 14.82l.366-.285 a2.5 2.5 0 001.897-.24l.066-.015.099-.026v1.157l-.03.008-.067.015A4.002 4.002 0 011.86 15.2l-.366-.284a1 1 0 011.22-1.576zm5.613-5.648a1 1 0 010 2h-1.077c-.551 0-1.07.135-1.52.374l-.078.045-.078.05a2.491 2.491 0 00-.915.937l-.04.075-.02.043v-1.157l.044-.08a3.991 3.991 0 011.458-1.503l.115-.06.115-.05A3.994 3.994 0 0113.423 5H14.5z" clip-rule="evenodd" />
                  </svg>
                </button>
                 <button type="button" class="rounded p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                   <span class="sr-only">Code</span>
                    <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                </button>
            </div>
          </div>
          <textarea rows="8" name="content" id="content" class="block w-full border-0 p-4 text-gray-900 shadow-none placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 font-mono text-sm leading-relaxed" placeholder="Write your content here..." />
      </div>
    </div>
  </PreviewWrapper>
</template>
