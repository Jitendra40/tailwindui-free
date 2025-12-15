<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="px-4 sm:px-6 lg:px-8">
  <div class="sm:flex sm:items-center">
    <div class="sm:flex-auto">
      <h1 class="text-base font-semibold leading-6 text-gray-900">Transactions</h1>
      <p class="mt-2 text-sm text-gray-700">A dense table showing the latest transactions.</p>
    </div>
    <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
      <button type="button" class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Export</button>
    </div>
  </div>
  <div class="mt-8 flow-root">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <table class="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th scope="col" class="whitespace-nowrap py-2 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">Transaction ID</th>
              <th scope="col" class="whitespace-nowrap px-2 py-2 text-left text-sm font-semibold text-gray-900">Company</th>
              <th scope="col" class="whitespace-nowrap px-2 py-2 text-left text-sm font-semibold text-gray-900">Share</th>
              <th scope="col" class="whitespace-nowrap px-2 py-2 text-left text-sm font-semibold text-gray-900">Commission</th>
              <th scope="col" class="whitespace-nowrap px-2 py-2 text-left text-sm font-semibold text-gray-900">Price</th>
              <th scope="col" class="whitespace-nowrap px-2 py-2 text-left text-sm font-semibold text-gray-900">Quantity</th>
              <th scope="col" class="whitespace-nowrap px-2 py-2 text-left text-sm font-semibold text-gray-900">Net amount</th>
              <th scope="col" class="relative whitespace-nowrap py-2 pl-3 pr-4 sm:pr-0">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 bg-white">
            <tr>
              <td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">#AAPL-01</td>
              <td class="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">Apple Inc.</td>
              <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-900">AAPL</td>
              <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">5.00</td>
              <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">$120.00</td>
              <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">10</td>
              <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">$1,195.00</td>
              <td class="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, AAPL</span></a>
              </td>
            </tr>
            <tr>
              <td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">#GOOG-02</td>
              <td class="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">Alphabet Inc.</td>
              <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-900">GOOG</td>
              <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">5.00</td>
              <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">$2,400.00</td>
              <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">2</td>
              <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">$4,795.00</td>
              <td class="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, GOOG</span></a>
              </td>
            </tr>
            <tr>
              <td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">#MSFT-03</td>
              <td class="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">Microsoft Corp.</td>
              <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-900">MSFT</td>
              <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">5.00</td>
              <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">$250.00</td>
              <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">20</td>
              <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">$4,995.00</td>
              <td class="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, MSFT</span></a>
              </td>
            </tr>
            <tr>
              <td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">#TSLA-04</td>
              <td class="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">Tesla Inc.</td>
              <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-900">TSLA</td>
              <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">5.00</td>
              <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">$700.00</td>
              <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">5</td>
              <td class="whitespace-nowrap px-2 py-2 text-sm text-gray-500">$3,495.00</td>
              <td class="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span class="sr-only">, TSLA</span></a>
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
  <PreviewWrapper title="Dense Table" description="A compact table optimized for high information density." :html-block="htmlBlock" />
</template>
