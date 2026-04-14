import type {RaceTrack} from "./types/RaceTrack"

export function getNodeSubTitle(node: RaceTrack) {
    const opened = node.fields.opened
    const closed = node.fields.closed
    const location = node.fields.location

    const subtitleParts = []

    if (opened && closed) {
        subtitleParts.push(`${node.fields.opened} - ${node.fields.closed}`)
    }

    if (opened && !closed) {
        subtitleParts.push(`since ${node.fields.opened}`)
    }

    if (!opened && closed) {
        subtitleParts.push(`until ${node.fields.closed}`)
    }

    if (location) {
        subtitleParts.push(node.fields.location)
    }

    return subtitleParts.join(' | ')
}
