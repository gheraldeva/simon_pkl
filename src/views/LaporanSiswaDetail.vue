<template>
    <div class="bg-bgcolor overflow-x-clip">
        <Navbar />
        <div class="flex">
            <SideBar />
            <Banner>Detail Laporan Siswa</Banner>
            <div>
                <p>{{ fileURL }}</p>
                <div class="flex flex-col mt-52 mb-10 mx-20 ml-92 w-[70vw] bg-white shadow-md pt-24 pb-48 px-16 relative">
                    <!-- <img :src="fileURL" alt=""> -->
                    <embed :src="fileURL" :type="'image/' + filetipe">
                    

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
            filetype : 'jpg',
            filetipe : ''
        }
    },
    methods:{
        setFileType(){
            console.log(this.laporan);
            const file = this.laporan.dokumentasi.split('.')
            this.filetipe = file[file.length - 1]
        },
        setlaporan(data){
            // console.log(data);
            this.laporan = data
            // console.log(this.laporan.dokumentasi);
            this.fileURL = this.laporan.dokumentasi
            console.log(this.fileURL);
            
            
        }
    },
    mounted(){
        axios.get("http://localhost:2008/admin/findLaporanPklSiswa/" + this.$route.params.id ,{withCredentials:true})
            .then((r) => this.setlaporan(r.data.data))
        this.setFileType()
    }
}
</script>