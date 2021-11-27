<template>
  <div class="flex h-full w-full">
      <p class="my-auto mx-auto block">Oops! The page <span class=" text-red font-mono ">/{{slug}}</span> does not currently exist.</p>
  </div>
</template>

<script>
export default {
    async asyncData({params}){
        return {slug:params.slug}
    }
}
</script>

<style>

</style>