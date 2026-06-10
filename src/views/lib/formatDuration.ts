import {Duration} from "luxon"

export function formatDuration(isoTime: string) {
    return Duration.fromISO(isoTime)
        .toHuman({unitDisplay: "short"})
}
