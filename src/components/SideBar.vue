<script setup>
import ArrowRight from "@/components/icons/ArrowRight.vue";
import { RouterLink } from "vue-router";
import "animate.css";
</script>
<template>
  <div class="w-64 h-[90vh] mt-[10vh] bg-card-color fixed z-20 text-white font-Montserrat pt-10">
    <div class="flex gap-3 px-6">
      <img src="../assets/profile_admin.svg" alt="" />
      <div>
        <h1 class="font-semibold text-lg">Admin</h1>
        <p class="text-sm">Halaman Home</p>
      </div>
    </div>
    <hr class="border mx-2 my-5 border-hr-color" />
    <div class="px-6 flex flex-col gap-3">
      <div>
        <div class="flex gap-3">
          <img src="../assets/home.svg" alt="" />
          <p class="font-semibold">Home</p>
        </div>
      </div>

      <div
        class="flex flex-row justify-between items-center"
        @click="toogleData"
      >
        <div class="flex gap-3">
          <img src="../assets/master_data.svg" alt="" />
          <button class="flex items-center" @click="tooglevisibleData">
            MasterData <ArrowRight class="ml-20" />
          </button>
        </div>
      </div>
      <transition
        name="fade"
      >
        <ul v-if="visibleData" class="list flex flex-col gap-2">
          <hr />
          <li>Data Siswa</li>
          <hr />
          <li>Data Siswa</li>
          <hr />
          <li>Data Siswa</li>
          <hr />
          <li>Data Siswa</li>
          <hr />
        </ul>
      </transition>
      <p class="absolute bottom-12 left-12 text-[0.5rem] font-semibold">
        Copyright © BlackRoom Corp. 2024
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visibleData: false,
    };
  },
  methods: {
    tooglevisibleData() {
      this.visibleData = !this.visibleData;
    },
  },
};
</script>

<style>
.fade-enter-active{
  transition: transform 0.2s ease;
}

.fade-leave-active{
  transition: scale 0.1s all;
}

.fade-leave-to{
  transform: scale(0);
}

.fade-enter-from{
  transform: translateY(-10px);
}
</style>