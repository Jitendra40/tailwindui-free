import { ref } from 'vue'

const items = ref<{ id: string; label: string }[]>([])
const activeId = ref<string>('')

export function useTOC() {
    function setItems(newItems: { id: string; label: string }[]) {
        items.value = newItems
    }

    function setActiveId(id: string) {
        activeId.value = id
    }

    return {
        items,
        activeId,
        setItems,
        setActiveId
    }
}
