// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  css: ['~/assets/css/main.css'],
    postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['nuxt-icon', 'nuxt-lodash', '@pinia/nuxt', // "vue3-carousel-nuxt",
  '@pinia-plugin-persistedstate/nuxt', "vue3-carousel-nuxt"],
})