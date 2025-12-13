<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
  <!-- Full Name -->
  <div class="sm:col-span-2">
    <label for="full-name" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Full Name</label>
    <div class="relative">
      <input type="text" name="full-name" id="full-name" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white" placeholder="John Doe">
    </div>
  </div>

  <!-- First Name -->
  <div>
    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900 mb-2">First Name</label>
    <div class="relative">
      <input type="text" name="first-name" id="first-name" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white" placeholder="John">
    </div>
  </div>

  <!-- Last Name -->
  <div>
    <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Last Name</label>
    <div class="relative">
      <input type="text" name="last-name" id="last-name" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white" placeholder="Doe">
    </div>
  </div>

  <!-- Username -->
  <div class="sm:col-span-2">
    <label for="username" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Username</label>
    <div class="flex rounded-lg shadow-sm ring-1 ring-inset ring-gray-200 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 bg-white transition-all hover:ring-gray-300 sm:max-w-md">
      <span class="flex select-none items-center pl-4 text-gray-500 sm:text-sm bg-gray-50 rounded-l-lg border-r border-gray-100 px-3">example.com/</span>
      <input type="text" name="username" id="username" class="block flex-1 border-0 bg-transparent py-3 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith">
    </div>
  </div>

  <!-- Email Address -->
  <div class="sm:col-span-2">
    <label for="email" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Email Address</label>
    <div class="relative">
      <input type="email" name="email" id="email" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white" placeholder="you@example.com">
    </div>
  </div>

  <!-- Phone Number -->
  <div class="sm:col-span-1">
    <label for="phone-number" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Phone Number</label>
    <div class="relative rounded-lg shadow-sm ring-1 ring-inset ring-gray-200 focus-within:ring-2 focus-within:ring-offset-0 focus-within:ring-indigo-600 bg-white transition-all hover:ring-gray-300">
        <div class="absolute inset-y-0 left-0 flex items-center">
          <label for="country" class="sr-only">Country</label>
          <select id="country" name="country" class="h-full rounded-l-lg border-0 bg-transparent py-0 pl-3 pr-2 text-gray-500 focus:ring-0 sm:text-sm">
            <option>US</option>
            <option>CA</option>
            <option>EU</option>
          </select>
          <div class="h-6 w-px bg-gray-200"></div>
        </div>
        <input type="text" name="phone-number" id="phone-number" class="block w-full rounded-lg border-0 py-3 pl-[5.5rem] text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="+1 (555) 987-6543">
      </div>
  </div>

  <!-- OTP / Verification Code -->
   <div class="sm:col-span-1">
    <label for="otp" class="block text-sm font-medium leading-6 text-gray-900 mb-2">OTP / Verification Code</label>
    <div class="flex gap-3">
       <input type="text" class="block w-12 h-12 text-center rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 font-bold bg-white transition-all hover:ring-gray-300" maxlength="1" />
       <input type="text" class="block w-12 h-12 text-center rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 font-bold bg-white transition-all hover:ring-gray-300" maxlength="1" />
       <input type="text" class="block w-12 h-12 text-center rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 font-bold bg-white transition-all hover:ring-gray-300" maxlength="1" />
       <input type="text" class="block w-12 h-12 text-center rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 font-bold bg-white transition-all hover:ring-gray-300" maxlength="1" />
       <input type="text" class="block w-12 h-12 text-center rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 font-bold bg-white transition-all hover:ring-gray-300" maxlength="1" />
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper
    title="Identity & Basic Info"
    description="Standard personal information fields."
    :html-block="htmlBlock"
  >
    <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
      <!-- Full Name -->
      <div class="sm:col-span-2">
        <label for="full-name" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Full Name</label>
        <div class="relative">
          <input type="text" name="full-name" id="full-name" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white" placeholder="John Doe">
        </div>
      </div>

      <!-- First Name -->
      <div>
        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900 mb-2">First Name</label>
        <div class="relative">
          <input type="text" name="first-name" id="first-name" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white" placeholder="John">
        </div>
      </div>

      <!-- Last Name -->
      <div>
        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Last Name</label>
        <div class="relative">
          <input type="text" name="last-name" id="last-name" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white" placeholder="Doe">
        </div>
      </div>

      <!-- Username -->
      <div class="sm:col-span-2">
        <label for="username" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Username</label>
        <div class="flex rounded-lg shadow-sm ring-1 ring-inset ring-gray-200 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 bg-white transition-all hover:ring-gray-300 sm:max-w-md">
          <span class="flex select-none items-center pl-4 text-gray-500 sm:text-sm bg-gray-50 rounded-l-lg border-r border-gray-100 px-3">example.com/</span>
          <input type="text" name="username" id="username" class="block flex-1 border-0 bg-transparent py-3 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith">
        </div>
      </div>

      <!-- Email Address -->
      <div class="sm:col-span-2">
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Email Address</label>
        <div class="relative">
          <input type="email" name="email" id="email" class="block w-full rounded-lg border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all hover:ring-gray-300 bg-white" placeholder="you@example.com">
        </div>
      </div>

      <!-- Phone Number -->
      <div class="sm:col-span-1">
        <label for="phone-number" class="block text-sm font-medium leading-6 text-gray-900 mb-2">Phone Number</label>
        <div class="relative rounded-lg shadow-sm ring-1 ring-inset ring-gray-200 focus-within:ring-2 focus-within:ring-offset-0 focus-within:ring-indigo-600 bg-white transition-all hover:ring-gray-300">
            <div class="absolute inset-y-0 left-0 flex items-center">
              <label for="country" class="sr-only">Country</label>
              <select id="country" name="country" class="h-full rounded-l-lg border-0 bg-transparent py-0 pl-3 pr-2 text-gray-500 focus:ring-0 sm:text-sm">
                <option>US</option>
                <option>CA</option>
                <option>EU</option>
              </select>
              <div class="h-6 w-px bg-gray-200"></div>
            </div>
            <input type="text" name="phone-number" id="phone-number" class="block w-full rounded-lg border-0 py-3 pl-[5.5rem] text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="+1 (555) 987-6543">
          </div>
      </div>

      <!-- OTP / Verification Code -->
      <div class="sm:col-span-1">
        <label for="otp" class="block text-sm font-medium leading-6 text-gray-900 mb-2">OTP / Verification Code</label>
        <div class="flex gap-3">
           <input type="text" class="block w-12 h-12 text-center rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 font-bold bg-white transition-all hover:ring-gray-300" maxlength="1" />
           <input type="text" class="block w-12 h-12 text-center rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 font-bold bg-white transition-all hover:ring-gray-300" maxlength="1" />
           <input type="text" class="block w-12 h-12 text-center rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 font-bold bg-white transition-all hover:ring-gray-300" maxlength="1" />
           <input type="text" class="block w-12 h-12 text-center rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 font-bold bg-white transition-all hover:ring-gray-300" maxlength="1" />
           <input type="text" class="block w-12 h-12 text-center rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 font-bold bg-white transition-all hover:ring-gray-300" maxlength="1" />
        </div>
      </div>
    </div>
  </PreviewWrapper>
</template>
