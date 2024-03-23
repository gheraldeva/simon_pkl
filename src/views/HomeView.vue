<script setup>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/SideBar.vue"
</script>

<template>
  <div class="bg-bgcolor overflow-x-hidden">
    <Navbar />
    <div class="flex">
      <Sidebar />

      <div class="w-[82%] bg-slate-600 h-20 flex justify-end relative">
        <div class="w-full h-full bg-white absolute backdrop-blur-sm backdrop-invert-0 bg-white/50">
        </div>
        <div class="w-[50%] bg-white"></div>
        <img src="../assets/smknbanner.png" class="w-[50%] h-full" alt="">
      </div>
    </div>
  </div>
</template>
