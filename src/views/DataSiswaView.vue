<script setup>
import Navbar from "@/components/Navbar.vue";
import SideBar from "@/components/SideBar.vue";
import Banner from "@/components/Banner.vue";
import ActionButtonSiswa from "@/components/ActionButtonSiswa.vue";
import TableNavigationSiswa from "@/components/TableNavigationSiswa.vue";
import TrueIcon from "@/components/icons/TrueIcon.vue";
import FalseIcon from "@/components/icons/FalseIcon.vue";
import Pagination from "@/components/Pagination.vue"

</script>

<template>
  <div class="bg-bgcolor overflow-x-clip">
    <Navbar @navulang="gantiTahun" />
    <router-link to="/tambahdatasiswa" class="p-5 bg-[#38A3FF] rounded-full fixed right-10 bottom-10 z-50"
      tag="button"><img src="../assets/+.svg" alt=""></router-link>
    <div class="flex">
      <SideBar />
      <Banner>Data Siswa</Banner>

      <div class="tabel">
        <div class="flex flex-col mt-52 mb-10 mx-10 ml-72 bg-white shadow-md p-16 relative">
          <div class="-m-5">
            <div class="p-1.5 min-w-full align-middle">

              <div class="border-2 border-black">
                <table class="min-w-full divide-y divide-black">
                  <thead>
                    <tr class="divide-x-2 divide-black text-sm">
                      <th scope="col" class="px-4 py-2 text-start font-medium">
                        No
                      </th>
                      <th scope="col" class="text-nowrap py-2 text-center font-medium">
                        Nama Siswa
                      </th>
                      <th scope="col" class="px-4 py-2 text-center font-medium">
                        NIS
                      </th>
                      <th scope="col" class="px-2 py-2 font-medium text-nowrap">
                        Jenis Kelamin
                      </th>
                      <th scope="col" class="px-2 py-2 font-medium">
                        Status
                      </th>
                      <th scope="col" class="py-2 px-2 font-medium">Alamat</th>
                      <th scope="col" class="py-2 px-2 font-medium">Guru Pembimbing</th>
                      <th scope="col" class="py-2 font-medium">Act</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-black">
                    <tr v-for="(data, index) in siswa.data" class="divide-x-2 divide-black">
                      <td class="px-4 font-semibold">{{ index + 1 }}.</td>
                      <td class="px-2 py-1 text-nowrap">{{ data.nama }}</td>
                      <td class="px-4 py-1">{{ data.nis }}</td>
                      <td class="px-2 py-1 capitalize">{{ data.jenis_kelamin == "laki" ? "Laki - laki" : "perempuan" }}
                      </td>
                      <td class="px-5 py-1" v-if="data.status == 'pkl'">
                        <TrueIcon />
                      </td>
                      <td class="px-5 py-1" v-else>
                        <FalseIcon />
                      </td>
                      <td class="px-2 py-1">{{ data.alamat.desa }},{{ data.alamat.kecamatan }},{{ data.alamat.kabupaten
                        }},{{
                          data.alamat.provinsi }}</td>
                      <td class="px-4 py-1">{{ data.guru_pembimbing.nama }}</td>
                      <td class="px-4 py-1 text-end">
                        <button type="button">
                          <ActionButtonSiswa :datasiswa="data" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <Pagination class="mt-10" :count-page="countPage" @ambil-page="gantiPage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useTahunStore } from "@/stores/tahun";

export default {
  data() {
    return {
      siswa: [],
      siswa_url: 'http://localhost:2008/admin/findSiswaFilter?',
      tahunStore: useTahunStore(),
      countPage: '',
      pageNow: ''
    }
  },
  methods: {
    gantiPage(i){
      axios.get(`http://localhost:2008/admin/findSiswaFilter?page=${i}&tahun=${this.tahunStore.tahun}`,{withCredentials : true})
      .then((r) => {
        console.log(r.data.data);
        this.setSiswa(r.data.data)
      })
      this.pageNow = i
    },
    gantiTahun(){
      console.log(this.tahunStore.tahun);
      axios.get(`http://localhost:2008/admin/findSiswaFilter?page=1&tahun=${this.tahunStore.tahun}`,{withCredentials : true})
      .then((r) => {
        console.log(r.data.data);
        this.setSiswa(r.data.data)
      })

    },
    setSiswa(data) {

      this.siswa = data
      // console.log(this.siswa);
    },
    SendUrl(query) {
      // console.log(query);
      if (query) {
        axios.get(`http://localhost:2008/admin/findSiswaFilter?page=1&tahun=${this.tahunStore.tahun}`, {
          withCredentials : true,
          params: {
            jenis_kelamin : query.jenis_kelamin,
            id_jurusan : query.id_jurusan,
            id_kelas : query.id_kelas
          }
        })
          .then((r) => this.setSiswa(r.data.data))
      }

    },
    carinama(input) {
      console.log(input);
    }
  },
  mounted() {
    console.log(this.tahunStore.tahun);
    this.now_tahun = this.tahunStore.tahun
    axios.get(`http://localhost:2008/admin/findSiswaFilter?page=1&tahun=${this.tahunStore.tahun}`,{withCredentials : true})
      .then((r) => {
        // console.log(r.data.data.countPage);
        this.countPage = r.data.data.countPage
        this.setSiswa(r.data.data)
      })



    // axios.get('http://localhost:2008/admin/findSiswaFilter?', null, {
    //   params: {
    //     jenis_kelamin: this.jenis_kelamin
    //   }
    // })
    //   .then((r) => console.log(r))

  },
  
}


</script>

<!-- bikin tampunaganya,dimaisnmg filter jenis kelmsa io svgvgdhs ,{}
,.jneinbs  -->