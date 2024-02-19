<template>
  <header
    :class="`w-full flex items-center px-10 justify-between 
${roundedSize[rounded]} 
${fixed ? 'fixed z-40' : ''} 
${blur ? 'backdrop-blur bg-opacity-50' : ''} 
${heightSize[height]} 
${!isColor(color) ? color : colors[color]}
 `"
  >
    <slot />
  </header>
</template>

<script lang="ts">
type heightSizeType = "xs" | "sm" | "lg" | "xl";
type roundedType = "full" | "top" | "bottom" | "left" | "right" | "none";
type colorType = "danger" | "warning" | "info" | "success" | "blue" | "gray";

export default {
  setup() {
    const colors = {
      red: "bg-red-400 border-red-500",
      danger: "bg-red-400 border-red-500",
      success: "bg-green-400 border-green-500",
      info: "bg-blue-400  border-blue-500",
      blue: "bg-blue-600 border-blue-400",
      warning: "bg-yellow-400 border-yellow-500",
      gray: "bg-gray-400 border-gray-500",
      transparent: "bg-transparent hover:bg-cyan-500",
    };
    const colorsKey = Object.keys(colors);
    type Colors = (typeof colorsKey)[number];
    const isColor = (x: any): x is Colors => colorsKey.includes(x);
    return {
      colors,
      isColor,
    };
  },
  props: {
    height: {
      type: String as PropType<heightSizeType>,
      default: "lg",
    },
    color: {
      type: String as PropType<colorType>,
      default: "info",
    },
    blur: {
      type: Boolean,
      default: false,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: String as PropType<roundedType>,
      default: "none",
    },
  },
  data() {
    return {
      heightSize: {
        xs: "h-7",
        sm: "h-10",
        lg: "h-16",
        xl: "h-20",
      },
      roundedSize: {
        none: "",
        full: "rounded-xl",
        top: "rounded-t-xl",
        bottom: "rounded-b-full",
        left: "rounded-l-xl",
        right: "rounded-r-xl",
      },
    };
  },
};
</script>
