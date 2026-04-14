import type {TrackLayout} from "./types/TrackLayout"

export function getNodeSubTitle(node: TrackLayout) {
    const year_from = node.fields.year_from
    const year_to = node.fields.year_to
    const length = node.fields.length
    const lengthUnit = node.fields.length_unit

    const subtitleParts = []

    if (year_from && year_to) {
        subtitleParts.push(`${node.fields.year_from} - ${node.fields.year_to}`)
    }

    if (year_from && !year_to) {
        subtitleParts.push(`since ${node.fields.year_from}`)
    }

    if (!year_from && year_to) {
        subtitleParts.push(`until ${node.fields.year_to}`)
    }

    if (length) {
        subtitleParts.push(`${length} ${lengthUnit}`)
    }

    return subtitleParts.join(' | ')
}
