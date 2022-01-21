<template lang="">
  <div class="h-full mx-40 my-10">
    <!--actual component start-->
    <Socials />
    <ul class="flex justify-start items-center my-4">
      <div v-for="(tab, index) in tabs" :key="index">
        <li
          class="cursor-pointer py-2 px-4 text-gray-500 border-b-8"
          :class="
            $store.state.activeTab === index
              ? 'text-blue-500 border-blue-500'
              : ''
          "
          @click="$store.state.activeTab = index"
        >
          {{ tab }}
        </li>
      </div>
    </ul>

    <div class="bg-white text-center h-max shadow-xl">
      <!-- 1st SLIDER -->
      <Jumbotron v-show="$store.state.activeTab === 0" class="flex h-full">
        <div class="w-2/6 shadow-lg">
          <img class="object-scale-down " src="../assets/logo.jpg" />
        </div>

        <div class="w-full bg-green-300">

          <div class="p-4 border">
            <h2 class="">DETAILY</h2>
            <Socials>

            </Socials>
          </div>
        </div>
      </Jumbotron>
      <Jumbotron v-show="$store.state.activeTab === 1" class="flex border">
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
            <Jumbotron v-show="$store.state.activeTab === 2" class="flex border">
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

    <ul class="flex justify-center items-center my-4">
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

    <div class="flex gap-4 justify-center border-t p-4">
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
    <!--actual component end-->
  </div>
</template>
-
<script>
import Jumbotron from "./Jumbotron.vue";
import Socials from "./Socials.vue";


export default {
  components: { Jumbotron, Socials },
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
<style lang=""></style>
