import {DateTime} from "luxon"

export function getAge(date: string) {
    const startDate = DateTime.fromISO(date, {zone: "utc"})
    const endDate = DateTime.now()
    const diff = endDate.diff(startDate, ['years', 'months', 'weeks', 'days'])

    return diff.toHuman({unitDisplay: "long", maximumFractionDigits: 0, showZeros: false})
}
