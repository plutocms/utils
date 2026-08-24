import type { NavigationMenuItem } from '@nuxt/ui'

const actions = shallowRef<NavigationMenuItem[]>([])

export function useSidebarAdminActions() {
  const addAction = (action: NavigationMenuItem[]) => {
    const existingLabels = new Set(actions.value.map((a) => a.label))
    const newActions = action.filter((a) => !existingLabels.has(a.label))

    actions.value = [...actions.value, ...newActions]
  }

  return {
    actions,
    addAction,
  }
}
