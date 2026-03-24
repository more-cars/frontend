import type {TrackLayout} from "./types/TrackLayout"

export function getNodeSubTitle(node: TrackLayout) {
    return `${node.length} ${node.length_unit} | ${node.year_from} - ${node.year_to}`
}
