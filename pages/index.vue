<template>
  <div class="mb-10">
  <div class="prose dark:prose-dark prose-red mx-auto px-5 max-w-sm  sm:max-w-xl md:max-w-5xl">
    <h1 class="">{{doc.title}}</h1>
    <nuxt-content  :document="doc" />
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto px-5 max-w-sm  sm:max-w-xl md:max-w-5xl" >
      <a target="_blank" :href="sponsor.link" class="block mx-3 my-3 bg-white dark:bg-gray-600 shadow-md hover:shadow-2xl rounded-md px-6 py-4" :key="sponsor.name" v-for="sponsor of sponsors">
        <h1 class="text-red mb-2 transition-shadow duration-300 font-xl font-semibold tracking-wide">{{sponsor.name}}</h1>
        <img class="dark:hidden block  max-h-24 my-auto mx-auto h-auto w-auto" :src="sponsor.light_image"></img>
        <img class="hidden dark:block max-h-24 my-auto mx-auto h-auto w-auto" :src="sponsor.dark_image"></img>
      </a>
    </div>

    </div>
</template>

<script>
export default {
  async asyncData({$content}){
    const doc = await $content('home').fetch();
    const {sponsors} = await $content('sponsors').fetch();
    return {doc, sponsors};
  }

}
</script>

<style>
h2::before {
  display: block;
  content: " ";
  margin-top: -104px;
  height: 104px;
  visibility: hidden;
  pointer-events: none;
}
</style>
