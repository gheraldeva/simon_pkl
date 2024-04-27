<template>
    <div class="bg-bgcolor overflow-x-clip font-Montserrat">
        <Navbar />
        <div class="flex">
            <SideBar />
            <Banner>Tambah Data Kelas</Banner>
            <div class="flex flex-col min-w-[75vw] mt-52 mb-10 mx-10 ml-80 bg-white shadow-md px-8 pt-8 pb-18 relative">
                <h1 class="font-semibold text-xl pl-5 mb-5">Tambah Data</h1>
                <hr class="border-t-2" />
                <form action="" v-on:submit.prevent class="mt-5 pr-20 relative">
                    <p class="w-[25%] text-right font-semibold text-lg">Tahun 2024/2025</p>
                    <div class="my-3 flex">
                        <label for="nama"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Nama Kelas
                            :
                        </label>
                        <input type="text" id="nama"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan Nama Jurusan..." v-model="KelasState.datakelas.nama" />
                    </div>
                    <p v-if="this.v$kelas.datakelas.nama.$error" class="pl-[25%] text-red-600">
                        {{
                            this.v$kelas.datakelas.nama.$errors[0].$message
                        }}
                    </p>
                    <div class="my-3 flex flex-row justify-between items-center">
                        <label for="jurusan_select" class="w-[21%] text-right font-semibold text-lg text-nowrap">Jurusan
                            :
                        </label>
                        <select name="jurusan" id="jurusan_select" v-model="KelasState.datakelas.id_jurusan"
                            class="w-[76%] p-2 border-2 rounded-lg cursor-pointer">
                            <option value="" disabled>Pilih Jurusan</option>
                            <option :value="jurusan.id" v-for="(jurusan, index) in jurusan.data" :key="index">
                                {{ jurusan.nama }}</option>
                        </select>
                    </div>
                    <p v-if="this.v$kelas.datakelas.id_jurusan.$error" class="pl-[25%] text-red-600">
                        {{
                            this.v$kelas.datakelas.id_jurusan.$errors[0].$message
                        }}
                    </p>
                    <div class="flex gap-3 absolute right-10 -bottom-10">
                        <router-link to="/datajurusan"
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
    required,helpers
} from "@vuelidate/validators";
import { reactive, computed } from "vue";

export default {
    name: "tambahdatakelas",
    components: { Navbar, SideBar, Banner },
    data(){
        return {
            jurusan : []
        }
    },
    setup() {
        const KelasState = reactive({
            datakelas: {
                nama: '',
                id_jurusan : ''
            },
        });
        const Siswarules = computed(() => {
            return {
                datakelas: {
                    nama: { required : helpers.withMessage('Data Tidak Boleh Kosong',required) },
                    id_jurusan: { required : helpers.withMessage('Data Tidak Boleh Kosong',required) }
                },
            };
        });

        const v$kelas = useValidate(Siswarules, KelasState);
        return {
            KelasState,
            v$kelas,
        };
    },
    methods: {
        simpanData() {
            this.v$kelas.$validate();
            if (!this.v$kelas.$error) {
                axios({
                    method: "post",
                    url: "http://localhost:2008/admin/addKelas",
                    data: {
                        nama: this.KelasState.datakelas.nama,
                        tahun : "2024/2025",
                        id_jurusan: this.KelasState.datakelas.id_jurusan,
                    },
                }).then((r) => {
                    console.log(r);
                    
                    this.$router.push({ path: "/datakelas" });
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
        getJurusan(data){
            this.jurusan = data
        }
    },
    mounted(){
        axios.get('http://localhost:2008/admin/findAllJurusan')
            .then((response) => this.getJurusan(response.data))
    }
};
</script>
