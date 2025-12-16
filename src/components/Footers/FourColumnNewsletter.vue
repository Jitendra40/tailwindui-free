<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<footer class="bg-gray-950 text-white" aria-labelledby="footer-heading">
  <h2 id="footer-heading" class="sr-only">Footer</h2>
  <div class="mx-auto max-w-6xl px-4 py-14 lg:px-6">
    <div class="grid gap-10 lg:grid-cols-4 lg:items-start">
      <div class="space-y-4 lg:col-span-1">
        <div class="flex items-center gap-2 text-sm font-semibold">
          <svg class="h-8 w-8 text-indigo-300" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect x="6" y="6" width="20" height="20" rx="5" fill="currentColor" fill-opacity="0.18" />
            <path d="M12 16h8" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <path d="M16 12v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
          <span>Northwind</span>
        </div>
        <p class="text-sm text-gray-300">Weekly notes on product, growth, and shipping calmly.</p>
      </div>
      <div class="grid gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
        <div>
          <h3 class="text-sm font-semibold">Product</h3>
          <ul class="mt-3 space-y-2 text-sm text-gray-300">
            <li><a href="javascript:void(0)" class="hover:text-indigo-200">Overview</a></li>
            <li><a href="javascript:void(0)" class="hover:text-indigo-200">Pricing</a></li>
            <li><a href="javascript:void(0)" class="hover:text-indigo-200">Integrations</a></li>
            <li><a href="javascript:void(0)" class="hover:text-indigo-200">Status</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-semibold">Company</h3>
          <ul class="mt-3 space-y-2 text-sm text-gray-300">
            <li><a href="javascript:void(0)" class="hover:text-indigo-200">About</a></li>
            <li><a href="javascript:void(0)" class="hover:text-indigo-200">Careers</a></li>
            <li><a href="javascript:void(0)" class="hover:text-indigo-200">Press</a></li>
            <li><a href="javascript:void(0)" class="hover:text-indigo-200">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-semibold">Legal</h3>
          <ul class="mt-3 space-y-2 text-sm text-gray-300">
            <li><a href="javascript:void(0)" class="hover:text-indigo-200">Privacy</a></li>
            <li><a href="javascript:void(0)" class="hover:text-indigo-200">Terms</a></li>
            <li><a href="javascript:void(0)" class="hover:text-indigo-200">DPA</a></li>
          </ul>
        </div>
      </div>
      <div class="space-y-3">
        <h3 class="text-sm font-semibold">Subscribe</h3>
        <p class="text-sm text-gray-300">Join 14,000 founders reading our Friday digest.</p>
        <form class="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label for="email-address" class="sr-only">Email address</label>
          <input type="email" name="email-address" id="email-address" autocomplete="email" required class="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/70" placeholder="you@example.com">
          <button type="submit" class="inline-flex justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-400">Subscribe</button>
        </form>
      </div>
    </div>
    <div class="mt-12 flex flex-wrap items-center gap-3 text-xs text-gray-400">
      <span>&copy; 2025 Northwind</span>
      <span class="text-gray-600">â€¢</span>
      <a href="javascript:void(0)" class="hover:text-indigo-200">Security</a>
      <a href="javascript:void(0)" class="hover:text-indigo-200">Cookie policy</a>
    </div>
  </div>
</footer>
`
</script>

<template>
  <PreviewWrapper title="Newsletter Footer" description="Dark footer with signup and compact links." :html-block="htmlBlock">
    <footer class="bg-gray-950 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto max-w-6xl px-4 py-14 lg:px-6">
        <div class="grid gap-10 lg:grid-cols-4 lg:items-start">
          <div class="space-y-4 lg:col-span-1">
            <div class="flex items-center gap-2 text-sm font-semibold">
              <svg class="h-8 w-8 text-indigo-300" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect x="6" y="6" width="20" height="20" rx="5" fill="currentColor" fill-opacity="0.18" />
                <path d="M12 16h8" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                <path d="M16 12v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
              <span>Northwind</span>
            </div>
            <p class="text-sm text-gray-300">Weekly notes on product, growth, and shipping calmly.</p>
          </div>
          <div class="grid gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            <div>
              <h3 class="text-sm font-semibold">Product</h3>
              <ul class="mt-3 space-y-2 text-sm text-gray-300">
                <li><a href="javascript:void(0)" class="hover:text-indigo-200">Overview</a></li>
                <li><a href="javascript:void(0)" class="hover:text-indigo-200">Pricing</a></li>
                <li><a href="javascript:void(0)" class="hover:text-indigo-200">Integrations</a></li>
                <li><a href="javascript:void(0)" class="hover:text-indigo-200">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-semibold">Company</h3>
              <ul class="mt-3 space-y-2 text-sm text-gray-300">
                <li><a href="javascript:void(0)" class="hover:text-indigo-200">About</a></li>
                <li><a href="javascript:void(0)" class="hover:text-indigo-200">Careers</a></li>
                <li><a href="javascript:void(0)" class="hover:text-indigo-200">Press</a></li>
                <li><a href="javascript:void(0)" class="hover:text-indigo-200">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-semibold">Legal</h3>
              <ul class="mt-3 space-y-2 text-sm text-gray-300">
                <li><a href="javascript:void(0)" class="hover:text-indigo-200">Privacy</a></li>
                <li><a href="javascript:void(0)" class="hover:text-indigo-200">Terms</a></li>
                <li><a href="javascript:void(0)" class="hover:text-indigo-200">DPA</a></li>
              </ul>
            </div>
          </div>
          <div class="space-y-3">
            <h3 class="text-sm font-semibold">Subscribe</h3>
            <p class="text-sm text-gray-300">Join 14,000 founders reading our Friday digest.</p>
            <form class="flex flex-col gap-3 sm:flex-row sm:items-center">
              <label for="email-address" class="sr-only">Email address</label>
              <input type="email" name="email-address" id="email-address" autocomplete="email" required class="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/70" placeholder="you@example.com">
              <button type="submit" class="inline-flex justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-400">Subscribe</button>
            </form>
          </div>
        </div>
        <div class="mt-12 flex flex-wrap items-center gap-3 text-xs text-gray-400">
          <span>&copy; 2025 Northwind</span>
          <span class="text-gray-600">â€¢</span>
          <a href="javascript:void(0)" class="hover:text-indigo-200">Security</a>
          <a href="javascript:void(0)" class="hover:text-indigo-200">Cookie policy</a>
        </div>
      </div>
    </footer>
  </PreviewWrapper>
</template>
