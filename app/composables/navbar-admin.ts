const navbar = shallowRef<Component | null>(null)

export function useNavbarAdmin() {
  const registerNavbar = (component: Component) => {
    navbar.value = markRaw(component)
  }

  return {
    navbar,
    registerNavbar,
  }
}
