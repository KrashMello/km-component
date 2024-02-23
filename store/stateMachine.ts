import { defineStore } from "pinia";

export const stateMachineStore = defineStore("stateMachine", {
  state: () => {
    return {
      tempToastMessages: [],
      toastMessages: [],
      toastTimeOut: 10000,
    };
  },
  getters: {
    getToastMessages: (state) => state.toastMessages,
    getTempToastMessages: (state) => state.tempToastMessages,
  },
  actions: {
    initModal() {
      document.querySelectorAll("*[data-modal]").forEach((v) => {
        const $id = v.getAttribute("id");
        const $modal = v;
        let $content: any;
        let $backdrop: any;
        document
          .querySelectorAll("*[data-modal-backdrop]")
          .forEach((backdrop) => {
            if (backdrop.dataset.modalBackdrop === $id) $backdrop = backdrop;
          });
        document.querySelectorAll("*[data-modal-content]").forEach((v) => {
          if (v.dataset.modalContent === $id) $content = v;
        });
        document.querySelectorAll("*[data-modal-toggle]").forEach((v) => {
          if (v.dataset.modalToggle === $id)
            v.addEventListener("click", () => {
              $modal?.classList.remove("hidden");
              $modal?.classList.add("flex");
              $backdrop.classList.remove("opacity-0");
              setTimeout(() => {
                $content.classList.remove("opacity-0");
                $content.classList.remove("scale-150");
              }, 100);
            });
        });
        document.querySelectorAll("*[data-modal-hide]").forEach((v) => {
          if (v.dataset.modalHide === $id)
            v.addEventListener("click", () => {
              $content.classList.add("scale-50");
              setTimeout(() => {
                $modal?.classList.remove("flex");
                $modal?.classList.add("hidden");
                $content.classList.add("opacity-0");
                $backdrop.classList.add("opacity-0");
                $content.classList.remove("scale-50");
                $content.classList.add("scale-150");
              }, 100);
            });
        });
      });
    },
    initTabs() {
      document.querySelectorAll("*[data-tabs]").forEach((tab) => {
        let $targetActive: any = null;
        let $activeButton: any = null;
        tab.childNodes.forEach((child, index) => {
          child.childNodes.forEach((button) => {
            const targetID = button.dataset.tabsTarget;
            const $target = document.getElementById(targetID);
            if ($target) {
              if (index === 1) {
                $target.classList.remove("opacity-0");
                $target.classList.remove("hidden");
                button.classList.add("text-red-500");
                button.classList.add("border-b-red-500");
                $targetActive = $target;
                $activeButton = button;
              }
              button.addEventListener("click", () => {
                button.classList.add("text-red-500");
                button.classList.add("border-b-red-500");
                if ($targetActive && $target !== $targetActive) {
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
            }
          });
        });
      });
    },
    pushTempToastMessage(toast: {
      id?: string | undefined;
      type: string;
      message: string;
    }) {
      let id = crypto.randomUUID();
      toast.id = id;
      this.tempToastMessages.push(toast);
      setTimeout(() => {
        this.toastMessages.push(toast);
        this.tempToastMessages = this.tempToastMessages.filter(
          (v) => id !== toast.id,
        );
      }, this.toastTimeOut);
    },
  },
});
