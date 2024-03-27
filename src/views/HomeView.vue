<script setup>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/SideBar.vue"
import Banner from "@/components/Banner.vue"
</script>

<template>
  <div class="bg-bgcolor overflow-x-hidden">
    <Navbar />
    <div class="flex">
      <Sidebar />
      <Banner></Banner>
      
    </div>
  </div>
</template>
