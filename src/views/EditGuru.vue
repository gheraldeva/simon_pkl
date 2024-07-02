<template>
    <div class="bg-bgcolor overflow-x-clip font-Montserrat">
        <Navbar />
        <div class="flex">
            <SideBar />
            <Banner>Edit Data Guru Pembimbing</Banner>
            <div class="flex flex-col min-w-[75vw] mt-52 mb-10 mx-10 ml-80 bg-white shadow-md px-8 pt-8 pb-18 relative">
                <h1 class="font-semibold text-xl pl-5 mb-5">Tambah Data</h1>
                <hr class="border-t-2" />
                <form action="" v-on:submit.prevent class="mt-5 pr-20 relative">
                    <div class="my-3 flex">
                        <label for="nama"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Nama Guru
                            :
                        </label>
                        <input type="text" id="nama"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan Nama Guru..."
                            v-model="Gurustate.dataguru.nama" />
                    </div>
                    <p v-if="this.v$Guru.dataguru.nama.$error" class="pl-[25%]">
                        {{
                            this.v$Guru.dataguru.nama.$errors[0].$message
                        }}
                    </p>
                    <div class="my-3 flex">
                        <label for="notelp"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">No. Telepon :
                        </label>
                        <input type="text" id="notelp"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan No. Telepon" v-model="Gurustate.dataguru.no_telepon" />
                    </div>
                    <p v-if="this.v$Guru.dataguru.no_telepon.$error" class="pl-[25%]">
                        {{ this.v$Guru.dataguru.no_telepon.$errors[0].$message }}
                    </p>
                    <div class="my-3 flex">
                        <label for="nip"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">NIP :
                        </label>
                        <input type="text" id="nip"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan NIP..." v-model="Gurustate.dataguru.nip" />
                    </div>
                    <p v-if="this.v$Guru.dataguru.nip.$error" class="pl-[25%]">
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
                    <p v-if="this.v$Guru.dataguru.agama.$error" class="pl-[25%]">
                        {{ this.v$Guru.dataguru.agama.$errors[0].$message }}
                    </p>
                    <div class="my-3 flex">
                        <label for="tanggal_lahir"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Tanggal Lahir :
                        </label>
                        <input type="text" id="tanggal_lahir"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan Tanggal Lahir..." v-model="Gurustate.dataguru.tanggal_lahir" />
                    </div>
                    <p v-if="this.v$Guru.dataguru.tanggal_lahir.$error" class="pl-[25%]">
                        {{ this.v$Guru.dataguru.tanggal_lahir.$errors[0].$message }}
                    </p>
                    <div class="my-3 flex">
                        <label for="tempat_lahir"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Tempat Lahir :
                        </label>
                        <input type="text" id="tempat_lahir"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan Tempat Lahir..." v-model="Gurustate.dataguru.tempat_lahir" />
                    </div>
                    <p v-if="this.v$Guru.dataguru.tempat_lahir.$error" class="pl-[25%]">
                        {{ this.v$Guru.dataguru.tempat_lahir.$errors[0].$message }}
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
                    <p v-if="this.v$Guru.dataguru.jenis_kelamin.$error" class="pl-[25%]">
                        {{ this.v$Guru.dataguru.jenis_kelamin.$errors[0].$message }}
                    </p>
                    <h3 class="text-lg font-semibold w-[21%] text-right">Alamat : </h3>
                    <div class="flex flex-row gap-10 w-[100%] my-2">
                        <p class="w-[21%] text-right font-medium text-lg text-nowrap">Provinsi : </p>
                        <p class="w-[68%] text-lg font-bold">{{ alamatState.alamat.provinsi }}</p>
                    </div>
                    <div class="flex flex-row gap-10 w-[100%] my-2">
                        <p class="w-[21%] text-right font-medium text-lg text-nowrap">Kabupaten : </p>
                        <p class="w-[68%] text-lg font-bold">{{ alamatState.alamat.kabupaten }}</p>
                    </div>
                    <div class="flex flex-row gap-10 w-[100%] my-2">
                        <p class="w-[21%] text-right font-medium text-lg text-nowrap">Kecamatan : </p>
                        <p class="w-[68%] text-lg font-bold">{{ alamatState.alamat.kecamatan }}</p>
                    </div>
                    <div class="flex flex-row gap-10 w-[100%] my-2">
                        <p class="w-[21%] text-right font-medium text-lg text-nowrap">Desa : </p>
                        <p class="w-[68%] text-lg font-bold">{{ alamatState.alamat.desa }}</p>
                    </div>
                    <div class="flex flex-row gap-10 w-[100%] my-2">
                        <p class="w-[21%] text-right font-medium text-lg text-nowrap">Detail Tempat : </p>
                        <p class="w-[68%] text-lg font-bold">{{ alamatState.alamat.detail_tempat }}</p>
                    </div>
                    <button
                            class="text-white bg-[#38A3F2] ml-[25%] hover:bg-blue-600 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2 text-center"
                            @click="editAlamat">
                            Edit Alamat
                        </button>
                    <div class="flex gap-3 absolute right-10 -bottom-10">
                        <router-link to="/dataguru"
                            class="bg-white text-[#38A3FF] border p-2 rounded-md border-[#38A3FF] hover:bg-[#38A3FF] hover:text-white">Batalkan</router-link>
                        <button type="submit"
                            class="text-white bg-[#38A3FF] hover:bg-blue-600 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2 text-center"
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
import useValidate from "@vuelidate/core";
import {
    required,
    numeric,
    minLength,
    maxLength,
    helpers,
} from "@vuelidate/validators";
import { reactive, computed } from "vue";

export default {
    name: "tambahdataguru",
    components: { Navbar, SideBar, Banner },
    setup() {
        const Gurustate = reactive({
            dataguru: {
                nama: '',
                no_telepon: '',
                nip: '',
                agama: '',
                tanggal_lahir: '',
                tempat_lahir: '',
                jenis_kelamin: '',
            },
        });
        const alamatState = reactive({
            alamat: {
                detail_tempat: '',
                provinsi: '',
                kabupaten: '',
                kecamatan: '',
                desa: '',
                negara: "Indonesia",
            },
        });

        const Siswarules = computed(() => {
            return {
                dataguru: {
                    nama: { required },
                    nip: { required,numeric },
                    tanggal_lahir: {required},
                    tempat_lahir: {required},
                    jenis_kelamin: {required},
                    no_telepon: {
                        required,
                        numeric,
                        minLength: minLength(12),
                        maxLength: maxLength(12),
                    },
                    agama: {required},
                },
            };
        });
        const alamatRules = computed(() => {
            return {
                alamat: {
                    detail_tempat: { required },
                    provinsi: { required },
                    kabupaten: { required },
                    kecamatan: { required },
                    desa: { required },
                },
            };
        });

        const v$Guru = useValidate(Siswarules, Gurustate);
        const v$Alamat = useValidate(alamatRules, alamatState);
        return {
            Gurustate,
            alamatState,
            v$Guru,
            v$Alamat,
        };
    },
    methods: {
        setDudi(data) {
            this.Gurustate.dataguru.nama = data.nama
            this.Gurustate.dataguru.no_telepon = data.no_telepon
            this.Gurustate.dataguru.nip = data.nip
            this.Gurustate.dataguru.agama = data.agama
            this.Gurustate.dataguru.tanggal_lahir = data.tanggal_lahir
            this.Gurustate.dataguru.tempat_lahir = data.tempat_lahir
            this.Gurustate.dataguru.jenis_kelamin = data.jenis_kelamin
            this.alamatState.alamat = data.alamat
        },
        simpanData() {
            console.log(this.v$Guru.$error);
            this.v$Guru.$validate();
            if (!this.v$Guru.$error) {
                console.log("k");
                axios({
                    method: "put",
                    url: ("http://localhost:2008/admin/updateGuruPembimbing/" + this.$route.params.id),
                    data: this.Gurustate.dataguru,
                    withCredentials:true
                }).then((r) => {
                    this.$router.push({ path: '/dataguru' })
                    this.$toast.success("Sukses Di Edit", {
                        type: "success",
                        position: "top-right",
                        duration: 3000,
                        dismissable: true,
                    });
                }).catch((err)=>{
                    this.$toast.error(err.response.msg, {
                        type: "error",
                        position: "top-right",
                        duration: 3000,
                        dismissable: true,
                    });
                })
            } else {
            }
        },
        editAlamat(){
            window.location.href = `/editalamatguru/${this.$route.params.id}`
        },
        dataProvinsi(data) {
            this.provinsi = data;
        },
        dataKabupaten(data) {
            const url =
                "https://ibnux.github.io/data-indonesia/kabupaten/" + data + ".json";
            axios.get(url).then((response) => this.getKabupaten(response));

            // this.dataguru.alamat.kabupaten = '';
            // this.dataguru.alamat.kecamatan = '';
            // this.dataguru.alamat.desa = '';
        },
        getKabupaten(data) {
            this.kabupaten = data;
        },
        dataKecamatan(data) {
            const url =
                "https://ibnux.github.io/data-indonesia/kecamatan/" + data + ".json";
            axios.get(url).then((response) => this.getKecamatan(response));

        },
        getKecamatan(data) {
            this.kecamatan = data;
        },
        dataDesa(data) {
            const url =
                "https://ibnux.github.io/data-indonesia/kelurahan/" + data + ".json";
            axios.get(url).then((response) => this.getDesa(response));

        },
        getDesa(data) {
            this.desa = data;
        },
        getDudiPembimbing(data) {
            this.DudiPembimbing = data;
        },
    },
    mounted() {
        axios
            .get("https://ibnux.github.io/data-indonesia/provinsi.json")
            .then((response) => this.dataProvinsi(response));
        axios.get('http://localhost:2008/admin/findGuruPembimbing/' + this.$route.params.id , {withCredentials:true})
            .then((r) => this.setDudi(r.data.data))

    },
};
</script>
