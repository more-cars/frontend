import type {RaceTrack} from "./types/RaceTrack"

export function getNodeSubTitle(node: RaceTrack) {
    return `${node.fields.opened} - ${node.fields.closed} | ${node.fields.location}`
}
