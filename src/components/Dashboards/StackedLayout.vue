<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

defineProps<{ isFullScreen?: boolean }>()

const htmlBlock = `
<!DOCTYPE html>
<html lang="en" class="h-full bg-gray-100">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - Stacked Layout</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style> body { font-family: 'Inter', sans-serif; } </style>
</head>
<body class="h-full">
<div class="min-h-full">
  <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0 flex items-center">
               <svg  class="h-10 w-auto mx-auto" width="155.68" height="30" viewBox="0 0 155.68 30">
  <g>
    <path d="M37.47,25.26V4.64h5.67c1.48,0,2.6.41,3.35,1.24s1.12,2.03,1.12,3.62v9.66c0,1.95-.34,3.46-1.03,4.52s-1.88,1.59-3.59,1.59h-5.53ZM41.62,21.62h.71c.76,0,1.14-.37,1.14-1.1v-10.64c0-.69-.09-1.13-.28-1.33s-.56-.3-1.12-.3h-.46v13.37Z"/>
    <path d="M54.08,25.45c-1.72,0-2.98-.48-3.8-1.45s-1.22-2.38-1.22-4.26V4.64h4.01v14.94c0,.34.02.67.06.99s.13.58.27.78.37.3.68.3.55-.1.69-.3.23-.46.26-.78.05-.65.05-1V4.64h4.01v15.11c0,1.88-.41,3.29-1.22,4.26s-2.08,1.45-3.8,1.45Z"/>
    <path d="M60.68,25.26V4.64h6.28l1.73,12.57,1.72-12.57h6.34v20.62h-3.77v-14.86l-2.37,14.86h-3.7l-2.51-14.86v14.86h-3.73Z"/>
    <path d="M78.58,25.26V4.64h6.28l1.73,12.57,1.72-12.57h6.34v20.62h-3.77v-14.86l-2.37,14.86h-3.7l-2.51-14.86v14.86h-3.73Z"/>
    <path d="M98.98,25.26v-6.79l-3.29-13.84h4.09l1.15,6.98,1.15-6.98h4.08l-3.28,13.84v6.79h-3.89Z"/>
    <path d="M112.82,25.26V4.64h4.12v17.11h4.24v3.52h-8.37Z"/>
    <path d="M127.29,25.45c-1.65,0-2.91-.5-3.78-1.49s-1.31-2.44-1.31-4.32v-9.8c0-1.77.43-3.11,1.29-4.02s2.13-1.37,3.79-1.37,2.93.46,3.79,1.37,1.29,2.25,1.29,4.02v9.8c0,1.88-.44,3.32-1.31,4.32s-2.13,1.49-3.78,1.49ZM127.32,21.65c.62,0,.94-.61.94-1.82v-10.07c0-1.02-.3-1.52-.91-1.52-.69,0-1.03.52-1.03,1.56v10.05c0,.64.08,1.1.23,1.38s.41.42.77.42Z"/>
    <path d="M138.29,25.45c-2.95,0-4.42-2.11-4.42-6.33v-8.89c0-3.85,1.69-5.78,5.06-5.78,1.39,0,2.46.28,3.2.84s1.25,1.37,1.54,2.44.42,2.38.42,3.91h-4.03v-1.83c0-.45-.06-.82-.18-1.12s-.37-.45-.76-.45c-.48,0-.79.16-.94.48s-.23.67-.23,1.05v10c0,.55.07,1.01.22,1.35s.43.52.85.52.73-.17.87-.52.22-.81.22-1.38v-2.94h-1.1v-3.56h5.04v12.01h-1.65l-.7-1.73c-.72,1.28-1.85,1.92-3.4,1.92Z"/>
    <path d="M150.59,25.45c-1.65,0-2.91-.5-3.78-1.49s-1.31-2.44-1.31-4.32v-9.8c0-1.77.43-3.11,1.29-4.02s2.13-1.37,3.79-1.37,2.93.46,3.79,1.37,1.29,2.25,1.29,4.02v9.8c0,1.88-.44,3.32-1.31,4.32s-2.13,1.49-3.78,1.49ZM150.63,21.65c.62,0,.94-.61.94-1.82v-10.07c0-1.02-.3-1.52-.91-1.52-.69,0-1.03.52-1.03,1.56v10.05c0,.64.08,1.1.23,1.38s.41.42.77.42Z"/>
  </g>
  <rect x="4.39" y="4.39" width="21.21" height="21.21" transform="translate(15 -6.21) rotate(45)"/>
</svg>
            <span class="ml-2 text-white font-bold text-lg">Stacked Layout</span>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">View notifications</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </button>

            <!-- Profile dropdown -->
            <div class="relative ml-3">
              <div>
                <button type="button" class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span class="absolute -inset-1.5"></span>
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <header class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
    </div>
  </header>
  <main>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <!-- Your content -->
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
             <!-- Welcome panel -->
             <div class="rounded-lg bg-white shadow lg:col-span-2">
                 <div class="p-6">
                     <h2 class="text-lg font-medium leading-6 text-gray-900">Welcome back!</h2>
                     <p class="mt-2 text-sm text-gray-500">Here's what's happening with your projects today.</p>
                     
                     <div class="mt-6 border-t border-gray-100 pt-6">
                         <div class="rounded-md bg-green-50 p-4">
                             <div class="flex">
                                 <div class="flex-shrink-0">
                                     <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                         <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                     </svg>
                                 </div>
                                 <div class="ml-3">
                                     <h3 class="text-sm font-medium text-green-800">System is healthy</h3>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             
             <!-- Stats small -->
             <div class="rounded-lg bg-white shadow">
                 <div class="p-6">
                     <h3 class="text-base font-semibold leading-6 text-gray-900">Performance</h3>
                     <dl class="mt-5 grid grid-cols-1 gap-5">
                         <div class="px-4 py-5 sm:p-0">
                             <dt class="text-sm font-medium truncate text-gray-500">Total Users</dt>
                             <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">12,345</dd>
                         </div>
                     </dl>
                 </div>
             </div>
        </div>
        
       <div class="mt-8 px-4 py-6 sm:px-0">
          <div class="h-96 rounded-lg border-4 border-dashed border-gray-200 flex items-center justify-center text-gray-400">
             Advanced Chart or Data Table
          </div>
       </div>
    </div>
  </main>
</div>
</body>
</html>
`;
</script>

<template>
  <PreviewWrapper title="Stacked Layout" description="Common application layout with dark nav and page header." :html-block="htmlBlock" :fullScreen="isFullScreen">
    <template #extra-nav>
        <slot name="extra-nav" />
    </template>
  </PreviewWrapper>
</template>
