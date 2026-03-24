import type {LapTime} from "./types/LapTime"
import {formatTimeShort} from "../../../views/lib/formatTime"

export function getNodeTitle(node: LapTime) {
    return formatTimeShort(node.time)
}
