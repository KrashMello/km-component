<template>
  <div
    class="flex flex-col w-full z-10 min-h-screen h-full bg-slate-300 dark:bg-slate-700"
  >
    <km-toolbar height="md" fixed blur color="bg-slate-600/60">
      <km-container class="flex flex-row justify-between items-center">
        <img
          class="size-7 rounded-full"
          src="https://pbs.twimg.com/profile_images/1686337808267378688/wQE2O9i3_400x400.jpg"
          alt="una imagen del logo"
        />
        <km-nav>
          <ul class="flex gap-1 items-center">
            <li v-for="(link, i) in links" :key="i" class="">
              <km-btn
                type="link"
                :to="link.to"
                x-small
                color="bg-transparent text-white border-purple-600 hover:border-purple-400 hover:border-b"
                :icon="link.icon"
                :target="link.target"
              >
                <template v-if="link.icon" #icon>
                  <component class="size-5" :is="link.iconSrc" />
                </template>
                {{ link.title }}
              </km-btn>
            </li>
          </ul>
        </km-nav>
      </km-container>
    </km-toolbar>
    <main
      class="text-slate-600 dark:text-slate-100 flex-1 py-20 z-10 flex h-full w-full"
    >
      <km-container
        class="flex flex-col gap-y-5 gap-x-5 md:flex-wrap text-neutral-700 dark:text-white"
      >
        <km-toolbar color="slate" class="relative block lg:hidden">
          <div
            class="absolute top-16 bg-slate-400/50 z-40 p-5 rounded-xl backdrop-blur-md"
          >
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
                    color="slate"
                    x-small
                    :to="link.to"
                    >{{ link.title }}</km-btn
                  >
                </li>
              </ul>
            </km-nav>
          </div>
        </km-toolbar>
        <section class="h-full w-[20%] hidden lg:block border-r-2">
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
                  color="slate"
                  x-small
                  :to="link.to"
                  >{{ link.title }}</km-btn
                >
              </li>
            </ul>
          </km-nav>
        </section>
        <km-container>
          <NuxtPage />
        </km-container>
      </km-container>
    </main>
  </div>
</template>

<script setup>
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

const links = [
  {
    title: "inicio",
    to: "/",
  },
  { title: "componentes", to: "/components" },
  {
    title: "github",
    icon: true,
    to: "https://github.com/KrashMello/km-component",
    iconSrc: resolveComponent("svgGithub"),
    target: "_blank",
  },
];
</script>
