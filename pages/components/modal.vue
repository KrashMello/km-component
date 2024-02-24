<template>
  <layouts-sections-components>
    <div class="flex flex-col gap-4">
      <h2 class="text-center text-6xl font-bold">Modales</h2>
      <km-tabs-group :tabs="tabsLists" id="modals">
        <km-tabs-content id="components">
          <ContentRendererMarkdown class="text-xs" :value="MDcomponents" />
        </km-tabs-content>
        <km-tabs-content id="script">
          <ContentRendererMarkdown class="text-xs" :value="MDscript" />
        </km-tabs-content>
      </km-tabs-group>
      <h3 class="text-3xl font-semibold">Normal</h3>
      <div class="flex flex-wrap gap-3">
        <km-btn
          :data-modal-target="idModal"
          :data-modal-toggle="idModal"
          type="button"
          rounded="full"
        >
          default
        </km-btn>
        <km-modal :id="idModal" title="modal default" subtitle="">
          default
        </km-modal>
      </div>
      <h3 class="text-3xl font-semibold">Posicion</h3>
      <div class="flex flex-wrap gap-3">
        <km-btn
          data-modal-target="modal-top-left"
          data-modal-toggle="modal-top-left"
          type="button"
          rounded="full"
        >
          top left
        </km-btn>
        <km-modal
          id="modal-top-left"
          position="top-left"
          title="modal 1"
          subtitle=""
        >
          top left
        </km-modal>
        <km-btn
          data-modal-target="modal-top-right"
          data-modal-toggle="modal-top-right"
          type="button"
          rounded="full"
        >
          top right
        </km-btn>
        <km-modal
          id="modal-top-right"
          position="top-right"
          title="modal 1"
          subtitle=""
        >
          top right
        </km-modal>
        <km-btn
          data-modal-target="modal-top-center"
          data-modal-toggle="modal-top-center"
          type="button"
          rounded="full"
        >
          top center
        </km-btn>
        <km-modal
          id="modal-top-center"
          position="top-center"
          title="modal 1"
          subtitle=""
        >
          top center
        </km-modal>
        <km-btn
          data-modal-target="modal-bottom-right"
          data-modal-toggle="modal-bottom-right"
          type="button"
          rounded="full"
        >
          bottom right
        </km-btn>
        <km-modal
          id="modal-bottom-right"
          position="bottom-right"
          title="modal 1"
          subtitle=""
        >
          bottom right
        </km-modal>
        <km-btn
          data-modal-target="modal-bottom-left"
          data-modal-toggle="modal-bottom-left"
          type="button"
          rounded="full"
        >
          bottom left
        </km-btn>
        <km-modal
          id="modal-bottom-left"
          position="bottom-left"
          title="modal bottom left"
          subtitle=""
        >
          bottom left
        </km-modal>
        <km-btn
          data-modal-target="modal-bottom-center"
          data-modal-toggle="modal-bottom-center"
          type="button"
          rounded="full"
        >
          bottom center
        </km-btn>
        <km-modal
          id="modal-bottom-center"
          position="bottom-center"
          title="modal bottom center"
          subtitle=""
        >
          bottom center
        </km-modal>
        <km-btn
          data-modal-target="modal-center-right"
          data-modal-toggle="modal-center-right"
          type="button"
          rounded="full"
        >
          center right
        </km-btn>
        <km-modal
          id="modal-center-right"
          position="center-right"
          title="modal center right"
          subtitle=""
        >
          center right
        </km-modal>
        <km-btn
          data-modal-target="modal-center-left"
          data-modal-toggle="modal-center-left"
          type="button"
          rounded="full"
        >
          center left
        </km-btn>
        <km-modal
          id="modal-center-left"
          position="center-left"
          title="modal center left"
          subtitle=""
        >
          center left
        </km-modal>
        <km-btn
          data-modal-target="modal-center-henter"
          data-modal-toggle="modal-center-center"
          type="button"
          rounded="full"
        >
          position default
        </km-btn>
        <km-modal
          id="modal-center-center"
          title="modal center center"
          subtitle=""
        >
          center center
        </km-modal>
      </div>
      <h3 class="text-3xl font-semibold">tamaño</h3>
      <div class="flex flex-wrap gap-3">
        <km-btn
          data-modal-target="modal-x-small"
          data-modal-toggle="modal-x-small"
          type="button"
          rounded="full"
        >
          extra small
        </km-btn>
        <km-modal
          id="modal-x-small"
          title="modal extra small"
          size="x-small"
          subtitle=""
        >
          extra small
        </km-modal>
        <km-btn
          data-modal-target="modal-small"
          data-modal-toggle="modal-small"
          type="button"
          rounded="full"
        >
          small
        </km-btn>
        <km-modal id="modal-small" title="modal small" size="small" subtitle="">
          small
        </km-modal>
        <km-btn
          data-modal-target="modal-large"
          data-modal-toggle="modal-large"
          type="button"
          rounded="full"
        >
          large
        </km-btn>
        <km-modal id="modal-large" title="modal large" size="large" subtitle="">
          large
        </km-modal>
        <km-btn
          data-modal-target="modal-x-large"
          data-modal-toggle="modal-x-large"
          type="button"
          rounded="full"
        >
          extra lager
        </km-btn>
        <km-modal
          id="modal-x-large"
          title="modal extra large"
          size="x-large"
          subtitle=""
        >
          extra large
        </km-modal>
      </div>
      <h3 class="text-3xl font-semibold">flat</h3>
      <div class="flex flex-wrap gap-3">
        <km-btn
          data-modal-target="modal-flat"
          data-modal-toggle="modal-flat"
          type="button"
          rounded="full"
        >
          flat
        </km-btn>
        <km-modal id="modal-flat" title="modal flat" flat subtitle="">
          flat
        </km-modal>
      </div>
    </div>
  </layouts-sections-components>
</template>

<script setup>
const { data: MDcomponents } = await useAsyncData("component-modal", () =>
  queryContent("/components/modals/component").findOne(),
);
const { data: MDscript } = await useAsyncData("script-modal", () =>
  queryContent("/components/modals/script").findOne(),
);
const idModal = "modal-1";
const tabsLists = [
  {
    name: "componente",
    target: "components",
  },
  {
    name: "script",
    target: "script",
  },
];

onMounted(() => {
  stateMachineStore().initModal();
  stateMachineStore().initTabs();
});
</script>
