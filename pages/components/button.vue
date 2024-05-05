<template>
  <div class="flex flex-col gap-4">
    <h2 class="text-center text-6xl font-bold">Buttons</h2>
    <km-tabs-group :tabs="componentTabsLists" id="component-buttons">
      <km-tabs-content id="components">
        <ContentRendererMarkdown class="text-xs" :value="MDComponents" />
      </km-tabs-content>
    </km-tabs-group>
    <h3 class="text-3xl font-semibold">Flats</h3>
    <km-tabs-group :tabs="flatTabsLists" id="flats-buttons">
      <km-tabs-content id="flat-example">
        <div class="flex flex-wrap gap-3">
          <km-btn>color info</km-btn>
          <km-btn color="danger">color danger</km-btn>
          <km-btn color="success">color success</km-btn>
          <km-btn color="warning">color warning</km-btn>
          <km-btn color="gray">color gray</km-btn>
          <km-btn color="purple">color purple</km-btn>
          <km-btn color="transparent">transparent</km-btn>
        </div>
      </km-tabs-content>
      <km-tabs-content id="flat-vue">
        <ContentRendererMarkdown class="text-xs" :value="MDFlatComponents" />
      </km-tabs-content>
    </km-tabs-group>

    <h3 class="text-3xl font-semibold">Rounded</h3>
    <km-tabs-group :tabs="roundedTabsLists" id="rounded-buttons">
      <km-tabs-content id="rounded-example">
        <div class="flex flex-wrap gap-3">
          <km-btn rounded="full">color danger</km-btn>
          <km-btn rounded="bottom">color success</km-btn>
          <km-btn rounded="top">color warning</km-btn>
          <km-btn rounded="left">color gray</km-btn>
          <km-btn rounded="right">transparent</km-btn>
        </div>
      </km-tabs-content>
      <km-tabs-content id="rounded-vue">
        <ContentRendererMarkdown class="text-xs" :value="MDRoundedComponents" />
      </km-tabs-content>
    </km-tabs-group>
    <h3 class="text-3xl font-semibold">Outlined</h3>
    <km-tabs-group :tabs="outlinedTabsLists" id="outlined-buttons">
      <km-tabs-content id="outlined-example">
        <div class="flex flex-wrap gap-3">
          <km-btn outlined>info</km-btn>
          <km-btn outlined color="danger">danger</km-btn>
          <km-btn outlined color="success">success</km-btn>
          <km-btn outlined color="warning">warning</km-btn>
          <km-btn outlined color="transparent">transparent</km-btn>
        </div>
      </km-tabs-content>
      <km-tabs-content id="outlined-vue">
        <ContentRendererMarkdown
          class="text-xs"
          :value="MDOutlinedComponents"
        />
      </km-tabs-content>
    </km-tabs-group>

    <h3 class="text-3xl font-semibold">Sizes</h3>

    <km-tabs-group :tabs="sizeTabsLists" id="size-buttons">
      <km-tabs-content id="size-example">
        <div class="flex flex-wrap gap-3">
          <km-btn x-small>extra small</km-btn>
          <km-btn small>small</km-btn>
          <km-btn>normal</km-btn>
        </div>
      </km-tabs-content>
      <km-tabs-content id="size-vue">
        <ContentRendererMarkdown class="text-xs" :value="MDSizeComponents" />
      </km-tabs-content>
    </km-tabs-group>
    <h3 class="text-3xl font-semibold">Bordes</h3>
    <km-tabs-group :tabs="borderTabsLists" id="border-buttons">
      <km-tabs-content id="border-example">
        <div class="flex flex-wrap gap-3">
          <km-btn border="top" color="warning">border top</km-btn>
          <km-btn border="left" color="danger">border left</km-btn>
          <km-btn border="right" color="success">border right</km-btn>
          <km-btn border="bottom" color="info">border bottom</km-btn>
          <km-btn border="bottom" color="slate">border bottom</km-btn>
        </div>
      </km-tabs-content>
      <km-tabs-content id="border-vue">
        <ContentRendererMarkdown class="text-xs" :value="MDBorderComponents" />
      </km-tabs-content>
    </km-tabs-group>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "docs",
});
const { data: MDComponents } = await useAsyncData("component-button", () =>
  queryContent("/components/button/component").findOne(),
);
const { data: MDRoundedComponents } = await useAsyncData("rounded-button", () =>
  queryContent("/components/button/rounded").findOne(),
);
const { data: MDFlatComponents } = await useAsyncData("flat-button", () =>
  queryContent("/components/button/flat").findOne(),
);
const { data: MDOutlinedComponents } = await useAsyncData(
  "outlined-button",
  () => queryContent("/components/button/outlined").findOne(),
);
const { data: MDSizeComponents } = await useAsyncData("size-button", () =>
  queryContent("/components/button/size").findOne(),
);
const { data: MDBorderComponents } = await useAsyncData("border-button", () =>
  queryContent("/components/button/border").findOne(),
);

const componentTabsLists = [
  {
    name: "components",
    target: "components",
  },
];

const flatTabsLists = [
  {
    name: "example",
    target: "flat-example",
  },
  {
    name: "vue",
    target: "flat-vue",
  },
];
const roundedTabsLists = [
  {
    name: "example",
    target: "rounded-example",
  },
  {
    name: "vue",
    target: "rounded-vue",
  },
];
const outlinedTabsLists = [
  {
    name: "example",
    target: "outlined-example",
  },
  {
    name: "vue",
    target: "outlined-vue",
  },
];
const sizeTabsLists = [
  {
    name: "example",
    target: "size-example",
  },
  {
    name: "vue",
    target: "size-vue",
  },
];
const borderTabsLists = [
  {
    name: "example",
    target: "border-example",
  },
  {
    name: "vue",
    target: "border-vue",
  },
];

onMounted(() => {
  stateMachineStore().initTabs();
});
</script>
