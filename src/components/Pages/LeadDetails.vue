<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue";

defineProps<{ isFullScreen?: boolean }>()

const htmlBlock = `
<!DOCTYPE html>
<html lang="en" class="h-full bg-gray-50">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lead Details - CRM</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style> body { font-family: 'Inter', sans-serif; } </style>
</head>
<body class="h-full">
    <div class="min-h-full">
        <!-- Navigation -->
        <nav class="bg-indigo-600 border-b border-indigo-500">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center justify-between">
                    <div class="flex items-center">
                        <div class="flex-shrink-0 flex items-center">
                           <span class="ml-2 text-white font-bold text-lg">CRM</span>
                        </div>
                        <div class="hidden md:block">
                            <div class="ml-10 flex items-baseline space-x-4">
                                <a href="#" class="bg-indigo-700 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
                                <a href="#" class="text-white hover:bg-indigo-500 hover:bg-opacity-75 rounded-md px-3 py-2 text-sm font-medium">Leads</a>
                                <a href="#" class="text-white hover:bg-indigo-500 hover:bg-opacity-75 rounded-md px-3 py-2 text-sm font-medium">Deals</a>
                                <a href="#" class="text-white hover:bg-indigo-500 hover:bg-opacity-75 rounded-md px-3 py-2 text-sm font-medium">Reports</a>
                            </div>
                        </div>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-4 flex items-center md:ml-6">
                            <button type="button" class="relative rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none">
                                <span class="sr-only">View notifications</span>
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>
                            </button>
                            <div class="relative ml-3">
                                <div>
                                    <button type="button" class="relative flex max-w-xs items-center rounded-full bg-indigo-600 text-sm focus:outline-none" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
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
            <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex items-center justify-between">
                <div>
                    <h1 class="text-3xl font-bold tracking-tight text-gray-900">Lead: Ricardo Cooper</h1>
                    <p class="mt-1 text-sm text-gray-500">Added on Dec 12, 2024</p>
                </div>
                <div class="flex gap-3">
                     <button type="button" class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Edit</button>
                     <button type="button" class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Convert to Deal</button>
                </div>
            </div>
        </header>

        <main>
            <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    
                    <!-- Left Column: Contact Info & Details -->
                    <div class="lg:col-span-1 space-y-6">
                        <!-- Contact Card -->
                        <div class="overflow-hidden rounded-lg bg-white shadow">
                            <div class="px-4 py-5 sm:px-6 flex items-center gap-4">
                                <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                                <div>
                                    <h3 class="text-base font-semibold leading-6 text-gray-900">Ricardo Cooper</h3>
                                    <p class="max-w-2xl text-sm text-gray-500">Marketing Director at Acme Inc.</p>
                                </div>
                            </div>
                            <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                                <dl class="divide-y divide-gray-200">
                                    <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-500">Email</dt>
                                        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">ricardo.cooper@example.com</dd>
                                    </div>
                                    <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-500">Phone</dt>
                                        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">+1 (555) 123-4567</dd>
                                    </div>
                                    <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-500">Location</dt>
                                        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">San Francisco, CA</dd>
                                    </div>
                                      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt class="text-sm font-medium text-gray-500">Source</dt>
                                        <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"><span class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Website</span></dd>
                                    </div>
                                </dl>
                            </div>
                        </div>

                        <!-- Tags / Status -->
                        <div class="overflow-hidden rounded-lg bg-white shadow">
                             <div class="px-4 py-5 sm:px-6">
                                <h3 class="text-base font-semibold leading-6 text-gray-900">Lead Status</h3>
                            </div>
                            <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                                 <nav class="flex flex-col gap-2">
                                     <div class="flex items-center gap-3 p-2 rounded-md bg-indigo-50 border border-indigo-100">
                                        <div class="h-2.5 w-2.5 rounded-full bg-indigo-600"></div>
                                        <span class="text-sm font-medium text-indigo-700">New Lead</span>
                                        <span class="ml-auto text-xs text-indigo-500">Current</span>
                                     </div>
                                      <div class="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 cursor-pointer">
                                        <div class="h-2.5 w-2.5 rounded-full bg-gray-300"></div>
                                        <span class="text-sm font-medium text-gray-600">Attempted Contact</span>
                                     </div>
                                      <div class="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 cursor-pointer">
                                        <div class="h-2.5 w-2.5 rounded-full bg-gray-300"></div>
                                        <span class="text-sm font-medium text-gray-600">Connected</span>
                                     </div>
                                 </nav>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Activity Feed -->
                    <div class="lg:col-span-2">
                         <div class="overflow-hidden rounded-lg bg-white shadow">
                             <div class="px-4 py-5 sm:px-6 flex justify-between items-center">
                                <h3 class="text-base font-semibold leading-6 text-gray-900">Activity History</h3>
                                <div class="flex gap-2">
                                     <button class="text-xs font-medium text-indigo-600 hover:text-indigo-500">Log Call</button>
                                     <span class="text-gray-300">|</span>
                                     <button class="text-xs font-medium text-indigo-600 hover:text-indigo-500">Log Email</button>
                                     <span class="text-gray-300">|</span>
                                     <button class="text-xs font-medium text-indigo-600 hover:text-indigo-500">Add Note</button>
                                </div>
                            </div>
                            <div class="border-t border-gray-200 p-6">
                                <ul role="list" class="space-y-6">
                                    <li class="relative flex gap-x-4">
                                        <div class="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div class="w-px bg-gray-200"></div>
                                        </div>
                                        <div class="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                            <div class="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                        </div>
                                        <p class="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span class="font-medium text-gray-900">Sarah Johnson</span> created the lead.</p>
                                        <time datetime="2023-01-23T10:32" class="flex-none py-0.5 text-xs leading-5 text-gray-500">2d ago</time>
                                    </li>
                                     <li class="relative flex gap-x-4">
                                        <div class="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div class="w-px bg-gray-200"></div>
                                        </div>
                                        <div class="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                            <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                        <div class="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
                                             <div class="flex justify-between gap-x-4">
                                                <div class="py-0.5 text-xs leading-5 text-gray-500"><span class="font-medium text-gray-900">Sarah Johnson</span> sent an email.</div>
                                                <time datetime="2023-01-23T11:03" class="flex-none py-0.5 text-xs leading-5 text-gray-500">1d ago</time>
                                            </div>
                                            <p class="text-sm leading-6 text-gray-500">Hey Ricardo, just wanted to follow up on our conversation about the enterprise plan.</p>
                                        </div>
                                    </li>
                                     <li class="relative flex gap-x-4">
                                        <div class="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div class="w-px bg-gray-200"></div>
                                        </div>
                                        <div class="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                            <div class="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                        </div>
                                        <p class="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span class="font-medium text-gray-900">You</span> viewed the profile.</p>
                                        <time datetime="2023-01-24T09:12" class="flex-none py-0.5 text-xs leading-5 text-gray-500">1h ago</time>
                                    </li>
                                </ul>

                                <!-- New Note Input -->
                                <div class="mt-8 flex gap-x-3">
                                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-6 w-6 flex-none rounded-full bg-gray-50">
                                    <form action="#" class="relative flex-auto">
                                        <div class="overflow-hidden rounded-lg pb-12 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                                            <label for="comment" class="sr-only">Add your note</label>
                                            <textarea rows="2" name="comment" id="comment" class="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Add a note..."></textarea>
                                        </div>
                                        <div class="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                                            <div class="flex items-center space-x-5">
                                            </div>
                                            <button type="submit" class="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Note</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
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
  <PreviewWrapper
    title="Lead Details Page"
    description="CRM style lead details with activity feed."
    :html-block="htmlBlock"
    default-viewport="full"
    :fullScreen="isFullScreen"
  >
    <template #extra-nav>
        <slot name="extra-nav" />
    </template>
    <div class="w-full h-[800px] border border-gray-200 rounded-lg overflow-hidden bg-white flex items-center justify-center text-gray-400 bg-gray-50">
        <span class="text-sm">Content rendered via HTML Block</span>
    </div>
  </PreviewWrapper>
</template>
