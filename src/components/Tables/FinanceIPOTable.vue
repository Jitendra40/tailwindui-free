<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="px-4 sm:px-6 lg:px-8">
  <div class="sm:flex sm:items-center">
    <div class="sm:flex-auto">
      <h1 class="text-base font-semibold leading-6 text-gray-900">Live IPO Watch</h1>
      <p class="mt-2 text-sm text-gray-700">Real-time tracking of Mainboard and SME IPOs with GMP and subscription status.</p>
    </div>
    <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
      <button type="button" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">View All</button>
    </div>
  </div>
  <div class="mt-8 flow-root">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <table class="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">IPO Name</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Price Band</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">GMP (₹)</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Est. Listing</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Subscription</th>
              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
                <div class="flex items-center">
                  <div class="h-10 w-10 flex-shrink-0">
                    <img class="h-10 w-10 rounded-full bg-gray-50 object-contain p-1" src="https://logo.clearbit.com/tata.com" alt="Tata Tech">
                  </div>
                  <div class="ml-4">
                    <div class="font-medium text-gray-900">Tata Technologies</div>
                    <div class="text-gray-500">Mainboard</div>
                  </div>
                </div>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <div class="text-gray-900">₹475 - ₹500</div>
                <div class="text-xs text-gray-400">Lot: 30 Shares</div>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <span class="text-green-600 font-medium">+₹380 (76%)</span>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">₹880</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <div class="font-medium">69.43x</div>
                <div class="text-xs">QIB: 203x</div>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Allotment Out</span>
              </td>
            </tr>
            <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
                <div class="flex items-center">
                  <div class="h-10 w-10 flex-shrink-0">
                     <div class="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">G</div>
                  </div>
                  <div class="ml-4">
                    <div class="font-medium text-gray-900">Gandhar Oil Refinery</div>
                    <div class="text-gray-500">Mainboard</div>
                  </div>
                </div>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <div class="text-gray-900">₹160 - ₹169</div>
                <div class="text-xs text-gray-400">Lot: 88 Shares</div>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <span class="text-green-600 font-medium">+₹75 (44%)</span>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">₹244</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <div class="font-medium">64.07x</div>
                <div class="text-xs">Retail: 29x</div>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <span class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Live</span>
              </td>
            </tr>
            <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
                <div class="flex items-center">
                  <div class="h-10 w-10 flex-shrink-0">
                    <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">F</div>
                  </div>
                  <div class="ml-4">
                    <div class="font-medium text-gray-900">Flair Writing Ind</div>
                    <div class="text-gray-500">Mainboard</div>
                  </div>
                </div>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <div class="text-gray-900">₹288 - ₹304</div>
                <div class="text-xs text-gray-400">Lot: 49 Shares</div>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <span class="text-green-600 font-medium">+₹84 (27%)</span>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">₹388</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <div class="font-medium">46.68x</div>
                <div class="text-xs">NII: 33x</div>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <span class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Closed</span>
              </td>
            </tr>
             <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
                <div class="flex items-center">
                  <div class="h-10 w-10 flex-shrink-0">
                     <div class="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">I</div>
                  </div>
                  <div class="ml-4">
                    <div class="font-medium text-gray-900">IREDA</div>
                    <div class="text-gray-500">PSU Divestment</div>
                  </div>
                </div>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <div class="text-gray-900">₹30 - ₹32</div>
                <div class="text-xs text-gray-400">Lot: 460 Shares</div>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <span class="text-green-600 font-medium">+₹10 (31%)</span>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">₹42</td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <div class="font-medium">38.80x</div>
                <div class="text-xs">QIB: 104x</div>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Listed</span>
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
  <PreviewWrapper title="IPO Listing & GMP Table" description="IPO tracking table with price bands, Grey Market Premium (GMP), and subscription data." :html-block="htmlBlock" />
</template>
