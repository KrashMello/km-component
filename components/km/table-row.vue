<template>
  <tr :class="`${colors[color]} `">
    <slot v-if="!!$slots.default" />
    <td v-else v-for="(item, i) in items" :key="i" class="px-6 py-4">
      {{ item }}
    </td>
    <td v-if="$parent.$props.actions" class="flex gap-0 px-6 py-4">
      <km-btn
        v-for="(action, j) in actions"
        :key="j"
        type="link"
        icon
        x-small
        :to="action.href"
        rounded
        :color="`${
          action.icon === 'Delete'
            ? 'bg-red-600 hover:bg-red-700 dark:bg-red-300 dark:hover:bg-red-500'
            : action.icon === 'Edit'
              ? 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-300 dark:hover:bg-blue-500'
              : action.icon === 'View'
                ? 'bg-green-600 hover:bg-green-700 dark:bg-green-300 dark:hover:bg-green-500'
                : 'bg-gray-600 hover:bg-gray-700 dark:bg-gray-300 dark:hover:bg-gray-500'
        } text-white   rounded-full`"
      >
        <svg-modify v-if="action.icon === 'Edit'" class="size-5" />
        <svg-show v-else-if="action.icon === 'View'" class="size-5" />
        <svg-delete v-else-if="action.icon === 'Delete'" class="size-5" />
        <svg-shield v-else class="size-5" />
      </km-btn>
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
        red: "bg-red-600/70 hover:bg-red-600/60 odd:bg-red-600/60 odd:hover:bg-red-600/50 text-white dark:bg-red-300/70 dark:text-slate-600",
        yellow:
          "bg-yellow-600/70 hover:bg-yellow-600/60 odd:bg-yellow-600/60 odd:hover:bg-yellow-600/50 dark:hover:bg-yellow-300/60 dark:odd:bg-yellow-300/60 dark:odd:hover:bg-yellow-300/50 text-white dark:bg-yellow-300/70 dark:text-slate-600",
        cyan: "bg-cyan-600/70 hover:bg-cyan-600/60 odd:bg-cyan-600/60 odd:hover:bg-cyan-600/50 dark:hover:bg-cyan-300/60 dark:odd:bg-cyan-300/60 dark:odd:hover:bg-cyan-300/50 text-white dark:bg-cyan-300/70 dark:text-slate-600",
        blue: "bg-blue-600/70 hover:bg-blue-600/60 odd:bg-blue-600/60 odd:hover:bg-blue-600/50 dark:hover:bg-blue-300/60 dark:odd:bg-blue-300/60 dark:odd:hover:bg-blue-300/50 text-white dark:bg-blue-300/70 dark:text-slate-600",
        gray: "bg-gray-600/70 hover:bg-gray-600/60 odd:bg-gray-600/60 odd:hover:bg-gray-600/50 dark:hover:bg-gray-300/60 dark:odd:bg-gray-300/60 dark:odd:hover:bg-gray-300/50 text-white dark:bg-gray-300/70 dark:text-slate-600",
        slate:
          "bg-slate-600/70 hover:bg-slate-600/60 odd:bg-slate-600/60 odd:hover:bg-slate-600/50 dark:hover:bg-slate-300/60 dark:odd:bg-slate-300/60 dark:odd:hover:bg-slate-300/50 text-white dark:bg-slate-300/70 dark:text-slate-600",
        purple:
          "bg-purple-600/70 hover:bg-purple-600/60 odd:bg-purple-600/60 odd:hover:bg-purple-600/50 dark:hover:bg-purple-300/60 dark:odd:bg-purple-300/60 dark:odd:hover:bg-purple-300/50 text-white dark:bg-purple-300/70 dark:text-slate-600",
      },
    };
  },
  props: {
    items: {
      type: Object,
      required: true,
    },
    actions: {
      type: Array,
      required: false,
    },
  },
  mounted() {
    this.color = this.$parent.$props.color;
  },
};
</script>
