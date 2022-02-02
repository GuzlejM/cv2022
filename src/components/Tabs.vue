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
        />
        <!-- PHOTO PART -->

        <Photo class="p-4 z-20 w-2/6" />
        <!-- DETAILS -->

        <div class="flex flex-col justify-between h-full py-5 w-4/6 pr-2">
          <div class="leading-none text-start h-4/6 w-full">
            
            <ProfileHeader class="w-max" name="Martin Guzlej" title="Vue.js Front-End Developer"/>

            <div class="flex flex-col w-3/6 text-2xl">
              <DetailsField
                label="Adresa: "
                textField="Trencin 911 01, Slovakia"
              />
              <DetailsField
                label="E-mail: "
                textField="martin.guzlej@gmail.com"
              />
              <DetailsLink
                url="https://github.com/GuzlejM"
                label="Github: "
                textField="github.com/GuzlejM"
              />
              <DetailsLink
                url="https://uk.linkedin.com/in/martin-guzlej-12359119b"
                label="LinkedIn: "
                textField="uk.linkedin.com/in/martin-guzlej"
              />
              <DetailsField label="Tel. c. : " textField="+421/911 34 65 98" />
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
  </div>
</template>
-
<script>
import ProfileHeader from './ProfileHeader';
import DetailsField from "./DetailsField";
import DetailsLink from "./DetailsLink";
import Photo from "./Photo.vue";
import Jumbotron from "./Jumbotron.vue";
import Socials from "./Socials.vue";
import TypingAnimation from "./TypingAnimation.vue";

export default {
  components: {
    Jumbotron,
    Socials,
    TypingAnimation,
    Photo,
    DetailsField,
    DetailsLink,
    ProfileHeader
  },
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
