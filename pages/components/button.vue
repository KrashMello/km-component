<template>
  <layouts-sections-components>
    <div class="flex flex-col gap-4">
      <h2 class="text-center text-6xl font-bold">Botones</h2>
      <h3 class="text-3xl font-semibold">normales</h3>
      <div class="flex flex-wrap gap-3">
        <km-btn>color info</km-btn>
        <km-btn color="danger">color danger</km-btn>
        <km-btn color="success">color success</km-btn>
        <km-btn color="warning">color warning</km-btn>
        <km-btn color="gray">color gray</km-btn>
        <km-btn color="transparent">transparent</km-btn>
      </div>
      <h3 class="text-3xl font-semibold">rounded</h3>
      <div class="flex flex-wrap gap-3">
        <km-btn rounded="full">color danger</km-btn>
        <km-btn rounded="bottom">color success</km-btn>
        <km-btn rounded="top">color warning</km-btn>
        <km-btn rounded="left">color gray</km-btn>
        <km-btn rounded="right">transparent</km-btn>
      </div>
      <h3 class="text-3xl font-semibold">outlined</h3>
      <div class="flex flex-wrap gap-3">
        <km-btn outlined>info</km-btn>
        <km-btn outlined color="danger">danger</km-btn>
        <km-btn outlined color="success">success</km-btn>
        <km-btn outlined color="warning">warning</km-btn>
        <km-btn outlined color="transparent">transparent</km-btn>
      </div>
      <h3 class="text-3xl font-semibold">tamaños</h3>
      <div class="flex flex-wrap gap-3">
        <km-btn x-small>extra small</km-btn>
        <km-btn small>small</km-btn>
        <km-btn>normal</km-btn>
      </div>
    </div>
  </layouts-sections-components>
</template>

<script>
export default {
  name: "button",
};
</script>

<style lang="scss" scoped></style>
