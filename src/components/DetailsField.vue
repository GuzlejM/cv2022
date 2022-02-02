<template lang="">
  <p><span class="font-bold">{{this.label}} </span>{{this.textField}}</p>
</template>
<script>
export default {
  props:{
    label:{String, default: "", required: true},
    textField:{String, default: "", required: true}
  }
};
</script>
<style lang=""></style>
