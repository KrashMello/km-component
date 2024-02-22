```html
<div
  :id="id"
  tabindex="-1"
  :data-modal="id"
  :data-modal-hide="id"
  :class="`hidden opacity-0 transition-opacity backdrop-blur-sm bg-slate-800/50 duration-300 overflow-y-auto overflow-x-hidden fixed ${positions[position]} w-full inset-1 h-full max-h-full`"
>
  <div
    :data-modal-content="id"
    :class="`${typesModal[type]} z-[61] opacity-0 -translate-y-full scale-150 transform transition-transform`"
  >
    <div class="relative bg-white rounded-[1rem] shadow">
      <!-- Modal header -->
      <div
        class="flex bg-slate-800 items-center rounded-t-xl justify-between p-4 md:p-5 border-b dark:border-gray-600"
      >
        <div class="px-4 sm:px-0">
          <h3 class="text-base font-semibold leading-7 text-white">
            {{ title }}
          </h3>
          <p
            v-if="subtitle"
            class="mt-1 max-w-2xl text-sm leading-6 text-gray-100"
          >
            {{ subtitle }}
          </p>
        </div>
        <button
          type="button"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          :data-modal-hide="id"
        >
          <svg-close class="w-8" />
        </button>
      </div>
      <!-- Modal body -->
      <div class="p-4 md:p-6 text-black">
        <slot />
      </div>
      <!-- Modal footer -->
      <slot v-if="!!$slots.footer" name="footer" />
      <div
        v-else
        class="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
      >
        <km-btn type="button" rounded="full" :data-modal-hide="id">
          Cerrar
        </km-btn>
      </div>
    </div>
  </div>
</div>
```
