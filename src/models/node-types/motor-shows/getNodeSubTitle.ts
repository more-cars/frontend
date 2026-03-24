import type {MotorShow} from "./types/MotorShow"
import {convertDate} from "../../../views/lib/convertDate"

export function getNodeSubTitle(node: MotorShow) {
    return `${node.fields.date_from ? convertDate(node.fields.date_from) : '?'} until ${node.fields.date_until ? convertDate(node.fields.date_until) : '?'}`
}
