<template>
  <div class="min-h-screen w-screen bg-gray-100">
    <nav class='sticky-top py-3 bg-gray-200 flex flex-col sm:flex-row'>
      <a class='mx-auto flex flex-col' href="/">
        <menu-icon class="absolute top-6 left-8"/>
        <img class='h-12 mx-auto w-12' src="/icon.png" /> 
      <span class="text-red-900 my-2 block text-2xl font-bold tracking-wide">Gunn Math Competition</span>
      </a>
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
  }
}
</script>
