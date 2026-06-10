import type {LapTime} from "./types/LapTime"
import {formatDuration} from "../../../views/lib/formatDuration"

export function getNodeTitle(node: LapTime) {
    return formatDuration(node.fields.time)
}
