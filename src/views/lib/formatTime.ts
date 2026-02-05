import {Duration} from "luxon"

export function formatTime(isoTime: string) {
    return Duration.fromISO(isoTime)
        .toHuman()
}
