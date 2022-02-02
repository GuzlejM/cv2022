<template lang="">
  <div class="h-screen px-40 py-10">
    <div class="text-white">
      <div class="flex justify-between">
        <div class="flex w-2/6">
          <TypingAnimation />
        </div>
        <Socials class="w-4/6 justify-end drop-shdw" />
      </div>
      <!--actual component start-->
      <ul class="flex justify-start items-center py-4">
        <div v-for="(tab, index) in tabs" :key="index">
          <li
            class="cursor-pointer py-2 px-4 text-2xl hover:border-4 hover:border-black"
            @click="$store.state.activeTab = index"
            :class="
              $store.state.activeTab === index
                ? 'hover:border-4 hover:border-black'
                : 'hover:border-4 hover:border-black'
            "
          >
            <span
              :class="
                $store.state.activeTab === index
                  ? 'bg-white rounded-xl p-2 text-black text-3xl drop-shdw'
                  : 'drop-shdw hover:text-black hover:border-4 hover:border-black'
              "
              >{{ tab }}</span
            >
          </li>
        </div>
      </ul>
    </div>

    <div class="bg-white h-max h-4/6 shadow-xl rounded-xl">
      <!-- 1st SLIDER -->
      <Jumbotron class="relative" v-show="$store.state.activeTab === 0">
        <div
          class="z-10 rounded-b-xl bottom-0 absolute h-1/6 w-full bg-blue-500"
        ></div>
        <!-- PHOTO PART -->
        <div class="p-4 z-20">
          <img
            class="rounded-xl w-full h-full border-8 border-white"
            src="../assets/logo.jpg"
          />
        </div>
        <!-- DETAILS -->
        <div class="flex flex-col justify-between h-full py-5 w-4/6 pr-2">
          <div class="leading-none text-start h-4/6 w-full">
            <div class="w-max">
              <h2 class="leading-none text-4xl">Martin Guzlej</h2>
              <h2 class="text-3xl">Vue.js Front-End Developer</h2>
              <div class="h-0.5 bg-black rounded-xl mb-5"></div>
            </div>
            <div class="flex flex-col w-3/6 text-2xl">
              <p>
                <span class="font-bold">Adresa: </span> Trenčín, 911 01 Slovakia
              </p>
              <p>
                <span class="font-bold">E-mail: </span> martin.guzlej@gmail.com
              </p>
              <a href="https://github.com/GuzlejM"
                ><span class="font-bold">Github: </span> <span class="underline hover:opacity-75">github.com/GuzlejM</span></a
              >
              <a href="https://uk.linkedin.com/in/martin-guzlej-12359119b"
                ><span class="font-bold">LinkedIn: </span>
                <span class="underline hover:opacity-75">uk.linkedin.com/in/martin-guzlej</span></a
              >
              <p><span class="font-bold">Tel. c. :</span> +421/911 34 65 98</p>
            </div>
          </div>
          <!-- DETAILS -->
          <Socials class="z-20 text-white drop-shdw" />
        </div>
      </Jumbotron>
      <!-- 2nd SLIDER -->
      <Jumbotron v-show="$store.state.activeTab === 1" class="flex border">
        <div class="flex justify-center align-center w-2/6"></div>
        <div class="bg-blue-500 flex w-4/6 justify-around items-center">
          <div class="flex flex-col w-3/6">
            <p class="leading-relaxed">MENO: Martin</p>
            <p>Adresa: Moyzesova 5 Trencin 91101</p>
          </div>
          <p class="leading-relaxed w-3/6">
            <a
              class="p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
              href="#"
              role="button"
              >LinkedIn</a
            >
            <a
              class="p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
              href="#"
              role="button"
              >GitHub</a
            >
            <a
              class="p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
              href="#"
              role="button"
              >Gmail</a
            >
          </p>
        </div>
      </Jumbotron>
      <Jumbotron v-show="$store.state.activeTab === 2">
        <div class="flex justify-center align-center w-2/6">
          <img class="p-2 md:p-5" src="../assets/logo.jpg" />
        </div>
        <div class="bg-blue-500 flex w-4/6 justify-around items-center">
          <div class="flex flex-col w-3/6">
            <p class="leading-relaxed">MENO: Martin</p>
            <p>Adresa: Moyzesova 5 Trencin 91101</p>
          </div>
          <p class="leading-relaxed w-3/6">
            <a
              class="p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
              href="#"
              role="button"
              >LinkedIn</a
            >
            <a
              class="p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
              href="#"
              role="button"
              >GitHub</a
            >
            <a
              class="p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
              href="#"
              role="button"
              >Gmail</a
            >
          </p>
        </div>
      </Jumbotron>
      <Jumbotron v-show="$store.state.activeTab === 3" class="flex border">
        <div class="flex justify-center align-center w-2/6">
          <img class="p-2 md:p-5" src="../assets/logo.jpg" />
        </div>
        <div class="bg-blue-500 flex w-4/6 justify-around items-center">
          <div class="flex flex-col w-3/6">
            <p class="leading-relaxed">MENO: Martin</p>
            <p>Adresa: Moyzesova 5 Trencin 91101</p>
          </div>
          <p class="leading-relaxed w-3/6">
            <a
              class="p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
              href="#"
              role="button"
              >LinkedIn</a
            >
            <a
              class="p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
              href="#"
              role="button"
              >GitHub</a
            >
            <a
              class="p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
              href="#"
              role="button"
              >Gmail</a
            >
          </p>
        </div>
      </Jumbotron>
    </div>

    <ul class="flex justify-center items-center py-4">
      <div v-for="(tab, index) in tabs" :key="index">
        <li
          class="cursor-pointer py-3 px-4 rounded transition"
          :class="
            $store.state.activeTab === index
              ? 'bg-blue-500 text-white'
              : ' text-gray-500'
          "
          @click="$store.state.activeTab = index"
        >
          {{ index }}
        </li>
      </div>
    </ul>

    <!-- <div class="flex gap-4 justify-center border-t p-4">
      <button
        class="py-2 px-4 border rounded-md border-blue-600 text-blue-600 cursor-pointer uppercase text-sm font-bold hover:bg-blue-500 hover:text-white hover:shadow"
        @click="$store.state.activeTab--"
        v-show="$store.state.activeTab > 0"
      >
        Back
      </button>
      <button
        class="py-2 px-4 border rounded-md border-blue-600 text-blue-600 cursor-pointer uppercase text-sm font-bold hover:bg-blue-500 hover:text-white hover:shadow"
        @click="$store.state.activeTab++"
        v-show="$store.state.activeTab < tabs.length - 1"
      >
        Next
      </button>
    </div>
    actual component end-->
  </div>
</template>
-
<script>
import Jumbotron from "./Jumbotron.vue";
import Socials from "./Socials.vue";
import TypingAnimation from "./TypingAnimation.vue";

export default {
  components: { Jumbotron, Socials, TypingAnimation },
  data() {
    return {
      tabs: [
        "Profil",
        "Vzdelanie/Kurzy",
        "Pracovne Skusnenosti",
        "Zrucnosti/Certifikaty",
      ],
    };
  },
};
</script>
<style></style>
