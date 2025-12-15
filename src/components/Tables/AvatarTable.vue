<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="px-4 sm:px-6 lg:px-8">
  <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
      <table class="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Name</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Title</th>
             <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Role</th>
            <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <tr>
            <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
              <div class="flex items-center">
                <div class="h-11 w-11 flex-shrink-0">
                  <img class="h-11 w-11 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </div>
                <div class="ml-4">
                  <div class="font-medium text-gray-900">Lindsay Walton</div>
                  <div class="text-gray-500">lindsay.walton@example.com</div>
                </div>
              </div>
            </td>
            <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
              <div class="text-gray-900">Front-end Developer</div>
              <div class="text-gray-500">Optimization</div>
            </td>
             <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
              <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
            </td>
            <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">Member</td>
            <td class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
              <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
            </td>
          </tr>
           <tr>
            <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
              <div class="flex items-center">
                <div class="h-11 w-11 flex-shrink-0">
                  <img class="h-11 w-11 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </div>
                <div class="ml-4">
                  <div class="font-medium text-gray-900">Courtney Henry</div>
                  <div class="text-gray-500">courtney.henry@example.com</div>
                </div>
              </div>
            </td>
            <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
              <div class="text-gray-900">Designer</div>
              <div class="text-gray-500">Intranet</div>
            </td>
             <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
              <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
            </td>
            <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">Admin</td>
            <td class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
              <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Courtney Henry</span></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Avatar Table" description="Table with user avatars." :html-block="htmlBlock">

  </PreviewWrapper>
</template>
