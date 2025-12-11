<script setup lang="ts">
import PreviewWrapper from "@/components/PreviewWrapper.vue"

const htmlBlock = `
<nav aria-label="Progress">
  <ol role="list" class="space-y-4 md:flex md:space-x-8 md:space-y-0">
      <li class="md:flex-1">
          <a href="#" class="group flex flex-col border-l-4 border-indigo-600 py-2 pl-4 hover:border-indigo-800 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
              <span class="text-sm font-medium text-indigo-600 group-hover:text-indigo-800">Step 01</span>
              <span class="text-sm font-medium">Job Details</span>
          </a>
      </li>
      <li class="md:flex-1">
          <a href="#" class="flex flex-col border-l-4 border-indigo-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4" aria-current="step">
              <span class="text-sm font-medium text-indigo-600">Step 02</span>
              <span class="text-sm font-medium">Application form</span>
          </a>
      </li>
      <li class="md:flex-1">
           <a href="#" class="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
              <span class="text-sm font-medium text-gray-500 group-hover:text-gray-700">Step 03</span>
              <span class="text-sm font-medium">Preview</span>
          </a>
      </li>
  </ol>
</nav>
`
</script>

<template>
  <PreviewWrapper title="Progress Steps" description="Steps with top border progress indicators." :html-block="htmlBlock">
    <nav aria-label="Progress">
      <ol role="list" class="space-y-4 md:flex md:space-x-8 md:space-y-0">
          <li class="md:flex-1">
              <a href="#" class="group flex flex-col border-l-4 border-indigo-600 py-2 pl-4 hover:border-indigo-800 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span class="text-sm font-medium text-indigo-600 group-hover:text-indigo-800">Step 01</span>
                  <span class="text-sm font-medium">Job Details</span>
              </a>
          </li>
          <li class="md:flex-1">
              <a href="#" class="flex flex-col border-l-4 border-indigo-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4" aria-current="step">
                  <span class="text-sm font-medium text-indigo-600">Step 02</span>
                  <span class="text-sm font-medium">Application form</span>
              </a>
          </li>
          <li class="md:flex-1">
               <a href="#" class="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span class="text-sm font-medium text-gray-500 group-hover:text-gray-700">Step 03</span>
                  <span class="text-sm font-medium">Preview</span>
              </a>
          </li>
      </ol>
    </nav>
  </PreviewWrapper>
</template>
