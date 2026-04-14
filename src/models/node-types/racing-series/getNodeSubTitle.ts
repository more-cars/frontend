import type {RacingSeries} from "./types/RacingSeries"

export function getNodeSubTitle(node: RacingSeries) {
    const shortName = node.fields.short_name
    const founded = node.fields.founded
    const defunct = node.fields.defunct

    const subtitleParts = []

    if (shortName) {
        subtitleParts.push(shortName)
    }

    if (founded && defunct) {
        subtitleParts.push(`${founded} - ${defunct}`)
    }

    if (founded && !defunct) {
        subtitleParts.push(`since ${founded}`)
    }

    if (!founded && defunct) {
        subtitleParts.push(`until ${defunct}`)
    }

    return subtitleParts.join(' | ')
}
