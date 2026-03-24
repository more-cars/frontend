import {convertDate} from "../../../views/lib/convertDate"
import type {RacingEvent} from "./types/RacingEvent"

export function getNodeSubTitle(node: RacingEvent) {
    return `${node.date_from ? convertDate(node.date_from) : '?'} - ${node.date_to ? convertDate(node.date_to) : '?'}`
}
