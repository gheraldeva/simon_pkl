<script setup>
import Navbar from "@/components/Navbar.vue";
import SideBar from "@/components/SideBar.vue";
import Banner from "@/components/Banner.vue";
import { onMounted } from "vue";
import axios from "axios";
</script>


<template>
    <div class="bg-bgcolor overflow-x-clip font-Montserrat">
        <Navbar />
        <div class="flex">
            <SideBar />
            <Banner>Tambah Data Siswa</Banner>
            <div class="flex flex-col min-w-[75vw] mt-52 mb-10 mx-10 ml-80 bg-white shadow-md px-8 pt-8 pb-18 relative">
                <h1 class="font-semibold text-xl pl-5 mb-5">Tambah Data</h1>
                <hr class=" border-t-2">
                <form action="" v-on:submit.prevent class="mt-5 pr-20 relative">
                    <div class="my-3 flex">
                        <label for="nama"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Nama :
                        </label>
                        <input type="text" id="nama"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan Nama..." v-model="datasiswa.nama" />
                    </div>
                    <div class="my-3 flex">
                        <label for="nis"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">NIS :
                        </label>
                        <input type="text" id="nis"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan NIS..." v-model="datasiswa.nis" />
                    </div>
                    <div class="my-3 flex">
                        <label for="ttl"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Tempat/Tgl Lahir
                            : </label>
                        <input type="text" id="ttl"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan Tempat / Tgl Lahir" v-model="datasiswa.ttl" />
                    </div>
                    <div class="my-3 flex">
                        <label for="agama"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Agama :
                        </label>
                        <input type="text" id="agama"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan Agama..." v-model="datasiswa.agama" />
                    </div>
                    <div class="my-3 flex">
                        <label for="kelas"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Kelas :
                        </label>
                        <input type="text" id="kelas"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan Kelas..." v-model="datasiswa.kelas" />
                    </div>
                    <div class="my-3 flex">
                        <label for="jurusan"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Jurusan :
                        </label>
                        <input type="text" id="jurusan"
                            class="shadow-sm border bg-white text-gray-900 text-sm -lg w-full p-2.5"
                            placeholder="Masukkan Jurusan" v-model="datasiswa.jurusan" />
                    </div>
                    <div class="my-3 flex">
                        <label for="notelp"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">No. Telepon :
                        </label>
                        <input type="text" id="notelp"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan No. Telepon" v-model="datasiswa.notelp" />
                    </div>
                    <div class="my-3 flex ">
                        <label for="jenis-kelamin"
                            class="w-52 text-right my-auto pl-5 font-semibold text-lg text-nowrap">Jenis
                            Kelamin :
                        </label>
                        <div class="pl-5 flex gap-5 items-center">
                            <div class="flex items-center gap-2">
                                <input id="jenis-kelamin" type="radio" value="laki" v-model="datasiswa.jenis_kelamin"
                                    name="jenis-kelamin"
                                    class="w-4 h-4 text-blue-600 p-2.5 bg-gray-100 border-gray-300 ">
                                <label for="jenis-kelamin"
                                    class=" text-lg font-semibold cursor-pointer">Laki-Laki</label>
                            </div>
                            <div class="flex items-center gap-2">
                                <input id="jenis-kelamin-2" type="radio" value="perempuan"
                                    v-model="datasiswa.jenis_kelamin" name="jenis-kelamin"
                                    class="w-4 h-4 text-blue-600 p-2.5 bg-gray-100 border-gray-300 ">
                                <label for="jenis-kelamin-2"
                                    class=" text-lg font-semibold cursor-pointer">Perempuan</label>
                            </div>
                        </div>
                    </div>



                    <div class="my-3 flex flex-col gap-2 w-[100%] content-end">
                        <div class="flex flex-row justify-between items-center">
                            <label for="provinsi_select"
                                class="w-[21%] text-right font-semibold text-lg text-nowrap">Provinsi :
                            </label>
                            <select name="provinsi" id="provinsi_select" v-model="alamat.provinsi" @change="dataKabupaten(alamat.provinsi)"
                                    class="w-[76%] p-2 border-2 rounded-lg cursor-pointer">
                                <option value="" disabled>Pilih Provinsi</option>
                                <option :value="provinsi.id" v-for="(provinsi,index) in provinsi.data" :key="index" >{{provinsi.nama}}</option>
                            </select>
                        </div>
                        <div class="flex flex-row justify-between items-center">
                            <label for="provinsi_select"
                                class="mr-5 text-right w-[21%] font-semibold text-lg text-nowrap">Kabupaten :
                            </label>
                            <select name="provinsi" id="provinsi_select" v-model="alamat.kabupaten" @change="dataKecamatan(alamat.kabupaten)"
                                class="w-[76%] p-2 border-2 rounded-lg cursor-pointer">
                                <option value="" disabled>Pilih Kabupaten</option>
                                <option :value="kabupaten.id" v-for="(kabupaten,index) in kabupaten.data" :key="index" >{{kabupaten.nama}}</option>
                            </select>
                        </div>
                        <div class="flex flex-row justify-between items-center">
                            <label for="provinsi_select"
                                class="mr-5 text-right w-[21%] font-semibold text-lg text-nowrap">Kecamatan :
                            </label>
                            <select name="provinsi" id="provinsi_select" v-model="alamat.kecamatan" @change="dataDesa(alamat.kecamatan)"
                                class="w-[76%] p-2 border-2 rounded-lg cursor-pointer">
                                <option value="" disabled>Pilih Kecamatan</option>
                                <option :value="kecamatan.id" v-for="(kecamatan,index) in kecamatan.data" :key="index" >{{kecamatan.nama}}</option>
                            </select>
                        </div>
                        <div class="flex flex-row justify-between items-center">
                            <label for="provinsi_select"
                                class="mr-5 text-right w-[21%] font-semibold text-lg text-nowrap">Desa :
                            </label>
                            <select name="provinsi" id="provinsi_select" v-model="alamat.desa"
                                class="w-[76%] p-2 border-2 rounded-lg cursor-pointer">
                                <option value="" disabled>Pilih Desa</option>
                                <option :value="desa.id" v-for="(desa,index) in desa.data" :key="index" >{{desa.nama}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex gap-3 absolute right-10 -bottom-10">
                        <router-link to="/datasiswa"
                            class="bg-white text-[#38A3FF] border p-2 rounded-md border-[#38A3FF] hover:bg-[#38A3FF] hover:text-white">Batalkan</router-link>
                        <button type="submit" class="text-white bg-[#38A3FF]
                        hover:bg-blue-600 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2 text-center"
                            @click="simpanData">
                            Simpan
                        </button>
                    </div>

                </form>
            </div>
        </div>



    </div>

</template>

<script>
export default {
    data() {
        return {
            alamat: {},
            datasiswa: {},
            provinsi: [],
            kabupaten: [],
            kecamatan: [],
            desa: []
        }
    },
    methods: {
        simpanData() {
            console.log(this.alamat);
        },
        dataProvinsi(data) {
            this.provinsi = data
        },
        dataKabupaten(data) {
            const url = 'https://ibnux.github.io/data-indonesia/kabupaten/' + data + '.json'
            axios.get(url)
                .then((response) => this.getKabupaten(response))
            
                this.alamat.kabupaten = ''
                this.alamat.kecamatan = ''
                this.alamat.desa = ''    
            
        },
        getKabupaten(data) {
            this.kabupaten = data
        },
        dataKecamatan(data) {
            const url = 'https://ibnux.github.io/data-indonesia/kecamatan/' + data + '.json'
            axios.get(url)
                .then((response) => this.getKecamatan(response))

                this.alamat.kecamatan = ''
                this.alamat.desa = ''  
                
        },
        getKecamatan(data) {
            this.kecamatan = data
        },
        dataDesa(data) {
            const url = 'https://ibnux.github.io/data-indonesia/kelurahan/' + data + '.json'
            axios.get(url)
                .then((response) => this.getDesa(response))

                this.alamat.desa = ''  
                
        },
        getDesa(data) {
            this.desa = data
        },
    },
    mounted() {
        axios.get('https://ibnux.github.io/data-indonesia/provinsi.json')
            .then((response) => this.dataProvinsi(response))

    },
}

</script>