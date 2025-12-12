<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div>
  <label class="text-base font-semibold text-gray-900">Notifications</label>
  <p class="text-sm text-gray-500">How do you prefer to receive notifications?</p>
  <fieldset class="mt-4">
    <legend class="sr-only">Notification method</legend>
    <div class="space-y-4">
      <div class="flex items-center">
        <input id="email" name="notification-method" type="radio" checked class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer" />
        <label for="email" class="ml-3 block text-sm font-medium leading-6 text-gray-900 cursor-pointer">Email</label>
      </div>
      <div class="flex items-center">
        <input id="sms" name="notification-method" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer" />
        <label for="sms" class="ml-3 block text-sm font-medium leading-6 text-gray-900 cursor-pointer">Phone (SMS)</label>
      </div>
      <div class="flex items-center">
        <input id="push" name="notification-method" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer" />
        <label for="push" class="ml-3 block text-sm font-medium leading-6 text-gray-900 cursor-pointer">Push notification</label>
      </div>
    </div>
  </fieldset>
</div>
`
</script>

<template>
  <PreviewWrapper title="Simple List" description="Standard vertical list of options." :html-block="htmlBlock">
    <div>
      <label class="text-base font-semibold text-gray-900">Notifications</label>
      <p class="text-sm text-gray-500">How do you prefer to receive notifications?</p>
      <fieldset class="mt-4">
        <legend class="sr-only">Notification method</legend>
        <div class="space-y-4">
          <div class="flex items-center">
            <input id="email" name="notification-method" type="radio" checked class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer" />
            <label for="email" class="ml-3 block text-sm font-medium leading-6 text-gray-900 cursor-pointer">Email</label>
          </div>
          <div class="flex items-center">
            <input id="sms" name="notification-method" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer" />
            <label for="sms" class="ml-3 block text-sm font-medium leading-6 text-gray-900 cursor-pointer">Phone (SMS)</label>
          </div>
          <div class="flex items-center">
            <input id="push" name="notification-method" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 cursor-pointer" />
            <label for="push" class="ml-3 block text-sm font-medium leading-6 text-gray-900 cursor-pointer">Push notification</label>
          </div>
        </div>
      </fieldset>
    </div>
  </PreviewWrapper>
</template>
