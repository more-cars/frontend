import {convertDate} from "../../../views/lib/convertDate"
import type {RacingEvent} from "./types/RacingEvent"

export function getNodeSubTitle(node: RacingEvent) {
    return `${node.fields.date_from ? convertDate(node.fields.date_from) : '?'} - ${node.fields.date_to ? convertDate(node.fields.date_to) : '?'}`
}
