<template>
  <layouts-sections-components>
    <div class="flex flex-col gap-4">
      <h2 class="text-center text-6xl font-bold">Alertas</h2>
      <km-alert color="danger"> esta es una etiqueta de peligro :) </km-alert>
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

<style scoped></style>
