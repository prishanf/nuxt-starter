// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "nuxt-icon"],
  ui: {
    icons: ["mdi"],
  },
  devtools: {
    enabled: false,
  },
});
