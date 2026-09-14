# Admin navigation system

This feature provides a plugin system for the admin interface. It lets other packages register a navbar component, navbar actions, and sidebar menu items at runtime. Each layer adds its own UI elements without modifying core code.

The system has three parts: navbar registration, navbar actions, and sidebar menu actions.

## Navbar registration

`useNavbarAdmin()` lets a layer register the admin navbar component globally.

- `registerNavbar(component: Component)` — registers a navbar component. Uses `markRaw` and `shallowRef` to prevent Vue from tracking internal navbar state.
- Returns `{ navbar, registerNavbar }`. The `navbar` ref holds the registered component, or `null` if not yet registered.

A layer calls this once at startup to plug in its navbar implementation.

## Navbar actions

`useNavbarAdminActions()` lets layers add action buttons to the navbar.

- `addAction(action: Component)` — adds a Vue component to the navbar action list. Each layer can add one or more action components.
- Returns `{ actions, addAction }`. The `actions` ref holds an array of registered action components.

Each action component gets rendered by the navbar's own template. The `NavbarAdminActionButton` component provides a standard button UI.

## Sidebar actions

`useSidebarAdminActions()` lets layers add menu items to the admin sidebar.

- `addAction(action: NavigationMenuItem[])` — adds one or more menu items from `@nuxt/ui`. The function deduplicates by `label` — it skips any item whose label already exists in the sidebar.
- Returns `{ actions, addAction }`. The `actions` ref holds a shallow copy of the menu item array.

Deduplication prevents duplicate menu entries when multiple layers register the same item.

## NavbarAdminActionButton component

`NavbarAdminActionButton.vue` is a standard button for navbar actions. It accepts props from the `NavbarAdminActionButtonProps` interface:

- `label` — button text.
- `icon` — icon name (from the icon library). Optional.
- `to` — link destination (string, can be null).
- `show` — show/hide the button. Defaults to `true`.
- `title` — tooltip text. Optional.
- `disabled` — disable the button. Optional.
- `target` — link target attribute (`_blank`, `_self`, etc.). Optional.

The component renders a `NuxtLink` inside an `li` element. On small screens (under 64rem), it hides the label text and centers the icon only, using a responsive media query. The button changes background on hover.

## Registration order

Layers typically call these composables at app startup, often in a plugin or layout component. The order does not matter — each call just appends to the global array (or sets the navbar ref). A layer can call multiple times to add more items.
