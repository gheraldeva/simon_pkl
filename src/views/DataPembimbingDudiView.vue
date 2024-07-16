<template>
  <div class="bg-bgcolor overflow-x-clip">
    <Navbar @navulang="gantiTahun" />
    <router-link to="/tambahdatapembimbingdudi" class="p-5 bg-[#38A3FF] rounded-full fixed right-10 bottom-10 z-50"
      tag="button"><img src="../assets/+.svg" alt=""></router-link>
    <div class="flex">
      <SideBar />
      <Banner>Data Pembimbing Dudi</Banner>
      <div class="tabel">
        <div class="flex flex-col mt-52 mb-10 mx-20 ml-80 bg-white shadow-md p-24 relative">
          <div class="-m-5">
            <div class="p-1.5 min-w-full align-middle">

          

              <div class="border-2 border-black">
                <table class="min-w-full divide-y divide-black">
                  <thead>
                    <tr class="divide-x-2 divide-black">
                      <th scope="col" class="px-4 py-2 text-start font-medium">
                        No
                      </th>
                      <th scope="col" class="px-4 py-2 text-start font-medium">
                        Nama Pembimbing Dudi
                      </th>
                      <th scope="col" class="px-4 py-2 text-start font-medium">
                        No. Telp
                      </th>
                      <th scope="col" class="px-4 py-2 font-medium">Jenis Kelamin</th>
                      <th scope="col" class="px-4 py-2 font-medium">
                        Alamat
                      </th>
                      <th scope="col" class="px-4 py-2 font-medium">
                        Jumlah Siswa
                      </th>
                      <th scope="col" class="py-2 px-2 font-medium">
                        Agama
                      </th>
                      <th scope="col" class="py-2 font-medium">Act</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-black">
                    <tr v-for="(data, i) in dudies" class="divide-x-2 divide-black">
                      <td class="px-3 font-semibold">{{ i + 1 }}.</td>
                      <td class="px-2 py-1">{{ data.nama }}</td>
                      <td class="px-4 py-1">{{ data.no_telepon }}</td>
                      <td class="px-4 py-1">{{ data.jenis_kelamin = "laki" ? "Laki - Laki" : "Perempuan" }}</td>
                      <td class="px-4 py-1">{{ data.alamat.detail_tempat }}</td>
                      <td class="px-12 py-1">{{ data.siswa.length }}</td>
                      <td class="px-4 py-1">{{ data.agama }}</td>
                      <td class="px-4 py-1 text-end">
                        <button type="button">
                          <ActionButtonPembimbingDudi :datadudi="data" />
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
import Navbar from "@/components/Navbar.vue";
import SideBar from "@/components/SideBar.vue";
import Banner from "@/components/Banner.vue";
import TambahData from "@/components/TambahData.vue";
import ActionButtonPembimbingDudi from "@/components/ActionButtonPembimbingDudi.vue";
import { useTahunStore } from "@/stores/tahun";
import Pagination from "@/components/Pagination.vue";


export default {
  name : 'datadudi',
  components : {Navbar,SideBar,ActionButtonPembimbingDudi,Banner,TambahData,Pagination},
  data() {
    return {
      dudies: {},
      tahunStore: useTahunStore(),
      countPage:'',
      pageNow:''
    }
  },
  methods: {
    gantiPage(i){
      console.log(i);
      axios.get(`http://localhost:2008/admin/findAllPembimbingDudi?page=${i}&tahun=${this.tahunStore.tahun}`,{withCredentials : true})
      .then((r) => {
        console.log(r.data.data.guruPembimbing);
        this.setGuru(r.data.data.guruPembimbing)
      })
      this.pageNow = i
    },
    setDudies(data) {
      this.dudies = data
      console.log(this.dudies);
    },
    gantiTahun(){
      axios.get(`http://localhost:2008/admin/findAllPembimbingDudi?page=1&tahun=${this.tahunStore.tahun}`,{withCredentials:true})
      .then((r) => this.setDudies(r.data.data.pembimbingDudi))
    }
  },
  mounted() {
    axios.get(`http://localhost:2008/admin/findAllPembimbingDudi?page=1&tahun=${this.tahunStore.tahun}`,{withCredentials:true})
      .then((r) => {
          this.setDudies(r.data.data.pembimbingDudi)
          this.countPage = r.data.data.countPage
        }
      )
  }
}


</script>