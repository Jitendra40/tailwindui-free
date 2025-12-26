<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<footer class="bg-white/95 border-t border-gray-100" aria-labelledby="footer-heading">
  <h2 id="footer-heading" class="sr-only">Footer</h2>
  <div class="mx-auto max-w-6xl px-4 py-14 lg:px-6">
    <div class="grid gap-10 lg:grid-cols-5">
      <div class="lg:col-span-2 space-y-3">
        <div class="flex items-center gap-2 text-sm font-semibold text-gray-900">
           <svg  class="h-6 w-auto "  viewBox="0 0 155.68 30">
  <g>
    <path d="M37.47,25.26V4.64h5.67c1.48,0,2.6.41,3.35,1.24s1.12,2.03,1.12,3.62v9.66c0,1.95-.34,3.46-1.03,4.52s-1.88,1.59-3.59,1.59h-5.53ZM41.62,21.62h.71c.76,0,1.14-.37,1.14-1.1v-10.64c0-.69-.09-1.13-.28-1.33s-.56-.3-1.12-.3h-.46v13.37Z"/>
    <path d="M54.08,25.45c-1.72,0-2.98-.48-3.8-1.45s-1.22-2.38-1.22-4.26V4.64h4.01v14.94c0,.34.02.67.06.99s.13.58.27.78.37.3.68.3.55-.1.69-.3.23-.46.26-.78.05-.65.05-1V4.64h4.01v15.11c0,1.88-.41,3.29-1.22,4.26s-2.08,1.45-3.8,1.45Z"/>
    <path d="M60.68,25.26V4.64h6.28l1.73,12.57,1.72-12.57h6.34v20.62h-3.77v-14.86l-2.37,14.86h-3.7l-2.51-14.86v14.86h-3.73Z"/>
    <path d="M78.58,25.26V4.64h6.28l1.73,12.57,1.72-12.57h6.34v20.62h-3.77v-14.86l-2.37,14.86h-3.7l-2.51-14.86v14.86h-3.73Z"/>
    <path d="M98.98,25.26v-6.79l-3.29-13.84h4.09l1.15,6.98,1.15-6.98h4.08l-3.28,13.84v6.79h-3.89Z"/>
    <path d="M112.82,25.26V4.64h4.12v17.11h4.24v3.52h-8.37Z"/>
    <path d="M127.29,25.45c-1.65,0-2.91-.5-3.78-1.49s-1.31-2.44-1.31-4.32v-9.8c0-1.77.43-3.11,1.29-4.02s2.13-1.37,3.79-1.37,2.93.46,3.79,1.37,1.29,2.25,1.29,4.02v9.8c0,1.88-.44,3.32-1.31,4.32s-2.13,1.49-3.78,1.49ZM127.32,21.65c.62,0,.94-.61.94-1.82v-10.07c0-1.02-.3-1.52-.91-1.52-.69,0-1.03.52-1.03,1.56v10.05c0,.64.08,1.1.23,1.38s.41.42.77.42Z"/>
    <path d="M138.29,25.45c-2.95,0-4.42-2.11-4.42-6.33v-8.89c0-3.85,1.69-5.78,5.06-5.78,1.39,0,2.46.28,3.2.84s1.25,1.37,1.54,2.44.42,2.38.42,3.91h-4.03v-1.83c0-.45-.06-.82-.18-1.12s-.37-.45-.76-.45c-.48,0-.79.16-.94.48s-.23.67-.23,1.05v10c0,.55.07,1.01.22,1.35s.43.52.85.52.73-.17.87-.52.22-.81.22-1.38v-2.94h-1.1v-3.56h5.04v12.01h-1.65l-.7-1.73c-.72,1.28-1.85,1.92-3.4,1.92Z"/>
    <path d="M150.59,25.45c-1.65,0-2.91-.5-3.78-1.49s-1.31-2.44-1.31-4.32v-9.8c0-1.77.43-3.11,1.29-4.02s2.13-1.37,3.79-1.37,2.93.46,3.79,1.37,1.29,2.25,1.29,4.02v9.8c0,1.88-.44,3.32-1.31,4.32s-2.13,1.49-3.78,1.49ZM150.63,21.65c.62,0,.94-.61.94-1.82v-10.07c0-1.02-.3-1.52-.91-1.52-.69,0-1.03.52-1.03,1.56v10.05c0,.64.08,1.1.23,1.38s.41.42.77.42Z"/>
  </g>
  <rect x="4.39" y="4.39" width="21.21" height="21.21" transform="translate(15 -6.21) rotate(45)"/>
</svg>
        </div>
        <p class="text-sm text-gray-600">Tools for modern product teams shipping SaaS faster.</p>
        <div class="flex gap-3 text-gray-500">
          <a href="javascript:void(0)" class="hover:text-indigo-600 text-xs font-medium">Status</a>
        
          <a href="javascript:void(0)" class="hover:text-indigo-600 text-xs font-medium">Release notes</a>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-8 lg:col-span-3 sm:grid-cols-3">
        <div>
          <h3 class="text-sm font-semibold text-gray-900">Product</h3>
          <ul class="mt-4 space-y-2 text-sm text-gray-600">
            <li><a href="javascript:void(0)" class="hover:text-indigo-600">Features</a></li>
            <li><a href="javascript:void(0)" class="hover:text-indigo-600">Integrations</a></li>
            <li><a href="javascript:void(0)" class="hover:text-indigo-600">Changelog</a></li>
            <li><a href="javascript:void(0)" class="hover:text-indigo-600">Roadmap</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-gray-900">Resources</h3>
          <ul class="mt-4 space-y-2 text-sm text-gray-600">
            <li><a href="javascript:void(0)" class="hover:text-indigo-600">Docs</a></li>
            <li><a href="javascript:void(0)" class="hover:text-indigo-600">API</a></li>
            <li><a href="javascript:void(0)" class="hover:text-indigo-600">Playbooks</a></li>
            <li><a href="javascript:void(0)" class="hover:text-indigo-600">Templates</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-gray-900">Company</h3>
          <ul class="mt-4 space-y-2 text-sm text-gray-600">
            <li><a href="javascript:void(0)" class="hover:text-indigo-600">About</a></li>
            <li><a href="javascript:void(0)" class="hover:text-indigo-600">Careers</a></li>
            <li><a href="javascript:void(0)" class="hover:text-indigo-600">Press</a></li>
            <li><a href="javascript:void(0)" class="hover:text-indigo-600">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mt-10 flex flex-wrap items-center gap-3 text-xs text-gray-500">
      <span>&copy; 2025 Dummy Logo.</span>
      <span class="text-gray-300">â€¢</span>
      <a href="javascript:void(0)" class="hover:text-indigo-600">Privacy</a>
      <a href="javascript:void(0)" class="hover:text-indigo-600">Terms</a>
      <a href="javascript:void(0)" class="hover:text-indigo-600">EU Compliance</a>
    </div>
  </div>
</footer>
`
</script>

<template>
  <PreviewWrapper title="Product Footer" description="Multi-column product footer with brief about." :html-block="htmlBlock">

  </PreviewWrapper>
</template>
