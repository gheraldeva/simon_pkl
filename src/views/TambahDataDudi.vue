<script setup>
import Navbar from "@/components/Navbar.vue";
import SideBar from "@/components/SideBar.vue";
import Banner from "@/components/Banner.vue";
</script>


<template>
    <div class="bg-bgcolor overflow-x-clip font-Montserrat">
        <Navbar />
        <div class="flex">
            <SideBar />
            <Banner>Tambah Data Pembimbing Dudi</Banner>
            <div class="flex flex-col min-w-[75vw] mt-52 mb-10 mx-10 ml-80 bg-white shadow-md px-8 pt-8 pb-18 relative">
                <h1 class="font-semibold text-xl pl-5 mb-5 ">Tambah Data</h1>
                <hr class=" border-t-2">
                <form action="" class="mt-5 pr-20">
                    <div class="my-3 flex">
                        <label for="nama" class=" my-auto pl-5 text-end font-semibold text-lg text-nowrap mx-5">Nama : </label>
                        <input type="text" id="nama"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan Nama..." />
                    </div>
                    <div class="my-3 flex">
                        <label for="ttl" class=" my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Tempat/Tgl Lahir
                            : </label>
                        <input type="text" id="ttl"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan Tempat / Tgl Lahir" />
                    </div>
                    <div class="my-3 flex">
                        <label for="bidang" class=" my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Bidang : </label>
                        <input type="text" id="bidang"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan Bidang..." />
                    </div>
                    <div class="my-3 flex">
                        <label for="instansi" class=" my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Instansi : </label>
                        <input type="text" id="instansi"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan Instansi..." />
                    </div>
                    <div class="my-3 flex">
                        <label for="notelp" class=" my-auto pl-5 font-semibold text-lg text-nowrap mx-5">No. Telepon :
                        </label>
                        <input type="text" id="notelp"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan No. Telepon" />
                    </div>
                    <div class="my-3 flex">
                        <label for="alamat" class=" my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Alamat : </label>
                        <input type="text" id="alamat"
                            class="shadow-sm border bg-white text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Masukkan Alamat..." />
                    </div>
                    <div class="my-3 flex items-center">
                        <label for="jenis-kelamin" class=" my-auto pl-5 font-semibold text-lg text-nowrap mx-5">Jenis Kelamin :
                        </label>
                        <div class="flex gap-1 items-center">
                            <input id="jenis-kelamin" type="radio" value="" name="jenis-kelamin"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 ">
                            <label for="jenis-kelamin" class="ms-2 text-lg font-semibold">Laki-Laki</label>

                            <input id="jenis-kelamin-2" type="radio" value="" name="jenis-kelamin"
                                class="ml-7 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 ">
                            <label for="jenis-kelamin-2" class="ms-2 text-lg font-semibold">Perempuan</label>
                        </div>
                        <div class="flex gap-3 absolute right-10 bottom-10">
                        <router-link to="/datadudi"
                            class="bg-white text-[#38A3FF] border p-2 rounded-md border-[#38A3FF] hover:bg-[#38A3FF] hover:text-white">Batalkan</router-link>
                        <button type="submit" class="text-white bg-[#38A3FF]
                        hover:bg-blue-600 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2 text-center">
                            Simpan
                        </button>
                    </div>
                    </div>
                </form>
            </div>
        </div>



    </div>

</template>