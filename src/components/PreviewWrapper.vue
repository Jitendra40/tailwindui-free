<script setup lang="ts">
import { VIEWPORT_SIZES, usePreviewControls } from "@/composables/usePreviewControls"

const props = defineProps<{
	title?: string
	description?: string
	htmlBlock: string
	defaultViewport?: "Mobile" | "small" | "medium" | "large" | "full"
}>()

const {
	showPreview,
	showCode,
	copied,
	activeViewport,
	previewWidthClass,
	setPreview,
	setCode,
	copyMarkup,
} = usePreviewControls(props.htmlBlock, props.defaultViewport)
</script>

<template>
	<section class="space-y-4 rounded-lg border bg-gray-50 text-card-foreground p-4 w-full">
		<div class="space-y-1" v-if="title || description">
			<p v-if="title" class="text-sm text-muted-foreground">{{ title }}</p>
			<p v-if="description" class="text-sm text-muted-foreground">{{ description }}</p>
		</div>

		<div class="flex flex-wrap items-center justify-between gap-2">
			<div class="flex items-center gap-2 text-xs font-semibold">
				<button
					v-for="size in VIEWPORT_SIZES"
					:key="size"
					type="button"
					class="rounded-full border px-3 py-1 capitalize transition hover:text-white hover:bg-gray-800 cursor-pointer"
					:class="activeViewport === size ? 'bg-gray-900 text-white' : ''"
					@click="activeViewport = size"
				>
					{{ size === 'full' ? 'FULL' : size.toUpperCase() }}
				</button>
			</div>

			<div class="flex items-center gap-2 text-xs font-semibold">
				<button
					type="button"
					class="rounded-full border px-3 py-1 capitalize transition hover:text-white hover:bg-gray-800 cursor-pointer"
					:class="showPreview ? 'bg-gray-900 text-white' : ''"
					@click="setPreview"
				>
					Preview
				</button>
				<button
					type="button"
					class="rounded-full border px-3 py-1 capitalize transition hover:text-white hover:bg-gray-800 cursor-pointer"
					:class="showCode ? 'bg-gray-900 text-white' : ''"
					@click="setCode"
				>
					View HTML
				</button>
				<button
					type="button"
					class="rounded-full border px-3 py-1 capitalize transition hover:text-white hover:bg-gray-800 cursor-pointer"
					@click="copyMarkup"
				>
					{{ copied ? "Copied" : "Copy" }}
				</button>
			</div>
		</div>
<div v-if="showPreview">
		<div :class="['mx-auto w-full', previewWidthClass]">
			<div  class="space-y-4 rounded-lg border bg-white text-card-foreground p-4">
				<slot />
			</div>
</div>
		
		</div>
        	<div
				v-else-if="showCode"
				class="rounded-lg border bg-slate-950 p-4 text-slate-50 overflow-y-auto overflow-x-hidden"
			>
				<pre class="whitespace-pre-wrap wrap-break-word break-all text-xs leading-relaxed font-mono w-full"><code>{{ htmlBlock }}</code></pre>
			</div>
	</section>
</template>
