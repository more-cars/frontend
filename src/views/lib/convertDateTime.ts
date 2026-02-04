import {DateTime} from "luxon"

export function convertDateTime(isoDate: string) {
    return DateTime.fromISO(isoDate, {zone: "utc"})
        .toLocal()
        .toLocaleString(DateTime.DATETIME_MED)
}
