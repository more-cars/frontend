import type {SessionResult} from "./types/SessionResult"
import {ordinalize} from "inflection"

export function getNodeTitle(node: SessionResult) {
    return `${ordinalize(node.position.toString())} Place - ${node.driver_name}`
}
