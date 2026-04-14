import type {GamingPlatform} from "./types/GamingPlatform"

export function getNodeSubTitle(node: GamingPlatform) {
    const year = node.fields.release_year
    const manufacturer = node.fields.manufacturer

    const subtitleParts = []

    if (year) {
        subtitleParts.push(year)
    }

    if (manufacturer) {
        subtitleParts.push(manufacturer)
    }

    return subtitleParts.join(' | ')
}
