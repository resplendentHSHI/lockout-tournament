<template>
  <div class="min-h-screen bg-base bg-graph w-screen">
    <nav
      class="
        sticky
        top-0
        p-3
        backdrop-filter backdrop-blur-md
        bg-graph bg-opacity-30
        dark:bg-opacity-30
      
        flex flex-col
        md:flex-row
      "
    >
      <a class="mx-auto flex flex-col md:flex-row md:flex-grow">
        <menu-icon
          @click="menu = !menu"
          class="
            absolute
            md:hidden
            top-6
            cursor-pointer
            text-black
            left-8
            dark:text-white
            stroke-current
          "
        />
        <img class="h-8 mx-auto my-auto md:mr-3 md:ml-2 w-8" src="/icon.png" />
        <span class="text-red my-2 block text-2xl font-bold tracking-wide"
          >Gunn Math Competition</span
        >
      </a>
      <div
        :class="menu ? 'max-h-96' : 'max-h-0 md:max-h-full'"
        class="
          flex
          md:justify-end
          transition-all
          ease-in-out
          duration-300
          transform
          overflow-hidden
          origin-top
          md:my-auto
          flex-col
          md:flex-grow md:flex-row
        "
      >
        <a
          class="
            font-mono
            md:my-auto
            block
            mx-auto
            md:mx-2
            text-center
            md:text-right
            text-black
            dark:text-white
            hover:text-red hover:underline
          "
          :key="link"
          :href="'/#' + link"
          v-for="link of ['home', 'about', 'schedule', 'staff', 'sponsors']"
        >
          {{ link }}
        </a>
        <div class="flex flex-row md:my-auto mx-auto my-3 md:mr-3 md:ml-16 " id="social-icons">
          <a target="_blank" class="mx-2 my-auto" href="https://gunnmathcircle.org"><home-icon class="h-5 w-auto" /></a>
          <a target="_blank" class="my-auto " href='http://discord.gg/4HZtKwP'>
            <img class="w-auto dark:hidden mx-2 h-6" src="/Discord-Logo-Black.png" />
            <img class="w-auto hidden dark:inline-block mx-2 h-6" src="/Discord-Logo-White.png" />
          </a>
          <a target="_blank" class="mb-1 " href="https://github.com/GunnMath">
            <img class="w-auto my-auto dark:hidden mx-2 h-5" src="/GitHub-Mark-120px-plus.png" />
            <img class="w-auto hidden my-auto dark:inline-block mx-2 h-5" src="/GitHub-Mark-Light-120px-plus.png" />
          </a>
        </div>
      </div>
    </nav>
    <div class="mt-5 h-full flex-grow w-full">
      <Nuxt />
    </div>
  </div>
</template>

<style>
html {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
<script>
import { MenuIcon } from "vue-feather-icons";
import { HomeIcon } from "vue-feather-icons";

export default {
  components: {
    MenuIcon,
    HomeIcon,
  },
  data: () => ({
    menu: false,
  }),
};
</script>
