import type { Config } from "tailwindcss";
export default <Partial<Config>>{
  theme: {},
  plugins: [require("flowbite/plugin")],
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./composables/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
    "Error.{js,ts,vue}",
    "error.{js,ts,vue}",
    "content/**/*.md",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
};
