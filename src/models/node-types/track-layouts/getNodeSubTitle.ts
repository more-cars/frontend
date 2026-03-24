import type {TrackLayout} from "./types/TrackLayout"

export function getNodeSubTitle(node: TrackLayout) {
    return `${node.fields.length} ${node.fields.length_unit} | ${node.fields.year_from} - ${node.fields.year_to}`
}
