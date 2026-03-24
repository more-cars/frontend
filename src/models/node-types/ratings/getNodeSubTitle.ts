import type {Rating} from "./types/Rating"

export function getNodeSubTitle(node: Rating) {
    return `${Math.round(node.rating_value / (node.scale_maximum - node.scale_minimum) * 100 * 100) / 100} Percent`
}
