
import { Ref } from "vue"

export const CalendarLogic = (currentMonthNumeric: Ref<number>, currentMonthYear: Ref<string>) => {
    const date = new Date()
    const theLastSunday = new Date(date.getFullYear(), date.getMonth() + currentMonthNumeric?.value, 1).getDay() - 1

    const startDate = (d: number) => {
        return new Date(date.getFullYear(), date.getMonth() + currentMonthNumeric?.value, d)
    }
    const fdate = new Date(date.getFullYear(), date.getMonth() + (currentMonthNumeric?.value ?? 0), 1)
    const ldate = new Date(date.getFullYear(), date.getMonth() + (currentMonthNumeric?.value ?? 0) + 1, 0)

    currentMonthYear.value = fdate.toLocaleDateString("en-GB", { month: "long", year: "numeric" })

    const start = startDate(1).getDate() - 1

    let arrOfDates = []
    for (let i = start; i <= 41; i++) {
        const cdate = startDate(i - theLastSunday)
        const date = startDate(i - theLastSunday).getDate()
        const day = startDate(i - theLastSunday).toLocaleDateString("en-GB", { weekday: "short" })
        const month = startDate(i - theLastSunday).toLocaleDateString("en-GB", { month: "short" })
        const currentDate = cdate.toLocaleDateString() === new Date().toLocaleDateString()
        arrOfDates.push({ date, day, month, fdate, ldate, cdate, currentDate })
    }
    return arrOfDates
}