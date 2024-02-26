<template>
  <km-container
    class="flex flex-col gap-y-5 md:flex-wrap text-neutral-700 dark:text-white"
  >
    <km-toolbar class="block md:hidden">
      <SvgGithub class="size-6"></SvgGithub>
    </km-toolbar>
    <section class="h-full w-[20%] hidden md:block border-r-2">
      <km-nav class="">
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
              color="blue"
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
    const routeList = useRouter()
      .getRoutes()
      .map((v) => {
        return {
          title: v.name.replace(/(components-)/, ""),
          to: v.path,
        };
      })
      .filter((v) => v.title !== "index");
    const Lists = [
      {
        title: "componentes",
        links: routeList,
      },
    ];
    return {
      Lists,
    };
  },
};
</script>
