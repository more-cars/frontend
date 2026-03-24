import type {RacingSession} from "./types/RacingSession"
import {convertDate} from "../../../views/lib/convertDate"

export function getNodeSubTitle(node: RacingSession) {
    return `${node.fields.start_date ? convertDate(node.fields.start_date) : '?'} | ${node.fields.duration} ${node.fields.duration_unit}`
}
