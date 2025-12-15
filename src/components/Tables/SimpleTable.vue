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
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Role</th>
            <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr>
            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Lindsay Walton</td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Front-end Developer</td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">lindsay.walton@example.com</td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Member</td>
            <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
              <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
            </td>
          </tr>
          <tr>
            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Courtney Henry</td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Designer</td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">courtney.henry@example.com</td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Admin</td>
            <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
              <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Courtney Henry</span></a>
            </td>
          </tr>
          <tr>
            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">Tom Cook</td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Director of Product</td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">tom.cook@example.com</td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Member</td>
            <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
              <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Tom Cook</span></a>
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
  <PreviewWrapper title="Simple Table" description="Basic data table." :html-block="htmlBlock">
 
  </PreviewWrapper>
</template>
