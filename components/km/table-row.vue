<template>
  <tr :class="`${colors[color]}  hover:opacity-70  odd:opacity-85`">
    <slot v-if="!!$slots.default" />
    <td v-else v-for="(item, i) in items" :key="i" class="px-6 py-4">
      {{ item }}
    </td>
  </tr>
</template>

<script>
export default {
  setup() {
    return {};
  },
  data() {
    return {
      color: "",
      colors: {
        red: "bg-red-600/70 text-white dark:bg-red-300/70 dark:text-slate-600",
        yellow:
          "bg-yellow-600/70 text-white dark:bg-yellow-300/70 dark:text-slate-600",
        cyan: "bg-cyan-600/70 text-white dark:bg-cyan-300/70 dark:text-slate-600",
        blue: "bg-blue-600/70 text-white dark:bg-blue-300/70 dark:text-slate-600",
        gray: "bg-gray-600/70 text-white dark:bg-gray-300/70 dark:text-slate-600",
        slate:
          "bg-slate-600/70 text-white dark:bg-slate-300/70 dark:text-slate-600",
        purple:
          "bg-purple-600/70 text-white dark:bg-purple-300/70 dark:text-slate-600",
      },
    };
  },
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.color = this.$parent.$props.color;
  },
};
</script>
