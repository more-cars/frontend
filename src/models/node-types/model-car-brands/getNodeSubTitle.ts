import type {ModelCarBrand} from "./types/ModelCarBrand"

export function getNodeSubTitle(node: ModelCarBrand) {
    const founded = node.fields.founded
    const defunct = node.fields.defunct

    const subtitleParts = []

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
