import type {SessionResult} from "./types/SessionResult"
import {ordinalize} from "inflection"

export function getNodeTitle(node: SessionResult) {
    return `${ordinalize(node.fields.position.toString())} Place - ${node.fields.driver_name}`
}
