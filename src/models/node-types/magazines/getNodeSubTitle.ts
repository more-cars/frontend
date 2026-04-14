import type {Magazine} from "./types/Magazine"

export function getNodeSubTitle(node: Magazine) {
    const founded = node.fields.founded
    const defunct = node.fields.defunct
    const publisher = node.fields.publisher

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

    if (publisher) {
        subtitleParts.push(publisher)
    }

    return subtitleParts.join(' | ')
}
