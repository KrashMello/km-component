<template>
  <div :class="`flex flex-col gap-3 ${width}`">
    <label
      v-if="title"
      :for="id"
      class="text-sm font-semibold text-slate-600 tracking-wide dark:text-white"
    >
      {{ title }}
    </label>
    <div class="relative">
      <input
        placeholder="buscar..."
        v-model="proxyValue"
        :id="id"
        :class="` ${
          $attrs.class
            ? $attrs.class
            : 'h-9 bg-gray-50 border px-2 flex items-center  border-slate-500 text-orange-500 text-sm rounded-lg focus:ring-slate-600 focus:border-slate-600'
        }`"
        class="w-full"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <input
        id="vtest"
        class="hidden"
        @input="
          () => {
            console.log($event.target.value);
          }
        "
      />
      <div
        data-select-body
        class="absolute top-9 w-full overflow-y-auto h-52 bg-red-500"
      >
        <ul data-select-options class="text-black">
          <li
            v-for="(item, i) in list"
            :key="i"
            @click="
              () => {
                console.log('le diste click al ' + item[props.value]);

                $vtest.value = item[props.value];
              }
            "
            class="cursor-pointer"
          >
            {{ item[props.label] }}
          </li>
        </ul>
      </div>
    </div>

    <!-- <vField -->
    <!--   :id="id" -->
    <!--   v-model="proxyValue" -->
    <!--   :name="name" -->
    <!--   as="select" -->
    <!--   @change="$emit('update:modelValue', $event.target.value)" -->
    <!--   :class="`${ -->
    <!--     $attrs.class -->
    <!--       ? $attrs.class -->
    <!--       : 'bg-gray-50 border border-slate-500 text-orange-500 text-sm rounded-lg focus:ring-slate-600 focus:border-slate-600' -->
    <!--   }`" -->
    <!-- > -->
    <!--   <option selected value="">Seleccione una opción</option> -->
    <!--   <slot name="default" /> -->
    <!-- </vField> -->
  </div>
</template>

<script setup>
const emit = defineEmits(["update:modelValue"]);
const proxyValue = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit("update:modelValue", newValue);
  },
});

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: "",
  },
  search: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: "w-full",
  },
  modelValue: {
    type: String,
    required: true,
  },

  list: {
    type: Array,
    default: () => {
      return [];
    },
  },
  label: {
    type: String,
    default: "name",
  },
  value: {
    type: String,
    default: "code",
  },
});
const id = "ss";
let $select;
let $vtest;
onMounted(() => {
  $select = document.getElementById(id);
  $vtest = document.getElementById("vtest");
  console.log($select);
  // let $list;
  // $select.childNodes.forEach((body) => {
  //   if (body.childNodes.length > 0) {
  //     body.childNodes.forEach((list) => {
  //       console.log(list.dataset);
  //       if (list.dataset["selectOptions"] === "") $list = list;
  //     });
  //   }
  // });
  // console.log($list);
  // let $li = document.createElement("li");
  // $li.textContent = "hello world";
  // $list.appendChild($li);
});
</script>
