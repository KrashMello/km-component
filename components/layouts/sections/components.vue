<template>
  <km-container class="flex">
    <section class="h-full w-[20%] border-r-2">
      <km-nav>
        <ul
          class="lg:w-44 flex flex-col gap-3"
          v-for="(list, i) in Lists"
          :key="i"
        >
          <h3 class="text-lg font-semibold">{{ list.title }}</h3>
          <li v-for="(link, i) in list.links" :key="i">
            <km-btn
              type="link"
              border="left"
              color="purple"
              x-small
              :to="link.to"
              >{{ link.title }}</km-btn
            >
          </li>
        </ul>
      </km-nav>
    </section>
    <section class="w-[80%]">
      <km-container>
        <slot />
      </km-container>
    </section>
  </km-container>
</template>

<script>
export default {
  setup() {
    const Lists = [
      {
        title: "componentes",
        links: [
          {
            title: "toolbar",
            to: "/components/toolbar",
          },
          {
            title: "button",
            to: "/components/button",
          },
          {
            title: "container",
            to: "/components/container",
          },
          {
            title: "table",
            to: "/components/table",
          },
        ],
      },
    ];
    return {
      Lists,
    };
  },
};
</script>
