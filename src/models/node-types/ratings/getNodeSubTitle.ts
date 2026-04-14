import type {Rating} from "./types/Rating"

export function getNodeSubTitle(node: Rating) {
    const rating = node.fields.rating_value
    const min = node.fields.scale_minimum
    const max = node.fields.scale_maximum

    if (rating && max && min !== undefined) {
        return `≙ ${Math.round(rating / (max - min) * 100 * 100) / 100} Percent`
    }

    return ''
}
