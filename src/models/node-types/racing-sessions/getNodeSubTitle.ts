import type {RacingSession} from "./types/RacingSession"
import {convertDate} from "../../../views/lib/convertDate"

export function getNodeSubTitle(node: RacingSession) {
    const startDate = node.fields.start_date
    const duration = node.fields.duration
    const distance = node.fields.distance
    const distance_unit = node.fields.distance_unit

    const subtitleParts = []

    if (startDate) {
        subtitleParts.push(convertDate(startDate))
    }

    if (duration) {
        subtitleParts.push(`${duration}`)
    }

    if (distance) {
        subtitleParts.push(`${distance} ${distance_unit}`)
    }

    return subtitleParts.join(' | ')
}
