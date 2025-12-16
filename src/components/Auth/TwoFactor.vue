<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Two-Factor Authentication</h2>
    <p class="mt-2 text-center text-sm leading-6 text-gray-500">
      We sent a code to your email. Please enter it below.
    </p>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST">
      <div>
        <label for="code" class="block text-sm font-medium leading-6 text-gray-900">Verification Code</label>
        <div class="mt-2 flex gap-2">
            <!-- Simulated 6-digit input -->
          <input type="text" class="block w-12 h-12 text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6" maxlength="1" value="4">
          <input type="text" class="block w-12 h-12 text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6" maxlength="1" value="2">
          <input type="text" class="block w-12 h-12 text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6" maxlength="1" value="">
          <input type="text" class="block w-12 h-12 text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6" maxlength="1" value="">
          <input type="text" class="block w-12 h-12 text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6" maxlength="1" value="">
          <input type="text" class="block w-12 h-12 text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xl sm:leading-6" maxlength="1" value="">
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Verify</button>
      </div>
    </form>
    
    <p class="mt-10 text-center text-sm text-gray-500">
      Didn't receive verified code?
      <a href="javascript:void(0)" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Resend Code</a>
    </p>

  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Two-Factor Verification" description="Code entry screen for 2FA." :html-block="htmlBlock" />
</template>
