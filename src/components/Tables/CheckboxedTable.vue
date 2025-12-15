<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="px-4 sm:px-6 lg:px-8">
  <div class="sm:flex sm:items-center">
    <div class="sm:flex-auto">
      <h1 class="text-base font-semibold leading-6 text-gray-900">Users</h1>
      <p class="mt-2 text-sm text-gray-700">A list of all the users in your account including their name, title, email and role.</p>
    </div>
    <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
      <button type="button" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add user</button>
    </div>
  </div>
  <div class="mt-8 flow-root">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div class="relative">
          <table class="min-w-full table-fixed divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" class="relative px-7 sm:w-12 sm:px-6">
                  <input type="checkbox" class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                </th>
                <th scope="col" class="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">Name</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Title</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email</th>
                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Role</th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <!-- Selected row -->
              <tr class="bg-gray-50">
                <td class="relative px-7 sm:w-12 sm:px-6">
                  <div class="absolute inset-y-0 left-0 w-0.5 bg-indigo-600"></div>
                  <input type="checkbox" class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" checked />
                </td>
                <td class="whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-900">Lindsay Walton</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Front-end Developer</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">lindsay.walton@example.com</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Member</td>
                <td class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
                </td>
              </tr>
              <tr>
                <td class="relative px-7 sm:w-12 sm:px-6">
                  <!-- <div class="absolute inset-y-0 left-0 w-0.5 bg-indigo-600"></div> -->
                  <input type="checkbox" class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                </td>
                <td class="whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-900">Courtney Henry</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Designer</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">courtney.henry@example.com</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Admin</td>
                <td class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Courtney Henry</span></a>
                </td>
              </tr>
              <tr>
                <td class="relative px-7 sm:w-12 sm:px-6">
                  <!-- <div class="absolute inset-y-0 left-0 w-0.5 bg-indigo-600"></div> -->
                  <input type="checkbox" class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                </td>
                <td class="whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-900">Tom Cook</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Director of Product</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">tom.cook@example.com</td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Member</td>
                <td class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Tom Cook</span></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Table with Checkboxes" description="A table with checkboxes for selecting rows." :html-block="htmlBlock" />
</template>
