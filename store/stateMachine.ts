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
        document.querySelectorAll("*[data-modal-content]").forEach((v) => {
          if (v.dataset.modalContent === $id) $content = v;
        });
        document.querySelectorAll("*[data-modal-toggle]").forEach((v) => {
          if (v.dataset.modalToggle === $id)
            v.addEventListener("click", () => {
              $modal?.classList.remove("hidden");
              $modal?.classList.add("flex");
              setTimeout(() => {
                $modal.classList.remove("opacity-0");
                $content.classList.remove("opacity-0");
                $content.classList.remove("-translate-y-full");
                $content.classList.remove("scale-150");
              }, 100);
            });
        });
        document.querySelectorAll("*[data-modal-hide]").forEach((v) => {
          if (v.dataset.modalHide === $id)
            v.addEventListener("click", () => {
              $content.classList.add("-translate-y-full");
              setTimeout(() => {
                $modal?.classList.remove("flex");
                $modal?.classList.add("hidden");
                $content.classList.add("opacity-0");
                $content.classList.add("scale-150");
              }, 100);
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
