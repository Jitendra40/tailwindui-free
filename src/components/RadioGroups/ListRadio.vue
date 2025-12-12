<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<fieldset>
  <legend class="sr-only">Notification method</legend>
  <div class="space-y-3">
    <label class="relative flex cursor-pointer items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:bg-gray-50 has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50/30 has-[:checked]:ring-1 has-[:checked]:ring-indigo-600">
      <div class="flex h-6 items-center">
        <input id="email" name="notification-method" type="radio" checked class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
      </div>
      <div class="text-sm leading-6">
        <span class="font-medium text-gray-900">Email</span>
        <span class="block text-gray-500">Get notified via email.</span>
      </div>
    </label>
    <label class="relative flex cursor-pointer items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:bg-gray-50 has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50/30 has-[:checked]:ring-1 has-[:checked]:ring-indigo-600">
      <div class="flex h-6 items-center">
        <input id="sms" name="notification-method" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
      </div>
      <div class="text-sm leading-6">
        <span class="font-medium text-gray-900">Phone (SMS)</span>
        <span class="block text-gray-500">Get notified via SMS.</span>
      </div>
    </label>
    <label class="relative flex cursor-pointer items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:bg-gray-50 has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50/30 has-[:checked]:ring-1 has-[:checked]:ring-indigo-600">
      <div class="flex h-6 items-center">
        <input id="push" name="notification-method" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
      </div>
      <div class="text-sm leading-6">
        <span class="font-medium text-gray-900">Push notification</span>
        <span class="block text-gray-500">Get notified via push.</span>
      </div>
    </label>
  </div>
</fieldset>
`
</script>

<template>
  <PreviewWrapper title="List Group" description="A vertical list with descriptions and enhanced hit areas." :html-block="htmlBlock">
    <div class="w-full max-w-sm">
      <fieldset>
        <legend class="sr-only">Notification method</legend>
        <div class="space-y-3">
          <!-- Item 1 -->
          <label class="relative flex cursor-pointer items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:bg-gray-50 has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50/30 has-[:checked]:ring-1 has-[:checked]:ring-indigo-600">
            <div class="flex h-6 items-center">
              <input id="email" name="notification-method" type="radio" checked class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
            </div>
            <div class="text-sm leading-6">
              <span class="font-medium text-gray-900">Email</span>
              <span class="block text-gray-500">Get notified via email.</span>
            </div>
          </label>
          <!-- Item 2 -->
          <label class="relative flex cursor-pointer items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:bg-gray-50 has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50/30 has-[:checked]:ring-1 has-[:checked]:ring-indigo-600">
            <div class="flex h-6 items-center">
              <input id="sms" name="notification-method" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
            </div>
            <div class="text-sm leading-6">
              <span class="font-medium text-gray-900">Phone (SMS)</span>
              <span class="block text-gray-500">Get notified via SMS.</span>
            </div>
          </label>
          <!-- Item 3 -->
          <label class="relative flex cursor-pointer items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:bg-gray-50 has-[:checked]:border-indigo-600 has-[:checked]:bg-indigo-50/30 has-[:checked]:ring-1 has-[:checked]:ring-indigo-600">
            <div class="flex h-6 items-center">
              <input id="push" name="notification-method" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
            </div>
            <div class="text-sm leading-6">
              <span class="font-medium text-gray-900">Push notification</span>
              <span class="block text-gray-500">Get notified via push.</span>
            </div>
          </label>
        </div>
      </fieldset>
    </div>
  </PreviewWrapper>
</template>
