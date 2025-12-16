<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="w-full">
  <label for="markdown-editor" class="block text-sm font-medium leading-6 text-gray-700 mb-2">Markdown Editor</label>
  <div class="w-full rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-indigo-600 focus-within:border-transparent transition-all">
    
    <!-- Tab Navigation / Toolbar Header -->
    <div class="flex items-center justify-between border-b border-gray-200 bg-gray-50/50 px-3 py-2">
      <div class="flex space-x-1 rounded-lg bg-gray-100 p-0.5">
          <button class="rounded-md bg-white px-3 py-1.5 text-xs font-medium text-gray-900 shadow-sm focus:z-10">Write</button>
          <button class="rounded-md px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900 focus:z-10">Preview</button>
      </div>
      <div class="flex items-center space-x-2">
         <span class="text-xs text-gray-400">Markdown supported</span>
      </div>
    </div>

    <!-- Toolbar Actions -->
    <div class="flex items-center gap-1 border-b border-gray-100 bg-white px-3 py-2">
        <button type="button" class="p-1.5 text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 rounded transition-colors" title="Bold">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
                <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
            </svg>
        </button>
        <button type="button" class="p-1.5 text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 rounded transition-colors" title="Italic">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="19" y1="4" x2="10" y2="4"></line>
                <line x1="14" y1="20" x2="5" y2="20"></line>
                <line x1="15" y1="4" x2="9" y2="20"></line>
            </svg>
        </button>
        <button type="button" class="p-1.5 text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 rounded transition-colors" title="Underline">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path>
                <line x1="4" y1="21" x2="20" y2="21"></line>
            </svg>
        </button>
        <button type="button" class="p-1.5 text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 rounded transition-colors" title="Strikethrough">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17.3 19c-1.4 1.3-3.2 2-5.3 2-4.4 0-8-3.6-8-8 0-2.4 1-4.6 2.6-6.1"></path>
                <path d="M10 3c2.4 0 4.6 1 6.1 2.6"></path>
                <line x1="4" y1="12" x2="20" y2="12"></line>
            </svg>
        </button>

        <div class="w-px h-4 bg-gray-200 mx-2"></div>

        <button type="button" class="p-1.5 text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 rounded transition-colors" title="Link">
             <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
             </svg>
        </button>
         <button type="button" class="p-1.5 text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 rounded transition-colors" title="Image">
             <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
             </svg>
        </button>
        <button type="button" class="p-1.5 text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 rounded transition-colors" title="Code">
             <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
             </svg>
        </button>

         <div class="w-px h-4 bg-gray-200 mx-2"></div>

         <button type="button" class="p-1.5 text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 rounded transition-colors" title="List">
             <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
             </svg>
        </button>
    </div>

    <!-- Textarea -->
    <textarea rows="10" name="markdown-editor" id="markdown-editor" class="block w-full border-0 p-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 font-mono bg-white" placeholder="Type your markdown here..."></textarea>
    
    <!-- Footer / Status -->
    <div class="bg-gray-50 px-3 py-2 border-t border-gray-100 flex justify-between items-center">
        <span class="text-xs text-gray-500">0 words</span>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Markdown Editor" description="A modern, tabbed content editor with rich formatting toolbar." :html-block="htmlBlock">

  </PreviewWrapper>
</template>
