<template>
  <div :class="`flex flex-col gap-3 ${width}`">
    <label
      v-if="title"
      class="text-sm font-semibold text-slate-600 tracking-wide dark:text-white"
    >
      {{ title }}
    </label>
    <div class="relative group/select">
      <div
        :class="`group/input w-full z-[12] flex h-9 bg-gray-50 border px-2  items-center  border-slate-500 text-orange-500 text-sm rounded-lg focus:ring-slate-600 focus:border-slate-600`"
      >
        <input
          v-model="searchTitleName"
          placeholder="buscar..."
          readonly
          class="w-full cursor-pointer bg-transparent ring-0 outline-none"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-9 group-focus-within/input:rotate-180 duration-300"
          viewBox="0 0 24 24"
        >
          <path
            fill="#888888"
            d="M8.2 14q-.225 0-.362-.15T7.7 13.5q0-.05.15-.35l3.625-3.625q.125-.125.25-.175T12 9.3q.15 0 .275.05t.25.175l3.625 3.625q.075.075.113.163t.037.187q0 .2-.137.35T15.8 14z"
          />
        </svg>
      </div>
      <div
        data-select-body
        class="absolute duration-200 invisible group-focus-within/select:visible top-10 rounded-md z-[10] w-full overflow-y-auto h-fit bg-slate-600 text-gray-200"
      >
        <ul data-select-options class="p-2">
          <li>
            <input
              v-model="searchInputData"
              placeholder="buscar..."
              @input="
                () => {
                  emit('input', searchInputData);
                }
              "
              class="w-full bg-white text-slate-700 px-3 py-1 rounded-md bg-transparent ring-0 outline-none"
            />
          </li>
          <li
            v-for="(item, i) in list"
            :key="i"
            @click="
              () => {
                searchInputData = '';
                searchTitleName = item[props.listLabel];
                emit('update:modelValue', item[props.listValue]);
                emit('input', searchInputData);
              }
            "
            class="odd:bg-slate-700 hover:bg-slate-800 p-1 font-semibold cursor-pointer"
          >
            {{ item[props.listLabel] }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["update:modelValue", "input"]);
const searchInputData = defineModel("searchInputData", { default: "" });
const searchTitleName = ref("");
const props = defineProps({
  title: {
    type: String,
    required: false,
    default: "",
  },
  search: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
  },
  width: {
    type: String,
    default: "w-full",
  },
  modelValue: {
    type: String,
    required: true,
  },
  list: {
    type: Array,
    default: () => {
      return [];
    },
  },
  listLabel: {
    type: String,
    default: "name",
  },
  listValue: {
    type: String,
    default: "code",
  },
  selected: {
    type: String,
    default: "",
  },
});
onMounted(() => {
  emit("change", props.selected);
  searchTitleName.value = props.selected;
});
</script>
