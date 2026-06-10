import {formatDate} from "../../../views/lib/formatDate"
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
        subtitleParts.push(`${formatDate(dateFrom)} - ${formatDate(dateTo)}`)
    }

    if (dateFrom && !dateTo) {
        subtitleParts.push(`Start: ${formatDate(dateFrom)}`)
    }

    if (!dateFrom && dateTo) {
        subtitleParts.push(`End: ${formatDate(dateTo)}`)
    }

    return subtitleParts.join(' | ')
}
