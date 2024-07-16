


<template>
  <div class="bg-bgcolor overflow-x-clip">
    <Navbar @navulang="gantiTahun" />
    <router-link to="/tambahdataguru" class="p-5 bg-[#38A3FF] rounded-full fixed right-10 bottom-10 z-50"
      tag="button"><img src="../assets/+.svg" alt=""></router-link>
    <div class="flex">
      <SideBar />
      <Banner>Data Guru Pembimbing</Banner>
      <div class="tabel">
        <div class="flex flex-col mt-52 mb-10 mx-10 ml-80 bg-white shadow-md p-24 relative">
          <div class="-m-5">
            <div class="p-1.5 min-w-full align-middle">


              <div class=" border-2 border-black">
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
                    <tr v-for="(data,index) in guru" class="divide-x-2 divide-black">
                      <td class="px-4 font-semibold">{{ index+1 }}.</td>
                      <td class="px-2 py-1 text-nowrap">{{data.nama}}</td>
                      <td class="px-2 py-1">{{data.no_telepon}}</td>
                      <td class="px-4 py-1">{{ data.nip}}</td>
                      <td class="px-2 py-1 capitalize">{{data.jenis_kelamin == "laki" ? "Laki - laki" : "perempuan"}}</td>
                      <td class="px-2 py-1">{{ data.alamat.desa }},{{ data.alamat.kecamatan }},{{ data.alamat.kabupaten }},{{ data.alamat.provinsi }}</td>
                      <td class="px-4 py-1 text-end">
                        <button type="button">
                          <ActionButtonGuru :dataguru="data" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <Pagination class="mt-10" :count-page="countPage" @ambil-page="gantiPage" />
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/Navbar.vue";
import SideBar from "@/components/SideBar.vue";
import ActionButtonGuru from "@/components/ActionButtonGuru.vue";
import Banner from "@/components/Banner.vue";
import { useTahunStore } from "@/stores/tahun";
import Pagination from "@/components/Pagination.vue";


export default {
  name: 'dataguru',
  components: {Navbar,SideBar,ActionButtonGuru,Banner,Pagination},
  data() {
    return {
      guru: [],
      tahunStore: useTahunStore(),
      countPage: '',
      pageNow:''
    }
  },
  methods: {
    gantiPage(i){
      console.log(i);
      axios.get(`http://localhost:2008/admin/findAllGuruPembimbing?page=${i}&tahun=${this.tahunStore.tahun}`,{withCredentials : true})
      .then((r) => {
        console.log(r.data.data.guruPembimbing);
        this.setGuru(r.data.data.guruPembimbing)
      })
      this.pageNow = i
    },
    setGuru(data){
      
      this.guru = data
      console.log(this.guru);
    },
    gantiTahun(){
      axios.get(`http://localhost:2008/admin/findAllGuruPembimbing?page=1&tahun=${this.tahunStore.tahun}`,{withCredentials: true})
      .then((r) => this.setGuru(r.data.data.guruPembimbing))
    }
  },
  mounted() {
    axios.get(`http://localhost:2008/admin/findAllGuruPembimbing?page=1&tahun=${this.tahunStore.tahun}`,{withCredentials: true})
      .then((r) => {
        this.setGuru(r.data.data.guruPembimbing)
        this.countPage = r.data.data.countpage
      })
    }
}


</script>