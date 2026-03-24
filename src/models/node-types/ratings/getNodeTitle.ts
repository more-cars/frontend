import type {Rating} from "./types/Rating"

export function getNodeTitle(node: Rating) {
    return `${node.fields.rating_value} / ${node.fields.scale_maximum} Points`
}
