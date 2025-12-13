<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="relative inline-block text-left h-56">
  <details class="group">
    <summary class="flex cursor-pointer items-center gap-2 rounded-full ring-2 ring-gray-100 transition-all hover:ring-blue-100 focus:outline-none list-none">
      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-10 w-10 rounded-full object-cover">
      <div class="sr-only">User menu</div>
    </summary>
    <div class="absolute right-0 top-full mt-1 w-64 origin-top-right divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
      <div class="px-4 py-3">
        <p class="text-sm text-gray-900">Signed in as</p>
        <p class="truncate text-sm font-medium text-gray-900">tom@example.com</p>
      </div>
      <div class="py-1">
        <a href="#" class="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
          Account settings
        </a>
        <a href="#" class="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
          Support
        </a>
        <a href="#" class="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
          License
        </a>
      </div>
      <div class="py-1">
        <a href="#" class="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
          Sign out
        </a>
      </div>
    </div>
  </details>
</div>`
</script>

<template>
  <PreviewWrapper
    title="User Profile"
    description="Avatar trigger with user info and divided sections."
    :html-block="htmlBlock"
  >
    <div class="relative inline-block text-left h-56">
      <details class="group">
        <summary class="flex cursor-pointer items-center gap-2 rounded-full ring-2 ring-gray-100 transition-all hover:ring-blue-100 focus:outline-none list-none">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-10 w-10 rounded-full object-cover">
          <div class="sr-only">User menu</div>
        </summary>
        <div class="absolute left-0 top-full mt-1 w-64 origin-top-left divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10 transition-all opacity-0 scale-95 group-open:opacity-100 group-open:scale-100 duration-100 ease-out">
          <div class="px-4 py-3">
            <p class="text-sm text-gray-500">Signed in as</p>
            <p class="truncate text-sm font-medium text-gray-900">tom@example.com</p>
          </div>
          <div class="py-1">
            <a href="#" class="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
              Account settings
            </a>
            <a href="#" class="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
              Support
            </a>
            <a href="#" class="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
              License
            </a>
          </div>
          <div class="py-1">
            <a href="#" class="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
              Sign out
            </a>
          </div>
        </div>
      </details>
    </div>
  </PreviewWrapper>
</template>
