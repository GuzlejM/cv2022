<template>
  <div class="container">
    <h1>
      <span class="drop-shadow-lg mb-3 text-4xl drop-shdw">Martin Guzlej,</span
      ><br />
      a
      <span
        :class="typeValue.length === 0 ? 'p-0' : 'bg-white p-1 rounded-lg'"
        class="text-black text-2xl"
        >{{ typeValue }}</span
      >
      <span class="cursor" :class="{ typing: typeStatus }"></span>
      Developer.
    </h1>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  data: () => {
    return {
      typeValue: "Vue.js ",
      typeStatus: false,
      typeArray: ["Front-End", "Node.js", "Javascript", "Vue.js"],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    typeText() {
      this.typeValue == this.typeArray[this.typeArrayIndex];
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>

<style>
.drop-shdw {
  filter: drop-shadow(4px 4px 3px black);
}
</style>
