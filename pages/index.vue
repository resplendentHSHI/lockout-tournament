<template>
  <div class="container">
    <h1 class="text-2xl inline-block font-bold my-2 text-black">{{doc.title}}</h1>
    <nuxt-content :document="doc" />
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
