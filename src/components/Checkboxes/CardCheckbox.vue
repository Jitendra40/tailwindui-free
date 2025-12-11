<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="space-y-2.5">
  <label class="group relative flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 cursor-pointer transition-all hover:border-blue-400 hover:shadow-sm has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50/50 has-[:checked]:shadow-sm">
    <input type="checkbox" class="peer h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-0 transition-all" checked />
    <div class="flex-1 min-w-0">
      <div class="text-sm font-semibold text-gray-900">Business Plan</div>
      <p class="text-xs text-gray-600">10 team members • Advanced analytics</p>
    </div>
    <div class="text-xs font-semibold text-gray-700">$49/mo</div>
  </label>
  
  <label class="group relative flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 cursor-pointer transition-all hover:border-purple-400 hover:shadow-sm has-[:checked]:border-purple-500 has-[:checked]:bg-purple-50/50 has-[:checked]:shadow-sm">
    <input type="checkbox" class="peer h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-2 focus:ring-purple-500/20 focus:ring-offset-0 transition-all" />
    <div class="flex-1 min-w-0">
      <div class="text-sm font-semibold text-gray-900">Enterprise</div>
      <p class="text-xs text-gray-600">Unlimited • Custom integrations</p>
    </div>
    <div class="text-xs font-semibold text-gray-700">$99/mo</div>
  </label>
  
  <label class="group relative flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 cursor-pointer transition-all hover:border-emerald-400 hover:shadow-sm has-[:checked]:border-emerald-500 has-[:checked]:bg-emerald-50/50 has-[:checked]:shadow-sm">
    <input type="checkbox" class="peer h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-2 focus:ring-emerald-500/20 focus:ring-offset-0 transition-all" />
    <div class="flex-1 min-w-0">
      <div class="text-sm font-semibold text-gray-900">Add-ons</div>
      <p class="text-xs text-gray-600">Premium features & integrations</p>
    </div>
    <div class="text-xs font-semibold text-gray-700">+$15/mo</div>
  </label>
</div>`
</script>

<template>
  <PreviewWrapper
    title="Card Checkboxes"
    description="Compact checkbox cards with descriptions for plan selection."
    :html-block="htmlBlock"
    default-viewport="full"
  >
    <div class="space-y-2.5">
      <label class="group relative flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 cursor-pointer transition-all hover:border-blue-400 hover:shadow-sm has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50/50 has-[:checked]:shadow-sm">
        <input type="checkbox" class="peer h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-0 transition-all" checked />
        <div class="flex-1 min-w-0">
          <div class="text-sm font-semibold text-gray-900">Business Plan</div>
          <p class="text-xs text-gray-600">10 team members • Advanced analytics</p>
        </div>
        <div class="text-xs font-semibold text-gray-700">$49/mo</div>
      </label>
      
      <label class="group relative flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 cursor-pointer transition-all hover:border-purple-400 hover:shadow-sm has-[:checked]:border-purple-500 has-[:checked]:bg-purple-50/50 has-[:checked]:shadow-sm">
        <input type="checkbox" class="peer h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-2 focus:ring-purple-500/20 focus:ring-offset-0 transition-all" />
        <div class="flex-1 min-w-0">
          <div class="text-sm font-semibold text-gray-900">Enterprise</div>
          <p class="text-xs text-gray-600">Unlimited • Custom integrations</p>
        </div>
        <div class="text-xs font-semibold text-gray-700">$99/mo</div>
      </label>
      
      <label class="group relative flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 cursor-pointer transition-all hover:border-emerald-400 hover:shadow-sm has-[:checked]:border-emerald-500 has-[:checked]:bg-emerald-50/50 has-[:checked]:shadow-sm">
        <input type="checkbox" class="peer h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-2 focus:ring-emerald-500/20 focus:ring-offset-0 transition-all" />
        <div class="flex-1 min-w-0">
          <div class="text-sm font-semibold text-gray-900">Add-ons</div>
          <p class="text-xs text-gray-600">Premium features & integrations</p>
        </div>
        <div class="text-xs font-semibold text-gray-700">+$15/mo</div>
      </label>
    </div>
  </PreviewWrapper>
</template>
