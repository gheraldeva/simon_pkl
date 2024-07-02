<template>
    <div class="bg-bgcolor overflow-x-clip box-border">
        <Navbar />
        <div class="flex justify-center pt-24 pb-10">
            <div
                class="w-[40vw] h-[81vh] flex justify-center items-center flex-col bg-white shadow-md rounded-lg relative">
                <h1 class="text-left-linear font-bold text-4xl absolute top-20 left-20">Login</h1>
                <div class="input flex flex-col w-[70%] relative">
                    <div v-show="loginError" class="bg-red-400 p-5 absolute -top-12 rounded-md w-[100%] flex justify-center">
                        <p class="font-semibold">{{ loginError }}</p>
                    </div>
                    <div class="mt-10">
                        <p>Username</p>
                        <input type="text" v-model="userState.username"
                            class="px-2 border-2 w-[100%] border-blue-400 rounded-md h-12 focus:outline-none">
                    </div>
                    <p v-if="this.v$User.username.$error" class="pl-2 text-red-600">
                        {{ this.v$User.username.$errors[0].$message }}
                    </p>
                    <div class="my-1">
                        <p>Password</p>
                        <input type="password" v-model="userState.password"
                            class="px-2 border-2 w-[100%] border-blue-400 rounded-md h-12 focus:outline-none">
                    </div>
                    <p v-if="this.v$User.password.$error" class="pl-2 text-red-600">
                        {{ this.v$User.password.$errors[0].$message }}
                    </p>
                    <button type="submit" class="w-24 h-12 rounded-lg bg-left-linear text-white font-semibold mt-5" @click="loginUser">Login</button>
                </div>
            </div>

        </div>

    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import useValidate from '@vuelidate/core'
import { required, numeric, minLength, maxLength, helpers } from '@vuelidate/validators'
import axios from 'axios';
import { reactive, computed, toRef } from "vue";

export default {
    name: 'login',
    components: { Navbar },
    setup() {
        const userState = reactive({
            username: '',
            password: ''
        })

        const userRules = computed(() => {
            return {
                username: { required },
                password: { required }
            }
        })

        const v$User = useValidate(userRules, userState)

        return {
            userState,
            v$User
        }
    },
    data() {
        return {
            username: 'gheral',
            password: 'ppp11',
            loginError : ''
        }
    },
    methods: {
        toCapitalize(string){
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        loginUser() {
            this.v$User.$validate()

        // fetch("http://localhost:2008/admin/adminLogin",{         
        //   method : "post",
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },         
        //   credentials : "include",
        //   body : JSON.stringify({
        //             username : this.userState.username,
        //             password : this.userState.password
        //   })}).then((r) => {
        //         console.log(r.data);

          
        // fetch("http://localhost:2008/admin/findAllSiswa",{         
        //   method : "get",
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },         
        //   credentials : "include",
        //   }).then(r => console.log(r))

                // this.$router.push({ path: "/" });
                // this.$toast.success("Sukses Login", {
                    // type: "success",
                    // position: "top-right",
                    // duration: 1300,
                    // dismissable: true,
                // });
            // }).catch((err) => {
                // console.log(this.loginError)
                // this.loginError = err.response.data.msg
                // this.toCapitalize(this.loginError)
                // console.log(this.loginError);
            // })
            axios({
                method: 'post',
                url: 'http://localhost:2008/admin/adminLogin',
                data: {
                    username : this.userState.username,
                    password : this.userState.password
                },
                withCredentials : true,
            }).then((r) => {
                console.log(r.data);

                this.$router.push({ path: "/" });
                this.$toast.success("Sukses Login", {
                    type: "success",
                    position: "top-right",
                    duration: 1300,
                    dismissable: true,
                });
            }).catch((err) => {
                console.log(err.response.data.msg)
                this.loginError = err.response.data.msg
                // this.toCapitalize(this.loginError)
                console.log(this.loginError);
            })
        }
    }
}
</script>