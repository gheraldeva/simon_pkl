<template>
  <div class="container-app">
    <RouterView />
  </div>
</template>


<script>
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router'
import { useTahunStore } from './stores/tahun';

export default {
  data(){
    return{
      tahunStore : useTahunStore()
    }
  },
  beforeCreate(){
    axios.get("http://localhost:2008/admin/cekToken", { withCredentials: true })
      .then(async (r) => {
        const tahun = await axios({
          method : 'get',
          url : "http://localhost:2008/admin/getAllTahun",
          withCredentials : true
        })
        this.tahunStore.ubahTahun(tahun.data.data[0].id)
      })
      .catch((err) => {
        if (err.response.status == 401) {
          this.$router.push({ path: "/login" });
          this.$toast.error("Harap Login Dahulu", {
            type: "error",
            position: "top-right",
            duration: 1300,
            dismissable: true,
          });
        }
      })
  }
}
</script>
