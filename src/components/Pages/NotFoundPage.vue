<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue";

defineProps<{ isFullScreen?: boolean }>()

const htmlBlock = `
<!DOCTYPE html>
<html lang="en" class="h-full">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Page Not Found</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style> body { font-family: 'Inter', sans-serif; } </style>
</head>
<body class="h-full">
    <div class="grid min-h-full grid-cols-1 grid-rows-[1fr,auto,1fr] bg-white lg:grid-cols-[max(50%,36rem),1fr]">
     

        <main class="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
            <div class="max-w-lg">
                <p class="text-base font-semibold leading-8 text-indigo-600">404</p>
                <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                <p class="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.</p>
                <div class="mt-10">
                    <a href="#" class="text-sm font-semibold leading-7 text-indigo-600"><span aria-hidden="true">&larr;</span> Back to home</a>
                </div>
            </div>
        </main>

        <footer class="self-end lg:col-span-2 lg:col-start-1 lg:row-start-3">
            <div class="border-t border-gray-100 bg-gray-50 py-10">
                <nav class="mx-auto flex w-full max-w-7xl items-center gap-x-4 px-6 text-sm leading-7 text-gray-600 lg:px-8">
                    <a href="#">Contact support</a>
                    <svg viewBox="0 0 2 2" aria-hidden="true" class="h-0.5 w-0.5 fill-gray-300">
                        <circle cx="1" cy="1" r="1" />
                    </svg>
                    <a href="#">Status</a>
                    <svg viewBox="0 0 2 2" aria-hidden="true" class="h-0.5 w-0.5 fill-gray-300">
                        <circle cx="1" cy="1" r="1" />
                    </svg>
                    <a href="#">Twitter</a>
                </nav>
            </div>
        </footer>

        <div class="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
            <img src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75" alt="" class="absolute inset-0 h-full w-full object-cover">
        </div>
    </div>
</body>
</html>
`;
</script>

<template>
  <PreviewWrapper
    title="404 Page"
    description="A split layout 404 page with an image."
    :html-block="htmlBlock"
    default-viewport="full"
    :fullScreen="isFullScreen"
  >
    <template #extra-nav>
        <slot name="extra-nav" />
    </template>
    <div class="w-full h-[600px] border border-gray-200 rounded-lg overflow-hidden bg-white flex items-center justify-center text-gray-400 bg-gray-50">
        <span class="text-sm">Content rendered via HTML Block</span>
    </div>
  </PreviewWrapper>
</template>
