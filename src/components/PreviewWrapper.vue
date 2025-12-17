<script setup lang="ts">
import { VIEWPORT_SIZES, usePreviewControls } from "@/composables/usePreviewControls"
import Prism from 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/themes/prism-tomorrow.css'
import { ref, watch, onMounted, computed } from 'vue'

const props = defineProps<{
    title?: string
    description?: string
    htmlBlock: string
    defaultViewport?: "Mobile" | "small" | "medium" | "large" | "full"
    fullScreen?: boolean
}>()

const {
    showPreview,
    showCode,
    copied,
    activeViewport,
    previewWidthStyle,
    setPreview,
    setCode,
    copyMarkup,
} = usePreviewControls(props.htmlBlock, props.defaultViewport)

const highlightedCode = ref('')
const extractedStyles = ref('')
const isLoading = ref(true)

watch(() => props.htmlBlock, (newCode) => {
    isLoading.value = true
    const grammar = Prism.languages.markup || Prism.languages.html || {}
    highlightedCode.value = Prism.highlight(newCode, grammar, 'markup')
}, { immediate: true })

onMounted(() => {
    // Capture global styles to inject into iframe
    const styleElements = Array.from(document.querySelectorAll('style, link[rel="stylesheet"]'))
    extractedStyles.value = styleElements.map(el => el.outerHTML).join('\n')
})

const iframeSrcDoc = computed(() => {
    // Only include auto-resize script if NOT in fullScreen mode
    const script = !props.fullScreen ? `
            <script>
                function updateHeight() {
                    const app = document.getElementById('app-content');
                    if (app) {
                        const height = app.scrollHeight + 80;
                        window.frameElement.style.height = height + 'px';
                    }
                }
                setTimeout(updateHeight, 100);
                window.addEventListener('load', updateHeight);
                window.addEventListener('resize', updateHeight);
                new ResizeObserver(updateHeight).observe(document.body);
            <\/script>
    ` : '';

    return `
        <!DOCTYPE html>
        <html class="antialiased${props.fullScreen ? ' h-full' : ''}">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            ${extractedStyles.value}
            <style>
                body { background-color: transparent; ${props.fullScreen ? 'padding: 0; margin: 0; height: 100%; overflow: auto;' : 'padding: 1.5rem;'} }
                /* Hide main scrollbar */
                ::-webkit-scrollbar { width: 0; background: transparent; }
            </style>
        </head>
        <body class="bg-gray-50/50 min-h-screen${props.fullScreen ? ' h-full' : ''}">
            <div id="app-content" class="${props.fullScreen ? 'h-full' : ''}">
                ${props.htmlBlock}
            </div>
            ${script}
        </body>
        </html>
    `
})

</script>

<template>
    <section :class="[
        'w-full bg-white transition-all',
        fullScreen ? 'h-screen border-none flex flex-col' : 'space-y-4 rounded-xl border border-gray-200 shadow-sm p-5'
    ]">
        <div class="space-y-1 flex-none" v-if="title || description" :class="{ 'mb-4': fullScreen, 'px-5 pt-5': fullScreen }">
            <h3 v-if="title" class="text-base font-semibold text-gray-900">{{ title }}</h3>
            <p v-if="description" class="text-sm text-gray-500">{{ description }}</p>
        </div>

        <div class="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-3 p-1 bg-gray-50/50 rounded-lg border border-gray-100 backdrop-blur-sm flex-none"
             :class="{ 'mx-5': fullScreen, 'mb-2': fullScreen }">
            <div class="flex items-center gap-1 text-xs font-medium">
                <button v-for="size in VIEWPORT_SIZES" :key="size" type="button"
                    class="rounded-md px-3 py-1.5 transition-all outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                    :class="activeViewport === size ? 'bg-white text-gray-900 shadow-sm ring-1 ring-gray-200' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100/50'" 
                    @click="activeViewport = size">
                    {{ size === 'full' ? 'Full Width' : size.charAt(0).toUpperCase() + size.slice(1) }}
                </button>
            </div>

            <div class="flex items-center gap-1 text-xs font-medium">
              <slot name="extra-nav" />
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
        
        <div v-if="showPreview" 
             class="relative group/preview bg-gray-100/50 border-gray-200"
             :class="[fullScreen ? 'flex-1 border-t border-b' : 'rounded-xl border overflow-hidden']">
        <div class="w-full flex justify-center py-8 overflow-x-auto relative"
             :class="[fullScreen ? 'h-full !p-0' : 'min-h-[300px]']">
                <div v-if="isLoading" class="absolute inset-0 z-10 flex items-center justify-center bg-gray-50/50">
                    <div class="w-full max-w-lg p-4 space-y-4">
                        <div class="h-8 bg-gray-200 rounded w-1/4 animate-pulse"></div>
                        <div class="space-y-2">
                            <div class="h-4 bg-gray-200 rounded animate-pulse"></div>
                            <div class="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                            <div class="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
                        </div>
                    </div>
                </div>
                <!-- In fullScreen, force h-full to fill container. Iframe handles scroll. -->
                <iframe
                    :srcdoc="iframeSrcDoc"
                    class="transition-all duration-300 ease-in-out bg-white shadow-sm border-gray-200"
                    :class="[{ 'opacity-0': isLoading }, fullScreen ? 'h-full rounded-none border-0' : 'rounded-lg border']"
                    :style="[previewWidthStyle, !fullScreen && { minHeight: '300px' }]"
                    @load="isLoading = false"
                ></iframe>
            </div>
        </div>
        
        <div v-else-if="showCode"
            class="rounded-xl border border-gray-800 bg-[#1e1e1e] p-4 overflow-y-auto overflow-x-hidden shadow-inner"
            :class="[fullScreen ? 'flex-1' : 'max-h-[500px]']">
            <pre class="whitespace-pre-wrap wrap-break-word break-all text-xs leading-relaxed font-mono w-full text-gray-300"><code v-html="highlightedCode" class="whitespace-pre-wrap wrap-break-word break-all text-xs leading-relaxed font-mono w-full"></code></pre>
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
