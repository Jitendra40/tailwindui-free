<script setup lang="ts">
import { VIEWPORT_SIZES, usePreviewControls } from "@/composables/usePreviewControls"
import Prism from 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/themes/prism-tomorrow.css'
import { ref, watch } from 'vue'

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

const highlightedCode = ref('')
watch(() => props.htmlBlock, (newCode) => {
    const grammar = Prism.languages.markup || Prism.languages.html || {}
    highlightedCode.value = Prism.highlight(newCode, grammar, 'markup')
}, { immediate: true })
</script>

<template>
    <section class="space-y-4 rounded-xl border border-gray-200 bg-white shadow-sm p-5 w-full">
        <div class="space-y-1" v-if="title || description">
            <h3 v-if="title" class="text-base font-semibold text-gray-900">{{ title }}</h3>
            <p v-if="description" class="text-sm text-gray-500">{{ description }}</p>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-3 p-1 bg-gray-50/50 rounded-lg border border-gray-100">
            <div class="flex items-center gap-1 text-xs font-medium">
                <button v-for="size in VIEWPORT_SIZES" :key="size" type="button"
                    class="rounded-md px-3 py-1.5 transition-all outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                    :class="activeViewport === size ? 'bg-white text-gray-900 shadow-sm ring-1 ring-gray-200' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100/50'" 
                    @click="activeViewport = size">
                    {{ size === 'full' ? 'Full Width' : size.charAt(0).toUpperCase() + size.slice(1) }}
                </button>
            </div>

            <div class="flex items-center gap-1 text-xs font-medium">
                <button type="button"
                    class="rounded-md px-3 py-1.5 transition-all outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                    :class="showPreview ? 'bg-indigo-50 text-indigo-700 shadow-sm ring-1 ring-indigo-200' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100/50'" 
                    @click="setPreview">
                    Preview
                </button>
                <div class="w-px h-4 bg-gray-200 mx-1"></div>
                <button type="button"
                    class="rounded-md px-3 py-1.5 transition-all outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                    :class="showCode ? 'bg-gray-900 text-white shadow-sm' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100/50'" 
                    @click="setCode">
                    Source
                </button>
                <button type="button"
                    class="rounded-md px-3 py-1.5 transition-all text-gray-600 hover:bg-gray-100 hover:text-gray-900 outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                    @click="copyMarkup">
                    <span v-if="copied" class="text-green-600 flex items-center gap-1">
                        <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                        Copied
                    </span>
                    <span v-else class="flex items-center gap-1">
                        <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg>
                        Copy
                    </span>
                </button>
            </div>
        </div>
        
        <div v-if="showPreview" class="relative group/preview">
            <div :class="['mx-auto w-full transition-all duration-300 ease-in-out', previewWidthClass]">
                <div class="rounded-xl border border-gray-200 bg-gray-50/50 p-6 min-h-[200px] flex items-center justify-center relative overflow-hidden">
                    <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(#64748b 1px, transparent 1px); background-size: 16px 16px;"></div>
                    <div class="w-full relative z-10">
                        <slot />
                    </div>
                </div>
            </div>
        </div>
        
        <div v-else-if="showCode"
            class="rounded-xl border border-gray-800 bg-[#1e1e1e] p-4 overflow-y-auto overflow-x-hidden max-h-[500px] shadow-inner">
            <pre class="whitespace-pre-wrap wrap-break-word break-all text-xs leading-relaxed font-mono w-full text-gray-300">
                <code v-html="highlightedCode" class="whitespace-pre-wrap wrap-break-word break-all text-xs leading-relaxed font-mono w-full"></code>
            </pre>
        </div>
    </section>
</template>

<style>
/* Custom Scrollbar for code block */
pre::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
pre::-webkit-scrollbar-track {
  background: #1e1e1e;
}
pre::-webkit-scrollbar-thumb {
  background: #3f3f46; 
  border-radius: 4px;
}
pre::-webkit-scrollbar-thumb:hover {
  background: #52525b; 
}
</style>
