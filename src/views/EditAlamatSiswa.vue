<template>
    <div class="bg-bgcolor overflow-x-clip font-Montserrat">
        <Navbar />
        <div class="flex">
            <SideBar />
            <Banner>Tambah Data Guru</Banner>
            <div class="flex flex-col min-w-[75vw] mt-52 mb-10 mx-10 ml-80 bg-white shadow-md px-8 pt-8 pb-18 relative">
                <h1 class="font-semibold text-xl pl-5 mb-5">Tambah Data</h1>
                <hr class=" border-t-2">
                <form action="" v-on:submit.prevent class="mt-5 pr-20 relative">

                    <div class="my-3 flex flex-col gap-2 w-[100%] content-end">
                        <div class="flex flex-row justify-between items-center">
                            <label for="provinsi_select"
                                class="w-[21%] text-right font-semibold text-lg text-nowrap">Provinsi :
                            </label>
                            <select name="provinsi" id="provinsi_select" v-model="alamatState.alamat.provinsi"
                                @change="dataKabupaten(alamatState.alamat.provinsi.id)"
                                class="w-[76%] p-2 border-2 rounded-lg cursor-pointer">
                                <option value="" disabled>Pilih Provinsi</option>
                                <option :value="provinsi" v-for="(provinsi, index) in provinsi.data" :key="index">
                                    {{ provinsi.nama }}</option>
                            </select>
                        </div>
                        <p v-if="this.v$Alamat.alamat.provinsi.$error" class="pl-[25%]">
                            {{ this.v$Alamat.alamat.provinsi.$errors[0].$message }}
                        </p>
                        <div class="flex flex-row justify-between items-center">
                            <label for="kabupaten_select"
                                class="mr-5 text-right w-[21%] font-semibold text-lg text-nowrap">Kabupaten :
                            </label>
                            <select name="kabupaten" id="kabupaten_select" v-model="alamatState.alamat.kabupaten"
                                @change="dataKecamatan(alamatState.alamat.kabupaten.id)"
                                class="w-[76%] p-2 border-2 rounded-lg cursor-pointer">
                                <option value="" disabled>Pilih Kabupaten</option>
                                <option :value="kabupaten" v-for="(kabupaten, index) in kabupaten.data" :key="index">
                                    {{ kabupaten.nama }}</option>
                            </select>
                        </div>
                        <p v-if="this.v$Alamat.alamat.kabupaten.$error" class="pl-[25%]">
                            {{ this.v$Alamat.alamat.kabupaten.$errors[0].$message }}
                        </p>
                        <div class="flex flex-row justify-between items-center">
                            <label for="kecamatan_select"
                                class="mr-5 text-right w-[21%] font-semibold text-lg text-nowrap">Kecamatan :
                            </label>
                            <select name="kecamatan" id="kecamatan_select" v-model="alamatState.alamat.kecamatan"
                                @change="dataDesa(alamatState.alamat.kecamatan.id)"
                                class="w-[76%] p-2 border-2 rounded-lg cursor-pointer">
                                <option value="" disabled>Pilih Kecamatan</option>
                                <option :value="kecamatan" v-for="(kecamatan, index) in kecamatan.data" :key="index">
                                    {{ kecamatan.nama }}</option>
                            </select>
                        </div>
                        <p v-if="this.v$Alamat.alamat.kecamatan.$error" class="pl-[25%]">
                            {{ this.v$Alamat.alamat.kecamatan.$errors[0].$message }}
                        </p>
                        <div class="flex flex-row justify-between items-center">
                            <label for="desa_select"
                                class="mr-5 text-right w-[21%] font-semibold text-lg text-nowrap">Desa :
                            </label>
                            <select name="desa" id="desa_select" v-model="alamatState.alamat.desa"
                                class="w-[76%] p-2 border-2 rounded-lg cursor-pointer">
                                <option value="" disabled>Pilih Desa</option>
                                <option :value="desa.nama" v-for="(desa, index) in desa.data" :key="index">{{ desa.nama }}
                                </option>
                            </select>
                        </div>
                        <p v-if="this.v$Alamat.alamat.desa.$error" class="pl-[25%]">
                            {{ this.v$Alamat.alamat.desa.$errors[0].$message }}
                        </p>
                    </div>
                    <div class="my-3 flex">
                        <label for="detailTempat"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Detail Tempat
                            :
                        </label>
                        <input type="text" id="detailTempat"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan Detail Tempat..." v-model="alamatState.alamat.detail_tempat" />
                    </div>
                    <p v-if="this.v$Alamat.alamat.detail_tempat.$error" class="pl-[25%]">
                        {{ this.v$Alamat.alamat.detail_tempat.$errors[0].$message }}
                    </p>
                    <div class="flex gap-3 absolute right-10 -bottom-10">
                        <router-link :to="/editsiswa/ + this.$route.params.id"
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
import Navbar from "@/components/Navbar.vue";
import SideBar from "@/components/SideBar.vue";
import Banner from "@/components/Banner.vue";
import axios from "axios";
import useValidate from '@vuelidate/core'
import { required, numeric, minLength, maxLength, helpers } from '@vuelidate/validators'
import { reactive, computed, toRef } from "vue";

export default {
    name: "tambahdataguru",
    components: { Navbar, SideBar, Banner },
    setup() {
        const alamatState = reactive({
            alamat: {
                detail_tempat: '',
                provinsi: '',
                kabupaten: '',
                kecamatan: '',
                desa: '',
                negara: 'Indonesia'
            }
        })
        const alamatRules = computed(() => {
            return {
                alamat: {
                    detail_tempat: { required },
                    provinsi: { required },
                    kabupaten: { required },
                    kecamatan: { required },
                    desa: { required }
                }
            }
        })
        const v$Alamat = useValidate(alamatRules, alamatState)
        return {
            alamatState,
            v$Alamat
        }
    },
    data() {
        return {
            provinsi: [],
            kabupaten: [],
            kecamatan: [],
            desa: [],
            jurusan: [],
            kelas: [],
            alamat: {
                detail_tempat: '',
                provinsi: '',
                kabupaten: '',
                kecamatan: '',
                desa: '',
                negara: 'Indonesia'
            }

        }
    },
    methods: {
        simpanData() {
            this.v$Alamat.$validate()
            if (!this.v$Alamat.$error) {
                this.alamatState.alamat.provinsi = this.alamatState.alamat.provinsi.nama
                this.alamatState.alamat.kabupaten = this.alamatState.alamat.kabupaten.nama
                this.alamatState.alamat.kecamatan = this.alamatState.alamat.kecamatan.nama
                axios({
                    method: "PUT",
                    url: ("http://localhost:2008/admin/updateSiswa/alamat/" + this.$route.params.id),
                    data:this.alamatState.alamat
                }).then((r)=>console.log(r))
                window.location.href = `/editsiswa/${this.$route.params.id}`
            } else {
                
            }
        },
        dataProvinsi(data) {
            this.provinsi = data
        },
        dataKabupaten(data) {
            const url = 'https://ibnux.github.io/data-indonesia/kabupaten/' + data + '.json'
            axios.get(url)
                .then((response) => this.getKabupaten(response))


        },
        getKabupaten(data) {
            this.kabupaten = data
        },
        dataKecamatan(data) {
            const url = 'https://ibnux.github.io/data-indonesia/kecamatan/' + data + '.json'
            axios.get(url)
                .then((response) => this.getKecamatan(response))

        },
        getKecamatan(data) {
            this.kecamatan = data
        },
        dataDesa(data) {
            const url = 'https://ibnux.github.io/data-indonesia/kelurahan/' + data + '.json'
            axios.get(url)
                .then((response) => this.getDesa(response))

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