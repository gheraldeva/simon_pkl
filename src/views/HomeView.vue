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
    <div class="flex flex-col mt-52 mb-10 mx-10 ml-72 w-[78vw] bg-white shadow-md p-16 relative">
      <h1 class=" text-xl pl-5 mb-5 text-center">Selamat Datang, <strong>Admin</strong> di Aplikasi <br>
        Monitoring PKL Siswa <strong>{{ sekolah }}</strong></h1>
      <img src="../assets/Rectangle 5.png" alt="">
    </div>
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
  data(){
    return{
      sekolah: ''
    }
  },
  mounted() {
    axios.get("http://localhost:2008/admin/getAdmin" , {withCredentials : true})
    .then((r) => {
      // console.log(r.data.data.sekolah.nama)
      this.sekolah = r.data.data.sekolah.nama;
    })
  }
};
</script>