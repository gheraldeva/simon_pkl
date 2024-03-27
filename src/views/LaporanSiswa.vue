<script setup>
import Navbar from "@/components/Navbar.vue";
import SideBar from "@/components/SideBar.vue";
import Banner from "@/components/Banner.vue";
import TableNavigation from "@/components/TableNavigation.vue";
import FolderSiswa from "@/components/FolderSiswa.vue";

</script>

<template>
  <div class="bg-bgcolor overflow-x-clip">
    <Navbar />
    <div class="flex">
      <SideBar />
      <Banner>Data Dudi Pembimbing</Banner>
      <div class="tabel">
        <div class="flex flex-col mt-52 mb-10 mx-20 ml-92 bg-white shadow-md pt-24 pb-48 px-16 relative">
          <div class="-m-5">
            <div class=" min-w-full align-middle">
              <TableNavigation>
                <template #default-filter>
                  Status: Terpenuhi
                </template>
              </TableNavigation>


              <div class="overflow-hidden flex flex-col gap-10 pt-10">
                <div class="row flex gap-5">
                  <FolderSiswa/>
                  <FolderSiswa/>
                  <FolderSiswa/>
                </div>
                <div class="row flex gap-5">
                  <FolderSiswa/>
                  <FolderSiswa/>
                  <FolderSiswa/>
                </div>
                <div class="row flex gap-5">
                  <FolderSiswa/>
                  <FolderSiswa/>
                  <FolderSiswa/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
