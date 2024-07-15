<template>
    <div class="bg-bgcolor overflow-x-clip">
        <Navbar />
        <div class="flex">
            <SideBar />
            <Banner>Absen Siswa</Banner>
            <div class="flex flex-col mt-52 mb-10 mx-20 ml-80 bg-white shadow-md p-24">
                <div class="p-1.5 min-w-full align-middle">
                    <TableNavigation>
                        <template #default-filter>
                            Status: nama
                        </template>
                    </TableNavigation>

                    <div class="">
                        <div class=" " v-for="(siswa, index) in siswa" :key="index">
                            <button @click="toggleDropdown(index, siswa.id)"
                                class="bg-[#0275D8] text-white py-2 my-1 px-4 rounded inline-flex justify-between w-[60vw] items-center">
                                <div class="ml-10 flex justify-between items-center w-[100%]">
                                    <div class="flex gap-8">
                                        <svg width="48" height="48" viewBox="0 0 73 64" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M65.3716 53.168C65.3716 53.5104 65.2627 53.8271 65.1501 54.1375C64.3659 44.7167 57.8123 36.7423 48.5792 32.9055C52.1845 29.9807 54.4792 25.8272 54.4792 21.168C54.4792 14.5088 49.8609 8.8096 43.2964 6.4H61.7408C63.745 6.4 65.3716 6.60157 65.3716 8.36797V53.168ZM57.9757 57.6H14.4496C14.4496 57.6 14.4278 56.771 14.4278 56.643C14.4278 46.7358 22.9856 38.2721 33.9252 37.2641C36.3251 37.5457 37.251 37.1902 38.5871 37.043C49.4868 38.0862 57.9974 46.7935 57.9974 56.6719C57.9974 56.7999 57.9757 57.6 57.9757 57.6ZM7.27873 53.168V8.36797C7.27873 6.60157 8.90533 6.4 10.9095 6.4H29.354C22.7895 8.8096 18.1712 14.5088 18.1712 21.168C18.1712 25.792 20.4295 29.9229 23.9877 32.8445C14.9288 36.5501 8.39337 44.2242 7.32228 53.3602C7.31865 53.293 7.27873 53.2352 7.27873 53.168ZM47.2176 21.168C47.2176 25.776 43.5105 29.6323 38.5871 30.5539C36.445 30.4003 35.846 30.4254 34.0306 30.5438C29.1253 29.6126 25.4328 25.7664 25.4328 21.168C25.4328 15.8752 30.3198 11.568 36.3252 11.568C42.3305 11.568 47.2176 15.8752 47.2176 21.168ZM65.3716 0H7.27873C3.26669 0 0.0171204 2.864 0.0171204 6.4V57.6C0.0171204 61.1328 3.26669 64 7.27873 64H65.3716C69.3837 64 72.6332 61.1328 72.6332 57.6V6.4C72.6332 2.864 69.3837 0 65.3716 0Z"
                                                fill="white" />
                                        </svg>
                                        <div class="flex flex-col items-start font-semibold">
                                            <h4 class="text-xl">{{ siswa.nama }}</h4>
                                            <p class="text-sm">{{ siswa.kelas.nama }}</p>
                                        </div>
                                    </div>
                                    <ChevronDownIcon v-show="isOpen[index]" class="-mr-1 h-9 w-9 text-white"
                                        aria-hidden="false" />
                                    <ChevronRightIcon v-show="!isOpen[index]" class="-mr-1 h-9 w-9 text-white"
                                        aria-hidden="false" />
                                </div>
                            </button>
                            <div v-if="isOpen[index]" class="px-2  mt-2 w-full rounded-md bg-bgcolor">
                                <ul class="py-1 divide-y-2 border-2">
                                    <li v-for="(option, index) in options" :key="index"
                                        class=" bg-white rounded-md px-4 py-2 hover:bg-gray-100">
                                        <div class=" grid grid-cols-12 divide-x-2">
                                            <div class="h-full flex col-span-1 justify-center items-center">
                                                <p class="text-xl">{{ index + 1 }}.</p>
                                            </div>
                                            <div class="h-full text-center px-2 flex col-span-4 items-center">
                                                <p class="text-md">{{ new Date(option.tanggal).toLocaleDateString("id", {
                                                    weekday: "long",
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "2-digit"
                                                }) }}</p>
                                            </div>
                                            <div
                                                class="h-full flex items-center justify-center px-2 col-start-6 col-span-6">
                                                <div class="bg-green-500 p-1 w-[50%] rounded-md text-center text-white">
                                                    {{ option.status }}</div>
                                            </div>
                                            <div
                                                class="h-full flex items-center col-start-12 col-span-1 justify-center hover:bg-white">
                                                <button @click="openModal(siswaid,index)">
                                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M22.5 7.5H7.5C6.98156 7.5 6.5625 7.92 6.5625 8.4375C6.5625 8.95594 6.98156 9.375 7.5 9.375H22.5C23.0184 9.375 23.4375 8.95594 23.4375 8.4375C23.4375 7.92 23.0184 7.5 22.5 7.5ZM28.125 26.25C28.125 27.2803 27.1069 28.1362 26.0784 28.1362H3.72562C2.69719 28.1362 1.86281 27.3019 1.86281 26.2716V3.90469C1.86281 2.87438 2.72062 1.875 3.75 1.875H26.25C27.2794 1.875 28.125 2.72062 28.125 3.75V26.25ZM26.25 0H3.75C1.69313 0 0 1.84594 0 3.90469V26.2716C0 28.3313 1.66781 30 3.72562 30H26.0784C28.1362 30 30 28.3088 30 26.25V3.75C30 1.69125 28.3069 0 26.25 0ZM22.5 18.75H7.5C6.98156 18.75 6.5625 19.17 6.5625 19.6875C6.5625 20.2059 6.98156 20.625 7.5 20.625H22.5C23.0184 20.625 23.4375 20.2059 23.4375 19.6875C23.4375 19.17 23.0184 18.75 22.5 18.75ZM22.5 13.125H7.5C6.98156 13.125 6.5625 13.545 6.5625 14.0625C6.5625 14.5809 6.98156 15 7.5 15H22.5C23.0184 15 23.4375 14.5809 23.4375 14.0625C23.4375 13.545 23.0184 13.125 22.5 13.125Z"
                                                            fill="black" />
                                                    </svg>
                                                </button>
                                                
                                            </div>
                                            
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Modal :open="modalOpen" @close="modalOpen = !modalOpen">
                            <div class="w-full flex flex-col  items-center font-semibold pt-[20px]">
                                <img :src="detail.foto" alt="" class="max-h-[40%] shadow-lg relative">
                                <p>Tanggal : {{ detail.tanggal }}</p>
                                <p class="">Absen Masuk : {{ detail.absen_masuk == null ? "-" : detail.absen_masuk }}</p>
                                <p class="">Absen Keluar : {{ detail.absen_keluar == null ? "-" : detail.absen_keluar }}</p>
                                <p>Status Absen Pulang : {{ detail.status_absen_pulang == null ? "-" : detail.status_absen_pulang }}</p>
                                <p>Status : {{ detail.status }}</p>
                            </div>
                        </Modal>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Banner from '@/components/Banner.vue';
import Modal from '@/components/Modal.vue';
import Navbar from '@/components/Navbar.vue';
import SideBar from '@/components/SideBar.vue';
import TableNavigation from '@/components/TableNavigation.vue';
import { useTahunStore } from '@/stores/tahun';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/vue/20/solid";
import axios from 'axios';

export default {
    name: 'absensiswa',
    components: { Navbar, SideBar, TableNavigation, Modal, Banner, Menu, MenuButton, MenuItem, MenuItems, ChevronDownIcon, ChevronRightIcon },
    data() {
        return {
            siswa: {},
            siswaid: '',
            isOpen: [],
            selectedOption: null,
            options: [],
            detail : {},
            modalOpen: false,
            tahunStore: useTahunStore()
        }
    },
    methods: {
        setSiswa(data) {
            this.siswa = data
        },
        openModal(siswaid,index) {
            axios.get("http://localhost:2008/admin/findAbsenBySiswa/" + siswaid, { withCredentials: true })
                .then((r) => {
                    console.log(r.data.data[index]);
                    this.detail.foto = r.data.data[index].foto
                    this.detail.tanggal = r.data.data[index].tanggal
                    this.detail.status = r.data.data[index].status
                    this.detail.absen_masuk = r.data.data[index].absen_masuk
                    this.detail.absen_keluar = r.data.data[index].absen_keluar
                })
            this.modalOpen = true
            // window.location.href = "/datasiswa"

        },
        toggleDropdown(index, siswaid) {
            if (this.isOpen[index] == true) {
                this.isOpen[index] = false
                return
            }
            for (let i = 0; i <= this.siswa.length; i++) {
                this.isOpen[i] = false
            }
            this.isOpen[index] = !this.isOpen[index];
            if (this.isOpen[index] == true) {
                axios.get("http://localhost:2008/admin/findAbsenBySiswa/" + siswaid, { withCredentials: true })
                    .then((r) => {
                        console.log(r.data.data);
                        this.options = r.data.data
                    })
                console.log(this.options);
            }
            this.siswaid = siswaid
        },
    },
    mounted() {
        axios.get(`http://localhost:2008/admin/findAllSiswa?page=1&tahun=${this.tahunStore.tahun}`, { withCredentials: true })
            .then((r) => {
                console.log(r.data.data);
                this.setSiswa(r.data.data.siswa)

            })
    }
}
</script>