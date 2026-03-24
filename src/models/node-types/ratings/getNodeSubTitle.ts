import type {Rating} from "./types/Rating"

export function getNodeSubTitle(node: Rating) {
    return `${Math.round(node.fields.rating_value / (node.fields.scale_maximum - node.fields.scale_minimum) * 100 * 100) / 100} Percent`
}
