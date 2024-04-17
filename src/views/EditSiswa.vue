<template>
    <div class="bg-bgcolor overflow-x-clip font-Montserrat">
        <Navbar />
        <div class="flex">
            <SideBar />
            <Banner>Edit Data DU/DI</Banner>
            <div class="flex flex-col min-w-[75vw] mt-52 mb-10 mx-10 ml-80 bg-white shadow-md px-8 pt-8 pb-18 relative">
                <p>{{ siswaState.nama }}</p>
                <h1 class="font-semibold text-xl pl-5 mb-5">Tambah Data</h1>
                <hr class="border-t-2" />
                <form action="" v-on:submit.prevent class="mt-5 pr-20 relative">
                    <div class="my-3 flex">
                        <label for="nama_instansi_perusahaan"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Nama :
                        </label>
                        <input type="text" id="nama_instansi_perusahaan"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            v-model="siswaState.dataSiswa.nama" />
                    </div>
                    <!-- <p v-if="this.v$Dudi.datadudi.nama.$error" class="pl-[25%]">
                        {{
                            this.v$Dudi.datadudi.nama.$errors[0].$message
                        }}
                    </p> -->
                    <div class="my-3 flex">
                        <label for="notelp"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">No. Telepon :
                        </label>
                        <input type="text" id="notelp"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            v-model="siswaState.dataSiswa.no_telepon" />
                    </div>
                    <!-- <p v-if="this.v$Dudi.datadudi.no_telepon.$error" class="pl-[25%]">
                        {{ this.v$Dudi.datadudi.no_telepon.$errors[0].$message }}
                    </p> -->
                    <div class="my-3 flex">
                        <label for="notelp"
                            class="w-[25%] text-right my-auto pl-5 font-semibold text-lg text-nowrap mx-5">NIS :
                        </label>
                        <input type="text" id="notelp"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            v-model=" siswaState.dataSiswa.no_telepon  " />
                    </div>
                    <!-- <p v-if="this.v$Dudi.datadudi.nis.$error" class="pl-[25%]">
                        {{ this.v$Dudi.datadudi.nis.$errors[0].$message }}
                    </p> -->
                    <div class="my-3 flex ">
                        <label for="jenis-kelamin"
                            class="w-[21%] text-right my-auto pl-5 font-semibold text-lg text-nowrap">Jenis
                            Kelamin :
                        </label>
                        <div class="pl-5 flex gap-5 items-center">
                            <div class="flex items-center gap-2">
                                <input id="jenis-kelamin" type="radio" value="laki"
                                    v-model=" siswaState.dataSiswa.jenis_kelamin " name="jenis-kelamin"
                                    class="w-4 h-4 text-blue-600 p-2.5 bg-gray-100 border-gray-300 ">
                                <label for="jenis-kelamin"
                                    class=" text-lg font-semibold cursor-pointer">Laki-Laki</label>
                            </div>
                            <div class="flex items-center gap-2">
                                <input id="jenis-kelamin-2" type="radio" value="perempuan"
                                    v-model="siswaState.dataSiswa.jenis_kelamin" name="jenis-kelamin"
                                    class="w-4 h-4 text-blue-600 p-2.5 bg-gray-100 border-gray-300 ">
                                <label for="jenis-kelamin-2"
                                    class=" text-lg font-semibold cursor-pointer">Perempuan</label>
                            </div>
                        </div>
                    </div>
                    <!-- <p v-if="this.v$Dudi.datadudi.jenis_kelamin.$error" class="pl-[25%]">
                        {{ this.v$Dudi.datadudi.jenis_kelamin.$errors[0].$message }}
                    </p> -->
                    <div class="my-3 flex flex-row justify-between items-center">
                        <label for="jurusan_select" class="w-[21%] text-right font-semibold text-lg text-nowrap">Jurusan
                            :
                        </label>
                        <select name="jurusan" id="jurusan_select" v-model="siswaState.dataSiswa.id_jurusan"
                            @change="dataKelas(siswaState.dataSiswa.jurusan)"
                            class="w-[76%] p-2 border-2 rounded-lg cursor-pointer">
                            <!-- <option value selected disabled>Pilih Jurusan</option> -->
                            <option :value="jurusan.id" v-for="(jurusan, index) in jurusan" :key="index">
                                {{ jurusan.nama }}</option>
                        </select>
                    </div>
                    <div class=" my-3 flex flex-row justify-between items-center">
                        <label for="kelas_select" class="w-[21%] text-right font-semibold text-lg text-nowrap">Kelas :
                        </label>
                        <select name="kelas" id="kelas_select" v-model="siswaState.dataSiswa.id_kelas"
                            class="w-[76%] p-2 border-2 rounded-lg cursor-pointer">
                            <option :value="kelas.id" v-for="(kelas, index) in kelas" :key="index">{{ kelas.nama }}
                            </option>
                        </select>
                    </div>
                    <h3 class="text-lg font-semibold w-[21%] text-right">Alamat : </h3>
                    <div class="flex flex-row gap-10 w-[100%] my-2">
                        <p class="w-[21%] text-right font-medium text-lg text-nowrap">Provinsi : </p>
                        <p class="w-[68%] text-lg font-bold">{{ alamat.provinsi }}</p>
                    </div>
                    <div class="flex flex-row gap-10 w-[100%] my-2">
                        <p class="w-[21%] text-right font-medium text-lg text-nowrap">Kabupaten : </p>
                        <p class="w-[68%] text-lg font-bold">{{alamat.kabupaten }}</p>
                    </div>
                    <div class="flex flex-row gap-10 w-[100%] my-2">
                        <p class="w-[21%] text-right font-medium text-lg text-nowrap">Kecamatan : </p>
                        <p class="w-[68%] text-lg font-bold">{{ alamat.kecamatan }}</p>
                    </div>
                    <div class="flex flex-row gap-10 w-[100%] my-2">
                        <p class="w-[21%] text-right font-medium text-lg text-nowrap">Desa : </p>
                        <p class="w-[68%] text-lg font-bold">{{ alamat.desa }}</p>
                    </div>
                    <div class="flex flex-row gap-10 w-[100%] my-2">
                        <p class="w-[21%] text-right font-medium text-lg text-nowrap">Detail Tempat : </p>
                        <p class="w-[68%] text-lg font-bold">{{ alamat.detail_tempat }}</p>
                    </div>
                    <button
                            class="text-white bg-[#38A3F2] ml-[25%] hover:bg-blue-600 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2 text-center"
                            @click="editAlamat">
                            Edit Alamat
                        </button>
                    <div class="flex gap-3 absolute right-10 -bottom-10">
                        <router-link to="/datasiswa"
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
        const siswaState = reactive({
            dataSiswa: {
                nama: '',
                no_telepon: '',
                nis: '',
                jenis_kelamin : '',
                id_jurusan : '',
                id_kelas : '',
            },
        });

        const Siswarules = computed(() => {
            return {
                dataSiswa: {
                    nama : { required },
                    no_telepon: {
                        required,
                        numeric,
                        minLength: minLength(12),
                        maxLength: maxLength(12),
                    },
                    nis: { required,numeric },
                    jenis_kelamin : {required},
                    // detail_tempat: { required },
                    // provinsi: { required },
                    // kabupaten: { required },
                    // kecamatan: { required },
                    // desa: { required },
                    // negara: { required },
                },
            };
        });

        const v$siswa = useValidate(Siswarules, siswaState);
        return {
            siswaState,
            v$siswa
        };
    },
    data() {
        return {
            provinsi: [],
            kabupaten: [],
            kecamatan: [],
            desa: [],
            jurusan : [],
            kelas: [],
            siswa : {},
            alamat : {
                provinsi : '',
                kabupaten : '',
                kecamatan : '',
                desa : '',
                negara : 'Indonesia',
                detail_tempat : ''
            },
        };
    },
    methods: {
        editAlamat(){
            window.location.href = `/editalamatsiswa/${this.$route.params.id}`
        },
        setSiswa(data) {
            this.siswaState.dataSiswa.nama = data.nama
            this.siswaState.dataSiswa.jenis_kelamin = data.jenis_kelamin
            this.siswaState.dataSiswa.no_telepon = data.no_telepon
            this.siswaState.dataSiswa.nis = data.nis
            this.siswaState.dataSiswa.jenis_kelamin = data.jenis_kelamin
            this.siswaState.dataSiswa.id_jurusan = data.jurusan.id
            this.siswaState.dataSiswa.id_kelas = data.kelas.id
            this.alamat.provinsi = data.alamat.provinsi
            this.alamat.kabupaten = data.alamat.kabupaten
            this.alamat.kecamatan = data.alamat.kecamatan
            this.alamat.desa = data.alamat.desa
            this.alamat.detail_tempat = data.alamat.detail_tempat
        },
        simpanData() {
            this.v$siswa.$validate();
            if (!this.v$siswa.$error) {
                axios({
                    method: "put",
                    url: ("http://localhost:2008/admin/updateSiswa/" + this.$route.params.id),
                    data: this.siswaState.dataSiswa,
                }).then((r) => console.log(r));
                window.location.href = "/datasiswa";
                this.$toast.success("Sukses Di Edit", {
                    type: "success",
                    position: "top-right",
                    duration: 3000,
                    dismissable: true,
                });
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
        getDudiPembimbing(data) {
            this.DudiPembimbing = data;
        },
        getJurusan(data){
            this.jurusan = data
        },
        dataKelas(id) {
            axios.get(`http://localhost:2008/admin//findKelasFilter?id_jurusan=${id}`)
                .then((response) => this.getKelasSelect(response.data.data))
        },
        getKelas(data){
            const j = [data]
            this.kelas = j
        },
        getKelasSelect(data){
            console.log(data);
            this.kelas = data
        }
    },
   async mounted() {
        axios
            .get("https://ibnux.github.io/data-indonesia/provinsi.json")
            .then((response) => this.dataProvinsi(response));
        await axios.get('http://localhost:2008/admin/findSiswa/' + this.$route.params.id)
            .then((r) =>{ this.setSiswa(r.data.data)
                this.getKelas(r.data.data.kelas)
            })
        axios.get('http://localhost:2008/admin/findAllJurusan')
            .then((r)=> {
                 this.getJurusan(r.data.data)
                })
        console.log(this.siswaState);

    },
};
</script>
