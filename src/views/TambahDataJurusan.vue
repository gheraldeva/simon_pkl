<template>
    <div class="bg-bgcolor overflow-x-clip font-Montserrat">
        <Navbar />
        <div class="flex">
            <SideBar />
            <Banner>Tambah Data Siswa</Banner>
            <div class="flex flex-col min-w-[75vw] mt-52 mb-10 mx-10 ml-80 bg-white shadow-md px-8 pt-8 pb-18 relative">
                <h1 class="font-semibold text-xl pl-5 mb-5">Tambah Data</h1>
                <hr class="border-t-2" />
                <form action="" v-on:submit.prevent class="mt-5 pr-20 relative">
                    <div class="my-3 flex">
                        <label for="nama"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Nama Jurusan
                            :
                        </label>
                        <input type="text" id="nama"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan Nama Jurusan..." v-model="Dudistate.datadudi.nama" />
                    </div>
                    <p v-if="this.v$Dudi.datadudi.nama.$error" class="pl-[25%] text-red-600">
                        {{
                            this.v$Dudi.datadudi.nama.$errors[0].$message
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
    required,
} from "@vuelidate/validators";
import { reactive, computed } from "vue";

export default {
    name: "tambahdatadudi",
    components: { Navbar, SideBar, Banner },
    setup() {
        const Dudistate = reactive({
            datadudi: {
                nama: '',
            },
        });
        const Siswarules = computed(() => {
            return {
                datadudi: {
                    nama: { required : helpers.withMessage('Data Tidak Boleh Kosong',required) }
                },
            };
        });

        const v$Dudi = useValidate(Siswarules, Dudistate);
        return {
            Dudistate,
            v$Dudi,
        };
    },
    methods: {
        simpanData() {
            this.v$Dudi.$validate();
            if (!this.v$Dudi.$error) {
                axios({
                    method: "post",
                    url: "http://localhost:2008/admin/addJurusan",
                    data: {
                        nama: this.Dudistate.datadudi.nama,
                    },
                }).then((r) => console.log(r));
                this.$toast.success("Sukses Ditambahkan", {
                    type: "success",
                    position: "top-right",
                    duration: 3000,
                    dismissable: true,
                });
                console.log(this.Dudistate.datadudi);
                window.location.href = "/datajurusan";
            } else {
            }
        },
    },
};
</script>
