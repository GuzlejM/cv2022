<template lang="">
  <div>
    <i :class="customClass"></i>
  </div>
</template>
<script>
export default {
  props: {
      customClass: {
      type: String,
      required: true,
      default: ''
    },
  }
  
}
</script>
<style lang="">
  
</style>