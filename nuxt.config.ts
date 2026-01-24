// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],

  $meta: {
    name: 'utils',
  },

  typescript: {
    tsConfig: {
      references: [
        { path: './.nuxt/tsconfig.app.json' },
        { path: './.nuxt/tsconfig.server.json' },
        { path: './.nuxt/tsconfig.shared.json' },
        { path: './.nuxt/tsconfig.node.json' },
      ],
      // https://nuxt.com/docs/guide/concepts/typescript
      files: [],
    },
  },

  eslint: {
    config: {
      nuxt: {
        sortConfigKeys: true,
      },
      standalone: false,
    },
  },
})
