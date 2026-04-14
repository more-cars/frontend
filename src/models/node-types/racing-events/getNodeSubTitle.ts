import {convertDate} from "../../../views/lib/convertDate"
import type {RacingEvent} from "./types/RacingEvent"

export function getNodeSubTitle(node: RacingEvent) {
    const dateFrom = node.fields.date_from
    const dateTo = node.fields.date_to
    const round = node.fields.round

    const subtitleParts = []

    if (round) {
        subtitleParts.push(`Round ${round}`)
    }

    if (dateFrom && dateTo) {
        subtitleParts.push(`${convertDate(dateFrom)} - ${convertDate(dateTo)}`)
    }

    if (dateFrom && !dateTo) {
        subtitleParts.push(`Start: ${convertDate(dateFrom)}`)
    }

    if (!dateFrom && dateTo) {
        subtitleParts.push(`End: ${convertDate(dateTo)}`)
    }

    return subtitleParts.join(' | ')
}
