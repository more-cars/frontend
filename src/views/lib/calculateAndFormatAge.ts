import {DateTime, Duration} from "luxon"

export function calculateAndFormatAge(date: string) {
    const startDate = DateTime.fromISO(date, {zone: "utc"})
    const endDate = DateTime.now()
    const diff = endDate.diff(startDate, ['years', 'months', 'weeks', 'days', 'hours'])

    if (diff.equals(Duration.fromMillis(0))) {
        return null
    }

    if (diff.toMillis() < 1000 * 60 * 60) {
        return '<1 hour'
    }

    return diff.toHuman({
        unitDisplay: "long",
        maximumFractionDigits: 0,
        showZeros: false,
    })
}
