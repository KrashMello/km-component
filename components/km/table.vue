<template>
  <div
    :class="`relative overflow-x-auto ${
      shadow ? `${shadowColors[color]} shadow-lg` : ''
    }`"
  >
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
    >
      <thead :class="`text-xs uppercase ${colors[color]}`">
        <tr>
          <slot name="header" />
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
      red: "",
      yellow: "",
      cyan: "",
      blue: `${
        props.dark ? "bg-blue-800 text-white" : "bg-blue-300 text-slate-600"
      }`,
      gray: "bg-gray-600 text-white",
      purple: "",
    };
    const shadowColors = {
      red: "",
      yellow: "",
      cyan: "",
      blue: `${props.dark ? "shadow-blue-800" : "shadow-blue-300"}`,
      gray: "shadow-gray-600",
      purple: "",
    };

    return {
      shadowColors,
      colors,
    };
  },
  props: {
    color: {
      type: String as PropType<colorType>,
      default: "gray",
    },
    dark: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
