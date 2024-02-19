// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  pinia: {
    autoImports: ["defineStore", "definePiniaStore"],
  },
  imports: {
    dirs: ["store"],
  },
  ssr: false,
  tailwindcss: {
    cssPath: "~/assets/tailwind.css",
    configPath: "@/tailwind.config.ts",
    exposeConfig: true,
  },
});
