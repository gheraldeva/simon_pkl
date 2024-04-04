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
                            placeholder="Masukkan Nama..." v-model="Siswastate.datasiswa.nama" />
                    </div>
                    <p v-if="this.v$Siswa.datasiswa.nama.$error" class="pl-[25%]">
                        {{ this.v$Siswa.datasiswa.nama.$errors[0].$message }}
                    </p>
                    <div class="my-3 flex">
                        <label for="nis"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">NIS :
                        </label>
                        <input type="number" id="nis"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan NIS..." v-model="Siswastate.datasiswa.nis" />
                    </div>
                    <p v-if="this.v$Siswa.datasiswa.nis.$error" class="pl-[25%]">
                        {{ this.v$Siswa.datasiswa.nis.$errors[0].$message }}
                    </p>
                    <!-- <div class="my-3 flex">
                        <label for="agama"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Agama :
                        </label>
                        <input type="text" id="agama"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan Agama..." v-model="Siswastate.datasiswa.agama" />
                    </div>
                    <p v-if="this.v$Siswa.datasiswa.agama.$error" class="pl-[25%]">
                        {{ this.v$Siswa.datasiswa.agama.$errors[0].$message }}
                    </p> -->
                    <div class="my-3 flex">
                        <label for="password"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Password :
                        </label>
                        <input type="password" id="password"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan Password..." v-model="Siswastate.datasiswa.password" />
                    </div>
                    <p v-if="this.v$Siswa.datasiswa.password.$error" class="pl-[25%]">
                        {{ this.v$Siswa.datasiswa.password.$errors[0].$message }}
                    </p>
                    <div class="my-3 flex flex-row justify-between items-center">
                        <label for="jurusan_select" class="w-[21%] text-right font-semibold text-lg text-nowrap">Jurusan
                            :
                        </label>
                        <select name="jurusan" id="jurusan_select" v-model="Siswastate.datasiswa.id_jurusan"
                            @change="dataKelas(datasiswa.id_jurusan)"
                            class="w-[76%] p-2 border-2 rounded-lg cursor-pointer">
                            <option value="" disabled>Pilih Jurusan</option>
                            <option :value="jurusan.id" v-for="(jurusan, index) in jurusan.data" :key="index">
                                {{ jurusan.nama }}</option>
                        </select>
                    </div>
                    <p v-if="this.v$Siswa.datasiswa.id_jurusan.$error" class="pl-[25%]">
                        {{ this.v$Siswa.datasiswa.id_jurusan.$errors[0].$message }}
                    </p>
                    <div class=" my-3 flex flex-row justify-between items-center">
                        <label for="kelas_select" class="w-[21%] text-right font-semibold text-lg text-nowrap">Kelas :
                        </label>
                        <select name="kelas" id="kelas_select" v-model="Siswastate.datasiswa.id_kelas"
                            class="w-[76%] p-2 border-2 rounded-lg cursor-pointer">
                            <option value="" disabled>Pilih Kelas</option>
                            <option :value="kelas.id" v-for="(kelas, index) in kelas.data" :key="index">{{ kelas.nama }}
                            </option>
                        </select>
                    </div>
                    <p v-if="this.v$Siswa.datasiswa.id_jurusan.$error" class="pl-[25%]">
                        {{ this.v$Siswa.datasiswa.id_jurusan.$errors[0].$message }}
                    </p>
                    <div class="my-3 flex">
                        <label for="notelp"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">No. Telepon :
                        </label>
                        <input type="text" id="notelp"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan No. Telepon" v-model="Siswastate.datasiswa.no_telepon" />

                    </div>
                    <p v-if="this.v$Siswa.datasiswa.no_telepon.$error" class="pl-[25%]">
                        {{ this.v$Siswa.datasiswa.no_telepon.$errors[0].$message }}
                    </p>
                    <div class="my-3 flex ">
                        <label for="jenis-kelamin"
                            class="w-[21%] text-right my-auto pl-5 font-semibold text-lg text-nowrap">Jenis
                            Kelamin :
                        </label>
                        <div class="pl-5 flex gap-5 items-center">
                            <div class="flex items-center gap-2">
                                <input id="jenis-kelamin" type="radio" value="laki"
                                    v-model="Siswastate.datasiswa.jenis_kelamin" name="jenis-kelamin"
                                    class="w-4 h-4 text-blue-600 p-2.5 bg-gray-100 border-gray-300 ">
                                <label for="jenis-kelamin"
                                    class=" text-lg font-semibold cursor-pointer">Laki-Laki</label>
                            </div>
                            <div class="flex items-center gap-2">
                                <input id="jenis-kelamin-2" type="radio" value="perempuan"
                                    v-model="Siswastate.datasiswa.jenis_kelamin" name="jenis-kelamin"
                                    class="w-4 h-4 text-blue-600 p-2.5 bg-gray-100 border-gray-300 ">
                                <label for="jenis-kelamin-2"
                                    class=" text-lg font-semibold cursor-pointer">Perempuan</label>
                            </div>
                        </div>
                    </div>
                    <p v-if="this.v$Siswa.datasiswa.jenis_kelamin.$error" class="pl-[25%]">
                        {{ this.v$Siswa.datasiswa.jenis_kelamin.$errors[0].$message }}
                    </p>



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

                    <div class=" my-3 flex flex-row justify-between items-center">
                        <label for="kelas_select" class="w-[21%] text-right font-semibold text-lg text-nowrap">Guru
                            Pembimbing :
                        </label>
                        <select name="kelas" id="guru_select" v-model="Siswastate.datasiswa.id_guru_pembimbing"
                            class="w-[76%] p-2 border-2 rounded-lg cursor-pointer">
                            <option value="" disabled>Pilih Guru Pembimbing</option>
                            <option :value="guruPembimbing.id" v-for="(guruPembimbing, index) in guruPembimbing.data"
                                :key="index">{{ guruPembimbing.nama }}
                            </option>
                        </select>
                    </div>
                    <p v-if="this.v$Siswa.datasiswa.id_guru_pembimbing.$error"class="pl-[25%]">
                        {{ this.v$Siswa.datasiswa.id_guru_pembimbing.$errors[0].$message }}
                    </p>
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
import Navbar from "@/components/Navbar.vue";
import SideBar from "@/components/SideBar.vue";
import Banner from "@/components/Banner.vue";
import axios from "axios";
import useValidate from '@vuelidate/core'
import { required, numeric, minLength, maxLength, helpers } from '@vuelidate/validators'
import { reactive, computed, toRef } from "vue";

export default {
    name: "tambahdatasiswa",
    components: { Navbar, SideBar, Banner },
    setup() {
        const Siswastate = reactive({
            datasiswa: {
                nama: '',
                nis: '',
                jenis_kelamin: '',
                // agama: '',
                password: '',
                id_jurusan: '',
                id_kelas: '',
                no_telepon: '',
                id_guru_pembimbing: '',
            }

        })
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

        const containNumber = (value) => value.includes(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)
        const containALphabet = (value) => value.includes('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z')

        const Siswarules = computed(() => {
            return {
                datasiswa: {
                    nama: { required },
                    nis: { required, numeric },
                    jenis_kelamin: { required },
                    // agama: { required },
                    password: {
                        required,
                        minLength: minLength(8),
                        containNumber: helpers.withMessage('Password Harus Mengandung Angka', containNumber),
                        containALphabet: helpers.withMessage('Password Harus Mengandung huruf', containALphabet)
                    },
                    id_jurusan: { required },
                    id_kelas: { required },
                    no_telepon: { required, numeric, minLength: minLength(12), maxLength: maxLength(12) },
                    id_guru_pembimbing: { required },

                }
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

        const v$Siswa = useValidate(Siswarules, Siswastate)
        const v$Alamat = useValidate(alamatRules, alamatState)
        return {
            Siswastate,
            alamatState,
            v$Siswa,
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
            guruPembimbing: [],
            datasiswa: {
                nama: '',
                nis: '',
                jenis_kelamin: '',
                // agama: '',
                password: '',
                id_jurusan: '',
                id_kelas: '',
                no_telepon: '',
                id_guru_pembimbing: '',
                alamat: {
                    detail_tempat: '',
                    provinsi: '',
                    kabupaten: '',
                    kecamatan: '',
                    desa: '',
                    negara: 'Indonesia'
                }
            }

        }
    },
    methods: {
        simpanData() {
            this.v$Siswa.$validate()
            this.v$Alamat.$validate()
            if (!this.v$Siswa.$error) {
                this.alamatState.alamat.provinsi = this.alamatState.alamat.provinsi.nama
                this.alamatState.alamat.kabupaten = this.alamatState.alamat.kabupaten.nama
                this.alamatState.alamat.kecamatan = this.alamatState.alamat.kecamatan.nama

                axios({
                    method:'post',
                    url:'http://localhost:2008/admin/addSiswa',
                    data:{
                        siswa : this.Siswastate.datasiswa,
                        alamat : this.alamatState.alamat
                    }
                }).then((r) => console.log(r))
                window.location.href = '/datasiswa'
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

            this.datasiswa.alamat.kabupaten = ''
            this.datasiswa.alamat.kecamatan = ''
            this.datasiswa.alamat.desa = ''

        },
        getKabupaten(data) {
            this.kabupaten = data
        },
        dataKecamatan(data) {
            const url = 'https://ibnux.github.io/data-indonesia/kecamatan/' + data + '.json'
            axios.get(url)
                .then((response) => this.getKecamatan(response))

            this.datasiswa.alamat.kecamatan = ''
            this.datasiswa.alamat.desa = ''

        },
        getKecamatan(data) {
            this.kecamatan = data
        },
        dataDesa(data) {
            const url = 'https://ibnux.github.io/data-indonesia/kelurahan/' + data + '.json'
            axios.get(url)
                .then((response) => this.getDesa(response))

            this.datasiswa.alamat.desa = ''

        },
        getDesa(data) {
            this.desa = data
        },
        getJurusan(data) {
            this.jurusan = data
        },
        dataKelas() {
            axios.get(`http://localhost:2008/admin//findKelasFilter?id_jurusan=${this.Siswastate.datasiswa.id_jurusan}`)
                .then((response) => this.getKelas(response.data))
        },
        getKelas(data) {
            this.kelas = data
        },
        getGuruPembimbing(data) {
            this.guruPembimbing = data;
        },

    },
    mounted() {
        axios.get('https://ibnux.github.io/data-indonesia/provinsi.json')
            .then((response) => this.dataProvinsi(response))
        axios.get('http://localhost:2008/admin/findAllJurusan')
            .then((response) => this.getJurusan(response.data))
        axios.get('http://localhost:2008/admin/findAllGuruPembimbing')
            .then((response) => this.getGuruPembimbing(response.data))

    },
}

</script>