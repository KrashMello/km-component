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
transition hover:transition-colors hover:scale-110 duration-200 ease-in
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
type colorType = "danger" | "warning" | "info" | "success" | "blue" | "gray";
type borderType = "top" | "up" | "left" | "right" | "none";
export default {
  setup(props) {
    const { outlined } = props;
    const colors = {
      red: `border-red-500 ${
        outlined
          ? "text-red-400 active:bg-red-500/75 active:text-white hover:text-white hover:bg-red-500/30"
          : "bg-red-400"
      }`,
      danger: ` border-red-500 ${
        outlined
          ? "text-red-400 active:bg-red-500/75 active:text-white hover:text-white hover:bg-red-500/30"
          : "bg-red-400"
      }`,
      success: ` border-green-500 ${
        outlined
          ? "text-green-400 active:bg-green-500/75 active:text-white hover:text-white hover:bg-green-500/30"
          : "bg-green-400"
      }`,
      info: `border-blue-500 ${
        outlined
          ? "text-blue-400 active:bg-blue-500/75 active:text-white hover:text-white hover:bg-blue-500/30"
          : "bg-blue-400"
      }`,
      blue: `border-blue-400 ${
        outlined
          ? "text-blue-600 active:bg-blue-400/75 active:text-white hover:text-white hover:bg-blue-400/30"
          : "bg-blue-600"
      }`,
      warning: `border-yellow-500 ${
        outlined
          ? "text-yellow-400 active:bg-yellow-500/75 active:text-white hover:text-white hover:bg-yellow-400/30"
          : "bg-yellow-400"
      }`,
      gray: `border-gray-500 ${
        outlined
          ? "text-gray-400 active:bg-gray-500/75 active:text-white hover:text-white hover:bg-gray-400/30"
          : "bg-gray-400 "
      }`,
      transparent: `bg-transparent text-white hover:bg-white/40 ${
        outlined ? "text-white active:bg-white/75 active:text-white" : ""
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
