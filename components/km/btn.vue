<template>
  <NuxtLink
    v-if="type === 'link'"
    :to="to"
    :class="`
px-5
${
  outlined
    ? `${xSmall ? 'border-[2px]' : small ? 'border-2' : 'border-[3px]'} `
    : ''
}
${xSmall ? 'h-5 text-xs ' : small ? 'h-7 text-sm ' : 'h-10'} 
${!isColor(color) ? color : colors[color]}
${width} 
${roundedSize[rounded]}
font-semibold hover:bg-opacity-90 active:bg-opacity-75 transition hover:transition-colors duration-400 
    `"
  >
    <slot name="default" />
  </NuxtLink>
  <button
    v-if="type === 'button'"
    :data-modal-target="$attrs['data-modal-target']"
    :data-modal-toggle="$attrs['data-modal-toggle']"
    :class="`
px-5
${
  outlined
    ? `${xSmall ? 'border-[2px]' : small ? 'border-2' : 'border-[3px]'} `
    : ''
}
${xSmall ? 'h-5 text-xs' : small ? 'h-7 text-sm ' : 'h-10'} 
font-semibold hover:bg-opacity-90 active:bg-opacity-75
transition hover:transition-colors pos-0 hover:pos-100 hover:scale-110 duration-200 ease-in
${!isColor(color) ? color : colors[color]}
${width} 
${roundedSize[rounded]}
    `"
  >
    <slot name="default" />
  </button>
  <a
    v-if="type === 'anchor'"
    target=""
    :class="`
px-5
${
  outlined
    ? `${xSmall ? 'border-[2px]' : small ? 'border-2' : 'border-[3px]'} `
    : ''
}
${xSmall ? 'h-5 text-xs' : small ? 'h-7 text-sm ' : 'h-10'} 
font-semibold hover:bg-opacity-90 active:bg-opacity-75 transition hover:transition-colors duration-400 
${!isColor(color) ? color : colors[color]}
${width} 
${roundedSize[rounded]}
    `"
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
type borderType = "top" | "bottom" | "left" | "right" | "none";
export default {
  setup(props) {
    const { border, outlined } = props;
    const borderStyle = {
      top: "hover:border-t hover:border-t-2 hover:bg-gradient-to-b",
      bottom: "hover:border-b hover:border-b-2 hover:bg-gradient-to-t",
      left: "hover:border-l hover:border-l-2 hover:bg-gradient-to-r",
      right: "hover:border-r hover:border-r-2 hover:bg-gradient-to-l",
    };
    const borderKey = Object.keys(borderStyle);
    type Borders = (typeof borderKey)[number];
    const isBordered = (x: any): x is Borders => borderKey.includes(x);

    const colors = {
      red: `border-red-500 ${
        outlined
          ? "text-red-400 active:bg-red-500/75 active:text-white hover:text-white hover:bg-red-500/30"
          : isBordered(border)
            ? `${borderStyle[border]} from-red-400/30 hover:text-white active:from-red-400/75  text-red-400`
            : "bg-red-400"
      }`,
      danger: ` border-red-500 ${
        outlined
          ? "text-red-400 active:bg-red-500/75 active:text-white hover:text-white hover:bg-red-500/30"
          : isBordered(border)
            ? `${borderStyle[border]} from-red-400/30 hover:text-white active:from-red-400/75  text-red-400`
            : "bg-red-400"
      }`,
      success: ` border-green-500 ${
        outlined
          ? "text-green-400 active:bg-green-500/75 active:text-white hover:text-white hover:bg-green-500/30"
          : isBordered(border)
            ? `${borderStyle[border]} from-green-400/30 hover:text-white active:from-green-400/75  text-green-400`
            : "bg-green-400"
      }`,
      info: `border-blue-500 ${
        outlined
          ? "text-blue-400 active:bg-blue-500/75 active:text-white hover:text-white hover:bg-blue-500/30"
          : isBordered(border)
            ? `${borderStyle[border]} from-blue-400/30 hover:text-white active:from-blue-400/75 text-blue-400`
            : "bg-blue-400"
      }`,
      blue: `border-blue-400 ${
        outlined
          ? "text-blue-600 active:bg-blue-400/75 active:text-white hover:text-white hover:bg-blue-400/30"
          : isBordered(border)
            ? `${borderStyle[border]} from-blue-400/30 hover:text-white active:from-blue-400/75 text-blue-400`
            : "bg-blue-600"
      }`,
      purple: `border-purple-400 ${
        outlined
          ? "text-purple-600 active:bg-purple-400/75 active:text-white hover:text-white hover:bg-purple-400/30"
          : isBordered(border)
            ? `${borderStyle[border]}  from-indigo-500 hover:text-white active:from-purple-400/75 text-purple-400`
            : "bg-purple-600"
      }`,
      warning: `border-yellow-500 ${
        outlined
          ? "text-yellow-400 active:bg-yellow-500/75 active:text-white hover:text-white hover:bg-yellow-400/30"
          : isBordered(border)
            ? `${borderStyle[border]} from-yellow-400/30 hover:text-white active:from-yellow-400/75 text-yellow-400`
            : "bg-yellow-400"
      }`,
      gray: `border-gray-500 ${
        outlined
          ? "text-gray-400 active:bg-gray-500/75 bg-gray-400 active:text-white active:bg-gray-400/75 hover:text-white hover:bg-gray-400/30"
          : isBordered(border)
            ? `${borderStyle[border]} from-gray-400/30 hover:text-white active:from-gray-400/75 text-gray-400`
            : "bg-gray-400"
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
    return {
      colors,
      isColor,
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
      default: "/",
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
  },
  data() {
    return {
      roundedSize: {
        none: "",
        full: "rounded-xl",
        top: "rounded-t-xl",
        bottom: "rounded-b-xl",
        left: "rounded-l-xl",
        right: "rounded-r-xl",
      },
    };
  },
};
</script>
