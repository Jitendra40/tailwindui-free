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
            <img class="h-8 w-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="TailwindUI Free">
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
