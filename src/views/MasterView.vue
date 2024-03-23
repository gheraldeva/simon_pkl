<script setup>
import Navbar from "@/components/Navbar.vue";
import SideBar from "@/components/SideBar.vue";
import FalseIcon from "@/components/icons/FalseIcon.vue";
import TrueIcon from "@/components/icons/TrueIcon.vue";
import ActionButton from "@/components/icons/ActionButton.vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import SearchIcon from "@/components/icons/SearchIcon.vue";
</script>

<template>
  <div class="bg-bgcolor overflow-x-clip">
    <Navbar />
    <div class="flex">
      <SideBar />
      <div class="tabel">
        <div class="flex flex-col mt-32 mx-20 ml-96 bg-white shadow-md p-24">
          <div class="-m-1.5">
            <div class="p-1.5 min-w-full inline-block align-middle">
              <div class="flex items-center justify-between mb-10 -mx-8">
                <p class="text-center text-lg">Filter By :</p>

                <div class="dropdown">
                  <Menu as="div" class="relative inline-block text-left">
                    <div>
                      <MenuButton
                        class="inline-flex w-56 justify-between gap-x-1.5 rounded-md bg-gray-figma px-3 py-2 text-sm text-[#9B9B9B]">
                        Status: Terpenuhi
                        <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                      </MenuButton>
                    </div>

                    <transition enter-active-class="transition ease-out duration-100"
                      enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                      leave-active-class="transition ease-in duration-75"
                      leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                      <MenuItems
                        class="absolute left-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div class="py-1">
                          <MenuItem v-slot="{ active }">
                          <a href="#" :class="[
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm',
                          ]">Account settings</a>
                          </MenuItem>
                          <MenuItem v-slot="{ active }">
                          <a href="#" :class="[
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm',
                          ]">Support</a>
                          </MenuItem>
                          <MenuItem v-slot="{ active }">
                          <a href="#" :class="[
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm',
                          ]">License</a>
                          </MenuItem>
                          <form method="POST" action="#">
                            <MenuItem v-slot="{ active }">
                            <button type="submit" :class="[
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block w-full px-4 py-2 text-left text-sm',
                          ]">
                              Sign out
                            </button>
                            </MenuItem>
                          </form>
                        </div>
                      </MenuItems>
                    </transition>
                  </Menu>
                </div>

                <div class="relative">
                  <div class="rounded-md ps-3 z-20 text-sm bg-gray-figma flex justify-between items-center gap-2">
                    <SearchIcon />
                    <input type="search" id="location-search" class="bg-transparent outline-none "
                      placeholder="Cari data..." required />
                    <button type="submit"
                      class="py-2 h-full rounded-md text-sm font-medium bg-[#38A3FF] px-3 text-white bg-secol">
                      Cari
                    </button>
                  </div>
                </div>
              </div>

              <div class="overflow-hidden border-2 border-black">
                <table class="min-w-full divide-y divide-black">
                  <thead>
                    <tr class="divide-x-2 divide-black">
                      <th scope="col" class="px-4 py-2 text-start font-medium">
                        No
                      </th>
                      <th scope="col" class="px-4 py-2 text-start font-medium">
                        Nama Siswa
                      </th>
                      <th scope="col" class="px-4 py-2 text-start font-medium">
                        No. Telp
                      </th>
                      <th scope="col" class="px-4 py-2 font-medium">
                        Kelas/Jurusan
                      </th>
                      <th scope="col" class="px-4 py-2 font-medium">
                        Guru Pembimbing
                      </th>
                      <th scope="col" class="px-4 py-2 font-medium">
                        Tempat Instansi
                      </th>
                      <th scope="col" class="py-2 font-medium">Status</th>
                      <th scope="col" class="py-2 font-medium">Act</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-black">
                    <tr class="divide-x-2 divide-black">
                      <td class="px-3 font-semibold">1.</td>
                      <td class="px-4 py-1">Debra</td>
                      <td class="px-4 py-1">1784</td>
                      <td class="px-4 py-1">XII RPL 1</td>
                      <td class="px-4 py-1">Lorem S.Kom</td>
                      <td class="px-4 py-1">PT. Lorem Ipsum</td>
                      <td class="px-4 py-1">
                        <TrueIcon />
                      </td>
                      <td class="px-4 py-1 text-end">
                        <button type="button">
                          <ActionButton />
                        </button>
                      </td>
                    </tr>
                    <tr class="divide-x-2 divide-black">
                      <td class="px-3 font-semibold">2.</td>
                      <td class="px-4 py-1">Debra</td>
                      <td class="px-4 py-1">1784</td>
                      <td class="px-4 py-1">XII RPL 1</td>
                      <td class="px-4 py-1">Lorem S.Kom</td>
                      <td class="px-4 py-1">PT. Lorem Ipsum</td>
                      <td class="px-4 py-1">
                        <TrueIcon />
                      </td>
                      <td class="px-4 py-1 text-end">
                        <button type="button">
                          <ActionButton />
                        </button>
                      </td>
                    </tr>
                    <tr class="divide-x-2 divide-black">
                      <td class="px-3 font-semibold">3.</td>
                      <td class="px-4 py-1">Debra</td>
                      <td class="px-4 py-1">1784</td>
                      <td class="px-4 py-1">XII RPL 1</td>
                      <td class="px-4 py-1">Lorem S.Kom</td>
                      <td class="px-4 py-1">PT. Lorem Ipsum</td>
                      <td class="px-4 py-1">
                        <TrueIcon />
                      </td>
                      <td class="px-4 py-1 text-end">
                        <button type="button">
                          <ActionButton />
                        </button>
                      </td>
                    </tr>
                    <tr class="divide-x-2 divide-black">
                      <td class="px-3 font-semibold">1.</td>
                      <td class="px-4 py-1">Debra</td>
                      <td class="px-4 py-1">1784</td>
                      <td class="px-4 py-1">XII RPL 1</td>
                      <td class="px-4 py-1">Lorem S.Kom</td>
                      <td class="px-4 py-1">PT. Lorem Ipsum</td>
                      <td class="px-4 py-1">
                        <FalseIcon />
                      </td>
                      <td class="px-4 py-1 text-end">
                        <button type="button">
                          <ActionButton />
                        </button>
                      </td>
                    </tr>
                    <tr class="divide-x-2 divide-black">
                      <td class="px-3 font-semibold">1.</td>
                      <td class="px-4 py-1">Debra</td>
                      <td class="px-4 py-1">1784</td>
                      <td class="px-4 py-1">XII RPL 1</td>
                      <td class="px-4 py-1">Lorem S.Kom</td>
                      <td class="px-4 py-1">PT. Lorem Ipsum</td>
                      <td class="px-4 py-1">
                        <TrueIcon />
                      </td>
                      <td class="px-4 py-1 text-end">
                        <button type="button">
                          <ActionButton />
                        </button>
                      </td>
                    </tr>
                    <tr class="divide-x-2 divide-black">
                      <td class="px-3 font-semibold">1.</td>
                      <td class="px-4 py-1">Debra</td>
                      <td class="px-4 py-1">1784</td>
                      <td class="px-4 py-1">XII RPL 1</td>
                      <td class="px-4 py-1">Lorem S.Kom</td>
                      <td class="px-4 py-1">PT. Lorem Ipsum</td>
                      <td class="px-4 py-1">
                        <TrueIcon />
                      </td>
                      <td class="px-4 py-1 text-end">
                        <button type="button">
                          <ActionButton />
                        </button>
                      </td>
                    </tr>
                    <tr class="divide-x-2 divide-black">
                      <td class="px-3 font-semibold">1.</td>
                      <td class="px-4 py-1">Debra</td>
                      <td class="px-4 py-1">1784</td>
                      <td class="px-4 py-1">XII RPL 1</td>
                      <td class="px-4 py-1">Lorem S.Kom</td>
                      <td class="px-4 py-1">PT. Lorem Ipsum</td>
                      <td class="px-4 py-1">
                        <TrueIcon />
                      </td>
                      <td class="px-4 py-1 text-end">
                        <button type="button">
                          <ActionButton />
                        </button>
                      </td>
                    </tr>
                    <tr class="divide-x-2 divide-black">
                      <td class="px-3 font-semibold">1.</td>
                      <td class="px-4 py-1">Debra</td>
                      <td class="px-4 py-1">1784</td>
                      <td class="px-4 py-1">XII RPL 1</td>
                      <td class="px-4 py-1">Lorem S.Kom</td>
                      <td class="px-4 py-1">PT. Lorem Ipsum</td>
                      <td class="px-4 py-1">
                        <TrueIcon />
                      </td>
                      <td class="px-4 py-1 text-end">
                        <button type="button">
                          <ActionButton />
                        </button>
                      </td>
                    </tr>
                    <tr class="divide-x-2 divide-black">
                      <td class="px-3 font-semibold">1.</td>
                      <td class="px-4 py-1">Debra</td>
                      <td class="px-4 py-1">1784</td>
                      <td class="px-4 py-1">XII RPL 1</td>
                      <td class="px-4 py-1">Lorem S.Kom</td>
                      <td class="px-4 py-1">PT. Lorem Ipsum</td>
                      <td class="px-4 py-1">
                        <TrueIcon />
                      </td>
                      <td class="px-4 py-1 text-end">
                        <button type="button">
                          <ActionButton />
                        </button>
                      </td>
                    </tr>
                    <tr class="divide-x-2 divide-black">
                      <td class="px-3 font-semibold">1.</td>
                      <td class="px-4 py-1">Debra</td>
                      <td class="px-4 py-1">1784</td>
                      <td class="px-4 py-1">XII RPL 1</td>
                      <td class="px-4 py-1">Lorem S.Kom</td>
                      <td class="px-4 py-1">PT. Lorem Ipsum</td>
                      <td class="px-4 py-1">
                        <TrueIcon />
                      </td>
                      <td class="px-4 py-1 text-end">
                        <button type="button">
                          <ActionButton />
                        </button>
                      </td>
                    </tr>
                    <tr class="divide-x-2 divide-black">
                      <td class="px-3 font-semibold">1.</td>
                      <td class="px-4 py-1">Debra</td>
                      <td class="px-4 py-1">1784</td>
                      <td class="px-4 py-1">XII RPL 1</td>
                      <td class="px-4 py-1">Lorem S.Kom</td>
                      <td class="px-4 py-1">PT. Lorem Ipsum</td>
                      <td class="px-4 py-1">
                        <TrueIcon />
                      </td>
                      <td class="px-4 py-1 text-end">
                        <button type="button">
                          <ActionButton />
                        </button>
                      </td>
                    </tr>
                    <tr class="divide-x-2 divide-black">
                      <td class="px-3 font-semibold">1.</td>
                      <td class="px-4 py-1">Debra</td>
                      <td class="px-4 py-1">1784</td>
                      <td class="px-4 py-1">XII RPL 1</td>
                      <td class="px-4 py-1">Lorem S.Kom</td>
                      <td class="px-4 py-1">PT. Lorem Ipsum</td>
                      <td class="px-4 py-1">
                        <TrueIcon />
                      </td>
                      <td class="px-4 py-1 text-end">
                        <button type="button">
                          <ActionButton />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
