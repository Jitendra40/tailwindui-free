<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
  <!-- PAN Number -->
  <div>
    <label for="pan-number" class="block text-sm font-medium leading-6 text-gray-900 mb-2">PAN Number</label>
    <div class="relative">
      <input type="text" name="pan-number" id="pan-number" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 uppercase transition-all hover:ring-gray-300 bg-white" placeholder="ABCDE1234F">
    </div>
  </div>

  <!-- Aadhaar Number -->
  <div>
    <label for="aadhaar-number" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Aadhaar Number</label>
    <div class="relative">
      <input type="text" name="aadhaar-number" id="aadhaar-number" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white" placeholder="0000 0000 0000">
    </div>
  </div>

  <!-- Bank Account Number -->
  <div class="sm:col-span-2">
    <label for="bank-account" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Bank Account Number</label>
    <div class="relative">
      <input type="text" name="bank-account" id="bank-account" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white">
    </div>
  </div>

  <!-- IFSC Code -->
  <div>
    <label for="ifsc-code" class="block text-sm font-medium leading-6 text-gray-900 mb-2">IFSC Code</label>
    <div class="relative">
      <input type="text" name="ifsc-code" id="ifsc-code" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 uppercase transition-all hover:ring-gray-300 bg-white" placeholder="HDFC0001234">
    </div>
  </div>

  <!-- UPI ID -->
  <div>
    <label for="upi-id" class="block text-sm font-medium leading-6 text-gray-900 mb-2">UPI ID</label>
    <div class="relative">
      <input type="text" name="upi-id" id="upi-id" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white" placeholder="username@okhdfcbank">
    </div>
  </div>

   <!-- Investment Amount -->
  <div>
    <label for="investment-amount" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Investment Amount</label>
    <div class="relative rounded-lg shadow-sm ring-1 ring-inset ring-gray-200 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 bg-white transition-all hover:ring-gray-300">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <span class="text-gray-500 sm:text-sm">₹</span>
      </div>
      <input type="text" name="investment-amount" id="investment-amount" class="block w-full rounded-lg border-0 py-3 pl-8 pr-14 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="0.00">
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
        <span class="text-gray-500 sm:text-sm">INR</span>
      </div>
    </div>
  </div>

  <!-- Bid Price -->
  <div>
       <label for="bid-price" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Bid Price</label>
    <div class="relative rounded-lg shadow-sm ring-1 ring-inset ring-gray-200 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 bg-white transition-all hover:ring-gray-300">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <span class="text-gray-500 sm:text-sm">₹</span>
      </div>
      <input type="text" name="bid-price" id="bid-price" class="block w-full rounded-lg border-0 py-3 pl-8 pr-14 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="0.00">
    </div>
  </div>

   <!-- Quantity -->
  <div>
    <label for="quantity" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Quantity</label>
    <div class="relative">
      <input type="number" name="quantity" id="quantity" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white" placeholder="100">
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="Fintech (IPO / Payments)"
    description="Inputs for banking, payments, and investments."
    :html-block="htmlBlock"
  >
    <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
      <!-- PAN Number -->
      <div>
        <label for="pan-number" class="block text-sm font-medium leading-6 text-gray-900 mb-2">PAN Number</label>
        <div class="relative">
          <input type="text" name="pan-number" id="pan-number" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 uppercase transition-all hover:ring-gray-300 bg-white" placeholder="ABCDE1234F">
        </div>
      </div>

      <!-- Aadhaar Number -->
      <div>
        <label for="aadhaar-number" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Aadhaar Number</label>
        <div class="relative">
          <input type="text" name="aadhaar-number" id="aadhaar-number" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white" placeholder="0000 0000 0000">
        </div>
      </div>

      <!-- Bank Account Number -->
      <div class="sm:col-span-2">
        <label for="bank-account" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Bank Account Number</label>
        <div class="relative">
          <input type="text" name="bank-account" id="bank-account" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white">
        </div>
      </div>

      <!-- IFSC Code -->
      <div>
        <label for="ifsc-code" class="block text-sm font-medium leading-6 text-gray-900 mb-2">IFSC Code</label>
        <div class="relative">
          <input type="text" name="ifsc-code" id="ifsc-code" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 uppercase transition-all hover:ring-gray-300 bg-white" placeholder="HDFC0001234">
        </div>
      </div>

      <!-- UPI ID -->
      <div>
        <label for="upi-id" class="block text-sm font-medium leading-6 text-gray-900 mb-2">UPI ID</label>
        <div class="relative">
          <input type="text" name="upi-id" id="upi-id" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white" placeholder="username@okhdfcbank">
        </div>
      </div>

       <!-- Investment Amount -->
      <div>
        <label for="investment-amount" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Investment Amount</label>
        <div class="relative rounded-lg shadow-sm ring-1 ring-inset ring-gray-200 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 bg-white transition-all hover:ring-gray-300">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <span class="text-gray-500 sm:text-sm">₹</span>
          </div>
          <input type="text" name="investment-amount" id="investment-amount" class="block w-full rounded-lg border-0 py-3 pl-8 pr-14 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="0.00">
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
            <span class="text-gray-500 sm:text-sm">INR</span>
          </div>
        </div>
      </div>

      <!-- Bid Price -->
      <div>
           <label for="bid-price" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Bid Price</label>
        <div class="relative rounded-lg shadow-sm ring-1 ring-inset ring-gray-200 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 bg-white transition-all hover:ring-gray-300">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <span class="text-gray-500 sm:text-sm">₹</span>
          </div>
          <input type="text" name="bid-price" id="bid-price" class="block w-full rounded-lg border-0 py-3 pl-8 pr-14 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="0.00">
        </div>
      </div>

       <!-- Quantity -->
      <div>
        <label for="quantity" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Quantity</label>
        <div class="relative">
          <input type="number" name="quantity" id="quantity" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white" placeholder="100">
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
