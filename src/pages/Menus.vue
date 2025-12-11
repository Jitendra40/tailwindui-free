<script setup lang="ts">
import SimpleMenu from "@/components/Menus/SimpleMenu.vue"
import IconMenu from "@/components/Menus/IconMenu.vue"
import SectionMenu from "@/components/Menus/SectionMenu.vue"
import AvatarMenu from "@/components/Menus/AvatarMenu.vue"
import ContextMenu from "@/components/Menus/ContextMenu.vue"
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const simpleCode = `<div class="relative inline-block text-left">
    <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
      Options
      <ChevronDown class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
    </button>
    <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div class="py-1">
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Account settings</a>
        <!-- ... -->
      </div>
    </div>
  </div>`

const iconCode = `<div class="relative inline-block text-left">
  <!-- Button -->
  <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu">
    <div class="py-1" role="none">
          <a href="#" class="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
            <Edit class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
            Edit
        </a>
        <!-- ... -->
    </div>
    <!-- ... -->
  </div>
</div>`

const sectionCode = `<div class="relative inline-block text-left">
  <!-- Button -->
  <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    <div class="px-4 py-3" role="none">
      <p class="text-sm" role="none">Signed in as</p>
      <p class="truncate text-sm font-medium text-gray-900" role="none">tom@example.com</p>
    </div>
    <div class="py-1" role="none">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Account settings</a>
      <!-- ... -->
    </div>
    <!-- ... -->
  </div>
</div>`

const avatarCode = `<div class="relative ml-3">
  <div>
    <button type="button" class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
      <span class="sr-only">Open user menu</span>
      <img class="h-8 w-8 rounded-full" src="..." alt="" />
    </button>
  </div>
  <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
    <!-- ... -->
  </div>
</div>`

const contextCode = `<div class="relative inline-block text-left">
   <button type="button" class="flex items-center rounded-full text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
       <span class="sr-only">Open options</span>
       <MoreVertical class="h-5 w-5" aria-hidden="true" />
   </button>
    <div class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
       <div class="py-1">
         <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">View profile</a>
         <!-- ... -->
       </div>
   </div>
</div>`
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-1">
      <h1 class="text-2xl font-semibold text-gray-900">Menus</h1>
      <p class="text-gray-500">Overlay menus for navigation and actions.</p>
    </div>

    <div class="grid gap-10">
      <PreviewWrapper title="Simple Dropdown" description="Basic menu triggered by a button." :html-block="simpleCode">
        <div class="pb-32 flex justify-center"><SimpleMenu /></div>
      </PreviewWrapper>

      <PreviewWrapper title="With Icons" description="Menu items with leading icons." :html-block="iconCode">
         <!-- Added padding bottom to allow menu to show without being clipped if container was small, though preview wrapper handles this. Centering for better preview. -->
        <div class="pb-40 flex justify-center"><IconMenu /></div>
      </PreviewWrapper>

      <PreviewWrapper title="Sectioned" description="Menu with grouped items and info." :html-block="sectionCode">
         <div class="pb-48 flex justify-center"><SectionMenu /></div>
      </PreviewWrapper>

      <PreviewWrapper title="User Menu" description="Avatar trigger for profile actions." :html-block="avatarCode">
         <div class="pb-32 flex justify-center"><AvatarMenu /></div>
      </PreviewWrapper>

       <PreviewWrapper title="Context Menu" description="Minimal 'kebab' menu for dense interfaces." :html-block="contextCode">
         <div class="pb-32 flex justify-center"><ContextMenu /></div>
      </PreviewWrapper>
    </div>
  </div>
</template>
