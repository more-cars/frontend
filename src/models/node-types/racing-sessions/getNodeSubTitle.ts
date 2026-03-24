import type {RacingSession} from "./types/RacingSession"
import {convertDate} from "../../../views/lib/convertDate"

export function getNodeSubTitle(node: RacingSession) {
    return `${node.start_date ? convertDate(node.start_date) : '?'} | ${node.duration} ${node.duration_unit}`
}
