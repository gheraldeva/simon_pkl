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
                            placeholder="Masukkan Nama..." v-model="Gurustate.dataguru.nama" />
                    </div>
                    <p v-if="this.v$Guru.dataguru.nama.$error" class="pl-[25%] text-red-600">
                        {{ this.v$Guru.dataguru.nama.$errors[0].$message }}
                    </p>
                    <div class="my-3 flex">
                        <label for="nip"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">NIP :
                        </label>
                        <input type="number" id="nip"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan NIP..." v-model="Gurustate.dataguru.nip" />
                    </div>
                    <p v-if="this.v$Guru.dataguru.nip.$error" class="pl-[25%] text-red-600">
                        {{ this.v$Guru.dataguru.nip.$errors[0].$message }}
                    </p>
                    <div class="my-3 flex">
                        <label for="agama"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Agama :
                        </label>
                        <input type="text" id="agama"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan Agama..." v-model="Gurustate.dataguru.agama" />
                    </div>
                    <p v-if="this.v$Guru.dataguru.agama.$error" class="pl-[25%] text-red-600">
                        {{ this.v$Guru.dataguru.agama.$errors[0].$message }}
                    </p>
                    <div class="my-3 flex">
                        <label for="tempat_lahir"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Tempat Lahir :
                        </label>
                        <input type="text" id="tempat_lahir"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan Tempat Lahir..." v-model="Gurustate.dataguru.tempat_lahir" />
                    </div>
                    <p v-if="this.v$Guru.dataguru.tempat_lahir.$error" class="pl-[25%] text-red-600">
                        {{ this.v$Guru.dataguru.tempat_lahir.$errors[0].$message }}
                    </p>
                    <div class="my-3 flex">
                        <label for="tanggal_lahir"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Tanggal Lahir :
                        </label>
                        <input type="text" id="tanggal_lahir"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan Tanggal Lahir..." v-model="Gurustate.dataguru.tanggal_lahir" />
                    </div>
                    <p v-if="this.v$Guru.dataguru.tanggal_lahir.$error" class="pl-[25%] text-red-600">
                        {{ this.v$Guru.dataguru.tanggal_lahir.$errors[0].$message }}
                    </p>
                    <div class="my-3 flex">
                        <label for="password"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Password :
                        </label>
                        <input type="password" id="password"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan Password..." v-model="Gurustate.dataguru.password" />
                    </div>
                    <p v-if="this.v$Guru.dataguru.password.$error" class="pl-[25%] text-red-600">
                        {{ this.v$Guru.dataguru.password.$errors[0].$message }}
                    </p>
                    <div class="my-3 flex">
                        <label for="notelp"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">No. Telepon :
                        </label>
                        <input type="text" id="notelp"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan No. Telepon" v-model="Gurustate.dataguru.no_telepon" />

                    </div>
                    <p v-if="this.v$Guru.dataguru.no_telepon.$error" class="pl-[25%] text-red-600">
                        {{ this.v$Guru.dataguru.no_telepon.$errors[0].$message }}
                    </p>
                    <div class="my-3 flex ">
                        <label for="jenis-kelamin"
                            class="w-[21%] text-right my-auto pl-5 font-semibold text-lg text-nowrap">Jenis
                            Kelamin :
                        </label>
                        <div class="pl-5 flex gap-5 items-center">
                            <div class="flex items-center gap-2">
                                <input id="jenis-kelamin" type="radio" value="laki"
                                    v-model="Gurustate.dataguru.jenis_kelamin" name="jenis-kelamin"
                                    class="w-4 h-4 text-blue-600 p-2.5 bg-gray-100 border-gray-300 ">
                                <label for="jenis-kelamin"
                                    class=" text-lg font-semibold cursor-pointer">Laki-Laki</label>
                            </div>
                            <div class="flex items-center gap-2">
                                <input id="jenis-kelamin-2" type="radio" value="perempuan"
                                    v-model="Gurustate.dataguru.jenis_kelamin" name="jenis-kelamin"
                                    class="w-4 h-4 text-blue-600 p-2.5 bg-gray-100 border-gray-300 ">
                                <label for="jenis-kelamin-2"
                                    class=" text-lg font-semibold cursor-pointer">Perempuan</label>
                            </div>
                        </div>
                    </div>
                    <p v-if="this.v$Guru.dataguru.jenis_kelamin.$error" class="pl-[25%] text-red-600">
                        {{ this.v$Guru.dataguru.jenis_kelamin.$errors[0].$message }}
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
                        <p v-if="this.v$Alamat.alamat.provinsi.$error" class="pl-[25%] text-red-600">
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
                        <p v-if="this.v$Alamat.alamat.kabupaten.$error" class="pl-[25%] text-red-600">
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
                        <p v-if="this.v$Alamat.alamat.kecamatan.$error" class="pl-[25%] text-red-600">
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
                        <p v-if="this.v$Alamat.alamat.desa.$error" class="pl-[25%] text-red-600">
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
                    <p v-if="this.v$Alamat.alamat.detail_tempat.$error" class="pl-[25%] text-red-600">
                        {{ this.v$Alamat.alamat.detail_tempat.$errors[0].$message }}
                    </p>
                    <div class="flex gap-3 absolute right-10 -bottom-10">
                        <router-link to="/dataguru"
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
        const Gurustate = reactive({
            dataguru: {
                nama: '',
                nip: '',
                jenis_kelamin: '',
                agama: '',
                tempat_lahir: '',
                tanggal_lahir: '',                
                password: '',
                no_telepon: '',
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

        const Gururules = computed(() => {
            return {
                dataguru: {
                    nama: { required : helpers.withMessage('Data Tidak Boleh Kosong',required) },
                    nip: { required : helpers.withMessage('Data Tidak Boleh Kosong',required), numeric,
                            maxLength : helpers.withMessage('NIS Tidak Boleh Lebih dari 9 Digit',maxLength(9)) },
                    jenis_kelamin: { required : helpers.withMessage('Data Tidak Boleh Kosong',required) },
                    agama: { required : helpers.withMessage('Data Tidak Boleh Kosong',required) },
                    tempat_lahir: {required : helpers.withMessage('Data Tidak Boleh Kosong',required)},
                    tanggal_lahir: {required : helpers.withMessage('Data Tidak Boleh Kosong',required)},
                    password: {
                        required : helpers.withMessage('Data Tidak Boleh Kosong',required),
                        minLength: minLength(8),
                        containNumber: helpers.withMessage('Password Harus Mengandung Angka', containNumber),
                        containALphabet: helpers.withMessage('Password Harus Mengandung huruf', containALphabet)
                    },
                    no_telepon: { required : helpers.withMessage('Data Tidak Boleh Kosong',required), numeric, minLength: minLength(12), maxLength: maxLength(12) },

                }
            }
        })
        const alamatRules = computed(() => {
            return {
                alamat: {
                    detail_tempat: { required : helpers.withMessage('Data Tidak Boleh Kosong',required) },
                    provinsi: { required : helpers.withMessage('Data Tidak Boleh Kosong',required) },
                    kabupaten: { required : helpers.withMessage('Data Tidak Boleh Kosong',required) },
                    kecamatan: { required : helpers.withMessage('Data Tidak Boleh Kosong',required) },
                    desa: { required : helpers.withMessage('Data Tidak Boleh Kosong',required) }
                }
            }
        })

        const v$Guru = useValidate(Gururules, Gurustate)
        const v$Alamat = useValidate(alamatRules, alamatState)
        return {
            Gurustate,
            alamatState,
            v$Guru,
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
            dataguru: {
                nama: '',
                nip: '',
                jenis_kelamin: '',
                agama: '',
                tempat_lahir: '',
                tanggal_lahir: '',
                password: '',
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
            this.v$Guru.$validate()
            this.v$Alamat.$validate()
            if (!this.v$Guru.$error) {
                this.alamatState.alamat.provinsi = this.alamatState.alamat.provinsi.nama
                this.alamatState.alamat.kabupaten = this.alamatState.alamat.kabupaten.nama
                this.alamatState.alamat.kecamatan = this.alamatState.alamat.kecamatan.nama

                axios({
                    method:'post',
                    url:'http://localhost:2008/admin/addGuruPembimbing',
                    data:{
                        guru : this.Gurustate.dataguru,
                        alamat : this.alamatState.alamat
                    },
                    withCredentials:true
                }).then((r) => {
                    console.log(r);
                    
                    this.$router.push({ path: "/dataguru" });
                    this.$toast.success("Sukses Ditambahkan", {
                        type: "success",
                        position: "top-right",
                        duration: 1300,
                        dismissable: true,
                    });
                })
                .catch((err) => {
                    console.log(err.response.data.msg)
                    this.$toast.error(`${err.response.data.msg}`.toUpperCase(), {
                        type: "error",
                        position: "top-right",
                        duration: 3000,
                        dismissable: true,
                    });
                })
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

            this.dataguru.alamat.kabupaten = ''
            this.dataguru.alamat.kecamatan = ''
            this.dataguru.alamat.desa = ''

        },
        getKabupaten(data) {
            this.kabupaten = data
        },
        dataKecamatan(data) {
            const url = 'https://ibnux.github.io/data-indonesia/kecamatan/' + data + '.json'
            axios.get(url)
                .then((response) => this.getKecamatan(response))

            this.dataguru.alamat.kecamatan = ''
            this.dataguru.alamat.desa = ''

        },
        getKecamatan(data) {
            this.kecamatan = data
        },
        dataDesa(data) {
            const url = 'https://ibnux.github.io/data-indonesia/kelurahan/' + data + '.json'
            axios.get(url)
                .then((response) => this.getDesa(response))

            this.dataguru.alamat.desa = ''

        },
        getDesa(data) {
            this.desa = data
        },
        getJurusan(data) {
            this.jurusan = data
        },
        dataKelas() {
            axios.get(`http://localhost:2008/admin//findKelasFilter?id_jurusan=${this.Gurustate.dataguru.id_jurusan}`,{withCredentials:true})
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
        axios.get('http://localhost:2008/admin/findAllJurusan',{withCredentials:true})
            .then((response) => this.getJurusan(response.data))
    },
}

</script>