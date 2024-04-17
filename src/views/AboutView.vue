<template>
    <div class="mx-20">
        <div class="my-3 flex flex-col gap-2 w-[100%] content-end">
            <div class="flex flex-row justify-between items-center">
                <label for="provinsi_select" class="w-[21%] text-right font-semibold text-lg text-nowrap">Provinsi :
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
                    <option :value="kabupaten.nama" v-for="(kabupaten, index) in kabupaten.data" :key="index">
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
                    <option :value="kecamatan.nama" v-for="(kecamatan, index) in kecamatan.data" :key="index">
                        {{ kecamatan.nama }}</option>
                </select>
            </div>
            <p v-if="this.v$Alamat.alamat.kecamatan.$error" class="pl-[25%]">
                {{ this.v$Alamat.alamat.kecamatan.$errors[0].$message }}
            </p>
            <div class="flex flex-row justify-between items-center">
                <label for="desa_select" class="mr-5 text-right w-[21%] font-semibold text-lg text-nowrap">Desa :
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
                }).then((r) => console.log(r));
                // window.location.href = "/datadudi";
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
    },
    mounted() {
        axios
            .get("https://ibnux.github.io/data-indonesia/provinsi.json")
            .then((response) => this.dataProvinsi(response));
        axios.get('http://localhost:2008/admin/findDudi/' + this.$route.params.id)
            .then((r) => this.setDudi(r.data.data))

    },
};
</script>