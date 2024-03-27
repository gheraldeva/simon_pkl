<template>
    <div class="w-[83%] bg-slate-60 fixed h-20 flex justify-end mt-[10vh] ml-64 z-30">
        <div class="w-full h-full bg-white absolute backdrop-blur-sm backdrop-invert-0 bg-white/50">
        </div>
        <div class="w-[50%] bg-white"></div>
        <img src="../assets/smknbanner.png" class="w-[50%] h-full" alt="">

        <p class=" absolute z-30 top-4 left-12 text-2xl font-semibold"><slot>Home</slot></p>
        <p class=" absolute z-30 top-11 italic left-12">Monitoring PKL Siswa SMKN 2 Mataram</p>
      </div>
</template>