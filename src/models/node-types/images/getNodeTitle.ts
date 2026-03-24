import type {Image} from "./types/Image"

export function getNodeTitle(node: Image) {
    return node.fields.name
}
