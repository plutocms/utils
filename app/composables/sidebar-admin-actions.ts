import type { NavigationMenuItem } from '@nuxt/ui'

const actions = ref<NavigationMenuItem[]>([])

export function useSidebarAdminActions() {
  const addAction = (action: NavigationMenuItem[]) => {
    // @ts-expect-error - Type instantiation is excessively deep and possibly infinite.
    const existingLabels = new Set(actions.value.map((a) => a.label))
    const newActions = action.filter((a) => !existingLabels.has(a.label))

    actions.value = [...actions.value, ...newActions]
  }

  return {
    actions,
    addAction,
  }
}
