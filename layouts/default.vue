<template>
  <div
    class="flex flex-col w-full z-10 min-h-screen h-full bg-neutral-100 dark:bg-neutral-950"
  >
    <km-toolbar height="md" fixed blur color="bg-slate-600/60">
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
    </km-toolbar>
    <main class="text-white flex-1 py-20 z-10 flex h-full w-full">
      <NuxtPage />
    </main>
    <footer class="text-white z-20">footer</footer>
  </div>
</template>

<script setup>
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
