import type {RaceTrack} from "./types/RaceTrack"

export function getNodeSubTitle(node: RaceTrack) {
    return `${node.opened} - ${node.closed} | ${node.location}`
}
