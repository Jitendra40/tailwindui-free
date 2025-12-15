<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="px-4 sm:px-6 lg:px-8">
  <div class="sm:flex sm:items-center">
    <div class="sm:flex-auto">
      <h1 class="text-base font-semibold leading-6 text-gray-900">Site Visits</h1>
      <p class="mt-2 text-sm text-gray-700">Scheduled property visits for agents today.</p>
    </div>
    <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
      <button type="button" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Schedule Visit</button>
    </div>
  </div>
  <div class="mt-8 flow-root">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <table class="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Property</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Client</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date & Time</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Agent</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
              <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                <span class="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
                <div class="flex items-center">
                  <div class="h-16 w-24 flex-shrink-0">
                    <img class="h-16 w-24 rounded-lg object-cover" src="https://images.unsplash.com/photo-1600596542815-2250657d2f96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" alt="Modern Villa">
                  </div>
                  <div class="ml-4">
                    <div class="font-medium text-gray-900">The Grand Arch</div>
                    <div class="text-gray-500">Unit 402, Tower B</div>
                  </div>
                </div>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                 <div class="font-medium text-gray-900">Rahul Sharma</div>
                 <div class="text-xs text-gray-400">+91 98765 43210</div>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <div class="text-gray-900">Oct 24, 2023</div>
                <div class="text-xs text-gray-400">10:00 AM</div>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <div class="flex items-center gap-x-2">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-6 w-6 rounded-full bg-gray-50">
                    <span class="font-medium text-gray-900">Amit Kumar</span>
                 </div>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Scheduled</span>
              </td>
              <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Reschedule</a>
              </td>
            </tr>
            <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
                <div class="flex items-center">
                  <div class="h-16 w-24 flex-shrink-0">
                    <img class="h-16 w-24 rounded-lg object-cover" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Urban Apartment">
                  </div>
                  <div class="ml-4">
                    <div class="font-medium text-gray-900">Greenwood Estates</div>
                    <div class="text-gray-500">Plot 12, Sector 45</div>
                  </div>
                </div>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <div class="font-medium text-gray-900">Priya Singh</div>
                 <div class="text-xs text-gray-400">+91 99887 76655</div>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <div class="text-gray-900">Oct 24, 2023</div>
                <div class="text-xs text-gray-400">02:30 PM</div>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                 <div class="flex items-center gap-x-2">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-6 w-6 rounded-full bg-gray-50">
                    <span class="font-medium text-gray-900">Amit Kumar</span>
                 </div>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Completed</span>
              </td>
              <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Feedback</a>
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
  <PreviewWrapper title="Real Estate Site Visits" description="Property visit schedule table with property images and client details." :html-block="htmlBlock" />
</template>
