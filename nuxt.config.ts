// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui"],
  ui: {
    icons: ["heroicons", "simple-icons",'mdi'],
  },
  devtools: {
    enabled: false,
  },
});
