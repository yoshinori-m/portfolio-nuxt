// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: ['@nuxt/eslint'],
  eslint: {
    config: {
      stylistic: {
        indent: 2, // インデントはスペース2
        quotes: 'single', // クオートはシングル
        semi: false, // セミコロンは不要
      },
    },
  },
})
