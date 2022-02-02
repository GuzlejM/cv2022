<template lang="">
  <div>
    <a :href="this.link"></a><i :class="customClass" class="cursor-pointer"></i>
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
  },
};
</script>
<style lang=""></style>
