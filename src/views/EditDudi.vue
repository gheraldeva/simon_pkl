<template>
    <div class="bg-bgcolor overflow-x-clip font-Montserrat">
        <Navbar />
        <div class="flex">
            <SideBar />
            <Banner>Edit Data DU/DI</Banner>
            <div class="flex flex-col min-w-[75vw] mt-52 mb-10 mx-10 ml-80 bg-white shadow-md px-8 pt-8 pb-18 relative">
                <h1 class="font-semibold text-xl pl-5 mb-5">Tambah Data</h1>
                <hr class="border-t-2" />
                <form action="" v-on:submit.prevent class="mt-5 pr-20 relative">
                    <div class="my-3 flex">
                        <label for="nama_instansi_perusahaan"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Nama Instansi
                            :
                        </label>
                        <input type="text" id="nama_instansi_perusahaan"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan Nama Instansi Perusahaan..."
                            v-model="Dudistate.datadudi.nama_instansi_perusahaan" />
                    </div>
                    <p v-if="this.v$Dudi.datadudi.nama_instansi_perusahaan.$error" class="pl-[25%]">
                        {{
                            this.v$Dudi.datadudi.nama_instansi_perusahaan.$errors[0].$message
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
                    <div class="my-3 flex">
                        <label for="bidang"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Bidang :
                        </label>
                        <input type="text" id="bidang"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan Bidang..." v-model="Dudistate.datadudi.bidang" />
                    </div>
                    <p v-if="this.v$Dudi.datadudi.bidang.$error" class="pl-[25%]">
                        {{ this.v$Dudi.datadudi.bidang.$errors[0].$message }}
                    </p>
                    <div class="my-3 flex">
                        <label for="deskripsi"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Deskripsi :
                        </label>
                        <input type="text" id="deskripsi"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan Deskripsi..." v-model="Dudistate.datadudi.deskripsi" />
                    </div>
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
                        <router-link to="/datadudi"
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
                nama_instansi_perusahaan: '',
                no_telepon: '',
                bidang: '',
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
                    nama_instansi_perusahaan: { required },
                    no_telepon: {
                        required,
                        numeric,
                        minLength: minLength(12),
                        maxLength: maxLength(12),
                    },
                    bidang: { required },
                    deskripsi: { required }
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
        editAlamat(){
            window.location.href = `/editalamatdudi/${this.$route.params.id}`
        },
        setDudi(data) {
            this.Dudistate.datadudi.nama_instansi_perusahaan = data.nama_instansi_perusahaan
            this.Dudistate.datadudi.no_telepon = data.no_telepon
            this.Dudistate.datadudi.bidang = data.bidang
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
                    url: ("http://localhost:2008/admin/updateDudi/" + this.$route.params.id),
                    data: this.Dudistate.datadudi,
                    withCredentials:true
                }).then((r) => {
                    this.$router.push({ path: '/datadudi' })
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

           
            // this.datadudi.alamat.desa = '';
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
        axios.get('http://localhost:2008/admin/findDudi/' + this.$route.params.id,{withCredentials:true})
            .then((r) => this.setDudi(r.data.data))

    },
};
</script>
