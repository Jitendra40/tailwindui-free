<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<footer class="bg-white/95 border-t border-gray-100" aria-labelledby="footer-heading">
  <h2 id="footer-heading" class="sr-only">Footer</h2>
  <div class="mx-auto max-w-6xl px-4 py-14 lg:px-6">
    <div class="grid gap-10 lg:grid-cols-5">
      <div class="lg:col-span-2 space-y-3">
        <div class="flex items-center gap-2 text-sm font-semibold text-gray-900">
          <svg class="h-8 w-8 text-indigo-600" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect x="6" y="6" width="20" height="20" rx="5" fill="currentColor" fill-opacity="0.12" />
            <path d="M12 16h8" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <path d="M16 12v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
          <span>Northwind</span>
        </div>
        <p class="text-sm text-gray-600">Tools for modern product teams shipping SaaS faster.</p>
        <div class="flex gap-3 text-gray-500">
          <a href="javascript:void(0)" class="hover:text-indigo-600 text-xs font-medium">Status</a>
          <span class="text-xs text-gray-300">â€¢</span>
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
      <span>&copy; 2025 Northwind Inc.</span>
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
    <footer class="bg-white/95 border-t border-gray-100" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto max-w-6xl px-4 py-14 lg:px-6">
        <div class="grid gap-10 lg:grid-cols-5">
          <div class="lg:col-span-2 space-y-3">
            <div class="flex items-center gap-2 text-sm font-semibold text-gray-900">
              <svg class="h-8 w-8 text-indigo-600" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect x="6" y="6" width="20" height="20" rx="5" fill="currentColor" fill-opacity="0.12" />
                <path d="M12 16h8" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                <path d="M16 12v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
              <span>Northwind</span>
            </div>
            <p class="text-sm text-gray-600">Tools for modern product teams shipping SaaS faster.</p>
            <div class="flex gap-3 text-gray-500">
              <a href="javascript:void(0)" class="hover:text-indigo-600 text-xs font-medium">Status</a>
              <span class="text-xs text-gray-300">â€¢</span>
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
          <span>&copy; 2025 Northwind Inc.</span>
          <span class="text-gray-300">â€¢</span>
          <a href="javascript:void(0)" class="hover:text-indigo-600">Privacy</a>
          <a href="javascript:void(0)" class="hover:text-indigo-600">Terms</a>
          <a href="javascript:void(0)" class="hover:text-indigo-600">EU Compliance</a>
        </div>
      </div>
    </footer>
  </PreviewWrapper>
</template>
