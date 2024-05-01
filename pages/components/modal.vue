<template>
  <layouts-sections-components>
    <div class="flex flex-col gap-4">
      <h2 class="text-center text-6xl font-bold">Modals</h2>
      <km-tabs-group :tabs="tabsLists" id="modals">
        <km-tabs-content id="components">
          <ContentRendererMarkdown class="text-xs" :value="MDcomponents" />
        </km-tabs-content>
      </km-tabs-group>

      <h3 class="text-3xl font-semibold">Posicion</h3>
      <km-tabs-group :tabs="positionTabsList" id="modalsPosition">
        <km-tabs-content id="example">
          <div class="relative min-h-[350px] flex flex-wrap gap-3">
            <km-btn type="button" rounded="full" @click="topLeft = true">
              top left
            </km-btn>
            <km-modal
              v-model="topLeft"
              position="top-left"
              title="modal 1"
              subtitle=""
            >
              top left
            </km-modal>
            <km-btn type="button" rounded="full" @click="topRight = true">
              top right
            </km-btn>
            <km-modal
              v-model="topRight"
              position="top-right"
              title="modal 1"
              subtitle=""
            >
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
            <km-btn
              type="button"
              rounded="full"
              @click="positionDefault = true"
            >
              position default
            </km-btn>
            <km-modal
              v-model="positionDefault"
              title="modal center center"
              subtitle=""
            >
              center center
            </km-modal>
          </div>
        </km-tabs-content>
        <km-tabs-content id="vue">
          <ContentRendererMarkdown
            class="text-xs"
            :value="MDPositionComponents"
          />
        </km-tabs-content>
      </km-tabs-group>

      <div class="flex flex-wrap gap-3"></div>
      <h3 class="text-3xl font-semibold">Sizes</h3>
      <km-tabs-group :tabs="sizeTabsList" id="size-modals">
        <km-tabs-content id="size-example">
          <div class="relative min-h-[350px] flex flex-wrap gap-3">
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
            <km-btn type="button" rounded="full" @click="small = true">
              small
            </km-btn>
            <km-modal
              v-model="small"
              title="modal small"
              size="small"
              subtitle=""
            >
              small
            </km-modal>
            <km-btn type="button" rounded="full" @click="large = true">
              large
            </km-btn>
            <km-modal
              v-model="large"
              title="modal large"
              size="large"
              subtitle=""
            >
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
          </div>
        </km-tabs-content>
        <km-tabs-content id="size-vue">
          <ContentRendererMarkdown class="text-xs" :value="MDSizeComponents" />
        </km-tabs-content>
      </km-tabs-group>
      <h3 class="text-3xl font-semibold">Flat</h3>
      <km-tabs-group :tabs="flatTabsList" id="flat-modals">
        <km-tabs-content id="flat-example">
          <div class="relative min-h-[350px] flex flex-wrap gap-3">
            <km-btn type="button" rounded="full" @click="flat = true">
              flat
            </km-btn>
            <km-modal v-model="flat" title="modal flat" flat subtitle="">
              flat
            </km-modal>
          </div>
        </km-tabs-content>

        <km-tabs-content id="flat-vue">
          <ContentRendererMarkdown class="text-xs" :value="MDFlatComponents" />
        </km-tabs-content>
      </km-tabs-group>
    </div>
  </layouts-sections-components>
</template>

<script setup>
const { data: MDcomponents } = await useAsyncData("component-modal", () =>
  queryContent("/components/modals/component").findOne(),
);
const { data: MDPositionComponents } = await useAsyncData(
  "position-modal",
  () => queryContent("/components/modals/position").findOne(),
);
const { data: MDSizeComponents } = await useAsyncData("size-modal", () =>
  queryContent("/components/modals/size").findOne(),
);
const { data: MDFlatComponents } = await useAsyncData("flat-modal", () =>
  queryContent("/components/modals/flat").findOne(),
);
const defaultModal = defineModel("defaultModal", false);
const topLeft = defineModel("topLeft", false);
const topRight = defineModel("topRight", false);
const topCenter = defineModel("topCenter", false);
const bottomRight = defineModel("bottomRight", false);
const bottomLeft = defineModel("bottomLeft", false);
const bottomCenter = defineModel("bottomCenter", false);
const centerRight = defineModel("centerRight", false);
const centerLeft = defineModel("centerLeft", false);
const positionDefault = defineModel("positionDefault", false);
const extraSmall = defineModel("extraSmall", false);
const small = defineModel("small", false);
const large = defineModel("large", false);
const extraLarge = defineModel("extraLarge", false);
const flat = defineModel("flat", false);

const idModal = "modal-1";

const positionTabsList = [
  {
    name: "example",
    target: "example",
  },
  {
    name: "vue",
    target: "vue",
  },
];
const flatTabsList = [
  {
    name: "example",
    target: "flat-example",
  },
  {
    name: "vue",
    target: "flat-vue",
  },
];
const sizeTabsList = [
  {
    name: "example",
    target: "size-example",
  },
  {
    name: "vue",
    target: "size-vue",
  },
];
const tabsLists = [
  {
    name: "componente",
    target: "components",
  },
];

onMounted(() => {
  stateMachineStore().initTabs();
});
</script>
