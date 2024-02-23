````javascript
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
      });```
````
