```html
<template>
  <km-btn type="button" rounded="full" @click="flat = true"> flat </km-btn>
  <km-modal v-model="flat" title="modal flat" flat subtitle=""> flat </km-modal>
</template>
<script setup>
  const flat = defineModel("flat", false);
</script>
```
