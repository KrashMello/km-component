<template>
  <layouts-sections-components>
    <div class="flex flex-col gap-4">
      <h2 class="text-center text-6xl font-bold">Modales</h2>
      <km-tabs-group :tabs="tabsLists" id="modals">
        <km-tabs-content id="profile">
          <!-- <ContentRendererMarkdown -->
          <!--   class="text-xs" -->
          <!--   :value="markdown.value.component" -->
          <!-- /> -->
        </km-tabs-content>
        <km-tabs-content id="script">
          <!-- <ContentRendererMarkdown class="text-xs" :value="markdown.value.script" /> -->
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
          data-modal-target="modal-center-center"
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
    </div>
  </layouts-sections-components>
</template>

<script>
export default {
  async setup() {
    const { data: markdown } = await useAsyncData("component-modal", () => {
      return {
        componente: queryContent("/components/modals/component").findOne(),
        script: queryContent("/components/modals/script").findOne(),
      };
    });
    console.log(markdown);
    return {
      markdown,
    };
  },
  data() {
    return {
      idModal: "modal-1",
      tabsLists: [
        {
          name: "componente",
          target: "profile",
        },
        {
          name: "script",
          target: "script",
        },
      ],
    };
  },

  methods: {
    initTabs() {
      document.querySelectorAll("*[data-tabs]").forEach((v) => {
        let $targetActive = null;
        let $activeButton = null;
        v.childNodes.forEach((child) => {
          child.childNodes.forEach((button) => {
            const targetID = button.dataset.tabsTarget;
            const $target = document.getElementById(targetID);
            if ($target)
              button.addEventListener("click", () => {
                button.classList.add("text-red-500");
                button.classList.add("border-b-red-500");
                if ($targetActive) {
                  $activeButton.classList.remove("text-red-500");
                  $activeButton.classList.remove("border-b-red-500");
                  $activeButton = button;
                  $targetActive.classList.add("opacity-0");
                  setTimeout(() => {
                    $targetActive.classList.add("hidden");
                    $target.classList.remove("opacity-0");
                    $target.classList.remove("hidden");
                    $targetActive = $target;
                  }, 300);
                } else {
                  $target.classList.remove("opacity-0");
                  $target.classList.remove("hidden");
                  $activeButton = button;
                  setTimeout(() => {
                    $targetActive = $target;
                  }, 300);
                }
              });
          });
        });
      });
    },
  },
  mounted() {
    stateMachineStore().initModal();
    this.initTabs();
  },
};
</script>

<style></style>
