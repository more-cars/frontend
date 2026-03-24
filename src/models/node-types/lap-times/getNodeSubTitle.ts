import type {LapTime} from "./types/LapTime"

export function getNodeSubTitle(node: LapTime) {
    return `${node.fields.driver_name}`
}
