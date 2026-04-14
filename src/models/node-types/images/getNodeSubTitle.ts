import type {Image} from "./types/Image"

export function getNodeSubTitle(node: Image) {
    const license = node.fields.license
    const creator = node.fields.creator
    const provider = node.fields.image_provider

    const subtitleParts = []

    if (creator) {
        subtitleParts.push(`by ${creator}`)
    }

    if (provider) {
        subtitleParts.push(`via ${provider}`)
    }

    if (license) {
        subtitleParts.push(`license: ${license}`)
    }

    return subtitleParts.join(' | ')
}
