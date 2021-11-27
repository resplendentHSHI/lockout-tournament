<template>
  <div class="min-h-screen w-screen bg-base">
    <nav class='sticky-top py-6 sm:py-3 bg-base    flex flex-col sm:flex-row'>
      <a class='mx-auto flex flex-col  sm:flex-row sm:flex-grow' >
        <menu-icon  @click="menu = !menu" class="absolute sm:hidden top-6 cursor-pointer text-black left-8 dark:text-white stroke-current"/>
        <img class='h-8 mx-auto my-auto sm:mr-3 sm:ml-5 w-8' src="/icon.png" /> 
      <span  class="text-red my-2 block text-2xl font-bold tracking-wide">Gunn Math Competition</span>
      </a>
      <div :class="menu?'max-h-96':'max-h-0 sm:max-h-full'" class="flex sm:justify-end  transition-all ease-in-out duration-300 transform  overflow-hidden origin-top sm:my-auto flex-col sm:flex-grow sm:flex-row">
      <a class="font-mono sm:my-auto block mx-auto sm:mx-5 text-center  sm:text-right text-black dark:text-white hover:text-red hover:underline" :key='link' :href="link" v-for="link of ['/', '/about', '/schedule', '/staff', '/sponsors']">
        {{link}}
      </a>
      </div>
    </nav>
    <div class="mt-5">
    <Nuxt />
    </div>
  </div>
</template>

<style>
html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
<script>
import { MenuIcon } from 'vue-feather-icons'

export default {
  components: {
    MenuIcon
  }, 
  data: ()=>({
    menu: false,
  })
}
</script>
