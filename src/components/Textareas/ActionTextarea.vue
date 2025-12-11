<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<form action="#" class="relative">
  <div class="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 bg-white">
    <label for="description" class="sr-only">Description</label>
    <textarea rows="3" name="description" id="description" class="block w-full resize-none border-0 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Write a description..." ></textarea>

    <div class="py-2" aria-hidden="true">
      <div class="py-px">
        <div class="h-9" />
      </div>
    </div>
  </div>

  <div class="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2 bg-white/50 backdrop-blur-sm border-t border-gray-100">
    <div class="flex items-center space-x-5">
      <div class="flex items-center">
        <!-- Attach button -->
        <button type="button" class="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
          </svg>
          <span class="sr-only">Attach a file</span>
        </button>
      </div>
      <div class="flex items-center">
         <!-- Tag button -->
        <button type="button" class="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
           <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clip-rule="evenodd" />
          </svg>
          <span class="sr-only">Mention someone</span>
        </button>
      </div>
    </div>
    <button type="submit" class="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Post</button>
  </div>
</form>
`
</script>

<template>
  <PreviewWrapper title="Action Textarea" description="Integrated submit and action buttons." :html-block="htmlBlock">
    <form action="#" class="relative">
      <div class="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 bg-white">
        <label for="description" class="sr-only">Description</label>
        <textarea rows="3" name="description" id="description" class="block w-full resize-none border-0 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Write a description..." ></textarea>

        <!-- Spacer element to match the height of the toolbar -->
        <div class="py-2" aria-hidden="true">
          <!-- Matches height of button in toolbar (1px border + 36px content height) -->
          <div class="py-px">
            <div class="h-9" />
          </div>
        </div>
      </div>

      <div class="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2 bg-white/50 backdrop-blur-sm border-t border-gray-100">
        <div class="flex items-center space-x-5">
           <div class="flex items-center">
            <button type="button" class="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
                </svg>
              <span class="sr-only">Attach a file</span>
            </button>
          </div>
          <div class="flex items-center">
            <button type="button" class="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500">
                 <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clip-rule="evenodd" />
                </svg>
              <span class="sr-only">Mention someone</span>
            </button>
          </div>
        </div>
        <button type="submit" class="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Post</button>
      </div>
    </form>
  </PreviewWrapper>
</template>
