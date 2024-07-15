<template>
    <div class="bg-bgcolor overflow-x-clip font-Montserrat">
        <Navbar/>
        <div class="flex">
            <SideBar/>
            <Banner>Detail Data {{  dudies.nama_instansi_perusahaan }}</Banner>
            <div class="flex flex-col mt-52 mb-10 w-[100%] mx-20 ml-80 bg-white shadow-md p-24 relative">
                <div class="flex flex-row gap-10 ">
                    <p class="w-[30%] text-right font-medium text-lg text-nowrap">Nama : </p>
                    <p class="w-[70%] text-lg font-bold">{{ dudies.nama }}</p>
                </div>
                <div class="flex flex-row gap-10 w-[100%]">
                    <p class="w-[30%] text-right font-medium text-lg text-nowrap">No Telepon : </p>
                    <p class="w-[70%] text-lg font-bold">{{ dudies.no_telepon }}</p>
                </div>
                <div class="flex flex-row gap-10 w-[100%]">
                    <p class="w-[30%] text-right font-medium text-lg text-nowrap">NIS : </p>
                    <p class="w-[70%] text-lg font-bold">{{ dudies.nis }}</p>
                </div>
                <div class="flex flex-row gap-10 w-[100%]">
                    <p class="w-[30%] text-right font-medium text-lg text-nowrap">Jurusan : </p>
                    <p class="w-[70%] text-lg font-bold">{{ jurusan }}</p>
                </div>
                <div class="flex flex-row gap-10 w-[100%]">
                    <p class="w-[30%] text-right font-medium text-lg text-nowrap">Kelas : </p>
                    <p class="w-[70%] text-lg font-bold">{{ kelas }}</p>
                </div>
                <div class="flex flex-row gap-10 w-[100%]">
                    <p class="w-[30%] text-right font-medium text-lg text-nowrap">Jenis Kelamin : </p>
                    <p class="w-[70%] text-lg font-bold">{{ dudies.jenis_kelamin == "laki" ? "Laki - Laki" : "Perempuan" }}</p>
                </div>
                <h3 class="text-lg font-semibold w-[29%] text-right">Alamat : </h3>
                <div class="flex flex-row gap-10 w-[100%]">
                    <p class="w-[32%] text-right font-medium text-lg text-nowrap">Provinsi : </p>
                    <p class="w-[68%] text-lg font-bold">{{ alamat.provinsi }}</p>
                </div>
                <div class="flex flex-row gap-10 w-[100%]">
                    <p class="w-[32%] text-right font-medium text-lg text-nowrap">Kabupaten : </p>
                    <p class="w-[68%] text-lg font-bold">{{ alamat.kabupaten }}</p>
                </div>
                <div class="flex flex-row gap-10 w-[100%]">
                    <p class="w-[32%] text-right font-medium text-lg text-nowrap">Kecamatan : </p>
                    <p class="w-[68%] text-lg font-bold">{{ alamat.kecamatan }}</p>
                </div>
                <div class="flex flex-row gap-10 w-[100%]">
                    <p class="w-[32%] text-right font-medium text-lg text-nowrap">Desa : </p>
                    <p class="w-[68%] text-lg font-bold">{{ alamat.desa }}</p>
                </div>
                <div class="flex flex-row gap-10 w-[100%]">
                    <p class="w-[32%] text-right font-medium text-lg text-nowrap">Detail Tempat : </p>
                    <p class="w-[68%] text-lg font-bold">{{ alamat.detail_tempat }}</p>
                </div>
                <div class="flex flex-row gap-10 w-[100%]">
                    <p class="w-[32%] text-right font-medium text-lg text-nowrap">Negara : </p>
                    <p class="w-[68%] text-lg font-bold">{{ alamat.negara }}</p>
                </div>
                <div class="flex gap-2 absolute right-24 bottom-8">
                    <button class="p-3 rounded-lg text-sm border text-[#0275D8] border-[#0275D8]" @click="kembali()">Kembali</button>
                    <button class="p-3 rounded-lg text-sm border text-white bg-[#0275D8]" @click="editData()">Edit</button>
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

export default {
  name : 'detaildudi',
  components : {Navbar,SideBar,Banner},
  data() {
    return {
      dudies: {},
      alamat : {},
      jurusan : '',
      kelas : ''
    }
  },
  methods: {
    setDudies(data) {
      this.dudies = data
    //   console.log(this.dudies);
      this.alamat = data.alamat
      this.jurusan = data.jurusan.nama
      this.kelas = data.kelas.nama
      console.log(this.dudies);
    },
    editData(){
        console.log(this.dudies.id);
    },
    kembali(){
        window.location.href = "/datasiswa"
    }
  },
  mounted() {
    axios.get('http://localhost:2008/admin/findSiswa/' + this.$route.params.id,{withCredentials : true})
      .then((r) => this.setDudies(r.data.data))
  }
}
</script>