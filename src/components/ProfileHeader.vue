<template lang="">
  <div>
    <h2 class="leading-none text-4xl">{{this.name}}</h2>
    <h2 class="text-3xl">{{this.title}}</h2>
    <div class="h-0.5 bg-black rounded-xl mb-5"></div>
  </div>
</template>
<script>
export default {
    props: {
    name: { String, default: "", required: true },
    title: { String, default: "", required: true }
  },
};
</script>
<style lang=""></style>
