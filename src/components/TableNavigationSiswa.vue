<!-- <script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";

</script> -->

<template>
    <div class="flex items-center justify-between mb-10 -mx-2">
        <p class="text-center text-lg">Filter By :</p>

        <div class="dropdown flex gap-5">
            <select id="jenis_kelamin" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2"
                @change="jenis_kelamin">
                <option value="" selected>Jenis Kelamin</option>
                <option value="laki">Laki - Laki</option>
                <option value="perempuan">Perempuan</option>
            </select>
            <select id="id_jurusan" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2"
                @change="id_jurusan">
                <option value="" selected>Jurusan</option>
                <option :value="data.id" v-for="data in jurusan.data" :key="data.id">{{ data.nama }}</option>
            </select>
            <select id="id_kelas" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2"
                @change="id_kelas">
                <option value="" selected>Kelas</option>
                <option :value="data.id" v-for="data in kelas.data" :key="data.id">{{ data.nama }}</option>
            </select>

            <button class="p-3 bg-gray-600" @click="filterData">Filter</button>

        </div>

        <div class="relative z-0">
            <div class="rounded-md ps-3 text-sm bg-gray-figma flex justify-between items-center gap-2">
                <SearchIcon />
                <input type="search" @input="searchName" id="location-search" class="bg-transparent outline-none"
                    placeholder="Cari data..." required />
                <button type="submit"
                    class="py-2 h-full rounded-md text-sm font-medium bg-[#38A3FF] px-3 text-white bg-secol"
                    @click="sendURL">
                    Cari
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import SearchIcon from "@/components/icons/SearchIcon.vue";
import axios from "axios";

export default {
    name: 'tablenavigationsiswa',
    components: { SearchIcon },
    props: [
        'siswa_url',
    ],
    data() {
        return {
            url: 'http://localhost:2008/admin/findSiswaFilter?',
            query: {},
            filter_with_url: '',
            jurusan: [],
            kelas: []
        }
    },
    methods: {
        jenis_kelamin(e) {
            this.query.jenis_kelamin = e.target.value
        },
        id_kelas(e) {
            this.query.id_kelas = e.target.value
        },
        id_jurusan(e) {
            this.query.id_jurusan = e.target.value

            axios.get(`http://localhost:2008/admin//findKelasFilter?id_jurusan=${this.query.id_jurusan}` , {withCredentials : true})
                .then((response) => this.getKelas(response.data))
        },
        filterData() {
            const params = {};
            if (this.query.jenis_kelamin) {
                params.jenis_kelamin = this.query.jenis_kelamin;
                // console.log(params);
            }
            if (this.query.id_jurusan) {
                params.id_jurusan = this.query.id_jurusan;
            }
            if (this.query.id_kelas) {
                params.id_kelas = this.query.id_kelas;
            }
            this.$emit('send-url', params);
        },
        searchName(e) {
            // console.log(e.target.value);
            this.$emit('search', e.target.value)
        },
        setJurusan(data) {
            this.jurusan = data
        },
        clearFilters() {
            this.query.jenis_kelamin = '';
            this.query.id_jurusan = '';
            this.query.id_kelas = '';
            this.$emit('send-url', { jenis_kelamin: '', id_jurusan: '' }); // Kirim objek filter kosong ke komponen induk
        },
        getKelas(data) {
            this.kelas = data
        },
    },
    mounted() {
        axios.get('http://localhost:2008/admin/findAllJurusan' , {withCredentials : true})
            .then((r) => this.setJurusan(r.data))
    }
}
</script>
