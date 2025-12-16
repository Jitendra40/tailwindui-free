<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="flex flex-wrap items-center gap-4">
	<!-- Notification badges with counts -->
	<span class="relative inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-200 shadow-sm hover:bg-gray-50">
		Messages
		<span class="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1.5 text-xs font-semibold text-white">12</span>
	</span>
	
	<span class="relative inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-200 shadow-sm hover:bg-gray-50">
		Notifications
		<span class="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-500 px-1.5 text-xs font-semibold text-white">5</span>
	</span>
	
	<span class="relative inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-200 shadow-sm hover:bg-gray-50">
		Tasks
		<span class="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-500 px-1.5 text-xs font-semibold text-white">23</span>
	</span>
	
	<!-- Pill count badges -->
	<span class="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200">
		Active Users
		<span class="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-emerald-600 px-1.5 text-xs font-semibold text-white">142</span>
	</span>
	
	<span class="inline-flex items-center gap-2 rounded-full bg-purple-50 px-3 py-1 text-sm font-semibold text-purple-700 ring-1 ring-purple-200">
		New Leads
		<span class="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-purple-600 px-1.5 text-xs font-semibold text-white">8</span>
	</span>
	
	<!-- Minimal dot indicator -->
	<span class="relative inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-200 cursor-pointer transition-colors hover:bg-gray-50">
		Inbox
		<span class="flex h-2 w-2 rounded-full bg-rose-500"></span>
	</span>
</div>`
</script>

<template>
	<PreviewWrapper 
		title="Badges with Count Indicators" 
		description="Notification badges with numerical counts and status indicators for UI feedback."
		:html-block="htmlBlock"
		default-viewport="full"
	>

	</PreviewWrapper>
</template>
