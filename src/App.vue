<template>
  <Tabs />
</template>

<script>
import Tabs from "./components/Tabs.vue";
export default {
  name: "App",
  components: { Tabs },
};
</script>

<style>
body {
  height: 100vh;
  background: linear-gradient(
    to bottom,
    #3b82f6 0%,
    #3b82f6 30%,
    white 30%,
    white 100%
  );
}

#app {
  height: 100%;
  font-family: "Questrial", sans-serif;
}
</style>
