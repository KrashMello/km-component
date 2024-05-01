```html
<template>
  <km-btn type="button" rounded="full" @click="topLeft = true">
    top left
  </km-btn>
  <km-modal v-model="topLeft" position="top-left" title="modal 1" subtitle="">
    top left
  </km-modal>
  <km-btn type="button" rounded="full" @click="topRight = true">
    top right
  </km-btn>
  <km-modal v-model="topRight" position="top-right" title="modal 1" subtitle="">
    top right
  </km-modal>
  <km-btn type="button" rounded="full" @click="topCenter = true">
    top center
  </km-btn>
  <km-modal
    v-model="topCenter"
    position="top-center"
    title="modal 1"
    subtitle=""
  >
    top center
  </km-modal>
  <km-btn type="button" rounded="full" @click="bottomRight = true">
    bottom right
  </km-btn>
  <km-modal
    v-model="bottomRight"
    position="bottom-right"
    title="modal 1"
    subtitle=""
  >
    bottom right
  </km-modal>
  <km-btn type="button" rounded="full" @click="bottomLeft = true">
    bottom left
  </km-btn>
  <km-modal
    v-model="bottomLeft"
    position="bottom-left"
    title="modal bottom left"
    subtitle=""
  >
    bottom left
  </km-modal>
  <km-btn type="button" rounded="full" @click="bottomCenter = true">
    bottom center
  </km-btn>
  <km-modal
    v-model="bottomCenter"
    position="bottom-center"
    title="modal bottom center"
    subtitle=""
  >
    bottom center
  </km-modal>
  <km-btn type="button" rounded="full" @click="centerRight = true">
    center right
  </km-btn>
  <km-modal
    v-model="centerRight"
    position="center-right"
    title="modal center right"
    subtitle=""
  >
    center right
  </km-modal>
  <km-btn type="button" rounded="full" @click="centerLeft = true">
    center left
  </km-btn>
  <km-modal
    v-model="centerLeft"
    position="center-left"
    title="modal center left"
    subtitle=""
  >
    center left
  </km-modal>
  <km-btn type="button" rounded="full" @click="positionDefault = true">
    position default
  </km-btn>
  <km-modal v-model="positionDefault" title="modal center center" subtitle="">
    center center
  </km-modal>
</template>
<script setup>
  const topLeft = defineModel("topLeft", false);
  const topRight = defineModel("topRight", false);
  const topCenter = defineModel("topCenter", false);
  const bottomRight = defineModel("bottomRight", false);
  const bottomLeft = defineModel("bottomLeft", false);
  const bottomCenter = defineModel("bottomCenter", false);
  const centerRight = defineModel("centerRight", false);
  const centerLeft = defineModel("centerLeft", false);
  const positionDefault = defineModel("positionDefault", false);
</script>
```
