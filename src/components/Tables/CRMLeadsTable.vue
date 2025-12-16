<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="px-4 sm:px-6 lg:px-8">
  <div class="sm:flex sm:items-center">
    <div class="sm:flex-auto">
      <h1 class="text-base font-semibold leading-6 text-gray-900">Leads</h1>
      <p class="mt-2 text-sm text-gray-700">List of sales leads with status, source and assigned agent.</p>
    </div>
    <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
      <button type="button" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Lead</button>
    </div>
  </div>
  <div class="mt-8 flow-root">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <table class="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Lead Name</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Source</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Assigned To</th>
              <th scope="col" class="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">Est. Value</th>
              <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
                <div class="flex items-center">
                  <div class="h-10 w-10 flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  </div>
                  <div class="ml-4">
                    <div class="font-medium text-gray-900">Lindsay Walton</div>
                    <div class="text-gray-500">lindsay.walton@example.com</div>
                  </div>
                </div>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Website Signup</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                 <div class="flex items-center gap-x-2">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-6 w-6 rounded-full bg-gray-50">
                    <span class="font-medium text-gray-900">Tom Cook</span>
                 </div>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-right text-sm text-gray-500">â‚¹1,20,000</td>
              <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                <a href="javascript:void(0)" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Lindsay Walton</span></a>
              </td>
            </tr>
            <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
                <div class="flex items-center">
                  <div class="h-10 w-10 flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  </div>
                  <div class="ml-4">
                    <div class="font-medium text-gray-900">Michael Foster</div>
                    <div class="text-gray-500">michael.foster@example.com</div>
                  </div>
                </div>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <span class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Pending</span>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">LinkedIn Campaign</td>
               <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                 <div class="flex items-center gap-x-2">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-6 w-6 rounded-full bg-gray-50">
                    <span class="font-medium text-gray-900">Tom Cook</span>
                 </div>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-right text-sm text-gray-500">â‚¹85,000</td>
              <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                <a href="javascript:void(0)" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Michael Foster</span></a>
              </td>
            </tr>
            <tr>
               <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
                <div class="flex items-center">
                  <div class="h-10 w-10 flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  </div>
                  <div class="ml-4">
                    <div class="font-medium text-gray-900">Dries Vincent</div>
                    <div class="text-gray-500">dries.vincent@example.com</div>
                  </div>
                </div>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Churned</span>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Referral</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  <div class="flex items-center gap-x-2">
                    <div class="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">UN</div>
                    <span class="font-medium text-gray-900">Unassigned</span>
                 </div>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-right text-sm text-gray-500">â‚¹0</td>
              <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                <a href="javascript:void(0)" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, Dries Vincent</span></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="CRM Leads List" description="Sales leads table for CRM with lead status and salesperson assignment." :html-block="htmlBlock" />
</template>
