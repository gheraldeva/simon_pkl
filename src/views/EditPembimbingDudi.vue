<template>
    <div class="bg-bgcolor overflow-x-clip font-Montserrat">
        <Navbar />
        <div class="flex">
            <SideBar />
            <Banner>Edit Data Pembimbing DU/DI</Banner>
            <div class="flex flex-col min-w-[75vw] mt-52 mb-10 mx-10 ml-80 bg-white shadow-md px-8 pt-8 pb-18 relative">
                <h1 class="font-semibold text-xl pl-5 mb-5">Tambah Data</h1>
                <hr class="border-t-2" />
                <form action="" v-on:submit.prevent class="mt-5 pr-20 relative">
                    <div class="my-3 flex">
                        <label for="nama"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Nama :
                        </label>
                        <input type="text" id="nama"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan Nama Instansi Perusahaan..." v-model="Dudistate.datadudi.nama" />
                    </div>
                    <p v-if="this.v$Dudi.datadudi.nama.$error" class="pl-[25%]">
                        {{
                            this.v$Dudi.datadudi.nama.$errors[0].$message
                        }}
                    </p>
                    <div class="my-3 flex">
                        <label for="username"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Username :
                        </label>
                        <input type="text" id="username"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan Username..." v-model="Dudistate.datadudi.username" />
                    </div>
                    <p v-if="this.v$Dudi.datadudi.username.$error" class="pl-[25%]">
                        {{
                            this.v$Dudi.datadudi.username.$errors[0].$message
                        }}
                    </p>
                    <div class="my-3 flex">
                        <label for="notelp"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">No. Telepon :
                        </label>
                        <input type="text" id="notelp"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan No. Telepon" v-model="Dudistate.datadudi.no_telepon" />
                    </div>
                    <p v-if="this.v$Dudi.datadudi.no_telepon.$error" class="pl-[25%]">
                        {{ this.v$Dudi.datadudi.no_telepon.$errors[0].$message }}
                    </p>
                    <div class="my-3 flex ">
                        <label for="jenis-kelamin"
                            class="w-[21%] text-right my-auto pl-5 font-semibold text-lg text-nowrap">Jenis
                            Kelamin :
                        </label>
                        <div class="pl-5 flex gap-5 items-center">
                            <div class="flex items-center gap-2">
                                <input id="jenis-kelamin" type="radio" value="laki"
                                    v-model="Dudistate.datadudi.jenis_kelamin" name="jenis-kelamin"
                                    class="w-4 h-4 text-blue-600 p-2.5 bg-gray-100 border-gray-300 ">
                                <label for="jenis-kelamin"
                                    class=" text-lg font-semibold cursor-pointer">Laki-Laki</label>
                            </div>
                            <div class="flex items-center gap-2">
                                <input id="jenis-kelamin-2" type="radio" value="perempuan"
                                    v-model="Dudistate.datadudi.jenis_kelamin" name="jenis-kelamin"
                                    class="w-4 h-4 text-blue-600 p-2.5 bg-gray-100 border-gray-300 ">
                                <label for="jenis-kelamin-2"
                                    class=" text-lg font-semibold cursor-pointer">Perempuan</label>
                            </div>
                        </div>
                    </div>
                    <p v-if="this.v$Dudi.datadudi.jenis_kelamin.$error" class="pl-[25%]">
                        {{ this.v$Dudi.datadudi.jenis_kelamin.$errors[0].$message }}
                    </p>
                    <div class="flex flex-row justify-between items-center">
                        <label for="agama"
                            class="w-[19%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Agama :
                        </label>
                        <select name="agama" id="agama_select" v-model="Dudistate.datadudi.agama"
                            class="w-[76%] p-2 border-2 rounded-lg cursor-pointer">
                            <option value="" disabled>Pilih agama</option>
                            <option value="Islam">Islam</option>
                            <option value="Kristen Protestan">Kristen Protestan</option>
                            <option value="Kristen Katolik">Kristen Katolik</option>
                            <option value="Hindu">Hindu</option>
                            <option value="Buddha">Buddha</option>
                            <option value="Kong Hu Cu">Kong Hu Cu</option>
                        </select>
                    </div>
                    <p v-if="this.v$Dudi.datadudi.agama.$error" class="pl-[25%] text-red-600">
                        {{ this.v$Dudi.datadudi.agama.$errors[0].$message }}
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
                        <router-link to="/datapembimbingdudi"
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
    name: "tambahdatadudi",
    components: { Navbar, SideBar, Banner },
    setup() {
        const Dudistate = reactive({
            datadudi: {
                nama: '',
                username: '',
                no_telepon: '',
                jenis_kelamin: '',
                agama: '',
                deskripsi: '',
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
                datadudi: {
                    nama: { required },
                    username: { required },
                    no_telepon: {
                        required,
                        numeric,
                        minLength: minLength(12),
                        maxLength: maxLength(12),
                    },
                    jenis_kelamin: { required },
                    agama: { required },
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

        const v$Dudi = useValidate(Siswarules, Dudistate);
        const v$Alamat = useValidate(alamatRules, alamatState);
        return {
            Dudistate,
            alamatState,
            v$Dudi,
            v$Alamat,
        };
    },
    data() {
        return {
            provinsi: [],
            kabupaten: [],
            kecamatan: [],
            desa: [],
        };
    },
    methods: {
        editAlamat() {
            window.location.href = `/editalamatpembimbingdudi/${this.$route.params.id}`
        },
        setDudi(data) {
            this.Dudistate.datadudi.nama = data.nama
            this.Dudistate.datadudi.username = data.username
            this.Dudistate.datadudi.no_telepon = data.no_telepon
            this.Dudistate.datadudi.jenis_kelamin = data.jenis_kelamin
            this.Dudistate.datadudi.agama = data.agama
            this.Dudistate.datadudi.deskripsi = data.deskripsi
            this.alamatState.alamat = data.alamat
        },
        simpanData() {
            this.v$Dudi.$validate();
            this.v$Alamat.$validate();
            if (!this.v$Dudi.$error) {
                this.alamatState.alamat.provinsi =
                    this.alamatState.alamat.provinsi.nama;
                this.alamatState.alamat.kabupaten =
                    this.alamatState.alamat.kabupaten.nama;
                this.alamatState.alamat.kecamatan =
                    this.alamatState.alamat.kecamatan.nama;

                axios({
                    method: "put",
                    url: ("http://localhost:2008/admin/updatePembimbingDudi/" + this.$route.params.id),
                    data: this.Dudistate.datadudi,
                    withCredentials: true
                }).then((r) => {
                    this.$router.push({ path: '/datapembimbingdudi' })
                    this.$toast.success("Sukses Di Edit", {
                        type: "success",
                        position: "top-right",
                        duration: 3000,
                        dismissable: true,
                    })
                }).catch((err) => {
                    this.$toast.error(err.response.msg, {
                        type: "error",
                        position: "top-right",
                        duration: 3000,
                        dismissable: true,
                    })
                })

            } else {
            }
        },
        dataProvinsi(data) {
            this.provinsi = data;
        },
        dataKabupaten(data) {
            const url =
                "https://ibnux.github.io/data-indonesia/kabupaten/" + data + ".json";
            axios.get(url).then((response) => this.getKabupaten(response));

            // this.datadudi.alamat.kabupaten = '';
            // this.datadudi.alamat.kecamatan = '';
            // this.datadudi.alamat.desa = '';
        },
        getKabupaten(data) {
            this.kabupaten = data;
        },
        dataKecamatan(data) {
            const url =
                "https://ibnux.github.io/data-indonesia/kecamatan/" + data + ".json";
            axios.get(url).then((response) => this.getKecamatan(response));

            // this.datadudi.alamat.kecamatan = '';
            // this.datadudi.alamat.desa = '';
        },
        getKecamatan(data) {
            this.kecamatan = data;
        },
        dataDesa(data) {
            const url =
                "https://ibnux.github.io/data-indonesia/kelurahan/" + data + ".json";
            axios.get(url).then((response) => this.getDesa(response));

            // this.datadudi.alamat.desa = '';
        },
        getDesa(data) {
            this.desa = data;
        },
    },
    mounted() {
        axios
            .get("https://ibnux.github.io/data-indonesia/provinsi.json")
            .then((response) => this.dataProvinsi(response));
        axios.get('http://localhost:2008/admin/findPembimbingDudi/' + this.$route.params.id, { withCredentials: true })
            .then((r) => this.setDudi(r.data.data))

    },
};
</script>
