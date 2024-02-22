// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/content"],
  pinia: {
    autoImports: ["defineStore", "definePiniaStore"],
  },
  imports: {
    dirs: ["store"],
  },
  content: {
    highlight: {
      theme: {
        default: "one-dark-pro",
        dark: "github-dark",
      },
    },
  },
  tailwindcss: {
    cssPath: "~/assets/tailwind.css",
    configPath: "@/tailwind.config.ts",
    exposeConfig: true,
  },
});
