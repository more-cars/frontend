import type {Programme} from "./types/Programme"

export function getNodeSubTitle(node: Programme) {
    const from = node.fields.aired_from_year
    const to = node.fields.aired_until_year

    const subtitleParts = []

    if (from && to) {
        subtitleParts.push(`${from} - ${to}`)
    }

    if (from && !to) {
        subtitleParts.push(`since ${from}`)
    }

    if (!from && to) {
        subtitleParts.push(`until ${to}`)
    }

    return subtitleParts.join(' | ')
}
