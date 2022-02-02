<template lang="">
  <div>
    <a :href="this.link" target="_newtab" class="cursor-pointer"
      ><i
        :title="this.title"
        :class="customClass"
        class="cursor-pointer hover:opacity-50"
      ></i
    ></a>
  </div>
</template>
<script>
export default {
  props: {
    customClass: {
      type: String,
      required: true,
      default: "",
    },
    link: {
      type: String,
      required: true,
      default: "",
    },
    title: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>
<style lang=""></style>
