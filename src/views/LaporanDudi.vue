<template>
  <div class="bg-bgcolor overflow-x-clip">
    <Navbar />
    <div class="flex">
      <SideBar />
      <Banner>Laporan PKL DU/DI</Banner>
      <div class="tabel">
        <div class="flex flex-col mt-52 mb-10 mx-20 ml-92 w-[70vw] bg-white shadow-md pt-24 pb-48 px-16 relative">
          <div class="-m-5">
            <div class=" min-w-full align-middle">

              <div class=" flex flex-row flex-wrap mx-20 justify-between gap-10 pt-10">
                <div class="" v-for="(data, index) in laporanPkl">
                  <div class=" w-92 h-40 bg-[#38A3FF] rounded-md relative">
                    <div class="w-92 h-24 bg-[#0275D8] rounded-md text-white px-5 py-3 relative mb-3">
                      <h1 class=" font-medium text-lg">{{ data.pembimbing_dudi.nama }}</h1>
                      <p class=" font-medium opacity-75 text-[15px] pt-3">{{ data.dudi.nama_instansi_perusahaan }}</p>
                    </div>
                    <div class="m-5 flex justify-between">
                      <p class="font-medium text-white">{{ data.tanggal }}</p>
                      <div class='has-tooltip'>
                        <span class='tooltip rounded shadow-lg p-1 bg-gray-200 mt-9 text-nowrap'>Lihat Gambar</span>
                        <FolderIcon class="cursor-pointer" @click="KlikFolder(data.id)" />
                      </div>
                    </div>
                  </div>
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
import Navbar from "@/components/Navbar.vue";
import SideBar from "@/components/SideBar.vue";
import Banner from "@/components/Banner.vue";
import axios from "axios";
import FolderIcon from "@/components/icons/FolderIcon.vue";
import { useTahunStore } from "@/stores/tahun";
export default {
  name: 'LaporanDudi',
  components: { Navbar, SideBar, Banner, FolderIcon },
  data() {
    return {
      laporanPkl: [],
      tahunStore : useTahunStore()
    }
  },
  methods: {
    setLaporan(data) {
      this.laporanPkl = data
    },
    KlikFolder(id) {
      // const file = this.laporanPkl[0].dokumentasi.split('.')
      // console.log(file[file.length - 1]);
      this.$router.push({path :`/laporandudi/detail/${id}`})

    }

  },
  mounted() {
    axios.get(`http://localhost:2008/admin/findAllLaporanPkl?tahun=${this.tahunStore.tahun}&page=1`, { withCredentials: true })
      .then((r) => {this.setLaporan(r.data.data.laporan)
        console.log(r.data.data.laporan);
      })
  }
}
</script>