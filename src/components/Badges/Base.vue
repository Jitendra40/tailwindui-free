<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `<div class="flex flex-wrap items-center gap-3">
<span class="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-semibold text-gray-700 ring-1 ring-gray-200">Default</span>
  <span class="inline-flex items-center gap-2 rounded-full bg-fuchsia-50 px-3 py-1 text-sm font-semibold text-fuchsia-700 ring-1 ring-fuchsia-100">Live</span>
  <span class="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">Paid</span>
  <span class="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700 ring-1 ring-sky-100">Refund</span>
  <span class="inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-sm font-semibold text-rose-700 ring-1 ring-rose-100">Failed</span>
  <span class="inline-flex items-center gap-2 rounded-full bg-lime-50 px-3 py-1 text-sm font-semibold text-lime-800 ring-1 ring-lime-100">Success</span>
  <span class="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-800 ring-1 ring-amber-100">In Progress</span>
</div>`
</script>

<template>
	<PreviewWrapper 
		title="Base Simple pills in two tones." 
		:html-block="htmlBlock"
		default-viewport="full"
	>
		<div class="flex flex-wrap items-center justify-center gap-3">
			
			<span class="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-semibold text-gray-700 ring-1 ring-gray-200">Default</span>
			<span class="inline-flex items-center gap-2 rounded-full bg-fuchsia-50 px-3 py-1 text-sm font-semibold text-fuchsia-700 ring-1 ring-fuchsia-100">Live</span>
			<span class="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">Paid</span>
			<span class="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700 ring-1 ring-sky-100">Refund</span>
			<span class="inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-sm font-semibold text-rose-700 ring-1 ring-rose-100">Failed</span>
			<span class="inline-flex items-center gap-2 rounded-full bg-lime-50 px-3 py-1 text-sm font-semibold text-lime-800 ring-1 ring-lime-100">Success</span>
			<span class="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-800 ring-1 ring-amber-100">In Progress</span>
		</div>
	</PreviewWrapper>
</template>

