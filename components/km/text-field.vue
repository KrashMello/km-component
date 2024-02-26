<template>
  <div class="relative">
    <vField
      :type="type"
      id="first_name"
      :name="name"
      class="bg-transparent placeholder:text-transparent peer group-focus-within:placeholder:text-slate-400 border border-gray-300 text-slate-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 peer dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      :placeholder="placeholder"
    />
    <label
      for="first_name"
      class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >First name</label
    >
    <v-error-message :name="name" class="text-red-500" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
type typeTypes = "text" | "file" | "number" | "password";
export default defineComponent({
  setup() {
    let a = 1;
    a = 2;
    return {
      a,
    };
  },
  props: {
    type: {
      type: String as PropType<typeTypes>,
      default: "text",
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
});
</script>
