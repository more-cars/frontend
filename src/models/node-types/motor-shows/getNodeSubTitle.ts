import type {MotorShow} from "./types/MotorShow"
import {formatDate} from "../../../views/lib/formatDate"

export function getNodeSubTitle(node: MotorShow) {
    const from = node.fields.date_from
    const until = node.fields.date_until

    const subtitleParts = []

    if (from && until) {
        subtitleParts.push(`${formatDate(from)} - ${formatDate(until)}`)
    }

    if (from && !until) {
        subtitleParts.push(`from ${formatDate(from)}`)
    }

    if (!from && until) {
        subtitleParts.push(`until ${formatDate(until)}`)
    }

    return subtitleParts.join(' | ')
}
