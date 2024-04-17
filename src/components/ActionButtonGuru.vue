<template>
    <Menu as="div" class="relative inline-block text-left">
        <div>
            <MenuButton
                class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                <svg width="5" height="19" viewBox="0 0 5 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4.38462 16.8077C4.38462 17.3891 4.15364 17.9468 3.7425 18.3579C3.33137 18.769 2.77374 19 2.19231 19C1.61087 19 1.05325 18.769 0.642112 18.3579C0.230974 17.9468 0 17.3891 0 16.8077C0 16.2263 0.230974 15.6686 0.642112 15.2575C1.05325 14.8464 1.61087 14.6154 2.19231 14.6154C2.77374 14.6154 3.33137 14.8464 3.7425 15.2575C4.15364 15.6686 4.38462 16.2263 4.38462 16.8077ZM4.38462 9.5C4.38462 10.0814 4.15364 10.6391 3.7425 11.0502C3.33137 11.4613 2.77374 11.6923 2.19231 11.6923C1.61087 11.6923 1.05325 11.4613 0.642112 11.0502C0.230974 10.6391 0 10.0814 0 9.5C0 8.91856 0.230974 8.36094 0.642112 7.9498C1.05325 7.53867 1.61087 7.30769 2.19231 7.30769C2.77374 7.30769 3.33137 7.53867 3.7425 7.9498C4.15364 8.36094 4.38462 8.91856 4.38462 9.5ZM4.38462 2.19231C4.38462 2.77374 4.15364 3.33137 3.7425 3.7425C3.33137 4.15364 2.77374 4.38462 2.19231 4.38462C1.61087 4.38462 1.05325 4.15364 0.642112 3.7425C0.230974 3.33137 0 2.77374 0 2.19231C0 1.61087 0.230974 1.05325 0.642112 0.642112C1.05325 0.230975 1.61087 0 2.19231 0C2.77374 0 3.33137 0.230975 3.7425 0.642112C4.15364 1.05325 4.38462 1.61087 4.38462 2.19231Z"
                        fill="#242525" />
                </svg>
            </MenuButton>
        </div>

        <transition enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95">
            <MenuItems
                class="absolute right-7 -top-5 z-50 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-gray-200">
                <div class="py-1">
                    <MenuItem v-slot="{ active }">
                    <button @click="edit(dataguru)"
                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'px-2 py-2 text-sm']">Edit</button>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                    <button @click="hapusData(dataguru)"
                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'px-2 py-2 text-sm']">Delete</button>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                    <button @click="detailData(dataguru)"
                        :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'px-2 py-2 text-sm']">Detail</button>
                    </MenuItem>
                </div>
            </MenuItems>
        </transition>
    </Menu>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import axios from 'axios';

export default {
    name: 'actionbutton',
    components: { Menu, MenuButton, MenuItem, MenuItems },
    props: [
        'dataguru'
    ], methods: {
        hapusData(data) {
            axios.delete('http://localhost:2008/admin/deleteGuruPembimbing/' + data.id)
                .then((r) => {
                    this.$toast.success("Sukses Dihapus", {
                        type: "success",
                        position: "top-right",
                        duration: 3000,
                        dismissable: true,
                    });
                })
                .catch((err) => {
                    console.log(err.response.data.msg)
                    this.$toast.error(`${err.response.data.msg}`.toUpperCase(), {
                        type: "error",
                        position: "top-right",
                        duration: 3000,
                        dismissable: true,
                    });
                })

            // window.location.reload()


        },
        detailData(data) {
            window.location.href = `/detailguru/${data.id}`;
        },
        edit(data) {
            window.location.href = `/editguru/${data.id}`;
        },
    }
}
</script>