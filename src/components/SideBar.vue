<script setup>
import ArrowRight from "@/components/icons/ArrowRight.vue";
import { RouterLink } from "vue-router";
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

      <div class="dropdown-sidebar">
        <div>
          <div class="flex gap-3 cursor-pointer" @click="tooglevisibleData">
            <img src="../assets/master_data.svg" alt="" />
            <button class="flex items-center" >
              Master Data
              <ArrowRight class="absolute right-5" />
            </button>
          </div>
        </div>
        <transition name="fade">
          <ul v-if="visibleData" class="list flex flex-col mt-3 gap-2">
            <hr />
            <li>
              <RouterLink to="/datasiswa">Data Siswa</RouterLink>
            </li>
            <hr />
            <li>
              <RouterLink to="/dataguru">Data Guru</RouterLink>
            </li>
            <hr />
            <li>
              <RouterLink to="/datadudi">Data Dudi</RouterLink>
            </li>
            <hr />
            <li>
              <RouterLink to="/datapembimbingdudi">Data Pembimbing Dudi</RouterLink>
            </li>
            <hr />
            <li>
              <RouterLink to="/datajurusan">Data Jurusan</RouterLink>
            </li>
            <hr />
            <li>
              <RouterLink to="/datakelas">Data Kelas</RouterLink>
            </li>
            <hr />
          </ul>
        </transition>
      </div>
      <div class="dropdown-sidebar">
        <div>
          <div class="flex gap-3 cursor-pointer" @click="tooglevisiblePKL">
            <img src="../assets/pelaksanaan_pkl.svg" alt="" />
            <button class="flex items-center text-nowrap" >
              Pelaksanaan PKL
              <ArrowRight class="absolute right-5" />
            </button>
          </div>
        </div>
        <transition name="fade">
          <ul v-if="visiblePKL" class="list flex flex-col mt-3 gap-2">
            <hr />
            <li>
              <RouterLink to="/absensiswa">Absen Siswa</RouterLink>
            </li>
            <hr />
            <li>Laporan Siswa PKL</li>
            <hr />
            <li>Laporan PKL</li>
            <hr />
          </ul>
        </transition>
      </div>
      <div class="dropdown-sidebar">
        <div>
          <div class="flex gap-3 cursor-pointer" @click="tooglevisibleLaporan">
            <img src="../assets/laporan.svg" alt="" />
            <button class="flex items-center text-nowrap">
              Laporan
              <ArrowRight class="absolute right-5" />
            </button>
          </div>
        </div>
        <transition name="fade">
          <ul v-if="visibleLaporan" class="list flex flex-col mt-3 gap-2">
            <hr />
            <li>
              <RouterLink to="/laporansiswa">Laporan Siswa PKL</RouterLink>
            </li>
            <hr />
              <RouterLink to="/laporandudi">Laporan DU/DI PKL</RouterLink>
            <hr />
          </ul>
        </transition>
      </div>
      


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
      visiblePKL: false,
      visibleLaporan: false,
    };
  },
  methods: {
    tooglevisibleData() {
      this.visibleData = !this.visibleData;
      this.visiblePKL = false
      this.visibleLaporan = false
    },
    tooglevisiblePKL() {
      this.visiblePKL = !this.visiblePKL;
      this.visibleData = false
      this.visibleLaporan = false
    },
    tooglevisibleLaporan() {
      this.visibleLaporan = !this.visibleLaporan;
      this.visibleData = false
      this.visiblePKL = false
    },
  },
};
</script>

<style>
.fade-enter-active {
  transition: transform 0.2s ease;
}

.fade-leave-active {
  transition: transform 0.1s ease;
}

.fade-leave-to {
  transform: translateY(-10px);
}

.fade-enter-from {
  transform: translateY(-10px);
}
</style>