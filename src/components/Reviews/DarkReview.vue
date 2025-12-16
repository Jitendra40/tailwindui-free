<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="rounded-xl bg-gray-900 p-6 shadow-md ring-1 ring-white/10 sm:p-8 max-w-sm mx-auto">
  <div class="flex items-center gap-x-4">
    <img class="h-10 w-10 rounded-full bg-gray-800 object-cover" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
    <div>
       <div class="text-sm font-semibold text-white">David Miller</div>
       <div class="text-xs text-gray-400">@davidm_dev</div>
    </div>
    <div class="ml-auto">
       <svg class="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
       </svg>
    </div>
  </div>
  <p class="mt-4 text-xs leading-relaxed text-gray-300">"Just deployed my first project with this new framework. The speed and developer experience are absolutely mind-blowing! 🚀🔥 #webdev #100DaysOfCode"</p>
  <div class="mt-4 border-t border-white/10 pt-4 flex justify-between items-center text-xs text-gray-500">
     <span>10:24 AM · Apr 1, 2024</span>
     <div class="flex gap-3">
        <span class="hover:text-gray-300 cursor-pointer flex items-center gap-1"><svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg> 24</span>
        <span class="hover:text-gray-300 cursor-pointer flex items-center gap-1"><svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg> 4</span>
     </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper 
    title="Compact Dark Social Review" 
    description="A dark-themed social media style review card." 
    :html-block="htmlBlock" 
    default-viewport="full"
  />
</template>
