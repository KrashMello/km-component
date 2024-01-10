<template>
  <div :class="colors[color]" role="alert">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
type colorsType = "none" | "danger" | "warning" | "info" | "success";
export default defineComponent({
  setup(props) {
    const colors = {
      danger:
        "p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",
      warning:
        "p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300",
      info: "p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400",
      success:
        "p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400",
    };
    return {
      colors,
    };
  },
  props: {
    color: {
      type: String as PropsType<colorsType>,
      default: "info",
    },
  },
});
</script>

<style scoped></style>
