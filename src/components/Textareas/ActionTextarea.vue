<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="w-full  mx-auto">
  <form action="#" class="relative flex items-center w-full p-3 bg-white border border-gray-200  rounded-xl focus-within:ring-2 focus-within:ring-black/5 focus-within:border-gray-300 transition-all">
    <!-- Attachment Button -->
    <label class="p-2 mr-2 text-gray-400 transition-colors rounded-full cursor-pointer hover:bg-gray-100 hover:text-gray-600" title="Attach file">
      <input type="file" class="sr-only" />
      <svg xmlns="http://www.w3.org/2000/svg" class="size-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
        <path stroke-linecap="round" stroke-linejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
      </svg>
      <span class="sr-only">Attach file</span>
    </label>

    <!-- Textarea -->
    <textarea 
      rows="1" 
      name="prompt" 
      id="prompt" 
      class="w-full p-3 bg-transparent border-0 resize-none focus:ring-0 max-h-64 placeholder:text-gray-400 text-gray-900 sm:text-sm sm:leading-6" 
      placeholder="Message ChatGPT..."
      style="min-height: 44px;"
    ></textarea>

    <!-- Send Button -->
    <button type="submit" class="p-2 ml-2 text-white transition-colors bg-black rounded-full hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed mb-1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
        <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
      </svg>
      <span class="sr-only">Send message</span>
    </button>
  </form>
  <div class="mt-2 text-center">
    <p class="text-xs text-center text-gray-500">ChatGPT can make mistakes. Consider checking important information.</p>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Chat Input" description="ChatGPT-style rounded input with attachment and send buttons." :html-block="htmlBlock">

  </PreviewWrapper>
</template>
