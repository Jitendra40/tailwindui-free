<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"



const htmlBlock = `
<div class="space-y-6">
  <!-- Switch Toggle -->
  <div class="flex items-center justify-between space-x-2">
    <label for="notifications" class="text-sm font-medium leading-none text-foreground">Enable Notifications</label>
    <button id="notifications" role="switch" aria-checked="true" class="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input">
      <span class="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"></span>
    </button>
  </div>

  <!-- Radio Group -->
  <div class="space-y-3">
    <label class="text-sm font-medium leading-none text-foreground">Theme Preference</label>
    <div class="grid grid-cols-3 gap-3 mt-2">
      <label class="cursor-pointer relative flex flex-col items-center justify-between rounded-xl border border-gray-200 bg-popover p-4 hover:bg-accent hover:text-accent-foreground has-[:checked]:border-primary has-[:checked]:bg-primary/5 has-[:checked]:text-primary transition-all  active:scale-95">
        <input type="radio" name="theme" value="light" class="peer sr-only" />
        <svg class="mb-2 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
        <span class="text-sm font-medium">Light</span>
      </label>
      
      <label class="cursor-pointer relative flex flex-col items-center justify-between rounded-xl border border-gray-200 bg-popover p-4 hover:bg-accent hover:text-accent-foreground has-[:checked]:border-primary has-[:checked]:bg-primary/5 has-[:checked]:text-primary transition-all  active:scale-95">
        <input type="radio" name="theme" value="dark" class="peer sr-only" />
        <svg class="mb-2 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
        <span class="text-sm font-medium">Dark</span>
      </label>

      <label class="cursor-pointer relative flex flex-col items-center justify-between rounded-xl border border-gray-200 bg-popover p-4 hover:bg-accent hover:text-accent-foreground has-[:checked]:border-primary has-[:checked]:bg-primary/5 has-[:checked]:text-primary transition-all  active:scale-95">
        <input type="radio" name="theme" value="system" class="peer sr-only" />
        <svg class="mb-2 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        <span class="text-sm font-medium">System</span>
      </label>
    </div>
  </div>
</div>
`
</script>

<template>
  <PreviewWrapper title="Toggles & Radios" description="Interactive switches and radio cards." :html-block="htmlBlock">

  </PreviewWrapper>
</template>
