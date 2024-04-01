<script setup>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/SideBar.vue"
import Banner from "@/components/Banner.vue"
</script>

<template>
  <div class="bg-bgcolor overflow-x-hidden">
    <Navbar />
    <div class="flex">
      <Sidebar />
      <Banner></Banner>
      <div class="my-3 flex absolute z-40">
        <label for="provinsi_select" class="w-[21%] mr-5 text-right font-semibold text-lg text-nowrap">Provinsi:
        </label>
        <select name="pets" id="provinsi_select">
          <option value="">Provinsi</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
      </div>
      <div class="my-3 flex">
        <label for="kabupaten_select" class="w-[21%] mr-5 text-right font-semibold text-lg text-nowrap">Kabupaten:
        </label>
        <select name="pets" id="kabupaten_select">
          <option value="">kabupaten</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
      </div>
      <div class="my-3 flex">
        <label for="kecamatan_select" class="w-[21%] mr-5 text-right font-semibold text-lg text-nowrap">Kecamatan:
        </label>
        <select name="pets" id="kecamatan_select">
          <option value="">kecamatan</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
      </div>
      <div class="my-3 flex">
        <label for="kelurahan_select" class="w-[21%] mr-5 text-right font-semibold text-lg text-nowrap">Kelurahan/desa:
        </label>
        <select name="pets" id="kelurahan_select">
          <option value="">kelurahan</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
      </div>
    </div>
  </div>
</template>
