<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="px-4 sm:px-6 lg:px-8">
  <div class="sm:flex sm:items-center">
    <div class="sm:flex-auto">
      <h1 class="text-base font-semibold leading-6 text-gray-900">Market Movers</h1>
      <p class="mt-2 text-sm text-gray-700">Top gainers and losers in the NIFTY 50 today.</p>
    </div>
    <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
       <div class="flex rounded-md shadow-sm">
        <button type="button" class="relative inline-flex items-center rounded-l-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-indigo-600 hover:bg-indigo-500 focus:z-10">All</button>
        <button type="button" class="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">Gainers</button>
        <button type="button" class="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">Losers</button>
      </div>
    </div>
  </div>
  <div class="mt-8 flow-root">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <table class="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Symbol</th>
              <th scope="col" class="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">LTP (₹)</th>
              <th scope="col" class="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">Change (%)</th>
              <th scope="col" class="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">Volume</th>
              <th scope="col" class="px-3 py-3.5 text-right text-sm font-semibold text-gray-900">52W High</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                ADANIENT
                <span class="ml-2 inline-flex items-center rounded-md bg-gray-50 px-1.5 py-0.5 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">EQ</span>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-right text-sm font-semibold text-gray-900">2,845.50</td>
              <td class="whitespace-nowrap px-3 py-4 text-right text-sm font-medium text-green-600">
                 <span class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                  <svg class="-ml-1 mr-0.5 h-3 w-3 flex-shrink-0 self-center text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" />
                  </svg>
                  4.85%
                </span>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-right text-sm text-gray-500">2.4M</td>
              <td class="whitespace-nowrap px-3 py-4 text-right text-sm text-gray-500">3,280.00</td>
            </tr>
            <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                TECHM
                 <span class="ml-2 inline-flex items-center rounded-md bg-gray-50 px-1.5 py-0.5 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">EQ</span>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-right text-sm font-semibold text-gray-900">1,210.35</td>
              <td class="whitespace-nowrap px-3 py-4 text-right text-sm font-medium text-green-600">
                 <span class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 md:mt-2 lg:mt-0">
                  <svg class="-ml-1 mr-0.5 h-3 w-3 flex-shrink-0 self-center text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" />
                  </svg>
                  2.15%
                </span>
              </td>
               <td class="whitespace-nowrap px-3 py-4 text-right text-sm text-gray-500">1.8M</td>
              <td class="whitespace-nowrap px-3 py-4 text-right text-sm text-gray-500">1,320.00</td>
            </tr>
             <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                INFY
                 <span class="ml-2 inline-flex items-center rounded-md bg-gray-50 px-1.5 py-0.5 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">EQ</span>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-right text-sm font-semibold text-gray-900">1,450.80</td>
              <td class="whitespace-nowrap px-3 py-4 text-right text-sm font-medium text-red-600">
                <span class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 md:mt-2 lg:mt-0">
                  <svg class="-ml-1 mr-0.5 h-3 w-3 flex-shrink-0 self-center text-red-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clip-rule="evenodd" />
                  </svg>
                  -1.40%
                </span>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-right text-sm text-gray-500">5.2M</td>
              <td class="whitespace-nowrap px-3 py-4 text-right text-sm text-gray-500">1,675.00</td>
            </tr>
             <tr>
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                TATAMOTORS
                 <span class="ml-2 inline-flex items-center rounded-md bg-gray-50 px-1.5 py-0.5 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">EQ</span>
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-right text-sm font-semibold text-gray-900">720.50</td>
              <td class="whitespace-nowrap px-3 py-4 text-right text-sm font-medium text-red-600">
                 <span class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 md:mt-2 lg:mt-0">
                  <svg class="-ml-1 mr-0.5 h-3 w-3 flex-shrink-0 self-center text-red-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                     <path fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clip-rule="evenodd" />
                  </svg>
                  -0.85%
                </span>
              </td>
               <td class="whitespace-nowrap px-3 py-4 text-right text-sm text-gray-500">4.1M</td>
              <td class="whitespace-nowrap px-3 py-4 text-right text-sm text-gray-500">735.00</td>
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
  <PreviewWrapper title="Market Movers" description="Stock market gainers and losers table with percentage change indicators." :html-block="htmlBlock" />
</template>
