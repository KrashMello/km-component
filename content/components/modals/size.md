```html
<template>
  <km-btn type="button" rounded="full" @click="extraSmall = true">
    extra small
  </km-btn>
  <km-modal
    v-model="extraSmall"
    title="modal extra small"
    size="x-small"
    subtitle=""
  >
    extra small
  </km-modal>
  <km-btn type="button" rounded="full" @click="small = true"> small </km-btn>
  <km-modal v-model="small" title="modal small" size="small" subtitle="">
    small
  </km-modal>
  <km-btn type="button" rounded="full" @click="large = true"> large </km-btn>
  <km-modal v-model="large" title="modal large" size="large" subtitle="">
    large
  </km-modal>
  <km-btn type="button" rounded="full" @click="extraLarge = true">
    extra lager
  </km-btn>
  <km-modal
    v-model="extraLarge"
    title="modal extra large"
    size="x-large"
    subtitle=""
  >
    extra large
  </km-modal>
</template>
<script setup>
  const extraSmall = defineModel("extraSmall", false);
  const small = defineModel("small", false);
  const large = defineModel("large", false);
  const extraLarge = defineModel("extraLarge", false);
</script>
```
