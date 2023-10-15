<template>
	<div class="flex flex-col h-screen">
		<Navbar />
		<BigCalendar />
	</div>
</template>



<script setup lang="ts">
import { Ref, provide, ref } from "vue";
import BigCalendar from "./components/BigCalendar.vue"
import Navbar from "./components/Navbar.vue"

export interface ArrOfDatesProps {
	date: number
	day: string
	month: string
	fdate: Date
	ldate: Date
	cdate: Date
}

const currentMonthNumeric = ref(0)
const currentMonthYear: Ref<string> = ref("")

provide("currentMonthNumeric", currentMonthNumeric)
provide("currentMonthYear", currentMonthYear)


</script>
