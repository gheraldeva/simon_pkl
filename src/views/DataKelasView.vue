<script setup>
import Navbar from "@/components/Navbar.vue";
import SideBar from "@/components/SideBar.vue";
import Banner from "@/components/Banner.vue";


</script>

<template>
  <div class="bg-bgcolor overflow-x-clip">
    <Navbar />
    <router-link to="/tambahdatakelas" class="p-5 bg-[#38A3FF] rounded-full fixed right-10 bottom-10 z-50"
      tag="button"><img src="../assets/+.svg" alt=""></router-link>
    <div class="flex">
      <SideBar />
      <Banner>Data Kelas</Banner>

      <div class="tabel">
        <div class="flex flex-col mt-52 mb-10 mx-10 ml-80 bg-white shadow-md p-20 relative">
          <div class="-m-5 ">
            <h1 class="font-bold text-xl">Tahun 2024/2025</h1>
            <div class="p-1.5 min-w-full align-middle">
              <div class="px-24">
                <div class="border-2 relative border-black">
                  <table class="min-w-full divide-y divide-black">
                    <thead>
                      <tr class="divide-x-2 divide-black text-sm">
                        <th scope="col" class="px-4 py-2 text-start font-medium">
                          No
                        </th>
                        <th scope="col" class="text-nowrap px-2 py-2 text-center font-medium">
                          Nama Kelas
                        </th>
                        <th scope="col" class="text-nowrap py-2 text-center font-medium">
                          Jurusan
                        </th>
                        <th scope="col" class="py-2 font-medium">Act</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-black">
                      <tr v-for="(data, index) in siswa.data" class="divide-x-2 divide-black">
                        <td class="px-4 font-semibold">{{ index + 1 }}.</td>
                        <td class="px-2 py-1 text-nowrap">{{ data.nama }}</td>
                        <td class="px-2 py-1 text-nowrap">{{ data.jurusan.nama }}</td>
                        <td class="px-1 py-1 text-end">
                          <button type="button">
                            <ActionButtonKelas :datasiswa="data" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ActionButtonKelas from "@/components/ActionButtonKelas.vue";
import { useTahunStore } from "@/stores/tahun";

export default {
  data() {
    return {
      siswa: [],
      tahunStore: useTahunStore()
    }
  },
  methods: {
    setSiswa(data) {
      this.siswa = data
      // console.log(this.siswa);
    }
  },
  mounted() {
    axios.get('http://localhost:2008/admin/findAllKelas?tahun=' + this.tahunStore.tahun,{withCredentials:true})
      .then((r) => this.setSiswa(r.data))
  }
}


</script>