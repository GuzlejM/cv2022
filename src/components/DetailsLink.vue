<template lang="">
  <a :href="this.url" target="_newtab">
    <span class="font-bold">{{ this.label }}</span>
    <span class="underline hover:opacity-75">{{ this.textField }}</span>
  </a>
</template>
<script>
export default {
  props: {
    label: { String, default: "", required: true },
    textField: { String, default: "", required: true },
    url: { String, default: "", required: true },
  },
};
</script>
<style lang=""></style>
