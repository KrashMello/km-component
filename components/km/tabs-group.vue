<template>
  <div class="pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul
      class="flex flex-wrap -mb-px text-sm font-medium text-center"
      :data-tabs="id"
    >
      <li v-for="(item, i) in tabs" :key="i" class="me-2">
        <button
          class="inline-block p-4 border-b-2 rounded-t-lg"
          :id="`${id}-tab-${i}`"
          :data-tabs-target="item.target"
          type="button"
          aria-selected="false"
        >
          {{ item.name }}
        </button>
      </li>
    </ul>
  </div>
  <div :data-tabs-content="`${id}`">
    <slot />
  </div>
</template>

<script lang="ts">
type tabsType = {
  name: string;
  target: string;
}[];
export default {
  setup() {
    return {};
  },
  props: {
    tabs: {
      type: Array as PropType<tabsType>,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
};
</script>
