<template>
  <div class="prose dark:prose-dark prose-red mx-auto px-5 max-w-sm  sm:max-w-xl md:max-w-5xl">
    <h1 class="">{{doc.title}}</h1>
    <nuxt-content  :document="doc" />
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3" >
      <a :href="sponsor.link" class="block bg-white dark:bg-gray-700 rounded-md p-8" v-for="sponsor of sponsors">
        <h1 class="text-red font-lg font-semibold tracking-wide">{{sponsor.name}}</h1>
        <img class="h-24 w-auto" :src="sponsor.path"></img>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({$content}){
    const doc = await $content('home').fetch();
    const sponsors = await $content('sponsors').fetch();
    return {doc, sponsors};
  }

}
</script>

<style>

</style>
