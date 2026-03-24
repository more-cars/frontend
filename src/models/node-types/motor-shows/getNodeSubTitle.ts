import type {MotorShow} from "./types/MotorShow"
import {convertDate} from "../../../views/lib/convertDate"

export function getNodeSubTitle(node: MotorShow) {
    return `${node.date_from ? convertDate(node.date_from) : '?'} until ${node.date_until ? convertDate(node.date_until) : '?'}`
}
