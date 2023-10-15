<template>
    <div class="grid grid-cols-7 grid-rows-6 flex-1 border-l border-t border-[rgb(218,220,224)] text-sm text-center">
        <div v-for="(computedDate, index) in computedDates" :key="index" @click="modalHandler(computedDate.cdate)"
            class="border-r border-b border-[rgb(218,220,224)] p-2 hover:bg-white/20 hover:text-white"
            :class="computedDate.cdate < computedDate.fdate || computedDate.cdate > computedDate.ldate ? 'text-white/30' : 0">
            <div class="text-emerald-500 font-semibold text-base" v-show="index < 7">{{ computedDate.day }}</div>
            <span
                :class="computedDate.currentDate ? 'text-white border border-white/80 m-auto rounded-full w-6 h-6 flex justify-center items-center bg-sky-600 text-xs' : ''"
                class="text-sm">{{ computedDate.date }}</span>
            <span class="ml-1" v-show="computedDate.date === 1">{{ computedDate.month }}</span>
        </div>
    </div>

    <CreateTaskModal />
</template>

<script setup lang="ts">
import { Ref, computed, inject, ref } from 'vue';
import { CalendarLogic } from "../utils/CalendarLogic"
import CreateTaskModal from "./CreateTaskModal.vue"
import { provide } from 'vue';

const isOpen = ref(false)
const clickedDate = ref<Ref<Date> | null>(null)

const currentMonthNumeric = inject<Ref<number>>("currentMonthNumeric")!
const currentMonthYear = inject<Ref<string>>("currentMonthYear")!

// creating calendar
const computedDates = computed(() => CalendarLogic(currentMonthNumeric, currentMonthYear))

// modal handler
const modalHandler = (clicked: Date) => {
    clickedDate.value = clicked
    isOpen.value = true
}

provide("isOpen", isOpen)
provide("clickedDate", clickedDate)


</script>
