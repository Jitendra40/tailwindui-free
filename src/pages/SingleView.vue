<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { componentMap } from '@/lib/componentMap';

const route = useRoute();
const router = useRouter();

const category = computed(() => route.params.category as string);
const componentId = computed(() => route.params.component as string);


const currentList = computed(() => componentMap[category.value] || []);
const currentIndex = computed(() => currentList.value.findIndex(c => c.id === componentId.value));
const currentComponent = computed(() => {
    if (currentIndex.value === -1) return null;
    return currentList.value[currentIndex.value]?.component;
});

const nextItem = computed(() => {
    if (currentIndex.value === -1 || currentIndex.value >= currentList.value.length - 1) return null;
    return currentList.value[currentIndex.value + 1];
});

const prevItem = computed(() => {
    if (currentIndex.value <= 0) return null;
    return currentList.value[currentIndex.value - 1];
});

function goNext() {
    if (nextItem.value) {
        router.push({ name: 'SingleView', params: { category: category.value, component: nextItem.value.id } });
    }
}

function goPrev() {
    if (prevItem.value) {
        router.push({ name: 'SingleView', params: { category: category.value, component: prevItem.value.id } });
    }
}

function goBack() {
    if (window.history.length > 1) {
        router.back();
    } else {
        if (category.value === 'pages') {
            router.push('/pages');
        } else if (category.value === 'auth') {
            router.push('/auth');
        } else {
            router.push('/');
        }
    }
}
</script>

<template>
    <div class="h-full w-full bg-white">
        <!-- Render the component with fullScreen prop -->
        <component :is="currentComponent" :isFullScreen="true" v-if="currentComponent">
            <!-- Inject navigation into the preview wrapper slot -->
            <template #extra-nav>
                <div class="flex items-center gap-1 border-r border-gray-200 pr-2 mr-2">
                    <button 
                        @click="goBack" 
                        class="p-1.5 rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-900 mr-2 flex items-center gap-1"
                        title="Close View">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        <span class="text-xs font-medium">Close</span>
                    </button>
                    
                    <button 
                        @click="goPrev" 
                        :disabled="!prevItem"
                        class="p-1.5 rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-900 disabled:opacity-30 disabled:hover:bg-transparent"
                        title="Previous Component">
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <span class="text-xs font-semibold text-gray-700 min-w-[100px] text-center truncate">
                        {{ currentList[currentIndex]?.label }}
                    </span>
                    <button 
                        @click="goNext" 
                        :disabled="!nextItem"
                        class="p-1.5 rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-900 disabled:opacity-30 disabled:hover:bg-transparent"
                        title="Next Component">
                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </template>
        </component>
        <div v-else class="flex flex-col items-center justify-center h-screen">
            <h2 class="text-xl font-semibold text-gray-900">Component not found</h2>
            <p class="text-gray-500">The component {{ componentId }} in category {{ category }} does not exist.</p>
            <button @click="goBack" class="mt-4 text-indigo-600 hover:underline">Go Back</button>
        </div>
    </div>
</template>
