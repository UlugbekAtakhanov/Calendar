<template>
    <div class="py-4 px-1 flex gap-8 items-center">
        <button @click="currentMonthNumeric = 0"
            class=" border py-2 px-3 rounded-md hover:bg-gray-100 hover:text-black">Today</button>
        <div class="flex gap-5">
            <i @click="currentMonthNumeric = currentMonthNumeric - 1"
                class="fa-solid fa-chevron-left hover:text-white/50 cursor-pointer"></i>
            <i @click="currentMonthNumeric = currentMonthNumeric + 1"
                class="fa-solid fa-chevron-right hover:text-white/50 cursor-pointer"></i>
        </div>
        <h1 class="text-xl tracking-wide font-semibold">{{ currentMonthYear }}</h1>
    </div>
</template>

<script setup lang="ts">
import { Ref, inject } from 'vue';


const currentMonthNumeric = inject<Ref<number>>("currentMonthNumeric")!
const currentMonthYear = inject<Ref<string>>("currentMonthYear")!

</script>
