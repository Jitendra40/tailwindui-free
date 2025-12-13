import { computed, ref } from "vue"

export const VIEWPORT_SIZES = ["Mobile", "small", "medium", "large", "full"] as const
export type ViewportSize = typeof VIEWPORT_SIZES[number]

const viewportStyles: Record<ViewportSize, string> = {
	Mobile: "width: 375px;",
	small: "width: 640px;",
	medium: "width: 768px;",
	large: "width: 1024px;",
	full: "width: 100%;",
}

export function usePreviewControls(htmlBlock: string, defaultViewport: ViewportSize = "full") {
	const showPreview = ref(true)
	const showCode = ref(false)
	const copied = ref(false)
	const activeViewport = ref<ViewportSize>(defaultViewport)

	// Return a style string instead of a class
	const previewWidthStyle = computed(() => viewportStyles[activeViewport.value] ?? viewportStyles.full)

	const setPreview = () => {
		showPreview.value = true
		showCode.value = false
	}

	const setCode = () => {
		showPreview.value = false
		showCode.value = true
	}

	const copyMarkup = async () => {
		try {
			await navigator.clipboard.writeText(htmlBlock)
			copied.value = true
			setTimeout(() => {
				copied.value = false
			}, 1200)
		} catch (error) {
			console.error("Copy failed", error)
		}
	}

	return {
		showPreview,
		showCode,
		copied,
		activeViewport,
		previewWidthStyle,
		setPreview,
		setCode,
		copyMarkup,
		htmlBlock,
	}
}
