<template>
  <layouts-sections-components>
    <div class="flex flex-col gap-4">
      <h2 class="text-center text-6xl font-bold">inputs</h2>
      <div class="flex flex-wrap gap-3">
        <km-text-field name="h" placeholder="un input" />
      </div>
    </div>
  </layouts-sections-components>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
