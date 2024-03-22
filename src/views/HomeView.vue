<script setup>
import Navbar from "@/components/Navbar.vue";
import ArrowRight from "@/components/icons/ArrowRight.vue";
</script>

<template>
  <div class="bg-bgcolor">
    <Navbar />
    <div class="flex">
      <div
        class="w-[18%] h-[90vh] bg-card-color text-white font-Montserrat pt-10"
      >
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
          <div class="flex flex-row justify-between items-center">
            <div class="flex gap-3">
              <img src="../assets/master_data.svg" alt="" />
              <p class="font-semibold">Master Data</p>
            </div>
            <ArrowRight />
          </div>
          <div class="flex flex-row justify-between items-center">
            <div class="flex gap-3">
              <img src="../assets/pelaksanaan_pkl.svg" alt="" />
              <p class="font-semibold">Pelaksanaan PKL</p>
            </div>
            <ArrowRight />
          </div>
          <div class="flex flex-row justify-between items-center">
            <div class="flex gap-3">
              <img src="../assets/laporan.svg" alt="" />
              <p class="font-semibold">Laporan</p>
            </div>
            <ArrowRight />
          </div>
        </div>

        <p class="relative top-96 text-[0.5rem] font-semibold text-center">
          Copyright © BlackRoom Corp. 2024
        </p>
      </div>

      <div class="w-[82%] bg-white h-20">
        
      </div>
    </div>
  </div>
</template>
