<template>
  <div class="prose dark:prose-dark prose-red mx-auto max-w-lg sm:max-w-xl md:max-w-3xl">
    <h1 class="">{{doc.title}}</h1>
    <nuxt-content  :document="doc" />
  </div>
</template>

<script>
export default {
  async asyncData({$content}){
    const doc = await $content('home').fetch()
    return {doc};
  }

}
</script>

<style>

</style>
