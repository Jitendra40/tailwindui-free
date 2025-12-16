<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<div class="relative">
  <input type="text" id="floating_outlined" class="block w-full rounded-xl border border-input bg-white px-3 pb-2 pt-5 text-sm text-foreground appearance-none focus:border-primary focus:outline-none focus:ring-0 peer transition-all" placeholder=" " />
  <label for="floating_outlined" class="absolute left-3 top-3.5 z-10 origin-[0] -translate-y-3 scale-75 transform bg-white px-1 text-sm text-muted-foreground duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-primary">Floating Label</label>
</div>
`
</script>

<template>
  <PreviewWrapper title="Floating Label" description="Label moves up when focused." :html-block="htmlBlock">

  </PreviewWrapper>
</template>
