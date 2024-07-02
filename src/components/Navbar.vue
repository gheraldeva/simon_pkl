<template>
  <div
    class="h-[10vh] fixed z-30 w-screen bg-gradient-to-r px-16 from-left-linear to-right-linear flex justify-between items-center">
    <div class="flex gap-2 items-center">
      <img src="../assets/logo.png" alt="" width="70vw" />
      <div class="flex flex-col">
        <h1 class="font-Montserrat text-white text-3xl">
          <RouterLink to="/">Simon<span class="font-bold">PKL</span></RouterLink>
        </h1>
        <p class="text-[7px] text-white">Solusinya PKL!</p>
      </div>
    </div>
    <div class="flex gap-5">
      <select name="tahun" id="tahun" class="text-white bg-right-linear font-bold border border-white rounded-md p-2 hover:bg-left-linear cursor-pointer" @change="pilihTahun()" v-model="now_tahun">
        <option value="" disabled>Pilih Tahun</option>
        <option  v-for="t in tahun" :value="t.id">{{ t.tahun }}</option>
      </select>
      <div class="flex gap-1">
        <Menu as="div" class="relative z-20 text-left">
          <div>
            <MenuButton
              class="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md bg-[#2995F3] px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-left-linear">
              <img src="../assets/profile.svg" alt="" />
              <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.59998 1.31372L7.72743 7.68627L14.1 1.31372" stroke="#EAEAEA" stroke-width="2.3"
                  stroke-miterlimit="1.41421" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </MenuButton>
          </div>

          <transition enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95">
            <MenuItems class="absolute top-[100%] z-50  origin-top-right divide-y divide-white rounded-md bg-white">
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                <button @click="goTo('login')"
                  :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'px-2 py-2 text-sm']">Login</button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                <button @click="LogOut"
                  :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'px-2 py-2 text-sm']">LogOut</button>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>
  </div>
</template>


<script>
import { RouterLink } from "vue-router";
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import axios from "axios";
import { useTahunStore } from "@/stores/tahun";

export default {
  data(){
    return{
      tahun: [],
      now_tahun: '',
      tahunStore: useTahunStore()
    }
  },
  name: 'navbar',
  components: { RouterLink, Menu, MenuButton, MenuItems, MenuItem },
  methods: {
    goTo(link) {
      this.$router.push({ path: `${link}` })
    },
    LogOut() {
      axios.delete('http://localhost:2008/admin/adminLogout', { withCredentials: true })
        .then((r) => {
          console.log(r);
          this.$router.push({ path: "/login" });
          this.$toast.success("Sukses LogOut", {
            type: "success",
            position: "top-right",
            duration: 1300,
            dismissable: true,
          });
        }).catch((err) => {
          console.log(err.response.data.msg)
          this.$toast.success(err.response.data.msg, {
            type: "error",
            position: "top-right",
            duration: 1300,
            dismissable: true,
          });
        })
    },
    pilihTahun(){
      this.tahunStore.ubahTahun(this.now_tahun)
      this.now_tahun = this.tahunStore.tahun
      this.$emit('navulang')
    }
  },
  mounted(){
    this.now_tahun = this.tahunStore.tahun
    axios.get("http://localhost:2008/admin/getAllTahun", {withCredentials:true})
      .then((r) => this.tahun = r.data.data)
  },


}

</script>

