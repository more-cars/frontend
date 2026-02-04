import {DateTime} from "luxon"

export function convertDate(isoDate: string) {
    return DateTime.fromISO(isoDate, {zone: "utc"})
        .toLocal()
        .toLocaleString(DateTime.DATE_MED)
}
