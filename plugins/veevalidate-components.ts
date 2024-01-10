import { Form, Field, ErrorMessage } from "vee-validate";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("vForm", Form);
  nuxtApp.vueApp.component("vField", Field);
  nuxtApp.vueApp.component("vErrorMessage", ErrorMessage);
});
