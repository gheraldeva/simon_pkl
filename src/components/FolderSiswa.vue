<script setup>
import FolderIcon from "@/components/icons/FolderIcon.vue";

</script>


<template>
    <div class=" w-80 h-64 bg-[#D9D9D9] rounded-md relative">
        <div class="w-80 h-28 bg-[#0275D8] rounded-md text-white px-5 py-3 relative mb-3">
            <h1 class=" font-medium text-xl">Debra</h1>
            <p class=" text-xs font-extralight">XII RPL 1</p>
            <p class=" font-medium opacity-75 text-[15px] pt-6">PT LOREM IPSUM</p>
            <button type="button">
                <div class=" absolute top-5 right-6">
                    <svg width="5" height="19" viewBox="0 0 5 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.38462 16.8077C4.38462 17.3891 4.15364 17.9468 3.7425 18.3579C3.33137 18.769 2.77374 19 2.19231 19C1.61087 19 1.05325 18.769 0.642112 18.3579C0.230974 17.9468 0 17.3891 0 16.8077C0 16.2263 0.230974 15.6686 0.642112 15.2575C1.05325 14.8464 1.61087 14.6154 2.19231 14.6154C2.77374 14.6154 3.33137 14.8464 3.7425 15.2575C4.15364 15.6686 4.38462 16.2263 4.38462 16.8077ZM4.38462 9.5C4.38462 10.0814 4.15364 10.6391 3.7425 11.0502C3.33137 11.4613 2.77374 11.6923 2.19231 11.6923C1.61087 11.6923 1.05325 11.4613 0.642112 11.0502C0.230974 10.6391 0 10.0814 0 9.5C0 8.91856 0.230974 8.36094 0.642112 7.9498C1.05325 7.53867 1.61087 7.30769 2.19231 7.30769C2.77374 7.30769 3.33137 7.53867 3.7425 7.9498C4.15364 8.36094 4.38462 8.91856 4.38462 9.5ZM4.38462 2.19231C4.38462 2.77374 4.15364 3.33137 3.7425 3.7425C3.33137 4.15364 2.77374 4.38462 2.19231 4.38462C1.61087 4.38462 1.05325 4.15364 0.642112 3.7425C0.230974 3.33137 0 2.77374 0 2.19231C0 1.61087 0.230974 1.05325 0.642112 0.642112C1.05325 0.230975 1.61087 0 2.19231 0C2.77374 0 3.33137 0.230975 3.7425 0.642112C4.15364 1.05325 4.38462 1.61087 4.38462 2.19231Z"
                            fill="#FFFFFF" />
                    </svg>
                </div>
            </button>
        </div>
        <div class=" px-5 flex flex-col gap-2">
            <p class=" text-[10px] font-medium text-[#696767]">Date : ** ** ****</p>
            <p class=" text-[#696767] text-[10px]">-NO REPORT</p>
            <FolderIcon class=" absolute bottom-5 right-6" />
        </div>

    </div>
</template>