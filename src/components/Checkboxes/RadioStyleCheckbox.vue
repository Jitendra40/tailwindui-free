<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="space-y-4">
  <!-- Option 1 -->
  <label class="group relative flex cursor-pointer items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:bg-gray-50 has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50/20 has-[:checked]:shadow-sm">
    <div class="flex items-center h-5">
      <div class="relative flex items-center justify-center">
        <input type="checkbox" class="peer sr-only" checked />
        <div class="h-5 w-5 rounded-full border-2 border-gray-300 bg-transparent transition-all peer-checked:border-blue-600 peer-checked:bg-blue-600 group-hover:border-gray-400"></div>
        <div class="absolute h-2 w-2 scale-0 rounded-full bg-white transition-all duration-300 peer-checked:scale-100"></div>
        <!-- Pulse effect for engagement -->
        <div class="absolute -inset-2 rounded-full bg-blue-500/20 opacity-0 transition-opacity peer-focus-visible:opacity-100 peer-checked:animate-ping"></div>
      </div>
    </div>
    <div class="flex-1">
      <div class="flex items-center justify-between">
        <h3 class="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">Standard Plan</h3>
        <span class="text-sm font-medium text-gray-900">$29/mo</span>
      </div>
      <p class="mt-1 text-xs text-gray-500 group-has-[:checked]:text-blue-600/80">Perfect for small projects and teams.</p>
    </div>
  </label>

  <!-- Option 2 -->
  <label class="group relative flex cursor-pointer items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:bg-gray-50 has-[:checked]:border-purple-600 has-[:checked]:bg-purple-50/20 has-[:checked]:shadow-sm">
    <div class="flex items-center h-5">
      <div class="relative flex items-center justify-center">
        <input type="checkbox" class="peer sr-only" />
        <div class="h-5 w-5 rounded-full border-2 border-gray-300 bg-transparent transition-all peer-checked:border-purple-600 peer-checked:bg-purple-600 group-hover:border-gray-400"></div>
        <div class="absolute h-2 w-2 scale-0 rounded-full bg-white transition-all duration-300 peer-checked:scale-100"></div>
      </div>
    </div>
    <div class="flex-1">
      <div class="flex items-center justify-between">
        <h3 class="text-sm font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">Professional Plan</h3>
        <span class="text-sm font-medium text-gray-900">$59/mo</span>
      </div>
      <p class="mt-1 text-xs text-gray-500 group-has-[:checked]:text-purple-600/80">Advanced features for power users.</p>
    </div>
  </label>
  
  <!-- Option 3 -->
  <label class="group relative flex cursor-pointer items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:bg-gray-50 has-[:checked]:border-teal-600 has-[:checked]:bg-teal-50/20 has-[:checked]:shadow-sm">
    <div class="flex items-center h-5">
      <div class="relative flex items-center justify-center">
        <input type="checkbox" class="peer sr-only" />
        <div class="h-5 w-5 rounded-full border-2 border-gray-300 bg-transparent transition-all peer-checked:border-teal-600 peer-checked:bg-teal-600 group-hover:border-gray-400"></div>
        <div class="absolute h-2 w-2 scale-0 rounded-full bg-white transition-all duration-300 peer-checked:scale-100"></div>
      </div>
    </div>
    <div class="flex-1">
      <div class="flex items-center justify-between">
        <h3 class="text-sm font-semibold text-gray-900 group-hover:text-teal-700 transition-colors">Enterprise Plan</h3>
        <span class="text-sm font-medium text-gray-900">$99/mo</span>
      </div>
      <p class="mt-1 text-xs text-gray-500 group-has-[:checked]:text-teal-600/80">For large organizations.</p>
    </div>
  </label>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Radio-Style Checkboxes"
    description="Checkboxes disguised as radio buttons with nice hover states."
    :html-block="htmlBlock"
  >
    <div class="space-y-4">
      <!-- Option 1 -->
      <label class="group relative flex cursor-pointer items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:bg-gray-50 has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50/20 has-[:checked]:shadow-sm">
        <div class="flex items-center h-5">
          <div class="relative flex items-center justify-center">
            <input type="checkbox" class="peer sr-only" checked />
            <div class="h-5 w-5 rounded-full border-2 border-gray-300 bg-transparent transition-all peer-checked:border-blue-600 peer-checked:bg-blue-600 group-hover:border-gray-400"></div>
            <div class="absolute h-2 w-2 scale-0 rounded-full bg-white transition-all duration-300 peer-checked:scale-100"></div>
            <!-- Pulse effect for engagement -->
            <div class="absolute -inset-2 rounded-full bg-blue-500/20 opacity-0 transition-opacity peer-focus-visible:opacity-100 peer-checked:animate-ping"></div>
          </div>
        </div>
        <div class="flex-1">
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">Standard Plan</h3>
            <span class="text-sm font-medium text-gray-900">$29/mo</span>
          </div>
          <p class="mt-1 text-xs text-gray-500 group-has-[:checked]:text-blue-600/80">Perfect for small projects and teams.</p>
        </div>
      </label>

      <!-- Option 2 -->
      <label class="group relative flex cursor-pointer items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:bg-gray-50 has-[:checked]:border-purple-600 has-[:checked]:bg-purple-50/20 has-[:checked]:shadow-sm">
        <div class="flex items-center h-5">
          <div class="relative flex items-center justify-center">
            <input type="checkbox" class="peer sr-only" />
            <div class="h-5 w-5 rounded-full border-2 border-gray-300 bg-transparent transition-all peer-checked:border-purple-600 peer-checked:bg-purple-600 group-hover:border-gray-400"></div>
            <div class="absolute h-2 w-2 scale-0 rounded-full bg-white transition-all duration-300 peer-checked:scale-100"></div>
          </div>
        </div>
        <div class="flex-1">
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">Professional Plan</h3>
            <span class="text-sm font-medium text-gray-900">$59/mo</span>
          </div>
          <p class="mt-1 text-xs text-gray-500 group-has-[:checked]:text-purple-600/80">Advanced features for power users.</p>
        </div>
      </label>
      
      <!-- Option 3 -->
      <label class="group relative flex cursor-pointer items-start gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:bg-gray-50 has-[:checked]:border-teal-600 has-[:checked]:bg-teal-50/20 has-[:checked]:shadow-sm">
        <div class="flex items-center h-5">
          <div class="relative flex items-center justify-center">
            <input type="checkbox" class="peer sr-only" />
            <div class="h-5 w-5 rounded-full border-2 border-gray-300 bg-transparent transition-all peer-checked:border-teal-600 peer-checked:bg-teal-600 group-hover:border-gray-400"></div>
            <div class="absolute h-2 w-2 scale-0 rounded-full bg-white transition-all duration-300 peer-checked:scale-100"></div>
          </div>
        </div>
        <div class="flex-1">
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-semibold text-gray-900 group-hover:text-teal-700 transition-colors">Enterprise Plan</h3>
            <span class="text-sm font-medium text-gray-900">$99/mo</span>
          </div>
          <p class="mt-1 text-xs text-gray-500 group-has-[:checked]:text-teal-600/80">For large organizations.</p>
        </div>
      </label>
    </div>
  </PreviewWrapper>
</template>
