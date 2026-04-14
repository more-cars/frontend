import type {MotorShow} from "./types/MotorShow"
import {convertDate} from "../../../views/lib/convertDate"

export function getNodeSubTitle(node: MotorShow) {
    const from = node.fields.date_from
    const until = node.fields.date_until

    const subtitleParts = []

    if (from && until) {
        subtitleParts.push(`${convertDate(from)} - ${convertDate(until)}`)
    }

    if (from && !until) {
        subtitleParts.push(`from ${convertDate(from)}`)
    }

    if (!from && until) {
        subtitleParts.push(`until ${convertDate(until)}`)
    }

    return subtitleParts.join(' | ')
}
