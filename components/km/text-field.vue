<template>
  <div>
    <label
      for="first_name"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >First name</label
    >
    <vField
      :type="type"
      id="first_name"
      :name="name"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      :placeholder="placeholder"
    />
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
