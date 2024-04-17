<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div
    class="h-[10vh] fixed z-10 w-screen bg-gradient-to-r px-16 from-left-linear to-right-linear flex justify-between items-center">
    <div class="flex gap-2 items-center">
      <img src="../assets/logo.png" alt="" width="70vw" />
      <div class="flex flex-col">
        <h1 class="font-Montserrat text-white text-3xl">
          <RouterLink to="/">Simon<span class="font-bold">PKL</span></RouterLink>
        </h1>
        <p class="text-[7px] text-white">Solusinya PKL!</p>
      </div>
    </div>
    <div class="flex gap-5">
      <img src="../assets/notif.svg" alt="" />
      <div class="flex">
        <img src="../assets/profile.svg" alt="" />
        <img src="../assets/down_arrow.svg" alt="" />
      </div>
    </div>
  </div>
</template>
