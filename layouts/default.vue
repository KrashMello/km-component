<template>
  <div class="fixed z-0 min-h-screen h-full w-full bg-slate-950">
    <div
      class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"
    ></div>
    <div
      class="absolute bottom-0 right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"
    ></div>
  </div>
  <div class="flex flex-col w-full z-10 min-h-screen h-full">
    <km-toolbar
      height="sm"
      fixed
      blur
      color="bg-purple-400/30"
      rounded="bottom"
    >
      <img
        class="size-7 rounded-full"
        src="https://pbs.twimg.com/profile_images/1686337808267378688/wQE2O9i3_400x400.jpg"
        alt="una imagen del logo"
      />
      <km-nav>
        <ul class="flex gap-1 items-center">
          <li v-for="(link, i) in links" :key="i">
            <km-btn
              type="link"
              :to="link.to"
              x-small
              color="bg-transparent text-white border-purple-600 hover:border-purple-400 hover:border-b"
            >
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

<script>
export default {
  setup() {
    const links = [
      {
        title: "inicio",
        to: "/",
      },
      { title: "componentes", to: "/components" },
    ];
    return {
      links,
    };
  },
};
</script>
