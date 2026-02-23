import type { NavigationMenuItem } from '@nuxt/ui'

const actions = ref<NavigationMenuItem[]>([])

export function useSidebarAdminActions() {
  const addAction = (newActions: NavigationMenuItem[]) => {
    // @ts-expect-error - We assume 'href' is the unique identifier for actions
    const existingIds = new Set(actions.value.map((a) => a.href))
    const filtered = newActions.filter(
      (a) => a.href && !existingIds.has(a.href.toString())
    )

    actions.value = [...actions.value, ...filtered]
  }

  return {
    actions,
    addAction,
  }
}
