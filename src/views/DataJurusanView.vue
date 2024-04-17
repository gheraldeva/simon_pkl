<script setup>
import Navbar from "@/components/Navbar.vue";
import SideBar from "@/components/SideBar.vue";
import Banner from "@/components/Banner.vue";
import ActionButtonJurusan from "@/components/ActionButtonJurusan.vue";
import TableNavigation from "@/components/TableNavigation.vue";

</script>

<template>
  <div class="bg-bgcolor overflow-x-clip">
    <Navbar />
    <router-link to="/tambahdatasiswa" class="p-5 bg-[#38A3FF] rounded-full fixed right-10 bottom-10 z-50" tag="button"><img
                src="../assets/+.svg" alt=""></router-link>
    <div class="flex">
      <SideBar />
      <Banner>Data Jurusan</Banner>
      
      <div class="tabel relative">
        <div class="flex flex-col mt-52 mb-10 mx-10 ml-72 bg-white shadow-md p-32 relative">
          <div class="-m-5 ">
            <div class="p-1.5 min-w-full align-middle">
              <TableNavigation>
                <template #default-filter>
                  Status: Terpenuhi
                </template>
              </TableNavigation>

              <div class="border-2 relative border-black">
                <table class="min-w-full divide-y divide-black">
                  <thead>
                    <tr class="divide-x-2 divide-black text-sm">
                      <th scope="col" class="px-4 py-2 text-start font-medium">
                        No
                      </th>
                      <th scope="col" class="text-nowrap py-2 text-center font-medium">
                        Nama Siswa
                      </th>
                      <th scope="col" class="py-2 font-medium">Act</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-black">
                    <tr v-for="(data, index) in siswa.data" class="divide-x-2 divide-black">
                      <td class="px-4 font-semibold">{{ index + 1 }}.</td>
                      <td class="px-2 py-1 text-nowrap">{{ data.nama }}</td>
                      <td class="px-1 py-1 text-end">
                        <button type="button" >
                          <ActionButtonJurusan :datasiswa="data" />
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
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      siswa: []
    }
  },
  methods: {
    setSiswa(data) {
      this.siswa = data
      // console.log(this.siswa);
    }
  },
  mounted() {
    axios.get('http://localhost:2008/admin/findAllJurusan')
      .then((r) => this.setSiswa(r.data))
  }
}


</script>