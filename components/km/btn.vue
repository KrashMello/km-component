<template>
  <NuxtLink
    v-if="type === 'link'"
    :to="to"
    :class="`${$attrs.class ? $attrs.class : classes}`"
    :target="target"
  >
    <slot v-if="!!$slots.icon" name="icon" />
    <slot v-else />
  </NuxtLink>
  <button
    v-if="type === 'button'"
    v-bind="$attrs"
    :class="`${$attrs.class ? $attrs.class : classes}`"
  >
    <slot name="default" />
  </button>
  <a
    v-if="type === 'anchor'"
    :target="target"
    :class="`${$attrs.class ? $attrs.class : classes}`"
  >
    <slot name="default" />
  </a>
</template>

<script lang="ts">
type types = "link" | "button" | "anchor";
type targets = "_blank" | "_self" | "_parent" | "_top" | "framename";
type roundedType = "full" | "top" | "bottom" | "left" | "right" | "none";
type colorType =
  | "danger"
  | "warning"
  | "info"
  | "success"
  | "blue"
  | "gray"
  | "purple";
type borderType = "top" | "bottom" | "left" | "right";
export default {
  setup(props) {
    const { border, outlined } = props;
    const borderStyle = {
      top: "hover:border-t-2 border-b-transparent hover:bg-gradient-to-b",
      bottom: "hover:border-b hover:border-b-2 hover:bg-gradient-to-t",
      left: "hover:border-l hover:border-l-2 hover:bg-gradient-to-r",
      right: "hover:border-r hover:border-r-2 hover:bg-gradient-to-l",
    };
    const borderKey = Object.keys(borderStyle);
    type Borders = (typeof borderKey)[number];
    const isBordered = (x: any): x is Borders => borderKey.includes(x);

    const colors = {
      slate: ` dark:border-slate-300 border-slate-600 ${
        outlined
          ? "text-slate-600 dark:text-slate-300 dark:active:bg-slate-300/75 active:bg-slate-600/75 active:text-white hover:text-white dark:hover:bg-slate-300/30 hover:bg-slate-600/30"
          : isBordered(border)
            ? `${borderStyle[border]} dark:from-slate-300/30 from-slate-600/30 hover:text-white active:from-slate-600/75 dark:active:from-slate-300/75 dark:text-slate-300  text-slate-600`
            : "dark:bg-slate-300 bg-slate-600 text-white hover:bg-slate-600/60 dark:hover:bg-slate-300/30"
      }`,
      danger: ` dark:border-red-300 border-red-600 ${
        outlined
          ? "text-red-600 dark:text-red-300 dark:active:bg-red-300/75 active:bg-red-600/75 active:text-white hover:text-white dark:hover:bg-red-300/30 hover:bg-red-600/30"
          : isBordered(border)
            ? `${borderStyle[border]} dark:from-red-300/30 from-red-600/30 hover:text-white active:from-red-600/75 dark:active:from-red-300/75 dark:text-red-300  text-red-600`
            : "dark:bg-red-300 bg-red-600 text-white hover:bg-red-600/30 dark:hover:bg-red-300/30"
      }`,
      success: ` dark:border-green-300 border-green-600 ${
        outlined
          ? "text-green-600 dark:text-green-300 dark:active:bg-green-300/75 active:bg-green-600/75 active:text-white hover:text-white dark:hover:bg-green-300/30 hover:bg-green-600/30"
          : isBordered(border)
            ? `${borderStyle[border]} dark:from-green-300/30 from-green-600/30 hover:text-white active:from-green-600/75 dark:active:from-green-300/75 dark:text-green-300 text-green-600`
            : "dark:bg-green-300 bg-green-600 text-white hover:bg-green-600/30 dark:hover:bg-green-300/30"
      }`,
      info: `dark:border-blue-300 border-blue-600 ${
        outlined
          ? "text-blue-600 dark:text-blue-300 dark:active:bg-blue-300/75 active:bg-blue-600/75 active:text-white hover:text-white dark:hover:bg-blue-300/30 hover:bg-blue-600/30"
          : isBordered(border)
            ? `${borderStyle[border]} dark:from-blue-300/30 from-blue-600/30 hover:text-white active:from-blue-600/75 dark:active:from-blue-300/75 dark:text-blue-300 text-blue-600`
            : "dark:bg-blue-300 bg-blue-600 text-white hover:bg-blue-600/30 dark:hover:bg-blue-300/30"
      }`,
      warning: ` dark:border-yellow-300 border-yellow-600 ${
        outlined
          ? "text-yellow-600 dark:text-yellow-300 dark:active:bg-yellow-300/75 active:bg-yellow-600/75 active:text-white hover:text-white dark:hover:bg-yellow-300/30 hover:bg-yellow-600/30"
          : isBordered(border)
            ? `${borderStyle[border]} dark:from-yellow-300/30 from-yellow-600/30 hover:text-white active:from-yellow-600/75 dark:active:from-yellow-300/75 dark:text-yellow-300 text-yellow-600`
            : "dark:bg-yellow-300 bg-yellow-600 text-white hover:bg-yellow-600/30 dark:hover:bg-yellow-300/30"
      }`,
      purple: ` dark:border-purple-300 border-purple-600 ${
        outlined
          ? "text-purple-600 dark:text-purple-300 dark:active:bg-purple-300/75 active:bg-purple-600/75 active:text-white hover:text-white dark:hover:bg-purple-300/30 hover:bg-purple-600/30"
          : isBordered(border)
            ? `${borderStyle[border]} dark:from-purple-300/30 from-purple-600/30 hover:text-white active:from-purple-600/75 dark:active:from-purple-300/75 dark:text-purple-300 text-purple-400`
            : "dark:bg-purple-300 bg-purple-600 text-white hover:bg-purple-600/30 dark:hover:bg-purple-300/30"
      }`,
      gray: ` dark:border-gray-300 border-gray-600 ${
        outlined
          ? "text-gray-600 dark:text-gray-300 dark:active:bg-gray-300/75 active:bg-gray-600/75 active:text-white hover:text-white dark:hover:bg-gray-300/30 hover:bg-gray-600/30"
          : isBordered(border)
            ? `${borderStyle[border]} dark:from-gray-300/30 from-gray-600/30 hover:text-white active:from-gray-600/75 dark:active:from-gray-300/75 dark:text-gray-300 text-gray-400`
            : "dark:bg-gray-300 bg-gray-600 text-white hover:bg-gray-600/30 dark:hover:bg-gray-300/30"
      }`,
      transparent: `bg-transparent text-white hover:bg-white/40 ${
        outlined
          ? "text-white active:bg-white/75 active:text-white hover:bg-white/30"
          : ""
      }`,
    };
    const colorsKey = Object.keys(colors);
    type Colors = (typeof colorsKey)[number];
    const isColor = (x: any): x is Colors => colorsKey.includes(x);
    const roundedSize = {
      none: "",
      full: "rounded-xl",
      top: "rounded-t-xl",
      bottom: "rounded-b-xl",
      left: "rounded-l-xl",
      right: "rounded-r-xl",
    };
    const classes = `
${props.icon ? " px-5 " : " px-5 "}
${
  outlined
    ? `${
        props.xSmall
          ? " border-[2px] "
          : props.small
            ? " border-2 "
            : " border-[3px] "
      } `
    : ""
}
${props.xSmall ? " h-5 text-xs " : props.small ? " h-7 text-sm " : " h-10 "} 
${!isColor(props.color) ? props.color : colors[props.color]}
${props.width} 
${roundedSize[props.rounded]} 
font-semibold hover:bg-opacity-90 active:bg-opacity-75 transition hover:transition-colors duration-400
    `.replace(/\s+/g, " ");
    return {
      colors,
      isColor,
      classes,
      roundedSize,
    };
  },
  props: {
    type: {
      type: String as PropType<types>,
      default: "button",
    },
    to: {
      type: String,
      default: "/",
    },
    target: {
      type: String as PropType<targets>,
      default: "_self",
    },
    width: {
      type: String,
      default: "w-fit",
    },
    color: {
      type: String as PropType<colorType>,
      default: "info",
    },
    rounded: {
      type: String as PropType<roundedType>,
      default: "none",
    },
    xSmall: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    border: {
      type: String as PropType<borderType>,
      default: "none",
    },
    icon: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
