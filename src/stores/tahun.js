import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTahunStore = defineStore('tahun', () => {
  let tahun = ref('4963')
  
  function ubahTahun(id_tahun) {
    tahun.value = id_tahun
    console.log(tahun);
  }

  return { tahun,ubahTahun }
})
