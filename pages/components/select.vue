<template>
  <layouts-sections-components>
    <div class="flex flex-col gap-4">
      <h2 class="text-center text-6xl font-bold">selects</h2>
      <km-tabs-group :tabs="tabsLists" id="selects">
        <km-tabs-content id="component">
          <ContentRendererMarkdown class="text-xs" :value="MDcomponents" />
        </km-tabs-content>
        <km-tabs-content id="script">
          <ContentRendererMarkdown class="text-xs" :value="MDscript" />
        </km-tabs-content>
      </km-tabs-group>

      <h3 class="text-3xl font-semibold">test</h3>
      <div class="flex flex-wrap gap-3">
        <km-select
          v-model="test"
          :list="list"
          list-label="name"
          list-value="mal_id"
          title="tt"
          id="asdf"
          @find="find"
        ></km-select>
      </div>
    </div>
  </layouts-sections-components>
</template>

<script setup>
const test = "";
const { data: MDcomponents } = await useAsyncData("component-select", () =>
  queryContent("/components/select/component").findOne(),
);
const { data: MDscript } = await useAsyncData("script-select", () =>
  queryContent("/components/select/script").findOne(),
);
const { data: character } = await useAsyncData("character-data", () =>
  $fetch(`https://api.jikan.moe/v4/characters?q=&limit=5&offset=0`),
);
let timer = null;
const list = computed(() => {
  return character.value.data;
});
const find = async (target) => {
  if (timer) clearTimeout(timer);
  timer = setTimeout(async () => {
    await useAsyncData("character-data", () =>
      $fetch(
        `https://api.jikan.moe/v4/characters?q=${target}&limit=5&offset=0`,
      ),
    );
  }, 300);
};
const tabsLists = [
  {
    name: "componente",
    target: "component",
  },
  {
    name: "script",
    target: "script",
  },
];
onMounted(async () => {
  stateMachineStore().initTabs();
});
onUpdated(() => {
  stateMachineStore().initTabs();
});
</script>
