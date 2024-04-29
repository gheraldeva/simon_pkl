<template>
    <div class="bg-bgcolor overflow-x-clip font-Montserrat">
        <Navbar />
        <div class="flex">
            <SideBar />
            <Banner>Tambah Data Pembimbing Dudi</Banner>
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
                            placeholder="Masukkan Nama..." v-model="Dudistate.datadudi.nama" />
                    </div>
                    <p v-if="this.v$Dudi.datadudi.nama.$error" class="pl-[25%] text-red-600">
                        {{
                            this.v$Dudi.datadudi.nama.$errors[0].$message
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
                    <p v-if="this.v$Dudi.datadudi.no_telepon.$error" class="pl-[25%] text-red-600">
                        {{ this.v$Dudi.datadudi.no_telepon.$errors[0].$message }}
                    </p>
                    <div class="my-3 flex">
                        <label for="username"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Username :
                        </label>
                        <input type="text" id="username"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan Username..." v-model="Dudistate.datadudi.username" />
                    </div>
                    <p v-if="this.v$Dudi.datadudi.username.$error" class="pl-[25%] text-red-600">
                        {{ this.v$Dudi.datadudi.username.$errors[0].$message }}
                    </p>
                    <div class="my-3 flex">
                        <label for="password"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Password :
                        </label>
                        <input type="password" id="password"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan Password..." v-model="Dudistate.datadudi.password" />
                    </div>
                    <p v-if="this.v$Dudi.datadudi.password.$error" class="pl-[25%] text-red-600">
                        {{ this.v$Dudi.datadudi.password.$errors[0].$message }}
                    </p>
                    <!-- <div class="my-3 flex">
                        <label for="agama"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">agama :
                        </label>
                        <input type="text" id="agama"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan agama..." v-model="Dudistate.datadudi.agama" />
                    </div> -->
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
                    <p v-if="this.v$Dudi.datadudi.jenis_kelamin.$error" class="pl-[25%] text-red-600">
                        {{ this.v$Dudi.datadudi.jenis_kelamin.$errors[0].$message }}
                    </p>
                    <div class="my-3 flex flex-col gap-2 w-[100%] content-end">
                        <div class="flex flex-row justify-between items-center">
                            <label for="dudi"
                                class="w-[21%] text-right font-semibold text-lg text-nowrap">Dudi yang di Bimbing :
                            </label>
                            <select name="dudi" id="dudi" v-model="Dudistate.datadudi.id_dudi"
                                class="w-[76%] p-2 border-2 rounded-lg cursor-pointer">
                                <option value="" disabled>Pilih DU/Di</option>
                                <option :value="dudi.id" v-for="(dudi, index) in dudi" :key="index">
                                    {{ dudi.nama_instansi_perusahaan }}</option>
                            </select>
                        </div>
                        <p v-if="this.v$Alamat.alamat.provinsi.$error" class="pl-[25%] text-red-600">
                            {{ this.v$Alamat.alamat.provinsi.$errors[0].$message }}
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
                                <option :value="desa.nama" v-for="(desa, index) in desa.data" :key="index">{{ desa.nama
                                    }}
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
import { reactive, computed, toRef } from "vue";

export default {
    name: "tambahdatadudi",
    components: { Navbar, SideBar, Banner },
    setup() {
        const Dudistate = reactive({
            datadudi: {
                id_dudi : '',
                nama: '',
                no_telepon: '',
                username: '',
                password: '',
                jenis_kelamin: '',
                agama: '',
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

        // const containNumber = (value) => value.includes(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)
        const containALphabet = (value) => value.includes('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z')

        const Siswarules = computed(() => {
            return {
                datadudi: {
                    nama: { required: helpers.withMessage('Data Tidak Boleh Kosong', required) },
                    no_telepon: {
                        required: helpers.withMessage('Data Tidak Boleh Kosong', required),
                        numeric,
                        minLength: minLength(12),
                        maxLength: maxLength(12),
                    },
                    username: { required: helpers.withMessage('Data Tidak Boleh Kosong', required) },
                    password: {
                        required : helpers.withMessage('Data Tidak Boleh Kosong',required),
                        minLength: minLength(8),
                        containALphabet: helpers.withMessage('Password Harus Mengandung huruf', containALphabet)
                    },
                    jenis_kelamin: { required: helpers.withMessage('Data Tidak Boleh Kosong', required) },
                    agama: { required: helpers.withMessage('Data Tidak Boleh Kosong', required) }
                },
            };
        });
        const alamatRules = computed(() => {
            return {
                alamat: {
                    detail_tempat: { required: helpers.withMessage('Data Tidak Boleh Kosong', required) },
                    provinsi: { required: helpers.withMessage('Data Tidak Boleh Kosong', required) },
                    kabupaten: { required: helpers.withMessage('Data Tidak Boleh Kosong', required) },
                    kecamatan: { required: helpers.withMessage('Data Tidak Boleh Kosong', required) },
                    desa: { required: helpers.withMessage('Data Tidak Boleh Kosong', required) },
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
            dudi: []
        };
    },
    methods: {
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
                    method: "post",
                    url: "http://localhost:2008/admin/addPembimbingDudi",
                    data: {
                        pembimbing_dudi: this.Dudistate.datadudi,
                        alamat: this.alamatState.alamat,
                    },
                    withCredentials: true
                }).then((r) => {
                    console.log(r);

                    this.$router.push({ path: "/datapembimbingdudi" });
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
            this.provinsi = data;
        },
        dataKabupaten(data) {
            const url =
                "https://ibnux.github.io/data-indonesia/kabupaten/" + data + ".json";
            axios.get(url).then((response) => this.getKabupaten(response));
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
        setTempatDudi(data){
            this.dudi = data
            console.log(this.dudi);
        }
    },
    mounted() {
        axios
            .get("https://ibnux.github.io/data-indonesia/provinsi.json")
            .then((response) => this.dataProvinsi(response));
        axios.get("http://localhost:2008/admin/findAllDudi",{withCredentials:true})
            .then((r) => this.setTempatDudi(r.data.data))

    },
};
</script>
