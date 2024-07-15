import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useTahunStore = defineStore('tahun', () => {
  let tahun = ref('2558')
  
  function ubahTahun(id_tahun) {
    tahun.value = id_tahun
    // console.log(tahun);
  }

  axios.get("http://localhost:2008/admin/getAllTahun",{withCredentials:true})
    .then((r) => {
      // console.log(r.data.data[0].id);
      tahun.value = r.data.data[0].id
    })

  return { tahun,ubahTahun }
})
