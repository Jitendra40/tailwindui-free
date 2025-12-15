<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="space-y-10 divide-y divide-gray-900/10">
  <div class="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
    <div class="px-4 sm:px-0">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Delete Account</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">No longer want to use our service? You can delete your account here. This action is not reversible. All information related to this account will be deleted permanently.</p>
    </div>

    <form class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
      <div class="px-4 py-6 sm:p-8">
        <div class="max-w-2xl space-y-10">
           <div>
              <button type="submit" class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Yes, delete my account</button>
           </div>
        </div>
      </div>
    </form>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Delete Account" description="Destructive action section for account deletion." :html-block="htmlBlock" />
</template>
