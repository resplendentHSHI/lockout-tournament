<template>
  <div class="min-h-screen w-screen bg-gray-100">
    <nav class='sticky-top py-6 sm:py-3 bg-gray-100 flex flex-col sm:flex-row'>
      <a class='mx-auto flex flex-col  sm:flex-row sm:flex-grow' >
        <menu-icon @click="menu = !menu" class="absolute sm:hidden top-6 left-8"/>
        <img class='h-8 mx-auto my-auto sm:mr-3 sm:ml-5 w-8' src="/icon.png" /> 
      <span  class="text-red-700  my-2 block text-2xl font-bold tracking-wide">Gunn Math Competition</span>
      </a>
      <div :class="menu?'scale-y-100':'scale-y-0 sm:scale-y-100'" class="flex sm:justify-end transition-transform duration-200 transform overflow-hidden origin-top sm:my-auto flex-col sm:flex-grow sm:flex-row">
      <a class="font-mono sm:my-auto block mx-auto sm:mx-5 text-center  sm:text-right text-black hover:text-red-700 hover:underline" :key='link' :href="link" v-for="link of ['/','/schedule','/staff']">
        {{link}}
      </a>
      </div>
    </nav>
    <Nuxt />
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
