<template>
  <div
    class="hidden max-h-96 overflow-x-auto opacity-0 transition-opacity ease-in-out transform duration-300 p-4 rounded-lg bg-slate-400 dark:bg-slate-600"
    :id="props.id"
  >
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});
</script>
