<template>
  <div
    :class="`relative overflow-x-auto ${shadow ? 'drop-shadow-md' : ''} ${
      rounded ? 'rounded-lg' : ''
    }`"
  >
    <table
      :class="`w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 `"
    >
      <thead :class="`text-xs uppercase ${colors[color]}`">
        <tr>
          <slot v-if="!!$slots.header" name="header" />
          <th
            v-else
            v-for="(item, i) in header"
            :key="i"
            scope="col"
            class="px-6 py-3"
          >
            {{ item }}
          </th>
          <th scope="col" class="px-6 py-3" v-if="actions">ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        <slot />
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
type colorType = "red" | "yellow" | "cyan" | "blue" | "gray" | "purple";

export default {
  setup(props) {
    const colors = {
      red: "bg-red-600 text-white dark:bg-red-300 dark:text-slate-600",
      yellow: "bg-yellow-600 text-white dark:bg-yellow-300 dark:text-slate-600",
      cyan: "bg-cyan-600 text-white dark:bg-cyan-300 dark:text-slate-600",
      blue: "bg-blue-600 text-white dark:bg-blue-300 dark:text-slate-600",
      gray: "bg-gray-600 text-white dark:bg-gray-300 dark:text-slate-600",
      slate: "bg-slate-600 text-white dark:bg-slate-300 dark:text-slate-600",
      purple: "bg-purple-600 text-white dark:bg-purple-300 dark:text-slate-600",
    };

    return {
      colors,
    };
  },
  props: {
    color: {
      type: String as PropType<colorType>,
      default: "slate",
    },
    dark: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    header: {
      type: Array,
      Required: true,
    },
    actions: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
