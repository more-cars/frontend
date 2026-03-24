import type {Rating} from "./types/Rating"

export function getNodeTitle(node: Rating) {
    return `${node.rating_value} / ${node.scale_maximum}`
}
