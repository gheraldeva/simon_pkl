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
    <p class="absolute z-50 bg-white">{{ counter }}</p>
  </div>
</template>
<script>
import { reactive } from 'vue';
import axios from "axios";

export default {
  setup() {
    const counter = reactive({ value: 0 });

    const increment = () => {
      counter.value++;
    };

    return {
      counter,
      increment
    };
  },
  mounted(){
    axios.get("http://localhost:2008/admin/cekToken",{withCredentials : true})
      .then((r) => console.log(r.data))
  }
};
</script>