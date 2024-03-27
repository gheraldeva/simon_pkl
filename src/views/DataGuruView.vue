<script setup>
import Navbar from "@/components/Navbar.vue";
import SideBar from "@/components/SideBar.vue";
import ActionButton from "@/components/icons/ActionButton.vue";
import Banner from "@/components/Banner.vue";
import TambahData from "@/components/TambahData.vue";
import TableNavigation from "@/components/TableNavigation.vue";

</script>

<template>
  <div class="bg-bgcolor overflow-x-clip">
    <Navbar />
    <div class="flex">
      <SideBar />
      <Banner>Data Guru Pembimbing</Banner>
      <div class="tabel">
        <div class="flex flex-col mt-52 mb-10 mx-10 ml-92 bg-white shadow-md p-24 relative">
          <div class="-m-5">
            <div class="p-1.5 min-w-full align-middle">
              <TableNavigation>
                <template #default-filter>
                  Status: Terpenuhi
                </template>
              </TableNavigation>

              <TambahData />

              <div class="overflow-hidden border-2 border-black">
                <table class="min-w-full divide-y divide-black">
                  <thead>
                    <tr class="divide-x-2 divide-black text-sm">
                      <th scope="col" class="px-4 py-2 text-start font-medium">
                        No
                      </th>
                      <th scope="col" class="text-nowrap py-2 text-center font-medium">
                        Nama Guru
                      </th>
                      <th scope="col" class="px-4 py-2 text-center font-medium">
                        No. Telp
                      </th>
                      <th scope="col" class="px-2 py-2 font-medium">
                        NIP
                      </th>
                      <th scope="col" class="px-4 py-2 font-medium text-nowrap">
                        Jenis Kelamin
                      </th>
                      <th scope="col" class="py-2 px-2 font-medium">Alamat</th>
                      <th scope="col" class="py-2 font-medium">Act</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-black">
                    <tr v-for="(data,index) in guru.data" class="divide-x-2 divide-black">
                      <td class="px-4 font-semibold">{{ index+1 }}.</td>
                      <td class="px-2 py-1 text-nowrap">{{data.nama}}</td>
                      <td class="px-2 py-1">{{data.no_telepon}}</td>
                      <td class="px-4 py-1">{{ data.nip}}</td>
                      <td class="px-2 py-1 capitalize">{{data.jenis_kelamin == "laki" ? "Laki - laki" : "perempuan"}}</td>
                      <td class="px-2 py-1">{{ data.alamat.desa }},{{ data.alamat.kecamatan }},{{ data.alamat.kabupaten }},{{ data.alamat.provinsi }}</td>
                      <td class="px-4 py-1 text-end">
                        <button type="button">
                          <ActionButton />
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
      guru: []
    }
  },
  methods: {
    setGuru(data){
      
      this.guru = data
      console.log(this.guru);
    }
  },
  mounted() {
    axios.get('http://localhost:2008/admin/findAllGuruPembimbing')
      .then((r) => this.setGuru(r.data))

    
  }
}


</script>