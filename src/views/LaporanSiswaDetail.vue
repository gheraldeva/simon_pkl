<template>
    <div class="bg-bgcolor overflow-x-clip">
        <Navbar />
        <div class="flex">
            <SideBar />
            <Banner>Detail Laporan Siswa</Banner>
            <div>
                <div class="flex flex-col mt-52 mb-10 mx-20 ml-92 w-[70vw] bg-white shadow-md pt-24 pb-48 px-16 relative">
                    <h1 class="text-xl font-semibold my-3">Laporan Siswa : {{ siswa }}</h1>
                    <p class="text-lg font-semibold my-1">Topik Pekerjaan : {{ laporan.topik_pekerjaan }}</p>
                    <img v-show="filetipe == 'jpg'" :src="laporan.dokumentasi" alt="">
                    <img v-show="filetipe == 'jpeg'" :src="laporan.dokumentasi" alt="">
                    <img v-show="filetipe == 'png'" :src="laporan.dokumentasi" alt="">
                    <embed v-show="filetipe == 'pdf'" :src="laporan.dokumentasi" type="application/pdf" class="border-none shadow-md" width="100%" height="900vh">
                    <div class="flex gap-2 mt-10 justify-center">
                        <button class=" bg-white border-left-linear border-2 w-24 h-12 rounded-sm hover:bg-left-linear hover:text-white" @click="backToLaporan">Kembali</button>
                        <a @click.prevent="downloadFile" class=" bg-left-linear cursor-pointer rounded-sm flex justify-center items-center w-[140px]">Download File</a>
                        <a @click="lihatFile" class="cursor-pointer bg-left-linear rounded-sm flex justify-center items-center w-20">Lihat</a>
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
export default {
    name : 'laporansiswadetail',
    components: { Navbar,SideBar,Banner },
    data(){
        return {
            laporan : {},
            fileURL : '',
            filetipe : '',
            fileName : '',
            siswa : ''
        }
    },
    methods:{
        setFileType(){
            const file = this.laporan.dokumentasi.split('.')
            this.filetipe = file[file.length - 1]
            const split = this.laporan.dokumentasi.split('/')
            this.fileName = split[4]
        },
        setlaporan(data){
            // console.log(this.laporan.dokumentasi);
            // console.log(data);
            this.laporan = data
            this.fileURL = this.laporan.dokumentasi
            this.setFileType()
            this.siswa = this.laporan.siswa.nama
        },
        backToLaporan(){
            this.$router.push({path:"/laporansiswa"})
        },
        downloadFile(){
            window.location.href = `http://localhost:2008/admin/downloadFileLaporanSiswa/${this.fileName}`
        },
        lihatFile(){
            window.location.href = this.laporan.dokumentasi
        }
    },
    beforeMount(){
        axios.get("http://localhost:2008/admin/findLaporanPklSiswa/" + this.$route.params.id ,{withCredentials:true})
            .then((r) => {
                this.setlaporan(r.data.data)
            })
    },
}
</script>