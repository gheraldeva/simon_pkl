<template>
    <div class="modal fixed top-0 left-0 w-[100%] h-[100%] z-40 overflow-x-hidden overflow-y-auto bg-modalbg" v-show="open">
        <div class="w-[100%] absolute h-[100%] flex justify-center items-center">
            <div class="w-[40vw] h-[50vh] bg-white rounded-lg absolute flex flex-col justify-between">
                <slot />
                <div class="flex justify-center">
                    <button type="button" @click="$emit('close')" class="w-20 relative rounded-md text-black font-semibold bg-white z-50">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props: {
        open:{
            type : Boolean,
            required :true
        }
    }
}
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
</style>