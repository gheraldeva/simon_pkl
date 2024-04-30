<template>
  <RouterView />
</template>

<script>
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router'
axios

export default {
  beforeCreate(){
    axios.get("http://localhost:2008/admin/cekToken", { withCredentials: true })
      .then((r) => {
        console.log(r.statusText);
        console.log(r.data)
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